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
      key: "sea-doldrums",
      question: "What did sailors call the windless belt of ocean near the equator?",
      answer: "The doldrums, where rising air can becalm a ship for weeks.",
      source: {
        title: "NOAA National Ocean Service — What are the doldrums?",
        url: "https://oceanservice.noaa.gov/facts/doldrums.html",
        note: "Original question; paraphrase of NOAA's description of the Inter-Tropical Convergence Zone and its lack of surface wind.",
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
      key: "sea-roaring-forties",
      question:
        "What did Age of Sail crews call the fierce westerlies between 40 and 50 degrees south?",
      answer: "The Roaring Forties.",
      source: {
        title: "NOAA National Ocean Service — What are the Roaring Forties?",
        url: "https://oceanservice.noaa.gov/facts/roaring-forties.html",
        note: "Original question; NOAA's name and latitude band, not a speed or a claim about the Northern Hemisphere.",
      },
    },
    {
      key: "sea-furious-fifties",
      question:
        "What did sailors call the still-stronger gales ten degrees south of the Roaring Forties?",
      answer: "The Furious Fifties.",
      source: {
        title: "NOAA National Ocean Service — What are the Roaring Forties?",
        url: "https://oceanservice.noaa.gov/facts/roaring-forties.html",
        note: "Original question; NOAA's own nickname from the same page. Ten degrees farther south are the Screaming Sixties.",
      },
    },
    {
      key: "sea-gyre",
      question: "In oceanography, what is a gyre?",
      answer: "A large, lasting system of rotating ocean currents.",
      source: {
        title: "NOAA National Ocean Service — What is a gyre?",
        url: "https://oceanservice.noaa.gov/facts/gyre.html",
        note: "Original question; NOAA's traditional sense. The page notes that 'gyre' is sometimes used for debris patches; this card uses the current-system meaning.",
      },
    },
    {
      key: "sea-meteotsunami",
      question:
        "What kind of large coastal wave is driven by a storm's air pressure rather than an earthquake?",
      answer: "A meteotsunami.",
      source: {
        title: "NOAA National Ocean Service — What is a meteotsunami?",
        url: "https://oceanservice.noaa.gov/facts/meteotsunami.html",
        note: "Original question; NOAA distinguishes meteotsunamis from seismic tsunamis and from seiches. Height figures are omitted.",
      },
    },
    {
      key: "sea-seiche",
      question: "What is a seiche in a lake or bay?",
      answer: "A standing wave that sloshes back and forth across the basin.",
      source: {
        title: "NOAA National Ocean Service — What is a seiche?",
        url: "https://oceanservice.noaa.gov/facts/seiche.html",
        note: "Original question; NOAA's standing-wave definition. Historical Lake Erie death tolls and heights are omitted.",
      },
    },
    {
      key: "sea-ghost-forest",
      question: "What is a coastal 'ghost forest'?",
      answer: "Dead trees still standing after saltwater overtook a woodland.",
      source: {
        title: "NOAA National Ocean Service — What is a ghost forest?",
        url: "https://oceanservice.noaa.gov/facts/ghost-forest.html",
        note: "Original question; NOAA's description of saltwater poisoning deciduous trees as sea level rises. Subsidence details are omitted.",
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
      key: "sea-old-sow",
      question: "What is Old Sow, off Maine and New Brunswick?",
      answer: "The Western Hemisphere's largest whirlpool.",
      source: {
        title: "NOAA National Ocean Service — What is Old Sow?",
        url: "https://oceanservice.noaa.gov/facts/old-sow.html",
        note: "Original question; NOAA's identification. Diameter and drop figures are omitted. The page records folklore about the name.",
      },
    },
    {
      key: "sea-upwelling",
      question: "In the ocean, what is upwelling?",
      answer: "Deep, cold, nutrient-rich water rising to replace surface water blown away.",
      source: {
        title: "NOAA National Ocean Service — What is upwelling?",
        url: "https://oceanservice.noaa.gov/facts/upwelling.html",
        note: "Original question; NOAA's process description. The reverse process is downwelling.",
      },
    },
    {
      key: "sea-turbidity-current",
      question: "What is a turbidity current on the seafloor?",
      answer: "A rapid downhill avalanche of water made dense by sediment.",
      source: {
        title: "NOAA National Ocean Service — What is a turbidity current?",
        url: "https://oceanservice.noaa.gov/facts/turbidity.html",
        note: "Original question; NOAA's density-flow definition. Earthquakes and collapsing slopes can start one.",
      },
    },
    {
      key: "sea-totten-beacons",
      question: "What were the Totten Beacons in the Florida Keys?",
      answer: "Nineteenth-century iron poles, lettered A to P, that marked the reefs for sailors.",
      source: {
        title: "NOAA National Ocean Service — What are the Totten Beacons?",
        url: "https://oceanservice.noaa.gov/facts/totten-beacons.html",
        note: "Original question; NOAA's account of Lt. James Totten's iron signal poles. The earlier wooden poles and later GPS aids are omitted.",
      },
    },
    {
      key: "sea-rogue-wave",
      question: "What makes a wave a 'rogue wave' to scientists?",
      answer: "It is more than twice as tall as the waves around it, and arrives without warning.",
      source: {
        title: "NOAA National Ocean Service — What is a rogue wave?",
        url: "https://oceanservice.noaa.gov/facts/roguewaves.html",
        note: "Original question; NOAA's 'greater than twice the size of surrounding waves' criterion, plus unpredictability. Specific measured heights are omitted.",
      },
    },
    {
      key: "sea-foam",
      question: "What is sea foam mostly made from?",
      answer: "Dissolved organic matter churned into bubbles by wind and waves.",
      source: {
        title: "NOAA National Ocean Service — What is sea foam?",
        url: "https://oceanservice.noaa.gov/facts/seafoam.html",
        note: "Original question; NOAA's formation mechanism. Harmful-algal-bloom health effects are omitted from the answer.",
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
      key: "sea-dead-zone",
      question: "What is a marine 'dead zone'?",
      answer: "Water so low in oxygen that most animals die or leave.",
      source: {
        title: "NOAA National Ocean Service — What is a dead zone?",
        url: "https://oceanservice.noaa.gov/facts/deadzone.html",
        note: "Original question; NOAA's hypoxia definition. Year-specific Gulf area figures are omitted. Nutrient pollution is a primary human cause.",
      },
    },
    {
      key: "sea-screaming-sixties",
      question: "What did sailors call the gales ten degrees south of the Furious Fifties?",
      answer: "The Screaming Sixties.",
      source: {
        title: "NOAA National Ocean Service — What are the Roaring Forties?",
        url: "https://oceanservice.noaa.gov/facts/roaring-forties.html",
        note: "Original question; NOAA's third nickname on the same Roaring Forties page.",
      },
    },
  ],
);
