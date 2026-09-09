import { definePack } from "./types";

export const secretSocieties = definePack(
  {
    key: "secret-societies",
    title: "Secret societies",
    blurb: "Concealed identities, improbable dining clubs and rituals behind closed doors.",
    category: "Secret societies",
    sort: 260,
  },
  [
    {
      key: "secret-sublime-emblem",
      question:
        "Which everyday object was an emblem of John Rich's 'Sublime Society', founded in London in 1735?",
      answer: "A gridiron: its members met to eat beefsteaks, drink wine and sing.",
      source: {
        title: "John Rylands Library — May Beef and Liberty be our reward!",
        url: "https://rylandscollections.com/2014/01/13/may-beef-and-liberty-be-our-reward/",
        note: "The library describes the dining society of 24 men and an early photograph of its gridiron emblem in Walter Arnold’s 1871 history.",
      },
    },
    {
      key: "secret-catholic-lodge-mascot",
      question:
        "Which unlikely creature became the emblem of an eighteenth-century society devised to sidestep a papal ban on Freemasonry?",
      answer:
        "A pug dog; the Order of the Pug offered Catholics an alternative to a Masonic lodge.",
      source: {
        title: "Smithsonian National Museum of American History — Meissen pair of pug dogs",
        url: "https://americanhistory.si.edu/collections/object/nmah_574955",
        note: "The museum identifies the Order of the Pug as a society modeled on Freemasonry and a ruse to sidestep Clement XII’s prohibition.",
      },
    },
    {
      key: "secret-benison-drinking-glasses",
      question:
        "What shape did some surviving drinking glasses of Anstruther's Beggar's Benison club take?",
      answer:
        "The shape of a penis: the all-male club created explicitly sexual ceremonial objects.",
      source: {
        title: "University of St Andrews — The Secret History of the Beggar’s Benison Collection",
        url: "https://university-collections.wp.st-andrews.ac.uk/2021/05/10/the-secret-history-of-the-beggars-benison-collection/",
        note: "The curator’s account describes phallus-shaped drinking glasses, medals and seals; it distinguishes surviving objects from merely possible sexual rituals.",
      },
    },
    {
      key: "secret-hellfire-excavation",
      question:
        "What public-works project gave West Wycombe villagers jobs after three failed harvests?",
      answer:
        "Digging the caves associated with the Hellfire Club; the excavated material also went into a new road.",
      source: {
        title: "National Trust — West Wycombe Trail",
        url: "https://www.nationaltrust.org.uk/visit/oxfordshire-buckinghamshire-berkshire/west-wycombe-park-village-and-hill/west-wycombe-trail",
        note: "The Hellfire Caves section connects the excavation to three failed harvests in 1748–1750 and road building between West and High Wycombe.",
      },
    },
    {
      key: "secret-globe-tavern",
      question:
        "What kind of drinking room high above West Wycombe village earned John Wilkes's enthusiastic praise?",
      answer: "A hollow golden ball atop the church tower, large enough to seat ten people.",
      source: {
        title: "National Trust — West Wycombe Trail",
        url: "https://www.nationaltrust.org.uk/visit/oxfordshire-buckinghamshire-berkshire/west-wycombe-park-village-and-hill/west-wycombe-trail",
        note: "The St Lawrence’s Church section describes the wooden golden ball, its ten seats and Wilkes’s remark. Its use for Hellfire meetings is described as reputed.",
      },
    },
    {
      key: "secret-cape-pokers",
      question:
        "What ordinary household implements served as symbols of authority for the Cape Club's 'Sovereign' in Edinburgh?",
      answer: "Two fire pokers.",
      source: {
        title: "National Library of Scotland — List of members of the Cape Club",
        url: "https://digital.nls.uk/learning/scottish-enlightenment/source/list-of-members-of-the-cape-club/",
        note: "The library’s introduction describes the president’s cape and two ceremonial pokers; the surviving club history also records the pokers among its regalia.",
      },
    },
    {
      key: "secret-cape-knighthood",
      question:
        "What were men calling themselves 'Sir Silence' and 'Sir Heavyhours' actually members of in eighteenth-century Edinburgh?",
      answer:
        "The Cape Club, a secretive tavern society whose members adopted mock-knightly aliases.",
      source: {
        title: "National Library of Scotland — List of members of the Cape Club",
        url: "https://digital.nls.uk/learning/scottish-enlightenment/source/list-of-members-of-the-cape-club/",
        note: "The source identifies members as Knights Companions, sworn to secrecy and known by pseudonyms including Sir Silence and Sir Heavyhours.",
      },
    },
    {
      key: "secret-apostles-whales",
      question:
        "What would you actually be eating if the Cambridge Conversazione Society offered you 'Whales'?",
      answer: "Sardines on toast.",
      source: {
        title: "King’s College Cambridge — A Cambridge Secret Revealed: the Apostles",
        url: "https://www.kings.cam.ac.uk/cambridge-secret-revealed-apostles",
        note: "The Archive Centre’s account explicitly identifies Whales as sardines on toast served with coffee at early meetings.",
      },
    },
    {
      key: "secret-apostles-angels",
      question:
        "What happened to a Cambridge Apostle when he ceased to be an active member of the society?",
      answer:
        "He became an Angel: a former member who could still be invited back to private dinners.",
      source: {
        title: "King’s College Cambridge — A Cambridge Secret Revealed: the Apostles",
        url: "https://www.kings.cam.ac.uk/cambridge-secret-revealed-apostles",
        note: "The college distinguishes active Apostles from former members called Angels and describes their periodic invitation to dinner.",
      },
    },
    {
      key: "secret-apostles-vote",
      question:
        "Why might listening carefully to an early Cambridge Apostles debate leave you unprepared for its closing vote?",
      answer:
        "The question put to the vote was supposed to be only tangentially related to the debate.",
      source: {
        title: "King’s College Cambridge — A Cambridge Secret Revealed: the Apostles",
        url: "https://www.kings.cam.ac.uk/cambridge-secret-revealed-apostles",
        note: "The archive states that making the voted question only tangentially related to the debate was a point of honour.",
      },
    },
    {
      key: "secret-yale-selection",
      question:
        "How are students traditionally notified that Yale's oldest senior society has selected them?",
      answer: "A member ritually claps them on the shoulder.",
      source: {
        title: "Encyclopaedia Britannica — Skull and Bones",
        url: "https://www.britannica.com/topic/Skull-and-Bones-Yale",
        note: "Britannica describes selection on tap day or tap night and notification by a ritual clap on the shoulder.",
      },
    },
    {
      key: "secret-darwin-dining",
      question:
        "What unusual weekly project did Charles Darwin and seven fellow Cambridge students organize together?",
      answer: "Eating rare delicacies together in the Glutton Club, then playing cards.",
      source: {
        title: "Christ’s College Cambridge — Darwin’s friends in Cambridge",
        url: "https://www.christs.cam.ac.uk/darwins-friends-cambridge-most-popular-and-most-welcome",
        note: "The college’s historical exhibition identifies Darwin as one of eight students in the Glutton Club, which met weekly in members’ rooms.",
      },
    },
    {
      key: "secret-kitcat-namesake",
      question: "What were the original 'kit-cats' that gave a famous London Whig club its name?",
      answer: "Mutton pies served by the tavern keeper Christopher Cat.",
      source: {
        title: "Encyclopaedia Britannica — Kit-Cat Club",
        url: "https://www.britannica.com/topic/Kit-Cat-Club",
        note: "Britannica links the club’s name to Christopher Cat’s mutton pies, not to cats or modern confectionery.",
      },
    },
    {
      key: "secret-thirteen-dinner-signal",
      question:
        "How did William Harnett Blanch's London dining club announce that dinner was ready?",
      answer:
        "By smashing two mirrors on the floor; the club was devoted to defying bad-luck superstitions.",
      source: {
        title: "BBC News - The dining club dedicated to disproving bad luck",
        url: "https://www.bbc.com/news/articles/c5yd7npe1zno",
        note: "The account of London's Thirteen Club, organized in 1890, says dinner was announced by smashing two mirrors on the floor before guests followed an undertaker under a ladder.",
      },
    },
    {
      key: "secret-enochian-language",
      question:
        "Where did Golden Dawn ritualists believe the Enochian language used in their ceremonies had come from?",
      answer: "Angels, through the earlier occult work of John Dee and Edward Kelley.",
      source: {
        title: "Encyclopaedia Britannica — Hermetic Order of the Golden Dawn",
        url: "https://www.britannica.com/topic/Hermetic-Order-of-the-Golden-Dawn",
        note: "The article says Mathers adopted Dee and Kelley’s Enochian system, whose language was alleged to have come from angels; this is a historical belief, not a supernatural claim.",
      },
    },
    {
      key: "secret-secret-chiefs",
      question:
        "Why were the top three grades of the Golden Dawn not ordinarily available to its members?",
      answer:
        "They were reserved for the “Secret Chiefs,” supposed spiritual adepts with supernormal powers.",
      source: {
        title: "Encyclopaedia Britannica — Hermetic Order of the Golden Dawn",
        url: "https://www.britannica.com/topic/Hermetic-Order-of-the-Golden-Dawn",
        note: "Britannica distinguishes ordinary and inner-order grades from the final three attributed to the Secret Chiefs, whose existence critics doubted.",
      },
    },
    {
      key: "secret-spartacus-correspondence",
      question:
        "What identity did the Bavarian Illuminati give their founder when corresponding in secret?",
      answer: "Spartacus: the classical alias used by university professor Adam Weishaupt.",
      source: {
        title: "Encyclopaedia Britannica — Illuminati",
        url: "https://www.britannica.com/topic/illuminati-group-designation",
        note: "Members received classical aliases for official writing: Weishaupt was Spartacus and Knigge was Philo.",
      },
    },
    {
      key: "secret-carbonari-police-rival",
      question:
        "How did Naples's police minister try to destroy the Carbonari after the Bourbon restoration?",
      answer:
        "He founded a rival secret society and recruited brigands to attack suspected revolutionaries.",
      source: {
        title: "Encyclopaedia Britannica, 1911 - Carbonari",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Carbonari",
        note: "The entry describes the prince of Canosa creating the Calderai del Contrappeso to suppress the Carbonari, recruiting brigands who attacked supposed Liberals. The effort failed to eliminate the movement.",
      },
    },
    {
      key: "secret-rosicrucian-announcement",
      question:
        "In the Rosicrucian founding legend, what discovery prompted the brotherhood to announce its existence?",
      answer: "Its founder’s tomb, supposedly rediscovered 120 years after his death.",
      source: {
        title: "Encyclopaedia Britannica — Rosicrucian",
        url: "https://www.britannica.com/topic/Rosicrucians",
        note: "The article explicitly labels Christian Rosenkreuz a generally regarded fictional figure and the tomb discovery an alleged event in the founding books.",
      },
    },
    {
      key: "secret-amorc-lessons",
      question:
        "How did H. Spencer Lewis spread supposedly secret Rosicrucian teachings to new members around the world?",
      answer: "Through mail-order lessons.",
      source: {
        title: "Encyclopaedia Britannica — Rosicrucian",
        url: "https://www.britannica.com/topic/Rosicrucians",
        note: "Britannica describes Lewis’s recruitment method after founding AMORC in New York in 1915.",
      },
    },
    {
      key: "secret-wilde-club-refusal",
      question:
        "Why did Oscar Wilde refuse an invitation to William Harnett Blanch's new London dining club?",
      answer:
        "It wanted to stamp out superstition, which Wilde loved; he called common sense the enemy of romance.",
      source: {
        title: "BBC News - The dining club dedicated to disproving bad luck",
        url: "https://www.bbc.com/news/articles/c5yd7npe1zno",
        note: "The article quotes Wilde's reply declining the Thirteen Club: 'I love superstitions' and 'Common sense is the enemy of romance.' He asked the club to leave some unreality.",
      },
    },
    {
      key: "secret-carbonari-greeting",
      question: "How would a nineteenth-century Carbonaro greet an unrelated fellow conspirator?",
      answer: "As a 'good cousin,' the society's customary form of address.",
      source: {
        title: "Encyclopaedia Britannica, 1911 — Carbonari",
        url: "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Carbonari",
        note: "The historical encyclopedia records the salutation buoni cugini and separates documented organization from fantastic claims of medieval origins.",
      },
    },
    {
      key: "secret-scriblerus-shared-character",
      question:
        "What did the literary circle founded by Pope, Swift, Gay, Parnell and Arbuthnot create as a shared vehicle for satire?",
      answer: "An invented, pretentious literary hack named Martinus Scriblerus.",
      source: {
        title: "Encyclopaedia Britannica — Scriblerus Club",
        url: "https://kids.britannica.com/scholars/article/Scriblerus-Club/2169",
        note: "The encyclopedia describes the fictional character as a device for ridiculing pretentious erudition and scholarly jargon.",
      },
    },
    {
      key: "secret-roxburghe-member-duty",
      question:
        "What substantial gift is each member of the Roxburghe Club traditionally expected to arrange for the others?",
      answer: "A finely printed and bound book, produced at the member’s own expense.",
      source: {
        title: "John Rylands Library — Roxburghe Club Bicentenary",
        url: "https://rylandscollections.com/2012/06/11/roxburghe-club-bicentenary/",
        note: "The library explains the publication obligation of the forty-member bibliophilic dining society.",
      },
    },
    {
      key: "secret-all-souls-century",
      question:
        "What unusual ceremony has All Souls College held at the beginning of successive centuries since 1701?",
      answer: "A procession celebrating a mallard, led by a “Lord Mallard.”",
      source: {
        title: "All Souls College Oxford — History of the College",
        url: "https://www.asc.ox.ac.uk/about/history",
        note: "The college records mallard-related ceremonies from 1633 and century-opening processions led by Lord Mallard from 1701.",
      },
    },
    {
      key: "secret-odd-fellows-skeletons",
      question: "What startling object might a new Odd Fellow encounter during initiation?",
      answer: "A real human skeleton, used to remind the initiate of mortality.",
      source: {
        title: "Smithsonian — Eight Secret Societies You Probably Haven’t Heard Of",
        url: "https://www.smithsonianmag.com/history/eight-secret-societies-you-probably-havent-heard-of-180958294/",
        note: "The Odd Fellows section identifies real skeletons and their memento-mori role; it does not claim every lodge uses them.",
      },
    },
    {
      key: "secret-oculist-eyebrow-initiation",
      question:
        "Why did candidates in one eighteenth-century German initiation have hairs plucked from their eyebrows?",
      answer:
        "It stood in for eye surgery: after failing to read a blank page, they were handed writing and declared able to see.",
      source: {
        title: "WIRED - They Cracked This 250-Year-Old Code, and Found a Secret Society Inside",
        url: "https://www.wired.com/2012/11/ff-the-manuscript/",
        note: "The opening reconstructs the Oculists' ritual from the deciphered Copiale manuscript: a blank page, spectacles, symbolic eyebrow plucking and a replacement written page. No flesh was cut.",
      },
    },
    {
      key: "secret-water-rats-pony",
      question:
        "According to its own history, what animal inspired the entertainers' brotherhood called the Grand Order of Water Rats?",
      answer:
        "A rain-soaked racing pony named Magpie, which a bus driver said looked like a water rat.",
      source: {
        title: "Grand Order of Water Rats - Our history",
        url: "https://gowr.co.uk/our-history/",
        note: "Curator Andre Vincent recounts a bus driver likening the pony Magpie to a water rat in the rain. Its racing syndicate then formed the fellowship Pals of the Water Rat.",
      },
    },
    {
      key: "secret-copiale-second-society",
      question:
        "What unexpected subject fills most of the deciphered Copiale manuscript, associated with a German order interested in eyes?",
      answer:
        "The secret rituals of the highest Masonic degrees: one secret society documenting another.",
      source: {
        title: "Smithsonian — Cracking a German Secret Society’s Centuries-Old Encrypted Code",
        url: "https://www.smithsonianmag.com/smart-news/cracking-a-german-secret-societys-centuries-old-encrypted-code-134867115/",
        note: "The account says the Oculists’ manuscript details high-degree Masonic rituals from page 27 through the remaining 78 pages. It treats espionage as an interpretation, not a proven motive.",
      },
    },
    {
      key: "secret-dukduk-mask",
      question:
        "What sort of mask identifies the male dukduk figure in the secret society of New Britain?",
      answer: "A tall cone with no face, unlike the tubuan mask with its painted eyes and mouth.",
      source: {
        title: "Encyclopaedia Britannica — Dukduk",
        url: "https://www.britannica.com/topic/Dukduk-Oceanic-secret-society",
        note: "The Oceanic art excerpt distinguishes the taller faceless dukduk from the tubuan with circular eyes and crescent mouth.",
      },
    },
  ],
);
