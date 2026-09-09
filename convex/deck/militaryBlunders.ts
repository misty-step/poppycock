import { definePack } from "./types";

export const militaryBlunders = definePack(
  {
    key: "military-blunders",
    title: "Military blunders",
    blurb: "Outlandish prototypes, unlikely recruits, and ingenious tricks from military history.",
    category: "Military blunders",
    sort: 220,
  },
  [
    {
      key: "military-panjandrum",
      question: "What was Britain's experimental 'Panjandrum' supposed to do in 1943?",
      answer:
        "Roll up a beach on rocket-powered wheels and blast a hole in the enemy's concrete defences.",
      source: {
        title: "Imperial War Museums — Second World War Weapons That Failed",
        url: "https://www.iwm.org.uk/history/second-world-war/north-west-europe/weird-weapons",
        note: "The Panjandrum section describes two rocket-propelled wheels joined by an explosive-filled cylinder. Trials failed and it never saw action.",
      },
    },
    {
      key: "military-concrete-listeners",
      question:
        "Why were air-defence crews stationed beside enormous concrete bowls on Britain's coast?",
      answer:
        "They concentrated the sound of approaching aircraft so listeners could detect a raid before seeing it.",
      source: {
        title: "BBC — The concrete blocks that once protected Britain",
        url: "https://www.bbc.co.uk/news/in-pictures-46348917",
        note: "The article identifies the structures as sound mirrors, built to detect aircraft acoustically; their development ended as radar superseded them.",
      },
    },
    {
      key: "military-skinner-guidance",
      question:
        "What unusual missile-guidance system did psychologist B. F. Skinner develop during the Second World War?",
      answer: "Trained live pigeons were to guide missiles toward enemy ships.",
      source: {
        title: "BBC History — The WW2 experiment to make pigeon-guided missiles",
        url: "https://www.bbc.com/reel/video/p0kl5kcz/watch",
        note: "The BBC's history feature describes Skinner's wartime attempt to use pigeons for missile guidance toward ships. This was an experiment, not a deployed weapon.",
      },
    },
    {
      key: "military-soviet-dogs",
      question:
        "What were Soviet troops training to carry explosives beneath enemy tanks in the early 1940s?",
      answer:
        "Dogs wearing explosive harnesses; a projecting lever was meant to strike the tank's underside and detonate the charge.",
      source: {
        title: "Imperial War Museums — Second World War Weapons That Failed",
        url: "https://www.iwm.org.uk/history/second-world-war/north-west-europe/weird-weapons",
        note: "The War Dogs section describes the explosive harnesses and contact levers. It records confused animals and poor operational results in 1941–1942.",
      },
    },
    {
      key: "military-mincemeat-wallet",
      question:
        "Why did British intelligence invent a fiancée for an officer who never existed in 1943?",
      answer:
        "To make a corpse posing as an officer seem genuine, so the enemy would trust the false invasion plans he carried.",
      source: {
        title: "BBC — Operation Mincemeat: How a dead tramp fooled Hitler",
        url: "https://www.bbc.co.uk/news/magazine-11887115",
        note: "The article describes the identity card, ticket stubs and fiancée's mementos used as 'wallet litter' for the fictitious Major William Martin in Operation Mincemeat.",
      },
    },
    {
      key: "military-emu-ambush",
      question:
        "What were three Australian soldiers sent to fight with two Lewis machine guns in 1932?",
      answer:
        "Crop-raiding emus, which scattered into small, fast-moving groups instead of presenting an easy mass target.",
      source: {
        title: "BBC HistoryExtra — What was the Emu War?",
        url: "https://www.historyextra.com/period/20th-century/emu-war/",
        note: "Jonny Wilkes describes the three-man force, two Lewis guns, planned herding tactic and birds scattering when firing began; a later ambush also suffered a jammed gun.",
      },
    },
    {
      key: "military-blue-peacock",
      question:
        "What living component did British planners propose putting inside a buried nuclear mine in 1957?",
      answer: "Chickens: their body heat would keep the mine's equipment warm enough to work.",
      source: {
        title: "BBC — Cold war bomb warmed by chickens",
        url: "https://news.bbc.co.uk/2/hi/uk_news/3588465.stm",
        note: "Reporting the National Archives' release of Blue Peacock documents, the BBC describes a proposal to house live chickens inside the casing to supply heat for a week.",
      },
    },
    {
      key: "military-soe-decoy-sneakers",
      question:
        "What did Special Operations Executive agents tie over their boots before wading ashore in the Pacific theatre?",
      answer:
        "Rubber overshoes cast as bare human feet, so their tracks would read as a local's rather than a soldier's.",
      source: {
        title: "Imperial War Museums — Overshoes, Decoy 'Sneakers': SOE",
        url: "https://www.iwm.org.uk/collections/item/object/30103004",
        note: "The museum record describes rubber 'sneakers' cast in the form of bare feet, tied over conventional footwear, so that an agent landing from the sea left prints the Japanese would read as a local's.",
      },
    },
    {
      key: "military-smith-gun",
      question: "What had a Home Guard crew to do to a Smith Gun before firing it?",
      answer: "Tip the entire gun onto its side so one of its wheels became the firing platform.",
      source: {
        title: "Imperial War Museums — Second World War Weapons That Failed",
        url: "https://www.iwm.org.uk/history/second-world-war/north-west-europe/weird-weapons",
        note: "The Smith Gun section explicitly states that the weapon had to be tipped onto its side, with one wheel acting as a baseplate.",
      },
    },
    {
      key: "military-white-rabbit",
      question: "What was Britain's 130-ton wartime machine nicknamed 'Nellie' designed to do?",
      answer:
        "Dig a trench toward the enemy while troops advanced in the freshly excavated channel behind it.",
      source: {
        title: "Imperial War Museums — Second World War Weapons That Failed",
        url: "https://www.iwm.org.uk/history/second-world-war/north-west-europe/weird-weapons",
        note: "The White Rabbit/Nellie section describes Cultivator No. 6, an unarmed machine combining a plough and cylindrical cutter to excavate a troop-width approach trench.",
      },
    },
    {
      key: "military-wind-cannon",
      question:
        "What was an experimental German anti-aircraft device tested at Hillersleben meant to strike aircraft with, instead of shells?",
      answer: "A powerful blast of air, produced by igniting a mixture of hydrogen and oxygen.",
      source: {
        title: "Imperial War Museums — Second World War Weapons That Failed",
        url: "https://www.iwm.org.uk/history/second-world-war/north-west-europe/weird-weapons",
        note: "The Wind Cannon section describes the upward air blast and intended use against low-flying aircraft. A weapon installed by the Elbe in 1945 achieved no results.",
      },
    },
    {
      key: "military-goliath",
      question: "What did German forces send toward targets under the name 'Goliath'?",
      answer:
        "A miniature remote-controlled tracked vehicle that carried explosives to a target and blew itself up.",
      source: {
        title: "Imperial War Museums — Second World War Weapons That Failed",
        url: "https://www.iwm.org.uk/history/second-world-war/north-west-europe/weird-weapons",
        note: "The Goliath section describes an expendable miniature tracked demolition carrier. Its trailing control wires, low speed and poor ground clearance made it vulnerable.",
      },
    },
    {
      key: "military-chainmail-faces",
      question:
        "What decidedly medieval equipment did some British tank crews wear into battle in the First World War?",
      answer:
        "Leather-and-chain-mail face masks, shielding them from hot metal fragments thrown inside the tank when bullets hit its armour.",
      source: {
        title:
          "Imperial War Museums — Weird Weapons and Other Surprising Objects from the First World War",
        url: "https://www.iwm.org.uk/history/first-world-war/western-front/weird-weapons-and-surprising-objects",
        note: "The Face mask section identifies protection against 'splash': hot metal fragments produced inside a tank by bullet impacts on the exterior.",
      },
    },
    {
      key: "military-ayrton-fans",
      question:
        "What problem were Hertha Ayrton's hand-operated canvas devices meant to solve on the Western Front?",
      answer: "They were fans used to clear lingering poison gas from shell holes and craters.",
      source: {
        title:
          "Imperial War Museums — Weird Weapons and Other Surprising Objects from the First World War",
        url: "https://www.iwm.org.uk/history/first-world-war/western-front/weird-weapons-and-surprising-objects",
        note: "The Anti-gas fans section records more than 100,000 issued to British troops and identifies Ayrton as their inventor and clearing gas residue as their purpose.",
      },
    },
    {
      key: "military-aerial-darts",
      question: "What did pilots scatter over enemy troops early in the First World War?",
      answer:
        "Flechettes: metal darts that relied on the force of their fall rather than an explosive charge.",
      source: {
        title:
          "Imperial War Museums — Weird Weapons and Other Surprising Objects from the First World War",
        url: "https://www.iwm.org.uk/history/first-world-war/western-front/weird-weapons-and-surprising-objects",
        note: "The Flechette section describes aerial darts dropped onto troop and cavalry formations between 1914 and early 1916.",
      },
    },
    {
      key: "military-false-tree",
      question:
        "How did First World War camouflage teams add a lookout post without adding a new landmark to the battlefield?",
      answer:
        "They secretly replaced a real tree with a matching hollow replica that concealed an observer.",
      source: {
        title: "Imperial War Museums — 5 Facts About Camouflage in the First World War",
        url: "https://www.iwm.org.uk/history/first-world-war/western-front/facts-about-camouflage-in-the-first-world-war",
        note: "The camouflage-tree section describes artists copying battle-damaged trees and teams replacing the originals at night with concealed observation posts.",
      },
    },
    {
      key: "military-paper-heads",
      question:
        "Why did First World War camouflage workshops mass-produce papier-mâché human heads?",
      answer:
        "To draw enemy sniper fire, revealing where the snipers were hiding without exposing a real soldier's head.",
      source: {
        title: "Imperial War Museums — 5 Facts About Camouflage in the First World War",
        url: "https://www.iwm.org.uk/history/first-world-war/western-front/facts-about-camouflage-in-the-first-world-war",
        note: "Section 3 shows moulded dummy heads and explains that a sniper firing at one would reveal his position.",
      },
    },
    {
      key: "military-dazzle-patterns",
      question:
        "Why did Norman Wilkinson propose painting wartime ships in conspicuous, clashing patterns?",
      answer:
        "Not to hide the ships, but to make their shape, course and range harder for submarine commanders to judge.",
      source: {
        title: "Imperial War Museums — 5 Facts About Camouflage in the First World War",
        url: "https://www.iwm.org.uk/history/first-world-war/western-front/facts-about-camouflage-in-the-first-world-war",
        note: "The Dazzle section explains Wilkinson's aim of distorting ships' apparent form rather than concealing them. It does not attribute the decline in shipping losses primarily to Dazzle.",
      },
    },
    {
      key: "military-gibraltar-reinforcements",
      question: "What unusual reinforcements did Churchill arrange to send to Gibraltar in 1942?",
      answer:
        "Barbary macaques: a legend said Britain would lose Gibraltar if its apes disappeared, and their numbers had dwindled.",
      source: {
        title: "Imperial War Museums — Unbelievable Images from Weird War Two",
        url: "https://www.iwm.org.uk/history/second-world-war/weird-war-two",
        note: "The Ape escape section says Churchill replenished Gibraltar's dwindling macaques with animals from Morocco and Algiers in 1942, rather than tempt the territorial legend.",
      },
    },
    {
      key: "military-pink-spitfires",
      question:
        "What made certain RAF reconnaissance Spitfires look less conspicuous in the sky than on the ground?",
      answer: "They were painted pink, a camouflage colour for flights at dawn or dusk.",
      source: {
        title: "Imperial War Museums — Unbelievable Images from Weird War Two",
        url: "https://www.iwm.org.uk/history/second-world-war/weird-war-two",
        note: "The In the Pink section identifies 'Camoutint Pink' and its camouflage purpose during dawn and dusk reconnaissance flights.",
      },
    },
    {
      key: "military-operation-titanic",
      question:
        "What unusual cargo did the RAF parachute into France during Operation Titanic on the eve of D-Day?",
      answer:
        "Dummy parachutists, intended to simulate an airborne invasion and draw German troops away from real objectives.",
      source: {
        title: "Imperial War Museums — D-Day's Parachuting Dummies and Inflatable Tanks",
        url: "https://www.iwm.org.uk/history/second-world-war/d-day/parachuting-dummies-and-inflatable-tanks",
        note: "The article identifies Operation Titanic on 5–6 June 1944 as the dropping of dummy parachutists to divert German forces.",
      },
    },
    {
      key: "military-inflatable-shermans",
      question:
        "How did Allied planners keep assembly areas looking full after real tanks moved away before D-Day?",
      answer:
        "They substituted inflatable Sherman tanks, concealing the departure of the real vehicles.",
      source: {
        title: "Imperial War Museums — D-Day's Parachuting Dummies and Inflatable Tanks",
        url: "https://www.iwm.org.uk/history/second-world-war/d-day/parachuting-dummies-and-inflatable-tanks",
        note: "The Dummy tanks section explains that inflatable replacements both exaggerated apparent strength and masked the movement of real tanks.",
      },
    },
    {
      key: "military-window-strips",
      question:
        "What did RAF aircraft shower along the French coast in the D-Day deceptions called Taxable and Glimmer?",
      answer: "Strips of metal foil, codenamed 'Window', which produced confusing radar returns.",
      source: {
        title: "Imperial War Museums — D-Day's Parachuting Dummies and Inflatable Tanks",
        url: "https://www.iwm.org.uk/history/second-world-war/d-day/parachuting-dummies-and-inflatable-tanks",
        note: "The Taxable and Glimmer section describes RAF aircraft dropping metallised strips along the French coast to confuse German radar.",
      },
    },
    {
      key: "military-bobbin",
      question:
        "How did an unusual British armoured vehicle prepare soft beaches for following tanks in Normandy?",
      answer:
        "Unrolled reinforced matting over soft beach ground so heavy vehicles could drive across it.",
      source: {
        title: "Imperial War Museums — The 'Funny' Tanks of D-Day",
        url: "https://www.iwm.org.uk/history/second-world-war/d-day/funny-tanks-of-d-day",
        note: "The Bobbin carpet-layer section describes a Churchill AVRE adapted to lay reinforced matting over surfaces unable to bear armoured vehicles.",
      },
    },
    {
      key: "military-fascines",
      question: "Why did some British tanks carry enormous bundles of sticks into battle?",
      answer: "To drop them into trenches or other gaps, making a surface the tanks could cross.",
      source: {
        title: "Imperial War Museums — The 'Funny' Tanks of D-Day",
        url: "https://www.iwm.org.uk/history/second-world-war/d-day/funny-tanks-of-d-day",
        note: "The Fascine carrier section defines these bundles and explains their use in filling gaps; tank-carried fascines had already been used in the First World War.",
      },
    },
    {
      key: "military-ark-tank",
      question: "What unusual role did a turretless Churchill tank called an 'ARK' take on?",
      answer:
        "It became a bridge: the tank drove into a gap and unfolded ramps for other vehicles to cross over it.",
      source: {
        title: "Imperial War Museums — The 'Funny' Tanks of D-Day",
        url: "https://www.iwm.org.uk/history/second-world-war/d-day/funny-tanks-of-d-day",
        note: "The ARK section describes an Armoured Ramp Carrier with folding ramps in place of its turret; a photograph shows two stacked across the River Senio.",
      },
    },
    {
      key: "military-rommels-asparagus",
      question: "Why did German forces plant 'Rommel's Asparagus' across Normandy fields?",
      answer:
        "The 'asparagus' was a network of tall posts intended to wreck Allied gliders attempting to land.",
      source: {
        title: "Imperial War Museums — Clever Innovations Used on D-Day",
        url: "https://www.iwm.org.uk/history/second-world-war/d-day/clever-innovations-used-on-d-day",
        note: "The German Defences section distinguishes inland anti-glider posts, nicknamed Rommel's Asparagus, from obstacles on the invasion beaches.",
      },
    },
    {
      key: "military-conundrums",
      question:
        "What were the enormous floating devices called 'conundrums' used for by the Allies?",
      answer:
        "They were spools that unrolled fuel pipelines across the English Channel to supply forces in France.",
      source: {
        title: "Imperial War Museums — Clever Innovations Used on D-Day",
        url: "https://www.iwm.org.uk/history/second-world-war/d-day/clever-innovations-used-on-d-day",
        note: "The Pluto section identifies giant floating spools called conundrums, around which flexible pipeline was wound before being unrolled across the Channel.",
      },
    },
    {
      key: "military-garbo-network",
      question:
        "What was the extraordinary secret behind the extensive overseas network run by the wartime agent 'Garbo'?",
      answer:
        "His supposed sub-agents were imaginary people, used to feed false intelligence to his German handlers.",
      source: {
        title: "The National Archives — Double Agent Operations",
        url: "https://www.nationalarchives.gov.uk/double-agent-operations/",
        note: "The KV 2/4190–4214 release describes Juan Pujol-Garcia's imaginary agents in Britain, North Africa and Canada, and their role in D-Day misinformation.",
      },
    },
    {
      key: "military-mig-bounty",
      question: "What did the U.S. Far East Command offer a $100,000 reward for in April 1953?",
      answer:
        "The first intact MiG-15 delivered by an enemy pilot. The eventual defector arrived without knowing about the reward.",
      source: {
        title: "National Museum of the U.S. Air Force — The Story of the MiG-15bis on Display",
        url: "https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/196377/the-story-of-the-mig-15bis-on-display/",
        note: "The museum records the April reward offer and No Kum-Sok's September 1953 arrival at Kimpo; he learned about the reward only after landing.",
      },
    },
  ],
);
