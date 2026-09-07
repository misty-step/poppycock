export const AVATAR_NAMES = {
  // Sheet 1: Tabletop Classic (24)
  pigeon: "Percy the pigeon",
  gentleman: "Barnaby the gentleman",
  cool_frog: "Franklin the frog",
  royal_cat: "Duchess the cat",
  skeleton: "Yorick the skeleton",
  basset_hound: "Sherlock the hound",
  sun: "Solomon the sun",
  octopus: "Otto the octopus",
  wizard: "Merlin the wizard",
  raccoon: "Rascal the raccoon",
  robot: "Rusty the robot",
  duck: "Quentin the duck",
  alien: "Cosmo the alien",
  crowned_fish: "Finneas the fish",
  hedgehog: "Prickles the hedgehog",
  rabbit: "Clover the rabbit",
  pizza: "Pete the pizza",
  crystal_ball: "Zara the crystal ball",
  plague_doctor: "Corvus the doctor",
  cloud: "Nimbus the cloud",
  cactus: "Spike the cactus",
  bulldog: "Winston the bulldog",
  astronaut: "Stella the astronaut",
  flamingo: "Florence the flamingo",

  // Sheet 2: Whimsical Curiosities (24)
  city_pigeon: "Walter the pigeon",
  professor: "Prof. Pumpernickel",
  frog_lady: "Bernadette the frog",
  noir_detective: "Humphrey the gumshoe",
  moon: "Selene the moon",
  worm: "Wellington the worm",
  cowboy: "Buster the cowboy",
  sunflower: "Sunny the sunflower",
  tired_wizard: "Archibald the wizard",
  cool_fish: "Gill the goldfish",
  clerk: "Arthur the clerk",
  persian_cat: "Princess the cat",
  mushroom: "Mabel the mushroom",
  fox: "Finch the fox",
  teacup: "Chamomile the teacup",
  pear: "Pip the pear",
  bandit_raccoon: "Bandit the raccoon",
  retro_robot: "Gearbox the robot",
  bat: "Bart the bat",
  seahorse: "Barnacle the seahorse",
  candle: "Wick the candle",
  snake: "Cleopatra the viper",
  owl: "Nell the owl",
  smug_sun: "Apollo the sun",
} as const;

export type AvatarId = keyof typeof AVATAR_NAMES;
export const AVATAR_IDS = Object.keys(AVATAR_NAMES) as AvatarId[];

// Seats supply an initial portrait. Saved choices use stable IDs, never array positions.
export function avatarForSeat(seat: number): AvatarId {
  return AVATAR_IDS[seat % AVATAR_IDS.length]!;
}

export const LEGACY_AVATARS: Record<string, AvatarId> = {
  cockatoo: "duck",
  crocodile: "cool_frog",
  moth: "bat",
  walrus: "bulldog",
  whale: "seahorse",
  frog: "cool_frog",
};

export function resolveAvatarId(id: string): AvatarId {
  if (id in AVATAR_NAMES) return id as AvatarId;
  if (id in LEGACY_AVATARS) return LEGACY_AVATARS[id]!;
  return "pigeon";
}
