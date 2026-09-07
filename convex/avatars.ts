import { resolvePlayer } from "@parlor/convex";
import { v } from "convex/values";
import type { AvatarId } from "../lib/avatars";
import { api } from "./_generated/api";
import { mutation, query } from "./_generated/server";
import { avatarId } from "./validators";

export const choose = mutation({
  args: { avatarId, guestToken: v.optional(v.string()) },
  returns: v.null(),
  handler: async (ctx, args) => {
    const actor = await resolvePlayer(ctx, args.guestToken);
    const saved = await ctx.db
      .query("playerAvatars")
      .withIndex("by_player", (q) => q.eq("playerId", actor.playerId))
      .unique();
    if (saved) {
      if (saved.avatarId !== args.avatarId)
        await ctx.db.patch(saved._id, { avatarId: args.avatarId });
    } else {
      await ctx.db.insert("playerAvatars", { playerId: actor.playerId, avatarId: args.avatarId });
    }
    return null;
  },
});

export const forRoom = query({
  args: { roomId: v.id("rooms"), guestToken: v.optional(v.string()) },
  returns: v.record(v.id("players"), avatarId),
  handler: async (ctx, args): Promise<Record<string, AvatarId>> => {
    // Keep Parlor's room authorization and projection intact; Poppycock owns only the artwork choice.
    const state = await ctx.runQuery(api.rooms.getRoomState, args);
    const game = await ctx.db
      .query("games")
      .withIndex("by_room_cycle", (q) => q.eq("roomId", args.roomId))
      .order("desc")
      .first();
    const playerIds = new Set([
      ...state.members.map((member) => member.playerId),
      ...(game?.players.map((player) => player.playerId) ?? []),
    ]);
    const choices = await Promise.all(
      [...playerIds].map((playerId) =>
        ctx.db
          .query("playerAvatars")
          .withIndex("by_player", (q) => q.eq("playerId", playerId))
          .unique(),
      ),
    );
    const result: Record<string, AvatarId> = {};
    for (const choice of choices) {
      if (choice) result[choice.playerId] = choice.avatarId;
    }
    return result;
  },
});
