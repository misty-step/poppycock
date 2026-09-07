import { v } from "convex/values";
import { internal } from "./_generated/api";
import { internalAction, internalMutation } from "./_generated/server";

type PageResult = { cursor: string; done: boolean; changed: number };

// Transitional deployment only: remove old scheduler jobs and stored turn clocks
// before the final schema drops deadline. Never resets rooms, inputs, or scores.
export const page = internalMutation({
  args: {
    stage: v.union(v.literal("jobs"), v.literal("games")),
    cursor: v.union(v.string(), v.null()),
  },
  returns: v.object({ cursor: v.string(), done: v.boolean(), changed: v.number() }),
  handler: async (ctx, args): Promise<PageResult> => {
    let changed = 0;
    if (args.stage === "jobs") {
      const batch = await ctx.db.system.query("_scheduled_functions").paginate({
        cursor: args.cursor,
        numItems: 100,
      });
      for (const job of batch.page) {
        if (job.state.kind === "pending" && /^game(?:\.js)?:deadline$/u.test(job.name)) {
          await ctx.scheduler.cancel(job._id);
          changed += 1;
        }
      }
      return { cursor: batch.continueCursor, done: batch.isDone, changed };
    }
    const batch = await ctx.db.query("games").paginate({ cursor: args.cursor, numItems: 100 });
    for (const game of batch.page) {
      let updated = false;
      if (game.deadline !== undefined) {
        await ctx.db.patch(game._id, { deadline: undefined });
        updated = true;
      }
      const match = await ctx.db.get(game.matchId);
      if (match?.status === "active" && match.hardDeadline !== false) {
        await ctx.db.patch(match._id, { hardDeadline: false });
        updated = true;
      }
      if (updated) changed += 1;
    }
    return { cursor: batch.continueCursor, done: batch.isDone, changed };
  },
});

export const run = internalAction({
  args: {},
  returns: v.object({ cancelledJobs: v.number(), migratedGames: v.number() }),
  handler: async (ctx): Promise<{ cancelledJobs: number; migratedGames: number }> => {
    const totals = { jobs: 0, games: 0 };
    for (const stage of ["jobs", "games"] as const) {
      let cursor: string | null = null;
      for (;;) {
        const result: PageResult = await ctx.runMutation(internal.untimedMigration.page, {
          stage,
          cursor,
        });
        totals[stage] += result.changed;
        if (result.done) break;
        cursor = result.cursor;
      }
    }
    return { cancelledJobs: totals.jobs, migratedGames: totals.games };
  },
});
