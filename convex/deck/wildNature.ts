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
      key: "nature-christmas-tree-worm",
      question: "What are the colorful 'trees' on a Christmas tree worm actually for?",
      answer: "Breathing and catching tiny drifting food particles.",
      source: {
        title: "NOAA — What are Christmas tree worms?",
        url: "https://oceanservice.noaa.gov/facts/xmas-tree.html",
        note: "Original factual paraphrase of NOAA public-information text describing the crowns and their radioles.",
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
      key: "nature-nautilus-chambers",
      question: "What useful job do the unoccupied chambers in a nautilus shell perform?",
      answer: "They act as ballast tanks, helping it adjust its buoyancy.",
      source: {
        title: "NOAA — What is a nautilus?",
        url: "https://oceanservice.noaa.gov/facts/nautilus.html",
        note: "Original factual paraphrase of NOAA public-information text about shell chambers and the siphuncle.",
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
      key: "nature-oyster-spat",
      question: "On an oyster farm, what does 'spat' refer to?",
      answer: "Young oysters that have settled and attached to a surface.",
      source: {
        title: "NOAA — What is spat?",
        url: "https://oceanservice.noaa.gov/facts/spat.html",
        note: "Original factual paraphrase of NOAA public-information text on oyster larval settlement.",
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
      key: "nature-plankton-drifters",
      question: "What makes an ocean organism count as plankton?",
      answer: "It is carried by tides and currents and cannot swim well against them.",
      source: {
        title: "NOAA National Ocean Service — What are plankton?",
        url: "https://oceanservice.noaa.gov/facts/plankton.html",
        note: "Original factual paraphrase of the marine-drifter definition. Some animals are plankton only when young.",
      },
    },
    {
      key: "nature-ocean-oxygen",
      question:
        "About how much of Earth's oxygen production comes from the ocean, and what happens to most of it?",
      answer: "About half; marine life consumes roughly the same amount.",
      source: {
        title: "NOAA National Ocean Service — How much oxygen comes from the ocean?",
        url: "https://oceanservice.noaa.gov/facts/ocean-oxygen.html",
        note: "Original factual paraphrase. Most production is from phytoplankton; the card does not claim land animals mainly breathe newly made ocean oxygen.",
      },
    },
    {
      key: "nature-barrier-island",
      question: "What is a barrier island, geographically?",
      answer: "A constantly changing deposit of sand that forms parallel to the coast.",
      source: {
        title: "NOAA National Ocean Service — What is a barrier island?",
        url: "https://oceanservice.noaa.gov/facts/barrier-islands.html",
        note: "Original factual paraphrase of the lead definition. The card does not claim every coast has them.",
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
      key: "nature-bioluminescence",
      question: "What is bioluminescence?",
      answer: "Light produced and emitted by a living organism.",
      source: {
        title: "NOAA National Ocean Service — What is bioluminescence?",
        url: "https://oceanservice.noaa.gov/facts/biolum.html",
        note: "Original factual paraphrase of the lead definition. Biofluorescence, which absorbs and re-emits light, is a different phenomenon.",
      },
    },
    {
      key: "nature-seamount",
      question: "What counts as a seamount?",
      answer:
        "An underwater mountain with steep sides rising at least 1,000 meters from the seafloor.",
      source: {
        title: "NOAA Ocean Exploration — What is a seamount?",
        url: "https://oceanexplorer.noaa.gov/ocean-fact/seamounts/",
        note: "Original factual paraphrase. Most are extinct-volcano remnants; guyots with flat summits are a subset.",
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
