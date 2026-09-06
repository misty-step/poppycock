import { v } from "convex/values";

export const gamePhase = v.union(
  v.literal("writing"),
  v.literal("voting"),
  v.literal("reveal"),
  v.literal("finished"),
  v.literal("abandoned"),
);
export const timedPhase = v.union(v.literal("writing"), v.literal("voting"));
export const source = v.object({ title: v.string(), url: v.string(), note: v.string() });
export const gameView = v.object({
  gameId: v.string(),
  matchId: v.string(),
  phase: gamePhase,
  round: v.number(),
  totalRounds: v.number(),
  deadline: v.number(),
  participant: v.boolean(),
  submitted: v.boolean(),
  voted: v.boolean(),
  submissionCount: v.number(),
  voteCount: v.number(),
  playerCount: v.number(),
  prompt: v.object({ category: v.string(), question: v.string() }),
  options: v.array(
    v.object({
      id: v.string(),
      text: v.string(),
      own: v.boolean(),
      truth: v.optional(v.boolean()),
      authors: v.optional(v.array(v.string())),
      voters: v.optional(v.array(v.string())),
    }),
  ),
  players: v.array(
    v.object({
      playerId: v.string(),
      name: v.string(),
      seatIndex: v.number(),
      score: v.number(),
      roundPoints: v.number(),
    }),
  ),
  ownText: v.optional(v.string()),
  source: v.optional(source),
  truth: v.optional(v.string()),
  canAdvance: v.boolean(),
});
