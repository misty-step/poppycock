import crons from "../convex/crons";
import schema from "../convex/schema";
export { BACKEND_BASE_PATH } from "../lib/backend-url";

// Only registered-function modules belong here. Pure deck/rules modules remain
// their normal imports; no game logic, schema or identity handler is copied.
export const modules = {
  avatars: () => import("../convex/avatars"),
  game: () => import("../convex/game"),
  maintenance: () => import("../convex/maintenance"),
  rooms: () => import("../convex/rooms"),
  seed: () => import("../convex/seed"),
};

export const backendApp = { schema, modules, crons };
