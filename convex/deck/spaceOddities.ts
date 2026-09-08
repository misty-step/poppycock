import { definePack } from "./types";

export const spaceOddities = definePack(
  {
    key: "space-oddities",
    title: "Space oddities",
    blurb: "Spaceflight incidents, engineering, astronomical naming, and planetary phenomena.",
    category: "Space oddities",
    sort: 40,
  },
  [
    {
      key: "space-gemini-sandwich",
      question: "What unauthorized snack did John Young pull from his spacesuit during Gemini III?",
      answer: "A corned beef sandwich.",
      source: {
        title: "NASA History — Fallout from the Unauthorized Gemini III Space Sandwich",
        url: "https://www.nasa.gov/history/fallout-from-the-unauthorized-gemini-iii-space-sandwich/",
        note: "Original game wording based on Jennifer Ross-Nazzal's mission history and its flight-record account. No quotations or NASA media reproduced.",
      },
    },
    {
      key: "space-apollo-golf-tool",
      question:
        "What improvised piece of sports equipment did Alan Shepard make from a lunar sample-tool handle?",
      answer: "A golf club, by attaching the head of a six-iron.",
      source: {
        title: "NASA History — 50 Years Ago: Apollo 14 Lands at Fra Mauro",
        url: "https://www.nasa.gov/history/50-years-ago-apollo-14-lands-at-fra-mauro/",
        note: "Original game wording based on John Uri's account of the second moonwalk. No quotations or media reproduced.",
      },
    },
    {
      key: "space-apollo-feather",
      question: "Why did Apollo 15 use a falcon feather alongside a geological hammer on the Moon?",
      answer:
        "To drop them together and show that both fall at the same rate without air resistance.",
      source: {
        title: "NASA Science — The Apollo 15 Hammer-Feather Drop",
        url: "https://science.nasa.gov/resource/the-apollo-15-hammer-feather-drop/",
        note: "Original game wording based on the demonstration summary and the cited Apollo 15 Preliminary Science Report, p. 2-11. No transcript or video reused.",
      },
    },
    {
      key: "space-gemini-music",
      question:
        "What instruments did Gemini VI astronauts use for their live orbital performance of 'Jingle Bells'?",
      answer: "A tiny harmonica and a handful of small bells.",
      source: {
        title: "NASA History — 55 Years Ago: The Spirit of 76 — The First Rendezvous in Space",
        url: "https://www.nasa.gov/history/55-years-ago-the-spirit-of-76-the-first-rendezvous-in-space/",
        note: "Original game wording based on the mission account of the December 1965 performance; no lyrics, recording, or museum image reused.",
      },
    },
    {
      key: "space-curiosity-wheel-code",
      question: "Why do Curiosity's wheels stamp a repeating Morse-code pattern into Martian soil?",
      answer: "The marks provide visual reference points to measure travel and detect wheel slip.",
      source: {
        title: "NASA JPL — Rover Leaves Tracks in Morse Code",
        url: "https://www.jpl.nasa.gov/news/rover-leaves-tracks-in-morse-code/",
        note: "Original factual paraphrase of JPL's engineering account of visual odometry. The pattern spells JPL; no copyrighted JPL text or imagery copied.",
      },
    },
    {
      key: "space-moon-trees",
      question: "What makes an original Apollo 'Moon Tree' different from an ordinary tree?",
      answer: "It grew on Earth from a seed carried around the Moon aboard Apollo 14.",
      source: {
        title: "NASA History — Moon Trees",
        url: "https://www.nasa.gov/history/moon-trees/",
        note: "Original game wording based on the Apollo 14 Moon Trees section. The seeds orbited with Stuart Roosa; they were not planted on the Moon.",
      },
    },
    {
      key: "space-mercury-double-sunrise",
      question:
        "What strange trick can the morning Sun perform when viewed from some places on Mercury?",
      answer: "Rise, dip back below the horizon, then rise again.",
      source: {
        title: "NASA Science — Mercury Facts",
        url: "https://science.nasa.gov/mercury/facts/",
        note: "Original game wording based on the Orbit and Rotation section. The effect applies to some locations, not every Mercurian sunrise.",
      },
    },
    {
      key: "space-mercury-crater-names",
      question: "What sort of people lend their names to craters on Mercury?",
      answer: "Deceased artists, musicians, and writers.",
      source: {
        title: "NASA Science — Mercury Facts",
        url: "https://science.nasa.gov/mercury/facts/",
        note: "Original game wording based on the Surface section's crater-naming convention; no article prose copied.",
      },
    },
    {
      key: "space-zoozve-name",
      question: "How did Venus's companion asteroid Zoozve get its peculiar name?",
      answer:
        "An illustrator misread his handwritten '2002 VE' as 'Zoozve' on a children's space poster.",
      source: {
        title: "NASA Science — Venus Facts: How Zoozve Got Its Name",
        url: "https://science.nasa.gov/venus/venus-facts/",
        note: "Original factual paraphrase of the naming history. The artist's mistake became the asteroid's official name in 2024; no poster art reused.",
      },
    },
    {
      key: "space-venus-rotation",
      question:
        "What odd comparison can you make between one full spin of Venus and one Venus year?",
      answer: "One full spin takes longer than the planet's entire trip around the Sun.",
      source: {
        title: "NASA Science — Venus Facts",
        url: "https://science.nasa.gov/venus/venus-facts/",
        note: "Original game wording based on Orbit and Rotation: about 243 Earth days per spin and 225 per orbit. A full spin is not a sunrise-to-sunrise day.",
      },
    },
    {
      key: "space-uranus-george",
      question: "Whom did William Herschel try to honor by naming Uranus 'Georgium Sidus'?",
      answer: "King George III of Britain.",
      source: {
        title: "NASA Science — Uranus Facts",
        url: "https://science.nasa.gov/uranus/facts/",
        note: "Original game wording based on the Namesake section's account of Herschel's unsuccessful proposed name.",
      },
    },
    {
      key: "space-uranus-literary-moons",
      question:
        "Where do the names of Uranus's moons come from, instead of the usual classical gods?",
      answer: "Characters in works by William Shakespeare and Alexander Pope.",
      source: {
        title: "NASA Science — Uranus Facts",
        url: "https://science.nasa.gov/uranus/facts/",
        note: "Original game wording based on the Moons section. No source wording beyond proper names is reproduced.",
      },
    },
    {
      key: "space-uranus-long-winter",
      question: "Why can a pole of Uranus face a winter with roughly 21 years of darkness?",
      answer:
        "The planet spins almost on its side, leaving a pole turned away from the Sun for years.",
      source: {
        title: "NASA Science — Uranus Facts",
        url: "https://science.nasa.gov/uranus/facts/",
        note: "Original game wording based on the Orbit and Rotation section's extreme axial tilt and long polar winter.",
      },
    },
    {
      key: "space-triton-backwards",
      question: "What is unusual about the direction Neptune's large moon Triton travels?",
      answer: "It orbits against the direction in which Neptune spins.",
      source: {
        title: "NASA Science — Triton",
        url: "https://science.nasa.gov/neptune/moons/triton/",
        note: "Original game wording based on the Overview section's retrograde orbit. The card makes no claim that all retrograde moons are unique.",
      },
    },
    {
      key: "space-titan-lakes",
      question: "What fills the lakes and seas on the surface of Saturn's moon Titan?",
      answer: "Liquid hydrocarbons, especially methane and ethane.",
      source: {
        title: "NASA Science — Titan Facts",
        url: "https://science.nasa.gov/saturn/moons/titan/facts/",
        note: "Original game wording based on the Introduction and Surface sections. Surface lakes are distinguished from the possible subsurface water ocean.",
      },
    },
    {
      key: "space-titan-dunes",
      question: "What is the dark 'sand' in Titan's vast dune fields made from?",
      answer: "Carbon-rich hydrocarbon grains rather than ordinary rocky sand.",
      source: {
        title: "NASA Science — Titan Facts",
        url: "https://science.nasa.gov/saturn/moons/titan/facts/",
        note: "Original game wording based on the Surface and Atmosphere sections describing organic material settling into dune fields.",
      },
    },
    {
      key: "space-enceladus-ring",
      question: "How does the little moon Enceladus help keep Saturn's E ring supplied?",
      answer:
        "Its jets spray icy particles into space, and some spread around Saturn as ring material.",
      source: {
        title: "NASA Science — Enceladus",
        url: "https://science.nasa.gov/saturn/moons/enceladus/",
        note: "Original game wording based on the Overview section. Only some ejected material enters the ring; much falls back onto the moon.",
      },
    },
    {
      key: "space-io-missing-craters",
      question:
        "Why does Jupiter's moon Io lack the large impact craters seen on many other moons?",
      answer: "Constant volcanic deposits resurface it faster than large craters can accumulate.",
      source: {
        title: "NASA Science — Io",
        url: "https://science.nasa.gov/jupiter/jupiter-moons/io/",
        note: "Original game wording based on the opening explanation of rapid volcanic resurfacing; no NASA or partner media reused.",
      },
    },
    {
      key: "space-mars-rust",
      question: "Why does Mars look reddish from a distance?",
      answer: "Iron in its rocks, dust, and soil oxidizes, or rusts.",
      source: {
        title: "NASA Science — Mars Facts",
        url: "https://science.nasa.gov/mars/facts/",
        note: "Original game wording based on the Namesake and Surface sections. Up close the surface also shows brown, gold, and tan.",
      },
    },
    {
      key: "space-olympus-mons",
      question: "What makes Olympus Mons stand out among volcanoes in the solar system?",
      answer: "It is the largest, more than 25 miles tall from base to summit.",
      source: {
        title: "NASA Science — Mars Facts",
        url: "https://science.nasa.gov/mars/facts/",
        note: "Original game wording based on The Largest Volcano. Earth's Mount Everest is cited only as a smaller comparison, not as a Mars feature.",
      },
    },
    {
      key: "space-valles-marineris",
      question: "How vast is Mars's canyon system Valles Marineris?",
      answer:
        "Long enough to stretch from California to New York, and the solar system's largest canyon.",
      source: {
        title: "NASA Science — Mars Facts",
        url: "https://science.nasa.gov/mars/facts/",
        note: "Original game wording based on A Very Large Canyon. Length, not depth, is the California-to-New-York comparison.",
      },
    },
    {
      key: "space-great-red-spot",
      question: "What is Jupiter's Great Red Spot?",
      answer: "A giant storm bigger than Earth that has raged for hundreds of years.",
      source: {
        title: "NASA Science — Jupiter Facts",
        url: "https://science.nasa.gov/jupiter/jupiter-facts/",
        note: "Original game wording based on the introduction and atmosphere sections. Observed for more than 300 years.",
      },
    },
    {
      key: "space-jupiter-short-day",
      question: "What extreme timekeeping fact belongs to Jupiter despite its huge size?",
      answer: "It has the shortest day in the solar system, about 9.9 hours.",
      source: {
        title: "NASA Science — Jupiter Facts",
        url: "https://science.nasa.gov/jupiter/jupiter-facts/",
        note: "Original game wording based on the opening and Orbit and Rotation sections. A Jovian year is about 12 Earth years.",
      },
    },
    {
      key: "space-europa-ocean",
      question:
        "What lies beneath the icy shell of Jupiter's moon Europa, according to strong evidence?",
      answer: "A saltwater ocean that may hold twice as much water as Earth's oceans.",
      source: {
        title: "NASA Science — Europa",
        url: "https://science.nasa.gov/jupiter/jupiter-moons/europa/",
        note: "Original factual paraphrase. The card states evidence for an ocean, not a claim that life has been found.",
      },
    },
    {
      key: "space-pluto-name",
      question: "Who suggested the name Pluto after the ninth planet's discovery in 1930?",
      answer: "Eleven-year-old Venetia Burney of Oxford, England.",
      source: {
        title: "NASA Science — Pluto Facts",
        url: "https://science.nasa.gov/dwarf-planets/pluto/facts/",
        note: "Original game wording based on the Namesake section. She suggested the Roman god of the underworld over breakfast; her grandfather forwarded it.",
      },
    },
    {
      key: "space-pluto-dwarf",
      question: "Why did the IAU reclassify Pluto as a dwarf planet in 2006?",
      answer: "It has not cleared its orbit of other debris.",
      source: {
        title: "NASA Science — Pluto Facts",
        url: "https://science.nasa.gov/dwarf-planets/pluto/facts/",
        note: "Original game wording based on the 2006 IAU dwarf-planet definition quoted on the page. Other objects may cross Pluto's path in the trans-Neptunian region.",
      },
    },
    {
      key: "space-phobos-doom",
      question: "What is expected to happen to Mars's inner moon Phobos in about 50 million years?",
      answer: "It will crash into Mars or break apart.",
      source: {
        title: "NASA Science — Mars Facts",
        url: "https://science.nasa.gov/mars/facts/",
        note: "Original game wording based on the Moons and Rings sections. A dusty ring is one possible outcome if it breaks apart.",
      },
    },
  ],
);
