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
        "What did Elisha Perkins claim his little metal rods could draw out of a sick person in 1795?",
      answer: "Excess electricity, which he claimed was responsible for disease.",
      source: {
        title: "Science Museum Group — Two Perkins tractors",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co140928/two-perkins-tractors",
        note: "Perkins passed tapered metal rods over the body, claiming to remove excess electricity and thereby disease. The museum states that the treatment was discredited.",
      },
    },
    {
      key: "medical-mechanical-leech",
      question:
        "What living creature did Heurteloup replace with a small brass instrument in nineteenth-century treatment?",
      answer: "A leech: the instrument was a mechanical substitute for bloodletting.",
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
      question: "What was a bezoar, prized by some historical healers as an antidote?",
      answer: "A stony mass formed inside an animal’s stomach or intestines.",
      source: {
        title: "Science Museum Group — Bezoar stone, from a goat",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co106471/bezoar-stone-from-a-goat-c-1801-1920",
        note: "The goat bezoar entry explains that these masses form in digestive systems and were once believed to counter poison.",
      },
    },
    {
      key: "medical-earthworm-oil",
      question:
        "What creatures were boiled with olive oil and wine to make an eighteenth-century preparation for aching joints?",
      answer: "Earthworms.",
      source: {
        title: "Science Museum Group — Syrup jar for Oil of Earthworms",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co78875/syrup-jar-for-oil-of-earthworms-italy-1731-1770",
        note: "The jar entry records an earthworm-oil recipe and says pharmacists recommended the preparation for aching joints, arthritis, rickets and cramp; efficacy was disputed even then.",
      },
    },
    {
      key: "medical-snail-chocolate",
      question:
        "What unexpected animal ingredient appeared in medicinal chocolate described by Figuier in 1840?",
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
      question:
        "What did Charles II personally do for thousands of people with swollen glands, supposedly to cure them?",
      answer: "Touch them: the royal touch was believed to cure scrofula.",
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
        "What improvised object did René Laennec use to examine a patient in 1816 before developing his famous instrument?",
      answer: "A sheet of paper rolled into a tube, used to listen to her heart.",
      source: {
        title: "Science Museum — Understanding bodily functions",
        url: "https://www.sciencemuseum.org.uk/objects-and-stories/medicine/understanding-bodily-functions",
        note: "Laennec rolled paper into a tube to listen to a patient’s heart; he later replaced it with a wooden tube and named the instrument a stethoscope.",
      },
    },
    {
      key: "medical-susruta-ants",
      question:
        "What tiny visitors helped Susruta recognize an unusual property of some patients’ urine?",
      answer: "Black ants, attracted to its sugar in what is now recognized as diabetes.",
      source: {
        title: "Science Museum — Understanding bodily functions",
        url: "https://www.sciencemuseum.org.uk/objects-and-stories/medicine/understanding-bodily-functions",
        note: "The museum attributes to Susruta the observation that black ants were attracted to the sugar in some people’s urine, a characteristic of diabetes mellitus.",
      },
    },
    {
      key: "medical-frog-test",
      question:
        "Why were some twentieth-century laboratories injecting women’s urine into live frogs?",
      answer: "To test for pregnancy: a female frog laying eggs could indicate a positive result.",
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
      question:
        "What drug did Bayer market from 1898 as a cough suppressant and supposedly non-addictive substitute for morphine?",
      answer: "Heroin.",
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
        "What was the rete mirabile that Galen mistakenly placed at the base of the human brain?",
      answer:
        "A network of blood vessels supposedly converting “vital spirit” into “animal spirit.”",
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
        "What surprising product did Marcel Proust repeatedly light during a severe asthma attack in 1901?",
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
        "In medieval accounts of surgery, what was a physician trying to achieve with a medicated sponge held near the patient’s nose?",
      answer: "Induce sleep or insensibility to reduce the pain of an operation.",
      source: {
        title: "PubMed Central — An Arabic surgeon, Ibn al Quff’s account of surgical pain relief",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4173333/",
        note: "The historical review describes drugs administered with an anesthetic sponge near the nose and mouth for surgical pain relief; it does not establish modern safety or effectiveness.",
      },
    },
    {
      key: "medical-smoked-paper",
      question:
        "What did the moving lever of Robert Dudgeon’s wrist-mounted apparatus trace onto smoked paper?",
      answer: "The patient’s pulse.",
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
      key: "medical-antimony-cup",
      question:
        "What was the intended effect of drinking wine left standing in a seventeenth-century antimony cup?",
      answer: "Sweating and vomiting, caused by toxic antimony dissolving into the wine.",
      source: {
        title: "Science Museum Group — Antimony cup, Europe, 1501–1700",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co142080/antimony-cup-europe-1501-1700",
        note: "Wine stood in antimony cups so a little metal dissolved; the resulting toxic preparation was used to purge illness through sweating and vomiting.",
      },
    },
    {
      key: "medical-ketham-wheel",
      question:
        "What was the colour wheel in Johannes de Ketham’s 1491 medical compilation intended to classify?",
      answer: "Twenty different shades of urine.",
      source: {
        title: "Science Museum — Understanding bodily functions",
        url: "https://www.sciencemuseum.org.uk/objects-and-stories/medicine/understanding-bodily-functions",
        note: "The museum describes the 1491 Fasciculus Medicinae, attributed to de Ketham, and its twenty-shade urine colour wheel with diagnostic interpretations.",
      },
    },
    {
      key: "medical-artificial-issue",
      question:
        "In older medicine, what did a practitioner deliberately create when they made an “issue”?",
      answer: "An artificial ulcer intended to discharge pus and relieve another affected part.",
      source: {
        title: "Webster’s 1913 — Issue",
        url: "https://www.websters1913.com/words/Issue",
        note: "Medical sense 7 defines an issue as an artificial ulcer, usually in the arm or leg, made to produce pus as a supposed treatment.",
      },
    },
    {
      key: "medical-trephining",
      question: "What did the ancient procedure called trephining involve?",
      answer: "Making an opening in the skull.",
      source: {
        title: "Science Museum Group — Excavated neolithic skull",
        url: "https://collection.sciencemuseumgroup.org.uk/objects/co106403/excavated-neolithic-skull",
        note: "The collection records a Neolithic human skull showing healed trephining and recovery from a fracture, evidence that its owner survived the skull-opening procedure.",
      },
    },
  ],
);
