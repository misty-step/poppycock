import { chromium, expect } from "@playwright/test";
import { ConvexHttpClient } from "convex/browser";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { api } from "../convex/_generated/api.js";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const origin = process.env.POPPYCOCK_PUBLIC_ORIGIN ?? "https://poppycock.mistystep.io";
const convexUrl =
  process.env.POPPYCOCK_PUBLIC_CONVEX_URL ?? "https://fiery-spaniel-734.convex.cloud";
if (new URL(origin).protocol !== "https:") throw new Error("Public smoke requires HTTPS.");
if (convexUrl.includes("127.0.0.1") || convexUrl.includes("localhost")) {
  throw new Error("Public smoke must not use a local Convex URL.");
}
const client = new ConvexHttpClient(convexUrl);
const evidenceDirectory = process.env.POPPYCOCK_EVIDENCE_DIR ?? "evidence";
const evidence = join(root, evidenceDirectory);
await mkdir(evidence, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
});
const players = {};
const report = {
  sourceRevision: process.env.POPPYCOCK_REVISION ?? "working-tree",
  parlorRevision: JSON.parse(await readFile(join(root, "vendor/parlor/UPSTREAM.json"), "utf8"))
    .commit,
  startedAt: new Date().toISOString(),
  origin,
  convexUrl,
  rounds: [],
  checks: [],
  screenshots: [],
};

async function capture(name, filename) {
  const page = players[name].page;
  if (await page.locator(".action-dock").count()) {
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  }
  await page.screenshot({ path: join(evidence, filename), fullPage: true });
  report.screenshots.push(filename);
}

async function credentials(name) {
  return players[name].page.evaluate(() => ({
    guestToken: JSON.parse(localStorage.getItem("poppycock:credential")).token,
    roomId: localStorage.getItem("poppycock:room"),
  }));
}

async function view(name) {
  return client.query(api.game.view, await credentials(name));
}

async function joinTable(name, code) {
  const page = players[name].page;
  await page.getByRole("tab", { name: "Join table", exact: true }).click();
  await page.getByLabel("Your name").fill(name);
  await page.getByLabel("Room code").fill(code);
  await page.getByRole("button", { name: "Join table", exact: true }).click();
  await expect(page.locator(".room-code strong")).toHaveText(code);
}

async function phase(name, expected) {
  await expect.poll(async () => (await view(name))?.phase, { timeout: 30000 }).toBe(expected);
}

try {
  for (const name of ["Ada", "Bea", "Cy"]) {
    const context = await browser.newContext({
      viewport: name === "Ada" ? { width: 1440, height: 1100 } : { width: 390, height: 844 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    page.setDefaultTimeout(30000);
    players[name] = { context, page };
    await page.goto(origin);
    await expect(page.getByLabel("Your name")).toBeVisible();
  }
  report.browserSecurity = await players.Ada.page.evaluate(() => ({
    secureContext: window.isSecureContext,
    randomUuidAvailable: typeof crypto.randomUUID === "function",
    randomValuesAvailable: typeof crypto.getRandomValues === "function",
  }));
  expect(report.browserSecurity.secureContext).toBe(true);
  await capture("Ada", "public-https-front-door-desktop.png");
  await capture("Bea", "public-https-front-door-phone.png");

  await players.Ada.page.getByLabel("Your name").fill("Ada");
  await players.Ada.page.getByRole("button", { name: "Create table", exact: true }).click();
  await expect(players.Ada.page.locator(".room-code strong")).toBeVisible();
  const code = await players.Ada.page.locator(".room-code strong").innerText();
  await joinTable("Bea", code);
  await joinTable("Cy", code);
  await expect(players.Ada.page.locator(".player-row")).toHaveCount(3);
  const tokens = {};
  for (const name of ["Ada", "Bea", "Cy"]) {
    tokens[name] = (await credentials(name)).guestToken;
  }
  expect(new Set(Object.values(tokens)).size).toBe(3);
  report.checks.push(
    "Three isolated HTTPS browsers acquired distinct guest credentials and joined one room.",
  );

  await players.Ada.page.locator(".room-code").click();
  await expect(
    players.Ada.page.getByRole("img", { name: `Scan to join table ${code}` }),
  ).toBeVisible();
  await capture("Ada", "public-https-lobby-desktop.png");
  await players.Ada.page.keyboard.press("Escape");
  await players.Ada.page.getByRole("button", { name: "Start game", exact: true }).click();
  await phase("Ada", "writing");

  const writing = await view("Ada");
  expect(writing.phase).toBe("writing");
  expect(writing.options).toEqual([]);
  expect(writing.truth).toBeUndefined();
  expect(writing.source).toBeUndefined();
  await capture("Bea", "public-https-writing-phone.png");
  report.checks.push("Host started a match; writing hid truth, source, and options.");

  const bluffs = {
    Ada: "A tiny brass umbrella used by watchmakers, public HTTPS round.",
    Bea: "A ceremonial spoon for measuring the afternoon breeze, public HTTPS round.",
    Cy: "A secret handshake performed entirely with the elbows, public HTTPS round.",
  };
  for (const name of ["Ada", "Bea", "Cy"]) {
    await players[name].page.getByLabel("Your answer").fill(bluffs[name]);
    await players[name].page.getByRole("button", { name: "Submit answer", exact: true }).click();
    await expect.poll(async () => (await view(name)).submitted, { timeout: 30000 }).toBe(true);
  }
  await phase("Ada", "voting");
  const voting = await view("Ada");
  expect(voting.source).toBeUndefined();
  for (const option of voting.options) {
    expect(option.truth).toBeUndefined();
    expect(option.authors).toBeUndefined();
    expect(option.voters).toBeUndefined();
  }
  const optionText = (text) =>
    text
      .normalize("NFKC")
      .toLowerCase()
      .trim()
      .replace(/\s+/gu, " ")
      .replace(/[.!?]+$/u, "")
      .trim();
  const knownBluffs = Object.values(bluffs).map(optionText);
  const truth = voting.options.find((option) => !knownBluffs.includes(option.text));
  expect(truth).toBeDefined();
  await capture("Bea", "public-https-voting-phone.png");
  report.checks.push("All three locked bluffs; voting hid truth labels, authors, and voters.");

  async function voteFor(name, text) {
    const page = players[name].page;
    await page
      .locator("label.option")
      .filter({ hasText: optionText(text) })
      .click();
    await page.getByRole("button", { name: "Lock vote", exact: true }).click();
    await expect
      .poll(async () => (await view(name)).voted || (await view(name)).phase === "reveal", {
        timeout: 30000,
      })
      .toBe(true);
  }
  await voteFor("Ada", truth.text);
  await voteFor("Bea", bluffs.Ada);
  await voteFor("Cy", bluffs.Bea);
  await phase("Ada", "reveal");
  const reveal = await view("Ada");
  expect(optionText(reveal.truth)).toBe(truth.text);
  expect(reveal.source.url).toMatch(/^https:\/\//);
  expect(reveal.players.map((p) => p.roundPoints)).toEqual([3, 1, 0]);
  await capture("Ada", "public-https-reveal-desktop.png");
  await capture("Bea", "public-https-reveal-phone.png");
  report.rounds.push({
    round: reveal.round,
    question: reveal.prompt.question,
    category: reveal.prompt.category,
    truth: reveal.truth,
    source: reveal.source.url,
    scores: reveal.players.map((p) => ({ name: p.name, score: p.score, gained: p.roundPoints })),
  });
  report.finalScores = reveal.players.map((p) => ({ name: p.name, score: p.score }));
  report.checks.push("Reveal showed sourced truth and authoritative 3 / 1 / 0 first-round scores.");
  report.completedAt = new Date().toISOString();
  report.result = "passed";
  await writeFile(
    join(evidence, "public-https-smoke.json"),
    `${JSON.stringify(report, null, 2)}\n`,
  );
  console.log(
    JSON.stringify(
      {
        result: report.result,
        origin: report.origin,
        convexUrl: report.convexUrl,
        rounds: report.rounds.length,
        finalScores: report.finalScores,
        screenshots: report.screenshots,
        evidence: `${evidenceDirectory}/public-https-smoke.json`,
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}
