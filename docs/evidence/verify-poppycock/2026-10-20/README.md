# Poppycock verification — 2026-10-20

Builder evidence for the extension of `.agents/skills/poppycock-verify`.
The run happened on the evening of 2026-10-20 America/Chicago (2026-10-21 UTC).
Base source and production health revision:
`efb45ade8105732a933ac51ee454182557159a53` (version 1.3.0).
The candidate extends verification documents and the owned helper, and gives the
existing smoke's submission/vote receipt polls its existing 15-second action
budget. Game behavior, issuer, backend, production configuration, and dependencies
are unchanged.

## Targets and authority

- Production: https://poppycock.mistystep.io, Cloudflare Durable Object backend.
  Only public GETs and guest issuer POSTs were used. Browser gameplay POSTs and
  WebSockets were blocked. No production table/player/answer/vote/avatar writes
  or administrative changes were made.
- Local: fresh owned worktree, anonymous Convex on 3220/3221, Next.js on 3210,
  pinned headless Chromium, synthetic guests, real seeded 1,386-card catalog.
  This is the repository's documented local runtime, not a Cloudflare substitute
  claimed as hosted gameplay/recovery proof. Dependencies and the Convex binary
  required network downloads; no preexisting `.env.local` or database was copied.
- Native GitHub login was available. Credential-name discovery found no Poppycock
  or Convex pass entries; none is needed for anonymous-local or public guest access.
  No secret values, browser state, network traces, or private player data are saved.

## Evidence

- [Before inventory](before.json): the canonical skill existed, but the feature map,
  executable helper, and Claude symlink did not.
- [Final normal multiplayer receipt](multiplayer-final/multiplayer-smoke.json):
  `pnpm smoke:local` passed from deleted local state, seeded the real deck, ran six
  rounds with 18/8/0 scores, and rematched with four players. This is the normal
  producer with 15-second receipt polls, not the diagnostic copy.
- [Final standings](multiplayer-final/final-standings-phone.png),
  [offline continuity](multiplayer-final/offline-phone.png), and
  [rematch](multiplayer-final/rematch-phone.png) show the corresponding rendered states.

- [Production receipt](production/receipt.json): rendered guest acquisition,
  Secure HttpOnly SameSite=Lax continuity, same identity after access-storage loss,
  missing-continuity/forged-identity/wrong-origin/invalid-cookie rejection, public
  changelog, and a 390px entrance with no horizontal overflow.
- [Guest entrance screenshot](production/guest-entrance-phone.png) and
  [ARIA snapshot](production/guest-entrance-phone.aria.txt).
- [Changelog screenshot](production/changelog-phone.png) and
  [ARIA snapshot](production/changelog-phone.aria.txt).
- [Initial multiplayer failure](multiplayer/FAILED.md): partial screenshots are
  retained; absent final receipt is explicitly a failure, not a six-round pass.
- [Initial production helper failure](production-attempt1/receipt.json): the new
  helper initially read Parlor claims as a JWT; corrected to the actual four-part
  format and re-driven successfully. This was a helper defect, not an auth defect.
- [Initial focused failure](focused/receipt.json) and
  [diagnostic retry](focused-retry/receipt.json): trying to capture the avatar grid
  offline before its images loaded failed the screenshot readiness check. The
  helper now captures the loaded saved choice online before going offline.

- [Focused passing receipt](focused-verified/receipt.json): empty-name rejection,
  too-few-player disabled start, code and invitation joins, avatar cancel/save and
  reload persistence, offline save rejection, canceled/confirmed host skips,
  missing-vote scoring, and non-host next round.
- [Saved avatar](focused-verified/avatar-saved-online.png),
  [offline rejection](focused-verified/avatar-offline.png), and
  [skipped reveal](focused-verified/skipped-reveal.png), each with a sibling ARIA file.
- [Pending-submission capture](multiplayer-diagnosis2/FAILED.md) and
  [bounded-wait diagnostic pass](multiplayer-diagnosis3/DIAGNOSIS.md) explain the
  five-second receipt-poll failure and its scoped harness correction.
- [Avatar reload-race attempt](focused-final/receipt.json): the helper reloaded
  immediately after Save without awaiting completion. It now waits for the picker
  to close, reopens after reload, and verifies the persisted selected radio.

## Validation

See [validation.txt](validation.txt) for commands and actual results, and
[source-manifest.sha256](source-manifest.sha256) for the candidate verification
source identity (receipts label the base revision; this manifest identifies dirty
verification files). No product source other than two smoke polling bounds changed.

Formatting passed for all 139 configured files and the new skill helper.
The existing full test invocation passed 52 tests in eight files. The exact focused
issuer/game invocation passed 21 tests in two files. The full multiplayer producer
passed; production guest access and focused local journeys also passed.

## Cleanup

[Final cleanup doctor](cleanup.json) passed after both owned runtime supervisors
exited: ports 3210/3220/3221 had no loopback listener. Generated `.convex/` and
`.env.local` were removed from this worktree. The temporary diagnostic script was
removed. Next.js had automatically appended a generated block to root AGENTS.md;
that generated change was restored to its base content after the servers stopped.
Evidence remained: every screenshot listed by the final full receipt, the final
focused receipt/screenshots/ARIA files, and production receipt/screenshots/ARIA
files was checked after teardown. No production data cleanup was performed.

## Owner access and limits

**Owner sign-in: n/a.** SPEC US-001 requires no accounts. No owner identity,
owner-only page, mailbox, or magic-link flow exists. phaedrus uses guest access.
The deployed guest issuance/continuity journey is proven; a deployed backend
seat is intentionally unproven because creating one writes production game data.
No missing owner credentials or inbox access block this product.

Local proof cannot establish Cloudflare restart/PITR/restore, production gameplay,
alert delivery, physical QR scanning, real-phone wake lock, slow-network behavior,
or a live 15-minute/30-day expiry wait. Long waits and expiry are separately covered
by controlled-time server tests; this does not convert them to elapsed live proof.
The map retains scoped recovery prerequisites rather than weakening that journey.
