import { v } from "convex/values";
import { internal } from "./_generated/api";
import { internalAction, internalMutation } from "./_generated/server";
import { seedCards } from "./content";
import { fail, MAX_CARDS, normalizeAnswer, TOTAL_ROUNDS } from "./rules";

/** Trusted deployment seeding only; no function here is callable by clients. */
export const run = internalMutation({
  args: {},
  returns: v.object({
    inserted: v.number(),
    updated: v.number(),
    retired: v.number(),
    total: v.number(),
  }),
  handler: async (
    ctx,
  ): Promise<{ inserted: number; updated: number; retired: number; total: number }> => {
    if (seedCards.length < TOTAL_ROUNDS || seedCards.length > MAX_CARDS)
      fail("CONTENT_POOL_INVALID");
    const keys = new Set<string>();
    for (const card of seedCards) {
      if (
        !card.key.trim() ||
        keys.has(card.key) ||
        !card.question.trim() ||
        !normalizeAnswer(card.answer)
      )
        fail("CONTENT_CARD_INVALID");
      keys.add(card.key);
    }
    let inserted = 0;
    let updated = 0;
    let retired = 0;
    for (const card of seedCards) {
      const existing = await ctx.db
        .query("cards")
        .withIndex("by_key", (q) => q.eq("key", card.key))
        .unique();
      const value = { ...card, normalizedAnswer: normalizeAnswer(card.answer), active: true };
      if (!existing) {
        await ctx.db.insert("cards", value);
        inserted += 1;
      } else if (
        !existing.active ||
        existing.category !== card.category ||
        existing.question !== card.question ||
        existing.answer !== card.answer ||
        existing.normalizedAnswer !== value.normalizedAnswer ||
        existing.source.title !== card.source.title ||
        existing.source.url !== card.source.url ||
        existing.source.note !== card.source.note
      ) {
        await ctx.db.replace(existing._id, value);
        updated += 1;
      }
    }
    const active = await ctx.db
      .query("cards")
      .withIndex("by_active_key", (q) => q.eq("active", true))
      .take(MAX_CARDS * 2 + 1);
    if (active.length > MAX_CARDS * 2) fail("CONTENT_POOL_TOO_LARGE");
    for (const card of active)
      if (!keys.has(card.key)) {
        await ctx.db.patch(card._id, { active: false });
        retired += 1;
      }
    return { inserted, updated, retired, total: seedCards.length };
  },
});

function requireLocalReset(): void {
  if (process.env.POPPYCOCK_LOCAL !== "true") fail("LOCAL_RESET_ONLY");
}

const resetTables = [
  "votes",
  "options",
  "submissions",
  "rounds",
  "games",
  "roomDecks",
  "matchParticipants",
  "matches",
  "roomMembers",
  "rooms",
  "playerAvatars",
  "players",
] as const;

type ResetBatch = { deleted: number; done: boolean };

/** Each transaction is bounded; content and deployment configuration survive. */
export const resetBatch = internalMutation({
  args: {},
  returns: v.object({ deleted: v.number(), done: v.boolean() }),
  handler: async (ctx): Promise<ResetBatch> => {
    requireLocalReset();
    let remaining = 128;
    let deleted = 0;
    for (const table of resetTables) {
      const documents = await ctx.db.query(table).take(remaining);
      for (const document of documents) await ctx.db.delete(document._id);
      deleted += documents.length;
      remaining -= documents.length;
      if (remaining === 0) return { deleted, done: false };
    }
    return { deleted, done: true };
  },
});

/** Await all batches so a local reset command cannot race its subsequent seed. */
export const reset = internalAction({
  args: {},
  returns: v.object({ deleted: v.number() }),
  handler: async (ctx): Promise<{ deleted: number }> => {
    requireLocalReset();
    let deleted = 0;
    for (;;) {
      const batch: ResetBatch = await ctx.runMutation(internal.seed.resetBatch, {});
      deleted += batch.deleted;
      if (batch.done) return { deleted };
    }
  },
});
