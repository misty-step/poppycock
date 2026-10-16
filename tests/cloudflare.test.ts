import { Runtime } from "@parlor/cloudflare";
import { memorySqlDriver } from "@parlor/cloudflare/testing";
import { writeConvexSnapshot, snapshotStats } from "@parlor/cloudflare/convex-zip";
import { mkdir, writeFile } from "node:fs/promises";
import type { JSONValue } from "convex/values";
import { describe, expect, it } from "vitest";
import { modules } from "../cloudflare/backend";
import schema from "../convex/schema";
import {
  exportPage,
  setWritesFrozen,
} from "../vendor/parlor/integrations/cloudflare/dist/src/snapshot";

// Synthetic authored catalog only. No credentials, network or source snapshots.
describe("Cloudflare application mapping", () => {
  it("registers every current Convex function module without a second schema", async () => {
    const sources = import.meta.glob("../convex/**/*.ts");
    const registered = [];
    for (const [path, load] of Object.entries(sources)) {
      if (path.includes("/_generated/")) continue;
      const exports = await load();
      if (
        Object.values(exports as object).some(
          (value) => value && (value.isQuery || value.isMutation || value.isAction),
        )
      ) {
        registered.push(path.replace("../convex/", "").replace(/\.ts$/, ""));
      }
    }
    expect(Object.keys(modules).sort()).toEqual(registered.sort());
  });

  it("can prepare an importable synthetic catalog with canonical checksums", async () => {
    const runtime = new Runtime(memorySqlDriver(), { schema, modules });
    const seeded = await runtime.action("seed:run", {}, null, "internal");
    expect(seeded.success).toBe(true);
    setWritesFrozen(runtime, true);
    const tables = Object.fromEntries(
      [...runtime.store.tableNumbers()].filter(([name]) => !name.startsWith("_")),
    );
    const documents = Object.fromEntries(
      Object.keys(tables).map((name) => {
        const rows: JSONValue[] = [];
        let cursor: string | null = null;
        do {
          const page = exportPage(runtime, name, cursor, 1000);
          rows.push(...page.documents);
          cursor = page.next;
        } while (cursor !== null);
        return [name, rows];
      }),
    );
    const snapshot = { tables, documents };
    const stats = await snapshotStats(snapshot);
    expect(stats.cards.count).toBe(1386);
    expect(stats.packs.count).toBe(51);
    expect(stats.players.count).toBe(0);
    const bytes = writeConvexSnapshot(snapshot);
    if (process.env.POPPYCOCK_SYNTHETIC_FIXTURE === "1") {
      await mkdir("test-results/cloudflare-fixture", { recursive: true });
      await writeFile("test-results/cloudflare-fixture/catalog.zip", bytes);
      await writeFile("test-results/cloudflare-fixture/stats.json", JSON.stringify(stats, null, 2));
    }
  });
});
