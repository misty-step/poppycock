import type { SeedCard, SeedPack } from "./types";
import { oddWords } from "./oddWords";
import { curiousObjects } from "./curiousObjects";
import { wildNature } from "./wildNature";
import { spaceOddities } from "./spaceOddities";
import { kitchenSecrets } from "./kitchenSecrets";
import { brightIdeas } from "./brightIdeas";
import { livingTraditions } from "./livingTraditions";
import { remarkablePlaces } from "./remarkablePlaces";
import { workingLives } from "./workingLives";
import { artAndMusic } from "./artAndMusic";
import { theSea } from "./theSea";
import { lostGear } from "./lostGear";
import { rarerWords } from "./rarerWords";

export const seedPacks: SeedPack[] = [
  oddWords,
  curiousObjects,
  wildNature,
  spaceOddities,
  kitchenSecrets,
  brightIdeas,
  livingTraditions,
  remarkablePlaces,
  workingLives,
  artAndMusic,
  theSea,
  lostGear,
  rarerWords,
];

export const seedCards: SeedCard[] = seedPacks.flatMap((pack) => pack.cards);

export const cardOrdinalByKey = new Map<string, number>();
export const categoryCount = new Map<string, number>();
for (const pack of seedPacks) {
  pack.cards.forEach((card, index) => cardOrdinalByKey.set(card.key, index));
  categoryCount.set(pack.category, pack.cards.length);
}
