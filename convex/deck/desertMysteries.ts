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
        "What can produce a deep, tuba-like noise beneath someone descending the Kelso Dunes?",
      answer: "An avalanche of sand grains can make the dune itself boom or hum.",
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
        "What protective substance can some Atacama cyanobacteria manufacture for themselves?",
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
        "Where can microbial communities hide in a stony landscape whose exposed ground looks almost lifeless?",
      answer:
        "On the undersides of translucent quartz rocks, which provide a refuge from the exposed surface.",
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
        "How can some rock-dwelling Atacama microbes obtain liquid water even when no rain falls?",
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
      key: "desert-biocrust-nitrogen",
      question:
        "How can a thin, seemingly unremarkable crust help fertilize otherwise impoverished dryland soil?",
      answer: "Its living community fixes atmospheric nitrogen and traps nutrient-bearing dust.",
      source: {
        title: "USGS — Patterns and controls on nitrogen cycling of biological soil crusts",
        url: "https://www.usgs.gov/publications/patterns-and-controls-nitrogen-cycling-biological-soil-crusts",
        note: "The USGS abstract identifies biological nitrogen fixation and dust capture as major nitrogen inputs supplied by biocrusts in arid and semi-arid ecosystems.",
      },
    },
    {
      key: "desert-namib-fog-water",
      question: "What supplies the main water source for life in the Namib Sand Sea?",
      answer: "Coastal fog, rather than regular rainfall.",
      source: {
        title: "NASA Earth Observatory — Namib Sand Sea",
        url: "https://science.nasa.gov/earth/earth-observatory/namib-sand-sea-149130/",
        note: "NASA explicitly identifies fog as the sand sea's primary water source and notes the vegetation supported by this moisture, especially on rocky hills.",
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
      key: "desert-star-dune-winds",
      question:
        "Why do some enormous dunes grow several arms instead of a single crescent-shaped ridge?",
      answer:
        "Winds arriving from different directions build star dunes with multiple radiating arms.",
      source: {
        title: "NASA Earth Observatory — Tsauchab River and Sossus Vlei Lakebed, Namibia",
        url: "https://science.nasa.gov/earth/earth-observatory/tsauchab-river-and-sossus-vlei-lakebed-namibia-42396/",
        note: "NASA contrasts barchan dunes associated with a dominant wind direction and star dunes generated where wind directions vary, describing several components around the Tsauchab valley.",
      },
    },
    {
      key: "desert-salt-polygon-convection",
      question:
        "What hidden motion has research linked to the striking polygon patterns on salt flats?",
      answer:
        "Convection of salty groundwater beneath the crust, driven by evaporation and differences in salinity.",
      source: {
        title: "Nature Physics — Salty polygons",
        url: "https://www.nature.com/articles/s41567-023-02037-z",
        note: "This research summary describes a model in which salinity differences and evaporation govern convective fluid flow in porous ground, controlling polygon formation.",
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
        "What remains of vanished aquatic life help make up the dust blowing out of Chad's Bodele Depression?",
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
      question: "How can the Sahara help nourish a rainforest on the other side of an ocean?",
      answer:
        "Winds carry mineral-rich dust across the Atlantic, replenishing nutrients in Amazon soils.",
      source: {
        title: "NASA Earth Observatory — Saharan Dust Crosses the Atlantic",
        url: "https://science.nasa.gov/earth/earth-observatory/saharan-dust-crosses-the-atlantic-44169/",
        note: "NASA describes Saharan dust transported by easterly winds to the Amazon, where its minerals replace nutrients depleted by heavy tropical rain.",
      },
    },
    {
      key: "desert-richat-eroded-dome",
      question:
        "What produced the enormous bull's-eye pattern of the Richat Structure in Mauritania?",
      answer:
        "Uneven erosion exposed concentric layers of an uplifted geological dome, not a meteorite crater.",
      source: {
        title: "NASA Earth Observatory — Eyeing the Richat Structure",
        url: "https://science.nasa.gov/earth/earth-observatory/eyeing-the-richat-structure/",
        note: "NASA explains that uplift over an igneous intrusion formed a dome; different rock erosion rates created circular ridges. Earlier impact-crater interpretations were rejected.",
      },
    },
    {
      key: "desert-namakier-flowing-salt",
      question: "What is a namakier?",
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
        "What creates the frothy-looking white coating that returns to parts of California's Soda Lake as they dry?",
      answer:
        "Alkali salts, chiefly sodium carbonate and sodium bicarbonate, left by evaporating groundwater.",
      source: {
        title: "USGS — Our Dynamic Desert: Playas",
        url: "https://pubs.usgs.gov/of/2004/1007/playas.html",
        note: "USGS describes a frothy-white salt coating in southern and southwestern Soda Lake, supplied by capillary rise of saline groundwater and its evaporation.",
      },
    },
    {
      key: "desert-rock-varnish",
      question: "What gives some long-exposed desert stones a dark, glossy coating?",
      answer:
        "A thin mineral coating called desert varnish, containing manganese and iron compounds mixed with clay.",
      source: {
        title: "USGS — Eolian Processes",
        url: "https://pubs.usgs.gov/gip/deserts/eolian/",
        note: "USGS identifies desert varnish as a dark, shiny stain on exposed rocks, composed largely of manganese, iron oxides, hydroxides, and clay minerals.",
      },
    },
    {
      key: "desert-ventifact-sculpture",
      question: "What is a ventifact?",
      answer: "A stone cut or polished by windblown sand, rather than by a human tool.",
      source: {
        title: "USGS — Eolian Processes",
        url: "https://pubs.usgs.gov/gip/deserts/eolian/",
        note: "The USGS guide defines ventifacts as rocks cut, and sometimes polished, by abrasive wind action and describes sandblasting by windborne particles.",
      },
    },
    {
      key: "desert-saltation-hopping-grains",
      question: "What happens during saltation?",
      answer:
        "Wind-driven sand grains move in little hops, knocking other grains into motion as they land.",
      source: {
        title: "USGS — Eolian Processes",
        url: "https://pubs.usgs.gov/gip/deserts/eolian/",
        note: "USGS defines saltation as downwind particle movement through jumps or skips and explains how collisions set other grains hopping or creeping forward.",
      },
    },
    {
      key: "desert-small-dunes-overtake",
      question: "Why can small dunes overtake much larger ones in Namibia's Sperrgebiet?",
      answer:
        "They have less sand to move, so wind can shift them faster than their larger neighbors.",
      source: {
        title: "NASA Earth Observatory — Racing Dunes in Namibia",
        url: "https://science.nasa.gov/earth/earth-observatory/racing-dunes-in-namibia-150808/",
        note: "Satellite tracking shows smaller dunes passing larger barchans. Dune researcher Nick Lancaster explains that smaller dunes migrate faster because less material must move.",
      },
    },
    {
      key: "desert-turpan-covered-waterways",
      question:
        "How did people carry mountain water across China's hot Turpan Depression while limiting losses along the way?",
      answer:
        "They routed it through covered underground channels that greatly reduced evaporation.",
      source: {
        title: "USGS — Desert Features",
        url: "https://pubs.usgs.gov/gip/deserts/features/",
        note: "USGS describes underground channels bringing water from nearby mountains into the Turpan Depression and explains that exposed channels would lose water rapidly to evaporation.",
      },
    },
    {
      key: "desert-yardang-wind-ridges",
      question: "What are yardangs?",
      answer:
        "Long, streamlined ridges carved by wind erosion, sometimes tens of meters high and kilometers long.",
      source: {
        title: "USGS — Eolian Processes",
        url: "https://pubs.usgs.gov/gip/deserts/eolian/",
        note: "USGS describes yardangs as sculpted, streamlined landforms created by desert winds and illustrates exceptionally large examples in Iran's Lut Desert.",
      },
    },
    {
      key: "desert-tsauchab-inland-ending",
      question:
        "Where does Namibia's Tsauchab River finish its journey instead of reaching the Atlantic?",
      answer:
        "In the salt-and-clay pans of Sossusvlei, surrounded by the towering dunes of the Namib Sand Sea.",
      source: {
        title: "NASA Earth Observatory — Namib Sand Sea",
        url: "https://science.nasa.gov/earth/earth-observatory/namib-sand-sea-149130/",
        note: "NASA traces the ephemeral Tsauchab from the Naukluft Mountains across the sand sea to its endpoint at Sossusvlei, a salt and clay pan flooded after rare heavy rain.",
      },
    },
  ],
);
