import { chromium, expect } from "@playwright/test";
import { ConvexHttpClient } from "convex/browser";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { parseEnv } from "node:util";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { api } from "../convex/_generated/api.js";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const local = parseEnv(await readFile(join(root, ".env.local"), "utf8"));
if (local.POPPYCOCK_LOCAL !== "true" || !local.CONVEX_DEPLOYMENT?.startsWith("anonymous:")) {
  throw new Error(
    "Smoke play is restricted to this checkout's anonymous local deployment. Run pnpm bootstrap and pnpm dev first.",
  );
}
const base = process.env.POPPYCOCK_BASE_URL ?? "http://localhost:3210";
const client = new ConvexHttpClient(local.NEXT_PUBLIC_CONVEX_URL);
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
  origin: base,
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
async function room(name) {
  return client.query(api.rooms.getRoomState, await credentials(name));
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
  await expect.poll(async () => (await view(name))?.phase, { timeout: 15000 }).toBe(expected);
}
const optionText = (text) =>
  text
    .normalize("NFKC")
    .toLowerCase()
    .trim()
    .replace(/\s+/gu, " ")
    .replace(/[.!?]+$/u, "")
    .trim();

async function voteFor(name, text) {
  const page = players[name].page;
  await page
    .locator("label.option")
    .filter({ hasText: optionText(text) })
    .click();
  await page.getByRole("button", { name: "Lock vote", exact: true }).click();
  await expect
    .poll(async () => (await view(name)).voted || (await view(name)).phase === "reveal")
    .toBe(true);
}

try {
  for (const name of ["Ada", "Bea", "Cy", "Dax"]) {
    const context = await browser.newContext({
      viewport: name === "Ada" ? { width: 1440, height: 1100 } : { width: 390, height: 844 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    page.setDefaultTimeout(15000);
    players[name] = { context, page };
    await page.goto(base);
    await expect(page.getByLabel("Your name")).toBeVisible();
  }
  report.browserSecurity = await players.Ada.page.evaluate(() => ({
    secureContext: window.isSecureContext,
    randomUuidAvailable: typeof crypto.randomUUID === "function",
    randomValuesAvailable: typeof crypto.getRandomValues === "function",
  }));
  await capture("Ada", "front-door-desktop.png");
  await capture("Bea", "front-door-phone.png");
  await players.Ada.page.getByLabel("Your name").fill("Ada");
  await players.Ada.page.getByRole("button", { name: "Create table", exact: true }).click();
  await expect(players.Ada.page.locator(".room-code strong")).toBeVisible();
  const code = await players.Ada.page.locator(".room-code strong").innerText();
  await joinTable("Bea", code);
  await joinTable("Cy", code);
  await expect(players.Ada.page.locator(".player-row")).toHaveCount(3);
  const initialIds = {};
  for (const name of ["Ada", "Bea", "Cy"]) initialIds[name] = (await room(name)).viewerPlayerId;
  expect(new Set(Object.values(initialIds)).size).toBe(3);
  await players.Ada.page.locator(".room-code").click();
  await expect(
    players.Ada.page.getByRole("img", { name: `Scan to join table ${code}` }),
  ).toBeVisible();
  await capture("Ada", "lobby-desktop.png");
  await players.Ada.page.keyboard.press("Escape");
  report.checks.push(
    "Three independent guest identities join by code; real Parlor QR invitation renders in the lobby.",
  );
  await players.Ada.page.getByRole("button", { name: "Start game", exact: true }).click();
  await phase("Ada", "writing");
  const questions = new Set();
  let host = "Ada";
  let savedGameId;
  for (let round = 1; round <= 6; round += 1) {
    const writing = await view("Ada");
    expect(writing.round).toBe(round);
    expect(writing.phase).toBe("writing");
    expect(questions.has(writing.prompt.question)).toBe(false);
    questions.add(writing.prompt.question);
    savedGameId = writing.gameId;
    expect(writing.options).toEqual([]);
    expect(writing.truth).toBeUndefined();
    expect(writing.source).toBeUndefined();
    if (round === 1) {
      await expect(
        players.Bea.page.getByRole("textbox", { name: "Your answer", exact: true }),
      ).toBeVisible();
      await capture("Bea", "writing-phone.png");
      await expect(
        client.query(api.game.view, { roomId: (await credentials("Ada")).roomId }),
      ).rejects.toThrow();
      report.checks.push(
        "Unauthenticated room game read rejected; writing hides truth, source, and options.",
      );
    }
    if (round === 4) {
      await joinTable("Dax", code);
      const spectator = await view("Dax");
      expect(spectator.participant).toBe(false);
      await expect(
        players.Dax.page.getByRole("textbox", { name: "Your answer", exact: true }),
      ).toHaveCount(0);
      await expect(
        client.mutation(api.game.submit, {
          gameId: savedGameId,
          round,
          guestToken: (await credentials("Dax")).guestToken,
          text: "An unauthorized spectator bluff",
        }),
      ).rejects.toThrow("MATCH_PARTICIPANT_REQUIRED");
      report.checks.push(
        "Late joiner can watch but cannot submit; immutable three-player eligibility preserved.",
      );
      await players.Cy.context.setOffline(true);
      await expect(
        players.Cy.page.getByText("Reconnecting. Keep this page open", { exact: false }),
      ).toBeVisible({ timeout: 15000 });
      await capture("Cy", "offline-phone.png");
      await players.Cy.context.setOffline(false);
      await players.Cy.page.reload();
      await expect(
        players.Cy.page.getByRole("textbox", { name: "Your answer", exact: true }),
      ).toBeVisible();
      expect((await room("Cy")).viewerPlayerId).toBe(initialIds.Cy);
      report.checks.push(
        "Phone network interruption and reload preserve the same player and current turn.",
      );
    }
    const bluffs =
      round === 2
        ? {
            Ada: "A small clock operated by beetles.",
            Bea: "A small clock operated by beetles.",
            Cy: "A ceremonial hat for the town's shortest person.",
          }
        : {
            Ada: `A tiny brass umbrella used by watchmakers, variation ${round}.`,
            Bea: `A ceremonial spoon for measuring the afternoon breeze, variation ${round}.`,
            Cy: `A secret handshake performed entirely with the elbows, variation ${round}.`,
          };
    for (const name of ["Ada", "Bea", "Cy"]) {
      await players[name].page.getByLabel("Your answer").fill(bluffs[name]);
      await players[name].page.getByRole("button", { name: "Submit answer", exact: true }).click();
      await expect.poll(async () => (await view(name)).submitted).toBe(true);
    }
    await phase("Ada", "voting");
    const voting = await view("Ada");
    expect(voting.source).toBeUndefined();
    for (const option of voting.options) {
      expect(option.truth).toBeUndefined();
      expect(option.authors).toBeUndefined();
      expect(option.voters).toBeUndefined();
    }
    const knownBluffs = Object.values(bluffs).map(optionText);
    const truth = voting.options.find((option) => !knownBluffs.includes(option.text));
    expect(truth).toBeDefined();
    const own = voting.options.find((option) => option.own);
    await expect(
      client.mutation(api.game.vote, {
        gameId: savedGameId,
        round,
        guestToken: (await credentials("Ada")).guestToken,
        optionId: own.id,
      }),
    ).rejects.toThrow("SELF_VOTE_NOT_ALLOWED");
    const beforeRetry = voting.submissionCount;
    await client.mutation(api.game.submit, {
      gameId: savedGameId,
      round,
      guestToken: (await credentials("Ada")).guestToken,
      text: bluffs.Ada,
    });
    expect((await view("Ada")).submissionCount).toBe(beforeRetry);
    if (round === 1) await capture("Bea", "voting-phone.png");
    await voteFor("Ada", truth.text);
    await voteFor("Bea", round === 2 ? truth.text : bluffs.Ada);
    await voteFor("Cy", bluffs.Bea);
    await phase("Ada", "reveal");
    const reveal = await view("Ada");
    expect(optionText(reveal.truth)).toBe(truth.text);
    expect(reveal.source.url).toMatch(/^https:\/\//);
    expect(reveal.players.map((p) => p.roundPoints)).toEqual(round === 2 ? [3, 3, 0] : [3, 1, 0]);
    expect(reveal.options.find((option) => option.truth).authors).toEqual([]);
    if (round === 2)
      expect(
        reveal.options.find((option) => option.text === optionText(bluffs.Ada)).authors.sort(),
      ).toEqual([initialIds.Ada, initialIds.Bea].sort());
    report.rounds.push({
      round,
      question: reveal.prompt.question,
      category: reveal.prompt.category,
      truth: reveal.truth,
      source: reveal.source.url,
      scores: reveal.players.map((p) => ({ name: p.name, score: p.score, gained: p.roundPoints })),
    });
    if (round === 1) {
      await capture("Ada", "reveal-desktop.png");
      await capture("Bea", "reveal-phone.png");
    }
    if (round === 3) {
      await players.Ada.page.getByRole("button", { name: "Table options", exact: true }).click();
      await players.Ada.page.getByRole("menuitem", { name: "Leave table", exact: true }).click();
      await players.Ada.page
        .getByRole("alertdialog")
        .getByRole("button", { name: "Leave table", exact: true })
        .click();
      await expect(players.Ada.page.getByLabel("Your name")).toBeVisible();
      expect((await room("Bea")).room.hostPlayerId).toBe(initialIds.Bea);
      await joinTable("Ada", code);
      expect((await room("Ada")).viewerPlayerId).toBe(initialIds.Ada);
      expect((await view("Ada")).participant).toBe(true);
      host = "Bea";
      await capture("Bea", "host-change-phone.png");
      report.checks.push(
        "Explicit host departure transfers host to Bea; rejoining Ada keeps identity, scores, and match eligibility.",
      );
    }
    await players[host].page
      .getByRole("button", {
        name: round === 6 ? "Final scores" : "Next round",
        exact: true,
      })
      .click();
    await phase("Ada", round === 6 ? "finished" : "writing");
  }
  const final = await view("Ada");
  expect(final.players.map((p) => ({ name: p.name, score: p.score }))).toEqual([
    { name: "Ada", score: 18 },
    { name: "Bea", score: 8 },
    { name: "Cy", score: 0 },
  ]);
  expect((await room("Bea")).activeMatch).toBeNull();
  await capture("Ada", "final-standings-desktop.png");
  await capture("Bea", "final-standings-phone.png");
  report.finalScores = final.players.map((p) => ({ name: p.name, score: p.score }));
  report.checks.push(
    "Six rounds have authoritative expected scores18/8/0, private shuffled choices, duplicate-bluff attribution, rejected self-votes, and idempotent submission retries.",
  );
  await players.Bea.page.getByRole("button", { name: "Play again", exact: true }).click();
  await phase("Dax", "writing");
  const rematch = await view("Dax");
  expect(rematch.gameId).not.toBe(savedGameId);
  expect(rematch.participant).toBe(true);
  expect(rematch.playerCount).toBe(4);
  expect(rematch.players.every((p) => p.score === 0)).toBe(true);
  expect(questions.has(rematch.prompt.question)).toBe(false);
  await capture("Dax", "rematch-phone.png");
  for (const name of ["Bea", "Cy", "Dax"]) {
    expect(
      await players[name].page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  report.checks.push(
    "Rematch includes former spectator, resets all scores, draws unseen content, and fits390px screens without horizontal overflow.",
  );
  report.completedAt = new Date().toISOString();
  report.result = "passed";
  await writeFile(join(evidence, "multiplayer-smoke.json"), JSON.stringify(report, null, 2) + "\n");
  console.log(
    JSON.stringify(
      {
        result: report.result,
        rounds: report.rounds.length,
        finalScores: report.finalScores,
        checks: report.checks,
        evidence: `${evidenceDirectory}/multiplayer-smoke.json`,
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}
