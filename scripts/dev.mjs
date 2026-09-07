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
      "Usage: pnpm dev (no arguments). Run pnpm bootstrap once before starting development.",
    );
  const local = await prepareLocalEnvironment();
  await buildParlor(processes);
  const backend = await startBackend(processes, local);
  await configureBackend(processes, local, backend);
  await runInternal(processes, local, "untimedMigration:run");
  await runInternal(processes, local, "seed:run");
  const web = await startWeb(processes, local);
  console.log(
    `Starting Poppycock at ${WEB_URL}; Convex uses ports 3220/3221. Ctrl+C stops both servers and preserves local game data.`,
  );
  const result = await Promise.race([
    backend.job.done.then((exit) => ({ ...exit, label: "Convex" })),
    web.done.then((exit) => ({ ...exit, label: "Next.js" })),
  ]);
  if (!processes.stopping)
    throw new Error(
      result.error ??
        `${result.label} stopped unexpectedly; shutting down the other server. See its output above.`,
    );
} catch (error) {
  if (!processes.stopping) {
    console.error(`Development failed: ${error.message}`);
    process.exitCode = 1;
  }
} finally {
  await processes.stop();
}
