# Guest sign-in and continuity

Opening Poppycock gives a guest credential without an account. The signed cookie
preserves the same identity across access-token refresh and page reloads.

## Sub-features

- `sign-in` obtains a real deployed guest session and renders the entrance.
- `continuity` recovers the same identity after losing cached access credentials.
- `reject-identity` rejects supplied identity, wrong origin, and invalid cookies.
- `expired-session` enforces signed expiry and the continuity requirement.

## How to get to it (user POV)

- Open https://poppycock.mistystep.io on a fresh browser profile.
- Reload the same profile after access storage is lost; retain site cookies.
- Open the local game and create/join a table to establish a playable seat.

## Driving it with control.mjs and Playwright

Preconditions: production doctor passes; the local smoke has its isolated runtime.

- **Real session.** Run `.agents/skills/poppycock-verify/scripts/control.mjs production test-results/sign-in-NEW`. The actual page renders `Your name` after guest acquisition; a Secure, HttpOnly, SameSite=Lax cookie exists.
- **Recovery.** The same command removes only cached access credentials and reloads. The new credential has the same guest ID, and no room is created. Receipt records booleans/outcomes, never the identity or credential.
- **Denied states.** The same command attempts refresh without a cookie (401), injected guest ID (400), wrong origin (403), and an invalid continuity signature (401).
- **Usable seat.** Run `pnpm smoke:local`. Three distinct guests create/join a real local table, make accepted submissions/votes, and receive authorized projections. An unauthenticated room read fails.
- **Expiry.** Run `pnpm exec vitest run tests/session.test.ts` after building Parlor. Existing tests cover missing/expired/tampered continuity and expiry bounds; this is controlled-time server proof, not a live 15-minute wait.

## Gotchas

- Owner sign-in is n/a: no owner account, configured owner identity, inbox, magic link, or owner-only page exists. phaedrus uses guest access. No credential access is missing.
- Guest acquisition alone does not prove an authorized backend seat. Production seat creation is unproven under read-only scope; the full seat journey runs locally.
- The access token has four segments; claims are segment 3. Comparing decoded guest IDs checks continuity, not signature validity. Server-authorized local operations and issuer rejection checks supply separate evidence.
- A fresh profile creates a new guest; sharing tabs does not create independent players. No reused/expired email-link journey applies to this product.
