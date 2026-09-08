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
      key: "space-salyut-7-frozen",
      question:
        "What eerie condition did cosmonauts find inside the dead Soviet Salyut 7 station during their 1985 rescue mission?",
      answer: "It was pitch-black, below freezing, and coated in a thick layer of frost and ice.",
      source: {
        title: "NASA SP-4225 — Mir Hardware Heritage: Salyut 7 Principal Expedition 4",
        url: "https://www.nasa.gov/wp-content/uploads/static/history/SP-4225/documentation/mhh/mirheritage.pdf",
        note: "Original question and factual summary. Cosmonauts Dzhanibekov and Savinykh docked manually with the dead station; all systems were dark and freezing with frost on every surface.",
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
      key: "space-apollo-12-lightning",
      question:
        "Thirty-six seconds after liftoff, what catastrophic emergency struck the Apollo 12 rocket, nearly forcing an abort?",
      answer:
        "It was struck by lightning twice, knocking out electrical power and scrambling all telemetry.",
      source: {
        title: "NASA — Apollo 12 Spacecraft Commentary",
        url: "https://www.nasa.gov/wp-content/uploads/2026/01/as12-cm.pdf?emrc=dabf2a",
        note: "Original question and factual summary. Lightning discharged through the Saturn V twice in early ascent, knocking fuel cells offline until controller John Aaron called 'Try SCE to aux'.",
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
      key: "space-soviet-shotgun",
      question:
        "Why was a triple-barreled shotgun with a machete stock included in Soviet cosmonaut survival kits?",
      answer: "To fend off aggressive brown bears and wolves after landing in Siberia.",
      source: {
        title: "BBC News — Sent into space: Guns, a lamb chop and sea urchin sperm",
        url: "https://www.bbc.com/news/uk-england-34964686",
        note: "Original question and factual summary. Soviet cosmonauts carried the TP-82 triple-barrel pistol and machete stock for protection against wildlife if stranded after Earth landing.",
      },
    },
    {
      key: "space-scent-of-space",
      question:
        "What distinct scent do spacewalking astronauts consistently report when re-entering the spacecraft airlock?",
      answer: "Hot metal, charred meat, and spent gunpowder.",
      source: {
        title:
          "BBC Future — From cat urine to gunpowder: Exploring the peculiar smells of outer space",
        url: "https://www.bbc.com/future/article/20250522-what-does-outer-space-smell-like",
        note: "Original question and factual summary. Astronauts report persistent smells of hot metal, burnt steak, and spent gunpowder clinging to suits after spacewalks.",
      },
    },
    {
      key: "space-aldrin-communion",
      question:
        "What private religious ritual did Buzz Aldrin perform inside the Lunar Module shortly after landing on the Moon?",
      answer: "He took Christian communion with wine and bread.",
      source: {
        title: "BBC News — Sent into space: Guns, a lamb chop and sea urchin sperm",
        url: "https://www.bbc.com/news/uk-england-34964686",
        note: "Original question and factual summary. Aldrin poured communion wine into a chalice and consumed consecrated bread inside the Eagle before the moonwalk.",
      },
    },
    {
      key: "space-south-atlantic-anomaly",
      question:
        "What eerie phenomenon do astronauts experience when passing through the 'South Atlantic Anomaly' in orbit?",
      answer: "Seeing phantom flashes of light in their eyes even with eyelids closed.",
      source: {
        title: "NASA — Seeing Cosmic Rays in Space",
        url: "https://www.nasa.gov/wp-content/uploads/2021/11/seeingcosmicraysinspace.pdf",
        note: "Original question and factual summary. Trapped high-energy protons striking astronaut retinas cause visible light flashes in the dark; radiation also triggers laptop crashes.",
      },
    },
    {
      key: "space-pencil-graphite-hazard",
      question:
        "Why did both NASA and Soviet space programs stop using ordinary pencils in spacecraft?",
      answer: "Broken graphite conducts electricity and floats into circuitry, risking fires.",
      source: {
        title:
          "Scientific American — Fact or Fiction?: NASA Spent Millions to Develop a Pen that Would Write in Space",
        url: "https://www.scientificamerican.com/article/fact-or-fiction-nasa-spen/",
        note: "Original question and factual summary. Pencils were replaced by pressurized Fisher space pens because floating conductive graphite shards caused electrical short circuits and fire hazards.",
      },
    },
    {
      key: "space-parmitano-water-leak",
      question:
        "In 2013, why did European astronaut Luca Parmitano's spacewalk outside the ISS have to be aborted as a life-threatening emergency?",
      answer:
        "Over a liter of water leaked from his suit's cooling loop into his helmet, blinding his eyes and nostrils in zero gravity.",
      source: {
        title: "NASA Technical Reports Server (NTRS) — ISS EVA 23 Lessons Learned",
        url: "https://ntrs.nasa.gov/citations/20230002544",
        note: "Original question and factual summary. NASA EVA 23 report documents water accumulating in the helmet from cooling loop contamination, covering the astronaut's eyes and nose.",
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
      key: "space-shoemaker-moon-burial",
      question: "Whose cremated remains are currently the only human ashes buried on the Moon?",
      answer:
        "Planetary geologist Eugene Shoemaker, carried aboard NASA's Lunar Prospector in 1999.",
      source: {
        title: "NASA Science — Lunar Prospector",
        url: "https://science.nasa.gov/mission/lunar-prospector/",
        note: "Original question and factual summary. NASA's Lunar Prospector deliberately impacted the Moon at Shoemaker crater in July 1999 carrying a capsule of the planetary scientist's ashes.",
      },
    },
    {
      key: "space-voyager-love-brainwaves",
      question:
        "What biological human recording was encoded onto the Voyager Golden Record sent into interstellar space?",
      answer: "The brainwaves and heartbeats of a woman meditating on falling in love.",
      source: {
        title: "NASA JPL — Voyager Set to Enter Interstellar Space",
        url: "https://www.jpl.nasa.gov/news/voyager-set-to-enter-interstellar-space/",
        note: "Original question and factual summary. Creative director Ann Druyan had her EEG and ECG recorded while thinking about her feelings of love for Carl Sagan, compressed into audio for the Golden Record.",
      },
    },
  ],
);
