import { definePack } from "./types";

export const insectIntrigues = definePack(
  {
    key: "insect-intrigues",
    title: "Insect intrigues",
    blurb: "Living larders, improbable courtships, and the ingenious lives of insects.",
    category: "Insect intrigues",
    sort: 420,
  },
  [
    {
      key: "insect-darwin-third-catch",
      question:
        "With both hands occupied by beetles, where did Charles Darwin put one so he could catch a third?",
      answer: "Between his teeth; the beetle squirted an irritating fluid down his throat.",
      source: {
        title: "Natural History Museum — Bombardier beetles and their caustic chemical cannon",
        url: "https://www.nhm.ac.uk/discover/bombardier-beetles-and-their-caustic-chemical-cannon.html",
        note: "The museum quotes Darwin’s 1846 letter to Leonard Jenyns describing holding a ground beetle between his teeth to free a hand.",
      },
    },
    {
      key: "insect-schmidt-scale",
      question: "How did Justin Schmidt obtain the data for his unusual one-to-four scale?",
      answer: "He recorded the pain of insect stings he experienced himself.",
      source: {
        title: "Natural History Museum — The Schmidt sting pain index",
        url: "https://www.nhm.ac.uk/discover/schmidt-pain-index-insect-stings.html",
        note: "The museum explains that Schmidt rated and described his own experiences of venomous insect stings on a scale from one to four.",
      },
    },
    {
      key: "insect-wallace-bee-tenancy",
      question: "What already-occupied structure does Megachile pluto build its home inside?",
      answer:
        "A tree-dwelling termite mound, with resin-lined chambers that keep the termites out.",
      source: {
        title: "Natural History Museum — The world’s largest bee rediscovered after 38 years",
        url: "https://www.nhm.ac.uk/discover/news/2019/february/the-worlds-largest-bee-rediscovered-after-38-years.html",
        note: "Adam Messer observed Wallace’s giant bees nesting in Microcerotermes mounds and using tree resin to line chambers against termite entry.",
      },
    },
    {
      key: "insect-satyrus-navigation",
      question: "What helps Scarabaeus satyrus keep a straight course on moonless nights?",
      answer: "The bright band of the Milky Way, used as a celestial navigation cue.",
      source: {
        title: "Natural History Museum — How do dung beetles’ diets keep the world clean?",
        url: "https://www.nhm.ac.uk/discover/how-dung-beetles-keep-the-world-clean.html",
        note: "The navigation section cites field and Johannesburg Planetarium experiments showing Scarabaeus satyrus uses the Milky Way.",
      },
    },
    {
      key: "insect-japanese-bee-ball",
      question: "How can Japanese honeybees kill a giant hornet that gets into their nest?",
      answer:
        "They mob it in a tight ball, vibrating their flight muscles to raise heat and carbon dioxide to lethal levels.",
      source: {
        title: "Natural History Museum — Are murder hornets really as scary as they sound?",
        url: "https://www.nhm.ac.uk/discover/are-murder-hornets-really-as-scary-as-they-sound.html",
        note: "Apis cerana japonica workers trap a hornet in a ball and increase temperature and carbon dioxide; the bees tolerate conditions the hornet cannot.",
      },
    },
    {
      key: "insect-obscura-recording",
      question:
        "What did scientists reconstruct in 2022 from an insect specimen first described in 1869?",
      answer:
        "Its likely song, calculated from three-dimensional models and the resonant properties of its wings.",
      source: {
        title:
          "Natural History Museum — Recreating the song of a 150-year-old insect could help rediscover its species",
        url: "https://www.nhm.ac.uk/discover/news/2022/august/recreating-song-150-year-old-insect-could-help-rediscover-species.html",
        note: "Researchers imaged the wings of the museum’s Prophalangopsis obscura specimen and used their resonant frequency to recreate its probable call.",
      },
    },
    {
      key: "insect-potter-wasp-defense",
      question:
        "What surprising weapon have male potter wasps used to make attacking tree frogs spit them out?",
      answer:
        "Sharp spines beside their genitals, used to jab the predator despite having no venomous sting.",
      source: {
        title:
          "Natural History Museum — Male wasps can use their genitals to fight off predatory frogs",
        url: "https://www.nhm.ac.uk/discover/news/2022/december/male-wasps-can-use-genitals-fight-off-predatory-frogs.html",
        note: "The reported experiment found that males with genital spines could escape tree frogs; all males whose spines were removed were eaten.",
      },
    },
    {
      key: "insect-boatman-song",
      question: "How does a male Micronecta scholtzi produce its remarkably loud courtship call?",
      answer: "It rubs its penis-like reproductive organ against its abdomen.",
      source: {
        title: "Natural History Museum — The insect orchestra",
        url: "https://www.nhm.ac.uk/discover/insect-sounds.html",
        note: "The lesser water boatman produces its underwater mating sound by rubbing its aedeagus against its abdomen.",
      },
    },
    {
      key: "insect-hawkmoth-squeak",
      question: "How does a disturbed death’s-head hawkmoth make its peculiar squeak?",
      answer:
        "By drawing air in and forcing it out again through its mouthparts, rather like an accordion.",
      source: {
        title: "Natural History Museum — The insect orchestra",
        url: "https://www.nhm.ac.uk/discover/insect-sounds.html",
        note: "The museum describes air moving in over the proboscis and then back out, producing a sound on both strokes.",
      },
    },
    {
      key: "insect-froghopper-bubbles",
      question: "What does a young froghopper use to make its protective blanket of bubbles?",
      answer: "Processed plant sap expelled from its anus and whipped into foam.",
      source: {
        title: "Natural History Museum — Cuckoo spit and fascinating froghoppers",
        url: "https://www.nhm.ac.uk/discover/cuckoo-spit-and-fascinating-froghoppers-spittlebugs.html",
        note: "The nymph extrudes plant sap from its anus and froths it into foam that prevents drying and helps deter predators and parasitoids.",
      },
    },
    {
      key: "insect-bat-fly-nursery",
      question: "Where does a bat fly’s larva spend the feeding and growing part of its childhood?",
      answer: "Inside its mother, nourished by a milk gland until it is almost ready to pupate.",
      source: {
        title: "Natural History Museum — The curious case of parasitic bat flies",
        url: "https://www.nhm.ac.uk/discover/wildlife-photographer-of-the-year-curious-case-of-parasitic-bat-flies.html",
        note: "An egg hatches within the female; the single larva feeds and moults inside her with nourishment from a milk gland before live birth.",
      },
    },
    {
      key: "insect-moon-moth-fast",
      question: "Why must an adult Madagascan moon moth live entirely on reserves from its youth?",
      answer: "Its mouth and gut no longer function, so it cannot eat during its brief adult life.",
      source: {
        title: "Natural History Museum — Spotlight: the Madagascan moon moth",
        url: "https://www.nhm.ac.uk/discover/spotlight-madagascan-moon-moth.html",
        note: "The museum says adults have a mouth and gut but neither functions; they do not feed and generally live six to eight days.",
      },
    },
    {
      key: "insect-heterogynis-first-meal",
      question: "What is the first meal of newly hatched Heterogynis penella?",
      answer: "Their own mother, eaten inside her cocoon.",
      source: {
        title: "Natural History Museum — Seven of the world’s weirdest moths",
        url: "https://www.nhm.ac.uk/discover/seven-worlds-weirdest-moths.html",
        note: "The museum’s cannibalism section describes young Heterogynis penella consuming their legless, wingless mother after hatching in the cocoon.",
      },
    },
    {
      key: "insect-madagascar-night-drink",
      question: "What does Hemiceratoides hieroglyphica take from sleeping birds in Madagascar?",
      answer: "Their tears, sipped from beneath their eyelids with specialized mouthparts.",
      source: {
        title: "Natural History Museum — Seven of the world’s weirdest moths",
        url: "https://www.nhm.ac.uk/discover/seven-worlds-weirdest-moths.html",
        note: "The article identifies Hemiceratoides hieroglyphica feeding on salt-rich tears from beneath sleeping birds’ eyelids.",
      },
    },
    {
      key: "insect-hawaiian-snail-trap",
      question: "How does one Hawaiian caterpillar restrain a snail before eating it?",
      answer: "It ties the snail down with silk before eating it.",
      source: {
        title: "Natural History Museum — Seven of the world’s weirdest moths",
        url: "https://www.nhm.ac.uk/discover/seven-worlds-weirdest-moths.html",
        note: "The carnivorous-caterpillar section describes Hyposmocoma molluscivora trapping snails in silk threads before devouring them.",
      },
    },
    {
      key: "insect-nested-parasitoid",
      question: "What makes Cheiloneurus paralia’s choice of nursery unusually complicated?",
      answer:
        "It lays eggs inside another parasitic wasp larva that is already developing inside a host insect.",
      source: {
        title: "Natural History Museum — Dangerous beauties: the world’s tiniest insects",
        url: "https://www.nhm.ac.uk/discover/dangerous-beauties-worlds-tiniest-insects.html",
        note: "The museum describes this chalcid as a hyperparasitoid: its larvae develop in other chalcid larvae inside a separate host.",
      },
    },
    {
      key: "insect-waxworm-saliva",
      question:
        "What unexpected task can enzymes called Demetra and Ceres, found in wax-worm saliva, perform?",
      answer: "Break polyethylene plastic polymers into smaller fragments.",
      source: {
        title:
          "Natural History Museum — Wax moth caterpillar spit could be used to break down plastic waste",
        url: "https://www.nhm.ac.uk/discover/news/2022/october/wax-moth-caterpillar-spit-could-break-down-plastic-waste.html",
        note: "The reported Nature Communications study isolated two saliva enzymes, Demetra and Ceres, that oxidize and break down polyethylene polymers.",
      },
    },
    {
      key: "insect-dragonfly-labium",
      question: "What part of a young dragonfly shoots forward to seize passing prey underwater?",
      answer: "Its hinged, extendible lower lip, which acts as a grasping trap.",
      source: {
        title: "Natural History Museum — Dragonflies: the ultimate hunters",
        url: "https://www.nhm.ac.uk/discover/dragonflies-the-ultimate-hunters.html",
        note: "The aquatic-nymph section describes the labium shooting out to grab prey; the labium is the modified lower lip.",
      },
    },
    {
      key: "insect-weaver-silk",
      question: "What living tool do Oecophylla workers carry when joining leaves into a nest?",
      answer:
        "One of their own larvae, tapped to release silk and moved back and forth across the seam.",
      source: {
        title: "National Geographic — Sisterhood of Weavers",
        url: "https://www.nationalgeographic.com/magazine/article/weaver-ants",
        note: "Workers hold a larva in their jaws, tap its head to stimulate silk release, and draw the silk between adjacent leaf edges.",
      },
    },
    {
      key: "insect-aphid-generations",
      question: "What reproductive head start can a newborn aphid already possess?",
      answer:
        "She can already be carrying the next generation inside her: aphids can effectively be born pregnant.",
      source: {
        title: "National Geographic — Meet the Bug That Is Born Pregnant",
        url: "https://www.nationalgeographic.com/animals/article/animals-sex-reproduction-age-mating",
        note: "The aphid section describes asexual reproduction and young females with the next generation already developing within them.",
      },
    },
    {
      key: "insect-ant-pupal-fluid",
      question: "What unexpected contribution do ant pupae make to their colony’s food supply?",
      answer:
        "They secrete a nutrient-rich, milk-like fluid that adults drink and feed to young larvae.",
      source: {
        title: "National Geographic — Ants make milk?",
        url: "https://www.nationalgeographic.com/animals/article/ants-make-milk-this-new-discovery-took-scientists-by-surprise",
        note: "The reported Nature study used blue dye to trace pupal fluid into adults and larvae; the fluid contained amino acids, carbohydrates and vitamins.",
      },
    },
    {
      key: "insect-issus-gears",
      question: "What keeps a young Issus from sending itself into a spin when it jumps?",
      answer:
        "Interlocking toothed gears at the bases of its hind legs synchronize their movement.",
      source: {
        title: "Nature — Insect leg cogs a first in animal kingdom",
        url: "https://www.nature.com/articles/nature.2013.13723",
        note: "Nature reports toothed gears in young planthoppers synchronizing their jumping limbs; the underlying Science study identifies Issus nymphal hind-leg gears.",
      },
    },
    {
      key: "insect-replete-larder",
      question:
        "What job makes a replete in a Myrmecocystus colony swell until it can barely move?",
      answer:
        "Storing liquid food in its abdomen, hanging from the nest ceiling as a living larder for the other ants.",
      source: {
        title: "National Geographic — This deep-sea fish’s expandable stomach can hold huge meals",
        url: "https://www.nationalgeographic.com/animals/article/animals-carry-own-food-deep-sea-fish",
        note: "The honeypot-ant section describes repletes filling their gasters with nectar, sap and honeydew, hanging from ceilings and regurgitating food to nestmates.",
      },
    },
    {
      key: "insect-cicada-reunion",
      question:
        "How do North America’s periodical cicada broods schedule their mass reunions above ground?",
      answer:
        "They emerge together every 13 or 17 years after spending most of their lives underground feeding on tree roots.",
      source: {
        title:
          "Smithsonian National Museum of Natural History — What to Expect When the Cicadas Emerge This Spring",
        url: "https://www.smithsonianmag.com/blogs/national-museum-of-natural-history/2021/04/15/what-expect-when-cicadas-emerge-spring/",
        note: "The museum describes seven periodical species with 13- or 17-year cycles, root-feeding nymphs, and synchronized brood emergence.",
      },
    },
    {
      key: "insect-bee-ball-rolling",
      question:
        "What did bumblebees repeatedly choose to do in a 2022 experiment, without training or a food reward?",
      answer: "Roll little wooden balls around, behavior the researchers interpreted as play.",
      source: {
        title: "National Geographic — Do bees play? A groundbreaking study says yes",
        url: "https://www.nationalgeographic.com/animals/article/bees-can-play-study-shows-bumblebees-insect-intelligence",
        note: "Buff-tailed bumblebees voluntarily returned to roll mobile wooden balls; rolling provided no food reward, nest-cleaning benefit or observed mating opportunity.",
      },
    },
    {
      key: "insect-carpenter-surgery",
      question: "How can Florida carpenter ants save a nestmate whose upper leg has been wounded?",
      answer:
        "Bite off the injured leg, performing an amputation that sharply improves its chances of survival.",
      source: {
        title: "National Geographic — These ants perform life-saving amputations on each other",
        url: "https://www.nationalgeographic.com/animals/article/carpenter-ant-amputation-wound-treatment-first",
        note: "Camponotus floridanus workers amputate nestmates’ femur-injured legs; tibia injuries receive cleaning instead, so the prompt specifies upper-leg injury.",
      },
    },
    {
      key: "insect-melanophila-sensor",
      question: "What do the tiny pits beneath Melanophila’s middle legs help it locate?",
      answer:
        "Fires: their sensors detect infrared radiation, guiding the beetle toward freshly burned breeding sites.",
      source: {
        title: "National Geographic — Fire-chasing beetles sense infrared radiation",
        url: "https://www.nationalgeographic.com/science/article/fire-chasing-beetles-sense-infrared-radiation-from-fires-hundreds-of-kilometres-away",
        note: "The article describes infrared-sensitive pits below the middle legs and egg laying in recently burned trees; the card avoids uncertain distance estimates.",
      },
    },
    {
      key: "insect-termite-backpacks",
      question:
        "What last-resort defense becomes more potent as Neocapritermes taracua workers grow old?",
      answer:
        "They rupture their bodies, mixing stored protein crystals with gland secretions to release a toxic droplet.",
      source: {
        title: "Nature — Termites explode to defend their colony",
        url: "https://www.nature.com/articles/nature.2012.11074",
        note: "Nature covers the two-component explosive backpack; Šobotník et al.’s underlying 2012 Science abstract confirms crystal-secretion mixing and increasing defensive capacity with age.",
      },
    },
    {
      key: "insect-odontomachus-launch",
      question:
        "How can Odontomachus brunneus escape from an antlion’s sandy pit without climbing out?",
      answer:
        "Snap its jaws against the ground hard enough to catapult its entire body into the air.",
      source: {
        title: "National Geographic — Ants Use Giant Jaws to Catapult Out of Death Trap",
        url: "https://www.nationalgeographic.com/animals/article/150513-ants-animals-science-insects-trap-jaw",
        note: "High-speed observations showed trap-jaw ants directing their jaws downward and rebounding out of antlion pits when the mandibles snapped against the substrate.",
      },
    },
    {
      key: "insect-fire-ant-rafts",
      question: "What do fire ants build when floodwater overruns their colony?",
      answer:
        "A floating raft made of their own linked bodies, with trapped air helping keep them afloat.",
      source: {
        title: "National Geographic — How Ants Survive Flooding by Forming Giant Rafts",
        url: "https://www.nationalgeographic.com/animals/article/151006-fire-ants-rafts-south-carolina-flooding",
        note: "Workers link legs and mouths to form a living raft; hairs trap air and the queen and larvae are carried toward its center.",
      },
    },
  ],
);
