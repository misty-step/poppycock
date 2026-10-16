import { createConvexBackend } from "@parlor/cloudflare";
import crons from "../convex/crons";
import schema from "../convex/schema";

export const BACKEND_BASE_PATH = "/backend";

// Only registered-function modules belong here. Pure deck/rules modules remain
// their normal imports; no game logic, schema or identity handler is copied.
export const modules = {
  avatars: () => import("../convex/avatars"),
  game: () => import("../convex/game"),
  maintenance: () => import("../convex/maintenance"),
  rooms: () => import("../convex/rooms"),
  seed: () => import("../convex/seed"),
};

export const PoppycockBackend = createConvexBackend({
  app: { schema, modules, crons },
  basePath: BACKEND_BASE_PATH,
  adminKeyBinding: "POPPYCOCK_BACKEND_ADMIN_KEY",
  redactErrors: () => true,
  deploymentName: "poppycock",
});
