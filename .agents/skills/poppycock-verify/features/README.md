# Poppycock verification map

Read this index before driving. Use fresh synthetic browser contexts and this
checkout's real anonymous backend. Start with the skill's doctor; every helper
run gets a new evidence directory. Separate contexts are separate identities;
tabs in one context intentionally share a guest.

| Feature | Stories | Driver |
| --- | --- | --- |
| [Guest sign-in and continuity](sign-in.md) | US-001, US-004 | production helper + local smoke + issuer checks |
| [Create, join, and personalize a table](table.md) | US-001 | local smoke + focused helper |
| [Write, vote, reveal, and skip deliberately](round.md) | US-002 | local smoke + focused helper + game checks |
| [Score six rounds and rematch](scoring.md) | US-003 | local smoke + game checks |
| [Reconnect, transfer host, and recover](recovery.md) | US-004 | local smoke; explicitly scoped recovery drills |

All helper commands below run from the repository root. Substitute a new evidence
directory on every attempt. `full smoke` means the skill's exact `pnpm smoke:local`
command, which launches and cleans up its own pair. `focused` requires an owned
running `pnpm dev`, then local doctor. `production` is fixed to the canonical live
origin and blocks gameplay writes. Production play, restoration, and backend
administration remain outside this read-only production exercise.

Proof includes the action, expected response, independently observed state where
available, source/target identity, and a current receipt. A skipped entry point is
unproven even if another path passes. Record an unreachable route with its unmet
prerequisite, never as a pass. Browser emulation is not a physical phone or QR scan.
