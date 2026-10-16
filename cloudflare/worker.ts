import { forwardToBackend, type DurableObjectNamespaceLike } from "@parlor/cloudflare";
import nextWorker from "../.open-next/worker.js";
import { BACKEND_BASE_PATH } from "./backend";

export { PoppycockBackend } from "./backend";

type Env = Parameters<typeof nextWorker.fetch>[1] & {
  POPPYCOCK_BACKEND: DurableObjectNamespaceLike;
  POPPYCOCK_BACKEND_ADMIN_KEY?: string;
};

export default {
  async fetch(request: Request, env: Env, ctx: Parameters<typeof nextWorker.fetch>[2]) {
    if (["GET", "HEAD"].includes(request.method) && new URL(request.url).pathname === "/health") {
      const identityRequest = new Request(request.url, { headers: request.headers, method: "GET" });
      const identity = await (await nextWorker.fetch(identityRequest, env, ctx)).json();
      let backendReady = false;
      let timeout: ReturnType<typeof setTimeout> | undefined;
      try {
        if (env.POPPYCOCK_BACKEND_ADMIN_KEY) {
          const statusRequest = new Request(
            new URL(`${BACKEND_BASE_PATH}/admin/status`, request.url),
            {
              headers: { Authorization: `Bearer ${env.POPPYCOCK_BACKEND_ADMIN_KEY}` },
            },
          );
          const response = await Promise.race([
            forwardToBackend(statusRequest, env.POPPYCOCK_BACKEND, BACKEND_BASE_PATH)!,
            new Promise<never>((_, reject) => {
              timeout = setTimeout(() => reject(new Error("Backend health timeout")), 5000);
            }),
          ]);
          if (response.ok) {
            const status = await response.json();
            backendReady = status.writesFrozen === false && status.importPending === false;
          }
        }
      } catch {
        // Public health contains no admin details, records or credentials.
      } finally {
        clearTimeout(timeout);
      }
      return new Response(
        request.method === "HEAD"
          ? null
          : JSON.stringify({
              ...identity,
              status: backendReady ? "ok" : "unavailable",
              backendReady,
            }),
        {
          status: backendReady ? 200 : 503,
          headers: { "Cache-Control": "no-store", "Content-Type": "application/json" },
        },
      );
    }
    return (
      forwardToBackend(request, env.POPPYCOCK_BACKEND, BACKEND_BASE_PATH) ??
      nextWorker.fetch(request, env, ctx)
    );
  },
};
