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
        title: "USGS Fact Sheet 2009–3084 — Emissions from Coal Fires",
        url: "https://pubs.usgs.gov/fs/2009/3084/pdf/fs2009-3084.pdf",
        note: "Original question and factual summary. USGS fact sheet records Centralia as an active underground anthracite coal seam fire burning since 1962 that forced the relocation of residents.",
      },
    },
    {
      key: "place-coober-pedy-underground",
      question:
        "Where do roughly sixty percent of residents in the Australian desert town of Coober Pedy live?",
      answer: "Underground 'dugout' homes to escape scorching desert heat.",
      source: {
        title: "BBC Future — The Australian town where people live underground",
        url: "https://www.bbc.com/future/article/20230803-the-town-where-people-live-underground",
        note: "Original question and factual summary. Desert summer temperatures routinely hit 52°C, prompting 60% of residents to build subterranean homes in soft sandstone rock.",
      },
    },
    {
      key: "place-whittier-single-building",
      question:
        "Where does nearly the entire population of the remote port town of Whittier, Alaska live?",
      answer: "Inside a single 14-story building that also holds the town school and church.",
      source: {
        title: "NPR — Welcome To Whittier, Alaska, A Community Under One Roof",
        url: "https://www.npr.org/2015/01/18/378162264/welcome-to-whittier-alaska-a-community-under-one-roof",
        note: "Original question and factual summary. Begich Towers houses almost the entire population of Whittier alongside municipal offices, school access, and local services.",
      },
    },
    {
      key: "place-lake-maracaibo-lightning",
      question:
        "Why does Venezuela's Lake Maracaibo hold the official record as Earth's 'lightning capital'?",
      answer:
        "It averages 297 nocturnal thunderstorms a year, producing tens of thousands of lightning flashes a night.",
      source: {
        title: "NASA — Earth's New Lightning Capital Revealed",
        url: "https://www.nasa.gov/missions/trmm/earths-new-lightning-capital-revealed/",
        note: "Original question and factual summary. Satellite LIS data recorded an average rate of 233 flashes/km²/year, fueled by mountain breezes generating 297 nightly thunderstorms annually.",
      },
    },
    {
      key: "place-winchester-mystery-house",
      question:
        "What architectural oddity did Sarah Winchester famously build into her California mansion?",
      answer: "Staircases leading directly into ceilings and doors opening into empty air.",
      source: {
        title: "Smithsonian Magazine — The Heiress to a Gun Empire Built a Mansion",
        url: "https://www.smithsonianmag.com/history/heiress-gun-empire-built-mansion-forever-haunted-blood-money-built-it-180959712/",
        note: "Original question and factual summary. Continuous construction from 1886 to 1922 produced 40 staircases (including stairs ending at blank ceilings) and blind doorways.",
      },
    },
    {
      key: "place-colma-cemetery-city",
      question:
        "Why does the town of Colma, California have roughly 1,500 living residents but over 1.5 million dead?",
      answer: "San Francisco banned cemeteries and evicted its dead to make room for the living.",
      source: {
        title: "Atlas Obscura — Colma Necropolis in Daly City",
        url: "https://www.atlasobscura.com/places/colma-necropolis",
        note: "In 1900 San Francisco banned cemeteries and evicted corpses; over 1.5 million bodies were relocated to Colma cemeteries.",
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
        note: "Original question and factual summary. A resident investigating chickens disappearing into a wall hole unearthed a passage to the subterranean city of Derinkuyu.",
      },
    },
    {
      key: "place-longyearbyen-coffin-burials",
      question:
        "Why are traditional coffin burials prohibited in the Arctic cemetery of Longyearbyen, Svalbard?",
      answer:
        "The freezing and thawing permafrost slowly pushes buried coffins back to the surface.",
      source: {
        title: "Visit Svalbard — Frequently Asked Questions",
        url: "https://en.visitsvalbard.com/visitor-information/faq",
        note: "Original question and factual summary. Official FAQ clarifies that dying is not illegal, but coffin burials are banned because seasonal permafrost heave pushes coffins upward and inhibits decomposition.",
      },
    },
    {
      key: "place-baarle-border-line",
      question:
        "What runs straight through the middle of living rooms and cafes in the European town of Baarle?",
      answer: "The zigzag border between Belgium and the Netherlands.",
      source: {
        title: "BBC Travel — Europe's strange border anomaly",
        url: "https://www.bbc.com/travel/article/20171210-europes-strange-border-anomaly",
        note: "Original question and factual summary. Baarle contains roughly 30 intertwined enclaves, causing the Dutch-Belgian border to bisect streets, houses, and businesses.",
      },
    },
    {
      key: "place-snake-island-forbidden",
      question:
        "Why has the Brazilian government strictly banned civilians from stepping foot on the island of Ilha da Queimada Grande?",
      answer: "It is densely infested with thousands of deadly golden lancehead pit vipers.",
      source: {
        title:
          "Smithsonian Magazine — This Terrifying Brazilian Island Has Highest Concentration of Venomous Snakes",
        url: "https://www.smithsonianmag.com/science-nature/snake-infested-island-deadliest-place-brazil-180951782/",
        note: "Ilha da Queimada Grande is inhabited by thousands of golden lancehead vipers whose venom causes rapid hemotoxic tissue damage.",
      },
    },
    {
      key: "place-monowi-population-one",
      question: "What is officially unique about the incorporated village of Monowi, Nebraska?",
      answer: "It has a population of one: Elsie Eiler, who serves as mayor and bartender.",
      source: {
        title: "BBC Travel — Welcome to Monowi, Nebraska: population 1",
        url: "https://www.bbc.com/travel/article/20180129-welcome-to-monowi-nebraska-population-1",
        note: "Original question and factual summary. Elsie Eiler is the sole resident, voting for herself as mayor, filing town taxes, and running Rudy's Tavern.",
      },
    },
    {
      key: "place-sealand-sea-fort",
      question:
        "Where is the self-declared micronation of the 'Principality of Sealand' physically located?",
      answer: "On an abandoned WWII anti-aircraft platform in the North Sea.",
      source: {
        title: "BBC News — The off-shore fort 'state' of Sealand marks 50 years",
        url: "https://www.bbc.com/news/uk-england-suffolk-41135081",
        note: "Original question and factual summary. Roy Bates occupied HM Fort Roughs in 1967, an offshore platform seven miles off the Suffolk coast, declaring it sovereign.",
      },
    },
    {
      key: "place-paris-catacombs-bones",
      question:
        "Why were the bones of over six million Parisians relocated into underground limestone quarries?",
      answer: "Parisian church graveyards were overflowing and causing disease.",
      source: {
        title: "Smithsonian Magazine — Beneath Paris' City Streets, There's an Empire of Death",
        url: "https://www.smithsonianmag.com/travel/paris-catacombs-180950160/",
        note: "Original question and factual summary. After the wall of the Holy Innocents cemetery collapsed in 1780, bones of 6 million people were moved into former quarries.",
      },
    },
    {
      key: "place-hashima-battleship-island",
      question:
        "Why was Japan's densely packed concrete island of Hashima abruptly abandoned in 1974?",
      answer: "Its undersea coal mine shut down when Japan switched to petroleum.",
      source: {
        title:
          "UNESCO World Heritage Centre — Sites of Japan’s Meiji Industrial Revolution (Hashima Coal Mine)",
        url: "https://whc.unesco.org/en/list/1484/",
        note: "Original question and factual summary. Hashima Coal Mine was developed for deep-sea mining; Mitsubishi closed the facility in 1974 during Japan's transition to oil.",
      },
    },
    {
      key: "place-lake-titicaca-uros-reeds",
      question:
        "What material do the Uros people use to build their floating artificial islands on Lake Titicaca?",
      answer: "Thick woven layers of buoyant totora reeds anchored with ropes.",
      source: {
        title: "BBC Travel — The floating homes of Lake Titicaca",
        url: "https://www.bbc.com/travel/article/20220814-the-floating-homes-of-lake-titicaca",
        note: "Original question and factual summary. Indigenous Uros construct floating settlements on Lake Titicaca by stacking layers of buoyant totora roots and cut reeds.",
      },
    },
    {
      key: "place-boiling-river-amazon",
      question:
        "What makes the remote Amazonian river known in Quechua as Shanay-Timpishka astonishing to geologists?",
      answer:
        "It naturally reaches boiling temperatures for over four miles, despite not being near any active volcano.",
      source: {
        title: "National Geographic — Episode 13: Solving the mystery of the boiling river",
        url: "https://www.nationalgeographic.com/podcasts/article/episode-13-solving-the-mystery-of-the-boiling-river",
        note: "Geothermal waters heated by deep-fault hydrothermal systems reach up to 99°C, flowing through four miles of Peruvian rainforest.",
      },
    },
    {
      key: "place-cretto-di-burri",
      question:
        "What monumental art installation covers the Sicilian ruins of the earthquake-destroyed town of Gibellina?",
      answer: "Poured a vast white concrete shroud over the ruins of the entire town.",
      source: {
        title: "Atlas Obscura — Cretto di Burri in Gibellina Vecchia",
        url: "https://www.atlasobscura.com/places/cretto-di-gibellina",
        note: "Original question and factual summary. Alberto Burri encased the ruins and rubble of earthquake-destroyed Gibellina in white concrete, tracing the old street grid.",
      },
    },
    {
      key: "place-bishop-castle",
      question:
        "What is extraordinary about the 160-foot stone castle built by Jim Bishop in Colorado?",
      answer: "He built the entire multi-story stone fortress by hand without blueprints.",
      source: {
        title: "Atlas Obscura — Bishop Castle in Rye, Colorado",
        url: "https://www.atlasobscura.com/places/bishop-castle",
        note: "Original question and factual summary. Jim Bishop hauled and mortared rock single-handedly starting in 1969 to construct a 16-story stone fortress and metal dragon.",
      },
    },
  ],
);
