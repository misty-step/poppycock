import { describe, expect, it } from "vitest";
import { BACKEND_BASE_PATH, browserBackendUrl } from "../lib/backend-url";

describe("backend client address", () => {
  it("uses the current host for the same built Cloudflare artifact", () => {
    expect(
      browserBackendUrl(BACKEND_BASE_PATH, "https://poppycock-backend-preview.mistystep.io"),
    ).toBe("https://poppycock-backend-preview.mistystep.io/backend");
    expect(browserBackendUrl(BACKEND_BASE_PATH, "https://poppycock.mistystep.io")).toBe(
      "https://poppycock.mistystep.io/backend",
    );
  });
  it("keeps explicit local and legacy Convex configuration intact", () => {
    for (const url of ["http://127.0.0.1:3220", "https://fiery-spaniel-734.convex.cloud"]) {
      expect(browserBackendUrl(url, "https://poppycock.mistystep.io")).toBe(url);
    }
    expect(browserBackendUrl(undefined, "http://localhost")).toBeNull();
  });
});
