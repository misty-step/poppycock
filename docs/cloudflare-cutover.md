# Cloudflare backend cutover and recovery

This runbook implements [ADR 002](adr/002-cloudflare-backend.md). It is an
operation, not a declaration that production has migrated. Follow the current
[shared standard](https://foundations.mistystep.io/way-of-working). Use the existing
CI/promoter and the unchanged Parlor operator in this repository. No new release
engine, shared-adapter fork, public production-data artifact or dual writer.

## Before the data window

1. Independently review the candidate and this runbook. Require exact-head green
   CI and the isolated `backend_preview` dispatch: real six-round/rematch play,
   rejection, three canonical restores and native PITR/undo. Inspect screenshots.
2. Before any production deployment or secret write, verify name-only CI bindings
   and pass custody. The production admin entry is
   `workstation/POPPYCOCK_PRODUCTION_BACKEND_ADMIN_KEY`; Phaedrus owns its escrow.
   Original guest and continuity entries are `workstation/POPPYCOCK_PARLOR_GUEST_TOKEN_KEYS`
   and `workstation/POPPYCOCK_CONTINUITY_SECRET`. Compare the proposed guest keys
   to the serving Convex environment in-process. Acquire a synthetic cookie from
   the currently serving Worker issuer and verify its signature and identity
   continuity with the proposed continuity secret: Convex does not own this cookie.
   Retain only boolean receipts, never cookie/token/key values. Carry original
   values over unchanged; stop before promotion if either proof fails. Exclude
   the similarly named non-serving Convex deployment key.
3. Merge/promote the dormant slice through normal CI. `wrangler.jsonc` still names
   `fiery-spaniel-734` in both public URL vars; its frontend and `/health` remain
   Convex-bound. The new SQLite object starts frozen and cannot run its cron.
   Read back source, Worker version, namespace, public/backend authorization and
   the existing public game journey. Record this DO-capable version as the cold
   client rollback target. Cloudflare cannot roll across a class lifecycle change:
   this first dormant deployment is fix-forward, not a rollback to a pre-DO Worker.
4. Use the approved chief/CI path for credentials and deploys. The repository is
   registered in the canonical t_142625ef consumer registry; the scoped CD token
   covers mistystep.io. Never use the broad account token for a write.
5. Prepare and rehearse a source change of exactly the two `wrangler.jsonc` URL
   vars to `/backend` and `/backend/http`. That file is the production build's
   authoritative endpoint configuration. No DNS change is needed. Run the existing
   artifact verifier and isolated preview before its exact green CI promotion.
   The promoter then skips Convex deployment, never wakes the cold writer, and
   validates real DO readiness, release and home/changelog. Do not let the new
   artifact replace production before the import/unfreeze order below is ready.
6. Before freezing, open a synthetic three-player game using the real old frontend.
   Keep its browser contexts alive without saving tokens/cookies to evidence.
   Record only synthetic seat/game continuity facts. The old tabs fail closed
   while Convex is paused; reloading after cutover must keep the same identities,
   seats and current game. No production-player content belongs in screenshots.

## One consistent custody snapshot, restore, and handover

Kaylee's granted Linejam template applies: admin keys into encrypted Mirrodin
pass with Phaedrus escrow, one final age snapshot in private R2, preserve original
identity bindings, pause at freeze, unpause only on early failure, replace-all only
on rollback. No further routine grant is needed. Keep plaintext only in the
operation's private tmpfs, never chief evidence, public CI or the synthetic preview.
Builds and restore runtimes stay under `/srv/hermes-chief-workspaces/t_16b068bc`
on authorized Mirrodin; only their temporary private input/state lives on tmpfs.

1. Record the exact current source, Worker, namespace, dormant rollback target,
   cutover candidate/CI and time. Inspect current serving state and in-flight CD.
2. Pause only `fiery-spaniel-734`. Read back the authenticated fixed paused error;
   a public generic 500 alone is not pause proof. No import while Convex is writing.
3. Export the paused deployment once, consistently, with the granted serving key.
   Encrypt immediately with an app-owned age identity held only in Mirrodin pass.
   Claim and retain the operation's one-export receipt before the request; don't
   silently repeat a failed/ambiguous export. Store the ciphertext and a values-free
   manifest in private R2 using the scoped credential, read it back and compare
   SHA-256. Verify public bucket access is disabled. No plaintext transfer.
4. Decrypt that byte-equal R2 readback into private tmpfs. Use
   `@parlor/cloudflare/convex-zip` to reject unsupported values/components/files
   rather than silently omit them. Compare every user table's numeric mapping,
   count and canonical SHA-256, including empty tables. The current app has no
   asset-storage API; unexpected assets must stop the operation.
5. Before the production import, restore the exact readback into (a) an isolated
   anonymous loopback Convex and (b) a separate loopback SQLite DO. Re-export both
   and reconcile all tables, counts and canonical digests. Keep private rows and
   runtime logs out of durable evidence; retain only values-free receipts. Rehearse
   accepting synthetic post-switch writes and replace-all rollback against this
   restored state, never against production or the public preview.
6. Through the production admin operator, require `writesFrozen=true`,
   `runningActions=0`, no import pending, then `importSnapshot` the drilled source.
   Re-export the still-frozen object and require exact canonical equality. Record
   its native bookmark. A preview fixture is never an acceptable production import.
7. Unfreeze the DO only after equality. Convex stays paused. Promote the reviewed,
   exact tested cutover artifact through CI. A brief frozen/unavailable frontend is
   safer than accepting a write that the import would overwrite. If a deployment
   readiness check times out during this intentional window, distinguish reporting
   failure from data corruption; inspect current writer state before recovery.
8. Read back `/health` source/version, `backend=cloudflare-do`, `backendReady=true`,
   exact Worker version at 100% and actual SQLite namespace. Reload the old synthetic
   browser contexts and verify original identity, seat and accepted state. Run
   `pnpm smoke:public` with `POPPYCOCK_REVISION=<served-sha>` on Mirrodin: three real
   browsers, join, writing/voting/reveal, auth boundaries and exact scores, recording
   same-origin WebSockets and zero Convex Cloud traffic. Inspect screenshots.
9. Verify public/provider/immutable URL protection, real Sentry error and intake
   delivery, and native sweep heartbeat/failure/recovery. Babysit for two hours with
   real operational/provider observations. Report external uptime as unverified
   until an approved Sentry uptime seat exists; do not buy or borrow one.
10. Remove only this operation's plaintext tmpfs and rebuildable resources after
    durable sanitized evidence. Keep Convex paused and intact, the encrypted R2
    snapshot, bookmarks, custody receipt and rollback tools. Ask Kaylee to schedule
    the already-granted seven-day soak/retirement attempt; do not create a card or
    delete Convex. Update the migration umbrella only with observed acceptance.

## Recovery by the point reached

Before the DO accepts any write: keep it frozen; unpause Convex and verify recovery.
If the new web build is already live, restore the recorded DO-capable dormant
client using the granted emergency path only in the cutover window. Never roll
across the first class deployment. The ordinary rollback workflow requires the
same namespace AND writer, so it intentionally refuses this cross-writer recovery.

After the DO may have accepted a write:

1. Freeze it, drain running actions, and prove a public mutation is rejected at an
   unchanged timestamp. Convex remains paused.
2. Export every accepted write at that timestamp; reconcile against admin stats,
   encrypt to private R2 and verify readback. Do not substitute the old snapshot.
3. Replace-all import that export into the still-paused serving Convex deployment
   only under the granted rollback. Re-export it and require canonical equality
   for every table, numeric mapping, count and digest.
4. Only after equality, unpause Convex, restore the recorded compatible dormant
   web version using the granted cutover-window emergency path, and prove the
   accepted game/identity state in real browsers. Never unpause both writers.
5. If any reconciliation fails, keep both non-writing. To abandon rollback,
   unfreeze only the DO; Convex stays paused. Escalate accepted-data risk rather
   than performing a destructive or code-only cross-writer restoration.

Native PITR is the 30-day DO recovery basis, already exercised on the synthetic
host. Record bookmarks before risky changes. Time-based restore is approximate;
it discards later writes and therefore needs the data-owner decision. Capture its
undo bookmark and never call it a write-preserving code rollback.

## Telemetry boundary

The app-owned `poppycock` Sentry project uses the existing Misty Step team and
Kaylee Alert Intake. The SDK keeps only fixed error classification, event/time,
release and environment: no error text/stack, URL, request, SQL, player or game
content. Logs, metrics, private data collection and sampled tracing are disabled.
A one-minute native sweep schedules a no-op completion action in its final
transaction; only that post-commit action emits the heartbeat. Failed invocation
and native runtime console errors report through the same project; missed
completion is a native Sentry cron failure. No second cron scheduler is introduced.

The protocol-forwarding Worker boundary is deliberately uninstrumented: the
SDK's automatic binding tracer caused real WebSocket upgrades to return 426 in the
isolated browser journey. The destination DO owns backend instrumentation. Both
that failed run and its fixed full-game/outage/recovery evidence must be retained.
The operator-only POST `/backend/admin/telemetry-drill` needs the backend admin key
(and Access on preview); it throws a fixed error without request content. Never
add a public debug route or temporarily relax authorization to exercise capture.

The preview's freeze/missed-heartbeat/unfreeze drill must end with the DO writable
and the monitor healthy. A configured DSN, a workflow or a sent envelope alone is
not received-event/alert proof. Read exact records back from Sentry and the existing
intake. Project IP/geography scrubbing is configured separately at the provider.
