# Poppycock content provenance

## Collection

`convex/content.ts` exports **216 cards** as `seedCards: SeedCard[]`: the preserved 108-card collection plus 108 newly sourced cards in six additional categories. Each card has a stable key, category, original question, concise answer, and retained source title, URL, and explanatory note.

| Category          |   Cards | Scope                                                                            |
| ----------------- | ------: | -------------------------------------------------------------------------------- |
| Odd words         |      27 | Uncommon vocabulary and explicitly historical senses                             |
| Curious objects   |      27 | Tools, household vessels, printing equipment, and bathing or ceremonial objects  |
| Wild nature       |      27 | Marine adaptations, animal behavior, biological materials, and ecosystems        |
| Space oddities    |      27 | Spaceflight incidents, engineering, astronomical naming, and planetary phenomena |
| Kitchen secrets   |      18 | Ingredient anatomy, food transformations, fermentation and flavour               |
| Bright ideas      |      18 | Inventions' unexpected origins, practical problems and mechanisms                |
| Living traditions |      18 | Community practices, communication, celebration and shared skills                |
| Remarkable places |      18 | Unusual architecture, landscapes, archaeology and water engineering              |
| Working lives     |      18 | Historical trades, specialist labour and living traditional work                 |
| Art & music       |      18 | Musical mechanisms, visual-art processes, pigments and materials                 |
| **Total**         | **216** | Thirty-six six-round games' worth of distinct cards in the pool                  |

Answers are written below the game's 180-character bluff limit. The collection mixes definitions, purposes, mechanisms, and historical explanations rather than requiring exact dates or numerical estimates. Category counts describe this seed collection, not a promise about the game's random draw order.

The answer-bearing module belongs on the Convex side. Client code must not import this collection. Source titles and URLs can themselves give away an answer, so they belong with the reveal, not the writing or voting prompt.

## Research and editorial method

Sources were retrieved and read on **2026-09-06–07**. Search results were used to locate material; a search summary alone was not accepted as a card's evidence. The collection uses individual historical dictionary entries, NOAA explanations, NASA/JPL mission and science accounts, and the primary/institutional sources listed below for the expansion. Failed or irrelevant candidate links were not used as card sources.

1. Read the actual source passage supporting the answer, including the relevant sense, section, or caption.
2. Draft a new question that permits plausible invented explanations without requiring the source's prose.
3. Condense the answer to its central, supported fact. Names, technical terms, and short public-domain definitions sometimes remain unchanged; the per-card note distinguishes this from paraphrase.
4. Preserve qualifiers that affect truth: **some** sea cucumbers eject organs; **some locations** on Mercury have a reversing sunrise; only **some** Enceladus ejecta enters Saturn's ring.
5. Supply context for polysemous words: the printing sense of _tympan_, the philosophical sense of _quiddity_, and the rope-splicing sense of _fid_, for example.
6. Keep beliefs separate from science. _Tarantism_ records a historical spider-bite explanation; it does not endorse that explanation. Historical medical words and instruments are descriptions, not treatment recommendations.
7. Retain the title, retrievable URL, and an editorial/source-location note on every card. `convex/content.ts` is the authoritative card-level provenance index; this document records the collection-level method and reuse basis.

Questions and factual answers were drafted for Poppycock with AI assistance. They are Poppycock game text, not statements authored, reviewed, approved, or warranted by the cited institutions or publishers. No commercial Balderdash cards, commercial trivia decks, or collections of player bluffs were used. No illustrations, photographs, recordings, videos, website layouts, or agency logos are included in the card data.

## Sources and reuse basis

### Historical dictionary: 54 cards

The `word-*` and `object-*` cards use the entries linked individually at [Webster's 1913](https://www.websters1913.com/). The underlying 1913 dictionary text is public domain in the United States. The [Project Gutenberg catalog for Webster's Unabridged Dictionary, ebook 29765](https://www.gutenberg.org/ebooks/29765) independently identifies its historical Webster dictionary text as public domain in the USA. Its [accessible text](https://www.gutenberg.org/ebooks/29765.txt.utf-8) and [license explanation](https://www.gutenberg.org/policy/license.html) were also consulted.

The deck reuses or paraphrases the historical definitions, not the modern host's site design or any claimed new editorial material. Most definitions are shortened or restated; `object-scrutoire` retains the brief definition “A writing desk.” Dictionary cards explicitly identify public-domain material in their notes. Public-domain status here is a U.S. statement, not a universal license determination for every jurisdiction.

`word-brontolith` needs a cross-reference: its entry defines it as an _aerolite_. The separately consulted [Aërolite entry](https://www.websters1913.com/words/A%C3%ABrolite) explains that this is a stone or metallic mass fallen from space, a meteorite. The card uses that explanation rather than replacing one obscure word with another.

The Gutenberg links above are scholarly acknowledgements, not branding of a redistributed Gutenberg ebook. No ebook, Gutenberg wrapper, cover, or trademark asset is shipped with the game. Gutenberg's license explanation expressly distinguishes acknowledgements/reference links from use of its trademark on distributed ebooks.

### NOAA: 27 cards

Four cards draw different facts from Emily Crum, NOAA Ocean Exploration, [“Wild and Bizarre Marine Life”](https://oceanexplorer.noaa.gov/explainers/marine-life/), published June 21, 2023 (also presented as an OYLA feature):

| Card                            | Supporting location                                                            |
| ------------------------------- | ------------------------------------------------------------------------------ |
| `nature-rimicaris-food`         | Chemosynthesis section; caption identifying bacteria grown on Rimicaris shrimp |
| `nature-armored-searobin`       | The Armored Searobin: A Fish Out For A Stroll                                  |
| `nature-dandelion-siphonophore` | Siphonophores: In This Together; Rhodaliidae caption                           |
| `nature-red-camouflage`         | The Invisibility of Being Red                                                  |

These cards use original factual paraphrases. Caption facts are used without reproducing their images. NOAA Ocean Exploration's [archived reuse FAQ](https://archive.oceanexplorer.noaa.gov/backmatter/faqs.html#permission) states that information is public domain unless otherwise marked, asks that authors and affiliations be credited, and distinguishes separately copyrighted contributions. The article's author and affiliation are credited here and in the relevant card notes.

The other twenty-three nature cards cite twenty-two National Ocean Service fact pages and NOAA Ocean Exploration's seamount explanation:

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
- [How long do Greenland sharks live?](https://oceanservice.noaa.gov/facts/greenland-shark.html)
- [What are plankton?](https://oceanservice.noaa.gov/facts/plankton.html)
- [How much oxygen comes from the ocean?](https://oceanservice.noaa.gov/facts/ocean-oxygen.html)
- [What is a barrier island?](https://oceanservice.noaa.gov/facts/barrier-islands.html)
- [What are coquina and tabby?](https://oceanservice.noaa.gov/facts/coquina-tabby.html)
- [What is bioluminescence?](https://oceanservice.noaa.gov/facts/biolum.html)
- [What is a seamount?](https://oceanexplorer.noaa.gov/ocean-fact/seamounts/)
- [What is a mangrove forest?](https://oceanservice.noaa.gov/facts/mangroves.html)
- [What is marine snow?](https://oceanservice.noaa.gov/facts/marinesnow.html)

The [National Ocean Service reuse statement](https://oceanservice.noaa.gov/disclaimer.html) permits copying or distribution of its public information unless otherwise noted. Poppycock nevertheless supplies its own succinct wording. Third-party photographs, attributed literary quotations, and any other separately protected material on these pages are not reproduced. No current animal-population totals, harvesting regulations, or assurances that blood collection is harmless are carried into the deck.

### NASA and JPL: 28 cards

Twenty-seven cards belong to Space oddities; one added Working lives card uses NASA's own history of Langley's human computers. Of the space cards, six concern human spaceflight or mission engineering:

| Card                         | Source                                                                                                                                                                                 |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `space-gemini-sandwich`      | Jennifer Ross-Nazzal, [Fallout from the Unauthorized Gemini III Space Sandwich](https://www.nasa.gov/history/fallout-from-the-unauthorized-gemini-iii-space-sandwich/)                 |
| `space-apollo-golf-tool`     | John Uri, [50 Years Ago: Apollo 14 Lands at Fra Mauro](https://www.nasa.gov/history/50-years-ago-apollo-14-lands-at-fra-mauro/)                                                        |
| `space-apollo-feather`       | [The Apollo 15 Hammer-Feather Drop](https://science.nasa.gov/resource/the-apollo-15-hammer-feather-drop/), including its citation to the Apollo 15 Preliminary Science Report, p. 2-11 |
| `space-gemini-music`         | [55 Years Ago: The Spirit of 76 — The First Rendezvous in Space](https://www.nasa.gov/history/55-years-ago-the-spirit-of-76-the-first-rendezvous-in-space/)                            |
| `space-curiosity-wheel-code` | JPL, [Rover Leaves Tracks in Morse Code](https://www.jpl.nasa.gov/news/rover-leaves-tracks-in-morse-code/)                                                                             |
| `space-moon-trees`           | [Moon Trees](https://www.nasa.gov/history/moon-trees/), Apollo 14 section                                                                                                              |

The remaining twenty-one space cards use these directly retrieved NASA Science pages:

| Source                                                             | Cards and supporting sections                                                                          |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| [Mercury Facts](https://science.nasa.gov/mercury/facts/)           | 2: reversing sunrise (Orbit and Rotation); crater names (Surface)                                      |
| [Venus Facts](https://science.nasa.gov/venus/venus-facts/)         | 2: Zoozve naming history; full rotation versus orbital period                                          |
| [Uranus Facts](https://science.nasa.gov/uranus/facts/)             | 3: proposed royal name (Namesake); literary moon names (Moons); long polar winter (Orbit and Rotation) |
| [Triton](https://science.nasa.gov/neptune/moons/triton/)           | 1: retrograde orbit (Overview)                                                                         |
| [Titan Facts](https://science.nasa.gov/saturn/moons/titan/facts/)  | 2: hydrocarbon lakes; organic dune grains (Introduction, Surface, Atmosphere)                          |
| [Enceladus](https://science.nasa.gov/saturn/moons/enceladus/)      | 1: jets supplying Saturn's E ring (Overview)                                                           |
| [Io](https://science.nasa.gov/jupiter/jupiter-moons/io/)           | 1: volcanism erasing impact craters (opening explanation)                                              |
| [Mars Facts](https://science.nasa.gov/mars/facts/)                 | 4: rust colour; Olympus Mons; Valles Marineris; possible fate of Phobos                                |
| [Jupiter Facts](https://science.nasa.gov/jupiter/jupiter-facts/)   | 2: Great Red Spot; rapid rotation                                                                      |
| [Europa](https://science.nasa.gov/jupiter/jupiter-moons/europa/)   | 1: evidence for a subsurface ocean                                                                     |
| [Pluto Facts](https://science.nasa.gov/dwarf-planets/pluto/facts/) | 2: Venetia Burney's name suggestion; dwarf-planet classification                                       |

These are original factual summaries, not copied article passages. NASA's [content-use guidance](https://www.nasa.gov/nasa-brand-center/images-and-media/) describes the general U.S. reuse status of NASA content while preserving restrictions on third-party material, branding, endorsement, and identifiable people in promotional material. Source links are factual disclosure only; no NASA review or endorsement is implied. NASA is not responsible for the accuracy of these AI-assisted game formulations.

JPL is managed by the California Institute of Technology; **do not assume that every JPL article or asset is public domain merely because its URL ends in nasa.gov**. The Curiosity card uses the mission operator's primary engineering account as evidence for an independently worded fact. No license to republish its prose, photographs, or graphics is asserted or needed for this collection. The distinction between an underlying principle/discovery and its protected written or illustrated expression is explained in the U.S. Copyright Office's [Circular 33](https://www.copyright.gov/circs/circ33.pdf).

The separately copyrighted Apollo Lunar Surface Journal was encountered during research, but its transcript/commentary is neither reproduced nor relied on as the final hammer-feather card's cited source. The final card cites NASA's own summary and science-report reference.

### Expansion sources: 108 added cards

The expansion appends 108 new stable keys without changing or deleting any of the prior 108 cards. Every added question and answer is newly drafted factual game wording, with an exact source URL/title and a scoped paraphrase note retained in the server-side array. All added answers are at most 100 characters, comfortably below the 180-character submission limit. Sources and cards appear below in category order; these are a card-level index, not additional totals to add to the institutional counts above.

Publicly readable does not mean public domain. Museum, university, botanical institution, UNESCO, inventor-profile and publisher prose may be copyrighted; this deck uses independently worded facts, not copied passages or an asserted blanket reuse licence. Proper names, titles and short factual labels may necessarily coincide. In particular, the UNESCO film catalogue is evidence, not permission to reuse an audiovisual work; the John Cage Trust page is evidence about a technique, not permission to reuse a composition or sound recording. Institutional images, captions as prose, audio, video, diagrams, scores and logos are not distributed. The underlying fact/protected expression distinction is the same one discussed in Copyright Office Circular 33 above. No source institution has reviewed or endorsed these AI-assisted cards.

#### Kitchen secrets — 18 cards

Eighteen cards: six from Kew, one from Oxford's herbarium, one from the Royal Horticultural Society, and ten from the Exploratorium. They cover ingredient anatomy, fermentation, texture, smell and cooking mechanisms rather than national-dish guessing. Statements about salep and hand-pollination are qualified; recipe instructions, medical claims, the searing-seals-in-juices myth, and tongue-map claims are not reused.

| Card                       | Consulted source                                                                                                                   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `food-salep-orchids`       | [Kew — From pods to puddings: Vanilla and other sweet-tasting orchids](https://www.kew.org/read-and-watch/vanilla-digitisation)    |
| `food-vanilla-hand-work`   | [Kew — From pods to puddings: Vanilla and other sweet-tasting orchids](https://www.kew.org/read-and-watch/vanilla-digitisation)    |
| `food-cinnamon-curls`      | [Kew — Mulled wine: Tastes of Christmas growing at Kew](https://www.kew.org/read-and-watch/mulled-wine-kew-taste-of-christmas)     |
| `food-mace-nutmeg`         | [Oxford University Plants 400 — Myristica fragrans (Nutmeg)](https://herbaria.plants.ox.ac.uk/bol/plants400/Profiles/MN/Myristica) |
| `food-caper-buds`          | [Royal Horticultural Society — Capparis spinosa: common caper](https://www.rhs.org.uk/plants/92942/capparis-spinosa/details)       |
| `food-cacao-banana-leaves` | [Kew — From bean to bar: How to make chocolate](https://www.kew.org/read-and-watch/kew-gardens-cacao-how-to-make-chocolate)        |
| `food-chocolate-tempering` | [Kew — From bean to bar: How to make chocolate](https://www.kew.org/read-and-watch/kew-gardens-cacao-how-to-make-chocolate)        |
| `food-cacao-baba`          | [Kew — From bean to bar: How to make chocolate](https://www.kew.org/read-and-watch/kew-gardens-cacao-how-to-make-chocolate)        |
| `food-popcorn-pressure`    | [Exploratorium — Popping Popcorn](https://www.exploratorium.edu/food/popping-popcorn)                                              |
| `food-pressure-boiling`    | [Exploratorium — Pressure Cooking](https://www.exploratorium.edu/food/pressure-cooking)                                            |
| `food-steak-sizzle`        | [Exploratorium — Searing Steak](https://www.exploratorium.edu/food/searing-steak)                                                  |
| `food-kneading-network`    | [Exploratorium — Bread Science 101](https://www.exploratorium.edu/explore/cooking/bread-science)                                   |
| `food-pasta-presoak`       | [Exploratorium — Soaking Pasta](https://www.exploratorium.edu/food/soaking-pasta)                                                  |
| `food-meringue-web`        | [Exploratorium — Science of Eggs](https://www.exploratorium.edu/explore/cooking/egg-science)                                       |
| `food-mayo-yolk`           | [Exploratorium — Science of Eggs](https://www.exploratorium.edu/explore/cooking/egg-science)                                       |
| `food-yogurt-tang`         | [Exploratorium — Bacteria Culture Club](https://www.exploratorium.edu/snacks/bacteria-culture-club)                                |
| `food-egg-green-ring`      | [Exploratorium — Gassy Eggs](https://www.exploratorium.edu/snacks/gassy-eggs)                                                      |
| `food-flavor-back-door`    | [Exploratorium — Your Sense of Taste](https://www.exploratorium.edu/snacks/your-sense-of-taste)                                    |

#### Bright ideas — 18 cards

Eighteen individually consulted National Inventors Hall of Fame biographies. Questions concern a problem, material or mechanism rather than a name-and-date quiz. The wording credits improvements where appropriate: Beard improved coupling, Cochran did not invent the first attempted dishwasher, and Donovan's early invention was a cover for cloth diapers. The disputed 'real McCoy' etymology and an unsupported melted-candy microwave anecdote were excluded.

| Card                         | Consulted source                                                                                                      |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `idea-wiper-lever`           | [National Inventors Hall of Fame — Mary Anderson](https://www.invent.org/inductees/mary-anderson)                     |
| `idea-super-soaker-origin`   | [National Inventors Hall of Fame — Lonnie Johnson](https://www.invent.org/inductees/lonnie-johnson)                   |
| `idea-remote-rods`           | [National Inventors Hall of Fame — Robert Adler](https://www.invent.org/inductees/robert-adler)                       |
| `idea-dishwasher-pressure`   | [National Inventors Hall of Fame — Josephine Garis Cochran](https://www.invent.org/inductees/josephine-garis-cochran) |
| `idea-paper-bag-bottom`      | [National Inventors Hall of Fame — Margaret E. Knight](https://www.invent.org/inductees/margaret-e-knight)            |
| `idea-fastener-burrs`        | [National Inventors Hall of Fame — George de Mestral](https://www.invent.org/inductees/george-de-mestral)             |
| `idea-traffic-all-stop`      | [National Inventors Hall of Fame — Garrett Morgan](https://www.invent.org/inductees/garrett-morgan)                   |
| `idea-detachable-iron`       | [National Inventors Hall of Fame — Mary Florence Potts](https://www.invent.org/inductees/mary-florence-potts)         |
| `idea-diaper-shower-curtain` | [National Inventors Hall of Fame — Marion Donovan](https://www.invent.org/inductees/marion-donovan)                   |
| `idea-crown-cork-liner`      | [National Inventors Hall of Fame — William Painter](https://www.invent.org/inductees/william-painter)                 |
| `idea-coupler-safety`        | [National Inventors Hall of Fame — Andrew J. Beard](https://www.invent.org/inductees/andrew-j-beard)                  |
| `idea-flexible-flyer`        | [National Inventors Hall of Fame — Samuel Leeds Allen](https://www.invent.org/inductees/samuel-leeds-allen)           |
| `idea-engine-oiling`         | [National Inventors Hall of Fame — Elijah McCoy](https://www.invent.org/inductees/elijah-mccoy)                       |
| `idea-bambi-bucket`          | [National Inventors Hall of Fame — Don Arney](https://www.invent.org/inductees/don-arney)                             |
| `idea-sticky-note-bookmark`  | [National Inventors Hall of Fame — Arthur L. Fry](https://www.invent.org/inductees/arthur-l-fry)                      |
| `idea-ballpoint-ink`         | [National Inventors Hall of Fame — Laszlo Josef Biro](https://www.invent.org/inductees/laszlo-josef-biro)             |
| `idea-radarange-roots`       | [National Inventors Hall of Fame — Percy L. Spencer](https://www.invent.org/inductees/percy-l-spencer)                |
| `idea-zamboni-ice-business`  | [National Inventors Hall of Fame — Frank J. Zamboni](https://www.invent.org/inductees/frank-j-zamboni)                |

#### Living traditions — 18 cards

Eighteen UNESCO Multimedia Archives catalogue descriptions across twelve countries. These are living practices with specific communities and purposes, not a collection of supposedly strange or primitive customs. The evidence is the written catalogue description, including original English paraphrases of French text for Sanké; no film, narration, music, images or ceremonial knowledge outside the public description is reused. Some ich.unesco.org pages served a human-verification challenge, so accessible UNESCO archive records were consulted instead. The camel ritual's purpose is not presented as a guarantee of animal behaviour; Nijemo Kolo is unaccompanied during the dance, though music may precede or follow it.

| Card                       | Consulted source                                                                                                                                                                        |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `custom-silbo-speech`      | [UNESCO Multimedia Archives — Whistled Language of the Island of La Gomera (Canary Islands), the Silbo Gomero](https://www.unesco.org/archives/multimedia/document-370)                 |
| `custom-camel-coaxing`     | [UNESCO Multimedia Archives — The Mongolian Traditional Coaxins Rituals for Baby Animals: The Special Case of the Baby Camel](https://www.unesco.org/archives/multimedia/document-4021) |
| `custom-sand-continuous`   | [UNESCO Multimedia Archives — Vanuatu Sand-drawings](https://www.unesco.org/archives/multimedia/document-3757)                                                                          |
| `custom-bridge-straw`      | [UNESCO Multimedia Archives — Knowledge, Skills and Rituals Related to the Annual Renewal of the Q’eswachaka Bridge](https://www.unesco.org/archives/multimedia/document-3540)          |
| `custom-shrimp-horses`     | [UNESCO Multimedia Archives — Shrimp Fishing on Horseback in Oostduinkerke](https://www.unesco.org/archives/multimedia/document-3534)                                                   |
| `custom-knuckle-targets`   | [UNESCO Multimedia Archives — Mongolian Knuckle-bone Shooting](https://www.unesco.org/archives/multimedia/document-3688)                                                                |
| `custom-sauna-meat`        | [UNESCO Multimedia Archives — Smoke Sauna in Voromaa](https://www.unesco.org/archives/multimedia/document-3693)                                                                         |
| `custom-cordoba-patios`    | [UNESCO Multimedia Archives — Fiesta of the Patios in Cordoba](https://www.unesco.org/archives/multimedia/document-2246)                                                                |
| `custom-namur-jousting`    | [UNESCO Multimedia Archives — Namur Stilt Jousting](https://www.unesco.org/archives/multimedia/document-5780)                                                                           |
| `custom-empaako-names`     | [UNESCO Multimedia Archives — Empaako Tradition of the Batooro, Banyoro, Batuku, Batagwenda and Banyabindi of western Uganda](https://www.unesco.org/archives/multimedia/document-3501) |
| `custom-kimjang-sharing`   | [UNESCO Multimedia Archives — Kimjang, Making and Sharing Kimchi](https://www.unesco.org/archives/multimedia/document-3508)                                                             |
| `custom-wrestling-kispet`  | [UNESCO Multimedia Archives — Kirkpinar oil Wrestling Festival](https://www.unesco.org/archives/multimedia/document-1686)                                                               |
| `custom-nijemo-no-music`   | [UNESCO Multimedia Archives — Nijemo Kolo, Silent Circle Dance of the Dalmatian Hinterland](https://www.unesco.org/archives/multimedia/document-2247)                                   |
| `custom-sanke-fishing`     | [UNESCO Multimedia Archives — Le Sanké mon : rite de pêche collective dans le Sanké (Sanke mo a 608 ans)](https://www.unesco.org/archives/multimedia/document-299)                      |
| `custom-wine-horse-cloaks` | [UNESCO Multimedia Archives — Wine Horses](https://www.unesco.org/archives/multimedia/document-5351-eng-2)                                                                              |
| `custom-keskek-cauldrons`  | [UNESCO Multimedia Archives — Ceremonial Keskek Tradition](https://www.unesco.org/archives/multimedia/document-2242)                                                                    |
| `custom-saman-posture`     | [UNESCO Multimedia Archives — Saman Dance](https://www.unesco.org/archives/multimedia/document-2219)                                                                                    |
| `custom-noken-offering`    | [UNESCO Multimedia Archives — Noken Handcraft of the People of Papua](https://www.unesco.org/archives/multimedia/document-3763)                                                         |

#### Remarkable places — 18 cards

Eighteen UNESCO World Heritage Centre records spanning architecture, water engineering, archaeology and landscapes. The relevant Description, Brief synthesis or criterion is named in each card. No lost-civilization mythology, unsupported trulli tax story, current visitor advice, restricted Pueblo ceremony details or tourist superlative is added. The Tsingy source now uses the expanded property title Andrefana Dry Forests; that current title is retained rather than pretending the record has its old title.

| Card                          | Consulted source                                                                                                           |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `place-qanat-shafts`          | [UNESCO World Heritage Centre — The Persian Qanat](https://whc.unesco.org/en/list/1506/)                                   |
| `place-trulli-no-mortar`      | [UNESCO World Heritage Centre — The Trulli of Alberobello](https://whc.unesco.org/en/list/787/)                            |
| `place-shibam-towers`         | [UNESCO World Heritage Centre — Old Walled City of Shibam](https://whc.unesco.org/en/list/192/)                            |
| `place-vega-duck-shelters`    | [UNESCO World Heritage Centre — Vegaøyan — The Vega Archipelago](https://whc.unesco.org/en/list/1143/)                     |
| `place-rani-water-temple`     | [UNESCO World Heritage Centre — Rani-ki-Vav (the Queen’s Stepwell) at Patan, Gujarat](https://whc.unesco.org/en/list/922/) |
| `place-tulou-households`      | [UNESCO World Heritage Centre — Fujian Tulou](https://whc.unesco.org/en/list/1113/)                                        |
| `place-wieliczka-sculptures`  | [UNESCO World Heritage Centre — Wieliczka and Bochnia Royal Salt Mines](https://whc.unesco.org/en/list/32/)                |
| `place-taos-kivas`            | [UNESCO World Heritage Centre — Taos Pueblo](https://whc.unesco.org/en/list/492/)                                          |
| `place-nan-madol-islets`      | [UNESCO World Heritage Centre — Nan Madol: Ceremonial Centre of Eastern Micronesia](https://whc.unesco.org/en/list/1503/)  |
| `place-valparaiso-elevators`  | [UNESCO World Heritage Centre — Historic Quarter of the Seaport City of Valparaíso](https://whc.unesco.org/en/list/959/)   |
| `place-whale-hind-limbs`      | [UNESCO World Heritage Centre — Wadi Al-Hitan (Whale Valley)](https://whc.unesco.org/en/list/1186/)                        |
| `place-joggins-upright-trees` | [UNESCO World Heritage Centre — Joggins Fossil Cliffs](https://whc.unesco.org/en/list/1285/)                               |
| `place-pamukkale-terraces`    | [UNESCO World Heritage Centre — Hierapolis-Pamukkale](https://whc.unesco.org/en/list/485/)                                 |
| `place-tsingy-stone-forest`   | [UNESCO World Heritage Centre — Andrefana Dry Forests](https://whc.unesco.org/en/list/494/)                                |
| `place-namib-fog-water`       | [UNESCO World Heritage Centre — Namib Sand Sea](https://whc.unesco.org/en/list/1430/)                                      |
| `place-medulas-water-mining`  | [UNESCO World Heritage Centre — Las Médulas](https://whc.unesco.org/en/list/803/)                                          |
| `place-chankillo-towers`      | [UNESCO World Heritage Centre — Chankillo Archaeoastronomical Complex](https://whc.unesco.org/en/list/1624/)               |
| `place-shushtar-tunnels`      | [UNESCO World Heritage Centre — Shushtar Historical Hydraulic System](https://whc.unesco.org/en/list/1315/)                |

#### Working lives — 18 cards

Eighteen cards grounded in museum collections, preserved historical accounts and skilled practitioners: London Museum (7), Colonial Williamsburg (2), Historic Royal Palaces (2), and one each from UNESCO, the National Park Service, the National Coal Mining Museum, NASA, Royal Museums Greenwich, Sunny Bank Mills, and Imperial War Museums. The category includes living traditional work as well as vanished roles. Child labour and poverty are documented without romanticizing them. Williamsburg's wigmaking myth correction is preserved: prepared hair packets could be baked for a frizzy style; whole finished wigs were not simply baked inside loaves. The insurance-brigade card does not repeat the myth that crews always let another insurer's properties burn.

| Card                        | Consulted source                                                                                                                                                                                                              |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `work-mush-faker`           | [London Museum — Street life & work in 1877](https://www.londonmuseum.org.uk/collections/london-stories/street-life-work-1877-john-thomson/)                                                                                  |
| `work-flying-dustmen`       | [London Museum — Street life & work in 1877](https://www.londonmuseum.org.uk/collections/london-stories/street-life-work-1877-john-thomson/)                                                                                  |
| `work-swag-selling`         | [London Museum — Street life & work in 1877](https://www.londonmuseum.org.uk/collections/london-stories/street-life-work-1877-john-thomson/)                                                                                  |
| `work-mobile-darkroom`      | [London Museum — Street life & work in 1877](https://www.londonmuseum.org.uk/collections/london-stories/street-life-work-1877-john-thomson/)                                                                                  |
| `work-crossing-sweeper`     | [London Museum — Henry Mayhew brings Victorian London to life](https://www.londonmuseum.org.uk/collections/london-stories/henry-mayhew-brings-victorian-london-life/)                                                         |
| `work-mudlarks`             | [London Museum — Henry Mayhew brings Victorian London to life](https://www.londonmuseum.org.uk/collections/london-stories/henry-mayhew-brings-victorian-london-life/)                                                         |
| `work-cooper-sound`         | [Colonial Williamsburg — Making Circles](https://research.colonialwilliamsburg.org/Foundation/journal/Autumn03/cooper.cfm)                                                                                                    |
| `work-wigmaker-baking`      | [Colonial Williamsburg — Lies My Docent Told Me](https://research.colonialwilliamsburg.org/Foundation/journal/Autumn10/myths.cfm)                                                                                             |
| `work-foggara-water-shares` | [UNESCO Multimedia Archives — Les savoirs et savoir-faire des mesureurs d'eau des foggaras ou aiguadiers du Touat-Tidikelt](https://www.unesco.org/archives/multimedia/document-4787)                                         |
| `work-cigar-lector`         | [National Park Service — American Latino Theme Study: Media](https://www.nps.gov/articles/latinothemestudymedia.htm)                                                                                                          |
| `work-mine-trapper`         | [National Coal Mining Museum — Voices in the Coalshed: Career Options](https://www.ncm.org.uk/news/voices-in-the-coalshed-career-options/)                                                                                    |
| `work-gong-farmer`          | [Historic Royal Palaces — Tudor world brought to life in new display at Hampton Court Palace](https://www.hrp.org.uk/media-and-press/press-releases-2024/tudor-world-brought-to-life-in-new-display-at-hampton-court-palace/) |
| `work-mary-rose-diver`      | [Historic Royal Palaces — Tudor world brought to life in new display at Hampton Court Palace](https://www.hrp.org.uk/media-and-press/press-releases-2024/tudor-world-brought-to-life-in-new-display-at-hampton-court-palace/) |
| `work-human-computers`      | [NASA History — When the Computer Wore a Skirt: Langley's Computers, 1935–1970](https://www.nasa.gov/history/langleys-computers-1935-1970/)                                                                                   |
| `work-powder-monkeys`       | [Royal Museums Greenwich — Pirate Objects: Gunpowder Tin](https://www.rmg.co.uk/sites/default/files/import/media/pdf/SFTS_Objects24_GunpowderTin.pdf)                                                                         |
| `work-tazzle-men`           | [Sunny Bank Mills — Teazles](https://www.sunnybankmills.co.uk/our-story/blog/teazles-dan-sykes-museum-archive-assistant/)                                                                                                     |
| `work-aircraft-listeners`   | [Imperial War Museums — Locator, Sound No1 Mark 1](https://www.iwm.org.uk/collections/item/object/30028540)                                                                                                                   |
| `work-insurance-brigades`   | [London Museum — How the Great Fire of London created insurance](https://www.londonmuseum.org.uk/blog/how-the-great-fire-of-london-created-insurance/)                                                                        |

#### Art & music — 18 cards

Eighteen cards covering seven musical mechanisms or instruments and eleven visual-art materials or processes. Sources are the institutions describing their own collections, the John Cage Trust, and the American Institute of Physics' Physics Today. The one commercial publisher source is explicitly primary: Ubisoft Montréal's own recording-project account with Montreal Symphony player Eric Chappell, used only for the replica original-model octobass mechanism. It is not a trivia-card source, and no game, music or promotional asset is reused. Later keyboard-controlled octobasses are not conflated with the lever-and-pedal replica. Duke's serpent card uses its documented object's wood body, not uncertain general invention history.

| Card                      | Consulted source                                                                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `art-theremin-hands`      | [Physics Today — Playing with electromagnetic waves: The science of the theremin](https://physicstoday.aip.org/news/playing-with-electromagnetic-waves-the-science-of-the-theremin) |
| `art-glass-harmonica`     | [Science Museum Group — Glass Harmonica](https://collection.sciencemuseumgroup.org.uk/objects/co5862/glass-harmonica)                                                               |
| `art-hurdy-gurdy-wheel`   | [Smithsonian Music — Hurdy-gurdy](https://music.si.edu/object-day/hurdy-gurdy)                                                                                                      |
| `art-octobass-controls`   | [Ubisoft Montréal — The OSM triumphs on the Rainbow Six Extraction soundtrack](https://montreal.ubisoft.com/en/the-osm-triumphs-on-the-rainbow-six-extraction-soundtrack/)          |
| `art-prepared-piano`      | [John Cage Trust — John Cage Prepared Piano](https://data-johncage.org/cagePiano.html)                                                                                              |
| `art-aeolian-wind`        | [Exploratorium — Aeolian Harp](https://www.exploratorium.edu/exhibits/aeolian-harp)                                                                                                 |
| `art-serpent-material`    | [Duke University Musical Instrument Collections — Serpent](https://sites.duke.edu/dumic/instruments/brass/west-europe/serpent/)                                                     |
| `art-smalt-glass`         | [National Gallery — Smalt](https://www.nationalgallery.org.uk/paintings/glossary/smalt)                                                                                             |
| `art-tempera-binder`      | [National Gallery — Tempera](https://www.nationalgallery.org.uk/paintings/glossary/tempera)                                                                                         |
| `art-metalpoint-lines`    | [National Gallery of Art — Drawing in Silver and Gold: From Leonardo to Jasper Johns](https://www.nga.gov/exhibitions/drawing-silver-and-gold-leonardo-jasper-johns)                |
| `art-ambassadors-skull`   | [National Gallery — Hans Holbein the Younger, The Ambassadors](https://www.nationalgallery.org.uk/paintings/hans-holbein-the-younger-the-ambassadors)                               |
| `art-frottage-floor`      | [Tate — Frottage](https://www.tate.org.uk/art/art-terms/f/frottage)                                                                                                                 |
| `art-cyanotype-metals`    | [V&A — Photographic processes](https://www.vam.ac.uk/articles/photographic-processes)                                                                                               |
| `art-repousse-reverse`    | [V&A — A guide to metalworking techniques](https://www.vam.ac.uk/articles/metalworking-techniques)                                                                                  |
| `art-pouncing-powder`     | [National Gallery — Pouncing](https://www.nationalgallery.org.uk/paintings/glossary/pouncing)                                                                                       |
| `art-mezzotint-polishing` | [V&A — What is print?](https://www.vam.ac.uk/articles/what-is-print)                                                                                                                |
| `art-lithography-water`   | [V&A — What is print?](https://www.vam.ac.uk/articles/what-is-print)                                                                                                                |
| `art-print-plate-mark`    | [V&A — What is print?](https://www.vam.ac.uk/articles/what-is-print)                                                                                                                |

## Precision choices worth preserving

- A Venus **full rotation** lasts longer than its year. This is not a claim about the interval between sunrises.
- Zoozve is a companion asteroid/quasi-satellite, not an ordinary moon of Venus.
- Original Apollo Moon Trees grew on Earth from seeds that **orbited** the Moon; the seeds did not germinate on its surface.
- Curiosity uses track marks as visual reference features. The card does not say the rover decodes Morse code.
- A green turtle's name refers to its fat. The proposed link between diet and fat color is not presented as settled by this card.
- The adult platypus feeding card specifies **adult** because a blanket assertion about teeth at every life stage would be misleading.
- The sea-cucumber prompt describes one genuine defense, not an exclusive list of all possible defenses. Player answers may independently describe other real facts; a bluff game does not perform semantic truth adjudication.
- All previous stable keys, wording and source corrections remain intact, including Mercury's location-dependent sunrise, Zoozve, the Moon Tree orbital distinction and the Apollo hammer-feather summary source.
- Vanilla pollination, salep, caper buds versus caperberries, wheat gluten and traditional mayonnaise are contextualized rather than treated as universal food rules. The chocolate card avoids repeating a questionable source count of cocoa-butter crystal forms.
- Knuckle-bone shooting distinguishes the flicked tablets from the target bones. Q'eswachaka materials are identified as the straw woven into ropes; communal bridge rebuilding is not generalized to all Quechua practices.
- Taos kivas are identified only by their public architectural function; no restricted practices are described. Vega down collection is from nests after birds leave, not plucking living birds. Constructed Nan Madol islets are explained without an invented transport theory.
- The paired light-and-ink mechanisms in mezzotint and lithography are distinct; the metalpoint card concerns metal particles on prepared paper. Museum artwork, musical scores and copyrighted example images remain excluded.

This document and the per-card notes record source consultation and editorial provenance. They are not a claim that builds, type checks, seed execution, gameplay, automated card validation, or playtesting were run during content curation; those were deliberately left to integration.
