import { definePack } from "./types";

export const geologicalWonders = definePack(
  {
    key: "geological-wonders",
    title: "Geological wonders",
    blurb:
      "Stones that misbehave, landscapes with hidden histories, and a planet that never quite sits still.",
    category: "Geological wonders",
    sort: 410,
  },
  [
    {
      key: "geology-parnell-funnel",
      question:
        "What was Thomas Parnell’s funnel experiment, begun in 1927, intended to demonstrate?",
      answer:
        "That pitch, which can shatter under a hammer, still flows as an extraordinarily slow liquid.",
      source: {
        title:
          "University of Queensland, School of Mathematics and Physics — Pitch Drop experiment",
        url: "https://smp.uq.edu.au/pitch-drop-experiment",
        note: "The university describes brittle pitch as a fluid roughly 100 billion times more viscous than water. Parnell filled the funnel in 1927 and opened its stem in 1930.",
      },
    },
    {
      key: "geology-oklo-reactor",
      question: "What had happened naturally inside the rocks at Oklo long before humans existed?",
      answer:
        "Self-sustaining nuclear fission: the rocks had operated as natural nuclear reactors about two billion years ago.",
      source: {
        title:
          "International Atomic Energy Agency — Meet Oklo, the Earth’s Two-billion-year-old only Known Natural Nuclear Reactor",
        url: "https://www.iaea.org/newscenter/news/meet-oklo-the-earths-two-billion-year-old-only-known-natural-nuclear-reactor",
        note: "The IAEA describes the 1972 discovery of depleted uranium-235 and fission products in Gabonese ore, establishing natural nuclear chain reactions more than two billion years earlier.",
      },
    },
    {
      key: "geology-lengai-disguise",
      question:
        "Why can fresh lava at Tanzania's Ol Doinyo Lengai look like a stream of runny mud in daylight?",
      answer:
        "Its unusual carbonate-rich lava erupts too cool to glow visibly by day; it flows black or brown instead.",
      source: {
        title: "USGS — Volcano Watch: World's Coolest Lava is in Africa",
        url: "https://www.usgs.gov/news/volcano-watch-worlds-coolest-lava-africa",
        note: "USGS describes carbonatite lava erupting at 500–600°C, appearing black or brown like runny mud in daylight, and glowing dull orange or red only at night.",
      },
    },
    {
      key: "geology-glass-thunderbolt",
      question: "What made the branching black glass tubes buried in Colorado's Great Sand Dunes?",
      answer:
        "Lightning melted the sand around its path, leaving hollow glass traces called fulgurites.",
      source: {
        title: "National Park Service — Fulgurites: The Power of Lightning",
        url: "https://www.nps.gov/articles/grsa-fulgurites.htm",
        note: "The park explains that lightning vaporizes sand along the bolt's path and melts the surrounding sand into blackish glass tubes. The prompt avoids 'fulgurite', whose root means lightning.",
      },
    },
    {
      key: "geology-dallol-life-limits",
      question:
        "What could fool the eye in Dallol's most hostile hot pools, according to a 2019 study?",
      answer:
        "Nonliving mineral shapes resembling microbes: chemistry had made tiny cell-like objects without any organism.",
      source: {
        title:
          "Nature Ecology & Evolution — Hyperdiverse archaea near life limits at the polyextreme geothermal Dallol area",
        url: "https://www.nature.com/articles/s41559-019-1005-0",
        note: "The study's abstract reports both silica-encrusted cells and abiotic biomorphs of varied chemistry, warning against identifying life from shape alone.",
      },
    },
    {
      key: "geology-earth-background-hum",
      question:
        "What keeps the solid Earth faintly vibrating even when no major earthquake is occurring?",
      answer:
        "Ocean waves keep the planet humming, driving vibrations far too low for human ears to hear.",
      source: {
        title: "Nature — The Earth’s ‘hum’ is driven by ocean waves over the continental shelves",
        url: "https://www.nature.com/articles/nature05536",
        note: "Webb’s 2007 study models ocean-wave excitation of the seismic normal modes near 10 mHz and explains the background hum in the absence of large earthquakes.",
      },
    },
    {
      key: "geology-ulexite-image",
      question:
        "What can a polished piece of ulexite appear to do when placed over printed lettering?",
      answer:
        "Lift the lettering’s image onto its upper surface, as its natural fibres guide light like fibre-optic cables.",
      source: {
        title: "Smithsonian Q?rius — Borate Mineral Ulexite",
        url: "https://qrius.si.edu/browse/object/10018792",
        note: "The mineral-light discussion describes parallel ulexite fibres conducting light by total internal reflection and apparently projecting an image onto the polished surface.",
      },
    },
    {
      key: "geology-iceland-spar-double",
      question: "What happens when you read a word through a clear piece of Iceland spar?",
      answer: "You see it twice: the crystal splits the light into two images.",
      source: {
        title: "Smithsonian Q?rius — Borate Mineral Ulexite: Minerals and Light",
        url: "https://qrius.si.edu/browse/object/10018792",
        note: "The shared mineral-light text explicitly identifies Iceland spar as transparent calcite and explains that double refraction makes one object look like two.",
      },
    },
    {
      key: "geology-flexible-sandstone",
      question:
        "What can a thin slab of itacolumite do that would be unexpected of a piece of sandstone?",
      answer:
        "Bend without breaking: its interlocking quartz grains have enough wiggle room to let the slab flex.",
      source: {
        title: "Geological Society of London — Itacolumites: the flexible sandstones",
        url: "https://doi.org/10.1144/gsl.qjeg.1980.013.02.06",
        note: "Dusseault’s 1980 paper describes interdigitated quartz grains with open contacts, allowing movement over a limited arc before the sandstone locks.",
      },
    },
    {
      key: "geology-floating-pumice",
      question:
        "What did molten Kīlauea lava do when researchers plunged a blob into a bucket of water?",
      answer:
        "It puffed up with steam into a foamy rock that could briefly float instead of immediately sinking.",
      source: {
        title: "USGS — Volcano Watch: Rocks float briefly where lava meets the sea",
        url: "https://www.usgs.gov/news/volcano-watch-rocks-float-briefly-where-lava-meets-sea",
        note: "USGS describes an experiment dropping molten lava into water: the blob puffs up as water enters and turns to steam, making gas pockets that let the newly cooled rock float until it cools further and floods.",
      },
    },
    {
      key: "geology-golden-glass-strands",
      question:
        "What fragile material can a Hawaiian eruption scatter in long, hairlike golden strands?",
      answer:
        "Glass: jets of lava stretch into fine fibres that cool in midair, known as Pele's hair.",
      source: {
        title: "USGS — Volcano Watch: Pele’s hairs, a beautiful hazard on the Island of Hawaiʻi",
        url: "https://www.usgs.gov/observatories/hvo/news/volcano-watch-peles-hairs-a-beautiful-hazard-island-hawaii",
        note: "USGS describes thin connections between separating blobs of fluid lava being stretched and rapidly chilled into glass; the resulting strands are hazardous and easily splinter.",
      },
    },
    {
      key: "geology-hope-red-afterglow",
      question:
        "What party trick can the Hope Diamond perform after an ultraviolet lamp is switched off?",
      answer: "The blue diamond keeps glowing bright red in the dark.",
      source: {
        title:
          "Smithsonian Institution — Bombarded with ultraviolet light, the blue Hope Diamond glows red",
        url: "https://www.si.edu/stories/blue-hope-diamond-glows-red",
        note: "The account describes Jeffrey Post’s spectroscopic study and states that the Hope’s characteristic red glow continues for several minutes after the ultraviolet source is turned off.",
      },
    },
    {
      key: "geology-pyrite-real-treasure",
      question:
        "What valuable substance has been found concealed inside apparently ordinary pyrite crystals?",
      answer:
        "Real gold: the mineral nicknamed fool's gold can contain gold particles too small to see.",
      source: {
        title:
          "Communications Earth & Environment — Hyperenrichment of gold in pyrite induced by solid-state transportation",
        url: "https://www.nature.com/articles/s43247-022-00628-x",
        note: "The 2022 study documents gold nanoparticles and veinlets within deformed pyrite and investigates how solid-state transport can concentrate the genuine gold.",
      },
    },
    {
      key: "geology-diamond-hidden-water",
      question:
        "What unexpected substance was locked inside a mineral trapped in a Brazilian diamond from deep underground?",
      answer:
        "Water, held within the mineral's crystal structure rather than sloshing around as liquid.",
      source: {
        title:
          "Nature — Hydrous mantle transition zone indicated by ringwoodite included within diamond",
        url: "https://www.nature.com/articles/nature13080",
        note: "The 2014 paper identifies water-rich ringwoodite inside a Juína diamond, providing direct evidence of a hydrous transition zone at least locally, not a global liquid ocean.",
      },
    },
    {
      key: "geology-khatyrka-pattern",
      question:
        "What rule of ordinary crystals did a metallic grain in the Khatyrka meteorite refuse to follow?",
      answer:
        "Its atoms formed an orderly pattern that never repeated exactly: a natural quasicrystal.",
      source: {
        title: "Scientific Reports — Natural quasicrystal with decagonal symmetry",
        url: "https://www.nature.com/articles/srep09111",
        note: "The 2015 paper reports a natural aluminium-nickel-iron quasicrystal with tenfold symmetry and quasiperiodic atomic arrangements within its stacked layers.",
      },
    },
    {
      key: "geology-peigneur-drain",
      question: "Where did Louisiana's Lake Peigneur suddenly disappear to in November 1980?",
      answer:
        "Into a salt mine beneath its bed, sucking boats, trees and a drilling rig into the opening.",
      source: {
        title:
          "United Press International — Drilling rig breaks into salt mine cavity, draining lake",
        url: "https://www.upi.com/Archives/1980/11/21/Drilling-rig-breaks-into-salt-mine-cavity-draining-lake/6665343630800/",
        note: "The contemporary report describes the lake draining into a salt mine and pulling in equipment, trees and boats. The cause was under investigation, so the card does not assign fault for the breach.",
      },
    },
    {
      key: "geology-imilac-window",
      question:
        "What can a cut slice of Chile's Imilac meteorite resemble when held up to the light?",
      answer:
        "Stained glass: translucent yellow-green olivine crystals sit inside a framework of iron and nickel.",
      source: {
        title: "Natural History Museum — The Imilac meteorite: A gem as old as the solar system",
        url: "https://www.nhm.ac.uk/discover/imilac-meteorite-gem-as-old-solar-system.html",
        note: "The museum identifies the pallasite as iron, nickel metal and olivine and describes light shining through its green-yellow crystals. The card does not rely on disputed formation models.",
      },
    },
    {
      key: "geology-ijen-blue-flames",
      question: "What creates the electric-blue glow photographed at Kawah Ijen at night?",
      answer: "Burning sulfur-rich gases and liquid sulfur, not blue-coloured lava.",
      source: {
        title: "Smithsonian Magazine — Why Does This Indonesian Volcano Burn Bright Blue?",
        url: "https://www.smithsonianmag.com/science-nature/why-does-indonesian-volcano-burn-bright-blue-180949576/",
        note: "The article distinguishes ordinary-coloured lava from the blue flames of sulfur combustion and describes burning sulfur flowing down rock faces.",
      },
    },
    {
      key: "geology-nyos-hidden-gas",
      question: "What had quietly built up in Lake Nyos before its deadly 1986 release?",
      answer: "Dissolved carbon dioxide, which escaped from the deep water as a suffocating cloud.",
      source: {
        title: "USGS — The 21 August 1986 Lake Nyos gas disaster, Cameroon",
        url: "https://pubs.usgs.gov/publication/ofr8797",
        note: "The US scientific team’s final report investigates catastrophic release of stored carbon dioxide from Lake Nyos, distinguishing gas accumulation from a fresh magmatic eruption.",
      },
    },
    {
      key: "geology-piparo-eruption",
      question:
        "What burst out and buried houses at Piparo, Trinidad, during a sudden eruption in 1997?",
      answer: "Mud, driven upward by pressure rather than erupted as molten rock.",
      source: {
        title: "USGS — Volcano Watch: Here’s the dirty truth about mud volcanoes",
        url: "https://www.usgs.gov/news/volcano-watch-heres-dirty-truth-about-mud-volcanoes",
        note: "The article describes the 22 February 1997 Piparo eruption and explains pressure-driven eruptions of fluidized sediments, contrasting their cold or mildly warm mud with magma.",
      },
    },
    {
      key: "geology-tucson-pool",
      question:
        "What emptied water from a University of Arizona swimming pool in 1985 without anyone touching its drains?",
      answer:
        "An earthquake in Mexico, roughly 2,000 kilometres away, made the water slosh over the sides.",
      source: {
        title: "USGS — Cool Earthquake Facts",
        url: "https://www.usgs.gov/programs/earthquake-hazards/cool-earthquake-facts",
        note: "USGS states that the Tucson pool lost water through a seiche caused by the magnitude-8.1 Michoacán earthquake about 2,000 kilometres away.",
      },
    },
    {
      key: "geology-cascadia-japanese-clock",
      question:
        "What unexpected records helped scientists determine the evening hour of a huge North American event in January 1700?",
      answer:
        "Japanese records of the arriving tsunami, used to work backward to the time of the Cascadia earthquake.",
      source: {
        title: "USGS — Cool Earthquake Facts",
        url: "https://www.usgs.gov/programs/earthquake-hazards/cool-earthquake-facts",
        note: "The account explains the approximately 9 p.m. Pacific time on 26 January 1700 by working backward from the tsunami’s recorded arrival in Japan.",
      },
    },
    {
      key: "geology-pinnacles-separated",
      question:
        "What happened to the other half of the ancient volcano that formed California's Pinnacles?",
      answer:
        "It was carried nearly 200 miles away as the two sides of the San Andreas Fault moved apart.",
      source: {
        title: "USGS — Cool Earthquake Facts",
        url: "https://www.usgs.gov/programs/earthquake-hazards/cool-earthquake-facts",
        note: "USGS places Pinnacles 195 miles northwest of the volcano from which the fault separated it, based on matching 23-million-year-old volcanic rocks.",
      },
    },
    {
      key: "geology-mississippi-upstream",
      question:
        "What did the Mississippi River appear to do during the New Madrid earthquakes of 1811–1812?",
      answer:
        "Run backward: upheaval of the riverbed and huge upstream-moving waves gave the illusion of reversed flow.",
      source: {
        title: "USGS — Summary of 1811–1812 New Madrid Earthquakes Sequence",
        url: "https://www.usgs.gov/programs/earthquake-hazards/science/summary-1811-1812-new-madrid-earthquakes-sequence",
        note: "USGS explicitly describes local ground uplift and upstream-moving seiche waves giving the illusion that the river was flowing upstream; it does not claim the whole river permanently reversed.",
      },
    },
    {
      key: "geology-balanced-boulder-memory",
      question:
        "Why would earthquake researchers study a boulder that has spent thousands of years doing absolutely nothing?",
      answer:
        "If it is precariously balanced but still standing, past earthquakes cannot have shaken it hard enough to topple it.",
      source: {
        title: "USGS — Rocks in unusual positions hold secrets to northeastern U.S. earthquakes",
        url: "https://www.usgs.gov/news/science-snippet/rocks-unusual-positions-hold-secrets-northeastern-us-earthquakes",
        note: "The study combines the age of a precarious position with estimates of the shaking required to topple the rock to constrain past ground motion.",
      },
    },
    {
      key: "geology-slow-unfelt-slip",
      question: "What was unusual about the earthquake that shifted Kīlauea's coast in May 2012?",
      answer:
        "It took days to happen, slipping so gradually that it moved the coast without strong shaking.",
      source: {
        title: "USGS — Volcano Watch: Did you feel that earthquake? Probably not!",
        url: "https://www.usgs.gov/observatories/hvo/news/volcano-watch-did-you-feel-earthquake-probably-not",
        note: "USGS describes a May 2012 Kīlauea slow-slip event that moved the coast up to four centimetres over days and explains why gradual fault motion produces no strong shaking.",
      },
    },
    {
      key: "geology-tides-in-wells",
      question:
        "Why can water in some inland wells rise and fall rhythmically without a connection to the sea?",
      answer:
        "The Moon and Sun deform the solid Earth itself, creating earth tides that alter groundwater levels.",
      source: {
        title: "USGS — Earth Tides",
        url: "https://www.usgs.gov/media/images/earth-tides",
        note: "The groundwater example distinguishes the gravitational deformation of solid Earth from ocean tides and shows corresponding water-level oscillations in a well.",
      },
    },
    {
      key: "geology-sumatra-shorter-day",
      question:
        "What tiny worldwide change did models predict after the enormous 2004 Sumatra earthquake?",
      answer:
        "Earth would spin a little faster, shortening each day by a few millionths of a second.",
      source: {
        title: "USGS — M9.0 December 26, 2004 Northern Sumatra",
        url: "https://www.usgs.gov/programs/earthquake-hazards/science/m90-december-26-2004-northern-sumatra",
        note: "The USGS FAQ reports a JPL model predicting a −2.676-microsecond change in day length and emphasizes that it was too small to measure directly with the cited observational precision.",
      },
    },
    {
      key: "geology-everest-seafloor",
      question:
        "What very different environment is recorded in the rocks at Mount Everest’s summit?",
      answer: "A warm, shallow sea: the summit limestone still contains fossils of marine animals.",
      source: {
        title: "International Union of Geological Sciences — The Ordovician rocks of Mount Everest",
        url: "https://iugs-geoheritage.org/geoheritage_sites/the-ordovician-rocks-of-the-mount-everest/",
        note: "The geoheritage entry identifies fossiliferous marine limestone at the summit, deposited in a tropical shallow sea before uplift during the India–Asia collision.",
      },
    },
    {
      key: "geology-virginia-vanished-ice",
      question:
        "How can an ice sheet that never reached Virginia still help make parts of the state sink?",
      answer:
        "Its vanished weight left a raised bulge beyond the ice margin; that bulge is still slowly collapsing.",
      source: {
        title: "USGS — Post-Glacial Isostatic Adjustment in Virginia",
        url: "https://www.usgs.gov/media/images/post-glacial-isostatic-adjustment-virginia",
        note: "USGS states that the Laurentide Ice Sheet never reached Virginia, but its former loading still causes rebound to the north and forebulge-collapse subsidence south of its old margin.",
      },
    },
  ],
);
