import { definePack } from "./types";

export const clockworkMarvels = definePack(
  {
    key: "clockwork-marvels",
    title: "Clockwork marvels",
    blurb:
      "Mechanical performers, ingenious timekeepers and machines that made the impossible look alive.",
    category: "Clockwork marvels",
    sort: 320,
  },
  [
    {
      key: "clock-swan-water",
      question:
        "How does the Bowes Museum's Silver Swan create a shimmering pool without using water?",
      answer:
        "Clockwork moves crystal rods beneath the swan, creating the illusion of rippling water.",
      source: {
        title: "The Bowes Museum — The Silver Swan",
        url: "https://thebowesmuseum.org.uk/collections/the-silver-swan/",
        note: "The museum describes 139 crystal rods and three clockwork mechanisms, including one for a shimmering glass pool with swimming silver fish.",
      },
    },
    {
      key: "clock-tipu-sounds",
      question: "What happens when the handle on Tipu Sultan's wooden tiger is turned?",
      answer:
        "A hidden organ imitates a dying man's moans while the figure beneath the tiger raises and lowers an arm.",
      source: {
        title: "Victoria and Albert Museum — Tipu's Tiger",
        url: "https://www.vam.ac.uk/articles/tipus-tiger",
        note: "The V&A describes the almost life-size tiger mauling a European soldier; its hand-operated organ simultaneously moves the man's arm and makes moaning sounds.",
      },
    },
    {
      key: "clock-carpenter-palace",
      question:
        "What entertainment unfolds inside the tiny palace beneath William Carpenter's clock dial?",
      answer: "A masked ball: rows of costumed figures move across a ballroom while music plays.",
      source: {
        title: "Victoria and Albert Museum — Automaton clock by William Carpenter",
        url: "https://collections.vam.ac.uk/item/O78425/automaton-clock-carpenter-william/",
        note: "The circa-1780 clock has a two-storey palace beneath its dial; the upper storey shows a masked ball, with moving rows of figures accompanying the music.",
      },
    },
    {
      key: "clock-cox-energy",
      question:
        "What supplied the energy for James Cox's eighteenth-century clock that supposedly never needed winding?",
      answer:
        "Changes in air pressure moved mercury in a giant barometer, which rewound the clock.",
      source: {
        title: "Victoria and Albert Museum — Longcase clock by James Cox",
        url: "https://collections.vam.ac.uk/item/O297335/longcase-clock-cox-james/",
        note: "The clock was advertised as perpetual motion, but its energy came from atmospheric changes moving mercury between a barometer tube and bowl to raise its driving weight.",
      },
    },
    {
      key: "clock-vitascope-sky",
      question:
        "How did a Vitascope mantel clock make its little ship seem to pass from day into night?",
      answer: "A rotating drum with a lamp and a sheet of dyed gelatine changed the scene's light.",
      source: {
        title: "Victoria and Albert Museum — Vitascope electronic clock",
        url: "https://collections.vam.ac.uk/item/O322018/electronic-clock-vitascope-industries/",
        note: "The V&A specifies a synchronous motor for the hands and automata, plus a separate rotating drum with lamp and dyed gelatine for changing day-and-night light.",
      },
    },
    {
      key: "clock-watson-thames",
      question:
        "Besides celestial information, what practical London event could be read from Samuel Watson's clock of about 1695?",
      answer: "The time of high tide at London Bridge.",
      source: {
        title: "Science Museum Group — Astronomical clock by Samuel Watson",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co938/astronomical-clock-by-samuel-watson",
        note: "The museum lists the clock's astronomical indications and explicitly states that it also shows the time of high tide at London Bridge.",
      },
    },
    {
      key: "clock-dondi-universe",
      question:
        "What was Dondi's elaborate machine, reconstructed for the Science Museum in 1974, intended to model?",
      answer:
        "The universe, with moving dials and a calendar kept in motion by a weight-driven clock.",
      source: {
        title: "Science Museum Group — Reconstruction of Dondi's Astronomical Clock",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8648377/reconstruction-of-dondis-astronomical-clock-1974",
        note: "The catalogue identifies the reconstruction as a working model of the universe whose movements, dials and calendar are driven by a weight-powered clock.",
      },
    },
    {
      key: "clock-rabbit-hiding",
      question:
        "Where did a popular Roullet & Decamps mechanical rabbit of about 1890 disappear after its performance?",
      answer: "Back inside a cabbage, after rising out, chewing a leaf and twitching its ears.",
      source: {
        title: "Science Museum Group — Rabbit in cabbage musical automaton",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8607035/rabbit-in-cabbage-musical-automaton",
        note: "The museum describes this Roullet & Decamps automaton rising from a cabbage, apparently chewing and twitching its ears, then dropping back inside.",
      },
    },
    {
      key: "clock-bontems-timing",
      question: "What timing trick helped Bontems' mechanical songbirds seem less like machines?",
      answer:
        "They could be set to perform at irregular intervals rather than always on a fixed schedule.",
      source: {
        title: "Science Museum Group — Bird in cage automaton",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8607034/bird-in-cage-automaton",
        note: "The Bontems bird of circa 1900–1910 moves its head, beak and tail while singing; the catalogue specifically notes optional irregular intervals for greater lifelikeness.",
      },
    },
    {
      key: "clock-monkey-control",
      question:
        "How could the owner vary the performance of a Parisian mechanical monkey made around 1850?",
      answer:
        "Four keys controlled separate movements, which could be combined instead of following one fixed routine.",
      source: {
        title: "Science Museum Group — Automaton monkey",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8607032/automaton-monkey",
        note: "Unlike a fixed-cycle automaton, this example has four keys on its base; operating its simple mechanisms together produces compound movements.",
      },
    },
    {
      key: "clock-morrison-doll",
      question:
        "What made Enoch Rice Morrison's 1862 doll remarkable when it was placed on a flat surface?",
      answer: "It took steps forward under spring power, rather than simply rolling along.",
      source: {
        title: "Science Museum Group — Autoperipatetikos walking doll",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8607030/autoperipatetikos-walking-doll",
        note: "The museum attributes the 1862 US patent to Morrison and describes a spring mechanism under the skirts that lets the doll take actual steps.",
      },
    },
    {
      key: "clock-smoking-advert",
      question:
        "How did a nineteenth-century London shop-window figure called Jack demonstrate the goods on sale?",
      answer:
        "The artificial head smoked a real cigar or pipe while its eyes moved from side to side.",
      source: {
        title: "Science Museum Group — Jack the Smoking Head",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8607036/jack-the-smoking-head-sales-automaton",
        note: "The catalogue identifies Jack as a cafe or tobacconist's advertisement, with a lit cigar or pipe in its mouth and moving eyes. A saltpetre fuse could keep it lit.",
      },
    },
    {
      key: "clock-prisoner-material",
      question:
        "What did a Napoleonic prisoner of war use to make the elaborate moving figures in a miniature spinning scene?",
      answer: "Carved bone, painted in several colours, formed a scene with nine moving figures.",
      source: {
        title: "Science Museum Group — Spinning Jenny Automaton",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8612486/spinning-jenny-automaton",
        note: "The circa-1800–1815 prisoner-of-war automaton is catalogued as bone and polychrome, with nine figures; the museum states that all the figures on top can move.",
      },
    },
    {
      key: "clock-dent-regulator",
      question:
        "What regulates the motion of E. Dent's clock disguised as a miniature Greek temple?",
      answer:
        "A ball rolls along a zigzag track; reaching the end releases a catch so the track can tilt back.",
      source: {
        title: "Science Museum Group — Rolling ball clock by E. Dent and Co",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8558099/rolling-ball-clock-by-e-dent-and-co",
        note: "The circa-1920 clock follows Congreve's design: a ball travels along a pivoted zigzag plate and releases a catch at each end, controlling the clockwork.",
      },
    },
    {
      key: "clock-tinder-alarm",
      question:
        "What extra service did an eighteenth-century Viennese alarm clock perform when its alarm went off?",
      answer: "It released a tinder-pistol mechanism and lit a candle.",
      source: {
        title: "Science Museum Group — Tinder-pistol combined with alarm clock",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8076803/tinder-pistol-combined-with-alarm-clock-austria",
        note: "The catalogue explains that the alarm releases the flintlock trigger so that a candle is lit; the combined device dates from the eighteenth century.",
      },
    },
    {
      key: "clock-floating-hands",
      question:
        "How did Armand Schwob & Frère make watch hands appear to move without any connection to the mechanism?",
      answer:
        "The hands rode on clear glass discs, driven by gearing hidden behind the dial's border.",
      source: {
        title: "Science Museum Group — Mystery watch by Armand Schwob & Frère",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co8557852/mystery-watch-by-armand-schwob-frere",
        note: "The circa-1900 watch has motion-work hidden by a silver border and clear glass discs carrying the hands, producing the illusion of disconnected hands.",
      },
    },
    {
      key: "clock-monk-devotion",
      question:
        "What devotional gesture could a sixteenth-century clockwork monk perform as it moved around?",
      answer:
        "It beat its breast in contrition, while also moving its lips and raising a crucifix and rosary.",
      source: {
        title: "Science Museum — Robot uprising in the Science Museum",
        url: "https://blog.sciencemuseum.org.uk/robot-uprising-in-the-science-museum/",
        note: "The museum describes an automaton monk of about 1560, lent by the Smithsonian, that walks, moves its lips, raises devotional objects and beats its breast.",
      },
    },
    {
      key: "clock-wooden-blood",
      question:
        "What startling effect was built into a mechanical Crucifixion sculpture made in Brittany around 1700?",
      answer: "It shed drops of wooden blood while the Virgin Mary stretched out her wooden hands.",
      source: {
        title: "Science Museum — Robot uprising in the Science Museum",
        url: "https://blog.sciencemuseum.org.uk/robot-uprising-in-the-science-museum/",
        note: "The museum's exhibition account describes the Breton mechanical Crucifixion as having wept drops of wooden blood while Mary extended her hands.",
      },
    },
    {
      key: "clock-vaucanson-musician",
      question:
        "What musical task did Jacques de Vaucanson build a machine to perform in the 1730s?",
      answer: "Play the flute without a human musician.",
      source: {
        title: "Science Museum — Future Technologies in Music",
        url: "https://blog.sciencemuseum.org.uk/future-technologies-in-music/",
        note: "The museum's history of autonomous music identifies Vaucanson's eighteenth-century Flute Player as an early example of a machine making music.",
      },
    },
    {
      key: "clock-baghdad-organ",
      question:
        "What powered an automatic musical instrument described by the Banu Musa brothers in ninth-century Baghdad?",
      answer: "Water powered their mechanical organ.",
      source: {
        title: "Science Museum — Future Technologies in Music",
        url: "https://blog.sciencemuseum.org.uk/future-technologies-in-music/",
        note: "The article identifies the Banu Musa brothers' ninth-century hydropower organ, described in their Book of Ingenious Devices.",
      },
    },
    {
      key: "clock-lion-hour",
      question: "What did Karl Schmidt's small gilded lion do when the hour struck?",
      answer: "Its eyes and mouth moved.",
      source: {
        title: "Metropolitan Museum of Art — Automaton clock in the form of a lion",
        url: "https://www.metmuseum.org/art/collection/search/196404",
        note: "The Met dates the Augsburg clock to about 1620–1635 and states that the lion's eyes and mouth are set in motion when the clock strikes the hour.",
      },
    },
    {
      key: "clock-diana-forfeit",
      question:
        "What did a guest have to do when Joachim Friess' moving stag stopped in front of them at a feast?",
      answer: "Lift the stag off its base and drink the wine held inside its hollow body.",
      source: {
        title: "Metropolitan Museum of Art — Diana and the Stag",
        url: "https://www.metmuseum.org/art/collection/search/193623",
        note: "The Met explains the circa-1620 automaton's drinking-game role: the stag has a removable head and hollow body, and the selected guest had to empty its wine.",
      },
    },
    {
      key: "clock-madonna-dial",
      question:
        "On Nikolaus Schmidt's Madonna-and-Child timepiece, how did the viewer read the hour?",
      answer: "The Madonna's crown served as the dial, and her sceptre pointed to the hour.",
      source: {
        title: "Metropolitan Museum of Art — Automaton clock in the form of the Madonna and Child",
        url: "https://www.metmuseum.org/art/collection/search/196402",
        note: "The Met's description of the circa-1620–1625 clock explicitly identifies the crown as the clock dial and the sceptre as the hour pointer.",
      },
    },
    {
      key: "clock-eagle-sceptre",
      question:
        "What did the crowned eagle on an Augsburg clock of about 1630 do as the hours sounded?",
      answer: "It moved its sceptre up and down.",
      source: {
        title: "Metropolitan Museum of Art — Automaton clock in the form of an eagle",
        url: "https://www.metmuseum.org/art/collection/search/196403",
        note: "The Met distinguishes hourly movement of the eagle's sceptre from its original quarter-hour beak movement; eye movement is described as uncertain.",
      },
    },
    {
      key: "clock-cox-diamond",
      question:
        "What happened when a diamond button was pressed on James Cox's jeweled chariot of 1766?",
      answer: "A tiny jeweled bird on the seated lady's finger fluttered its wings.",
      source: {
        title: "Metropolitan Museum of Art — Chariot automaton by James Cox",
        url: "https://www.metmuseum.org/art/collection/search/207039",
        note: "The Met quotes the 1766 Gentleman's Magazine description of a diamond-and-ruby bird that flutters when the diamond button below it is touched.",
      },
    },
    {
      key: "clock-rosette-watch",
      question:
        "What unusual display could the owner activate on James Cox's jeweled watch of about 1770?",
      answer: "Eight tiny rosettes spun inside a rotating frame on the dial.",
      source: {
        title: "Metropolitan Museum of Art — Pair-case automaton watch",
        url: "https://www.metmuseum.org/art/collection/search/206705",
        note: "The museum states that activation makes the watch's eight rosettes or stars spin inside the rotating jeweled dial frame.",
      },
    },
    {
      key: "clock-eden-snake",
      question:
        "What moved through the Adam-and-Eve scene on a watch attributed to Charles Clay around 1720?",
      answer: "A silver snake moved around the edge of the enamel picture as the watch ticked.",
      source: {
        title: "Metropolitan Museum of Art — Watch with automaton",
        url: "https://www.metmuseum.org/art/collection/search/187200",
        note: "The Met describes the enamel scene on the back plate and the silver snake moving around its circumference with the ticking of the watch.",
      },
    },
    {
      key: "clock-leonardo-greeting",
      question:
        "What did Leonardo's mechanical lion reportedly release from its chest to greet a French king in 1509?",
      answer: "A shower of golden lilies.",
      source: {
        title: "Metropolitan Museum of Art — Automaton clock in the form of an eagle",
        url: "https://www.metmuseum.org/art/collection/search/196403",
        note: "In its historical introduction, the Met reports that Leonardo's clockwork lion greeted Louis XII in Milan in 1509 by opening its chest to release golden lilies.",
      },
    },
    {
      key: "clock-tabletop-warship",
      question:
        "How did Augsburg's elaborate mechanical warships announce themselves while crossing a banquet table?",
      answer:
        "They fired miniature cannons while tiny trumpeters and kettledrummers played a fanfare.",
      source: {
        title: "Metropolitan Museum of Art — Automaton clock in the form of an eagle",
        url: "https://www.metmuseum.org/art/collection/search/196403",
        note: "The Met describes Renaissance nef automata attributed to Hans Schlottheim that propel themselves across tables, fire cannons and provide musical fanfares.",
      },
    },
    {
      key: "clock-door-winding",
      question:
        "What ordinary action was advertised as winding a regulator in John Joseph Merlin's mechanical museum?",
      answer: "Opening its door wound it up.",
      source: {
        title: "Victoria and Albert Museum — Longcase clock by James Cox",
        url: "https://collections.vam.ac.uk/item/O297335/longcase-clock-cox-james/",
        note: "The V&A's catalogue bibliography quotes Merlin museum catalogues describing a New Invented Regulator that winds itself by the opening of the door.",
      },
    },
  ],
);
