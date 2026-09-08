import { definePack } from "./types";

export const artAndMusic = definePack(
  {
    key: "art-and-music",
    title: "Art & music",
    blurb:
      "Shocking artworks, bizarre musical instruments, eccentric stunts, and curious pigments.",
    category: "Art & music",
    sort: 100,
  },
  [
    {
      key: "art-mummy-brown",
      question:
        "What was the rich brown pigment 'Mummy Brown', favored by European painters, actually made from?",
      answer: "Ground-up ancient Egyptian mummies.",
      source: {
        title: "Smithsonian Magazine — Ground Up Mummies Were Once an Ingredient in Paint",
        url: "https://www.smithsonianmag.com/smart-news/ground-mummies-were-once-ingredient-paint-180950350/",
        note: "Original question and factual summary. Historically compounded from ground Egyptian mummified corpses; commercial manufacturing continued until supplies ran out in the 1960s.",
      },
    },
    {
      key: "art-stalacpipe-organ",
      question:
        "What does the Great Stalacpipe Organ in Luray Caverns use instead of organ pipes to produce sound?",
      answer: "Rubber mallets that gently strike ancient limestone stalactites.",
      source: {
        title: "Atlas Obscura — The Great Stalacpipe Organ in Luray",
        url: "https://www.atlasobscura.com/places/the-great-stalacpipe-organ-luray-virginia",
        note: "Original question and factual summary. Built in 1954 by Leland Sprinkle; rubber solenoid mallets strike tuned stalactites spanning 3.5 acres of the subterranean cavern.",
      },
    },
    {
      key: "art-zadar-sea-organ",
      question:
        "What plays the 230-foot musical organ built into the marble seaside promenade of Zadar, Croatia?",
      answer: "Ocean waves and wind pushing air through underwater pipes.",
      source: {
        title: "Atlas Obscura — Sea Organ in Zadar",
        url: "https://www.atlasobscura.com/places/sea-organ",
        note: "Original question and factual summary. Designed by architect Nikola Bašić in 2005; 35 subterranean tubes set into seaside steps produce organ tones driven by wave motion.",
      },
    },
    {
      key: "art-museum-bad-art",
      question:
        "What is the primary requirement for a painting to be accepted into the Museum of Bad Art?",
      answer: "It must be an earnest, sincere attempt that went catastrophically wrong.",
      source: {
        title: "Smithsonian Magazine — Why Is Some Art So Bad That It’s Good?",
        url: "https://www.smithsonianmag.com/arts-culture/why-is-some-art-so-bad-its-good-180967878/",
        note: "Original question and factual summary. MoBA requires admitted art to stem from genuine artistic ambition rather than deliberate kitsch or parody.",
      },
    },
    {
      key: "art-cattelan-banana",
      question:
        "What was Maurizio Cattelan's viral artwork 'Comedian', which sold for millions at auction, physically made of?",
      answer: "A fresh banana duct-taped to a white wall with grey duct tape.",
      source: {
        title:
          "Smithsonian Magazine — That Viral Banana Duct-Taped to a Wall? It Just Sold for $6.2 Million",
        url: "https://www.smithsonianmag.com/smart-news/that-viral-banana-duct-taped-to-a-wall-it-just-sold-for-6-2-million-180985523/",
        note: "Original question and factual summary. Debuted at Art Basel Miami Beach in 2019; consists of an ordinary banana taped to a wall with duct tape.",
      },
    },
    {
      key: "art-maillardet-automaton",
      question:
        "How did restorers at The Franklin Institute in 1928 discover who built their anonymous, ruined clockwork boy?",
      answer: "The automaton wrote 'Written by the Automaton of Maillardet' on paper.",
      source: {
        title: "The Franklin Institute — Maillardet's Automaton",
        url: "https://fi.edu/en/science-and-education/collection/maillardets-automaton",
        note: "Original question and factual summary. Built around 1800; after repair, its mechanical cam memory drove its pen to draw sketches and write its creator's name.",
      },
    },
    {
      key: "art-yves-klein-void",
      question:
        "What was a buyer required to burn to complete purchasing one of Yves Klein's 'zones of invisible empty space'?",
      answer: "The paper receipt, while Klein threw their gold payment into the Seine.",
      source: {
        title: "Centre Pompidou — Yves Klein, Chèque (1959)",
        url: "https://www.centrepompidou.fr/en/ressources/oeuvre/cMedK9X",
        note: "Original question and factual summary. For Zone de sensibilité picturale immatérielle (1959), buyers paid in gold; the receipt was burned and gold returned to nature.",
      },
    },
    {
      key: "art-russolo-intonarumori",
      question:
        "What sounds did Luigi Russolo's 1913 mechanical Futurist instruments, the 'intonarumori', produce instead of traditional notes?",
      answer: "Industrial and urban noises like howls, roars, hisses, and explosions.",
      source: {
        title:
          "Tate Research — A Transformative Exhibition: Historiography of the Processes of Production",
        url: "https://www.tate.org.uk/research/in-focus/abstract-kinetic-collage-painting-sound/transformative-exhibition",
        note: "Original question and factual summary. In The Art of Noises (1913), Russolo built acoustic noise-machines replicating urban and mechanized industrial soundscapes.",
      },
    },
    {
      key: "art-kastner-pyrophone",
      question:
        "What unusual heat source did Frédéric Kastner's 1873 'Pyrophone' organ use inside its glass pipes to make sound?",
      answer: "Burning gas flames encased in glass tubes.",
      source: {
        title: "Science Museum Group — Kastner's Pyrophone, 1873-1876",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co5867/kastners-pyrophone-1873-1876",
        note: "Original question and factual summary. Patented in 1873 by Frédéric Kastner; known as the 'Fire Organ', using singing gas flames positioned inside glass tubes.",
      },
    },
    {
      key: "art-de-maria-lightning",
      question:
        "What is Walter De Maria's 1977 New Mexico desert installation 'The Lightning Field' physically composed of?",
      answer: "A grid of 400 polished stainless steel poles spaced across a high desert plateau.",
      source: {
        title: "Dia Art Foundation — Walter De Maria, The Lightning Field",
        url: "https://www.diaart.org/visit/visit-our-locations-sites/walter-de-maria-the-lightning-field",
        note: "Original question and factual summary. Land artwork commissioned by Dia Art Foundation; 400 pointed steel poles arranged in a one-mile by one-kilometer grid in western New Mexico.",
      },
    },
    {
      key: "art-hugo-ball-costume",
      question:
        "Why did Dadaist Hugo Ball have to be carried onto the stage to recite his 1916 sound poem Karawane?",
      answer: "His rigid metallic cardboard costume was a stiff cylinder that prevented walking.",
      source: {
        title: "Tate Research — Behold the Buffoon: Dada, Nietzsche's Ecce Homo and the Sublime",
        url: "https://www.tate.org.uk/art/research-publications/the-sublime/christine-battersby-behold-the-buffoon-dada-nietzsches-ecce-homo-and-the-sublime-r1136833",
        note: "Original question and factual summary. Ball performed in a stiff cubist cardboard cylinder costume at Cabaret Voltaire; unable to walk, he was carried on and off stage.",
      },
    },
    {
      key: "art-longplayer-millennium",
      question:
        "How long is Jem Finer's musical composition Longplayer, currently playing at Trinity Buoy Wharf, designed to run without repeating?",
      answer: "Exactly 1,000 years, ending in 2999.",
      source: {
        title: "Artangel — Longplayer",
        url: "https://www.artangel.org.uk/project/longplayer/",
        note: "Original question and factual summary. Began playing at midnight on December 31, 1999 at Trinity Buoy Wharf lighthouse; algorithmic composition for singing bowls lasting 1,000 years.",
      },
    },
    {
      key: "art-singing-ringing-tree",
      question:
        "What plays the 10-foot 'Singing Ringing Tree' sculpture overlooking Burnley in Lancashire?",
      answer: "The wind blowing through stacked steel pipes of varying lengths.",
      source: {
        title: "RIBA — Singing Ringing Tree by Tonkin Liu",
        url: "https://find-an-architect.architecture.com/tonkin-liu/london/singing-ringing-tree",
        note: "Original question and factual summary. Public musical sculpture designed by Tonkin Liu; wind passing through pipes of different lengths sounds chords across the moorland.",
      },
    },
    {
      key: "art-octobass-frequency",
      question:
        "Why are the lowest musical notes produced by the 12-foot Octobass unique to human perception?",
      answer: "They fall below human hearing and are felt as physical vibrations.",
      source: {
        title: "Atlas Obscura — Octobass in Phoenix",
        url: "https://www.atlasobscura.com/places/octobass",
        note: "Original question and factual summary. Invented in 1850 by Jean-Baptiste Vuillaume; its lowest note (16.25 Hz) is infrasonic to most humans and felt rather than heard.",
      },
    },
    {
      key: "art-le-petomane-pujol",
      question:
        "What was the headline stage talent of 1890s Parisian Moulin Rouge star Joseph Pujol (Le Pétomane)?",
      answer: "Playing musical tunes and blowing out candles through controlled flatulence.",
      source: {
        title: "The Guardian — Fart history? Joseph Pujol trumps them all",
        url: "https://www.theguardian.com/culture/2021/aug/20/fart-history-joseph-pujol-trumps-them-all",
        note: "Original question and factual summary. French vaudeville star who performed at the Moulin Rouge using abdominal sphincter control to reproduce melodies, sound effects, and extinguish candles.",
      },
    },
    {
      key: "art-glass-harmonica",
      question: "How does a musician play Benjamin Franklin's 1761 mechanical glass harmonica?",
      answer: "By touching moistened fingertips to a row of rotating glass bowls.",
      source: {
        title: "Science Museum Group — Glass Harmonica",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co5862/glass-harmonica",
        note: "Original question and factual summary. Spindle of tuned glass bowls rotated by a foot pedal; sounds are elicited by pressing dampened fingers against the revolving glass rims.",
      },
    },
    {
      key: "art-hurdy-gurdy-wheel",
      question:
        "What mechanical part continuously bows the strings of a hurdy-gurdy while keys are pressed?",
      answer: "A rosin-coated wooden wheel turned by a hand crank.",
      source: {
        title: "Smithsonian Music — Hurdy-gurdy",
        url: "https://music.si.edu/object-day/hurdy-gurdy",
        note: "Original question and factual summary. Mechanized chordophone where a cranked rosin-treated wooden wheel excites melody and drone strings continuously.",
      },
    },
    {
      key: "art-smalt-glass",
      question:
        "What surprising material was coarsely ground up to create the Renaissance painters' pigment 'smalt'?",
      answer: "Cobalt blue glass.",
      source: {
        title: "National Gallery — Smalt",
        url: "https://www.nationalgallery.org.uk/paintings/glossary/smalt",
        note: "Original question and factual summary. Artists used ground cobalt-colored potash glass; grinding too finely caused the blue intensity to fade into grey.",
      },
    },
  ],
);
