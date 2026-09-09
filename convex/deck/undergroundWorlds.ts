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
      key: "underground-wind-cave-hat",
      question:
        "According to Wind Cave's early history, why did the Bingham brothers' hat demonstration go wrong on their return visit?",
      answer:
        "The cave sucked the hat inside instead of blowing it away: the airflow had reversed.",
      source: {
        title: "National Park Service — Birth of a National Park",
        url: "https://www.nps.gov/wica/learn/historyculture/birth-of-a-national-park-a-national-park-is-created.htm",
        note: "The NPS recounts the legend that the cave blew off Tom Bingham's hat in 1881; when the brothers returned with friends, reversed airflow sucked a hat inside.",
      },
    },
    {
      key: "underground-cappadocian-doors",
      question:
        "How could residents of Cappadocia close their underground refuges without hanging doors on hinges?",
      answer: "They rolled large, round stone doors across the access tunnels.",
      source: {
        title:
          "National Geographic — Massive Underground City Found in Cappadocia Region of Turkey",
        url: "https://www.nationalgeographic.com/history/article/150325-underground-city-cappadocia-turkey-archaeology",
        note: "The article describes Cappadocians retreating with livestock and supplies and blocking access tunnels with round stone doors until the threat passed.",
      },
    },
    {
      key: "underground-nevsehir-linseed",
      question: "Why did the buried settlement beneath Nevsehir Castle need presses for linseed?",
      answer: "To squeeze out oil for the lamps that lit its underground rooms.",
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
        "What did generations of miners leave behind at Wieliczka and Bochnia besides empty tunnels?",
      answer: "Underground chapels and statues, carved out of the rock salt they were mining.",
      source: {
        title: "UNESCO World Heritage Centre — Wieliczka and Bochnia Royal Salt Mines",
        url: "https://whc.unesco.org/en/list/32/",
        note: "UNESCO describes underground chapels, statues, and decorative elements sculpted into rock salt within both mines.",
      },
    },
    {
      key: "underground-naica-material",
      question: "What filled a cavern that miners broke into beneath Naica, Mexico, in 2000?",
      answer: "Transparent gypsum crystals like enormous beams, some roughly eleven meters long.",
      source: {
        title: "National Geographic — Giant Crystal Cave's Mystery Solved",
        url: "https://www.nationalgeographic.com/science/article/giant-crystal-cave-mexico-mystery-solved",
        note: "The cave discovered by miners in 2000 contains gypsum beams up to 11 meters long; the article identifies them as selenite gypsum crystals.",
      },
    },
    {
      key: "underground-mineral-balloons",
      question:
        "What surprisingly delicate shape can minerals take as they grow out of a cave wall?",
      answer: "Tiny gas-filled balloons, with thin mineral walls instead of rubber.",
      source: {
        title: "National Speleological Society — Balloons",
        url: "https://caves.org/virtualcave/ballons/",
        note: "The Virtual Cave describes rare small gas-filled pouches, usually of hydromagnesite. Their exact origin is uncertain; expansion of soft mineral material is a proposed mechanism.",
      },
    },
    {
      key: "underground-movile-food-web",
      question: "Where does the food chain begin in Romania's sealed-off Movile Cave?",
      answer:
        "With microbes that turn gases such as methane and poisonous hydrogen sulfide into food, without sunlight.",
      source: {
        title: "UNESCO World Heritage Centre — Movile Cave tentative-list submission",
        url: "https://whc.unesco.org/en/tentativelists/6761/",
        note: "Romania's 2024 submission describes the ecosystem's dependence on in-situ chemosynthesis, with sulfur oxidizers and methane-using microbes as primary producers.",
      },
    },
    {
      key: "underground-movile-floating-mats",
      question:
        "How do Movile Cave's microbes manage to create floating feeding grounds on the water?",
      answer: "Their thick films ride on bubbles of methane trapped underneath.",
      source: {
        title: "UNESCO World Heritage Centre — Movile Cave tentative-list submission",
        url: "https://whc.unesco.org/en/tentativelists/6761/",
        note: "The Biotopes section describes microbial pellicles up to two centimeters thick in the air bells, kept afloat by methane bubbles.",
      },
    },
    {
      key: "underground-son-doong-jungle",
      question:
        "What did explorers find thriving beneath a break in the roof of Vietnam's Son Doong cave?",
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
      question:
        "What landscape does Slovenia's Reka River run through after it vanishes below ground?",
      answer: "An enormous underground canyon, complete with rapids and waterfalls.",
      source: {
        title: "UNESCO World Heritage Centre — Skocjan Caves",
        url: "https://whc.unesco.org/en/list/390/",
        note: "UNESCO describes the river suddenly entering the karst underground and passing through a channel up to 150 meters high and over 120 meters wide.",
      },
    },
    {
      key: "underground-drained-lava",
      question:
        "What once filled the walkable cave passages around northern California's Medicine Lake?",
      answer:
        "Rivers of molten lava, which drained away after their surfaces hardened into tunnel roofs.",
      source: {
        title: "USGS — Lava tubes at Lava Beds National Monument",
        url: "https://www.usgs.gov/volcanoes/medicine-lake/science/lava-tubes-lava-beds-national-monument",
        note: "USGS explains how a congealed roof insulates flowing lava and how interrupted supply lets the remaining molten material drain, leaving an open lava-tube cave.",
      },
    },
    {
      key: "underground-reversed-rock-ages",
      question:
        "What unusual ordering of rocks can geologists find inside a Medicine Lake lava tube?",
      answer:
        "Older rock lies above younger rock, reversing the usual order: the tunnel roof hardened before the last lava formed its floor.",
      source: {
        title: "USGS — Exploring lava tubes at Medicine Lake volcano",
        url: "https://www.usgs.gov/observatories/calvo/news/exploring-lava-tubes-medicine-lake-volcano",
        note: "USGS identifies lava tubes as an unusual reversal of normal superposition: chilled early lava forms the roof, while final pulses form the floor below.",
      },
    },
    {
      key: "underground-helictites",
      question: "What can the tiny water channels inside some cave formations allow them to do?",
      answer: "Grow sideways or even upward, forming twisting branches called helictites.",
      source: {
        title: "National Speleological Society — Helictites",
        url: "https://caves.org/virtualcave/helictites/",
        note: "The Virtual Cave entry describes twisted calcite or aragonite growth fed through central capillary channels by hydrostatic and capillary pressure.",
      },
    },
    {
      key: "underground-snottites",
      question:
        "What is startling about the apparently dripping stalactites in Mexico's Cueva de Villa Luz?",
      answer:
        "Some are living colonies of microbes, dangling like mucus and dripping highly acidic liquid.",
      source: {
        title:
          "National Speleological Society — Cueva de Villa Luz: Reconnaissance Study of an Active Sulfur Spring Cave and Ecosystem",
        url: "https://www.caves.org/wp-content/uploads/Publications/JCKS/v61/v61n1-Hose.pdf",
        note: "Hose and Pisarowicz's 1999 Journal of Cave and Karst Studies paper identifies hanging microbial veils and sulfuric-acid droplets with very low pH.",
      },
    },
    {
      key: "underground-pearl-without-oyster",
      question: "What can a grain of sand or scrap of bone become in a shallow cave pool?",
      answer:
        "A cave pearl: layers of calcite grow around it like the layers of a pearl, without any oyster.",
      source: {
        title: "National Speleological Society — Cave Pearls",
        url: "https://caves.org/virtualcave/cave-pearls/",
        note: "The entry describes concentric concretions formed as dripping water loses carbon dioxide and deposits calcite around sand, bone, or fragments of other formations.",
      },
    },
    {
      key: "underground-floating-minerals",
      question: "What unexpected material can form a floating skin on a still cave pool?",
      answer: "Stone: a wafer-thin sheet of calcite floats on the water until it grows too heavy.",
      source: {
        title: "National Speleological Society — Rafts",
        url: "https://caves.org/virtualcave/rafts/",
        note: "The entry describes mineral-laden drips depositing thin calcite films on a pool surface; the films float and may sink as they become thicker.",
      },
    },
    {
      key: "underground-carlsbad-acid",
      question:
        "What unlikely connection helped create Carlsbad Caverns above New Mexico's oil country?",
      answer: "Gas rising from oil reservoirs formed sulfuric acid, which ate away the limestone.",
      source: {
        title: "USGS — Geology of Carlsbad Caverns National Park",
        url: "https://www.usgs.gov/geology-and-ecology-of-national-parks/geology-carlsbad-caverns-national-park",
        note: "USGS describes hydrogen-sulfide-rich water rising from Permian Basin oil reservoirs and forming sulfuric acid that dissolved limestone at the water table.",
      },
    },
    {
      key: "underground-turda-ferris-wheel",
      question:
        "What ride offers visitors a panoramic view inside Romania's former Turda salt mine?",
      answer: "A Ferris wheel, twenty meters high and operating entirely underground.",
      source: {
        title: "Salina Turda — Salt Mine: Amusement Park",
        url: "https://www.salinaturda.eu/en/locatie/salina-amusement-park/",
        note: "The mine operator lists a 20-meter panoramic wheel operating underground among its attractions. The card does not repeat the site's worldwide uniqueness claim.",
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
        "What unexpected wartime collection survives on the walls of the hidden city at Naours, France?",
      answer:
        "Thousands of graffiti marks left by visiting First World War soldiers from Allied countries.",
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
        "What strange bit of reused sculpture appears among the columns of Istanbul's Basilica Cistern?",
      answer: "An enormous head of Medusa, turned upside down.",
      source: {
        title: "National Geographic — 9 of Europe's underground marvels",
        url: "https://www.nationalgeographic.com/travel/article/underground-sites",
        note: "The Basilica Cistern section describes its many columns and an elaborate upside-down Medusa head. The card does not assign a speculative reason for its orientation.",
      },
    },
    {
      key: "underground-santa-tecla-lasers",
      question:
        "How did conservators uncover ancient painted apostles in Rome's Santa Tecla catacombs without scraping them?",
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
      question: "What unlikely medical establishment once occupied Kentucky's Mammoth Cave?",
      answer: "An underground tuberculosis sanatorium.",
      source: {
        title: "National Geographic — Everything you should know about Mammoth Cave National Park",
        url: "https://www.nationalgeographic.com/travel/national-parks/article/mammoth-cave-national-park",
        note: "The human-history section records Mammoth Cave's use as a tuberculosis sanatorium, as well as a church and community gathering place; no claim of successful treatment is made.",
      },
    },
  ],
);
