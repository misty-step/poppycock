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
        note: "Original question and factual summary. Salep is made from ground wild orchid tubers; gives Turkish mastic ice cream its dense, stretchy texture.",
      },
    },
    {
      key: "food-toast-sandwich",
      question:
        "What was the filling of the Victorian 'toast sandwich' published in Mrs. Beeton's 1861 cookbook?",
      answer: "A slice of cold toast seasoned with salt and pepper.",
      source: {
        title: "BBC News — The Toast Sandwich and Other Cheap Meals",
        url: "https://www.bbc.com/news/magazine-15760897",
        note: "Original question and factual summary. Published in Mrs. Beeton's 1861 Book of Household Management; places a slice of cold toast between two buttered slices of bread.",
      },
    },
    {
      key: "food-charles-ii-ambergris",
      question:
        "What costly perfume ingredient was King Charles II famously fond of having melted over his breakfast eggs?",
      answer: "Ambergris, a waxy secretion produced in the guts of sperm whales.",
      source: {
        title: "Smithsonian Ocean — The Mystery of Ambergris",
        url: "https://ocean.si.edu/ocean-life/marine-mammals/mystery-ambergris",
        note: "Original question and factual summary. Records Charles II of England frequently seasoning his breakfast eggs with ambergris, the valuable sperm-whale digestive byproduct.",
      },
    },
    {
      key: "food-ortolan-napkin",
      question:
        "Why do French gourmets traditionally drape a white napkin over their head when eating an ortolan bunting?",
      answer: "To trap the aromas and hide their gluttony from God while eating it whole.",
      source: {
        title: "Smithsonian Magazine — Ortolans Eaten as French Delicacy",
        url: "https://www.smithsonianmag.com/smart-news/ortolans-birds-enjoyed-french-delicacy-are-being-eaten-extinction-180972272/",
        note: "Original question and factual summary. The traditional ritual requires draping a large napkin over the head to trap steam and aromas, hide spitting bones, and symbolically hide from God.",
      },
    },
    {
      key: "food-roman-garum",
      question:
        "What was the primary raw ingredient fermented in the sun to make ancient Rome's favorite condiment, garum?",
      answer: "Salted fish guts and blood left in open vats for months.",
      source: {
        title: "National Geographic — Funky Fish Guts Were Ketchup of Ancient Rome",
        url: "https://www.nationalgeographic.com/history/history-magazine/article/what-is-garum-rome-fish-sauce",
        note: "Original question and factual summary. Garum was Rome's ubiquitous umami seasoning, produced by leaving salted fish viscera in the Mediterranean sun to autolyze.",
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
        note: "Original question and factual summary. From the 16th to 19th centuries in Britain, small, long-bodied dogs ran in wheel mechanisms linked by chains to roasting spits.",
      },
    },
    {
      key: "food-mock-turtle-head",
      question:
        "What animal cut was boiled down in Victorian kitchens to imitate turtle meat for 'mock turtle soup'?",
      answer: "A whole calf's head with the brains and tongue.",
      source: {
        title: "Atlas Obscura — The Rise and Fall of Mock Turtle Soup",
        url: "https://www.atlasobscura.com/articles/mock-turtle-soup-rise-and-fall-calf-head",
        note: "Original question and factual summary. In the 18th and 19th centuries, British and American cooks boiled a whole calf's head to replicate the gelatinous texture of green sea turtle meat.",
      },
    },
    {
      key: "food-casu-marzu",
      question:
        "What living creature is considered an essential ingredient in traditional Sardinian casu marzu cheese?",
      answer: "Thousands of live fly maggots that can jump several inches when disturbed.",
      source: {
        title: "CNN Travel — Casu marzu: The world's most dangerous cheese",
        url: "https://www.cnn.com/travel/article/casu-marzu-worlds-most-dangerous-cheese",
        note: "Original question and factual summary. Sardinian sheep's-milk cheese inoculated with Piophila casei skipper fly larvae that digest the fats; diners often shield their eyes from jumping maggots.",
      },
    },
    {
      key: "food-greenland-kiviak",
      question:
        "How is the traditional winter feast dish 'kiviak' prepared in northwestern Greenland?",
      answer: "Hundreds of whole little auk seabirds are sewn into a seal skin and fermented.",
      source: {
        title: "National Geographic — Ancient Arctic Life in Greenland",
        url: "https://www.nationalgeographic.com/travel/article/greenland-last-place-explore-ancient-arctic-life",
        note: "Original question and factual summary. Traditional Inughuit dish; 300 to 500 whole dovekies (little auks) with feathers intact are sewn into a seal carcass and fermented under stones.",
      },
    },
    {
      key: "food-scandinavian-lutefisk",
      question:
        "What caustic cleaning chemical is dried cod soaked in to produce gelatinous Scandinavian lutefisk?",
      answer: "Lye, a corrosive alkaline solution of sodium or potassium hydroxide.",
      source: {
        title: "TasteAtlas — Lutefisk: Traditional Norwegian Dish",
        url: "https://www.tasteatlas.com/lutefisk",
        note: "Original question and factual summary. Dried stockfish is soaked in a cold water-and-lye solution (pH 11–12) for days until its proteins break down into jelly.",
      },
    },
    {
      key: "food-icelandic-hakarl",
      question:
        "Why must Greenland shark meat be fermented in gravel for months to make Icelandic hákarl?",
      answer: "Fresh Greenland shark meat is poisonous with toxic urea and antifreeze compounds.",
      source: {
        title: "Atlas Obscura — Hákarl: Iceland's Fermented Shark",
        url: "https://www.atlasobscura.com/foods/hakarl-shark-iceland",
        note: "Original question and factual summary. Greenland shark lacks a urinary tract and concentrates toxic urea and trimethylamine oxide in its flesh; fermenting underground renders it edible.",
      },
    },
    {
      key: "food-virgin-boy-eggs",
      question:
        "In Dongyang, China, what unusual liquid are springtime 'virgin boy eggs' simmered in?",
      answer: "The collected urine of prepubescent schoolboys.",
      source: {
        title: "Reuters — Urine-soaked eggs a spring taste treat in China",
        url: "https://www.reuters.com/article/business/urine-soaked-eggs-a-spring-taste-treat-in-china-city-idUSL3E8ET0FN/",
        note: "Original question and factual summary. Dongyang intangible cultural heritage; chicken eggs soaked and simmered in urine collected from primary schools.",
      },
    },
    {
      key: "food-kopi-luwak",
      question:
        "What animal's digestive tract must coffee cherries pass through to make authentic Kopi Luwak?",
      answer: "The Asian palm civet, a small cat-like mammal.",
      source: {
        title: "National Geographic — The Disturbing Truth About Civet Coffee",
        url: "https://www.nationalgeographic.com/animals/article/160429-kopi-luwak-captive-civet-coffee-wildlife-trade",
        note: "Original question and factual summary. Indonesian luxury coffee produced from partially digested coffee cherries collected from the feces of the Asian palm civet.",
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
        note: "Original question and factual summary. Federal regulations define carmine as the pigment extracted from the dried bodies of female Dactylopius coccus insects.",
      },
    },
    {
      key: "food-jamon-iberico-acorns",
      question:
        "What exclusive food must Spanish black Iberian pigs forage in oak forests to earn the prized 'de bellota' label?",
      answer: "Acorns fallen from holm and cork oak trees.",
      source: {
        title: "TasteAtlas — Jamón Ibérico de Bellota",
        url: "https://www.tasteatlas.com/jamon-iberico",
        note: "Original question and factual summary. Pigs roam the dehesa oak forests feeding exclusively on fallen acorns during the montanera period, giving the cured ham its melting oleic fat.",
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
        note: "Original question and factual summary. White and black-nest swiftlets weave cave nests entirely from sticky, solidified salivary secretions.",
      },
    },
    {
      key: "food-miracle-fruit-sour",
      question:
        "What temporary effect does chewing an African 'miracle berry' have on human taste buds?",
      answer: "It makes intensely sour foods like lemons and vinegar taste deliciously sweet.",
      source: {
        title: "Scientific Reports — Sweet taste receptor activation by miraculin",
        url: "https://www.nature.com/articles/srep22807",
        note: "Original question and factual summary. The glycoprotein miraculin binds to sweet receptors and activates them specifically in the presence of acids, turning sour sensations into intense sweetness.",
      },
    },
    {
      key: "food-beaver-castoreum",
      question:
        "What animal organ was historically harvested to produce FDA-approved 'natural' vanilla and raspberry flavoring?",
      answer: "The castor scent sacs located near the tail and anus of beavers.",
      source: {
        title: "Smithsonian Magazine — Vanilla Flavoring and Castoreum",
        url: "https://www.smithsonianmag.com/smart-news/does-vanilla-flavoring-actually-come-from-beaver-butts-180983288/",
        note: "Original question and factual summary. Castoreum from beaver castor sacs is FDA GRAS (21 CFR 182.50) as a natural vanilla, raspberry, and strawberry flavor enhancer.",
      },
    },
  ],
);
