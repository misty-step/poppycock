import type { SeedCard } from "./types";

/**
 * Editorial guard for the sourced catalog.
 *
 * `validate.ts` enforces the structural contract the game reads cards through:
 * keys, categories, lengths, sources. This guards the one editorial defect that
 * keeps recurring as the catalog grows across independently authored packs: two
 * cards covering the same subject. A match draws a fresh category each round, so
 * a restated subject spoils its twin the moment both land in the same game, and
 * `whale-fall` shipped in two packs before a manual read caught it.
 *
 * Question phrasing and bluffability stay editorial judgment. Attempts to score
 * them mechanically flagged healthy cards — a question naming its subject
 * ("three-toed sloth") is how a card is supposed to read.
 */

export type CatalogFinding = {
  pack: string;
  card: string;
  detail: string;
};

/** Words too generic in this corpus to indicate that two cards share a subject. */
const STOP_WORDS = new Set([
  "about",
  "above",
  "across",
  "after",
  "against",
  "along",
  "among",
  "another",
  "around",
  "because",
  "become",
  "before",
  "being",
  "below",
  "between",
  "beyond",
  "british",
  "called",
  "could",
  "different",
  "during",
  "early",
  "english",
  "every",
  "first",
  "found",
  "french",
  "german",
  "great",
  "greek",
  "inside",
  "instead",
  "italian",
  "known",
  "large",
  "later",
  "little",
  "london",
  "modern",
  "never",
  "often",
  "other",
  "people",
  "roman",
  "several",
  "should",
  "since",
  "small",
  "special",
  "still",
  "such",
  "their",
  "there",
  "these",
  "thing",
  "those",
  "three",
  "through",
  "under",
  "until",
  "using",
  "were",
  "what",
  "when",
  "where",
  "which",
  "while",
  "with",
  "within",
  "without",
  "would",
  "century",
  "common",
  "considered",
  "described",
  "designed",
  "historical",
  "history",
  "museum",
  "national",
  "official",
  "single",
  "specific",
  "standard",
  "traditional",
  "unusual",
  "various",
  "actually",
  "certain",
  "record",
  "reported",
  "usually",
  "widely",
  "world",
]);

/** Crude English stemmer: enough for `sails`/`sailing`/`sailed` to share a root. */
const stem = (word: string): string =>
  word
    .replace(/ies$/, "y")
    .replace(/(ing|edly|ed|es|s)$/, "")
    .replace(/(.)\1$/, "$1");

const subjectTokens = (card: SeedCard): Set<string> =>
  new Set(
    `${card.question} ${card.answer}`
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length >= 5 && !STOP_WORDS.has(word))
      .map(stem),
  );

const overlapRatio = (a: ReadonlySet<string>, b: ReadonlySet<string>): number => {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  for (const token of a) if (b.has(token)) shared += 1;
  return shared / (a.size + b.size - shared);
};

/**
 * A pack is one coherent theme, so entries inside it legitimately share
 * vocabulary — the slang pack's cards all cite the same glossary and peak at
 * 33% overlap without restating anything. Across packs that shared vocabulary
 * has no innocent explanation, so the bar is much lower there: at 26% the
 * catalog surfaced two real collisions (one curved rifle barrel and one
 * treadwheel crane, each written twice) and nothing else.
 */
export const SAME_PACK_THRESHOLD = 0.4;
export const CROSS_PACK_THRESHOLD = 0.26;

export function findRestatedCards(cards: readonly SeedCard[]): CatalogFinding[] {
  const profiles = cards.map((card) => ({ card, subject: subjectTokens(card) }));
  const findings: CatalogFinding[] = [];

  for (let i = 0; i < profiles.length; i += 1) {
    for (let j = i + 1; j < profiles.length; j += 1) {
      const samePack = profiles[i].card.packKey === profiles[j].card.packKey;
      const threshold = samePack ? SAME_PACK_THRESHOLD : CROSS_PACK_THRESHOLD;
      const overlap = overlapRatio(profiles[i].subject, profiles[j].subject);
      if (overlap < threshold) continue;
      findings.push({
        pack: profiles[i].card.packKey,
        card: profiles[i].card.key,
        detail: `${Math.round(overlap * 100)}% subject overlap with ${profiles[j].card.packKey}/${profiles[j].card.key}`,
      });
    }
  }

  return findings;
}
