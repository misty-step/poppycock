import { definePack } from "./types";

export const workingLives = definePack(
  {
    key: "working-lives",
    title: "Working lives",
    blurb: "Historical trades, specialist labour and bizarre vanished occupations.",
    category: "Working lives",
    sort: 90,
  },
  [
    {
      key: "work-knocker-upper",
      question:
        "How did a British 'knocker-upper' wake sleeping factory workers before alarm clocks were affordable?",
      answer: "By tapping on upstairs windows with long poles or shooting dried peas.",
      source: {
        title: "BBC News — Knocker uppers: Waking up the workers in industrial Britain",
        url: "https://www.bbc.com/news/uk-england-35840393",
        note: "Original question and factual summary. Before alarm clocks, knocker-uppers in industrial towns tapped upstairs windows using bamboo poles or blew dried peas through pea-shooters.",
      },
    },
    {
      key: "work-pure-finder",
      question:
        "What street substance did Victorian London's 'pure-finders' collect in buckets to sell to leather tanners?",
      answer: "Dog feces, used to purify and soften bookbinding leather.",
      source: {
        title:
          "Tufts Digital Library — Mayhew's London Labour and the London Poor: Of the 'Pure'-Finders",
        url: "https://dl.tufts.edu/teiviewer/parent/rv043431c/chapter/c6s3",
        note: "Original question and factual summary. Pure-finders gathered dog dung from streets to sell by the bucket to Bermondsey tanyards for dressing bookbinding and glove leather.",
      },
    },
    {
      key: "work-sewer-tosher",
      question:
        "Where did Victorian London scavengers known as 'toshers' spend their working days wading in search of dropped coins and scrap copper?",
      answer: "Inside the dark brick sewer tunnels beneath the city.",
      source: {
        title:
          "Tufts Digital Library — Mayhew's London Labour and the London Poor: Of the Sewer-Hunters",
        url: "https://dl.tufts.edu/teiviewer/parent/rv043431c/chapter/c6s7",
        note: "Original question and factual summary. Toshers entered tidal sewer outlets armed with hoes, lanterns, and canvas coats to rake sludge for coins, copper nails, and dropped silverware.",
      },
    },
    {
      key: "work-church-dog-tongs",
      question:
        "What was the purpose of the folding iron 'dog tongs' displayed on the wall of Wales's historic St Mary's Church?",
      answer: "To separate fighting dogs during church services.",
      source: {
        title: "National Churches Trust — Cyfylliog St Mary",
        url: "https://www.nationalchurchestrust.org/church/st-mary-cyfylliog",
        note: "Original question and factual summary. St Mary's Church in Cyffylliog displays historic folding dog tongs that were used to separate fighting dogs during worship.",
      },
    },
    {
      key: "work-leech-collector",
      question:
        "How did 19th-century British 'leech collectors' typically catch wild medicinal leeches in ponds and bogs?",
      answer: "By wading bare-legged into the water and letting leeches feed on their legs.",
      source: {
        title: "Science Museum — Blood: Leeches and Leech Collectors",
        url: "https://www.sciencemuseum.org.uk/objects-and-stories/medicine/blood",
        note: "Original question and factual summary. During the 19th-century medical bloodletting craze, collectors waded bare-legged into bogs, using their own flesh and blood to attract wild leeches.",
      },
    },
    {
      key: "work-ice-harvester",
      question:
        "What tool did 19th-century American 'ice harvesters' use to cut frozen lake ice into uniform export blocks?",
      answer: "Horse-drawn iron ice plows with serrated steel blades.",
      source: {
        title: "Smithsonian Magazine — Chilly Reception",
        url: "https://www.smithsonianmag.com/history/chilly-reception-66099329/",
        note: "Original question and factual summary. In the 1820s Nathaniel Wyeth invented horse-drawn ice plows that scored frozen New England ponds into symmetrical blocks for global shipment.",
      },
    },
    {
      key: "work-resurrectionists-graves",
      question:
        "What did 18th- and 19th-century British 'resurrectionists' secretly dig up at night to sell to medical schools?",
      answer: "Freshly buried human corpses from church graveyards.",
      source: {
        title:
          "Royal College of Surgeons — Diary of a resurrectionist: The unique record of a frightening trade",
        url: "https://www.rcseng.ac.uk/library-and-publications/library/blog/diary-of-a-resurrectionist/",
        note: "Original question and factual summary. Body snatchers illegally exhumed freshly interred corpses from churchyards to supply anatomists and surgeons with dissection subjects.",
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
      key: "work-sin-eater",
      question:
        "In 17th- to 19th-century Welsh and English border villages, what did a 'sin-eater' do at a funeral?",
      answer: "Ate bread and drank ale over the corpse to take on the deceased person's sins.",
      source: {
        title: "BBC News — Last 'sin-eater' celebrated with church service",
        url: "https://www.bbc.co.uk/news/uk-england-shropshire-11360659",
        note: "Original question and factual summary. Village sin-eaters consumed food and drink placed upon or passed across the corpse to spiritually absorb their unconfessed sins.",
      },
    },
    {
      key: "work-saltpetre-man",
      question:
        "In 16th- and 17th-century England, what did royal 'saltpetre men' have the legal authority to dig up from inside private homes and stables?",
      answer: "Urine-soaked earth and cellar floors to extract potassium nitrate for gunpowder.",
      source: {
        title: "House of Commons Journal Volume 2: 29 January 1641 — British History Online",
        url: "https://www.british-history.ac.uk/commons-jrnl/vol2/pp74-75",
        note: "Original question and factual summary. Parliamentary records document royal saltpetre men exercising crown commissions to dig up dirt floors in private houses and stables to extract nitrates.",
      },
    },
    {
      key: "work-loblolly-boy",
      question:
        "On 18th-century warships, what grim tasks were assigned to the surgeon's assistant known as the 'loblolly boy'?",
      answer:
        "Feeding patients porridge, gathering amputated limbs, and spreading sand to absorb blood.",
      source: {
        title: "USNI News — A Brief List of Old, Obscure and Obsolete U.S. Navy Jobs",
        url: "https://news.usni.org/2014/12/03/brief-list-old-obscure-obsolete-u-s-navy-jobs",
        note: "Original question and factual summary. Naval surgeon attendants fed sick sailors 'loblolly' porridge and assisted during battle surgery by holding limbs and clearing blood.",
      },
    },
    {
      key: "work-groom-of-the-stool",
      question:
        "In Tudor and Stuart England, why was the 'Groom of the Stool' one of the most powerful and coveted court offices?",
      answer: "He assisted the King with his private toilet and intimate bodily hygiene.",
      source: {
        title: "Historic Royal Palaces — Artefacts: Groom of the Stool",
        url: "https://www.hrp.org.uk/media/1333/teach100_applyinghistoryhcp_artefacts.pdf",
        note: "Original question and factual summary. Responsible for attending the monarch's close-stool and personal hygiene, granting intimate daily access that made the office holder an influential royal confidant.",
      },
    },
  ],
);
