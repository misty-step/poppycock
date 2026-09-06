import { createHmac } from "node:crypto";
import { verifyGuestToken } from "@parlor/auth/server";
import { Effect } from "effect";
import { afterEach, describe, expect, it, vi } from "vitest";
import { issueGuestSession } from "../lib/session";

const origin = "http://localhost:3210";
const accessSecret = Buffer.alloc(32, 0x31);
const continuitySecret = Buffer.alloc(32, 0x52);
const env = {
  NODE_ENV: "development",
  PARLOR_GUEST_TOKEN_AUDIENCE: "poppycock",
  PARLOR_GUEST_TOKEN_KEYS: JSON.stringify({ local: accessSecret.toString("base64url") }),
  POPPYCOCK_CONTINUITY_SECRET: continuitySecret.toString("base64url"),
};

function request(
  body: unknown = { mode: "acquire" },
  cookie?: string,
  requestOrigin: string | null = origin,
) {
  const headers = new Headers({ "Content-Type": "application/json" });
  if (requestOrigin !== null) headers.set("Origin", requestOrigin);
  if (cookie !== undefined) headers.set("Cookie", cookie);
  return new Request(`${origin}/api/guest`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
}

async function session(cookie?: string) {
  const response = await issueGuestSession(request({ mode: "acquire" }, cookie), env);
  expect(response.status).toBe(200);
  const body = (await response.json()) as { token: string; expiresAt: number };
  const setCookie = response.headers.get("set-cookie")!;
  const claims = await Effect.runPromise(
    verifyGuestToken(body.token, {
      keyRing: { keys: { local: accessSecret } },
      audience: "poppycock",
    }),
  );
  return { body, claims, setCookie, cookie: setCookie.split(";", 1)[0]! };
}

afterEach(() => vi.restoreAllMocks());

describe("same-origin guest issuer", () => {
  it("issues authentic fifteen-minute Parlor credentials with a thirty-day HttpOnly identity cookie", async () => {
    const issued = await session();
    const payload = issued.cookie.slice(issued.cookie.indexOf("=") + 1).split(".")[0]!;
    const continuity = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    expect(issued.claims.guestId).toBe(continuity.guestId);
    expect(issued.body.expiresAt).toBe(issued.claims.expiresAt);
    expect(issued.claims.expiresAt - issued.claims.issuedAt).toBe(15 * 60_000);
    expect(continuity.expiresAt - continuity.issuedAt).toBe(30 * 24 * 60 * 60_000);
    expect(issued.setCookie).toContain("HttpOnly");
    expect(issued.setCookie).toContain("SameSite=Lax");
    expect(issued.setCookie).not.toContain("Domain=");
  });

  it("preserves the same guest after access expiry and after a week without trusting advisory token claims", async () => {
    let now = Date.now();
    vi.spyOn(Date, "now").mockImplementation(() => now);
    const first = await session();
    now += 16 * 60_000;
    const refreshed = await issueGuestSession(
      request({ mode: "refresh", token: first.body.token }, first.cookie),
      env,
    );
    expect(refreshed.status).toBe(200);
    const second = (await refreshed.json()) as { token: string };
    const claims = await Effect.runPromise(
      verifyGuestToken(second.token, {
        keyRing: { keys: { local: accessSecret } },
        audience: "poppycock",
      }),
    );
    expect(claims.guestId).toBe(first.claims.guestId);
    now += 8 * 24 * 60 * 60_000;
    const forged = await issueGuestSession(
      request({ mode: "refresh", token: "forged.another-guests-token" }, first.cookie),
      env,
    );
    expect(forged.status).toBe(200);
    const third = (await forged.json()) as { token: string };
    const laterClaims = await Effect.runPromise(
      verifyGuestToken(third.token, {
        keyRing: { keys: { local: accessSecret } },
        audience: "poppycock",
      }),
    );
    expect(laterClaims.guestId).toBe(first.claims.guestId);
  });

  it("does not recreate a guest from an expired access proof when continuity is absent", async () => {
    const first = await session();
    vi.spyOn(Date, "now").mockReturnValue(first.body.expiresAt + 1);
    const recovered = await issueGuestSession(
      request({ mode: "acquire", token: first.body.token }),
      env,
    );
    expect(recovered.status).toBe(401);
    expect(await recovered.json()).toMatchObject({ code: "GUEST_CONTINUITY_REQUIRED" });
    expect(recovered.headers.has("set-cookie")).toBe(false);
    const emptyRefresh = await issueGuestSession(request({ mode: "refresh" }), env);
    expect(emptyRefresh.status).toBe(401);
  });

  it("rejects tampered or duplicate existing cookies instead of silently changing identity", async () => {
    const first = await session();
    const [name, value] = first.cookie.split("=") as [string, string];
    const [payload, mac] = value.split(".") as [string, string];
    const claims = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    claims.guestId = "another-guest";
    const changed = Buffer.from(JSON.stringify(claims)).toString("base64url");
    const tampered = await issueGuestSession(
      request({ mode: "acquire" }, `${name}=${changed}.${mac}`),
      env,
    );
    expect(tampered.status).toBe(401);
    expect(tampered.headers.has("set-cookie")).toBe(false);
    const duplicate = await issueGuestSession(
      request({ mode: "acquire" }, `${first.cookie}; ${first.cookie}`),
      env,
    );
    expect(duplicate.status).toBe(401);
    const empty = await issueGuestSession(request({ mode: "acquire" }, `${name}=`), env);
    expect(empty.status).toBe(401);
  });

  it("requires the continuity-specific signing key and domain", async () => {
    const first = await session();
    const [name, value] = first.cookie.split("=") as [string, string];
    const payload = value.split(".")[0]!;
    const wrongDomain = createHmac("sha256", continuitySecret).update(payload).digest("base64url");
    const wrongKey = createHmac("sha256", accessSecret)
      .update("poppycock:guest-continuity:v1\0")
      .update(payload)
      .digest("base64url");
    for (const mac of [wrongDomain, wrongKey]) {
      const result = await issueGuestSession(
        request({ mode: "acquire" }, `${name}=${payload}.${mac}`),
        env,
      );
      expect(result.status).toBe(401);
      expect(result.headers.has("set-cookie")).toBe(false);
    }
  });

  it("expires continuity at its signed bound instead of minting a replacement identity", async () => {
    const first = await session();
    vi.spyOn(Date, "now").mockReturnValue(first.claims.issuedAt + 30 * 24 * 60 * 60_000);
    const expired = await issueGuestSession(request({ mode: "acquire" }, first.cookie), env);
    expect(expired.status).toBe(401);
    expect(await expired.json()).toMatchObject({ code: "GUEST_CONTINUITY_INVALID" });
    expect(expired.headers.has("set-cookie")).toBe(false);
  });

  it("rejects cross-origin and originless requests, even with a valid continuity cookie", async () => {
    const first = await session();
    for (const otherOrigin of [null, "http://localhost:3211", "https://example.com"]) {
      const response = await issueGuestSession(
        request({ mode: "acquire" }, first.cookie, otherOrigin),
        env,
      );
      expect(response.status).toBe(403);
      expect(response.headers.has("set-cookie")).toBe(false);
    }
  });

  it("uses the actual Host destination behind Next's bind URL, never a forwarded host", async () => {
    const headers = {
      "Content-Type": "application/json",
      Host: "localhost:3210",
      Origin: origin,
      "X-Forwarded-Host": "attacker.example",
    };
    const valid = await issueGuestSession(
      new Request("http://0.0.0.0:3210/api/guest", {
        method: "POST",
        headers,
        body: JSON.stringify({ mode: "acquire" }),
      }),
      env,
    );
    expect(valid.status).toBe(200);
    const forged = await issueGuestSession(
      new Request("http://0.0.0.0:3210/api/guest", {
        method: "POST",
        headers: { ...headers, Origin: "http://attacker.example" },
        body: JSON.stringify({ mode: "acquire" }),
      }),
      env,
    );
    expect(forged.status).toBe(403);
    expect(forged.headers.has("set-cookie")).toBe(false);
  });

  it("never accepts a caller-supplied guest identity", async () => {
    const response = await issueGuestSession(request({ mode: "acquire", guestId: "victim" }), env);
    expect(response.status).toBe(400);
    expect(response.headers.has("set-cookie")).toBe(false);
  });

  it("fails closed without server configuration or with the access key reused for continuity", async () => {
    const absent = await issueGuestSession(request(), {});
    expect(absent.status).toBe(503);
    expect(await absent.json()).toMatchObject({ code: "GUEST_ISSUER_UNCONFIGURED" });
    const reused = await issueGuestSession(request(), {
      ...env,
      POPPYCOCK_CONTINUITY_SECRET: accessSecret.toString("base64url"),
    });
    expect(reused.status).toBe(503);
    expect(reused.headers.has("set-cookie")).toBe(false);
  });

  it("uses a host-bound Secure cookie in production and never caches credentials", async () => {
    const response = await issueGuestSession(request(), { ...env, NODE_ENV: "production" });
    expect(response.status).toBe(200);
    expect(response.headers.get("set-cookie")).toMatch(/^__Host-poppycock-continuity=/);
    expect(response.headers.get("set-cookie")).toContain("; Secure");
    expect(response.headers.get("set-cookie")).toContain("Path=/");
    expect(response.headers.get("cache-control")).toBe("no-store");
  });
});
