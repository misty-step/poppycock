import { describe, expect, it } from "vitest";
import { Runtime } from "@parlor/cloudflare";
import { memorySqlDriver } from "@parlor/cloudflare/testing";
import { backendApp } from "../cloudflare/backend";
import { observedModule, privateEvent, sentryOptions } from "../cloudflare/telemetry";

const canary = "private-player-answer-token-cookie-canary";
describe("backend telemetry privacy and invocation compatibility", () => {
  it("keeps only event identity, fixed classification, release and environment", () => {
    const event = privateEvent({
      type: undefined,
      event_id: "abc",
      timestamp: 123,
      release: "revision",
      environment: "preview",
      message: canary,
      user: { id: canary, ip_address: "192.0.2.1" },
      request: { url: `https://example.invalid/${canary}`, data: canary },
      exception: { values: [{ value: canary }] },
      breadcrumbs: [{ message: canary }],
      contexts: { private: { value: canary } },
      extra: { value: canary },
      tags: { private: canary },
    });
    expect(JSON.stringify(event)).not.toContain(canary);
    expect(event.release).toBe("revision");
    expect(event.environment).toBe("preview");
    expect(Object.keys(event).sort()).toEqual(
      [
        "type",
        "event_id",
        "timestamp",
        "platform",
        "level",
        "message",
        "release",
        "environment",
        "tags",
        "fingerprint",
      ].sort(),
    );
  });

  it("disables automatic private data, logs, metrics and sampled traces", () => {
    const options = sentryOptions({ SENTRY_ENVIRONMENT: "production", SENTRY_RELEASE: "sha" });
    expect(options.environment).toBe("production");
    expect(options.release).toBe("sha");
    expect(options.defaultIntegrations).toBe(false);
    expect(options.dataCollection?.httpBodies).toEqual([]);
    expect(options.dataCollection?.userInfo).toBe(false);
    expect(options.beforeSendLog!({} as never)).toBe(null);
    expect(options.beforeSendMetric!({} as never)).toBe(null);
    expect(options.tracesSampler!({} as never)).toBe(0);
  });

  it("preserves real registered exports, validators and internal visibility", async () => {
    const modules = Object.fromEntries(
      Object.entries(backendApp.modules).map(([name, load]) => [
        name,
        async () => observedModule(await load(), name),
      ]),
    );
    const runtime = new Runtime(memorySqlDriver(), { ...backendApp, modules });
    const seeded = await runtime.action("seed:run", {}, null, "internal");
    expect(seeded.success).toBe(true);
    expect((await runtime.action("seed:run", {}, null)).success).toBe(false);
    const sweep = await runtime.mutation("maintenance:sweepAbandoned", {}, null, {
      visibility: "internal",
    });
    expect(sweep.outcome.success).toBe(true);
    expect(
      (await runtime.mutation("rooms:createRoom", { displayName: "Denied" }, null)).outcome.success,
    ).toBe(false);
  });
});
