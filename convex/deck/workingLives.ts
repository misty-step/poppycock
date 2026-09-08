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
      key: "work-greenwich-time-lady",
      question:
        "For nearly fifty years until 1940, what unusual service did London's 'Greenwich Time Lady' Ruth Belville sell to businesses?",
      answer:
        "She carried a precision pocket watch set to Greenwich Observatory time for clients to set their clocks by.",
      source: {
        title: "Royal Museums Greenwich — The Greenwich Time Lady: Ruth Belville",
        url: "https://www.rmg.co.uk/stories/time/greenwich-time-lady-ruth-belville",
        note: "Original question and factual summary. Every week Ruth Belville calibrated her John Arnold pocket chronometer at Greenwich and visited 30-40 subscribers so they could adjust their clocks.",
      },
    },
    {
      key: "work-canary-resuscitator",
      question:
        "In 20th-century British coal mines, what special feature did a miner's 'canary resuscitator cage' have?",
      answer: "An attached oxygen cylinder to revive the bird when it collapsed from toxic gas.",
      source: {
        title: "Science Museum Group Collection — Cage for reviving canary",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8412250/cage-for-reviving-canary",
        note: "Original question and factual summary. When the sentinel bird showed signs of carbon monoxide poisoning, miners sealed the circular door and opened an oxygen valve to revive it.",
      },
    },
    {
      key: "work-royal-herb-strewer",
      question:
        "In historical British royal coronations, what duty was performed by the official 'Herb Strewer'?",
      answer:
        "Walking ahead of the royal procession scattering sweet herbs and flowers to scent the path.",
      source: {
        title: "Royal Collection Trust — Royal Gold: Reflections of Power",
        url: "https://media.rct.uk/sites/default/files/transcript_royal_gold.pdf",
        note: "Original question and factual summary. Herb strewers walked before the royal procession scattering fragrant herbs and flowers to sweeten the air and symbolize health.",
      },
    },
    {
      key: "work-theatre-claqueur",
      question: "In 19th-century Parisian theatres, what was the job of a professional 'claqueur'?",
      answer: "To sit in the audience and artificially orchestrate applause, laughter, or weeping.",
      source: {
        title: "Encyclopedia Britannica — Claque",
        url: "https://www.britannica.com/art/claque",
        note: "Original question and factual summary. Organized claques included specialized hired laughers (rieurs), weepers (pleureuses), and cheerers paid by actors and managements to sway audience reactions.",
      },
    },
  ],
);
