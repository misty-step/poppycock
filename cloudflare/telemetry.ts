import * as Sentry from "@sentry/cloudflare";
import type { BackendEnv, ConvexModule } from "@parlor/cloudflare";

// This is an allowlist, not a scrubber: no request, exception text/stack,
// player, room, answer, cookie, header, SQL or function argument can survive.
export function privateEvent(event: Sentry.ErrorEvent): Sentry.ErrorEvent {
  return {
    type: undefined,
    event_id: event.event_id,
    timestamp: event.timestamp,
    platform: "javascript",
    level: "error",
    message: "Poppycock backend execution failed",
    release: event.release,
    environment: event.environment,
    tags: { surface: "backend" },
    fingerprint: ["poppycock-backend-execution"],
  };
}

export function sentryOptions(env: BackendEnv): Sentry.CloudflareOptions {
  return {
    dsn: typeof env.SENTRY_DSN === "string" ? env.SENTRY_DSN : undefined,
    environment: env.SENTRY_ENVIRONMENT === "production" ? "production" : "preview",
    release: typeof env.SENTRY_RELEASE === "string" ? env.SENTRY_RELEASE : undefined,
    dataCollection: {
      userInfo: false,
      cookies: false,
      httpHeaders: false,
      httpBodies: [],
      urlQueryParams: false,
      databaseQueryData: false,
      stackFrameVariables: false,
      frameContextLines: 0,
    },
    defaultIntegrations: false,
    integrations: [Sentry.captureConsoleIntegration({ levels: ["error"] })],
    tracesSampler: () => 0,
    beforeSendLog: () => null,
    beforeSendMetric: () => null,

    maxBreadcrumbs: 0,
    beforeSend: privateEvent,
  };
}

const monitor = "poppycock-abandonment-sweep";
function checkIn(status: "ok" | "error") {
  try {
    Sentry.captureCheckIn(
      { monitorSlug: monitor, status },
      {
        schedule: { type: "interval", value: 1, unit: "minute" },
        checkinMargin: 2,
        maxRuntime: 1,
        timezone: "UTC",
        failureIssueThreshold: 1,
        recoveryThreshold: 1,
      },
    );
  } catch {
    /* Telemetry must not change a game or maintenance outcome. */
  }
}

// Observe the existing registered-function invocation ABI, not its handlers or
// validators. The unchanged Parlor adapter still owns all execution/transactions.
// Both HTTP and WebSocket calls use this same module map. Never await a sink here.
export function observedModule(module: ConvexModule, name: string): ConvexModule {
  return Object.fromEntries(
    Object.entries(module).map(([key, value]) => {
      if (typeof value !== "function") return [key, value];
      return [
        key,
        new Proxy(value, {
          get(target, property, receiver) {
            const original = Reflect.get(target, property, receiver);
            if (
              !["invokeQuery", "invokeMutation", "invokeAction"].includes(String(property)) ||
              typeof original !== "function"
            )
              return original;
            return async (...args: unknown[]) => {
              const sweep = name === "maintenance" && key === "sweepAbandoned";
              const completed = name === "maintenance" && key === "sweepCompleted";
              try {
                const result = await Reflect.apply(original, target, args);
                // The completion action can only run after the final page commits.
                // A rolled-back sweep never produces a false successful heartbeat.
                if (completed) checkIn("ok");
                return result;
              } catch (error) {
                if (sweep || completed) checkIn("error");
                // Expected game/permission rejections are ConvexError values.
                if (!(error && typeof error === "object" && "data" in error)) {
                  try {
                    Sentry.captureException(error);
                  } catch {
                    /* Preserve the original failure. */
                  }
                }
                throw error;
              }
            };
          },
        }),
      ];
    }),
  );
}
