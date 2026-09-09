import { definePack } from "./types";

export const mythicalBeasts = definePack(
  {
    key: "mythical-beasts",
    title: "Mythical beasts",
    blurb:
      "Impossible animal habits and legendary creatures from bestiaries, manuscripts and historical reports.",
    category: "Mythical beasts",
    sort: 330,
  },
  [
    {
      key: "beast-beaver-bargain",
      question: "What drastic escape tactic does the Aberdeen Bestiary credit to a hunted beaver?",
      answer: "It bites off its own testicles and throws them in the hunter's face.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 11r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f11r",
        note: "The medieval text claims that hunters want the beaver's testicles for medicine, so the animal sacrifices them to escape. This is a bestiary belief, not zoological fact.",
      },
    },
    {
      key: "beast-bonnacon-defence",
      question: "What supposedly made a bonnacon especially unpleasant to chase?",
      answer:
        "It discharged burning dung behind it, setting fire to whatever the discharge touched.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 12r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f12r",
        note: "The bonnacon entry describes a bull-like beast with inward-curving horns, defended instead by scorching excrement; the card reports that legendary claim.",
      },
    },
    {
      key: "beast-panther-perfume",
      question:
        "What did a medieval panther supposedly release when it roared after a three-day sleep?",
      answer: "A perfume so sweet that other animals followed it; only the dragon fled.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 9r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f9r",
        note: "The translation says the panther's roar releases an odour like every perfume, attracting animals while its enemy the dragon retreats in fear.",
      },
    },
    {
      key: "beast-tigress-mirror",
      question: "Why did one bestiary advise a fleeing cub-thief to drop glass spheres behind him?",
      answer:
        "A pursuing tigress would mistake her reflection for her stolen cub and stop to collect it.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 8v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f8v",
        note: "The Aberdeen text describes repeated glass-sphere tricks delaying the tigress, whose devotion to her cub supposedly overcomes the memory of being deceived.",
      },
    },
    {
      key: "beast-elephant-tree",
      question:
        "What supposed physical flaw let hunters trap an elephant by partly cutting through its sleeping tree?",
      answer: "It supposedly had no knee joints, so when the tree fell it could not get up.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 10r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f10r",
        note: "The manuscript claims that elephants sleep leaning on trees because their knees have no joints, and that hunters partly saw through those trees.",
      },
    },
    {
      key: "beast-bear-sculpting",
      question:
        "How were newborn bears supposed to acquire their proper shape, according to a medieval bestiary?",
      answer: "Their mother licked shapeless lumps of flesh into the shape of cubs.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 15r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f15r",
        note: "The bear entry claims that premature young are born as unformed flesh and that the mother forms their body parts by licking them.",
      },
    },
    {
      key: "beast-yale-spare",
      question: "How did the legendary yale keep a spare weapon ready during a fight?",
      answer:
        "It swivelled one horn forward and folded the other back, saving it in case the first was damaged.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 16v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f16v",
        note: "The text gives the yale adjustable rather than fixed horns and explicitly explains its use of one horn while keeping the other in reserve.",
      },
    },
    {
      key: "beast-parander-disguise",
      question: "How was a frightened parander said to make itself difficult to find?",
      answer:
        "It changed its appearance to match nearby things, such as a white stone or a green bush.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 16r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f16r",
        note: "The parander passage claims it takes on the likeness of whatever is nearby when hiding in fear.",
      },
    },
    {
      key: "beast-fox-stage-blood",
      question:
        "What preparation did the Aberdeen Bestiary's fox make before pretending to be dead?",
      answer:
        "It rolled in red earth to look bloodstained, then held its breath to lure hungry birds within reach.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 16r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f16r",
        note: "The fox entry describes red earth as simulated blood, breath-holding and a protruding tongue; birds land on the apparent corpse and are eaten.",
      },
    },
    {
      key: "beast-lion-first-breath",
      question:
        "What supposedly brought three-day-old lion cubs to life in medieval natural history?",
      answer: "Their father breathed into their faces; they were said to have been born dead.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 7v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f7v",
        note: "The manuscript's third characteristic of the lion is paternal breath reviving dead-born cubs on the third day, interpreted as a Christian resurrection allegory.",
      },
    },
    {
      key: "beast-manticore-mouth",
      question: "What did medieval bestiary writers put inside a manticore's human-looking mouth?",
      answer: "Three rows of teeth.",
      source: {
        title: "British Library — Weird and Wonderful Creatures of the Bestiary",
        url: "https://www.bl.uk/stories/blogs/posts/weird-and-wonderful-creatures-of-the-bestiary",
        note: "The Library describes the manticore as a composite creature with a blood-red lion's body, a human face, a triple row of teeth and a scorpion's tail.",
      },
    },
    {
      key: "beast-leucrota-voice",
      question: "What uncanny sound was a leucrota said to be able to produce?",
      answer: "It could imitate a human voice.",
      source: {
        title: "British Library — Weird and Wonderful Creatures of the Bestiary",
        url: "https://www.bl.uk/stories/blogs/posts/weird-and-wonderful-creatures-of-the-bestiary",
        note: "The Library's leucrota section describes its hybrid anatomy and wide grin, and states that the bestiary creature can imitate the sound of a human voice.",
      },
    },
    {
      key: "beast-unicorn-rest",
      question:
        "In the Ashmole Bestiary, what unlikely resting place leaves a unicorn exposed to hunters?",
      answer: "A maiden's lap.",
      source: {
        title: "Bodleian Libraries — MS. Ashmole 1511",
        url: "https://medieval.bodleian.ox.ac.uk/catalog/manuscript_290",
        note: "The catalogue describes folio 14v as showing a unicorn in a maiden's lap, speared by a hunter while another attacker approaches with an axe.",
      },
    },
    {
      key: "beast-cinnamon-nest",
      question:
        "What prize are men gathering after pelting birds' treetop nests in an Ashmole Bestiary illustration?",
      answer: "Cinnamon falling from the nests.",
      source: {
        title: "Bodleian Libraries — MS. Ashmole 1511",
        url: "https://medieval.bodleian.ox.ac.uk/catalog/manuscript_290",
        note: "The catalogue describes folio 66r: cinnamolgus birds in a nest atop a tree, a man below with a sling, and another collecting fallen cinnamon in his cloak.",
      },
    },
    {
      key: "beast-hedgehog-grapes",
      question: "How did a medieval bestiary say hedgehogs carried grapes home to their young?",
      answer: "They rolled onto the grapes and carried them on their spines.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 24r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f24r",
        note: "The text describes the hedgehog rolling backwards onto a grape to deliver it to its young; the Ashmole parallel illustrates grapes impaled on spines.",
      },
    },
    {
      key: "beast-pelican-revival",
      question: "What substance was a mother pelican said to use to revive her dead chicks?",
      answer: "Her own blood, poured over them after she pierced her side.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 35r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f35r",
        note: "The continuation states that the mother pours her blood over her dead young and raises them; the accompanying allegory explicitly refers to revival with her blood.",
      },
    },
    {
      key: "beast-hoopoe-rejuvenation",
      question:
        "What treatment were hoopoes said to give their elderly parents to make them young again?",
      answer: "They plucked out the old feathers, licked their parents' eyes and kept them warm.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 36r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f36r",
        note: "The hoopoe entry says that the young pluck their parents' old plumage, lick their dim eyes and warm them, renewing their life and health.",
      },
    },
    {
      key: "beast-crane-alarm",
      question:
        "What did a bestiary crane supposedly hold while standing guard against falling asleep?",
      answer: "A little stone in one raised claw, so dropping it would wake the bird.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 46r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f46r",
        note: "The manuscript explains that sentinel cranes hold small stones in claws raised from the ground; a sleeping bird drops its stone, wakes and calls out.",
      },
    },
    {
      key: "beast-caladrius-cure",
      question:
        "How did the legendary caladrius dispose of an illness it had taken from a sick person?",
      answer: "It flew towards the sun and burned the sickness away.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 57r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f57r",
        note: "The text says the bird takes a recoverable illness upon itself, flies towards the sun, and burns and disperses it so the patient is cured.",
      },
    },
    {
      key: "beast-basilisk-remedy",
      question:
        "What did the Aberdeen Bestiary say people should send into a basilisk's hiding place?",
      answer: "A weasel, which would pursue and kill the basilisk.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 66v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f66v",
        note: "The translation explicitly says that people put weasels into basilisk caves; the basilisk flees but the weasel follows and kills it.",
      },
    },
    {
      key: "beast-scitalis-lure",
      question: "How was the slow-moving scitalis said to catch prey it could not outrun?",
      answer: "Its brilliantly patterned skin stunned onlookers, leaving them easy to catch.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 68v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f68v",
        note: "The scitalis entry claims that the variety of colour on its back arrests those looking at it, compensating for its slow movement.",
      },
    },
    {
      key: "beast-two-ended-serpent",
      question:
        "What was anatomically unusual about the creature called an anphivena in medieval bestiaries?",
      answer: "It had a head at each end of its body and could move in either direction.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 68v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f68v",
        note: "The manuscript locates one head in the usual place and one on the tail, and says the creature can move quickly towards either head.",
      },
    },
    {
      key: "beast-hydrus-entry",
      question: "Why did the bestiary's hydrus deliberately get swallowed by a sleeping crocodile?",
      answer: "To tear through the crocodile's innards and emerge unharmed on the other side.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 69r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f69r",
        note: "The idrus coats itself in mud, slides into the crocodile's mouth, is swallowed alive, then tears open its intestines and comes out whole.",
      },
    },
    {
      key: "beast-boa-dairy",
      question: "What did the Aberdeen Bestiary claim a boas was stealing from cattle?",
      answer: "Milk: it supposedly fastened onto their udders and sucked until the animals died.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 69r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f69r",
        note: "The boas entry describes a huge Italian snake following cattle and gazelles, fastening onto full udders and killing the animals by sucking.",
      },
    },
    {
      key: "beast-arabian-sirens",
      question:
        'One Aberdeen Bestiary entry calls certain Arabian creatures "sirens". What did it mean?',
      answer: "White, winged snakes said to move faster than horses and also to fly.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 69v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f69v",
        note: "Under Of sirens, the translation describes white snakes in Arabia with wings, faster over the ground than horses and reportedly capable of flight.",
      },
    },
    {
      key: "beast-salamander-flames",
      question: "What was supposed to happen when a salamander crawled into flames?",
      answer: "It put the fire out without being burned.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 70r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f70r",
        note: "The medieval salamander is described as resisting fire, existing painlessly in flames and extinguishing them; this is the manuscript's claim, not modern biology.",
      },
    },
    {
      key: "beast-dragon-weapon",
      question: "In the Aberdeen Bestiary, what is a dragon's chief weapon rather than its teeth?",
      answer: "Its tail, which it coils around victims to crush or suffocate them.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 66r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f66r",
        note: "The dragon entry places its strength in the tail, not the teeth, says it needs no poison, and describes elephants being killed by its coils.",
      },
    },
    {
      key: "beast-asp-earplugs",
      question: "What defence did a medieval asp supposedly use against a snake charmer's music?",
      answer: "It pressed one ear to the ground and blocked the other with its tail.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 68r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f68r",
        note: "The asp passage explains this supposed ear-blocking manoeuvre as a way to avoid hearing the music that would otherwise lure it from its cave.",
      },
    },
    {
      key: "beast-cromarty-token",
      question:
        "What token was offered as proof of Lauchland Mackintosh's alleged encounter near Cromarty?",
      answer: "A ring said to have been left by a mermaid.",
      source: {
        title: "National Library of Scotland — The Wonder of Wonders Being",
        url: "https://digital.nls.uk/broadsides/view/?id=16755",
        note: "The NLS catalogue commentary for the broadside, dated approximately 1760, recounts a merchant's mermaid encounter and a ring left as a token of affection and supposed proof.",
      },
    },
    {
      key: "beast-ibex-landing",
      question: "What was supposed to protect an ibex when it fell all the way down a mountain?",
      answer: "Its extraordinarily strong horns would support its body on landing.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 11r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f11r",
        note: "The ibex entry claims that its two horns are strong enough to support its whole body after a fall from a high mountain.",
      },
    },
  ],
);
