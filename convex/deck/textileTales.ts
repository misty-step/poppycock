import { definePack } from "./types";

export const textileTales = definePack(
  {
    key: "textile-tales",
    title: "Textile tales",
    blurb:
      "Unexpected ingredients, hidden structures, and ingenious tricks behind the clothes we wear.",
    category: "Textile tales",
    sort: 440,
  },
  [
    {
      key: "textile-golden-cape",
      question:
        "What supplied the thread for the golden cape and shawl displayed at the V&A in 2012?",
      answer: "More than a million female golden orb-weaver spiders in Madagascar.",
      source: {
        title: "Victoria and Albert Museum — Golden spider silk",
        url: "https://www.vam.ac.uk/articles/golden-spider-silk",
        note: "The museum describes the cape and shawl as spider-silk textiles, with silk harvested from more than one million female golden orb-weavers during a three-year project.",
      },
    },
    {
      key: "textile-bikaner-sequins",
      question:
        "What supplied some of the shimmering sequins on a Bikaner court garment made around 1855?",
      answer: "The iridescent wing cases of jewel beetles.",
      source: {
        title: "Victoria and Albert Museum — Conservation of an Indian jama",
        url: "https://www.vam.ac.uk/articles/jama",
        note: "The red jama from Bikaner is decorated with metal embellishments and jewel-beetle elytron, or wing-case, sequins, which still sparkle more than 160 years later.",
      },
    },
    {
      key: "textile-nipis-fibre",
      question:
        "What unlikely crop supplies a prized fibre for traditional Philippine ceremonial shirts?",
      answer: "Pineapple plants, whose fibres are woven into fine, translucent cloth.",
      source: {
        title: "Victoria and Albert Museum — The Barong and beyond: Piña textiles at the V&A",
        url: "https://www.vam.ac.uk/blog/museum-life/the-barong-and-beyond-pina-textiles-at-the-va",
        note: "The article identifies piña as cloth woven from pineapple fibre, traditionally prized for Philippine wedding and ceremonial dress; modern barongs may blend it with silk.",
      },
    },
    {
      key: "textile-turkey-red",
      question:
        "What unsavoury ingredients helped nineteenth-century Scottish dyers produce their celebrated Turkey red?",
      answer: "Sheep dung, bullocks' blood, and urine were used alongside madder, oil, and alum.",
      source: {
        title: "National Museums Scotland — Colouring the Nation",
        url: "https://www.nms.ac.uk/collections/departments/global-arts-cultures-design/projects/colouring-the-nation",
        note: "The museum lists sheep dung, bullocks' blood and urine among the ingredients of the complex Turkey red process, whose colourant came from madder root.",
      },
    },
    {
      key: "textile-shoulder-puffs",
      question:
        "What was hidden inside fashionable women's enormous puffed sleeves in the 1820s and 1830s?",
      answer: "Separate down-filled pads that held the sleeves out.",
      source: {
        title: "Victoria and Albert Museum — Corsets, crinolines and bustles",
        url: "https://www.vam.ac.uk/articles/corsets-crinolines-and-bustles-fashionable-victorian-underwear",
        note: "The early Victorian silhouette section describes down-filled sleeve supports and illustrates a surviving pair of shoulder puffs dated to the 1820s–1830s.",
      },
    },
    {
      key: "textile-izod-torsos",
      question:
        "Why did Edwin Izod's late-Victorian manufacturing process need steam-heated copper torsos?",
      answer: "Starched corsets dried on them to acquire a stiff, rounded shape.",
      source: {
        title: "Victoria and Albert Museum — Corsets, crinolines and bustles",
        url: "https://www.vam.ac.uk/articles/corsets-crinolines-and-bustles-fashionable-victorian-underwear",
        note: "The museum attributes steam moulding to Izod in the late 1860s and describes drying starched corsets on steam-heated copper forms shaped to the fashionable silhouette.",
      },
    },
    {
      key: "textile-new-phantom",
      question:
        "What useful trick did the 'New Phantom', patented in 1884, perform when its owner sat down?",
      answer: "Its bustle collapsed on a pivot, then opened up again when she stood.",
      source: {
        title: "Victoria and Albert Museum — Corsets, crinolines and bustles",
        url: "https://www.vam.ac.uk/articles/corsets-crinolines-and-bustles-fashionable-victorian-underwear",
        note: "The New Phantom bustle's steel wires could collapse when the wearer sat and reopen when she rose, using the pivot described in the 1884 patent account.",
      },
    },
    {
      key: "textile-corset-stiffener",
      question:
        "What part of a whale supplied the flexible strips used to stiffen many nineteenth-century corsets?",
      answer: "Baleen: the keratin plates in its upper jaw, not its bones.",
      source: {
        title: "Victoria and Albert Museum — Corsets, crinolines and bustles",
        url: "https://www.vam.ac.uk/articles/corsets-crinolines-and-bustles-fashionable-victorian-underwear",
        note: "The museum explicitly distinguishes the corset material called whalebone from skeletal bone, identifying it as keratinous baleen extracted from the upper jaw.",
      },
    },
    {
      key: "textile-mica-glitter",
      question:
        "Besides metal and shells, what naturally glittering material has been used to decorate Indian textiles?",
      answer: "Mica, a shimmering mineral.",
      source: {
        title: "Victoria and Albert Museum — Indian textiles",
        url: "https://www.vam.ac.uk/articles/indian-textiles",
        note: "The raw-materials section lists insect wings, cowrie shells and shimmering minerals such as mica among natural products applied to finished Indian textiles.",
      },
    },
    {
      key: "textile-backstrap-anchor",
      question:
        "What provides a crucial living part of the support for a traditional back-strap loom?",
      answer: "The weaver's own waist, around which a supporting strap is fastened.",
      source: {
        title: "Victoria and Albert Museum — Indian textiles",
        url: "https://www.vam.ac.uk/articles/indian-textiles",
        note: "The weaving section describes the simple back-strap loom as sticks, rope and a strap worn around the weaver's waist.",
      },
    },
    {
      key: "textile-talismanic-shirt",
      question:
        "What covered a cotton shirt worn beneath battle dress in India around the fifteenth or sixteenth century?",
      answer: "Verses from the Quran, written in ink and gold paint as talismanic protection.",
      source: {
        title: "Victoria and Albert Museum — Indian textiles",
        url: "https://www.vam.ac.uk/articles/indian-textiles",
        note: "The sacred-textiles section illustrates T.59-1935, a talismanic shirt inscribed with Quranic verses, worn beneath battle dress and during illness. Protection is a historical belief.",
      },
    },
    {
      key: "textile-libbey-dress",
      question:
        "What unexpected material went into the dress exhibited by the Libbey company at Chicago's 1893 world's fair?",
      answer: "Glass fibre.",
      source: {
        title:
          "Victoria and Albert Museum — 10 things we didn't know before reading Fashioned from Nature",
        url: "https://www.vam.ac.uk/blog/shop/10-things-we-didnt-know-before-reading-fashioned-from-nature",
        note: "Item six identifies the glass-fibre dress exhibited by the Libbey Glass Company at the 1893 World's Columbian Exposition in Chicago.",
      },
    },
    {
      key: "textile-cocoon-length",
      question:
        "Roughly how much silk thread can be unwound from a single cocoon, according to the V&A?",
      answer: "About 700 to 1,000 metres: potentially close to a kilometre from one cocoon.",
      source: {
        title:
          "Victoria and Albert Museum — 10 things we didn't know before reading Fashioned from Nature",
        url: "https://www.vam.ac.uk/blog/shop/10-things-we-didnt-know-before-reading-fashioned-from-nature",
        note: "Item two states that the silk thread from one cocoon measures between 700 and 1,000 metres; the question preserves the source's approximate range.",
      },
    },
    {
      key: "textile-beaten-bark",
      question:
        "How can makers turn strips of inner tree bark into a continuous sheet of cloth without a loom?",
      answer:
        "They soak and repeatedly beat the bark until its fibres soften, stretch, and fuse together.",
      source: {
        title: "National Museums Scotland — The ancient craft of barkcloth across the world",
        url: "https://www.nms.ac.uk/discover-catalogue/the-ancient-craft-of-barkcloth-across-the-world",
        note: "The production section describes boiling or steaming stripped bark and beating it for hours over a hard surface, causing its fibres to soften, stretch and fuse.",
      },
    },
    {
      key: "textile-attush-openings",
      question:
        "Why are the embroidered patterns on traditional Ainu attush robes concentrated around the openings?",
      answer:
        "They are intended to protect the wearer from harmful spirits entering at the hem, cuffs, or collar.",
      source: {
        title: "National Museums Scotland — The ancient craft of barkcloth across the world",
        url: "https://www.nms.ac.uk/discover-catalogue/the-ancient-craft-of-barkcloth-across-the-world",
        note: "The Japan section explains that attush robe patterns please the kamuy and are concentrated at garment openings to provide protection from harmful spirits; this records belief.",
      },
    },
    {
      key: "textile-perkin-accident",
      question:
        "What marketable surprise emerged from William Henry Perkin's unsuccessful attempt to make quinine in 1856?",
      answer: "Mauveine, a purple dye that helped launch the synthetic-dye industry.",
      source: {
        title: "Science Museum — The colourful chemistry of artificial dyes",
        url: "https://www.sciencemuseum.org.uk/objects-and-stories/chemistry/colourful-chemistry-artificial-dyes",
        note: "The museum describes eighteen-year-old Perkin's attempts to synthesise the antimalarial quinine from aniline and his discovery and commercial development of mauveine instead.",
      },
    },
    {
      key: "textile-morton-testcards",
      question:
        "Why did James Morton send cards of coloured fabric to his brother-in-law in India around 1904?",
      answer:
        "To leave them in direct sunlight for weeks or months and see which dyes resisted fading.",
      source: {
        title: "Science Museum — The colourful chemistry of artificial dyes",
        url: "https://www.sciencemuseum.org.uk/objects-and-stories/chemistry/colourful-chemistry-artificial-dyes",
        note: "After seeing his textiles fade in Liberty's window, Morton sent testcards to Patrick Fagan in India for prolonged sunlight exposure; this research informed his Sundour dyes.",
      },
    },
    {
      key: "textile-cotton-loophole",
      question: "Why did Robert Jones's 1769 furnishing cloth mix linen threads with cotton ones?",
      answer:
        "British law then prohibited all-cotton cloth; mixing in linen avoided that restriction.",
      source: {
        title: "Victoria and Albert Museum — Furnishing fabric by Robert Jones & Company",
        url: "https://collections.vam.ac.uk/item/O1436095/furnishing-fabric-robert-jones/",
        note: "The record explains that the fustian has a linen warp and cotton weft because legislation protecting wool and silk prohibited all-cotton textiles; the ban was removed in 1774.",
      },
    },
    {
      key: "textile-crackle-quilt",
      question:
        "What destructive step helped NUNO produce the worn-looking surface of its 1992 'Crackle Quilt' fabric?",
      answer:
        "Acid dissolved selected rayon fibres, then tumble-drying frayed the surviving pattern.",
      source: {
        title: "Victoria and Albert Museum — Crackle Quilt",
        url: "https://collections.vam.ac.uk/item/O39102/crackle-quilt-woven-textile-sudo-reiko/",
        note: "The wool-and-rayon textile was printed with an acid substance that removed rayon, then tumble-dried to fray the chemically etched pattern and imitate an aged quilt.",
      },
    },
    {
      key: "textile-flame-finishing",
      question:
        "Why would a textile mill deliberately pass perfectly good fabric over a naked flame?",
      answer: "To burn off projecting fuzz and loose fibre ends without burning the fabric itself.",
      source: {
        title: "Encyclopedia Britannica — Textile: Finishes enhancing appearance",
        url: "https://www.britannica.com/topic/textile/Finishes-enhancing-appearance",
        note: "The singeing section describes passing fabric or yarn rapidly over gas flames or heated copper plates, burning projecting fibres away and then stopping any smouldering.",
      },
    },
    {
      key: "textile-beetling-mallets",
      question: "Why did linen finishers repeatedly pound damp cloth with heavy wooden mallets?",
      answer: "To flatten and compact it, producing a hard, glossy surface.",
      source: {
        title: "Encyclopedia Britannica — Textile: Finishes enhancing appearance",
        url: "https://www.britannica.com/topic/textile/Finishes-enhancing-appearance",
        note: "Beetling pounds damp linen, or cotton made to resemble linen, around an iron cylinder to create a flat, lustrous and less porous fabric.",
      },
    },
    {
      key: "textile-fluorescent-whites",
      question: "How can an apparently colourless dye make a white fabric look even whiter?",
      answer: "It fluoresces, increasing the blue light coming from the cloth.",
      source: {
        title: "Encyclopedia Britannica — Textile: Finishes enhancing appearance",
        url: "https://www.britannica.com/topic/textile/Finishes-enhancing-appearance",
        note: "The optical-brightening section identifies fluorescent colourless dyes that increase reflected blue light and give the appearance of greater whiteness and brightness.",
      },
    },
    {
      key: "textile-watered-pattern",
      question:
        "How can a finisher put a wavy, water-like pattern into cloth without drawing or printing it in ink?",
      answer:
        "By pressing it with rollers: the moiré effect is created through pressure on the fabric.",
      source: {
        title: "Encyclopedia Britannica — Textile: Finishes enhancing appearance",
        url: "https://www.britannica.com/topic/textile/Finishes-enhancing-appearance",
        note: "The calendering section describes moiréing as a wavy or watered effect imparted by engraved rollers pressing a design into the cloth.",
      },
    },
    {
      key: "textile-detachable-pockets",
      question:
        "How could an eighteenth-century woman take off her pockets without removing her dress?",
      answer:
        "They were separate pouches tied around her waist, reached through openings in her skirts.",
      source: {
        title: "Victoria and Albert Museum — Women's tie-on pockets",
        url: "https://www.vam.ac.uk/articles/womens-tie-pockets/",
        note: "The museum describes pear-shaped pockets tied independently around the waist and accessible through dress and petticoat openings; the wearer could put them on and take them off at will.",
      },
    },
    {
      key: "textile-schiaparelli-padding",
      question:
        "What illusion did raised cotton padding create on Schiaparelli and Dalí's black evening dress of 1938?",
      answer:
        "The wearer's skeleton seemed to sit on the outside, with padded ribs, spine, and other bones.",
      source: {
        title: "Victoria and Albert Museum — The Skeleton Dress",
        url: "https://collections.vam.ac.uk/item/O65687/the-skeleton-dress-evening-dress-elsa-schiaparelli/",
        note: "The dress uses exaggerated trapunto quilting: outlines stitched through two fabric layers were padded with cotton wadding to raise a skeleton in relief.",
      },
    },
    {
      key: "textile-miyake-oversizing",
      question:
        "Why were garments in Issey Miyake's 1993 line first sewn at two or three times their intended size?",
      answer:
        "The completed clothes were then heat-pressed into permanent pleats, reducing them to their final size.",
      source: {
        title: "Metropolitan Museum of Art — Issey Miyake, Dress, ca. 1993",
        url: "https://www.metmuseum.org/art/collection/search/678868",
        note: "The record describes garment pleating rather than pre-pleating cloth: oversized sewn garments were folded, ironed and sandwiched between paper in a heat press.",
      },
    },
    {
      key: "textile-teasel-combs",
      question:
        "What prickly natural tool helped cloth dressers raise a soft nap before trimming woollen fabric?",
      answer: "Teasel heads, used to comb the cloth's surface.",
      source: {
        title: "Science Museum Group — Cloth Dresser",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co67425/cloth-dresser",
        note: "The museum's description of George Walker's 1813 print explains that woollen cloth was combed with teasels to raise its nap before the worker cropped it with shears.",
      },
    },
    {
      key: "textile-taranto-gloves",
      question:
        "What unusual animal product was knitted into a pair of Taranto gloves made around 1890–1900?",
      answer:
        "Byssus, the silky anchoring threads of a mollusc, made into the textile called sea silk.",
      source: {
        title: "Victoria and Albert Museum — Pair of gloves, Taranto",
        url: "https://collections.vam.ac.uk/item/O360663/pair-of-gloves/",
        note: "The catalogue identifies T.15-1926 as knitted sea silk (byssus), made in Taranto around 1890–1900. Britannica's byssus coverage independently explains molluscan anchoring threads.",
      },
    },
    {
      key: "textile-raf-asbestos",
      question: "What surprising material was once made into flying suits supplied to the RAF?",
      answer: "Asbestos.",
      source: {
        title: "Science Museum Group — Asbestos flying suit for airmen",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co29560/asbestos-flying-suit-for-airmen-as-supplied-to-the-r-a-f",
        note: "The object is explicitly catalogued as an asbestos flying suit supplied to the RAF, mounted on a dummy figure; the donor was Bell's Asbestos & Engineering Supplies Ltd.",
      },
    },
    {
      key: "textile-crinoline-fire",
      question:
        "Why could the new, lighter skirt supports of the 1850s make an open fireplace unexpectedly dangerous?",
      answer:
        "They held flammable skirts far from the body, making it harder to judge when the fabric was nearing a flame.",
      source: {
        title: "Victoria and Albert Museum — Corsets, crinolines and bustles",
        url: "https://www.vam.ac.uk/articles/corsets-crinolines-and-bustles-fashionable-victorian-underwear",
        note: "The museum links serious crinoline fire accidents to larger skirts in flammable fabrics and reduced spatial awareness caused by the unusually light support underneath.",
      },
    },
  ],
);
