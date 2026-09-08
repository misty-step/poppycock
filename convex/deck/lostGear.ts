import { definePack } from "./types";

export const lostGear = definePack(
  {
    key: "lost-gear",
    title: "Lost gear",
    blurb: "Clothes, boats, and tools whose names outlived everyday use.",
    category: "Lost gear",
    sort: 120,
  },
  [
    {
      key: "gear-cresset",
      question: "What was a 'cresset' used for at night?",
      answer: "An open iron basket of burning fuel, carried or set up as a beacon.",
      source: {
        title: "Webster's 1913 — Cresset",
        url: "https://www.websters1913.com/words/Cresset",
        note: "Original question; condensed public-domain sense 1 (beacon basket), not the cooper's small furnace.",
      },
    },
    {
      key: "gear-quintain",
      question: "What was a medieval 'quintain'?",
      answer:
        "A pivoting target for tilting practice, often with a sandbag that could swing back and hit you.",
      source: {
        title: "Webster's 1913 — Quintain",
        url: "https://www.websters1913.com/words/Quintain",
        note: "Original question; paraphrase of the public-domain note describing the crosspiece, board, and sandbag.",
      },
    },
    {
      key: "gear-distaff",
      question: "In hand spinning, what did a 'distaff' hold?",
      answer: "The bunch of flax, tow, or wool from which thread was drawn.",
      source: {
        title: "Webster's 1913 — Distaff",
        url: "https://www.websters1913.com/words/Distaff",
        note: "Original question; public-domain sense 1. The later symbolic sense 'women collectively' is omitted.",
      },
    },
    {
      key: "gear-tumbril",
      question: "In its military sense, what did a 'tumbril' carry?",
      answer: "Tools, cartridges, and similar stores in a two-wheeled cart following the troops.",
      source: {
        title: "Webster's 1913 — Tumbril",
        url: "https://www.websters1913.com/words/Tumbril",
        note: "Original question; public-domain military sense 3, not the cucking-stool or hay-basket senses.",
      },
    },
    {
      key: "gear-claude-glass",
      question:
        "What was the purpose of an 18th-century 'Claude glass' carried by landscape tourists?",
      answer:
        "A tinted, convex pocket mirror that made real scenery reflected in it look like an oil painting.",
      source: {
        title: "Victoria and Albert Museum — Claude Glass",
        url: "https://collections.vam.ac.uk/item/O78676/claude-glass-unknown/",
        note: "Tourists and artists turned their backs to a landscape to view a painterly, Claude Lorrain-style reflection.",
      },
    },
    {
      key: "gear-xebec",
      question: "What kind of ship was a 'xebec'?",
      answer: "A small three-masted Mediterranean trader, once also armed by corsairs.",
      source: {
        title: "Webster's 1913 — Xebec",
        url: "https://www.websters1913.com/words/Xebec",
        note: "Original question; condensed public-domain nautical definition.",
      },
    },
    {
      key: "gear-inkhorn",
      question: "What was an 'inkhorn' before it became an insult for pedantic words?",
      answer: "A small horn bottle or portable case for ink and writing materials.",
      source: {
        title: "Webster's 1913 — Inkhorn",
        url: "https://www.websters1913.com/words/Inkhorn",
        note: "Original question; public-domain noun sense. The obsolete adjective 'pedantic' is mentioned only as later color.",
      },
    },
    {
      key: "gear-scolds-bridle",
      question: "In 16th- and 17th-century Britain, what was a 'scold's bridle' (or 'brank')?",
      answer:
        "An iron mask with a spiked gag locked over the head to silence and humiliate people accused of nagging or quarrelling.",
      source: {
        title: "Science Museum Group Collection — Scold's bridle mask which partially covers face",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co155218/scolds-bridle-mask-which-partially-covers-face",
        note: "A punitive iron cage fitted with an internal tongue plate or spiked gag to enforce silence.",
      },
    },
    {
      key: "gear-caltrop",
      question:
        "In historical warfare, what was the ingenious design of a four-pointed iron 'caltrop'?",
      answer: "Whichever way it lands on the ground, one sharp point always sticks straight up.",
      source: {
        title: "Webster's 1913 — Caltrop",
        url: "https://www.websters1913.com/words/Caltrop",
        note: "Four spikes arranged tetrahedrally so one always points upward to pierce charging horses' hooves.",
      },
    },
    {
      key: "gear-binnacle",
      question: "What did a ship's 'binnacle' hold beside the helmsman?",
      answer: "The compass, with a light so it could be read at night.",
      source: {
        title: "Webster's 1913 — Binnacle",
        url: "https://www.websters1913.com/words/Binnacle",
        note: "Original question; condensed public-domain nautical definition.",
      },
    },
    {
      key: "gear-man-catcher",
      question:
        "In European warfare and policing from the 16th to 18th centuries, what was a 'man catcher'?",
      answer:
        "A long pole with a spring-loaded spiked collar to drag riders from horseback or catch prisoners by the neck.",
      source: {
        title: "Science Museum Group Collection — Man Catcher, Germany, 1601-1800",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co155263/man-catcher-germany-1601-1800",
        note: "A polearm ending in a hinged, spiked collar used to pin or unseat opponents without killing them.",
      },
    },
    {
      key: "gear-farthingale",
      question: "What did a 'farthingale' do to a skirt?",
      answer: "Hoops or other light material that stood the petticoat out from the body.",
      source: {
        title: "Webster's 1913 — Farthingale",
        url: "https://www.websters1913.com/words/Farthingale",
        note: "Original question; condensed public-domain hoop-skirt definition.",
      },
    },
    {
      key: "gear-pomander",
      question: "What was a 'pomander' carried for?",
      answer: "Perfume, often as a ball or in a small box on a chain.",
      source: {
        title: "Webster's 1913 — Pomander",
        url: "https://www.websters1913.com/words/Pomander",
        note: "Original question; public-domain senses (a) and (b). Marked obsolete in the dictionary.",
      },
    },
    {
      key: "gear-chopine",
      question: "What was a 'chopine'?",
      answer:
        "A clog or patten whose sole was built up, sometimes a foot or more, to raise the wearer.",
      source: {
        title: "Webster's 1913 — Chopine",
        url: "https://www.websters1913.com/words/Chopine",
        note: "Original question; condensed public-domain definition. Shakespeare's altitude joke is not required to answer.",
      },
    },
    {
      key: "gear-tappit-hen",
      question: "In 18th-century Scotland, what was a 'tappit hen' in a public house?",
      answer: "A pewter ale flagon with a knob shaped like a crested hen's head on its lid.",
      source: {
        title:
          "National Museums Scotland — The 'tappit hen': A drinking vessel used during the lifetime of Robert Burns",
        url: "https://www.nms.ac.uk/discover-catalogue/a-tappit-hen-a-type-of-drinking-vessel-used-during-the-lifetime-of-robert-burns",
        note: "A durable Scottish tavern vessel named after the distinctive crested (tappit) hen-shaped finial on its lid.",
      },
    },
    {
      key: "gear-betty",
      question: "In 18th-century thieves' cant, what was a 'betty'?",
      answer: "A small iron crowbar used by burglars to pry open doors.",
      source: {
        title: "Webster's 1913 — Betty",
        url: "https://www.websters1913.com/words/Betty",
        note: "Original question; condensed public-domain definition: a short bar used by thieves to wrench doors open.",
      },
    },
    {
      key: "gear-thole",
      question: "On a rowboat, what is a 'thole'?",
      answer: "A pin in the gunwale that the oar works against.",
      source: {
        title: "Webster's 1913 — Thole",
        url: "https://www.websters1913.com/words/Thole",
        note: "Original question; public-domain noun sense 1. The obsolete verb 'to endure' and the scythe-snath pin are omitted.",
      },
    },
    {
      key: "gear-gibbet-cage",
      question: "In historical criminal punishment, what was the purpose of an iron 'gibbet cage'?",
      answer:
        "To hold an executed criminal's corpse suspended in chains at crossroads as a public warning.",
      source: {
        title: "Science Museum Group Collection — Iron Torture Gibbet",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co156089/iron-torture-gibbet",
        note: "An iron armature fitted around a corpse to keep it hanging in chains for months as a deterrent.",
      },
    },
  ],
);
