# Create, join, and personalize a table

A host shares a four-character code or invitation; friends join, choose their
portraits, and start when at least three players are present.

## Sub-features

- `create-table` creates a local table with a host identity.
- `join-table` supports code entry and `/?join=<code>` invitation URLs.
- `qr-invite` displays the room's QR invitation.
- `validation` rejects empty names and disables starting below three players.
- `avatar` cancels or saves a portrait, preserving the saved choice after reload.

## How to get to it (user POV)

- Fill `Your name` and choose `Create table` on the entrance.
- Choose the `Join table` tab, or open the shared invitation URL.
- Choose the room-code button for QR, or `Change avatar` in the lobby; during play use `Table options → Change avatar`.

## Driving it with control.mjs and Playwright

Preconditions: only an owned local pair; separate browser contexts for players.

- **Create/code/QR.** Run `pnpm smoke:local`. Ada creates; Bea/Cy join by `Your name`, `Room code`, and `Join table`. Roster count is three with distinct viewer IDs. Clicking `.room-code` renders `Scan to join table <code>`; Escape dismisses it.
- **Empty/too few.** With `pnpm dev` running, run `.agents/skills/poppycock-verify/scripts/control.mjs focused test-results/table-NEW`. Empty-name submission marks the field invalid; after one-player creation `Start game` is disabled.
- **Invite entry.** The same focused command joins Jun through the tab and Kit through `/?join=<code>`, then requires a three-player roster.
- **Avatar cancel/save.** The focused command opens `Change avatar`, chooses another `Your avatar` radio, cancels, and checks the original choice. Save must close the picker before reload; the roster portrait and reopened picker must retain the new choice. Offline, `Save avatar` is disabled and `Reconnect to save your avatar.` appears. Screenshot and ARIA capture this state.
- **Playing menu.** For changes to the second avatar entry point, start a local match and use `getByRole('button', {name:'Table options', exact:true})`, then `getByRole('menuitem', {name:'Change avatar', exact:true})`. Repeat cancel/save/reload assertions in the same picker; capture the resulting choice. This entry is manual focused Playwright, not covered by the helper's lobby entry.

## Gotchas

- Room codes invite access; never use or capture another person's live table.
- Portrait screenshots alone do not prove persistence. The focused command reopens after reload.
- QR rendering is covered; physical-camera scanning, 12-player capacity, closed/missing-room recovery, keyboard selection, and in-game avatar entry need dedicated runs when changed. They are not established by the baseline helper.
- Full and focused smokes leave synthetic local rooms; final cleanup removes only this disposable runtime's state.
