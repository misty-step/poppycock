# Poppycock content provenance

The catalog is a **fixed, sourced, AI-assisted editorial deck**. There is no runtime generation. `convex/deck/` holds one module per pack; `convex/content.ts` re-exports `seedPacks` and `seedCards`. Each card has a stable key, pack, category, original question, concise answer, and retained source title, URL, and editorial note.

The pack modules are the authoritative card-level record. **[content-index.md](content-index.md) lists every shipped card and the source consulted for it**; it is generated from the deck by `pnpm catalog`, so it cannot drift from the cards it documents, and `tests/content.test.ts` fails when it is stale. This document records the collection-level method and reuse basis, which no generator can derive.

Answers are written below the game's 180-character bluff limit. The collection mixes definitions, purposes, mechanisms, and historical explanations rather than requiring exact dates or numerical estimates. Category counts describe this seed collection, not a promise about the game's random draw order. A live match prefers a category not yet used in that game.

The answer-bearing modules belong on the Convex side. Client code must not import this collection. Source titles and URLs can themselves give away an answer, so they belong with the reveal, not the writing or voting prompt.

## Research and editorial method

Sources are retrieved and read before a card is written. Search results are used to locate material; a search summary alone is not accepted as a card's evidence. Failed or irrelevant candidate links are not used as card sources.

1. Read the actual source passage supporting the answer, including the relevant sense, section, or caption.
2. Draft a new question that permits plausible invented explanations without requiring the source's prose.
3. Condense the answer to its central, supported fact. Names, technical terms, and short public-domain definitions sometimes remain unchanged; the per-card note distinguishes this from paraphrase.
4. Preserve qualifiers that affect truth: **some** sea cucumbers eject organs; **some locations** on Mercury have a reversing sunrise; only **some** Enceladus ejecta enters Saturn's ring.
5. Supply context for polysemous words: the printing sense of _tympan_, the bodily sense of _wamble_, and the rope-splicing sense of _fid_, for example.
6. Keep beliefs separate from science. _Tarantism_ records a historical spider-bite explanation; it does not endorse that explanation. Historical medical words and instruments are descriptions, not treatment recommendations.
7. Retain the title, retrievable URL, and an editorial/source-location note on every card.

Questions and factual answers were drafted for Poppycock with AI assistance from retrieved source pages. They are Poppycock game text, not statements authored, reviewed, approved, or warranted by the cited institutions or publishers. No commercial Balderdash cards, commercial trivia decks, or collections of player bluffs were used. No illustrations, photographs, recordings, videos, website layouts, or agency logos are included in the card data.

`pnpm sources` re-checks that every cited URL still resolves. Museum, encyclopedia, and journal hosts answer scripted requests with a challenge rather than the page, so the check reports those separately from genuinely missing citations.

## Reuse basis

**Publicly readable does not mean public domain.** Museum, university, botanical institution, UNESCO, inventor-profile and publisher prose may be copyrighted. This deck ships independently worded facts, not copied passages, and asserts no blanket reuse licence. Proper names, titles and short factual labels may necessarily coincide. Institutional images, captions as prose, audio, video, diagrams, scores and logos are not distributed. The distinction between an underlying principle or discovery and its protected written or illustrated expression is explained in the U.S. Copyright Office's [Circular 33](https://www.copyright.gov/circs/circ33.pdf).

### Historical dictionaries and object records

Vocabulary cards draw on individual public-domain entries in [Webster's 1913](https://www.websters1913.com/) and [Project Gutenberg catalog ebook 29765](https://www.gutenberg.org/ebooks/29765) ([accessible text](https://www.gutenberg.org/ebooks/29765.txt.utf-8), [license explanation](https://www.gutenberg.org/policy/license.html)), and on period slang glossaries by Grose and Hotten. Object cards draw on catalogue records from the Science Museum Group, the Victoria and Albert Museum, the British Museum, Royal Museums Greenwich, National Museums Scotland, the Fitzwilliam Museum, and comparable institutions. The deck reuses or paraphrases the historical definitions and object records, not the modern hosts' site designs. Gutenberg links are scholarly acknowledgements only; no ebook, Gutenberg wrapper, or trademark asset is shipped.

### Government science agencies

NOAA, USGS, the National Weather Service, the National Science Foundation and comparable agencies supply marine biology, geology, and atmospheric cards. Their reuse guidelines were followed: original discoveries are cited without copying proprietary imagery or narrative prose.

### NASA and JPL

NASA's [content-use guidance](https://www.nasa.gov/nasa-brand-center/images-and-media/) describes the general U.S. reuse status of NASA content while preserving restrictions on third-party material, branding, endorsement, and identifiable people in promotional material. Source links are factual disclosure only; no NASA review or endorsement is implied, and NASA is not responsible for the accuracy of these AI-assisted game formulations.

JPL is managed by the California Institute of Technology; **do not assume that every JPL article or asset is public domain merely because its URL ends in nasa.gov**. Mission-operator pages are used as evidence for independently worded facts. No license to republish their prose, photographs, or graphics is asserted or needed.

The separately copyrighted Apollo Lunar Surface Journal was encountered during research, but its transcript and commentary are neither reproduced nor relied on as a cited source. The hammer-feather card cites NASA's own summary and science-report reference.

### Evidence, not permission

Some citations prove that a thing exists without granting any right to the thing itself. The UNESCO film catalogue is evidence, not permission to reuse an audiovisual work; the John Cage Trust page is evidence about a technique, not permission to reuse a composition or sound recording.

## Precision choices worth preserving

- A Venus **full rotation** lasts longer than its year. This is not a claim about the interval between sunrises.
- Zoozve is a companion asteroid/quasi-satellite, not an ordinary moon of Venus.
- Original Apollo Moon Trees grew on Earth from seeds that **orbited** the Moon; the seeds did not germinate on its surface.
- Curiosity uses track marks as visual reference features. The card does not say the rover decodes Morse code.
- A green turtle's name refers to its fat. The proposed link between diet and fat color is not presented as settled by this card.
- The adult platypus feeding card specifies **adult** because a blanket assertion about teeth at every life stage would be misleading.
- The sea-cucumber prompt describes one genuine defense, not an exclusive list of all possible defenses. Player answers may independently describe other real facts; a bluff game does not perform semantic truth adjudication.
- Vanilla pollination, salep, caper buds versus caperberries, wheat gluten and traditional mayonnaise are contextualized rather than treated as universal food rules. The chocolate card avoids repeating a questionable source count of cocoa-butter crystal forms.
- Knuckle-bone shooting distinguishes the flicked tablets from the target bones. Q'eswachaka materials are identified as the straw woven into ropes; communal bridge rebuilding is not generalized to all Quechua practices.
- Taos kivas are identified only by their public architectural function; no restricted practices are described. Vega down collection is from nests after birds leave, not plucking living birds. Constructed Nan Madol islets are explained without an invented transport theory.
- The paired light-and-ink mechanisms in mezzotint and lithography are distinct; the metalpoint card concerns metal particles on prepared paper. Museum artwork, musical scores and copyrighted example images remain excluded.
- Contested science is labelled as contested. Namib fairy-circle causation is presented as a hypothesis, and ball-lightning formation as unresolved.
- Eccentric historical patents are described as proposals. The deck does not assert commercial failure that the patent record cannot support.
- All previous stable keys, wording and source corrections remain intact, including Mercury's location-dependent sunrise, Zoozve, the Moon Tree orbital distinction and the Apollo hammer-feather summary source.

This document and the per-card notes record source consultation and editorial provenance. They are not a claim that builds, type checks, seed execution, gameplay, automated card validation, or playtesting were run during content curation; those are verified separately at integration.
