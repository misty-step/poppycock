import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";

const revision = process.env.POPPYCOCK_REVISION;
assert.match(revision ?? "", /^[a-f0-9]{40}$/);
assert.equal(execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim(), revision);
const latest = execFileSync("git", ["ls-remote", "origin", "refs/heads/master"], {
  encoding: "utf8",
}).split(/\s/)[0];
assert.equal(latest, revision, "Stale source cannot replace current master");
assert.ok(
  process.env.CONVEX_DEPLOY_KEY?.startsWith("prod:fiery-spaniel-734|"),
  "Wrong backend key",
);

const api =
  "https://api.cloudflare.com/client/v4/accounts/b069014f6a46558ea9146fb6c4ff8f6c/workers/scripts/poppycock";
async function provider(path) {
  const response = await fetch(`${api}/${path}`, {
    headers: { Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}` },
    signal: AbortSignal.timeout(30_000),
  });
  assert.ok(response.ok, `Provider read failed: ${response.status}`);
  const body = await response.json();
  assert.equal(body.success, true);
  return body.result;
}
function run(args) {
  execFileSync("pnpm", ["exec", ...args], { stdio: "inherit" });
}
const before = (await provider("deployments")).deployments[0];
assert.equal(before.versions.length, 1, "Cannot automatically restore a weighted deployment");
assert.equal(before.versions[0].percentage, 100);
const previous = before.versions[0].version_id;
const version = JSON.parse(await readFile(".release-please-manifest.json", "utf8"))["."];
const receipt = { revision, backend: "fiery-spaniel-734", previousWorkerVersion: previous };
await mkdir("test-results", { recursive: true });
let workerAttempted = false;
try {
  // Forward-compatible backend first. Never seed, migrate content, reset, or restore data.
  run([
    "convex",
    "deploy",
    "--codegen",
    "disable",
    "--typecheck",
    "disable",
    "--message",
    revision,
  ]);
  workerAttempted = true;
  run(["opennextjs-cloudflare", "deploy", "--message", revision]);
  receipt.worker = (await provider("deployments")).deployments[0];
  for (let attempt = 0; ; attempt++) {
    try {
      const health = await fetch(`https://poppycock.mistystep.io/health?release=${revision}`, {
        cache: "no-store",
        signal: AbortSignal.timeout(15_000),
      });
      assert.equal(health.status, 200);
      receipt.health = await health.json();
      assert.equal(receipt.health.revision, revision);
      assert.equal(receipt.health.version, version);
      assert.equal(receipt.health.backend, "fiery-spaniel-734");
      const home = await fetch("https://poppycock.mistystep.io/", {
        signal: AbortSignal.timeout(15_000),
      });
      assert.equal(home.status, 200);
      assert.match(await home.text(), /Poppycock/);
      const notes = await fetch("https://poppycock.mistystep.io/changelog", {
        signal: AbortSignal.timeout(15_000),
      });
      assert.equal(notes.status, 200);
      assert.ok((await notes.text()).includes(version));
      break;
    } catch (error) {
      if (attempt === 11) throw error;
      await delay(5000);
    }
  }
  receipt.result = "passed";
} catch (error) {
  receipt.result = "failed";
  if (workerAttempted) {
    // Only restore compatible client code. Keep the forward-compatible backend and all data.
    run(["wrangler", "rollback", previous, "--yes", "--message", `Failed promotion ${revision}`]);
    receipt.rollback = (await provider("deployments")).deployments[0];
    assert.equal(receipt.rollback.versions[0].version_id, previous);
    const home = await fetch("https://poppycock.mistystep.io/", {
      signal: AbortSignal.timeout(15_000),
    });
    assert.equal(home.status, 200, "Rollback HTTP verification failed");
  }
  throw error;
} finally {
  await writeFile("test-results/deployment.json", JSON.stringify(receipt, null, 2) + "\n");
}
