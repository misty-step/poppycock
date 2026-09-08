# Smoke procedure and verification history

The procedure below is reusable. The dated records after it describe only their
named revisions, environments, and exercised surfaces—not the current branch
or whatever is presently hosted.

## Reproduce

For a fresh local run:

```sh
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
POPPYCOCK_EVIDENCE_DIR=test-results/local-smoke-001 pnpm smoke:local
```

Choose a new repo-relative output directory for each run; replace `001` rather
than reuse an earlier result. The producers still default to tracked `evidence/`
when `POPPYCOCK_EVIDENCE_DIR` is unset and can overwrite same-named files. The
override above keeps new output separate from retained historical receipts.

The self-contained command needs ports 3210/3220/3221 free, downloads the real
Convex backend if needed, seeds it, starts Next.js, plays six rounds and a
rematch with four independent browser guests, records output, and stops both
servers. For an already-running `pnpm dev`, use `pnpm smoke` with the same output
override instead. The [README's LAN setup](../README.md#local-development)
explains `POPPYCOCK_BASE_URL` and the non-loopback browser security boundary.

`CHROMIUM_PATH` selects an existing Chromium installation.
`POPPYCOCK_REVISION` labels the source revision; it does not check out that
revision or prove a deployment. Name dirty-source changes and the actual target
when recording a result.

### Hosted smoke is a separate authorized operation

Only after the intended hosted backend and web build match the source being
exercised, and the operation is authorized:

```sh
POPPYCOCK_EVIDENCE_DIR=test-results/public-smoke-001 pnpm smoke:public
```

This creates real hosted rooms and gameplay writes. It needs network access to
the configured HTTPS app and Convex deployment and exercises three isolated
browser guests through one round. It does not prove six rounds, rematch,
physical-phone behavior, or local/LAN operation. The older hosted receipt below
does not verify the untimed local refinements.

### Evidence ownership

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
