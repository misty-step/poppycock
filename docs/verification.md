# Verify Poppycock

Agent entry point: [poppycock-verify](../.agents/skills/poppycock-verify/SKILL.md).
The procedures below are reusable. [Dated records](#verification-history) describe
only their named revisions, environments, and exercised surfaces—not the current
branch or whatever is presently hosted.

## Choose the exercise

Run from the repository root. [package.json](../package.json) owns commands;
[README rules](../README.md#play) own gameplay. Do not replay six rounds for a
copy-only or isolated presentation change.

| Changed contract | Smallest useful check | What it does not establish |
| --- | --- | --- |
| Types or application integration | `pnpm build:parlor`, then `pnpm typecheck`; `pnpm build` for production bundling | Rendered behavior or a deployment |
| Guest issuer, cookie continuity, same-origin rejection | `pnpm build:parlor`, then `pnpm test -- tests/session.test.ts`; exercise [identity recovery](#identity-and-recovery) for browser integration changes | Production cookies, CDN/proxy behavior, or real expiry from fake time alone |
| Scoring, privacy, eligibility, untimed phases, rematch | `pnpm build:parlor`, then `pnpm test -- tests/game.test.ts`; full local smoke when the multiplayer path changed | Unit fixtures use Convex test identities, not the HTTP guest issuer |
| Deck, pack selection, provenance registry | `pnpm test -- tests/content.test.ts`; game tests for draw-rule changes; `pnpm catalog` regenerates owned artifacts | Source accuracy or editorial quality; `pnpm sources` is an explicit network URL audit, not routine gameplay setup |
| Avatar, dialog, responsive layout, keyboard behavior | The applicable [focused browser journey](#focused-browser-journeys) against real local services | A screenshot alone cannot prove saved state, cancellation, or authorization |
| Parlor pin or integration boundary | Imported [Parlor guidance](../.agents/skills/parlor/SKILL.md), `pnpm test:parlor`, and affected game/issuer/browser checks | A framework test does not exercise this game's frontend |
| Broad executable cutover | `pnpm check` plus the affected browser path; CI also builds production and verifies vendored packages | Hosted readiness or physical devices |

The existing [CI workflow](../.github/workflows/ci.yml) already runs meaningful
unit, type, build, and real multiplayer checks using synthetic local state. It
does not deploy or need an agent/hosted credential. No second runner is needed.

## Reproduce

### Target and prerequisites

Use an owned checkout on a trusted development host. Requirements are
[Node/pnpm versions and environment boundaries](../README.md#local-development),
network access for locked dependencies and the first real Convex backend download,
and Chromium dependencies. No Convex account, LLM, or hosted game access is needed.
Gameplay reads the source-backed seeded catalog, not a fake backend.

Ports **3210/3220/3221** must be free. The existing dev servers bind beyond
loopback for LAN development; this procedure does not open firewalls, create a
tunnel, or grant public access. Never stop an unrelated process to free a port.
The scripts reject cloud selectors, mismatched anonymous backend state, and
symlinked Convex state; do not bypass those guards or copy production secrets.

For first-setup proof, use a disposable checkout of the exact candidate without
`.env.local`, `.convex/`, `node_modules/`, or `.next/`. A worktree does not contain
uncommitted edits: explicitly carry the reviewed candidate source, not local
state or credentials. Ordinary repeat runs reuse only that checkout's database
and signing secrets; every smoke creates fresh browser identities and a new room.

### Self-contained local run

```sh
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
POPPYCOCK_REVISION="$(git rev-parse HEAD)" pnpm smoke:local
```

On a minimal Linux host, Playwright may also need OS libraries; use its documented
`install --with-deps chromium` only with authority to install system packages
(CI already does). `CHROMIUM_PATH` can select an installed Chromium instead.

[`smoke-local.mjs`](../scripts/smoke-local.mjs) creates/configures the anonymous
backend, builds Parlor, deploys functions, seeds the catalog, starts Next.js,
waits for HTTP readiness, runs [`smoke.mjs`](../scripts/smoke.mjs), and stops its
servers. Browser setup is four independent contexts: Ada (1440×1100), Bea, Cy,
and Dax (390×844). Ada/Bea/Cy play; Dax joins late. Local backend readiness is
bounded at 180 seconds, function deployment at 120 seconds, web readiness at
60 seconds, and page actions at 15 seconds. Failure output names the failed
stage; CI bounds the entire job as well.

By default each smoke atomically creates a new `test-results/local-smoke-*`
or `test-results/public-smoke-*` directory and prints its path on stderr.
To choose a location, set `POPPYCOCK_EVIDENCE_DIR` to a **new** repo-relative or
absolute directory. Existing directories (even empty ones) are rejected before
browser launch; a failed run cannot overwrite or borrow a previous pass.
CI's fresh `test-results/multiplayer/` override remains supported.

`POPPYCOCK_REVISION` is a label, not a checkout or deployment operation. If source
is dirty, retain the reviewed diff/source snapshot in approved artifact storage
and record its identity alongside the base commit. Keep
[`vendor/parlor/UPSTREAM.json`](../vendor/parlor/UPSTREAM.json) with the candidate.
Do not label an unknown working tree or mismatched deployed target as that commit.

### Interactive or already-running local target

```sh
pnpm bootstrap
pnpm dev
```

Run long-lived development through the harness's supervised process tool and
wait for both Convex function readiness and a successful HTTP response at
`http://localhost:3210`. `pnpm bootstrap` exits after seeding; `pnpm dev` owns
the live backend/web pair. Do not start either alongside `pnpm smoke:local`.
Against your running pair, `pnpm smoke` owns only its browser and evidence.

Use the native browser tools or repository-pinned Playwright. Separate tabs in
one context **share a guest**; create an isolated browser context/profile per
player (the existing smoke shows `browser.newContext()`), not just extra tabs.
Keep those contexts alive during a journey and close only the ones you created.
For LAN changes follow the [README setup](../README.md#local-development) and
set `POPPYCOCK_BASE_URL` to that same approved local/LAN app. Do not point the
local smoke at a hosted app or an unrelated service. A loopback pass says nothing
about reachability from a phone.

## Inspect the result

Open the newly printed `multiplayer-smoke.json`, plus relevant images from that
same directory. A successful complete run has `result: "passed"`, `completedAt`,
six round records, and Ada/Bea/Cy final scores **18/8/0**. Check `origin`,
`sourceRevision`, `parlorRevision`, timestamps, and the source snapshot. The
receipt is written only after assertions pass; absent output, partial screenshots,
an exception, or an earlier receipt is not a pass.

The smoke exercises real rendered create/join/start/submit/vote/leave/rejoin/
rematch controls. Its authenticated queries independently assert:

- Writing exposes no options, truth, or source. An unauthenticated read fails.
- Voting exposes no authors, voters, or truth flags; a forged self-vote fails.
  Submission retries do not increase the accepted count.
- Round two merges Ada/Bea's identical bluff, credits both authors, and scores
  **3/3/0**. Other rounds score **3/1/0**. Reveal supplies an HTTPS source.
- Ada leaves after round three; host transfers to Bea. Ada's rejoin preserves
  player identity and participation. Dax joins round four as a spectator and
  cannot submit through either the UI or a forged command.
- Cy's offline/reload recovery preserves the same player and turn.
- Finishing clears the active match; rematch includes Dax, resets all scores,
  and draws an unseen question. The rematch fits the three 390px phone pages.

These are the current assertions in [the producer](../scripts/smoke.mjs), not
claims that every possible UI or timing state was covered. The smoke finds
the truth as the choice not among its known synthetic bluffs; it does not add
a truth-reading endpoint or seed a special game.

For inspection during a focused exercise, the producer's `view` and `room`
helpers show the supported `api.game.view` and `api.rooms.getRoomState` query
shapes. Keep credentials in browser/process memory, never in tool output or a
receipt. Use projections to confirm authority/state, not to replace the rendered
actions whose behavior is under review. Inspect fresh accessibility state after
navigation or a render; never persist generated accessibility references.

## Focused browser journeys

Use your real local pair and new synthetic identities. These are selective
procedures, not additional mandatory full suites. Assert the relevant state
change or rejection, then capture the rendered surface after it settles.

### Identity and recovery

1. Ada creates a table with **Your name → Create table**. Bea and Cy use **Join
   table**, their own names, and the displayed four-character **Room code**.
   Expect three roster entries and three distinct server viewer IDs. The room
   code button opens the QR invite; Escape closes it without leaving the room.
2. Start with three present guests. Enter an unsubmitted draft, reload the same
   page, and confirm the same player, room, round, and draft. Submit through
   **Submit answer**; after reload the accepted answer stays locked. In voting,
   **Lock vote** and reload must preserve the accepted selection without revealing
   other votes.
3. Take one context offline. Expect **Reconnecting. Keep this page open**, not
   a fresh anonymous table. Restore connectivity, reload, and confirm the same
   viewer ID/round and accepted input. Restore online state even after failure.
   Browser reload does not prove 15-minute access expiry: use the issuer tests
   for signed expiry/tampering bounds and an actual expired session only when
   that live path is the change under review.

### Avatars and dialogs

From a lobby roster choose **Change avatar** (during play: **Table options →
Change avatar**). **Choose your avatar** has a **Your avatar** radio group and
**Save avatar**. Select a different character and cancel: the saved portrait must
not change. Reopen, select, save, then reload: the roster and picker retain the
choice for that player, not their seat. A second independent guest must remain
unchanged. `tests/game.test.ts` covers persistence across leave/rejoin and rooms.
Exercise keyboard selection and Escape; focus must return to the invoking control.
Offline saving is disabled with **Reconnect to save your avatar.**, not a false
success. A screenshot of the picker alone is not persistence proof.

### Untimed phases and deliberate skips

Start three players; submit only one bluff. Host **Host controls → End writing**
opens **End writing for everyone?**. **Keep writing**/Escape must leave writing
and the roster unchanged. Confirm **End writing**: voting opens using the accepted
bluff and truth, without inventing missing submissions. With an eligible vote
missing, **Host controls → Reveal answers → Keep voting** must likewise preserve
voting; confirmation reveals and scores only accepted votes. Non-hosts must not
get host skip controls. A non-host participant can use **Next round** immediately
after reveal. `tests/game.test.ts` uses controlled time to check 45-minute waits,
stale retries, and the disabled match cap; a quick browser round does not prove
those timing boundaries. Waiting alone never advances an unfinished phase.

### Responsive and accessible surfaces

Exercise only the changed surface at desktop, 390×844, narrow 320×844, and
667×375 landscape when relevant. Use long names/answers within product limits.
Inspect clipped text, horizontal overflow, visible focused/selected states,
keyboard reachability, dialog return focus, enlarged text, and reduced motion.
The automated smoke's 390px rematch width check is not a layout audit of every
phase. Browser mobile/touch emulation does not establish physical keyboard,
camera/QR scanning, wake-lock support, or phone/network behavior.

## Ownership and cleanup

- `smoke:local` closes its Chromium and stops only its child Convex/Next processes
  on success or failure. Verify those owned processes exited and ports
  3210/3220/3221 were released; do not kill a new/unrelated listener.
- `smoke`/`smoke:public` close their own browser, not the target servers.
  Stop your supervised `pnpm dev` with Ctrl+C/the process tool, then inspect
  process exit and port release. Close owned interactive browser contexts.
- Browser closure does **not** remove server data. The local smoke leaves a new
  room and in-progress rematch; the hosted smoke leaves a room after one reveal.
  Data and signing secrets persist in that checkout's `.convex/` and `.env.local`.
  Parlor's everyone-away sweeper abandons inactive matches, not all stored history.
- No reset is needed between smokes. `pnpm reset --yes-delete-local-data` deletes
  **all** game/room/player data in the selected anonymous-local checkout, retaining
  secrets and reseeding content. Use it only with authority over that entire
  database; never as automatic cleanup of a shared developer checkout. Refresh
  open tabs afterwards. A fresh disposable checkout avoids that destructive step.
- After stopping an owned disposable runtime, retain sanitized evidence/source
  identity as needed, then remove only that run's temporary checkout and generated
  credentials. Keep unrelated work, historical evidence, and developer state.
  Ignored local output is scratch storage, not a backup or shared retention service.

For startup failures, inspect the named stage and server output. Repair missing
dependencies, occupied ports, signing configuration, or a backend identity mismatch
without bypassing the local guard. If browser actions time out, inspect the current
page and issuer/backend errors before changing locators or extending waits.
Repeat into a new evidence directory; never convert a failed run into a pass by
reusing its output.


## Hosted smoke is a separate authorized operation

Only after the intended hosted backend and web build match the source being
exercised, and the operation is authorized:

```sh
POPPYCOCK_PUBLIC_ORIGIN=https://poppycock.mistystep.io \
POPPYCOCK_PUBLIC_CONVEX_URL=https://fiery-spaniel-734.convex.cloud \
POPPYCOCK_REVISION="$(git rev-parse HEAD)" pnpm smoke:public
```

These are the producer's default targets, shown explicitly for review, not an
assertion about the current deployed revisions. Confirm the authorized app,
backend, source/build identity, and permission to leave synthetic rooms before
running; substitute only the approved pair. This creates real hosted gameplay
writes. It needs no deployment/admin credential and must not be used to seed,
reset, or deploy. The command itself does not obtain that authorization.

Inspect the fresh `public-https-smoke.json`: one round, `result: "passed"`,
the intended `origin`/`convexUrl`, and authoritative scores **3/1/0**, plus the
rendered images. Three isolated browser guests exercise one round, not six rounds,
rematch, physical phones, or local/LAN operation. Closing the browser leaves the
hosted records; backend-wide cleanup is not authorized by a smoke. Old hosted
receipts do not establish current deployment readiness.

## Evidence ownership

- The repository owns the smoke producers, card-level provenance, reusable
  procedure, curated inputs, and deliberately selected public assets.
- Linear owns current work, intent, concise verdicts and residual risk, with
  links to the exact source, PR, and retained evidence. Requests authorize work;
  historical receipts are not an automatic intake queue.
- Full per-run screenshots and traces belong in approved retained artifact
  storage with suitable access and retention, not in Git by default. CI already
  writes fresh `test-results/multiplayer/` output and uploads it as a
  revision-named artifact. An ignored local directory alone is not retention.

The scripts use synthetic guests, but that is not an automatic sanitization
guarantee. Review output before sharing and omit tokens, cookies, private
addresses, and unrelated participant content. Keep all existing evidence and
its provenance; do not replace an old receipt with a newer run under the same
filename or claim an old screenshot proves current behavior.

## Verification history

### Party interface — 2026-09-08

Frontend [`5b3d1b0`](https://github.com/misty-step/poppycock/commit/5b3d1b0) on Cloudflare Worker `83b3b83e-0b1d-4f57-aadd-700492591c6c`. The Convex backend remains `fiery-spaniel-734`; no schema change shipped with this cutover.

- Local six-round smoke passed **18 / 8 / 0**. Question headings use the wrapping `.question-block` as the size container: at 1280px both the writing and reveal `2fr` columns are 403px and render **28.2px**, matching `7cqi` of the column rather than the **36px** viewport fallback.
- Hosted three-browser smoke against https://poppycock.mistystep.io completed one round with authoritative scores **3 / 1 / 0**. This is not a hosted six-round or rematch result. Per-run receipts stayed in ignored `test-results/party-pass/hosted-live/`.

### Polished avatars and production cutover — 2026-09-08

The release combined avatar polish at `1a0180d6446ce98e2bc8c25a066963751776dd2e`
with the Convex Node-type configuration fix committed as `6fac13e`.
The matched production backend is `fiery-spaniel-734`; the Cloudflare Worker
version is `42edcb72-3d38-452e-bd99-5b3c09856cbf`.

- The transitional migration updated one existing game and cancelled zero pending
  turn jobs. It did not reset rooms, submissions, votes, or scores.
- The current backend passed deployment type-checking and schema validation.
  Seeding inserted 108 cards, retained the existing cards, and brought the total to 216.
- The hosted three-browser smoke completed one round with authoritative scores
  **3 / 1 / 0**. This is not a hosted six-round or rematch result.
- The live picker exposed all 48 choices; saving Sherlock and reloading preserved
  the selection. All 48 production portrait assets returned HTTP 200.

The initial frontend-only attempt failed room-entry verification and was rolled
back before the matched backend/frontend release. Per-run receipts and screenshots
were written to the ignored local `test-results/avatar-release/` directory; those
files are not durable repository evidence. These checks used Chromium, not physical phones.

### Untimed refinements — 2026-09-07

The interface and gameplay receipts below exercise [`4d53b0d`](https://github.com/misty-step/poppycock/commit/4d53b0d), including genuine Parlor revision `56342bd910a58f255483afdf5a92d3fc4fcc0ae2`. This was the migration-stage revision; subsequent cutover removes only the one-time migration, its startup calls, and the obsolete schema field. These refinements were **not deployed to the public HTTPS origin**.

The final-schema revision [`9346712`](https://github.com/misty-step/poppycock/commit/9346712) subsequently passed application TypeScript and the complete six-round browser game again on the preserved, migrated database, with the same **18 / 8 / 0** result. Its [separate receipt](../evidence/refinements/final-schema-smoke.json) distinguishes this cutover check from the earlier visual audit.

| Check                                              | Observed result                                                                                                                                                                                         |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application TypeScript and issuer/game regressions | Passed; **19 tests**, including 45-minute writing and voting waits, explicit host skips, stale inputs, and immediate non-host reveal advancement                                                        |
| Vendored Parlor regressions                        | **103 tests passed**, including opt-out match caps and retained everyone-away abandonment                                                                                                               |
| `pnpm build`                                       | Production Next.js build passed                                                                                                                                                                         |
| Card integrity and real seed                       | **216 unique keys, ten categories**; longest answer **90 characters**, longest added answer **83**; all cards have nonempty question/answer/provenance and HTTPS source URLs                            |
| Existing local database migration                  | Six game records migrated; no pending turn jobs remained to cancel; seed inserted **108**, updated **0**, retired **0**                                                                                 |
| Full multiplayer browser game                      | Six rounds, authoritative scores **18 / 8 / 0**, duplicate-bluff attribution, host transfer, rejoin, spectator rejection, offline/reload recovery, and rematch                                          |
| Twelve-guest mobile/touch audit                    | Twelve distinct portraits; long names and 160-character unbroken answers; no horizontal overflow at **320×844**, **390×844**, or **667×375**                                                            |
| Unanswered voting round                            | Still voting after **65,009 ms**, with zero votes, unchanged shared option order, no attributed truth/source, and `hardDeadline: false`                                                                 |
| Destructive/phase confirmations                    | Escape keeps membership and returns focus; cancel leaves the phase unchanged; confirmed host skips work; a non-host advances a reveal immediately                                                       |
| Final schema bootstrap                             | Accepted the preserved local database after removing the migration and legacy field; reseed returned **216 cards, zero inserts, updates, or retirements**                                               |
| Terminal preview shutdown                          | Actual `Ctrl+C` released ports **3210/3220/3221**, including under the package-manager wrapper                                                                                                          |
| Final-schema gameplay                              | Full six-round multiplayer exercise and rematch passed again at `9346712`; application TypeScript and `pnpm format:check` passed                                                                        |
| Reduced-motion rendering                           | The actual front-door button’s computed transition durations changed from `0.12s, 0.12s, 0.16s` to `0s` when the browser requested reduced motion; [receipt](../evidence/refinements/motion-audit.json) |

Receipts: [mobile/untimed audit](../evidence/refinements/audit.json), [content and migration](../evidence/refinements/content-audit.json), and [round-by-round multiplayer trace](../evidence/refinements/full-game/multiplayer-smoke.json). These files contain synthetic player names and no credentials.

Screenshots: [twelve-character desktop lobby](../evidence/refinements/twelve-player-lobby-desktop.png), [320px lobby](../evidence/refinements/twelve-player-lobby-320.png), [narrow long-answer voting](../evidence/refinements/long-options-320.png), [landscape](../evidence/refinements/voting-landscape.png), [leave confirmation](../evidence/refinements/leave-confirmation-320.png), [reveal confirmation](../evidence/refinements/reveal-confirmation-320.png), [still voting past the former timeout](../evidence/refinements/still-voting-after-former-deadline.png), and [final scores](../evidence/refinements/full-game/final-standings-phone.png).

The twelve-guest harness was a throwaway browser audit, not a new permanent test suite. Browser mobile/touch emulation does not prove physical-phone hardware behavior or Wi-Fi/firewall reachability. Existing production databases need the two-stage upgrade described in the README; the old timed release is not a safe schema rollback target.

### Initial release — 2026-09-06

Verified on 2026-09-06 against a real anonymous local Convex backend, not a mocked room service.

- **Clean-clone game source:** [`b3bec52847b6b1e6132d057e8eb4c5dae2af5d6c`](https://github.com/misty-step/poppycock/commit/b3bec52847b6b1e6132d057e8eb4c5dae2af5d6c).
- **LAN-corrected game source:** [`29336573cc2ce975b61aa9ac39642ccd8300df30`](https://github.com/misty-step/poppycock/commit/29336573cc2ce975b61aa9ac39642ccd8300df30).
- **Pinned Parlor at that source revision:** `90a813c83d09fd3ee96dcd35aeb64cee0ca7121e`, recorded in `vendor/parlor/UPSTREAM.json` at that revision. No consumer context casts, schema weakening, callback shims, or local Parlor patches.
- **Local environment:** Linux, Node.js 26.8.1, pnpm 11.25.0, Chromium 151.0.7922.173. CI uses Node.js 24 and Playwright's Chromium.

The principal screenshots and trace came from an independent clean clone of `b3bec528`, with its own newly generated secrets, isolated Convex state, and no sibling Parlor checkout. Delivery commit `f4380b9` added evidence/documentation and generated-file hygiene without changing executable game behavior. Missing Next declarations were separately deleted in the clean checkout and successfully regenerated by `pnpm typecheck`. The subsequent, separately exercised LAN correction is documented below.

#### Checks exercised

| Check                                                          | Result                                                                                     |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `pnpm install --frozen-lockfile` in an independent clean clone | Passed without cross-repository credentials                                                |
| `pnpm check`                                                   | All package builds, application/test TypeScript, and **18 game/issuer regressions** passed |
| `pnpm test:parlor` in the consuming workspace                  | **88 vendored package regressions** passed                                                 |
| Vendored packages' `tsc --noEmit -p tsconfig.json`             | Passed                                                                                     |
| `pnpm format:check`                                            | Passed                                                                                     |
| `pnpm build` in the clean clone                                | Production build passed; `/`, `/api/guest`, and `/icon.svg` generated                      |
| First anonymous local bootstrap                                | Created and seeded **72 cards**                                                            |
| Guarded local reset and reseed                                 | Removed game/room/player data; retained all 72 cards; seed reported zero duplicate inserts |
| `pnpm smoke:local` in the clean clone                          | Complete four-browser multiplayer acceptance passed; processes shut down cleanly           |

The 18 game/issuer tests cover hidden-state projections, outsider and spectator rejection, normalized duplicate bluffs, exact-truth bonuses without a score oracle, self-vote rejection, retry idempotence, stale rounds/options, phase deadlines without scheduler delivery, six scheduled rounds, finalization/rematch, departed authors, bounded abandonment continuation, local-only reset, token expiry/renewal, cookie tampering, cross-origin requests, and arbitrary identity injection. Scheduler time boundaries are exercised through controlled test time; the live browser game locks its inputs promptly rather than waiting out every timer.

#### Real multiplayer game

[`multiplayer-smoke.json`](../evidence/multiplayer-smoke.json) records the exact source and Parlor revisions, all six actual questions and cited truths, each round's authoritative score deltas, and the exercised checks. It contains no guest tokens, cookies, signing keys, or private database snapshots.

1. Ada, Bea, and Cy acquired independent browser identities, created/joined by room code, and opened the real Parlor QR invitation.
2. All three wrote and voted through six complete rounds. Writing hid options/truth/source; voting hid truth labels/authors/voters. Direct unauthorized reads and self-votes were rejected server-side; identical input retries did not increase submission counts.
3. In round two, Ada and Bea submitted the same bluff. The option merged, both authors were protected from self-voting, and both received the fooled-voter point.
4. After round three, Ada left. Parlor transferred the host to Bea. Ada rejoined with the same player identity, accumulated score, and immutable match eligibility.
5. During round four, Dax joined as a spectator. The UI withheld writing controls and the server rejected a forged submission. Cy went offline, saw a reconnecting notice, returned online, and reloaded into the same player and turn.
6. Final authoritative scores were **Ada 18, Bea 8, Cy 0**. The Parlor active match envelope was completed.
7. Bea started a rematch. Dax became an eligible fourth participant; all scores reset to zero and the deck supplied a previously unseen question. Phone pages fit 390px without horizontal overflow.

##### Screenshots

| Surface                                                        | Evidence                                                                                           |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Front door                                                     | [Desktop](../evidence/front-door-desktop.png), [phone](../evidence/front-door-phone.png)           |
| Three-player lobby and QR invitation                           | [Desktop](../evidence/lobby-desktop.png)                                                           |
| Bluff submission                                               | [Phone](../evidence/writing-phone.png)                                                             |
| Anonymous voting                                               | [Phone](../evidence/voting-phone.png)                                                              |
| Truth, sources, authors, votes, scoring                        | [Desktop](../evidence/reveal-desktop.png), [phone](../evidence/reveal-phone.png)                   |
| Host transferred to Bea                                        | [Phone](../evidence/host-change-phone.png)                                                         |
| Network interruption                                           | [Phone](../evidence/offline-phone.png)                                                             |
| Final standings                                                | [Desktop](../evidence/final-standings-desktop.png), [phone](../evidence/final-standings-phone.png) |
| Former spectator joins the rematch                             | [Phone](../evidence/rematch-phone.png)                                                             |
| Previously used browser resumes its room and opens invitations | [Desktop](../evidence/resumed-session-desktop.png)                                                 |

#### Deployed guest continuity boundary

A separate live probe went through the Next.js issuer and actual Parlor room mutations, using genuine HMAC credentials:

- Initial acquisition and renewal returned **200**.
- Renewal rotated the access token while preserving the room's viewer player ID.
- Recovery without the trusted continuity cookie returned **401**.
- A cross-origin request returned **403**.
- An arbitrary `guestId` request field returned **400**.

The sanitized results are in [`guest-continuity.json`](../evidence/guest-continuity.json). Expired-access-token and fixed cookie-expiry boundaries are additionally covered by the issuer regressions; the live probe does not claim to fast-forward the deployed server's clock.

#### Non-loopback HTTP LAN verification

The actual LAN origin initially exposed two development-path failures:

1. Next.js rejected dev-only assets/endpoints from the non-loopback hostname. The server logs named the blocked origin. `next.config.ts` now derives one allowed hostname from the configured browser-visible Convex URL, following [Next's `allowedDevOrigins` documentation](https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins). No wildcard origins or CORS changes were introduced.
2. Once the entrance loaded, room rendering failed because `crypto.randomUUID()` is unavailable on insecure HTTP origins. The game's opaque retry IDs now use 128 bits from `crypto.getRandomValues()`, which is available there. Gameplay rules, the issuer, and the pinned Parlor source did not change.

At source revision `29336573cc2ce975b61aa9ac39642ccd8300df30`, the complete four-browser exercise passed over the real non-loopback HTTP origin, including all six rounds, **18 / 8 / 0** final scores, host transfer, rejoining, offline/reload recovery, and spectator-to-player rematch. The browser itself reported `secureContext: false`, `randomUuidAvailable: false`, and `randomValuesAvailable: true`; this was not a mocked browser capability.

Inspect the [sanitized LAN receipt](../evidence/lan-smoke.json), [LAN phone writing](../evidence/lan-writing-phone.png), and [LAN phone standings](../evidence/lan-final-standings-phone.png). The private host address is omitted from committed evidence. Reproduction uses the concrete `.env.local` configuration and `POPPYCOCK_BASE_URL` command in the README.

This verifies the application's actual non-loopback origin and backend path from Chromium. It does not claim physical-phone hardware testing or reachability through a particular Wi-Fi network, VPN, or firewall; none of those policies was changed.

#### Public HTTPS verification

The separate public exercise used three isolated Chromium contexts against
**https://poppycock.mistystep.io** and queried
`https://fiery-spaniel-734.convex.cloud` with guest tokens from those browsers
only. The local smoke did not prove this hosted origin.

At source revision `88029e7098bbad5f723f6a61709d6f7d7e645ff2` that exercise passed: join, start, write, vote, and reveal for one round, with secure-context `true` and authoritative scores **Ada 3, Bea 1, Cy 0**. Inspect [`public-https-smoke.json`](../evidence/public-https-smoke.json), [lobby](../evidence/public-https-lobby-desktop.png), [phone writing](../evidence/public-https-writing-phone.png), [phone voting](../evidence/public-https-voting-phone.png), and [desktop reveal](../evidence/public-https-reveal-desktop.png). No guest tokens or cookies are in the receipt.

This is not a six-round or rematch exercise. Those remain documented above on the local and LAN origins.
