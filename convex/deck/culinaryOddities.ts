import { definePack } from "./types";

export const culinaryOddities = definePack(
  {
    key: "culinary-oddities",
    title: "Culinary oddities",
    blurb:
      "Edible spectacles, vanished delicacies, and drinks from the stranger corners of culinary history.",
    category: "Culinary oddities",
    sort: 280,
  },
  [
    {
      key: "culinary-tudor-subtleties",
      question:
        "How did Tudor hosts turn the wait between courses into an edible display of wealth?",
      answer: "Elaborate sculptures made of sugar, displayed for guests to admire or eat.",
      source: {
        title: "Historic Royal Palaces — Tudor food and eating",
        url: "https://www.hrp.org.uk/hampton-court-palace/history-and-stories/tudor-food-and-eating/",
        note: "The Food and wealth section describes decorative sugar sculptures called subtleties, brought out between courses as demonstrations of royal wealth.",
      },
    },
    {
      key: "culinary-stag-fountain",
      question: "What were guests invited to do with a showpiece stag at some early modern feasts?",
      answer: "Stab it, then fill their cups with the wine that flowed out as its 'blood'.",
      source: {
        title: "Folger Shakespeare Library — The Food of Shakespeare's World",
        url: "https://www.folger.edu/podcasts/shakespeare-unlimited/shakespeare-unlimited-episode-53/",
        note: "Scholar Wendy Wall describes a sugar-plaster deer that released wine when stabbed, allowing guests to collect the apparent blood in their cups.",
      },
    },
    {
      key: "culinary-outlandish-mutton",
      question: "What surprise did Gervase Markham's 'outlandish leg of mutton' conceal?",
      answer:
        "The meat had been removed and its skin stuffed with a sweet pudding of eggs, cinnamon, and sugar.",
      source: {
        title: "Folger Shakespeare Library — The Food of Shakespeare's World",
        url: "https://www.folger.edu/podcasts/shakespeare-unlimited/shakespeare-unlimited-episode-53/",
        note: "Wall explains Markham's recipe: preserve the leg's skin, remove the lamb, and substitute a cinnamon, egg, and sugar pudding before serving it as mutton.",
      },
    },
    {
      key: "culinary-living-pie",
      question: "What made one seventeenth-century 'conceit' pie more entertainment than dinner?",
      answer:
        "Live birds, placed inside an already-baked empty crust so they could fly out at the table.",
      source: {
        title: "Folger Shakespeare Library — Shakespeare's Kitchen with Francine Segan",
        url: "https://www.folger.edu/podcasts/shakespeare-unlimited/shakespeare-kitchen/",
        note: "Segan describes instructions to blind-bake a large crust, add live birds, cover it, and send a dull knife to the table. The birds were not baked alive.",
      },
    },
    {
      key: "culinary-courage-tart",
      question:
        "What startling ingredient went into an early modern sweet pie called a 'courage tart'?",
      answer:
        "Sparrow brains, included because the dish's ingredients were believed to be aphrodisiacs.",
      source: {
        title: "Folger Shakespeare Library — Shakespeare's Kitchen with Francine Segan",
        url: "https://www.folger.edu/podcasts/shakespeare-unlimited/shakespeare-kitchen/",
        note: "Segan identifies courage tart as a sweet pie containing sweet potatoes, wine, dates, and sparrow brains, selected for their supposed aphrodisiac properties.",
      },
    },
    {
      key: "culinary-eryngoes",
      question: "Why would a confectioner in Shakespeare's England want roots of sea holly?",
      answer: "To candy them as eryngoes, sweets prized as a supposed aphrodisiac.",
      source: {
        title: "Folger Shakespeare Library — Possets, drugs, and milky effects",
        url: "https://www.folger.edu/blogs/shakespeare-and-beyond/posset-shakespeare-recipes/",
        note: "The article identifies candied eryngo as sea-holly root and discusses its inclusion in early modern aphrodisiac preparations. This describes historical belief, not medical efficacy.",
      },
    },
    {
      key: "culinary-perfumed-posset",
      question:
        "What did the Earl of Carlisle's 1669 recipe sprinkle on a creamy alcoholic drink as a luxury finishing touch?",
      answer:
        "Ambergris and musk, the animal-derived substances better known from perfumery, mixed with sugar.",
      source: {
        title: "Folger Shakespeare Library — Possets, drugs, and milky effects",
        url: "https://www.folger.edu/blogs/shakespeare-and-beyond/posset-shakespeare-recipes/",
        note: "The article transcribes Kenelm Digby's My Lord of Carlile's Sack-posset, ending with sugar mixed with three grains of ambergris and one grain of musk.",
      },
    },
    {
      key: "culinary-ale-with-rooster",
      question:
        "What did one English brewing recipe compiled between about 1675 and 1750 add to strong ale, raisins, and spices?",
      answer: "A large red rooster, cut into pieces: the resulting drink was called cock ale.",
      source: {
        title:
          "Folger Shakespeare Library — Don't try this at home (unless you are a professional brewer)",
        url: "https://www.folger.edu/blogs/collation/dont-try-this-at-home-unless-you-are-a-professional-brewer/",
        note: "Curator Heather Wolfe identifies the male chicken in manuscript V.a.429, folio 29r, and lists ale, raisins, nutmeg, ginger, dates, sack, and sugar among the ingredients.",
      },
    },
    {
      key: "culinary-chocolate-breadcrumbs",
      question:
        "What did William Hughes record adding to hot chocolate to make it more substantial in 1672?",
      answer: "Grated bread, turning the drink into something closer to a meal.",
      source: {
        title: "Folger Shakespeare Library — The American Nectar: William Hughes's hot chocolate",
        url: "https://www.folger.edu/blogs/shakespeare-and-beyond/the-american-nectar-william-hughess-hot-chocolate/",
        note: "Marissa Nicosia lists grated bread among ingredients Hughes reported in The American Physitian and discusses preparations substantial enough to replace a meal.",
      },
    },
    {
      key: "culinary-disguised-apples",
      question:
        "What might an apparent bowl of apples actually contain at a medieval or early modern feast?",
      answer: "Meatballs coated in colored batter and presented to look like fruit.",
      source: {
        title: "Folger Shakespeare Library — Celebrating Elizabethan Cooking, with Sam Bilton",
        url: "https://www.folger.edu/podcasts/shakespeare-unlimited/celebrating-elizabethan-cooking/",
        note: "Bilton describes poached meatballs coated in batter, dried before a fire, and made to resemble apples; green batter was another option.",
      },
    },
    {
      key: "culinary-fish-court-cooling",
      question:
        "Why was a courtyard beside Henry VIII's kitchens kept narrow and aligned north to south?",
      answer:
        "It kept direct sun off the surrounding food stores, making the courtyard a giant passive fridge.",
      source: {
        title: "Historic Royal Palaces — Tudor food and eating",
        url: "https://www.hrp.org.uk/hampton-court-palace/history-and-stories/tudor-food-and-eating/",
        note: "The Fish Court section calls the narrow north-south courtyard a fridge system: direct sunlight is excluded and the open air helps keep its stone stores cool.",
      },
    },
    {
      key: "culinary-meaty-blancmange",
      question:
        "What ingredient in Richard II's 'blanc mang' would surprise someone expecting a modern blancmange?",
      answer: "Chopped meat, mixed with milk, rice, almonds, and sugar.",
      source: {
        title: "British Library — The Forme of Cury: Blank mang (archived)",
        url: "https://web.archive.org/web/20070610171829/http://www.bl.uk/learning/langlit/booksforcooks/med/blancmanghome/blankmang.html",
        note: "The library describes the circa-1390 dish as a sweet mixture of milk, rice, almonds, chopped meat, and sugar, preceding modern blancmange.",
      },
    },
    {
      key: "culinary-royal-sticky-fork",
      question: "What food did Henry VIII reserve his unusual dining fork for?",
      answer: "Sweet, sticky preserves; most of his court ate with knives, spoons and fingers.",
      source: {
        title: "Historic Royal Palaces — Tudor food and eating",
        url: "https://www.hrp.org.uk/hampton-court-palace/history-and-stories/tudor-food-and-eating/",
        note: "The cutlery section says the king was the only person at court given a fork, used for sweet, sticky preserves, while Tudor diners generally used knives, spoons and fingers.",
      },
    },
    {
      key: "culinary-chastletes",
      question:
        "What ambitious shape did Richard II's cooks give a pastry filled with pork or almonds?",
      answer:
        "Miniature pastry castles, filled with pork or almonds and colored with saffron or sandalwood.",
      source: {
        title: "British Library — The Forme of Cury: Coffins and chastletes (archived)",
        url: "https://web.archive.org/web/20070610172015/http://www.bl.uk/learning/langlit/booksforcooks/med/coffinhome/chastletes.html",
        note: "The library explicitly identifies chastletes as small pastry castles and lists their fillings and colorings.",
      },
    },
    {
      key: "culinary-royal-porpoise",
      question:
        "What unusually large sea creature appears among the banquet dishes served to Henry VIII?",
      answer: "Porpoise, served as a luxury dish rather than a daily staple.",
      source: {
        title: "Historic Royal Palaces — Tudor food and eating",
        url: "https://www.hrp.org.uk/hampton-court-palace/history-and-stories/tudor-food-and-eating/",
        note: "The section on Henry VIII's food names conger eel and porpoise as unusual banquet dishes; it does not claim they were daily staples.",
      },
    },
    {
      key: "culinary-sandalwood-coloring",
      question: "What would a medieval cook do with sandalwood in the kitchen?",
      answer: "Use it as a red food colouring for jellies and custards.",
      source: {
        title: "British Library — Medieval food (archived)",
        url: "https://web.archive.org/web/20070420130057/http://www.bl.uk/learning/langlit/booksforcooks/med/medievalfood.html",
        note: "The Banquets and plain food section lists sandalwood for red, saffron for yellow, and boiled blood for black in medieval jellies and custards.",
      },
    },
    {
      key: "culinary-roman-rose-dish",
      question: "What unusually fragrant dish could finish a lavish ancient Roman banquet?",
      answer: "A fricassee of roses.",
      source: {
        title: "National Geographic — Eat, Drink, and Be Merry",
        url: "https://www.nationalgeographic.com/culture/article/eat-drink-and-be-merry-2",
        note: "The article's account of elite Roman banquets lists sweet-wine cakes and fricassee of roses among the concluding dishes.",
      },
    },
    {
      key: "culinary-roman-udder",
      question: "What unusual stuffed dish could open an extravagant ancient Roman dinner?",
      answer: "Stuffed sow's udders.",
      source: {
        title: "National Geographic — Eat, Drink, and Be Merry",
        url: "https://www.nationalgeographic.com/culture/article/eat-drink-and-be-merry-2",
        note: "The discussion of wealthy Romans' banquets explicitly includes stuffed sow's udders among the opening dishes.",
      },
    },
    {
      key: "culinary-glirarium",
      question: "Why would a wealthy Roman keep a ventilated pottery jar supplied with nuts?",
      answer: "To fatten live dormice inside it for the dinner table.",
      source: {
        title:
          "National Geographic — Is that an ancient pizza? Here's what people really ate in Pompeii",
        url: "https://www.nationalgeographic.com/premium/article/pompeii-food-drink-archaeology-discoveries",
        note: "The article describes lidded, perforated ceramic gliraria in which dormice were supplied with nuts and fattened before cooking.",
      },
    },
    {
      key: "culinary-flamingo-tongues",
      question: "What delicacy did wealthy Roman diners prize from flamingos?",
      answer: "Their tongues.",
      source: {
        title:
          "National Geographic — Buried by Vesuvius, this ancient villa is an overlooked alternative to Pompeii",
        url: "https://www.nationalgeographic.com/travel/article/buried-by-vesuvius-this-ancient-villa-is-overlooked-alternative-to-pompeii",
        note: "The article's reconstruction of elite Roman entertaining names flamingo tongues among the delicacies. The card concerns dining descriptions, not excavated food remains at this villa.",
      },
    },
    {
      key: "culinary-lost-silphium",
      question: "Why is recreating a Roman dish seasoned with silphium a particular challenge?",
      answer: "The prized plant, a relative of fennel, apparently disappeared in antiquity.",
      source: {
        title: "National Geographic — Fennel: Multitasking Vegetable, Ancient Birth Control",
        url: "https://www.nationalgeographic.com/culture/article/fennel--multitasking-vegetable--ancient-birth-control",
        note: "The article identifies silphium as a valuable fennel relative used in Roman recipes, depicted on Cyrene's coins, and apparently lost in the first century CE.",
      },
    },
    {
      key: "culinary-jiahu-brew",
      question:
        "Why does the ancient drink found in pottery at Jiahu resist being called just beer, wine or mead?",
      answer: "It combined rice, fruit and honey, crossing all three modern drinks categories.",
      source: {
        title: "National Geographic — Our 9,000-Year Love Affair With Booze",
        url: "https://www.nationalgeographic.com/magazine/article/alcohol-discovery-addiction-booze-human-culture",
        note: "The article discusses residue analysis of Jiahu pottery and a mixed beverage made with rice, honey, hawthorn berries, and grapes around 7000 BCE.",
      },
    },
    {
      key: "culinary-koumiss",
      question: "What gives the traditional Central Asian drink koumiss its unusual base?",
      answer: "Horse milk, fermented into a tangy, mildly alcoholic drink.",
      source: {
        title: "National Geographic — Our 9,000-Year Love Affair With Booze",
        url: "https://www.nationalgeographic.com/magazine/article/alcohol-discovery-addiction-booze-human-culture",
        note: "The article describes Central Asian nomads fermenting horse milk into koumiss, with an alcohol content comparable to weak beer.",
      },
    },
    {
      key: "culinary-afterlife-breweries",
      question: "How did ancient Egyptian royals arrange for a supply of beer after death?",
      answer: "They were buried with model breweries, intended to keep producing in the afterlife.",
      source: {
        title: "National Geographic — Our 9,000-Year Love Affair With Booze",
        url: "https://www.nationalgeographic.com/magazine/article/alcohol-discovery-addiction-booze-human-culture",
        note: "The discussion of Egyptian brewing states that royals were buried with miniature breweries to slake their thirst in the afterlife.",
      },
    },
    {
      key: "culinary-strawberry-flowerpot",
      question:
        "What unexpected serving container appears for fresh strawberries in an illustrated Mrs Beeton dessert display?",
      answer: "An ornamental flowerpot.",
      source: {
        title: "British Library — Beeton's Book of Household Management: Desserts (archived)",
        url: "https://web.archive.org/web/20070202174317/http://www.bl.uk/learning/langlit/booksforcooks/1800s/dessertsf/desserts.html",
        note: "The library identifies one illustration as Strawberries au naturel in ornamental Flowerpot, alongside raspberry cream and two-colored jelly.",
      },
    },
    {
      key: "culinary-beeton-guinea-pig",
      question:
        "What unexpected roast appears in the British Library's account of Mrs Beeton's household advice?",
      answer: "Roast guinea pig.",
      source: {
        title: "British Library — Beeton's Book of Household Management: Desserts (archived)",
        url: "https://web.archive.org/web/20070202174317/http://www.bl.uk/learning/langlit/booksforcooks/1800s/dessertsf/desserts.html",
        note: "The library's description of Household Management explicitly includes advice on the best way to roast a guinea pig among the book's varied instructions.",
      },
    },
    {
      key: "culinary-bottled-feet-jelly",
      question:
        "What did Crosse and Blackwell offer in bottles flavoured with orange, lemon, punch or Madeira in 1855?",
      answer: "Ready-made calves' feet jellies, sold in bottles.",
      source: {
        title:
          "British Library — Soyer's Shilling Cookery: Crosse and Blackwell advertisement (archived)",
        url: "https://web.archive.org/web/20070203053906/http://www.bl.uk/learning/images/texts/cooks/transcript1445.html",
        note: "The transcribed advertisement lists Calves' Feet Jellies in Orange, Lemon, Noyau, Punch, Madeira, and Calf's Foot varieties, supplied in convenient bottles.",
      },
    },
    {
      key: "culinary-gendered-sauces",
      question:
        "What unusual choice did buyers of Soyer's new sauces face in an 1855 advertisement?",
      answer: "A mild sauce 'for ladies' or the same flavour with more heat 'for gentlemen'.",
      source: {
        title:
          "British Library — Soyer's Shilling Cookery: Crosse and Blackwell advertisement (archived)",
        url: "https://web.archive.org/web/20070203053906/http://www.bl.uk/learning/images/texts/cooks/transcript1445.html",
        note: "Soyer's New Sauces are advertised as one mild version for ladies and another of the same flavor, but warmer, for gentlemen.",
      },
    },
    {
      key: "culinary-acton-pudding-vegetables",
      question:
        "What economical ingredients did Eliza Acton put in a version of plum pudding published in 1845?",
      answer: "Mashed potato and carrots.",
      source: {
        title:
          "National Geographic — Deconstructing Christmas pudding: secrets of a seasonal staple",
        url: "https://www.nationalgeographic.com/travel/article/deconstructing-christmas-pudding-secrets-seasonal-staple",
        note: "The article identifies Acton's vegetable plum pudding in Modern Cookery for Private Families (1845) as a cheap-and-good version containing mashed potato and carrots.",
      },
    },
    {
      key: "culinary-dinosaur-dinner",
      question: "Where did a celebrated group of scientists sit for a London dinner in 1853?",
      answer: "Inside a life-size model of an Iguanodon.",
      source: {
        title: "National Geographic — Flesh and Bone",
        url: "https://www.nationalgeographic.com/science/article/flesh-bone",
        note: "The article describes the 1853 scientific dinner at a table inside an Iguanodon model. The card avoids disputed participant counts and details of the model's construction stage.",
      },
    },
  ],
);
