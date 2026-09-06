import { sweepAbandonedMatches } from "@parlor/convex";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import { internalMutation } from "./_generated/server";

/** Continue bounded pages, rather than repeatedly starving later active rooms. */
export const sweepAbandoned = internalMutation({
  args: { cursor: v.optional(v.string()) },
  returns: v.object({
    scanned: v.number(),
    abandoned: v.number(),
    hasMore: v.boolean(),
    continueCursor: v.union(v.string(), v.null()),
  }),
  handler: async (
    ctx,
    args,
  ): Promise<{
    scanned: number;
    abandoned: number;
    hasMore: boolean;
    continueCursor: string | null;
  }> => {
    const result = await sweepAbandonedMatches(ctx, { limit: 50, ...args });
    if (result.hasMore && result.continueCursor !== null) {
      await ctx.scheduler.runAfter(0, internal.maintenance.sweepAbandoned, {
        cursor: result.continueCursor,
      });
    }
    return result;
  },
});
