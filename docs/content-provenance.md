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
| Living traditions   |      18 | Bizarre community celebrations, extraordinary festivals, and ancient customs      |
| Remarkable places   |      18 | Bizarre towns, eccentric architecture, and extraordinary geographic anomalies     |
| Working lives       |      18 | Historical trades, specialist labour, and bizarre vanished occupations           |
| Art & music         |      18 | Shocking artworks, bizarre musical instruments, eccentric stunts, and pigments    |
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

### Odd words and Curious objects: 54 cards

Twenty-seven cards in `Odd words` and twenty-one cards in `Curious objects` draw from individual public-domain entries in [Webster's 1913](https://www.websters1913.com/) and [Project Gutenberg catalog ebook 29765](https://www.gutenberg.org/ebooks/29765) ([accessible text](https://www.gutenberg.org/ebooks/29765.txt.utf-8), [license explanation](https://www.gutenberg.org/policy/license.html)).

Six cards in `Curious objects` draw from verified historical artifacts preserved by the Science Museum Group, the Fitzwilliam Museum (University of Cambridge), the Victoria and Albert Museum, National Museums Scotland, and BBC HistoryExtra:

| Card                    | Source                                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object-antimonial-cup` | [Science Museum Group Collection — Antimony cup, Europe, 1501-1700](https://collection.sciencemuseumgroup.org.uk/objects/co142080/antimony-cup-europe-1501-1700)                                |
| `object-mortsafe`       | [National Museums Scotland — An unsolved mystery: The coffins found on Arthur's Seat](https://www.nms.ac.uk/discover-catalogue/the-coffins-found-on-arthurs-seat)                                 |
| `object-lovers-eye`     | [Victoria and Albert Museum — Eye with a blue iris looking right](https://collections.vam.ac.uk/item/O1067699/eye-with-a-blue-iris-eye-miniature-unknown/)                                       |
| `object-fuddling-cup`   | [The Fitzwilliam Museum (University of Cambridge) — Fuddling cups](https://data.fitzmuseum.cam.ac.uk/id/terminology/term-91176)                                                                  |
| `object-bamboo-flea-trap` | [Science Museum Group Collection — Bamboo flea trap, China, 1751-1850](https://collection.sciencemuseumgroup.org.uk/objects/co147562/bamboo-flea-trap-china-1751-1850)                         |
| `object-drunkards-cloak` | [BBC HistoryExtra — Q&A: what was a drunkard's cloak used for?](https://www.historyextra.com/period/stuart/medieval-punishments-what-was-drunkards-cloak/)                                     |
The deck reuses or paraphrases the historical definitions and object records, not the modern hosts' site designs. `word-brontolith` cross-references the public-domain Aërolite definition. Gutenberg links are scholarly acknowledgements only; no ebook, Gutenberg wrapper, or trademark asset is shipped.
### Wild nature: 27 cards

Nineteen cards cite NOAA Ocean Exploration and National Ocean Service resources for marine biology, hydrothermal vents, deep-sea ecology, and geological formations. Eight cards draw verified, extraordinary biological adaptations from peer-reviewed research documented by National Geographic, New Scientist, BBC, and Smithsonian Magazine:

| Card                          | Source                                                                                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nature-horned-lizard-blood`  | [National Geographic — Short-Horned Lizard](https://www.nationalgeographic.com/animals/reptiles/facts/short-horned-lizard)                                                                      |
| `nature-bombardier-beetle`    | [National Geographic — Bombardier beetles, facts and photos](https://www.nationalgeographic.com/animals/invertebrates/facts/bombardier-beetle)                                                    |
| `nature-zombie-ant-fungus`    | [National Geographic — How a cordyceps fungus turns ants into 'zombies'](https://www.nationalgeographic.com/animals/article/cordyceps-zombie-fungus-takes-over-ants)                              |
| `nature-horror-frog-claws`    | [New Scientist — 'Horror frog' breaks own bones to produce claws](https://www.newscientist.com/article/1909580-horror-frog-breaks-own-bones-to-produce-claws/)                                    |
| `nature-pistol-shrimp-bubble` | [BBC Future — Why the US military is listening to shrimp](https://www.bbc.com/future/article/20220616-the-new-sonar-built-from-sealife-noises)                                                  |
| `nature-immortal-jellyfish`   | [National Geographic — 'Immortal' Jellyfish Swarm World's Oceans](https://www.nationalgeographic.com/animals/article/immortal-jellyfish-swarm-oceans-animals)                                    |
| `nature-lyrebird-mimicry`     | [BBC Travel — An Australian bird that mimics the sound of a chainsaw](https://www.bbc.com/travel/article/20140416-an-australian-bird-that-mimics-the-sound-of-a-chainsaw)                       |
| `nature-hagfish-slime`        | [Smithsonian Magazine — If We Can Get Past the Ickiness, Hagfish Slime May Actually Be Useful to Us](https://www.smithsonianmag.com/innovation/if-we-can-get-past-ickiness-hagfish-slime-may-actually-be-useful-to-us-180962300/) |

The remaining nineteen nature cards draw from Emily Crum, NOAA Ocean Exploration, [“Wild and Bizarre Marine Life”](https://oceanexplorer.noaa.gov/explainers/marine-life/) and fifteen National Ocean Service fact pages:

- `nature-rimicaris-food` (bacteria grown on shrimp)
- `nature-armored-searobin` (strolling on pectoral fin rays)
- `nature-dandelion-siphonophore` (tethering to seafloor)
- `nature-red-camouflage` (ambient red light invisibility)
- [Are sea cucumbers vegetables?](https://oceanservice.noaa.gov/facts/seacuke.html) (`nature-sea-cucumber-defense`)
- [What is a glass sponge?](https://oceanservice.noaa.gov/facts/glass-sponge.html) (`nature-venus-flower-basket`)
- [How does sand form?](https://oceanservice.noaa.gov/facts/sand.html) (`nature-parrotfish-sand`)
- [The vampire squid and the vampire fish](https://oceanservice.noaa.gov/facts/vampire-squid-fish.html) (`nature-vampire-squid-defense`)
- [What is a Portuguese Man o' War?](https://oceanservice.noaa.gov/facts/portuguese-man-o-war.html) (`nature-man-o-war-colony`)
- [What is a platypus?](https://oceanservice.noaa.gov/facts/platypus.html) (`nature-platypus-gravel`)
- [What is a whale fall?](https://oceanservice.noaa.gov/facts/whale-fall.html) (`nature-whale-fall`)
- [Are horseshoe crabs really crabs?](https://oceanservice.noaa.gov/facts/horseshoe-crab.html) (`nature-horseshoe-crab-blood`)
- [What makes the green turtle...green?](https://oceanservice.noaa.gov/facts/green-turtle.html) (`nature-green-turtle-name`)
- [What does peanut butter have to do with the ocean?](https://oceanservice.noaa.gov/facts/peanutbutter.html) (`nature-carrageenan`)
- [What are barnacles?](https://oceanservice.noaa.gov/facts/barnacles.html) (`nature-barnacle-cement`)
- [How long do Greenland sharks live?](https://oceanservice.noaa.gov/facts/greenland-shark.html) (`nature-greenland-shark-age`)
- [What are coquina and tabby?](https://oceanservice.noaa.gov/facts/coquina-tabby.html) (`nature-coquina`)
- [What is a mangrove forest?](https://oceanservice.noaa.gov/facts/mangroves.html) (`nature-mangrove`)
- [What is marine snow?](https://oceanservice.noaa.gov/facts/marinesnow.html) (`nature-marine-snow`)

All cards are original factual paraphrases. NOAA's and institutional reuse guidelines were followed, citing original discoveries without copying proprietary imagery or narrative prose.
### NASA and JPL: 28 cards

Twenty-seven cards belong to Space oddities, combining human spaceflight missions, engineering hazards, planetary anomalies, and astronomical naming history:

| Card                          | Source                                                                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `space-gemini-sandwich`       | Jennifer Ross-Nazzal, [Fallout from the Unauthorized Gemini III Space Sandwich](https://www.nasa.gov/history/fallout-from-the-unauthorized-gemini-iii-space-sandwich/)            |
| `space-apollo-golf-tool`      | John Uri, [50 Years Ago: Apollo 14 Lands at Fra Mauro](https://www.nasa.gov/history/50-years-ago-apollo-14-lands-at-fra-mauro/)                                                   |
| `space-salyut-7-frozen`       | [NASA SP-4225 — Mir Hardware Heritage: Salyut 7 Principal Expedition 4](https://www.nasa.gov/wp-content/uploads/static/history/SP-4225/documentation/mhh/mirheritage.pdf)        |
| `space-gemini-music`          | [55 Years Ago: The Spirit of 76 — The First Rendezvous in Space](https://www.nasa.gov/history/55-years-ago-the-spirit-of-76-the-first-rendezvous-in-space/)                       |
| `space-curiosity-wheel-code`  | JPL, [Rover Leaves Tracks in Morse Code](https://www.jpl.nasa.gov/news/rover-leaves-tracks-in-morse-code/)                                                                        |
| `space-moon-trees`            | [Moon Trees](https://www.nasa.gov/history/moon-trees/), Apollo 14 section                                                                                           |
| `space-soviet-shotgun`        | [BBC News — Sent into space: Guns, a lamb chop and sea urchin sperm](https://www.bbc.com/news/uk-england-34964686)                                                                 |
| `space-scent-of-space`        | [BBC Future — From cat urine to gunpowder: Exploring the peculiar smells of outer space](https://www.bbc.com/future/article/20250522-what-does-outer-space-smell-like)           |
| `space-aldrin-communion`      | [BBC News — Sent into space: Guns, a lamb chop and sea urchin sperm](https://www.bbc.com/news/uk-england-34964686)                                                                 |
| `space-south-atlantic-anomaly`| [NASA — Seeing Cosmic Rays in Space](https://www.nasa.gov/wp-content/uploads/2021/11/seeingcosmicraysinspace.pdf)                                                                 |
| `space-pencil-graphite-hazard`| [Scientific American — Fact or Fiction?: NASA Spent Millions to Develop a Pen](https://www.scientificamerican.com/article/fact-or-fiction-nasa-spen/)                             |

The remaining sixteen space cards use these directly retrieved NASA Science pages:

| Source                                                             | Cards and supporting sections                                                                          |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| [Mercury Facts](https://science.nasa.gov/mercury/facts/)           | 2: reversing sunrise (Orbit and Rotation); crater names (Surface)                                      |
| [Venus Facts](https://science.nasa.gov/venus/venus-facts/)         | 2: Zoozve naming history; full rotation versus orbital period                                          |
| [Uranus Facts](https://science.nasa.gov/uranus/facts/)             | 3: proposed royal name (Namesake); literary moon names (Moons); long polar winter (Orbit and Rotation) |
| [Triton](https://science.nasa.gov/neptune/moons/triton/)           | 1: retrograde orbit (Overview)                                                                         |
| [Titan Facts](https://science.nasa.gov/saturn/moons/titan/facts/)  | 2: hydrocarbon lakes; organic dune grains (Introduction, Surface, Atmosphere)                          |
| [Enceladus](https://science.nasa.gov/saturn/moons/enceladus/)      | 1: jets supplying Saturn's E ring (Overview)                                                           |
| [Io](https://science.nasa.gov/jupiter/jupiter-moons/io/)           | 1: volcanism erasing impact craters (opening explanation)                                              |
| [Mars Facts](https://science.nasa.gov/mars/facts/)                 | 1: possible fate of Phobos (Moons and Rings)                                                           |
| [Europa](https://science.nasa.gov/jupiter/jupiter-moons/europa/)   | 1: evidence for a subsurface ocean                                                                     |
| [Pluto Facts](https://science.nasa.gov/dwarf-planets/pluto/facts/) | 2: Venetia Burney's name suggestion; dwarf-planet classification                                       |
These are original factual summaries, not copied article passages. NASA's [content-use guidance](https://www.nasa.gov/nasa-brand-center/images-and-media/) describes the general U.S. reuse status of NASA content while preserving restrictions on third-party material, branding, endorsement, and identifiable people in promotional material. Source links are factual disclosure only; no NASA review or endorsement is implied. NASA is not responsible for the accuracy of these AI-assisted game formulations.

JPL is managed by the California Institute of Technology; **do not assume that every JPL article or asset is public domain merely because its URL ends in nasa.gov**. The Curiosity card uses the mission operator's primary engineering account as evidence for an independently worded fact. No license to republish its prose, photographs, or graphics is asserted or needed for this collection. The distinction between an underlying principle/discovery and its protected written or illustrated expression is explained in the U.S. Copyright Office's [Circular 33](https://www.copyright.gov/circs/circ33.pdf).

The separately copyrighted Apollo Lunar Surface Journal was encountered during research, but its transcript/commentary is neither reproduced nor relied on as the final hammer-feather card's cited source. The final card cites NASA's own summary and science-report reference.

### Expansion sources: 108 added cards

The expansion appends 108 new stable keys without changing or deleting any of the prior 108 cards. Every added question and answer is newly drafted factual game wording, with an exact source URL/title and a scoped paraphrase note retained in the server-side array. All added answers are at most 100 characters, comfortably below the 180-character submission limit. Sources and cards appear below in category order; these are a card-level index, not additional totals to add to the institutional counts above.

Publicly readable does not mean public domain. Museum, university, botanical institution, UNESCO, inventor-profile and publisher prose may be copyrighted; this deck uses independently worded facts, not copied passages or an asserted blanket reuse licence. Proper names, titles and short factual labels may necessarily coincide. In particular, the UNESCO film catalogue is evidence, not permission to reuse an audiovisual work; the John Cage Trust page is evidence about a technique, not permission to reuse a composition or sound recording. Institutional images, captions as prose, audio, video, diagrams, scores and logos are not distributed. The underlying fact/protected expression distinction is the same one discussed in Copyright Office Circular 33 above. No source institution has reviewed or endorsed these AI-assisted cards.

#### Kitchen secrets — 18 cards

Eighteen cards covering shocking culinary traditions, eccentric historical dishes, and bizarre gastronomy. Every single card has been checked against primary or established institutional sources (FDA regulations, Kew Gardens, Smithsonian, National Geographic, BBC News, NBC News, and Nature Scientific Reports).

| Key                          | Source                                                                                                                                                                                                    |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `food-salep-orchids`         | [Kew — From pods to puddings: Vanilla and other sweet-tasting orchids](https://www.kew.org/read-and-watch/vanilla-digitisation)                                                                         |
| `food-toast-sandwich`        | [BBC News — The toast sandwich and other hyper-cheap meals](https://www.bbc.com/news/magazine-15760897)                                                                                                  |
| `food-chicha-saliva-chew`   | [National Geographic — We Are What We Eat: Foraging in the Amazon Rainforest](https://www.nationalgeographic.com/photography/article/we-are-what-we-eat-foraging-in-the-amazon-rainforest)              |
| `food-ortolan-napkin`        | [Smithsonian Magazine — Ortolans, Songbirds Enjoyed as French Delicacy](https://www.smithsonianmag.com/smart-news/ortolans-birds-enjoyed-french-delicacy-are-being-eaten-extinction-180972272/)         |
| `food-roman-garum`           | [National Geographic — Funky Fish Guts Were the Ketchup of Ancient Rome](https://www.nationalgeographic.com/history/history-magazine/article/what-is-garum-rome-fish-sauce)                           |
| `food-turnspit-dog`          | [NPR — Turnspit Dogs: The Rise And Fall Of The Vernepator Cur](https://www.npr.org/sections/thesalt/2014/05/13/311127237/turnspit-dogs-the-rise-and-fall-of-the-vernepator-cur)                        |
| `food-mock-turtle-head`      | [Atlas Obscura — How America Fell Into—and Out of—Love With Mock Turtle Soup](https://www.atlasobscura.com/articles/mock-turtle-soup-rise-and-fall-calf-head)                                           |
| `food-casu-marzu`            | [CNN Travel — Casu marzu: The world’s ‘most dangerous’ cheese](https://www.cnn.com/travel/article/casu-marzu-worlds-most-dangerous-cheese)                                                               |
| `food-greenland-kiviak`      | [National Geographic — Greenland is one of the last places on Earth to explore ancient Arctic life](https://www.nationalgeographic.com/travel/article/greenland-last-place-explore-ancient-arctic-life) |
| `food-scandinavian-lutefisk` | [Smithsonian Magazine — Scandinavians’ Strange Holiday Lutefisk Tradition](https://www.smithsonianmag.com/travel/scandinavians-strange-holiday-lutefisk-tradition-2218218/)                             |
| `food-icelandic-hakarl`      | [Atlas Obscura — Hákarl](https://www.atlasobscura.com/foods/hakarl-shark-iceland)                                                                                                                        |
| `food-virgin-boy-eggs`       | [NBC News — Urine-soaked 'virgin boy eggs' are a springtime taste treat in China](https://www.nbcnews.com/news/world/urine-soaked-virgin-boy-eggs-are-springtime-taste-treat-china-flna593952)          |
| `food-kopi-luwak`            | [National Geographic — The Disturbing Secret Behind the World’s Most Expensive Coffee](https://www.nationalgeographic.com/animals/article/160429-kopi-luwak-captive-civet-coffee-Indonesia)            |
| `food-carmine-scale-insects` | [FDA 21 CFR § 73.100 — Cochineal extract; carmine](https://www.law.cornell.edu/cfr/text/21/73.100)                                                                                                       |
| `food-jamon-iberico-acorns`  | [BBC Travel — The world’s most expensive ham](https://www.bbc.com/travel/article/20181114-the-worlds-most-expensive-ham)                                                                               |
| `food-swiftlet-saliva-nest`  | [Atlas Obscura — Bird's Nest Soup](https://www.atlasobscura.com/foods/birds-nest-soup)                                                                                                                    |
| `food-miracle-fruit-sour`    | [Scientific Reports — Intracellular acidification is required for full activation of sweet receptor by miraculin](https://www.nature.com/articles/srep22807)                                            |
| `food-beaver-castoreum`      | [Smithsonian Magazine — Does Vanilla Flavoring Actually Come From Beaver Butts?](https://www.smithsonianmag.com/smart-news/does-vanilla-flavoring-actually-come-from-beaver-butts-180983288/)            |
#### Bright ideas — 18 cards

Eighteen verified historical patents, bizarre contraptions, and curious inventions with high generative ambiguity and surprising, memorable reveals. Each card is verified against an official patent grant or authoritative historical publication.

| Key                          | Source                                                                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `idea-saluting-device`       | [US Patent 556,248 — Saluting Device](https://patents.google.com/patent/US556248A/en)                                                                                           |
| `idea-chicken-goggles`       | [US Patent 730,918 — Eye-protector for chickens](https://patents.google.com/patent/US730918A/en)                                                                                 |
| `idea-dimple-maker`          | [US Patent 2,091,276 — Dimple making appliance](https://patents.google.com/patent/US2091276A/en)                                                                                |
| `idea-anti-eating-mask`      | [US Patent 4,344,424 — Anti-eating face mask](https://patents.google.com/patent/US4344424A/en)                                                                                   |
| `idea-motorized-ice-cream-cone`| [US Patent 5,971,829 — Motorized ice cream cone](https://patents.google.com/patent/US5971829A/en)                                                                               |
| `idea-alarm-bed`             | [The Victorian Web — The Great Exhibition of 1851](https://victorianweb.org/history/1851/wenham.html)                                                                           |
| `idea-cat-meow-machine`      | [BBC Science Focus — 15 of the world's weirdest-ever inventions](https://www.sciencefocus.com/science/the-weirdest-inventions-ever-in-pictures-2)                                    |
| `idea-oppenheimer-fire-escape`| [US Patent 221,855 — Improvement in fire-escapes](https://patents.google.com/patent/US221855A/en)                                                                               |
| `idea-cat-laser-exercise`    | [US Patent 5,443,036 — Method of exercising a cat](https://patents.google.com/patent/US5443036A/en)                                                                             |
| `idea-revolver-camera`       | [PetaPixel — Revolver Camera That Shot Bullets and Photos at the Same Time](https://petapixel.com/2011/05/19/revolver-camera-shoots-bullets-and-photos-at-the-same-time/)        |
| `idea-baby-cage`             | [US Patent 1,448,235 — Portable baby cage](https://patents.google.com/patent/US1448235A/en)                                                                                     |
| `idea-kissing-shield`        | [US Patent 5,727,565 — Kissing shield](https://patents.google.com/patent/US5727565A/en)                                                                                         |
| `idea-swing-patent`          | [US Patent 6,368,227 — Method of swinging on a swing](https://patents.google.com/patent/US6368227B1/en)                                                                         |
| `idea-bird-diaper`           | [US Patent 5,934,226 — Bird diaper](https://patents.google.com/patent/US5934226A/en)                                                                                           |
| `idea-centrifugal-birth`     | [US Patent 3,216,423 — Apparatus for facilitating the birth of a child by centrifugal force](https://patents.google.com/patent/US3216423A/en)                                   |
| `idea-goodyear-glowing-tires` | [Hagerty Media — Why Goodyear’s bright idea for illuminated tires didn’t shine for long](https://www.hagerty.com/media/automotive-history/why-goodyears-bright-idea-for-illuminated-tires-didnt-shine-for-long/) |
| `idea-krummlauf-curved-barrel`| [Popular Mechanics — Forgotten Weapons: The Nazis' Desperate Attempts to Curve a Bullet](https://www.popularmechanics.com/military/weapons/a21800/forgotten-weapons-wwii-curve-a-bullet/) |
| `idea-high-five-machine`     | [US Patent 5,356,330 — Apparatus for simulating a 'high five'](https://patents.google.com/patent/US5356330A/en)                                                                 |
#### Living traditions — 18 cards

Eighteen cards covering extraordinary community celebrations, bizarre traditional contests, and living cultural practices. Every card is checked against full-text source retrieval from major archives and journalism (BBC News, BBC Travel, National Geographic, The Guardian, and UNESCO Multimedia Archives).

| Card                       | Consulted source                                                                                                                                                                        |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `custom-cheese-rolling`    | [BBC News — Cooper's Hill cheese rolling: origins, myths and history](https://www.bbc.com/news/articles/cz024gnm9z4o)                                                                  |
| `custom-el-colacho-baby-jump` | [National Geographic — Look Inside Spain’s Unusual Baby Jumping Festival](https://www.nationalgeographic.com/culture/article/el-colacho-baby-jumping-festival-murcia-spain)         |
| `custom-wife-carrying-beer`| [BBC Travel — Finland’s swamp soccer and sauna endurance](https://www.bbc.com/travel/article/20110620-finlands-swamp-soccer-and-sauna-endurance)                                       |
| `custom-monkey-buffet`     | [The Guardian — No more monkey business: Thai city’s macaques to be put in enclosures](https://www.theguardian.com/world/2024/apr/05/no-more-monkey-business-thai-lopburi-macaques-to-be-rounded-up-and-put-in-enclosures) |
| `custom-la-tomatina-pole-ham` | [BBC Travel — Spain's La Tomatina festival](https://www.bbc.com/travel/article/20100816-spains-la-tomatina-festival)                                                                |
| `custom-ivrea-orange-battle`| [BBC Travel — The Italian city where life is sweetest in winter](https://www.bbc.com/travel/article/20260130-the-italian-city-where-life-is-sweetest-in-winter)                       |
| `custom-up-helly-aa-galley`| [BBC News — Famous Up Helly Aa festival sets Shetland's skies ablaze](https://www.bbc.com/news/articles/cy8p2rjeyveo)                                                                  |
| `custom-ottery-tar-barrels`| [BBC News — Ottery St Mary Tar Barrels 2025: Everything you need to know](https://www.bbc.com/news/articles/c5y4g23x7pzo)                                                             |
| `custom-nakizumo-crying-baby` | [The Guardian — The Nakizumo crying baby festival in Tokyo – in pictures](https://www.theguardian.com/world/gallery/2013/apr/29/crying-baby-festival-tokyo-pictures)                  |
| `custom-catalan-human-towers` | [BBC Travel — Human pyramids in Catalonia](https://www.bbc.com/travel/article/20120614-human-pyramids-in-catalonia)                                                                   |
| `custom-silbo-speech`      | [UNESCO Multimedia Archives — Whistled Language of the Island of La Gomera (Canary Islands), the Silbo Gomero](https://www.unesco.org/archives/multimedia/document-370)                 |
| `custom-bridge-straw`      | [UNESCO Multimedia Archives — Knowledge, Skills and Rituals Related to the Annual Renewal of the Q’eswachaka Bridge](https://www.unesco.org/archives/multimedia/document-3540)          |
| `custom-shrimp-horses`     | [UNESCO Multimedia Archives — Shrimp Fishing on Horseback in Oostduinkerke](https://www.unesco.org/archives/multimedia/document-3534)                                                   |
| `custom-namur-jousting`    | [UNESCO Multimedia Archives — Namur Stilt Jousting](https://www.unesco.org/archives/multimedia/document-5780)                                                                           |
| `custom-takanakuy-fistfights` | [BBC News — Peru stages Christmas Day fighting festival](https://www.bbc.com/news/av/world-latin-america-12084478)                                                                        |
| `custom-egremont-gurning`    | [BBC News — Tommy Mattinson retains Egremont Crab Fair gurning crown](https://www.bbc.co.uk/news/uk-england-cumbria-29301914)                                                           |
| `custom-wrestling-kispet`  | [UNESCO Multimedia Archives — Kirkpinar oil Wrestling Festival](https://www.unesco.org/archives/multimedia/document-1686)                                                               |
| `custom-camel-coaxing`     | [UNESCO Multimedia Archives — The Mongolian Traditional Coaxins Rituals for Baby Animals: The Special Case of the Baby Camel](https://www.unesco.org/archives/multimedia/document-4021) |
#### Remarkable places — 18 cards

Eighteen cards covering extraordinary towns, eccentric architectural oddities, and bizarre geographic anomalies. Sourced from authoritative archives and journalism including Smithsonian Magazine, BBC Travel, National Geographic, NPR, and the Crop Trust.

| Key                           | Source                                                                                                                                                                                                                 |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `place-centralia-mine-fire`   | [USGS Fact Sheet 2009–3084 — Emissions from Coal Fires](https://pubs.usgs.gov/fs/2009/3084/pdf/fs2009-3084.pdf)                                                                                                      |
| `place-coober-pedy-underground`| [BBC Future — The Australian town where people live underground](https://www.bbc.com/future/article/20230803-the-town-where-people-live-underground)                                                                |
| `place-whittier-single-building`| [NPR — Welcome To Whittier, Alaska, A Community Under One Roof](https://www.npr.org/2015/01/18/378162264/welcome-to-whittier-alaska-a-community-under-one-roof)                                                      |
| `place-lake-maracaibo-lightning`| [NASA — Earth's New Lightning Capital Revealed](https://www.nasa.gov/missions/trmm/earths-new-lightning-capital-revealed/)                                                             |
| `place-winchester-mystery-house`| [Smithsonian Magazine — The Heiress to a Gun Empire Built a Mansion](https://www.smithsonianmag.com/history/heiress-gun-empire-built-mansion-forever-haunted-blood-money-built-it-180959712/)                        |
| `place-colma-cemetery-city`   | [Atlas Obscura — Colma Necropolis in Daly City](https://www.atlasobscura.com/places/colma-necropolis)                                                                                                                 |
| `place-derinkuyu-basement`    | [BBC Travel — Turkey's underground city of 20,000 people](https://www.bbc.com/travel/article/20220810-derinkuyu-turkeys-underground-city-of-20000-people)                                                            |
| `place-longyearbyen-coffin-burials`| [Visit Svalbard — Frequently Asked Questions](https://en.visitsvalbard.com/visitor-information/faq)                                                                                                                |
| `place-baarle-border-line`    | [BBC Travel — Europe's strange border anomaly](https://www.bbc.com/travel/article/20171210-europes-strange-border-anomaly)                                                                                              |
| `place-snake-island-forbidden`| [Smithsonian Magazine — This Terrifying Brazilian Island Has Highest Concentration of Venomous Snakes](https://www.smithsonianmag.com/science-nature/snake-infested-island-deadliest-place-brazil-180951782/)         |
| `place-monowi-population-one` | [BBC Travel — Welcome to Monowi, Nebraska: population 1](https://www.bbc.com/travel/article/20180129-welcome-to-monowi-nebraska-population-1)                                                                         |
| `place-sealand-sea-fort`      | [BBC News — The off-shore fort 'state' of Sealand marks 50 years](https://www.bbc.com/news/uk-england-suffolk-41135081)                                                                                                |
| `place-paris-catacombs-bones` | [Smithsonian Magazine — Beneath Paris' City Streets, There's an Empire of Death](https://www.smithsonianmag.com/travel/paris-catacombs-180950160/)                                                                    |
| `place-hashima-battleship-island`| [UNESCO World Heritage Centre — Sites of Japan’s Meiji Industrial Revolution (Hashima Coal Mine)](https://whc.unesco.org/en/list/1484/)                                                                               |
| `place-lake-titicaca-uros-reeds`| [BBC Travel — The floating homes of Lake Titicaca](https://www.bbc.com/travel/article/20220814-the-floating-homes-of-lake-titicaca)                                                                                   |
| `place-boiling-river-amazon`  | [National Geographic — Episode 13: Solving the mystery of the boiling river](https://www.nationalgeographic.com/podcasts/article/episode-13-solving-the-mystery-of-the-boiling-river)                                |
| `place-cretto-di-burri`       | [Atlas Obscura — Cretto di Burri in Gibellina Vecchia](https://www.atlasobscura.com/places/cretto-di-gibellina)                                                                                                        |
| `place-bishop-castle`         | [Atlas Obscura — Bishop Castle in Rye, Colorado](https://www.atlasobscura.com/places/bishop-castle)                                                                                                                    |

#### Working lives — 18 cards

Eighteen cards covering extraordinary historical trades, specialist artisanal skills, and bizarre vanished occupations. Every card is checked against full-text source retrieval from major institutions (BBC News, Tufts Digital Library / Henry Mayhew, National Churches Trust, Science Museum Group, Smithsonian Magazine, Royal College of Surgeons, Historic Royal Palaces, National Park Service, Imperial War Museums, Sunny Bank Mills, Colonial Williamsburg, and London Museum).

| Card                       | Consulted source                                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `work-knocker-upper`       | [BBC News — Knocker uppers: Waking up the workers in industrial Britain](https://www.bbc.com/news/uk-england-35840393)                                                                     |
| `work-pure-finder`         | [Tufts Digital Library — Mayhew's London Labour and the London Poor: Of the 'Pure'-Finders](https://dl.tufts.edu/teiviewer/parent/rv043431c/chapter/c6s3)                                  |
| `work-sewer-tosher`        | [Tufts Digital Library — Mayhew's London Labour and the London Poor: Of the Sewer-Hunters](https://dl.tufts.edu/teiviewer/parent/rv043431c/chapter/c6s7)                                  |
| `work-church-dog-tongs`    | [National Churches Trust — Cyfylliog St Mary (Dog Tongs)](https://www.nationalchurchestrust.org/church/st-mary-cyfylliog)                                                                   |
| `work-leech-collector`     | [Science Museum — Blood: Leeches and Leech Collectors](https://www.sciencemuseum.org.uk/objects-and-stories/medicine/blood)                                                                |
| `work-ice-harvester`       | [Smithsonian Magazine — Chilly Reception](https://www.smithsonianmag.com/history/chilly-reception-66099329/)                                                                               |
| `work-resurrectionists-graves` | [Royal College of Surgeons — Diary of a resurrectionist: The unique record of a frightening trade](https://www.rcseng.ac.uk/library-and-publications/library/blog/diary-of-a-resurrectionist/) |
| `work-gong-farmer`          | [Historic Royal Palaces — Tudor world brought to life in new display at Hampton Court Palace](https://www.hrp.org.uk/media-and-press/press-releases-2024/tudor-world-brought-to-life-in-new-display-at-hampton-court-palace/) |
| `work-cigar-lector`         | [National Park Service — American Latino Theme Study: Media](https://www.nps.gov/articles/latinothemestudymedia.htm)                                                                           |
| `work-mush-faker`           | [London Museum — Street life & work in 1877](https://www.londonmuseum.org.uk/collections/london-stories/street-life-work-1877-john-thomson/)                                                  |
| `work-aircraft-listeners`   | [Imperial War Museums — Locator, Sound No1 Mark 1](https://www.iwm.org.uk/collections/item/object/30028540)                                                                                   |
| `work-tazzle-men`           | [Sunny Bank Mills — Teazles](https://www.sunnybankmills.co.uk/our-story/blog/teazles-dan-sykes-museum-archive-assistant/)                                                                      |
| `work-cooper-sound`         | [Colonial Williamsburg — Making Circles](https://research.colonialwilliamsburg.org/Foundation/journal/Autumn03/cooper.cfm)                                                                     |
| `work-wigmaker-baking`      | [Colonial Williamsburg — Lies My Docent Told Me](https://research.colonialwilliamsburg.org/Foundation/journal/Autumn10/myths.cfm)                                                              |
| `work-insurance-brigades`   | [London Museum — How the Great Fire of London created insurance](https://www.londonmuseum.org.uk/blog/how-the-great-fire-of-london-created-insurance/)                                         |
| `work-mudlarks`             | [London Museum — Henry Mayhew brings Victorian London to life](https://www.londonmuseum.org.uk/collections/london-stories/henry-mayhew-brings-victorian-london-life/)                                                        |
| `work-foggara-water-shares` | [UNESCO Multimedia Archives — Les savoirs et savoir-faire des mesureurs d'eau des foggaras ou aiguadiers du Touat-Tidikelt](https://www.unesco.org/archives/multimedia/document-4787)                                        |
| `work-mary-rose-diver`      | [Historic Royal Palaces — Tudor world brought to life in new display at Hampton Court Palace](https://www.hrp.org.uk/media-and-press/press-releases-2024/tudor-world-brought-to-life-in-new-display-at-hampton-court-palace/) |

#### Art & music — 18 cards

Eighteen cards covering extraordinary artworks, bizarre musical instruments, eccentric performances, and historical pigments. Every single card is verified against primary museum collections and authoritative arts journalism (Smithsonian Magazine, Atlas Obscura, Centre Pompidou, Tate Research, Science Museum Group, The Franklin Institute, Dia Art Foundation, Artangel, RIBA, and The Guardian).

| Card                       | Consulted source                                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `art-mummy-brown`          | [Smithsonian Magazine — Ground Up Mummies Were Once an Ingredient in Paint](https://www.smithsonianmag.com/smart-news/ground-mummies-were-once-ingredient-paint-180950350/)                 |
| `art-stalacpipe-organ`     | [Atlas Obscura — The Great Stalacpipe Organ in Luray](https://www.atlasobscura.com/places/the-great-stalacpipe-organ-luray-virginia)                                                       |
| `art-zadar-sea-organ`      | [Atlas Obscura — Sea Organ in Zadar](https://www.atlasobscura.com/places/sea-organ)                                                                                                         |
| `art-museum-bad-art`       | [Smithsonian Magazine — Why Is Some Art So Bad That It’s Good?](https://www.smithsonianmag.com/arts-culture/why-is-some-art-so-bad-its-good-180967878/)                                      |
| `art-cattelan-banana`      | [Smithsonian Magazine — That Viral Banana Duct-Taped to a Wall? It Just Sold for $6.2 Million](https://www.smithsonianmag.com/smart-news/that-viral-banana-duct-taped-to-a-wall-it-just-sold-for-6-2-million-180985523/) |
| `art-maillardet-automaton`  | [The Franklin Institute — Maillardet's Automaton](https://fi.edu/en/science-and-education/collection/maillardets-automaton)                                                                |
| `art-yves-klein-void`      | [Centre Pompidou — Yves Klein, Chèque (1959)](https://www.centrepompidou.fr/en/ressources/oeuvre/cMedK9X)                                                                                  |
| `art-russolo-intonarumori` | [Tate Research — A Transformative Exhibition: Historiography of the Processes of Production](https://www.tate.org.uk/research/in-focus/abstract-kinetic-collage-painting-sound/transformative-exhibition) |
| `art-kastner-pyrophone`    | [Science Museum Group — Kastner's Pyrophone, 1873-1876](https://collection.sciencemuseumgroup.org.uk/objects/co5867/kastners-pyrophone-1873-1876)                                         |
| `art-de-maria-lightning`   | [Dia Art Foundation — Walter De Maria, The Lightning Field](https://www.diaart.org/visit/visit-our-locations-sites/walter-de-maria-the-lightning-field)                                    |
| `art-hugo-ball-costume`    | [Tate Research — Behold the Buffoon: Dada, Nietzsche's Ecce Homo and the Sublime](https://www.tate.org.uk/art/research-publications/the-sublime/christine-battersby-behold-the-buffoon-dada-nietzsches-ecce-homo-and-the-sublime-r1136833) |
| `art-longplayer-millennium`| [Artangel — Longplayer](https://www.artangel.org.uk/project/longplayer/)                                                                                                                    |
| `art-singing-ringing-tree` | [RIBA — Singing Ringing Tree by Tonkin Liu](https://find-an-architect.architecture.com/tonkin-liu/london/singing-ringing-tree)                                                              |
| `art-octobass-frequency`   | [Atlas Obscura — Octobass in Phoenix](https://www.atlasobscura.com/places/octobass)                                                                                                          |
| `art-le-petomane-pujol`    | [The Guardian — Fart history? Joseph Pujol trumps them all](https://www.theguardian.com/culture/2021/aug/20/fart-history-joseph-pujol-trumps-them-all)                                    |
| `art-glass-harmonica`      | [Science Museum Group — Glass Harmonica](https://collection.sciencemuseumgroup.org.uk/objects/co5862/glass-harmonica)                                                                       |
| `art-hurdy-gurdy-wheel`    | [Smithsonian Music — Hurdy-gurdy](https://music.si.edu/object-day/hurdy-gurdy)                                                                                                              |
| `art-smalt-glass`          | [National Gallery — Smalt](https://www.nationalgallery.org.uk/paintings/glossary/smalt)                                                                                                     |

#### The sea — 18 cards

Eighteen cards covering maritime phenomena, navigational hazards, oceanographic anomalies, and naval traditions. Each card is verified against primary scientific and museum resources (NOAA, NASA Earth Observatory, European Space Agency, National Weather Service, National Park Service, Natural History Museum London, Royal Museums Greenwich, Scientific American, Smithsonian Magazine, and BBC News).

| Card                       | Consulted source                                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sea-doldrums`             | [NOAA National Ocean Service — What are the doldrums?](https://oceanservice.noaa.gov/facts/doldrums.html)                                                                                  |
| `sea-horse-latitudes`      | [NOAA National Ocean Service — What are the horse latitudes?](https://oceanservice.noaa.gov/facts/horse-latitudes.html)                                                                      |
| `sea-roaring-forties`      | [NOAA National Ocean Service — What are the Roaring Forties?](https://oceanservice.noaa.gov/facts/roaring-forties.html)                                                                      |
| `sea-point-nemo`           | [NOAA National Ocean Service — Where is Point Nemo?](https://oceanservice.noaa.gov/facts/nemo.html)                                                                                          |
| `sea-brinicle`             | [Scientific American — How Eerie Sea-Ice 'Brinicles' Form](https://www.scientificamerican.com/article/how-sea-ice-brinicles-form/)                                                          |
| `sea-line-crossing`        | [Royal Museums Greenwich — Crossing the line](https://www.rmg.co.uk/stories/ocean/curatorial/crossing-line)                                                                                 |
| `sea-milky-seas`           | [NASA Science — Hunting Milky Seas by Satellite](https://science.nasa.gov/earth/earth-observatory/hunting-milky-seas-by-satellite-149017/)                                                   |
| `sea-ghost-forest`         | [NOAA National Ocean Service — What is a ghost forest?](https://oceanservice.noaa.gov/facts/ghost-forest.html)                                                                              |
| `sea-denmark-strait-fall`  | [NOAA National Ocean Service — Where is Earth's Largest Waterfall?](https://oceanservice.noaa.gov/facts/largest-waterfall.html)                                                              |
| `sea-old-sow`              | [NOAA National Ocean Service — What is Old Sow?](https://oceanservice.noaa.gov/facts/old-sow.html)                                                                                          |
| `sea-cross-sea`            | [European Space Agency — Cross seas](https://www.esa.int/ESA_Multimedia/Images/2011/06/Cross_seas)                                                                                           |
| `sea-sargasso-eels`        | [BBC News — Ancient eel migration mystery unravelled](https://www.bbc.com/news/science-environment-63259738)                                                                                |
| `sea-ambergris`            | [Natural History Museum London — What is ambergris?](https://www.nhm.ac.uk/discover/what-is-ambergris.html)                                                                                 |
| `sea-mary-celeste`         | [Smithsonian Magazine — Abandoned Ship: The Mary Celeste](https://www.smithsonianmag.com/history/abandoned-ship-the-mary-celeste-174488104/)                                                 |
| `sea-st-elmos-fire`        | [National Weather Service — Marine Definitions: St. Elmo's Fire](https://www.weather.gov/okx/marinedef)                                                                                     |
| `sea-right-whale-name`     | [NOAA National Ocean Service — What makes the right whale "right"?](https://oceanservice.noaa.gov/facts/rtwhale.html)                                                                        |
| `sea-old-man-of-the-lake`  | [National Park Service — The Old Man - Crater Lake National Park](https://www.nps.gov/crla/learn/nature/theoldman.htm)                                                                      |
| `sea-corryvreckan-orwell`  | [BBC News — The Scottish island where George Orwell created 1984](https://www.bbc.co.uk/news/uk-scotland-43821334)                                                                         |

#### Lost gear — 18 cards

Eighteen cards covering historical equipment, specialized martial gear, obsolete attire, and material culture artifacts. Verified against museum collections (Victoria and Albert Museum, Science Museum Group, National Museums Scotland) and unabridged public-domain reference works (Webster's 1913).

| Card                       | Consulted source                                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gear-cresset`             | [Webster's 1913 — Cresset](https://www.websters1913.com/words/Cresset)                                                                                                                       |
| `gear-quintain`            | [Webster's 1913 — Quintain](https://www.websters1913.com/words/Quintain)                                                                                                                     |
| `gear-distaff`             | [Webster's 1913 — Distaff](https://www.websters1913.com/words/Distaff)                                                                                                                       |
| `gear-tumbril`             | [Webster's 1913 — Tumbril](https://www.websters1913.com/words/Tumbril)                                                                                                                       |
| `gear-claude-glass`        | [Victoria and Albert Museum — Claude Glass](https://collections.vam.ac.uk/item/O78676/claude-glass-unknown/)                                                                                |
| `gear-xebec`               | [Webster's 1913 — Xebec](https://www.websters1913.com/words/Xebec)                                                                                                                           |
| `gear-inkhorn`             | [Webster's 1913 — Inkhorn](https://www.websters1913.com/words/Inkhorn)                                                                                                                       |
| `gear-scolds-bridle`       | [Science Museum Group Collection — Scold's bridle mask](https://collection.sciencemuseumgroup.org.uk/objects/co155218/scolds-bridle-mask-which-partially-covers-face)                       |
| `gear-caltrop`             | [Webster's 1913 — Caltrop](https://www.websters1913.com/words/Caltrop)                                                                                                                       |
| `gear-binnacle`            | [Webster's 1913 — Binnacle](https://www.websters1913.com/words/Binnacle)                                                                                                                     |
| `gear-man-catcher`         | [Science Museum Group Collection — Man Catcher, Germany, 1601-1800](https://collection.sciencemuseumgroup.org.uk/objects/co155263/man-catcher-germany-1601-1800)                           |
| `gear-farthingale`         | [Webster's 1913 — Farthingale](https://www.websters1913.com/words/Farthingale)                                                                                                               |
| `gear-pomander`            | [Webster's 1913 — Pomander](https://www.websters1913.com/words/Pomander)                                                                                                                   |
| `gear-chopine`             | [Webster's 1913 — Chopine](https://www.websters1913.com/words/Chopine)                                                                                                                       |
| `gear-tappit-hen`          | [National Museums Scotland — The 'tappit hen'](https://www.nms.ac.uk/discover-catalogue/a-tappit-hen-a-type-of-drinking-vessel-used-during-the-lifetime-of-robert-burns)                   |
| `gear-betty`               | [Webster's 1913 — Betty](https://www.websters1913.com/words/Betty)                                                                                                                           |
| `gear-thole`               | [Webster's 1913 — Thole](https://www.websters1913.com/words/Thole)                                                                                                                           |
| `gear-gibbet-cage`         | [Science Museum Group Collection — Iron Torture Gibbet](https://collection.sciencemuseumgroup.org.uk/objects/co156089/iron-torture-gibbet)                                                   |

#### Rarer words — 18 cards

Eighteen deep-cut vocabulary cards drawn from public-domain entries in [Webster's 1913](https://www.websters1913.com/) and [Project Gutenberg catalog ebook 29765](https://www.gutenberg.org/ebooks/29765). Every card represents an authentic historical English or cant term whose meaning provides fertile ground for deceptive, plausible party bluffs.

| Card                       | Consulted source                                                                                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rare-factotum`            | [Webster's 1913 — Factotum](https://www.websters1913.com/words/Factotum)                                                                                                                     |
| `rare-quidnunc`            | [Webster's 1913 — Quidnunc](https://www.websters1913.com/words/Quidnunc)                                                                                                                     |
| `rare-welkin`              | [Webster's 1913 — Welkin](https://www.websters1913.com/words/Welkin)                                                                                                                         |
| `rare-yare`                | [Webster's 1913 — Yare](https://www.websters1913.com/words/Yare)                                                                                                                             |
| `rare-tittle`              | [Webster's 1913 — Tittle](https://www.websters1913.com/words/Tittle)                                                                                                                         |
| `rare-limn`                | [Webster's 1913 — Limn](https://www.websters1913.com/words/Limn)                                                                                                                             |
| `rare-mountebank`          | [Webster's 1913 — Mountebank](https://www.websters1913.com/words/Mountebank)                                                                                                                 |
| `rare-recusant`            | [Webster's 1913 — Recusant](https://www.websters1913.com/words/Recusant)                                                                                                                     |
| `rare-antephialtic`        | [Webster's 1913 — Antephialtic](https://www.websters1913.com/words/Antephialtic)                                                                                                             |
| `rare-belly-god`           | [Webster's 1913 — Belly-god](https://www.websters1913.com/words/Belly-god)                                                                                                                   |
| `rare-vaticinate`          | [Webster's 1913 — Vaticinate](https://www.websters1913.com/words/Vaticinate)                                                                                                                 |
| `rare-obumbrate`           | [Webster's 1913 — Obumbrate](https://www.websters1913.com/words/Obumbrate)                                                                                                                   |
| `rare-coxcomb`             | [Webster's 1913 — Coxcomb](https://www.websters1913.com/words/Coxcomb)                                                                                                                       |
| `rare-flibbertigibbet`     | [Webster's 1913 — Flibbertigibbet](https://www.websters1913.com/words/Flibbertigibbet)                                                                                                       |
| `rare-helve`               | [Webster's 1913 — Helve](https://www.websters1913.com/words/Helve)                                                                                                                           |
| `rare-fain`                | [Webster's 1913 — Fain](https://www.websters1913.com/words/Fain)                                                                                                                             |
| `rare-pilgarlic`           | [Webster's 1913 — Pilgarlic](https://www.websters1913.com/words/Pilgarlic)                                                                                                                   |
| `rare-dudgeon`             | [Webster's 1913 — Dudgeon](https://www.websters1913.com/words/Dudgeon)                                                                                                                       |

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
