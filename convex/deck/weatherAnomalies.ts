import { definePack } from "./types";

export const weatherAnomalies = definePack(
  {
    key: "weather-anomalies",
    title: "Weather anomalies",
    blurb: "Improbable showers, phantom landscapes, and the atmosphere's stranger surprises.",
    category: "Weather anomalies",
    sort: 370,
  },
  [
    {
      key: "weather-las-vegas-radar-swarm",
      question:
        "What were the huge clouds moving toward Las Vegas on weather radar after dark in July 2019?",
      answer:
        "Millions of grasshoppers gathering around the city's bright lights, not rain clouds.",
      source: {
        title:
          "Smithsonian Magazine — Las Vegas Was Inundated by 46 Million Grasshoppers on a Single Night in 2019",
        url: "https://www.smithsonianmag.com/smart-news/las-vegas-was-inundated-46-million-grasshoppers-single-night-2019-180977395/",
        note: "Researchers filtered moisture from archived NOAA radar data and identified the roving clouds as airborne grasshoppers converging on illuminated Las Vegas at night.",
      },
    },
    {
      key: "weather-fujiwhara-dance",
      question:
        "What can happen when two hurricanes spinning in the same direction get too close to one another?",
      answer: "Two nearby cyclones rotate around a common center; sometimes one absorbs the other.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Fujiwhara Effect",
        url: "https://www.weather.gov/owlie/weird-weather#asd1",
        note: "The NWS describes nearby hurricanes spinning in the same direction orbiting a common center, with possible merger or absorption of a weaker storm.",
      },
    },
    {
      key: "weather-heat-burst-midnight",
      question:
        "What unwelcome parting gift can a dying thunderstorm deliver to a town in the middle of a summer night?",
      answer:
        "A sudden blast of fiercely hot, dry air: a heat burst can send the temperature soaring after midnight.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Heat burst",
        url: "https://www.weather.gov/owlie/weird-weather#asd2",
        note: "Heat bursts can accompany dying elevated storms. Once all precipitation evaporates, descending air continues warming by compression without further evaporative cooling.",
      },
    },
    {
      key: "weather-snow-rollers",
      question:
        "What delicate sculptures can form overnight in a snowy field without anyone entering it?",
      answer:
        "Hollow doughnuts of rolled-up snow, formed when wind curls a sticky layer over the ground.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Snow Roller",
        url: "https://www.weather.gov/owlie/weird-weather#asd10",
        note: "Snow rollers require sticky snow on a surface it does not adhere to and wind strong enough to roll it without destroying the delicate formation.",
      },
    },
    {
      key: "weather-hair-ice-fungus",
      question: "How can a fungus alter the ice that grows from a rotting branch on a cold night?",
      answer:
        "It helps keep the ice in silky, hair-thin strands rather than letting it grow into chunky crystals.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Hair ice",
        url: "https://www.weather.gov/owlie/weird-weather#asd11",
        note: "The section headed Air Ice describes hair ice on decaying wood and chemicals associated with a fungus that maintain its fine strands rather than larger ice crystals.",
      },
    },
    {
      key: "weather-brocken-spectre",
      question:
        "Who is the enormous figure that a lone climber may encounter in mist on Germany's Brocken mountain?",
      answer:
        "The climber: it is their own shadow projected onto fog, sometimes wearing a colored halo.",
      source: {
        title: "Royal Meteorological Society — Spooky weather",
        url: "https://www.rmets.org/metmatters/spooky-weather",
        note: "The Brocken spectre section describes an observer above a fog or cloud bank with the sun behind them, projecting a seemingly enlarged shadow often accompanied by a glory.",
      },
    },
    {
      key: "weather-merryweather-leeches",
      question:
        "What living components were supposed to ring the bell in George Merryweather's Victorian storm-warning machine?",
      answer:
        "Leeches in bottles: climbing toward the necks, they dislodged triggers connected to the bell.",
      source: {
        title: "Whitby Museum — Tempest Prognosticator",
        url: "https://whitbymuseum.org.uk/tempest-prognosticator/",
        note: "The museum describes twelve live leeches in bottles, each connected by a whalebone trigger and wire to a bell hammer; their climbing was intended to announce an approaching storm.",
      },
    },
    {
      key: "weather-fata-morgana",
      question:
        "What unexpected obstacle prevented Donald MacMillan's Arctic expedition from reaching Crocker Land?",
      answer: "The destination was a mirage, not a real landmass.",
      source: {
        title:
          "Bowdoin College, Peary-MacMillan Arctic Museum — A Glimmer on the Polar Sea: The Crocker Land Expedition, 1913-1917",
        url: "https://www.bowdoin.edu/arctic-museum/exhibits/2014/crocker-land-expedition.html",
        note: "The museum's exhibition account says the spring 1914 sledging expedition established that Crocker Land was a mirage.",
      },
    },
    {
      key: "weather-thunderstorm-antimatter",
      question:
        "What science-fiction-sounding material did NASA's Fermi telescope detect being hurled into space by thunderstorms?",
      answer: "Antimatter: beams containing positrons, the electron's antimatter counterpart.",
      source: {
        title: "NASA — NASA's Fermi Catches Thunderstorms Hurling Antimatter into Space",
        url: "https://www.nasa.gov/universe/nasas-fermi-catches-thunderstorms-hurling-antimatter-into-space/",
        note: "Fermi detected the gamma-ray signature of positrons annihilating against spacecraft electrons; NASA identifies the particle beams as products of terrestrial thunderstorms.",
      },
    },
    {
      key: "weather-morning-glory",
      question:
        "What immense moving formation sometimes crosses the Gulf of Carpentaria early in the morning?",
      answer:
        "A long, low roll of cloud stretching from horizon to horizon, accompanying the wind squall known as the Morning Glory.",
      source: {
        title: "American Meteorological Society — Glossary: Morning glory",
        url: "https://glossary.ametsoc.org/wiki/morning-glory/",
        note: "The glossary describes early-morning wind squalls around the southern Gulf of Carpentaria, often accompanied by low roll clouds of considerable lateral extent.",
      },
    },
    {
      key: "weather-animal-rain",
      question:
        "What extraordinary kind of shower has the Royal Meteorological Society attributed to waterspouts picking up unexpected cargo?",
      answer: "Fish or frogs falling from the sky after being lifted out of a body of water.",
      source: {
        title: "Royal Meteorological Society — Spooky weather: Plague of frogs",
        url: "https://www.rmets.org/metmatters/spooky-weather",
        note: "The Society offers waterspouts lifting fish or frogs from water and subsequently releasing them as an explanation for animal-rain reports, not proof of every reported case.",
      },
    },
    {
      key: "weather-red-sprites",
      question:
        "What can high-speed cameras catch above the tops of active thunderstorms that an ordinary glance usually misses?",
      answer:
        "Red, jellyfish-like flashes with branching tendrils, called sprites, lasting only milliseconds.",
      source: {
        title: "American Meteorological Society — Glossary: Sprite",
        url: "https://glossary.ametsoc.org/wiki/sprite/",
        note: "Sprites are predominantly red luminous events above active thunderstorms, with tendril-like structures and durations of a few milliseconds.",
      },
    },
    {
      key: "weather-clouds-meteor-smoke",
      question:
        "What unexpected ingredient did NASA find inside the ice crystals of high-altitude luminous clouds?",
      answer:
        "Dust left by burning meteors; water freezes around the tiny particles to help build the clouds.",
      source: {
        title: "NASA — Meteor Smoke Makes Strange Clouds",
        url: "https://www.nasa.gov/missions/aim/meteor-smoke-makes-strange-clouds/",
        note: "NASA's AIM mission detected meteoritic material embedded in noctilucent-cloud ice crystals, supporting meteor smoke as the particles around which the ice forms.",
      },
    },
    {
      key: "weather-aircraft-fallstreak-hole",
      question:
        "What lasting mark can an ordinary aircraft leave in an otherwise solid layer of cloud, apart from a contrail?",
      answer:
        "A widening circular hole: it can trigger ice crystals that grow and fall out of the cloud.",
      source: {
        title: "NOAA NESDIS — Fallstreak Clouds",
        url: "https://www.nesdis.noaa.gov/fallstreak-clouds",
        note: "Expansion and cooling around an aircraft can trigger freezing in supercooled cloud droplets. Crystals grow and fall, producing an expanding fallstreak hole.",
      },
    },
    {
      key: "weather-wragge-rain-cannons",
      question:
        "What did Queensland meteorologist Clement Wragge buy in an attempt to end the drought of 1902?",
      answer: "Vortex cannons, which were supposed to coax rain from the clouds by firing upward.",
      source: {
        title: "Queensland State Archives — Clement Lindley Wragge and Queensland meteorology",
        url: "https://blogs.archives.qld.gov.au/2016/09/09/clement-lindley-wragge-and-queensland-meteorology/",
        note: "The archive describes Wragge's purchase of Stiger vortex cannons to break the 1902 drought and preserves his report and illustrations; the claim was that the cannons could bring rain.",
      },
    },
    {
      key: "weather-diamond-dust",
      question: "What can fall out of an apparently cloudless sky on a bitterly cold day?",
      answer:
        "Tiny sparkling ice crystals: a fall of diamond dust without an obvious cloud overhead.",
      source: {
        title: "American Meteorological Society — Glossary: Diamond dust",
        url: "https://glossary.ametsoc.org/wiki/diamond-dust/",
        note: "The glossary defines diamond dust as small ice crystals falling from an apparently cloudless sky, often but not always at night.",
      },
    },
    {
      key: "weather-smog-opera",
      question:
        "Why did a performance of La Traviata at London's Sadler's Wells have to stop after its first act in 1952?",
      answer: "The theatre had filled with smog, even though the performance was indoors.",
      source: {
        title: "BBC News — The Great Smog of London",
        url: "https://news.bbc.co.uk/2/hi/england/2545759.stm",
        note: "The BBC's anniversary account states that La Traviata was abandoned after the first act because Sadler's Wells was so full of smog.",
      },
    },
    {
      key: "weather-moonlight-rainbow",
      question:
        "What unusual attraction brings visitors to Kentucky's Cumberland Falls after dark?",
      answer: "A rainbow made by moonlight shining through the waterfall's mist.",
      source: {
        title: "Kentucky Historical Society — Cumberland Falls Moonbow",
        url: "https://explorekyhistory.ky.gov/items/show/727",
        note: "The historical-marker account describes the falls' lunar rainbow, its appearance around full moons, and generations of visitors travelling there at night to see it.",
      },
    },
    {
      key: "weather-stormfury-second-eyewall",
      question:
        "What counterintuitive change did Project Stormfury try to make to hurricanes to weaken their winds?",
      answer:
        "Build a second, wider wall of storm clouds around the eye; spreading the storm out was meant to weaken its winds.",
      source: {
        title: "NOAA Atlantic Oceanographic and Meteorological Laboratory — Project STORMFURY",
        url: "https://www.aoml.noaa.gov/hrd/hrd_sub/sfury.html",
        note: "Stormfury seeded convection outside hurricane eyewalls with silver iodide to promote a larger replacement eyewall. NOAA explains that natural eyewall changes confounded the apparent results.",
      },
    },
    {
      key: "weather-krakatoa-blue-moon",
      question:
        "What unexpected change in the Moon's appearance was reported after Krakatoa erupted in 1883?",
      answer: "It often looked blue: volcanic particles filtered out red light.",
      source: {
        title: "NASA Science — Summer Blue Moon",
        url: "https://science.nasa.gov/science-research/planetary-science/27jul_bluemoon/",
        note: "NASA describes blue-colored moons after Krakatoa's eruption and explains that particles around a micron across scattered red light while allowing blue light through.",
      },
    },
    {
      key: "weather-belt-of-venus",
      question:
        "What casts the vast blue-gray band that can rise along the horizon opposite a setting sun?",
      answer:
        "Earth itself: the planet's shadow is visible against the atmosphere, often with a pink band above it.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Earth's Shadow",
        url: "https://www.weather.gov/owlie/weird-weather#asd15",
        note: "The NWS describes Earth's dark bluish shadow opposite the rising or setting sun, often topped by a pink strip called the Belt of Venus.",
      },
    },
    {
      key: "weather-ball-lightning-reports",
      question:
        "What strange form has lightning reportedly taken when it lingers near a strike site?",
      answer:
        "A glowing ball drifting for several seconds before vanishing, sometimes with a bang; its natural mechanism remains unresolved.",
      source: {
        title: "American Meteorological Society — Glossary: Ball lightning",
        url: "https://glossary.ametsoc.org/wiki/ball-lightning/",
        note: "Witness descriptions include floating orange or reddish spheres near thunderstorms or recent lightning strikes, lasting seconds. Laboratory lookalikes do not settle the natural mechanism.",
      },
    },
    {
      key: "weather-pressure-tsunami",
      question: "What coastal hazard can fast-moving changes in atmospheric pressure create?",
      answer:
        "A tsunami-like wave, called a meteotsunami, driven across the water by the weather system overhead.",
      source: {
        title: "NOAA National Ocean Service — Weird Ocean Phenomena",
        url: "https://oceanservice.noaa.gov/ocean/weird-ocean-weather.html",
        note: "NOAA explains that air-pressure disturbances can generate meteotsunamis affecting the entire water column and that harbours, inlets and bays can intensify them.",
      },
    },
    {
      key: "weather-kerala-algal-rain",
      question:
        "What did investigators identify as the coloring matter in samples of Kerala's red rain in 2001?",
      answer:
        "Large numbers of spores from a lichen-forming alga, rather than desert dust or pollution.",
      source: {
        title:
          "Centre for Earth Science Studies and Tropical Botanic Garden and Research Institute — Coloured Rain: A Report on the Phenomenon",
        url: "https://iangoddard.com/sampath2001.pdf",
        note: "The November 2001 report identifies Trentepohlia spores in Changanacherry rain samples; cultures matched local lichens, while chemical analysis ruled out meteoric, volcanic and desert dust.",
      },
    },
    {
      key: "weather-saussure-human-hair",
      question:
        "What unlikely material did Horace Bénédict de Saussure use as the working element of his humidity-measuring instrument?",
      answer: "A human hair, whose length changes as the air becomes wetter or drier.",
      source: {
        title: "Science Museum Group — De Saussure Hair Hygrometer, 1815-1841",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co54855/de-saussure-hair-hygrometer-1815-1841",
        note: "The museum explains that Saussure's mechanical hygrometer measured humidity through the expansion and contraction of a human hair, calibrated under saturated and dry conditions.",
      },
    },
    {
      key: "weather-honeybee-electric-field",
      question:
        "What passing visitors caused a sudden change in an atmospheric electric-field monitor at a Bristol research site?",
      answer: "A swarm of electrically charged honeybees passing overhead.",
      source: {
        title:
          "iScience — Observed electric charge of insect swarms and their contribution to atmospheric electricity",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9684032/",
        note: "The study measured an increase in atmospheric potential gradient as a bee swarm passed over a field mill in Langford, while a control instrument 50 metres away did not show it.",
      },
    },
    {
      key: "weather-haboob-wall",
      question:
        "Once a driver has parked completely off the road in a dust storm, what counterintuitive step does the National Weather Service recommend?",
      answer:
        "Turn every light off, including the brake lights, so other drivers do not follow them off the road and collide with the parked car.",
      source: {
        title: "National Weather Service — Dust Storms and Haboobs",
        url: "https://www.weather.gov/safety/wind-dust-storm",
        note: "The NWS instructs drivers who have pulled fully off the pavement to stop, turn lights off, set the emergency brake and release the brake pedal; approaching drivers have followed parked cars' lights and collided with them.",
      },
    },
    {
      key: "weather-frost-flower-ribbons",
      question:
        "What delicate decoration can appear around the base of a dead-looking weed on a freezing morning?",
      answer:
        "Curling ribbons of ice, pushed out through splits in the stem as water drawn from the soil freezes.",
      source: {
        title: "National Weather Service — Frost Flowers",
        url: "https://www.weather.gov/lmk/frost_flowers",
        note: "The NWS account describes capillary water rising from unfrozen soil, freezing and splitting stems, then emerging as thin curling ice ribbons.",
      },
    },
    {
      key: "weather-parhelion-mock-suns",
      question: "What sight in the sky did Jakob Hutter describe in 1533 as 'no small miracle'?",
      answer:
        "Three suns at once: the real sun flanked by two bright mock suns made by airborne ice crystals.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Parhelion, Sun Dog, Mock Sun",
        url: "https://www.weather.gov/owlie/weird-weather#asd8",
        note: "The NWS quotes Hutter's 1533 report of three suns visible for about an hour and identifies the two fainter ones as parhelia, or mock suns.",
      },
    },
    {
      key: "weather-volcanic-lightning-glass",
      question:
        "What tiny objects can preserve evidence that lightning passed through an eruption plume?",
      answer:
        "Little glass spheres formed when lightning melted volcanic ash, which then cooled and solidified.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Volcanic Lightning",
        url: "https://www.weather.gov/owlie/weird-weather#asd6",
        note: "The volcanic-lightning section reports that lightning can melt ash into liquid that subsequently solidifies as small glass spheres, providing evidence of the discharge.",
      },
    },
  ],
);
