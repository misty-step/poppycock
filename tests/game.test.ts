/// <reference types="vite/client" />

import { ABANDON_AFTER_MS } from "@parlor/core";
import { convexTest } from "convex-test";
import type { TestConvex } from "convex-test";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { api, internal } from "../convex/_generated/api";
import type { Id } from "../convex/_generated/dataModel";
import { normalizeAnswer, TOTAL_ROUNDS } from "../convex/rules";
import schema from "../convex/schema";

const modules = import.meta.glob("../convex/**/*.ts");
type TestContext = TestConvex<typeof schema>;
type Client = Omit<TestContext, "withIdentity" | "registerComponent">;

async function fixture(count = 3) {
  const t = convexTest(schema, modules);
  await t.action(internal.seed.run, {});
  const clients = Array.from({ length: count }, (_, index) =>
    t.withIdentity({ subject: `player-${index}`, issuer: "poppycock-test" }),
  );
  const host = clients[0]!;
  const room = await host.mutation(api.rooms.createRoom, { displayName: "Host" });
  const playerIds: Id<"players">[] = [room.playerId];
  for (let index = 1; index < count; index += 1) {
    const joined = await clients[index]!.mutation(api.rooms.joinRoom, {
      code: room.code,
      displayName: `Player ${index}`,
    });
    if (!joined.ok) throw new Error(joined.code);
    playerIds.push(joined.playerId);
  }
  const gameId = await host.mutation(api.game.start, {
    roomId: room.roomId,
    requestId: "first-match",
  });
  return { t, clients, host, room, playerIds, gameId };
}

async function gameView(client: Client, roomId: Id<"rooms">) {
  const view = await client.query(api.game.view, { roomId });
  if (!view) throw new Error("Expected an existing game");
  return view;
}

async function privateRound(t: TestContext, gameId: Id<"games">, round = 1) {
  const row = await t.run((ctx) =>
    ctx.db
      .query("rounds")
      .withIndex("by_game_round", (q) => q.eq("gameId", gameId).eq("round", round))
      .unique(),
  );
  if (!row) throw new Error("Expected a round");
  return row;
}

async function optionId(
  t: TestContext,
  gameId: Id<"games">,
  predicate: (option: { truth: boolean; text: string }) => boolean,
  round = 1,
) {
  const options = await t.run((ctx) =>
    ctx.db
      .query("options")
      .withIndex("by_game_round_order", (q) => q.eq("gameId", gameId).eq("round", round))
      .collect(),
  );
  const option = options.find(predicate);
  if (!option) throw new Error("Expected a selectable option");
  return option._id;
}

beforeEach(() => vi.useFakeTimers({ now: new Date("2026-09-06T12:00:00Z") }));
afterEach(() => {
  vi.clearAllTimers();
  vi.useRealTimers();
  vi.unstubAllEnvs();
});

describe("authoritative Poppycock rounds", () => {
  it("keeps chosen avatars attached to players, not seats or room membership", async () => {
    const { t, host, clients, room, playerIds } = await fixture();
    const original = await gameView(clients[1]!, room.roomId);
    await expect(t.mutation(api.avatars.choose, { avatarId: "owl" })).rejects.toThrow();
    await expect(t.query(api.avatars.forRoom, { roomId: room.roomId })).rejects.toThrow();
    await host.mutation(api.avatars.choose, { avatarId: "owl" });
    await clients[1]!.mutation(api.avatars.choose, { avatarId: "pear" });
    await host.mutation(api.avatars.choose, { avatarId: "fox" });
    expect(await clients[1]!.query(api.avatars.forRoom, { roomId: room.roomId })).toEqual({
      [playerIds[0]!]: "fox",
      [playerIds[1]!]: "pear",
    });

    const outsider = t.withIdentity({ subject: "elsewhere", issuer: "poppycock-test" });
    const elsewhere = await outsider.mutation(api.rooms.createRoom, { displayName: "Elsewhere" });
    await expect(outsider.query(api.avatars.forRoom, { roomId: room.roomId })).rejects.toThrow(
      "NOT_A_ROOM_MEMBER",
    );
    await host.mutation(api.rooms.leaveRoom, { roomId: room.roomId });
    expect(await clients[1]!.query(api.avatars.forRoom, { roomId: room.roomId })).toEqual({
      [playerIds[0]!]: "fox",
      [playerIds[1]!]: "pear",
    });
    const joined = await host.mutation(api.rooms.joinRoom, {
      code: elsewhere.code,
      displayName: "Host",
    });
    expect(joined).toMatchObject({ ok: true, seatIndex: 1 });
    expect(await outsider.query(api.avatars.forRoom, { roomId: elsewhere.roomId })).toEqual({
      [playerIds[0]!]: "fox",
    });
    expect((await gameView(clients[1]!, room.roomId)).players).toEqual(original.players);
  });

  it("keeps secrets private, freezes eligibility, and rejects self-votes and spectator writes", async () => {
    const { t, clients, host, room, gameId } = await fixture();
    const late = t.withIdentity({ subject: "late", issuer: "poppycock-test" });
    const joined = await late.mutation(api.rooms.joinRoom, {
      code: room.code,
      displayName: "Late guest",
    });
    expect(joined.ok).toBe(true);
    const outsider = t.withIdentity({ subject: "outsider", issuer: "poppycock-test" });
    await outsider.mutation(api.rooms.createRoom, { displayName: "Outsider" });
    await expect(outsider.query(api.game.view, { roomId: room.roomId })).rejects.toThrow(
      "NOT_A_ROOM_MEMBER",
    );
    await expect(t.query(api.game.view, { roomId: room.roomId })).rejects.toThrow();
    expect(await gameView(late, room.roomId)).toMatchObject({ participant: false, playerCount: 3 });
    await expect(
      late.mutation(api.game.submit, { gameId, round: 1, text: "A forbidden bluff" }),
    ).rejects.toThrow("MATCH_PARTICIPANT_REQUIRED");
    await host.mutation(api.game.submit, { gameId, round: 1, text: "A dancing teapot" });
    const writing = await gameView(clients[1]!, room.roomId);
    expect(writing.options).toEqual([]);
    expect(writing).not.toHaveProperty("ownText");
    expect(writing).not.toHaveProperty("truth");
    expect(writing).not.toHaveProperty("source");
    for (let index = 1; index < clients.length; index += 1) {
      await clients[index]!.mutation(api.game.submit, {
        gameId,
        round: 1,
        text: `An implausible circus ${index}`,
      });
    }
    const voting = await gameView(host, room.roomId);
    expect(voting.phase).toBe("voting");
    expect(voting).not.toHaveProperty("truth");
    expect(voting).not.toHaveProperty("source");
    for (const option of voting.options) {
      expect(option).not.toHaveProperty("truth");
      expect(option).not.toHaveProperty("authors");
      expect(option).not.toHaveProperty("voters");
    }
    const otherView = await gameView(clients[1]!, room.roomId);
    expect(otherView.options.map(({ id, text }) => ({ id, text }))).toEqual(
      voting.options.map(({ id, text }) => ({ id, text })),
    );
    const own = await optionId(t, gameId, (option) => option.text === "A dancing teapot");
    await expect(host.mutation(api.game.vote, { gameId, round: 1, optionId: own })).rejects.toThrow(
      "SELF_VOTE_NOT_ALLOWED",
    );
    await expect(late.mutation(api.game.vote, { gameId, round: 1, optionId: own })).rejects.toThrow(
      "MATCH_PARTICIPANT_REQUIRED",
    );
    await expect(
      late.mutation(api.game.advance, { gameId, round: 1, phase: "voting" }),
    ).rejects.toThrow("MATCH_PARTICIPANT_REQUIRED");
    expect((await gameView(late, room.roomId)).canAdvance).toBe(false);
    const truth = await optionId(t, gameId, (option) => option.truth);
    await host.mutation(api.game.vote, { gameId, round: 1, optionId: truth });
    const receipt = await gameView(host, room.roomId);
    expect(receipt).toMatchObject({ phase: "voting", voted: true, ownVoteId: truth });
    expect(receipt).not.toHaveProperty("truth");
    expect(await gameView(clients[1]!, room.roomId)).not.toHaveProperty("ownVoteId");
    expect(await gameView(late, room.roomId)).not.toHaveProperty("ownVoteId");
  });

  it("merges duplicate bluffs, credits all authors, and makes truth bonuses and retries non-exploitable", async () => {
    const { t, clients, host, room, gameId, playerIds } = await fixture(4);
    expect(
      await host.mutation(api.game.start, { roomId: room.roomId, requestId: "first-match" }),
    ).toBe(gameId);
    const round = await privateRound(t, gameId);
    await host.mutation(api.game.submit, { gameId, round: 1, text: "A dancing teapot." });
    await clients[1]!.mutation(api.game.submit, {
      gameId,
      round: 1,
      text: "  a DANCING   teapot  ",
    });
    await clients[2]!.mutation(api.game.submit, { gameId, round: 1, text: round.answer });
    await clients[2]!.mutation(api.game.submit, { gameId, round: 1, text: round.answer });
    const hidden = await gameView(host, room.roomId);
    expect(hidden.players.map((player) => player.score)).toEqual([0, 0, 0, 0]);
    expect(hidden.players.map((player) => player.roundPoints)).toEqual([0, 0, 0, 0]);
    const credited = await t.run((ctx) => ctx.db.get(gameId));
    expect(credited?.players.find((player) => player.playerId === playerIds[2])?.score).toBe(2);
    await clients[3]!.mutation(api.game.submit, {
      gameId,
      round: 1,
      text: "A moon-powered unicycle",
    });
    const voting = await gameView(host, room.roomId);
    expect(voting.options.map((option) => option.text).sort()).toEqual(
      [normalizeAnswer(round.answer), "a dancing teapot", "a moon-powered unicycle"].sort(),
    );
    expect((await gameView(clients[2]!, room.roomId)).voted).toBe(true);
    const truth = await optionId(t, gameId, (option) => option.truth);
    const merged = await optionId(t, gameId, (option) => option.text === "A dancing teapot.");
    const lone = await optionId(t, gameId, (option) => option.text === "A moon-powered unicycle");
    await expect(
      clients[2]!.mutation(api.game.vote, { gameId, round: 1, optionId: lone }),
    ).rejects.toThrow("VOTE_NOT_ALLOWED");
    await expect(
      clients[1]!.mutation(api.game.vote, { gameId, round: 1, optionId: merged }),
    ).rejects.toThrow("SELF_VOTE_NOT_ALLOWED");
    await host.mutation(api.game.vote, { gameId, round: 1, optionId: truth });
    await host.mutation(api.game.vote, { gameId, round: 1, optionId: truth });
    await expect(
      host.mutation(api.game.vote, { gameId, round: 1, optionId: lone }),
    ).rejects.toThrow("VOTE_LOCKED");
    await clients[1]!.mutation(api.game.vote, { gameId, round: 1, optionId: lone });
    await clients[3]!.mutation(api.game.vote, { gameId, round: 1, optionId: merged });
    await clients[3]!.mutation(api.game.vote, { gameId, round: 1, optionId: merged });
    await clients[2]!.mutation(api.game.submit, { gameId, round: 1, text: round.answer });
    const reveal = await gameView(host, room.roomId);
    expect(reveal.phase).toBe("reveal");
    expect(reveal.players.map((player) => player.score)).toEqual([3, 1, 2, 1]);
    expect(reveal.players.map((player) => player.roundPoints)).toEqual([3, 1, 2, 1]);
    expect(reveal.truth).toBe(round.answer);
    expect(reveal.source).toEqual(round.source);
    expect(reveal.options.find((option) => option.id === merged)?.authors?.sort()).toEqual(
      [playerIds[0], playerIds[1]].sort(),
    );
    expect(reveal.options.find((option) => option.id === merged)?.voters).toEqual([playerIds[3]]);
  });

  it("keeps writing and voting open past both former turn timers and the match cap", async () => {
    const { t, clients, host, room, gameId } = await fixture();
    await host.mutation(api.game.submit, { gameId, round: 1, text: "A dancing teapot." });
    async function waitAtTheTable() {
      vi.advanceTimersByTime(45 * 60_000);
      await t.finishInProgressScheduledFunctions();
      for (const client of clients)
        await client.mutation(api.rooms.heartbeat, { roomId: room.roomId });
      await t.mutation(internal.maintenance.sweepAbandoned, {});
    }
    await waitAtTheTable();
    expect(await gameView(host, room.roomId)).toMatchObject({
      phase: "writing",
      submissionCount: 1,
      options: [],
    });
    await clients[1]!.mutation(api.game.submit, { gameId, round: 1, text: "A silver compass!" });
    await clients[2]!.mutation(api.game.submit, { gameId, round: 1, text: "A paper submarine?" });
    await waitAtTheTable();
    const waiting = await gameView(clients[1]!, room.roomId);
    expect(waiting).toMatchObject({ phase: "voting", voteCount: 0, canAdvance: false });
    expect(waiting).not.toHaveProperty("truth");
    expect(waiting).not.toHaveProperty("source");
    expect(waiting.options.map((option) => option.text)).toEqual(
      expect.arrayContaining(["a dancing teapot", "a silver compass", "a paper submarine"]),
    );
    await expect(
      clients[1]!.mutation(api.game.advance, { gameId, round: 1, phase: "voting" }),
    ).rejects.toThrow("HOST_REQUIRED");
    const truth = await optionId(t, gameId, (option) => option.truth);
    for (const client of clients)
      await client.mutation(api.game.vote, { gameId, round: 1, optionId: truth });
    expect((await gameView(host, room.roomId)).phase).toBe("reveal");
  });

  it("allows deliberate host skips without letting retries consume another turn", async () => {
    const { t, clients, host, room, gameId } = await fixture();
    await host.mutation(api.game.submit, { gameId, round: 1, text: "A dancing teapot" });
    await expect(
      clients[1]!.mutation(api.game.advance, { gameId, round: 1, phase: "writing" }),
    ).rejects.toThrow("HOST_REQUIRED");
    await host.mutation(api.game.advance, { gameId, round: 1, phase: "writing" });
    await host.mutation(api.game.advance, { gameId, round: 1, phase: "writing" });
    const truth = await optionId(t, gameId, (option) => option.truth);
    const bluff = await optionId(t, gameId, (option) => !option.truth);
    await host.mutation(api.game.vote, { gameId, round: 1, optionId: truth });
    // An explicitly skipped writing turn does not take away the right to vote.
    await clients[1]!.mutation(api.game.vote, { gameId, round: 1, optionId: bluff });
    await host.mutation(api.game.advance, { gameId, round: 1, phase: "voting" });
    await host.mutation(api.game.advance, { gameId, round: 1, phase: "voting" });
    expect((await gameView(host, room.roomId)).players.map((player) => player.score)).toEqual([
      3, 0, 0,
    ]);
    expect((await gameView(clients[1]!, room.roomId)).canAdvance).toBe(true);
    await clients[1]!.mutation(api.game.advance, { gameId, round: 1, phase: "reveal" });
    await clients[1]!.mutation(api.game.advance, { gameId, round: 1, phase: "reveal" });
    await expect(
      host.mutation(api.game.submit, { gameId, round: 1, text: "A dancing teapot" }),
    ).rejects.toThrow("STALE_ROUND");
    expect((await gameView(host, room.roomId)).round).toBe(2);
    await host.mutation(api.game.advance, { gameId, round: 2, phase: "writing" });
    await expect(
      host.mutation(api.game.vote, { gameId, round: 2, optionId: truth }),
    ).rejects.toThrow("OPTION_NOT_FOUND");
    expect(await gameView(host, room.roomId)).toMatchObject({
      round: 2,
      phase: "voting",
      voteCount: 0,
    });
  });

  it("finishes six untimed rounds and rematches without repeating content", async () => {
    const { t, clients, host, room, gameId } = await fixture();
    const questions = new Set<string>();
    const categories = new Set<string>();
    for (let round = 1; round <= TOTAL_ROUNDS; round += 1) {
      const writing = await gameView(host, room.roomId);
      expect(writing).toMatchObject({ round, phase: "writing" });
      expect(questions.has(writing.prompt.question)).toBe(false);
      questions.add(writing.prompt.question);
      categories.add(writing.prompt.category);
      for (const [index, client] of clients.entries())
        await client.mutation(api.game.submit, {
          gameId,
          round,
          text: `A make-believe invention for player ${index}`,
        });
      expect((await gameView(host, room.roomId)).phase).toBe("voting");
      const truth = await optionId(t, gameId, (option) => option.truth, round);
      for (const client of clients)
        await client.mutation(api.game.vote, { gameId, round, optionId: truth });
      expect((await gameView(host, room.roomId)).phase).toBe("reveal");
      await clients[1]!.mutation(api.game.advance, { gameId, round, phase: "reveal" });
    }
    expect(await gameView(host, room.roomId)).toMatchObject({ phase: "finished", round: 6 });
    expect((await gameView(host, room.roomId)).players.map((player) => player.score)).toEqual([
      12, 12, 12,
    ]);
    expect(
      (await host.query(api.rooms.getRoomState, { roomId: room.roomId })).activeMatch,
    ).toBeNull();
    for (const client of clients)
      await client.mutation(api.rooms.heartbeat, { roomId: room.roomId });
    const late = t.withIdentity({ subject: "new-cycle", issuer: "poppycock-test" });
    await late.mutation(api.rooms.joinRoom, { code: room.code, displayName: "New challenger" });
    const nextGameId = await host.mutation(api.game.start, {
      roomId: room.roomId,
      requestId: "rematch",
    });
    expect(nextGameId).not.toBe(gameId);
    const rematch = await gameView(late, room.roomId);
    expect(rematch).toMatchObject({
      round: 1,
      phase: "writing",
      participant: true,
      playerCount: 4,
    });
    expect(rematch.players.map((player) => player.score)).toEqual([0, 0, 0, 0]);
    expect(questions.has(rematch.prompt.question)).toBe(false);
    expect(categories.size).toBe(TOTAL_ROUNDS);
  });

  it("retains departed authors and their points without making them block early phase completion", async () => {
    const { t, clients, host, room, gameId, playerIds } = await fixture();
    await host.mutation(api.game.submit, { gameId, round: 1, text: "A dancing teapot" });
    await clients[1]!.mutation(api.game.submit, {
      gameId,
      round: 1,
      text: "A departed author's bluff",
    });
    await clients[1]!.mutation(api.rooms.leaveRoom, { roomId: room.roomId });
    await clients[2]!.mutation(api.game.submit, {
      gameId,
      round: 1,
      text: "A moon-powered unicycle",
    });
    expect((await gameView(host, room.roomId)).phase).toBe("voting");
    const departed = await optionId(
      t,
      gameId,
      (option) => option.text === "A departed author's bluff",
    );
    const truth = await optionId(t, gameId, (option) => option.truth);
    await host.mutation(api.game.vote, { gameId, round: 1, optionId: departed });
    await clients[2]!.mutation(api.game.vote, { gameId, round: 1, optionId: truth });
    const reveal = await gameView(host, room.roomId);
    expect(reveal.phase).toBe("reveal");
    expect(reveal.players.find((player) => player.playerId === playerIds[1])).toMatchObject({
      name: "Player 1",
      score: 1,
      roundPoints: 1,
    });
    expect(reveal.options.find((option) => option.id === departed)?.authors).toEqual([
      playerIds[1],
    ]);
  });

  it("continues abandonment beyond its first bounded page and makes game rows inert", async () => {
    const { t, host, room, gameId } = await fixture();
    await t.run(async (ctx) => {
      const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      for (let index = 0; index < 54; index += 1) {
        const players: Id<"players">[] = [];
        for (let seat = 0; seat < 3; seat += 1)
          players.push(
            await ctx.db.insert("players", {
              identityKey: `sweeper-${index}-${seat}`,
              kind: "authenticated",
              createdAt: Date.now(),
            }),
          );
        const roomId = await ctx.db.insert("rooms", {
          code: `TEST${alphabet[Math.floor(index / alphabet.length)]}${alphabet[index % alphabet.length]}`,
          hostPlayerId: players[0]!,
          createdAt: Date.now(),
        });
        const matchId = await ctx.db.insert("matches", {
          roomId,
          cycle: 1,
          status: "active",
          startedAt: Date.now(),
        });
        for (const [seatIndex, playerId] of players.entries()) {
          await ctx.db.insert("roomMembers", {
            roomId,
            playerId,
            displayName: `Seat ${seatIndex}`,
            seatIndex,
            joinedAt: Date.now(),
            lastSeenAt: Date.now(),
            eligibleFromCycle: 1,
          });
          await ctx.db.insert("matchParticipants", { matchId, playerId, seatIndex });
        }
      }
    });
    vi.setSystemTime(Date.now() + ABANDON_AFTER_MS + 1);
    const firstPage = await t.mutation(internal.maintenance.sweepAbandoned, {});
    expect(firstPage.hasMore).toBe(true);
    await t.finishAllScheduledFunctions(vi.runAllTimers);
    expect(
      await t.run((ctx) =>
        ctx.db
          .query("matches")
          .withIndex("by_status_started_at", (q) => q.eq("status", "active"))
          .collect(),
      ),
    ).toEqual([]);
    const abandoned = await gameView(host, room.roomId);
    expect(abandoned.phase).toBe("abandoned");
    expect(abandoned).not.toHaveProperty("truth");
    expect(abandoned.options).toEqual([]);
    await expect(
      host.mutation(api.game.submit, { gameId, round: 1, text: "Too late for an abandoned game" }),
    ).rejects.toThrow("MATCH_NOT_ACTIVE");
  });

  it("seeds idempotently and restricts complete, content-preserving resets to local deployments", async () => {
    const { t, host, gameId } = await fixture();
    await host.mutation(api.avatars.choose, { avatarId: "owl" });
    const before = await t.run((ctx) => ctx.db.query("cards").collect());
    expect(await t.action(internal.seed.run, {})).toEqual({
      inserted: 0,
      updated: 0,
      retired: 0,
      total: before.length,
    });
    vi.stubEnv("POPPYCOCK_LOCAL", "false");
    await expect(t.action(internal.seed.reset, {})).rejects.toThrow("LOCAL_RESET_ONLY");
    expect(await t.run((ctx) => ctx.db.get(gameId))).not.toBeNull();
    vi.stubEnv("POPPYCOCK_LOCAL", "true");
    await t.action(internal.seed.reset, {});
    expect(await t.run((ctx) => ctx.db.query("games").collect())).toEqual([]);
    expect(await t.run((ctx) => ctx.db.query("rooms").collect())).toEqual([]);
    expect(await t.run((ctx) => ctx.db.query("players").collect())).toEqual([]);
    expect(await t.run((ctx) => ctx.db.query("playerAvatars").collect())).toEqual([]);
    expect(await t.run((ctx) => ctx.db.query("cards").collect())).toEqual(before);
  });
});
