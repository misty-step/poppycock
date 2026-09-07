import {
  LocalProcesses,
  WEB_URL,
  buildParlor,
  configureBackend,
  prepareLocalEnvironment,
  runInternal,
  startBackend,
} from "./local.mjs";

const processes = new LocalProcesses();
try {
  if (process.argv.length > 2)
    throw new Error(
      "Usage: pnpm bootstrap (no arguments). This only creates or updates this checkout's anonymous local deployment.",
    );
  const local = await prepareLocalEnvironment({ create: true });
  await buildParlor(processes);
  const backend = await startBackend(processes, local, { reuse: true });
  await configureBackend(processes, local, backend);
  await runInternal(processes, local, "untimedMigration:run");
  await runInternal(processes, local, "seed:run");
  console.log(
    `Local bootstrap complete. Secrets are in gitignored .env.local (mode 600). Run pnpm dev, then open ${WEB_URL}. No Convex account or cloud deployment is used.`,
  );
} catch (error) {
  if (!processes.stopping) {
    console.error(`Bootstrap failed: ${error.message}`);
    process.exitCode = 1;
  }
} finally {
  await processes.stop();
}
