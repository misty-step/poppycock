import type { NextConfig } from "next";
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const allowedDevOrigins = ["poppycock.mistystep.io"];
if (convexUrl) allowedDevOrigins.push(new URL(convexUrl).hostname);
if (siteUrl) allowedDevOrigins.push(new URL(siteUrl).hostname);
const config: NextConfig = {
  transpilePackages: ["@parlor/core", "@parlor/auth", "@parlor/react", "@parlor/web"],
  devIndicators: false,
  allowedDevOrigins,
};
export default config;
