import { definePack } from "./types";

export const scholarlyFollies = definePack(
  {
    key: "scholarly-follies",
    title: "Scholarly follies",
    blurb:
      "Phantom discoveries, mischievous scholarship, and the unexpected hazards of looking authoritative.",
    category: "Scholarly follies",
    sort: 390,
  },
  [
    {
      key: "scholarly-esquivalience",
      question:
        "Why did editors of the New Oxford American Dictionary deliberately include a word meaning 'avoiding one's duties'?",
      answer:
        "It was bait for plagiarists: anyone copying the invented word 'esquivalience' would give themselves away.",
      source: {
        title: "The New Yorker — Not a Word",
        url: "https://www.newyorker.com/magazine/2005/08/29/not-a-word",
        note: "The report quotes the New Oxford American Dictionary’s invented definition and interviews the editors who planted it as a copyright trap.",
      },
    },
    {
      key: "scholarly-mountweazel",
      question: "What was Lillian Virginia Mountweazel supposedly famous for photographing?",
      answer: "Rural American mailboxes; the encyclopedia invented her as a copyright trap.",
      source: {
        title: "The New Yorker — Not a Word",
        url: "https://www.newyorker.com/magazine/2005/08/29/not-a-word",
        note: "The fictitious New Columbia Encyclopedia biography described photographs of rural mailboxes collected in Flags Up!; editor Richard Steins explains the trap.",
      },
    },
    {
      key: "scholarly-dord",
      question:
        "What editorial misunderstanding created an entirely new word for density in Webster's dictionary?",
      answer: "The notation 'D or d' was read as a single word: 'dord.'",
      source: {
        title: "Oxford University Press — Assess",
        url: "https://blog.oup.com/2008/05/assess/",
        note: "Charles Hodgson explains that a contributor’s D or d notation for density was interpreted as a word and entered in Webster’s dictionary.",
      },
    },
    {
      key: "scholarly-esrum-hellerup",
      question:
        "Why did the New Grove music dictionary have to remove its biography of Dag Henrik Esrum-Hellerup?",
      answer: "The Danish composer never existed; a contributor had invented him.",
      source: {
        title: "Oxford University Press — A Grove Music Mountweazel",
        url: "https://blog.oup.com/2013/01/grove-music-spoof-article-contest/",
        note: "Grove editor Anna-Lise Santella identifies Esrum-Hellerup as a spoof biography contributed by Robert Layton to the first New Grove.",
      },
    },
    {
      key: "scholarly-circular-definitions",
      question:
        "What trap awaited an early OED reader trying to discover the difference between 'unpoetic' and 'unpoetical'?",
      answer: "Each entry referred the reader to the other; neither supplied a definition.",
      source: {
        title: "Oxford University Press — Absurd entries in the OED: An introduction",
        url: "https://blog.oup.com/2008/03/ammon_shea/",
        note: "Ammon Shea describes unpoetic as cf. next and unpoetical as cf. prev, with neither entry supplying a definition.",
      },
    },
    {
      key: "scholarly-agloe",
      question: "What spoiled a mapmaker’s attempt to use Agloe as evidence of copying?",
      answer: "Someone had opened a real general store using the invented town’s name.",
      source: {
        title: "The Guardian — The imaginary American town that became a tourist attraction",
        url: "https://www.theguardian.com/travel/2020/may/03/imaginary-american-town-tourist-attraction-agloe-new-york-state",
        note: "General Drafting planted Agloe, but Rand McNally pointed to the Agloe general store, whose owner had adopted the name from a map.",
      },
    },
    {
      key: "scholarly-goblu-beatosu",
      question:
        "What two mischievous additions appeared in the Ohio section of Michigan’s official 1978 map?",
      answer:
        "Fake towns called Goblu and Beatosu, jokes about the Michigan–Ohio State football rivalry.",
      source: {
        title: "Encyclopaedia Britannica — One Good Fact about Fake Cities",
        url: "https://www.britannica.com/one-good-fact/why-did-a-michigan-cartographer-once-make-up-two-cities",
        note: "Britannica identifies both northern Ohio towns as fictional additions to the Michigan Department of Transportation’s official state map.",
      },
    },
    {
      key: "scholarly-argleton",
      question:
        "What lay at the real-world location of Argleton, for which Google supplied weather, jobs and property listings?",
      answer: "A damp field, not a village.",
      source: {
        title: "The Guardian — The imaginary American town that became a tourist attraction",
        url: "https://www.theguardian.com/travel/2020/may/03/imaginary-american-town-tourist-attraction-agloe-new-york-state",
        note: "The article reports that Argleton appeared with weather, jobs and property listings, while its actual site was a field; it disappeared from Google two years later.",
      },
    },
    {
      key: "scholarly-geim-floating-frog",
      question:
        "What did physicists Andre Geim and Michael Berry persuade a magnet to do in the work that won their 2000 Ig Nobel Prize?",
      answer: "Levitate a frog, leaving the animal suspended in midair without strings.",
      source: {
        title: "Improbable Research — The 2000 Ig Nobel Prize Winners",
        url: "https://improbable.com/ig/winners/#ig2000",
        note: "The physics citation honours Geim and Berry for using magnets to levitate a frog and links their 1997 paper, Of Flying Frogs and Levitrons.",
      },
    },
    {
      key: "scholarly-california-island",
      question:
        "What geographical surprise would a traveller have expected from Joan Vinckeboons's circa-1650 map of California?",
      answer: "California was an island, separated from the mainland by a stretch of sea.",
      source: {
        title: "Library of Congress — Map of California Shown as an Island",
        url: "https://www.loc.gov/item/99443375/",
        note: "The Library’s description identifies California as an island on Vinckeboons’s map and explains the persistence of this misconception.",
      },
    },
    {
      key: "scholarly-salmon-brain-scan",
      question:
        "What unlikely subject appeared to show meaningful brain activity in Craig Bennett's deliberately flawed analysis of a brain scan?",
      answer:
        "A dead salmon; the apparent activity vanished when the statistics were properly corrected.",
      source: {
        title:
          "Journal of Serendipitous and Unexpected Results — Neural Correlates of Interspecies Perspective Taking in the Post-Mortem Atlantic Salmon",
        url: "https://improbable.com/wp-content/uploads/2025/10/NeuralCorrelates.pdf",
        note: "Bennett and colleagues scanned a dead salmon viewing social photographs. Uncorrected statistics found active clusters; correction for multiple comparisons eliminated them.",
      },
    },
    {
      key: "scholarly-scigen",
      question:
        "What was strange about the authorship of the conference paper 'Rooter', accepted by WMSCI in 2005?",
      answer:
        "Software had randomly generated the entire nonsense paper, including its graphs, figures and citations.",
      source: {
        title: "MIT Computer Science and Artificial Intelligence Laboratory — SCIgen",
        url: "https://pdos.csail.mit.edu/archive/scigen/",
        note: "The creators describe random papers assembled from a context-free grammar, designed for amusement rather than coherence; one was accepted as a non-reviewed conference paper.",
      },
    },
    {
      key: "scholarly-szust",
      question:
        "What fatal flaw in Anna O. Szust's qualifications escaped dozens of journals that offered her an editor's job?",
      answer:
        "She did not exist; researchers had invented her, her degrees, her book chapters and even her publishers.",
      source: {
        title: "Nature — Predatory journals recruit fake editor",
        url: "https://www.nature.com/news/polopoly_fs/1.21662!/menu/main/topColumns/topLeftColumn/pdf/543481a.pdf",
        note: "The researchers created a fictitious applicant with fake degrees, nonexistent books and invented publishing houses; 48 of 360 journals accepted her as an editor.",
      },
    },
    {
      key: "scholarly-willard",
      question:
        "How did Jack Hetherington avoid retyping the plural “we” in a physics paper he had written alone?",
      answer: "He added his cat as co-author under the name F. D. C. Willard.",
      source: {
        title: "Science — The cat who co-authored an influential physics paper",
        url: "https://www.science.org/content/article/cat-co-authored-influential-physics-paper",
        note: "Science recounts that Hetherington added his Siamese cat Chester to the 1975 Physical Review Letters byline rather than retype the manuscript using singular pronouns.",
      },
    },
    {
      key: "scholarly-cows-zebra-stripes",
      question:
        "What unusual makeover did Tomoki Kojima's research team give cattle in an experiment about biting flies?",
      answer:
        "They painted the cows with zebra-like stripes to test whether the pattern deterred flies.",
      source: {
        title: "Improbable Research — The 2025 Ig Nobel Prize Winners",
        url: "https://improbable.com/ig/winners/#ig2025",
        note: "The biology prize citation describes Kojima and colleagues' experiments with zebra-striped painted cows and cites their 2019 PLOS ONE paper.",
      },
    },
    {
      key: "scholarly-ann-arbor",
      question:
        "What sort of information was mistaken for a woman's name and academic degree in scientific citation indexes?",
      answer:
        "An address was misread: Ann Arbor was the Michigan city, not a scientist, and MI meant Michigan.",
      source: {
        title: "Nature — Hall and Keynes join Arbor in the citation indexes",
        url: "https://www.nature.com/articles/452282b",
        note: "Daniel Postellon explains that the non-existent author was the city of Ann Arbor, Michigan, and that the state abbreviation was sometimes treated as her degree.",
      },
    },
    {
      key: "scholarly-upper-paper",
      question: "What was unusual about the body of Dennis Upper’s one-page 1974 psychology paper?",
      answer:
        "It was entirely blank: the paper reported his unsuccessful self-treatment of writer’s block.",
      source: {
        title:
          "Journal of Applied Behavior Analysis — The unsuccessful self-treatment of a case of “writer’s block”",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1311997/",
        note: "The original page has a title, author, empty body, empty references section and a footnote, followed by humorous reviewer comments.",
      },
    },
    {
      key: "scholarly-unsubscribe-paper",
      question:
        "What message did David Mazières and Eddie Kohler repeat throughout a ten-page mock research paper, even in its diagrams?",
      answer: "An expletive-laden demand to be removed from a mailing list.",
      source: {
        title: "Stanford University — David Mazières and Eddie Kohler’s mock paper",
        url: "https://www.scs.stanford.edu/~dm/home/papers/remove.pdf",
        note: "The original PDF repeats the same seven-word unsubscribe demand in the title, abstract, sections, figure labels and summary.",
      },
    },
    {
      key: "scholarly-stumpke-fauna",
      question:
        "How did some of the mammals in Harald Stümpke’s 1957 zoological monograph get around?",
      answer:
        "They bounced on their noses; the entire animal group was an elaborate scientific parody.",
      source: {
        title: "Museum of New Zealand Te Papa Tongarewa — Discovered and lost again",
        url: "https://blog.tepapa.govt.nz/2026/04/01/discovered-and-lost-again-the-world-of-the-pacific-archipelago-hy-yi-yi-and-its-unique-inhabitants/",
        note: "The curator identifies Stümpke as Gerolf Steiner’s pseudonym and describes the fictional Hopsorrhinus aureus bouncing on its nasal appendage.",
      },
    },
    {
      key: "scholarly-beringer-stones",
      question:
        "How did two resentful colleagues supply Johann Beringer with the specimens for his 1726 book?",
      answer: "They carved fake fossils and planted them for him to find.",
      source: {
        title: "Smithsonian Libraries — A Heavy Hoax: The “Lying Stones” of Johann Beringer",
        url: "https://blog.library.si.edu/blog/2019/07/25/a-heavy-hoax-the-lying-stones-of-johann-beringer/",
        note: "The library identifies J. Ignatz Roderick and Georg von Eckhart as the colleagues who carved and planted the stones; Beringer published them in his Lithographia.",
      },
    },
    {
      key: "scholarly-chasles-letters",
      question:
        "What conspicuous oddity did Michel Chasles overlook in letters supposedly written by Cleopatra and Alexander the Great?",
      answer: "They were written in French.",
      source: {
        title: "University of St Andrews, MacTutor — The mathematician and the forger",
        url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Forgery_1/",
        note: "MacTutor describes Vrain-Lucas’s forged letters from Cleopatra to Caesar and Alexander to Aristotle and quotes the finding that the texts were essentially modern French.",
      },
    },
    {
      key: "scholarly-newton-report",
      question:
        "Who secretly wrote the Royal Society committee's supposedly independent report settling the calculus priority dispute?",
      answer: "Isaac Newton, one of the disputants; the report found in his own favour.",
      source: {
        title: "Nature — Newton’s correspondence",
        url: "https://www.nature.com/articles/275777a0.pdf",
        note: "I. Bernard Cohen describes Newton drafting the committee report and later writing an anonymous review of the resulting publication.",
      },
    },
    {
      key: "scholarly-cope-restoration",
      question:
        "What was anatomically wrong with Edward Drinker Cope’s first reconstruction of Elasmosaurus?",
      answer: "He put its head at the end of its tail.",
      source: {
        title: "Michael J. Everhart, Oceans of Kansas — The tale of a tail",
        url: "https://oceansofkansas.com/tale-tail.html",
        note: "Everhart documents the reversed reconstruction and Joseph Leidy’s 1870 correction, using the original publications and direct examination of the type specimen.",
      },
    },
    {
      key: "scholarly-burdell-enrolment",
      question:
        "What did William Edgar Smith do with an extra Georgia Tech enrolment form he received in 1927?",
      answer:
        "Enrolled an imaginary student, George P. Burdell, then submitted extra coursework to keep him enrolled.",
      source: {
        title: "Georgia Tech — Traditions: George P. Burdell",
        url: "https://traditions.gatech.edu/gpb.html",
        note: "Georgia Tech describes Smith receiving two forms, enrolling Burdell, and completing duplicate assignments with changed handwriting and answers, helped by friends.",
      },
    },
    {
      key: "scholarly-bean-nail-record",
      question:
        "What did physician William B. Bean repeatedly measure and write about for thirty-five years?",
      answer: "The growth of one of his own fingernails.",
      source: {
        title: "Improbable Research — The 2025 Ig Nobel Prize Winners",
        url: "https://improbable.com/ig/winners/#ig2025",
        note: "The literature prize honours Bean's 35-year record of one fingernail's growth and lists his published observations, including Nail Growth: Thirty-Five Years of Observation.",
      },
    },
    {
      key: "scholarly-kong-range",
      question:
        "What enormous feature did generations of nineteenth-century maps mistakenly put across West Africa?",
      answer: "An entire imaginary mountain range: the Mountains of Kong.",
      source: {
        title: "AfricaBib, Leiden University — “From the Best Authorities”: The Mountains of Kong",
        url: "https://www.africabib.org/rec.php?RID=089546806",
        note: "The abstract of Bassett and Porter’s 1991 Journal of African History article states that the range existed only in explorers’, mapmakers’ and merchants’ imaginations.",
      },
    },
    {
      key: "scholarly-sokal-disclosure",
      question:
        "After getting an article into the journal Social Text in 1996, what did physicist Alan Sokal announce about his own work?",
      answer:
        "That he had written it as a parody stuffed with gibberish, to test whether the journal would publish it.",
      source: {
        title: "The New York Times — Postmodern Gravity Deconstructed, Slyly",
        url: "https://www.nytimes.com/1996/05/18/nyregion/postmodern-gravity-deconstructed-slyly.html",
        note: "Janny Scott's 18 May 1996 front-page report says the physicist Alan Sokal, fed up with the academic left, hoodwinked the journal into publishing a parody thick with gibberish as though it were serious scholarship.",
      },
    },
    {
      key: "scholarly-bourbaki-announcement",
      question:
        "What occasion did an elaborate 1940 announcement preserved in the Bourbaki archives celebrate?",
      answer: "The wedding of two invented people: Betti Bourbaki and Hector Pétard.",
      source: {
        title: "Archives Bourbaki — Faire-part de mariage et dédicace",
        url: "https://archives-bourbaki.ahp-numerique.fr/items/show/76",
        note: "The archive dates the item to 1940 and describes a false wedding announcement of Betti Bourbaki and Hector Pétard, presented by André Weil to Hélène Nocton.",
      },
    },
    {
      key: "scholarly-antkare-citations",
      question:
        "How did the fictitious Ike Antkare acquire an impressive scientific citation record in 2010?",
      answer: "A batch of computer-generated papers all cited one another under his name.",
      source: {
        title:
          "Laboratoire d’Informatique de Grenoble — Ike Antkare, one of the great stars in the scientific firmament",
        url: "https://lig-membres.imag.fr/labbe/Publi/IkeAntkareSub.pdf",
        note: "The original report describes generating 100 papers whose bibliographies each cited the entire set, then having them indexed by Google Scholar.",
      },
    },
    {
      key: "scholarly-wood-prism",
      question:
        "How did Robert Wood secretly sabotage René Blondlot's N-ray demonstration in 1904?",
      answer:
        "He removed the instrument's aluminium prism, yet Blondlot continued to report the same readings.",
      source: {
        title: "WIRED — The Imaginary Radiation That Shocked Science",
        url: "https://www.wired.com/2014/09/fantastically-wrong-n-rays/",
        note: "The account describes Wood removing the aluminium prism from Blondlot’s N-ray spectroscope while the experimenter continued reporting the same spectral measurements.",
      },
    },
  ],
);
