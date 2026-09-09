import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { findRestatedCards } from "../convex/deck/audit";
import { seedCards, seedPacks } from "../convex/deck/catalog";
import { validateSeedCatalog } from "../convex/deck/validate";
import { MAX_BLUFF_LENGTH, SEEN_RECENT, TOTAL_ROUNDS } from "../convex/rules";
import { readPackModules, renderCatalog, renderIndex } from "../scripts/generate-catalog.mjs";

const read = (relative: string) =>
  readFileSync(fileURLToPath(new URL(`../${relative}`, import.meta.url)), "utf8");

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

  it("never ships two cards that restate the same subject", () => {
    expect(findRestatedCards(seedCards)).toEqual([]);
  });

  // A pack module nobody registered ships zero cards, and a provenance index
  // nobody regenerated credits the wrong sources. Both fail silently, so the
  // generated artifacts are compared against the deck directory itself.
  it("ships the registry and provenance index that pnpm catalog would write", async () => {
    expect(read("convex/deck/catalog.ts")).toBe(renderCatalog(await readPackModules()));
    expect(read("docs/content-index.md")).toBe(renderIndex(seedPacks, seedCards));
  });
});
