import { definePack } from "./types";

export const transportFollies = definePack(
  {
    key: "transport-follies",
    title: "Transport follies",
    blurb:
      "Ambitious routes, improbable vehicles, and ingenious detours in the history of getting around.",
    category: "Transport follies",
    sort: 490,
  },
  [
    {
      key: "transport-atmospheric-heater",
      question:
        "Why did Clegg and Samuda's nineteenth-century railway system require each train to carry a heater?",
      answer:
        "To soften a beeswax-and-tallow seal after a leather valve opened, keeping the train's propulsion tube airtight.",
      source: {
        title: "Encyclopaedia Britannica, 1911 — Atmospheric Railway",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Atmospheric_Railway",
        note: "The article describes the continuous leather valve, its beeswax-and-tallow seal, and a train-mounted heater that slightly melted the surface to form an airtight joint. No rats anecdote is asserted.",
      },
    },
    {
      key: "transport-bennie-above-trains",
      question:
        "Where did George Bennie's proposed passenger system fit in relation to existing goods trains?",
      answer: "Above them, on overhead tracks erected over an ordinary railway line.",
      source: {
        title: "Science Museum Group — The George Bennie Railplane System of Transport",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co230328/the-george-bennie-railplane-system-of-transport",
        note: "The 1929 poster depicts the prototype on overhead tracks above an LNER locomotive hauling goods. Its caption identifies the structure as erected over the LNER line near Milngavie.",
      },
    },
    {
      key: "transport-lartigue-straddle",
      question:
        "What unusual relationship did trains on the Listowel–Ballybunion line have with their main rail?",
      answer:
        "They straddled a single raised central rail, with the vehicle extending down on either side.",
      source: {
        title: "Encyclopaedia Britannica, 1911 — Railways: Construction",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Railways/Construction",
        note: "The mono-rail section describes the Lartigue system as straddling a single elevated central rail and identifies the Irish Listowel–Ballybunion line. It is a historical account, not a claim of current operation.",
      },
    },
    {
      key: "transport-corinth-cradles",
      question:
        "How could small boats cross the Isthmus of Corinth long before a canal cut through it?",
      answer: "They were carried over land on wheeled cradles running in grooves.",
      source: {
        title: "Encyclopaedia Britannica — Corinth Canal",
        url: "https://www.britannica.com/topic/Corinth-Canal",
        note: "The article describes Periander's ship railway of about 600 BCE, with small boats carried on wheeled cradles in grooves. It does not describe modern steel rails or large ocean-going ships.",
      },
    },
    {
      key: "transport-parsey-reservoirs",
      question:
        "What was Arthur Parsey's proposed 1845 locomotive meant to collect at pumping stations along its route?",
      answer:
        "Compressed air, stored in two large copper reservoirs and released through the engine's cylinders.",
      source: {
        title: "Science Museum Group — Model of Arthur Parsey's compressed air locomotive, 1845",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co520254/model-of-arthur-parseys-compressed-air-locomotive-1845",
        note: "The museum explains the reservoirs, cylinder discharge, and proposed recharging stations. The Great Western Railway rejected the idea; no full-sized Parsey locomotive was built.",
      },
    },
    {
      key: "transport-imperials-missing-fire",
      question:
        "What did the steam locomotive Imperial lack that most people would expect it to need?",
      answer:
        "A fire: its pressure vessel was filled with steam from factory pipes instead of generating steam onboard.",
      source: {
        title: "Science Museum Group — Fireless locomotive, named Imperial",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co205802/fireless-locomotive-named-imperial",
        note: "The museum describes a pressure vessel replenished from factory steam mains. Imperial worked at a paper mill; fireless engines also reduced fire risks in hazardous industrial settings.",
      },
    },
    {
      key: "transport-moving-mail-catch",
      question:
        "How could a railway post office collect a bag at a station where its train never stopped?",
      answer:
        "A steel catcher arm in the train's doorway snatched the bag from a trackside mail crane.",
      source: {
        title: "Smithsonian National Postal Museum — Railway mail catcher pouch",
        url: "https://postalmuseum.si.edu/object/npm_2004.2004.20",
        note: "The object description explains the hourglass-shaped pouch, its crane attachments, and the doorway-mounted steel catcher used to pick it up from a moving train.",
      },
    },
    {
      key: "transport-owneys-tags",
      question:
        "Why did a nineteenth-century dog named Owney accumulate medals and tags wherever he went?",
      answer:
        "Postal clerks attached them to record his travels as he rode around the country with railway mailbags.",
      source: {
        title: "Smithsonian National Postal Museum — Owney",
        url: "https://postalmuseum.si.edu/owney",
        note: "The museum describes Owney riding Railway Post Office cars and clerks marking his stops with medals and tags. The card makes no unsupported claim about his original owner.",
      },
    },
    {
      key: "transport-cycloped-treadmill",
      question: "What powered Thomas Brandreth's entrant in the famous 1829 Rainhill trials?",
      answer: "A horse walking on a drive belt aboard the machine itself.",
      source: {
        title:
          "National Railway Museum — Stephenson's Rocket, Rainhill and the rise of the locomotive",
        url: "https://www.railwaymuseum.org.uk/objects-and-stories/stephensons-rocket-rainhill-and-rise-locomotive",
        note: "The Cycloped illustration caption explicitly identifies a horse walking on a drive belt as the power source. The answer omits the often-repeated story about the horse falling through it.",
      },
    },
    {
      key: "transport-underground-mail-capsules",
      question:
        "How did some American cities send letters beneath the streets without using trains or human couriers?",
      answer:
        "They put the mail in canisters pushed or sucked through underground tubes by air pressure.",
      source: {
        title: "Smithsonian National Postal Museum — Pneumatic Tube Mail",
        url: "https://postalmuseum.si.edu/exhibition/customers-and-communities-serving-the-cities-city-free-delivery/pneumatic-tube-mail",
        note: "The exhibition and transcript describe compressed air or vacuum moving mail cylinders through buried tubes. The fixed network became inconvenient as cities and post-office locations changed.",
      },
    },
    {
      key: "transport-necropolis-fares",
      question:
        "What unexpected customers also received first-, second-, or third-class fares on the Waterloo–Brookwood service?",
      answer:
        "The deceased: class distinctions applied to coffins as well as the mourners accompanying them.",
      source: {
        title:
          "National Railway Museum — Trains for the Dead: Curiosities from the engineering drawing collection",
        url: "https://blog.railwaymuseum.org.uk/trains-for-the-dead-curiosities-from-the-engineering-drawing-collection/",
        note: "The article explicitly gives class choices for mourners and deceased passengers on the Waterloo–Brookwood cemetery service, including third-class coffin fares often paid by parishes.",
      },
    },
    {
      key: "transport-detached-arrivals",
      question:
        "How could certain British express passengers arrive at their station while the rest of their train kept going?",
      answer:
        "Their coach was uncoupled on the move, and a guard braked it to a stop while the express continued.",
      source: {
        title: "Science Museum Group — 16mm film, original master 'Slip coach to Bicester'",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co224716/16mm-film-original-master-slip-coach-to-bicester",
        note: "The film catalogue defines the slip-coach mechanism and describes the guard releasing the carriage, braking it to a halt, and its later attachment to another train.",
      },
    },
    {
      key: "transport-white-tram-disguise",
      question:
        "Why did one Chicago streetcar company try painting passenger cars white during a strike?",
      answer:
        "To disguise them as mail cars, hoping strikers would fear federal prosecution for interfering with the post.",
      source: {
        title: "Smithsonian National Postal Museum — Trolley Mail Service",
        url: "https://postalmuseum.si.edu/exhibition/customers-and-communities-serving-the-cities-overcoming-congestion/trolley-mail-service",
        note: "The museum describes the attempted white-paint disguise and the expected deterrent of federal mail law. Postal authorities stopped the deception; the card does not claim it succeeded.",
      },
    },
    {
      key: "transport-mail-before-passengers",
      question:
        "How did New York's postal service exploit the time ocean liners spent awaiting health inspections from 1897?",
      answer:
        "Special boats collected their mail and rushed it ashore while passengers and crews were still being examined.",
      source: {
        title: "Smithsonian National Postal Museum — Harbor Mail Boat Service",
        url: "https://postalmuseum.si.edu/exhibition/customers-and-communities-serving-the-cities-overcoming-congestion/harbor-mail-boat",
        note: "The exhibit describes mail transferred from arriving liners at the Quarantine Station during medical inspection, then taken to post offices, railway mail cars, or other ships.",
      },
    },
    {
      key: "transport-vernal-bricks",
      question:
        "What did William Horace Coltharp have mailed to a small Utah town to save on delivery costs?",
      answer:
        "Facing bricks for a bank, wrapped and shipped in parcels to take advantage of cheap postage.",
      source: {
        title: "Smithsonian National Postal Museum — The Bank of Vernal brick",
        url: "https://postalmuseum.si.edu/object/npm_2022.2007.1",
        note: "The museum identifies pressed facing bricks ordered from Salt Lake City, wrapped and crated within parcel limits. These were the bank's facade materials, not the entire building.",
      },
    },
    {
      key: "transport-penydarren-track",
      question: "What failed to cope with Trevithick's successful 1804 haul at Penydarren?",
      answer:
        "The track: his locomotive was too heavy for regular use on the tramroad's brittle cast-iron rails.",
      source: {
        title:
          "National Railway Museum — Stephenson's Rocket, Rainhill and the rise of the locomotive",
        url: "https://www.railwaymuseum.org.uk/objects-and-stories/stephensons-rocket-rainhill-and-rise-locomotive",
        note: "The article describes the successful 1804 haul, then states that the locomotive was too heavy for regular service on the brittle cast-iron tramroad rails.",
      },
    },
    {
      key: "transport-ropers-saddle",
      question:
        "What second job did the saddle perform on Sylvester Roper's machine of about 1869?",
      answer: "It was the water tank for the vehicle's steam boiler.",
      source: {
        title:
          "Smithsonian National Museum of American History — Roper Steam Velocipede, about 1869",
        url: "https://americanhistory.si.edu/collections/object/nmah_1339960",
        note: "The object description explicitly identifies the saddle as a water tank for a charcoal-heated boiler. Roper demonstrated the steam velocipede at fairs and circuses.",
      },
    },
    {
      key: "transport-pinkerts-crossing",
      question: "How did Georg Pinkert attempt to cross the English Channel in 1891?",
      answer:
        "By pedaling a floating tricycle with large buoyant wheels; the tide forced him to seek rescue from a passing vessel.",
      source: {
        title: "Smithsonian Magazine — People in the 1800s Dreamed of Bicycling on Water",
        url: "https://www.smithsonianmag.com/smart-news/people-1800s-dreamed-bicycling-water-180965107/",
        note: "The article describes Pinkert's balloon-tired navigating tricycle and quotes the contemporary account of his hailing a vessel when the turning tide threatened to carry him out to sea.",
      },
    },
    {
      key: "transport-fords-power-capsule",
      question:
        "What was supposed to power Ford's never-built 1958 concept car for thousands of miles between service stops?",
      answer:
        "A radioactive core in a rear-mounted power capsule; the Nucleon existed only as a scale model.",
      source: {
        title:
          "Smithsonian Magazine — Visions of Nuclear-Powered Cars Captivated Cold War America, but the Technology Never Really Worked",
        url: "https://www.smithsonianmag.com/history/visions-of-nuclear-powered-cars-captivated-cold-war-america-but-the-technology-never-really-worked-180985437/",
        note: "The Nucleon section cites Ford's proposed radioactive power capsule and 5,000-mile recharging interval. It stresses that the vehicle was a three-eighths-scale model, not a working nuclear car.",
      },
    },
    {
      key: "transport-sunbeam-conversation",
      question: "What odd seating arrangement greeted travelers in the 1902 Sunbeam Mabley?",
      answer:
        "The driver and passenger sat facing sideways in opposite directions, an arrangement intended to make conversation easy.",
      source: {
        title: "Science Museum Group — Sunbeam Mabley 'Sociable' Voiturette",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8603973/sunbeam-mabley-sociable-voiturette",
        note: "The museum explicitly describes sideways-facing seats in opposite directions for easy conversation and says the rear-seated driver used a tiller.",
      },
    },
    {
      key: "transport-walking-warning",
      question:
        "What human escort did Britain's 1865 law require for early self-propelled road vehicles?",
      answer: "A person walking ahead with a red flag to warn other road users.",
      source: {
        title: "The National Archives — Living in the 19th century",
        url: "https://www.nationalarchives.gov.uk/currency-converter/living-in-the-19th-century/",
        note: "The motor-power discussion identifies the Locomotive Act of 1865, its four-mile-per-hour road limit, and the requirement for a red-flag bearer to walk in front.",
      },
    },
    {
      key: "transport-speers-pavement",
      question:
        "How did Alfred Speer propose to let New Yorkers travel faster merely by stepping sideways?",
      answer:
        "By moving between parallel traveling pavements, each running faster than the one beside it.",
      source: {
        title: "Smithsonian Magazine — Moving Sidewalks Before The Jetsons",
        url: "https://www.smithsonianmag.com/history/moving-sidewalks-before-the-jetsons-17484942/",
        note: "The article describes Speer's 1871 proposal for three parallel belts of successively higher speed and quotes the explanation that passengers could change their speed by stepping between them.",
      },
    },
    {
      key: "transport-parachuting-bicycles",
      question:
        "What unusual first journey were BSA's special wartime bicycles designed to make before anyone rode them?",
      answer: "A parachute descent: they folded up for airborne troops to use after landing.",
      source: {
        title: "Science Museum Group — B.S.A. folding bicycle, c. 1942",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co25649/b-s-a-folding-bicycle-c-1942",
        note: "The War Office commissioned a folding bicycle for parachuting troops in 1941. The museum says that in practice bicycles were dropped in groups of three and collected after landing.",
      },
    },
    {
      key: "transport-genevois-springs",
      question: "How did the clergyman J. H. Genevois propose to power a road vehicle in 1760?",
      answer:
        "Small windmills mounted on the vehicle would wind springs, which would then turn its road wheels.",
      source: {
        title: "Encyclopaedia Britannica — Automobile: History of the automobile",
        url: "https://www.britannica.com/technology/automobile/History-of-the-automobile",
        note: "The historical introduction explicitly describes Genevois's proposal for vehicle-mounted windmills winding springs to move the road wheels. It is identified as a suggestion, not an operating service.",
      },
    },
    {
      key: "transport-rivas-hand-timing",
      question:
        "What extra chore faced the operator of Isaac de Rivas's 1807 vehicle, beyond steering it?",
      answer: "Working the engine's valves and ignition by hand.",
      source: {
        title: "Encyclopaedia Britannica — Automobile: History of the automobile",
        url: "https://www.britannica.com/technology/automobile/History-of-the-automobile",
        note: "The article describes de Rivas's hydrogen-fueled vehicle and specifically states that its valves and ignition were operated manually, making timing difficult.",
      },
    },
    {
      key: "transport-cugnot-counterweight",
      question: "Why could unloading Cugnot's early road vehicle make it more likely to tip over?",
      answer:
        "It was designed to haul cannons, whose weight helped balance the heavy steam chamber at the front.",
      source: {
        title: "Encyclopaedia Britannica — Automobile: History of the automobile",
        url: "https://www.britannica.com/technology/automobile/History-of-the-automobile",
        note: "The Cugnot illustration caption attributes the vehicle's tendency to tip when not hauling cannons to its heavy front steam chamber. The answer makes no claim about a first road accident.",
      },
    },
    {
      key: "transport-punitive-tollgate",
      question:
        "What startling tollgate price difference helped obstruct early British steam-coach services?",
      answer:
        "A steam coach could be charged five pounds to pass where a horse-drawn coach paid only three pence.",
      source: {
        title: "Encyclopaedia Britannica — Automobile: History of the automobile",
        url: "https://www.britannica.com/technology/automobile/History-of-the-automobile",
        note: "The age-of-steam section gives a five-pound toll for steam carriages versus three pence for a horse coach as an example of penalties associated with opposition to the new vehicles.",
      },
    },
    {
      key: "transport-drais-feet",
      question: "How did riders make Karl von Drais's early two-wheeled machine go and stop?",
      answer:
        "With their feet on the ground, pushing it along and using their feet to brake rather than pedaling.",
      source: {
        title:
          "Smithsonian Magazine — This Wooden Running Machine Was Your Fixie's Great-Great Grandpa",
        url: "https://www.smithsonianmag.com/smart-news/wooden-running-machine-was-your-fixies-great-great-grandpa-180962152/",
        note: "The article describes the draisine rider sitting astride the machine while pushing against the ground and braking with their feet, like a modern child's balance bike.",
      },
    },
    {
      key: "transport-bessemer-classroom",
      question:
        "What former travelers' accommodation became a lecture room at Swanley Horticultural College?",
      answer: "The saloon of the S. S. Bessemer, a former cross-Channel steamer.",
      source: {
        title: "Science Museum Group — Daily Herald Photograph: Swanley Horticultural College",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8804967/daily-herald-photograph-swanley-horticultural-college",
        note: "The catalogue describes the September 8, 1937 photograph, titled Ship's Saloon now Classroom, as a lecture room constructed from the saloon of the former cross-Channel steamer.",
      },
    },
    {
      key: "transport-evans-amphibious-dredge",
      question:
        "What unlikely steam-powered machine did Oliver Evans send through Philadelphia's streets in 1805?",
      answer:
        "An amphibious dredge, intended for digging and clearing waterways as well as moving over land.",
      source: {
        title: "Encyclopaedia Britannica — Automobile: History of the automobile",
        url: "https://www.britannica.com/technology/automobile/History-of-the-automobile",
        note: "The steam-vehicle history records Evans running an amphibious steam dredge through Philadelphia in 1805. The card avoids unsupported claims of speed, commercial success, or being the first amphibious vehicle.",
      },
    },
  ],
);
