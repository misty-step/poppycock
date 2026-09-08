import { definePack } from "./types";

export const kitchenSecrets = definePack(
  {
    key: "kitchen-secrets",
    title: "Kitchen secrets",
    blurb: "Shocking culinary customs, eccentric historical dishes, and bizarre gastronomy.",
    category: "Kitchen secrets",
    sort: 50,
  },
  [
    {
      key: "food-salep-orchids",
      question:
        "What botanical ingredient traditionally gives Turkish dondurma ice cream its stretchy chew?",
      answer: "Powdered orchid tubers.",
      source: {
        title: "Kew — From pods to puddings: Vanilla and other sweet-tasting orchids",
        url: "https://www.kew.org/read-and-watch/vanilla-digitisation",
        note: "Original question and factual summary. Tuberous roots of Orchis mascula are ground into powder (salep) that gives Turkish dondurma its thickening power and stretchy texture.",
      },
    },
    {
      key: "food-toast-sandwich",
      question:
        "What was the filling of the Victorian 'toast sandwich' published in Mrs. Beeton's 1861 cookbook?",
      answer: "A slice of cold toast seasoned with salt and pepper.",
      source: {
        title: "BBC News — The toast sandwich and other hyper-cheap meals",
        url: "https://www.bbc.com/news/magazine-15760897",
        note: "Original question and factual summary. Published in Mrs. Beeton's 1861 Book of Household Management; places a slice of cold toast between two thin slices of buttered bread.",
      },
    },
    {
      key: "food-chicha-saliva-chew",
      question:
        "In traditional Amazonian and Andean brewing of chicha, how is fermentation started?",
      answer:
        "Brewers chew the starchy mash and spit it into the pot so saliva enzymes break down the sugars.",
      source: {
        title: "National Geographic — We Are What We Eat: Foraging in the Amazon Rainforest",
        url: "https://www.nationalgeographic.com/photography/article/we-are-what-we-eat-foraging-in-the-amazon-rainforest",
        note: "Original question and factual summary. Traditional brewers chew manioc or corn and spit it back into the bowl; salivary amylase initiates fermentation.",
      },
    },
    {
      key: "food-ortolan-napkin",
      question:
        "Why do French gourmets traditionally drape a white napkin over their head when eating an ortolan bunting?",
      answer: "To trap the aromas and hide their gluttony from God while eating it whole.",
      source: {
        title: "Smithsonian Magazine — Ortolans, Songbirds Enjoyed as French Delicacy",
        url: "https://www.smithsonianmag.com/smart-news/ortolans-birds-enjoyed-french-delicacy-are-being-eaten-extinction-180972272/",
        note: "Original question and factual summary. Diners veil their faces with a napkin to trap aromas, conceal spitting out bones, and hide their shame from God while eating the whole bird.",
      },
    },
    {
      key: "food-roman-garum",
      question:
        "What was the primary raw ingredient fermented in the sun to make ancient Rome's favorite condiment, garum?",
      answer: "Salted fish guts and blood left in open vats for months.",
      source: {
        title: "National Geographic — Funky Fish Guts Were the Ketchup of Ancient Rome",
        url: "https://www.nationalgeographic.com/history/history-magazine/article/what-is-garum-rome-fish-sauce",
        note: "Original question and factual summary. Vats were filled with fresh fish guts placed between layers of salt and herbs and left in the Mediterranean sun to ferment.",
      },
    },
    {
      key: "food-turnspit-dog",
      question:
        "What specialized job did the now-extinct British 'turnspit dog' perform in large kitchens?",
      answer: "Running inside a wooden wheel to turn roasting meat over the hearth.",
      source: {
        title: "NPR — Turnspit Dogs: The Rise And Fall Of The Vernepator Cur",
        url: "https://www.npr.org/sections/thesalt/2014/05/13/311127237/turnspit-dogs-the-rise-and-fall-of-the-vernepator-cur",
        note: "Original question and factual summary. Small, strong dogs bred to run inside an elevated wooden wheel connected by chains to a roasting spit in British kitchens.",
      },
    },
    {
      key: "food-mock-turtle-head",
      question:
        "What animal cut was boiled down in Victorian kitchens to imitate turtle meat for 'mock turtle soup'?",
      answer: "A whole calf's head with the brains and tongue.",
      source: {
        title: "Atlas Obscura — How America Fell Into—and Out of—Love With Mock Turtle Soup",
        url: "https://www.atlasobscura.com/articles/mock-turtle-soup-rise-and-fall-calf-head",
        note: "Original question and factual summary. Cooks prepared mock turtle soup by opening a calf's skull, extracting the brains and tongue, and boiling the head to replicate green sea turtle meat.",
      },
    },
    {
      key: "food-casu-marzu",
      question:
        "What living creature is considered an essential ingredient in traditional Sardinian casu marzu cheese?",
      answer: "Thousands of live fly maggots that can jump several inches when disturbed.",
      source: {
        title: "CNN Travel — Casu marzu: The world’s ‘most dangerous’ cheese",
        url: "https://www.cnn.com/travel/article/casu-marzu-worlds-most-dangerous-cheese",
        note: "Original question and factual summary. Cheese skipper fly larvae (Piophila casei) hatch and digest fats in pecorino; diners consume the cheese with live writhing maggots.",
      },
    },
    {
      key: "food-greenland-kiviak",
      question:
        "How is the traditional winter feast dish 'kiviak' prepared in northwestern Greenland?",
      answer: "Hundreds of whole little auk seabirds are sewn into a seal skin and fermented.",
      source: {
        title:
          "National Geographic — Greenland is one of the last places on Earth to explore ancient Arctic life",
        url: "https://www.nationalgeographic.com/travel/article/greenland-last-place-explore-ancient-arctic-life",
        note: "Original question and factual summary. Inughuit delicacy made by stuffing hundreds of little auks (dovekies) whole into a fresh seal skin, sealed under stones to ferment.",
      },
    },
    {
      key: "food-scandinavian-lutefisk",
      question:
        "What caustic cleaning chemical is dried cod soaked in to produce gelatinous Scandinavian lutefisk?",
      answer: "Lye, a corrosive alkaline solution of sodium or potassium hydroxide.",
      source: {
        title: "Smithsonian Magazine — Scandinavians’ Strange Holiday Lutefisk Tradition",
        url: "https://www.smithsonianmag.com/travel/scandinavians-strange-holiday-lutefisk-tradition-2218218/",
        note: "Original question and factual summary. Dried cod is reconstituted by soaking in lye (an industrial drain-cleaning chemical) before extensive rinsing and cooking.",
      },
    },
    {
      key: "food-icelandic-hakarl",
      question:
        "Why must Greenland shark meat be fermented in gravel for months to make Icelandic hákarl?",
      answer: "Fresh Greenland shark meat is poisonous with toxic urea and antifreeze compounds.",
      source: {
        title: "Atlas Obscura — Hákarl",
        url: "https://www.atlasobscura.com/foods/hakarl-shark-iceland",
        note: "Original question and factual summary. Fresh Greenland shark meat is poisonous, causing powerful intoxication; burying the meat under gravel for weeks neutralizes the toxins.",
      },
    },
    {
      key: "food-virgin-boy-eggs",
      question:
        "In Dongyang, China, what unusual liquid are springtime 'virgin boy eggs' simmered in?",
      answer: "The collected urine of prepubescent schoolboys.",
      source: {
        title: "NBC News — Urine-soaked 'virgin boy eggs' are a springtime taste treat in China",
        url: "https://www.nbcnews.com/news/world/urine-soaked-virgin-boy-eggs-are-springtime-taste-treat-china-flna593952",
        note: "Original question and factual summary. Dongyang intangible cultural heritage; eggs are boiled and simmered in urine collected from young schoolboys in primary schools.",
      },
    },
    {
      key: "food-kopi-luwak",
      question:
        "What animal's digestive tract must coffee cherries pass through to make authentic Kopi Luwak?",
      answer: "The Asian palm civet, a small cat-like mammal.",
      source: {
        title:
          "National Geographic — The Disturbing Secret Behind the World’s Most Expensive Coffee",
        url: "https://www.nationalgeographic.com/animals/article/160429-kopi-luwak-captive-civet-coffee-Indonesia",
        note: "Original question and factual summary. Indonesian luxury coffee produced from coffee beans plucked from the feces of the Asian palm civet after digestive fermentation.",
      },
    },
    {
      key: "food-carmine-scale-insects",
      question:
        "What biological creature is harvested, dried, and crushed to make the common red food dye 'carmine'?",
      answer: "The cochineal scale insect, which lives on prickly pear cacti.",
      source: {
        title: "FDA 21 CFR § 73.100 — Cochineal extract; carmine",
        url: "https://www.law.cornell.edu/cfr/text/21/73.100",
        note: "Original question and factual summary. Federal food additive regulation 21 CFR 73.100 defines carmine and cochineal extract as derived from Dactylopius coccus costa insects.",
      },
    },
    {
      key: "food-jamon-iberico-acorns",
      question:
        "What exclusive food must Spanish black Iberian pigs forage in oak forests to earn the prized 'de bellota' label?",
      answer: "Acorns fallen from holm and cork oak trees.",
      source: {
        title: "BBC Travel — The world’s most expensive ham",
        url: "https://www.bbc.com/travel/article/20181114-the-worlds-most-expensive-ham",
        note: "Original question and factual summary. To earn 'de bellota' status, Iberian pigs must feed on acorns fallen from oak trees in the dehesa savannah, giving the ham its high oleic fat.",
      },
    },
    {
      key: "food-swiftlet-saliva-nest",
      question:
        "What biological substance actually forms the costly nests used in Chinese bird's nest soup?",
      answer: "Solidified saliva regurgitated by cave-dwelling swiftlets.",
      source: {
        title: "Atlas Obscura — Bird's Nest Soup",
        url: "https://www.atlasobscura.com/foods/birds-nest-soup",
        note: "Original question and factual summary. Cave-dwelling swiftlets weave edible nests from saliva that hardens on rock walls; harvested to produce gelatinous soup.",
      },
    },
    {
      key: "food-miracle-fruit-sour",
      question:
        "What temporary effect does chewing an African 'miracle berry' have on human taste buds?",
      answer: "It makes intensely sour foods like lemons and vinegar taste deliciously sweet.",
      source: {
        title:
          "Scientific Reports — Intracellular acidification is required for full activation of sweet receptor by miraculin",
        url: "https://www.nature.com/articles/srep22807",
        note: "Original question and factual summary. The glycoprotein miraculin from miracle fruit binds sweet receptors in an inactive state until exposed to acids, triggering intense sweetness.",
      },
    },
    {
      key: "food-beaver-castoreum",
      question:
        "What animal organ was historically harvested to produce FDA-approved 'natural' vanilla and raspberry flavoring?",
      answer: "The castor scent sacs located near the tail and anus of beavers.",
      source: {
        title: "Smithsonian Magazine — Does Vanilla Flavoring Actually Come From Beaver Butts?",
        url: "https://www.smithsonianmag.com/smart-news/does-vanilla-flavoring-actually-come-from-beaver-butts-180983288/",
        note: "Original question and factual summary. Castoreum is harvested from beaver castor sacs located near the tail; recognized as safe by the FDA and historically used as a vanilla enhancer.",
      },
    },
  ],
);
