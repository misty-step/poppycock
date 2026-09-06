import { ConvexError } from "convex/values";

export const TOTAL_ROUNDS = 6;
export const MIN_PLAYERS = 3;
export const MAX_PLAYERS = 12;
export const MAX_CARDS = 1000;
export const MAX_BLUFF_LENGTH = 180;
export const WRITING_MS = 90_000;
export const VOTING_MS = 60_000;
export const REVEAL_HOST_GRACE_MS = 15_000;

export function fail(code: string): never {
  throw new ConvexError({ code });
}

// Case, compatibility characters, whitespace, and sentence-ending punctuation
// cannot create duplicate choices. Meaningful internal punctuation is retained.
export function normalizeAnswer(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .trim()
    .replace(/\s+/gu, " ")
    .replace(/[.!?]+$/u, "")
    .trim();
}

export function cleanBluff(text: string): string {
  if (text.length > MAX_BLUFF_LENGTH * 4) fail("BLUFF_TOO_LONG");
  const cleaned = text.normalize("NFKC").trim().replace(/\s+/gu, " ");
  if (!normalizeAnswer(cleaned)) fail("BLUFF_REQUIRED");
  if (cleaned.length > MAX_BLUFF_LENGTH) fail("BLUFF_TOO_LONG");
  if (/[\u0000-\u001f\u007f-\u009f]/u.test(cleaned)) fail("BLUFF_INVALID");
  return cleaned;
}

export function requireRound(round: number, current: number): void {
  if (!Number.isSafeInteger(round) || round < 1 || round > TOTAL_ROUNDS || round !== current) {
    fail("STALE_ROUND");
  }
}

export function shuffled<T>(items: T[]): T[] {
  // Convex provides deterministic, transaction-seeded Math.random in mutations.
  for (let index = items.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [items[index], items[other]] = [items[other]!, items[index]!];
  }
  return items;
}
