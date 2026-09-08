import { definePack } from "./types";

export const wildNature = definePack(
  {
    key: "wild-nature",
    title: "Wild nature",
    blurb: "Marine adaptations, animal behavior, biological materials, and ecosystems.",
    category: "Wild nature",
    sort: 30,
  },
  [
    {
      key: "nature-sea-cucumber-defense",
      question: "What startling escape tactic can some sea cucumbers use when threatened?",
      answer: "Eject some internal organs from their rear end, then grow the missing parts back.",
      source: {
        title: "NOAA — Are sea cucumbers vegetables?",
        url: "https://oceanservice.noaa.gov/facts/seacuke.html",
        note: "Original factual paraphrase of NOAA public-information text. This defense belongs to some species, not every sea cucumber.",
      },
    },
    {
      key: "nature-horned-lizard-blood",
      question:
        "What shocking last-resort defense mechanism does the desert horned lizard use against coyotes and wolves?",
      answer: "It squirts a foul-tasting stream of blood from the corners of its eyes.",
      source: {
        title: "National Geographic — Short-Horned Lizard",
        url: "https://www.nationalgeographic.com/animals/reptiles/facts/short-horned-lizard",
        note: "Ocular autohemorrhaging can shoot a noxious stream of blood up to three feet to repel predatory canids.",
      },
    },
    {
      key: "nature-rimicaris-food",
      question:
        "Rimicaris shrimp at deep-sea vents have an unusual food supply. Where does it grow?",
      answer: "On their own bodies: they eat bacteria that grow there.",
      source: {
        title: "NOAA Ocean Exploration — Wild and Bizarre Marine Life",
        url: "https://oceanexplorer.noaa.gov/explainers/marine-life/",
        note: "Original factual paraphrase of Emily Crum's NOAA article, Chemosynthesis section and Rimicaris photograph caption. No image reused.",
      },
    },
    {
      key: "nature-armored-searobin",
      question: "How does an armored searobin take a stroll across the seafloor?",
      answer: "It walks on thick, stiff rays of its pectoral fins.",
      source: {
        title: "NOAA Ocean Exploration — Wild and Bizarre Marine Life",
        url: "https://oceanexplorer.noaa.gov/explainers/marine-life/",
        note: "Original factual paraphrase of Emily Crum's NOAA article, The Armored Searobin section; no media reused.",
      },
    },
    {
      key: "nature-dandelion-siphonophore",
      question: "How does a dandelion siphonophore keep itself in place near the ocean bottom?",
      answer: "It tethers itself to the seafloor with its tentacles.",
      source: {
        title: "NOAA Ocean Exploration — Wild and Bizarre Marine Life",
        url: "https://oceanexplorer.noaa.gov/explainers/marine-life/",
        note: "Original factual paraphrase of Emily Crum's NOAA article, Siphonophores section and Rhodaliidae caption. No image reused.",
      },
    },
    {
      key: "nature-red-camouflage",
      question: "Why can a bright red body help a deep-sea animal stay hidden?",
      answer: "Red sunlight does not reach those depths, so a red body looks dark there.",
      source: {
        title: "NOAA Ocean Exploration — Wild and Bizarre Marine Life",
        url: "https://oceanexplorer.noaa.gov/explainers/marine-life/",
        note: "Original factual paraphrase of The Invisibility of Being Red section. This concerns ambient sunlight, not a claim that no animal makes red light.",
      },
    },
    {
      key: "nature-venus-flower-basket",
      question:
        "Why might a pair of little shrimp spend their whole adult lives inside a Venus flower basket sponge?",
      answer: "They grow too large to escape through the sponge's skeleton.",
      source: {
        title: "NOAA — What is a glass sponge?",
        url: "https://oceanservice.noaa.gov/facts/glass-sponge.html",
        note: "Original factual paraphrase of NOAA public-information text describing the sponge's resident crustacean pair.",
      },
    },
    {
      key: "nature-parrotfish-sand",
      question: "How do parrotfish help manufacture white beach sand?",
      answer: "They grind swallowed coral skeleton material in their guts and poop it out as sand.",
      source: {
        title: "NOAA — How does sand form?",
        url: "https://oceanservice.noaa.gov/facts/sand.html",
        note: "Original factual paraphrase of NOAA public-information text. Parrotfish supply some white sand, not all sand or every white beach.",
      },
    },
    {
      key: "nature-vampire-squid-defense",
      question: "What can a threatened vampire squid release instead of an ink cloud?",
      answer: "A cloud of sticky, glowing mucus.",
      source: {
        title: "NOAA — The vampire squid and the vampire fish",
        url: "https://oceanservice.noaa.gov/facts/vampire-squid-fish.html",
        note: "Original factual paraphrase of NOAA public-information text on bioluminescent defensive mucus. No third-party photograph reused.",
      },
    },
    {
      key: "nature-man-o-war-colony",
      question: "Why is calling a Portuguese man o' war one ordinary jellyfish misleading?",
      answer: "It is a colony of specialized, connected individuals that work together.",
      source: {
        title: "NOAA — What is a Portuguese Man o' War?",
        url: "https://oceanservice.noaa.gov/facts/portuguese-man-o-war.html",
        note: "Original factual paraphrase of NOAA public-information text describing the colony's zooids; no image reused.",
      },
    },
    {
      key: "nature-bombardier-beetle",
      question:
        "What chemical weapon can a bombardier beetle fire from its rear end when attacked?",
      answer: "A boiling-hot, caustic spray mixed in an internal reaction chamber.",
      source: {
        title: "National Geographic — Bombardier beetles, facts and photos",
        url: "https://www.nationalgeographic.com/animals/invertebrates/facts/bombardier-beetle",
        note: "Catalyzed mixing of hydroquinone and hydrogen peroxide produces pulsing boiling jets up to 100°C.",
      },
    },
    {
      key: "nature-platypus-gravel",
      question: "An adult platypus has no teeth. What does it use to help mash its meal?",
      answer: "Bits of gravel gathered with its food.",
      source: {
        title: "NOAA — What is a platypus?",
        url: "https://oceanservice.noaa.gov/facts/platypus.html",
        note: "Original factual paraphrase of NOAA public-information text describing gravel-assisted feeding. The question specifies adults.",
      },
    },
    {
      key: "nature-zombie-ant-fungus",
      question:
        "How does the parasitic fungus Ophiocordyceps unilateralis ensure its spores are spread by carpenter ants?",
      answer:
        "It hijacks the ant's muscles to force it to climb a plant and lock its jaws onto a leaf before dying.",
      source: {
        title: "National Geographic — How a cordyceps fungus turns ants into 'zombies'",
        url: "https://www.nationalgeographic.com/animals/article/cordyceps-zombie-fungus-takes-over-ants",
        note: "The fungus directs the host to a humid microclimate where a fungal stalk erupts from the dead ant's head.",
      },
    },
    {
      key: "nature-whale-fall",
      question: "What is a 'whale fall' to a deep-sea biologist?",
      answer: "A sunken whale carcass that feeds a seafloor community, sometimes for decades.",
      source: {
        title: "NOAA — What is a whale fall?",
        url: "https://oceanservice.noaa.gov/facts/whale-fall.html",
        note: "Original factual paraphrase of NOAA public-information text. The long-lived food source includes the bones and their chemical breakdown.",
      },
    },
    {
      key: "nature-horseshoe-crab-blood",
      question: "Why has horseshoe crab blood been used to check medicines and medical equipment?",
      answer: "It clots in response to bacterial toxins, revealing contamination.",
      source: {
        title: "NOAA — Are horseshoe crabs really crabs?",
        url: "https://oceanservice.noaa.gov/facts/horseshoe-crab.html",
        note: "Original factual paraphrase of NOAA public-information text on toxin detection; no claims about harvesting safety or current regulations.",
      },
    },
    {
      key: "nature-green-turtle-name",
      question: "Which surprisingly hidden feature gives the green sea turtle its name?",
      answer: "Its greenish body fat, not its shell.",
      source: {
        title: "NOAA — What makes the green turtle...green?",
        url: "https://oceanservice.noaa.gov/facts/green-turtle.html",
        note: "Original factual paraphrase of NOAA public-information text. The card states the namesake without treating the proposed dietary cause as certain.",
      },
    },
    {
      key: "nature-carrageenan",
      question:
        "Where does carrageenan, a thickener used in some foods and toothpastes, come from?",
      answer: "Red algae, processed to extract their thickening compounds.",
      source: {
        title: "NOAA — What does peanut butter have to do with the ocean?",
        url: "https://oceanservice.noaa.gov/facts/peanutbutter.html",
        note: "Original factual paraphrase of NOAA public-information text. Some products use it; the card does not say every brand contains it.",
      },
    },
    {
      key: "nature-barnacle-cement",
      question: "How do barnacles fasten themselves so firmly to a ship's hull?",
      answer: "They secrete a powerful, fast-setting natural cement.",
      source: {
        title: "NOAA — What are barnacles?",
        url: "https://oceanservice.noaa.gov/facts/barnacles.html",
        note: "Original factual paraphrase of NOAA public-information text about barnacle adhesive.",
      },
    },
    {
      key: "nature-greenland-shark-age",
      question: "Why do scientists think the Greenland shark may be the longest-lived vertebrate?",
      answer: "Age estimates start around 250 years and can exceed 500.",
      source: {
        title: "NOAA National Ocean Service — How long do Greenland sharks live?",
        url: "https://oceanservice.noaa.gov/facts/greenland-shark.html",
        note: "Original factual paraphrase. Carbon dating of eye proteins gives a range, not a single age; even the lower estimate would make it the longest-lived vertebrate.",
      },
    },
    {
      key: "nature-horror-frog-claws",
      question:
        "When threatened, how does the Central African hairy frog (or 'horror frog') produce sharp defensive claws?",
      answer:
        "It actively breaks its own toe bones to force sharp bone fragments through its skin.",
      source: {
        title: "New Scientist — 'Horror frog' breaks own bones to produce claws",
        url: "https://www.newscientist.com/article/1909580-horror-frog-breaks-own-bones-to-produce-claws/",
        note: "Trichobatrachus robustus contracts foot muscles that snap distal phalanges and puncture the toe pads.",
      },
    },
    {
      key: "nature-pistol-shrimp-bubble",
      question:
        "How does a tiny pistol shrimp generate an underwater shockwave capable of stunning or killing prey?",
      answer:
        "It snaps its claw shut so fast that it creates a collapsing cavitation bubble that produces extreme heat and sound.",
      source: {
        title: "BBC Future — Why the US military is listening to shrimp",
        url: "https://www.bbc.com/future/article/20220616-the-new-sonar-built-from-sealife-noises",
        note: "Claw closure produces a localized cavitation bubble reaching thousands of degrees and up to 218 decibels.",
      },
    },
    {
      key: "nature-immortal-jellyfish",
      question:
        "How does the 'immortal jellyfish' (Turritopsis dohrnii) respond when facing starvation, physical trauma, or extreme age?",
      answer:
        "It reverts its adult cells into a younger state, transforming back into a juvenile polyp colony.",
      source: {
        title: "National Geographic — 'Immortal' Jellyfish Swarm World's Oceans",
        url: "https://www.nationalgeographic.com/animals/article/immortal-jellyfish-swarm-oceans-animals",
        note: "Through transdifferentiation, adult medusa cells transform into a cyst that generates a new polyp colony.",
      },
    },
    {
      key: "nature-coquina",
      question: "What is coquina, the stone used in St. Augustine's Castillo de San Marcos?",
      answer: "A limestone made of ancient shell fragments glued together by calcium carbonate.",
      source: {
        title: "NOAA National Ocean Service — What are coquina and tabby?",
        url: "https://oceanservice.noaa.gov/facts/coquina-tabby.html",
        note: "Original factual paraphrase of natural coquina. Tabby, a related manmade mix, is not the answer.",
      },
    },
    {
      key: "nature-lyrebird-mimicry",
      question:
        "Beyond songs of other birds, what startling sounds can the Australian superb lyrebird mimic with near-perfect accuracy to impress mates?",
      answer: "Human mechanical sounds including chainsaws, car alarms, and camera shutters.",
      source: {
        title: "BBC Travel — An Australian bird that mimics the sound of a chainsaw",
        url: "https://www.bbc.com/travel/article/20140416-an-australian-bird-that-mimics-the-sound-of-a-chainsaw",
        note: "Male superb lyrebirds reproduce industrial and human acoustic sounds heard in their habitat during courtship displays.",
      },
    },
    {
      key: "nature-hagfish-slime",
      question: "How does the deep-sea hagfish defend itself when bitten by a predatory shark?",
      answer:
        "It secretes protein filaments and mucus that expand thousands of times in seawater to choke the predator's gills.",
      source: {
        title:
          "Smithsonian Magazine — If We Can Get Past the Ickiness, Hagfish Slime May Actually Be Useful to Us",
        url: "https://www.smithsonianmag.com/innovation/if-we-can-get-past-ickiness-hagfish-slime-may-actually-be-useful-to-us-180962300/",
        note: "Slime pores release tightly coiled protein threads that unravel and trap water, expanding near 10,000 times in volume.",
      },
    },
    {
      key: "nature-mangrove",
      question: "Where do mangrove trees and shrubs live?",
      answer: "In the coastal intertidal zone of tropical and subtropical latitudes.",
      source: {
        title: "NOAA National Ocean Service — What is a mangrove forest?",
        url: "https://oceanservice.noaa.gov/facts/mangroves.html",
        note: "Original factual paraphrase. They cannot withstand freezing temperatures; prop roots help them handle daily tides.",
      },
    },
    {
      key: "nature-marine-snow",
      question: "What is marine snow in the deep ocean?",
      answer: "A shower of organic material falling from upper waters toward the seafloor.",
      source: {
        title: "NOAA National Ocean Service — What is marine snow?",
        url: "https://oceanservice.noaa.gov/facts/marinesnow.html",
        note: "Original factual paraphrase. It includes dead plants and animals plus fecal matter, sand, soot, and dust.",
      },
    },
  ],
);
