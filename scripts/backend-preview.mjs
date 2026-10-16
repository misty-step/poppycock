import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { BackendOperator } from "@parlor/cloudflare/operator";
import { readConvexSnapshot, snapshotStats } from "@parlor/cloudflare/convex-zip";
import { cloudflarePreviewTarget } from "./smoke-target.mjs";

// This command cannot select a production host or import a supplied data file.
const { base, backend } = cloudflarePreviewTarget(process.env.POPPYCOCK_CLOUDFLARE_PREVIEW_ORIGIN);
function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}
function run(args, env = process.env, input) {
  return new Promise((resolve, reject) => {
    const child = spawn(args[0], args.slice(1), {
      env,
      stdio: [input === undefined ? "ignore" : "pipe", "inherit", "inherit"],
    });
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(`${args[0]} exited ${code}`)),
    );
    if (input !== undefined) child.stdin.end(input);
  });
}
if (process.argv.includes("--bind-secrets")) {
  await run(
    ["pnpm", "exec", "wrangler", "secret", "bulk", "--config", "wrangler.backend-preview.jsonc"],
    process.env,
    JSON.stringify({
      POPPYCOCK_BACKEND_ADMIN_KEY: required("POPPYCOCK_PREVIEW_BACKEND_ADMIN_KEY"),
      PARLOR_GUEST_TOKEN_KEYS: required("POPPYCOCK_PREVIEW_PARLOR_GUEST_TOKEN_KEYS"),
      POPPYCOCK_CONTINUITY_SECRET: required("POPPYCOCK_PREVIEW_CONTINUITY_SECRET"),
      SENTRY_DSN: required("POPPYCOCK_SENTRY_DSN"),
      SENTRY_RELEASE: required("POPPYCOCK_REVISION"),
    }),
  );
} else {
  const report = {
    sourceRevision: required("POPPYCOCK_REVISION"),
    origin: base,
    started: new Date().toISOString(),
    checks: [],
  };
  const directory = "test-results/backend-preview";
  await mkdir(directory, { recursive: true });
  const access = {
    "CF-Access-Client-ID": required("POPPYCOCK_PREVIEW_ACCESS_CLIENT_ID"),
    "CF-Access-Client-Secret": required("POPPYCOCK_PREVIEW_ACCESS_CLIENT_SECRET"),
  };
  const adminKey = required("POPPYCOCK_PREVIEW_BACKEND_ADMIN_KEY");
  const transport = (url, init = {}) => {
    assert.equal(new URL(url).origin, base, "Preview credentials cannot leave the selected host");
    const headers = new Headers(init.headers);
    for (const [key, value] of Object.entries(access)) headers.set(key, value);
    return fetch(url, {
      ...init,
      headers,
      redirect: "manual",
      signal: AbortSignal.timeout(60_000),
    });
  };
  const op = new BackendOperator({ url: backend, adminKey, fetch: transport });
  try {
    for (const path of ["/", "/api/guest", "/backend/admin/status", "/backend/api/1.45.0/sync"]) {
      const denied = await fetch(`${base}${path}`, { redirect: "manual" });
      assert.ok([302, 401, 403].includes(denied.status), `Access must protect ${path}`);
    }
    report.checks.push(
      "Anonymous frontend, issuer, operator and WebSocket endpoints denied by Access",
    );
    assert.equal((await transport(`${backend}/admin/status`)).status, 401);
    assert.equal(
      (await transport(`${backend}/admin/status`, { headers: { Authorization: "Bearer wrong" } }))
        .status,
      401,
    );
    report.checks.push("Access verifier cannot administer without a valid backend admin key");
    const fixture = readConvexSnapshot(
      await readFile("test-results/cloudflare-fixture/catalog.zip"),
    );
    await op.freeze(true);
    assert.equal((await op.status()).runningActions, 0);
    await op.importSnapshot(fixture);
    const catalog = await snapshotStats(fixture);
    assert.deepEqual((await op.stats()).tables, catalog);
    const frozenHealth = await transport(`${base}/health`);
    assert.equal(frozenHealth.status, 503);
    assert.equal((await frozenHealth.json()).backendReady, false);
    assert.equal((await transport(`${base}/health`, { method: "HEAD" })).status, 503);
    const target = await op.bookmark();
    report.checks.push(
      "Authored synthetic catalog imports with every table number/count/digest equal",
    );
    await op.freeze(false);
    const health = await transport(`${base}/health`);
    assert.equal(health.status, 200);
    const live = await health.json();
    assert.equal(live.revision, report.sourceRevision);
    assert.equal(live.backend, "cloudflare-do");
    assert.equal(live.backendReady, true);
    assert.equal((await transport(`${base}/health`, { method: "HEAD" })).status, 200);
    report.checks.push(
      "Health identifies the exact source and detects frozen versus serving DO state",
    );
    await run(["node", "scripts/smoke.mjs"]);
    report.checks.push("Hosted six-round18/8/0 and four-player rematch browser journey passes");
    await op.freeze(true);
    assert.equal((await op.status()).runningActions, 0);
    const { snapshot, stats } = await op.exportSnapshot();
    report.tables = stats;
    for (let drill = 1; drill <= 3; drill++) {
      await op.importSnapshot(snapshot);
      assert.deepEqual((await op.stats()).tables, stats);
      assert.deepEqual((await op.exportSnapshot()).stats, stats);
      report.checks.push(
        `Default500-document restore drill${drill}: all accepted game records equal`,
      );
    }
    // Restore the earlier frozen catalog, then undo to every accepted game write.
    // Neither side accepts writes while the platform restarts the object.
    const restored = await op.restore({ bookmark: target.bookmark });
    assert.equal(restored.status.writesFrozen, true);
    assert.deepEqual((await op.stats()).tables, catalog);
    const recovered = await op.restore({ bookmark: restored.undo });
    assert.equal(recovered.status.writesFrozen, true);
    assert.deepEqual((await op.stats()).tables, stats);
    assert.deepEqual((await op.exportSnapshot()).stats, stats);
    report.checks.push(
      "Native hosted PITR restores the catalog; undo recovers all accepted game writes",
    );
    await op.freeze(false);
    assert.equal((await op.status()).writesFrozen, false);
    report.checks.push(
      "Recovery ends with exactly the preview DO writable; no Convex backend is used",
    );
    report.result = "passed";
  } catch (error) {
    report.result = "failed";
    // Only this synthetic fixture and fixed operator errors are involved; never print credentials.
    report.error = [adminKey, ...Object.values(access)].reduce(
      (message, secret) => message.replaceAll(secret, "[redacted]"),
      String(error.message),
    );
    process.exitCode = 1;
  } finally {
    report.finished = new Date().toISOString();
    await writeFile(`${directory}/recovery.json`, `${JSON.stringify(report, null, 2)}\n`);
    console.log(JSON.stringify(report, null, 2));
  }
}
