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
      question: "What happened to the date in Britain immediately after 2 September 1752?",
      answer:
        "It became 14 September: eleven calendar dates were skipped, although no actual time disappeared.",
      source: {
        title: "UK Parliament — Calendar (New Style) Act 1750, section 1",
        url: "https://www.legislation.gov.uk/apgb/Geo2/24/23/1991-02-01/data.html",
        note: "The Act orders the natural day following 2 September to be called 14 September, omitting eleven intermediate nominal days. This is a renumbering of dates, not lost elapsed time.",
      },
    },
    {
      key: "math-march-new-year",
      question:
        "Before the reform that took effect in 1752, when did the English legal year begin?",
      answer: "On 25 March, rather than 1 January.",
      source: {
        title: "UK Parliament — Calendar (New Style) Act 1750, preamble and section 1",
        url: "https://www.legislation.gov.uk/apgb/Geo2/24/23/1991-02-01/data.html",
        note: "The preamble identifies 25 March as the English legal year's start and distinguishes Scotland's reckoning. Section 1 makes 1 January the first day of 1752.",
      },
    },
    {
      key: "math-ten-day-weeks",
      question: "What unfamiliar weekly rhythm did France introduce in its 1793 calendar reform?",
      answer: "Ten-day weeks: each 30-day month contained three periods called decades.",
      source: {
        title: "Encyclopaedia Britannica — French republican calendar",
        url: "https://www.britannica.com/science/French-republican-calendar",
        note: "The article gives twelve months divided into three ten-day decades each, plus five or six supplementary days outside those months to complete the year.",
      },
    },
    {
      key: "math-ten-hour-days",
      question: "How did France's revolutionary time reform divide an entire day?",
      answer: "Into ten hours, each containing 100 minutes of 100 seconds apiece.",
      source: {
        title: "Science Museum Group — Decimal watch by Richard Dover Statter and Thomas Statter",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8557930/decimal-watch-by-richard-dover-statter-and-thomas-statter",
        note: "The museum's historical explanation identifies the French system's 10-hour day, 100-minute hour, and 100-second minute. These are decimal units, not modern hours and seconds.",
      },
    },
    {
      key: "math-babylonian-places",
      question:
        "How did moving one place to the left change a digit's value in Babylonian positional notation?",
      answer: "It multiplied the value by sixty rather than ten.",
      source: {
        title: "Encyclopaedia Britannica — Numerals and numeral systems: Numeral systems",
        url: "https://www.britannica.com/science/numeral/Numeral-systems",
        note: "The positional-systems section identifies Babylonian notation as base 60, while explaining that the individual values below 60 used a smaller base-ten grouping system.",
      },
    },
    {
      key: "math-maya-third-place",
      question:
        "What unexpected value did the third position represent in Maya calendrical notation?",
      answer: "360 days, not 400: that position used eighteen twenties instead of twenty twenties.",
      source: {
        title: "Encyclopaedia Britannica — Numerals and numeral systems: Numeral systems",
        url: "https://www.britannica.com/science/numeral/Numeral-systems",
        note: "The Maya discussion specifically gives the third place as multiples of 18 times 20 rather than 20 squared. The card concerns calendrical notation, not every Maya use of numbers.",
      },
    },
    {
      key: "math-roman-overbar",
      question:
        "How could a Roman scribe make a written number a thousand times larger without adding more numerals?",
      answer:
        "Draw a bar above it; under the vinculum convention, an overbar multiplied the number by 1,000.",
      source: {
        title: "Encyclopaedia Britannica — Numerals and numeral systems: Roman numerals",
        url: "https://www.britannica.com/science/numeral/Numeral-systems",
        note: "The article dates the thousandfold overbar convention to the late Republic. It also records other uses of bars, so the answer identifies this particular convention rather than every inscription.",
      },
    },
    {
      key: "math-egyptian-fractions",
      question: "What roundabout form could an ancient Egyptian scribe use to write four-sevenths?",
      answer:
        "One-half plus one-fourteenth, expressing the fraction as a sum of parts with a numerator of one.",
      source: {
        title: "Encyclopaedia Britannica — Mathematics in ancient Egypt",
        url: "https://www.britannica.com/science/mathematics/Mathematics-in-ancient-Egypt",
        note: "The arithmetic section explicitly gives 4/7 as 1/2 plus 1/14 and explains unit-fraction decompositions. It also recognizes exceptions such as 2/3; the card does not claim an absolute rule.",
      },
    },
    {
      key: "math-caesars-long-year",
      question:
        "What drastic adjustment preceded the introduction of Julius Caesar's new calendar?",
      answer:
        "The Roman year corresponding to 46 BCE was stretched to 445 days to bring dates back into step with the seasons.",
      source: {
        title: "Encyclopaedia Britannica — Calendar: The Western calendar and calendar reforms",
        url: "https://www.britannica.com/science/calendar/The-Western-calendar-and-calendar-reforms",
        note: "The Julian-calendar section describes a normal 23-day insertion plus two extra months totaling 67 days, producing the exceptional 445-day reform year.",
      },
    },
    {
      key: "math-chinese-year-cycle",
      question:
        "How long does it take the complete traditional Chinese cycle of year names to repeat?",
      answer: "Sixty years: five rounds of the familiar twelve-animal cycle.",
      source: {
        title: "Royal Museums Greenwich — Calendars from around the world, page 22",
        url: "https://www.rmg.co.uk/sites/default/files/Calendars-from-around-the-world.pdf",
        note: "Alan Longstaff's Chinese-calendar section states that year names recur every sixty years, equivalent to five repetitions of the twelve-animal cycle.",
      },
    },
    {
      key: "math-easters-calculated-moon",
      question: "Why can simply observing the full Moon fail to give the date of Western Easter?",
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
        "What ordinary-looking object in France served as the world's final authority on the kilogram for over a century?",
      answer: "A small cylinder made of 90 percent platinum and 10 percent iridium.",
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
        "What practical task did John Napier's 'bones' make easier in the seventeenth century?",
      answer: "Multiplication: arranging the rods reduced it to a sequence of simple additions.",
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
      question:
        "What did the toy Consul's hands reveal when someone moved its feet to two marked positions?",
      answer: "The product of the two numbers: the metal monkey was a multiplication device.",
      source: {
        title: "Science Museum Group — Consul the Educated Monkey",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co60979/consul-the-educated-monkey",
        note: "The museum explicitly describes the monkey's feet pointing to two numbers and its hands moving to indicate their product. The device was patented by William Robertson.",
      },
    },
    {
      key: "math-curta-cylinder",
      question: "What useful job did the palm-sized cylindrical Curta perform?",
      answer:
        "It was a miniature mechanical calculating machine that could be carried in a pocket.",
      source: {
        title: "Science Museum Group — Curta type II hand calculator by Contina Ltd. Mauren",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co59918/curta-type-ii-hand-calculator-by-contina-ltd-mauren",
        note: "The object is classified as both a Leibniz-type rotary calculating machine and a pocket calculating machine; its cylindrical body measures about 110 by 70 by 70 millimetres.",
      },
    },
    {
      key: "math-birthday-crowd",
      question:
        "In the usual equally likely, 365-day birthday model, how small a group makes a shared birthday more likely than not?",
      answer:
        "Just 23 people; the match can be between any pair, not necessarily with your own birthday.",
      source: {
        title: "Encyclopaedia Britannica — Probability theory: The birthday problem",
        url: "https://www.britannica.com/science/probability-theory/The-birthday-problem",
        note: "The article derives the complement probability for independent, uniformly distributed birthdays and gives about 0.5 for 23 people. Its displayed formula gives approximately 0.5073.",
      },
    },
    {
      key: "math-infinite-evens",
      question:
        "What counterintuitive comparison does set theory make between all positive whole numbers and just the even ones?",
      answer:
        "The two infinite sets have the same size: every positive whole number pairs with its double.",
      source: {
        title: "Encyclopaedia Britannica — Number game: Paradoxes and fallacies",
        url: "https://www.britannica.com/topic/number-game/Paradoxes-and-fallacies",
        note: "The article states that there are as many even natural numbers as even and odd natural numbers together. Pairing n with 2n makes the equal cardinality explicit.",
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
      key: "math-six-and-twenty-eight",
      question:
        "What shared property made 6 and 28 objects of special interest to ancient Greek thinkers?",
      answer:
        "Each equals the sum of its positive divisors other than itself: for example, 6 equals 1 plus 2 plus 3.",
      source: {
        title: "Encyclopaedia Britannica — Perfect number",
        url: "https://www.britannica.com/science/perfect-number",
        note: "The article defines perfect numbers through proper divisors, gives 6 and 28 as the smallest examples, and describes Pythagorean interest in their mystical properties.",
      },
    },
    {
      key: "math-extra-new-year-second",
      question: "What tiny addition was made to civil time at the end of 31 December 2005?",
      answer:
        "An extra second, inserted to keep clock time aligned with the Earth's irregular rotation.",
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
      question:
        "What famous quantity can be estimated by repeatedly dropping needles onto a surface ruled with parallel lines?",
      answer:
        "Pi, by counting how often the needles cross a line and using the needle length and line spacing.",
      source: {
        title: "Encyclopaedia Britannica — Monte Carlo method",
        url: "https://www.britannica.com/science/Monte-Carlo-method",
        note: "The historical discussion identifies Buffon's 1777 needle-dropping method for calculating pi as an early example of random sampling. The answer describes an estimate, not an exact experimental value.",
      },
    },
  ],
);
