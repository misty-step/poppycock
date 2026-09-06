"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useGuestCredential, type UseGuestCredentialResult } from "@parlor/react";
import type { GuestCredentialIssuer } from "@parlor/web";
import { createContext, useContext, useState, type ReactNode } from "react";

const issuer: GuestCredentialIssuer = async (input) => {
  const response = await fetch("/api/guest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input ?? {}),
    credentials: "same-origin",
  });
  const result = await response.json();
  if (!response.ok)
    throw new Error(
      result.error ?? "Your seat could not be restored. Retry without clearing your browser data.",
    );
  return result;
};
const GuestContext = createContext<UseGuestCredentialResult | null>(null);
export function useGuest() {
  const guest = useContext(GuestContext);
  if (!guest) throw new Error("Guest provider is missing");
  return guest;
}
function GuestProvider({ children }: { children: ReactNode }) {
  const guest = useGuestCredential({ issuer, autoAcquire: true, key: "poppycock:credential" });
  return <GuestContext.Provider value={guest}>{children}</GuestContext.Provider>;
}
export function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(() => {
    const url = process.env.NEXT_PUBLIC_CONVEX_URL;
    return url ? new ConvexReactClient(url) : null;
  });
  if (!client)
    return (
      <main className="setup-error">
        <h1>The table isn’t set yet.</h1>
        <p>
          Run <code>pnpm bootstrap</code>, then <code>pnpm dev</code>. The server needs
          NEXT_PUBLIC_CONVEX_URL. No mock game is running.
        </p>
      </main>
    );
  return (
    <ConvexProvider client={client}>
      <GuestProvider>{children}</GuestProvider>
    </ConvexProvider>
  );
}
