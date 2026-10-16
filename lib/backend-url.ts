export const BACKEND_BASE_PATH = "/backend";

// A Cloudflare build is host-independent: the artifact verified on the isolated
// preview also works on the production host. Local Convex keeps its explicit URL.
export function browserBackendUrl(configured: string | undefined, origin: string): string | null {
  if (!configured) return null;
  return configured === BACKEND_BASE_PATH ? new URL(BACKEND_BASE_PATH, origin).href : configured;
}
