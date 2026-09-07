import { parlorTables } from "@parlor/convex/schema";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { avatarId, gamePhase, source } from "./validators";

export default defineSchema({
  ...parlorTables,
  playerAvatars: defineTable({
    playerId: v.id("players"),
    avatarId,
  }).index("by_player", ["playerId"]),
  cards: defineTable({
    key: v.string(),
    category: v.string(),
    question: v.string(),
    answer: v.string(),
    normalizedAnswer: v.string(),
    source,
    active: v.boolean(),
  })
    .index("by_key", ["key"])
    .index("by_active_key", ["active", "key"]),
  roomDecks: defineTable({
    roomId: v.id("rooms"),
    seenCardIds: v.array(v.id("cards")),
    lastCardId: v.optional(v.id("cards")),
  }).index("by_room", ["roomId"]),
  games: defineTable({
    roomId: v.id("rooms"),
    matchId: v.id("matches"),
    cycle: v.number(),
    requestId: v.string(),
    startedBy: v.id("players"),
    startedAt: v.number(),
    phase: gamePhase,
    round: v.number(),
    revealedAt: v.optional(v.number()),
    finishedAt: v.optional(v.number()),
    players: v.array(
      v.object({
        playerId: v.id("players"),
        name: v.string(),
        seatIndex: v.number(),
        score: v.number(),
        roundPoints: v.number(),
      }),
    ),
  })
    .index("by_room_cycle", ["roomId", "cycle"])
    .index("by_room_request", ["roomId", "requestId"])
    .index("by_match", ["matchId"]),
  rounds: defineTable({
    gameId: v.id("games"),
    round: v.number(),
    cardId: v.id("cards"),
    category: v.string(),
    question: v.string(),
    answer: v.string(),
    normalizedAnswer: v.string(),
    source,
  }).index("by_game_round", ["gameId", "round"]),
  submissions: defineTable({
    gameId: v.id("games"),
    round: v.number(),
    playerId: v.id("players"),
    text: v.string(),
    normalized: v.string(),
    truthMatch: v.boolean(),
  }).index("by_game_round_player", ["gameId", "round", "playerId"]),
  options: defineTable({
    gameId: v.id("games"),
    round: v.number(),
    text: v.string(),
    normalized: v.string(),
    truth: v.boolean(),
    authorIds: v.array(v.id("players")),
    order: v.number(),
  }).index("by_game_round_order", ["gameId", "round", "order"]),
  votes: defineTable({
    gameId: v.id("games"),
    round: v.number(),
    playerId: v.id("players"),
    optionId: v.id("options"),
  }).index("by_game_round_player", ["gameId", "round", "playerId"]),
});
