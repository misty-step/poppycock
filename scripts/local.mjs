import { spawn } from "node:child_process";
import { randomBytes, timingSafeEqual } from "node:crypto";
import { chmod, mkdir, readFile, realpath, writeFile } from "node:fs/promises";
import { createServer } from "node:net";
import { dirname, join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";
import { parseEnv } from "node:util";

export const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
export const BACKEND_URL = "http://127.0.0.1:3220";
export const SITE_URL = "http://127.0.0.1:3221";
export const WEB_URL = "http://localhost:3210";
const ENV_FILE = join(ROOT, ".env.local");
const LOCAL_DIR = join(ROOT, ".convex");
const STATE_DIR = join(LOCAL_DIR, "local", "default");
const CONFIG_FILE = join(STATE_DIR, "config.json");
const CONTROL_FILE = join(LOCAL_DIR, "poppycock-control.env");
const SETTINGS_FILE = join(LOCAL_DIR, "poppycock-settings.env");
const CLI = join(ROOT, "node_modules", "convex", "bin", "main.js");
const REMOTE_SELECTORS = [
  "CONVEX_DEPLOY_KEY",
  "CONVEX_DEPLOYMENT_TOKEN",
  "CONVEX_SELF_HOSTED_URL",
  "CONVEX_SELF_HOSTED_ADMIN_KEY",
  "CONVEX_OVERRIDE_ACCESS_TOKEN",
  "CONVEX_PROVISION_HOST",
];

async function environmentFile(path) {
  try {
    const text = await readFile(path, "utf8");
    return { text, values: parseEnv(text) };
  } catch (error) {
    if (error.code === "ENOENT") return { text: "", values: {} };
    throw new Error(`Cannot read ${path}. Check the file's permissions and dotenv syntax.`);
  }
}

function assertLocalSelectors(values, source) {
  for (const name of REMOTE_SELECTORS) {
    if (values[name]) {
      throw new Error(
        `${source} contains ${name}. Unset it before using Poppycock's anonymous-local commands; they never select cloud or self-hosted resources.`,
      );
    }
  }
  if (
    values.CONVEX_DEPLOYMENT &&
    !/^anonymous:anonymous-[A-Za-z0-9_-]+$/.test(values.CONVEX_DEPLOYMENT)
  ) {
    throw new Error(
      `${source} selects a non-anonymous deployment. Use an isolated checkout for local play; this command will not change that deployment.`,
    );
  }
  if (values.POPPYCOCK_LOCAL && values.POPPYCOCK_LOCAL !== "true") {
    throw new Error(`${source} must set POPPYCOCK_LOCAL=true for anonymous local play.`);
  }
}

async function readLocalState(required = false) {
  try {
    if ((await realpath(STATE_DIR)) !== STATE_DIR) {
      throw new Error(
        "Local Convex state must live in this checkout, not in a symlinked directory.",
      );
    }
    const config = JSON.parse(await readFile(CONFIG_FILE, "utf8"));
    if (
      !config ||
      typeof config !== "object" ||
      typeof config.deploymentName !== "string" ||
      !/^anonymous-[A-Za-z0-9_-]+$/.test(config.deploymentName) ||
      config.cloudProjectId !== undefined ||
      config.ports?.cloud !== 3220 ||
      config.ports?.site !== 3221 ||
      typeof config.adminKey !== "string" ||
      config.adminKey.length === 0 ||
      typeof config.backendVersion !== "string" ||
      config.backendVersion.length === 0
    ) {
      throw new Error(
        "Refusing local state that is linked to a cloud project, lacks anonymous credentials, or uses ports other than 3220/3221.",
      );
    }
    return config;
  } catch (error) {
    if (error.code === "ENOENT" && !required) return null;
    if (error.code === "ENOENT")
      throw new Error("No project-local anonymous backend exists. Run pnpm bootstrap first.");
    if (error instanceof SyntaxError)
      throw new Error(
        "Local Convex config is not valid JSON. Restore .convex/local/default/config.json before proceeding.",
      );
    throw error;
  }
}

function readSecret(value, name) {
  if (typeof value !== "string" || !/^[A-Za-z0-9_-]{43,512}$/.test(value)) {
    throw new Error(
      `${name} must contain a base64url-encoded random secret of at least 32 bytes. Keep the existing value if you need to preserve guest identities.`,
    );
  }
  const bytes = Buffer.from(value, "base64url");
  if (bytes.length < 32 || bytes.toString("base64url") !== value) {
    throw new Error(`${name} is not a canonical base64url secret of at least 32 bytes.`);
  }
  return bytes;
}

function validateSigningConfiguration(values) {
  let ring;
  try {
    ring = JSON.parse(values.PARLOR_GUEST_TOKEN_KEYS);
  } catch {
    throw new Error(
      "PARLOR_GUEST_TOKEN_KEYS must be a JSON signing-key map. Run pnpm bootstrap to generate missing local keys.",
    );
  }
  if (!ring || typeof ring !== "object" || Array.isArray(ring)) {
    throw new Error("PARLOR_GUEST_TOKEN_KEYS must be a JSON signing-key map.");
  }
  const keys =
    ring.keys && typeof ring.keys === "object" && !Array.isArray(ring.keys) ? ring.keys : ring;
  const entries = Object.entries(keys).filter(([name]) => name !== "activeKeyId");
  const activeKeyId = ring.activeKeyId ?? (entries.length === 1 ? entries[0][0] : undefined);
  if (typeof activeKeyId !== "string" || !entries.some(([key]) => key === activeKeyId)) {
    throw new Error(
      "PARLOR_GUEST_TOKEN_KEYS must identify an activeKeyId when it contains multiple keys.",
    );
  }
  const continuity = readSecret(values.POPPYCOCK_CONTINUITY_SECRET, "POPPYCOCK_CONTINUITY_SECRET");
  for (const [key, value] of entries) {
    if (!/^[A-Za-z0-9_-]{1,64}$/.test(key))
      throw new Error("Guest signing key identifiers must be 1–64 URL-safe characters.");
    const access = readSecret(value, "PARLOR_GUEST_TOKEN_KEYS signing key");
    if (access.length === continuity.length && timingSafeEqual(access, continuity)) {
      throw new Error(
        "POPPYCOCK_CONTINUITY_SECRET must be different from every access-token signing key.",
      );
    }
  }
  if (values.PARLOR_GUEST_TOKEN_AUDIENCE !== "poppycock") {
    throw new Error("PARLOR_GUEST_TOKEN_AUDIENCE must be poppycock.");
  }
}

export async function prepareLocalEnvironment({ create = false } = {}) {
  assertLocalSelectors(process.env, "The shell environment");
  const fallback = await environmentFile(join(ROOT, ".env"));
  assertLocalSelectors(fallback.values, ".env");
  const local = await environmentFile(ENV_FILE);
  assertLocalSelectors(local.values, ".env.local");
  await mkdir(LOCAL_DIR, { recursive: true, mode: 0o700 });
  if ((await realpath(LOCAL_DIR)) !== LOCAL_DIR)
    throw new Error(".convex must belong to this checkout, not a symlinked directory.");
  const state = await readLocalState();
  const deployment = `anonymous:${state?.deploymentName ?? "anonymous-agent"}`;
  if (state && local.values.CONVEX_DEPLOYMENT && local.values.CONVEX_DEPLOYMENT !== deployment) {
    throw new Error(
      ".env.local and project-local Convex state select different deployments. Resolve the mismatch before proceeding.",
    );
  }
  const values = { ...local.values };
  const defaults = {
    CONVEX_DEPLOYMENT: deployment,
    CONVEX_AGENT_MODE: "anonymous",
    NEXT_PUBLIC_CONVEX_URL: BACKEND_URL,
    NEXT_PUBLIC_CONVEX_SITE_URL: SITE_URL,
    POPPYCOCK_LOCAL: "true",
    PARLOR_GUEST_TOKEN_AUDIENCE: "poppycock",
  };
  let additions = "";
  for (const [key, value] of Object.entries(defaults)) {
    if (!values[key]) {
      values[key] = value;
      additions += `${key}=${value}\n`;
    }
  }
  for (const [key, port] of [
    ["NEXT_PUBLIC_CONVEX_URL", "3220"],
    ["NEXT_PUBLIC_CONVEX_SITE_URL", "3221"],
  ]) {
    let url;
    try {
      url = new URL(values[key]);
    } catch {
      throw new Error(`${key} must be an HTTP origin on local port ${port}.`);
    }
    if (url.protocol !== "http:" || url.port !== port || url.origin !== values[key]) {
      throw new Error(
        `${key} must be an HTTP origin on port ${port}, without a path or credentials. Use this computer's LAN IP for physical phones.`,
      );
    }
  }
  if (create) {
    if (!values.PARLOR_GUEST_TOKEN_KEYS) {
      values.PARLOR_GUEST_TOKEN_KEYS = JSON.stringify({
        local: randomBytes(32).toString("base64url"),
      });
      additions += `PARLOR_GUEST_TOKEN_KEYS='${values.PARLOR_GUEST_TOKEN_KEYS}'\n`;
    }
    if (!values.POPPYCOCK_CONTINUITY_SECRET) {
      values.POPPYCOCK_CONTINUITY_SECRET = randomBytes(32).toString("base64url");
      additions += `POPPYCOCK_CONTINUITY_SECRET=${values.POPPYCOCK_CONTINUITY_SECRET}\n`;
    }
  }
  validateSigningConfiguration(values);
  if (!create && (!state || !local.values.CONVEX_DEPLOYMENT || !local.values.POPPYCOCK_LOCAL)) {
    throw new Error("Local bootstrap is incomplete. Run pnpm bootstrap first.");
  }
  if (additions) {
    const separator = local.text.length > 0 && !local.text.endsWith("\n") ? "\n" : "";
    await writeFile(ENV_FILE, `${local.text}${separator}${additions}`, { mode: 0o600 });
  }
  await chmod(ENV_FILE, 0o600);
  await mkdir(join(LOCAL_DIR, "cli-home"), { recursive: true, mode: 0o700 });
  await mkdir(join(LOCAL_DIR, "cli-cache"), { recursive: true, mode: 0o700 });
  const cliEnv = { ...process.env };
  for (const key of Object.keys(cliEnv)) {
    if (
      key.startsWith("CONVEX_") ||
      key.startsWith("PARLOR_") ||
      key.startsWith("POPPYCOCK_") ||
      key.startsWith("NEXT_PUBLIC_CONVEX_")
    )
      delete cliEnv[key];
  }
  Object.assign(cliEnv, {
    HOME: join(LOCAL_DIR, "cli-home"),
    USERPROFILE: join(LOCAL_DIR, "cli-home"),
    XDG_CACHE_HOME: join(LOCAL_DIR, "cli-cache"),
    CONVEX_AGENT_MODE: "anonymous",
    CI: "1",
    VERCEL: "0",
  });
  return { values, cliEnv, state };
}

async function ensurePortFree(port) {
  await new Promise((resolve, reject) => {
    const server = createServer();
    server.once("error", () =>
      reject(
        new Error(
          `Port ${port} is already in use. Stop the process using it; Poppycock will not take over another backend or web server.`,
        ),
      ),
    );
    server.listen(port, "0.0.0.0", () =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
  });
}

export class LocalProcesses {
  children = new Set();
  stopping = false;
  stopPromise = undefined;

  constructor() {
    this.onInterrupt = () => {
      void this.stop(130);
    };
    this.onTerminate = () => {
      void this.stop(143);
    };
    // pnpm can forward the terminal signal again while detached children are stopping.
    process.on("SIGINT", this.onInterrupt);
    process.on("SIGTERM", this.onTerminate);
  }

  start(program, args, { env = process.env, label = program } = {}) {
    if (this.stopping) throw new Error("Local shutdown is in progress.");
    const child = spawn(program, args, {
      cwd: ROOT,
      env,
      detached: process.platform !== "win32",
      stdio: ["ignore", "pipe", "pipe"],
    });
    const job = { child, label, finished: false, ready: false, output: "" };
    job.done = new Promise((resolve) => {
      child.once("error", () => {
        job.finished = true;
        this.children.delete(job);
        resolve({
          code: 1,
          error: `Cannot start ${label}. Install dependencies with pnpm install and check Node.js >=22.12.`,
        });
      });
      child.once("close", (code, signal) => {
        job.finished = true;
        this.children.delete(job);
        resolve({ code: code ?? 1, signal });
      });
    });
    const forward = (destination) => (chunk) => {
      destination.write(chunk);
      job.output = (job.output + chunk.toString("utf8")).slice(-8192);
      if (job.output.includes("Convex functions ready!")) job.ready = true;
    };
    child.stdout.on("data", forward(process.stdout));
    child.stderr.on("data", forward(process.stderr));
    this.children.add(job);
    return job;
  }

  async run(program, args, options) {
    const job = this.start(program, args, options);
    const result = await job.done;
    if (result.code !== 0)
      throw new Error(result.error ?? `${job.label} exited unsuccessfully. See its output above.`);
  }

  stop(exitCode) {
    if (this.stopPromise) return this.stopPromise;
    this.stopping = true;
    if (exitCode !== undefined) process.exitCode = exitCode;
    this.stopPromise = (async () => {
      const jobs = [...this.children];
      const signal = (job, name) => {
        if (job.finished || !job.child.pid) return;
        try {
          if (process.platform === "win32") job.child.kill(name);
          else process.kill(-job.child.pid, name);
        } catch (error) {
          if (error.code !== "ESRCH") throw error;
        }
      };
      for (const job of jobs) signal(job, "SIGINT");
      await Promise.race([
        Promise.all(jobs.map((job) => job.done)),
        delay(5000, undefined, { ref: false }),
      ]);
      for (const job of jobs) signal(job, "SIGKILL");
      await Promise.all(jobs.map((job) => job.done));
      process.removeListener("SIGINT", this.onInterrupt);
      process.removeListener("SIGTERM", this.onTerminate);
    })();
    return this.stopPromise;
  }
}

async function waitForBackend(job, expectedName) {
  const deadline = Date.now() + 180_000;
  while (Date.now() < deadline) {
    if (job?.finished) {
      const result = await job.done;
      throw new Error(
        result.error ??
          "Convex stopped before its anonymous local backend was ready. See the output above.",
      );
    }
    try {
      const response = await fetch(`${BACKEND_URL}/instance_name`, {
        signal: AbortSignal.timeout(1500),
      });
      if (response.ok) {
        const name = await response.text();
        const state = await readLocalState(true);
        if (name !== state.deploymentName || (expectedName && name !== expectedName)) {
          throw new Error(
            "Port 3220 belongs to a different deployment. Refusing to send it credentials or change its data.",
          );
        }
        return state;
      }
    } catch (error) {
      if (
        error.message?.startsWith("Port 3220") ||
        error.message?.startsWith("Refusing local state")
      )
        throw error;
    }
    await delay(250);
  }
  throw new Error(
    "Timed out starting the real local Convex backend. Check its output, ports 3220/3221, and internet access for the initial Convex binary download.",
  );
}

export async function startBackend(processes, local, { reuse = false } = {}) {
  if (reuse && local.state) {
    let response;
    try {
      response = await fetch(`${BACKEND_URL}/instance_name`, { signal: AbortSignal.timeout(1500) });
    } catch {
      /* No backend is running; start one below. */
    }
    if (response) {
      if (!response.ok || (await response.text()) !== local.state.deploymentName) {
        throw new Error(
          "Port 3220 does not belong to this anonymous local deployment. Reset refused.",
        );
      }
      return { state: local.state, job: null };
    }
  }
  await Promise.all([ensurePortFree(3220), ensurePortFree(3221)]);
  const args = [
    CLI,
    "dev",
    "--env-file",
    ENV_FILE,
    "--local-cloud-port",
    "3220",
    "--local-site-port",
    "3221",
    "--typecheck",
    "disable",
    "--tail-logs",
    "disable",
  ];
  if (local.state) args.push("--local-backend-version", local.state.backendVersion);
  const job = processes.start(process.execPath, args, {
    env: local.cliEnv,
    label: "anonymous local Convex",
  });
  const state = await waitForBackend(job, local.state?.deploymentName);
  return { state, job };
}

export async function configureBackend(processes, local, backend) {
  const state = await readLocalState(true);
  if (state.deploymentName !== backend.state.deploymentName)
    throw new Error("Local deployment changed while starting. Refusing to configure it.");
  await writeFile(
    CONTROL_FILE,
    `CONVEX_SELF_HOSTED_URL=${BACKEND_URL}\nCONVEX_SELF_HOSTED_ADMIN_KEY=${state.adminKey}\n`,
    { mode: 0o600 },
  );
  await chmod(CONTROL_FILE, 0o600);
  await writeFile(
    SETTINGS_FILE,
    [
      `PARLOR_GUEST_TOKEN_KEYS='${local.values.PARLOR_GUEST_TOKEN_KEYS}'`,
      "PARLOR_GUEST_TOKEN_AUDIENCE=poppycock",
      "POPPYCOCK_LOCAL=true",
      "",
    ].join("\n"),
    { mode: 0o600 },
  );
  await chmod(SETTINGS_FILE, 0o600);
  await processes.run(
    process.execPath,
    [CLI, "env", "set", "--from-file", SETTINGS_FILE, "--force", "--env-file", CONTROL_FILE],
    {
      env: local.cliEnv,
      label: "local Convex signing-key configuration",
    },
  );
  if (backend.job) {
    const deadline = Date.now() + 120_000;
    while (!backend.job.ready) {
      if (backend.job.finished)
        throw new Error("Convex exited before functions were deployed. See its output above.");
      if (Date.now() >= deadline)
        throw new Error(
          "Convex did not finish deploying functions. Fix the backend errors above, then rerun pnpm bootstrap.",
        );
      await delay(250);
    }
  }
  // Convex rewrites browser URLs to loopback when selecting a deployment.
  // Preserve the operator's LAN URLs so phones keep working across restarts.
  const persisted = await environmentFile(ENV_FILE);
  let text = persisted.text;
  for (const key of ["NEXT_PUBLIC_CONVEX_URL", "NEXT_PUBLIC_CONVEX_SITE_URL"]) {
    if (persisted.values[key] === local.values[key]) continue;
    const assignment = `${key}=${local.values[key]}`;
    const pattern = new RegExp(`^(?:export\\s+)?${key}\\s*=.*$`, "gm");
    text = pattern.test(text) ? text.replace(pattern, assignment) : `${text}\n${assignment}\n`;
  }
  if (text !== persisted.text) await writeFile(ENV_FILE, text, { mode: 0o600 });
}

export async function runInternal(processes, local, name) {
  if (name !== "seed:run" && name !== "seed:reset")
    throw new Error("Unsupported local maintenance command.");
  const state = await readLocalState(true);
  const response = await fetch(`${BACKEND_URL}/instance_name`, {
    signal: AbortSignal.timeout(1500),
  });
  if (!response.ok || (await response.text()) !== state.deploymentName)
    throw new Error("Local backend identity changed. Maintenance refused.");
  await processes.run(
    process.execPath,
    [CLI, "run", name, "{}", "--env-file", CONTROL_FILE, "--typecheck", "disable"],
    {
      env: local.cliEnv,
      label: name === "seed:reset" ? "local game reset" : "local content seed",
    },
  );
}

export async function startWeb(processes, local) {
  await ensurePortFree(3210);
  return processes.start(
    process.execPath,
    [
      join(ROOT, "node_modules", "next", "dist", "bin", "next"),
      "dev",
      "--hostname",
      "0.0.0.0",
      "--port",
      "3210",
    ],
    {
      env: { ...process.env, ...local.values, NODE_ENV: "development" },
      label: "Poppycock web server",
    },
  );
}

export async function buildParlor(processes) {
  await processes.run("pnpm", ["build:parlor"], { label: "vendored Parlor build" });
}
