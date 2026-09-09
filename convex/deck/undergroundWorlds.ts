import { definePack } from "./types";

export const undergroundWorlds = definePack(
  {
    key: "underground-worlds",
    title: "Underground worlds",
    blurb:
      "Hidden cities, improbable cave life, and discoveries made far beneath ordinary streets.",
    category: "Underground worlds",
    sort: 290,
  },
  [
    {
      key: "underground-derinkuyu-air",
      question:
        "How did settlements such as Derinkuyu keep their buried refuges supplied while residents hid from attackers?",
      answer: "Networks of air shafts and water channels served the rooms cut deep into the rock.",
      source: {
        title:
          "National Geographic — Massive Underground City Found in Cappadocia Region of Turkey",
        url: "https://www.nationalgeographic.com/history/article/150325-underground-city-cappadocia-turkey-archaeology",
        note: "The article compares the Nevsehir complex with Derinkuyu, describing self-sustaining underground settlements with air shafts and water channels used as refuges.",
      },
    },
    {
      key: "underground-cappadocian-doors",
      question:
        "How could people in Cappadocia shut off a passage to their hidden settlement when danger arrived?",
      answer: "They blocked it with a large round stone door.",
      source: {
        title:
          "National Geographic — Massive Underground City Found in Cappadocia Region of Turkey",
        url: "https://www.nationalgeographic.com/history/article/150325-underground-city-cappadocia-turkey-archaeology",
        note: "The article describes Cappadocians retreating with livestock and supplies and blocking access tunnels with round stone doors until the threat passed.",
      },
    },
    {
      key: "underground-nevsehir-linseed",
      question:
        "What were the installations called 'bezirhane' doing in the settlement beneath Nevsehir Castle?",
      answer: "Pressing linseed to make lamp oil for lighting the underground rooms.",
      source: {
        title:
          "National Geographic — Massive Underground City Found in Cappadocia Region of Turkey",
        url: "https://www.nationalgeographic.com/history/article/150325-underground-city-cappadocia-turkey-archaeology",
        note: "The 2014 discoveries included living spaces, kitchens, wineries, chapels, and bezirhane, explicitly identified as linseed presses producing lamp oil.",
      },
    },
    {
      key: "underground-wieliczka-sculptures",
      question:
        "What are many of the chapels and statues inside Poland's Wieliczka and Bochnia mines carved from?",
      answer: "The rock salt being mined there.",
      source: {
        title: "UNESCO World Heritage Centre — Wieliczka and Bochnia Royal Salt Mines",
        url: "https://whc.unesco.org/en/list/32/",
        note: "UNESCO describes underground chapels, statues, and decorative elements sculpted into rock salt within both mines.",
      },
    },
    {
      key: "underground-naica-material",
      question:
        "What mineral forms the enormous translucent beams discovered beneath Naica, Mexico, in 2000?",
      answer:
        "Gypsum, in its transparent selenite form; some crystals reach roughly eleven meters long.",
      source: {
        title: "National Geographic — Giant Crystal Cave's Mystery Solved",
        url: "https://www.nationalgeographic.com/science/article/giant-crystal-cave-mexico-mystery-solved",
        note: "The cave discovered by miners in 2000 contains gypsum beams up to 11 meters long; the article identifies them as selenite gypsum crystals.",
      },
    },
    {
      key: "underground-naica-growth",
      question:
        "What conditions allowed Naica's giant crystals to grow instead of producing a mass of much smaller ones?",
      answer:
        "They remained submerged in mineral-rich water held near 58°C for an immense span of time.",
      source: {
        title: "National Geographic — Giant Crystal Cave's Mystery Solved",
        url: "https://www.nationalgeographic.com/science/article/giant-crystal-cave-mexico-mystery-solved",
        note: "The reported research attributes the crystals to stable temperatures just below the anhydrite-gypsum transition around 58°C, sustained for hundreds of thousands of years.",
      },
    },
    {
      key: "underground-movile-food-web",
      question:
        "What supports the food web in Romania's Movile Cave without sunlight or a regular supply of surface food?",
      answer:
        "Microbes turn chemicals such as hydrogen sulfide and methane into organic matter through chemosynthesis.",
      source: {
        title: "UNESCO World Heritage Centre — Movile Cave tentative-list submission",
        url: "https://whc.unesco.org/en/tentativelists/6761/",
        note: "Romania's 2024 submission describes the ecosystem's dependence on in-situ chemosynthesis, with sulfur oxidizers and methane-using microbes as primary producers.",
      },
    },
    {
      key: "underground-movile-floating-mats",
      question:
        "What holds thick microbial films afloat in some of Movile Cave's enclosed water chambers?",
      answer: "Bubbles of methane beneath the films.",
      source: {
        title: "UNESCO World Heritage Centre — Movile Cave tentative-list submission",
        url: "https://whc.unesco.org/en/tentativelists/6761/",
        note: "The Biotopes section describes microbial pellicles up to two centimeters thick in the air bells, kept afloat by methane bubbles.",
      },
    },
    {
      key: "underground-son-doong-jungle",
      question:
        "What grows in the area explorers nicknamed the 'Garden of Edam' inside Vietnam's Son Doong?",
      answer:
        "A jungle with tall trees and vines, fed by sunlight entering through a collapsed roof.",
      source: {
        title: "National Geographic — Conquering an Infinite Cave",
        url: "https://www.nationalgeographic.com/magazine/article/vietnam-cave",
        note: "The expedition account describes a roof-collapse skylight above the Garden of Edam, with hundred-foot trees, lianas, and other vegetation beneath it.",
      },
    },
    {
      key: "underground-reka-canyon",
      question: "What happens to Slovenia's Reka River when it reaches the Skocjan system?",
      answer:
        "It disappears underground and runs through an enormous canyon with rapids and waterfalls.",
      source: {
        title: "UNESCO World Heritage Centre — Skocjan Caves",
        url: "https://whc.unesco.org/en/list/390/",
        note: "UNESCO describes the river suddenly entering the karst underground and passing through a channel up to 150 meters high and over 120 meters wide.",
      },
    },
    {
      key: "underground-drained-lava",
      question:
        "How can a stream of molten rock leave behind a tunnel large enough for people to walk through?",
      answer:
        "Its surface hardens into a roof while the still-liquid lava underneath drains downhill.",
      source: {
        title: "USGS — Lava tubes at Lava Beds National Monument",
        url: "https://www.usgs.gov/volcanoes/medicine-lake/science/lava-tubes-lava-beds-national-monument",
        note: "USGS explains how a congealed roof insulates flowing lava and how interrupted supply lets the remaining molten material drain, leaving an open lava-tube cave.",
      },
    },
    {
      key: "underground-reversed-rock-ages",
      question:
        "Why can older lava lie above younger lava inside a tube at California's Medicine Lake volcano?",
      answer:
        "The roof cooled first; later pulses of lava flowed beneath it and formed the younger floor.",
      source: {
        title: "USGS — Exploring lava tubes at Medicine Lake volcano",
        url: "https://www.usgs.gov/observatories/calvo/news/exploring-lava-tubes-medicine-lake-volcano",
        note: "USGS identifies lava tubes as an unusual reversal of normal superposition: chilled early lava forms the roof, while final pulses form the floor below.",
      },
    },
    {
      key: "underground-helictites",
      question:
        "What makes cave formations called helictites look as if they are ignoring gravity?",
      answer:
        "They twist and branch in different directions as mineral-rich water moves through tiny internal channels.",
      source: {
        title: "National Speleological Society — Helictites",
        url: "https://caves.org/virtualcave/helictites/",
        note: "The Virtual Cave entry describes twisted calcite or aragonite growth fed through central capillary channels by hydrostatic and capillary pressure.",
      },
    },
    {
      key: "underground-snottites",
      question:
        "What are the dangling formations explorers call 'snottites' in Mexico's Cueva de Villa Luz?",
      answer: "Living microbial colonies that resemble mucus and drip extremely acidic liquid.",
      source: {
        title:
          "National Speleological Society — Cueva de Villa Luz: Reconnaissance Study of an Active Sulfur Spring Cave and Ecosystem",
        url: "https://www.caves.org/wp-content/uploads/Publications/JCKS/v61/v61n1-Hose.pdf",
        note: "Hose and Pisarowicz's 1999 Journal of Cave and Karst Studies paper identifies hanging microbial veils and sulfuric-acid droplets with very low pH.",
      },
    },
    {
      key: "underground-pearl-without-oyster",
      question: "How can a shallow cave pool produce 'pearls' without any shellfish?",
      answer: "Calcite builds up in layers around a small core such as sand or a fragment of bone.",
      source: {
        title: "National Speleological Society — Cave Pearls",
        url: "https://caves.org/virtualcave/cave-pearls/",
        note: "The entry describes concentric concretions formed as dripping water loses carbon dioxide and deposits calcite around sand, bone, or fragments of other formations.",
      },
    },
    {
      key: "underground-floating-minerals",
      question: "What unexpected material can form a floating skin on a still cave pool?",
      answer: "A thin sheet of calcite, known as a cave raft.",
      source: {
        title: "National Speleological Society — Rafts",
        url: "https://caves.org/virtualcave/rafts/",
        note: "The entry describes mineral-laden drips depositing thin calcite films on a pool surface; the films float and may sink as they become thicker.",
      },
    },
    {
      key: "underground-carlsbad-acid",
      question:
        "What helped hollow out Carlsbad Caverns from below rather than simply seeping down from the surface?",
      answer: "Sulfuric acid formed from hydrogen sulfide rising out of nearby oil reservoirs.",
      source: {
        title: "USGS — Geology of Carlsbad Caverns National Park",
        url: "https://www.usgs.gov/geology-and-ecology-of-national-parks/geology-carlsbad-caverns-national-park",
        note: "USGS describes hydrogen-sulfide-rich water rising from Permian Basin oil reservoirs and forming sulfuric acid that dissolved limestone at the water table.",
      },
    },
    {
      key: "underground-puerto-princesa-tides",
      question:
        "What ocean phenomenon affects the lower reaches of Palawan's Puerto-Princesa river, even inside its cavern?",
      answer: "The tides: the underground river flows directly into the sea.",
      source: {
        title: "UNESCO World Heritage Centre — Puerto-Princesa Subterranean River National Park",
        url: "https://whc.unesco.org/en/list/652/",
        note: "UNESCO identifies the river's direct emergence into the sea and the tidal influence on its brackish lower portion as distinguishing features.",
      },
    },
    {
      key: "underground-hypogeum-imitation",
      question: "What is deceptive about some doorways and roofs in Malta's Hal Saflieni Hypogeum?",
      answer:
        "They imitate assembled temple architecture but were carved directly out of the surrounding rock.",
      source: {
        title: "UNESCO World Heritage Centre — Hal Saflieni Hypogeum",
        url: "https://whc.unesco.org/en/list/130/",
        note: "UNESCO describes false bays inspired by trilithon doorways and carved, overhanging ceiling rings imitating above-ground corbelled masonry.",
      },
    },
    {
      key: "underground-maresha-pigeons",
      question:
        "What were the many small niches cut into certain chambers beneath ancient Maresha used for?",
      answer: "Raising pigeons in underground dovecotes, protected from predators.",
      source: {
        title:
          "UNESCO World Heritage Centre — The Caves of Maresha and Bet Guvrin: ICOMOS evaluation",
        url: "https://whc.unesco.org/document/152502",
        note: "The evaluation records 85 pigeon-raising sites, with niches hollowed into cave walls and underground locations offering protection against predators.",
      },
    },
    {
      key: "underground-naours-graffiti",
      question:
        "What personal traces of the First World War cover the walls of the hidden city at Naours, France?",
      answer:
        "Thousands of graffiti marks left by visiting soldiers from several Allied countries.",
      source: {
        title: "National Geographic — 9 of Europe's underground marvels",
        url: "https://www.nationalgeographic.com/travel/article/underground-sites",
        note: "The Naours section describes thousands of marks by French, English, Scottish, Irish, Australian, and American soldiers in the subterranean refuge.",
      },
    },
    {
      key: "underground-edinburgh-street",
      question:
        "What can visitors walk through beneath Edinburgh's Royal Mile at Mary King's Close?",
      answer:
        "A preserved seventeenth-century street with rooms, courtyards, and cobbled alleyways.",
      source: {
        title: "National Geographic — 9 of Europe's underground marvels",
        url: "https://www.nationalgeographic.com/travel/article/underground-sites",
        note: "The Edinburgh section identifies the buried street and its excavated alleyways, courtyards, and rooms. The card makes no claim that residents were sealed in during a plague.",
      },
    },
    {
      key: "underground-coudenberg-street",
      question: "Why does part of a medieval Brussels street now have a ceiling of earth?",
      answer:
        "The fire-damaged Coudenberg palace district was leveled and built over, burying the old street.",
      source: {
        title: "National Geographic — 9 of Europe's underground marvels",
        url: "https://www.nationalgeographic.com/travel/article/underground-sites",
        note: "The article describes the palace's 1731 fire, abandonment and leveling, and a surviving medieval street whose present dirt ceiling was once open sky.",
      },
    },
    {
      key: "underground-basilica-head",
      question:
        "What recognizable figure appears upside down in carved stone inside Istanbul's Basilica Cistern?",
      answer: "An enormous carved head of Medusa positioned upside down.",
      source: {
        title: "National Geographic — 9 of Europe's underground marvels",
        url: "https://www.nationalgeographic.com/travel/article/underground-sites",
        note: "The Basilica Cistern section describes its many columns and an elaborate upside-down Medusa head. The card does not assign a speculative reason for its orientation.",
      },
    },
    {
      key: "underground-santa-tecla-lasers",
      question:
        "What modern tool revealed ancient painted apostles beneath mineral deposits in Rome's Santa Tecla catacombs?",
      answer: "Lasers, which removed the calcium-carbonate crust covering the paintings.",
      source: {
        title: "National Geographic — Pictures: Oldest Apostle Images Revealed by Laser",
        url: "https://www.nationalgeographic.com/history/article/100624-oldest-apostle-christian-icon-religion-pictures",
        note: "The report identifies fourth-century paintings of Paul, Peter, John, and Andrew, exposed by laser removal of accumulated calcium carbonate.",
      },
    },
    {
      key: "underground-saqqara-puppies",
      question:
        "What animals make up most of the millions of mummies in one tunnel complex beneath Saqqara?",
      answer: "Dogs, including vast numbers of very young puppies.",
      source: {
        title: "National Geographic — Pictures: Millions of Puppy Mummies in Egypt Labyrinth",
        url: "https://www.nationalgeographic.com/animals/article/110406-egypt-puppy-mummies-animals-dogs-science-catacomb-mummified",
        note: "The report describes roughly eight million animal mummies in the Dog Catacombs, predominantly dogs, with many killed for mummification when extremely young.",
      },
    },
    {
      key: "underground-chehrabad-mummies",
      question:
        "Why did miners killed in ancient collapses at Iran's Chehrabad mine become naturally mummified?",
      answer: "The surrounding salt drew water from their bodies and preserved them.",
      source: {
        title: "National Geographic — These mummies were made by accident?",
        url: "https://www.nationalgeographic.com/science/article/natural-mummies-accident",
        note: "The Salt section describes repeated mine collapses at Chehrabad and explains how salty rock dehydrated the trapped miners' remains.",
      },
    },
    {
      key: "underground-timmins-water",
      question:
        "What did researchers collect deep in a mine near Timmins, Ontario, that had apparently been isolated for over a billion years?",
      answer: "Water trapped in the surrounding rock, dated using its dissolved noble gases.",
      source: {
        title: "National Geographic — Billion-Year-Old Water Preserved in Canadian Mine",
        url: "https://www.nationalgeographic.com/history/article/130517-billion-year-old-water-mine-canada-ancient-microbes-science",
        note: "Water collected about 2.4 kilometers underground produced isolation-age estimates of 1.1–2.6 billion years from helium, neon, argon, and xenon measurements.",
      },
    },
    {
      key: "underground-beatrix-mephisto",
      question:
        "What living discovery from South Africa's Beatrix gold mine was named after Mephistopheles?",
      answer: "A microscopic roundworm found in water about 1.3 kilometers below the surface.",
      source: {
        title: "National Geographic — Meet Mephisto, the worm that rules the underworld",
        url: "https://www.nationalgeographic.com/science/article/meet-mephisto-the-worm-that-rules-the-underworld",
        note: "Ed Yong's account identifies Halicephalobus mephisto at 1.3 kilometers in Beatrix; the 3.6-kilometer discovery discussed separately was a different nematode.",
      },
    },
    {
      key: "underground-mammoth-sanatorium",
      question: "What medical institution once operated inside Kentucky's Mammoth Cave?",
      answer: "A tuberculosis sanatorium.",
      source: {
        title: "National Geographic — Everything you should know about Mammoth Cave National Park",
        url: "https://www.nationalgeographic.com/travel/national-parks/article/mammoth-cave-national-park",
        note: "The human-history section records Mammoth Cave's use as a tuberculosis sanatorium, as well as a church and community gathering place; no claim of successful treatment is made.",
      },
    },
  ],
);
