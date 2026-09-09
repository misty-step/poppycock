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
      question: "What did someone need to do with a message written for a scytale?",
      answer:
        "Wind its lettered strip around a matching rod to put the hidden message back in order.",
      source: {
        title: "National Cryptologic Museum — Secrets of the Ancients",
        url: "https://virmuze.com/m/crypto-museum/x/secrets-of-the-ancients/",
        note: "The museum describes the scytale as a transposition device and recounts a message carried on a belt and read with a matching scytale.",
      },
    },
    {
      key: "codes-cardano-grille",
      question: "What was the purpose of a Cardano grille?",
      answer:
        "Its cut-out holes revealed selected parts of an innocent-looking letter, exposing a second, secret message.",
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
      question: "How could a distant observer read a letter using the Polybius square?",
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
        "After spelling a message on Jefferson's proposed cypher wheel, what did the sender copy?",
      answer:
        "A different row of apparently jumbled letters; the recipient's matching disks would reveal the readable row.",
      source: {
        title: "National Cryptologic Museum — Early Cryptography Cipher Devices",
        url: "https://virmuze.com/m/crypto-museum/x/cipher-devices/",
        note: "The 36-disk replica section explains aligning plaintext, selecting any other row as ciphertext, and recovering the legible row on matching ordered disks.",
      },
    },
    {
      key: "codes-hitt-applewood",
      question:
        "What material did Parker Hitt use for the disks of an early portable cipher prototype?",
      answer: "Apple wood, with strips of scrambled alphabets wrapped around the disks.",
      source: {
        title: "National Cryptologic Museum — Early Cryptography Cipher Devices",
        url: "https://virmuze.com/m/crypto-museum/x/cipher-devices/",
        note: "The M-94 section describes Hitt's paper alphabet strips wrapped around disks cut from apple wood before Mauborgne improved the design.",
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
        "What did the numbers in Benedict Arnold's secret dictionary messages tell the recipient?",
      answer: "Which page, column and word to look up in the agreed dictionary.",
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
      question: "What was the Culper spy network's 'sympathetic stain'?",
      answer: "An invisible ink that a recipient revealed with a separate chemical reagent.",
      source: {
        title: "National Cryptologic Museum — Revolutionary War",
        url: "https://virmuze.com/m/crypto-museum/x/revolutionary-secrets/",
        note: "The exhibit describes Dr James Jay's invisible ink, used by Culper Jr beneath a cover note, and the reactivation agent held by Washington's officers.",
      },
    },
    {
      key: "codes-confederate-reel",
      question: "What was the wooden 'cipher reel' captured at Mobile in 1865 designed to do?",
      answer:
        "Use a cipher table wrapped around a cylinder and two adjustable pointers to match plain letters with encrypted ones.",
      source: {
        title: "National Cryptologic Museum — Civil War",
        url: "https://virmuze.com/m/crypto-museum/x/civil-war/",
        note: "The museum caption identifies a Confederate reel using the Vigenere or court cipher around a wooden cylinder, with pointers for plain and cipher letters.",
      },
    },
    {
      key: "codes-door-key-cache",
      question:
        "What was hidden inside the specially altered door key described in SOE file HS 7/49?",
      answer: "Tiny photographic text, concealed in a drilled shaft closed by a screw-in stud.",
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
      question: "How did an Enigma operator see each newly encrypted letter?",
      answer:
        "A letter lit up on a lamp panel; the operator had to record it before sending the message separately.",
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
      key: "codes-crib",
      question: "What did a Bletchley Park codebreaker mean by a 'crib'?",
      answer:
        "A guessed piece of the original message that could be matched against its encrypted version.",
      source: {
        title: "Bletchley Park — Self-guided Key Stage 4 teacher notes",
        url: "https://www.bletchleypark.org.uk/wp-content/uploads/2021/10/teachers-notes-ks4-2019.pdf",
        note: "Page 4 defines cribs as clues and common phrases used to guess message content and help test Enigma settings.",
      },
    },
    {
      key: "codes-menu",
      question: "What was a 'menu' prepared for a wartime Bombe?",
      answer:
        "A diagram of linked letters telling operators how to connect the machine for a search through cipher settings.",
      source: {
        title: "Bletchley Park — Self-guided Key Stage 4 teacher notes",
        url: "https://www.bletchleypark.org.uk/wp-content/uploads/2021/10/teachers-notes-ks4-2019.pdf",
        note: "Page 4 describes the pencilled diagram linking ciphertext and crib letters and says it instructed Bombe operators how to plug up the machine.",
      },
    },
    {
      key: "codes-pinch",
      question: "What did Bletchley Park staff call a 'pinch'?",
      answer:
        "The capture of enemy cipher material, such as documents revealing the settings needed to read messages.",
      source: {
        title: "Bletchley Park — Self-guided Key Stage 4 teacher notes",
        url: "https://www.bletchleypark.org.uk/wp-content/uploads/2021/10/teachers-notes-ks4-2019.pdf",
        note: "Page 3 identifies a pinch as acquisition of cipher-settings information and gives the Petard Pinch as an example.",
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
      question: "What household object helped move decoded messages from Hut 6 to Hut 3?",
      answer: "A broom, used to push the papers through a wooden chute.",
      source: {
        title: "Bletchley Park — Self-guided Key Stage 4 teacher notes",
        url: "https://www.bletchleypark.org.uk/wp-content/uploads/2021/10/teachers-notes-ks4-2019.pdf",
        note: "Page 3 states that messages decrypted on adapted Typex machines were pushed through a wooden chute with a broom into Hut 3.",
      },
    },
    {
      key: "codes-wspu-fox",
      question: "In the WSPU's private message code, what question did 'Fox' ask?",
      answer: "Are you prepared for arrest?",
      source: {
        title: "The National Archives — Message codes",
        url: "https://www.nationalarchives.gov.uk/education/resources/suffragettes-on-file/message-codes/",
        note: "The archive transcript of DPP 1/23 f205 gives Fox as 'Are you prepared for arrest?' and Foxes as asking how many were prepared.",
      },
    },
    {
      key: "codes-wspu-woollen-mixture",
      question: "What did 'Woollen-mixture' mean in a secret WSPU message?",
      answer: "I am telegraphing; a letter will follow, so do nothing until you hear again.",
      source: {
        title: "The National Archives — Message codes",
        url: "https://www.nationalarchives.gov.uk/education/resources/suffragettes-on-file/message-codes/",
        note: "The code transcript gives Woollen-mixture as 'I am telegraphing, a letter follows, do nothing till you hear again.'",
      },
    },
    {
      key: "codes-pow-photo",
      question:
        "How did Peter Gardner hide intelligence in photographs mailed out of Stalag Luft III?",
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
      key: "codes-delilah",
      question: "What was 'Delilah' in Alan Turing's wartime work?",
      answer: "A device for scrambling speech so that spoken messages could be kept secret.",
      source: {
        title: "Imperial War Museums — How Alan Turing Cracked The Enigma Code",
        url: "https://www.iwm.org.uk/history/second-world-war/intelligence/how-alan-turing-cracked-the-enigma-code",
        note: "The Turingery and Delilah section identifies Delilah as a speech-scrambling device Turing developed later in the war.",
      },
    },
  ],
);
