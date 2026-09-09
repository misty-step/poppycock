import { definePack } from "./types";

export const weatherAnomalies = definePack(
  {
    key: "weather-anomalies",
    title: "Weather anomalies",
    blurb: "Vanishing showers, counterfeit horizons, and other tricks of the atmosphere.",
    category: "Weather anomalies",
    sort: 370,
  },
  [
    {
      key: "weather-virga-vanishing-shower",
      question:
        "Why can a radar show a shower overhead while the ground beneath it stays completely dry?",
      answer:
        "The precipitation evaporates before reaching the ground, leaving streaks called virga.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Virga",
        url: "https://www.weather.gov/owlie/weird-weather#asd",
        note: "The virga section explains that precipitation evaporates in dry air below a cloud; radar can register the shower even though none reaches the surface.",
      },
    },
    {
      key: "weather-fujiwhara-dance",
      question: "What happens during the Fujiwhara effect?",
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
        "How can the temperature suddenly shoot upward after midnight as a thunderstorm dies?",
      answer:
        "A heat burst brings sinking air that warms by compression after its rain has completely evaporated.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Heat burst",
        url: "https://www.weather.gov/owlie/weird-weather#asd2",
        note: "Heat bursts can accompany dying elevated storms. Once all precipitation evaporates, descending air continues warming by compression without further evaporative cooling.",
      },
    },
    {
      key: "weather-snow-rollers",
      question:
        "What can leave a field covered in hollow, doughnut-shaped cylinders overnight without anyone visiting?",
      answer:
        "Wind can roll a thin layer of sticky snow into hollow cylinders called snow rollers.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Snow Roller",
        url: "https://www.weather.gov/owlie/weird-weather#asd10",
        note: "Snow rollers require sticky snow on a surface it does not adhere to and wind strong enough to roll it without destroying the delicate formation.",
      },
    },
    {
      key: "weather-hair-ice-fungus",
      question:
        "What living accomplice helps rotting branches grow silky white strands on cold nights?",
      answer:
        "A fungus helps preserve hair-thin ice strands by preventing them from growing into larger crystals.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Hair ice",
        url: "https://www.weather.gov/owlie/weird-weather#asd11",
        note: "The section headed Air Ice describes hair ice on decaying wood and chemicals associated with a fungus that maintain its fine strands rather than larger ice crystals.",
      },
    },
    {
      key: "weather-brocken-spectre",
      question: "What is the towering figure called a Brocken spectre?",
      answer:
        "The observer's own shadow projected onto fog or cloud, often surrounded by a colored ring.",
      source: {
        title: "Royal Meteorological Society — Spooky weather",
        url: "https://www.rmets.org/metmatters/spooky-weather",
        note: "The Brocken spectre section describes an observer above a fog or cloud bank with the sun behind them, projecting a seemingly enlarged shadow often accompanied by a glory.",
      },
    },
    {
      key: "weather-lenticular-stationary-saucer",
      question:
        "Why can a saucer-shaped cloud remain parked beside a mountain despite a strong wind?",
      answer:
        "Air continually forms cloud at a standing wave's crest and loses it again downstream, keeping the shape in place.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Lenticular Clouds",
        url: "https://www.weather.gov/owlie/weird-weather#asd14",
        note: "Lenticular clouds form in waves when stable air crosses a barrier. Rising air feeds the cloud while descending, warming air evaporates it, so the cloud moves little.",
      },
    },
    {
      key: "weather-fata-morgana",
      question: "What is a Fata Morgana?",
      answer:
        "A complex mirage that can turn distant scenery into apparently floating cities, cliffs, or islands.",
      source: {
        title: "American Meteorological Society — Glossary: Fata morgana",
        url: "https://glossary.ametsoc.org/wiki/fata-morgana/",
        note: "The glossary describes fanciful apparent cities, mountains, forests, and islands produced by mirages, most often multiple-image superior mirages with magnification.",
      },
    },
    {
      key: "weather-green-flash",
      question: "Why can the last visible sliver of the setting sun briefly look emerald-colored?",
      answer:
        "Atmospheric refraction separates colors, and a mirage can magnify the sun's thin green upper rim into a green flash.",
      source: {
        title: "American Meteorological Society — Glossary: Green flash",
        url: "https://glossary.ametsoc.org/wiki/green-flash/",
        note: "Refraction displaces shorter wavelengths more strongly. The glossary distinguishes the ordinary narrow green rim from striking flashes involving magnified mirage images.",
      },
    },
    {
      key: "weather-morning-glory",
      question:
        "What is the Morning Glory that sometimes sweeps past northern Australia's Gulf of Carpentaria?",
      answer:
        "A moving wind squall often marked by an immense, low, rolling cloud stretching from horizon to horizon.",
      source: {
        title: "American Meteorological Society — Glossary: Morning glory",
        url: "https://glossary.ametsoc.org/wiki/morning-glory/",
        note: "The glossary describes early-morning wind squalls around the southern Gulf of Carpentaria, often accompanied by low roll clouds of considerable lateral extent.",
      },
    },
    {
      key: "weather-animal-rain",
      question:
        "What natural mechanism is proposed for reports of fish suddenly falling onto land?",
      answer: "A waterspout can lift small aquatic animals and later drop them elsewhere.",
      source: {
        title: "Royal Meteorological Society — Spooky weather: Plague of frogs",
        url: "https://www.rmets.org/metmatters/spooky-weather",
        note: "The Society offers waterspouts lifting fish or frogs from water and subsequently releasing them as an explanation for animal-rain reports, not proof of every reported case.",
      },
    },
    {
      key: "weather-red-sprites",
      question: "What are the fleeting red sprites sometimes caught by high-speed cameras?",
      answer:
        "Brief luminous discharges high above thunderstorms, often with branching tendrils and lasting only milliseconds.",
      source: {
        title: "American Meteorological Society — Glossary: Sprite",
        url: "https://glossary.ametsoc.org/wiki/sprite/",
        note: "Sprites are predominantly red luminous events above active thunderstorms, with tendril-like structures and durations of a few milliseconds.",
      },
    },
    {
      key: "weather-light-pillars",
      question:
        "What can make ordinary streetlights appear to fire tall colored beams into the night sky?",
      answer:
        "Flat ice crystals suspended in the air reflect the lights into apparent vertical columns called light pillars.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Light Pillar",
        url: "https://www.weather.gov/owlie/weird-weather#asd9",
        note: "The NWS explains that nearly horizontal, plate-shaped ice crystals reflect strong light sources, including streetlights, producing apparent columns.",
      },
    },
    {
      key: "weather-aircraft-fallstreak-hole",
      question:
        "How can an aircraft leave a widening circular gap in an otherwise unbroken cloud layer?",
      answer:
        "It triggers ice formation in supercooled droplets; the growing crystals fall out and leave a hole behind.",
      source: {
        title: "NOAA NESDIS — Fallstreak Clouds",
        url: "https://www.nesdis.noaa.gov/fallstreak-clouds",
        note: "Expansion and cooling around an aircraft can trigger freezing in supercooled cloud droplets. Crystals grow and fall, producing an expanding fallstreak hole.",
      },
    },
    {
      key: "weather-mammatus-pouches",
      question: "What does a display of mammatus look like?",
      answer:
        "Rows of rounded pouches hanging from a cloud's underside, often beneath a thunderstorm's anvil.",
      source: {
        title: "National Weather Service — Cloud Classification",
        url: "https://www.weather.gov/lmk/cloud_classification",
        note: "Mammatus are described as a drooping, pouch-like cloud underside, most often beneath an anvil; their presence alone does not establish severe weather.",
      },
    },
    {
      key: "weather-diamond-dust",
      question: "What is diamond dust?",
      answer: "Tiny ice crystals falling from an apparently cloudless sky.",
      source: {
        title: "American Meteorological Society — Glossary: Diamond dust",
        url: "https://glossary.ametsoc.org/wiki/diamond-dust/",
        note: "The glossary defines diamond dust as small ice crystals falling from an apparently cloudless sky, often but not always at night.",
      },
    },
    {
      key: "weather-fogbow-whiteness",
      question:
        "Why can an outdoor bow look like a broad white arc rather than a band of distinct colors?",
      answer:
        "Tiny fog droplets spread and overlap its colors, creating a pale fogbow instead of a vivid rain shower's rainbow.",
      source: {
        title: "American Meteorological Society — Glossary: Cloudbow",
        url: "https://glossary.ametsoc.org/wiki/cloudbow/",
        note: "Also called a fogbow or white rainbow, a cloudbow forms in droplets smaller than raindrops and has a broad, whitish, faintly colored appearance.",
      },
    },
    {
      key: "weather-moonlight-rainbow",
      question: "What can produce a rainbow outdoors long after the sun has set?",
      answer:
        "Moonlight can illuminate droplets to make a moonbow, often too dim for the eye to distinguish its colors.",
      source: {
        title: "American Meteorological Society — Glossary: Lunar rainbow",
        url: "https://glossary.ametsoc.org/wiki/lunar-rainbow/",
        note: "A lunar rainbow uses the moon as its light source. Low luminance and reduced human color sensitivity can make it appear nearly colorless.",
      },
    },
    {
      key: "weather-circumzenithal-arc",
      question: "What is a circumzenithal arc?",
      answer:
        "A brightly colored, upside-down-looking arc high overhead, made by sunlight passing through horizontal ice crystals.",
      source: {
        title: "American Meteorological Society — Glossary: Circumzenithal arc",
        url: "https://glossary.ametsoc.org/wiki/circumzenithal-arc/",
        note: "Light enters the horizontal bases of oriented ice crystals and exits their vertical sides, forming an arc centered on the zenith when the sun is low.",
      },
    },
    {
      key: "weather-anticrepuscular-rays",
      question: "Why can shafts of sunlight seem to converge on the horizon opposite the sun?",
      answer:
        "Parallel light-and-shadow bands appear to converge in perspective; their far-side display is called anticrepuscular rays.",
      source: {
        title: "American Meteorological Society — Glossary: Anticrepuscular rays",
        url: "https://glossary.ametsoc.org/wiki/anticrepuscular-rays/",
        note: "Anticrepuscular rays extend crepuscular rays across the sky toward the antisolar point. NWS Owlie's Weird Weather explains that the apparent convergence is perspective.",
      },
    },
    {
      key: "weather-belt-of-venus",
      question: "What is the Belt of Venus?",
      answer: "A pinkish band above Earth's shadow, visible opposite the sun around twilight.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Earth's Shadow",
        url: "https://www.weather.gov/owlie/weird-weather#asd15",
        note: "The NWS describes Earth's dark bluish shadow opposite the rising or setting sun, often topped by a pink strip called the Belt of Venus.",
      },
    },
    {
      key: "weather-ball-lightning-reports",
      question:
        "What has been reported drifting near recent strike sites before vanishing, sometimes with a bang?",
      answer:
        "Ball lightning: short-lived glowing spheres whose natural formation mechanism remains unresolved.",
      source: {
        title: "American Meteorological Society — Glossary: Ball lightning",
        url: "https://glossary.ametsoc.org/wiki/ball-lightning/",
        note: "Witness descriptions include floating orange or reddish spheres near thunderstorms or recent lightning strikes, lasting seconds. Laboratory lookalikes do not settle the natural mechanism.",
      },
    },
    {
      key: "weather-thunder-inversion",
      question:
        "How can the arrangement of warm and cool air make the same thunderclap sound unusually loud at ground level?",
      answer:
        "A warm layer above cooler air can bend sound back toward the ground, adding to the direct thunderclap.",
      source: {
        title: "NOAA JetStream — The Sound of Thunder",
        url: "https://www.noaa.gov/jetstream/lightning/sound-of-thunder",
        note: "NOAA explains that an inversion refracts sound toward Earth because sound travels faster in warmer air; the extra sound can amplify perceived thunder.",
      },
    },
    {
      key: "weather-thunder-long-rumble",
      question:
        "Why can a momentary flash be followed by a long rolling rumble even across a flat landscape?",
      answer:
        "Sound from different parts of the lightning channel reaches the listener at different times.",
      source: {
        title: "American Meteorological Society — Glossary: Thunder",
        url: "https://glossary.ametsoc.org/wiki/thunder/",
        note: "The glossary says thunder's rumble chiefly comes from differing arrival times along the sinuous lightning channel, with echoes and repeated strokes contributing secondarily.",
      },
    },
    {
      key: "weather-graupel-pellets",
      question: "What is graupel?",
      answer:
        "Soft, crushable ice pellets formed when supercooled droplets freeze onto falling ice crystals or snowflakes.",
      source: {
        title: "American Meteorological Society — Glossary: Graupel",
        url: "https://glossary.ametsoc.org/wiki/graupel/",
        note: "The glossary defines white, opaque, easily crushed ice particles produced as supercooled droplets accrete and freeze onto falling ice crystals; operationally called snow pellets.",
      },
    },
    {
      key: "weather-saharan-dirty-rain",
      question: "Why did rain leave reddish deposits on cars in southern England in March 2022?",
      answer: "It washed airborne Saharan dust out of the sky and onto the cars.",
      source: {
        title:
          "Royal Meteorological Society — Orange skies and dusty cars? Blame it on Saharan sand",
        url: "https://www.rmets.org/metmatters/orange-skies-and-dusty-cars",
        note: "The article documents the March 2022 dust plume reaching southeast England and explains that rainfall washed it onto surfaces, leaving reddish deposits.",
      },
    },
    {
      key: "weather-haboob-wall",
      question: "What is a haboob?",
      answer: "A moving wall of dust raised by strong outflow from a thunderstorm.",
      source: {
        title: "National Weather Service — Owlie's Weird Weather: Haboob",
        url: "https://www.weather.gov/owlie/weird-weather#asd3",
        note: "The NWS describes thunderstorm outflow or a microburst lifting dust and debris into a wall that may be thousands of feet high and miles wide.",
      },
    },
    {
      key: "weather-frost-flower-ribbons",
      question:
        "How can a dead-looking weed produce delicate white ribbons at its base on a freezing morning?",
      answer:
        "Groundwater drawn up its stem freezes, splits the stem, and extrudes curling sheets of ice called frost flowers.",
      source: {
        title: "National Weather Service — Frost Flowers",
        url: "https://www.weather.gov/lmk/frost_flowers",
        note: "The NWS account describes capillary water rising from unfrozen soil, freezing and splitting stems, then emerging as thin curling ice ribbons.",
      },
    },
    {
      key: "weather-parhelion-mock-suns",
      question: "What is a parhelion?",
      answer:
        "A bright mock sun beside the real one, produced when sunlight is refracted through airborne ice crystals.",
      source: {
        title: "National Weather Service — What Causes Halos, Sundogs and Sun Pillars?",
        url: "https://www.weather.gov/arx/why_halos_sundogs_pillars",
        note: "Sundogs, also called parhelia or mock suns, are colored spots about 22 degrees to either side of the sun produced by refraction through ice crystals.",
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
