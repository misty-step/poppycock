import { definePack } from "./types";

export const remarkablePlaces = definePack(
  {
    key: "remarkable-places",
    title: "Remarkable places",
    blurb: "Bizarre towns, eccentric architecture, and extraordinary geographic anomalies.",
    category: "Remarkable places",
    sort: 80,
  },
  [
    {
      key: "place-centralia-mine-fire",
      question:
        "What has been continuously burning beneath the nearly abandoned town of Centralia, Pennsylvania?",
      answer: "An underground coal mine seam fire that has burned since 1962.",
      source: {
        title: "Smithsonian Magazine — The Fire That Never Dies",
        url: "https://www.smithsonianmag.com/travel/the-fire-that-never-dies-4963162/",
        note: "Original question and factual summary. An exposed anthracite coal seam ignited in May 1962 and continues burning under the evacuated town.",
      },
    },
    {
      key: "place-coober-pedy-underground",
      question:
        "Where do roughly half the residents of the Australian opal-mining town of Coober Pedy live?",
      answer: "Underground 'dugout' homes to escape scorching desert heat.",
      source: {
        title: "BBC Travel — Coober Pedy: The town that lives underground",
        url: "https://www.bbc.com/travel/article/20230807-coober-pedy-the-town-that-lives-underground",
        note: "Original question and factual summary. Desert summer temperatures routinely exceed 45°C, prompting residents to carve subterranean homes into sandstone hillsides.",
      },
    },
    {
      key: "place-whittier-single-building",
      question:
        "Where does nearly the entire population of the remote port town of Whittier, Alaska live?",
      answer: "Inside a single 14-story building that also holds the town school and church.",
      source: {
        title: "NPR — Welcome To Whittier, Alaska: A Town Under One Roof",
        url: "https://www.npr.org/2015/01/18/378162264/welcome-to-whittier-alaska-a-town-under-one-roof",
        note: "Original question and factual summary. Begich Towers houses roughly 85% of residents along with the police department, grocery store, and clinic.",
      },
    },
    {
      key: "place-darvaza-door-to-hell",
      question:
        "What has happened continuously inside Turkmenistan's 'Door to Hell' crater since 1971?",
      answer: "A natural gas crater that Soviet geologists ignited in 1971.",
      source: {
        title: "National Geographic — Door to Hell: Turkmenistan's Gas Crater",
        url: "https://www.nationalgeographic.com/travel/article/darvaza-gas-crater-turkmenistan",
        note: "Original question and factual summary. Soviet engineers punctured an underground gas pocket in 1971; the collapsed crater was set alight to burn off poisonous methane.",
      },
    },
    {
      key: "place-winchester-mystery-house",
      question:
        "What architectural oddity did Sarah Winchester famously build into her California mansion?",
      answer: "Staircases leading directly into ceilings and doors opening into empty air.",
      source: {
        title: "Smithsonian Magazine — The Winchester Mystery House",
        url: "https://www.smithsonianmag.com/history/the-true-story-of-the-winchester-mystery-house-180968037/",
        note: "Original question and factual summary. 38 years of non-stop construction produced dead-end hallways, secret passages, and stairways terminating at blank ceilings.",
      },
    },
    {
      key: "place-colma-cemetery-city",
      question:
        "Why does the town of Colma, California have roughly 1,500 living residents but over 1.5 million dead?",
      answer: "Over 1.5 million dead people, because San Francisco banned cemeteries.",
      source: {
        title: "Atlas Obscura — Colma, California: The City of the Dead",
        url: "https://www.atlasobscura.com/places/colma-the-city-of-the-dead",
        note: "Original question and factual summary. San Francisco passed ordinances in 1900 expelling existing burial grounds; hundreds of thousands of remains were moved to Colma.",
      },
    },
    {
      key: "place-derinkuyu-basement",
      question:
        "In 1963, what did a Turkish homeowner in Cappadocia find behind a wall in his basement?",
      answer: "An ancient underground city eighteen levels deep that could shelter 20,000.",
      source: {
        title: "BBC Travel — Turkey's underground city of 20,000 people",
        url: "https://www.bbc.com/travel/article/20220810-derinkuyu-turkeys-underground-city-of-20000-people",
        note: "Original question and factual summary. A resident discovered a subterranean passageway that led to the multi-level subterranean settlement of Derinkuyu.",
      },
    },
    {
      key: "place-longyearbyen-dying-banned",
      question:
        "Why is dying technically prohibited in the Arctic coal-mining town of Longyearbyen, Svalbard?",
      answer: "The permafrost prevents buried corpses from decomposing.",
      source: {
        title: "BBC Future — The Arctic town where dying is forbidden",
        url: "https://www.bbc.com/future/article/20160216-the-arctic-town-where-dying-is-forbidden",
        note: "Original question and factual summary. The local cemetery stopped accepting bodies in the 1950s because permanent sub-zero ground preserves tissues and viruses.",
      },
    },
    {
      key: "place-baarle-border-line",
      question:
        "What runs straight through the middle of living rooms and cafes in the European town of Baarle?",
      answer: "The zigzag border between Belgium and the Netherlands.",
      source: {
        title: "BBC Travel — The curious border town where you cross nations while eating lunch",
        url: "https://www.bbc.com/travel/article/20211117-the-curious-border-town-of-baarle",
        note: "Original question and factual summary. Baarle contains 22 Belgian exclaves and 8 Dutch exclaves, causing the national border to cut through buildings and streets.",
      },
    },
    {
      key: "place-snake-island-forbidden",
      question:
        "Why has the Brazilian government strictly banned civilians from visiting Snake Island?",
      answer: "Thousands of critically venomous golden lancehead pit vipers.",
      source: {
        title: "Smithsonian Magazine — Snake Island: Brazil's Venomous Isle",
        url: "https://www.smithsonianmag.com/science-nature/snake-island-brazil-venomous-pit-vipers-180951918/",
        note: "Original question and factual summary. Ilha da Queimada Grande is inhabited by thousands of golden lancehead vipers whose venom can melt human flesh.",
      },
    },
    {
      key: "place-monowi-population-one",
      question: "What is officially unique about the incorporated village of Monowi, Nebraska?",
      answer: "It has a population of one: Elsie Eiler, who serves as mayor and bartender.",
      source: {
        title: "BBC News — The only person living in an entire US town",
        url: "https://www.bbc.com/travel/article/20180129-the-only-person-living-in-an-entire-us-town",
        note: "Original question and factual summary. Elsie Eiler pays municipal taxes to herself, grants her own liquor license, and manages the town's public library.",
      },
    },
    {
      key: "place-sealand-sea-fort",
      question:
        "Where is the self-declared micronation of the 'Principality of Sealand' physically located?",
      answer: "On an abandoned WWII anti-aircraft platform in the North Sea.",
      source: {
        title: "BBC News — The strange story of Sealand",
        url: "https://www.bbc.com/news/uk-england-suffolk-56621376",
        note: "Original question and factual summary. Roy Bates occupied HM Fort Roughs in 1967, an offshore platform six miles off the coast of Suffolk, declaring it sovereign territory.",
      },
    },
    {
      key: "place-paris-catacombs-bones",
      question:
        "Why were the bones of over six million Parisians relocated into underground limestone quarries?",
      answer: "Parisian church graveyards were overflowing and causing disease.",
      source: {
        title: "Smithsonian Magazine — The Secret History of the Paris Catacombs",
        url: "https://www.smithsonianmag.com/travel/paris-catacombs-history-180978794/",
        note: "Original question and factual summary. By the 1780s, graveyards like the Holy Innocents were overflowing with rotting corpses, prompting mass exhumations.",
      },
    },
    {
      key: "place-hashima-battleship-island",
      question:
        "Why was Japan's densely packed concrete island of Hashima abruptly abandoned in 1974?",
      answer: "Its undersea coal mine shut down when Japan switched to petroleum.",
      source: {
        title: "National Geographic — Inside Japan's Abandoned Battleship Island",
        url: "https://www.nationalgeographic.com/travel/article/hashima-island-japan-ruins-ghost-town",
        note: "Original question and factual summary. Once home to 5,000 coal workers, Mitsubishi closed the undersea shaft when petroleum replaced coal as Japan's chief energy source.",
      },
    },
    {
      key: "place-lake-titicaca-uros-reeds",
      question:
        "What material do the Uros people use to build their floating artificial islands on Lake Titicaca?",
      answer: "Thick woven layers of buoyant totora reeds anchored with ropes.",
      source: {
        title: "National Geographic — The Floating Islands of Lake Titicaca",
        url: "https://www.nationalgeographic.com/travel/article/uros-floating-islands-peru-bolivia-lake-titicaca",
        note: "Original question and factual summary. Indigenous Uros people construct floating settlements out of dried totora reeds harvested from the lake shallows.",
      },
    },
    {
      key: "place-svalbard-seed-vault",
      question:
        "What is stored deep inside a permafrost mountain on the Arctic island of Spitsbergen?",
      answer: "Backup seed samples for the world's food crops in case of global disaster.",
      source: {
        title: "Crop Trust — Svalbard Global Seed Vault",
        url: "https://www.croptrust.org/our-work/svalbard-global-seed-vault/",
        note: "Original question and factual summary. The vault secures over one million duplicates of crop seed varieties at sub-zero temperatures inside a sandstone mountain.",
      },
    },
    {
      key: "place-cretto-di-burri",
      question:
        "What monumental art installation covers the Sicilian ruins of the earthquake-destroyed town of Gibellina?",
      answer: "Poured a vast white concrete shroud over the ruins of the entire town.",
      source: {
        title: "Tate — Alberto Burri: Grande Cretto di Gibellina",
        url: "https://www.tate.org/art/artworks/burri-grande-cretto-di-gibellina",
        note: "Original question and factual summary. Artist Alberto Burri covered the rubble of the town in white cement blocks, leaving fractures tracing the original street grid.",
      },
    },
    {
      key: "place-bishop-castle",
      question:
        "What is extraordinary about the 160-foot stone castle built by Jim Bishop in Colorado?",
      answer: "He built the entire multi-story stone fortress by hand without blueprints.",
      source: {
        title: "Atlas Obscura — Bishop Castle",
        url: "https://www.atlasobscura.com/places/bishop-castle",
        note: "Original question and factual summary. Jim Bishop hauled and mortared an estimated 1,000 tons of rock single-handedly over sixty years to build a whimsical three-story castle.",
      },
    },
  ],
);
