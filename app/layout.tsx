import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource/fredoka/latin-600.css";
import "@fontsource/atkinson-hyperlegible/latin-400.css";
import "@fontsource/atkinson-hyperlegible/latin-700.css";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Poppycock — bluff your friends",
  description:
    "Write a believable bluff. Find the truth. A free, untimed party game for 3–12 friends, powered by Parlor.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F5F7F5" };
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
