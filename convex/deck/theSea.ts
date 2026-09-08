import { definePack } from "./types";

export const theSea = definePack(
  {
    key: "the-sea",
    title: "The sea",
    blurb: "Winds, waves, hidden cataracts, and the names sailors gave them.",
    category: "The sea",
    sort: 110,
  },
  [
    {
      key: "sea-whale-fall",
      question: "In deep-sea oceanography, what is a 'whale fall'?",
      answer:
        "A sunken whale carcass on the ocean floor that sustains an entire complex ecosystem of scavengers for decades.",
      source: {
        title: "NOAA National Ocean Service — What is a whale fall?",
        url: "https://oceanservice.noaa.gov/facts/whale-fall.html",
        note: "Original question and factual summary. Decomposition of a sunken whale carcass provides food and chemical sulfide energy to deep-sea communities for up to 50 years.",
      },
    },
    {
      key: "sea-horse-latitudes",
      question:
        "According to a sailors' legend, why were the calm subtropical belts called the horse latitudes?",
      answer: "Stalled ships supposedly threw horses overboard to save drinking water.",
      source: {
        title: "NOAA National Ocean Service — What are the horse latitudes?",
        url: "https://oceanservice.noaa.gov/facts/horse-latitudes.html",
        note: "Original question; NOAA presents the horse-throwing story as legend, not established fact. The card keeps that framing. The belts themselves are described as calm, high-pressure regions about 30 degrees north and south.",
      },
    },
    {
      key: "sea-titanic-rusticles",
      question:
        "What eerie formations did deep-sea explorers find hanging from the steel hull of the sunken RMS Titanic?",
      answer:
        "'Rusticles': delicate, icicle-like stalactites created by iron-eating bacteria that are slowly consuming the wreck.",
      source: {
        title: "NOAA Ocean Exploration — Rusticles",
        url: "https://oceanexplorer.noaa.gov/multimedia/daily-image-media-20201014/",
        note: "Original question and factual summary. Iron-oxidizing bacterial and fungal communities form porous, icicle-like structures that dissolve the ship's steel into the ocean.",
      },
    },
    {
      key: "sea-point-nemo",
      question:
        "Why is the remote South Pacific oceanic coordinate known as 'Point Nemo' famous among geographers?",
      answer: "It is the point on Earth farthest from any land.",
      source: {
        title: "NOAA National Ocean Service — Where is Point Nemo?",
        url: "https://oceanservice.noaa.gov/facts/nemo.html",
        note: "The oceanic pole of inaccessibility is located over 1,600 miles from the nearest islands in every direction.",
      },
    },
    {
      key: "sea-brinicle",
      question:
        "What eerie underwater structure, nicknamed an 'icy finger of death', forms beneath polar sea ice?",
      answer:
        "A brinicle: a descending hollow tube of ice formed around sinking, supercooled salt brine.",
      source: {
        title: "Scientific American — How Eerie Sea-Ice 'Brinicles' Form",
        url: "https://www.scientificamerican.com/article/how-sea-ice-brinicles-form/",
        note: "Dense supercooled brine rejected from freezing sea ice sinks and freezes surrounding seawater upon contact.",
      },
    },
    {
      key: "sea-line-crossing",
      question:
        "In maritime tradition, what theatrical ordeal must a sailor who has never crossed the equator undergo?",
      answer:
        "A mock trial before King Neptune's court, where 'pollywogs' are lathered in slop and dunked in seawater.",
      source: {
        title: "Royal Museums Greenwich — Crossing the line",
        url: "https://www.rmg.co.uk/stories/ocean/curatorial/crossing-line",
        note: "A naval initiation rite where novices (pollywogs) face Neptune's court before becoming shellbacks.",
      },
    },
    {
      key: "sea-milky-seas",
      question:
        "What mysterious nocturnal ocean phenomenon can cause up to 100,000 square kilometers of open sea to glow uniformly white for days?",
      answer: "A 'milky sea' produced by trillions of luminous bacteria colonizing algal blooms.",
      source: {
        title: "NASA Science — Hunting Milky Seas by Satellite",
        url: "https://science.nasa.gov/earth/earth-observatory/hunting-milky-seas-by-satellite-149017/",
        note: "A continuous, massive bioluminescent glow visible from space, distinct from transient flashing plankton.",
      },
    },
    {
      key: "sea-the-bloop",
      question:
        "In 1997, what caused 'The Bloop', a mysterious deep sound detected by hydrophones over 2,000 miles apart in the Pacific?",
      answer: "An icequake: a huge iceberg cracking and breaking away from an Antarctic glacier.",
      source: {
        title: "NOAA National Ocean Service — What is the bloop?",
        url: "https://oceanservice.noaa.gov/facts/bloop.html",
        note: "Original question and factual summary. The thunderous rumble was originally speculated to be a giant sea creature before NOAA PMEL researchers traced it to an Antarctic glacial icequake.",
      },
    },
    {
      key: "sea-denmark-strait-fall",
      question: "Where is Earth's largest waterfall, according to NOAA?",
      answer: "Under the Denmark Strait, where dense cold water plunges down the seafloor.",
      source: {
        title: "NOAA National Ocean Service — Where is Earth's Largest Waterfall?",
        url: "https://oceanservice.noaa.gov/facts/largest-waterfall.html",
        note: "Original question; NOAA locates the cataract between Iceland and Greenland. Flow-rate and depth figures are omitted.",
      },
    },
    {
      key: "sea-brine-pool",
      question:
        "On the deep floor of the Gulf of Mexico, what are the surreal geographic features known as 'brine pools'?",
      answer:
        "Underwater lakes with their own shorelines, waves, and surfaces, so dense that submersibles can float on top of them.",
      source: {
        title: "NOAA Ocean Exploration — Brine Pool",
        url: "https://oceanexplorer.noaa.gov/multimedia/daily-image-media-20200720/",
        note: "Original question and factual summary. Hypersaline water seeping through seafloor salt deposits forms distinct underwater lakes up to five times saltier than seawater, complete with shorelines and ripples.",
      },
    },
    {
      key: "sea-cross-sea",
      question:
        "What maritime condition causes the surface of the ocean to form a checkered grid of 'square waves'?",
      answer:
        "A cross sea: two opposing wave systems traveling from perpendicular directions that collide.",
      source: {
        title: "European Space Agency — Cross seas",
        url: "https://www.esa.int/ESA_Multimedia/Images/2011/06/Cross_seas",
        note: "Occurs when two weather systems generate swell trains that intersect at right angles, creating a grid of short-crested waves.",
      },
    },
    {
      key: "sea-sargasso-eels",
      question:
        "Where do freshwater eels from across Europe and North America make a multi-thousand-mile ocean journey to reproduce and die?",
      answer: "The Sargasso Sea, a landless region of the North Atlantic Ocean.",
      source: {
        title: "BBC News — Ancient eel migration mystery unravelled",
        url: "https://www.bbc.com/news/science-environment-63259738",
        note: "European eels migrate thousands of miles to spawn once in the Sargasso Sea, an ancient mystery confirmed by satellite tagging.",
      },
    },
    {
      key: "sea-ambergris",
      question:
        "What foul-smelling substance from sperm whale intestines can sell for thousands of dollars an ounce after floating at sea?",
      answer:
        "Ambergris: hardened masses of squid beaks and bile, used as a fixative in luxury perfumes.",
      source: {
        title: "Natural History Museum London — What is ambergris?",
        url: "https://www.nhm.ac.uk/discover/what-is-ambergris.html",
        note: "Indigestible squid beaks bind in the whale's intestines and cure in seawater into an aromatic, musky perfume fixative.",
      },
    },
    {
      key: "sea-mary-celeste",
      question:
        "When the undamaged ghost ship Mary Celeste was found adrift in 1872 with all crew belongings aboard, what was its cargo?",
      answer: "1,701 barrels of industrial alcohol.",
      source: {
        title: "Smithsonian Magazine — Abandoned Ship: The Mary Celeste",
        url: "https://www.smithsonianmag.com/history/abandoned-ship-the-mary-celeste-174488104/",
        note: "The seaworthy vessel was found deserted with intact provisions and 1,701 barrels of alcohol, with clogged pumps explaining the evacuation panic.",
      },
    },
    {
      key: "sea-st-elmos-fire",
      question:
        "At sea, why does the eerie blue glow known as 'St. Elmo's Fire' on a ship's mast warn sailors to seek immediate shelter?",
      answer:
        "It is an electrical coronal discharge indicating lightning is likely to strike the mast within minutes.",
      source: {
        title: "National Weather Service — Marine Definitions: St. Elmo's Fire",
        url: "https://www.weather.gov/okx/marinedef",
        note: "Atmospheric electrostatic charge produces a plasma glow on mastheads, warning of imminent lightning strikes.",
      },
    },
    {
      key: "sea-right-whale-name",
      question: "Why did whalers call one species the 'right' whale?",
      answer: "It swam slowly and floated after it was killed, so it was the 'right' one to hunt.",
      source: {
        title: 'NOAA National Ocean Service — What makes the right whale "right"?',
        url: "https://oceanservice.noaa.gov/facts/rtwhale.html",
        note: "Original question; NOAA's etymology of the name. Population counts and current threats are omitted from the answer.",
      },
    },
    {
      key: "sea-old-man-of-the-lake",
      question: "What is 'The Old Man of the Lake' in Oregon's Crater Lake?",
      answer:
        "A 30-foot hemlock tree trunk that has bobbed and drifted completely upright for over 120 years.",
      source: {
        title: "National Park Service — The Old Man - Crater Lake National Park",
        url: "https://www.nps.gov/crla/learn/nature/theoldman.htm",
        note: "The vertical floating log was first tracked in 1896 and was recorded traveling over 60 miles across the lake in three months.",
      },
    },
    {
      key: "sea-corryvreckan-orwell",
      question:
        "In 1947, which treacherous Scottish sea hazard nearly killed George Orwell while he was writing '1984'?",
      answer: "The Corryvreckan whirlpool, which ripped the motor off his boat and capsized it.",
      source: {
        title: "BBC News — The Scottish island where George Orwell created 1984",
        url: "https://www.bbc.co.uk/news/uk-scotland-43821334",
        note: "Orwell and his adopted son escaped onto rocks after their dinghy was pulled into the notorious tidal whirlpool off Jura.",
      },
    },
  ],
);
