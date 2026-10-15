import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import { createServer } from "node:net";
import { setTimeout as delay } from "node:timers/promises";

// No deployment or cloud credentials. Exercise the exact built Worker in workerd.
const port = await new Promise((resolve) => {
  const server = createServer();
  server.listen(0, "127.0.0.1", () => {
    const { port } = server.address();
    server.close(() => resolve(port));
  });
});
const origin = `http://127.0.0.1:${port}`;
const child = spawn(
  "pnpm",
  [
    "exec",
    "wrangler",
    "dev",
    "--port",
    String(port),
    "--ip",
    "127.0.0.1",
    "--inspector-port",
    "0",
    "--local",
  ],
  {
    stdio: ["ignore", "pipe", "pipe"],
    detached: true,
  },
);
const closed = new Promise((resolve) => child.once("close", resolve));
let output = "";
child.stdout.on("data", (data) => {
  output = (output + data).slice(-8000);
});
child.stderr.on("data", (data) => {
  output = (output + data).slice(-8000);
});
try {
  const revision = process.env.POPPYCOCK_REVISION;
  const version = JSON.parse(await readFile(".release-please-manifest.json", "utf8"))["."];
  for (let attempt = 0; ; attempt++) {
    try {
      const response = await fetch(`${origin}/health`, { signal: AbortSignal.timeout(2000) });
      assert.equal(response.status, 200);
      const health = await response.json();
      assert.equal(health.version, version);
      if (revision) assert.equal(health.revision, revision);
      assert.equal(health.backend, "fiery-spaniel-734");
      break;
    } catch (error) {
      if (attempt === 59 || child.exitCode !== null) throw error;
      await delay(1000);
    }
  }
  const home = await fetch(`${origin}/`, { signal: AbortSignal.timeout(10_000) });
  assert.equal(home.status, 200);
  assert.match(await home.text(), /Poppycock/);
  const notes = await fetch(`${origin}/changelog`, { signal: AbortSignal.timeout(10_000) });
  assert.equal(notes.status, 200);
  const notesHtml = await notes.text();
  assert.match(notesHtml, /Changelog/);
  assert.match(notesHtml, /Previously shipped updates/);
  assert.match(notesHtml, /1,386 sourced cards across 51 packs/);
  assert.doesNotMatch(notesHtml, /Unreleased/);
  console.log("Built Worker: health identity, home, and canonical notes passed in workerd.");
} catch (error) {
  console.error(output);
  throw error;
} finally {
  try {
    process.kill(-child.pid, "SIGTERM");
  } catch (error) {
    if (error.code !== "ESRCH") throw error;
  }
  await closed;
}
