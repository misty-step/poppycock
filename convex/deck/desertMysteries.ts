import { definePack } from "./types";

export const desertMysteries = definePack(
  {
    key: "desert-mysteries",
    title: "Desert mysteries",
    blurb: "Walking stones, musical slopes, and life that flourishes where water barely exists.",
    category: "Desert mysteries",
    sort: 360,
  },
  [
    {
      key: "desert-racetrack-ice-shove",
      question:
        "What moves the rocks that leave long trails across Death Valley's Racetrack Playa?",
      answer: "Wind-driven sheets of thin floating ice push them across the wet, muddy lakebed.",
      source: {
        title: "National Geographic Education — Rock On!",
        url: "https://blog.education.nationalgeographic.org/2014/08/28/rock-on/",
        note: "The account explains observed sailing-stone movement: a shallow pond freezes, mild wind moves thin ice floes, and the ice pushes rocks over the muddy surface.",
      },
    },
    {
      key: "desert-kelso-booming-sand",
      question:
        "What unexpected accompaniment can hikers create simply by sliding down California's Kelso Dunes?",
      answer: "A deep boom or hum from the sand itself, sometimes compared to a badly played tuba.",
      source: {
        title: "National Geographic — Seeking silence on a California road trip",
        url: "https://www.nationalgeographic.com/travel/article/road-trip-in-search-of-natures-quiet",
        note: "The Kelso Dunes section describes sand avalanches starting a booming sound when conditions are right, likened by acoustician Trevor Cox to a badly played tuba.",
      },
    },
    {
      key: "desert-oman-sand-sieve",
      question:
        "How did researchers turn a noisy mixture brought home from Oman into something that produced one clear note?",
      answer:
        "They sieved the sand to keep grains of similar size, then made it avalanche in the laboratory.",
      source: {
        title: "National Geographic — Singing Sand Dunes Explained",
        url: "https://www.nationalgeographic.com/science/article/121031-singing-sand-dunes-physics-science-whistling",
        note: "The 2012 experiment found Omani sand produced multiple tones; selecting grains 200–250 microns across made laboratory avalanches produce a single tone.",
      },
    },
    {
      key: "desert-libyan-glass-impact",
      question:
        "What do mineral clues suggest made the yellow glass scattered across the Great Sand Sea?",
      answer:
        "A meteorite impact supplied the extreme heat and pressure needed to form Libyan desert glass.",
      source: {
        title: "Nature Africa — Solving the mystery of Libyan desert glass",
        url: "https://www.nature.com/articles/d44148-024-00067-0",
        note: "The report describes zirconium-oxide polymorphs, including high-pressure ortho-II, as evidence favoring an impact over an airburst. The parent crater remains unidentified.",
      },
    },
    {
      key: "desert-fairy-circle-termite-hypothesis",
      question:
        "What did ecologist Norbert Juergens propose was engineering Namibia's mysterious bare circles?",
      answer:
        "Sand termites eating grass roots, leaving bare patches that conserve water; this is a debated hypothesis.",
      source: {
        title: "National Geographic — Africa's Weird Fairy Circles are Termite-Built Water Traps",
        url: "https://www.nationalgeographic.com/science/article/africas-weird-fairy-circles-are-termite-built-water-traps",
        note: "Ed Yong reports Juergens's 2013 sand-termite water-trap hypothesis and objections from researchers favoring other mechanisms. The card does not present the hypothesis as settled.",
      },
    },
    {
      key: "desert-atacama-microbial-sunscreen",
      question:
        "What do some Atacama cyanobacteria make that also belongs in a tourist's beach bag?",
      answer: "A natural sunscreen pigment called scytonemin that screens ultraviolet radiation.",
      source: {
        title:
          "Scientific Reports — Effect of salinity on scytonemin yield in endolithic cyanobacteria from the Atacama Desert",
        url: "https://www.nature.com/articles/s41598-024-60499-4",
        note: "The study examines Atacama cyanobacteria producing scytonemin, a UV-screening pigment located in their extracellular sheaths, and how salt stress changes its yield.",
      },
    },
    {
      key: "desert-quartz-hidden-communities",
      question:
        "In a nearly lifeless stony desert, why would a biologist turn over a piece of translucent quartz?",
      answer:
        "Microbial communities can live beneath it, sheltered from the harsh surface by a roof that still lets light through.",
      source: {
        title:
          "Scientific Reports — Adaptations of endolithic communities to abrupt environmental changes in a hyper-arid desert",
        url: "https://www.nature.com/articles/s41598-022-23437-w",
        note: "The introduction describes hypolithic communities taking refuge beneath translucent rocks such as quartz as biological soil crusts become fragmented under increasing dryness.",
      },
    },
    {
      key: "desert-halite-water-from-air",
      question:
        "Where can microbes sealed inside Atacama rocks get water without rain reaching them?",
      answer:
        "Their salt-rock shelter absorbs moisture from the air and turns it into liquid brine.",
      source: {
        title:
          "Scientific Reports — Adaptations of endolithic communities to abrupt environmental changes in a hyper-arid desert",
        url: "https://www.nature.com/articles/s41598-022-23437-w",
        note: "The paper identifies salt deliquescence as a water source in halite nodules and describes brine-filled pores and wet internal conditions above the salt's humidity threshold.",
      },
    },
    {
      key: "desert-atacama-lethal-rain",
      question:
        "What seemingly welcome arrival devastated many surface microbes in the Atacama between 2015 and 2017?",
      answer:
        "Unusually heavy rain: microbes adapted to extreme dryness died from the sudden influx of water and osmotic shock.",
      source: {
        title:
          "Scientific Reports — Unprecedented rains decimate surface microbial communities in the hyperarid core of the Atacama Desert",
        url: "https://www.nature.com/articles/s41598-018-35051-w",
        note: "The study reports reduced microbial diversity in new lagoons after exceptional rain and attributes the loss of highly drought-adapted surface organisms to osmotic shock.",
      },
    },
    {
      key: "desert-pothole-sugar-survival",
      question:
        "What unlikely substitute for water helps some tiny desert-pool organisms survive being dried out?",
      answer:
        "Sugar molecules replace much of the water, preserving cells until the pool fills again.",
      source: {
        title: "National Park Service — Ephemeral Pools (Potholes)",
        url: "https://www.nps.gov/nabr/learn/nature/pools.htm",
        note: "The NPS describes cryptobiosis in drought-tolerant pothole organisms, with sugar molecules substituting for water to maintain cell structure and elasticity.",
      },
    },
    {
      key: "desert-thorny-devil-drink",
      question:
        "How can an Australian thorny devil drink while standing in a puddle with its head held clear of the water?",
      answer: "Tiny channels in its skin draw water up from its legs and carry it to its mouth.",
      source: {
        title: "Smithsonian Magazine — This Spike-Crested Lizard Drinks From Sand With Its Skin",
        url: "https://www.smithsonianmag.com/science-nature/spiky-lizard-drinks-sand-its-skin-180961002/",
        note: "The article describes capillary channels under the scales and reports that experimental lizards actively drank while standing in a puddle. Drinking from wet sand remains debated.",
      },
    },
    {
      key: "desert-namib-ocean-conveyor",
      question: "What surprising detour has much of the sand in Namibia's coastal dunes taken?",
      answer:
        "It traveled down the Orange River into the Atlantic, moved along the coast, then blew back onto land.",
      source: {
        title: "NASA Earth Observatory — Namib Sand Sea",
        url: "https://science.nasa.gov/earth/earth-observatory/namib-sand-sea-149130/",
        note: "The article describes sediment reaching the Atlantic via the Orange River, traveling north in coastal currents, washing ashore, and being carried into the sand sea by wind.",
      },
    },
    {
      key: "desert-ant-stilts",
      question:
        "What did researchers fit to desert ants in a 2006 experiment that made the insects march past their destination?",
      answer:
        "Tiny stilts on their legs, upsetting a distance estimate based on their normal stride.",
      source: {
        title: "Scientific American — Ants on Stilts",
        url: "https://www.scientificamerican.com/article/ants-on-stilts/",
        note: "The report describes lengthening ants' legs with stilts; they overshot their goal, supporting an internal distance-measuring system based on stride length.",
      },
    },
    {
      key: "desert-silver-ant-shaving",
      question: "Why did scientists shave Saharan ants before putting them under a simulated sun?",
      answer:
        "To test their natural sun shields: triangular hairs reflect light and help keep the ants cool.",
      source: {
        title:
          "PLOS ONE — Total Internal Reflection Accounts for the Bright Color of the Saharan Silver Ant",
        url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0152325",
        note: "The study compared hairy and shaved silver ants under a solar simulator, finding much greater light reflection and lower internal heating with the triangular hairs intact.",
      },
    },
    {
      key: "desert-uyuni-satellite-calibration",
      question: "What precise technical job has Bolivia's Salar de Uyuni performed for spacecraft?",
      answer: "Its broad, flat, reflective surface has been used to calibrate satellite sensors.",
      source: {
        title: "NASA Earth Observatory — An Expanse of White in Bolivia",
        url: "https://science.nasa.gov/earth/earth-observatory/an-expanse-of-white-in-bolivia-84853/",
        note: "NASA cites ICESat and Envisat teams using Salar de Uyuni for calibration because it offers a large, stable, highly reflective surface.",
      },
    },
    {
      key: "desert-white-sands-gypsum",
      question: "What makes the dunes of New Mexico's White Sands so brilliantly pale?",
      answer:
        "They are made of gypsum, the mineral used in plaster, rather than ordinary quartz sand.",
      source: {
        title: "NASA Earth Observatory — New Mexico's White Sands",
        url: "https://science.nasa.gov/earth/earth-observatory/new-mexicos-white-sands-151371/",
        note: "NASA identifies gypsum deposited in ancient Lake Otero as the cause of the white dunes; its Uyuni explainer also identifies gypsum as a mineral used in plaster.",
      },
    },
    {
      key: "desert-bodele-diatom-dust",
      question:
        "What unusual ingredient makes up much of the dust blowing out of Chad's Bodele Depression?",
      answer:
        "The remains of microscopic diatoms that lived in the enormous ancient Lake Mega Chad.",
      source: {
        title: "NASA Earth Observatory — Another Dusty Day in Chad",
        url: "https://science.nasa.gov/earth/earth-observatory/another-dusty-day-in-chad-147816/",
        note: "The article identifies quartz and ancient diatom remains as major components of Bodele dust and explains that the organisms inhabited Lake Mega Chad.",
      },
    },
    {
      key: "desert-sahara-feeds-amazon",
      question: "What service does Saharan dust provide after crossing the Atlantic to the Amazon?",
      answer: "It fertilizes the rainforest, replacing soil nutrients washed away by heavy rain.",
      source: {
        title: "NASA Earth Observatory — Saharan Dust Crosses the Atlantic",
        url: "https://science.nasa.gov/earth/earth-observatory/saharan-dust-crosses-the-atlantic-44169/",
        note: "NASA describes Saharan dust transported by easterly winds to the Amazon, where its minerals replace nutrients depleted by heavy tropical rain.",
      },
    },
    {
      key: "desert-sandfish-folded-legs",
      question:
        "What did X-ray filming reveal about how a small Saharan lizard uses its legs once it buries itself?",
      answer:
        "It folds them against its body and swims through the sand with a snake-like wriggle.",
      source: {
        title: "Live Science — Lizard Swims Like Snake Through Sand",
        url: "https://www.livescience.com/5577-lizard-swims-snake-sand.html",
        note: "High-speed X-ray imaging showed sandfish lizards holding their limbs at their sides underground and propelling themselves by waves along their bodies rather than their legs.",
      },
    },
    {
      key: "desert-namakier-flowing-salt",
      question:
        "What flows like a glacier across parts of China's arid Xinjiang region, despite not being ice?",
      answer:
        "A slow-moving glacier of salt, squeezed up from buried deposits and spreading across the ground.",
      source: {
        title: "NASA Earth Observatory — Salt Glaciers in Xinjiang, China",
        url: "https://science.nasa.gov/earth/earth-observatory/salt-glaciers-in-xinjiang-china-86861/",
        note: "The article calls salt glaciers namakiers and describes buried, low-density salt rising through overlying rock and flowing at the surface in an arid environment.",
      },
    },
    {
      key: "desert-mono-tufa-underwater",
      question:
        "Where did the strange towers now standing along Mono Lake's shore originally grow?",
      answer:
        "Underwater, where calcium-rich springs reacted with the lake's carbonate-rich water to form tufa.",
      source: {
        title: "NASA Earth Observatory — Mono Lake, California",
        url: "https://science.nasa.gov/earth/earth-observatory/mono-lake-california-8388/",
        note: "The towers formed well below the lake surface through spring-water chemistry and became exposed after diversions lowered the lake level.",
      },
    },
    {
      key: "desert-saudi-ancient-water",
      question:
        "What is extraordinary about the water used to grow crops around Saudi Arabia's Wadi ad-Dawasir?",
      answer:
        "Much of the pumped groundwater is more than 30,000 years old: an ancient reserve known as fossil water.",
      source: {
        title: "NASA Earth Observatory — Desert Crops Thrive as the Aquifer Shrinks",
        url: "https://science.nasa.gov/earth/earth-observatory/desert-crops-thrive-as-the-aquifer-shrinks-145975/",
        note: "NASA reports carbon-14 dating of irrigation groundwater to more than 30,000 years old and describes depletion of the aquifer beneath Wadi ad-Dawasir.",
      },
    },
    {
      key: "desert-soda-lake-white-froth",
      question:
        "What familiar baking ingredient is a major component of a frothy white crust on a Mojave Desert lakebed?",
      answer:
        "Baking soda: sodium bicarbonate, mixed with sodium carbonate and other salts left by evaporating groundwater.",
      source: {
        title: "USGS — Our Dynamic Desert: Playas",
        url: "https://pubs.usgs.gov/of/2004/1007/playas.html",
        note: "USGS describes a frothy-white salt coating in southern and southwestern Soda Lake, supplied by capillary rise of saline groundwater and its evaporation.",
      },
    },
    {
      key: "desert-gecko-neon",
      question:
        "What hidden decoration appeared when researchers shone ultraviolet light on a Namib desert gecko?",
      answer: "Bright neon-green rings around its eyes and glowing stripes along its flanks.",
      source: {
        title:
          "Scientific Reports — Neon-green fluorescence in the desert gecko Pachydactylus rangei caused by iridophores",
        url: "https://www.nature.com/articles/s41598-020-79706-z",
        note: "The results report strong neon-green fluorescence around the eyes and along a ventrolateral stripe under ultraviolet light in adults of both sexes and hatchlings.",
      },
    },
    {
      key: "desert-toad-licking-warning",
      question:
        "What unusual instruction did the National Park Service issue about Sonoran Desert toads in 2022?",
      answer: "Please do not lick them; their skin glands produce a powerful toxin.",
      source: {
        title: "Smithsonian Magazine — Don't Lick This Toad, National Park Service Says",
        url: "https://www.smithsonianmag.com/smart-news/dont-lick-this-toad-national-park-service-says-180981092/",
        note: "The report quotes the NPS request to refrain from licking Sonoran Desert toads and its warning that their gland secretions can make people sick.",
      },
    },
    {
      key: "desert-rogers-lake-arrivals",
      question:
        "What unlikely visitors used the dry bed of Rogers Lake in California as a place to end their journeys?",
      answer: "Space shuttles, which landed on the desert lakebed at Edwards Air Force Base.",
      source: {
        title: "USGS — Desert Features",
        url: "https://pubs.usgs.gov/gip/deserts/features/",
        note: "The USGS guide identifies flat playas as natural runways and explicitly says space shuttles land on Rogers Lake Playa at Edwards Air Force Base.",
      },
    },
    {
      key: "desert-small-dunes-overtake",
      question:
        "What slow-motion overtaking has satellite photography revealed in Namibia's Sperrgebiet?",
      answer: "Small sand dunes repeatedly catch up with and pass much larger dunes.",
      source: {
        title: "NASA Earth Observatory — Racing Dunes in Namibia",
        url: "https://science.nasa.gov/earth/earth-observatory/racing-dunes-in-namibia-150808/",
        note: "Satellite tracking shows smaller dunes passing larger barchans. Dune researcher Nick Lancaster explains that smaller dunes migrate faster because less material must move.",
      },
    },
    {
      key: "desert-turpan-covered-waterways",
      question:
        "What hidden engineering links China's Turpan Depression to water in the nearby mountains?",
      answer:
        "Covered underground channels carry mountain water across the desert while limiting evaporation.",
      source: {
        title: "USGS — Desert Features",
        url: "https://pubs.usgs.gov/gip/deserts/features/",
        note: "USGS describes underground channels bringing water from nearby mountains into the Turpan Depression and explains that exposed channels would lose water rapidly to evaporation.",
      },
    },
    {
      key: "desert-sphinx-natural-start",
      question:
        "What natural head start may the sculptors of Egypt's Great Sphinx have enjoyed, according to a geological hypothesis?",
      answer:
        "A rock ridge already sculpted by desert winds, which they modified into the monument.",
      source: {
        title: "USGS — Eolian Processes",
        url: "https://pubs.usgs.gov/gip/deserts/eolian/",
        note: "After describing streamlined wind-eroded ridges called yardangs, the USGS states that the Sphinx at Giza may be a modified yardang; the card preserves that uncertainty.",
      },
    },
    {
      key: "desert-gum-tree-gold",
      question:
        "What did X-ray imaging reveal inside ordinary eucalyptus leaves near Kalgoorlie in Western Australia?",
      answer: "Tiny particles of gold, drawn up from deep underground by the trees' roots.",
      source: {
        title: "CSIRO — Gilding the gum tree: scientists strike gold in leaves",
        url: "https://www.csiro.au/en/news/all/news/2013/october/gilding-the-gum-tree--scientists-strike-gold-in-leaves",
        note: "CSIRO's 2013 report describes synchrotron imaging of gold inside eucalyptus leaves, rather than dust on their surfaces; roots had brought it up with water from buried deposits.",
      },
    },
  ],
);
