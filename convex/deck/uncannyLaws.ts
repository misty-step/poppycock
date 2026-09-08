import { definePack } from "./types";

export const uncannyLaws = definePack(
  {
    key: "uncanny-laws",
    title: "Uncanny laws",
    blurb: "Bizarre historical statutes, royal decrees, and peculiar legal codes.",
    category: "Uncanny laws",
    sort: 140,
  },
  [
    {
      key: "law-peter-beard-token",
      question:
        "In 18th-century Russia, why were men required to carry a copper token stamped with an image of a nose, mouth, and whiskers?",
      answer:
        "To prove they had paid Peter the Great's beard tax for the legal right to keep their facial hair.",
      source: {
        title: "British Museum — Beard token, Russia, 1705",
        url: "https://www.britishmuseum.org/collection/object/C_C-3701",
        note: "Original question and factual summary. Peter the Great instituted a beard tax in 1698 to force Western European grooming; men who paid carried a token inscribed 'money taken' to avoid being forcibly shaved by police.",
      },
    },
    {
      key: "law-armour-in-parliament",
      question:
        "Still technically unrepealed on the UK statute books since 1313, what does the 'Statute forbidding Bearing of Armour' prohibit?",
      answer:
        "Members of Parliament entering the Houses of Parliament wearing suits of plate armor.",
      source: {
        title:
          "The National Archives (UK Legislation) — A Statute forbidding Bearing of Armour (1313)",
        url: "https://www.legislation.gov.uk/aep/Edw2/7/0",
        note: "Original question and factual summary. Enacted by King Edward II in 1313 to prevent armed barons from intimidating Parliament; still active statute law.",
      },
    },
    {
      key: "law-salmon-suspicious-circumstances",
      question:
        "Under Section 32 of the UK's Salmon Act 1986, what memorably phrased activity is an illegal offense?",
      answer: "Handling salmon in suspicious circumstances.",
      source: {
        title: "The National Archives (UK Legislation) — Salmon Act 1986, Section 32",
        url: "https://www.legislation.gov.uk/ukpga/1986/62/section/32",
        note: "Original question and factual summary. Section 32 was created to prosecute poachers and black-market fish distributors who receive or transport illegally caught salmon.",
      },
    },
    {
      key: "law-deodand-forfeiture",
      question:
        "Under English common law until 1846, what happened to an inanimate object that accidentally caused a human death?",
      answer:
        "It was declared 'deodand' and forfeited to the Crown to be sold for pious or charitable uses.",
      source: {
        title: "UK Parliament (Hansard) — Deodands Abolition Bill (1846)",
        url: "https://api.parliament.uk/historic-hansard/commons/1846/aug/11/deodands-abolition-no-2-bill",
        note: "Original question and factual summary. The doctrine of deodand (from Latin Deo dandum, 'to be given to God') forfeited any tree, cart wheel, or train locomotive that caused a fatality.",
      },
    },
    {
      key: "law-window-tax-brick",
      question:
        "Why did English homeowners brick up thousands of exterior windows between 1696 and 1851?",
      answer:
        "To avoid paying the hated Window Tax, a property levy based on the number of window openings in a house.",
      source: {
        title: "UK Parliament — Window Tax",
        url: "https://www.parliament.uk/about/living-heritage/transformingsociety/towncountry/towns/tyne-and-wear-case-study/about-the-group/housing/window-tax/",
        note: "Original question and factual summary. The Window Tax led to darkened, unventilated tenements as occupants bricked up openings to avoid the levy, popularizing the phrase 'daylight robbery'.",
      },
    },
    {
      key: "law-act-of-parliament-clock",
      question:
        "Why did English taverns and inns suddenly install oversized wall clocks with huge faces after 1797?",
      answer:
        "To let patrons check the time for free after William Pitt imposed a heavy tax on privately owned watches and clocks.",
      source: {
        title: "Science Museum Group Collection — Tavern clock by Vulliamy",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8558147/tavern-clock-by-vulliamy",
        note: "Original question and factual summary. The Duties on Clocks and Watches Act 1797 taxed private timepieces so heavily that citizens disposed of them, creating the market for public 'Act of Parliament' tavern clocks.",
      },
    },
    {
      key: "law-venetian-black-gondolas",
      question:
        "Why did a strict 1562 sumptuary law in Venice decree that every private gondola must be painted uniform black?",
      answer:
        "To curb excessive aristocratic vanity and stop noble families from out-spending each other on gilded, jewel-encrusted boats.",
      source: {
        title: "Encyclopedia Britannica — Gondola",
        url: "https://kids.britannica.com/scholars/article/gondola/37343",
        note: "Original question and factual summary. Venice's sumptuary magistrates mandated uniform black pitch to curb competitive luxury spending among noble families.",
      },
    },
    {
      key: "law-hywel-dda-cat-guarantee",
      question:
        "Under the 10th-century medieval Welsh Laws of Hywel Dda, what legal guarantee had to accompany the sale of every cat?",
      answer:
        "That it was a capable mouse-catcher with working claws, ears, and eyes, and would not eat its own kittens.",
      source: {
        title: "BBC News — The Story of Wales: Dr Sara Elin Roberts on Hywel Dda's laws",
        url: "https://www.bbc.com/news/uk-wales-17186291",
        note: "Original question and factual summary. Early Welsh law codified precise commercial warranties for cats, reducing the seller's price if the animal failed to hunt mice or damaged its own litter.",
      },
    },
    {
      key: "law-dog-shogun-tsunayoshi",
      question:
        "Why was 17th-century Japanese ruler Tokugawa Tsunayoshi nicknamed the 'Dog Shogun' by his subjects?",
      answer:
        "He passed decrees making harming dogs punishable by death, and ordered citizens to address stray dogs using honorific titles.",
      source: {
        title: "Encyclopedia Britannica — Tokugawa Tsunayoshi",
        url: "https://www.britannica.com/biography/Tokugawa-Tsunayoshi",
        note: "Original question and factual summary. The 5th Tokugawa Shogun enacted the Edicts on Compassion for Living Things, housing tens of thousands of stray dogs in state-funded kennels with preferential diets.",
      },
    },
    {
      key: "law-athenian-ostracism-shards",
      question:
        "In ancient Athens, what political verdict was decided by citizens scratching names onto broken pottery shards called 'ostraka'?",
      answer:
        "Exiling one prominent politician from the city for ten years without any criminal charge.",
      source: {
        title: "Encyclopedia Britannica — Ostracism",
        url: "https://www.britannica.com/topic/ostracism",
        note: "Original question and factual summary. Ostracism served as an annual democratic check against potential tyrants; the citizen with the most votes had ten days to leave Attica for a decade.",
      },
    },
    {
      key: "law-hair-powder-certificate",
      question:
        "Under Britain's Hair Powder Certificate Act 1795, what personal grooming habit required citizens to purchase an annual government certificate?",
      answer: "Powdering their hair or wigs with scented flour or starch.",
      source: {
        title:
          "The National Archives (UK Legislation) — Hair Powder Certificate Act 1795 (1795 c. 49)",
        url: "https://www.legislation.gov.uk/primary+secondary/1795?sort=title",
        note: "Original question and factual summary. 1795 c. 49 ('An Act for granting to His Majesty a Duty on Certificates issued for using Hair Powder') required anyone wearing powdered hair or wigs to purchase an annual stamp certificate.",
      },
    },
    {
      key: "law-tudor-bowling-tennis-ban",
      question:
        "Under King Henry VIII's Unlawful Games Act 1541, what sports were strictly illegal for working-class Englishmen to play except on Christmas?",
      answer:
        "Bowling, tennis, and dice games, banned so commoners would spend their free time practicing longbow archery.",
      source: {
        title: "UK Parliament (Hansard) — Unlawful Games Act 1541",
        url: "https://api.parliament.uk/historic-hansard/acts/unlawful-games-act-1541",
        note: "Original question and factual summary. 33 Hen. 8 c. 9 prohibited working men from playing games like bowling, tennis, and quoits outside of Christmas so they would maintain military archery skills.",
      },
    },
    {
      key: "law-licensing-act-steam-engine",
      question:
        "Still in effect today under Britain's Licensing Act 1872, what specific mechanical conveyance is it an explicit criminal offense to be drunk in charge of?",
      answer: "A steam engine (along with carriages, horses, and cattle).",
      source: {
        title: "The National Archives (UK Legislation) — Licensing Act 1872, Section 12",
        url: "https://www.legislation.gov.uk/ukpga/Vict/35-36/94/section/12",
        note: "Original question and factual summary. Section 12 explicitly penalizes being drunk on a highway while in charge of any carriage, horse, cattle, or steam engine.",
      },
    },
    {
      key: "law-puritan-christmas-ban",
      question:
        "In the 1640s, what festive annual holiday did the English Long Parliament strictly outlaw as unseemly revelling, provoking Canterbury's 1647 riots?",
      answer: "The celebration of Christmas.",
      source: {
        title: "UK Parliament (Hansard) — Business of the House (Christmas Prohibitions)",
        url: "https://hansard.parliament.uk/commons/2024-12-19/debates/4E534BAA-0759-42BE-BF39-71029ADC443E/BusinessOfTheHouse",
        note: "Original question and factual summary. As recorded in Hansard, the Long Parliament outlawed the celebration of Christmas in the 1640s due to puritan hostility to public revelling, provoking riots in Canterbury in 1647.",
      },
    },
    {
      key: "law-roman-lex-claudia-ships",
      question:
        "In 218 BC, what major commercial asset were Roman senators legally forbidden to own under the Lex Claudia?",
      answer:
        "Large sea-going merchant ships, as maritime commerce was considered dishonorable for the ruling class.",
      source: {
        title: "Encyclopedia Britannica — Lex Claudia",
        url: "https://www.britannica.com/topic/Lex-Claudia",
        note: "Original question and factual summary. Passed in 218 BC, the law banned senators from owning cargo ships holding more than 300 amphorae to prevent commercial conflicts of interest.",
      },
    },
    {
      key: "law-edward-iii-sumptuary-fur",
      question:
        "Under King Edward III's 1363 English sumptuary laws, what luxury material was strictly illegal for anyone below the rank of knight to wear?",
      answer:
        "Expensive furs (such as ermine and miniver), reserved exclusively for the royal family and high nobility.",
      source: {
        title: "Encyclopedia Britannica — Government regulation of dress (Sumptuary Laws)",
        url: "https://www.britannica.com/topic/dress-clothing/Government-regulation-of-dress",
        note: "Original question and factual summary. The 1363 sumptuary statute set strict clothing restrictions by rank, banning commoners and squires from wearing foreign furs, gold embroidery, and silk.",
      },
    },
    {
      key: "law-roman-lex-oppia-gold",
      question:
        "Enacted during the crisis of the Second Punic War in 215 BC, what did ancient Rome's Lex Oppia forbid women from owning?",
      answer:
        "More than half an ounce of gold, multi-colored garments, or riding in horse-drawn carriages near Rome.",
      source: {
        title: "Encyclopedia Britannica — Lex Oppia",
        url: "https://www.britannica.com/topic/Lex-Oppia",
        note: "Original question and factual summary. Passed after Cannae to divert wealth to the war, it triggered Rome's first recorded women's protest when matrons blockaded the Forum until repeal in 195 BC.",
      },
    },
    {
      key: "law-medieval-pig-trial-1266",
      question:
        "In the earliest surviving official record of an animal trial from 1266 in Fontenay-aux-Roses, France, what happened to an accused pig?",
      answer: "It was formally tried in court for murder and publicly executed by hanging.",
      source: {
        title: "BBC News — Should animals have the same rights as humans?",
        url: "https://www.bbc.com/news/world-32854504",
        note: "Original question and factual summary. BBC News notes the earliest surviving record of an animal trial dates to 1266 in Fontenay-aux-Roses, where a pig was formally tried for murder and executed by hanging.",
      },
    },
  ],
);
