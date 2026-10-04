import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  findAnswerRestatements,
  findBareNumberOrDateAnswers,
  findEditorialDefects,
} from "../convex/deck/audit";
import { seedCards, seedPacks } from "../convex/deck/catalog";
import type { SeedCard } from "../convex/deck/types";
import { validateSeedCatalog } from "../convex/deck/validate";
import { MAX_BLUFF_LENGTH, SEEN_RECENT, TOTAL_ROUNDS } from "../convex/rules";
import { readPackModules, renderCatalog, renderIndex } from "../scripts/generate-catalog.mjs";

const read = (relative: string) =>
  readFileSync(fileURLToPath(new URL(`../${relative}`, import.meta.url)), "utf8");

const syntheticCard = (key: string, question: string, answer: string, packKey = "test-pack") =>
  ({
    key,
    question,
    answer,
    packKey,
    category: "Test pack",
    source: { title: "Test source", url: "https://example.com", note: "Synthetic test card." },
  }) satisfies SeedCard;

describe("sourced pack catalog", () => {
  it("satisfies the contract the game reads it through", () => {
    validateSeedCatalog();
    expect(seedCards.length).toBeGreaterThan(SEEN_RECENT + TOTAL_ROUNDS);
    expect(Math.max(...seedCards.map((card) => card.answer.length))).toBeLessThanOrEqual(
      MAX_BLUFF_LENGTH,
    );
  });

  it("can always fill a match from packs the players have not just seen", () => {
    // A round prefers a category no earlier round used, so a match needs at
    // least one drawable pack per round even when every other pack is spent.
    const drawable = seedPacks.filter((pack) => pack.cards.length >= TOTAL_ROUNDS);
    expect(drawable.length).toBeGreaterThanOrEqual(TOTAL_ROUNDS);
  });

  it("has no mechanically decidable editorial defects", () => {
    expect(findEditorialDefects(seedCards)).toEqual([]);
    expect(findAnswerRestatements(seedCards)).toEqual([]);
    expect(findBareNumberOrDateAnswers(seedCards)).toEqual([]);
  });

  // A pack module nobody registered ships zero cards, and a provenance index
  // nobody regenerated credits the wrong sources. Both fail silently, so the
  // generated artifacts are compared against the deck directory itself.
  it("ships the registry and provenance index that pnpm catalog would write", async () => {
    expect(read("convex/deck/catalog.ts")).toBe(renderCatalog(await readPackModules()));
    expect(read("docs/content-index.md")).toBe(renderIndex(seedPacks, seedCards));
  });
});

describe("editorial defect finders", () => {
  it("finds an answer restated by its question despite superficial punctuation", () => {
    const card = syntheticCard(
      "leaked-answer",
      "Why did sailors carry a brass key?",
      "The brass key.",
    );

    expect(findAnswerRestatements([card])).toEqual([
      {
        kind: "answer-restated",
        pack: "test-pack",
        card: "leaked-answer",
        detail: "question restates the answer",
      },
    ]);
  });

  it("finds bare numbers and dates outside vocabulary packs", () => {
    const cards = [
      syntheticCard("bare-number", "How many were recorded?", "Twenty-three."),
      syntheticCard("bare-date", "When did it happen?", "14 September 1752."),
      syntheticCard("bluffable-answer", "What happened?", "The clock stopped for a full day."),
      syntheticCard("vocabulary-number", "What did the term mean?", "Twenty-three.", "odd-words"),
    ];

    expect(findBareNumberOrDateAnswers(cards).map((finding) => finding.card)).toEqual([
      "bare-number",
      "bare-date",
    ]);
  });
});
