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
import { uncannyLaws } from "./uncannyLaws";
import { folkBeliefs } from "./folkBeliefs";

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
  uncannyLaws,
  folkBeliefs,
];

export const seedCards: SeedCard[] = seedPacks.flatMap((pack) => pack.cards);
