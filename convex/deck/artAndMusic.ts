import { definePack } from "./types";

export const artAndMusic = definePack(
  {
    key: "art-and-music",
    title: "Art & music",
    blurb: "Musical mechanisms, visual-art processes, pigments and materials.",
    category: "Art & music",
    sort: 100,
  },
  [
    {
      key: "art-theremin-hands",
      question: "How does a theremin player change the pitch and volume without pressing any keys?",
      answer: "By moving their hands near two antennas, without touching them.",
      source: {
        title: "Physics Today — Playing with electromagnetic waves: The science of the theremin",
        url: "https://physicstoday.aip.org/news/playing-with-electromagnetic-waves-the-science-of-the-theremin",
        note: "Original question and factual paraphrase. Silvia Alonso-Pérez's American Institute of Physics Quick Study; no claim that it is the only touch-free instrument. No source prose or media reproduced.",
      },
    },
    {
      key: "art-glass-harmonica",
      question: "How does a player make the rotating glass bowls of Franklin's harmonica sing?",
      answer: "By touching their rims with moistened fingers.",
      source: {
        title: "Science Museum Group — Glass Harmonica",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co5862/glass-harmonica",
        note: "Original question and factual paraphrase. Object 1866-1 description; the bowls rotate using a foot pedal. Not a mouth-blown harmonica. No source prose or media reproduced.",
      },
    },
    {
      key: "art-hurdy-gurdy-wheel",
      question: "What keeps a hurdy-gurdy's strings vibrating while the player works its keyboard?",
      answer: "A hand-cranked wheel rubbing against the strings.",
      source: {
        title: "Smithsonian Music — Hurdy-gurdy",
        url: "https://music.si.edu/object-day/hurdy-gurdy",
        note: "Original question and factual paraphrase. National Museum of American History's Bassot instrument and introductory mechanism explanation. No source prose or media reproduced.",
      },
    },
    {
      key: "art-octobass-controls",
      question:
        "How is the replica 1850 octobass described by the Montreal Symphony operated despite its enormous size?",
      answer: "With a system of levers and pedals.",
      source: {
        title: "Ubisoft Montréal — The OSM triumphs on the Rainbow Six Extraction soundtrack",
        url: "https://montreal.ubisoft.com/en/the-osm-triumphs-on-the-rainbow-six-extraction-soundtrack/",
        note: "Original question and factual paraphrase. Primary recording-project account quoting OSM player Eric Chappell; specifies the original-model replica, not later keyboard-controlled octobasses. No source prose or media reproduced.",
      },
    },
    {
      key: "art-prepared-piano",
      question: "What did John Cage put inside a grand piano to turn it into a 'prepared piano'?",
      answer: "Objects placed beneath and between its strings to change the sound.",
      source: {
        title: "John Cage Trust — John Cage Prepared Piano",
        url: "https://data-johncage.org/cagePiano.html",
        note: "Original question and factual paraphrase. Composer's official Trust explains the technique; no music, notation, recordings, or app assets reproduced. No source prose or media reproduced.",
      },
    },
    {
      key: "art-aeolian-wind",
      question:
        "What plays Douglas Hollis's towering Aeolian Harp outside San Francisco's Exploratorium?",
      answer: "The wind blowing across its stretched strings.",
      source: {
        title: "Exploratorium — Aeolian Harp",
        url: "https://www.exploratorium.edu/exhibits/aeolian-harp",
        note: "Original question and factual paraphrase. Museum's own outdoor exhibit account; does not generalize its dimensions to all Aeolian harps. No source prose or media reproduced.",
      },
    },
    {
      key: "art-serpent-material",
      question:
        "Beneath its leather covering, what is the body of Christopher Monk's traditional-style 'serpent' made of?",
      answer: "Wood.",
      source: {
        title: "Duke University Musical Instrument Collections — Serpent",
        url: "https://sites.duke.edu/dumic/instruments/brass/west-europe/serpent/",
        note: "Original question and factual paraphrase. Physical description of collection E344; asks about the documented instrument, not all modern serpents or disputed invention stories. No source prose or media reproduced.",
      },
    },
    {
      key: "art-smalt-glass",
      question: "What material was ground up to make the old painters' blue pigment called smalt?",
      answer: "Blue glass.",
      source: {
        title: "National Gallery — Smalt",
        url: "https://www.nationalgallery.org.uk/paintings/glossary/smalt",
        note: "Original question and factual paraphrase. Pigment glossary identifies cobalt-coloured glass; not a mined blue gemstone. No source prose or media reproduced.",
      },
    },
    {
      key: "art-tempera-binder",
      question:
        "What familiar food ingredient commonly bound the pigment in early Italian tempera paintings?",
      answer: "Egg yolk.",
      source: {
        title: "National Gallery — Tempera",
        url: "https://www.nationalgallery.org.uk/paintings/glossary/tempera",
        note: "Original question and factual paraphrase. Glossary distinguishes the usual egg-tempera sense from the broader family of tempera media. No source prose or media reproduced.",
      },
    },
    {
      key: "art-metalpoint-lines",
      question:
        "In a traditional metalpoint drawing, what material actually forms the lines left on the prepared paper?",
      answer: "Tiny particles rubbed off a metal-tipped stylus.",
      source: {
        title:
          "National Gallery of Art — Drawing in Silver and Gold: From Leonardo to Jasper Johns",
        url: "https://www.nga.gov/exhibitions/drawing-silver-and-gold-leonardo-jasper-johns",
        note: "Original question and factual paraphrase. Exhibition overview explains abrasion against a prepared ground; no claim that all metals tarnish identically. No source prose or media reproduced.",
      },
    },
    {
      key: "art-ambassadors-skull",
      question:
        "Viewed from the right angle, what does the stretched shape near the men's feet in The Ambassadors become?",
      answer: "A human skull.",
      source: {
        title: "National Gallery — Hans Holbein the Younger, The Ambassadors",
        url: "https://www.nationalgallery.org.uk/paintings/hans-holbein-the-younger-the-ambassadors",
        note: "Original question and factual paraphrase. Collection's overview describes the optical effect; no disputed symbolic interpretation needed. No source prose or media reproduced.",
      },
    },
    {
      key: "art-frottage-floor",
      question: "Why did Max Ernst lay paper on an old wooden floor and rub over it with a pencil?",
      answer: "To capture the wood's texture as the starting point for imagined pictures.",
      source: {
        title: "Tate — Frottage",
        url: "https://www.tate.org.uk/art/art-terms/f/frottage",
        note: "Original question and factual paraphrase. Tate's account of Ernst's 1925 frottage drawings; not a claim that he invented all forms of rubbing. No source prose or media reproduced.",
      },
    },
    {
      key: "art-cyanotype-metals",
      question:
        "Salts of which common metal make traditional cyanotype photographs light-sensitive?",
      answer: "Iron.",
      source: {
        title: "V&A — Photographic processes",
        url: "https://www.vam.ac.uk/articles/photographic-processes",
        note: "Original question and factual paraphrase. Cyanotype section; an account of photographic chemistry, not a chemical-handling recipe. No source prose or media reproduced.",
      },
    },
    {
      key: "art-repousse-reverse",
      question:
        "In repoussé metalwork, from which side is a raised design hammered into the sheet?",
      answer: "From the back of the metal sheet.",
      source: {
        title: "V&A — A guide to metalworking techniques",
        url: "https://www.vam.ac.uk/articles/metalworking-techniques",
        note: "Original question and factual paraphrase. Embossing section distinguishes raising relief from the reverse and sinking lower areas from the front. No source prose or media reproduced.",
      },
    },
    {
      key: "art-pouncing-powder",
      question: "Why would an artist prick holes along a drawing and dust charcoal through them?",
      answer: "To transfer a dotted outline onto the surface underneath.",
      source: {
        title: "National Gallery — Pouncing",
        url: "https://www.nationalgallery.org.uk/paintings/glossary/pouncing",
        note: "Original question and factual paraphrase. Pouncing glossary explains the drawing-transfer method; no copyrighted drawing copied. No source prose or media reproduced.",
      },
    },
    {
      key: "art-mezzotint-polishing",
      question:
        "Why does a mezzotint printmaker scrape and polish selected parts of a roughened metal plate?",
      answer: "Smoother areas hold less ink, making those parts of the print lighter.",
      source: {
        title: "V&A — What is print?",
        url: "https://www.vam.ac.uk/articles/what-is-print",
        note: "Original question and factual paraphrase. Mezzotint section describes working from a plate prepared to print solid black. No source prose or media reproduced.",
      },
    },
    {
      key: "art-lithography-water",
      question: "Why is water applied to the blank areas of a lithographic printing surface?",
      answer: "To keep the greasy printing ink off those areas.",
      source: {
        title: "V&A — What is print?",
        url: "https://www.vam.ac.uk/articles/what-is-print",
        note: "Original question and factual paraphrase. Lithography section explains the separation of water-receptive blank areas and greasy image areas. No source prose or media reproduced.",
      },
    },
    {
      key: "art-print-plate-mark",
      question: "What creates the rectangular indentation often surrounding an old intaglio print?",
      answer: "The edge of its metal printing plate pressed into the paper.",
      source: {
        title: "V&A — What is print?",
        url: "https://www.vam.ac.uk/articles/what-is-print",
        note: "Original question and factual paraphrase. Intaglio printing section identifies the plate-mark; does not claim all prints have one. No source prose or media reproduced.",
      },
    },
  ],
);
