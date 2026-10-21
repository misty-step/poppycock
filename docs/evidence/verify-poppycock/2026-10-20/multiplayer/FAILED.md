# Failed first multiplayer attempt

Command: `POPPYCOCK_REVISION=efb45ade8105732a933ac51ee454182557159a53 POPPYCOCK_EVIDENCE_DIR=docs/evidence/verify-poppycock/2026-10-20/multiplayer pnpm smoke:local`

Exit: 1. The fresh anonymous-local runtime seeded 1,386 cards, reached the
rendered entrance, created three guests, and captured a round-one reveal.
The existing producer then failed at `scripts/smoke.mjs:253`: expected an
accepted submission, received false within its five-second poll. No complete
receipt exists. Partial images are not a passing six-round result.

The command closed its browser and runtime. Ports 3210/3220/3221 were confirmed
free before starting the next owned `pnpm dev` session. This directory is retained
as failed evidence; a retry must use a different directory.
