import { definePack } from "./types";

export const beastlyCheats = definePack(
  {
    key: "beastly-cheats",
    title: "Beastly cheats",
    blurb: "False alarms, fatal disguises, and other ingenious tricks from the animal world.",
    category: "Beastly cheats",
    sort: 310,
  },
  [
    {
      key: "cheats-drongo-alarm",
      question: "How can a fork-tailed drongo persuade a meerkat to abandon a freshly found meal?",
      answer:
        "It gives a false predator alarm, then swoops down to steal the food the meerkat leaves behind.",
      source: {
        title: "National Geographic — The Bird That Cries Wolf Changes Its Lies",
        url: "https://www.nationalgeographic.com/science/article/the-bird-that-cries-wolf-changes-its-lies",
        note: "The report describes false alarm calls causing meerkats and pied babblers to flee, leaving food for drongos; it does not claim human-like understanding of others' minds.",
      },
    },
    {
      key: "cheats-photuris-flashes",
      question:
        "What can make a male firefly's apparently promising date with a Photuris female fatal?",
      answer: "She imitates another species' mating flashes to lure its males close enough to eat.",
      source: {
        title: "National Geographic — Inside the Wild World of Bug Courtship",
        url: "https://www.nationalgeographic.com/animals/article/bug-mating-behavior-courtship",
        note: "The article identifies females in the Photuris versicolor species group as mimics of other species' female flashes that consume the responding males.",
      },
    },
    {
      key: "cheats-margay-voice",
      question:
        "What unexpected sound did researchers hear a hunting margay make near pied tamarins?",
      answer: "Calls resembling those of a baby tamarin.",
      source: {
        title: "National Geographic — Margays Mimick Monkey Calls to Lure Their Prey",
        url: "https://www.nationalgeographic.com/science/article/margays-mimick-monkey-calls-to-lure-their-prey",
        note: "The account describes a 2005 observation in Brazil in which a margay imitated infant pied-tamarin calls. The reported hunting attempt failed.",
      },
    },
    {
      key: "cheats-hognose-performance",
      question: "What makes a hognose snake's last-resort performance more than a visual trick?",
      answer: "While playing dead, it releases foul-smelling fluid from its anal glands.",
      source: {
        title: "National Geographic — The Living Dead: Animals That Pretend to Go Belly-Up",
        url: "https://www.nationalgeographic.com/animals/article/151019-playing-dead-frog-possum-toad-animals-behavior-science",
        note: "The hognose section describes North American Heterodon snakes secreting foul-smelling anal-gland fluid during death-feigning; some also expel blood.",
      },
    },
    {
      key: "cheats-livingstons-cichlid",
      question: "How does Livingston's cichlid entice passing fish within striking distance?",
      answer: "It lies motionless on its side like a dead fish, then attacks would-be scavengers.",
      source: {
        title: "National Geographic — The Living Dead: Animals That Pretend to Go Belly-Up",
        url: "https://www.nationalgeographic.com/animals/article/151019-playing-dead-frog-possum-toad-animals-behavior-science",
        note: "The article describes Nimbochromis livingstonii sinking to the bottom of Lake Malawi and remaining on its side to attract scavenging prey.",
      },
    },
    {
      key: "cheats-cuttlefish-two-sides",
      question:
        "How can a male mourning cuttlefish court a female while concealing his intentions from a rival?",
      answer:
        "He displays male courtship patterns toward her and female-like patterns on the side facing the rival.",
      source: {
        title:
          "National Geographic — Cuttlefish Woos Female and Dupes Male with Split-Personality Skin",
        url: "https://www.nationalgeographic.com/science/article/cuttlefish-woos-female-and-dupes-male-with-split-personality-skin",
        note: "The report describes simultaneous courtship and female-mimic patterns in Sepia plangon, observed when a female and one rival male occupied the appropriate positions.",
      },
    },
    {
      key: "cheats-fiddler-claw",
      question:
        "What physical bluff helps some male fiddler crabs deter rivals they might struggle to beat?",
      answer:
        "A regenerated claw can look impressively large while being much weaker than an original claw of similar size.",
      source: {
        title: "National Geographic — You Want a Piece of This?",
        url: "https://www.nationalgeographic.com/science/article/you-want-a-piece-of-this-please-please-please-dont-take-a-piece-of-this",
        note: "The report describes regrown claws that are large but slimmer and weaker. Rivals respond to overall size and often fail to distinguish regenerated claws.",
      },
    },
    {
      key: "cheats-nursery-web-ride",
      question:
        "What can a male nursery-web spider do when a female tries to take his courtship gift without mating?",
      answer:
        "Play dead while clinging to the gift, get dragged along, then revive and try to mate as she eats.",
      source: {
        title: "National Geographic — The Living Dead: Animals That Pretend to Go Belly-Up",
        url: "https://www.nationalgeographic.com/animals/article/151019-playing-dead-frog-possum-toad-animals-behavior-science",
        note: "The Pisaura mirabilis section describes males retaining the silk-wrapped prey gift during thanatosis and resuming courtship when the female feeds.",
      },
    },
    {
      key: "cheats-portia-web",
      question:
        "How can a Portia spider persuade another spider to leave the safety of its retreat?",
      answer: "It plucks the victim's web to imitate the vibrations of trapped prey.",
      source: {
        title: "National Geographic — How Snakes, Spiders, and Other Predators Fool Their Prey",
        url: "https://www.nationalgeographic.com/animals/article/mimics-deception-snakes-spiders-predators",
        note: "The Portia section describes manipulating silk strands to mimic prey caught in a web, then attacking the investigating owner.",
      },
    },
    {
      key: "cheats-bolas-perfume",
      question: "What does a female bolas spider produce to bring male moths within reach?",
      answer: "A chemical imitation of female moths' sex pheromones.",
      source: {
        title: "National Geographic — For These Trickster Animals, Every Day Is April Fools",
        url: "https://www.nationalgeographic.com/animals/article/160401-animals-april-fools-day-spiders-tricks",
        note: "The article describes female bolas spiders releasing moth-pheromone mimics and catching attracted males with a sticky silk ball.",
      },
    },
    {
      key: "cheats-blister-bee-ride",
      question:
        "How can a cluster of blister-beetle larvae obtain transport into a solitary bee's nest?",
      answer:
        "It mimics a female bee's scent, clings to a deceived male, then transfers to a real female when he mates.",
      source: {
        title: "National Geographic — The Art of Deception",
        url: "https://www.nationalgeographic.com/magazine/article/mimicry",
        note: "The feature describes coordinated larvae resembling and smelling like a female bee, boarding a male, transferring to a female and reaching her provisioned nest.",
      },
    },
    {
      key: "cheats-spider-bundle",
      question:
        "What extra detail completes the disguise of certain male jumping spiders with oversized jaws?",
      answer:
        "They resemble ants carrying bundles, with the enlarged jaws helping create the apparent load.",
      source: {
        title: "National Geographic — The Art of Deception",
        url: "https://www.nationalgeographic.com/magazine/article/mimicry",
        note: "The Myrmarachne discussion explains that females resemble ordinary ants while males' elongated mouthparts create the appearance of ants carrying objects.",
      },
    },
    {
      key: "cheats-leaf-edge-diner",
      question:
        "How can a geometrid caterpillar eat a leaf while concealing telltale evidence from birds?",
      answer: "Trim along the edge so the smaller leaf retains a natural-looking serrated outline.",
      source: {
        title: "National Geographic — The Art of Deception",
        url: "https://www.nationalgeographic.com/magazine/article/mimicry",
        note: "The feature describes a geometrid caterpillar feeding in an in-and-out pattern that preserves the leaf's serrated border rather than leaving conspicuous damage.",
      },
    },
    {
      key: "cheats-moth-warning",
      question: "What sound can an edible tiger moth use to bluff a hungry bat?",
      answer: "The ultrasonic warning clicks of a toxic moth.",
      source: {
        title: "National Geographic — The Art of Deception",
        url: "https://www.nationalgeographic.com/magazine/article/mimicry",
        note: "The acoustic-mimicry section describes a palatable tiger-moth species deterring bats by imitating the clicks of an unpalatable moth; this is not claimed for all moths.",
      },
    },
    {
      key: "cheats-alcon-royalty",
      question:
        "How does a mountain alcon blue pupa win unusually attentive service inside an ant nest?",
      answer:
        "It makes sounds resembling those of a queen ant, prompting workers to gather and stand guard.",
      source: {
        title:
          "National Geographic — Butterflies Scrounge off Ants by Mimicking the Music of Queens",
        url: "https://www.nationalgeographic.com/science/article/butterflies-scrounge-off-ants-by-mimicking-the-music-of-queens",
        note: "The report on Maculinea rebeli describes pupal sounds matching Myrmica schencki queens and playback experiments eliciting queen-like attendance from workers.",
      },
    },
    {
      key: "cheats-bluehead-sneaker",
      question: "How can a small 'sneaker' male bluehead wrasse compete with a dominant male?",
      answer:
        "Rush into the dominant male's spawning event and release a disproportionately large dose of sperm.",
      source: {
        title: "National Geographic — For These Trickster Animals, Every Day Is April Fools",
        url: "https://www.nationalgeographic.com/animals/article/160401-animals-april-fools-day-spiders-tricks",
        note: "The article describes sneaker males entering while a dominant male fertilizes a female's eggs and releasing far more sperm than the larger male.",
      },
    },
    {
      key: "cheats-water-strider-threat",
      question: "How can a male water strider pressure a reluctant female into mating?",
      answer:
        "He taps the water to attract predators while riding on her back, stopping the risky signals when she accepts.",
      source: {
        title: "National Geographic — For These Trickster Animals, Every Day Is April Fools",
        url: "https://www.nationalgeographic.com/animals/article/160401-animals-april-fools-day-spiders-tricks",
        note: "The article describes mounted males producing predator-attracting vibrations and stopping once the female cooperates; their upper position reduces their own risk.",
      },
    },
    {
      key: "cheats-droppings-spider",
      question:
        "What unappealing disguise can help a Phrynarachne spider attract a meal rather than merely hide?",
      answer: "Bird droppings, which lure flies seeking food or a place to lay eggs.",
      source: {
        title: "National Geographic — These Spiders Lure in Their Prey in Some Very Crafty Ways",
        url: "https://www.nationalgeographic.com/animals/article/spiders-prey-webs-trap-camouflage-mimicry",
        note: "The feature describes Phrynarachne's bird-dropping appearance and research showing that it also attracts flies, rather than serving only to evade predators.",
      },
    },
    {
      key: "cheats-frogfish-rod",
      question: "How does a frogfish bring a meal close without chasing it?",
      answer:
        "It wiggles a fleshy lure near its mouth that resembles a small worm, shrimp or other edible creature.",
      source: {
        title: "National Geographic — How Snakes, Spiders, and Other Predators Fool Their Prey",
        url: "https://www.nationalgeographic.com/animals/article/mimics-deception-snakes-spiders-predators",
        note: "The frogfish section describes an appendage near the mouth mimicking small sea creatures and drawing fish to an ambush.",
      },
    },
    {
      key: "cheats-puff-adder-tongue",
      question: "What unusual hunting use can a South African puff adder make of its tongue?",
      answer: "Wag it slowly like an insect to lure amphibians within reach.",
      source: {
        title: "National Geographic — How Snakes, Spiders, and Other Predators Fool Their Prey",
        url: "https://www.nationalgeographic.com/animals/article/mimics-deception-snakes-spiders-predators",
        note: "The article identifies Bitis arietans deliberately moving its tongue to mimic an insect and attract nearby amphibians.",
      },
    },
    {
      key: "cheats-topi-false-danger",
      question: "How can a male topi discourage a potential mate from leaving his territory?",
      answer: "Give a false alarm snort, making her behave as if a predator lies ahead.",
      source: {
        title:
          "National Geographic — Deceitful Male Topi Raise False Alarms to Keep Females Nearby",
        url: "https://www.nationalgeographic.com/science/article/deceitful-male-topi-raise-false-alarms-to-keep-females-nearby",
        note: "Field observations and playback experiments described in the article associate false alarms with retaining receptive females; it avoids claiming to know the males' thoughts.",
      },
    },
    {
      key: "cheats-epomis-reversal",
      question: "What happens when a frog takes the bait offered by a waving Epomis beetle larva?",
      answer:
        "The larva dodges the tongue, grips the frog with hooked jaws, and turns the would-be predator into its meal.",
      source: {
        title: "National Geographic — Beetle Larva Lures and Kills Frogs",
        url: "https://www.nationalgeographic.com/science/article/beetle-larva-lures-and-kills-frogs-while-the-adult-hunts-and-paralyses-them",
        note: "The report describes Epomis circumscriptus and E. dejeani larvae attracting amphibians with antenna and jaw movements, avoiding strikes and attaching to feed.",
      },
    },
    {
      key: "cheats-mourner-chick",
      question: "What act does a disturbed cinereous mourner chick perform?",
      answer:
        "It bobs and sways like a toxic hairy caterpillar, reinforced by its conspicuous fuzzy orange plumage.",
      source: {
        title: "National Geographic — Watch: Bird Mimics Caterpillar",
        url: "https://www.nationalgeographic.com/animals/article/150122-birds-mimics-animals-science-parasites-caterpillars",
        note: "The report describes Laniocera hypopyrra nestlings resembling a toxic caterpillar and performing caterpillar-like head motions when disturbed.",
      },
    },
    {
      key: "cheats-mantis-flower",
      question:
        "How does the Malaysian insect Hymenopus coronatus attract prey while sitting out in the open?",
      answer: "It resembles a flower, drawing insects directly onto its grasping legs.",
      source: {
        title: "National Geographic — Watch: Bird Mimics Caterpillar",
        url: "https://www.nationalgeographic.com/animals/article/150122-birds-mimics-animals-science-parasites-caterpillars",
        note: "The orchid-mantis section describes pink or white coloration and petal-shaped leg lobes, with experiments showing prey attraction even away from real flowers.",
      },
    },
    {
      key: "cheats-snail-eyestalks",
      question: "How does Leucochloridium make a snail more likely to be picked out by a bird?",
      answer:
        "Its pulsating broodsacs swell the snail's eyestalks until they resemble tempting insect larvae.",
      source: {
        title: "National Geographic — Watch: Bird Mimics Caterpillar",
        url: "https://www.nationalgeographic.com/animals/article/150122-birds-mimics-animals-science-parasites-caterpillars",
        note: "The flatworm section describes large pulsating broodsacs in a snail's eyestalks that attract birds, allowing the parasite to reach its required avian host.",
      },
    },
    {
      key: "cheats-iranian-viper",
      question: "How does one viper from western Iran entice birds to approach its hiding place?",
      answer: "It wiggles a tail-tip lure that looks like a spider, complete with leg-like scales.",
      source: {
        title: "National Geographic — This Snake Pretends to Be a Spider—and Catches a Bird",
        url: "https://www.nationalgeographic.com/animals/article/160411-spiders-snakes-animals-science-prey-predators",
        note: "The article reports filmed hunting by Pseudocerastes urarachnoides, whose fleshy tail tip and elongated scales imitate a spider to attract birds.",
      },
    },
    {
      key: "cheats-cuckoo-hawk",
      question: "What disguise helps some adult cuckoos get close to nests they intend to exploit?",
      answer:
        "Their barred underparts resemble local hawks, making host birds hesitate to attack them.",
      source: {
        title: "National Geographic — Nature's Double Con",
        url: "https://www.nationalgeographic.com/science/article/natures-double-con",
        note: "The article describes barred cuckoo plumage matching local raptors and experiments in which hosts attacked unbarred cuckoo models more readily than barred ones.",
      },
    },
    {
      key: "cheats-damselfly-disguise",
      question: "How can some female Ischnura damselflies avoid persistent male attention?",
      answer: "By looking like males themselves, using male-like body coloration.",
      source: {
        title: "National Geographic — Inside the Wild World of Bug Courtship",
        url: "https://www.nationalgeographic.com/animals/article/bug-mating-behavior-courtship",
        note: "The damselfly section describes females in Ischnura using male-like colors to escape persistent mating attention; the claim is restricted to some females.",
      },
    },
    {
      key: "cheats-otter-ransom",
      question:
        "What extreme bargaining tactic have sea otters used to obtain another otter's food?",
      answer: "Seizing its pup and holding it for a food ransom.",
      source: {
        title: "BBC — World's Sneakiest Animals: The Hunger Game",
        url: "https://www.bbc.co.uk/programmes/b06vpb86",
        note: "The BBC natural-history episode synopsis describes sea otters kidnapping one another's pups and demanding ransoms as a tactic for obtaining food.",
      },
    },
    {
      key: "cheats-squirrel-empty-cache",
      question: "What can a grey squirrel do at a hiding place to mislead a watching food thief?",
      answer: "Go through the motions of burying a nut while leaving the hiding place empty.",
      source: {
        title: "Animal Behaviour — Cache Protection Strategies of a Scatter-Hoarding Rodent",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0003347207004988",
        note: "The study reports deceptive covering of empty cache sites in eastern grey squirrels. BBC's Squirrels and the Art of Misdirection also documents fake burial when watched.",
      },
    },
  ],
);
