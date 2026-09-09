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
import { medicalCuriosities } from "./medicalCuriosities";
import { peculiarSports } from "./peculiarSports";
import { failedInventions } from "./failedInventions";
import { hoaxesAndFrauds } from "./hoaxesAndFrauds";
import { ancientSecrets } from "./ancientSecrets";
import { bizarreCustoms } from "./bizarreCustoms";
import { militaryBlunders } from "./militaryBlunders";
import { linguisticGems } from "./linguisticGems";
import { botanicalWonders } from "./botanicalWonders";
import { theatricalLore } from "./theatricalLore";
import { secretSocieties } from "./secretSocieties";
import { polarOddities } from "./polarOddities";
import { culinaryOddities } from "./culinaryOddities";
import { undergroundWorlds } from "./undergroundWorlds";
import { crypticCodes } from "./crypticCodes";
import { beastlyCheats } from "./beastlyCheats";
import { clockworkMarvels } from "./clockworkMarvels";
import { mythicalBeasts } from "./mythicalBeasts";
import { eccentricPeople } from "./eccentricPeople";
import { victorianEtiquette } from "./victorianEtiquette";
import { desertMysteries } from "./desertMysteries";
import { weatherAnomalies } from "./weatherAnomalies";
import { aviationCuriosities } from "./aviationCuriosities";
import { scholarlyFollies } from "./scholarlyFollies";
import { strangeCurrency } from "./strangeCurrency";
import { geologicalWonders } from "./geologicalWonders";
import { insectIntrigues } from "./insectIntrigues";
import { marineMarvels } from "./marineMarvels";
import { textileTales } from "./textileTales";
import { printingOddities } from "./printingOddities";
import { curiousArchitecture } from "./curiousArchitecture";
import { royalWhims } from "./royalWhims";
import { mathematicalOddities } from "./mathematicalOddities";
import { transportFollies } from "./transportFollies";
import { fungalFrontiers } from "./fungalFrontiers";
import { forgottenProfessions } from "./forgottenProfessions";

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
  medicalCuriosities,
  peculiarSports,
  failedInventions,
  hoaxesAndFrauds,
  ancientSecrets,
  bizarreCustoms,
  militaryBlunders,
  linguisticGems,
  botanicalWonders,
  theatricalLore,
  secretSocieties,
  polarOddities,
  culinaryOddities,
  undergroundWorlds,
  crypticCodes,
  beastlyCheats,
  clockworkMarvels,
  mythicalBeasts,
  eccentricPeople,
  victorianEtiquette,
  desertMysteries,
  weatherAnomalies,
  aviationCuriosities,
  scholarlyFollies,
  strangeCurrency,
  geologicalWonders,
  insectIntrigues,
  marineMarvels,
  textileTales,
  printingOddities,
  curiousArchitecture,
  royalWhims,
  mathematicalOddities,
  transportFollies,
  fungalFrontiers,
  forgottenProfessions,
];

export const seedCards: SeedCard[] = seedPacks.flatMap((pack) => pack.cards);
