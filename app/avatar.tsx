"use client";

import { createContext, useContext } from "react";
import { AVATAR_NAMES, avatarForSeat, resolveAvatarId, type AvatarId } from "@/lib/avatars";

export const AvatarContext = createContext<Readonly<Partial<Record<string, AvatarId>>>>({});

export function Face({
  seat = 0,
  small = false,
  playerId,
  avatarId,
}: {
  seat?: number;
  small?: boolean;
  playerId?: string;
  avatarId?: AvatarId;
}) {
  const choices = useContext(AvatarContext);
  const rawId = avatarId ?? (playerId ? choices[playerId] : undefined);
  const selected = rawId ? resolveAvatarId(rawId) : avatarForSeat(seat);
  return (
    <span
      className={`face${small ? " face-small" : ""}`}
      data-avatar={AVATAR_NAMES[selected]}
      aria-hidden="true"
    >
      <img
        src={`/avatars/${selected}.webp`}
        alt=""
        width={256}
        height={256}
        className="select-none"
        decoding="async"
        loading="lazy"
        draggable={false}
      />
    </span>
  );
}
