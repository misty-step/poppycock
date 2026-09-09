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
        "What practical purpose, besides hosting clandestine meetings, did digging the West Wycombe caves serve?",
      answer:
        "It employed local people after failed harvests and supplied material for a new road.",
      source: {
        title: "National Trust — West Wycombe Trail",
        url: "https://www.nationaltrust.org.uk/visit/oxfordshire-buckinghamshire-berkshire/west-wycombe-park-village-and-hill/west-wycombe-trail",
        note: "The Hellfire Caves section connects the excavation to three failed harvests in 1748–1750 and road building between West and High Wycombe.",
      },
    },
    {
      key: "secret-globe-tavern",
      question:
        "What unusual room at West Wycombe did John Wilkes praise as 'the best globe tavern I was ever in'?",
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
        "What did titles such as 'Sir Silence' and 'Sir Heavyhours' signify in eighteenth-century Edinburgh?",
      answer: "Playful aliases adopted by members of the secretive, tavern-based Cape Club.",
      source: {
        title: "National Library of Scotland — List of members of the Cape Club",
        url: "https://digital.nls.uk/learning/scottish-enlightenment/source/list-of-members-of-the-cape-club/",
        note: "The source identifies members as Knights Companions, sworn to secrecy and known by pseudonyms including Sir Silence and Sir Heavyhours.",
      },
    },
    {
      key: "secret-apostles-whales",
      question:
        "What were the 'Whales' served at early Saturday meetings of the Cambridge Conversazione Society?",
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
        "Who were the 'Angels' invited to occasional private dinners by the Cambridge Apostles?",
      answer: "Former active members, including graduates and fellows.",
      source: {
        title: "King’s College Cambridge — A Cambridge Secret Revealed: the Apostles",
        url: "https://www.kings.cam.ac.uk/cambridge-secret-revealed-apostles",
        note: "The college distinguishes active Apostles from former members called Angels and describes their periodic invitation to dinner.",
      },
    },
    {
      key: "secret-apostles-vote",
      question:
        "What deliberate oddity governed the question put to a vote after early Cambridge Apostles debates?",
      answer: "It was supposed to have only a tangential connection to what they had just debated.",
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
      answer: "A dining club devoted to trying rare delicacies, followed by card games.",
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
      key: "secret-kneller-format",
      question:
        "What specialized artistic term arose from Godfrey Kneller's portraits of a London club's members?",
      answer: "The “kit-cat”: a portrait canvas measuring 36 by 28 inches.",
      source: {
        title: "Encyclopaedia Britannica — Kit-Cat Club",
        url: "https://www.britannica.com/topic/Kit-Cat-Club",
        note: "Britannica records 42 member portraits and identifies their 36-by-28-inch canvas format as a kit-cat.",
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
        "Why could a letter to 'Spartacus' in eighteenth-century Bavaria be intended for a university professor?",
      answer:
        "It was the secret correspondence name of Adam Weishaupt, founder of the Bavarian Illuminati.",
      source: {
        title: "Encyclopaedia Britannica — Illuminati",
        url: "https://www.britannica.com/topic/illuminati-group-designation",
        note: "Members received classical aliases for official writing: Weishaupt was Spartacus and Knigge was Philo.",
      },
    },
    {
      key: "secret-imaginary-geography",
      question:
        "How did the Bavarian Illuminati make the place names in their internal correspondence misleading?",
      answer: "They gave towns and provinces arbitrary new names.",
      source: {
        title: "Encyclopaedia Britannica — Illuminati",
        url: "https://www.britannica.com/topic/illuminati-group-designation",
        note: "Britannica explains that ciphered correspondence also disguised geography by assigning new, arbitrary designations to towns and provinces.",
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
      key: "secret-phi-beta-kappa-origins",
      question:
        "Before becoming an academic honour society, what sort of organization was Phi Beta Kappa?",
      answer: "A secret literary and philosophical society founded at William and Mary in 1776.",
      source: {
        title: "Encyclopaedia Britannica — Phi Beta Kappa",
        url: "https://www.britannica.com/topic/Phi-Beta-Kappa",
        note: "The article distinguishes the society’s secret literary origins from its nineteenth-century development as an honour society.",
      },
    },
    {
      key: "secret-carbonari-greeting",
      question:
        "What family relationship did members of the Carbonari use when greeting one another?",
      answer: "They addressed one another as “good cousins.”",
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
      question: "Why have real human skeletons been kept in some Odd Fellows lodges?",
      answer: "They are used in initiation ceremonies to remind members of their mortality.",
      source: {
        title: "Smithsonian — Eight Secret Societies You Probably Haven’t Heard Of",
        url: "https://www.smithsonianmag.com/history/eight-secret-societies-you-probably-havent-heard-of-180958294/",
        note: "The Odd Fellows section identifies real skeletons and their memento-mori role; it does not claim every lodge uses them.",
      },
    },
    {
      key: "secret-foresters-examination",
      question:
        "What kind of examination did aspiring Independent Order of Foresters members have to pass, according to an 1879 report?",
      answer: "A medical examination by a physician connected with the order.",
      source: {
        title: "Smithsonian — Eight Secret Societies You Probably Haven’t Heard Of",
        url: "https://www.smithsonianmag.com/history/eight-secret-societies-you-probably-havent-heard-of-180958294/",
        note: "The Foresters section quotes the Boston Weekly Globe’s 1879 account of the physician’s examination, in the context of mutual financial benefits.",
      },
    },
    {
      key: "secret-workmen-dollar",
      question:
        "When an early Ancient Order of United Workmen member died, what was each surviving brother expected to do?",
      answer: "Contribute one dollar to the dead member’s family.",
      source: {
        title: "Smithsonian — Eight Secret Societies You Probably Haven’t Heard Of",
        url: "https://www.smithsonianmag.com/history/eight-secret-societies-you-probably-havent-heard-of-180958294/",
        note: "The article describes a one-dollar contribution from each member at a death and the later cap of $2,000 on the group donation.",
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
        "What is notably missing from the taller of the two cone-shaped masks used by the Dukduk society of New Britain?",
      answer:
        "A face: the male dukduk mask is faceless, unlike the eye-and-mouth design of the tubuan.",
      source: {
        title: "Encyclopaedia Britannica — Dukduk",
        url: "https://www.britannica.com/topic/Dukduk-Oceanic-secret-society",
        note: "The Oceanic art excerpt distinguishes the taller faceless dukduk from the tubuan with circular eyes and crescent mouth.",
      },
    },
  ],
);
