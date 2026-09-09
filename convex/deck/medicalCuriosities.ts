import { definePack } from "./types";

export const medicalCuriosities = definePack(
  {
    key: "medical-curiosities",
    title: "Medical curiosities",
    blurb: "Strange treatments, ingenious instruments, and discarded ideas about the human body.",
    category: "Medical curiosities",
    sort: 160,
  },
  [
    {
      key: "medical-tobacco-resuscitation",
      question:
        "What unexpected procedure could an eighteenth-century rescue kit perform on someone pulled from a river?",
      answer: "Blow tobacco smoke into the rectum in an attempt to revive them.",
      source: {
        title: "Science Museum — Saving lives with a puff of smoke?",
        url: "https://blog.sciencemuseum.org.uk/saving-lives-with-a-puff-of-smoke/",
        note: "Late eighteenth- and early nineteenth-century resuscitation kits included bellows and fumigators for tobacco-smoke enemas; the supposed treatment was later abandoned.",
      },
    },
    {
      key: "medical-perkins-tractors",
      question:
        "How were Elisha Perkins’s little metal rods supposed to cure illness in the 1790s?",
      answer: "By drawing out excess electricity, which he claimed caused disease.",
      source: {
        title: "Science Museum Group — Two Perkins tractors",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co140928/two-perkins-tractors",
        note: "Perkins passed tapered metal rods over the body, claiming to remove excess electricity and thereby disease. The museum states that the treatment was discredited.",
      },
    },
    {
      key: "medical-mechanical-leech",
      question:
        "What was Heurteloup’s small brass contraption supposed to do for nineteenth-century patients?",
      answer: "Draw blood like a leech, replacing the live animal with a mechanical instrument.",
      source: {
        title: "Science Museum Group — Brass artificial leech",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co141002/brass-artificial-leech",
        note: "The museum identifies this nineteenth-century brass instrument as an artificial leech of the Heurteloup type, supplied in a wooden case with accessories.",
      },
    },
    {
      key: "medical-powdered-remains",
      question:
        "What imported material did some sixteenth-century European apothecaries grind up to make supposedly curative powders?",
      answer: "Mummified human remains, traded as the medicine mummia.",
      source: {
        title: "Science Museum Group — Container for Mummia",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co131692/container-for-mummia-powdered-mummy-european-c-1601-1800",
        note: "The museum describes a sixteenth-century trade in mummified body parts and tissues shipped from Egypt and powdered for supposed medicinal use.",
      },
    },
    {
      key: "medical-bezoar-antidote",
      question: "What unlikely object did historical healers obtain from goats to counter poison?",
      answer: "A bezoar: a stony mass formed inside the animal’s digestive system.",
      source: {
        title: "Science Museum Group — Bezoar stone, from a goat",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co106471/bezoar-stone-from-a-goat-c-1801-1920",
        note: "The goat bezoar entry explains that these masses form in digestive systems and were once believed to counter poison.",
      },
    },
    {
      key: "medical-earthworm-oil",
      question:
        "What was boiled with olive oil and wine to make an eighteenth-century remedy for aching joints?",
      answer: "Earthworms, in a preparation sold as a medicinal oil.",
      source: {
        title: "Science Museum Group — Syrup jar for Oil of Earthworms",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co78875/syrup-jar-for-oil-of-earthworms-italy-1731-1770",
        note: "The jar entry records an earthworm-oil recipe and says pharmacists recommended the preparation for aching joints, arthritis, rickets and cramp; efficacy was disputed even then.",
      },
    },
    {
      key: "medical-snail-chocolate",
      question: "What unlikely ingredient did Figuier’s 1840 medicinal chocolate contain?",
      answer: "Snails, used in preparations for chest complaints and other ailments.",
      source: {
        title: "PubMed Central — Helix and Drugs",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1062150/",
        note: "The historical review lists Figuier’s 1840 formulations, including snail chocolate, syrup and paste, and their claimed indications for colds, tuberculosis and chest ailments.",
      },
    },
    {
      key: "medical-du-coudray-machine",
      question:
        "What did Madame du Coudray’s eighteenth-century device called La Machine allow pupils to rehearse?",
      answer: "Delivering babies, using a model birth canal and model baby.",
      source: {
        title: "PubMed Central — La Machine: Obstetric Phantoms of Madame Du Coudray",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9021482/",
        note: "The historical review describes du Coudray’s obstetric phantom and its use in practical training for midwives and physicians.",
      },
    },
    {
      key: "medical-charles-royal-treatment",
      question: "What treatment did thousands of sick people receive personally from Charles II?",
      answer: "His touch, which was believed to cure the gland disease scrofula.",
      source: {
        title: "Wellcome Collection — When monarchs healed the sick",
        url: "https://wellcomecollection.org/stories/when-monarchs-healed-the-sick",
        note: "The account describes royal-touch ceremonies for scrofula and records 6,725 people touched in the first year of Charles II’s reign. This was a belief, not an effective treatment.",
      },
    },
    {
      key: "medical-key-without-lock",
      question:
        "What job could require an eighteenth-century practitioner to turn a small key without a lock?",
      answer: "Pulling a tooth; a dental key gripped it with a claw and twisted it out.",
      source: {
        title: "Science Museum Group — Dental key",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co101979/dental-key",
        note: "The museum explains that a dental key’s claw gripped the tooth and the instrument was turned like a door key to extract it, often causing injury.",
      },
    },
    {
      key: "medical-laennec-paper",
      question:
        "What did a French physician improvise during an 1816 examination, inspiring a new medical instrument?",
      answer: "A sheet of paper rolled into a tube, used to listen to a patient’s heart.",
      source: {
        title: "Science Museum — Understanding bodily functions",
        url: "https://www.sciencemuseum.org.uk/objects-and-stories/medicine/understanding-bodily-functions",
        note: "Laennec rolled paper into a tube to listen to a patient’s heart; he later replaced it with a wooden tube and named the instrument a stethoscope.",
      },
    },
    {
      key: "medical-kussmaul-performer",
      question:
        "What kind of performer helped Adolf Kussmaul develop a medical instrument in 1868?",
      answer: "A sword swallower, who helped him develop a rigid tube for looking inside the body.",
      source: {
        title: "BMJ — Sword swallowing uncertainties",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1283200/",
        note: "The article states that a sword swallower helped Kussmaul develop a rigid endoscope in 1868 using a straight tube, mirrors and a gasoline lamp.",
      },
    },
    {
      key: "medical-frog-test",
      question:
        "Before home testing kits, how could a laboratory frog help reveal that a woman was pregnant?",
      answer: "Her urine was injected into a female frog; egg-laying could signal pregnancy.",
      source: {
        title: "Wellcome Collection — Primodos, paternalism and the fight to be heard",
        url: "https://wellcomecollection.org/stories/primodos--paternalism-and-the-fight-to-be-heard",
        note: "Before modern laboratory pregnancy tests, urine was injected into animals. The article describes Xenopus frogs spawning eggs in response and their non-fatal use as test animals.",
      },
    },
    {
      key: "medical-apothecary-unicorn",
      question:
        "What real material commonly supplied the apothecary’s supposedly medicinal unicorn horn?",
      answer: "The long tusk of a male narwhal, ground into powder.",
      source: {
        title: "Science Museum Group — Pharmacy sign in the shape of a unicorn’s head",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co131775/pharmacy-sign-in-the-shape-of-a-unicorns-head",
        note: "The museum explains that narwhal tusks commonly substituted for mythical unicorn horns in powdered remedies.",
      },
    },
    {
      key: "medical-variolation-powder",
      question:
        "In one historical form of smallpox prevention, what was the powder a healthy person inhaled?",
      answer: "Powder made from the crusts of smallpox scabs.",
      source: {
        title: "Science Museum — Smallpox and the story of vaccination",
        url: "https://www.sciencemuseum.org.uk/objects-and-stories/medicine/smallpox-and-story-vaccination",
        note: "The article describes inhaled powdered smallpox crusts as a form of inoculation or variolation, distinct from and riskier than later vaccination.",
      },
    },
    {
      key: "medical-jagged-ring",
      question:
        "What behaviour did some Victorian doctors try to prevent by prescribing a jagged metal ring?",
      answer: "Masturbation, then wrongly blamed for serious physical and mental illness.",
      source: {
        title: "Science Museum Group — Jugum penises, United Kingdom, 1880–1920",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co137287/jugum-penises-united-kingdom-1880-1920",
        note: "The museum describes anti-masturbation rings prescribed under the false diagnosis of spermatorrhoea and explicitly rejects the supposed dangers of masturbation.",
      },
    },
    {
      key: "medical-resting-lung",
      question:
        "Before effective antibiotics, how did some doctors try to give a tuberculosis-damaged lung a rest?",
      answer: "Deliberately collapse it by introducing air or nitrogen around it.",
      source: {
        title: "Science Museum Group — Apparatus for producing artificial pneumothorax",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co174824/apparatus-for-producing-artificial-pneumothorax",
        note: "Artificial pneumothorax introduced gas into the pleural space to collapse a lung; the rationale was to rest the organ during pulmonary tuberculosis treatment.",
      },
    },
    {
      key: "medical-bayer-remedy",
      question: "What surprising product did Bayer sell as a cough treatment beginning in 1898?",
      answer: "Heroin, also advertised as a supposedly non-addictive substitute for morphine.",
      source: {
        title: "Science Museum Group — Reise-Apotheke drug pouch by Bayer",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co195776/reise-apotheke-drug-pouch-by-bayer",
        note: "The bottle description states that Bayer marketed diacetylmorphine as Heroin from 1898 to 1910, including the false non-addictive morphine-substitute claim.",
      },
    },
    {
      key: "medical-malaria-therapy",
      question:
        "What new illness did Wagner-Jauregg deliberately give patients in an early treatment for neurosyphilis?",
      answer: "Malaria, to provoke the fevers used in his treatment.",
      source: {
        title: "PubMed Central — Julius Wagner-Jauregg and the Legacy of Malarial Therapy",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3670443/",
        note: "The historical review describes deliberate malaria inoculation and fever therapy for general paresis caused by neurosyphilis, before penicillin replaced this approach.",
      },
    },
    {
      key: "medical-rete-mirabile",
      question:
        "What imaginary task did Galen assign to a network of vessels he thought lay beneath the human brain?",
      answer:
        "Turning “vital spirit” into “animal spirit”; the network he described does not exist in humans.",
      source: {
        title: "PubMed — The rete mirabile of the cranial base: a millenary legend",
        url: "https://pubmed.ncbi.nlm.nih.gov/16723900/",
        note: "The abstract describes the supposed vascular network and Galen’s spirit-conversion theory, and notes Vesalius’s finding that the rete did not exist in humans.",
      },
    },
    {
      key: "medical-wandering-organ",
      question:
        "What did some ancient Greek physicians think could wander around inside women and cause suffocation or convulsions?",
      answer: "The womb, which they incorrectly imagined moving around the body.",
      source: {
        title: "Wellcome Collection — Hysteria",
        url: "https://wellcomecollection.org/stories/hysteria-menopause",
        note: "The account explains the ancient Greek wandering-womb theory and the symptoms attributed to a restless uterus; it is an obsolete and false explanation.",
      },
    },
    {
      key: "medical-kolff-membrane",
      question:
        "What food-making material did Willem Kolff use in a pioneering machine built during the Second World War?",
      answer: "Cellophane sausage casing, as part of an artificial kidney for dialysis.",
      source: {
        title: "Science Museum — Remarkable kidneys",
        url: "https://blog.sciencemuseum.org.uk/remarkable-kidneys/",
        note: "The museum describes Kolff’s wartime artificial kidney built using cellophane sausage skin, a car pump and a revolving drum.",
      },
    },
    {
      key: "medical-proust-asthma",
      question:
        "What did Marcel Proust use for asthma in 1901 that sounds as though it would make breathing worse?",
      answer: "Special anti-asthma cigarettes.",
      source: {
        title: "PubMed Central — “Divine Stramonium”: The Rise and Fall of Smoking for Asthma",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2844275/",
        note: "The article quotes Proust’s August 1901 letter describing lighting anti-asthma cigarettes and places medicated smoking in its historical therapeutic context.",
      },
    },
    {
      key: "medical-medicated-sponge",
      question:
        "In medieval surgical accounts, how could an ordinary sponge prepare a patient for an operation?",
      answer:
        "It was soaked in narcotic drugs and held near the nose to induce sleep or insensibility.",
      source: {
        title: "PubMed Central — An Arabic surgeon, Ibn al Quff’s account of surgical pain relief",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4173333/",
        note: "The historical review describes drugs administered with an anesthetic sponge near the nose and mouth for surgical pain relief; it does not establish modern safety or effectiveness.",
      },
    },
    {
      key: "medical-smoked-paper",
      question: "What did Robert Dudgeon’s 1876 apparatus let a doctor put on paper?",
      answer: "A patient’s pulse, traced by a wrist-strapped lever onto smoke-blackened paper.",
      source: {
        title: "Science Museum Group — Robert Dudgeon’s sphygmograph",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co93675/robert-dudgeons-sphygmograph",
        note: "The museum describes a wrist-strapped sphygmograph whose lever transmitted the pulse beat to smoked paper.",
      },
    },
    {
      key: "medical-auzoux-model",
      question:
        "What craft material did Louis Auzoux turn into full-size human teaching models in the nineteenth century?",
      answer: "Papier-mâché.",
      source: {
        title: "National Museums Scotland — Anatomy: A Matter of Death and Life",
        url: "https://www.nms.ac.uk/past-exhibitions/anatomy-a-matter-of-death-and-life",
        note: "The exhibition included a full-body papier-mâché anatomical model made in the workshops of nineteenth-century model maker Louis Auzoux.",
      },
    },
    {
      key: "medical-santorio-dining-chair",
      question:
        "How was Santorio’s seventeenth-century dining chair supposed to tell its occupant to stop eating?",
      answer:
        "It hung from a balance and sank when the diner had consumed a preset weight of food.",
      source: {
        title: "NTM — The Weighing Chair of Sanctorius Sanctorius: A Replica",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5993855/",
        note: "The paper quotes Santorio’s 1625 description: the suspended chair descended when food brought the sitter to a preset weight, signalling the end of the meal.",
      },
    },
    {
      key: "medical-auenbrugger-casks",
      question:
        "According to the traditional story, what innkeeper’s trick inspired Auenbrugger’s way of examining the chest?",
      answer: "Tapping wine casks to judge how full they were by the sound.",
      source: {
        title: "Christie’s — Auenbrugger, Inventum novum, 1761",
        url: "https://www.christies.com/en/lot/lot-933354",
        note: "The catalogue describes chest percussion and explicitly labels as legend the account that the innkeeper’s son drew inspiration from thumping wine casks to determine their fullness.",
      },
    },
    {
      key: "medical-cox-chair",
      question:
        "How did Joseph Mason Cox propose to calm an agitated patient with a special chair in 1804?",
      answer: "Spin the seated patient around, hoping to produce tranquillity and sleep.",
      source: {
        title: "Frontiers in Psychiatry — Cox’s Chair Revisited: Can Spinning Alter Mood States?",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3796758/",
        note: "The introduction quotes Cox’s 1804 description of a circulating chair and his claims that rotation calmed psychiatric patients and induced sleep; the historical practice was later abandoned.",
      },
    },
    {
      key: "medical-trephining",
      question:
        "What operation had the owner of a healed Neolithic skull in the Science Museum survived?",
      answer:
        "Having an opening cut into the skull; healing around it shows the person lived afterwards.",
      source: {
        title: "Science Museum Group — Excavated neolithic skull",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co106403/excavated-neolithic-skull",
        note: "The collection records a Neolithic human skull showing healed trephining and recovery from a fracture, evidence that its owner survived the skull-opening procedure.",
      },
    },
  ],
);
