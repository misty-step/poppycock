/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as content from "../content.js";
import type * as crons from "../crons.js";
import type * as game from "../game.js";
import type * as maintenance from "../maintenance.js";
import type * as rooms from "../rooms.js";
import type * as rules from "../rules.js";
import type * as seed from "../seed.js";
import type * as untimedMigration from "../untimedMigration.js";
import type * as validators from "../validators.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  content: typeof content;
  crons: typeof crons;
  game: typeof game;
  maintenance: typeof maintenance;
  rooms: typeof rooms;
  rules: typeof rules;
  seed: typeof seed;
  untimedMigration: typeof untimedMigration;
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
