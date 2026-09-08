import { definePack } from "./types";

export const workingLives = definePack(
  {
    key: "working-lives",
    title: "Working lives",
    blurb: "Historical trades, specialist labour and living traditional work.",
    category: "Working lives",
    sort: 90,
  },
  [
    {
      key: "work-mush-faker",
      question: "What did a Victorian London 'mush-faker' repair and sell?",
      answer: "Used umbrellas.",
      source: {
        title: "London Museum — Street life & work in 1877",
        url: "https://www.londonmuseum.org.uk/collections/london-stories/street-life-work-1877-john-thomson/",
        note: "Original question and factual paraphrase. Ginger beer and used umbrellas section, interpreting John Thomson and Adolphe Smith's 1877 record. No source prose or media reproduced.",
      },
    },
    {
      key: "work-flying-dustmen",
      question: "What service did London's freelance 'flying dustmen' offer in 1877?",
      answer: "Collecting rubbish as they moved from parish to parish.",
      source: {
        title: "London Museum — Street life & work in 1877",
        url: "https://www.londonmuseum.org.uk/collections/london-stories/street-life-work-1877-john-thomson/",
        note: "Original question and factual paraphrase. The flying dustmen section; 'flying' is not a claim about aircraft. No source prose or media reproduced.",
      },
    },
    {
      key: "work-swag-selling",
      question: "In Victorian London street trade, what sort of goods did 'swag-selling' mean?",
      answer: "Fancy trinkets such as jewellery, vases, combs and picture frames.",
      source: {
        title: "London Museum — Street life & work in 1877",
        url: "https://www.londonmuseum.org.uk/collections/london-stories/street-life-work-1877-john-thomson/",
        note: "Original question and factual paraphrase. A dealer in fancy-ware section; does not assume the goods were stolen. No source prose or media reproduced.",
      },
    },
    {
      key: "work-mobile-darkroom",
      question:
        "Why did some 1870s street photographers take a little wheeled cabin to Clapham Common?",
      answer: "It was a mobile darkroom for developing photographs on the spot.",
      source: {
        title: "London Museum — Street life & work in 1877",
        url: "https://www.londonmuseum.org.uk/collections/london-stories/street-life-work-1877-john-thomson/",
        note: "Original question and factual paraphrase. Getting a photo at Clapham Common section and photograph description; no photograph reproduced. No source prose or media reproduced.",
      },
    },
    {
      key: "work-crossing-sweeper",
      question:
        "How did a Victorian London crossing-sweeper hope to earn money from a passing pedestrian?",
      answer: "By sweeping a clean path in front of them and receiving a tip.",
      source: {
        title: "London Museum — Henry Mayhew brings Victorian London to life",
        url: "https://www.londonmuseum.org.uk/collections/london-stories/henry-mayhew-brings-victorian-london-life/",
        note: "Original question and factual paraphrase. Street-sweeper paragraphs; records work without repeating Mayhew's dismissive judgments. No source prose or media reproduced.",
      },
    },
    {
      key: "work-mudlarks",
      question: "Where did Victorian London's working 'mudlarks' search for things to sell?",
      answer: "On the exposed foreshore of the River Thames.",
      source: {
        title: "London Museum — Henry Mayhew brings Victorian London to life",
        url: "https://www.londonmuseum.org.uk/collections/london-stories/henry-mayhew-brings-victorian-london-life/",
        note: "Original question and factual paraphrase. Money for nothing section; historical livelihood, not instructions or permission for present-day searching. No source prose or media reproduced.",
      },
    },
    {
      key: "work-cooper-sound",
      question: "Why would an experienced cooper thump a sealed wooden cask and listen to it?",
      answer: "The sound helped reveal how snugly its staves fitted together.",
      source: {
        title: "Colonial Williamsburg — Making Circles",
        url: "https://research.colonialwilliamsburg.org/Foundation/journal/Autumn03/cooper.cfm",
        note: "Original question and factual paraphrase. Ed Crews's account of the trade's sensory demands; no source quotations copied. No source prose or media reproduced.",
      },
    },
    {
      key: "work-wigmaker-baking",
      question: "Why might an 18th-century wigmaker take packets of hair on curlers to a baker?",
      answer: "To bake the prepared hair for a frizzy style.",
      source: {
        title: "Colonial Williamsburg — Lies My Docent Told Me",
        url: "https://research.colonialwilliamsburg.org/Foundation/journal/Autumn10/myths.cfm",
        note: "Original question and factual paraphrase. Mary Miley Theobald, Lie 10, citing Garsault's 1767 Art of the Wigmaker; not whole wigs baked in bread. No source prose or media reproduced.",
      },
    },
    {
      key: "work-foggara-water-shares",
      question:
        "What do the traditional 'aiguadiers' of Algeria's Touat and Tidikelt communities calculate?",
      answer: "Each user's share of water from the foggara irrigation system.",
      source: {
        title:
          "UNESCO Multimedia Archives — Les savoirs et savoir-faire des mesureurs d'eau des foggaras ou aiguadiers du Touat-Tidikelt",
        url: "https://www.unesco.org/archives/multimedia/document-4787",
        note: "Original question and factual paraphrase. Original English paraphrase of the French catalogue's calculation of water shares; a living skilled role, not an extinct job. No source prose or media reproduced.",
      },
    },
    {
      key: "work-cigar-lector",
      question:
        "What did a 'lector' do while workers rolled cigars in early-20th-century Ybor City, Florida?",
      answer: "Read newspapers, literature and political works aloud to them.",
      source: {
        title: "National Park Service — American Latino Theme Study: Media",
        url: "https://www.nps.gov/articles/latinothemestudymedia.htm",
        note: "Original question and factual paraphrase. Félix F. Gutiérrez's Ybor City paragraph; workers chose reading material and contributed to the lector's pay. No source prose or media reproduced.",
      },
    },
    {
      key: "work-mine-trapper",
      question: "What was a 'trapper' responsible for in a 19th-century coal mine?",
      answer: "Opening and closing ventilation doors as coal wagons passed.",
      source: {
        title: "National Coal Mining Museum — Voices in the Coalshed: Career Options",
        url: "https://www.ncm.org.uk/news/voices-in-the-coalshed-career-options/",
        note: "Original question and factual paraphrase. Trapper paragraph; the source documents child labour, which is neither romanticized nor treated as acceptable. No source prose or media reproduced.",
      },
    },
    {
      key: "work-gong-farmer",
      question:
        "What did a Tudor palace's 'gong farmers' look after rather than agricultural crops?",
      answer: "Cleaning the toilets and removing their waste.",
      source: {
        title:
          "Historic Royal Palaces — Tudor world brought to life in new display at Hampton Court Palace",
        url: "https://www.hrp.org.uk/media-and-press/press-releases-2024/tudor-world-brought-to-life-in-new-display-at-hampton-court-palace/",
        note: "Original question and factual paraphrase. Ordinary workers paragraph and surviving cesspool chain-pump description. No source prose or media reproduced.",
      },
    },
    {
      key: "work-mary-rose-diver",
      question:
        "What was the West African free-diver Jacques Francis helping to recover from the sunken Mary Rose?",
      answer: "The ship's guns.",
      source: {
        title:
          "Historic Royal Palaces — Tudor world brought to life in new display at Hampton Court Palace",
        url: "https://www.hrp.org.uk/media-and-press/press-releases-2024/tudor-world-brought-to-life-in-new-display-at-hampton-court-palace/",
        note: "Original question and factual paraphrase. Paragraph identifying Francis and the salvage expedition; no invented biography or diving equipment. No source prose or media reproduced.",
      },
    },
    {
      key: "work-human-computers",
      question: "What job did a person hired as a 'computer' at Langley in the 1930s perform?",
      answer: "Calculating and plotting research data by hand.",
      source: {
        title: "NASA History — When the Computer Wore a Skirt: Langley's Computers, 1935–1970",
        url: "https://www.nasa.gov/history/langleys-computers-1935-1970/",
        note: "Original question and factual paraphrase. Sarah McLennan and Mary Gainer's opening history; the term is a historical job title, not an electronic machine. No source prose or media reproduced.",
      },
    },
    {
      key: "work-powder-monkeys",
      question:
        "What did the young sailors historically nicknamed 'powder monkeys' carry around a ship?",
      answer: "Gunpowder for its guns.",
      source: {
        title: "Royal Museums Greenwich — Pirate Objects: Gunpowder Tin",
        url: "https://www.rmg.co.uk/sites/default/files/import/media/pdf/SFTS_Objects24_GunpowderTin.pdf",
        note: "Original question and factual paraphrase. Museum object sheet for Great Yarmouth Museums tin GRYEH:1966.12; a historical human role, not trained animals. No source prose or media reproduced.",
      },
    },
    {
      key: "work-tazzle-men",
      question: "Why did Yorkshire's specialist 'tazzle men' grow plants with hooked seed heads?",
      answer: "The heads were sold for raising the soft nap on woollen cloth.",
      source: {
        title: "Sunny Bank Mills — Teazles",
        url: "https://www.sunnybankmills.co.uk/our-story/blog/teazles-dan-sykes-museum-archive-assistant/",
        note: "Original question and factual paraphrase. Dan Sykes's museum and archive account of growers and cloth dressers; raising finished cloth, not carding loose wool. No source prose or media reproduced.",
      },
    },
    {
      key: "work-aircraft-listeners",
      question:
        "Before radar, why did air-defence crews listen through sets of giant wooden trumpets?",
      answer: "To locate unseen aircraft by their engine sounds.",
      source: {
        title: "Imperial War Museums — Locator, Sound No1 Mark 1",
        url: "https://www.iwm.org.uk/collections/item/object/30028540",
        note: "Original question and factual paraphrase. Object history note and quoted original caption; no claim that the system was consistently accurate. No source prose or media reproduced.",
      },
    },
    {
      key: "work-insurance-brigades",
      question: "What kind of businesses employed their own London fire brigades around 1700?",
      answer: "Property insurance companies.",
      source: {
        title: "London Museum — How the Great Fire of London created insurance",
        url: "https://www.londonmuseum.org.uk/blog/how-the-great-fire-of-london-created-insurance/",
        note: "Original question and factual paraphrase. Marked and insured houses section; does not repeat the myth that crews always let other companies' houses burn. No source prose or media reproduced.",
      },
    },
  ],
);
