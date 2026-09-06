import type { NextConfig } from "next";
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const config: NextConfig = {
  transpilePackages: ["@parlor/core", "@parlor/auth", "@parlor/react", "@parlor/web"],
  devIndicators: false,
  allowedDevOrigins: convexUrl ? [new URL(convexUrl).hostname] : [],
};
export default config;
