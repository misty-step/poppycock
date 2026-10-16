import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import { BACKEND_BASE_PATH } from "./lib/backend-url";
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const allowedDevOrigins = ["poppycock.mistystep.io"];
if (convexUrl && convexUrl !== BACKEND_BASE_PATH)
  allowedDevOrigins.push(new URL(convexUrl).hostname);
if (siteUrl) allowedDevOrigins.push(new URL(siteUrl).hostname);
const config: NextConfig = {
  env: {
    POPPYCOCK_REVISION: process.env.POPPYCOCK_REVISION ?? "development",
    POPPYCOCK_RELEASE_NOTES: readFileSync("CHANGELOG.md", "utf8"),
  },
  transpilePackages: ["@parlor/core", "@parlor/auth", "@parlor/react", "@parlor/web"],
  devIndicators: false,
  allowedDevOrigins,
};
export default config;
