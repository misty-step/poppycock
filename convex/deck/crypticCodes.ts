import { definePack } from "./types";

export const crypticCodes = definePack(
  {
    key: "cryptic-codes",
    title: "Cryptic codes",
    blurb: "Hidden writing, improvised signals, and the ingenious machinery of secret messages.",
    category: "Cryptic codes",
    sort: 300,
  },
  [
    {
      key: "codes-scytale",
      question: "How could a Spartan commander read a secret message carried on a courier's belt?",
      answer:
        "Wrap the lettered strip around a rod of the right thickness, bringing its letters back into order.",
      source: {
        title: "National Cryptologic Museum — Secrets of the Ancients",
        url: "https://virmuze.com/m/crypto-museum/x/secrets-of-the-ancients/",
        note: "The museum describes the scytale as a transposition device and recounts a message carried on a belt and read with a matching scytale.",
      },
    },
    {
      key: "codes-cardano-grille",
      question:
        "How did Girolamo Cardano propose hiding a secret message inside an innocent-looking letter?",
      answer:
        "Write through holes in a sheet of paper, then fill the gaps with innocent prose; a matching sheet would pick out the secret.",
      source: {
        title: "National Cryptologic Museum — Secrets of the Ancients",
        url: "https://virmuze.com/m/crypto-museum/x/secrets-of-the-ancients/",
        note: "The sender wrote through holes in stiff paper, then filled the surrounding spaces with plausible prose. The receiver needed an identical grille.",
      },
    },
    {
      key: "codes-aeneas-water",
      question: "How did Aeneas's fourth-century BCE signalling apparatus select a message?",
      answer:
        "Two operators drained matching water vessels together until floating rods reached the agreed phrase.",
      source: {
        title: "National Cryptologic Museum — Secrets of the Ancients",
        url: "https://virmuze.com/m/crypto-museum/x/secrets-of-the-ancients/",
        note: "The hydraulic telegraph assigned phrases to positions on floating rods. Torch signals told both operators when to start and stop draining.",
      },
    },
    {
      key: "codes-polybius-torches",
      question: "How did Polybius propose spelling out a message to someone too far away to hear?",
      answer:
        "Two groups of raised torches indicated the letter's row and column in an alphabet grid.",
      source: {
        title: "National Cryptologic Museum — Secrets of the Ancients",
        url: "https://virmuze.com/m/crypto-museum/x/secrets-of-the-ancients/",
        note: "The museum's ancient visual-signalling introduction describes one set of torches for the row and another for the column.",
      },
    },
    {
      key: "codes-jefferson-row",
      question:
        "What would a recipient do with the apparently meaningless rows on Jefferson's proposed cipher device?",
      answer:
        "Turn its alphabet discs to match the received letters, then look around the cylinder for a row that made sense.",
      source: {
        title: "National Cryptologic Museum — Early Cryptography Cipher Devices",
        url: "https://virmuze.com/m/crypto-museum/x/cipher-devices/",
        note: "The 36-disk replica section explains aligning plaintext, selecting any other row as ciphertext, and recovering the legible row on matching ordered disks.",
      },
    },
    {
      key: "codes-swallowable-silver-bullet",
      question: "Why were some Revolutionary War couriers equipped with hollow silver bullets?",
      answer:
        "They held secret messages and could be swallowed in an emergency without the lead poisoning caused by earlier containers.",
      source: {
        title: "CIA — The Spymaster's Toolkit",
        url: "https://www.cia.gov/stories/story/the-spymasters-toolkit/",
        note: "The Concealment Devices section describes silver bullet-shaped message containers replacing lead ones that caused poisoning if a courier swallowed them.",
      },
    },
    {
      key: "codes-patterson-joke",
      question:
        "What was hidden in the supposedly flawless cipher Robert Patterson sent Thomas Jefferson in 1801?",
      answer:
        "The opening of the Declaration of Independence: Patterson had secretly sent Jefferson his own famous words.",
      source: {
        title: "NSA — World's Oldest True Cipher Device, the Jefferson Cipher",
        url: "https://www.nsa.gov/Press-Room/News-Highlights/Article/Article/3250041/worlds-oldest-true-cipher-device-the-jefferson-cipher-on-display-at-the-nationa/",
        note: "NSA reproduces the solved opening, from 'In Congress, July Fourth' to 'When in the course of human events,' and describes Patterson's joke on Jefferson.",
      },
    },
    {
      key: "codes-great-seal-power",
      question:
        "How was the hidden listening device in the American ambassador's wooden seal activated?",
      answer:
        "Soviet operators aimed radio waves at it from outside; the passive bug needed no local battery.",
      source: {
        title: "National Cryptologic Museum — Cold War: Great Seal",
        url: "https://www.nsa.gov/History/National-Cryptologic-Museum/Exhibits-Artifacts/Exhibit-View/article/2718563/cold-war-great-seal/",
        note: "The museum describes a passive microphone inside a resonant cavity, activated by radio waves from a van and virtually undetectable when those waves stopped.",
      },
    },
    {
      key: "codes-navajo-spelling",
      question: "How did Navajo code talkers send an English word that had to be spelled out?",
      answer:
        "They sent Navajo words whose English translations supplied the required initial letters.",
      source: {
        title: "National Cryptologic Museum — Native American Code Talkers",
        url: "https://virmuze.com/m/crypto-museum/x/navajo-code-talkers/",
        note: "The dictionary section explains translating each transmitted Navajo word into English and taking its first letter; needle, ant, victor and yucca spell NAVY.",
      },
    },
    {
      key: "codes-arnold-dictionary",
      question:
        "What ordinary reference book could turn Benedict Arnold's strings of numbers back into words?",
      answer: "An agreed dictionary: the numbers identified the page, column and word to read.",
      source: {
        title: "National Cryptologic Museum — Revolutionary War",
        url: "https://virmuze.com/m/crypto-museum/x/revolutionary-secrets/",
        note: "The exhibit identifies Nathan Bailey's Dictionary and explains Arnold's page-column-word groups, with seven added to the column number.",
      },
    },
    {
      key: "codes-howe-quill",
      question:
        "Where did General William Howe conceal a message about his move toward Philadelphia?",
      answer: "Inside a quill feather.",
      source: {
        title: "National Cryptologic Museum — Revolutionary War",
        url: "https://virmuze.com/m/crypto-museum/x/revolutionary-secrets/",
        note: "The Hidden Messages of the British section states that Howe's message to Burgoyne about Philadelphia rather than Albany was hidden inside a quill feather.",
      },
    },
    {
      key: "codes-sympathetic-stain",
      question:
        "Why might a letter praising the British cause carry useful news for George Washington?",
      answer:
        "His spies could write the real report between the lines in invisible ink, revealed with a second chemical.",
      source: {
        title: "CIA — Intelligence in the War of Independence",
        url: "https://www.cia.gov/resources/publications/intelligence-in-the-war-of-independence/",
        note: "The Secret Writing section quotes Washington recommending letters 'in the Tory stile' with intelligence hidden between the lines in James Jay's two-chemical sympathetic stain.",
      },
    },
    {
      key: "codes-demaratus-blank-tablet",
      question:
        "In Herodotus' account, how did Queen Gorgo find a warning on an apparently blank writing tablet?",
      answer: "She had the wax scraped off: the warning was written on the wood underneath.",
      source: {
        title: "Herodotus — Histories 7.239, translated by A. D. Godley",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Herodotus/7D*.html#239",
        note: "Herodotus recounts Demaratus writing Xerxes' plans on a wooden tablet beneath renewed wax; Gorgo told the Spartans to remove the wax and uncover the writing.",
      },
    },
    {
      key: "codes-door-key-cache",
      question:
        "What everyday object did Britain's SOE hollow out to carry tiny photographic messages?",
      answer: "A door key: the message fitted into its drilled shaft, sealed with a screw-in stud.",
      source: {
        title: "The National Archives — HS 7/49 Special devices",
        url: "https://www.nationalarchives.gov.uk/education/resources/who-was-noor-khan/part-three-what-was-the-soe/hs-7-49-special-devices/",
        note: "The document describes concealment of microprints in a key drilled three-quarters of its length, sealed with a stud on a left-handed thread.",
      },
    },
    {
      key: "codes-smiley-silk",
      question:
        "What was the letter-filled code sheet associated with SOE officer David Smiley printed on?",
      answer: "A rectangular piece of silk.",
      source: {
        title: "Imperial War Museums — Code pad, one-time, EPH 1147",
        url: "https://www.iwm.org.uk/collections/item/object/30081313",
        note: "The catalogue describes letters printed on one side of rectangular silk and associates the object with Smiley and SOE service in Albania.",
      },
    },
    {
      key: "codes-enigma-output",
      question:
        "Why could a working Enigma machine produce neither a printed message nor a radio signal?",
      answer:
        "It only lit up encrypted letters; someone had to copy them down and transmit them separately.",
      source: {
        title: "Bletchley Park — Self-guided Key Stage 4 teacher notes",
        url: "https://www.bletchleypark.org.uk/wp-content/uploads/2021/10/teachers-notes-ks4-2019.pdf",
        note: "Page 3 describes a lamp lighting when a key was pressed and explicitly notes that Enigma did not transmit: the message was sent in Morse over radio.",
      },
    },
    {
      key: "codes-enigma-customers",
      question:
        "Before military adoption, what problem were the first marketed Enigma machines meant to solve?",
      answer: "Industrial espionage: businesses were offered a way to protect commercial messages.",
      source: {
        title: "Imperial War Museums — The Secret War: What You Need To Know",
        url: "https://www.iwm.org.uk/history/second-world-war/intelligence/secret-war-what-you-need-to-know",
        note: "The Secret Communications section says the first Enigma models were marketed for commercial use as a counter to industrial espionage.",
      },
    },
    {
      key: "codes-tobacco-packet-leaflets",
      question:
        "How did Benjamin Franklin arrange for anti-British messages to reach ordinary Hessian soldiers?",
      answer:
        "He disguised leaflets as tobacco packets, offering land to soldiers who deserted the British side.",
      source: {
        title: "CIA — Intelligence in the War of Independence",
        url: "https://www.cia.gov/resources/publications/intelligence-in-the-war-of-independence/",
        note: "The Propaganda section says Franklin arranged for German-language land-grant offers to be disguised as tobacco packets so they would reach ordinary Hessian soldiers.",
      },
    },
    {
      key: "codes-ivory-letter-kit",
      question:
        "What delicate job did CIA officers learn with rolls of small ivory tools in the 1960s?",
      answer: "Opening, reading and resealing other people's mail without the recipients knowing.",
      source: {
        title: "CIA — The Spymaster's Toolkit",
        url: "https://www.cia.gov/stories/story/the-spymasters-toolkit/",
        note: "The Intercepted Communications section describes beginners' and advanced flaps-and-seals kits; many tools were handmade of ivory and housed in a travel roll.",
      },
    },
    {
      key: "codes-strong-laundry-signals",
      question:
        "In the story of Culper spy Anna Strong, how did she tell couriers where to meet without sending a letter?",
      answer:
        "She hung out laundry: a black petticoat announced a message, and the number of handkerchiefs identified the cove.",
      source: {
        title: "CIA — Intelligence in the War of Independence",
        url: "https://www.cia.gov/resources/publications/intelligence-in-the-war-of-independence/",
        note: "The Codes and Ciphers section recounts Anna Strong signalling with a black petticoat and handkerchiefs on a laundry line. The card frames this as the reported story.",
      },
    },
    {
      key: "codes-boniface",
      question: "Who was 'Boniface', credited with intelligence coming out of Bletchley Park?",
      answer:
        "A fictitious spy used as a cover for information obtained by breaking enemy messages.",
      source: {
        title: "Bletchley Park — Self-guided Key Stage 4 teacher notes",
        url: "https://www.bletchleypark.org.uk/wp-content/uploads/2021/10/teachers-notes-ks4-2019.pdf",
        note: "Page 4 describes cover stories to conceal Enigma successes and reports sent to MI6 as though from the fictitious spy Boniface.",
      },
    },
    {
      key: "codes-broom-chute",
      question:
        "How did Bletchley Park get decoded messages from Hut 6 to Hut 3 using a household tool?",
      answer: "Staff pushed the papers through a wooden chute with a broom.",
      source: {
        title: "Bletchley Park — Self-guided Key Stage 4 teacher notes",
        url: "https://www.bletchleypark.org.uk/wp-content/uploads/2021/10/teachers-notes-ks4-2019.pdf",
        note: "Page 3 states that messages decrypted on adapted Typex machines were pushed through a wooden chute with a broom into Hut 3.",
      },
    },
    {
      key: "codes-wspu-fox",
      question: "What did a suffragette organiser want to know when she sent the code word 'Fox'?",
      answer: "Whether the recipient was prepared to be arrested.",
      source: {
        title: "The National Archives — Message codes",
        url: "https://www.nationalarchives.gov.uk/education/resources/suffragettes-on-file/message-codes/",
        note: "The archive transcript of DPP 1/23 f205 gives Fox as 'Are you prepared for arrest?' and Foxes as asking how many were prepared.",
      },
    },
    {
      key: "codes-wspu-woollen-mixture",
      question:
        "What instructions did a suffragette receive under the innocent-looking code 'Woollen-mixture'?",
      answer: "A telegram and a letter were on the way; do nothing until further word arrived.",
      source: {
        title: "The National Archives — Message codes",
        url: "https://www.nationalarchives.gov.uk/education/resources/suffragettes-on-file/message-codes/",
        note: "The code transcript gives Woollen-mixture as 'I am telegraphing, a letter follows, do nothing till you hear again.'",
      },
    },
    {
      key: "codes-pow-photo",
      question:
        "How did Peter Gardner get intelligence past censors inside photographs sent from a prisoner-of-war camp?",
      answer:
        "He sandwiched tiny writing on tracing paper between a photograph and its paper backing.",
      source: {
        title: "The National Archives — Secret letter sent to British Secret Services",
        url: "https://www.nationalarchives.gov.uk/explore-the-collection/stories/secret-war-intelligence-concealed-behind-photo/",
        note: "AIR 40/2622, dated 28 July 1942, preserves a message hidden between the back of a Guy Griffiths photograph and its backing; the account describes Gardner's method.",
      },
    },
    {
      key: "codes-muller-ink",
      question: "What ordinary food helped expose Karl Muller's secret correspondence in 1915?",
      answer:
        "Lemons: juice used as invisible ink was linked to his pen nibs by forensic examination.",
      source: {
        title: "The National Archives — Karl Muller and the fatal lemon",
        url: "https://www.nationalarchives.gov.uk/explore-the-collection/stories/karl-muller-and-the-fatal-lemon/",
        note: "The article describes hidden writing revealed with a warm iron and lemon cellular matter detected on seized nibs; surviving lemons were trial exhibits.",
      },
    },
    {
      key: "codes-purple-switches",
      question:
        "What everyday technology supplied the moving parts for America's replica of Japan's PURPLE machine?",
      answer: "Telephone stepping switches, which reproduced its changing electrical connections.",
      source: {
        title: "National Cryptologic Museum — The Magic of PURPLE",
        url: "https://virmuze.com/m/crypto-museum/x/the-magic-of-purple/",
        note: "The Leo Rosen and PURPLE Analog sections describe telephone stepping switches in the American reconstruction and in the original Japanese device.",
      },
    },
    {
      key: "codes-midway-water",
      question:
        "What fictitious problem did Midway report to test whether Japan's code name 'AF' meant the island?",
      answer: "A broken water-distillation plant and a shortage of fresh water.",
      source: {
        title: "National Cryptologic Museum — Battle of Midway",
        url: "https://virmuze.com/m/crypto-museum/x/battle-of-midway/",
        note: "The exhibit states that Midway falsely reported a distillation-plant failure; a subsequent Japanese transmission said AF was short of water.",
      },
    },
    {
      key: "codes-suitcase-transceiver",
      question: "What did SOE's Type A Mk III conceal inside a small leather case?",
      answer: "A complete radio transmitter and receiver, with headphones and a Morse key.",
      source: {
        title: "Imperial War Museums — Wireless Equipment, Type A Mk III, COM 229",
        url: "https://www.iwm.org.uk/collections/item/object/30005779",
        note: "The collection describes the A Mark III transceiver, headphones, Morse key and wiring housed in a black leather suitcase.",
      },
    },
    {
      key: "codes-histiaeus-hair",
      question:
        "According to Herodotus, why did Histiaeus delay sending a messenger even after his secret instructions were written?",
      answer:
        "He was waiting for the messenger's hair to grow back and hide the message tattooed on his shaved head.",
      source: {
        title: "Herodotus — Histories 5.35, translated by A. D. Godley",
        url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Herodotus/5B*.html#35",
        note: "Herodotus says Histiaeus marked a message on an enslaved messenger's shaved head, waited for the hair to regrow, then sent him with instructions to have his head shaved again.",
      },
    },
  ],
);
