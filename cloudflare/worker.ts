import { DurableObject } from "cloudflare:workers";
import * as Sentry from "@sentry/cloudflare";
import {
  createConvexBackend,
  forwardToBackend,
  type BackendEnv,
  type DurableObjectNamespaceLike,
} from "@parlor/cloudflare";
import nextWorker from "../.open-next/worker.js";
import { backendApp, BACKEND_BASE_PATH } from "./backend";
import { observedModule, sentryOptions } from "./telemetry";

const Backend = createConvexBackend({
  app: {
    ...backendApp,
    modules: Object.fromEntries(
      Object.entries(backendApp.modules).map(([name, load]) => [
        name,
        async () => observedModule(await load(), name),
      ]),
    ),
  },
  basePath: BACKEND_BASE_PATH,
  adminKeyBinding: "POPPYCOCK_BACKEND_ADMIN_KEY",
  redactErrors: () => true,
  deploymentName: "poppycock",
});

class BackendObject extends DurableObject<BackendEnv> {
  private readonly backend: InstanceType<typeof Backend>;
  constructor(ctx: DurableObjectState, env: BackendEnv) {
    super(ctx, env);
    this.backend = new Backend(ctx, env);
  }
  fetch(request: Request) {
    return this.backend.fetch(request);
  }
  alarm() {
    return this.backend.alarm();
  }
}
export const PoppycockBackend = Sentry.instrumentDurableObjectWithSentry(
  sentryOptions,
  BackendObject,
);

type Env = Parameters<typeof nextWorker.fetch>[1] & {
  POPPYCOCK_BACKEND: DurableObjectNamespaceLike;
  POPPYCOCK_BACKEND_ADMIN_KEY?: string;
};

const handler = {
  async fetch(request: Request, env: Env, ctx: Parameters<typeof nextWorker.fetch>[2]) {
    if (new URL(request.url).pathname === "/backend/admin/telemetry-drill") {
      if (request.method !== "POST") return new Response(null, { status: 405 });
      const gate = await forwardToBackend(
        new Request(new URL(`${BACKEND_BASE_PATH}/admin/status`, request.url), {
          headers: request.headers,
        }),
        env.POPPYCOCK_BACKEND,
        BACKEND_BASE_PATH,
      )!;
      if (!gate.ok) return new Response(null, { status: gate.status });
      // No public debug route: independently authenticated operators only.
      // Never include request content in an exception.
      throw new Error("Poppycock operator telemetry drill");
    }
    if (["GET", "HEAD"].includes(request.method) && new URL(request.url).pathname === "/health") {
      const identityRequest = new Request(request.url, { headers: request.headers, method: "GET" });
      const identity = await (await nextWorker.fetch(identityRequest, env, ctx)).json();
      if (identity === null || typeof identity !== "object" || !("backend" in identity))
        return new Response(null, { status: 503 });
      // Dormant rollout: the client is still Convex-bound. Don't pretend the
      // frozen, empty DO is its serving backend or make it a health dependency.
      if (identity.backend !== "cloudflare-do") {
        return new Response(request.method === "HEAD" ? null : JSON.stringify(identity), {
          headers: { "Cache-Control": "no-store", "Content-Type": "application/json" },
        });
      }
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
            backendReady =
              status !== null &&
              typeof status === "object" &&
              "writesFrozen" in status &&
              status.writesFrozen === false &&
              "importPending" in status &&
              status.importPending === false;
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

const rawFetch = handler.fetch;
const monitoredFrontend = Sentry.withSentry(sentryOptions, handler);
export default {
  fetch(request: Request, env: Env, ctx: Parameters<typeof nextWorker.fetch>[2]) {
    const path = new URL(request.url).pathname;
    // Sentry's automatic binding tracer rewrites upgrade requests (observed426).
    // Preserve the original request and raw namespace at this protocol boundary;
    // the destination DO owns backend error/cron instrumentation.
    if (path.startsWith(`${BACKEND_BASE_PATH}/`) && path !== "/backend/admin/telemetry-drill")
      return forwardToBackend(request, env.POPPYCOCK_BACKEND, BACKEND_BASE_PATH)!;
    if (path === "/health") return rawFetch(request, env, ctx);
    return monitoredFrontend.fetch(request, env, ctx);
  },
};
