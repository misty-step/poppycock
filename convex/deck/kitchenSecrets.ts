import { definePack } from "./types";

export const kitchenSecrets = definePack(
  {
    key: "kitchen-secrets",
    title: "Kitchen secrets",
    blurb: "Ingredient anatomy, food transformations, fermentation and flavour.",
    category: "Kitchen secrets",
    sort: 50,
  },
  [
    {
      key: "food-salep-orchids",
      question:
        "What botanical ingredient traditionally gives salep, used in Turkish dondurma, its thickening power?",
      answer: "Powdered orchid tubers.",
      source: {
        title: "Kew — From pods to puddings: Vanilla and other sweet-tasting orchids",
        url: "https://www.kew.org/read-and-watch/vanilla-digitisation",
        note: "Original question and factual paraphrase. Spicy orchids section; a traditional ingredient, not a claim about every commercial ice cream. No source prose or media reproduced.",
      },
    },
    {
      key: "food-vanilla-hand-work",
      question:
        "What delicate job must workers do flower by flower on many commercial vanilla farms?",
      answer: "Pollinate the flowers by hand.",
      source: {
        title: "Kew — From pods to puddings: Vanilla and other sweet-tasting orchids",
        url: "https://www.kew.org/read-and-watch/vanilla-digitisation",
        note: "Original question and factual paraphrase. Botanical silver section describes the hand-pollination method; no exclusive bee species or cost claim. No source prose or media reproduced.",
      },
    },
    {
      key: "food-cinnamon-curls",
      question: "How does a cinnamon stick acquire its curled-up shape?",
      answer: "Strips of inner bark curl naturally as they dry.",
      source: {
        title: "Kew — Mulled wine: Tastes of Christmas growing at Kew",
        url: "https://www.kew.org/read-and-watch/mulled-wine-kew-taste-of-christmas",
        note: "Original question and factual paraphrase. Cinnamon and Chopped back sections; medicinal claims and the recipe are not used. No source prose or media reproduced.",
      },
    },
    {
      key: "food-mace-nutmeg",
      question: "How are the spices mace and nutmeg related before they reach the spice rack?",
      answer: "Mace is the lacy covering around the seed that becomes nutmeg.",
      source: {
        title: "Oxford University Plants 400 — Myristica fragrans (Nutmeg)",
        url: "https://herbaria.plants.ox.ac.uk/bol/plants400/Profiles/MN/Myristica",
        note: "Original question and factual paraphrase. Stephen Harris's botanical description distinguishes the dried aril from the seed. No source prose or media reproduced.",
      },
    },
    {
      key: "food-caper-buds",
      question: "What part of a caper bush goes into the little jars of ordinary capers?",
      answer: "Its unopened flower buds, pickled or salted.",
      source: {
        title: "Royal Horticultural Society — Capparis spinosa: common caper",
        url: "https://www.rhs.org.uk/plants/92942/capparis-spinosa/details",
        note: "Original question and factual paraphrase. Plant description; caperberries are the separate fruit, not the buds asked about. No source prose or media reproduced.",
      },
    },
    {
      key: "food-cacao-banana-leaves",
      question:
        "Why are cacao beans traditionally tucked into a bed of banana leaves during fermentation?",
      answer: "The leaves help keep the fermenting beans warm.",
      source: {
        title: "Kew — From bean to bar: How to make chocolate",
        url: "https://www.kew.org/read-and-watch/kew-gardens-cacao-how-to-make-chocolate",
        note: "Original question and factual paraphrase. Hannah Button and Ellen McHale's fermentation section; no claim that every producer uses leaves. No source prose or media reproduced.",
      },
    },
    {
      key: "food-chocolate-tempering",
      question: "What is a chocolatier trying to control by carefully tempering melted chocolate?",
      answer: "How its cocoa-butter crystals form, for a glossy bar with a clean snap.",
      source: {
        title: "Kew — From bean to bar: How to make chocolate",
        url: "https://www.kew.org/read-and-watch/kew-gardens-cacao-how-to-make-chocolate",
        note: "Original question and factual paraphrase. Tempering section; omits the source's questionable count of crystal forms and all recipe instructions. No source prose or media reproduced.",
      },
    },
    {
      key: "food-cacao-baba",
      question: "What is the 'baba' found inside a freshly opened cacao pod?",
      answer: "Sweet, edible white pulp surrounding the beans.",
      source: {
        title: "Kew — From bean to bar: How to make chocolate",
        url: "https://www.kew.org/read-and-watch/kew-gardens-cacao-how-to-make-chocolate",
        note: "Original question and factual paraphrase. Extracting the beans section; flavor comparisons are subjective and are omitted. No source prose or media reproduced.",
      },
    },
    {
      key: "food-popcorn-pressure",
      question: "What actually forces a popcorn kernel to burst open?",
      answer: "Steam pressure building inside its tough outer coat.",
      source: {
        title: "Exploratorium — Popping Popcorn",
        url: "https://www.exploratorium.edu/food/popping-popcorn",
        note: "Original question and factual paraphrase. Mechanism paragraphs explain trapped water, the shell bursting, and expanding starch. No source prose or media reproduced.",
      },
    },
    {
      key: "food-pressure-boiling",
      question: "Why can a pressure cooker cook food faster than an ordinary pot of boiling water?",
      answer: "Higher pressure lets the water boil at a higher temperature.",
      source: {
        title: "Exploratorium — Pressure Cooking",
        url: "https://www.exploratorium.edu/food/pressure-cooking",
        note: "Original question and factual paraphrase. Water and pressure explanation; no claim that all cookers reach one fixed temperature. No source prose or media reproduced.",
      },
    },
    {
      key: "food-steak-sizzle",
      question: "What produces the loud sizzle when a steak first meets a very hot pan?",
      answer: "Water at the surface rapidly turning into steam.",
      source: {
        title: "Exploratorium — Searing Steak",
        url: "https://www.exploratorium.edu/food/searing-steak",
        note: "Original question and factual paraphrase. Protein and water explanation; the card does not repeat the myth that searing seals in juices. No source prose or media reproduced.",
      },
    },
    {
      key: "food-kneading-network",
      question: "What invisible structure does kneading develop in a wheat bread dough?",
      answer: "A stretchy gluten network that can hold gas bubbles.",
      source: {
        title: "Exploratorium — Bread Science 101",
        url: "https://www.exploratorium.edu/explore/cooking/bread-science",
        note: "Original question and factual paraphrase. Flour and gluten paragraphs; the question specifies wheat rather than every kind of bread. No source prose or media reproduced.",
      },
    },
    {
      key: "food-pasta-presoak",
      question:
        "Why can dried spaghetti soaked in room-temperature water later finish cooking so quickly?",
      answer: "It has already absorbed the water; heat still has to cook its starch and proteins.",
      source: {
        title: "Exploratorium — Soaking Pasta",
        url: "https://www.exploratorium.edu/food/soaking-pasta",
        note: "Original question and factual paraphrase. Distinguishes hydration from cooking; soaked pasta alone is not described as fully cooked. No source prose or media reproduced.",
      },
    },
    {
      key: "food-meringue-web",
      question: "What keeps the air bubbles trapped when egg whites are beaten into meringue?",
      answer: "Unfolded egg proteins link up into a network around the bubbles.",
      source: {
        title: "Exploratorium — Science of Eggs",
        url: "https://www.exploratorium.edu/explore/cooking/egg-science",
        note: "Original question and factual paraphrase. Beat 'em section; no recipe or instructional wording reused. No source prose or media reproduced.",
      },
    },
    {
      key: "food-mayo-yolk",
      question: "What useful job does egg yolk do in a traditional mayonnaise?",
      answer: "It keeps tiny oil droplets dispersed instead of letting them join back together.",
      source: {
        title: "Exploratorium — Science of Eggs",
        url: "https://www.exploratorium.edu/explore/cooking/egg-science",
        note: "Original question and factual paraphrase. Mix 'em up section; proteins and lecithin act as emulsifiers. No source prose or media reproduced.",
      },
    },
    {
      key: "food-yogurt-tang",
      question: "What gives plain yogurt its tang even when nobody has added lemon juice?",
      answer: "Lactic acid made by bacteria as they consume milk sugar.",
      source: {
        title: "Exploratorium — Bacteria Culture Club",
        url: "https://www.exploratorium.edu/snacks/bacteria-culture-club",
        note: "Original question and factual paraphrase. What's Going On section; no food-preparation or storage-safety instructions reproduced. No source prose or media reproduced.",
      },
    },
    {
      key: "food-egg-green-ring",
      question: "What creates the gray-green ring sometimes seen around a hard-boiled egg yolk?",
      answer: "Sulfur compounds from the white react with iron in the yolk.",
      source: {
        title: "Exploratorium — Gassy Eggs",
        url: "https://www.exploratorium.edu/snacks/gassy-eggs",
        note: "Original question and factual paraphrase. What's Going On section identifies iron sulfide; not a freshness or safety test. No source prose or media reproduced.",
      },
    },
    {
      key: "food-flavor-back-door",
      question:
        "How can a candy's aroma reach your nose while the candy is still inside your mouth?",
      answer: "Scent molecules travel up a passage behind the throat into the nose.",
      source: {
        title: "Exploratorium — Your Sense of Taste",
        url: "https://www.exploratorium.edu/snacks/your-sense-of-taste",
        note: "Original question and factual paraphrase. What's Going On section on retronasal smell; omits taste-percentage estimates and tongue-map claims. No source prose or media reproduced.",
      },
    },
  ],
);
