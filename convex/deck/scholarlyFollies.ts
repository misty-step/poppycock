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
        "What activity did the deliberately invented dictionary word “esquivalience” describe?",
      answer: "Willfully avoiding one’s official responsibilities.",
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
      question: "What notation was misread to create the dictionary entry “dord”?",
      answer: "“D or d,” meaning either letter could abbreviate density.",
      source: {
        title: "Oxford University Press — Assess",
        url: "https://blog.oup.com/2008/05/assess/",
        note: "Charles Hodgson explains that a contributor’s D or d notation for density was interpreted as a word and entered in Webster’s dictionary.",
      },
    },
    {
      key: "scholarly-esrum-hellerup",
      question:
        "What was the hidden problem with Dag Henrik Esrum-Hellerup’s entry in the 1980 New Grove?",
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
        "What happened if an early OED reader followed the cross-reference under “unpoetic”?",
      answer: "It led to “unpoetical,” whose cross-reference sent the reader straight back.",
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
        "What would a visitor actually have found at Argleton, the Lancashire settlement shown on Google in 2008?",
      answer: "A damp field, not a village.",
      source: {
        title: "The Guardian — The imaginary American town that became a tourist attraction",
        url: "https://www.theguardian.com/travel/2020/may/03/imaginary-american-town-tourist-attraction-agloe-new-york-state",
        note: "The article reports that Argleton appeared with weather, jobs and property listings, while its actual site was a field; it disappeared from Google two years later.",
      },
    },
    {
      key: "scholarly-frisland",
      question:
        "What was the Frisland that appeared on many North Atlantic charts for roughly a century?",
      answer: "A mythical island near Iceland that mapmakers repeatedly copied.",
      source: {
        title: "Library of Congress — Europe, Very Precisely Represented",
        url: "https://www.loc.gov/item/2021668709/",
        note: "The catalogue description identifies Frisland as mythical and says it appeared on most North Atlantic charts from the 1560s until the 1660s, including this Hondius map.",
      },
    },
    {
      key: "scholarly-california-island",
      question:
        "What fundamental mistake did Joan Vinckeboons’s circa-1650 map make about California?",
      answer: "It drew California as an island, separated from the mainland by a strait.",
      source: {
        title: "Library of Congress — Map of California Shown as an Island",
        url: "https://www.loc.gov/item/99443375/",
        note: "The Library’s description identifies California as an island on Vinckeboons’s map and explains the persistence of this misconception.",
      },
    },
    {
      key: "scholarly-sandy-island",
      question:
        "What did scientists aboard the Southern Surveyor find when they reached Sandy Island’s mapped position in 2012?",
      answer: "Empty ocean about 1,400 metres deep.",
      source: {
        title:
          "University of Western Australia — Mythbusting scientists “undiscover” fantasy island",
        url: "https://www.news.uwa.edu.au/archive/201211235241/research/mythbusting-scientists-undiscover-fantasy-island/",
        note: "The expedition investigated the island shown on scientific maps and Google Earth and confirmed the ship’s charts: 1,400-metre-deep ocean, with no island.",
      },
    },
    {
      key: "scholarly-scigen",
      question:
        "What did Jeremy Stribling, Max Krohn and Dan Aguayo build at MIT to embarrass dubious conferences?",
      answer: "Random, nonsensical computer-science papers that looked like genuine research.",
      source: {
        title: "MIT Computer Science and Artificial Intelligence Laboratory — SCIgen",
        url: "https://pdos.csail.mit.edu/archive/scigen/",
        note: "The creators describe random papers assembled from a context-free grammar, designed for amusement rather than coherence; one was accepted as a non-reviewed conference paper.",
      },
    },
    {
      key: "scholarly-szust",
      question:
        "What did the surname of Anna O. Szust, an applicant accepted by dozens of journals as an editor, mean in Polish?",
      answer: "“Fraud”: she was a fictitious applicant created to test the journals.",
      source: {
        title: "Nature — Predatory journals recruit fake editor",
        url: "https://www.nature.com/news/polopoly_fs/1.21662!/menu/main/topColumns/topLeftColumn/pdf/543481a.pdf",
        note: "The researchers say oszust means fraud in Polish. Their invented researcher applied to 360 journals and was accepted by 48, despite having no genuine publication record.",
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
      key: "scholarly-mirkwood",
      question:
        "Who was Galadriel Mirkwood, Polly Matzinger’s co-author on a 1978 immunology paper?",
      answer: "Matzinger’s dog.",
      source: {
        title: "EMBO Reports — Crediting animals in scientific literature",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5210078/",
        note: "The peer-reviewed article identifies Galadriel Mirkwood as Matzinger’s dog and cites their 1978 Journal of Experimental Medicine paper.",
      },
    },
    {
      key: "scholarly-ann-arbor",
      question:
        "What was unusual about “Ann Arbor,” whose name appeared as an author in scientific indexes?",
      answer:
        "The Michigan city in an author’s address; “MI” was even mistaken for an academic degree.",
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
        "What was the real origin of the extraordinary specimens Johann Beringer described in 1726?",
      answer: "Fake fossils carved and planted by two resentful university colleagues.",
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
        "Who secretly drafted the Royal Society report that found in Newton’s favour during the calculus priority dispute?",
      answer: "Isaac Newton himself.",
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
      key: "scholarly-vulcan-search",
      question: "What was the Vulcan that appeared in some nineteenth-century science textbooks?",
      answer: "A supposed planet between Mercury and the Sun; it never existed.",
      source: {
        title: "Smithsonian National Air and Space Museum — Vulcan? But that’s not logical…",
        url: "https://airandspace.si.edu/stories/editorial/vulcan-s-not-logical",
        note: "The museum explains the search for an intra-Mercurial planet, its inclusion in 1860s–1870s textbooks, and Einstein’s explanation of Mercury’s orbit without it.",
      },
    },
    {
      key: "scholarly-kong-range",
      question:
        "Why could travellers never cross the enormous Kong range depicted on nineteenth-century maps of West Africa?",
      answer:
        "The mountain range did not exist; generations of mapmakers had repeated an imaginary feature.",
      source: {
        title: "AfricaBib, Leiden University — “From the Best Authorities”: The Mountains of Kong",
        url: "https://www.africabib.org/rec.php?RID=089546806",
        note: "The abstract of Bassett and Porter’s 1991 Journal of African History article states that the range existed only in explorers’, mapmakers’ and merchants’ imaginations.",
      },
    },
    {
      key: "scholarly-sokal-disclosure",
      question:
        "In 1996 a New York University physicist got an article into the cultural-studies journal Social Text, then made an announcement about it the same month. What did he announce?",
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
      question: "What did Robert Wood secretly remove during René Blondlot’s 1904 demonstration?",
      answer:
        "The instrument’s aluminium prism—yet Blondlot continued to report the same readings.",
      source: {
        title: "WIRED — The Imaginary Radiation That Shocked Science",
        url: "https://www.wired.com/2014/09/fantastically-wrong-n-rays/",
        note: "The account describes Wood removing the aluminium prism from Blondlot’s N-ray spectroscope while the experimenter continued reporting the same spectral measurements.",
      },
    },
  ],
);
