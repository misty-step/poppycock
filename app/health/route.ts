import versions from "../../.release-please-manifest.json";
import { BACKEND_BASE_PATH } from "../../lib/backend-url";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    status: "ok",
    version: versions["."],
    revision: process.env.POPPYCOCK_REVISION,
    backend:
      process.env.NEXT_PUBLIC_CONVEX_URL === BACKEND_BASE_PATH
        ? "cloudflare-do"
        : "fiery-spaniel-734",
  });
}
