import { definePack } from "./types";

export const hoaxesAndFrauds = definePack(
  {
    key: "hoaxes-and-frauds",
    title: "Hoaxes and frauds",
    blurb:
      "Invented discoveries, counterfeit masterpieces and deceptions that briefly became accepted history.",
    category: "Hoaxes and frauds",
    sort: 190,
  },
  [
    {
      key: "hoax-cardiff-giant",
      question: "What attraction appeared under a tent on William Newell's New York farm in 1869?",
      answer:
        "A ten-foot “petrified man” that was actually a stone statue deliberately buried there.",
      source: {
        title: "Smithsonian Magazine — The Cardiff Giant Was Just a Big Hoax",
        url: "https://www.smithsonianmag.com/smart-news/cardiff-giant-was-just-big-hoax-180965274/",
        note: "The Cardiff Giant was a carved figure planted on Newell’s farm the previous year, then uncovered by workers digging where they were directed.",
      },
    },
    {
      key: "hoax-piltdown-parts",
      question: "What unlikely combination lay behind the celebrated 1912 discovery at Piltdown?",
      answer: "Human skull fragments paired with an orangutan’s jaw and altered teeth.",
      source: {
        title: "Natural History Museum — Piltdown Man Hoax Findings",
        url: "https://www.nhm.ac.uk/discover/news/2016/august/piltdown-man-charles-dawson-likely-fraudster.html",
        note: "Modern analyses link the ape material to one orangutan and identify human skull material, artificially modified teeth, gravel filling and putty.",
      },
    },
    {
      key: "hoax-cottingley-companions",
      question:
        "What supposedly appeared beside two Yorkshire girls in photographs that Arthur Conan Doyle defended?",
      answer: "Tiny dancing fairies; the celebrated photographs were staged.",
      source: {
        title: "Smithsonian Magazine — What the History of Spirit Photography Portends",
        url: "https://www.smithsonianmag.com/innovation/history-spirit-photography-future-deepfake-videos-180979010/",
        note: "The article describes the Cottingley cousins’ five faked fairy photographs and Doyle’s public promotion of them; the first photograph was taken in 1917.",
      },
    },
    {
      key: "hoax-feejee-construction",
      question: "What was the specimen Barnum called his “Feejee” actually assembled from?",
      answer: "A monkey’s head and a fish’s tail sewn together.",
      source: {
        title: "Smithsonian Magazine — The Return of Mermaidcore",
        url: "https://www.smithsonianmag.com/arts-culture/the-return-of-mermaidcore-180982255/",
        note: "The article identifies Barnum’s Feejee mermaid as a fabricated specimen made from a monkey head sewn to a fish tail.",
      },
    },
    {
      key: "hoax-moon-civilization",
      question:
        "What intelligent creatures did the New York Sun claim an astronomer had discovered in 1835?",
      answer: "Human-bat beings who lived on the Moon and built temples.",
      source: {
        title: "Library of Congress — Peoples and Creatures of the Moon",
        url: "https://www.loc.gov/static/collections/finding-our-place-in-the-cosmos-with-carl-sagan/articles-and-essays/life-on-other-worlds/peoples-and-creatures-of-the-moon.html",
        note: "The Library identifies Richard Locke’s six fabricated Sun reports and their temple-building human-bat creatures, falsely attributed to John Herschel’s observations.",
      },
    },
    {
      key: "hoax-toft-births",
      question: "What did Mary Toft persuade respected doctors she could do in 1726?",
      answer: "Give birth to rabbits; the supposed births were staged with animal parts.",
      source: {
        title: "Smithsonian Magazine — The Woman Who Gave Birth to Rabbits",
        url: "https://www.smithsonianmag.com/history/woman-who-gave-birth-rabbits-history-hell-and-other-new-nonfiction-books-180974569/",
        note: "The review of Karen Harvey’s research describes the fabricated rabbit births and notes evidence that Toft was exploited by others involved.",
      },
    },
    {
      key: "hoax-mumler-sitters",
      question:
        "What unusual additional subjects appeared in William Mumler's nineteenth-century portraits?",
      answer: "Translucent “ghosts” of deceased relatives beside the living sitters.",
      source: {
        title: "Smithsonian Magazine — What the History of Spirit Photography Portends",
        url: "https://www.smithsonianmag.com/innovation/history-spirit-photography-future-deepfake-videos-180979010/",
        note: "Mumler’s portraits purported to show the dead, including Abraham Lincoln beside Mary Todd Lincoln. He was tried for fraud in 1869 but acquitted.",
      },
    },
    {
      key: "hoax-ireland-play",
      question:
        "What theatrical discovery drew crowds to the Ireland family's London home in 1795?",
      answer: "An allegedly lost Shakespeare play, actually composed by a young law clerk.",
      source: {
        title: "Smithsonian Magazine — To Be...Or Not: The Greatest Shakespeare Forgery",
        url: "https://www.smithsonianmag.com/history/to-beor-not-the-greatest-shakespeare-forgery-136201/",
        note: "William-Henry Ireland fabricated Shakespeare documents and composed Vortigern and Rowena, which was performed at Drury Lane in 1796.",
      },
    },
    {
      key: "hoax-rowley-poems",
      question:
        "Who was the Thomas Rowley credited with poems that fascinated eighteenth-century readers?",
      answer:
        "The supposed medieval author of poems actually written by teenager Thomas Chatterton.",
      source: {
        title: "Encyclopaedia Britannica — Literary Forgery",
        url: "https://www.britannica.com/art/forgery-art/Literary-forgery",
        note: "Britannica identifies the Rowley poems as Chatterton’s work, which he attempted to pass off as the writings of a medieval cleric.",
      },
    },
    {
      key: "hoax-ossian-claim",
      question: "What did James Macpherson claim his celebrated poems of the 1760s represented?",
      answer: "Translations of ancient Gaelic epics attributed to the bard Ossian.",
      source: {
        title: "Encyclopaedia Britannica — Literary Forgery",
        url: "https://www.britannica.com/art/forgery-art/Literary-forgery",
        note: "Britannica treats Macpherson’s Ossianic poems as a disputed case: probably drawing on oral tradition, but extensively edited and interpolated. The card asks about his claim.",
      },
    },
    {
      key: "hoax-ern-malley",
      question:
        "Who was the recently deceased author whose poems caused an Australian sensation in 1944?",
      answer: "Ern Malley, a poet invented by two soldiers who wrote the poems as a joke.",
      source: {
        title: "Encyclopaedia Britannica — Literary Forgery",
        url: "https://www.britannica.com/art/forgery-art/Literary-forgery",
        note: "The Ern Malley poems were submitted as the work of a dead poet, but two young soldiers composed them to ridicule contemporary poetry.",
      },
    },
    {
      key: "hoax-psalmanazar-home",
      question:
        "What supposedly qualified George Psalmanazar to describe Formosa to eighteenth-century British readers?",
      answer:
        "He claimed to be a native of the island, though he was a Frenchman who had never been there.",
      source: {
        title: "Encyclopaedia Britannica — Literary Forgery",
        url: "https://www.britannica.com/art/forgery-art/Literary-forgery",
        note: "Britannica identifies Psalmanazar as a French impostor who successfully posed as a native of Formosa, now Taiwan, and published an invented account.",
      },
    },
    {
      key: "hoax-salted-diamonds",
      question:
        "Why did investigators in 1872 find valuable gems at the site promoted by Philip Arnold and John Slack?",
      answer: "The men had bought rough stones in London and scattered them there themselves.",
      source: {
        title: "Smithsonian Magazine — The Great Diamond Hoax of 1872",
        url: "https://www.smithsonianmag.com/history/the-great-diamond-hoax-of-1872-2630188/",
        note: "Arnold and Slack bought thousands of rough diamonds and rubies from Leopold Keller and planted stones at their supposed American discovery site.",
      },
    },
    {
      key: "hoax-crystal-skull-tools",
      question: "What betrayed the supposed antiquity of the Smithsonian's large crystal skull?",
      answer: "Microscopic marks left by modern tools and abrasives.",
      source: {
        title: "Smithsonian Magazine — Why the Smithsonian Has a Fake Crystal Skull",
        url: "https://www.smithsonianmag.com/history/the-smithsonians-crystal-skull-51638609/",
        note: "Jane MacLaren Walsh took the skull to the British Museum, where scanning electron microscopy identified modern tool and abrasive marks.",
      },
    },
    {
      key: "hoax-drake-marker",
      question: "What did a brass plate celebrated in California in 1937 supposedly commemorate?",
      answer:
        "Francis Drake claiming the region for Elizabeth I in 1579; the plate was a modern forgery.",
      source: {
        title: "Smithsonian Magazine — Did Francis Drake Really Land in California?",
        url: "https://www.smithsonianmag.com/history/did-francis-drake-really-land-california-180973219/",
        note: "The inscription was dated June 17, 1579 and claimed Nova Albion for Elizabeth. Laboratory examination established modern materials and techniques in 1977.",
      },
    },
    {
      key: "hoax-hitler-diaries",
      question:
        "What mundane physical evidence helped expose the diaries bought by Stern magazine in 1983?",
      answer: "The paper and inks dated from after World War II.",
      source: {
        title: "Smithsonian Magazine — Five Fake Memoirs That Fooled the Literary World",
        url: "https://www.smithsonianmag.com/arts-culture/five-fake-memoirs-that-fooled-the-literary-world-77092955/",
        note: "The purported Hitler diaries covered 1932–1945, but comprehensive testing found postwar inks and paper as well as historical errors.",
      },
    },
    {
      key: "hoax-mechanical-turk",
      question:
        "What supplied the intelligence behind Wolfgang von Kempelen's famous eighteenth-century performer?",
      answer: "A chess player hidden in its cabinet, moving the mechanical figure with levers.",
      source: {
        title: "Encyclopaedia Britannica — The Mechanical Turk: AI Marvel or Parlor Trick?",
        url: "https://www.britannica.com/story/the-mechanical-turk-ai-marvel-or-parlor-trick",
        note: "The Turk was an illusion: a concealed player followed play on a miniature board and controlled the figure, rather than an autonomous chess machine.",
      },
    },
    {
      key: "hoax-meegeren-defense",
      question:
        "How did Han van Meegeren demonstrate his explanation for a painting sold to the Nazis?",
      answer: "He painted another “Vermeer” under official supervision to prove he had forged it.",
      source: {
        title: "Encyclopaedia Britannica — Forgery in the Visual Arts",
        url: "https://www.britannica.com/art/forgery-art/Forgery-in-the-visual-arts",
        note: "Accused of collaboration for selling a supposed Vermeer, van Meegeren confessed to forgery and demonstrated his ability by painting under the authorities’ observation.",
      },
    },
    {
      key: "hoax-etruscan-model",
      question:
        "What served as the model for an eight-foot terracotta warrior once accepted as an Etruscan masterpiece?",
      answer: "A Greek bronze statuette only five inches tall.",
      source: {
        title: "Encyclopaedia Britannica — Forgery in the Visual Arts",
        url: "https://www.britannica.com/art/forgery-art/Forgery-in-the-visual-arts",
        note: "Britannica describes a monumental forgery enlarged from a Greek bronze of about 470 BCE. The Metropolitan Museum’s terracotta was exposed as modern.",
      },
    },
    {
      key: "hoax-hughes-gamble",
      question:
        "What assumption made Clifford Irving think his unauthorized autobiography scheme could succeed?",
      answer: "That the reclusive Howard Hughes would not emerge to deny collaborating with him.",
      source: {
        title: "Smithsonian Magazine — Five Fake Memoirs That Fooled the Literary World",
        url: "https://www.smithsonianmag.com/arts-culture/five-fake-memoirs-that-fooled-the-literary-world-77092955/",
        note: "Irving forged letters and invented interviews. Hughes publicly denied the project, and the fraud unraveled in 1972.",
      },
    },
    {
      key: "hoax-misha-wolves",
      question:
        "What extraordinary companions did Misha Defonseca claim had helped her survive childhood?",
      answer: "Wolves, during an invented wartime trek across Europe.",
      source: {
        title: "Smithsonian Magazine — Five Fake Memoirs That Fooled the Literary World",
        url: "https://www.smithsonianmag.com/arts-culture/five-fake-memoirs-that-fooled-the-literary-world-77092955/",
        note: "Defonseca’s 1997 memoir claimed she lived with wolves while crossing Europe. Records showed she was attending school in Brussels during the supposed journey.",
      },
    },
    {
      key: "hoax-frey-jail",
      question:
        "What did investigators discover about the 87-day jail stay described in James Frey's memoir?",
      answer: "His actual imprisonment had lasted only a few hours.",
      source: {
        title: "Smithsonian Magazine — Five Fake Memoirs That Fooled the Literary World",
        url: "https://www.smithsonianmag.com/arts-culture/five-fake-memoirs-that-fooled-the-literary-world-77092955/",
        note: "The article contrasts the 87-day claim in A Million Little Pieces with the brief real incarceration, one of the book’s exposed fabrications.",
      },
    },
    {
      key: "hoax-seltzer-sister",
      question:
        "What personal connection exposed the invented life story behind Love and Consequences in 2008?",
      answer:
        "The author’s own sister recognized her in a newspaper profile and revealed the deception.",
      source: {
        title: "Smithsonian Magazine — Five Fake Memoirs That Fooled the Literary World",
        url: "https://www.smithsonianmag.com/arts-culture/five-fake-memoirs-that-fooled-the-literary-world-77092955/",
        note: "Margaret Seltzer’s sister contacted the publisher after a New York Times profile. The gang-life foster-child narrative did not match her upbringing.",
      },
    },
    {
      key: "hoax-wise-pamphlets",
      question:
        "What embarrassing discovery did a 1934 investigation make about collector Thomas James Wise?",
      answer:
        "The famous exposer of literary fakes was himself linked to dozens of forged early editions.",
      source: {
        title: "Encyclopaedia Britannica — Literary Forgery",
        url: "https://www.britannica.com/art/forgery-art/Literary-forgery",
        note: "Carter and Pollard’s 1934 inquiry established that roughly 40–50 costly nineteenth-century pamphlets were forged and traceable to Wise.",
      },
    },
    {
      key: "hoax-lauder-milton",
      question: "What was unusual about the evidence William Lauder presented against John Milton?",
      answer:
        "He inserted Latin versions of Milton’s own lines into older texts, then accused Milton of copying them.",
      source: {
        title: "Encyclopaedia Britannica — Literary Forgery",
        url: "https://www.britannica.com/art/forgery-art/Literary-forgery",
        note: "Lauder interpolated Latin versions of passages from Paradise Lost into seventeenth-century poets’ works, then used them to allege plagiarism.",
      },
    },
    {
      key: "hoax-bertram-monk",
      question:
        "Who supplied the ancient authority behind Charles Bertram's influential account of Roman Britain?",
      answer: "An imaginary monk called Richard of Westminster, whose work Bertram had invented.",
      source: {
        title: "Encyclopaedia Britannica — Literary Forgery",
        url: "https://www.britannica.com/art/forgery-art/Literary-forgery",
        note: "Bertram attributed his fabricated account to Richard of Westminster. Stukeley misidentified this supposed author as the real Richard of Cirencester.",
      },
    },
    {
      key: "hoax-keely-engine",
      question:
        "What hidden power source explained John Keely's supposedly revolutionary machinery after his death?",
      answer: "Ordinary compressed air or hydraulic power, delivered through concealed tubing.",
      source: {
        title: "Encyclopaedia Britannica — John E. W. Keely",
        url: "https://www.britannica.com/biography/John-E-W-Keely",
        note: "Keely claimed power from intermolecular vibrations of ether. Posthumous examination found compressed-air tubes or hydraulic power instead.",
      },
    },
    {
      key: "hoax-constantine-language",
      question:
        "What feature of a document attributed to Emperor Constantine helped Lorenzo Valla expose it?",
      answer: "Its Latin belonged to a much later period than the emperor’s lifetime.",
      source: {
        title: "Encyclopaedia Britannica — Donation of Constantine",
        url: "https://www.britannica.com/topic/Donation-of-Constantine",
        note: "Valla’s 1440 critique exposed the Donation as a forgery through its anachronistic Latin. The document was composed in the eighth century, not Constantine’s fourth.",
      },
    },
    {
      key: "hoax-dossena-centuries",
      question:
        "Why did Alceo Dossena's sculptures appear to represent artists separated by many centuries?",
      answer: "His modern work was sold as ancient Greek, medieval and Renaissance sculpture.",
      source: {
        title: "Encyclopaedia Britannica — Forgery in the Visual Arts",
        url: "https://www.britannica.com/art/forgery-art/Forgery-in-the-visual-arts",
        note: "Britannica records hundreds of Dossena sculptures produced from 1916 to 1928 in archaic Greek, medieval and Renaissance styles and acquired as historical works.",
      },
    },
    {
      key: "hoax-keating-time-bombs",
      question: "What did Tom Keating mean by leaving “time bombs” in his paintings?",
      answer:
        "Deliberate clues to the forgery, such as hidden lead-pencil writing detectable by X-ray.",
      source: {
        title: "Smithsonian Magazine — Everything in This Museum Is Fake",
        url: "https://www.smithsonianmag.com/travel/nothing-art-museum-real-180964918/",
        note: "Keating embedded peculiar materials, intentional flaws and lead-pencil writing beneath paint so his forgeries could eventually be detected.",
      },
    },
  ],
);
