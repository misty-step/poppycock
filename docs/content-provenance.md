# Poppycock content provenance

The catalog is a **fixed, sourced, AI-assisted editorial deck**. There is no runtime generation. `convex/deck/` holds one module per pack; `convex/content.ts` re-exports `seedPacks` and `seedCards`. Each card has a stable key, pack, category, original question, concise answer, and retained source title, URL, and editorial note.

| Pack / category     |   Cards | Scope                                                                            |
| ------------------- | ------: | -------------------------------------------------------------------------------- |
| Odd words           |      27 | Uncommon vocabulary and explicitly historical senses                             |
| Curious objects     |      27 | Tools, household vessels, printing equipment, and bathing or ceremonial objects  |
| Wild nature         |      27 | Marine adaptations, animal behavior, biological materials, and ecosystems        |
| Space oddities      |      27 | Spaceflight incidents, engineering, astronomical naming, and planetary phenomena |
| Kitchen secrets     |      18 | Shocking culinary customs, eccentric historical dishes, and bizarre gastronomy   |
| Bright ideas        |      18 | Eccentric patents, bizarre contraptions, and curious historical inventions       |
| Living traditions   |      18 | Community practices, communication, celebration and shared skills                |
| Remarkable places   |      18 | Bizarre towns, eccentric architecture, and extraordinary geographic anomalies     |
| Working lives       |      18 | Historical trades, specialist labour and living traditional work                 |
| Art & music         |      18 | Musical mechanisms, visual-art processes, pigments and materials                 |
| The sea             |      18 | Winds, waves, hidden cataracts, and the names sailors gave them                  |
| Lost gear           |      18 | Clothes, boats, and tools whose names outlived everyday use                      |
| Rarer words         |      18 | More historical vocabulary whose everyday job has slipped out of sight           |
| **Total**           | **270** | Forty-five six-round games' worth of distinct cards; deal mixes categories       |

Answers are written below the game's 180-character bluff limit. The collection mixes definitions, purposes, mechanisms, and historical explanations rather than requiring exact dates or numerical estimates. Category counts describe this seed collection, not a promise about the game's random draw order. A live match prefers a category not yet used in that game.

The answer-bearing modules belong on the Convex side. Client code must not import this collection. Source titles and URLs can themselves give away an answer, so they belong with the reveal, not the writing or voting prompt.

## Research and editorial method

Sources were retrieved and read on **2026-09-06–07**. Search results were used to locate material; a search summary alone was not accepted as a card's evidence. The collection uses individual historical dictionary entries, NOAA explanations, NASA/JPL mission and science accounts, and the primary/institutional sources listed below for the expansion. Failed or irrelevant candidate links were not used as card sources.

1. Read the actual source passage supporting the answer, including the relevant sense, section, or caption.
2. Draft a new question that permits plausible invented explanations without requiring the source's prose.
3. Condense the answer to its central, supported fact. Names, technical terms, and short public-domain definitions sometimes remain unchanged; the per-card note distinguishes this from paraphrase.
4. Preserve qualifiers that affect truth: **some** sea cucumbers eject organs; **some locations** on Mercury have a reversing sunrise; only **some** Enceladus ejecta enters Saturn's ring.
5. Supply context for polysemous words: the printing sense of _tympan_, the philosophical sense of _quiddity_, and the rope-splicing sense of _fid_, for example.
6. Keep beliefs separate from science. _Tarantism_ records a historical spider-bite explanation; it does not endorse that explanation. Historical medical words and instruments are descriptions, not treatment recommendations.
7. Retain the title, retrievable URL, and an editorial/source-location note on every card. The pack modules in `convex/deck/` are the authoritative card-level provenance index; this document records the collection-level method and reuse basis.

Questions and factual answers were drafted for Poppycock with AI assistance from retrieved source pages. They are Poppycock game text, not statements authored, reviewed, approved, or warranted by the cited institutions or publishers. No commercial Balderdash cards, commercial trivia decks, or collections of player bluffs were used. No illustrations, photographs, recordings, videos, website layouts, or agency logos are included in the card data.

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

Eighteen cards covering shocking culinary traditions, eccentric historical dishes, and bizarre gastronomic phenomena. Each card is verified with primary reference sources including FDA regulations, Kew Gardens, Smithsonian, National Geographic, and authoritative culinary history.

| Key                          | Source                                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `food-salep-orchids`         | [Kew — From pods to puddings: Vanilla and other sweet-tasting orchids](https://www.kew.org/read-and-watch/vanilla-digitisation)                                  |
| `food-toast-sandwich`        | [BBC News — The Toast Sandwich and Other Cheap Meals](https://www.bbc.com/news/magazine-15760897)                                                                  |
| `food-charles-ii-ambergris`  | [Smithsonian Ocean — The Mystery of Ambergris](https://ocean.si.edu/ocean-life/marine-mammals/mystery-ambergris)                                                   |
| `food-ortolan-napkin`        | [Smithsonian Magazine — Ortolans Eaten as French Delicacy](https://www.smithsonianmag.com/smart-news/ortolans-birds-enjoyed-french-delicacy-are-being-eaten-extinction-180972272/) |
| `food-roman-garum`           | [National Geographic — Funky Fish Guts Were Ketchup of Ancient Rome](https://www.nationalgeographic.com/history/history-magazine/article/what-is-garum-rome-fish-sauce) |
| `food-turnspit-dog`          | [NPR — Turnspit Dogs: The Rise And Fall Of The Vernepator Cur](https://www.npr.org/sections/thesalt/2014/05/13/311127237/turnspit-dogs-the-rise-and-fall-of-the-vernepator-cur) |
| `food-mock-turtle-head`      | [Atlas Obscura — The Rise and Fall of Mock Turtle Soup](https://www.atlasobscura.com/articles/mock-turtle-soup-rise-and-fall-calf-head)                          |
| `food-casu-marzu`            | [CNN Travel — Casu marzu: The world's most dangerous cheese](https://www.cnn.com/travel/article/casu-marzu-worlds-most-dangerous-cheese)                         |
| `food-greenland-kiviak`      | [National Geographic — Ancient Arctic Life in Greenland](https://www.nationalgeographic.com/travel/article/greenland-last-place-explore-ancient-arctic-life)    |
| `food-scandinavian-lutefisk` | [TasteAtlas — Lutefisk: Traditional Norwegian Dish](https://www.tasteatlas.com/lutefisk)                                                                          |
| `food-icelandic-hakarl`      | [Atlas Obscura — Hákarl: Iceland's Fermented Shark](https://www.atlasobscura.com/foods/hakarl-shark-iceland)                                                       |
| `food-virgin-boy-eggs`       | [Reuters — Urine-soaked eggs a spring taste treat in China](https://www.reuters.com/article/business/urine-soaked-eggs-a-spring-taste-treat-in-china-city-idUSL3E8ET0FN/) |
| `food-kopi-luwak`            | [National Geographic — The Disturbing Truth About Civet Coffee](https://www.nationalgeographic.com/animals/article/160429-kopi-luwak-captive-civet-coffee-wildlife-trade) |
| `food-carmine-scale-insects` | [FDA 21 CFR § 73.100 — Cochineal extract; carmine](https://www.law.cornell.edu/cfr/text/21/73.100)                                                                |
| `food-jamon-iberico-acorns`  | [TasteAtlas — Jamón Ibérico de Bellota](https://www.tasteatlas.com/jamon-iberico)                                                                                 |
| `food-swiftlet-saliva-nest`  | [Atlas Obscura — Bird's Nest Soup](https://www.atlasobscura.com/foods/birds-nest-soup)                                                                             |
| `food-miracle-fruit-sour`    | [Scientific Reports — Sweet taste receptor activation by miraculin](https://www.nature.com/articles/srep22807)                                                    |
| `food-beaver-castoreum`      | [Smithsonian Magazine — Vanilla Flavoring and Castoreum](https://www.smithsonianmag.com/smart-news/does-vanilla-flavoring-actually-come-from-beaver-butts-180983288/)   |
#### Bright ideas — 18 cards

Eighteen verified historical patents, bizarre contraptions, and curious inventions with high generative ambiguity and surprising, memorable reveals. Each card is grounded in an official patent grant or authoritative historical archive.

| Key                          | Source                                                                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `idea-saluting-device`       | [US Patent 556,248 — Saluting Device](https://patents.google.com/patent/US556248A/en)                                                                                           |
| `idea-chicken-goggles`       | [US Patent 730,918 — Eye-protector for chickens](https://patents.google.com/patent/US730918A/en)                                                                                 |
| `idea-dimple-maker`          | [US Patent 2,091,276 — Dimple making appliance](https://patents.google.com/patent/US2091276A/en)                                                                                |
| `idea-anti-eating-mask`      | [US Patent 4,344,424 — Anti-eating face mask](https://patents.google.com/patent/US4344424A/en)                                                                                   |
| `idea-vester-coffin`         | [US Patent 81,437 — Improved burial-case](https://patents.google.com/patent/US81437A/en)                                                                                         |
| `idea-alarm-bed`             | [The Victorian Web — The Great Exhibition of 1851](https://victorianweb.org/history/1851/wenham.html)                                                                           |
| `idea-cat-meow-machine`      | [BBC Science Focus — The Cat Meow Machine](https://www.sciencefocus.com/science/the-weirdest-inventions-ever-in-pictures-2)                                                     |
| `idea-oppenheimer-fire-escape`| [US Patent 221,855 — Improvement in fire-escapes](https://patents.google.com/patent/US221855A/en)                                                                               |
| `idea-rocking-chair-churn`   | [US Patent 446,495 — Churn](https://patents.google.com/patent/US446495A/en)                                                                                                     |
| `idea-revolver-camera`       | [PetaPixel — Revolver Camera That Shot Bullets and Photos](https://petapixel.com/2011/05/19/revolver-camera-shoots-bullets-and-photos-at-the-same-time/)                        |
| `idea-baby-cage`             | [US Patent 1,448,235 — Portable baby cage](https://patents.google.com/patent/US1448235A/en)                                                                                     |
| `idea-kissing-shield`        | [US Patent 5,727,565 — Kissing shield](https://patents.google.com/patent/US5727565A/en)                                                                                         |
| `idea-swing-patent`          | [US Patent 6,368,227 — Method of swinging on a swing](https://patents.google.com/patent/US6368227B1/en)                                                                         |
| `idea-bird-diaper`           | [US Patent 5,934,226 — Avian diaper](https://patents.google.com/patent/US5934226A/en)                                                                                           |
| `idea-centrifugal-birth`     | [US Patent 3,216,423 — Apparatus for facilitating birth](https://patents.google.com/patent/US3216423A/en)                                                                      |
| `idea-goodyear-glowing-tires` | [Hagerty — Goodyear's Illuminated Tires](https://www.hagerty.com/media/automotive-history/why-goodyears-bright-idea-for-illuminated-tires-didnt-shine-for-long/)               |
| `idea-krummlauf-curved-barrel`| [Popular Mechanics — The Curved Barrel Krummlauf](https://www.popularmechanics.com/military/weapons/a21800/forgotten-weapons-wwii-curve-a-bullet/)                            |
| `idea-high-five-machine`     | [US Patent 5,356,330 — Apparatus for simulating a 'high-five'](https://patents.google.com/patent/US5356330A/en)                                                                 |
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

Eighteen cards covering extraordinary towns, eccentric architectural oddities, and bizarre geographic anomalies. Sourced from authoritative archives and journalism including Smithsonian Magazine, BBC Travel, National Geographic, NPR, and the Crop Trust.

| Key                           | Source                                                                                                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `place-centralia-mine-fire`   | [Smithsonian Magazine — The Fire That Never Dies](https://www.smithsonianmag.com/travel/the-fire-that-never-dies-4963162/)                                                         |
| `place-coober-pedy-underground`| [BBC Travel — Coober Pedy: The town that lives underground](https://www.bbc.com/travel/article/20230807-coober-pedy-the-town-that-lives-underground)                             |
| `place-whittier-single-building`| [NPR — Welcome To Whittier, Alaska: A Town Under One Roof](https://www.npr.org/2015/01/18/378162264/welcome-to-whittier-alaska-a-town-under-one-roof)                            |
| `place-darvaza-door-to-hell`  | [National Geographic — Door to Hell: Turkmenistan's Gas Crater](https://www.nationalgeographic.com/travel/article/darvaza-gas-crater-turkmenistan)                                |
| `place-winchester-mystery-house`| [Smithsonian Magazine — The Winchester Mystery House](https://www.smithsonianmag.com/history/the-true-story-of-the-winchester-mystery-house-180968037/)                          |
| `place-colma-cemetery-city`   | [Atlas Obscura — Colma, California: The City of the Dead](https://www.atlasobscura.com/places/colma-the-city-of-the-dead)                                                         |
| `place-derinkuyu-basement`    | [BBC Travel — Turkey's underground city of 20,000 people](https://www.bbc.com/travel/article/20220810-derinkuyu-turkeys-underground-city-of-20000-people)                        |
| `place-longyearbyen-dying-banned`| [BBC Future — The Arctic town where dying is forbidden](https://www.bbc.com/future/article/20160216-the-arctic-town-where-dying-is-forbidden)                                  |
| `place-baarle-border-line`    | [BBC Travel — The curious border town of Baarle](https://www.bbc.com/travel/article/20211117-the-curious-border-town-of-baarle)                                                  |
| `place-snake-island-forbidden`| [Smithsonian Magazine — Snake Island: Brazil's Venomous Isle](https://www.smithsonianmag.com/science-nature/snake-island-brazil-venomous-pit-vipers-180951918/)                 |
| `place-monowi-population-one` | [BBC News — The only person living in an entire US town](https://www.bbc.com/travel/article/20180129-the-only-person-living-in-an-entire-us-town)                                 |
| `place-sealand-sea-fort`      | [BBC News — The strange story of Sealand](https://www.bbc.com/news/uk-england-suffolk-56621376)                                                                                  |
| `place-paris-catacombs-bones` | [Smithsonian Magazine — The Secret History of the Paris Catacombs](https://www.smithsonianmag.com/travel/paris-catacombs-history-180978794/)                                      |
| `place-hashima-battleship-island`| [National Geographic — Inside Japan's Abandoned Battleship Island](https://www.nationalgeographic.com/travel/article/hashima-island-japan-ruins-ghost-town)                    |
| `place-lake-titicaca-uros-reeds`| [National Geographic — The Floating Islands of Lake Titicaca](https://www.nationalgeographic.com/travel/article/uros-floating-islands-peru-bolivia-lake-titicaca)             |
| `place-svalbard-seed-vault`   | [Crop Trust — Svalbard Global Seed Vault](https://www.croptrust.org/our-work/svalbard-global-seed-vault/)                                                                        |
| `place-cretto-di-burri`       | [Tate — Alberto Burri: Grande Cretto di Gibellina](https://www.tate.org/art/artworks/burri-grande-cretto-di-gibellina)                                                            |
| `place-bishop-castle`         | [Atlas Obscura — Bishop Castle](https://www.atlasobscura.com/places/bishop-castle)                                                                                                |
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
