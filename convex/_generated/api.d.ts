/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as avatars from "../avatars.js";
import type * as content from "../content.js";
import type * as crons from "../crons.js";
import type * as deck_ancientSecrets from "../deck/ancientSecrets.js";
import type * as deck_artAndMusic from "../deck/artAndMusic.js";
import type * as deck_audit from "../deck/audit.js";
import type * as deck_aviationCuriosities from "../deck/aviationCuriosities.js";
import type * as deck_beastlyCheats from "../deck/beastlyCheats.js";
import type * as deck_bizarreCustoms from "../deck/bizarreCustoms.js";
import type * as deck_botanicalWonders from "../deck/botanicalWonders.js";
import type * as deck_brightIdeas from "../deck/brightIdeas.js";
import type * as deck_catalog from "../deck/catalog.js";
import type * as deck_clockworkMarvels from "../deck/clockworkMarvels.js";
import type * as deck_crypticCodes from "../deck/crypticCodes.js";
import type * as deck_culinaryOddities from "../deck/culinaryOddities.js";
import type * as deck_curiousArchitecture from "../deck/curiousArchitecture.js";
import type * as deck_curiousObjects from "../deck/curiousObjects.js";
import type * as deck_desertMysteries from "../deck/desertMysteries.js";
import type * as deck_eccentricPeople from "../deck/eccentricPeople.js";
import type * as deck_failedInventions from "../deck/failedInventions.js";
import type * as deck_folkBeliefs from "../deck/folkBeliefs.js";
import type * as deck_forgottenProfessions from "../deck/forgottenProfessions.js";
import type * as deck_fungalFrontiers from "../deck/fungalFrontiers.js";
import type * as deck_geologicalWonders from "../deck/geologicalWonders.js";
import type * as deck_hoaxesAndFrauds from "../deck/hoaxesAndFrauds.js";
import type * as deck_insectIntrigues from "../deck/insectIntrigues.js";
import type * as deck_kitchenSecrets from "../deck/kitchenSecrets.js";
import type * as deck_linguisticGems from "../deck/linguisticGems.js";
import type * as deck_livingTraditions from "../deck/livingTraditions.js";
import type * as deck_lostGear from "../deck/lostGear.js";
import type * as deck_marineMarvels from "../deck/marineMarvels.js";
import type * as deck_mathematicalOddities from "../deck/mathematicalOddities.js";
import type * as deck_medicalCuriosities from "../deck/medicalCuriosities.js";
import type * as deck_militaryBlunders from "../deck/militaryBlunders.js";
import type * as deck_mythicalBeasts from "../deck/mythicalBeasts.js";
import type * as deck_oddWords from "../deck/oddWords.js";
import type * as deck_peculiarSports from "../deck/peculiarSports.js";
import type * as deck_polarOddities from "../deck/polarOddities.js";
import type * as deck_printingOddities from "../deck/printingOddities.js";
import type * as deck_rarerWords from "../deck/rarerWords.js";
import type * as deck_remarkablePlaces from "../deck/remarkablePlaces.js";
import type * as deck_royalWhims from "../deck/royalWhims.js";
import type * as deck_scholarlyFollies from "../deck/scholarlyFollies.js";
import type * as deck_secretSocieties from "../deck/secretSocieties.js";
import type * as deck_spaceOddities from "../deck/spaceOddities.js";
import type * as deck_strangeCurrency from "../deck/strangeCurrency.js";
import type * as deck_textileTales from "../deck/textileTales.js";
import type * as deck_theSea from "../deck/theSea.js";
import type * as deck_theatricalLore from "../deck/theatricalLore.js";
import type * as deck_transportFollies from "../deck/transportFollies.js";
import type * as deck_types from "../deck/types.js";
import type * as deck_uncannyLaws from "../deck/uncannyLaws.js";
import type * as deck_undergroundWorlds from "../deck/undergroundWorlds.js";
import type * as deck_validate from "../deck/validate.js";
import type * as deck_victorianEtiquette from "../deck/victorianEtiquette.js";
import type * as deck_weatherAnomalies from "../deck/weatherAnomalies.js";
import type * as deck_wildNature from "../deck/wildNature.js";
import type * as deck_workingLives from "../deck/workingLives.js";
import type * as game from "../game.js";
import type * as maintenance from "../maintenance.js";
import type * as rooms from "../rooms.js";
import type * as rules from "../rules.js";
import type * as seed from "../seed.js";
import type * as validators from "../validators.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  avatars: typeof avatars;
  content: typeof content;
  crons: typeof crons;
  "deck/ancientSecrets": typeof deck_ancientSecrets;
  "deck/artAndMusic": typeof deck_artAndMusic;
  "deck/audit": typeof deck_audit;
  "deck/aviationCuriosities": typeof deck_aviationCuriosities;
  "deck/beastlyCheats": typeof deck_beastlyCheats;
  "deck/bizarreCustoms": typeof deck_bizarreCustoms;
  "deck/botanicalWonders": typeof deck_botanicalWonders;
  "deck/brightIdeas": typeof deck_brightIdeas;
  "deck/catalog": typeof deck_catalog;
  "deck/clockworkMarvels": typeof deck_clockworkMarvels;
  "deck/crypticCodes": typeof deck_crypticCodes;
  "deck/culinaryOddities": typeof deck_culinaryOddities;
  "deck/curiousArchitecture": typeof deck_curiousArchitecture;
  "deck/curiousObjects": typeof deck_curiousObjects;
  "deck/desertMysteries": typeof deck_desertMysteries;
  "deck/eccentricPeople": typeof deck_eccentricPeople;
  "deck/failedInventions": typeof deck_failedInventions;
  "deck/folkBeliefs": typeof deck_folkBeliefs;
  "deck/forgottenProfessions": typeof deck_forgottenProfessions;
  "deck/fungalFrontiers": typeof deck_fungalFrontiers;
  "deck/geologicalWonders": typeof deck_geologicalWonders;
  "deck/hoaxesAndFrauds": typeof deck_hoaxesAndFrauds;
  "deck/insectIntrigues": typeof deck_insectIntrigues;
  "deck/kitchenSecrets": typeof deck_kitchenSecrets;
  "deck/linguisticGems": typeof deck_linguisticGems;
  "deck/livingTraditions": typeof deck_livingTraditions;
  "deck/lostGear": typeof deck_lostGear;
  "deck/marineMarvels": typeof deck_marineMarvels;
  "deck/mathematicalOddities": typeof deck_mathematicalOddities;
  "deck/medicalCuriosities": typeof deck_medicalCuriosities;
  "deck/militaryBlunders": typeof deck_militaryBlunders;
  "deck/mythicalBeasts": typeof deck_mythicalBeasts;
  "deck/oddWords": typeof deck_oddWords;
  "deck/peculiarSports": typeof deck_peculiarSports;
  "deck/polarOddities": typeof deck_polarOddities;
  "deck/printingOddities": typeof deck_printingOddities;
  "deck/rarerWords": typeof deck_rarerWords;
  "deck/remarkablePlaces": typeof deck_remarkablePlaces;
  "deck/royalWhims": typeof deck_royalWhims;
  "deck/scholarlyFollies": typeof deck_scholarlyFollies;
  "deck/secretSocieties": typeof deck_secretSocieties;
  "deck/spaceOddities": typeof deck_spaceOddities;
  "deck/strangeCurrency": typeof deck_strangeCurrency;
  "deck/textileTales": typeof deck_textileTales;
  "deck/theSea": typeof deck_theSea;
  "deck/theatricalLore": typeof deck_theatricalLore;
  "deck/transportFollies": typeof deck_transportFollies;
  "deck/types": typeof deck_types;
  "deck/uncannyLaws": typeof deck_uncannyLaws;
  "deck/undergroundWorlds": typeof deck_undergroundWorlds;
  "deck/validate": typeof deck_validate;
  "deck/victorianEtiquette": typeof deck_victorianEtiquette;
  "deck/weatherAnomalies": typeof deck_weatherAnomalies;
  "deck/wildNature": typeof deck_wildNature;
  "deck/workingLives": typeof deck_workingLives;
  game: typeof game;
  maintenance: typeof maintenance;
  rooms: typeof rooms;
  rules: typeof rules;
  seed: typeof seed;
  validators: typeof validators;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
