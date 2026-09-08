import { MAX_BLUFF_LENGTH, MAX_SEED_CARDS, TOTAL_ROUNDS } from "../rules";
import { seedCards, seedPacks } from "./catalog";

export function validateSeedCatalog(): void {
  if (seedPacks.length < 1) throw new Error("CONTENT_PACKS_INVALID");
  if (seedCards.length < TOTAL_ROUNDS || seedCards.length > MAX_SEED_CARDS)
    throw new Error("CONTENT_POOL_INVALID");
  const packKeys = new Set<string>();
  const categories = new Set<string>();
  const packByKey = new Map(seedPacks.map((pack) => [pack.key, pack]));
  for (const pack of seedPacks) {
    if (
      !pack.key.trim() ||
      packKeys.has(pack.key) ||
      !pack.title.trim() ||
      !pack.category.trim() ||
      categories.has(pack.category)
    )
      throw new Error("CONTENT_PACK_INVALID");
    packKeys.add(pack.key);
    categories.add(pack.category);
  }
  const keys = new Set<string>();
  const questions = new Set<string>();
  for (const card of seedCards) {
    const pack = packByKey.get(card.packKey);
    if (
      !pack ||
      card.category !== pack.category ||
      !card.key.trim() ||
      keys.has(card.key) ||
      !card.question.trim() ||
      questions.has(card.question) ||
      !card.answer.trim() ||
      card.answer.length > MAX_BLUFF_LENGTH ||
      !card.source.title.trim() ||
      !card.source.note.trim() ||
      !card.source.url.startsWith("https://")
    )
      throw new Error(`CONTENT_CARD_INVALID:${card.key}`);
    keys.add(card.key);
    questions.add(card.question);
  }
}
