import { readdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { BACKEND_BASE_PATH } from "../lib/backend-url.ts";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const localEnv = join(root, ".env.local");
const parked = join(root, ".env.local.poppycock-cf-park");

function run(command, args, env) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: root, env, stdio: "inherit" });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(" ")} exited ${code}`));
    });
  });
}
async function disableOpenNextDebug(directory) {
  const stack = [directory];
  let patched = 0;
  while (stack.length > 0) {
    const current = stack.pop();
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const path = join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(path);
        continue;
      }
      if (!entry.name.endsWith(".js") && !entry.name.endsWith(".mjs")) continue;
      const original = await readFile(path, "utf8");
      if (!original.includes("openNextDebug = true")) continue;
      const next = original.replaceAll("openNextDebug = true", "openNextDebug = false");
      if (next.includes("openNextDebug = true")) {
        throw new Error(`${path} still enables OpenNext debug after rewrite.`);
      }
      await writeFile(path, next);
      patched += 1;
    }
  }
  if (patched === 0) throw new Error("OpenNext debug flag was not present to disable.");
}

const preview = process.argv.includes("--backend-preview");
const productionConfig = JSON.parse(await readFile(join(root, "wrangler.jsonc"), "utf8"));
const cloudflareBackend =
  preview ||
  process.argv.includes("--cloudflare-backend") ||
  productionConfig.vars.NEXT_PUBLIC_CONVEX_URL === BACKEND_BASE_PATH;
let backendUrl = productionConfig.vars.NEXT_PUBLIC_CONVEX_URL;
let backendSiteUrl = productionConfig.vars.NEXT_PUBLIC_CONVEX_SITE_URL;
if (cloudflareBackend) {
  backendUrl = BACKEND_BASE_PATH;
  backendSiteUrl = `${BACKEND_BASE_PATH}/http`;
}

const env = {
  ...process.env,
  NEXT_PUBLIC_CONVEX_URL: backendUrl,
  NEXT_PUBLIC_CONVEX_SITE_URL: backendSiteUrl,
  PARLOR_GUEST_TOKEN_AUDIENCE: "poppycock",
  // Disables OpenNext esbuild minify; Effect TypeIds are Symbols.
  OPEN_NEXT_DEBUG: "1",
};
delete env.POPPYCOCK_LOCAL;
delete env.CONVEX_DEPLOYMENT;
delete env.CONVEX_AGENT_MODE;
delete env.PARLOR_GUEST_TOKEN_KEYS;
delete env.POPPYCOCK_CONTINUITY_SECRET;

let parkedLocal = false;
try {
  try {
    await rename(localEnv, parked);
    parkedLocal = true;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  await rm(join(root, ".open-next"), { recursive: true, force: true });
  await run("pnpm", ["exec", "opennextjs-cloudflare", "build"], env);
  await disableOpenNextDebug(join(root, ".open-next"));
  // Bundle the wrapper, SDK and unchanged adapter ONCE too. Both workerd and
  // deployment use this output with no_bundle, not a second source compilation.
  const sourceConfig = {
    ...(preview
      ? JSON.parse(await readFile(join(root, "wrangler.backend-preview.jsonc"), "utf8"))
      : productionConfig),
    main: join(root, "cloudflare/worker.ts"),
    no_bundle: false,
    assets: { directory: join(root, ".open-next/assets"), binding: "ASSETS" },
  };
  const sourceConfigPath = join(root, ".open-next/source-config.json");
  await writeFile(sourceConfigPath, JSON.stringify(sourceConfig));
  await run(
    "pnpm",
    [
      "exec",
      "wrangler",
      "deploy",
      "--dry-run",
      "--config",
      sourceConfigPath,
      "--outdir",
      join(root, ".open-next/backend-bundle"),
    ],
    env,
  );
  await rm(sourceConfigPath);
  if (!process.argv.includes("--build-only")) {
    throw new Error("Deploy through CI; use --build-only to prepare the tested artifact.");
  }
} finally {
  if (parkedLocal) await rename(parked, localEnv);
}
