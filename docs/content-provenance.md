# Poppycock content provenance

## Collection

`convex/content.ts` exports **108 cards** as `seedCards: SeedCard[]`. Each card has a stable key, category, original question, concise answer, and retained source title, URL, and explanatory note.

| Category        |   Cards | Scope                                                                            |
| --------------- | ------: | -------------------------------------------------------------------------------- |
| Odd words       |      27 | Uncommon vocabulary and explicitly historical senses                             |
| Curious objects |      27 | Tools, household vessels, printing equipment, and bathing or ceremonial objects  |
| Wild nature     |      27 | Marine adaptations, animal behavior, biological materials, and ecosystems        |
| Space oddities  |      27 | Spaceflight incidents, engineering, astronomical naming, and planetary phenomena |
| **Total**       | **108** | Enough distinct cards for eighteen six-round games before exhausting the pool    |

Answers are written below the game's 180-character bluff limit. The collection mixes definitions, purposes, mechanisms, and historical explanations rather than requiring exact dates or numerical estimates. Category counts describe this seed collection, not a promise about the game's random draw order.

The answer-bearing module belongs on the Convex side. Client code must not import this collection. Source titles and URLs can themselves give away an answer, so they belong with the reveal, not the writing or voting prompt.

## Research and editorial method

Sources were retrieved and read on **2026-09-06**. Search results were used to locate material; a search summary alone was not accepted as a card's evidence. The final collection uses individual historical dictionary entries, NOAA's own explanatory articles, NASA's mission histories and science summaries, and one JPL engineering account. Failed or irrelevant candidate links were not used as card sources.

1. Read the actual source passage supporting the answer, including the relevant sense, section, or caption.
2. Draft a new question that permits plausible invented explanations without requiring the source's prose.
3. Condense the answer to its central, supported fact. Names, technical terms, and short public-domain definitions sometimes remain unchanged; the per-card note distinguishes this from paraphrase.
4. Preserve qualifiers that affect truth: **some** sea cucumbers eject organs; **some locations** on Mercury have a reversing sunrise; only **some** Enceladus ejecta enters Saturn's ring.
5. Supply context for polysemous words: the printing sense of _tympan_, the philosophical sense of _quiddity_, and the rope-splicing sense of _fid_, for example.
6. Keep beliefs separate from science. _Tarantism_ records a historical spider-bite explanation; it does not endorse that explanation. Historical medical words and instruments are descriptions, not treatment recommendations.
7. Retain the title, retrievable URL, and an editorial/source-location note on every card. `convex/content.ts` is the authoritative card-level provenance index; this document records the collection-level method and reuse basis.

Questions and the factual science/history answers were drafted for Poppycock with AI assistance. They are Poppycock game text, not statements authored, reviewed, approved, or warranted by NOAA, NASA, JPL, or the dictionary host. No commercial Balderdash cards, commercial trivia decks, or collections of player bluffs were used. No illustrations, photographs, recordings, videos, website layouts, or agency logos are included in the card data.

## Sources and reuse basis

### Historical dictionary: 36 cards

The `word-*` and `object-*` cards use the entries linked individually at [Webster's 1913](https://www.websters1913.com/). The underlying 1913 dictionary text is public domain in the United States. The [Project Gutenberg catalog for Webster's Unabridged Dictionary, ebook 29765](https://www.gutenberg.org/ebooks/29765) independently identifies its historical Webster dictionary text as public domain in the USA. Its [accessible text](https://www.gutenberg.org/ebooks/29765.txt.utf-8) and [license explanation](https://www.gutenberg.org/policy/license.html) were also consulted.

The deck reuses or paraphrases the historical definitions, not the modern host's site design or any claimed new editorial material. Most definitions are shortened or restated; `object-scrutoire` retains the brief definition “A writing desk.” Dictionary cards explicitly identify public-domain material in their notes. Public-domain status here is a U.S. statement, not a universal license determination for every jurisdiction.

`word-brontolith` needs a cross-reference: its entry defines it as an _aerolite_. The separately consulted [Aërolite entry](https://www.websters1913.com/words/A%C3%ABrolite) explains that this is a stone or metallic mass fallen from space, a meteorite. The card uses that explanation rather than replacing one obscure word with another.

The Gutenberg links above are scholarly acknowledgements, not branding of a redistributed Gutenberg ebook. No ebook, Gutenberg wrapper, cover, or trademark asset is shipped with the game. Gutenberg's license explanation expressly distinguishes acknowledgements/reference links from use of its trademark on distributed ebooks.

### NOAA: 18 cards

Four cards draw different facts from Emily Crum, NOAA Ocean Exploration, [“Wild and Bizarre Marine Life”](https://oceanexplorer.noaa.gov/explainers/marine-life/), published June 21, 2023 (also presented as an OYLA feature):

| Card                            | Supporting location                                                            |
| ------------------------------- | ------------------------------------------------------------------------------ |
| `nature-rimicaris-food`         | Chemosynthesis section; caption identifying bacteria grown on Rimicaris shrimp |
| `nature-armored-searobin`       | The Armored Searobin: A Fish Out For A Stroll                                  |
| `nature-dandelion-siphonophore` | Siphonophores: In This Together; Rhodaliidae caption                           |
| `nature-red-camouflage`         | The Invisibility of Being Red                                                  |

These cards use original factual paraphrases. Caption facts are used without reproducing their images. NOAA Ocean Exploration's [archived reuse FAQ](https://archive.oceanexplorer.noaa.gov/backmatter/faqs.html#permission) states that information is public domain unless otherwise marked, asks that authors and affiliations be credited, and distinguishes separately copyrighted contributions. The article's author and affiliation are credited here and in the relevant card notes.

The other fourteen nature cards each cite a directly retrieved National Ocean Service fact page:

- [Are sea cucumbers vegetables?](https://oceanservice.noaa.gov/facts/seacuke.html)
- [What are Christmas tree worms?](https://oceanservice.noaa.gov/facts/xmas-tree.html)
- [What is a glass sponge?](https://oceanservice.noaa.gov/facts/glass-sponge.html)
- [How does sand form?](https://oceanservice.noaa.gov/facts/sand.html)
- [The vampire squid and the vampire fish](https://oceanservice.noaa.gov/facts/vampire-squid-fish.html)
- [What is a Portuguese Man o' War?](https://oceanservice.noaa.gov/facts/portuguese-man-o-war.html)
- [What is a nautilus?](https://oceanservice.noaa.gov/facts/nautilus.html)
- [What is a platypus?](https://oceanservice.noaa.gov/facts/platypus.html)
- [What is spat?](https://oceanservice.noaa.gov/facts/spat.html)
- [What is a whale fall?](https://oceanservice.noaa.gov/facts/whale-fall.html)
- [Are horseshoe crabs really crabs?](https://oceanservice.noaa.gov/facts/horseshoe-crab.html)
- [What makes the green turtle...green?](https://oceanservice.noaa.gov/facts/green-turtle.html)
- [What does peanut butter have to do with the ocean?](https://oceanservice.noaa.gov/facts/peanutbutter.html)
- [What are barnacles?](https://oceanservice.noaa.gov/facts/barnacles.html)

The [National Ocean Service reuse statement](https://oceanservice.noaa.gov/disclaimer.html) permits copying or distribution of its public information unless otherwise noted. Poppycock nevertheless supplies its own succinct wording. Third-party photographs, attributed literary quotations, and any other separately protected material on these pages are not reproduced. No current animal-population totals, harvesting regulations, or assurances that blood collection is harmless are carried into the deck.

### NASA and JPL: 18 cards

Six cards concern human spaceflight or mission engineering:

| Card                         | Source                                                                                                                                                                                 |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `space-gemini-sandwich`      | Jennifer Ross-Nazzal, [Fallout from the Unauthorized Gemini III Space Sandwich](https://www.nasa.gov/history/fallout-from-the-unauthorized-gemini-iii-space-sandwich/)                 |
| `space-apollo-golf-tool`     | John Uri, [50 Years Ago: Apollo 14 Lands at Fra Mauro](https://www.nasa.gov/history/50-years-ago-apollo-14-lands-at-fra-mauro/)                                                        |
| `space-apollo-feather`       | [The Apollo 15 Hammer-Feather Drop](https://science.nasa.gov/resource/the-apollo-15-hammer-feather-drop/), including its citation to the Apollo 15 Preliminary Science Report, p. 2-11 |
| `space-gemini-music`         | [55 Years Ago: The Spirit of 76 — The First Rendezvous in Space](https://www.nasa.gov/history/55-years-ago-the-spirit-of-76-the-first-rendezvous-in-space/)                            |
| `space-curiosity-wheel-code` | JPL, [Rover Leaves Tracks in Morse Code](https://www.jpl.nasa.gov/news/rover-leaves-tracks-in-morse-code/)                                                                             |
| `space-moon-trees`           | [Moon Trees](https://www.nasa.gov/history/moon-trees/), Apollo 14 section                                                                                                              |

The remaining twelve cards use these directly retrieved NASA Science pages:

| Source                                                            | Cards and supporting sections                                                                          |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [Mercury Facts](https://science.nasa.gov/mercury/facts/)          | 2: reversing sunrise (Orbit and Rotation); crater names (Surface)                                      |
| [Venus Facts](https://science.nasa.gov/venus/venus-facts/)        | 2: Zoozve naming history; full rotation versus orbital period                                          |
| [Uranus Facts](https://science.nasa.gov/uranus/facts/)            | 3: proposed royal name (Namesake); literary moon names (Moons); long polar winter (Orbit and Rotation) |
| [Triton](https://science.nasa.gov/neptune/moons/triton/)          | 1: retrograde orbit (Overview)                                                                         |
| [Titan Facts](https://science.nasa.gov/saturn/moons/titan/facts/) | 2: hydrocarbon lakes; organic dune grains (Introduction, Surface, Atmosphere)                          |
| [Enceladus](https://science.nasa.gov/saturn/moons/enceladus/)     | 1: jets supplying Saturn's E ring (Overview)                                                           |
| [Io](https://science.nasa.gov/jupiter/jupiter-moons/io/)          | 1: volcanism erasing impact craters (opening explanation)                                              |

These are original factual summaries, not copied article passages. NASA's [content-use guidance](https://www.nasa.gov/nasa-brand-center/images-and-media/) describes the general U.S. reuse status of NASA content while preserving restrictions on third-party material, branding, endorsement, and identifiable people in promotional material. Source links are factual disclosure only; no NASA review or endorsement is implied. NASA is not responsible for the accuracy of these AI-assisted game formulations.

JPL is managed by the California Institute of Technology; **do not assume that every JPL article or asset is public domain merely because its URL ends in nasa.gov**. The Curiosity card uses the mission operator's primary engineering account as evidence for an independently worded fact. No license to republish its prose, photographs, or graphics is asserted or needed for this collection. The distinction between an underlying principle/discovery and its protected written or illustrated expression is explained in the U.S. Copyright Office's [Circular 33](https://www.copyright.gov/circs/circ33.pdf).

The separately copyrighted Apollo Lunar Surface Journal was encountered during research, but its transcript/commentary is neither reproduced nor relied on as the final hammer-feather card's cited source. The final card cites NASA's own summary and science-report reference.

## Precision choices worth preserving

- A Venus **full rotation** lasts longer than its year. This is not a claim about the interval between sunrises.
- Zoozve is a companion asteroid/quasi-satellite, not an ordinary moon of Venus.
- Original Apollo Moon Trees grew on Earth from seeds that **orbited** the Moon; the seeds did not germinate on its surface.
- Curiosity uses track marks as visual reference features. The card does not say the rover decodes Morse code.
- A green turtle's name refers to its fat. The proposed link between diet and fat color is not presented as settled by this card.
- The adult platypus feeding card specifies **adult** because a blanket assertion about teeth at every life stage would be misleading.
- The sea-cucumber prompt describes one genuine defense, not an exclusive list of all possible defenses. Player answers may independently describe other real facts; a bluff game does not perform semantic truth adjudication.

This document and the per-card notes record source consultation and editorial provenance. They are not a claim that builds, type checks, seed execution, gameplay, automated card validation, or playtesting were run during content curation; those were deliberately left to integration.
