# ADR 001: One game release, compatible backend-first deployment

Accepted source proposal, 2026-10-15.

Poppycock follows the [shared release convention](https://github.com/misty-step/harness/blob/master/docs/release-convention.md)
and [Foundations](https://foundations.mistystep.io/). One release unit comprises
its Worker client/issuer and dedicated Convex backend `fiery-spaniel-734`.
Release-please is the only version/notes generator. It updates the root manifest,
package version, and CHANGELOG; the site renders that changelog at build time.

Baseline: the existing dated changelog records 1.2.0, but there are no immutable
release tags or GitHub Releases. Bootstrap at full source
`9db0c596c5858d903a2325d2cb82606462e177e8`, starting manifest version 1.2.0.
Historical entries remain dated history, not newly asserted deployment proof.
The private package.json version was previously stale at 1.0.0; the generator
repairs it on the first release PR. New feat adoption should produce 1.3.0.
The previously undated notes are archived under the verified September 20
Worker deployment, not assigned a retrospective semantic version. Read-only
review verified production already serves 51 active packs and 1,386 active
cards. Release automation never seeds production or changes pack/game data.

CI plays the full real local multiplayer journey with synthetic local data.
It builds one OpenNext Worker with production public URLs, then exercises that
same artifact in local workerd before upload. Only a successful master push
promotes it; PRs and explicit release-PR verification dispatches cannot deploy.
Native concurrency preserves running master CI/promotions; newer queued runs
can supersede older pending runs. Promotion
refuses an obsolete master SHA, validates the exact backend key selector,
deploys the tested backend source first, then promotes the downloaded Worker.
Readback checks the exact source/version and home HTTP, retaining provider and
previous Worker version in its receipt. There is no seed/reset/content action.

Compatibility is a deployment contract, not a database restore strategy. Backend
changes must support the previous and new client while connected players reload.
A schema contraction requires a separate expand/migrate/contract change and its
own data-safe proof; never hide it in the release machinery. If Worker promotion
or readback fails, native Worker rollback restores the captured previous client
while leaving the compatible backend and all accepted data intact. Never deploy
the pre-untimed-migration backend; the historical migration-stage revision remains
the documented fallback boundary. No automatic backend rollback or data restore.
For a post-deployment incident, dispatch `rollback.yml` on master with the
receipt's `previousWorkerVersion`. It shares the production concurrency group,
rejects client versions older than the known September 20 compatible deployment,
uses native Wrangler rollback and reads back the exact provider version and HTTP.

There are no required branch checks in this repo; Kaylee explicitly retained that
setting. Normal squash PR merges use reviewed heads and exact-head CI evidence,
not admin bypass. Repository merge settings use PR_TITLE/BLANK, squash only.
Unlike the shared convention's native-run approval path, GITHUB_TOKEN release
PRs get real CI via explicit same-repository SHA dispatch (as in Linejam);
native pull_request runs may remain action_required and are not used as proof.
Both the dispatch branch head and checked-out commit must equal the requested
SHA. It posts no synthetic required check. Release PRs contain
only generator output and need merging-agent version/notes readback, no second
code review. Failed, skipped, stale or incomplete CI is not release authorization.
Existing fleet CI/HTTP alarm custody consumes failure; no second alert router.

The existing three user stories now live in SPEC.md (renamed without changing their criteria).
US-001/002/003 are exercised by existing game tests and six-round/rematch smoke;
The release change did not rewrite their specification.
The original app is light-only; a whole-app dark theme is not part of release adoption.
