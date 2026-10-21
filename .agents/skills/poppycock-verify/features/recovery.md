# Reconnect, transfer host, and recover

An interrupted player returns to the same seat and turn; explicit host departure
transfers control. Accepted game state must also survive operational recovery.

## Sub-features

- `offline` displays reconnecting state without inventing a fresh identity.
- `reload` retains the same guest and current match eligibility.
- `host-transfer` gives another present player control after explicit departure.
- `restore` preserves accepted records through service recovery.

## How to get to it (user POV)

- During play, lose the network, restore it, then reload the same profile.
- Host chooses `Table options → Leave table`, confirms, then rejoins by code.
- After a service incident, reload the existing session and resume accepted state.

## Driving it with the pinned multiplayer smoke

Preconditions: skill launch prerequisites; disposable local runtime only.

- **Host departure/rejoin.** Run `pnpm smoke:local`. After round three, Ada leaves through rendered controls. Bea becomes host. Ada rejoins with the same player ID, scores, and match participation.
- **Network loss.** The same smoke sets Cy offline in round four and requires `Reconnecting. Keep this page open`. After connectivity/reload, Cy keeps the same viewer identity and turn. Inspect `offline-phone.png` and the corresponding receipt check.
- **Public availability.** Run `.agents/skills/poppycock-verify/scripts/control.mjs doctor production`. It must report current source/version and ready Cloudflare backend. Run the production helper from the sign-in feature to separately establish guest continuity.
- **Service restart/restore.** Follow [the cutover/recovery runbook](../../../../docs/cloudflare-cutover.md) and the existing isolated Cloudflare preview workflow only in separately authorized operational scope. Require before/after accepted-record equality, frozen writes during recovery, and the original guest's usable seat. The routine local Convex smoke and production health probe do not establish these outcomes.

## Gotchas

- Owner sign-in is n/a, but guest identity is security-sensitive. Keep cookie/token values and existing player content out of evidence.
- Local smoke uses Convex; production uses a Cloudflare Durable Object. This run does not claim Cloudflare restart, backup restore, PITR, alerts, or production multiplayer proof.
- Hosted preview recovery requires native Cloudflare/GitHub access plus the preview Access verifier and backend admin credentials named in the runbook/workflow. Missing authorization is a concrete blocker for that separate drill; never freeze/import/restore production to complete this baseline.
- Everyone-away housekeeping is not a turn timer. Browser network emulation is not service restart or physical-network proof.
