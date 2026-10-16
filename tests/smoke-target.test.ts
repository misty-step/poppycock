import { describe, expect, it } from "vitest";
import { cloudflareLocalTarget, cloudflarePreviewTarget } from "../scripts/smoke-target.mjs";

describe("Cloudflare preview smoke isolation", () => {
  it("allows only the named isolated preview", () => {
    expect(cloudflarePreviewTarget("https://poppycock-backend-preview.mistystep.io").backend).toBe(
      "https://poppycock-backend-preview.mistystep.io/backend",
    );
  });
  it.each([
    "https://poppycock.mistystep.io",
    "https://fiery-spaniel-734.convex.cloud",
    "https://poppycock-backend-preview.mistystep.io.evil.test",
    "https://poppycock-backend-preview.mistystep.io/backend",
    "https://poppycock-backend-preview.mistystep.io/?override=1",
    "http://poppycock-backend-preview.mistystep.io",
  ])("refuses hosted gameplay outside the isolated config %s", (value) => {
    expect(() => cloudflarePreviewTarget(value)).toThrow();
  });
});

describe("Cloudflare local smoke isolation", () => {
  it("uses only a loopback frontend and its same-origin backend", () => {
    expect(cloudflareLocalTarget("http://127.0.0.1:3310")).toEqual({
      base: "http://127.0.0.1:3310",
      backend: "http://127.0.0.1:3310/backend",
    });
  });
  it.each([
    "https://poppycock.mistystep.io",
    "http://poppycock.mistystep.io",
    "http://192.168.1.50:3310",
    "http://127.0.0.1.evil.test:3310",
    "http://user:pass@127.0.0.1:3310",
    "http://127.0.0.1:3310/backend",
    "http://127.0.0.1:3310/?remote=true",
    "http://127.0.0.1:3310/#fragment",
  ])("refuses nonlocal or non-origin target %s", (value) => {
    expect(() => cloudflareLocalTarget(value)).toThrow();
  });
});
