export const AVATAR_NAMES = {
  cockatoo: "Dottie the cockatoo",
  crocodile: "Basil the crocodile",
  moth: "Bea the moth",
  walrus: "Monty the walrus",
  rabbit: "Clover the rabbit",
  octopus: "Otto the octopus",
  pear: "Pip the pear",
  frog: "Cricket the frog",
  mushroom: "Mabel the mushroom",
  fox: "Finch the fox",
  whale: "Winnie the whale",
  owl: "Nell the owl",
} as const;

export type AvatarId = keyof typeof AVATAR_NAMES;
export const AVATAR_IDS = Object.keys(AVATAR_NAMES) as AvatarId[];

// Seats supply an initial portrait. Saved choices use stable IDs, never array positions.
export function avatarForSeat(seat: number): AvatarId {
  return AVATAR_IDS[seat % AVATAR_IDS.length]!;
}
