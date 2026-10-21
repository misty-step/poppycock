#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFile, realpath, mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve, join } from "node:path";
import { connect } from "node:net";
import { parseEnv } from "node:util";
import { chromium, expect } from "@playwright/test";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api.js";
import { captureSmokeScreenshot } from "../../../../scripts/smoke-evidence.mjs";

const root = fileURLToPath(new URL("../../../../", import.meta.url));
const live = "https://poppycock.mistystep.io";
const local = "http://localhost:3210";
const [command, argument] = process.argv.slice(2);
let stage = "arguments";
let browser;
let evidence;
let evidencePage;
const report = { startedAt: new Date().toISOString(), checks: [] };
const check = (message) => report.checks.push(message);
async function json(url) {
  const response = await fetch(url, { redirect: "error", signal: AbortSignal.timeout(10000) });
  assert.equal(response.status, 200);
  return response.json();
}
async function doctor(target) {
  stage = `doctor ${target}`;
  if (target === "preflight") {
    assert.ok(Number(process.versions.node.split(".")[0]) >= 22);
    for (const port of [3210, 3220, 3221]) {
      await new Promise((resolvePort, reject) => {
        const socket = connect({ host: "127.0.0.1", port });
        socket.setTimeout(2000);
        socket.once("connect", () => {
          socket.destroy();
          reject(new Error("Occupied port"));
        });
        socket.once("timeout", () => {
          socket.destroy();
          reject(new Error("Port check timeout"));
        });
        socket.once("error", (error) =>
          error.code === "ECONNREFUSED" ? resolvePort() : reject(error),
        );
      });
    }
    await readFile(join(root, "node_modules/@playwright/test/package.json"));
    check("Node and pinned Playwright present; loopback ports 3210/3220/3221 have no listener");
    return;
  }
  assert.ok(["local", "production"].includes(target));
  const origin = target === "local" ? local : live;
  const health = await json(`${origin}/health`);
  assert.equal(health.status, "ok");
  if (target === "production") {
    assert.match(health.revision, /^[a-f0-9]{40}$/);
    assert.equal(health.backend, "cloudflare-do");
    assert.equal(health.backendReady, true);
  } else {
    const configPath = join(root, ".convex/local/default/config.json");
    assert.equal(await realpath(configPath), configPath);
    const config = JSON.parse(await readFile(configPath, "utf8"));
    const env = parseEnv(await readFile(join(root, ".env.local"), "utf8"));
    assert.equal(env.POPPYCOCK_LOCAL, "true");
    assert.match(config.deploymentName, /^anonymous-/);
    assert.equal(env.CONVEX_DEPLOYMENT, `anonymous:${config.deploymentName}`);
    assert.equal(env.NEXT_PUBLIC_CONVEX_URL, "http://127.0.0.1:3220");
    const backend = await fetch("http://127.0.0.1:3220/instance_name", {
      signal: AbortSignal.timeout(3000),
    });
    assert.equal(await backend.text(), config.deploymentName);
  }
  report.origin = origin;
  report.health = health;
  check(
    `${target} health identifies a usable target; local identity or production backend readiness checked`,
  );
}
async function capture(page, name) {
  await captureSmokeScreenshot(page, join(evidence, `${name}.png`));
  await writeFile(join(evidence, `${name}.aria.txt`), await page.locator("body").ariaSnapshot());
}
async function launch() {
  browser = await chromium.launch({
    headless: true,
    ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
  });
  return browser;
}
async function production() {
  await doctor("production");
  await launch();
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  // The production proof can issue guest sessions, but cannot send gameplay writes.
  await context.route("**/*", (route) => {
    const request = route.request();
    const url = new URL(request.url());
    return url.origin === live &&
      (["GET", "HEAD"].includes(request.method()) ||
        (url.pathname === "/api/guest" && request.method() === "POST"))
      ? route.continue()
      : route.abort();
  });
  await context.routeWebSocket("**/*", (ws) => ws.close());
  const page = await context.newPage();
  evidencePage = page;
  page.setDefaultTimeout(15000);
  stage = "production guest acquisition through rendered entrance";
  await page.goto(live);
  await expect(page.getByLabel("Your name")).toBeVisible();
  const identity = () =>
    page.evaluate(() => {
      const credential = JSON.parse(localStorage.getItem("poppycock:credential"));
      return JSON.parse(
        atob(credential.token.split(".")[2].replaceAll("-", "+").replaceAll("_", "/")),
      ).guestId;
    });
  const original = await identity();
  assert.ok(typeof original === "string" && original.length > 0);
  const cookie = (await context.cookies()).find(
    (entry) => entry.name === "__Host-poppycock-continuity",
  );
  assert.ok(cookie?.httpOnly && cookie.secure && cookie.sameSite === "Lax");
  await capture(page, "guest-entrance-phone");
  stage = "production continuity after access storage loss";
  await page.evaluate(() => localStorage.removeItem("poppycock:credential"));
  await page.reload();
  await expect(page.getByLabel("Your name")).toBeVisible();
  assert.ok((await identity()) === original);
  assert.equal(await page.evaluate(() => localStorage.getItem("poppycock:room")), null);
  check(
    "Rendered guest entrance acquires a session with Secure HttpOnly SameSite=Lax continuity; clearing access storage and reloading preserves identity; no room created",
  );
  stage = "production issuer rejection paths";
  const request = await browser.newContext();
  for (const [body, origin, expected, code] of [
    [{ mode: "refresh" }, live, 401, "GUEST_CONTINUITY_REQUIRED"],
    [{ mode: "acquire", guestId: "synthetic-forgery" }, live, 400, "INVALID_GUEST_REQUEST"],
    [{ mode: "acquire" }, "https://wrong.invalid", 403, "SAME_ORIGIN_REQUIRED"],
  ]) {
    const response = await request.request.post(`${live}/api/guest`, {
      headers: { Origin: origin },
      data: body,
    });
    assert.equal(response.status(), expected);
    assert.equal((await response.json()).code, code);
  }
  await request.addCookies([
    {
      name: "__Host-poppycock-continuity",
      value: "invalid.signature",
      url: live,
      secure: true,
      httpOnly: true,
    },
  ]);
  const tampered = await request.request.post(`${live}/api/guest`, {
    headers: { Origin: live },
    data: { mode: "acquire" },
  });
  assert.equal(tampered.status(), 401);
  assert.equal((await tampered.json()).code, "GUEST_CONTINUITY_INVALID");
  await request.close();
  check(
    "Missing continuity refresh=401; supplied identity=400; wrong origin=403; invalid signed cookie=401",
  );
  stage = "production changelog and mobile entrance";
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await page.goto(`${live}/changelog`);
  await expect(page.getByRole("heading", { name: "Changelog", exact: true })).toBeVisible();
  await capture(page, "changelog-phone");
  check("Public changelog renders; 390px entrance has no horizontal overflow");
  report.ownerSignIn =
    "n/a: no owner identity, inbox, accounts, or owner-only page; guest issuer/continuity proven, backend gameplay only local";
}
async function focused() {
  await doctor("local");
  await launch();
  const client = new ConvexHttpClient("http://127.0.0.1:3220");
  const players = [];
  for (const name of ["Iris", "Jun", "Kit"]) {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    page.setDefaultTimeout(15000);
    await page.goto(local);
    await expect(page.getByLabel("Your name")).toBeVisible();
    players.push({ context, page, name });
  }
  const host = players[0].page;
  evidencePage = host;
  const credentials = () =>
    host.evaluate(() => ({
      guestToken: JSON.parse(localStorage.getItem("poppycock:credential")).token,
      roomId: localStorage.getItem("poppycock:room"),
    }));
  const view = async () => client.query(api.game.view, await credentials());
  stage = "empty name and insufficient players";
  await host.getByRole("button", { name: "Create table", exact: true }).click();
  await expect(host.getByLabel("Your name")).toHaveAttribute("aria-invalid", "true");
  await host.getByLabel("Your name").fill("Iris");
  await host.getByRole("button", { name: "Create table", exact: true }).click();
  await expect(host.locator(".room-code strong")).toBeVisible();
  await expect(host.getByRole("button", { name: "Start game", exact: true })).toBeDisabled();
  const code = await host.locator(".room-code strong").innerText();
  check("Empty name is rejected; one-player table cannot start");
  stage = "avatar cancellation and saved persistence";
  await host.getByRole("button", { name: "Change avatar", exact: true }).click();
  const selected = await host
    .locator('[role="radio"][aria-checked="true"]')
    .getAttribute("aria-label");
  const alternative = host.locator('[role="radio"][aria-checked="false"]').first();
  const chosen = await alternative.getAttribute("aria-label");
  await alternative.click();
  await host.getByRole("button", { name: "Cancel", exact: true }).click();
  await host.getByRole("button", { name: "Change avatar", exact: true }).click();
  await expect(host.getByRole("radio", { name: selected, exact: true })).toBeChecked();
  await host.getByRole("radio", { name: chosen, exact: true }).click();
  await host.getByRole("button", { name: "Save avatar", exact: true }).click();
  await expect(host.getByRole("dialog", { name: "Choose your avatar", exact: true })).toBeHidden();
  await host.reload();
  await expect(host.locator(".player-row [data-avatar]")).toHaveAttribute("data-avatar", chosen);
  await host.getByRole("button", { name: "Change avatar", exact: true }).click();
  await expect(host.getByRole("radio", { name: chosen, exact: true })).toBeChecked();
  await capture(host, "avatar-saved-online");
  stage = "avatar offline save rejection";
  await players[0].context.setOffline(true);
  await expect(host.getByText("Reconnect to save your avatar.", { exact: true })).toBeVisible();
  await expect(host.getByRole("button", { name: "Save avatar", exact: true })).toBeDisabled();
  await capture(host, "avatar-offline");
  await players[0].context.setOffline(false);
  await host.getByRole("button", { name: "Cancel", exact: true }).click();
  await host.reload();
  check("Avatar cancel discards choice; save survives reload; offline save is disabled");
  stage = "join by code and direct invitation";
  for (const player of players.slice(1)) {
    if (player.name === "Kit") await player.page.goto(`${local}/?join=${code}`);
    else await player.page.getByRole("tab", { name: "Join table", exact: true }).click();
    await player.page.getByLabel("Your name").fill(player.name);
    await player.page.getByLabel("Room code").fill(code);
    await player.page.getByRole("button", { name: "Join table", exact: true }).click();
    await expect(player.page.locator(".room-code strong")).toHaveText(code);
  }
  await expect(host.locator(".player-row")).toHaveCount(3);
  await host.getByRole("button", { name: "Start game", exact: true }).click();
  await expect(host.locator('[data-phase="writing"]')).toBeVisible();
  await expect(
    players[1].page.getByRole("button", { name: "Host controls", exact: true }),
  ).toHaveCount(0);
  stage = "cancel and confirm host phase skips";
  await host.getByLabel("Your answer").fill("A synthetic ceremonial teacup");
  await host.getByRole("button", { name: "Submit answer", exact: true }).click();
  await expect.poll(async () => (await view()).submitted, { timeout: 15000 }).toBe(true);
  for (const [phase, action, cancel] of [
    ["writing", "End writing", "Keep writing"],
    ["voting", "Reveal answers", "Keep voting"],
  ]) {
    await host.getByRole("button", { name: "Host controls", exact: true }).click();
    await host.getByRole("menuitem", { name: action, exact: true }).click();
    await host.getByRole("button", { name: cancel, exact: true }).click();
    assert.equal((await view()).phase, phase);
    await host.getByRole("button", { name: "Host controls", exact: true }).click();
    await host.getByRole("menuitem", { name: action, exact: true }).click();
    await host.getByRole("alertdialog").getByRole("button", { name: action, exact: true }).click();
    await expect(
      host.locator(`[data-phase="${phase === "writing" ? "voting" : "reveal"}"]`),
    ).toBeVisible();
  }
  const reveal = await view();
  assert.equal(reveal.submissionCount, 1);
  assert.ok(reveal.players.every((player) => player.score === 0));
  await capture(host, "skipped-reveal");
  await players[1].page.getByRole("button", { name: "Next round", exact: true }).click();
  await expect(host.locator('[data-phase="writing"][data-round="2"]')).toBeVisible();
  check(
    "Code and invitation joins work; non-host lacks skip controls; cancellations preserve phases; confirmed skips retain one bluff and zero points for missing votes; non-host deals next round",
  );
}
try {
  assert.ok(["doctor", "production", "focused"].includes(command));
  if (command === "doctor") await doctor(argument);
  else {
    assert.ok(argument, "Evidence directory required");
    const candidate = resolve(argument);
    await mkdir(resolve(candidate, ".."), { recursive: true });
    await mkdir(candidate, { mode: 0o700 });
    evidence = candidate;
    report.sourceRevision = process.env.POPPYCOCK_REVISION ?? "working-tree";
    if (command === "production") await production();
    else await focused();
  }
  report.result = "passed";
} catch (error) {
  report.result = "failed";
  report.failedStage = stage;
  report.errorType = error.name;
  report.failedLine = Number(error.stack?.match(/control\.mjs:(\d+)/)?.[1]) || undefined;
  if (evidence && evidencePage) {
    await evidencePage
      .screenshot({ path: join(evidence, "failure.png"), timeout: 5000 })
      .catch(() => {});
    await writeFile(
      join(evidence, "failure.aria.txt"),
      await evidencePage.locator("body").ariaSnapshot(),
    ).catch(() => {});
  }
  process.exitCode = 1;
} finally {
  await browser?.close();
  report.completedAt = new Date().toISOString();
  if (evidence)
    await writeFile(join(evidence, "receipt.json"), JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify(report, null, 2));
}
