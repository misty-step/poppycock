import type { SeedCard } from "./types";

/**
 * Editorial guard for the sourced catalog.
 *
 * `validate.ts` enforces the structural contract the game reads cards through:
 * keys, categories, lengths, sources. `findEditorialDefects` enforces the
 * invariant that no two cards cover the same subject and spoil each other when
 * drawn into the same match.
 *
 * Shared wording finds cards that describe the same thing in similar terms.
 * `findSharedSourceWarnings` is an advisory review helper that spots cross-pack
 * source sharing: while broad compendia (e.g. multi-subject National Geographic
 * features or encyclopedia entries) can legitimately support distinct cards
 * across different packs, checking shared citations helps reviewers spot
 * accidental subject duplication early.
 */

export type CatalogFinding = {
  kind: "answer-restated" | "bare-answer" | "restated-subject" | "shared-source";
  pack: string;
  card: string;
  detail: string;
};

const VOCABULARY_PACK_KEYS = new Set(["linguistic-gems", "odd-words", "rarer-words"]);

const NUMBER_WORDS = new Set([
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
  "hundred",
  "thousand",
  "million",
  "billion",
  "trillion",
  "half",
  "quarter",
  "pi",
]);

const MONTHS =
  "january|february|march|april|may|june|july|august|september|october|november|december";
const ORDINAL_DAY = String.raw`(?:[1-9]|[12]\d|3[01])(?:st|nd|rd|th)?`;
const YEAR = String.raw`\d{1,4}(?:\s*(?:bce?|ce|ad))?`;
const DATE_PATTERNS = [
  new RegExp(`^(?:${MONTHS})\\s+${ORDINAL_DAY}(?:,)?(?:\\s+${YEAR})?$`, "i"),
  new RegExp(`^${ORDINAL_DAY}\\s+(?:of\\s+)?(?:${MONTHS})(?:\\s+${YEAR})?$`, "i"),
  new RegExp(`^(?:${MONTHS})\\s+${YEAR}$`, "i"),
  /^(?:\d{1,4})[-/.](?:\d{1,2})[-/.](?:\d{1,4})$/,
];

const normalizedWords = (text: string): string =>
  text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");

const isBareNumber = (answer: string): boolean => {
  const trimmed = answer.trim().replace(/[.!?]+$/, "");
  if (/^[+-]?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?(?:st|nd|rd|th)?$/.test(trimmed)) {
    return true;
  }

  const words = normalizedWords(trimmed).split(" ");
  return (
    words.length > 0 &&
    words.some((word) => NUMBER_WORDS.has(word)) &&
    words.every(
      (word) => NUMBER_WORDS.has(word) || word === "and" || word === "minus" || word === "negative",
    )
  );
};

const isBareDate = (answer: string): boolean => {
  const trimmed = answer.trim().replace(/[.!?]+$/, "");
  return DATE_PATTERNS.some((pattern) => pattern.test(trimmed));
};

/**
 * Finds cards whose question contains their complete answer as a word-bounded
 * phrase. Punctuation, accents, and casing do not conceal the leak.
 */
export function findAnswerRestatements(cards: readonly SeedCard[]): CatalogFinding[] {
  const findings: CatalogFinding[] = [];

  for (const card of cards) {
    const answer = normalizedWords(card.answer).replace(/^(?:a|an|the)\s+/, "");
    const question = ` ${normalizedWords(card.question)} `;
    if (!answer || !question.includes(` ${answer} `)) continue;
    findings.push({
      kind: "answer-restated",
      pack: card.packKey,
      card: card.key,
      detail: "question restates the answer",
    });
  }

  return findings;
}

/**
 * Finds non-vocabulary cards whose reveal is only a number or calendar date.
 * Vocabulary packs are excluded because a numeric term can itself be the word
 * being defined.
 */
export function findBareNumberOrDateAnswers(cards: readonly SeedCard[]): CatalogFinding[] {
  const findings: CatalogFinding[] = [];

  for (const card of cards) {
    if (VOCABULARY_PACK_KEYS.has(card.packKey)) continue;
    if (!isBareNumber(card.answer) && !isBareDate(card.answer)) continue;
    findings.push({
      kind: "bare-answer",
      pack: card.packKey,
      card: card.key,
      detail: "answer is only a number or date",
    });
  }

  return findings;
}

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

export function findEditorialDefects(cards: readonly SeedCard[]): CatalogFinding[] {
  const profiles = cards.map((card) => ({ card, subject: subjectTokens(card) }));
  const findings: CatalogFinding[] = [];

  for (let i = 0; i < profiles.length; i += 1) {
    for (let j = i + 1; j < profiles.length; j += 1) {
      const samePack = profiles[i].card.packKey === profiles[j].card.packKey;
      const threshold = samePack ? SAME_PACK_THRESHOLD : CROSS_PACK_THRESHOLD;
      const overlap = overlapRatio(profiles[i].subject, profiles[j].subject);
      if (overlap < threshold) continue;
      findings.push({
        kind: "restated-subject",
        pack: profiles[i].card.packKey,
        card: profiles[i].card.key,
        detail: `${Math.round(overlap * 100)}% subject overlap with ${profiles[j].card.packKey}/${profiles[j].card.key}`,
      });
    }
  }

  return findings;
}

/**
 * Advisory review helper: finds cards in different packs that cite the same URL.
 * Multi-topic articles and institutional overviews can legitimately support
 * distinct facts across different packs, so this is a review signal rather than
 * a failing invariant.
 */
export function findSharedSourceWarnings(cards: readonly SeedCard[]): CatalogFinding[] {
  const warnings: CatalogFinding[] = [];
  const byUrl = new Map<string, SeedCard[]>();
  for (const card of cards) {
    const shared = byUrl.get(card.source.url);
    if (shared) shared.push(card);
    else byUrl.set(card.source.url, [card]);
  }
  for (const shared of byUrl.values()) {
    if (new Set(shared.map((card) => card.packKey)).size < 2) continue;
    const [first, ...rest] = shared;
    warnings.push({
      kind: "shared-source",
      pack: first.packKey,
      card: first.key,
      detail: `cites the same source as ${rest.map((card) => `${card.packKey}/${card.key}`).join(", ")}`,
    });
  }

  return warnings;
}
