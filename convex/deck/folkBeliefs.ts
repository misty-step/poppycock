import { definePack } from "./types";

export const folkBeliefs = definePack(
  {
    key: "folk-beliefs",
    title: "Folk beliefs",
    blurb: "Apotropaic charms, ritual protections, and bizarre historical superstitions.",
    category: "Folk beliefs",
    sort: 150,
  },
  [
    {
      key: "folk-daisy-wheel-witch-mark",
      question:
        "In historic British barns and houses, why did carpenters carve overlapping six-petaled compass circles known as 'daisy wheels' into timber beams?",
      answer:
        "As protective apotropaic marks to ward off witches, evil spirits, and lightning strikes.",
      source: {
        title: "Historic England — What Are Witches’ Marks?",
        url: "https://historicengland.org.uk/whats-new/features/discovering-witches-marks/what-are-witches-marks/",
        note: "Original question and factual summary. Also called hexafoils, these geometric carvings were ritual protective marks inscribed near entry points like doors, windows, and chimneys to bar supernatural evil.",
      },
    },
    {
      key: "folk-concealed-shoe-chimney",
      question:
        "Why did British builders and homeowners hide thousands of worn-out leather shoes inside chimney breasts and walls between the 14th and 19th centuries?",
      answer:
        "As an apotropaic charm to trap evil spirits, witches, and demons entering through vulnerable household portals.",
      source: {
        title: "BBC News — The shoes hidden in homes to ward off evil",
        url: "https://www.bbc.com/news/uk-england-northamptonshire-41507752",
        note: "Original question and factual summary. The Concealed Shoe Index at Northampton Museum catalogs thousands of worn shoes walled into chimneys, floorboards, and doorways to capture or confuse evil spirits.",
      },
    },
    {
      key: "folk-telling-the-bees",
      question:
        "In traditional European and American rural folklore, what solemn ritual had to be performed with the beehives whenever a family member died?",
      answer:
        "Formally telling the bees about the death and draping the hives in black crepe so the colony would not perish or fly away.",
      source: {
        title: "Project Gutenberg — Rustic Speech and Folk-lore (by Elizabeth Mary Wright)",
        url: "https://www.gutenberg.org/files/47364/47364-h/47364-h.htm",
        note: "Original question and factual summary. Wright (pp. 281-282) records the widespread rural custom of 'telling the bees' and putting hives in mourning upon a death, believing the bees would otherwise die or forsake the hive.",
      },
    },
    {
      key: "folk-kings-evil-touch-piece",
      question:
        "From the Middle Ages until 1714, what did English monarchs personally hand to sick subjects to cure the disease known as the 'King's Evil'?",
      answer:
        "A pierced gold coin or medal called a 'touchpiece', hung around the neck after the monarch physically touched them.",
      source: {
        title: "Science Museum Group Collection — Gold touchpiece issued by James II",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co105125/gold-touchpiece-issued-by-james-ii",
        note: "Original question and factual summary. Monarchs performed public ceremonies of the 'royal touch' to cure scrofula (tuberculosis of the neck lymph nodes), presenting sufferers with gold touchpieces.",
      },
    },
    {
      key: "folk-cramp-ring-monarch",
      question:
        "In medieval England, what medical ailments was a gold or silver 'cramp ring' blessed by the monarch on Good Friday believed to cure?",
      answer: "Muscle cramps, spasms, and epileptic seizures ('the falling sickness').",
      source: {
        title: "Science Museum Group Collection — Metal cramp ring, English, 1308-1558",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co106807/metal-cramp-ring-english-1308-1558",
        note: "Original question and factual summary. Monarchs blessed rings by rubbing them between their hands on Good Friday, believing the royal touch imbued the metal with healing power against cramps and epilepsy.",
      },
    },
    {
      key: "folk-whitby-snakestones",
      question:
        "In Yorkshire folklore, why did 19th-century fossil collectors carve snake heads onto coiled ammonite fossils found near Whitby?",
      answer:
        "To sell them as 'snakestones', supposedly headless serpents miraculously turned to stone by Saint Hilda.",
      source: {
        title:
          "Natural History Museum London — Snakestones: The myth, magic and science of ammonites",
        url: "https://www.nhm.ac.uk/discover/snakestones-ammonites-myth-magic-science.html",
        note: "Original question and factual summary. Local Yorkshire legend held that 7th-century Saint Hilda rid the abbey of a plague of venomous snakes by turning them into stone coiled spirals; Victorian dealers carved heads onto real ammonites to fool tourists.",
      },
    },
    {
      key: "folk-timber-burn-marks",
      question:
        "In historic English timber-framed houses, why did builders deliberately burn teardrop-shaped scorch marks into roof beams and floor joists?",
      answer:
        "As a ritual apotropaic charm to inoculate the building against lightning strikes and accidental fire.",
      source: {
        title: "Historic England — The Difference Between Apotropaic Marks and Carpenters’ Marks",
        url: "https://historicengland.org.uk/whats-new/features/discovering-witches-marks/types-of-marks/",
        note: "Original question and factual summary. Taper burn marks were deliberately applied to timbers during construction as a form of sympathetic magic to protect the wood from catching fire or being struck by lightning.",
      },
    },
    {
      key: "folk-druid-mistletoe-harvest",
      question:
        "According to Pliny the Elder's 1st-century account, how did Celtic Druid priests harvest sacred mistletoe from oak trees?",
      answer:
        "A priest dressed in white climbed the tree, cut the mistletoe with a golden sickle, and caught it in a white cloak so it never touched the ground.",
      source: {
        title: "Tufts Perseus Digital Library — Pliny the Elder, Natural History 16.95",
        url: "https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.02.0137%3Abook%3D16%3Achapter%3D95",
        note: "Original question and factual summary. Pliny's Natural History XVI.95 records: 'Clad in a white robe the priest ascends the tree, and cuts the mistletoe with a golden sickle, which is received by others in a white cloak.'",
      },
    },
    {
      key: "folk-welsh-mari-lwyd",
      question:
        "In the midwinter Welsh folk tradition of Mari Lwyd, what real animal relic was mounted on a wooden pole and carried door-to-door?",
      answer:
        "A decorated horse's skull with snapping spring-loaded jaws, covered by a white sheet concealing the performer.",
      source: {
        title: "Amgueddfa Cymru (Museum Wales) — Mari Lwyd",
        url: "https://museum.wales/collections/online/object/23aa02a8-fcef-3cab-aca3-590b7427236d/Mari-Lwyd/",
        note: "Original question and factual summary. The wassailing tradition involved challenging householders to a rhyming contest (pwngc) at the door to gain entrance for food and drink.",
      },
    },
    {
      key: "folk-17th-century-witch-bottle",
      question:
        "In 17th-century England, what ingredients were sealed inside a ceramic or glass 'witch bottle' and buried beneath a fireplace?",
      answer:
        "Human urine, bent iron pins, fingernail clippings, and thorns, to rebound a witch's curse back onto her.",
      source: {
        title: "BBC News — 17th-century witch bottle identified as anti-witchcraft device",
        url: "https://www.bbc.com/news/uk-england-kent-59052737",
        note: "Original question and factual summary. Museum of London Archaeology confirmed witch bottles were counter-magic traps buried under hearths or thresholds to inflict agonizing pain on witches.",
      },
    },
    {
      key: "folk-prehistoric-axe-thunderstone",
      question:
        "Before modern archaeology, what did European farmers believe the prehistoric polished stone axe heads unearthed in plowed fields were?",
      answer:
        "Fossilized thunderbolts ('thunderstones') that had fallen from the sky during lightning strikes.",
      source: {
        title: "British Museum — The World of Stonehenge (Thunderstone Folklore)",
        url: "https://www.britishmuseum.org/sites/default/files/2022-02/The_world_of_Stonehenge_The_British_Musuem_large_print_guide.pdf",
        note: "Original question and factual summary. Widespread European folk belief held that stone axes were physical lightning bolts; farmers kept them under roof eaves or set them in silver to prevent lightning from striking the house.",
      },
    },
    {
      key: "folk-hand-of-glory-burglary",
      question:
        "In historical European burglary folklore, what magical power was the gruesome talisman known as a 'Hand of Glory' believed to possess?",
      answer:
        "Putting everyone inside a target house into an unshakeable, coma-like sleep while burglars robbed them.",
      source: {
        title: "Whitby Museum — The Hand of Glory",
        url: "https://whitbymuseum.org.uk/the-hand-of-glory/",
        note: "Original question and factual summary. The only surviving specimen in Britain is preserved at Whitby Museum; folklore held the pickled hand of a hanged criminal would paralyze occupants of a house.",
      },
    },
    {
      key: "folk-hag-stone-stable-charm",
      question:
        "In traditional British folklore, why did farmers hang naturally holed flint pebbles known as 'hag stones' above stable doors and stalls?",
      answer:
        "To prevent witches from bewitching livestock or riding farm horses to exhaustion overnight.",
      source: {
        title: "Science Museum Group Collection — Gritstone pebble or witch stone, Yorkshire",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co102812/gritstone-pebble-or-witch-stone-perforated-with-white-cloth-sling",
        note: "Original question and factual summary. Naturally holed stones (hag stones or adder stones) were hung in stables and cowsheds to ward off evil spirits and prevent nightmares in horses.",
      },
    },
    {
      key: "folk-moles-foot-amulet",
      question:
        "In 19th-century rural English folk medicine, why did farmworkers carry a severed mole's foot in their coat pockets?",
      answer: "As a protective amulet believed to cure or ward off toothaches and cramps.",
      source: {
        title: "Science Museum Group Collection — Mole's foot amulet, Norfolk, 1890-1910",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co103787/moles-foot-amulet-norfolk-england-1890-1910-mole-footamulets",
        note: "Original question and factual summary. Collected by Edward Lovett in Norfolk; carrying a mole's paw was a widespread East Anglian folk charm against dental pain.",
      },
    },
    {
      key: "folk-amber-beads-eyelids",
      question:
        "In Highland Scottish folk medicine, how were large amber beads used to treat failing eyesight?",
      answer:
        "They were rubbed directly across the patient's eyelids to cure cataracts and prevent blindness.",
      source: {
        title: "National Museums Scotland — From amulets to elf bolts: 11 Scottish Charms",
        url: "https://www.nms.ac.uk/discover-catalogue/from-amulets-to-elf-bolts-10-scottish-charms",
        note: "Original question and factual summary. Preserved in NMS (H.NO 4–7); the MacDonalds of Glencoe used heirloom amber beads as healing eye charms.",
      },
    },
    {
      key: "folk-scottish-elf-bolts",
      question:
        "In historical Scottish folklore, what did farmers believe the prehistoric flint arrowheads unearthed in their fields were?",
      answer:
        "'Elf bolts': magical projectiles shot by fairies to strike cattle and people with sudden unexplained illnesses.",
      source: {
        title: "National Museums Scotland — From amulets to elf bolts: 11 Scottish Charms",
        url: "https://www.nms.ac.uk/discover-catalogue/from-amulets-to-elf-bolts-10-scottish-charms",
        note: "Original question and factual summary. Neolithic and Bronze Age flint arrowheads were mounted in silver and worn as protective amulets to counter 'elf-shot' cattle illnesses.",
      },
    },
    {
      key: "folk-goose-thrapple-charm",
      question:
        "In historical Scottish folk medicine, what unusual animal organ was dried into a ring, filled with rattling pebbles, and worn around a child's neck?",
      answer: "A goose's windpipe ('thrapple'), worn as a rattling charm to cure whooping cough.",
      source: {
        title: "National Museums Scotland — From amulets to elf bolts: 11 Scottish Charms",
        url: "https://www.nms.ac.uk/discover-catalogue/from-amulets-to-elf-bolts-10-scottish-charms",
        note: "Original question and factual summary. Preserved in NMS (H.NO 87); a goose larynx was bent into a circular rattle and hung around a child's neck to ward off kinkcough (whooping cough).",
      },
    },
    {
      key: "folk-marys-nut-drift-seed",
      question:
        "In the Scottish Hebrides, what rare beachcombed object known as 'Mary's Nut' (Airne Moire) was mounted in silver as a talisman?",
      answer:
        "A tropical drift seed carried across the Atlantic by ocean currents, held by women for protection during childbirth.",
      source: {
        title: "National Museums Scotland — From amulets to elf bolts: 11 Scottish Charms",
        url: "https://www.nms.ac.uk/discover-catalogue/from-amulets-to-elf-bolts-10-scottish-charms",
        note: "Original question and factual summary. Preserved in NMS (H.NO 41); seeds of the tropical tree Ipomoea tuberosa washed ashore on western Scottish islands and were cherished as sacred childbirth amulets.",
      },
    },
  ],
);
