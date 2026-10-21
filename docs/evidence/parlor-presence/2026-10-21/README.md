# Bounded Parlor presence adoption

Navi adoption issue: [#20](https://github.com/misty-step/poppycock/issues/20).
Upstream: [Parlor #31](https://github.com/misty-step/parlor/issues/31), fixed by
[Parlor #34](https://github.com/misty-step/parlor/pull/34), released as
[v1.1.0](https://github.com/misty-step/parlor/releases/tag/v1.1.0).

Base is Poppycock `9f33d2ddf38e7d4bf86ed6a09a60e2e9479e0e8b`. Candidate copies
actual `packages/core` source/test and the Convex lifecycle test from Parlor
`1611e2143d0d3dc8b3d7b39f7b568d1cd16c92fd`. Those exact paths are an additional
snapshot in `vendor/parlor/UPSTREAM.json`; the main vendor/reference remains at
`2b8c5c4`, and the independent Cloudflare adapter snapshot remains at `610f571`.
The owner-provided importer regenerated SOURCE.json. This is not a claim that
all vendored packages were upgraded.

## Consumer selection boundary

Poppycock needs at least three participants. With fresh host/second player and
an 18-second-old third peer, the base rejects `game.start` with
`NOT_ENOUGH_PRESENT_PLAYERS`; it does not persist a two-player Poppycock game.
The candidate includes all three. `tests/game.test.ts` pins initial and rematch
at 14,999, 15,000, 15,001, 18,000 and 30,000 ms, and rejects 30,001 ms. Each
rematch follows six real game-owned phase transitions and completion.
`base-game-tests.txt` records the three failing old-core cases;
`candidate-game-tests.txt` records six passing cases. The same application tests
run against both Convex test primitives and the native SQLite Cloudflare adapter.

## Real browser, issuer, game and recovery

The existing `.agents/skills/poppycock-verify/SKILL.md` entry `pnpm smoke:local`
launched this checkout's anonymous local Convex and real Next.js guest issuer,
using independent synthetic Ada/Bea/Cy contexts and later Dax. No hosted account,
credentials or production game data was used.

`native-multiplayer.json` is the unchanged maintained runner: six rendered
rounds, exact final scores 18/8/0, privacy and rejection checks, explicit host
leave/rejoin, Cy offline/reload preserving identity/turn, and four-player rematch.
The offline screenshot was inspected and is retained here.

A disposable fault-injected copy of that same runner delayed only Cy's outgoing
`rooms:heartbeat` WebSocket Mutation frames by 25 seconds. After a real accepted
heartbeat, it waited 18 seconds before each real initial/rematch control. The
route remained connected to the genuine server and forwarded other traffic.
`fault-probe.patch` records that temporary experiment; the maintained runner is
restored byte-for-byte and has no shipped fault-injection path.

On the base, the initial button was disabled and an authenticated start attempt
was rejected with no active match. Only then did the probe send a fresh heartbeat
to continue the normal full game. At rematch, the three other fresh players let
it start, while Cy was excluded. `base-browser.json` records evidence ages
18,058/18,069 ms, visible documents, observed delayed frames and the frozen roster.
The base initial and rematch screenshots were inspected.

The candidate receipt records evidence ages 18,047/18,058 ms and two observed
delayed frames. Its screenshots record the identical timing experiment
without the initial recovery heartbeat: all three initial players and all four
rematch players are included. All source revisions in browser receipts label the
base plus the explicitly described candidate/probe diff; they do not manufacture
a clean commit identity for a dirty checkout.

## Checks and limits

- Vendor contracts: 211 passed.
- Application contracts: 58 passed on Convex and 58 on the native Cloudflare adapter.
- Application/Worker typechecks and formatting passed.
- Independent reviewer verified declared source snapshots byte-for-byte and the
  provenance hash, then independently passed all 16 game cases on both adapters.
- Normal browser journey passed six rounds, exact scores, rejection, recovery and
  rematch. Native CI and deployed readback are recorded on the PR/issue.

The grace is bounded at 30 seconds of evidence age with 15-second heartbeat sends.
Sustained 25-second uplink delay can eventually exceed that bound. Deliberate
leave, roster/cycle validation, capacity, host staleness and abandonment stay
unchanged. Browser offline emulation is not physical-network or phone proof.
The local browser target is genuine Convex, not the production Cloudflare Worker;
Cloudflare application tests and the existing isolated preview qualify that
boundary separately. No production restore or user-data mutation is performed.
