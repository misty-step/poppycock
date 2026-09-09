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
      question:
        "Why might the white lumps in Roman mortar have been an advantage rather than a mixing mistake?",
      answer: "They held reactive calcium that could help seal cracks as they formed.",
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
        "How could a Byzantine warship use its prow as a weapon without ramming another vessel?",
      answer: "Project an incendiary mixture through tubes mounted at the front of the ship.",
      source: {
        title: "Encyclopedia Britannica — Greek fire",
        url: "https://www.britannica.com/technology/Greek-fire",
        note: "Britannica describes both thrown pots and discharge from tubes, including tubes mounted on ships’ prows; the exact composition remains unknown.",
      },
    },
    {
      key: "ancient-antikythera-purpose",
      question:
        "What could a geared bronze device recovered from a Greek shipwreck predict centuries before clockwork became common?",
      answer: "The positions of heavenly bodies and the timing of eclipses.",
      source: {
        title: "Wikipedia — Antikythera mechanism",
        url: "https://en.wikipedia.org/wiki/Antikythera_mechanism",
        note: "The article describes the ancient hand-powered mechanism recovered from the Antikythera wreck and its ability to predict astronomical positions and eclipses decades ahead.",
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
      question:
        "How did Maya artisans turn a plant-derived blue dye into an unusually durable pigment?",
      answer: "By incorporating indigo into porous clay, producing the pigment known as Maya blue.",
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
      question:
        "What surprising origin did scientists establish for the iron in an Egyptian royal dagger?",
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
      key: "ancient-ctesibius-water-music",
      question: "Why did Ctesibius’s musical invention need a tank of water?",
      answer:
        "To keep the air pressure steady in an early pipe organ, so its notes sounded evenly.",
      source: {
        title: "Encyclopedia Britannica — Hydraulis",
        url: "https://www.britannica.com/art/hydraulis",
        note: "Britannica describes Ctesibius’s third-century-BCE organ: a reservoir open below sat in water, which rose or fell to regulate air pressure feeding the pipes.",
      },
    },
    {
      key: "ancient-aeolipile",
      question: "How did Heron make a hollow metal sphere spin without anyone pushing it?",
      answer: "Jets of steam escaping from the sphere drove it around.",
      source: {
        title: "Encyclopedia Britannica — Aeolipile",
        url: "https://www.britannica.com/technology/aeolipile",
        note: "Britannica identifies Heron’s aeolipile as a steam turbine, with a hollow rotating sphere supplied with steam through tubes from a cauldron.",
      },
    },
    {
      key: "ancient-archimedean-helix",
      question:
        "How could an ancient engineer raise water with a device that turned but had no buckets?",
      answer: "Rotate a helical screw inside an inclined tube, carrying water uphill.",
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
        "What was the cargo a diver described as “metal biscuits with ears” when he found the Uluburun wreck?",
      answer: "Copper ingots, part of a Bronze Age shipment containing about ten tons of copper.",
      source: {
        title: "Archaeological Institute of America, Archaeology — In the Time of the Copper Kings",
        url: "https://archaeology.org/issues/january-february-2024/features/in-the-time-of-the-copper-kings/",
        note: "The feature recounts Mehmet Çakir’s description of the discovery and identifies the wreck’s roughly ten-ton copper cargo.",
      },
    },
    {
      key: "ancient-egyptian-faience",
      question:
        "How could ancient Egyptian craftspeople make glossy, pottery-like objects without a clay body?",
      answer:
        "Fire a quartz-rich paste that formed its own glaze, producing the material called faience.",
      source: {
        title: "British Museum — Glorious glass: worth more than gold?",
        url: "https://www.britishmuseum.org/blog/glorious-glass-worth-more-gold",
        note: "The museum explains Egyptian faience as a paste using powdered quartz and related glassmaking ingredients that develops a glaze during firing.",
      },
    },
    {
      key: "ancient-roman-cameo-glass",
      question:
        "How did Roman glassmakers put raised white figures onto a dark vessel without sticking them on?",
      answer:
        "They carved away most of an outer layer of white glass, exposing darker glass beneath it.",
      source: {
        title: "Encyclopedia Britannica — Cameo glass",
        url: "https://www.britannica.com/art/cameo-glass",
        note: "The article specifically distinguishes Roman manual cutting of opaque white glass over a darker layer from later etching methods.",
      },
    },
    {
      key: "ancient-hadrian-underworld",
      question:
        "How did workers move supplies around Hadrian’s luxurious villa while staying out of sight?",
      answer: "Through an extensive network of underground service tunnels.",
      source: {
        title: "Archaeological Institute of America, Archaeology — An Imperial Underworld",
        url: "https://archaeology.org/issues/november-december-2013/digs-discoveries/tunnels-discovered-beneath-hadrians-villa/",
        note: "The feature describes the villa’s subterranean service infrastructure and discovery of an unusually wide tunnel potentially allowing two-way traffic.",
      },
    },
    {
      key: "ancient-cire-perdue",
      question:
        "Why would an ancient metalworker destroy a carefully sculpted model before casting the finished object?",
      answer: "It was a wax model; melting it left a hollow mould ready to receive molten metal.",
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
      key: "ancient-ur-customer-complaint",
      question: "What very familiar grievance did a man in Ur put into cuneiform around 1750 BCE?",
      answer: "A merchant had offered inferior copper and treated his messenger rudely.",
      source: {
        title: "Wikipedia — Complaint tablet to Ea-nāṣir",
        url: "https://en.wikipedia.org/wiki/Complaint_tablet_to_Ea-n%C4%81%E1%B9%A3ir",
        note: "The article describes Nanni’s surviving letter to Ea-nasir, dated about 1750 BCE, complaining about substandard copper and disrespectful treatment of his servant.",
      },
    },
    {
      key: "ancient-rolling-signature",
      question:
        "How could a Mesopotamian merchant make a legally binding personal mark on a document without writing?",
      answer:
        "Roll an engraved stone cylinder across wet clay, leaving a distinctive seal impression.",
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
        "What surprisingly familiar grooming aid did chemical analysis identify on ancient Egyptian mummies?",
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
      question: "What job did a chain made of wood perform at the Roman port of Cosa?",
      answer: "Lift buckets of spring water up to supply an aqueduct.",
      source: {
        title: "Archaeological Institute of America, Archaeology — Portus Cosanus",
        url: "https://archive.archaeology.org/online/features/cosa/",
        note: "The article describes the wooden Cosa bucket chain, a water-lifting mechanism feeding an aqueduct from a spring house.",
      },
    },
  ],
);
