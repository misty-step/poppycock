import { definePack } from "./types";

export const mathematicalOddities = definePack(
  {
    key: "mathematical-oddities",
    title: "Mathematical oddities",
    blurb: "Vanishing dates, unexpected standards, and ingenious ways to make numbers behave.",
    category: "Mathematical oddities",
    sort: 480,
  },
  [
    {
      key: "math-knotted-records",
      question: "How could an Inca official preserve detailed totals without writing a ledger?",
      answer:
        "By recording numbers in knots on colored cords, called quipus, used for inventories, taxes, and censuses.",
      source: {
        title: "Encyclopaedia Britannica — Inca quipu",
        url: "https://kids.britannica.com/students/assembly/view/296783",
        note: "The caption describes cords and knots representing numbers and explicitly identifies taxation, census, and storehouse records as uses. It does not claim that every quipu was exclusively numerical.",
      },
    },
    {
      key: "math-missing-september",
      question:
        "What did Parliament do to Britain’s calendar in September 1752 to bring it into step with Europe?",
      answer:
        "It jumped straight from 2 September to 14 September, deleting eleven date labels without losing any actual time.",
      source: {
        title: "UK Parliament — Calendar (New Style) Act 1750, section 1",
        url: "https://www.legislation.gov.uk/apgb/Geo2/24/23/1991-02-01/data.html",
        note: "The Act orders the natural day following 2 September to be called 14 September, omitting eleven intermediate nominal days. This is a renumbering of dates, not lost elapsed time.",
      },
    },
    {
      key: "math-newcomb-worn-pages",
      question: "What mundane clue led Simon Newcomb towards a statistical discovery in 1881?",
      answer:
        "The early pages of logarithm tables were much more worn: people looked up numbers beginning with 1 unusually often.",
      source: {
        title: "Benford’s law — History",
        url: "https://en.wikipedia.org/wiki/Benford%27s_law",
        note: "The history section says Newcomb noticed in 1881 that the early logarithm-table pages, starting with 1, were much more worn than the others.",
      },
    },
    {
      key: "math-revolutionary-day-names",
      question: "Who or what received its own named day in France’s revolutionary calendar?",
      answer:
        "Seeds, trees, flowers, fruits, animals and tools replaced the saints and Christian festivals.",
      source: {
        title: "Encyclopaedia Britannica — French republican calendar",
        url: "https://www.britannica.com/science/French-republican-calendar",
        note: "The article says each of the 360 regular days was named for a seed, tree, flower, fruit, animal or tool, replacing saints’ days and Christian festivals.",
      },
    },
    {
      key: "math-cistercian-single-symbol",
      question: "What compact way of recording numbers did medieval Cistercian monks devise?",
      answer:
        "Strokes around one stem could combine units, tens, hundreds and thousands, squeezing a four-digit number into a single symbol.",
      source: {
        title: "Cistercian numerals",
        url: "https://en.wikipedia.org/wiki/Cistercian_numerals",
        note: "The article describes numbers from 1 to 9,999 written as a single glyph, with positions around a stave identifying units, tens, hundreds and thousands.",
      },
    },
    {
      key: "math-banach-tarski-balls",
      question:
        "What impossible-sounding feat can be performed on an imaginary solid ball in the Banach–Tarski paradox?",
      answer:
        "Its pieces can be rearranged into two complete balls, each as large as the original; this is mathematics, not a physical cutting trick.",
      source: {
        title: "Wolfram MathWorld — Banach–Tarski Paradox",
        url: "https://mathworld.wolfram.com/Banach-TarskiParadox.html",
        note: "MathWorld describes decomposing a ball into finitely many extremely complicated pieces and using rigid motions to form two balls of the original size.",
      },
    },
    {
      key: "math-hat-never-repeats",
      question:
        "What unusual rule does the tile shape nicknamed ‘the hat’ impose on a floor made entirely from copies of it?",
      answer:
        "It can cover an endless flat floor without gaps, but the overall pattern can never repeat like ordinary wallpaper.",
      source: {
        title: "University of Waterloo — An aperiodic monotile",
        url: "https://cs.uwaterloo.ca/~csk/hat/",
        note: "The researchers’ project page explains that their hat-shaped tile can tile the plane but never periodically, forcing aperiodicity through geometry alone.",
      },
    },
    {
      key: "math-roman-overbar",
      question:
        "How could a Roman scribe multiply a written amount by a thousand without changing any of its numerals?",
      answer: "Draw a bar across the top, using the convention called the vinculum.",
      source: {
        title: "Encyclopaedia Britannica — Numerals and numeral systems: Roman numerals",
        url: "https://www.britannica.com/science/numeral/Numeral-systems",
        note: "The article dates the thousandfold overbar convention to the late Republic. It also records other uses of bars, so the answer identifies this particular convention rather than every inscription.",
      },
    },
    {
      key: "math-gabriels-horn",
      question:
        "What impossible-sounding mismatch appears in the mathematical object called Gabriel’s horn?",
      answer:
        "It encloses a finite volume but has an infinite surface area; it is a mathematical shape, not a buildable instrument.",
      source: {
        title: "Gabriel’s horn",
        url: "https://en.wikipedia.org/wiki/Gabriel%27s_horn",
        note: "The article defines Gabriel’s horn as a geometric figure with infinite surface area but finite volume, first studied by Torricelli.",
      },
    },
    {
      key: "math-caesars-long-year",
      question:
        "What drastic adjustment preceded the introduction of Julius Caesar's new calendar?",
      answer:
        "Extra months were inserted, stretching one Roman year to 445 days to bring dates back into step with the seasons.",
      source: {
        title: "Encyclopaedia Britannica — Calendar: The Western calendar and calendar reforms",
        url: "https://www.britannica.com/science/calendar/The-Western-calendar-and-calendar-reforms",
        note: "The Julian-calendar section describes a normal 23-day insertion plus two extra months totaling 67 days, producing the exceptional 445-day reform year.",
      },
    },
    {
      key: "math-hanoi-end-of-world",
      question:
        "What was supposed to happen when the priests finished their task in the Tower of Hanoi legend?",
      answer:
        "The world would end when they finished moving a stack of golden disks between three pegs according to the puzzle’s rules.",
      source: {
        title: "Encyclopaedia Britannica — Tower of Hanoi",
        url: "https://www.britannica.com/topic/Tower-of-Hanoi",
        note: "Britannica recounts the legend of priests moving 64 golden disks between three pegs and says the world will end when they complete the task.",
      },
    },
    {
      key: "math-easters-calculated-moon",
      question:
        "Why might an astronomer and a church calendar disagree about which Sunday should be Easter?",
      answer:
        "The rule uses a calculated full Moon and an equinox fixed at 21 March, not just the actual astronomical events.",
      source: {
        title: "Royal Observatory Greenwich — When is Easter?",
        url: "https://www.rmg.co.uk/stories/time/when-easter",
        note: "The standardisation section distinguishes the artificial March 21 equinox and conventional calculated Moon from the true astronomical events, allowing dates to be computed in advance.",
      },
    },
    {
      key: "math-repeated-lunar-date",
      question:
        "How can a Hindu lunar date appear on two consecutive civil days without a clerical mistake?",
      answer:
        "The date in force at sunrise names the day; a long lunar day, or tithi, can span two sunrises.",
      source: {
        title: "Royal Museums Greenwich — Calendars from around the world, page 21",
        url: "https://www.rmg.co.uk/sites/default/files/Calendars-from-around-the-world.pdf",
        note: "The Hindu-calendar section explains that the tithi at sunrise supplies the civil day's number. A long tithi can span two sunrises, while a short one may fall entirely between them.",
      },
    },
    {
      key: "math-kilogram-cylinder",
      question:
        "Why could damage to a small metal cylinder in a French vault once have threatened the world’s system of weights?",
      answer:
        "The cylinder itself defined the kilogram; it was the final standard against which other kilogram weights were compared.",
      source: {
        title: "Science Museum — Redefining the kilogram",
        url: "https://blog.sciencemuseum.org.uk/redefining-the-kilogram/",
        note: "The curator describes the International Prototype Kilogram, approved in 1889 and held at the BIPM, as a platinum-iridium cylinder. Its replacement definition took effect in May 2019.",
      },
    },
    {
      key: "math-krypton-yardstick",
      question: "What replaced a metal bar as the international reference for the metre in 1960?",
      answer: "A wavelength of light emitted by krypton-86 atoms.",
      source: {
        title: "BIPM — Historical perspective: Unit of length, metre",
        url: "https://www.bipm.org/en/history-si/metre",
        note: "BIPM states that the 1889 platinum-iridium prototype definition was replaced in 1960 by one based on radiation from a particular transition in krypton-86.",
      },
    },
    {
      key: "math-celsius-upside-down",
      question:
        "What would surprise someone using Anders Celsius's original 1742 temperature scale?",
      answer:
        "Water boiled at zero degrees and froze at 100; the scale ran the opposite way from today's Celsius scale.",
      source: {
        title: "Science Museum — Coming Out Of The Cold",
        url: "https://blog.sciencemuseum.org.uk/coming-out-of-the-cold/",
        note: "The museum explains that Celsius assigned zero to boiling and 100 to freezing in 1742 and that the scale was reversed a few years later.",
      },
    },
    {
      key: "math-surveyors-hammer",
      question: "Why might a surveyor take a hammer to the very tool used to measure a field?",
      answer:
        "To reshape stretched or distorted links in a measuring chain until it matched the standard length again.",
      source: {
        title: "Science Museum Group — Gunter type measuring chain",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co52806/gunter-type-measuring-chain",
        note: "The museum describes the 100-link, 66-foot chain and explicitly says links were hammered into the correct shape after comparison with a standard length if they had deformed in use.",
      },
    },
    {
      key: "math-napiers-rods",
      question:
        "How did John Napier’s seventeenth-century method turn difficult multiplication into simple addition?",
      answer:
        "By arranging a set of numbered rods, nicknamed ‘bones’, whose markings reduced the calculation to additions.",
      source: {
        title: "Science Museum Group — Napier's bones or rods",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co60059/napiers-bones-or-rods",
        note: "The catalogue explains that Napier's rods reduced multiplication to simple additions and could also assist with division and square roots.",
      },
    },
    {
      key: "math-amslers-tracing-tool",
      question:
        "What could Jakob Amsler's two-armed instrument determine just by tracing a shape on paper?",
      answer: "The area inside the shape, even if its outline was irregular.",
      source: {
        title: "Science Museum Group — Polar planimeter, Amsler's",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co59825/polar-planimeter-amslers",
        note: "The museum describes automatic measurement of irregular areas on drawings or maps. Amsler's design used two pivoted arms, one anchored by a weight and the other tracing the drawing.",
      },
    },
    {
      key: "math-consuls-hands",
      question: "How did a child operate the arithmetic toy called Consul the Educated Monkey?",
      answer: "Move its feet to two numbers; its hands would point to their product.",
      source: {
        title: "Science Museum Group — Consul the Educated Monkey",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co60979/consul-the-educated-monkey",
        note: "The museum explicitly describes the monkey's feet pointing to two numbers and its hands moving to indicate their product. The device was patented by William Robertson.",
      },
    },
    {
      key: "math-efron-second-choice",
      question:
        "Why can choosing your die first be a disadvantage when playing with Efron’s specially numbered dice?",
      answer:
        "Whichever die you choose, your opponent can pick another that is more likely to beat it; there is no strongest die.",
      source: {
        title: "Intransitive dice — Efron’s dice",
        url: "https://en.wikipedia.org/wiki/Intransitive_dice",
        note: "The Efron section describes four dice in a cycle, each beaten by another with probability two-thirds, rather than a single best die.",
      },
    },
    {
      key: "math-birthday-crowd",
      question:
        "Why are shared birthdays common at surprisingly small parties, even if meeting your own birthday twin is rare?",
      answer:
        "Every guest can match every other guest, not just you; 23 people already create 253 possible pairs to compare.",
      source: {
        title: "Encyclopaedia Britannica — Probability theory: The birthday problem",
        url: "https://www.britannica.com/science/probability-theory/The-birthday-problem",
        note: "The article derives the complement probability for independent, uniformly distributed birthdays and gives about 0.5 for 23 people. Its displayed formula gives approximately 0.5073.",
      },
    },
    {
      key: "math-hilbert-full-hotel",
      question:
        "How can Hilbert’s infinitely large hotel give a new arrival a room when every room is already occupied?",
      answer:
        "Move each guest to the room numbered one higher than their current room; this frees room one without evicting anyone.",
      source: {
        title: "Hilbert’s paradox of the Grand Hotel",
        url: "https://en.wikipedia.org/wiki/Hilbert%27s_paradox_of_the_Grand_Hotel",
        note: "The finite-extra-guests example moves the guest in room n to room n+1, freeing the first room even though the infinite hotel was full.",
      },
    },
    {
      key: "math-atomic-second",
      question:
        "What replaced the Earth's motion as the basis of the internationally defined second in 1967?",
      answer: "A particular transition between energy levels in caesium-133 atoms.",
      source: {
        title: "BIPM — Historical perspective: Unit of time, second",
        url: "https://www.bipm.org/en/history-si/second",
        note: "BIPM traces the second from the mean solar day to the tropical year 1900, then to the caesium-133 ground-state hyperfine transition adopted by the 1967–1968 CGPM.",
      },
    },
    {
      key: "math-childs-large-number",
      question:
        "Who supplied the name 'googol' when Edward Kasner wanted a word for one followed by a hundred zeroes?",
      answer: "His nine-year-old nephew, rather than a committee of mathematicians.",
      source: {
        title: "Encyclopaedia Britannica — Googol, Student Encyclopedia",
        url: "https://kids.britannica.com/students/article/Googol/324865",
        note: "The entry recounts Kasner asking his nine-year-old nephew to invent the name. The card uses the attribution without relying on the disputed dating of the anecdote.",
      },
    },
    {
      key: "math-coastline-changing-length",
      question:
        "How can two careful surveyors get very different lengths for the same coastline without either making a mistake?",
      answer:
        "A shorter measuring stick follows more of the little bends, so it produces a longer coastline; the chosen scale changes the answer.",
      source: {
        title: "Coastline paradox",
        url: "https://en.wikipedia.org/wiki/Coastline_paradox",
        note: "The article explains that measured coastline length depends on measurement scale: shorter ruler segments capture extra detail and increase the total.",
      },
    },
    {
      key: "math-extra-new-year-second",
      question:
        "How do timekeepers occasionally compensate when Earth’s rotation falls behind atomic clocks?",
      answer: "They insert a leap second, making one clock minute last 61 seconds instead of 60.",
      source: {
        title:
          "Royal Observatory Greenwich — Which years are leap years and can you have leap seconds?",
        url: "https://www.rmg.co.uk/stories/time/which-years-are-leap-years-can-you-have-leap-seconds",
        note: "The leap-seconds section explicitly records the insertion on 31 December 2005 and explains that the Earth's rotation rate varies while atomic clocks are much steadier.",
      },
    },
    {
      key: "math-barleycorn-inch",
      question:
        "What small objects appeared in an English definition of the inch during Edward II's reign?",
      answer: "Three dry, round barley grains placed end to end lengthwise.",
      source: {
        title: "Encyclopaedia Britannica — Inch",
        url: "https://www.britannica.com/science/inch",
        note: "The article quotes the early-fourteenth-century definition as three grains of barley, dry and round, placed end to end lengthwise. This was a historical description, not today's standard.",
      },
    },
    {
      key: "math-mobius-cut",
      question:
        "What happens if you cut a paper loop with one half-twist all the way around its center line?",
      answer:
        "It stays in one piece, becoming a single longer loop with two twists instead of two separate loops.",
      source: {
        title: "Encyclopaedia Britannica — Mobius strip",
        url: "https://www.britannica.com/science/Mobius-strip",
        note: "The properties section explicitly says that cutting a Möbius strip along its center line produces one large loop with two twists rather than two loops.",
      },
    },
    {
      key: "math-buffons-needles",
      question: "How did Buffon propose to estimate pi using a handful of needles?",
      answer:
        "Drop them repeatedly onto parallel lines and count how often they cross a line, allowing for needle length and line spacing.",
      source: {
        title: "Encyclopaedia Britannica — Monte Carlo method",
        url: "https://www.britannica.com/science/Monte-Carlo-method",
        note: "The historical discussion identifies Buffon's 1777 needle-dropping method for calculating pi as an early example of random sampling. The answer describes an estimate, not an exact experimental value.",
      },
    },
  ],
);
