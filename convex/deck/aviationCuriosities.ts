import { definePack } from "./types";

export const aviationCuriosities = definePack(
  {
    key: "aviation-curiosities",
    title: "Aviation curiosities",
    blurb:
      "Inflatable aircraft, improbable flying machines, and unexpected adventures above the ground.",
    category: "Aviation curiosities",
    sort: 380,
  },
  [
    {
      key: "aviation-ga468",
      question: "What was unusual about the body of Goodyear’s GA-468?",
      answer:
        "It was an inflatable rubber airplane, kept rigid by air continuously pumped through it.",
      source: {
        title: "Smithsonian National Air and Space Museum — Goodyear Inflatoplane (GA468)",
        url: "https://airandspace.si.edu/collection-objects/goodyear-inflatoplane-ga468/nasm_A19740156000",
        note: "The physical description identifies an inflatable rubber monoplane whose motor continually circulated air to maintain structural integrity.",
      },
    },
    {
      key: "aviation-goblin",
      question: "Where was the McDonnell XF-85 supposed to spend most of a long mission?",
      answer: "Inside a larger bomber’s bomb bay, emerging as a small jet fighter when needed.",
      source: {
        title:
          "Smithsonian National Air and Space Museum — How An Airship Became a Flying Aircraft Carrier",
        url: "https://airandspace.si.edu/stories/editorial/how-airship-became-flying-aircraft-carrier",
        note: "The museum describes the XF-85 as a parasite fighter for the B-35 or B-36, with folding wings for bomb-bay storage; it never reached full-scale production.",
      },
    },
    {
      key: "aviation-sparrowhawk-return",
      question:
        "How did a Curtiss F9C Sparrowhawk return to its base while both were still airborne?",
      answer: "It caught a trapeze beneath an airship with a hook mounted above its wing.",
      source: {
        title:
          "Smithsonian National Air and Space Museum — How An Airship Became a Flying Aircraft Carrier",
        url: "https://airandspace.si.edu/stories/editorial/how-airship-became-flying-aircraft-carrier",
        note: "The Akron and Macon launched and retrieved Sparrowhawks using the aircraft’s skyhook and an airship-mounted trapeze.",
      },
    },
    {
      key: "aviation-beaver-airdrops",
      question:
        "What unusual cargo did Idaho wildlife officials pack into self-opening boxes and parachute into the wilderness in 1948?",
      answer:
        "Live beavers, being relocated to remote habitat that was difficult to reach overland.",
      source: {
        title: "Smithsonian Air & Space Magazine — Beavers On Parachutes",
        url: "https://www.smithsonianmag.com/air-space-magazine/beavers-on-parachutes-144129480/",
        note: "The article quotes Elmo Heter's wildlife-management report: beavers were placed in tension-banded boxes that opened on landing, then parachuted into Idaho's backcountry in 1948.",
      },
    },
    {
      key: "aviation-hercules-flight",
      question: "What ordinary material formed most of the enormous eight-engine HK-1 flying boat?",
      answer:
        "Wood: layers of veneer glued together, mostly birch rather than the spruce of its famous nickname.",
      source: {
        title: "Smithsonian Air & Space Magazine — Howard Hughes’ Top Ten",
        url: "https://www.smithsonianmag.com/air-space-magazine/howard-hughes-top-ten-5206422/",
        note: "The article describes the HK-1/H-4's wood-and-glue Duramold construction and explains that most of its wood was birch, despite the nickname Spruce Goose.",
      },
    },
    {
      key: "aviation-xh17-rotors",
      question: "How did Hughes's XH-17 helicopter drive its enormous rotor blades?",
      answer: "Fuel burned in jets at the rotor tips to drive the blades around.",
      source: {
        title: "Smithsonian Air & Space Magazine — Howard Hughes’ Top Ten",
        url: "https://www.smithsonianmag.com/air-space-magazine/howard-hughes-top-ten-5206422/",
        note: "The XH-17 section explains that compressors fed air through hollow blades, where tip burners ignited fuel to produce thrust.",
      },
    },
    {
      key: "aviation-stratoliner-afterlife",
      question: "What did Ken London turn Howard Hughes’s former Boeing 307 into?",
      answer: "A houseboat, preserving much of the fuselage and the cockpit.",
      source: {
        title: "Smithsonian Air & Space Magazine — Howard Hughes’ Top Ten",
        url: "https://www.smithsonianmag.com/air-space-magazine/howard-hughes-top-ten-5206422/",
        note: "The Cabin Class section records London buying the damaged Stratoliner for $69 in 1969 and converting the fuselage into a houseboat.",
      },
    },
    {
      key: "aviation-ad1-pivot",
      question: "What could the AD-1 do to its main wing while flying?",
      answer: "Pivot the whole wing diagonally, so one tip swept forward and the other backward.",
      source: {
        title: "NASA Armstrong Flight Research Center — AD-1 Oblique Wing",
        url: "https://www.nasa.gov/reference/ad-1/",
        note: "The AD-1 rotated a single wing on a center pivot; NASA illustrates it at a 60-degree sweep and records 79 research flights.",
      },
    },
    {
      key: "aviation-m2f1-towcar",
      question: "What unlikely piece of ground equipment did NASA buy for its M2-F1 program?",
      answer: "A Pontiac convertible, hot-rodded to tow the experimental craft into the air.",
      source: {
        title: "NASA Armstrong Flight Research Center — The M2-F1: Look Ma! No Wings!",
        url: "https://www.nasa.gov/aeronautics/nasa-the-m2-f1-look-ma-no-wings/",
        note: "NASA bought a 1963 Pontiac convertible, modified it at two race shops, and used it for approximately 400 car-towed flights of the unpowered lifting body.",
      },
    },
    {
      key: "aviation-llrv-gravity",
      question: "Why did NASA’s LLRV push most of its weight upward with a jet engine?",
      answer: "To imitate the Moon’s weaker gravity while astronauts practised landing on Earth.",
      source: {
        title:
          "NASA Armstrong Flight Research Center — 60 Years Ago: The First Flight of the Lunar Landing Research Vehicle",
        url: "https://www.nasa.gov/history/60-years-ago-the-first-flight-of-the-lunar-landing-research-vehicle/",
        note: "The downward-pointing turbofan counteracted five-sixths of the vehicle’s weight, leaving a lunar-gravity-like load for the other thrusters.",
      },
    },
    {
      key: "aviation-x29-wings",
      question:
        "What deliberate departure from conventional design distinguished the X-29's main wings?",
      answer: "Its main wings swept forward rather than backward.",
      source: {
        title:
          "NASA Armstrong Flight Research Center — X-29 Advanced Technology Demonstrator Aircraft",
        url: "https://www.nasa.gov/aeronautics/nasa-aircraft/x-29-demonstrator/",
        note: "NASA describes forward-swept wings mounted well back on the fuselage, with movable canards ahead of them.",
      },
    },
    {
      key: "aviation-x36-cockpit",
      question:
        "How did the X-36's pilot follow what was happening around the aircraft without being aboard?",
      answer:
        "A nose camera and microphone fed a virtual cockpit on the ground, where the pilot flew it remotely.",
      source: {
        title:
          "NASA Armstrong Flight Research Center — X-36 Tailless Fighter Agility Research Aircraft",
        url: "https://www.nasa.gov/aeronautics/x-36-tailless-fighter/",
        note: "The 28-percent-scale X-36 had a nose video camera and onboard microphone; a pilot in a ground-station virtual cockpit controlled it remotely.",
      },
    },
    {
      key: "aviation-f15-nose",
      question: "What unusual change could NASA’s F-15B number 836 make to its nose in flight?",
      answer: "Grow a much longer nose by extending a telescoping boom in midair.",
      source: {
        title:
          "NASA Armstrong Flight Research Center — F-15B in Flight with Quiet Spike Boom Extended",
        url: "https://www.nasa.gov/image-article/f-15b-flight-with-quiet-spike-boom-extended/",
        note: "NASA’s caption gives the Quiet Spike’s retracted and extended lengths as 14 and 24 feet, respectively.",
      },
    },
    {
      key: "aviation-f8-computer",
      question: "What unlikely hand-me-down ran the flight controls of NASA's experimental F-8?",
      answer: "An Apollo Guidance Computer, the kind developed for journeys to the Moon.",
      source: {
        title: "NASA Armstrong Flight Research Center — F-8 Flies with Apollo Guidance Computer",
        url: "https://www.nasa.gov/image-article/f-8-flies-with-apollo-guidance-computer-2/",
        note: "NASA states that the F-8 digital fly-by-wire aircraft replaced its hydro-mechanical control system with an Apollo Guidance Computer.",
      },
    },
    {
      key: "aviation-xb70-wave",
      question: "What was the XB-70 designed to ride, rather like a surfer?",
      answer: "Its own shock wave, using the compressed air to help support the aircraft.",
      source: {
        title: "NASA Armstrong Flight Research Center — XB-70 Valkyrie",
        url: "https://www.nasa.gov/aeronautics/xb-70-valkyrie/",
        note: "NASA describes the XB-70’s compression-lift design as riding its own shock wave; its outer wing panels hinged downward during supersonic flight.",
      },
    },
    {
      key: "aviation-mini-sniffer",
      question: "What unusual fuel powered NASA’s high-altitude Mini-Sniffer concept?",
      answer:
        "Hydrazine, a rocket propellant used in an engine that did not need atmospheric oxygen.",
      source: {
        title: "NASA Armstrong Flight Research Center — High-flying Mini-Sniffer RPV — Mars bound",
        url: "https://ntrs.nasa.gov/citations/19780054612",
        note: "R. Dale Reed’s NASA Flight Research Center paper identifies a hydrazine monopropellant engine and discusses possible adaptation for a mission on Mars.",
      },
    },
    {
      key: "aviation-fa330",
      question:
        "How did some German submarines use the Fa 330 to give their lookout a better view?",
      answer:
        "They towed him aloft on an unpowered rotor kite while the submarine stayed at the surface.",
      source: {
        title: "Royal Air Force Museum — Focke Achgelis Fa330 A-1 Bachstelze 8469M",
        url: "https://www.rafmuseum.org.uk/documents/collections/75-AF-805-FA330-Cosford.pdf",
        note: "The individual aircraft history identifies the Fa330 as an autogyro airborne observation kite used on Type IX U-boats.",
      },
    },
    {
      key: "aviation-meteor-pilot",
      question: "What unusual position did the experimental pilot occupy in Meteor WK935?",
      answer: "Lying on his stomach in a special forward cockpit.",
      source: {
        title: "Royal Air Force Museum — Gloster Meteor F8 Prone Position",
        url: "https://www.rafmuseum.org.uk/research/collections/gloster-meteor-f8-prone-position/",
        note: "The modified Meteor tested prone flight to reduce drag and improve g-force tolerance. A second pilot remained in the conventional cockpit.",
      },
    },
    {
      key: "aviation-airacomet-disguise",
      question: "What did ground crews add to the XP-59A to conceal what made it special?",
      answer: "A fake propeller, to disguise America’s first jet aircraft as a conventional plane.",
      source: {
        title: "Smithsonian National Air and Space Museum — Disguising the Airacomet",
        url: "https://airandspace.si.edu/multimedia-gallery/image/11663hjpg",
        note: "The museum explains that a dummy propeller and covered jet intakes and exhausts concealed the propulsion system during 1942 ground handling.",
      },
    },
    {
      key: "aviation-paresev",
      question: "What kind of arrival was the Paresev research program helping NASA explore?",
      answer:
        "A spacecraft gliding onto land under a controllable wing instead of splashing into the ocean.",
      source: {
        title:
          "NASA Armstrong Flight Research Center — Where Are They Now: Paresev Paraglider Research Vehicle 1-A",
        url: "https://www.nasa.gov/image-article/where-are-they-now-paresev-paraglider-research-vehicle-paresev-1/",
        note: "NASA describes a capsule with a stowed parawing for airplane-like landings. Paresev supplied piloted wing-handling experience, not the inflatable deployment system.",
      },
    },
    {
      key: "aviation-gossamer-channel",
      question:
        "What did Bryan Allen have to keep doing throughout his 1979 flight across the English Channel?",
      answer: "Pedalling: his muscles alone powered the Gossamer Albatross.",
      source: {
        title: "NASA Armstrong Flight Research Center — Gossamer Albatross",
        url: "https://www.nasa.gov/image-article/gossamer-albatross-5/",
        note: "NASA distinguishes the original aircraft’s June 12, 1979 human-powered Channel flight from later tests of Albatross II using electric, human, and towing power.",
      },
    },
    {
      key: "aviation-t2-messages",
      question:
        "How did Macready and Kelly exchange messages during their nonstop 1923 crossing of the United States?",
      answer: "They passed written notes along a string between their cockpits.",
      source: {
        title:
          "Smithsonian National Air and Space Museum — 5 Surprising Facts about the First Nonstop Transcontinental Flight",
        url: "https://airandspace.si.edu/stories/editorial/5-surprising-facts-about-first-nonstop-transcontinental-flight",
        note: "Engine noise prevented conversation. A waggle of the shared controls alerted the front pilot to a note attached to the string from the rear cockpit.",
      },
    },
    {
      key: "aviation-airship-eclipse",
      question:
        "What were scientists aboard USS Los Angeles trying to record off Long Island in January 1925?",
      answer: "A total solar eclipse, photographed and measured from the airship.",
      source: {
        title:
          "Smithsonian National Air and Space Museum — An Unparalleled Vantage Point: The USS Los Angeles and the 1925 Solar Eclipse",
        url: "https://airandspace.si.edu/stories/editorial/uss-los-angeles-1925-solar-eclipse",
        note: "Naval Observatory scientists took cameras and spectrographs above 4,000 feet aboard the airship for the January 24, 1925 eclipse.",
      },
    },
    {
      key: "aviation-balloon-menagerie",
      question:
        "Who occupied the basket of the Montgolfiers' demonstration flight at Versailles in 1783?",
      answer: "A sheep, a duck, and a rooster.",
      source: {
        title: "Smithsonian National Air and Space Museum — The Ascent of the Aeiral Balloon",
        url: "https://airandspace.si.edu/collection-objects/ascent-aeiral-balloon/nasm_A20140401000",
        note: "The museum’s description of the contemporary print identifies a Montgolfier balloon carrying a live sheep, rooster, and duck.",
      },
    },
    {
      key: "aviation-langley-engine",
      question: "What powered the two propellers of Langley’s successful 1896 Aerodrome Number 5?",
      answer: "A one-horsepower steam engine.",
      source: {
        title: "Smithsonian National Air and Space Museum — Langley Aerodrome Number 5",
        url: "https://airandspace.si.edu/collection-objects/langley-aerodrome-number-5/nasm_A19050001000",
        note: "The physical description specifies one single-cylinder, one-horsepower steam engine driving two pusher propellers through gearing.",
      },
    },
    {
      key: "aviation-hiller-platform",
      question:
        "How was an operator meant to steer Hiller's Model 1031-A-1 while hovering above the ground?",
      answer:
        "By leaning in the desired direction, while standing on a flying platform above ducted rotors.",
      source: {
        title: "Smithsonian National Air and Space Museum — Flying Platforms",
        url: "https://howthingsfly.si.edu/media/flying-platforms",
        note: "The museum explains that the pilot leaned in the desired direction and the platform followed, with lift provided by twin counter-rotating propellers in a round duct.",
      },
    },
    {
      key: "aviation-pilgrim-passenger",
      question:
        "What new career did the Goodyear Pilgrim take up on a 1925 outing with employee Jack Yolton aboard?",
      answer: "A flying Santa sleigh: Yolton played Father Christmas on a toy-delivery flight.",
      source: {
        title: "Smithsonian National Air and Space Museum — The Santa Claus Express, Then and Now",
        url: "https://airandspace.si.edu/stories/editorial/santa-claus-express-then-and-now",
        note: "The museum identifies Jack Yolton as the Goodyear employee playing Santa aboard Pilgrim I, renamed for the toy-delivery event.",
      },
    },
    {
      key: "aviation-i2000-wings",
      question:
        "What happened to the I2000 immediately after it separated from its carrier aircraft?",
      answer: "Its folded-up wings inflated and extended in midair.",
      source: {
        title: "NASA Armstrong Flight Research Center — Inflatable Wing Technology Demonstrator",
        url: "https://www.nasa.gov/gallery/inflatable-wing-technology-demonstrator/",
        note: "NASA’s deployment-sequence captions show the inflatable wings deploying after separation and fully extending during flight.",
      },
    },
    {
      key: "aviation-helios-power",
      question: "What powered NASA’s 2001 flight to nearly 97,000 feet over Hawaii?",
      answer: "Sunlight, converted to electricity by about 62,000 solar cells.",
      source: {
        title:
          "NASA Armstrong Flight Research Center — Helios Prototype Set for Long-Endurance Flight Demonstration",
        url: "https://www.nasa.gov/news-release/nasa-dryden-flight-research-center-news-room-news-releases-helios-prototype-set-for-long-endurance-flight-demonstration/",
        note: "The May 29, 2003 release reports that Helios reached 96,863 feet in August 2001 on electricity generated solely by 62,000 silicon solar cells.",
      },
    },
    {
      key: "aviation-xf2y",
      question: "What unusual combination did Convair build into its XF2Y-1 prototype?",
      answer: "It was both a supersonic jet fighter and a seaplane.",
      source: {
        title: "Smithsonian National Air and Space Museum — Convair XF2Y-1 Sea Dart",
        url: "https://airandspace.si.edu/collection-objects/convair-xf2y-1-sea-dart/nasm_A19730275000",
        note: "The museum’s physical description explicitly identifies the prototype as an afterburning, supersonic, twin-engine seaplane jet fighter.",
      },
    },
  ],
);
