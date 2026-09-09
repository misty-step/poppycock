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
      key: "beast-partridge-clod",
      question: "How did a medieval bestiary say young partridges hid when someone spotted them?",
      answer:
        "They lay on their backs and held little clods of earth above themselves with their feet.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 54v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f54v",
        note: "The translation claims that young partridges lie on their backs holding small clods of earth in their claws to conceal themselves. This is a medieval belief, not zoology.",
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
      question: "Why did medieval hunters supposedly tamper with trees to catch elephants?",
      answer:
        "Elephants supposedly slept leaning on trees and had no knee joints, so a falling tree left them unable to get up.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 10r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f10r",
        note: "The manuscript claims that elephants sleep leaning on trees because their knees have no joints, and that hunters partly saw through those trees.",
      },
    },
    {
      key: "beast-bear-sculpting",
      question:
        "What job did a medieval bestiary say a mother bear had to do immediately after giving birth?",
      answer: "Lick shapeless lumps of flesh into the shape of cubs.",
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
      question: "What supposedly happened to a parander's appearance when it was frightened?",
      answer:
        "It changed its appearance to match nearby things, such as a white stone or a green bush.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 16r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f16r",
        note: "The parander passage claims it takes on the likeness of whatever is nearby when hiding in fear.",
      },
    },
    {
      key: "beast-deer-swimming-chain",
      question: "How did the Aberdeen Bestiary say deer helped each other cross deep water?",
      answer:
        "They travelled in a line, each resting its head on the hindquarters of the deer in front.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 13v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f13v",
        note: "The deer passage says that when crossing long stretches of water they rest their heads on the hindquarters of the animals ahead to avoid feeling the weight.",
      },
    },
    {
      key: "beast-lion-first-breath",
      question: "How did a medieval lion supposedly welcome its cubs on their third day?",
      answer: "Their father breathed into their faces; they were said to have been born dead.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 7v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f7v",
        note: "The manuscript's third characteristic of the lion is paternal breath reviving dead-born cubs on the third day, interpreted as a Christian resurrection allegory.",
      },
    },
    {
      key: "beast-manticore-mouth",
      question: "What made a manticore's human-looking grin unusual in medieval bestiaries?",
      answer: "Its mouth was packed with three complete rows of teeth.",
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
      key: "beast-halcyon-calm",
      question: "What protection did a bestiary promise a seabird laying eggs on a winter beach?",
      answer:
        "Once the halcyon laid its eggs, the raging sea supposedly fell calm until they hatched.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 54v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f54v",
        note: "The halcyon entry says it lays on the shore at midwinter and that stormy winds cease and the sea lies calm after its eggs are laid, until they hatch.",
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
      question: "What unusual harvesting technique did medieval writers credit to hedgehogs?",
      answer: "Rolling onto fallen grapes and carrying them home to their young on their spines.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 24r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f24r",
        note: "The text describes the hedgehog rolling backwards onto a grape to deliver it to its young; the Ashmole parallel illustrates grapes impaled on spines.",
      },
    },
    {
      key: "beast-ostrich-stargazing",
      question: "What did the Aberdeen Bestiary say an ostrich checked before laying its eggs?",
      answer: "The sky: it supposedly waited for the Pleiades to appear before laying.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 41r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f41r",
        note: "The ostrich entry says the bird raises its eyes to the sky and will not lay until Vergiliae, identified in the translation as the Pleiades, has risen.",
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
        "What safeguard against nodding off did medieval writers recommend learning from a crane?",
      answer:
        "Stand on one leg holding a stone in the other claw; if you doze off, the falling stone wakes you.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 46r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f46r",
        note: "The manuscript explains that sentinel cranes hold small stones in claws raised from the ground; a sleeping bird drops its stone, wakes and calls out.",
      },
    },
    {
      key: "beast-caladrius-cure",
      question: "What was the caladrius bird's supposed treatment for a patient it could save?",
      answer:
        "It took the illness into itself, then flew towards the sun to burn the sickness away.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 57r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f57r",
        note: "The text says the bird takes a recoverable illness upon itself, flies towards the sun, and burns and disperses it so the patient is cured.",
      },
    },
    {
      key: "beast-basilisk-remedy",
      question: "What unlikely ally did medieval writers recommend against a basilisk?",
      answer:
        "A weasel: it would chase the supposedly terrifying monster into its cave and kill it.",
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
      question: "What was unusual about the way a medieval anphivena could make a quick getaway?",
      answer: "It had a head at each end of its body and could move in either direction.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 68v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f68v",
        note: "The manuscript locates one head in the usual place and one on the tail, and says the creature can move quickly towards either head.",
      },
    },
    {
      key: "beast-swallow-building-survey",
      question: "Why might a medieval householder worry if swallows refused to nest on the roof?",
      answer: "Swallows were said to foresee a building's collapse and avoid nesting on it.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 47v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f47v",
        note: "Quoting Isidore, the swallow entry claims that the bird knows when buildings are about to fall and refuses to nest on their tops.",
      },
    },
    {
      key: "beast-boa-dairy",
      question: "What did the Aberdeen Bestiary claim a boas was stealing from cattle?",
      answer: "Milk: the huge snake supposedly fastened onto their udders and sucked.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 69r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f69r",
        note: "The boas entry describes a huge Italian snake following cattle and gazelles, fastening onto full udders and killing the animals by sucking.",
      },
    },
    {
      key: "beast-arabian-sirens",
      question:
        "How did the Arabian 'sirens' in one medieval bestiary differ from the singers sailors feared?",
      answer:
        "They were white, winged snakes, supposedly faster than horses on the ground and able to fly.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 69v",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f69v",
        note: "Under Of sirens, the translation describes white snakes in Arabia with wings, faster over the ground than horses and reportedly capable of flight.",
      },
    },
    {
      key: "beast-salamander-flames",
      question: "What did medieval writers say would happen if a salamander crawled into a fire?",
      answer: "It would put the flames out without being burned.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 70r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f70r",
        note: "The medieval salamander is described as resisting fire, existing painlessly in flames and extinguishing them; this is the manuscript's claim, not modern biology.",
      },
    },
    {
      key: "beast-dragon-weapon",
      question:
        "Which part of a dragon did the Aberdeen Bestiary describe as its most dangerous weapon?",
      answer: "Its tail, used as a huge constricting coil rather than for stinging.",
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
        "What was Lauchland Mackintosh said to have brought away from an encounter with a mermaid?",
      answer:
        "A ring she had left him as a token of affection, later offered as proof of the encounter.",
      source: {
        title: "National Library of Scotland — The Wonder of Wonders Being",
        url: "https://digital.nls.uk/broadsides/view/?id=16755",
        note: "The NLS catalogue commentary for the broadside, dated approximately 1760, recounts a merchant's mermaid encounter and a ring left as a token of affection and supposed proof.",
      },
    },
    {
      key: "beast-ibex-landing",
      question: "How did medieval writers claim an ibex could survive a plunge down a mountain?",
      answer: "Its extraordinarily strong horns would support its body on landing.",
      source: {
        title: "University of Aberdeen — Aberdeen Bestiary, folio 11r",
        url: "https://www.abdn.ac.uk/bestiary/ms24/f11r",
        note: "The ibex entry claims that its two horns are strong enough to support its whole body after a fall from a high mountain.",
      },
    },
  ],
);
