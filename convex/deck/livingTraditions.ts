import { definePack } from "./types";

export const livingTraditions = definePack(
  {
    key: "living-traditions",
    title: "Living traditions",
    blurb: "Bizarre community celebrations, extraordinary festivals, and ancient customs.",
    category: "Living traditions",
    sort: 70,
  },
  [
    {
      key: "custom-cheese-rolling",
      question:
        "At the annual extreme sports race down Cooper's Hill in Gloucestershire, England, what prize does the winner receive after tumbling 200 yards down the near-vertical cliff?",
      answer: "An eight-pound wheel of Double Gloucester cheese.",
      source: {
        title: "BBC News — Cooper's Hill cheese rolling: origins, myths and history",
        url: "https://www.bbc.com/news/articles/cz024gnm9z4o",
        note: "Original question and factual summary. Centuries-old annual race down a 1:2 gradient slope chasing a rolling wheel of Double Gloucester cheese.",
      },
    },
    {
      key: "custom-el-colacho-baby-jump",
      question:
        "What happens during the climax of the 400-year-old Spanish festival of El Colacho?",
      answer: "Men costumed as the Devil leap over mattresses of newborn babies.",
      source: {
        title: "National Geographic — Look Inside Spain’s Unusual Baby Jumping Festival",
        url: "https://www.nationalgeographic.com/culture/article/el-colacho-baby-jumping-festival-murcia-spain",
        note: "Original question and factual summary. In Castrillo de Murcia, men in yellow devil masks jump over infants laid on street mattresses to cleanse original sin.",
      },
    },
    {
      key: "custom-wife-carrying-beer",
      question:
        "What is the grand prize awarded to the winner of Finland's Wife-Carrying World Championship?",
      answer: "The carried partner's exact weight in beer.",
      source: {
        title: "BBC Travel — Finland’s swamp soccer and sauna endurance",
        url: "https://www.bbc.com/travel/article/20110620-finlands-swamp-soccer-and-sauna-endurance",
        note: "Original question and factual summary. Annual contest in Sonkajärvi, Finland; competitors navigate a 253.5m obstacle course for the partner's weight in beer.",
      },
    },
    {
      key: "custom-monkey-buffet",
      question: "What is served on banquet tables at the annual Lopburi festival in Thailand?",
      answer: "Huge feasts of fruit and treats served exclusively to wild monkeys.",
      source: {
        title:
          "The Guardian — No more monkey business: Thai city’s macaques to be put in enclosures",
        url: "https://www.theguardian.com/world/2024/apr/05/no-more-monkey-business-thai-lopburi-macaques-to-be-rounded-up-and-put-in-enclosures",
        note: "Original question and factual summary. Lopburi hosts an annual Monkey Buffet Festival laying out tons of fresh fruits and sweets for the city's wild macaques.",
      },
    },
    {
      key: "custom-la-tomatina-pole-ham",
      question:
        "What must someone successfully climb and retrieve to trigger the start of Spain's La Tomatina tomato fight?",
      answer: "A whole cured ham mounted at the top of a greased wooden pole.",
      source: {
        title: "BBC Travel — Spain's La Tomatina festival",
        url: "https://www.bbc.com/travel/article/20100816-spains-la-tomatina-festival",
        note: "Original question and factual summary. In Buñol, crowds scramble up a greased pole (palo jabón) to retrieve a ham before water cannons signal the tomato battle.",
      },
    },
    {
      key: "custom-ivrea-orange-battle",
      question:
        "What food serves as the ammunition hurled during the historic annual Carnival battle in Ivrea, Italy?",
      answer: "Hundreds of tons of fresh oranges.",
      source: {
        title: "BBC Travel — The Italian city where life is sweetest in winter",
        url: "https://www.bbc.com/travel/article/20260130-the-italian-city-where-life-is-sweetest-in-winter",
        note: "Original question and factual summary. Reenacts a medieval rebellion against tyranny, pitting foot throwers against cart crews hurling tons of oranges.",
      },
    },
    {
      key: "custom-up-helly-aa-galley",
      question: "What is the fiery climax of the annual Up Helly Aa festival in Lerwick, Shetland?",
      answer: "Throwing a thousand torches into a handcrafted Viking longship to burn it.",
      source: {
        title: "BBC News — Famous Up Helly Aa festival sets Shetland's skies ablaze",
        url: "https://www.bbc.com/news/articles/cy8p2rjeyveo",
        note: "Original question and factual summary. A thousand torchbearing 'guizers' parade through Lerwick before hurling flaming torches into a full-sized replica galley.",
      },
    },
    {
      key: "custom-ottery-tar-barrels",
      question:
        "What do residents of Ottery St Mary, England run through crowded town streets carrying on their shoulders every November?",
      answer: "Burning wooden barrels soaked in flaming coal tar.",
      source: {
        title: "BBC News — Ottery St Mary Tar Barrels 2025: Everything you need to know",
        url: "https://www.bbc.com/news/articles/c5y4g23x7pzo",
        note: "Original question and factual summary. Centuries-old Devon tradition where residents carry flaming barrels of burning tar on their shoulders through packed crowds.",
      },
    },
    {
      key: "custom-nakizumo-crying-baby",
      question:
        "In the 400-year-old Japanese festival of Nakizumo, how do two babies compete in a sumo ring?",
      answer: "By seeing who cries first or loudest while held by sumo wrestlers.",
      source: {
        title: "The Guardian — The Nakizumo crying baby festival in Tokyo – in pictures",
        url: "https://www.theguardian.com/world/gallery/2013/apr/29/crying-baby-festival-tokyo-pictures",
        note: "Original question and factual summary. Amateur sumo wrestlers hold babies in the ring while referees provoke crying, believed to ward off demons and bring good health.",
      },
    },
    {
      key: "custom-catalan-human-towers",
      question:
        "In the 200-year-old Catalan tradition of human towers (castells), who climbs to the very peak of the 9-story tower?",
      answer: "A young child called the enxaneta who raises their hand.",
      source: {
        title: "BBC Travel — Human pyramids in Catalonia",
        url: "https://www.bbc.com/travel/article/20120614-human-pyramids-in-catalonia",
        note: "Original question and factual summary. After multiple tiers form on a dense human base (pinya), a small child climbs to the apex and raises four fingers to signal completion.",
      },
    },
    {
      key: "custom-silbo-speech",
      question:
        "How does Silbo Gomero let people on La Gomera convey spoken messages in a different form?",
      answer: "It turns the sounds of Spanish into whistles.",
      source: {
        title:
          "UNESCO Multimedia Archives — Whistled Language of the Island of La Gomera (Canary Islands), the Silbo Gomero",
        url: "https://www.unesco.org/archives/multimedia/document-370",
        note: "Original question and factual paraphrase. Canary Islands whistled language translating vowels and consonants into whistling frequencies across deep mountain ravines.",
      },
    },
    {
      key: "custom-bridge-straw",
      question: "What do Quechua communities braid to rebuild Peru's Q'eswachaka bridge each year?",
      answer: "Straw, made into thick ropes and woven into the bridge.",
      source: {
        title:
          "UNESCO Multimedia Archives — Knowledge, Skills and Rituals Related to the Annual Renewal of the Q’eswachaka Bridge",
        url: "https://www.unesco.org/archives/multimedia/document-3540",
        note: "Original question and factual paraphrase. Indigenous communities braid native q'oya grass into thick suspension ropes to renew the last remaining Incan grass bridge annually.",
      },
    },
    {
      key: "custom-shrimp-horses",
      question:
        "What unusual helpers pull traditional shrimp-fishing nets through the surf at Oostduinkerke, Belgium?",
      answer: "Horses ridden by the shrimpers.",
      source: {
        title: "UNESCO Multimedia Archives — Shrimp Fishing on Horseback in Oostduinkerke",
        url: "https://www.unesco.org/archives/multimedia/document-3534",
        note: "Original question and factual paraphrase. Brabant draft horses wade breast-deep through the North Sea surf towing funnel-shaped shrimp nets.",
      },
    },
    {
      key: "custom-namur-jousting",
      question: "How do the traditional jousters of Namur, Belgium, tower above the ground?",
      answer: "They compete while standing on stilts.",
      source: {
        title: "UNESCO Multimedia Archives — Namur Stilt Jousting",
        url: "https://www.unesco.org/archives/multimedia/document-5780",
        note: "Original question and factual paraphrase. Six-century-old tradition where two costumed brigades on stilts attempt to knock opponents to the ground.",
      },
    },
    {
      key: "custom-takanakuy-fistfights",
      question:
        "On Christmas Day in the Chumbivilcas Province of Peru, how do villagers traditionally settle their year-long grudges?",
      answer: "By fighting each other in public bare-knuckle fistfights overseen by referees.",
      source: {
        title: "BBC News — Peru stages Christmas Day fighting festival",
        url: "https://www.bbc.com/news/av/world-latin-america-12084478",
        note: "Takanakuy is an Andean celebration where community members settle interpersonal disputes in regulated bare-knuckle bouts before dancing together for the New Year.",
      },
    },
    {
      key: "custom-egremont-gurning",
      question:
        "At the 750-year-old Egremont Crab Fair in England, how do competitors in the World Gurning Championship compete?",
      answer:
        "By thrusting their head through a leather horse collar and pulling the most grotesque face possible.",
      source: {
        title: "BBC News — Tommy Mattinson retains Egremont Crab Fair gurning crown",
        url: "https://www.bbc.co.uk/news/uk-england-cumbria-29301914",
        note: "Original question and factual summary. The medieval fair hosts the World Gurning Championship where contestants frame their heads in a horse collar (braffin) to contort their faces.",
      },
    },
    {
      key: "custom-wrestling-kispet",
      question:
        "In Turkey's 650-year-old Kırkpınar wrestling tournament, what must competitors douse themselves with before grappling?",
      answer: "Gallons of olive oil.",
      source: {
        title: "UNESCO Multimedia Archives — Kirkpinar oil Wrestling Festival",
        url: "https://www.unesco.org/archives/multimedia/document-1686",
        note: "Wrestlers are doused in olive oil, wearing heavy leather trousers (kispet) that provide the only viable grip during matches.",
      },
    },
    {
      key: "custom-camel-coaxing",
      question:
        "What problem do Mongol herders try to solve by singing and playing music to a mother camel?",
      answer: "Getting her to accept a newborn or adopted calf.",
      source: {
        title:
          "UNESCO Multimedia Archives — The Mongolian Traditional Coaxins Rituals for Baby Animals: The Special Case of the Baby Camel",
        url: "https://www.unesco.org/archives/multimedia/document-4021",
        note: "Original question and factual paraphrase. Herders use guttural chanting, singing, and horsehead fiddle music to calm stressed mother camels and induce them to nurse calves.",
      },
    },
  ],
);
