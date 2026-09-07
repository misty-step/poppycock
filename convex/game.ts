import { beginMatch, completeMatch, requireActiveMatch, resolvePlayer } from "@parlor/convex";
import { v } from "convex/values";
import type { GameView } from "../lib/game-types";
import type { Doc, Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import type { MutationCtx, QueryCtx } from "./_generated/server";
import {
  cleanBluff,
  fail,
  MAX_CARDS,
  MAX_PLAYERS,
  MIN_PLAYERS,
  normalizeAnswer,
  requireRound,
  shuffled,
  TOTAL_ROUNDS,
} from "./rules";
import { gamePhase, gameView } from "./validators";

type ReadCtx = QueryCtx | MutationCtx;
type Game = Doc<"games">;

async function roomAccess(ctx: ReadCtx, roomId: Id<"rooms">, guestToken?: string) {
  const actor = await resolvePlayer(ctx, guestToken);
  const room = await ctx.db.get(roomId);
  if (!room) fail("ROOM_NOT_FOUND");
  const member = await ctx.db
    .query("roomMembers")
    .withIndex("by_room_player", (q) => q.eq("roomId", roomId).eq("playerId", actor.playerId))
    .unique();
  if (!member || member.closedAt !== undefined) fail("NOT_A_ROOM_MEMBER");
  return { actor, room };
}

async function gameAccess(ctx: ReadCtx, gameId: Id<"games">, guestToken?: string) {
  const game = await ctx.db.get(gameId);
  if (!game) fail("GAME_NOT_FOUND");
  const access = await roomAccess(ctx, game.roomId, guestToken);
  const participant = await ctx.db
    .query("matchParticipants")
    .withIndex("by_match_player", (q) =>
      q.eq("matchId", game.matchId).eq("playerId", access.actor.playerId),
    )
    .unique();
  if (!participant) fail("MATCH_PARTICIPANT_REQUIRED");
  return { ...access, game };
}

async function participantsFor(ctx: ReadCtx, game: Game) {
  const participants = await ctx.db
    .query("matchParticipants")
    .withIndex("by_match", (q) => q.eq("matchId", game.matchId))
    .take(MAX_PLAYERS + 1);
  if (participants.length < MIN_PLAYERS || participants.length > MAX_PLAYERS)
    fail("GAME_DATA_INVALID");
  return participants;
}

async function eligibleIds(ctx: ReadCtx, game: Game): Promise<Set<Id<"players">>> {
  const [participants, members] = await Promise.all([
    participantsFor(ctx, game),
    ctx.db
      .query("roomMembers")
      .withIndex("by_room", (q) => q.eq("roomId", game.roomId))
      .take(MAX_PLAYERS + 1),
  ]);
  const open = new Set(
    members.filter((member) => member.closedAt === undefined).map((member) => member.playerId),
  );
  // A disconnected participant keeps their turn. Explicit departures stop
  // blocking completion, but never erase saved answers or earned points.
  return new Set(
    participants
      .filter((participant) => open.has(participant.playerId))
      .map((participant) => participant.playerId),
  );
}

async function submissionsFor(ctx: ReadCtx, game: Game) {
  return ctx.db
    .query("submissions")
    .withIndex("by_game_round_player", (q) => q.eq("gameId", game._id).eq("round", game.round))
    .take(MAX_PLAYERS + 1);
}

async function votesFor(ctx: ReadCtx, game: Game) {
  return ctx.db
    .query("votes")
    .withIndex("by_game_round_player", (q) => q.eq("gameId", game._id).eq("round", game.round))
    .take(MAX_PLAYERS + 1);
}

async function optionsFor(ctx: ReadCtx, game: Game) {
  return ctx.db
    .query("options")
    .withIndex("by_game_round_order", (q) => q.eq("gameId", game._id).eq("round", game.round))
    .take(MAX_PLAYERS + 1);
}

async function currentRound(ctx: ReadCtx, game: Game) {
  const round = await ctx.db
    .query("rounds")
    .withIndex("by_game_round", (q) => q.eq("gameId", game._id).eq("round", game.round))
    .unique();
  if (!round) fail("GAME_DATA_INVALID");
  return round;
}

async function everyoneDone(ctx: ReadCtx, game: Game): Promise<boolean> {
  const [eligible, submissions] = await Promise.all([
    eligibleIds(ctx, game),
    submissionsFor(ctx, game),
  ]);
  if (eligible.size === 0) return false;
  if (game.phase === "writing") {
    const submitted = new Set(submissions.map((submission) => submission.playerId));
    return [...eligible].every((playerId) => submitted.has(playerId));
  }
  if (game.phase === "voting") {
    const votes = await votesFor(ctx, game);
    const done = new Set(votes.map((vote) => vote.playerId));
    for (const submission of submissions) if (submission.truthMatch) done.add(submission.playerId);
    return [...eligible].every((playerId) => done.has(playerId));
  }
  return false;
}

async function drawRound(
  ctx: MutationCtx,
  gameId: Id<"games">,
  roomId: Id<"rooms">,
  round: number,
): Promise<void> {
  const [pool, deck] = await Promise.all([
    ctx.db
      .query("cards")
      .withIndex("by_active_key", (q) => q.eq("active", true))
      .take(MAX_CARDS + 1),
    ctx.db
      .query("roomDecks")
      .withIndex("by_room", (q) => q.eq("roomId", roomId))
      .unique(),
  ]);
  if (pool.length < TOTAL_ROUNDS) fail("CONTENT_NOT_READY");
  if (pool.length > MAX_CARDS) fail("CONTENT_POOL_TOO_LARGE");
  const seen = new Set(deck?.seenCardIds ?? []);
  let available = pool.filter((card) => !seen.has(card._id));
  if (available.length === 0) {
    seen.clear();
    available = pool.filter((card) => card._id !== deck?.lastCardId);
  }
  const card = available[Math.floor(Math.random() * available.length)];
  if (!card) fail("CONTENT_NOT_READY");
  seen.add(card._id);
  const state = { roomId, seenCardIds: [...seen], lastCardId: card._id };
  if (deck) await ctx.db.replace(deck._id, state);
  else await ctx.db.insert("roomDecks", state);
  // Copy the chosen card, not its future pool: reseeding cannot alter a live
  // question or change whether an already-locked submission was correct.
  await ctx.db.insert("rounds", {
    gameId,
    round,
    cardId: card._id,
    category: card.category,
    question: card.question,
    answer: card.answer,
    normalizedAnswer: card.normalizedAnswer,
    source: card.source,
  });
}

async function revealRound(ctx: MutationCtx, game: Game, now: number): Promise<void> {
  if (game.phase !== "voting") fail("WRONG_PHASE");
  const [votes, options] = await Promise.all([votesFor(ctx, game), optionsFor(ctx, game)]);
  const byId = new Map(options.map((option) => [option._id, option]));
  const points = new Map<Id<"players">, number>();
  for (const vote of votes) {
    const option = byId.get(vote.optionId);
    if (!option || option.authorIds.includes(vote.playerId)) fail("GAME_DATA_INVALID");
    if (option.truth) points.set(vote.playerId, (points.get(vote.playerId) ?? 0) + 2);
    else for (const author of option.authorIds) points.set(author, (points.get(author) ?? 0) + 1);
  }
  await ctx.db.patch(game._id, {
    phase: "reveal",
    revealedAt: now,
    players: game.players.map((player) => ({
      ...player,
      score: player.score + (points.get(player.playerId) ?? 0),
      roundPoints: player.roundPoints + (points.get(player.playerId) ?? 0),
    })),
  });
}

async function openVoting(ctx: MutationCtx, game: Game, now: number): Promise<void> {
  const [round, submissions] = await Promise.all([
    currentRound(ctx, game),
    submissionsFor(ctx, game),
  ]);
  const choices = new Map<
    string,
    {
      text: string;
      normalized: string;
      truth: boolean;
      authorIds: Id<"players">[];
    }
  >();
  choices.set(round.normalizedAnswer, {
    text: round.answer,
    normalized: round.normalizedAnswer,
    truth: true,
    authorIds: [],
  });
  for (const submission of submissions) {
    const existing = choices.get(submission.normalized);
    if (existing) existing.authorIds.push(submission.playerId);
    else
      choices.set(submission.normalized, {
        text: submission.text,
        normalized: submission.normalized,
        truth: false,
        authorIds: [submission.playerId],
      });
  }
  // Shuffle BEFORE insertion: neither creation order nor document IDs reveal
  // which choice is the truth. All clients share one persisted random order.
  for (const [order, option] of shuffled([...choices.values()]).entries()) {
    await ctx.db.insert("options", { gameId: game._id, round: game.round, order, ...option });
  }
  await ctx.db.patch(game._id, { phase: "voting" });
  const voting = await ctx.db.get(game._id);
  if (!voting) fail("GAME_DATA_INVALID");
  if (await everyoneDone(ctx, voting)) await revealRound(ctx, voting, now);
}

export const view = query({
  args: { roomId: v.id("rooms"), guestToken: v.optional(v.string()) },
  returns: v.union(v.null(), gameView),
  handler: async (ctx, args): Promise<GameView | null> => {
    const { actor, room } = await roomAccess(ctx, args.roomId, args.guestToken);
    const game = await ctx.db
      .query("games")
      .withIndex("by_room_cycle", (q) => q.eq("roomId", args.roomId))
      .order("desc")
      .first();
    if (!game) return null;
    const [match, round, participants, submissions, votes] = await Promise.all([
      ctx.db.get(game.matchId),
      currentRound(ctx, game),
      participantsFor(ctx, game),
      submissionsFor(ctx, game),
      votesFor(ctx, game),
    ]);
    if (!match) fail("GAME_DATA_INVALID");
    const participant = participants.some((row) => row.playerId === actor.playerId);
    const ownSubmission = submissions.find((submission) => submission.playerId === actor.playerId);
    const ownVote = votes.find((vote) => vote.playerId === actor.playerId);
    const revealed = game.phase === "reveal" || game.phase === "finished";
    const phase = match.status === "abandoned" ? "abandoned" : game.phase;
    const options =
      game.phase === "writing" || (phase === "abandoned" && !revealed)
        ? []
        : await optionsFor(ctx, game);
    let canAdvance = false;
    if (participant && match.status === "active" && room.closedAt === undefined) {
      if (phase === "reveal") canAdvance = true;
      else if (phase === "writing" || phase === "voting")
        canAdvance = room.hostPlayerId === actor.playerId || (await everyoneDone(ctx, game));
    }
    return {
      gameId: game._id,
      matchId: game.matchId,
      phase,
      round: game.round,
      totalRounds: TOTAL_ROUNDS,
      participant,
      submitted: ownSubmission !== undefined,
      voted: ownVote !== undefined || (phase === "voting" && ownSubmission?.truthMatch === true),
      submissionCount: submissions.length,
      voteCount: votes.length,
      playerCount: participants.length,
      prompt: { category: round.category, question: round.question },
      options: options.map((option) => ({
        id: option._id,
        text: option.normalized,
        own: option.authorIds.includes(actor.playerId),
        ...(revealed
          ? {
              truth: option.truth,
              authors: option.authorIds,
              voters: votes
                .filter((vote) => vote.optionId === option._id)
                .map((vote) => vote.playerId),
            }
          : {}),
      })),
      // Exact-truth submissions are credited immediately in storage. Conceal
      // all current-round points until reveal: scores must not be a truth oracle.
      players: game.players.map((player) => ({
        ...player,
        score: revealed ? player.score : player.score - player.roundPoints,
        roundPoints: revealed ? player.roundPoints : 0,
      })),
      ...(ownSubmission ? { ownText: ownSubmission.text } : {}),
      ...(ownVote ? { ownVoteId: ownVote.optionId } : {}),
      ...(revealed ? { source: round.source, truth: round.answer } : {}),
      canAdvance,
    };
  },
});

export const start = mutation({
  args: { roomId: v.id("rooms"), guestToken: v.optional(v.string()), requestId: v.string() },
  returns: v.id("games"),
  handler: async (ctx, args): Promise<Id<"games">> => {
    const { actor, room } = await roomAccess(ctx, args.roomId, args.guestToken);
    if (!args.requestId.trim() || args.requestId.length > 128) fail("REQUEST_ID_INVALID");
    const existing = await ctx.db
      .query("games")
      .withIndex("by_room_request", (q) =>
        q.eq("roomId", args.roomId).eq("requestId", args.requestId),
      )
      .unique();
    if (existing) {
      if (existing.startedBy !== actor.playerId) fail("REQUEST_ID_REUSED");
      return existing._id;
    }
    if (room.closedAt !== undefined) fail("ROOM_NOT_OPEN");
    const now = Date.now();
    const match = await beginMatch(ctx, {
      roomId: args.roomId,
      actor,
      minPlayers: MIN_PLAYERS,
      maxPlayers: MAX_PLAYERS,
      nowMs: now,
      hardDeadline: false,
    });
    const participants = await ctx.db
      .query("matchParticipants")
      .withIndex("by_match_seat", (q) => q.eq("matchId", match.id))
      .take(MAX_PLAYERS + 1);
    if (!participants.some((participant) => participant.playerId === actor.playerId))
      fail("HOST_NOT_PRESENT");
    const members = await ctx.db
      .query("roomMembers")
      .withIndex("by_room", (q) => q.eq("roomId", room._id))
      .take(MAX_PLAYERS + 1);
    const players = participants.map((participant) => {
      const member = members.find((candidate) => candidate.playerId === participant.playerId);
      if (!member) fail("GAME_DATA_INVALID");
      return {
        playerId: participant.playerId,
        name: member.displayName,
        seatIndex: participant.seatIndex,
        score: 0,
        roundPoints: 0,
      };
    });
    const gameId = await ctx.db.insert("games", {
      roomId: room._id,
      matchId: match.id,
      cycle: match.cycle,
      requestId: args.requestId,
      startedBy: actor.playerId,
      startedAt: now,
      phase: "writing",
      round: 1,
      players,
    });
    await drawRound(ctx, gameId, room._id, 1);
    return gameId;
  },
});

export const submit = mutation({
  args: {
    gameId: v.id("games"),
    guestToken: v.optional(v.string()),
    text: v.string(),
    round: v.number(),
  },
  returns: v.null(),
  handler: async (ctx, args): Promise<null> => {
    const { actor, game, room } = await gameAccess(ctx, args.gameId, args.guestToken);
    requireRound(args.round, game.round);
    const text = cleanBluff(args.text);
    const normalized = normalizeAnswer(text);
    const prior = await ctx.db
      .query("submissions")
      .withIndex("by_game_round_player", (q) =>
        q.eq("gameId", game._id).eq("round", game.round).eq("playerId", actor.playerId),
      )
      .unique();
    if (prior) {
      if (prior.normalized !== normalized) fail("SUBMISSION_LOCKED");
      return null;
    }
    await requireActiveMatch(ctx, game.matchId, game.roomId);
    if (room.closedAt !== undefined) fail("ROOM_NOT_OPEN");
    if (game.phase !== "writing") fail("WRONG_PHASE");
    const now = Date.now();
    const round = await currentRound(ctx, game);
    const truthMatch = normalized === round.normalizedAnswer;
    await ctx.db.insert("submissions", {
      gameId: game._id,
      round: game.round,
      playerId: actor.playerId,
      text,
      normalized,
      truthMatch,
    });
    if (truthMatch)
      await ctx.db.patch(game._id, {
        players: game.players.map((player) =>
          player.playerId === actor.playerId
            ? { ...player, score: player.score + 2, roundPoints: player.roundPoints + 2 }
            : player,
        ),
      });
    if (await everyoneDone(ctx, game)) await openVoting(ctx, game, now);
    return null;
  },
});

export const vote = mutation({
  args: {
    gameId: v.id("games"),
    guestToken: v.optional(v.string()),
    optionId: v.id("options"),
    round: v.number(),
  },
  returns: v.null(),
  handler: async (ctx, args): Promise<null> => {
    const { actor, game, room } = await gameAccess(ctx, args.gameId, args.guestToken);
    requireRound(args.round, game.round);
    const prior = await ctx.db
      .query("votes")
      .withIndex("by_game_round_player", (q) =>
        q.eq("gameId", game._id).eq("round", game.round).eq("playerId", actor.playerId),
      )
      .unique();
    if (prior) {
      if (prior.optionId !== args.optionId) fail("VOTE_LOCKED");
      return null;
    }
    await requireActiveMatch(ctx, game.matchId, game.roomId);
    if (room.closedAt !== undefined) fail("ROOM_NOT_OPEN");
    if (game.phase !== "voting") fail("WRONG_PHASE");
    const now = Date.now();
    const submission = await ctx.db
      .query("submissions")
      .withIndex("by_game_round_player", (q) =>
        q.eq("gameId", game._id).eq("round", game.round).eq("playerId", actor.playerId),
      )
      .unique();
    if (submission?.truthMatch) fail("VOTE_NOT_ALLOWED");
    const option = await ctx.db.get(args.optionId);
    if (!option || option.gameId !== game._id || option.round !== game.round)
      fail("OPTION_NOT_FOUND");
    if (option.authorIds.includes(actor.playerId)) fail("SELF_VOTE_NOT_ALLOWED");
    await ctx.db.insert("votes", {
      gameId: game._id,
      round: game.round,
      playerId: actor.playerId,
      optionId: option._id,
    });
    if (await everyoneDone(ctx, game)) await revealRound(ctx, game, now);
    return null;
  },
});

export const advance = mutation({
  args: {
    gameId: v.id("games"),
    guestToken: v.optional(v.string()),
    round: v.number(),
    phase: gamePhase,
  },
  returns: v.null(),
  handler: async (ctx, args): Promise<null> => {
    const { actor, game, room } = await gameAccess(ctx, args.gameId, args.guestToken);
    // Conditional transitions acknowledge retries, never consume the next turn.
    if (game.round > 1 && args.phase === "reveal" && args.round === game.round - 1) return null;
    requireRound(args.round, game.round);
    if (args.phase !== game.phase) {
      if (
        (args.phase === "writing" && ["voting", "reveal", "finished"].includes(game.phase)) ||
        (args.phase === "voting" && ["reveal", "finished"].includes(game.phase)) ||
        (args.phase === "reveal" && game.phase === "finished")
      )
        return null;
      fail("STALE_PHASE");
    }
    await requireActiveMatch(ctx, game.matchId, game.roomId);
    if (room.closedAt !== undefined) fail("ROOM_NOT_OPEN");
    const now = Date.now();
    if (game.phase === "writing" || game.phase === "voting") {
      if (room.hostPlayerId !== actor.playerId && !(await everyoneDone(ctx, game)))
        fail("HOST_REQUIRED");
      if (game.phase === "writing") await openVoting(ctx, game, now);
      else await revealRound(ctx, game, now);
    } else if (game.phase === "reveal") {
      if (game.round === TOTAL_ROUNDS) {
        await completeMatch(ctx, { matchId: game.matchId, actor, nowMs: now });
        await ctx.db.patch(game._id, { phase: "finished", finishedAt: now });
      } else {
        const round = game.round + 1;
        await drawRound(ctx, game._id, game.roomId, round);
        await ctx.db.patch(game._id, {
          phase: "writing",
          round,
          revealedAt: undefined,
          players: game.players.map((player) => ({ ...player, roundPoints: 0 })),
        });
      }
    } else fail("WRONG_PHASE");
    return null;
  },
});
