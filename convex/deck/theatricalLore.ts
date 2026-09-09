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
      key: "theatre-wheatley-black-cat",
      question:
        "What creature did actor Alan Wheatley keep in toy form in his dressing room for good luck?",
      answer:
        "A black cat, giving him the lucky mascot without a real animal wandering across the stage.",
      source: {
        title: "Victoria and Albert Museum - Alan Wheatley's lucky mascot",
        url: "https://collections.vam.ac.uk/item/O1663296/",
        note: "The V&A holds Wheatley's toy black cat. Its gallery label contrasts a lucky theatre cat with the bad luck of a cat crossing the stage during a show.",
      },
    },
    {
      key: "theatre-peacock-feather-taboo",
      question:
        "Which extravagant bird's feathers have traditionally been considered unlucky on stage?",
      answer: "Peacock feathers, whose eye-like markings have been associated with the evil eye.",
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
      key: "theatre-tisdale-superhero-pose",
      question:
        "Which comic-book figure supplied a pre-performance pose for Folger actor Sara Dabney Tisdale?",
      answer: "Wonder Woman: she struck the superhero's pose as part of her preparation.",
      source: {
        title:
          "Folger Shakespeare Library - Very Superstitious: Sense and Sensibility's Cast on Theater Rituals",
        url: "https://www.folger.edu/blogs/folger-spotlight/very-superstitious/",
        note: "Folger identifies Tisdale's Wonder Woman pose as an individual warm-up ritual, not a universal theatre custom.",
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
      question: "What actually glowed inside a nineteenth-century limelight spotlight?",
      answer: "A block of calcium oxide, heated to incandescence by an oxygen-and-hydrogen flame.",
      source: {
        title: "Encyclopedia Britannica - Limelight",
        url: "https://www.britannica.com/art/limelight-theater-lighting",
        note: "Britannica describes calcium oxide heated by burning oxygen and hydrogen. The lime itself was heated, not burned as fuel.",
      },
    },
    {
      key: "theatre-periaktoi-three-scenes",
      question: "How did a periaktos let a theatre change its scenery with a turn?",
      answer:
        "It was a rotating triangular prism with a different scene painted on each of its three sides.",
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
      key: "theatre-inigo-tinted-candles",
      question: "How did Inigo Jones produce coloured stage lighting before electric lamps?",
      answer: "He put candles behind tinted glass.",
      source: {
        title: "Victoria and Albert Museum - The story of theatre",
        url: "https://www.vam.ac.uk/articles/the-story-of-theatre",
        note: "The V&A credits Jones with introducing coloured lighting by placing candles behind tinted glass, alongside his perspective scenery.",
      },
    },
    {
      key: "theatre-peter-pan-hidden-corset",
      question:
        "What did performers in the original 1904 Peter Pan wear beneath their costumes to leave the ground?",
      answer:
        "Corset-shaped harnesses with leather straps, attached to flying wires by a hidden catch.",
      source: {
        title: "Victoria and Albert Museum - Peter Pan flying harness",
        url: "https://collections.vam.ac.uk/item/O103031/",
        note: "The V&A's surviving George Kirby harness is corset-shaped and has leather straps and a back attachment for the flying line.",
      },
    },
    {
      key: "theatre-eidophusikon-miniature",
      question: "What was the Eidophusikon that fascinated London audiences in the 1780s?",
      answer:
        "A miniature theatre using painted gauzes, lights and mirrors to stage changing landscapes and spectacular effects.",
      source: {
        title: "Victoria and Albert Museum - The Eidophusikon playbill",
        url: "https://collections.vam.ac.uk/item/O1352712/the-eidophusikon-playbill-boyle-p/",
        note: "The V&A dates de Loutherbourg's first exhibition to 1781 and describes the miniature theatre, materials and scenic effects.",
      },
    },
    {
      key: "theatre-jackknife-pivot",
      question: "What makes a jackknife stage different from an ordinary movable platform?",
      answer:
        "It pivots on and offstage around one fixed corner instead of simply rolling straight in.",
      source: {
        title: "Encyclopedia Britannica - Stagecraft: Stage machinery",
        url: "https://www.britannica.com/art/stagecraft/Stage-machinery",
        note: "Britannica describes a wagon-like platform anchored at one corner, from which it pivots onstage and offstage.",
      },
    },
    {
      key: "theatre-ragged-trap-proposal",
      question:
        "Why did an 1825 letter to Drury Lane's manager recommend abandoning neatly shaped stage openings?",
      answer: "Irregular edges would make trapdoors look like natural chasms opening in the earth.",
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
        "What major change made Nahum Tate's version of King Lear more comforting to audiences?",
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
        "How did medieval English mystery plays take their performances from one street audience to the next?",
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
        "What remarkably repetitive assignment did Farinelli perform for Spain's Philip V for ten years?",
      answer: "He sang the same four songs to the king every night.",
      source: {
        title: "Encyclopedia Britannica - Farinelli",
        url: "https://kids.britannica.com/students/article/Farinelli/322978",
        note: "Britannica states that Farinelli sang the same four songs nightly for ten years to Philip V, whose melancholia his singing alleviated.",
      },
    },
    {
      key: "theatre-da-capo-invention",
      question:
        "What was a singer expected to change when the opening section returned in a da capo aria?",
      answer: "Add improvised vocal embellishments rather than repeat it exactly as before.",
      source: {
        title: "Encyclopedia Britannica - Opera seria",
        url: "https://www.britannica.com/art/opera-seria",
        note: "Britannica describes the ABA form and explicitly says the returning first section had improvised embellishments.",
      },
    },
    {
      key: "theatre-beggars-borrowed-tunes",
      question: "What shortcut supplied the familiar music for John Gay's The Beggar's Opera?",
      answer: "Existing popular songs were recycled with new, humorous and satirical lyrics.",
      source: {
        title: "Victoria and Albert Museum - The story of theatre",
        url: "https://www.vam.ac.uk/articles/the-story-of-theatre",
        note: "The V&A describes Gay taking popular songs of the day and writing new satirical lyrics for his ballad opera.",
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
      key: "theatre-pantomime-principal-boy",
      question: "Who traditionally played the romantic young male lead in British pantomime?",
      answer: "A woman, in the role known as the principal boy.",
      source: {
        title: "Victoria and Albert Museum - Aladdin, 1962 poster",
        url: "https://collections.vam.ac.uk/item/O1170831/",
        note: "The V&A poster record states that female principal boys are traditional, while noting that Adam Faith took the role in the specific 1962 production.",
      },
    },
    {
      key: "theatre-bunraku-missing-legs",
      question: "What body parts do traditional female Bunraku puppets lack?",
      answer:
        "Legs and feet; the long kimono hides that area, so a puppeteer moves the garment instead.",
      source: {
        title: "Encyclopedia Britannica - Bunraku",
        url: "https://www.britannica.com/art/Bunraku",
        note: "Britannica states that female dolls lack legs and feet because traditional clothing concealed them; the assistant manipulates the kimono.",
      },
    },
    {
      key: "theatre-baroque-preserved-voices",
      question:
        "What drastic childhood intervention preserved the high voices of many male Baroque opera stars?",
      answer: "Castration before puberty, producing the singers known as castrati.",
      source: {
        title: "Encyclopedia Britannica - Castrato",
        url: "https://www.britannica.com/art/castrato",
        note: "Britannica defines the castrato voice as resulting from castration before puberty and places its prominence in the Baroque era.",
      },
    },
    {
      key: "theatre-cooper-turning-inner-box",
      question:
        "What was concealed inside the box Tommy Cooper used for his head-twisting illusion?",
      answer:
        "A rotating inner box that helped make his head appear to turn through a full circle.",
      source: {
        title:
          "Victoria and Albert Museum - Five Spooky Tricks and Treats from the Theatre and Performance Collections",
        url: "https://www.vam.ac.uk/blog/news/five-spooky-tricks-and-treats-from-the-va-theatre-and-performance-collections",
        note: "The V&A describes an outer box and rotating inner box used to create an apparent 360-degree head turn.",
      },
    },
    {
      key: "theatre-swazzle-punch-voice",
      question: "What job does a swazzle do in a traditional puppet performance?",
      answer: "It produces Mr Punch's distinctive squeaky, reedy voice.",
      source: {
        title: "Victoria and Albert Museum - Happy Birthday Mr Punch!",
        url: "https://www.vam.ac.uk/blog/news/happy-birthday-mr-punch",
        note: "V&A curator Cathy Haill describes Punch's characteristic reedy voice and explicitly calls it swazzle-created.",
      },
    },
  ],
);
