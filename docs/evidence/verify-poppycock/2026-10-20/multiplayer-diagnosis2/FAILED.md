# Diagnostic attempt: pending mutation

The existing smoke was temporarily instrumented to capture only synthetic rendered
state and round/player/phase/counts on failure. It failed in round two for Bea:
`phase=writing`, `submitted=false`, `submissionCount=1` after five seconds.
[The ARIA snapshot](failed-submit.aria.txt) shows `Submitting your answer.` and a
disabled submit button, with no rejection error. The mutation was still pending.
The browser was closed and local doctor was rerun before the next drive.
