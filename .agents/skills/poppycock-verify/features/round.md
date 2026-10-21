# Write, vote, reveal, and skip deliberately

Players write locked bluffs, vote among anonymous choices, and reveal the truth
with sources. Incomplete phases wait until the host explicitly confirms a skip.

## Sub-features

- `write` accepts one locked bluff per eligible participant.
- `vote` hides authors/truth and rejects voting for one's own bluff.
- `reveal` attributes choices and exposes the sourced truth.
- `skip` cancels or confirms host-only early phase endings.
- `untimed` keeps incomplete phases open without a turn timer.

## How to get to it (user POV)

- Host chooses `Start game` with three present players.
- Fill `Your answer`, choose `Submit answer`, select a choice and `Lock vote`.
- Host uses `Host controls → End writing` or `Reveal answers`; anyone playing may use `Next round` after reveal.

## Driving it with control.mjs and Playwright

Preconditions: isolated local synthetic guests; full smoke starts its own runtime.

- **Complete rounds.** Run `pnpm smoke:local`. Each rendered phase appears before actions. Writing has no truth/source/options. Voting has no truth/authors/voters; self-vote is rejected by the server. Submission retry leaves accepted count unchanged. Reveal has an HTTPS source and expected points.
- **Late spectator.** The same smoke joins Dax in round four; no answer box appears and a forged submission is rejected with `MATCH_PARTICIPANT_REQUIRED`.
- **Deliberate skips.** On an owned `pnpm dev`, run `.agents/skills/poppycock-verify/scripts/control.mjs focused test-results/round-NEW`. Submit one bluff; cancel `End writing` with `Keep writing`, requiring unchanged writing. Confirm it, cancel `Reveal answers` with `Keep voting`, then confirm. Exactly one submission and zero points for missing votes remain. Jun has no host controls but can deal round two after reveal.
- **Long wait and literal truth.** Run `pnpm exec vitest run tests/game.test.ts`. Controlled-time tests cover long waits, no hard match cap, stale retries, and literal-truth behavior. A quick browser round is not elapsed-time proof.

## Gotchas

- A disconnected guest retains a turn; only explicit leave releases it. Waiting alone never reveals answers.
- The known synthetic bluffs let the smoke identify the remaining truth choice; it does not expose hidden truth through a test endpoint.
- A screenshot of an open confirmation does not prove cancellation or scoring after confirmation. Inspect the receipt's assertions.
- Slow-network latency and long-lived real-session expiry need separate targeted runs; offline/reconnect is covered by the recovery feature.
