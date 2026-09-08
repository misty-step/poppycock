import { v } from "convex/values";
import { internal } from "./_generated/api";
import { internalAction, internalMutation } from "./_generated/server";
import { seedCards, seedPacks } from "./content";
import { drawSalt } from "./deck/salt";
import { validateSeedCatalog } from "./deck/validate";
import { fail, MAX_SEED_CARDS, normalizeAnswer, SEED_BATCH, TOTAL_ROUNDS } from "./rules";

const seedResult = v.object({
  inserted: v.number(),
  updated: v.number(),
  retired: v.number(),
  total: v.number(),
});

const seedKeys = new Set(seedCards.map((card) => card.key));
const packKeys = new Set(seedPacks.map((pack) => pack.key));

/** Trusted deployment seeding only; no function here is callable by clients. */
export const run = internalAction({
  args: {},
  returns: seedResult,
  handler: async (
    ctx,
  ): Promise<{ inserted: number; updated: number; retired: number; total: number }> => {
    if (seedCards.length < TOTAL_ROUNDS || seedCards.length > MAX_SEED_CARDS)
      fail("CONTENT_POOL_INVALID");
    validateSeedCatalog();
    await ctx.runMutation(internal.seed.upsertPacks, {});
    let inserted = 0;
    let updated = 0;
    for (let offset = 0; offset < seedCards.length; offset += SEED_BATCH) {
      const batch = await ctx.runMutation(internal.seed.upsertBatch, {
        offset,
        limit: SEED_BATCH,
      });
      inserted += batch.inserted;
      updated += batch.updated;
    }
    let retired = 0;
    let cardCursor: string | undefined;
    for (;;) {
      const page = await ctx.runMutation(internal.seed.retireCardPage, { cursor: cardCursor });
      retired += page.retired;
      if (page.done) break;
      cardCursor = page.cursor;
    }
    const packs = await ctx.runMutation(internal.seed.retirePacks, {});
    retired += packs.retired;
    return { inserted, updated, retired, total: seedCards.length };
  },
});

export const upsertPacks = internalMutation({
  args: {},
  returns: v.null(),
  handler: async (ctx) => {
    for (const pack of seedPacks) {
      const existing = await ctx.db
        .query("packs")
        .withIndex("by_key", (q) => q.eq("key", pack.key))
        .unique();
      const value = {
        key: pack.key,
        title: pack.title,
        blurb: pack.blurb,
        category: pack.category,
        sort: pack.sort,
        active: true,
      };
      if (!existing) await ctx.db.insert("packs", value);
      else if (
        !existing.active ||
        existing.title !== pack.title ||
        existing.blurb !== pack.blurb ||
        existing.category !== pack.category ||
        existing.sort !== pack.sort
      )
        await ctx.db.replace(existing._id, value);
    }
    return null;
  },
});

export const upsertBatch = internalMutation({
  args: { offset: v.number(), limit: v.number() },
  returns: v.object({ inserted: v.number(), updated: v.number() }),
  handler: async (ctx, { offset, limit }) => {
    const slice = seedCards.slice(offset, offset + limit);
    let inserted = 0;
    let updated = 0;
    for (const card of slice) {
      if (!card.key.trim() || !card.question.trim() || !normalizeAnswer(card.answer))
        fail("CONTENT_CARD_INVALID");
      const existing = await ctx.db
        .query("cards")
        .withIndex("by_key", (q) => q.eq("key", card.key))
        .unique();
      const value = {
        key: card.key,
        packKey: card.packKey,
        category: card.category,
        question: card.question,
        answer: card.answer,
        normalizedAnswer: normalizeAnswer(card.answer),
        source: card.source,
        active: true,
        drawSalt: drawSalt(card.key),
      };
      if (!existing) {
        await ctx.db.insert("cards", value);
        inserted += 1;
      } else if (
        !existing.active ||
        existing.packKey !== value.packKey ||
        existing.category !== value.category ||
        existing.question !== value.question ||
        existing.answer !== value.answer ||
        existing.normalizedAnswer !== value.normalizedAnswer ||
        existing.source.title !== value.source.title ||
        existing.source.url !== value.source.url ||
        existing.source.note !== value.source.note ||
        existing.drawSalt !== value.drawSalt
      ) {
        await ctx.db.replace(existing._id, value);
        updated += 1;
      }
    }
    return { inserted, updated };
  },
});

export const retireCardPage = internalMutation({
  args: { cursor: v.optional(v.string()) },
  returns: v.object({ retired: v.number(), cursor: v.optional(v.string()), done: v.boolean() }),
  handler: async (ctx, { cursor }) => {
    const page = await ctx.db
      .query("cards")
      .withIndex("by_active_key", (q) =>
        cursor ? q.eq("active", true).gt("key", cursor) : q.eq("active", true),
      )
      .take(SEED_BATCH);
    let retired = 0;
    for (const card of page) {
      if (!seedKeys.has(card.key)) {
        await ctx.db.patch(card._id, { active: false });
        retired += 1;
      }
    }
    return {
      retired,
      cursor: page.at(-1)?.key,
      done: page.length < SEED_BATCH,
    };
  },
});

export const retirePacks = internalMutation({
  args: {},
  returns: v.object({ retired: v.number() }),
  handler: async (ctx) => {
    const page = await ctx.db
      .query("packs")
      .withIndex("by_active_sort", (q) => q.eq("active", true))
      .take(200);
    let retired = 0;
    for (const pack of page) {
      if (!packKeys.has(pack.key)) {
        await ctx.db.patch(pack._id, { active: false });
        retired += 1;
      }
    }
    return { retired };
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
