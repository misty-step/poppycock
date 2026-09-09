import { definePack } from "./types";

export const printingOddities = definePack(
  {
    key: "printing-oddities",
    title: "Printing oddities",
    blurb: "Errant letters, ingenious bindings, and the surprising things people did to books.",
    category: "Printing oddities",
    sort: 450,
  },
  [
    {
      key: "printing-barker-commandment",
      question:
        "What disastrous instruction appeared in a London Bible printed by Robert Barker in 1631?",
      answer: "‘Thou shalt commit adultery.’ The printer had left out ‘not’ from the commandment.",
      source: {
        title: "Folger Shakespeare Library — Manifold Greatness: Misprints and Misfortunes",
        url: "https://folgerpedia.folger.edu/Manifold_Greatness_exhibition_material",
        note: "The exhibition identifies Barker's 1631 Bible, whose Exodus 20:14 omits ‘not.’ Copies were seized and Barker was prosecuted and fined; deliberate sabotage is only a theory.",
      },
    },
    {
      key: "printing-harvard-cover",
      question:
        "What did Harvard remove from the cover of its copy of Des destinées de l'âme in 2024?",
      answer:
        "Human skin, taken from a deceased hospital patient and used as a binding almost certainly without her consent.",
      source: {
        title: "Harvard Library — Q&A with Houghton Library about the book Des destinées de l’âme",
        url: "https://library.harvard.edu/about/news/2024-03-27/qa-houghton-library-about-book-des-destinees-de-lame",
        note: "Harvard announced removal of the binding in March 2024. Physician Ludovic Bouland used skin from a deceased woman patient; Harvard says it was almost certainly taken without consent.",
      },
    },
    {
      key: "printing-two-front-covers",
      question:
        "Why could a seventeenth-century volume have two front covers but only one shared back cover?",
      answer:
        "Two books were bound back-to-back, each opening from its own side, with two spines and an S-shaped structure.",
      source: {
        title: "Folger Shakespeare Library — Back-to-back reading",
        url: "https://www.folger.edu/blogs/collation/back-to-back-reading/",
        note: "The article explains dos-à-dos bindings: two text blocks share a back board, retain separate front boards, and face opposite directions, producing an S-shaped cross-section.",
      },
    },
    {
      key: "printing-hidden-wilton",
      question:
        "How does a view of Wilton House appear on a Folger Shakespeare volume whose closed edges look simply gold?",
      answer:
        "Fanning the pages reveals a hidden painting beneath the gilded appearance of the closed page edges.",
      source: {
        title: "Folger Shakespeare Library — Fore-edge paintings",
        url: "https://www.folger.edu/blogs/collation/fore-edge-paintings/",
        note: "The Folger illustrates a Wilton House fore-edge painting on a 1797 Shakespeare edition bound by Edwards of Halifax in the early nineteenth century; the scene appears when the leaves are fanned.",
      },
    },
    {
      key: "printing-vicksburg-stock",
      question:
        "What household material kept Vicksburg's Daily Citizen in circulation during the siege of 1863?",
      answer:
        "Wallpaper: the newspaper was printed on its blank reverse when ordinary newsprint ran out.",
      source: {
        title: "Library of Congress — The Daily Citizen, July 2, 1863",
        url: "https://guides.loc.gov/noteworthy-newspaper-issues/daily-citizen",
        note: "The Library records six surviving 1863 issues printed on wallpaper during Vicksburg's newsprint shortage, including the famous July 2 issue later amended by Union troops.",
      },
    },
    {
      key: "printing-one-letter-patch",
      question:
        "How was a single wrong letter fixed in an already printed 1590 edition of Pomponius Mela?",
      answer:
        "A tiny paper slip bearing an ‘r’ was pasted over an ‘h,’ turning ‘wohthy’ into ‘worthy.’",
      source: {
        title: "Folger Shakespeare Library — Correcting with cancel slips",
        url: "https://www.folger.edu/blogs/collation/correcting-with-cancel-slips/",
        note: "The article shows an exceptionally small cancel slip in the 1590 Pomponius Mela: a printed ‘r’ pasted over the incorrect ‘h’ in ‘wohthy.’",
      },
    },
    {
      key: "printing-titus-white-dots",
      question:
        "Why do later versions of an old Titus Andronicus illustration have more white dots, even on undamaged paper?",
      answer:
        "Beetles ate holes in the wooden printing block; the holes then left blank spots in every image it printed.",
      source: {
        title: "Folger Shakespeare Library — The ballad of the woodworm",
        url: "https://www.folger.edu/blogs/collation/the-ballad-of-the-woodworm/",
        note: "The same ballad woodblock accumulated wormholes as printers reused it. The article identifies the furniture beetle, Anobium punctatum, and explains that increasing printed white spots can help order impressions.",
      },
    },
    {
      key: "printing-decorative-censorship",
      question:
        "Why does a 1689 pamphlet about the Prince of Wales suddenly contain a block of meaningless ornaments and letters?",
      answer:
        "A paragraph was censored by replacing its typeset words with decorative fleurs-de-lis and repeated letters.",
      source: {
        title: "Folger Shakespeare Library — Expurgation with decoration",
        url: "https://www.folger.edu/blogs/collation/expurgation-with-decoration/",
        note: "In A full answer to the depositions, a paragraph was removed from the set type and replaced with fleurs-de-lis and lowercase m's. Other copies obscure the passage by overprinting it.",
      },
    },
    {
      key: "printing-unopened-purchase",
      question:
        "Why might the first owner of a brand-new early printed book need a knife before being able to read it?",
      answer:
        "Some books were sold with folded page edges still joined; the reader had to slit the folds open.",
      source: {
        title: "Folger Shakespeare Library — Form & Function: The Genius of the Book",
        url: "https://folgerpedia.folger.edu/Form_%26_Function:_The_Genius_of_the_Book",
        note: "The exhibition describes folded printed sheets and books issued in temporary bindings with uncut folds. Reading required opening the folds; surviving unopened copies preserve physical evidence of production.",
      },
    },
    {
      key: "printing-aeneid-around-aeneid",
      question:
        "What unusually appropriate material became the cover of Richard Stanyhurst's 1583 translation of the Aeneid?",
      answer:
        "Pages from a handwritten Aeneid made roughly 400 years earlier: the same work recycled around a new edition.",
      source: {
        title: "Bodleian Libraries — Digging into the archaeology of the book",
        url: "https://blogs.bodleian.ox.ac.uk/theconveyor/digging-into-the-archaeology-of-the-book-the-digital-humanities-at-the-bodleian-library/",
        note: "Bodleian shelfmark Wood 106 contains Stanyhurst's 1583 translation of the first four books of Virgil's Aeneid, covered with leaves from a twelfth-century manuscript of the Aeneid.",
      },
    },
    {
      key: "printing-parchment-clasps",
      question:
        "Why did some medieval volumes need metal clasps even when nobody was trying to steal them?",
      answer:
        "Parchment changes shape with humidity and can force a book open; clasps restrained its swelling and warping.",
      source: {
        title: "Folger Shakespeare Library — Form & Function: The Genius of the Book",
        url: "https://folgerpedia.folger.edu/Form_%26_Function:_The_Genius_of_the_Book",
        note: "The exhibition explains that humidity makes parchment cockle and warp, potentially pushing the boards apart. Clasps and ties hold the book closed against this movement.",
      },
    },
    {
      key: "printing-cover-bosses",
      question:
        "Why did bookbinders put conspicuous metal bumps on the covers of some large volumes?",
      answer:
        "The raised metal fittings lifted the covers off the reading surface, protecting the leather from scratches and wear.",
      source: {
        title: "Folger Shakespeare Library — Form & Function: The Genius of the Book",
        url: "https://folgerpedia.folger.edu/Form_%26_Function:_The_Genius_of_the_Book",
        note: "The section on binding furniture describes metal bosses and corner fittings as protection for covers, keeping their surfaces from rubbing against desks and other supporting surfaces.",
      },
    },
    {
      key: "printing-gilders-ingredient",
      question:
        "Which kitchen ingredient helped bookbinders fasten real gold to the edges of pages?",
      answer:
        "Egg white, used as the adhesive beneath thin gold leaf before the edges were burnished.",
      source: {
        title: "Folger Shakespeare Library — Form & Function: The Genius of the Book",
        url: "https://folgerpedia.folger.edu/Form_%26_Function:_The_Genius_of_the_Book",
        note: "The exhibition's gilding description specifies egg white to adhere gold leaf to the prepared book edges, followed by burnishing with an agate tool.",
      },
    },
    {
      key: "printing-eraser-clues",
      question:
        "Why would a conservator carefully save the rubber-eraser crumbs from cleaning an old manuscript?",
      answer:
        "Proteins picked up by the crumbs can reveal which animal's skin supplied the parchment, without cutting a sample from it.",
      source: {
        title: "Folger Shakespeare Library — Form & Function: The Genius of the Book",
        url: "https://folgerpedia.folger.edu/Form_%26_Function:_The_Genius_of_the_Book",
        note: "The exhibition describes collecting parchment proteins and DNA in eraser rubbings to distinguish animal species, including calf, sheep, goat, and deer, without destructive sampling.",
      },
    },
    {
      key: "printing-alphabet-shield",
      question:
        "What protected the printed alphabet on a paddle-shaped Elizabethan child's reading aid?",
      answer: "A thin, transparent layer of animal horn laid over the letters.",
      source: {
        title: "Folger Shakespeare Library — Ben Jonson at school: Elizabethan education",
        url: "https://www.folger.edu/blogs/shakespeare-and-beyond/ben-jonson-school-elizabethan-education/",
        note: "The article describes the hornbook as an oak paddle carrying an alphabet on paper or parchment, protected by a transparent horn laminate.",
      },
    },
    {
      key: "printing-wearable-volume",
      question:
        "How could a medieval traveller keep a small book close without carrying it in a bag or a free hand?",
      answer:
        "Wear it: a girdle book was designed to be carried attached to the reader's clothing.",
      source: {
        title: "Bodleian Libraries — Digging into the archaeology of the book",
        url: "https://blogs.bodleian.ox.ac.uk/theconveyor/digging-into-the-archaeology-of-the-book-the-digital-humanities-at-the-bodleian-library/",
        note: "The article presents Ashmole 6 as a fifteenth-century vade mecum or girdle book, a portable format worn by medieval monks and aristocrats.",
      },
    },
    {
      key: "printing-bartisch-head",
      question:
        "What could readers physically do to the illustrated head in Georg Bartisch's 1583 treatise?",
      answer: "Peel back successive paper flaps to explore the anatomical structures underneath.",
      source: {
        title: "Bodleian Libraries — Digging into the archaeology of the book",
        url: "https://blogs.bodleian.ox.ac.uk/theconveyor/digging-into-the-archaeology-of-the-book-the-digital-humanities-at-the-bodleian-library/",
        note: "Bartisch's Ophthalmodouleia, a 1583 work on eye disease, includes layered anatomical illustrations whose paper flaps expose progressively deeper structures.",
      },
    },
    {
      key: "printing-devotional-wear",
      question:
        "Why is a picture of the Virgin in a fifteenth-century Bodleian manuscript almost rubbed away, despite being cherished?",
      answer:
        "Devotional handling wore it away: readers repeatedly touched or rubbed the sacred image.",
      source: {
        title: "Bodleian Libraries — Digging into the archaeology of the book",
        url: "https://blogs.bodleian.ox.ac.uk/theconveyor/digging-into-the-archaeology-of-the-book-the-digital-humanities-at-the-bodleian-library/",
        note: "The article identifies the heavily rubbed Virgin in MS. Rawl. liturg. e. 8, folio 6v, as evidence of readers' devotional interaction with the image rather than mere accidental damage.",
      },
    },
    {
      key: "printing-manuscript-mask",
      question:
        "Why would a printer place a cut-out sheet of an old manuscript between inked type and a fresh page?",
      answer:
        "It acted as a mask, shielding parts of the page so that only selected areas received the coloured ink.",
      source: {
        title: "Bodleian Libraries — Digging into the archaeology of the book",
        url: "https://blogs.bodleian.ox.ac.uk/theconveyor/digging-into-the-archaeology-of-the-book-the-digital-humanities-at-the-bodleian-library/",
        note: "The Bodleian discusses a surviving frisket, Broxb. 97.40, made from a reused manuscript leaf and cut to control where colour was applied in printing.",
      },
    },
    {
      key: "printing-chivers-window",
      question:
        "How could a Cedric Chivers binding show a watercolour through the protective skin covering it?",
      answer:
        "Chivers used transparent vellum over the painted decoration, sometimes adding mother-of-pearl beneath it.",
      source: {
        title: "Folger Shakespeare Library — The mulberry tree and Shakespeare bindings",
        url: "https://www.folger.edu/blogs/shakespeare-and-beyond/mulberry-tree-shakespeare-bindings/",
        note: "The article describes Chivers's ‘vellucent’ technique, with transparent vellum covering watercolour and mother-of-pearl decoration on a Shakespeare binding.",
      },
    },
    {
      key: "printing-mulberry-relic",
      question:
        "What supposedly Shakespearean relic was built into the front cover of one nineteenth-century volume of his works?",
      answer:
        "A piece of wood claimed to come from Shakespeare's mulberry tree, displayed in a frame in the binding.",
      source: {
        title: "Folger Shakespeare Library — The mulberry tree and Shakespeare bindings",
        url: "https://www.folger.edu/blogs/shakespeare-and-beyond/mulberry-tree-shakespeare-bindings/",
        note: "The illustrated binding incorporates wood labelled as a relic of Shakespeare's mulberry tree. The article treats such provenance claims cautiously; the card does not authenticate the wood.",
      },
    },
    {
      key: "printing-moving-corrections",
      question:
        "Why could two copies of the same early Bible edition disagree even though neither reader had altered a word?",
      answer:
        "Corrections were made while the press kept working, so uncorrected sheets could be mixed with corrected ones in finished copies.",
      source: {
        title: "Folger Shakespeare Library — Manifold Greatness: Making the King James Bible",
        url: "https://folgerpedia.folger.edu/Manifold_Greatness_exhibition_material",
        note: "The exhibition explains hand-press production and proof correction: pressmen continued working as the corrector checked sheets, producing textual differences among copies of an edition.",
      },
    },
    {
      key: "printing-gethsemane-substitution",
      question:
        "What startling substitution appears in a 1613 London Bible's account of the arrival at Gethsemane?",
      answer:
        "Judas arrives with the disciples instead of Jesus: Judas was mistakenly printed in Matthew 26:36.",
      source: {
        title: "Folger Shakespeare Library — Manifold Greatness: Misprints and Misfortunes",
        url: "https://folgerpedia.folger.edu/Manifold_Greatness_exhibition_material",
        note: "The exhibition identifies the 1613 ‘Judas Bible,’ which prints Judas for Jesus in Matthew 26:36. The Folger copy has a pasted correction with part of the original J still visible.",
      },
    },
    {
      key: "printing-cortes-moving-parts",
      question: "What movable equipment was built directly into Martín Cortés's 1551 handbook?",
      answer:
        "Rotating paper discs that readers could turn to work out astronomical relationships involving the Sun and Moon.",
      source: {
        title: "Folger Shakespeare Library — Volvelles",
        url: "https://www.folger.edu/blogs/collation/volvelles/",
        note: "The Folger examines the movable paper instruments in Cortés's Breve compendio, printed in Seville in 1551. Attached discs and indices rotate to represent astronomical quantities.",
      },
    },
    {
      key: "printing-pilgrimage-reinforcement",
      question:
        "What unexpected reinforcements were found in the binding of a 1673 book about Catholic pilgrimage?",
      answer: "Two tarot cards: the Ten of Swords and the Emperor, reused as binding material.",
      source: {
        title: "Folger Shakespeare Library — Fortune's fools: Early tarot cards",
        url: "https://www.folger.edu/blogs/collation/fortunes-fools-early-tarot-cards/",
        note: "The article identifies tarot cards reused in the binding of Vincent Reboul's Le Pelerinage de S. Maximin, published in 1673. The book's publication date does not establish the cards' date.",
      },
    },
    {
      key: "printing-unwanted-upside-down",
      question:
        "Why did a 1585 religious illustration acquire upside-down text that readers were never meant to see?",
      answer:
        "Support type in a blank area was accidentally inked; it was there to balance the press's pressure and protect the main type.",
      source: {
        title: "Folger Shakespeare Library — Learning from mistakes",
        url: "https://www.folger.edu/blogs/collation/learning-from-mistakes/",
        note: "The Folger interprets the upside-down text beside an illustration on page 252 of Vita di Giesu Christo (1585) as accidentally printed bearing type, placed to support even press pressure.",
      },
    },
    {
      key: "printing-foot-daggers",
      question:
        "Why might tiny daggers and pointing hands appear at the foot of early printed pages, unrelated to anything the text says?",
      answer:
        "They were assembly marks, helping printers and binders put the folded groups of pages in the right order.",
      source: {
        title: "Folger Shakespeare Library — The symbols of signature marks",
        url: "https://www.folger.edu/blogs/collation/the-symbols-of-signature-marks/",
        note: "Signature marks identify gatherings for correct assembly. The article documents nonalphabetic signs including asterisks, daggers, crosses, pilcrows, and pointing hands, especially in preliminary gatherings.",
      },
    },
    {
      key: "printing-moxons-devils",
      question:
        "In Joseph Moxon's 1683 account, why did a workshop's boys earn the nickname ‘devils’?",
      answer: "Taking freshly printed sheets off the press covered the boys in black ink.",
      source: {
        title: "Folger Shakespeare Library — A book's fingerprints",
        url: "https://www.folger.edu/blogs/collation/a-books-fingerprints/",
        note: "The article quotes Moxon's Mechanick Exercises: the boys taking sheets off the tympan commonly daubed themselves black, leading workmen to call them ‘Devils.’",
      },
    },
    {
      key: "printing-blarers-gesture",
      question:
        "What unexpected doodle appears among Ambrosius Blarer's notes in his copy of a 1515 Erasmus?",
      answer:
        "A hand with its middle finger raised, illustrating an adage about the same insult still used today.",
      source: {
        title: "Folger Shakespeare Library — Adages and Annotations",
        url: "https://www.folger.edu/blogs/collation/adages-and-annotations/",
        note: "Blarer's copy of Erasmus's Adagia contains a manicule with an extended middle finger beside an adage about that gesture. The Folger explicitly notes that its insulting meaning was the same.",
      },
    },
    {
      key: "printing-king-denied",
      question:
        "What ordinary request did Oxford's Bodleian Library refuse to King Charles I in 1645?",
      answer:
        "He wanted to borrow a book. The library's rule against lending applied even to the king.",
      source: {
        title: "Bodleian Libraries — History of the Bodleian",
        url: "https://visit.bodleian.ox.ac.uk/plan-your-visit/history-bodleian",
        note: "The library's history states that no books are lent and records the refusal of King Charles I's request to borrow one in 1645.",
      },
    },
  ],
);
