import { definePack } from "./types";

export const theatricalLore = definePack(
  {
    key: "theatrical-lore",
    title: "Theatrical lore",
    blurb: "Backstage taboos, ingenious illusions and the unexpected customs behind the curtain.",
    category: "Theatrical lore",
    sort: 250,
  },
  [
    {
      key: "theatre-scottish-name-remedy",
      question: "What ritual do some actors demand after someone says Macbeth inside a theatre?",
      answer: "Go outside, turn around three times, spit, then knock to be allowed back in.",
      source: {
        title: "Folger Shakespeare Library - How to counteract the curse of Macbeth",
        url: "https://www.folger.edu/blogs/shakespeare-and-beyond/macbeth-curse-scottish-play/",
        note: "Actor Laura Rocklyn describes this exact remedy in Folger's interview. This is a reported superstition, not evidence of an actual curse.",
      },
    },
    {
      key: "theatre-whistling-scenery-cue",
      question:
        "What practical explanation is often given for the taboo against whistling backstage?",
      answer:
        "Whistles once cued stagehands to move scenery, so a stray whistle could summon a falling backdrop.",
      source: {
        title:
          "Folger Shakespeare Library - Very Superstitious: Sense and Sensibility's Cast on Theater Rituals",
        url: "https://www.folger.edu/blogs/folger-spotlight/very-superstitious/",
        note: "Lisa Birnbaum gives this explanation in Folger's cast interviews. The card presents the traditional explanation without asserting a documented single origin.",
      },
    },
    {
      key: "theatre-ben-hur-human-waves",
      question:
        "What happened to the galley slaves when the ship sank in the Broadway stage version of Ben-Hur?",
      answer:
        "They lay under a huge canvas and moved their oars, arms and legs to become the waves.",
      source: {
        title: "General Lew Wallace Study and Museum - Ben-Hur on Broadway",
        url: "https://www.ben-hur.com/ben-hur-on-broadway/",
        note: "The Engineering the Wreck section describes actors playing galley slaves lying on the floor under a canvas and using their oars, arms and legs to simulate the sea.",
      },
    },
    {
      key: "theatre-peacock-feather-taboo",
      question: "Why might a superstitious prop master refuse an otherwise suitable peacock fan?",
      answer:
        "The feathers' eye-like markings were associated with the evil eye and bad luck on stage.",
      source: {
        title: "Victoria and Albert Museum - Marie Taglioni as the Sylph",
        url: "https://collections.vam.ac.uk/item/O106181/",
        note: "The V&A notes the theatrical taboo in its Taglioni print record, describing the evil-eye connection as a possible explanation rather than a proven origin.",
      },
    },
    {
      key: "theatre-thorndike-protective-prayer",
      question:
        "What did Sybil Thorndike reportedly do before every performance as Lady Macbeth in 1926?",
      answer:
        "Recite the Lord's Prayer, fearing that the play might bring its spells and spirits to life.",
      source: {
        title:
          "Victoria and Albert Museum - Five Spooky Tricks and Treats from the Theatre and Performance Collections",
        url: "https://www.vam.ac.uk/blog/news/five-spooky-tricks-and-treats-from-the-va-theatre-and-performance-collections",
        note: "The V&A article reports Thorndike's pre-performance prayer and her fear of activating the play's spells and spirits.",
      },
    },
    {
      key: "theatre-ghost-glide-dumbwaiter",
      question:
        "Victorian stages hid a contraption built like a dumbwaiter beneath the boards. What did audiences see it do?",
      answer:
        "Made an actor seem to rise out of the earth and then glide through the air across the stage.",
      source: {
        title: "Encyclopedia Britannica — Ghost glide",
        url: "https://www.britannica.com/art/ghost-glide",
        note: "Britannica's theatre coverage describes the 19th-century British 'ghost glide' as a sort of dumbwaiter that made actors appear to rise from the earth and glide through space.",
      },
    },
    {
      key: "theatre-peppers-ghost-reflection",
      question:
        "How did the Victorian illusion called Pepper's Ghost put an apparently translucent figure onstage?",
      answer:
        "Glass reflected a brightly lit figure or image from a hidden space into the audience's view of the stage.",
      source: {
        title:
          "Victoria and Albert Museum - Five Spooky Tricks and Treats from the Theatre and Performance Collections",
        url: "https://www.vam.ac.uk/blog/news/five-spooky-tricks-and-treats-from-the-va-theatre-and-performance-collections",
        note: "The V&A explains the use of glass, lighting and a hidden room to reflect an image onto the visible scene, producing a translucent appearance.",
      },
    },
    {
      key: "theatre-limelight-calcium",
      question:
        "What did nineteenth-century stage technicians heat with a hydrogen-and-oxygen flame to light a performer?",
      answer: "A block of quicklime, heated until it glowed: the source of the word limelight.",
      source: {
        title: "Encyclopedia Britannica - Limelight",
        url: "https://www.britannica.com/art/limelight-theater-lighting",
        note: "Britannica describes calcium oxide heated by burning oxygen and hydrogen. The lime itself was heated, not burned as fuel.",
      },
    },
    {
      key: "theatre-periaktoi-three-scenes",
      question:
        "How could an ancient stagehand change a street scene to a different setting without replacing the scenery?",
      answer:
        "By rotating a triangular prism with a different scene painted on each of its three sides.",
      source: {
        title: "Encyclopedia Britannica - Periaktoi",
        url: "https://www.britannica.com/art/periaktoi",
        note: "Britannica describes the ancient revolving wooden triangular prism, whose three painted faces could present different scenes.",
      },
    },
    {
      key: "theatre-star-trap-arrival",
      question: "What startling entrance was a theatre's star trap designed to produce?",
      answer:
        "An actor shot up through the floor; hinged wedge-shaped flaps immediately closed behind them.",
      source: {
        title: "Encyclopedia Britannica - Trap",
        url: "https://kids.britannica.com/scholars/article/trap/73233",
        note: "Britannica describes a counterweighted platform projecting the actor through a circular opening covered by individually hinged wedge-shaped sections.",
      },
    },
    {
      key: "theatre-behn-royal-spy",
      question:
        "What work had Aphra Behn done for Charles II before becoming a celebrated playwright?",
      answer: "She had worked as a spy for the king.",
      source: {
        title: "Victoria and Albert Museum - The story of theatre",
        url: "https://www.vam.ac.uk/articles/the-story-of-theatre",
        note: "The Restoration Theatre section states that Behn had previously been employed as a spy for Charles II before her career as a playwright.",
      },
    },
    {
      key: "theatre-peter-pan-hidden-corset",
      question:
        "Why did the original 1904 Peter Pan production need special corsets for its performers?",
      answer:
        "They were flying harnesses, with leather straps and a hidden attachment for the wires.",
      source: {
        title: "Victoria and Albert Museum - Peter Pan flying harness",
        url: "https://collections.vam.ac.uk/item/O103031/",
        note: "The V&A's surviving George Kirby harness is corset-shaped and has leather straps and a back attachment for the flying line.",
      },
    },
    {
      key: "theatre-eidophusikon-miniature",
      question:
        "What kind of spectacle could you buy a ticket to see at London's Eidophusikon in 1781?",
      answer:
        "A miniature theatre using painted gauzes, lights and mirrors to stage changing landscapes and spectacular effects.",
      source: {
        title: "Victoria and Albert Museum - The Eidophusikon playbill",
        url: "https://collections.vam.ac.uk/item/O1352712/the-eidophusikon-playbill-boyle-p/",
        note: "The V&A dates de Loutherbourg's first exhibition to 1781 and describes the miniature theatre, materials and scenic effects.",
      },
    },
    {
      key: "theatre-globe-recycled-building",
      question:
        "What did Shakespeare's company do with their playhouse when the lease on its site expired?",
      answer: "Dismantled the timber building and rebuilt it across the Thames as the Globe.",
      source: {
        title: "Victoria and Albert Museum - The story of theatre",
        url: "https://www.vam.ac.uk/articles/the-story-of-theatre",
        note: "The Shakespeare section says the company dismantled The Theatre after the land lease expired and rebuilt its timber frame on the south bank, renaming it the Globe.",
      },
    },
    {
      key: "theatre-ragged-trap-proposal",
      question:
        "What visual failing did an 1825 letter to Drury Lane blame on stage openings being too neat?",
      answer:
        "The trapdoors looked like carpentry rather than natural chasms opening in the earth.",
      source: {
        title: "Folger Shakespeare Library - Trappings of the stage",
        url: "https://www.folger.edu/blogs/collation/trappings-of-the-stage/",
        note: "Folger reproduces R.B.'s letter to R.W. Elliston arguing that irregular trapdoors would resemble earthly chasms better than square or round openings.",
      },
    },
    {
      key: "theatre-dowton-understage-prank",
      question:
        "According to an 1857 theatrical memoir, why did William Dowton kick his heels while solemnly descending through the stage?",
      answer: "Two actors hidden underneath were beating his calves with small canes.",
      source: {
        title: "Folger Shakespeare Library - Trappings of the stage",
        url: "https://www.folger.edu/blogs/collation/trappings-of-the-stage/",
        note: "Folger quotes George Raymond's memoir. The card attributes the anecdote and does not assert which ghost or play Dowton was performing.",
      },
    },
    {
      key: "theatre-tate-lears-survival",
      question:
        "What would audiences see at the end of Nahum Tate's King Lear that Shakespeare never wrote?",
      answer: "Lear and Cordelia survive instead of dying.",
      source: {
        title: "Victoria and Albert Museum - The story of theatre",
        url: "https://www.vam.ac.uk/articles/the-story-of-theatre",
        note: "The V&A states that the original ending was considered too distressing and Tate's version, with the King and Cordelia surviving, was preferred.",
      },
    },
    {
      key: "theatre-private-club-censorship",
      question:
        "How did some British theatres get controversial unlicensed plays onto the stage before censorship ended in 1968?",
      answer:
        "They operated as private clubs, charging membership subscriptions rather than public admission.",
      source: {
        title: "Victoria and Albert Museum - The story of theatre",
        url: "https://www.vam.ac.uk/articles/the-story-of-theatre",
        note: "The V&A explains that club theatres treated performances as private, outside the Lord Chamberlain's licensing restrictions, with members paying subscriptions.",
      },
    },
    {
      key: "theatre-davenant-sung-drama",
      question:
        "How did William Davenant present The Siege of Rhodes at his home in 1656, while English theatres were closed?",
      answer: "As an all-sung drama, now widely regarded as the first English opera.",
      source: {
        title: "Victoria and Albert Museum - The story of theatre",
        url: "https://www.vam.ac.uk/articles/the-story-of-theatre",
        note: "The V&A describes Davenant's all-sung home production in 1656 and its status as an early English opera; it does not claim a universal music exemption.",
      },
    },
    {
      key: "theatre-pageant-moving-stage",
      question:
        "Why might medieval spectators stay put while the next play in a cycle came to them?",
      answer:
        "They used pageant wagons that moved through town and stopped at agreed performance sites.",
      source: {
        title: "Victoria and Albert Museum - The story of theatre",
        url: "https://www.vam.ac.uk/articles/the-story-of-theatre",
        note: "The V&A describes plays staged on pageant wagons processing through streets and performing at pre-arranged locations.",
      },
    },
    {
      key: "theatre-covent-garden-1809-protests",
      question:
        "What caused audiences to disrupt performances at the rebuilt Covent Garden theatre for ten weeks in 1809?",
      answer:
        "Higher ticket prices and altered seating arrangements; they demanded the old prices back.",
      source: {
        title: "Victoria and Albert Museum - The story of theatre",
        url: "https://www.vam.ac.uk/articles/the-story-of-theatre",
        note: "The V&A describes the Old Price Riots following price rises and gallery changes, ending with concessions and Kemble's public apology.",
      },
    },
    {
      key: "theatre-farinelli-four-songs",
      question:
        "What treatment did Spain's Philip V receive from the singer Farinelli every night for a decade?",
      answer: "He sang the same four songs to the king every night.",
      source: {
        title: "Encyclopedia Britannica - Farinelli",
        url: "https://kids.britannica.com/students/article/Farinelli/322978",
        note: "Britannica states that Farinelli sang the same four songs nightly for ten years to Philip V, whose melancholia his singing alleviated.",
      },
    },
    {
      key: "theatre-garrick-fright-wig",
      question:
        "What trick equipment was David Garrick reputed to use when Hamlet saw his father's ghost?",
      answer: "A mechanical wig whose hair stood on end to make him look terrified.",
      source: {
        title: "Folger Shakespeare Library - Acting, Emotion, and Science on Shakespeare's Stage",
        url: "https://www.folger.edu/podcasts/shakespeare-unlimited/joseph-roach-acting/",
        note: "Joseph Roach describes two sources for Garrick's mechanical fright wig in the ghost scene. He explicitly allows that the story may be a contemporary belief, so the prompt says reputed.",
      },
    },
    {
      key: "theatre-ben-hur-treadmills",
      question:
        "How did the Broadway stage version of Ben-Hur make eight live horses appear to race at full speed?",
      answer:
        "They galloped on treadmills, with moving ground effects and powder blown up around their hooves as dust.",
      source: {
        title: "General Lew Wallace Study and Museum - Ben-Hur on Broadway",
        url: "https://www.ben-hur.com/ben-hur-on-broadway/",
        note: "The Chariot Race section describes eight horses galloping on a treadmill, adjacent moving belts and blowers under the floor forcing powder through the treadmill to resemble dust.",
      },
    },
    {
      key: "theatre-opera-house-dance-hall",
      question: "What did London's Royal Opera House become during the Second World War?",
      answer: "A Mecca dance hall.",
      source: {
        title: "Royal Ballet and Opera - History of the Royal Opera House",
        url: "https://www.rbo.org.uk/about/history",
        note: "The Royal Opera House's official history distinguishes its Second World War dance-hall use from its First World War furniture storage use.",
      },
    },
    {
      key: "theatre-terry-beetle-wings",
      question: "What gave Ellen Terry's Lady Macbeth dress its shimmering decoration in 1888?",
      answer: "Real beetle wings, attached to give the dress the appearance of a serpent's scales.",
      source: {
        title: "National Trust - Costume conservation at Smallhythe Place",
        url: "https://www.nationaltrust.org.uk/visit/kent/smallhythe-place/costume-conservation",
        note: "The Conserving the Beetlewing Dress section identifies Terry's 1888 Lady Macbeth costume and says the addition of beetlewings created the effect of a serpent's scales.",
      },
    },
    {
      key: "theatre-bunraku-missing-legs",
      question: "How does a puppeteer make a traditional female Bunraku puppet appear to walk?",
      answer: "By moving its long kimono: the puppet has no legs or feet beneath it.",
      source: {
        title: "Encyclopedia Britannica - Bunraku",
        url: "https://www.britannica.com/art/Bunraku",
        note: "Britannica states that female dolls lack legs and feet because traditional clothing concealed them; the assistant manipulates the kimono.",
      },
    },
    {
      key: "theatre-frankenstein-blue-monster",
      question:
        "What did Frankenstein's monster look like on the early stage, before Boris Karloff established the familiar image?",
      answer: "Pale blue skin, flowing black hair and a toga.",
      source: {
        title:
          "Victoria and Albert Museum - Five Spooky Tricks and Treats from the Theatre and Performance Collections",
        url: "https://www.vam.ac.uk/blog/news/five-spooky-tricks-and-treats-from-the-va-theatre-and-performance-collections",
        note: "The Frankenstein section contrasts early stage portrayals in a toga, with flowing black hair and pale blue skin, with the angular-headed film monster made famous by Karloff.",
      },
    },
    {
      key: "theatre-cooper-turning-inner-box",
      question:
        "What impossible feat did Tommy Cooper appear to perform with his head inside a special box?",
      answer: "Turning his head through a full circle, thanks to a rotating inner box.",
      source: {
        title:
          "Victoria and Albert Museum - Five Spooky Tricks and Treats from the Theatre and Performance Collections",
        url: "https://www.vam.ac.uk/blog/news/five-spooky-tricks-and-treats-from-the-va-theatre-and-performance-collections",
        note: "The V&A describes an outer box and rotating inner box used to create an apparent 360-degree head turn.",
      },
    },
    {
      key: "theatre-swazzle-punch-voice",
      question: "Why does a traditional Punch puppeteer need a swazzle?",
      answer: "To give Mr Punch his distinctive squeaky, reedy voice.",
      source: {
        title: "Victoria and Albert Museum - Happy Birthday Mr Punch!",
        url: "https://www.vam.ac.uk/blog/news/happy-birthday-mr-punch",
        note: "V&A curator Cathy Haill describes Punch's characteristic reedy voice and explicitly calls it swazzle-created.",
      },
    },
  ],
);
