import versions from "../../.release-please-manifest.json";

export const dynamic = "force-static";

export function GET() {
  return Response.json({
    status: "ok",
    version: versions["."],
    revision: process.env.POPPYCOCK_REVISION,
    backend: "fiery-spaniel-734",
  });
}
