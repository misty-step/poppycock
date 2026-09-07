# Changelog

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
