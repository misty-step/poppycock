import { definePack } from "./types";

export const failedInventions = definePack(
  {
    key: "failed-inventions",
    title: "Failed inventions",
    blurb:
      "Ambitious dead ends and eccentric patents for doing ordinary things in extraordinary ways.",
    category: "Failed inventions",
    sort: 180,
  },
  [
    {
      key: "failed-ordnance-plow",
      question:
        "What extra job did C. M. French and W. H. Fancher propose for a farm implement in 1862?",
      answer: "Their plow doubled as a cannon, with its hollow beam serving as the barrel.",
      source: {
        title: "US Patent 35600 — Improvement in combined plow and gun",
        url: "https://patents.google.com/patent/US35600A/en",
        note: "The patent combines a plow with light ordnance; its hollow beam is bored for projectiles and the share anchors it against recoil.",
      },
    },
    {
      key: "failed-walking-boiler",
      question: "How did Dederick and Grass propose to move their 1868 vehicle without a horse?",
      answer:
        "A human-shaped steam machine would walk on mechanical legs while pulling the carriage.",
      source: {
        title: "US Patent 75874 — Improvement in steam-carriage",
        url: "https://patents.google.com/patent/US75874A/en",
        note: "The specification describes a human-shaped boiler and engine operating levers that imitate walking legs and draw an attached vehicle.",
      },
    },
    {
      key: "failed-dymaxion-steering",
      question:
        "What unconventional arrangement made Buckminster Fuller's 1933 car especially tricky to control?",
      answer: "It had three wheels and steered with the single wheel at the back.",
      source: {
        title:
          "Smithsonian Magazine — Buckminster Fuller Was Good at Ideas, Terrible at Car Design",
        url: "https://www.smithsonianmag.com/smart-news/buckminster-fuller-was-good-ideas-terrible-car-design-180963983/",
        note: "The Dymaxion had three wheels and rear-wheel steering. Only three were built; the card makes no claim about which wheels provided propulsion.",
      },
    },
    {
      key: "failed-brennan-balance",
      question: "What was unusual about the railway Louis Brennan demonstrated in the early 1900s?",
      answer: "Its vehicles balanced on a single rail using spinning gyroscopes.",
      source: {
        title: "Science Museum Group — Brennan’s Gyroscopic Mono-rail Car",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co27065/brennans-gyroscopic-mono-rail-car",
        note: "Brennan built a 1:8 demonstration model in 1907 and a full-size gyroscopically stabilized single-rail vehicle in 1909; investment did not follow.",
      },
    },
    {
      key: "failed-edison-house",
      question: "How did Thomas Edison hope to manufacture inexpensive homes in the early 1900s?",
      answer: "By pouring concrete into reusable metal molds to cast whole houses.",
      source: {
        title: "Smithsonian Magazine — Thomas Edison’s Brief Stint As A Homemaker",
        url: "https://www.smithsonianmag.com/history/thomas-edisons-brief-stint-as-a-homemaker-114900219/",
        note: "Edison planned mass-produced concrete houses. The venture failed largely because the reusable metal molds proved difficult to create.",
      },
    },
    {
      key: "failed-cinema-vents",
      question:
        "What did special vents under cinema seats deliver during screenings of a 1960 mystery film?",
      answer: "Timed odors, intended to accompany the action on screen.",
      source: {
        title: "Smithsonian Magazine — Smell-O-Vision and Other Film Industry Flops",
        url: "https://www.smithsonianmag.com/innovation/smell-o-vision-astrocolor-other-film-industry-inventions-that-proved-to-be-flops-180968295/",
        note: "Smell-O-Vision released 30 odors from under-seat vents; the film was Scent of Mystery.",
      },
    },
    {
      key: "failed-interfilm-voting",
      question:
        "What could moviegoers do with the three-button controls fitted to some cinema armrests in the 1990s?",
      answer: "Vote on what should happen next in the movie.",
      source: {
        title: "Smithsonian Magazine — Interfilm’s Interactive-Cinema Experiment",
        url: "https://www.smithsonianmag.com/innovation/smell-o-vision-astrocolor-other-film-industry-inventions-that-proved-to-be-flops-180968295/",
        note: "Interfilm paused its LaserDisc movie every few minutes, giving viewers ten seconds to vote for one of three story paths.",
      },
    },
    {
      key: "failed-astrocolor-film",
      question:
        "What ran beside the overhead luggage compartments in American Airlines' Astrocolor system?",
      answer: "An actual strip of movie film, threaded through projectors along the cabin.",
      source: {
        title: "Smithsonian Magazine — Astrocolor’s Flying Film Projector",
        url: "https://www.smithsonianmag.com/innovation/smell-o-vision-astrocolor-other-film-industry-inventions-that-proved-to-be-flops-180968295/",
        note: "Astrocolor used several small screens with individual rear projectors. Nearly 300 feet of film ran through the cabin’s gears and loops at a time.",
      },
    },
    {
      key: "failed-c5-factory",
      question: "Which familiar appliance manufacturer built the Sinclair C5 in 1985?",
      answer: "Hoover, at its factory in Merthyr Tydfil, Wales.",
      source: {
        title: "Science Museum Group — Sinclair C5 Electric Vehicle",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8413609/sinclair-c5-electric-vehicle",
        note: "Hoover made the C5 for Sinclair Vehicles. The museum records 14,000 produced, about 4,500 sold, and production ending in under a year.",
      },
    },
    {
      key: "failed-beach-tube",
      question:
        "What propelled the passenger car in Alfred Ely Beach's short-lived 1870 New York demonstration?",
      answer: "Air pressure pushed it through an underground tube.",
      source: {
        title: "Smithsonian Magazine — 12 Secrets of the New York Subway",
        url: "https://www.smithsonianmag.com/travel/secrets-new-york-city-subway-180958683/",
        note: "Beach’s 300-foot demonstration subway operated on pneumatic power from 1870 to 1873.",
      },
    },
    {
      key: "failed-inside-wheel",
      question:
        "Where did Allen Greene and Elisha Dyer put the rider in their 1869 vehicle design?",
      answer: "On a seat hanging inside one enormous wheel, between its two sets of spokes.",
      source: {
        title: "US Patent 91535 — Improvement in velocipede",
        url: "https://patents.google.com/patent/US91535A/en",
        note: "The claimed spheroidal single-rim wheel has two spoke sets and a pendent seat within the wheel, with crank-and-treadle drive.",
      },
    },
    {
      key: "failed-falling-corks",
      question:
        "How did Samuel Applegate's 1882 apparatus rouse someone who slept through ordinary alarms?",
      answer: "It dropped cork or light-wood blocks on cords into the sleeper’s face.",
      source: {
        title: "US Patent 256265 — Device for waking persons from sleep",
        url: "https://patents.google.com/patent/US256265A/en",
        note: "Applegate suspended a light frame over the bed; a clock released it so dangling blocks contacted the sleeper, while a stop kept the frame itself away.",
      },
    },
    {
      key: "failed-bunny-syringe",
      question:
        "What did Robert Smeton's 1967 design disguise as a rabbit to make children less apprehensive?",
      answer: "A hypodermic syringe.",
      source: {
        title:
          "US Patent 3299891 — Hypodermic syringes and attachments thereto pleasing to children",
        url: "https://patents.google.com/patent/US3299891A/en",
        note: "Smeton proposed animal-shaped syringe barrels and attachments to reduce children’s fear; the illustrated example is a rabbit.",
      },
    },
    {
      key: "failed-magnetic-pacifier",
      question: "What extra task was Milan Mudrinich's 1969 pacifier intended to perform?",
      answer:
        "Use a magnet inside its nipple to retrieve pins, tacks or nails from a baby’s mouth.",
      source: {
        title: "US Patent 3455292 — Infant’s pacifier with magnetic nipple",
        url: "https://patents.google.com/patent/US3455292A/en",
        note: "The patent explicitly proposes extracting magnetizable objects from an infant’s mouth; this records the proposal, not a safe childcare practice.",
      },
    },
    {
      key: "failed-infant-guard",
      question: "What everyday habit did Miriam Ellis's 1942 wearable device aim to prevent?",
      answer: "Thumb-sucking, by covering a baby’s mouth with a perforated plastic face guard.",
      source: {
        title: "US Patent 2276612 — Face guard for infants",
        url: "https://patents.google.com/patent/US2276612A/en",
        note: "The patent describes a soft, transparent, perforated plastic guard, intended to prevent thumb-sucking and ingestion of lint or other foreign matter.",
      },
    },
    {
      key: "failed-nursing-tubes",
      question:
        "What was Hugh Cunningham's 1910 arrangement of straps, cups and rubber tubes intended to let a mother do?",
      answer: "Breastfeed through tubing without uncovering her chest.",
      source: {
        title: "US Patent 949414 — Nursing attachment",
        url: "https://patents.google.com/patent/US949414A/en",
        note: "The patent routes milk from cups over the nipples to an artificial nursing nipple on a tube, specifically to avoid exposing the breasts in public.",
      },
    },
    {
      key: "failed-pedal-mower",
      question:
        "What useful task would a rider perform while pedaling the tricycle in US Patent 4,455,816?",
      answer: "Mow the lawn: the pedals drove both the vehicle and its cutting blades.",
      source: {
        title: "US Patent 4455816 — Tricycle lawn mower",
        url: "https://patents.google.com/patent/US4455816A/en",
        note: "The abstract describes pedal-driven sprockets connected to the cutting shaft and rear wheels; the grant was in 1984.",
      },
    },
    {
      key: "failed-retainer-alarm",
      question:
        "What lapse was the mouth-mounted apparatus in a 1988 patent designed to call attention to?",
      answer: "Leaving an orthodontic retainer out for too long.",
      source: {
        title: "US Patent 4764111 — Apparatus for reminding a user of a desired activity",
        url: "https://patents.google.com/patent/US4764111A/en",
        note: "The patent and Smithsonian’s parenting-patent roundup describe a mouth-mounted alarm that detects prolonged absence of a retainer.",
      },
    },
    {
      key: "failed-flaming-trumpet",
      question:
        "What could a musician send out of an instrument under US Patent 4,247,283, besides music?",
      answer: "A controllable flame from the bell of a trumpet.",
      source: {
        title: "US Patent 4247283 — Flaming trumpet",
        url: "https://patents.google.com/patent/US4247283A/en",
        note: "The 1981 patent describes a gas cartridge, tubing, control valve and spark mechanism, with flame intensity and duration controlled by the performer.",
      },
    },
    {
      key: "failed-body-sail",
      question:
        "What was Raymond Dansereau's 1973 arrangement of body attachments supposed to turn its wearer into?",
      answer: "A human sailboat, with floats, a mast and a sail attached to the body.",
      source: {
        title: "US Patent 3771181 — Body sail",
        url: "https://patents.google.com/patent/US3771181A/en",
        note: "The abstract specifies floats attached at the head, torso and feet, with a detachable mast and sail for propulsion.",
      },
    },
    {
      key: "failed-body-skis",
      question:
        "Why did one 1992 patent equip a person with a smooth chest covering and smaller pieces on the thighs?",
      answer: "To let the body itself skim across waves like a surfboard.",
      source: {
        title: "US Patent 5173068 — Body surfing apparatus",
        url: "https://patents.google.com/patent/US5173068A/en",
        note: "The abstract describes a semirigid body ski to reduce hydrodynamic drag, with an embodiment adding thigh skis.",
      },
    },
    {
      key: "failed-balloon-fishing",
      question: "What unusual helper did US Patent 3,698,121 recruit to bring in a catch?",
      answer:
        "A lighter-than-air balloon that could lift a hooked fish toward the water’s surface.",
      source: {
        title: "US Patent 3698121 — Buoyant float fishing apparatus",
        url: "https://patents.google.com/patent/US3698121A/en",
        note: "The 1972 patent uses an already inflated balloon and a water-filled container. Gas displaces the water, lightening the assembly so the balloon can lift the catch.",
      },
    },
    {
      key: "failed-diving-funnel",
      question:
        "How would Einar Jensen Valeur's 1922 outfit let its wearer breathe while working below the surface?",
      answer: "Through a wide, open neck extending above the water, held up by a buoyant ring.",
      source: {
        title: "US Patent 1420640 — Diving suit",
        url: "https://patents.google.com/patent/US1420640A/en",
        note: "The specification describes a waterproof diving bag with an open neck, a buoyant ring keeping its mouth above water and a bellows section for movement.",
      },
    },
    {
      key: "failed-tadpole-suit",
      question: "What enclosed the head and upper body in Abe Samuels's 1958 design for swimmers?",
      answer: "A transparent, bullet-shaped shell with flexible, watertight sleeves for the arms.",
      source: {
        title: "US Patent 2851707 — Swimming and diving device",
        url: "https://patents.google.com/patent/US2851707A/en",
        note: "Granted in 1958 after a 1956 filing, the patent describes a bullet-shaped transparent upper cylinder enclosing the torso, with flexible sleeves.",
      },
    },
    {
      key: "failed-campground-barges",
      question:
        "How would holidaymakers travel in the arrangement proposed by US Patent 3,964,418?",
      answer: "Their camper vans would ride on linked barges while they lived inside them.",
      source: {
        title: "US Patent 3964418 — Floating campgrounds",
        url: "https://patents.google.com/patent/US3964418A/en",
        note: "The 1976 patent proposes barges carrying recreational vehicles and shared facilities, towed over inland waterways while campers remain in their vehicles.",
      },
    },
    {
      key: "failed-rain-cylinder",
      question: "What unusual shape did US Patent 5,101,513 give its protective outerwear?",
      answer: "A hoop-supported cylinder hanging from the shoulders, with a hood on top.",
      source: {
        title: "US Patent 5101513 — Foul weather apparel",
        url: "https://patents.google.com/patent/US5101513A/en",
        note: "The 1992 abstract describes a tubular enclosure held cylindrical by flexible hoops at both ends and supported at the shoulders.",
      },
    },
    {
      key: "failed-cereal-chute",
      question:
        "What breakfast problem did a 1991 invention tackle with two bowls joined by a sloping chute?",
      answer: "Soggy cereal: dry portions slid down into milk only when the eater wanted them.",
      source: {
        title: "US Patent 4986433 — Cereal serving piece",
        url: "https://patents.google.com/patent/US4986433A/en",
        note: "The abstract specifies an upper dry-cereal bowl and a lower milk bowl, linked by a chute for successive measured portions.",
      },
    },
    {
      key: "failed-car-coffee",
      question:
        "What would US Patent 5,233,914 let a motorist prepare without leaving the driving seat?",
      answer: "A freshly brewed cup of coffee, using a brewer mounted inside the car.",
      source: {
        title: "US Patent 5233914 — In-car coffee maker",
        url: "https://patents.google.com/patent/US5233914A/en",
        note: "The 1993 patent abstract describes an anchored, adjustable in-car brewer for a single portion of coffee or another brewed beverage.",
      },
    },
    {
      key: "failed-computer-candy",
      question:
        "What reward would a computer peripheral patented in 1998 give students for a correct answer?",
      answer: "It dispensed a single piece of candy.",
      source: {
        title: "US Patent 5823386 — Reward candy dispenser",
        url: "https://patents.google.com/patent/US5823386A/en",
        note: "The patent abstract describes a battery-powered computer peripheral that immediately presents a candy for each correctly completed problem in educational software.",
      },
    },
    {
      key: "failed-soup-shield",
      question: "What did Virgil Gates's 1876 device keep out of harm’s way at the dinner table?",
      answer:
        "A moustache, held away from soup and drinks by a shield strapped over the upper lip.",
      source: {
        title: "US Patent 176175 — Improvement in moustache-guards",
        url: "https://patents.google.com/patent/US176175A/en",
        note: "Gates described a curved shield of rubber, metal or another suitable material, secured with elastic loops over the ears or around the neck.",
      },
    },
  ],
);
