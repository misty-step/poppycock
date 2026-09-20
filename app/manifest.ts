import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Poppycock",
    short_name: "Poppycock",
    description:
      "Write a believable bluff. Find the truth. A free, untimed party game for 3–12 friends, powered by Parlor.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4EEFB",
    theme_color: "#F6F0FF",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
