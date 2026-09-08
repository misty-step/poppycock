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
import type * as deck_artAndMusic from "../deck/artAndMusic.js";
import type * as deck_brightIdeas from "../deck/brightIdeas.js";
import type * as deck_catalog from "../deck/catalog.js";
import type * as deck_curiousObjects from "../deck/curiousObjects.js";
import type * as deck_kitchenSecrets from "../deck/kitchenSecrets.js";
import type * as deck_livingTraditions from "../deck/livingTraditions.js";
import type * as deck_lostGear from "../deck/lostGear.js";
import type * as deck_oddWords from "../deck/oddWords.js";
import type * as deck_rarerWords from "../deck/rarerWords.js";
import type * as deck_remarkablePlaces from "../deck/remarkablePlaces.js";
import type * as deck_sample from "../deck/sample.js";
import type * as deck_spaceOddities from "../deck/spaceOddities.js";
import type * as deck_theSea from "../deck/theSea.js";
import type * as deck_types from "../deck/types.js";
import type * as deck_validate from "../deck/validate.js";
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
  "deck/artAndMusic": typeof deck_artAndMusic;
  "deck/brightIdeas": typeof deck_brightIdeas;
  "deck/catalog": typeof deck_catalog;
  "deck/curiousObjects": typeof deck_curiousObjects;
  "deck/kitchenSecrets": typeof deck_kitchenSecrets;
  "deck/livingTraditions": typeof deck_livingTraditions;
  "deck/lostGear": typeof deck_lostGear;
  "deck/oddWords": typeof deck_oddWords;
  "deck/rarerWords": typeof deck_rarerWords;
  "deck/remarkablePlaces": typeof deck_remarkablePlaces;
  "deck/sample": typeof deck_sample;
  "deck/spaceOddities": typeof deck_spaceOddities;
  "deck/theSea": typeof deck_theSea;
  "deck/types": typeof deck_types;
  "deck/validate": typeof deck_validate;
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
