import {
  LocalProcesses,
  buildParlor,
  configureBackend,
  prepareLocalEnvironment,
  runInternal,
  startBackend,
} from "./local.mjs";

const processes = new LocalProcesses();
try {
  const args = process.argv.slice(2).filter((arg) => arg !== "--");
  if (args.length !== 1 || args[0] !== "--yes-delete-local-data") {
    throw new Error(
      "Reset deletes all games, rooms, and players in this checkout's anonymous local Convex deployment. To confirm, run: pnpm reset --yes-delete-local-data. Signing secrets and guest cookies are retained; refresh open browser tabs afterwards.",
    );
  }
  const local = await prepareLocalEnvironment();
  await buildParlor(processes);
  const backend = await startBackend(processes, local, { reuse: true });
  await configureBackend(processes, local, backend);
  await runInternal(processes, local, "seed:reset");
  await runInternal(processes, local, "seed:run");
  console.log(
    "Local game data deleted and source-backed cards reseeded. No cloud deployment was contacted. Refresh open browser tabs before playing again.",
  );
} catch (error) {
  if (!processes.stopping) {
    console.error(`Reset refused or failed: ${error.message}`);
    process.exitCode = 1;
  }
} finally {
  await processes.stop();
}
