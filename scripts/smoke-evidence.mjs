import { mkdir, mkdtemp } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

export async function createSmokeEvidence(root, kind) {
  const requested = process.env.POPPYCOCK_EVIDENCE_DIR;
  let directory;
  if (requested === undefined) {
    const parent = join(root, "test-results");
    await mkdir(parent, { recursive: true });
    directory = await mkdtemp(join(parent, `${kind}-smoke-`));
  } else {
    if (!requested.trim()) throw new Error("POPPYCOCK_EVIDENCE_DIR must name a new directory.");
    directory = resolve(root, requested);
    await mkdir(dirname(directory), { recursive: true });
    try {
      await mkdir(directory, { mode: 0o700 });
    } catch (error) {
      if (error.code !== "EEXIST") throw error;
      throw new Error(
        `Smoke evidence directory already exists: ${directory}. Choose a new POPPYCOCK_EVIDENCE_DIR; previous output is never overwritten.`,
      );
    }
  }
  console.error(`Smoke evidence directory: ${directory}`);
  return directory;
}
