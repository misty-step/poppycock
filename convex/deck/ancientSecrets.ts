import { definePack } from "./types";

export const ancientSecrets = definePack(
  {
    key: "ancient-secrets",
    title: "Ancient secrets",
    blurb:
      "Lost techniques, ingenious machines, long-distance trade, and clues hidden inside ancient objects.",
    category: "Ancient secrets",
    sort: 200,
  },
  [
    {
      key: "ancient-hot-mixed-lime",
      question: "What useful role can the conspicuous white lumps in ancient Roman mortar play?",
      answer:
        "They can supply reactive calcium that helps fill cracks, rather than simply being sloppy mixing.",
      source: {
        title:
          "Science Advances — Hot mixing: Mechanistic insights into the durability of ancient Roman concrete",
        url: "https://www.science.org/doi/10.1126/sciadv.add1602",
        note: "The study identifies hot-mixed lime clasts and proposes them as calcium reservoirs for crack filling; modern mixtures demonstrated self-healing.",
      },
    },
    {
      key: "ancient-seawater-crystals",
      question:
        "What can seawater do inside a Roman harbour wall that would surprise a modern builder?",
      answer: "Trigger reactions that grow strengthening mineral crystals inside the concrete.",
      source: {
        title: "Nature — Rare mineral is the key to long-lasting ancient concrete",
        url: "https://www.nature.com/articles/nature.2017.22231",
        note: "The report attributes the longevity of Roman marine concrete to strengthening reactions with seawater, including growth of aluminium tobermorite.",
      },
    },
    {
      key: "ancient-damascus-nanotubes",
      question:
        "What microscopic structures did a 2006 study report inside a seventeenth-century Damascus sabre?",
      answer: "Carbon nanotubes and cementite nanowires, formed long before modern nanotechnology.",
      source: {
        title: "Nature — Carbon nanotubes in an ancient Damascus sabre",
        url: "https://www.nature.com/articles/444286a",
        note: "The abstract reports both structures in one seventeenth-century sample examined by high-resolution transmission electron microscopy; this does not establish their presence in every Damascus blade.",
      },
    },
    {
      key: "ancient-lycurgus-light",
      question:
        "What happens to the Roman Lycurgus Cup when light shines through it rather than onto it?",
      answer: "Its glass appears red instead of green.",
      source: {
        title: "British Museum — The Lycurgus Cup, collection record",
        url: "https://www.britishmuseum.org/collection/object/H_1958-1202-1",
        note: "The museum identifies the vessel as Roman dichroic glass: green in reflected light and red in transmitted light.",
      },
    },
    {
      key: "ancient-greek-fire-tubes",
      question:
        "How could a Byzantine crew deliver its closely guarded incendiary mixture without throwing a pot?",
      answer: "Project it through tubes mounted on the ship’s prow.",
      source: {
        title: "Encyclopedia Britannica — Greek fire",
        url: "https://www.britannica.com/technology/Greek-fire",
        note: "Britannica describes both thrown pots and discharge from tubes, including tubes mounted on ships’ prows; the exact composition remains unknown.",
      },
    },
    {
      key: "ancient-antikythera-purpose",
      question:
        "What was the bronze device recovered from the Antikythera shipwreck designed to work out?",
      answer: "Astronomical phenomena, using an intricate mechanical system of gears and dials.",
      source: {
        title: "Encyclopedia Britannica — Antikythera mechanism",
        url: "https://www.britannica.com/topic/Antikythera-mechanism",
        note: "Britannica identifies an ancient Greek bronze mechanical device for calculating and displaying astronomical information, with scientific dials and scales.",
      },
    },
    {
      key: "ancient-egyptian-blue-glow",
      question:
        "How can traces of Egyptian blue reveal themselves even when their colour is hard to see?",
      answer:
        "They emit near-infrared light when illuminated, allowing specialised imaging to map the pigment.",
      source: {
        title:
          "Heritage Science — Identification and mapping of ancient pigments in a Roman Egyptian funerary portrait",
        url: "https://www.nature.com/articles/s40494-021-00639-5",
        note: "The study maps Egyptian blue using its diagnostic near-infrared luminescence, including traces mixed into other colours.",
      },
    },
    {
      key: "ancient-maya-pigment",
      question: "What pairing lies behind the unusually durable pigment known as Maya blue?",
      answer: "Indigo dye incorporated into a porous clay, commonly palygorskite.",
      source: {
        title:
          "Heritage Science — Shades of blue: non-invasive spectroscopic investigations of Maya blue pigments",
        url: "https://www.nature.com/articles/s40494-019-0345-z",
        note: "The article identifies Maya blue as a hybrid of organic indigo and porous clay and investigates palygorskite- and sepiolite-based formulations.",
      },
    },
    {
      key: "ancient-qin-chromium",
      question:
        "What did a 2019 study identify as the source of chromium traces on Terracotta Army weapons?",
      answer: "Contamination from nearby lacquer after burial, not an ancient anti-rust coating.",
      source: {
        title: "Scientific Reports — Surface chromium on Terracotta Army bronze weapons",
        url: "https://www.nature.com/articles/s41598-019-40613-7",
        note: "Analysis found chromium correlated with artefact type, not preservation, and demonstrated contamination from lacquer; the authors rejected the protective-coating theory.",
      },
    },
    {
      key: "ancient-tut-dagger",
      question: "Where did the iron in one of Tutankhamun’s daggers originally come from?",
      answer: "A meteorite, rather than iron ore smelted from the ground.",
      source: {
        title:
          "Archaeological Institute of America, Archaeology — Blade of Ancient Egyptian Dagger Analyzed",
        url: "https://archaeology.org/uncategorized/2016/06/01/160601-dagger-iron-blade/",
        note: "X-ray fluorescence identified nickel and cobalt concentrations consistent with meteoritic iron in the dagger blade.",
      },
    },
    {
      key: "ancient-barbegal-crusts",
      question:
        "What let researchers reconstruct Barbegal’s Roman machinery after its wooden parts had vanished?",
      answer:
        "Mineral crusts that had formed on the wood preserved the shapes of the missing water channels.",
      source: {
        title: "Scientific Reports — Reconstructing the hydraulics of the Barbegal watermills",
        url: "https://www.nature.com/articles/s41598-020-74900-5",
        note: "Carbonate incrustations preserved the form of lost woodwork, allowing reconstruction of an unusual elbow-shaped flume at the sixteen-wheel complex.",
      },
    },
    {
      key: "ancient-ishtar-magnetism",
      question: "What invisible record helped researchers date bricks from Babylon’s Ishtar Gate?",
      answer: "The ancient magnetic field preserved in the fired clay.",
      source: {
        title:
          "Archaeological Institute of America, Archaeology — Archaeomagnetism Dates Construction of Babylon’s Ishtar Gate",
        url: "https://archaeology.org/news/2024/01/22/240123-ishtar-gate-archaeomagnetism/",
        note: "Researchers analysed ancient magnetic fields recorded in five fired bricks from the gate to estimate its construction date.",
      },
    },
    {
      key: "ancient-hypocaust",
      question: "What would a Roman householder get from a hypocaust?",
      answer: "Rooms warmed by hot gases passing through a space beneath the floor.",
      source: {
        title: "Encyclopedia Britannica — Hypocaust",
        url: "https://www.britannica.com/technology/hypocaust",
        note: "A furnace supplied hot gases beneath a raised floor; wall flues could extend the heating and carried gases outside.",
      },
    },
    {
      key: "ancient-aeolipile",
      question: "What made the hollow sphere in Heron’s aeolipile move?",
      answer: "Jets of steam escaping from the sphere made it rotate.",
      source: {
        title: "Encyclopedia Britannica — Aeolipile",
        url: "https://www.britannica.com/technology/aeolipile",
        note: "Britannica identifies Heron’s aeolipile as a steam turbine, with a hollow rotating sphere supplied with steam through tubes from a cauldron.",
      },
    },
    {
      key: "ancient-archimedean-helix",
      question: "What practical job did an ancient rotating helix inside an inclined tube perform?",
      answer: "Lift water from a lower level to a higher one.",
      source: {
        title: "Encyclopedia Britannica — Archimedes screw",
        url: "https://www.britannica.com/technology/Archimedes-screw",
        note: "The article describes water rising through an inclined pipe when its helical mechanism rotates; Archimedes’ personal invention is presented as alleged.",
      },
    },
    {
      key: "ancient-zhang-heng-seismoscope",
      question:
        "Around 132 CE, Zhang Heng built a bronze vessel ringed with eight dragon heads, each holding a ball above an open-mouthed frog. What was it for?",
      answer:
        "Registering earthquakes: a tremor dropped one ball into a frog's mouth with a clang, marking the direction it came from.",
      source: {
        title: "Encyclopedia Britannica — Zhang Heng",
        url: "https://www.britannica.com/biography/Zhang-Heng",
        note: "Britannica describes Zhang Heng's seismoscope of about 132 CE: a cylindrical vessel with eight dragon heads each holding a ball, and eight frogs beneath, so an earthquake dropped a ball into a frog's mouth and generated a sound.",
      },
    },
    {
      key: "ancient-uluburun-biscuits",
      question:
        "What were the “metal biscuits with ears” reported by the diver who found the Uluburun wreck?",
      answer: "Copper ingots, part of a Bronze Age cargo containing about ten tons of copper.",
      source: {
        title: "Archaeological Institute of America, Archaeology — In the Time of the Copper Kings",
        url: "https://archaeology.org/issues/january-february-2024/features/in-the-time-of-the-copper-kings/",
        note: "The feature recounts Mehmet Çakir’s description of the discovery and identifies the wreck’s roughly ten-ton copper cargo.",
      },
    },
    {
      key: "ancient-egyptian-faience",
      question:
        "What made up the body of ancient Egyptian faience, despite its pottery-like appearance?",
      answer:
        "A quartz-rich mixture that developed a shiny glaze when fired, rather than ordinary clay pottery.",
      source: {
        title: "British Museum — Glorious glass: worth more than gold?",
        url: "https://www.britishmuseum.org/blog/glorious-glass-worth-more-gold",
        note: "The museum explains Egyptian faience as a paste using powdered quartz and related glassmaking ingredients that develops a glaze during firing.",
      },
    },
    {
      key: "ancient-roman-cameo-glass",
      question:
        "How did Roman craftspeople produce white figures against the dark background of vessels such as the Portland Vase?",
      answer:
        "Cut away an outer layer of white glass, leaving the figures raised above darker glass underneath.",
      source: {
        title: "Encyclopedia Britannica — Cameo glass",
        url: "https://www.britannica.com/art/cameo-glass",
        note: "The article specifically distinguishes Roman manual cutting of opaque white glass over a darker layer from later etching methods.",
      },
    },
    {
      key: "ancient-hadrian-underworld",
      question:
        "What lay beneath Hadrian’s luxurious villa to keep its everyday operations out of sight?",
      answer:
        "An extensive network of service tunnels for moving workers and supplies around the estate.",
      source: {
        title: "Archaeological Institute of America, Archaeology — An Imperial Underworld",
        url: "https://archaeology.org/issues/november-december-2013/digs-discoveries/tunnels-discovered-beneath-hadrians-villa/",
        note: "The feature describes the villa’s subterranean service infrastructure and discovery of an unusually wide tunnel potentially allowing two-way traffic.",
      },
    },
    {
      key: "ancient-cire-perdue",
      question:
        "In the ancient casting method called cire perdue, what happens to the original model?",
      answer: "The wax model is melted out, leaving a cavity for molten metal.",
      source: {
        title: "Encyclopedia Britannica — Lost-wax process",
        url: "https://www.britannica.com/technology/lost-wax-process",
        note: "The entry dates the process to the third millennium BCE and explains how a wax model is melted and drained from its mould.",
      },
    },
    {
      key: "ancient-tyrian-purple",
      question: "What unglamorous raw material supplied the prestigious dye made at ancient Tyre?",
      answer: "A secretion from certain sea snails.",
      source: {
        title: "Encyclopedia Britannica — Murex",
        url: "https://www.britannica.com/animal/murex-mollusk-family",
        note: "Britannica identifies Mediterranean dye murex as a source of royal Tyrian purple and describes the colour-producing secretion.",
      },
    },
    {
      key: "ancient-lapis-route",
      question:
        "Where did the lapis lazuli traded by ancient Assyrian merchants have to travel from?",
      answer: "Mines in what is now Afghanistan.",
      source: {
        title: "British Museum — Trade and contraband in ancient Assyria",
        url: "https://www.britishmuseum.org/blog/trade-and-contraband-ancient-assyria",
        note: "The museum identifies distant Afghanistan as the source of lapis lazuli, a valuable commodity subject to state control.",
      },
    },
    {
      key: "ancient-rolling-signature",
      question:
        "How could a Mesopotamian merchant authenticate a document with a carved stone cylinder?",
      answer: "Roll it across wet clay to leave its distinctive engraved design.",
      source: {
        title: "Encyclopedia Britannica — Cylinder seal",
        url: "https://www.britannica.com/art/cylinder-seal",
        note: "Cylinder seals left impressions when rolled over wet clay; they marked property and made documents legally binding.",
      },
    },
    {
      key: "ancient-clay-mail",
      question: "What protected the messages sent by ancient Assyrian merchants on clay tablets?",
      answer: "An outer envelope of clay, labelled with the sender and recipient.",
      source: {
        title: "British Museum — Trade and contraband in ancient Assyria",
        url: "https://www.britishmuseum.org/blog/trade-and-contraband-ancient-assyria",
        note: "The museum describes dried inscribed tablets wrapped in clay envelopes bearing names; envelopes were normally discarded after opening.",
      },
    },
    {
      key: "ancient-mummy-hairstyles",
      question:
        "What did chemical analysis find holding some ancient Egyptian mummies’ hairstyles in place?",
      answer: "A fat-based styling product, effectively an ancient hair gel.",
      source: {
        title: "Nature — Ancient Egyptians used hair gel",
        url: "https://www.nature.com/articles/news.2011.487",
        note: "The Nature report summarises mummy analysis showing that a fat-based product held hairstyles in place.",
      },
    },
    {
      key: "ancient-silkworm-canes",
      question:
        "According to the traditional account, what did monks conceal in hollow canes for Emperor Justinian?",
      answer: "Silkworm eggs, helping establish silk production in the Byzantine Empire.",
      source: {
        title: "Encyclopedia Britannica — Silk, Student Encyclopedia",
        url: "https://kids.britannica.com/students/article/silk/277065",
        note: "The historical account describes two monks bringing silkworm eggs hidden in hollow canes to Constantinople under Justinian; the prompt attributes the traditional account.",
      },
    },
    {
      key: "ancient-lacquer-curing",
      question:
        "What seemingly unhelpful conditions allow traditional East Asian lacquer to harden?",
      answer: "A dark, moist atmosphere; exposure to light and heat can leave it tacky.",
      source: {
        title: "Encyclopedia Britannica — Oriental lacquer",
        url: "https://www.britannica.com/technology/Oriental-lacquer",
        note: "The article describes tree-sap lacquer curing in darkness and moisture, contrasting it with the tackiness produced by light and heat.",
      },
    },
    {
      key: "ancient-herculaneum-unfolding",
      question:
        "How can researchers recover writing from fragile, tightly folded Herculaneum papyri without opening them by hand?",
      answer: "X-ray tomography and computer processing can virtually unfold their layers.",
      source: {
        title:
          "Scientific Reports — A computational platform for the virtual unfolding of Herculaneum papyri",
        url: "https://www.nature.com/articles/s41598-020-80458-z",
        note: "The study uses X-ray imaging with segmentation and flattening algorithms on carbonised papyrus fragments; it does not claim all the scrolls have been read.",
      },
    },
    {
      key: "ancient-cosa-chain",
      question: "What did the wooden chain discovered at the Roman port of Cosa carry?",
      answer: "Buckets that raised water from a spring to an aqueduct.",
      source: {
        title: "Archaeological Institute of America, Archaeology — Portus Cosanus",
        url: "https://archive.archaeology.org/online/features/cosa/",
        note: "The article describes the wooden Cosa bucket chain, a water-lifting mechanism feeding an aqueduct from a spring house.",
      },
    },
  ],
);
