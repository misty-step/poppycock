import { describe, expect, it } from "vitest";
import { seedCards, seedPacks } from "../convex/deck/catalog";
import { validateSeedCatalog } from "../convex/deck/validate";
import { MAX_BLUFF_LENGTH } from "../convex/rules";

const HOUSE_PACKS = [
  "odd-words",
  "curious-objects",
  "wild-nature",
  "space-oddities",
  "kitchen-secrets",
  "bright-ideas",
  "living-traditions",
  "remarkable-places",
  "working-lives",
  "art-and-music",
] as const;

const EXPANSION_PACKS = ["the-sea", "lost-gear", "rarer-words"] as const;

describe("sourced pack catalog", () => {
  it("validates every pack and card", () => {
    validateSeedCatalog();
    expect(seedPacks.map((pack) => pack.key)).toEqual(
      expect.arrayContaining([...HOUSE_PACKS, ...EXPANSION_PACKS]),
    );
    expect(seedCards.filter((card) => card.packKey === "odd-words")).toHaveLength(27);
    expect(seedCards.filter((card) => card.packKey === "curious-objects")).toHaveLength(27);
    expect(seedCards.filter((card) => card.key === "word-absquatulate")).toHaveLength(1);
    expect(seedCards.filter((card) => card.packKey === "the-sea")).toHaveLength(18);
    expect(seedCards.filter((card) => card.packKey === "lost-gear")).toHaveLength(18);
    expect(seedCards.filter((card) => card.packKey === "rarer-words")).toHaveLength(18);
    expect(seedCards.length).toBeGreaterThanOrEqual(270);
    expect(Math.max(...seedCards.map((card) => card.answer.length))).toBeLessThanOrEqual(
      MAX_BLUFF_LENGTH,
    );
  });
});
