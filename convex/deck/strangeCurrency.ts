import { definePack } from "./types";

export const strangeCurrency = definePack(
  {
    key: "strange-currency",
    title: "Strange currency",
    blurb:
      "Improbable payments, emergency substitutes, and fortunes that became absurdly hard to carry.",
    category: "Strange currency",
    sort: 400,
  },
  [
    {
      key: "currency-sunken-rai",
      question:
        "In William Henry Furness’s account of Yap, where was a wealthy family’s enormous rai kept?",
      answer:
        "At the bottom of the sea; the community still recognized the sunken stone as the family’s wealth.",
      source: {
        title:
          "Hoover Institution, Stanford University — Milton Friedman, The Island of Stone Money",
        url: "https://miltonfriedman.hoover.org/internal/media/dispatcher/215061/full",
        note: "Friedman quotes Furness’s 1910 account of a stone lost from a raft. Witness testimony preserved its recognized ownership and purchasing power; this is a reported historical account.",
      },
    },
    {
      key: "currency-tea-brick",
      question:
        "What could a Siberian trader in the 1800s spend intact or break up to brew at home?",
      answer: "A brick of compressed tea leaves, accepted as money as well as used for making tea.",
      source: {
        title: "Smithsonian National Numismatic Collection — Forms of Money",
        url: "https://americanhistory.si.edu/explore/exhibitions/value-money/online/origins-money/forms-money",
        note: "The Nonmetallic Money section identifies a Siberian brick of tea dated to the eighteenth–nineteenth centuries among commodities used to represent value and make payments.",
      },
    },
    {
      key: "currency-pismo-clam",
      question:
        "What did Pismo Beach briefly put into circulation during the Great Depression instead of ordinary dollar bills?",
      answer: "Clam shells with a monetary value written on them.",
      source: {
        title: "Smithsonian National Numismatic Collection — Forms of Money",
        url: "https://americanhistory.si.edu/explore/exhibitions/value-money/online/origins-money/forms-money",
        note: "The Seashell Money section identifies a one-dollar clam shell from the United States, 1933, and states that it briefly functioned as money in Pismo Beach.",
      },
    },
    {
      key: "currency-chinese-spade",
      question: "What shape did Chinese metalworkers give some of their earliest bronze money?",
      answer: "A spade: the coins were miniature versions of farming tools.",
      source: {
        title: "Smithsonian National Numismatic Collection — Forms of Money",
        url: "https://americanhistory.si.edu/explore/exhibitions/value-money/online/origins-money/forms-money",
        note: "The Origins of Coins section describes early Chinese coins shaped like farming tools and illustrates a hollow-handle bronze spade dated to the fifth–fourth centuries BCE.",
      },
    },
    {
      key: "currency-canadian-hairdo",
      question:
        "Why did the Bank of Canada have the Queen's hair retouched on its 1954 banknote series?",
      answer: "People thought they could see the Devil's face in her curls.",
      source: {
        title: "Bank of Canada Museum — The Devil is in the Hairdo",
        url: "https://www.bankofcanadamuseum.ca/2018/10/devil-hairdo/",
        note: "Reports of a devil-like face in the Queen's hair prompted engraver Yves Baril to darken highlights. The museum rejects deliberate sabotage and traces the shapes to the original photograph.",
      },
    },
    {
      key: "currency-kissi-rod",
      question: "Why might someone take a damaged Kissi penny to a blacksmith rather than a bank?",
      answer:
        "It was an iron rod; a broken one could not circulate as money until a blacksmith repaired it.",
      source: {
        title: "Allen Memorial Art Museum, Oberlin College — Kissi Penny",
        url: "https://allenartcollection.oberlin.edu/objects/12401/kissi-penny",
        note: "The museum describes long iron wires used as currency in Sierra Leone, Liberia and Guinea, and states: 'If a penny was broken, it could not circulate until repaired by a blacksmith.'",
      },
    },
    {
      key: "currency-tin-hat",
      question: "What might an 1864 tin payment from the Malay Peninsula resemble in miniature?",
      answer: "A broad-brimmed hat, with a projecting crown.",
      source: {
        title: "Smithsonian National Numismatic Collection — Forms of Money",
        url: "https://americanhistory.si.edu/explore/exhibitions/value-money/online/origins-money/forms-money",
        note: "The Metallic Money section labels and illustrates a ‘Tin Hat’ Coin, Malay Peninsula, 1864; the pictured monetary object has a projecting crown and broad brim.",
      },
    },
    {
      key: "currency-franklin-leaves",
      question:
        "What did Benjamin Franklin's printing firm borrow from nature to frustrate banknote counterfeiters?",
      answer:
        "The intricate veins of real leaves, cast into printing plates to make hard-to-copy patterns.",
      source: {
        title: "Bureau of Engraving and Printing — History",
        url: "https://www.bep.gov/currency/history",
        note: "The 1739 entry describes Franklin's colonial notes bearing 'unique raised impressions of patterns cast from actual leaves' as a counterfeit deterrent.",
      },
    },
    {
      key: "currency-ming-picture",
      question: "What did the central picture on a fourteenth-century Ming treasure note show?",
      answer: "The thousand bronze coins that the paper note represented, strung together.",
      source: {
        title: "Smithsonian National Numismatic Collection — Forms of Money",
        url: "https://americanhistory.si.edu/explore/exhibitions/value-money/online/origins-money/forms-money",
        note: "The Origins of Paper Money section states that this Ming note corresponded to 1,000 bronze coins, pictured strung together in its center.",
      },
    },
    {
      key: "currency-tenino-return",
      question:
        "What Depression-era solution did Tenino, Washington, bring back for relief payments in 2020?",
      answer:
        "Thin slices of wood, printed on the same press used for the town’s Depression-era emergency currency.",
      source: {
        title: "Smithsonian National Numismatic Collection — Messages of Circumstance",
        url: "https://americanhistory.si.edu/explore/exhibitions/value-money/online/messages-money/messages-circumstance",
        note: "The pandemic section describes Tenino’s wooden scrip for local business relief in 2020 and explicitly identifies reuse of the Great Depression printing press.",
      },
    },
    {
      key: "currency-clark-portrait",
      question:
        "What was so provocative about the man on an American five-cent banknote in the 1860s?",
      answer:
        "He was Spencer Clark, the living official in charge of making the currency, rather than a national hero.",
      source: {
        title: "Bureau of Engraving and Printing — History",
        url: "https://www.bep.gov/currency/history",
        note: "The history records public uproar over Clark's portrait on a five-cent note and Congress's subsequent 1866 ban on living people's likenesses on currency. It says how his portrait got there is unclear.",
      },
    },
    {
      key: "currency-bernhard-aging",
      question:
        "What betrayed a nearly perfect Operation Bernhard forgery when a Bank of England clerk checked it in 1943?",
      answer:
        "Its serial number belonged to a genuine banknote that had already been withdrawn and paid.",
      source: {
        title: "Bank of England Museum — Operation Bernhard",
        url: "https://www.bankofengland.co.uk/museum/online-collections/blog/operation-bernhard",
        note: "The museum says a counterfeit arriving through a British bank in Morocco reused the serial number of a note already recorded as paid in the Bank's ledgers. This revealed the forgery.",
      },
    },
    {
      key: "currency-bank-elegance",
      question: "What did an 1834 note from the ‘Bank of Elegance’ really advertise?",
      answer:
        "A barber, promising £50 if he failed to cut a customer’s hair in the height of fashion.",
      source: {
        title: "Bank of England Museum — Counterfeit and imitation notes",
        url: "https://www.bankofengland.co.uk/museum/online-collections/banknotes/counterfeit-and-imitation-notes",
        note: "The 1834 imitation note advertised a barber who promised fifty pounds if he did not cut a lady’s or gentleman’s hair in the first style of fashion.",
      },
    },
    {
      key: "currency-cruikshank-signature",
      question:
        "What kind of official supposedly signed George Cruikshank's satirical banknote of 1819?",
      answer:
        "An executioner: Jack Ketch's name replaced the cashier's in a protest against hanging for forgery.",
      source: {
        title: "Bank of England Museum — Counterfeit and imitation notes",
        url: "https://www.bankofengland.co.uk/museum/online-collections/banknotes/counterfeit-and-imitation-notes",
        note: "The Bank Restriction Note entry identifies Jack Ketch’s substituted signature and explains that the design criticized the harshness of anti-forgery laws.",
      },
    },
    {
      key: "currency-hard-times-insult",
      question: "How did some Americans turn making change into a protest against Andrew Jackson?",
      answer: "They used privately issued coins stamped with mockery of his economic policies.",
      source: {
        title: "Smithsonian National Museum of American History — Money and Debt",
        url: "https://americanhistory.si.edu/explore/exhibitions/american-enterprise/online/merchant-era/money-and-debt",
        note: "The exhibit states that hard-times tokens substituted for scarce regular money and identifies a circa-1834 Scovill token mocking Jackson’s economic policies.",
      },
    },
    {
      key: "currency-red-coil",
      question:
        "What could a Santa Cruz Islands family roll up and use to pay for a canoe or meet marriage obligations?",
      answer: "A long coiled belt covered in tens of thousands of red honeyeater feathers.",
      source: {
        title: "British Museum — Feather money (tevau), Google Arts & Culture",
        url: "https://artsandculture.google.com/asset/feather-money-tevau/VgGlcG0Ke5_w0w",
        note: "The museum describes 50,000–60,000 red feathers in a double coil, backed by pigeon-feather platelets, and use for marriage obligations, pigs and large canoes.",
      },
    },
    {
      key: "currency-porcelain-small-change",
      question: "How did some German makers evade a 1922 ban on producing emergency money?",
      answer:
        "They replaced the coins' value markings with symbols such as oak leaves or rosettes.",
      source: {
        title:
          "Deutsches Historisches Museum — Making money out of natural materials: Porcelain emergency money",
        url: "https://www.dhm.de/journal/en/post/making-money-out-of-natural-materials-porcelain-emergency-money",
        note: "The museum states that the 17 July 1922 ban on all emergency-money production was not always obeyed: value notations were simply replaced with symbols such as oak leaves or rosettes.",
      },
    },
    {
      key: "currency-parliament-fuel",
      question:
        "What obsolete financial records helped set the Houses of Parliament ablaze in 1834?",
      answer: "Wooden tally sticks, burned in such quantities that the heating stoves overheated.",
      source: {
        title: "Encyclopaedia Britannica, 1911 — Tally",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Tally",
        note: "The entry describes stored Exchequer tallies being used as fuel and directly links excessive loading of the stoves to the fire of 16 October 1834.",
      },
    },
    {
      key: "currency-finnish-raha",
      question: "Before it meant money, what did the Finnish word 'raha' mean?",
      answer:
        "A fur skin, especially a squirrel pelt: something that could itself be used in exchange.",
      source: {
        title: "Bank of Finland Museum — The history of money",
        url: "https://www.rahamuseo.fi/en/museum/history-of-money-and-payments/history-of-money/",
        note: "The museum explains Northern European fur exchange and states that raha originally meant the skin of a fur animal, especially a squirrel.",
      },
    },
    {
      key: "currency-bent-rejection",
      question:
        "Why might an English suitor deliberately bend a perfectly good coin before giving it to a woman?",
      answer:
        "To turn it into an unspendable love token; if she sent it back, she was rejecting his advances.",
      source: {
        title: "Bank of Canada Museum — Love tokens: Change of heart",
        url: "https://www.bankofcanadamuseum.ca/2026/02/love-tokens-change-of-heart/",
        note: "The museum describes wave-shaped bent coins given as romantic tokens from medieval England onward. Its 1813 example's caption says returning the bent coin rejected the giver as a prospective mate.",
      },
    },
    {
      key: "currency-sweden-plate",
      question:
        "What made a Swedish eight-daler coin of 1663 more like a piece of furniture than pocket change?",
      answer: "It was a huge stamped copper plate weighing about 31 pounds.",
      source: {
        title: "Smithsonian National Numismatic Collection — 8 Dalers, Sweden, 1663",
        url: "https://americanhistory.si.edu/collections/object/nmah_911467",
        note: "The record identifies copper plate money weighing 31 pounds and explains the relative abundance of copper and scarcity of silver in Sweden.",
      },
    },
    {
      key: "currency-stamp-case",
      question:
        "What did John Gault put inside small brass-and-mica cases in 1862 to help people make purchases?",
      answer:
        "Postage stamps, protected so they could circulate as small change during the Civil War.",
      source: {
        title: "Smithsonian National Postal Museum — Encased Postage Stamps",
        url: "https://postalmuseum.si.edu/exhibition/about-us-stamps-special-use-stamps/encased-postage-stamps",
        note: "The exhibit describes coin hoarding, use of stamps as currency, and Gault’s 12 August 1862 patent for metal cases with transparent mica windows.",
      },
    },
    {
      key: "currency-hundred-thousand",
      question:
        "Why could an American shopper never legitimately spend a Series 1934 $100,000 gold certificate?",
      answer:
        "It was reserved for accounting between Federal Reserve banks, not circulation among the public.",
      source: {
        title:
          "Smithsonian National Numismatic Collection — 100,000 Dollars, Gold Certificate, United States, 1934",
        url: "https://www.si.edu/object/100000-dollars-gold-certificate-united-states-1934%3Anmah_835248",
        note: "The museum identifies the certificate as an inter-Federal-Reserve accounting device, not intended for general use, and states that private ownership is illegal.",
      },
    },
    {
      key: "currency-weimar-playthings",
      question:
        "What did some German parents let their children play with in 1923 that would normally be kept safely away?",
      answer: "Stacks of real banknotes, made nearly worthless by hyperinflation.",
      source: {
        title:
          "Smithsonian National Numismatic Collection — Does having a really big banknote always mean you can buy a lot?",
        url: "https://americanhistory.si.edu/explore/exhibitions/really-big-money/online/really-big-banknote",
        note: "The exhibit states that German notes were worth so little in 1923 that parents let children play with them, alongside a period photograph of stacked notes.",
      },
    },
    {
      key: "currency-hawaii-label",
      question:
        "Why did the United States replace ordinary notes in Hawaii with specially labelled ones during World War II?",
      answer:
        "The specially marked money could be declared worthless if an invading army captured it.",
      source: {
        title: "Bureau of Engraving and Printing — History",
        url: "https://www.bep.gov/currency/history",
        note: "The 1942 Hawaii Overprints entry says specially marked notes replaced ordinary currency and could be declared worthless in the event of enemy occupation.",
      },
    },
    {
      key: "currency-weekly-stamp",
      question:
        "Why could keeping certain American local banknotes until the end of the week cost the holder money in the 1930s?",
      answer:
        "The holder had to buy and attach a new dated stamp before the note could be spent again.",
      source: {
        title: "Federal Reserve Bank of Cleveland — Stamp Scrip: Money People Paid to Use",
        url: "https://www.clevelandfed.org/-/media/project/clevelandfedtenant/clevelandfedsite/publications/economic-commentary/2008/ec-20080401-stamp-scrip-money-people-paid-to-use-pdf.pdf",
        note: "Page 2 distinguishes dated from transaction scrip. Dated notes typically needed a paid stamp each week; whoever held one at week's end had to attach the next stamp before spending it.",
      },
    },
    {
      key: "currency-new-france-cards",
      question:
        "What did Jacques de Meulles improvise to pay troops in New France when coins ran short in 1685?",
      answer:
        "Playing cards, cut to different shapes and signed with their monetary values on the backs.",
      source: {
        title: "Bank of Canada Museum — A Good Deal",
        url: "https://www.bankofcanadamuseum.ca/2018/12/a-good-deal/",
        note: "The museum describes de Meulles issuing ordinary playing cards with plain backs, signatures, assigned values and shapes to distinguish denominations during the coin shortage.",
      },
    },
    {
      key: "currency-holey-dollar",
      question:
        "How did Governor Macquarie turn each imported Spanish dollar into two usable coins?",
      answer:
        "He had the centre punched out, then issued both the ring and the removed disc as separate coins.",
      source: {
        title: "Reserve Bank of Australia Museum — Crisis in the Colony of New South Wales",
        url: "https://museum.rba.gov.au/exhibitions/pocket-guides/currency-crises/crisis-in-the-colony-of-new-south-wales.html",
        note: "The museum describes removing the Spanish dollar's centre and reminting both parts: the ring became a holey dollar and the core a dump, each with its own denomination.",
      },
    },
    {
      key: "currency-gold-coast-miniatures",
      question:
        "What did nineteenth-century Ghanaian traders measure with tiny sculpted crocodiles and other miniature figures?",
      answer: "Gold dust used as money; the little sculptures were weights for the scales.",
      source: {
        title: "Smithsonian National Numismatic Collection — Precious Metals and Paper Money",
        url: "https://americanhistory.si.edu/explore/exhibitions/value-money/online/origins-money/precious-metals-and-paper-money",
        note: "The Weighing Metals section describes sculptural West African weights for gold dust from the fifteenth to late nineteenth centuries and illustrates a crocodile gold weight.",
      },
    },
    {
      key: "currency-white-fiver-back",
      question: "What did British ‘white fivers’ lack that a modern banknote almost always has?",
      answer: "Any printing on the back: their design was printed on one side only.",
      source: {
        title: "Bank of England Museum — Early banknotes",
        url: "https://www.bankofengland.co.uk/museum/online-collections/banknotes/early-banknotes",
        note: "The museum identifies the white-fiver design as single-sided and states that it remained in circulation until 1957.",
      },
    },
  ],
);
