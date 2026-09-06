# Poppycock

A phone-first bluffing party game for **3–12 people**. One peculiar question, a table of convincing lies, and exactly one truth. Six rounds; no accounts, payments, or AI service required.

## Play

1. One person starts a table and shares its four-character code or QR invite.
2. Everyone joins on their own phone. The host starts when at least three players are present.
3. **Write:** invent a plausible answer in 90 seconds. Once submitted, it stays locked.
4. **Vote:** the real answer and the table’s anonymous, shuffled bluffs appear. Pick the truth in 60 seconds; you cannot vote for your own answer.
5. **Reveal:** see the truth, its source, who wrote each bluff, and who believed it.
6. Play six rounds, compare final standings, then rematch in the same room.

A correct vote earns **2 points**. Every person fooled earns each author of that bluff **1 point**. Matching answers appear together, not as duplicate choices. An exact normalized match to the truth earns its author **2 points** and makes that author sit out voting. This is literal answer matching, not semantic grading. Ties share the win.

Missing a writing deadline does not prevent voting. Missing a vote earns no voting points. A late joiner watches the current match and can play in the next one. Match eligibility is captured when play starts; reloading does not create a new player. The host can deal the next question immediately after a reveal; after 15 seconds any participant can continue. Parlor transfers a departed or stale host and ends abandoned matches, with a hard 30-minute match limit.

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

For repeatable browser verification:

```sh
pnpm exec playwright install chromium
pnpm smoke         # four independent guests against an already-running pnpm dev
pnpm smoke:local   # alternatively: own the full local runtime, then stop it
```

`smoke:local` needs ports 3210/3220/3221 free. Both smoke commands exercise the real game and write sanitized screenshots and scoring evidence to `evidence/`; they create synthetic rooms, not mocked game state. Set `CHROMIUM_PATH` to use an installed Chromium instead of Playwright's download. CI builds and checks the app and vendored packages, runs this anonymous-local browser exercise, and retains fresh per-revision evidence as an artifact. It uses no deployment credentials.

## How Parlor is used

This is one application with one game-owned Convex schema, not a game plus a separate room service.

- `@parlor/convex` supplies actual room handlers and the `players`, `rooms`, `roomMembers`, `matches`, and `matchParticipants` tables. Game state extends that schema.
- Game mutations compose `beginMatch`, `requireActiveMatch`, and `completeMatch` with game-specific writes in the same transaction. Immutable match participants govern who may submit and vote.
- `@parlor/auth/server` issues and verifies the access credentials used by those room handlers. The same-origin game endpoint alone may issue a guest credential. A signed HttpOnly continuity cookie preserves identity across short access-token expirations; an arbitrary client-supplied guest ID is never accepted.
- One `@parlor/react` guest provider lives above all room phases. Real Parlor heartbeat, wake-lock, and QR components/controllers serve the room. `@parlor/core` classifies timestamp-based presence against the local display clock; the server controls actual eligibility and host selection.
- A game-owned internal schedule calls Parlor’s bounded abandonment sweeper and schedules cursor continuation. Mutation deadline enforcement does not rely on that schedule running on time.

The exact upstream repository and revision are recorded in [`vendor/parlor/UPSTREAM.json`](vendor/parlor/UPSTREAM.json). Vendored source is not a reimplementation and is not locally patched.

## Privacy and authority

The server owns phase transitions, option order, scoring, and eligibility. Writing-phase projections expose neither the truth nor other players’ submissions. Voting exposes anonymous choices but not authorship, votes, or the source. Reveal is the first public attribution point. Retry-safe input writes are bound to a particular game and round. Public clients cannot seed or reset the database.

The room code is an invitation, not a password. People with it may join as spectators during a game. Choose display names you are comfortable sharing with the room. Guest access tokens are bearer credentials; do not paste browser storage or request headers into bug reports.

## Content and evidence

The **108-card deck** contains 27 cards each in Odd words, Curious objects, Wild nature, and Space oddities: eighteen complete games before a room exhausts the pool. The longest answer is 90 characters, comfortably below the 180-character bluff limit. Cards use original wording grounded in retained source references, not commercial Balderdash cards. Sources are shown at reveal. See [`docs/content-provenance.md`](docs/content-provenance.md) for the deck and provenance policy.

Gameplay has no runtime LLM or external content-fetch dependency: the seeded database is the deck. Local reset is repeatable and seeding is idempotent by stable card key.

The complete game passed a four-browser six-round exercise from an independent clean clone, with authoritative final scores **18 / 8 / 0**, host transfer, reconnection, and a four-player rematch. Inspect the [verification record](docs/verification.md), [sanitized round-by-round trace](evidence/multiplayer-smoke.json), [phone voting](evidence/voting-phone.png), and [final standings](evidence/final-standings-desktop.png).
