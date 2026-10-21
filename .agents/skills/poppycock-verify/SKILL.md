---
name: poppycock-verify
description: Verify Poppycock guest sessions, table invitations and avatars, six-round multiplayer scoring, phase rejection, and disconnect recovery from a shell.
---

# Verify Poppycock

Run from the repository root. Read the [feature map](features/README.md), then
choose the changed journey. Use the repository's pinned Playwright and genuine
anonymous-local Convex runtime; the imported [Parlor skill](../parlor/SKILL.md)
owns framework guidance. [SPEC.md](../../../SPEC.md) owns acceptance criteria;
[docs/verification.md](../../../docs/verification.md) owns the detailed local,
LAN, and hosted procedures. Dated receipts prove only their recorded target.

## Doctor

After installing prerequisites below, check readiness before launch:

```sh
.agents/skills/poppycock-verify/scripts/control.mjs doctor preflight
```

This read-only check requires Node, the pinned browser library, and unused
loopback ports 3210/3220/3221. It starts no services. Local servers bind beyond
loopback for LAN use; never stop another process to claim these fixed ports.
A worktree isolates local state, not ports: run one local pair at a time.

For a running pair or the real deployment:

```sh
.agents/skills/poppycock-verify/scripts/control.mjs doctor local
.agents/skills/poppycock-verify/scripts/control.mjs doctor production
```

Local doctor checks this checkout's anonymous deployment against the backend's
instance name and the web health response. Production doctor requires a served
revision, `backend=cloudflare-do`, and `backendReady=true`. Health is readiness,
not proof of guest authentication or gameplay. Re-run doctor after a failed drive;
reset the browser context or relaunch an owned runtime before retrying a wedged UI.

## Launch

Use an owned, fresh checkout without copied `.env.local` or `.convex` state.
No hosted credentials or owner inbox are needed. Requirements: Node 22.12+,
pnpm 11.25.0, network for the first Convex binary and dependency downloads,
and Chromium OS libraries. Follow [authenticated commands](skill://authenticated-commands)
for native login/pass discovery if GitHub access is required; keep values private.

```sh
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
.agents/skills/poppycock-verify/scripts/control.mjs doctor preflight
export POPPYCOCK_REVISION="$(git rev-parse HEAD)"
export POPPYCOCK_EVIDENCE_DIR="test-results/verification-$(date -u +%Y%m%dT%H%M%SZ)/multiplayer"
pnpm smoke:local
```

`smoke:local` already owns launch → seed → browser drive → shutdown. It builds
Parlor, creates an anonymous-local deployment, seeds the real catalog, and starts
Next.js. Ready means functions configured and the web entrance reachable, followed
by successful real create/join controls. Do not wrap it in another runner.

For focused driving after that command exits, start one owned supervised session:

```sh
pnpm dev
```

Wait for `Convex functions ready!` and a successful local doctor. This reuses only
this checkout's local database and secrets. For a first focused-only run, use
`pnpm bootstrap` before `pnpm dev`. Never run `dev` beside `smoke:local`.

## Drive

The [map](features/README.md) gives exact entry points, outcomes, and failure states.
The full smoke covers table creation, code/QR invitations, six rendered rounds,
private choices, rejected self-votes and spectator submissions, score attribution,
host transfer, offline/reload recovery, and four-player rematch. Receipt polls use the same 15-second bound as browser actions. Inspect its receipt
for six rounds and final scores Ada/Bea/Cy **18/8/0**.

With your local pair running, exercise validation, avatars, invitation URL, and
canceled/confirmed host skips:

```sh
.agents/skills/poppycock-verify/scripts/control.mjs doctor local
.agents/skills/poppycock-verify/scripts/control.mjs focused test-results/focused-$(date -u +%Y%m%dT%H%M%SZ)
```

For production guest access, use the separate fixed-origin, write-restricted path:

```sh
.agents/skills/poppycock-verify/scripts/control.mjs production test-results/production-$(date -u +%Y%m%dT%H%M%SZ)
```

It drives the rendered guest entrance, checks the signed continuity cookie's
security attributes and identity recovery after access-storage loss, checks issuer
rejections, opens the changelog, and checks 390px width. Gameplay POSTs and browser
WebSockets are blocked. Tokens and cookies stay in browser memory; no storage state
or traces are saved. Production writes are limited to guest session issuance.

**Owner sign-in: n/a.** Poppycock has no accounts, email links, configured owner
identity, or owner-only page. phaedrus uses the same guest journey as every player.
The production probe proves guest issuance/continuity, not backend acceptance for
a created seat. Local multiplayer proves authenticated room access with synthetic
guests. A production game would create real records and is outside this run's
read-only scope. `pnpm smoke:public` is also a write flow and its historical Convex
default is not the current Cloudflare target; use the [hosted runbook](../../../docs/cloudflare-cutover.md)
only under separately authorized scope.

For cryptographic expiry, literal-truth scoring, and long untimed waits, run the
existing server checks; short browser exercises cannot establish elapsed-time
boundaries:

```sh
pnpm build:parlor
pnpm exec vitest run tests/session.test.ts tests/game.test.ts
```

## Evidence

Each helper drive takes a **new** evidence directory as its second argument.
Existing directories fail rather than overwrite a previous pass. Inspect
`receipt.json`, the screenshot/ARIA pairs, and the full smoke's
`multiplayer-smoke.json` from the same run. Receipts contain actions and asserted
results; screenshots capture resulting state. Only synthetic local games and public
production entrance/changelog screens belong in committed evidence. Never retain
request headers, access tokens, cookie values, browser profiles, traces, or private
room content. A failure receipt names the failing stage and source line and is not a pass.

For a deliverable, use a new subdirectory under
`docs/evidence/verify-poppycock/<date>/` for each drive (set
`POPPYCOCK_EVIDENCE_DIR` for the smoke). Record base revision plus the candidate
diff/hash for dirty source, served production health, exact commands and exit codes,
unrun states, and cleanup. The [2026-10-20 record](../../../docs/evidence/verify-poppycock/2026-10-20/README.md)
shows the retained format. The source revision environment variable is only a label;
it neither checks out nor deploys that revision.

## Cleanup

Both helper drives close all their browser contexts on success or failure.
`smoke:local` stops only its own process groups. Stop your supervised `pnpm dev`
with Ctrl+C and await its exit; use `ss -ltnp '( sport = :3210 or sport = :3220 or
sport = :3221 )'` to confirm port release. Never kill by name or stop a listener
started by someone else. Run local doctor after surprising failures while the
pair is alive, then stop it and require preflight to pass before relaunch.

Local room/rematch data and signing secrets remain in the owned checkout's ignored
`.convex/` and `.env.local`. Keep them only while reusing that disposable runtime;
after final teardown remove those two generated paths from **this owned worktree**.
No database reset is needed; no production cleanup/delete is authorized. Evidence
stays outside those paths: confirm every receipt and screenshot still exists after
teardown. Failed attempts retain their own receipts; retries use fresh directories.

## Helpers and maintenance

The executable helper is `scripts/control.mjs` relative to this skill. Its complete
CLI is shown above: `doctor preflight|local|production`, `focused <new-dir>`, and
`production <new-dir>`. It uses repository-owned smoke capture and query interfaces;
no second browser stack, runner, or credentials are installed.

The canonical skill lives here; `.claude/skills/poppycock-verify` is a relative
symlink. Fresh Oh My Pi sessions discover `skill://poppycock-verify`; an already
running agent reads this canonical file directly. Keep the map and helper aligned with source changes. Use
`/maintain-verification-skill` for a subsequent source-and-live audit; a maintenance
run reports product regressions instead of weakening a journey.
