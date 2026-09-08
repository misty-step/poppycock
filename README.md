# Poppycock

A phone-first bluffing party game for **3–12 people**. One peculiar question, a table of convincing lies, and exactly one truth. Six rounds; no accounts, payments, or AI service required.

Hosted play: **https://poppycock.mistystep.io** — no account. The party interface, untimed 216-card game, and 48-character avatar picker were deployed and checked on **2026-09-08**. See the [revision-specific verification history](docs/verification.md#verification-history); these docs are not a live deployment-status service.

## Play

1. One person starts a table and shares its four-character code or QR invite.
2. Everyone joins on their own phone. The host starts when at least three players are present.
3. **Write:** invent a plausible answer at your own pace. Once submitted, it stays locked.
4. **Vote:** the real answer and the table’s anonymous, shuffled bluffs appear with uniform lowercase styling, spacing, and terminal punctuation. Pick the truth; you cannot vote for your own answer.
5. **Reveal:** see the truth, its source, who wrote each bluff, and who believed it. Any participant can deal the next question when the table is ready.
6. Play six untimed rounds, compare final standings, then rematch in the same room.

A correct vote earns **2 points**. Every person fooled earns each author of that bluff **1 point**. Matching answers appear together, not as duplicate choices. An exact normalized match to the truth earns its author **2 points** and makes that author sit out voting. This is literal answer matching, not semantic grading. Ties share the win.

Writing and voting advance when everyone eligible has finished. Otherwise, only the host can end the phase, through an explicit confirmation: missing bluffs are skipped, and missing votes earn no voting points. Simply waiting never reveals answers. A disconnected participant retains their turn; explicitly leaving the table releases it. A late joiner watches the current match and can play in the next one. Match eligibility is captured when play starts; reloading does not create a new player.

Poppycock opts out of Parlor’s 30-minute match cap. There are no writing, voting, or reveal timers. Parlor still transfers a departed or stale host and abandons a match after everyone has been away for ten minutes; empty-room housekeeping is not a turn timer.

## Local development

Requirements: Node.js 22.12+ and pnpm 11.25.0. The tracked workspace contains the actual pinned Parlor source; no sibling checkout or cross-repository credentials are needed.

```sh
pnpm install --frozen-lockfile
pnpm bootstrap
pnpm dev
```

Open **http://localhost:3210**. The bootstrap uses a real anonymous local Convex deployment, isolated from other projects, with backend ports **3220/3221**. It generates local server secrets and seeds the curated deck. No Convex production account is required. Initial setup needs network access to download dependencies and the Convex local backend binary.

Use separate browser profiles or private windows for separate players. Tabs in one browser deliberately share one guest identity.

For phones on the same network, put the development machine’s LAN IP in both browser-visible URLs in `.env.local`. For example, if that machine is `192.168.1.50`:

```dotenv
NEXT_PUBLIC_CONVEX_URL=http://192.168.1.50:3220
NEXT_PUBLIC_CONVEX_SITE_URL=http://192.168.1.50:3221
```

Restart `pnpm dev`, then open `http://192.168.1.50:3210` on each phone. Next’s dev-only assets allow only the explicitly configured hostname, not wildcard origins. Localhost URLs refer to the phone itself. Ports 3210/3220/3221 must be reachable from that phone; VPNs, guest Wi-Fi isolation, or a firewall can prevent access. The scripts do not change network/firewall policy. A hosted setup should use HTTPS for both application and Convex.

To repeat the browser exercise over that same non-loopback HTTP origin, run `POPPYCOCK_BASE_URL=http://192.168.1.50:3210 pnpm smoke`. This covers the browser security context used by ordinary HTTP LAN development, where `crypto.randomUUID()` is unavailable.

```sh
pnpm check       # vendored package build, application types, regression tests
pnpm build       # production Next.js build
pnpm format      # format game-owned code, not the pinned upstream snapshot
pnpm reset --yes-delete-local-data  # reset only the isolated local game database
```

The local scripts reject production resets and missing configuration rather than switching to fake data. Keep `.env.local` and `.convex/` private and untracked. See `.env.example` for the server/browser environment boundary.

For repeatable browser verification, use the [smoke procedure](docs/verification.md#reproduce).
It separates the local six-round/rematch exercise from the separately authorized
hosted one-round check. New runs should use `POPPYCOCK_EVIDENCE_DIR` with a fresh
`test-results/` subdirectory rather than overwrite the retained `evidence/`
collection. CI already retains fresh per-revision local output as an artifact
without deployment credentials.

## How Parlor is used

This is one application with one game-owned Convex schema, not a game plus a separate room service.

- `@parlor/convex` supplies actual room handlers and the `players`, `rooms`, `roomMembers`, `matches`, and `matchParticipants` tables. Game state extends that schema.
- Game mutations compose `beginMatch`, `requireActiveMatch`, and `completeMatch` with game-specific writes in the same transaction. Immutable match participants govern who may submit and vote.
- `@parlor/auth/server` issues and verifies the access credentials used by those room handlers. The same-origin game endpoint alone may issue a guest credential. A signed HttpOnly continuity cookie preserves identity across short access-token expirations; an arbitrary client-supplied guest ID is never accepted.
- One `@parlor/react` guest provider lives above all room phases. Real Parlor heartbeat, wake-lock, and QR components/controllers serve the room. `@parlor/core` classifies timestamp-based presence against the local display clock; the server controls actual eligibility and host selection.
- A game-owned internal schedule calls Parlor’s bounded abandonment sweeper and schedules cursor continuation. Poppycock starts matches with `hardDeadline: false`; other Parlor consumers retain the default cap unless they explicitly opt out. No scheduled job advances a Poppycock turn.

The exact upstream repository and revision are recorded in [`vendor/parlor/UPSTREAM.json`](vendor/parlor/UPSTREAM.json). Vendored source is not a reimplementation and is not locally patched.

### Upgrading an existing timed deployment

An existing database needs a two-stage cutover; deploying the final schema directly would reject its stored `games.deadline` fields.

1. Use a release worktree at [`4d53b0d`](https://github.com/misty-step/poppycock/commit/4d53b0d), the migration-stage revision. Explicitly target the intended Convex deployment with its authorized configuration; do not use anonymous-local configuration for production.
2. Deploy that revision’s Convex backend and run its internal **`untimedMigration:run`** action to completion. It pages through old scheduled turn jobs and games, cancels pending turn deadlines, removes stored clocks, and opts still-active matches out of the total cap. It does not reset rooms, submissions, votes, or scores, or reopen terminal matches. At this revision, `pnpm dev` and `pnpm bootstrap` perform the migration automatically for local databases only.
3. Deploy the current Convex backend, run **`seed:run`** to upsert the 216-card deck, and deploy the matching web build. Ask connected players to reload after the web cutover. Use the migration-stage revision, not the old timed release, if rollback is needed.

Fresh databases need no transitional deployment. Migration code and the obsolete schema field deliberately do not remain in the current source. The production deployment completed this migration on 2026-09-08; the earlier local refinement records remain historical.

## Privacy and authority

The server owns phase transitions, option order, scoring, and eligibility. Writing-phase projections expose neither the truth nor other players’ submissions. Voting exposes anonymous choices but not authorship, votes, or the source. Reveal is the first public attribution point. Retry-safe input writes are bound to a particular game and round. Public clients cannot seed or reset the database.

The room code is an invitation, not a password. People with it may join as spectators during a game. Choose display names you are comfortable sharing with the room. Guest access tokens are bearer credentials; do not paste browser storage or request headers into bug reports.

## Content and documentation ownership

The **216-card deck** contains 27 cards each in Odd words, Curious objects, Wild nature, and Space oddities, plus 18 each in **Kitchen secrets, Bright ideas, Living traditions, Remarkable places, Working lives, and Art & music**: thirty-six complete games before a room exhausts the pool. The longest answer is 90 characters, comfortably below the 180-character bluff limit. The original 108 keys and cards are preserved. Cards use original wording grounded in retained source references, not commercial Balderdash cards. Sources are shown at reveal. See [`docs/content-provenance.md`](docs/content-provenance.md) for the deck and provenance policy.

Gameplay has no runtime LLM or external content-fetch dependency: the seeded database is the deck. Local reset is repeatable and seeding is idempotent by stable card key.

This README owns the current rules and contributor orientation;
`docs/content-provenance.md` owns collection-level editorial policy, alongside
the card-level source index in `convex/content.ts`. Linear owns current work and
prioritization, not the rulebook or deck. Current requests authorize changes;
historical issues and receipts are context, not an automatic intake queue.

The [verification guide](docs/verification.md) keeps a reusable smoke procedure
separate from dated delivery records, including the untimed six-round run,
twelve-guest audit, and older local/LAN/hosted exercises. Those records retain
their source revisions, receipts, screenshots, and limitations; Chromium
mobile/touch emulation is not physical-phone testing or current hosted proof.
