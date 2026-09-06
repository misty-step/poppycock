import { setTimeout as delay } from "node:timers/promises";
import {
  LocalProcesses,
  WEB_URL,
  buildParlor,
  configureBackend,
  prepareLocalEnvironment,
  runInternal,
  startBackend,
  startWeb,
} from "./local.mjs";

const processes = new LocalProcesses();
try {
  if (process.argv.length > 2)
    throw new Error(
      "Usage: pnpm smoke:local. Stop pnpm dev first; this command owns its own isolated local runtime.",
    );
  const local = await prepareLocalEnvironment({ create: true });
  await buildParlor(processes);
  const backend = await startBackend(processes, local);
  await configureBackend(processes, local, backend);
  await runInternal(processes, local, "seed:run");
  const web = await startWeb(processes, local);
  const deadline = Date.now() + 60_000;
  for (;;) {
    if (web.finished || backend.job.finished)
      throw new Error(
        "The local runtime exited before browser verification. See the server output above.",
      );
    try {
      const response = await fetch(WEB_URL, { signal: AbortSignal.timeout(2000) });
      if (response.ok) break;
    } catch {
      /* Keep waiting for the bounded initial Next compilation. */
    }
    if (Date.now() >= deadline) throw new Error("Poppycock did not become ready within60 seconds.");
    await delay(250);
  }
  await processes.run(process.execPath, ["scripts/smoke.mjs"], {
    label: "real multiplayer browser smoke",
  });
  console.log("Self-contained multiplayer smoke completed successfully.");
} catch (error) {
  if (!processes.stopping) {
    console.error(error.message);
    process.exitCode = 1;
  }
} finally {
  await processes.stop();
}
