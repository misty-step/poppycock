# Stories

<!-- Root artifact: what users must be able to do. One file, ids never
reused, criteria a check can fail on. skill://user-stories guides edits. -->

## Capability: Table

## US-001 Start a table and let friends join

Statement: When I want to play with people in the same place, I want a
table with a short code, so three to twelve of us can join on our own
phones without accounts.

Criteria:
1. WHEN a host creates a room, THE SYSTEM SHALL return a join code and a
   host guest identity.
2. WHEN at least three players are present, THE SYSTEM SHALL let the host
   start a match.
3. IF fewer than three players are present, THEN THE SYSTEM SHALL refuse
   to start.

No-gos: no accounts, payments, or AI service required to play.

Evidence: `tests/game.test.ts`

## Capability: Round

## US-002 Write, vote, and reveal one question

Statement: When a round is live, I want to write a bluff, then pick the
truth from a shuffled table, so we can see who fooled whom before the next
question.

Criteria:
1. WHEN every eligible player has submitted, THE SYSTEM SHALL lock those
   answers and open voting.
2. WHEN voting opens, THE SYSTEM SHALL show the truth and the bluffs with
   uniform styling and SHALL prevent a player from voting for their own
   answer.
3. WHEN every eligible vote is in, THE SYSTEM SHALL reveal the truth, each
   bluff's author, and who believed it.
4. IF the host confirms an early end to a phase, THEN THE SYSTEM SHALL skip
   missing bluffs and award no voting points for missing votes.
5. IF nobody acts, THEN THE SYSTEM SHALL not reveal answers merely because
   time passed.

No-gos: no turn timers; no semantic grading of bluffs.

Evidence: `tests/game.test.ts`

## Capability: Scoring

## US-003 Score literal truth and successful bluffs

Statement: When a round reveals, I want points for catching the truth and
for fooling others, so a match of six rounds has a standing we can rematch.

Criteria:
1. WHEN a player votes for the true answer, THE SYSTEM SHALL award that
   player 2 points.
2. WHEN other players vote for a bluff, THE SYSTEM SHALL award its author
   1 point per fooled voter.
3. WHEN a submitted answer matches the truth after normalization, THE
   SYSTEM SHALL award its author 2 points and exclude that author from
   voting.
4. WHEN six rounds are complete, THE SYSTEM SHALL show final standings and
   allow a rematch in the same room.

No-gos: no AI judging, no extra game modes.

Evidence: `tests/game.test.ts`, `convex/rules.ts`
