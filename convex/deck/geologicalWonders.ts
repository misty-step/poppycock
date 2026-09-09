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
      key: "geology-darvaza-fuel",
      question: "What has supplied the fuel for the long-burning pit at Darvaza in Turkmenistan?",
      answer: "Natural gas escaping from the ground, not an underground pool of lava.",
      source: {
        title:
          "Smithsonian Magazine — This Hellish Desert Pit Has Been On Fire for More Than 50 Years",
        url: "https://www.smithsonianmag.com/travel/giant-hole-ground-has-been-fire-more-40-years-180951247/",
        note: "The article identifies a burning natural-gas crater. The card does not rely on the disputed precise date and circumstances of ignition or predict how long the fire will continue.",
      },
    },
    {
      key: "geology-bryce-ice-chisel",
      question: "What repeatedly prises apart the rock that becomes Bryce Canyon’s slender towers?",
      answer:
        "Water freezing and expanding inside cracks, gradually splitting the rock through repeated freeze–thaw cycles.",
      source: {
        title: "USGS — Geology of Bryce Canyon National Park",
        url: "https://www.usgs.gov/geology-and-ecology-of-national-parks/geology-bryce-canyon-national-park",
        note: "USGS describes water entering rock cracks, freezing and expanding, progressively producing walls, windows and hoodoos. Uneven chemical weathering also contributes.",
      },
    },
    {
      key: "geology-dallol-life-limits",
      question:
        "What surprised researchers about certain colourful Dallol pools, despite their plentiful liquid water?",
      answer:
        "They found no detectable microbial life: extreme acidity and salt combinations created barriers to habitability.",
      source: {
        title:
          "Nature Ecology & Evolution — Hyperdiverse archaea near life limits at the polyextreme geothermal Dallol area",
        url: "https://www.nature.com/articles/s41559-019-1005-0",
        note: "The 2019 study distinguishes inhabited nearby environments from brines exceeding identified life limits, including hyperacid, salt-saturated waters. It does not declare the entire Dallol area lifeless.",
      },
    },
    {
      key: "geology-earth-background-hum",
      question:
        "What keeps the solid Earth faintly vibrating even when no major earthquake is occurring?",
      answer:
        "Interacting ocean waves drive continuous, extremely low-frequency oscillations known as Earth’s hum.",
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
      question:
        "What visual surprise can a transparent piece of Iceland spar produce over a single printed word?",
      answer:
        "Two images of the word, because the calcite crystal splits light by double refraction.",
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
        "Bend without breaking, because its interlocking quartz grains have room for limited movement.",
      source: {
        title: "Geological Society of London — Itacolumites: the flexible sandstones",
        url: "https://doi.org/10.1144/gsl.qjeg.1980.013.02.06",
        note: "Dusseault’s 1980 paper describes interdigitated quartz grains with open contacts, allowing movement over a limited arc before the sandstone locks.",
      },
    },
    {
      key: "geology-floating-pumice",
      question: "Why can a lump of pumice stay on the surface when ordinary stones sink?",
      answer:
        "Gas trapped in its many tiny cavities can make the whole rock less dense than water.",
      source: {
        title: "USGS — Volcano Watch: Rocks float briefly where lava meets the sea",
        url: "https://www.usgs.gov/news/volcano-watch-rocks-float-briefly-where-lava-meets-sea",
        note: "The article explains the density reduction caused by gas-filled cavities and states that pumice floats when water cannot readily replace the gas in its voids.",
      },
    },
    {
      key: "geology-golden-glass-strands",
      question:
        "What are the delicate golden-brown strands that can accumulate downwind of vigorous Hawaiian eruptions?",
      answer:
        "Volcanic glass stretched from molten lava into hairlike fibres, known as Pele’s hair.",
      source: {
        title: "USGS — Volcano Watch: Pele’s hairs, a beautiful hazard on the Island of Hawaiʻi",
        url: "https://www.usgs.gov/observatories/hvo/news/volcano-watch-peles-hairs-a-beautiful-hazard-island-hawaii",
        note: "USGS describes thin connections between separating blobs of fluid lava being stretched and rapidly chilled into glass; the resulting strands are hazardous and easily splinter.",
      },
    },
    {
      key: "geology-hope-red-afterglow",
      question:
        "What surprising colour can the blue Hope Diamond emit after ultraviolet illumination is switched off?",
      answer: "A strong red glow that persists in the darkness through phosphorescence.",
      source: {
        title:
          "Smithsonian Institution — Bombarded with ultraviolet light, the blue Hope Diamond glows red",
        url: "https://www.si.edu/stories/blue-hope-diamond-glows-red",
        note: "The account describes Jeffrey Post’s spectroscopic study and states that the Hope’s characteristic red glow continues for several minutes after the ultraviolet source is turned off.",
      },
    },
    {
      key: "geology-pyrite-real-treasure",
      question: "Why might a miner be unwise to discard every piece of pyrite as worthless?",
      answer:
        "Some pyrite contains real gold, including particles so tiny they are invisible to the naked eye.",
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
        "What did a tiny inclusion in a Brazilian diamond reveal about material hundreds of kilometres below Earth’s surface?",
      answer:
        "That deep mantle minerals can hold water within their crystal structure, rather than as underground liquid oceans.",
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
        "What made the atomic pattern in a metallic grain from the Khatyrka meteorite unlike that of an ordinary crystal?",
      answer:
        "It had an ordered but nonrepeating arrangement with tenfold symmetry: a natural quasicrystal.",
      source: {
        title: "Scientific Reports — Natural quasicrystal with decagonal symmetry",
        url: "https://www.nature.com/articles/srep09111",
        note: "The 2015 paper reports a natural aluminium-nickel-iron quasicrystal with tenfold symmetry and quasiperiodic atomic arrangements within its stacked layers.",
      },
    },
    {
      key: "geology-sheepeater-columns",
      question:
        "What produced the remarkably regular stone columns of Yellowstone’s Sheepeater Cliffs?",
      answer: "A cooling lava flow shrank and cracked into adjoining columns, many with six sides.",
      source: {
        title: "USGS — The spectacular columns of Sheepeater Cliffs",
        url: "https://www.usgs.gov/observatories/yvo/news/spectacular-columns-sheepeater-cliffs",
        note: "USGS attributes the basalt columns to thermal contraction during slow cooling and explains that columnar joints commonly have six sides but can have three to eight.",
      },
    },
    {
      key: "geology-hawaiian-green-grains",
      question: "What mineral supplies the green grains at Hawaii’s famous beach near South Point?",
      answer: "Olivine, a green silicate mineral crystallized from magma.",
      source: {
        title: "USGS Spectral Library — Olivine GDS70",
        url: "https://pubs.usgs.gov/of/2003/ofr-03-395/DESCRIPT/M/olivine_gds70.html",
        note: "The laboratory record identifies an olivine sample from South Point, Hawaii, explicitly described as the ‘green sand beach’ olivine, and reports its composition and grain-size fractions.",
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
        "What made the University of Arizona’s swimming pool lose water in 1985, from roughly 2,000 kilometres away?",
      answer: "A Mexican earthquake set the pool sloshing, sending water over its sides.",
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
        "Why are California’s Pinnacles now about 195 miles from the other part of their original volcano?",
      answer:
        "The San Andreas Fault split the volcanic formation and carried the pieces far apart over millions of years.",
      source: {
        title: "USGS — Cool Earthquake Facts",
        url: "https://www.usgs.gov/programs/earthquake-hazards/cool-earthquake-facts",
        note: "USGS places Pinnacles 195 miles northwest of the volcano from which the fault separated it, based on matching 23-million-year-old volcanic rocks.",
      },
    },
    {
      key: "geology-mississippi-upstream",
      question:
        "Why did witnesses to the 1811–1812 New Madrid earthquakes think the Mississippi was running backward?",
      answer:
        "Riverbed deformation and great waves moving upstream created the appearance of reversed flow.",
      source: {
        title: "USGS — Summary of 1811–1812 New Madrid Earthquakes Sequence",
        url: "https://www.usgs.gov/programs/earthquake-hazards/science/summary-1811-1812-new-madrid-earthquakes-sequence",
        note: "USGS explicitly describes local ground uplift and upstream-moving seiche waves giving the illusion that the river was flowing upstream; it does not claim the whole river permanently reversed.",
      },
    },
    {
      key: "geology-balanced-boulder-memory",
      question:
        "What can a precariously perched boulder tell researchers simply by not having fallen over?",
      answer:
        "It can limit how strong past earthquake shaking was: a sufficiently violent jolt would have toppled it.",
      source: {
        title: "USGS — Rocks in unusual positions hold secrets to northeastern U.S. earthquakes",
        url: "https://www.usgs.gov/news/science-snippet/rocks-unusual-positions-hold-secrets-northeastern-us-earthquakes",
        note: "The study combines the age of a precarious position with estimates of the shaking required to topple the rock to constrain past ground motion.",
      },
    },
    {
      key: "geology-slow-unfelt-slip",
      question: "How can a fault move enough to shift a coastline yet produce no strong shaking?",
      answer:
        "It can slip over several days instead of seconds, in a ‘slow earthquake’ detected by sensitive instruments.",
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
        "The day became about 2.7 millionths of a second shorter because Earth’s rotation changed slightly.",
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
