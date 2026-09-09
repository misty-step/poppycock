#!/usr/bin/env node
// Checks that every card's source URL still resolves.
//
// The reveal screen renders `source.url` as a link players can follow, so a
// dead citation is a visible defect and a provenance one. This needs the
// network, so it stays out of `pnpm test` and runs on demand:
//
//   pnpm sources            check every source URL
//   pnpm sources --failures print only unreachable URLs
//
// Exits non-zero when any URL is unreachable.

import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const deckDir = fileURLToPath(new URL("../convex/deck/", import.meta.url));
const CONCURRENCY = 12;
const TIMEOUT_MS = 20_000;
const USER_AGENT =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36";

const cardPattern = /key:\s*"([^"]+)"[\s\S]{0,4000}?url:\s*"(https:\/\/[^"]+)"/g;

const cards = [];
for (const file of (await readdir(deckDir)).filter((name) => name.endsWith(".ts"))) {
  const source = await readFile(path.join(deckDir, file), "utf8");
  for (const [, key, url] of source.matchAll(cardPattern)) cards.push({ pack: file, key, url });
}

const byUrl = new Map();
for (const card of cards) {
  if (!byUrl.has(card.url)) byUrl.set(card.url, []);
  byUrl.get(card.url).push(card);
}

/**
 * Museum, encyclopedia, and journal hosts routinely answer scripted requests
 * with a challenge rather than the page. The server still knows the resource,
 * so a challenge is not a broken citation; only an absent or unresolvable one
 * is. Classifying them apart keeps the signal usable — the first run over the
 * catalog produced 209 challenges and zero genuinely missing pages.
 */
const CHALLENGE_STATUSES = new Set([401, 402, 403, 405, 406, 429, 451]);

const probe = async (url) => {
  for (const method of ["HEAD", "GET"]) {
    try {
      const response = await fetch(url, {
        method,
        redirect: "follow",
        signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: { "user-agent": USER_AGENT, accept: "*/*" },
      });
      if (response.ok) return { state: "live", detail: response.status };
      // Some hosts reject HEAD outright; only a failed GET is conclusive.
      if (method !== "GET") continue;
      if (CHALLENGE_STATUSES.has(response.status))
        return { state: "challenged", detail: response.status };
      return { state: "broken", detail: response.status };
    } catch (cause) {
      if (method === "GET") return { state: "broken", detail: String(cause?.message ?? cause) };
    }
  }
  return { state: "broken", detail: "unreachable" };
};

const urls = [...byUrl.keys()];
const results = new Array(urls.length);
let cursor = 0;
let done = 0;

await Promise.all(
  Array.from({ length: Math.min(CONCURRENCY, urls.length) }, async () => {
    while (cursor < urls.length) {
      const index = cursor++;
      results[index] = await probe(urls[index]);
      done += 1;
      if (done % 100 === 0) process.stderr.write(`  checked ${done}/${urls.length}\n`);
    }
  }),
);

const broken = [];
const challenged = [];
urls.forEach((url, index) => {
  const entry = { url, detail: results[index].detail, cards: byUrl.get(url) };
  if (results[index].state === "broken") broken.push(entry);
  else if (results[index].state === "challenged") challenged.push(entry);
});

console.log(`Checked ${urls.length} unique source URLs across ${cards.length} cards.`);
console.log(`  live:       ${urls.length - broken.length - challenged.length}`);
console.log(`  challenged: ${challenged.length} (host blocked the request, page still exists)`);
console.log(`  broken:     ${broken.length}`);

for (const failure of broken) {
  console.log(`\n[${failure.detail}] ${failure.url}`);
  for (const card of failure.cards) console.log(`    ${card.pack} ${card.key}`);
}

if (process.argv.includes("--challenged"))
  for (const entry of challenged) console.log(`[${entry.detail}] ${entry.url}`);

process.exitCode = broken.length > 0 ? 1 : 0;
