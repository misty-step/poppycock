# Changelog

## 1.2.0 — 2026-09-08

- Rebuilt the visual design as a party game rather than a calm tabletop: a lilac room, grape ink and actions, marigold entrance ticket, coral invitation board, mint question bubbles, speech-bubble corners, and flat printed shadows.
- Made Fredoka the voice of the game across the wordmark, headlines, titles, questions, round markers, and score totals. Question type uses container query units from the wrapping question section so a narrow reveal column shrinks the heading instead of using the viewport and breaking the sentence.
- Gave the entrance a real hook — “Your friends are full of it.” — with a labelled example bluff in a speech bubble and a small cast of characters below the form, so phones still reach the inputs first.
- Celebrated results: a lilac winner banner with the winner's portrait on a marigold burst, a trophy-marked scoreboard, a clearer round marker and category chip, and “The truth, at last!” at reveal. Questions, answers, scores, ties, and every action label stay literal.
- Moved keyboard focus to a distinct blue so a focused control is never mistaken for a selected one; all new party surfaces carry darkened rather than faded supporting text.
- Linked the footer credits to [Misty Step](https://mistystep.io) and [Parlor](https://parlor.mistystep.io).
- Deployed the party interface to https://poppycock.mistystep.io (Cloudflare Worker `83b3b83e-0b1d-4f57-aadd-700492591c6c`). Hosted three-browser smoke scored **3 / 1 / 0**.


## 1.1.0 — 2026-09-08

- Added a root `DESIGN.md` following Google's alpha token-and-prose format, with Poppycock's palette, typography, layout, component states, accessibility behavior, and copy contract.
- Added persistent avatar selection across all forty-eight characters. Players can change their avatar from the lobby roster or the table options menu during a game; choices stay tied to the player's identity and persist across tables, reloads, and reconnections.
- Rebuilt the interface with locally owned shadcn Base UI controls: create/join tabs, whole-row radio choices, table menus, invitation/rules dialogs, and consequence-specific confirmations. Replaced the layered decorative styles with a restrained tabletop system and plain action labels.
- Kept the viewer's accepted vote visible after reload through a private server projection, without exposing other players' votes. Drafts survive reload; submitted answers and locked votes move focus to their receipts.
- Fixed enlarged-text overflow in invitations and rules, made rules open at their heading, and kept writing actions in normal document flow rather than a sticky overlay. Updated both local and hosted smoke producers to the new controls.
- Polished portraits with circular framing and consistent sizing throughout the game. Replaced boxed avatar choices with a portrait gallery, larger preview, and clear selection ring/checkmark; kept browsing and save actions usable on narrow screens with enlarged text.
- Doubled the sourced deck from 108 to 216 cards, adding Kitchen secrets, Bright ideas, Living traditions, Remarkable places, Working lives, and Art & music while preserving every existing card.
- Anonymous choices share canonical lowercase text, whitespace, and terminal-punctuation treatment in the existing server-shuffled order. Attributed reveals retain the original text and sources.
- Removed the 90-second writing timer, 60-second vote timer, reveal grace period, and total match cap. Everyone finishing still advances a phase; only confirmed host actions skip unfinished input. Any participant can continue a revealed round immediately.
- Moved Leave table into the room toolbar with a cancellable, keyboard-accessible confirmation rather than an easy-to-hit gameplay action.
- Pinned genuine upstream Parlor to `56342bd910a58f255483afdf5a92d3fc4fcc0ae2`, which adds opt-in untimed matches without weakening other games’ default cap or everyone-away cleanup.
- Preserved a one-time, data-safe upgrade revision in history; removed migration code and legacy deadline fields from the final source. Local preview shutdown keeps handling repeated terminal/package-manager signals until its child processes exit.
- Verified the redesigned interface locally with the full six-round multiplayer game, a twelve-guest interaction audit, 320px/390px/landscape layouts, 200% text, keyboard and reduced-motion checks, and backend-driven shared-rank standings.
- Deployed to https://poppycock.mistystep.io on 2026-09-08 after running the data-safe untimed migration against the production Convex deployment; the hosted three-browser round and live avatar checks passed.

## 1.0.0 — 2026-09-06

- Complete accountless bluffing game for 3–12 people: room codes and QR invitations, six timed rounds, anonymous shuffled options, locked submissions and votes, sourced reveals, final standings, and rematches.
- Authoritative scoring and immutable match eligibility, normalized duplicate-bluff merging, exact-truth bonuses, self-vote rejection, retry-safe inputs, and stale-round/deadline enforcement.
- Late-join spectators, host transfer, phone offline/reload recovery, and cookie-backed identity continuity across short access-token renewals.
- Seventy-two original or public-domain-grounded cards across four categories, with retained provenance and idempotent database seeding.
- Genuine app-local Parlor room, match, authentication, heartbeat, wake-lock, QR, and abandonment lifecycle integration, pinned to `90a813c83d09fd3ee96dcd35aeb64cee0ca7121e`.
- Reproducible anonymous local Convex bootstrap/reset, private-repository CI, and a self-contained four-browser game exercise that emits sanitized screenshots and authoritative scoring evidence.
- Explicitly configured HTTP LAN development works without wildcard dev origins or secure-context-only UUID APIs; the browser exercise can target that origin directly.
- Expanded the sourced deck from 72 to 108 cards (27 per category) using additional Webster 1913, NOAA, and NASA Science pages retrieved on 2026-09-06.
- Hosted the 108-card game at https://poppycock.mistystep.io on Cloudflare Workers with a dedicated Convex production deployment (`fiery-spaniel-734`).
- Proved one three-browser round on the hosted HTTPS origin (`pnpm smoke:public`), separate from the local Convex smoke client.
