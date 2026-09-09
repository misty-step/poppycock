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
        "What unconventional layout did some seventeenth-century binders use when putting two works in one volume?",
      answer:
        "They bound them back-to-back, with two front covers and two spines sharing a single back cover.",
      source: {
        title: "Folger Shakespeare Library — Back-to-back reading",
        url: "https://www.folger.edu/blogs/collation/back-to-back-reading/",
        note: "The article explains dos-à-dos bindings: two text blocks share a back board, retain separate front boards, and face opposite directions, producing an S-shaped cross-section.",
      },
    },
    {
      key: "printing-hidden-wilton",
      question:
        "Where did an early-nineteenth-century binder hide a painting of Wilton House in a Shakespeare volume?",
      answer:
        "On the page edges: closed, they look gold, but fanning the leaves reveals the scene.",
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
        "Why did later printings of an old Titus Andronicus picture have white spots missing from earlier ones?",
      answer:
        "Beetles bored holes in the wooden printing block, leaving blank dots in all the later impressions.",
      source: {
        title: "Folger Shakespeare Library — The ballad of the woodworm",
        url: "https://www.folger.edu/blogs/collation/the-ballad-of-the-woodworm/",
        note: "The same ballad woodblock accumulated wormholes as printers reused it. The article identifies the furniture beetle, Anobium punctatum, and explains that increasing printed white spots can help order impressions.",
      },
    },
    {
      key: "printing-decorative-censorship",
      question:
        "Why does a 1689 pamphlet about the Prince of Wales suddenly break into meaningless ornaments and letters?",
      answer:
        "A paragraph was censored: decorative flowers and repeated letters replaced the forbidden words.",
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
        "What became the cover of a 1583 English translation of Virgil's Aeneid now in the Bodleian?",
      answer: "Pages from a handwritten copy of the same poem, made about 400 years earlier.",
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
      key: "printing-doves-thames",
      question:
        "How did a London printer ensure his business partner would not inherit their prized typeface?",
      answer:
        "He secretly dumped its metal type into the Thames, making repeated night-time trips to Hammersmith Bridge.",
      source: {
        title: "London Museum — The lost Doves Type: A Thames mystery solved",
        url: "https://www.londonmuseum.org.uk/blog/doves-type-thames-mystery-mudlarking/",
        note: "The museum describes Cobden-Sanderson's 1916–17 trips to throw the Doves Type into the Thames rather than allow it to pass to Emery Walker under their agreement.",
      },
    },
    {
      key: "printing-gilders-ingredient",
      question:
        "Which kitchen ingredient held real gold leaf onto the page edges of finely bound books?",
      answer: "Egg white, used as glue beneath the thin layer of gold.",
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
      question: "How were some small books designed to travel with medieval monks and aristocrats?",
      answer:
        "They could be worn, attached to the reader's clothing instead of carried in a hand or bag.",
      source: {
        title: "Bodleian Libraries — Digging into the archaeology of the book",
        url: "https://blogs.bodleian.ox.ac.uk/theconveyor/digging-into-the-archaeology-of-the-book-the-digital-humanities-at-the-bodleian-library/",
        note: "The article presents Ashmole 6 as a fifteenth-century vade mecum or girdle book, a portable format worn by medieval monks and aristocrats.",
      },
    },
    {
      key: "printing-bartisch-head",
      question:
        "What unusual reading instructions could accompany the illustrated head in Georg Bartisch's 1583 medical treatise?",
      answer: "Peel it apart: layered paper flaps let the reader explore the anatomy underneath.",
      source: {
        title: "Bodleian Libraries — Digging into the archaeology of the book",
        url: "https://blogs.bodleian.ox.ac.uk/theconveyor/digging-into-the-archaeology-of-the-book-the-digital-humanities-at-the-bodleian-library/",
        note: "Bartisch's Ophthalmodouleia, a 1583 work on eye disease, includes layered anatomical illustrations whose paper flaps expose progressively deeper structures.",
      },
    },
    {
      key: "printing-devotional-wear",
      question:
        "Why did the Virgin's face nearly vanish from a cherished fifteenth-century manuscript?",
      answer: "Readers repeatedly rubbed the sacred picture in acts of devotion, wearing it away.",
      source: {
        title: "Bodleian Libraries — Digging into the archaeology of the book",
        url: "https://blogs.bodleian.ox.ac.uk/theconveyor/digging-into-the-archaeology-of-the-book-the-digital-humanities-at-the-bodleian-library/",
        note: "The article identifies the heavily rubbed Virgin in MS. Rawl. liturg. e. 8, folio 6v, as evidence of readers' devotional interaction with the image rather than mere accidental damage.",
      },
    },
    {
      key: "printing-manuscript-mask",
      question: "What second career did a medieval manuscript leaf have in an early printing shop?",
      answer:
        "It became a cut-out mask, keeping coloured ink off some parts of a fresh page while letting it reach others.",
      source: {
        title: "Bodleian Libraries — Digging into the archaeology of the book",
        url: "https://blogs.bodleian.ox.ac.uk/theconveyor/digging-into-the-archaeology-of-the-book-the-digital-humanities-at-the-bodleian-library/",
        note: "The Bodleian discusses a surviving frisket, Broxb. 97.40, made from a reused manuscript leaf and cut to control where colour was applied in printing.",
      },
    },
    {
      key: "printing-chivers-window",
      question:
        "What protected the watercolour decoration on Cedric Chivers's elaborate book covers?",
      answer:
        "Transparent vellum: a sheet of treated animal skin through which the painting remained visible.",
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
      key: "printing-halley-salary",
      question:
        "What did the Royal Society offer Edmond Halley when it could no longer afford his salary?",
      answer:
        "Unsold copies of an expensive book about fish that had helped empty the Society's coffers.",
      source: {
        title: "The Guardian — How a book about fish nearly sank Isaac Newton's Principia",
        url: "https://www.theguardian.com/science/2012/apr/19/royal-society-publish-isaac-newton-principia",
        note: "The report, linked as the true story by the Royal Society's library manager, explicitly says Halley was offered unsold Historia Piscium copies instead of salary. The card preserves 'offered', not 'accepted'.",
      },
    },
    {
      key: "printing-cortes-moving-parts",
      question:
        "How could readers make Martín Cortés's 1551 handbook perform calculations without writing in it?",
      answer:
        "They turned paper wheels built into the pages to work out relationships between the Sun and Moon.",
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
        "Scrap type put there just to support the press was accidentally inked, printing words that were never part of the page.",
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
        "They were assembly guides, telling the binder which folded groups of pages went where.",
      source: {
        title: "Folger Shakespeare Library — The symbols of signature marks",
        url: "https://www.folger.edu/blogs/collation/the-symbols-of-signature-marks/",
        note: "Signature marks identify gatherings for correct assembly. The article documents nonalphabetic signs including asterisks, daggers, crosses, pilcrows, and pointing hands, especially in preliminary gatherings.",
      },
    },
    {
      key: "printing-joanina-guardians",
      question: "What unlikely residents help preserve the books in Coimbra's Joanina Library?",
      answer: "Colonies of bats, which feed on insects that would otherwise damage the books.",
      source: {
        title: "University of Coimbra — Biblioteca Joanina: Piso Nobre",
        url: "https://www.uc.pt/informacaopara/visit/article?key=a-b79a66c7bb",
        note: "The university's English visitor guide states that two bat colonies have lived in the library for roughly two and a half centuries to help with pest control.",
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
      key: "printing-roth-sausages",
      question:
        "How did Dieter Roth transform books and magazines into a peculiar new kind of artist's book in the 1960s?",
      answer:
        "He ground them up, mixed them with fat and spices, and stuffed the mixture into sausage casings.",
      source: {
        title: "Museum of Modern Art — Dieter Roth: Literature Sausage",
        url: "https://www.moma.org/interactives/exhibitions/2013/dieter_roth/works/literature-sausage/",
        note: "MoMA describes Roth following sausage recipes but substituting ground-up books or magazines for meat, then adding fat, gelatin, water and spices before filling casings.",
      },
    },
  ],
);
