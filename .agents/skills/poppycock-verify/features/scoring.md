# Score six rounds and rematch

Players see earned points at reveal, final standings after six rounds, and a new
match in the same table with fresh content and scores reset.

## Sub-features

- `points` awards two for truth and one per fooled voter to every bluff author.
- `merged-bluffs` merges identical answers with shared attribution.
- `standings` shows the complete match totals.
- `rematch` includes late spectators and resets scores in the same room.

## How to get to it (user POV)

- Complete each vote/reveal and choose `Next round`.
- After round six choose `Final scores`, then `Play again`.

## Driving it with the pinned multiplayer smoke

Preconditions: skill launch prerequisites and unused local ports.

- **Six rounds.** Run `pnpm smoke:local`. Inspect its fresh `multiplayer-smoke.json`: six records, distinct questions, per-round gained points **3/1/0**, except round two **3/3/0** for Ada/Bea/Cy.
- **Merged attribution.** Round two submits identical Ada/Bea bluffs, requiring one choice whose authors include both players and expected points for each.
- **Final result.** The same run asserts totals **18/8/0**, a cleared active match, and rendered final standings. Inspect the desktop/phone standings screenshots from this receipt's directory.
- **Rematch.** `Play again` creates a different game in the same room, includes Dax, has four participants and all-zero scores, and draws an unseen question. All three 390px pages have no horizontal overflow.
- **Literal truth/ties.** Run `pnpm exec vitest run tests/game.test.ts` after building Parlor. Existing rule tests cover truth matching and tie outcomes; the browser smoke intentionally follows a deterministic scoring pattern rather than claiming every score branch.

## Gotchas

- Freshly randomized questions are expected; scores, author attribution, and invariants are stable assertions.
- Final screenshots alone cannot establish calculation correctness. Receipt assertions and rendered interactions are both required.
- A rematch leaves an active synthetic local game. It is not safe as an unapproved production smoke.
