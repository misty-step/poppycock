# Diagnostic run: bounded receipt waiting

A temporary copy of the existing smoke used a 30-second bound for only its two
submission/vote receipt polls, and observed WebSocket mutation method names,
request IDs, and response success booleans. It kept all game assertions and actions.
No game code, data shortcuts, or credentials changed. This run passed all six
rounds with final scores 18/8/0 and the four-player rematch; see the receipt.

The earlier five-second failures captured still-pending actions rather than
rejection or lost accepted records. The permanent fix gives only those same two
receipt polls the existing 15-second browser-action budget. The normal
`pnpm smoke:local` must pass independently with that smaller bound. This diagnostic
pass alone is not the final producer proof. Temporary instrumentation is removed
from the candidate; no WebSocket payloads or credentials are retained.
