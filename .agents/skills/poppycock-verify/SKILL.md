---
name: poppycock-verify
description: Verify Poppycock's real multiplayer game, guest continuity, avatars, untimed rounds, and sourced deck using the repository's local Convex runtime and pinned Playwright smoke.
---

# Verify Poppycock

Use the smallest exercise that can catch the changed behavior. This game owns
its verification; the imported [Parlor skill](../parlor/SKILL.md) owns framework
integration guidance, not Poppycock's acceptance criteria. Do not modify that
import or install another browser/test stack.

## Choose and run

1. Read the [journey selector](../../../docs/verification.md#choose-the-exercise)
   and the applicable [focused journey](../../../docs/verification.md#focused-browser-journeys).
   The [README](../../../README.md#play) owns current rules;
   [package.json](../../../package.json) owns commands.
2. Follow [local setup](../../../docs/verification.md#reproduce). Use an owned
   checkout, anonymous local Convex, synthetic guests, and separate browser
   contexts. No hosted/backend write authority is implied. A checkout isolates
   the database; browser contexts isolate identities. Neither replaces the other.
3. For the existing full acceptance path, run `pnpm smoke:local` from the repo
   root. It installs no dependencies itself: complete the documented prerequisites
   first. Against your already-running `pnpm dev`, run `pnpm smoke` instead.
   Do not wrap these commands in another runner.
4. Inspect the actual [postconditions and evidence](../../../docs/verification.md#inspect-the-result),
   not just an exit status, screenshot, or historical receipt. Use rendered
   interactions for UI claims and the existing server checks for hidden state,
   authorization, timing, and scoring. Preserve the source/target distinction.
5. Perform [owned cleanup](../../../docs/verification.md#ownership-and-cleanup).
   Record exact source, target, exercised behavior, artifact location, and limits
   in the current work record. Missing prerequisites and unrun journeys are not passes.

Local/LAN browser runs are not hosted proof or physical-phone testing.
`pnpm smoke:public` creates real hosted gameplay; use only after explicit
approval of its exact app/backend pair and lifecycle, as described in the
[hosted procedure](../../../docs/verification.md#hosted-smoke-is-a-separate-authorized-operation).

## Discovery and maintenance

This repository uses `.agents/skills/<name>/SKILL.md`. A fresh Oh My Pi session
discovers `skill://poppycock-verify` at startup. An already-running session may
not see a newly added skill: read this canonical file directly and follow its
relative links instead. If standalone `omp read` reports no skills, use the
session-based discovery check below.

For a model-free discovery check, start an owned
`omp --mode rpc --no-session --no-extensions --no-lsp --no-rules --tools read --skills poppycock-verify`
process from the checkout. Wait for its `ready` frame, send
`{"id":"discovery","type":"get_available_commands"}`, and inspect the command
metadata for `skill:poppycock-verify` with `source: "skill"`. Do not submit a
prompt; stop the owned process after inspection.

An explicit-resource runner must include this entry point through its approved
skill/resource list; do not broaden its tool or credential authority to enable
discovery. The existing CI runs repository commands directly and does not need
an agent session.

Update the owning commands and linked journeys in the same change when setup,
identity, controls, rules, inspection, or teardown changes. Dated verification
history is evidence about its named revision only, never current readiness.
