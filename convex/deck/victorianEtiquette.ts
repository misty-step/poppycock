import { definePack } from "./types";

export const victorianEtiquette = definePack(
  {
    key: "victorian-etiquette",
    title: "Victorian etiquette",
    blurb:
      "The astonishingly particular instructions that nineteenth-century society put into print.",
    category: "Victorian etiquette",
    sort: 350,
  },
  [
    {
      key: "etiquette-beadle-watch",
      question:
        "What ordinary action during a social visit did Beadle's 1859 guide specifically warn against?",
      answer: "Asking the time or taking out your watch.",
      source: {
        title: "Project Gutenberg — Beadle's Dime Book of Practical Etiquette (1859), p. 16",
        url: "https://www.gutenberg.org/files/45591/45591-h/45591-h.htm#Page_16",
        note: "The visiting rules say: 'Beware of asking the hour, or of taking out your watch during a visit.' This is the manual's prescription, not a claim about every Victorian household.",
      },
    },
    {
      key: "etiquette-beadle-armchair",
      question:
        "What apparently harmless comfort was a young man told to avoid in Beadle's drawing-room rules?",
      answer: "Sitting in an armchair: those seats belonged to the ladies and older gentlemen.",
      source: {
        title: "Project Gutenberg — Beadle's Dime Book of Practical Etiquette (1859), p. 16",
        url: "https://www.gutenberg.org/files/45591/45591-h/45591-h.htm#Page_16",
        note: "A young man should avoid an armchair, which should be awarded to ladies or old gentlemen; the fireside seat likewise goes to superiors in age or position.",
      },
    },
    {
      key: "etiquette-beadle-hat-brushing",
      question:
        "What tiny act of tidying yourself earned the charge of 'extreme vulgarity' in Beadle's 1859 guide?",
      answer: "Brushing your hat with your hand.",
      source: {
        title: "Project Gutenberg — Beadle's Dime Book of Practical Etiquette (1859), p. 17",
        url: "https://www.gutenberg.org/files/45591/45591-h/45591-h.htm#Page_17",
        note: "Among visiting rules: 'To brush your hat with your hand will expose you to the charge of extreme vulgarity.'",
      },
    },
    {
      key: "etiquette-beadle-visible-cards",
      question: "How could an entirely honest card player still offend Beadle's 1859 guide?",
      answer: "By trying to hide their cards from spectators who wanted to watch the game.",
      source: {
        title: "Project Gutenberg — Beadle's Dime Book of Practical Etiquette (1859), p. 39",
        url: "https://www.gutenberg.org/files/45591/45591-h/45591-h.htm#Page_39",
        note: "The text calls efforts to conceal one's hand ill-bred specifically because spectators may enjoy watching. It does not tell players to reveal cards to opponents.",
      },
    },
    {
      key: "etiquette-beadle-quiet-exit",
      question:
        "What familiar courtesy did Beadle say guests could skip when leaving an evening party?",
      answer: "Finding the host to say goodbye; they should slip away without disturbing anyone.",
      source: {
        title: "Project Gutenberg — Beadle's Dime Book of Practical Etiquette (1859), p. 38",
        url: "https://www.gutenberg.org/files/45591/45591-h/45591-h.htm#Page_38",
        note: "The guide says it is unnecessary to seek the master of the house: 'Your farewell will be dispensed with' and departure should not occasion remark.",
      },
    },
    {
      key: "etiquette-routledge-red-wax",
      question:
        "What restriction did Routledge impose on a gentleman's choice of letter-sealing supplies?",
      answer: "His sealing wax should be red; fancy colors were reserved for a lady's desk.",
      source: {
        title: "Project Gutenberg — Routledge's Manual of Etiquette, Etiquette for Gentlemen V",
        url: "https://www.gutenberg.org/cache/epub/12426/pg12426.html",
        note: "The gentlemen's correspondence rules prescribe red sealing wax and white paper, calling colored wax and fancy paper admissible only for ladies.",
      },
    },
    {
      key: "etiquette-routledge-open-letter",
      question:
        "Why did Routledge require an introduction letter to be handed over in an unusual condition?",
      answer:
        "It had to be unsealed, so its bearer could read it and know the writer had acted in good faith.",
      source: {
        title: "Project Gutenberg — Routledge's Manual of Etiquette, Letters of Introduction",
        url: "https://www.gutenberg.org/cache/epub/12426/pg12426.html",
        note: "The manual explicitly says an introduction letter should be unsealed both to let the friend read its contents and as a guarantee of good faith.",
      },
    },
    {
      key: "etiquette-hartley-mourning-guest",
      question:
        "What did Florence Hartley expect a hostess to give up while accommodating a guest in mourning?",
      answer:
        "Invitations to parties and public amusements, even though the hostess herself was not bereaved.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter VII",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_VII",
        note: "Hartley instructs the hostess to decline invitations to parties or places of amusement while her mourning guest is staying, as an expression of sympathy.",
      },
    },
    {
      key: "etiquette-discarded-crape",
      question:
        "Why might a Victorian widow get rid of perfectly reusable black fabric when her mourning ended?",
      answer: "Keeping mourning crape in the house afterward was thought unlucky.",
      source: {
        title: "Victoria and Albert Museum — Black Crêpe Mourning Shawl",
        url: "https://collections.vam.ac.uk/item/O1463595/black-crepe-mourning/",
        note: "The V&A attributes the rarity of surviving mourning crape both to its fragility and to the contemporary belief that keeping it after mourning was unlucky.",
      },
    },
    {
      key: "etiquette-mourning-first-year",
      question:
        "Under the widow's first-year mourning convention described by the V&A, what had to disappear besides colorful clothes?",
      answer:
        "Jewellery and decorative trimmings: full mourning called for unembellished, matte-black garments.",
      source: {
        title: "Victoria and Albert Museum — Black Crêpe Mourning Shawl",
        url: "https://collections.vam.ac.uk/item/O1463595/black-crepe-mourning/",
        note: "The V&A describes a year of full mourning without embellishment or jewellery, after which a widow could introduce trimmings and simple jewellery. Other manuals varied.",
      },
    },
    {
      key: "etiquette-hartley-veil-transition",
      question:
        "What change to a woman's face covering marked the first easing of mourning in Hartley's 1860 guide?",
      answer: "The heavy crape veil gave way to a veil of plain black net.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter II",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_II",
        note: "Hartley prescribes a deep crape veil over face and bonnet in deep mourning, then plain black net in the next degree. She explicitly declines to prescribe universal durations.",
      },
    },
    {
      key: "etiquette-half-mourning-colors",
      question:
        "What cautious return to color could signal that a Victorian widow had entered 'half-mourning'?",
      answer: "Grey and subtle shades of purple could reappear in her clothes.",
      source: {
        title: "Victoria and Albert Museum — Black Crêpe Mourning Shawl",
        url: "https://collections.vam.ac.uk/item/O1463595/black-crepe-mourning/",
        note: "The V&A's account of Victorian mourning dress says that a widow in half-mourning could introduce grey and subtle purple shades.",
      },
    },
    {
      key: "etiquette-hartley-pocket-pincushion",
      question:
        "Why did Hartley's 1860 guide recommend bringing a tiny pincushion to a dinner party?",
      answer: "To pin your napkin to your belt so it would not slide off a silk or satin dress.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter XII",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_XII",
        note: "Hartley advises carrying a small pincushion and discreetly pinning the unfolded napkin at the belt, rather than risking it slipping from a smooth dress.",
      },
    },
    {
      key: "etiquette-hartley-clean-plate",
      question:
        "What might a conscientious diner do that Hartley's 1860 guide specifically forbade?",
      answer: "Eat every last morsel on the plate.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter XII",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_XII",
        note: "The dinner-guest chapter says, 'Never eat every morsel that is upon your plate,' and separately condemns scraping the plate or wiping it with bread.",
      },
    },
    {
      key: "etiquette-hartley-vegetable-limit",
      question:
        "What peculiar ceiling did Hartley place on the variety a lady could accept at dinner?",
      answer: "No more than two vegetables.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter XII",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_XII",
        note: "After calling it ill-bred to accept everything offered, Hartley writes: 'Never take more than two vegetables.' This refers to vegetable dishes, not two individual vegetables.",
      },
    },
    {
      key: "etiquette-hartley-wine-acknowledgement",
      question:
        "How could a lady acknowledge an invitation to take wine without actually drinking, according to Hartley?",
      answer: "Bow, raise the glass to her lips, then set it down again.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter XII",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_XII",
        note: "Hartley explicitly permits declining wine; alternatively, touching the glass to the lips acknowledges the courtesy while avoiding actual consumption.",
      },
    },
    {
      key: "etiquette-hartley-fruit-surprise",
      question:
        "What was Hartley's prescribed response to discovering a worm in your fruit at someone else's dinner?",
      answer:
        "Quietly hand the plate to a servant and ask for a clean one, concealing the discovery from the other guests.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter XII",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_XII",
        note: "For a worm in a nut or fruit, the text advises replacing the plate without remark and preventing others from noticing either the movement or its cause if possible.",
      },
    },
    {
      key: "etiquette-routledge-pretend-eating",
      question: "What did Routledge tell dinner guests to do if their food arrived too hot to eat?",
      answer: "Pick up knife and fork and appear to begin eating anyway.",
      source: {
        title: "Project Gutenberg — Routledge's Manual of Etiquette, The Dinner-table",
        url: "https://www.gutenberg.org/cache/epub/12426/pg12426.html",
        note: "Routledge says to begin when served, or if the food is too hot, 'take up your knife and fork and appear to begin'; waiting for others is called old-fashioned and ill-bred.",
      },
    },
    {
      key: "etiquette-beadle-fork-position",
      question:
        "What seemingly trivial position for an idle utensil was forbidden by Beadle's dinner rules?",
      answer: "Laying a fork on its back.",
      source: {
        title: "Project Gutenberg — Beadle's Dime Book of Practical Etiquette (1859), p. 42",
        url: "https://www.gutenberg.org/files/45591/45591-h/45591-h.htm#Page_42",
        note: "The dinner-party section states without qualification or explanation: 'The fork is never to be laid on its back.'",
      },
    },
    {
      key: "etiquette-routledge-ice-suspicion",
      question:
        "Why did Routledge condemn a host for putting ice directly into guests' wine glasses?",
      answer:
        "It looked like a money-saving trick to dilute the wine; the bottle should be chilled from outside instead.",
      source: {
        title: "Project Gutenberg — Routledge's Manual of Etiquette, The Dinner-table",
        url: "https://www.gutenberg.org/cache/epub/12426/pg12426.html",
        note: "The manual says melting ice weakens wine and that placing it in glasses 'savours too much of economy' when the bottle could instead be cooled externally.",
      },
    },
    {
      key: "etiquette-routledge-spare-gloves",
      question:
        "What backup item did Routledge recommend to a particularly fastidious woman planning to dance all evening?",
      answer: "A second pair of gloves to replace the first pair when soiled.",
      source: {
        title: "Project Gutenberg — Routledge's Manual of Etiquette, The Ball-room",
        url: "https://www.gutenberg.org/cache/epub/12426/pg12426.html",
        note: "The manual forbids being seen gloveless in a ballroom even briefly and notes that women who dance much take a second pair to replace soiled gloves.",
      },
    },
    {
      key: "etiquette-routledge-expiring-introduction",
      question:
        "Why could a woman politely ignore yesterday's dance partner when passing him in the park?",
      answer: "A ballroom introduction did not establish a lasting acquaintance.",
      source: {
        title: "Project Gutenberg — Routledge's Manual of Etiquette, The Ball-room",
        url: "https://www.gutenberg.org/cache/epub/12426/pg12426.html",
        note: "Routledge says a ballroom introduction does not constitute acquaintanceship, explicitly permitting a lady to pass the gentleman in the park next day without recognition.",
      },
    },
    {
      key: "etiquette-hartley-double-booking",
      question:
        "In Hartley's 1860 guide, how should a woman repair accidentally promising the same whole dance to two men?",
      answer: "Sit out that dance altogether rather than choose one and offend the other.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter XIX",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_XIX",
        note: "Hartley advises declining the dance altogether when a prior engagement was forgotten and the same dance promised to two gentlemen.",
      },
    },
    {
      key: "etiquette-hartley-shared-waltz",
      question:
        "What surprising arrangement could a woman openly make for a polka or waltz in Hartley's ballroom guide?",
      answer: "Book one man for the first half and a different man for the second half.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter XIX",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_XIX",
        note: "Unlike double-booking a quadrille, dividing a polka or valse is permitted if the arrangement is explicit; the first partner returns her to her seat for the second to find her.",
      },
    },
    {
      key: "etiquette-hartley-supper-escort",
      question:
        "What did Hartley forbid a woman from doing twice with the same gentleman at a ball, even if he offered?",
      answer: "Going into the supper room with him.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter XIX",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_XIX",
        note: "The manual permits repeated trips for an ice or water but says never to tax the same gentleman more than once, even if he invites her after each dance.",
      },
    },
    {
      key: "etiquette-hartley-too-perfect-dancing",
      question:
        "What display of painstaking skill did Hartley say would actually look absurd at a ball?",
      answer:
        "Performing every step with dancing-school accuracy instead of moving naturally like the other guests.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter XIX",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_XIX",
        note: "Hartley says 'Dance as others do' and calls taking every step with dancing-school accuracy absurd, while separately requiring knowledge of the figures.",
      },
    },
    {
      key: "etiquette-hartley-feather-distinction",
      question:
        "What ballroom hair decoration did Hartley allow a married woman but deny an unmarried one?",
      answer:
        "Feathers; an unmarried woman's hair should be decorated with flowers or ribbons instead.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter XIX",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_XIX",
        note: "The costume section permits feathers in a married lady's coiffure, but tells the young lady to wear flowers or ribbons, 'never feathers.'",
      },
    },
    {
      key: "etiquette-routledge-gift-witnesses",
      question:
        "How could a young woman make accepting a persistent admirer's small gift respectable before a proposal?",
      answer:
        "Thank him in front of her parents and say she would accept only if they did not object.",
      source: {
        title:
          "Project Gutenberg — Routledge's Manual of Etiquette, Etiquette of Courtship, Presents",
        url: "https://www.gutenberg.org/cache/epub/12426/pg12426.html",
        note: "After discouraging pre-proposal gifts, Routledge provides an exception for a small trinket: publicly thank the admirer before a parent and make acceptance conditional on parental consent.",
      },
    },
    {
      key: "etiquette-routledge-rejected-letter",
      question:
        "What should ordinarily happen to a written marriage proposal that a woman wished to reject, according to Routledge?",
      answer: "She should answer it, not return the original letter to the suitor.",
      source: {
        title: "Project Gutenberg — Routledge's Manual of Etiquette, Refusal by the Young Lady",
        url: "https://www.gutenberg.org/cache/epub/12426/pg12426.html",
        note: "A proposal letter 'must be answered, and certainly not returned' upon refusal, except where a prior repulse or other circumstances make it presumptuous and intrusive.",
      },
    },
    {
      key: "etiquette-hartley-chaperone-exemption",
      question:
        "Which non-relative could take a young woman to public amusements without a chaperone under Hartley's 1860 rules?",
      answer: "Her fiancé.",
      source: {
        title:
          "Project Gutenberg — Florence Hartley, The Ladies' Book of Etiquette (1860), Chapter XX",
        url: "https://www.gutenberg.org/files/35123/35123-h/35123-h.htm#CHPTR_XX",
        note: "Hartley allows a young lady to go with a relative or her intended spouse without a chaperone, 'but not otherwise.' This exemption is specific to that manual.",
      },
    },
  ],
);
