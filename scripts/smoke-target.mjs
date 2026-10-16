import { readFileSync } from "node:fs";

export function cloudflareLocalTarget(value) {
  const url = new URL(value);
  if (
    url.protocol !== "http:" ||
    !["127.0.0.1", "localhost", "[::1]"].includes(url.hostname) ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  )
    throw new Error("Cloudflare local smoke requires a bare HTTP loopback origin.");
  return { base: url.origin, backend: `${url.origin}/backend` };
}

export function cloudflarePreviewTarget(value) {
  const config = JSON.parse(
    readFileSync(new URL("../wrangler.backend-preview.jsonc", import.meta.url), "utf8"),
  );
  const url = new URL(value);
  if (
    config.name !== "poppycock-backend-preview" ||
    config.routes.length !== 1 ||
    url.origin !== `https://${config.routes[0].pattern}` ||
    url.pathname !== "/" ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error("Hosted migration smoke is restricted to the isolated preview config.");
  }
  return { base: url.origin, backend: `${url.origin}/backend` };
}
