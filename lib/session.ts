import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { issueGuestToken } from "@parlor/auth/server";
import { Effect } from "effect";

const AUDIENCE = "poppycock";
const ACCESS_LIFETIME_MS = 15 * 60_000;
const CONTINUITY_LIFETIME_MS = 30 * 24 * 60 * 60_000;
const COOKIE_DOMAIN = "poppycock:guest-continuity:v1\0";
const MAX_BODY_BYTES = 8192;
const ID_PATTERN = /^[a-zA-Z0-9_-]{1,128}$/;
const KEY_ID_PATTERN = /^[a-zA-Z0-9_-]{1,64}$/;
const BASE64URL_PATTERN = /^[a-zA-Z0-9_-]+$/;

type Environment = Readonly<Record<string, string | undefined>>;
type IssuerInput = { mode: "acquire" | "refresh"; token?: string };
type Continuity = {
  version: 1;
  audience: typeof AUDIENCE;
  guestId: string;
  issuedAt: number;
  expiresAt: number;
};
type SessionConfig = {
  keyId: string;
  secret: Buffer;
  continuitySecret: Buffer;
  secure: boolean;
  cookieName: string;
};

class SessionError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
  ) {
    super(message);
  }
}

function configurationError(): never {
  throw new SessionError(
    503,
    "GUEST_ISSUER_UNCONFIGURED",
    "Guest access is not configured. Run pnpm bootstrap locally, or configure the server signing keys.",
  );
}

function record(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function decodeBase64Url(value: string): Buffer | null {
  if (!BASE64URL_PATTERN.test(value)) return null;
  const decoded = Buffer.from(value, "base64url");
  return decoded.toString("base64url") === value ? decoded : null;
}

function signingSecret(value: unknown): Buffer {
  if (typeof value !== "string" || value.length > 512) configurationError();
  const decoded = decodeBase64Url(value);
  if (!decoded || decoded.length < 32) configurationError();
  return decoded;
}

function readConfig(env: Environment): SessionConfig {
  if (env.PARLOR_GUEST_TOKEN_AUDIENCE !== AUDIENCE) configurationError();
  const raw = env.PARLOR_GUEST_TOKEN_KEYS;
  if (!raw || raw.length > 16 * 1024) configurationError();
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    configurationError();
  }
  if (!record(parsed)) configurationError();
  const keys = record(parsed.keys) ? parsed.keys : parsed;
  const entries = Object.entries(keys).filter(([name]) => name !== "activeKeyId");
  if (entries.length === 0) configurationError();
  const activeKeyId = parsed.activeKeyId ?? (entries.length === 1 ? entries[0]![0] : undefined);
  if (typeof activeKeyId !== "string" || !KEY_ID_PATTERN.test(activeKeyId)) configurationError();
  const continuitySecret = signingSecret(env.POPPYCOCK_CONTINUITY_SECRET);
  let secret: Buffer | undefined;
  for (const [keyId, value] of entries) {
    if (!KEY_ID_PATTERN.test(keyId)) configurationError();
    const candidate = signingSecret(value);
    if (
      candidate.length === continuitySecret.length &&
      timingSafeEqual(candidate, continuitySecret)
    ) {
      configurationError();
    }
    if (keyId === activeKeyId) secret = candidate;
  }
  if (!secret) configurationError();
  const secure = env.NODE_ENV === "production";
  return {
    keyId: activeKeyId,
    secret,
    continuitySecret,
    secure,
    cookieName: secure ? "__Host-poppycock-continuity" : "poppycock-continuity",
  };
}

function invalidContinuity(): never {
  throw new SessionError(
    401,
    "GUEST_CONTINUITY_INVALID",
    "Your guest identity cookie is invalid or expired. Clear this site's data to deliberately start as a new guest; the previous seat cannot be recovered.",
  );
}

function signature(payload: string, secret: Buffer): Buffer {
  return createHmac("sha256", secret).update(COOKIE_DOMAIN).update(payload).digest();
}

function readContinuity(
  cookieHeader: string | null,
  config: SessionConfig,
  now: number,
): Continuity | null {
  const cookies = (cookieHeader ?? "").split(";").map((entry) => entry.trim());
  const matching = cookies.filter((entry) => entry.split("=", 1)[0] === config.cookieName);
  if (matching.length === 0) return null;
  if (matching.length !== 1) invalidContinuity();
  const cookie = matching[0]!.slice(config.cookieName.length + 1);
  if (cookie.length > 2048) invalidContinuity();
  const parts = cookie.split(".");
  if (parts.length !== 2) invalidContinuity();
  const payload = parts[0]!;
  const supplied = decodeBase64Url(parts[1]!);
  const expected = signature(payload, config.continuitySecret);
  if (!supplied || supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) {
    invalidContinuity();
  }
  const bytes = decodeBase64Url(payload);
  if (!bytes) invalidContinuity();
  let claims: unknown;
  try {
    claims = JSON.parse(bytes.toString("utf8"));
  } catch {
    invalidContinuity();
  }
  if (
    !record(claims) ||
    Object.keys(claims).length !== 5 ||
    claims.version !== 1 ||
    claims.audience !== AUDIENCE ||
    typeof claims.guestId !== "string" ||
    !ID_PATTERN.test(claims.guestId) ||
    typeof claims.issuedAt !== "number" ||
    !Number.isSafeInteger(claims.issuedAt) ||
    claims.issuedAt < 0 ||
    claims.issuedAt > now ||
    typeof claims.expiresAt !== "number" ||
    !Number.isSafeInteger(claims.expiresAt) ||
    claims.expiresAt <= now ||
    claims.expiresAt - claims.issuedAt !== CONTINUITY_LIFETIME_MS
  ) {
    invalidContinuity();
  }
  return claims as Continuity;
}

function serializeContinuity(claims: Continuity, config: SessionConfig, now: number): string {
  const payload = Buffer.from(JSON.stringify(claims)).toString("base64url");
  const value = `${payload}.${signature(payload, config.continuitySecret).toString("base64url")}`;
  return [
    `${config.cookieName}=${value}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${Math.floor((claims.expiresAt - now) / 1000)}`,
    `Expires=${new Date(claims.expiresAt).toUTCString()}`,
    ...(config.secure ? ["Secure"] : []),
  ].join("; ");
}

function invalidInput(): never {
  throw new SessionError(
    400,
    "INVALID_GUEST_REQUEST",
    "Send a guest acquire or refresh request without identity fields.",
  );
}

async function readInput(request: Request): Promise<IssuerInput> {
  if (!request.body) return { mode: "acquire" };
  if (
    request.headers.get("content-type")?.split(";", 1)[0]?.trim().toLowerCase() !==
    "application/json"
  ) {
    throw new SessionError(415, "JSON_REQUIRED", "Guest requests must use application/json.");
  }
  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf8", { fatal: true });
  let size = 0;
  let text = "";
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new SessionError(413, "GUEST_REQUEST_TOO_LARGE", "Guest request is too large.");
      }
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
  } catch (error) {
    if (error instanceof SessionError) throw error;
    invalidInput();
  } finally {
    reader.releaseLock();
  }
  if (text.length === 0) return { mode: "acquire" };
  let input: unknown;
  try {
    input = JSON.parse(text);
  } catch {
    invalidInput();
  }
  if (
    !record(input) ||
    Object.keys(input).some((key) => key !== "mode" && key !== "token") ||
    (input.mode !== "acquire" && input.mode !== "refresh") ||
    ("token" in input &&
      (typeof input.token !== "string" || input.token.length === 0 || input.token.length > 4096))
  ) {
    invalidInput();
  }
  return input as IssuerInput;
}

/** Only the signed HttpOnly cookie establishes continuity; the access token is advisory. */
export async function issueGuestSession(
  request: Request,
  env: Environment = process.env,
): Promise<Response> {
  const headers = { "Cache-Control": "no-store", Vary: "Origin, Cookie" };
  try {
    if (request.method !== "POST") {
      return Response.json(
        { code: "METHOD_NOT_ALLOWED", error: "Use POST." },
        { status: 405, headers: { ...headers, Allow: "POST" } },
      );
    }
    const requestUrl = new URL(request.url);
    // Next may reconstruct request.url with its bind address (0.0.0.0).
    // Host is the browser-controlled destination, not an untrusted forwarded host.
    const destinationHost = request.headers.get("host") ?? requestUrl.host;
    const destinationOrigin = `${requestUrl.protocol}//${destinationHost}`;
    if (request.headers.get("origin") !== destinationOrigin) {
      throw new SessionError(
        403,
        "SAME_ORIGIN_REQUIRED",
        "Guest access must be requested from this site's origin.",
      );
    }
    const config = readConfig(env);
    const input = await readInput(request);
    const now = Date.now();
    let continuity = readContinuity(request.headers.get("cookie"), config, now);
    if (!continuity) {
      if (input.mode !== "acquire" || input.token !== undefined) {
        throw new SessionError(
          401,
          "GUEST_CONTINUITY_REQUIRED",
          "The guest identity cookie is missing. An access token cannot recover the previous guest identity. Clear this site's data to deliberately start as a new guest.",
        );
      }
      continuity = {
        version: 1,
        audience: AUDIENCE,
        guestId: randomUUID(),
        issuedAt: now,
        expiresAt: now + CONTINUITY_LIFETIME_MS,
      };
    }
    const issued = await Effect.runPromise(
      issueGuestToken({
        keyId: config.keyId,
        secret: config.secret,
        audience: AUDIENCE,
        guestId: continuity.guestId,
        lifetimeMs: ACCESS_LIFETIME_MS,
        now: () => now,
      }),
    );
    return Response.json(
      { token: issued.token, expiresAt: issued.claims.expiresAt },
      { headers: { ...headers, "Set-Cookie": serializeContinuity(continuity, config, now) } },
    );
  } catch (error) {
    if (error instanceof SessionError) {
      return Response.json(
        { code: error.code, error: error.message },
        { status: error.status, headers },
      );
    }
    // Never expose token material, configuration, crypto errors, or request bodies.
    return Response.json(
      {
        code: "GUEST_ISSUER_UNAVAILABLE",
        error: "Guest access is temporarily unavailable. Please try again.",
      },
      { status: 503, headers },
    );
  }
}
