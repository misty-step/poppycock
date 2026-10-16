# ADR 002: Opt in to Parlor's Cloudflare backend

Status: candidate; production remains Convex until cutover proof and custody.

## Boundary and compatibility

The live `/health` at source 1021961c reports v1.3.0 and
`fiery-spaniel-734`. That is the application database and realtime service,
not a separately deployed Parlor service. The current frontend is the
`poppycock` Cloudflare Worker. Merely vendoring Parlor proves neither boundary.

Reuse Parlor's accepted protocol-v1 adapter, unchanged at
[610f571](https://github.com/misty-step/parlor/blob/610f57104a9eb7ece5c9b39f8e822c99a17e1596/docs/adr/0003-cloudflare-durable-object-adapter.md).
`vendor/parlor/UPSTREAM.json` records this additional snapshot; the existing
room/auth/react packages stay on their current pin. No second database,
schema, client protocol or release engine is introduced.

One SQLite Durable Object named `convex` holds this whole application.
`cloudflare/backend.ts` registers the existing schema, function modules and
abandonment cron. `/backend/*` forwards to that object; other requests use
the built OpenNext app. Existing `convex/browser` and `convex/react` clients
keep their API and guest-token arguments. No JWT provider is added: this app
verifies Parlor guest credentials in its unchanged handlers. Internal seed
functions remain internal; deployment must never invoke them on production.

All 14 user tables, IDs, creation times, references, room eligibility,
accepted bluffs, votes, scores and draw history must transfer one for one.
There is no file-storage API in the current app. An actual export containing
unsupported values, file storage or components must fail closed, not discard
them. The maintenance cron is recreated by the adapter, not a turn timer.

## Isolated candidate, not a cutover

`wrangler.backend-preview.jsonc` is a separate script/class namespace, with
workers.dev and immutable preview URLs disabled. Its single custom host must
be protected by Access before deployment. It can run locally with the
same application build. It must never bind production
resources, keys or records. The production Wrangler configuration and CD
pipeline remain unchanged at this phase.

`pnpm build:parlor && pnpm test:backend:cloudflare` runs the existing game,
content and issuer suites on the adapter's SQLite harness. This is conformance
coverage, not deployed proof. The built workerd journey must also play the
same six-round/rematch browser exercise, test denial and recovery, restart
persistence, and export/restore checksums. Cloud preview and real-data proof
are separate, still required.

Local candidate commands (no production credentials):

```sh
pnpm install --frozen-lockfile
pnpm build:parlor
POPPYCOCK_SYNTHETIC_FIXTURE=1 pnpm test:backend:cloudflare
POPPYCOCK_PREVIEW_ORIGIN=http://127.0.0.1:3310 node scripts/deploy-cloudflare.mjs --build-only --backend-preview
```

The opt-in build embeds that origin's `/backend`, not Convex Cloud. To run it,
use `wrangler dev --local --config wrangler.backend-preview.jsonc` on that
loopback port with freshly generated synthetic guest, continuity and admin
bindings; import `test-results/cloudflare-fixture/catalog.zip` with the existing
Parlor operator, verify its stats, then explicitly unfreeze it. The existing
browser journey accepts `POPPYCOCK_CLOUDFLARE_LOCAL_ORIGIN` only for an HTTP
loopback frontend/backend; it refuses hosted origins and cannot override the
frontend to a public host. Never point that fixture at a production resource.

One local drill recovered all accepted synthetic game writes with
`BackendOperator({ ..., maxPageDocuments: 100 })`. The pinned local
Wrangler/Miniflare stack returned `500 Network connection lost` twice while
restoring with the default 500-document pages immediately after restart.
The same default restored before restart; 100-document pages initially
restored both before and after, but a subsequent 100-document run failed
before restart too. Page size is therefore NOT an established fix. The
cause is unknown and repeatable recovery remains unverified. Retain all
failed evidence; do not count the one smaller-page pass as production
recovery proof. Native local `bookmark` answered, but `restore` returned 400;
deployed PITR is still unverified.

## Custody and production handover

The umbrella's private age/R2 backup rule and public-play exception apply.
Kaylee's approved Linejam template grants generation of backend admin keys
straight into Mirrodin pass, with Phaedrus escrow, pipe-only preservation of
the existing Convex environment bindings, pause at the freeze, one final
encrypted export, and replace-all only on rollback. The preview verifier is
one named Access service token created by Phaedrus, not by an agent using
the GET-only account token. Existing guest signing and continuity keys must
carry over unchanged. No further custody ruling is required for those grants.
Never print keys, guest tokens, cookies or private records in evidence.

The intended handover is: pause `fiery-spaniel-734`; take a final consistent
export; compare canonical counts/digests after the isolated restore and final
DO import; switch the web/backend URL only with the old writer stopped.
Existing guest keys and continuity cookies must remain valid. Old tabs must
fail closed until reload, never keep writing to the old backend.

After DO writes are accepted, a code-only rollback to a Convex-bound web
build is unsafe. Recovery must freeze the DO, drain actions, export all
accepted writes, restore and reconcile them into the paused Convex backend,
then make Convex the sole writer before restoring the compatible web build.
Rehearse this with synthetic accepted post-switch writes first. Keep Convex
paused and intact after acceptance; deletion is not authorized.

## Release and operations

The existing CI/promote/release-please path remains the only CD owner.
Backend cutover will extend it only after independent review and exact-head
preview/data proof, retaining the same tested artifact and compatible rollback.
The existing static `/health` identifies a build, not backend availability;
it must not be relabelled as a live DO health check. Backend-aware health,
Sentry error/uptime/cron and backup/restore operation must be proved before
production acceptance, not inferred from Wrangler observability being enabled.
No DNS change is required for a same-origin production backend.
