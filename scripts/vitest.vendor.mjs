import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      "packages/auth",
      "packages/core",
      "packages/web",
      "packages/react",
      "integrations/convex",
    ].map((path) => ({
      test: {
        name: `parlor/${path}`,
        root: fileURLToPath(new URL(`../vendor/parlor/${path}/`, import.meta.url)),
        include: ["test/**/*.test.{ts,tsx}"],
        environment: "node",
      },
    })),
  },
});
