import { definePack } from "./types";

export const oddWords = definePack(
  {
    key: "odd-words",
    title: "Odd words",
    blurb: "Uncommon vocabulary and explicitly historical senses.",
    category: "Odd words",
    sort: 10,
  },
  [
    {
      key: "word-absquatulate",
      question: "What does the old American verb 'absquatulate' mean?",
      answer: "To leave abruptly or make off.",
      source: {
        title: "Webster's 1913 — Absquatulate",
        url: "https://www.websters1913.com/words/Absquatulate",
        note: "Original question; condensed public-domain dictionary definition. The entry labels this a jocular American word.",
      },
    },
    {
      key: "word-anfractuosity",
      question: "What quality does 'anfractuosity' describe?",
      answer: "Being full of winding turns and twists.",
      source: {
        title: "Webster's 1913 — Anfractuosity",
        url: "https://www.websters1913.com/words/Anfractuosity",
        note: "Original question; paraphrase of public-domain sense 1, rather than the anatomical sense.",
      },
    },
    {
      key: "word-brontolith",
      question: "What would someone who found a 'brontolith' have picked up?",
      answer: "A meteorite: a stone or metal mass that fell from space.",
      source: {
        title: "Webster's 1913 — Brontolith",
        url: "https://www.websters1913.com/words/Brontolith",
        note: "Original question; public-domain entry defines it as an aerolite. The dictionary's Aërolite entry confirms the meteorite meaning.",
      },
    },
    {
      key: "word-crapulence",
      question: "What unpleasant condition is called 'crapulence'?",
      answer: "Sickness from eating or drinking too much.",
      source: {
        title: "Webster's 1913 — Crapulence",
        url: "https://www.websters1913.com/words/Crapulence",
        note: "Original question; condensed public-domain definition describing sickness from intemperance or surfeit.",
      },
    },
    {
      key: "word-erinaceous",
      question: "If something is 'erinaceous', what is it like?",
      answer: "Like a hedgehog.",
      source: {
        title: "Webster's 1913 — Erinaceous",
        url: "https://www.websters1913.com/words/Erinaceous",
        note: "Original question; shortened public-domain definition, which says hedgehog-like or characteristic of a hedgehog.",
      },
    },
    {
      key: "word-floccillation",
      question: "In old medical writing, what behavior was called 'floccillation'?",
      answer: "A delirious patient picking at the bedclothes.",
      source: {
        title: "Webster's 1913 — Floccillation",
        url: "https://www.websters1913.com/words/Floccillation",
        note: "Original question; condensed public-domain historical medical definition, not medical advice.",
      },
    },
    {
      key: "word-toadeater",
      question: "In older English, what sort of person was called a 'toadeater'?",
      answer: "A fawning, obsequious sycophant or flatterer.",
      source: {
        title: "Webster's 1913 — Toadeater",
        url: "https://www.websters1913.com/words/Toadeater",
        note: "Original question; condensed public-domain definition. Webster notes the alleged traditional lore of mountebanks' boys supposedly eating toads to demonstrate fake cures.",
      },
    },
    {
      key: "word-lucubration",
      question: "In its literal older sense, what activity is 'lucubration'?",
      answer: "Studying at night by candlelight.",
      source: {
        title: "Webster's 1913 — Lucubration",
        url: "https://www.websters1913.com/words/Lucubration",
        note: "Original question; condensed public-domain sense 1, nocturnal study rather than the resulting written work.",
      },
    },
    {
      key: "word-cacodoxy",
      question: "What is 'cacodoxy'?",
      answer: "Erroneous doctrine or heterodox opinion; a heresy.",
      source: {
        title: "Webster's 1913 — Cacodoxy",
        url: "https://www.websters1913.com/words/Cacodoxy",
        note: "Original question; public-domain definition from Greek kakos (bad) + doxa (opinion).",
      },
    },
    {
      key: "word-nugacity",
      question: "What sort of talk or behavior is 'nugacity'?",
      answer: "Trifling, futile talk or behavior.",
      source: {
        title: "Webster's 1913 — Nugacity",
        url: "https://www.websters1913.com/words/Nugacity",
        note: "Original question; condensed public-domain definition. The entry marks the word rare.",
      },
    },
    {
      key: "word-oscitant",
      question: "In its literal sense, what is an 'oscitant' person doing?",
      answer: "Yawning or gaping.",
      source: {
        title: "Webster's 1913 — Oscitant",
        url: "https://www.websters1913.com/words/Oscitant",
        note: "Original question; public-domain sense 1, lightly shortened. The figurative sleepy or careless sense is not asked.",
      },
    },
    {
      key: "word-pandiculation",
      question: "What bodily action is called 'pandiculation'?",
      answer: "Stretching and stiffening the body and limbs, as when drowsy.",
      source: {
        title: "Webster's 1913 — Pandiculation",
        url: "https://www.websters1913.com/words/Pandiculation",
        note: "Original question; condensed public-domain definition. This card asks about stretching, not just yawning.",
      },
    },
    {
      key: "word-quiddity",
      question: "In philosophy, what is a thing's 'quiddity'?",
      answer: "Its essential nature: what makes it the thing it is.",
      source: {
        title: "Webster's 1913 — Quiddity",
        url: "https://www.websters1913.com/words/Quiddity",
        note: "Original question; paraphrase of public-domain sense 1. The separate quibble sense is excluded by the context.",
      },
    },
    {
      key: "word-sciolism",
      question: "What sort of knowledge is 'sciolism'?",
      answer: "Shallow or superficial knowledge.",
      source: {
        title: "Webster's 1913 — Sciolism",
        url: "https://www.websters1913.com/words/Sciolism",
        note: "Original question; condensed public-domain dictionary definition.",
      },
    },
    {
      key: "word-sternutation",
      question: "What everyday bodily event is 'sternutation'?",
      answer: "Sneezing.",
      source: {
        title: "Webster's 1913 — Sternutation",
        url: "https://www.websters1913.com/words/Sternutation",
        note: "Original question; public-domain definition shortened from the act of sneezing.",
      },
    },
    {
      key: "word-tarantism",
      question: "What urge characterized the historical condition called 'tarantism'?",
      answer: "An uncontrollable desire to dance, once blamed on a tarantula bite.",
      source: {
        title: "Webster's 1913 — Tarantism",
        url: "https://www.websters1913.com/words/Tarantism",
        note: "Original paraphrase of a public-domain historical definition. The spider-bite explanation is an old belief, not a present-day medical claim.",
      },
    },
    {
      key: "word-velleity",
      question: "How strong a wish is a 'velleity'?",
      answer: "A faint, incomplete wish, short of a firm intention.",
      source: {
        title: "Webster's 1913 — Velleity",
        url: "https://www.websters1913.com/words/Velleity",
        note: "Original question; paraphrase of the public-domain definition of minimal desire or incomplete volition.",
      },
    },
    {
      key: "word-wamble",
      question: "In the older bodily sense, what is 'a wamble'?",
      answer: "An upset stomach or feeling of nausea.",
      source: {
        title: "Webster's 1913 — Wamble",
        url: "https://www.websters1913.com/words/Wamble",
        note: "Original question; condensed public-domain noun definition, rather than the verb meaning to move irregularly.",
      },
    },
    {
      key: "word-pugil",
      question: "In old apothecaries' measurements, what quantity was a 'pugil'?",
      answer:
        "As much powder or dried herb as can be taken up between the thumb and first two fingers.",
      source: {
        title: "Webster's 1913 — Pugil",
        url: "https://www.websters1913.com/words/Pugil",
        note: "Original question; public-domain definition from Latin pugillus: a pinch held by thumb and two fingers.",
      },
    },
    {
      key: "word-hobbledehoy",
      question: "In older colloquial English, what sort of person was a 'hobbledehoy'?",
      answer: "An awkward, gawky youth between boy and man.",
      source: {
        title: "Webster's 1913 — Hobbledehoy",
        url: "https://www.websters1913.com/words/Hobbledehoy",
        note: "Original question; condensed public-domain definition. The entry marks the word colloquial.",
      },
    },
    {
      key: "word-blatteroon",
      question: "What sort of person was called a 'blatteroon' in older English?",
      answer: "A senseless babbler or boaster.",
      source: {
        title: "Webster's 1913 — Blatteroon",
        url: "https://www.websters1913.com/words/Blatteroon",
        note: "Original question; brief public-domain definition from Latin blatero.",
      },
    },
    {
      key: "word-callithump",
      question: "In 19th-century American slang, what was a 'callithump'?",
      answer: "A noisy, mocking parade or serenade with tin horns and clattering pots.",
      source: {
        title: "Webster's 1913 — Callithump",
        url: "https://www.websters1913.com/words/Callithump",
        note: "Original question; condensed public-domain definition of a discordant, riotous burlesque parade or charivari.",
      },
    },
    {
      key: "word-fribble",
      question: "In older English, what sort of person was dismissed as a 'fribble'?",
      answer: "A frivolous, contemptible fellow; a silly fop.",
      source: {
        title: "Webster's 1913 — Fribble",
        url: "https://www.websters1913.com/words/Fribble",
        note: "Original question; condensed public-domain noun definition.",
      },
    },
    {
      key: "word-furbelow",
      question: "On a garment, what is a 'furbelow'?",
      answer: "A plaited or gathered flounce.",
      source: {
        title: "Webster's 1913 — Furbelow",
        url: "https://www.websters1913.com/words/Furbelow",
        note: "Original question; shortened public-domain clothing sense, not the later verb 'to ornament'.",
      },
    },
    {
      key: "word-dandle",
      question: "In its affectionate older sense, what are you doing if you 'dandle' an infant?",
      answer: "Moving the child up and down on your knee or in your arms.",
      source: {
        title: "Webster's 1913 — Dandle",
        url: "https://www.websters1913.com/words/Dandle",
        note: "Original question; public-domain sense 1. Later senses of fondling or delaying by trifles are not used.",
      },
    },
    {
      key: "word-gallimaufry",
      question: "Aside from a mixed meat hash, what can a 'gallimaufry' be?",
      answer: "Any absurd medley or hotchpotch.",
      source: {
        title: "Webster's 1913 — Gallimaufry",
        url: "https://www.websters1913.com/words/Gallimaufry",
        note: "Original question; public-domain sense 2. The culinary hash sense is acknowledged in the prompt, not copied as the answer.",
      },
    },
    {
      key: "word-mugwump",
      question: "In 1884 U.S. political slang, what was a 'mugwump'?",
      answer: "A Republican who bolted the party; an Independent.",
      source: {
        title: "Webster's 1913 — Mugwump",
        url: "https://www.websters1913.com/words/Mugwump",
        note: "Original question; condensed public-domain cant definition. The card records historical slang, not a present-day party judgment.",
      },
    },
  ],
);
