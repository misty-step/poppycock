import { definePack } from "./types";

export const forgottenProfessions = definePack(
  {
    key: "forgotten-professions",
    title: "Forgotten professions",
    blurb: "Vanished livelihoods, peculiar job titles and unexpected ways to earn a living.",
    category: "Forgotten professions",
    sort: 510,
  },
  [
    {
      key: "forgotten-human-computers",
      question:
        "What was unusual about the computers that NACA recruited to analyse wartime flight research in the 1940s?",
      answer:
        "They were people, including teams of women paid to perform mathematical calculations.",
      source: {
        title: "Smithsonian Magazine — The True Story of Hidden Figures",
        url: "https://www.smithsonianmag.com/history/forgotten-black-women-mathematicians-who-helped-win-wars-and-sent-astronauts-space-180960393/",
        note: "The article describes NACA’s human computers at Langley, including the Black women of the West Area Computing unit who analysed flight-research data.",
      },
    },
    {
      key: "forgotten-log-earmarks",
      question:
        "Why did Maine river drivers inspect the axe marks on floating timber before sending it to a sawmill?",
      answer:
        "The marks identified the owners, allowing mixed logs to be sorted into the correct batches.",
      source: {
        title: "Library of Congress — Interviews with William “Billy Bell”",
        url: "https://www.loc.gov/static/programs/national-recording-preservation-board/documents/Interviews-with-William-Billy-Bell_Macdougall.pdf",
        note: "The archival essay describes drivers sorting logs into booms. Axe-cut ear-marks identified each owner so the timber could be sent to the proper sawmill.",
      },
    },
    {
      key: "forgotten-lamplighter-verses",
      question:
        "Why did some London lamplighters deliver printed poems to households just before Christmas?",
      answer: "They hoped residents would reward their year’s service with a tip.",
      source: {
        title: "London Museum — Gas Lamp-Lighters’ Poems",
        url: "https://www.londonmuseum.org.uk/collections/v/object-101283/gas-lamp-lighters-poems/",
        note: "The museum describes a tradition of lamplighters distributing first-person verses before Christmas in hopes of a financial tip from householders.",
      },
    },
    {
      key: "forgotten-ratcatcher-pets",
      question:
        "What surprising fate awaited some live catches made by Victorian London rat-catchers?",
      answer: "They were sold as pets rather than killed.",
      source: {
        title: "London Museum — A rat catcher",
        url: "https://www.londonmuseum.org.uk/collections/v/object-94971/a-rat-catcher/",
        note: "The museum’s account of Henderson’s rat-catcher watercolour states that some captured rats were sold as pets; others went to rat-baiting.",
      },
    },
    {
      key: "forgotten-herb-strewer",
      question:
        "What ceremonial task did Anne Fellowes and her companions perform at George IV’s 1821 coronation?",
      answer:
        "Leading women who scattered flowers along the procession’s route, traditionally to ward off disease.",
      source: {
        title:
          "Wellcome Collection — Seven women appointed to strew herbs at the coronation of King George IV",
        url: "https://wellcomecollection.org/works/mp9r3zgs",
        note: "The catalogue identifies Miss Anne Fellowes and her companions as the coronation’s herb strewers. They scattered flowers between Westminster Hall and the Abbey to ward off pestilence.",
      },
    },
    {
      key: "forgotten-crane-treaders",
      question:
        "How did workers supply the motive power for Harwich’s seventeenth-century enclosed harbour crane?",
      answer: "By walking inside two giant wooden wheels, like people in a hamster wheel.",
      source: {
        title: "The Harwich Society — Treadwheel Crane",
        url: "https://www.harwich-society.co.uk/maritime-heritage-trail/treadwheel-crane/",
        note: "The society explains that men walked inside the two wheels to operate the crane, unlike prison treadmills where workers stood on the outside.",
      },
    },
    {
      key: "forgotten-potato-handwarmers",
      question:
        "Why could a Victorian London vendor make a sale even when the customer did not want to eat the hot potato?",
      answer: "Customers also bought baked potatoes to warm their hands in winter.",
      source: {
        title: "London Museum — Henry Mayhew brings Victorian London to life",
        url: "https://www.londonmuseum.org.uk/collections/london-stories/henry-mayhew-brings-victorian-london-life/",
        note: "The article says traders kept baked potatoes hot in portable coal-heated trays, and that winter customers bought them as hand warmers as well as food.",
      },
    },
    {
      key: "forgotten-crossing-sweeper",
      question:
        "How did an elderly worker with a broom turn a passing London pedestrian into a potential customer?",
      answer: "By sweeping a clean path ahead of them, then hoping for a tip.",
      source: {
        title: "London Museum — Henry Mayhew brings Victorian London to life",
        url: "https://www.londonmuseum.org.uk/collections/london-stories/henry-mayhew-brings-victorian-london-life/",
        note: "Mayhew’s street sweepers cleaned ahead of people as they walked and hoped for tips. The account includes an elderly or disabled workforce and a one-legged Chancery Lane sweeper.",
      },
    },
    {
      key: "forgotten-dustman-fertiliser",
      question:
        "What did nineteenth-century London dustmen collect from households to sell to gardeners and farmers?",
      answer: "Ashes from household fireplaces, sold as fertiliser.",
      source: {
        title: "London Museum — Henry Mayhew brings Victorian London to life",
        url: "https://www.londonmuseum.org.uk/collections/london-stories/henry-mayhew-brings-victorian-london-life/",
        note: "The London Museum explicitly describes dustmen gathering fireplace ashes and selling them as fertiliser for gardens and farms.",
      },
    },
    {
      key: "forgotten-long-song-seller",
      question:
        "What was a London street seller offering when he cried “Three yards a penny” in Mayhew’s day?",
      answer: "Popular songs printed on long strips of paper, hung from a pole.",
      source: {
        title: "London Museum — Henry Mayhew brings Victorian London to life",
        url: "https://www.londonmuseum.org.uk/collections/london-stories/henry-mayhew-brings-victorian-london-life/",
        note: "The article identifies long-song sellers, their lengthy paper strips hung on poles, and the cry “Three yards a penny!” Rain and fog made this a summer trade.",
      },
    },
    {
      key: "forgotten-toss-the-pieman",
      question:
        "What could a customer do instead of making an ordinary purchase from a Victorian London hot-pieman?",
      answer: "Bet a penny on a coin toss for the chance to win a free pie.",
      source: {
        title: "London Museum — Henry Mayhew brings Victorian London to life",
        url: "https://www.londonmuseum.org.uk/collections/london-stories/henry-mayhew-brings-victorian-london-life/",
        note: "The museum explains “toss the pieman”: a customer bet a penny on the toss of a coin for a chance of a free meat pie.",
      },
    },
    {
      key: "forgotten-optical-operators",
      question:
        "What did operators on the Admiralty’s 1820s communication chain rearrange to send a message to the next station?",
      answer: "Two large movable arms on a mast, whose positions encoded the signals.",
      source: {
        title:
          "Science Museum Group — Documents relating to the Portsmouth-to-Admiralty semaphore line",
        url: "https://collection.sciencemuseumgroup.org.uk/documents/aa110108752/collection-of-documents-relating-to-the-portsmouth-to-admiralty-semaphore-line-designed-by-sir-home-riggs-popham",
        note: "Popham’s optical system used two arms with seven possible positions each, giving 49 signals. The main line operated from 1822 to 1847.",
      },
    },
    {
      key: "forgotten-cats-meat-man",
      question:
        "Who were the intended customers for the cheap meat and offal sold by London’s “cat’s meat men”?",
      answer: "Pet cats and dogs; the meat was for them, not made from them.",
      source: {
        title: "London Museum — A cat and dog’s meat shop on Bishops Bridge Road, Paddington",
        url: "https://www.londonmuseum.org.uk/collections/v/object-742735/a-cat-and-dogs-meat-shop-on-bishops-bridge-road-paddington/",
        note: "The museum explains that before tinned pet food, owners bought cheap meat and offal from shops or street sellers called cat’s meat men.",
      },
    },
    {
      key: "forgotten-portable-darkroom",
      question:
        "Why might a photographer using Archer’s 1853 camera put both hands through black velvet sleeves?",
      answer:
        "The camera doubled as a darkroom, letting them prepare and develop the glass plate inside.",
      source: {
        title:
          "National Science and Media Museum — Frederick Scott Archer and the wet-collodion process",
        url: "https://blog.scienceandmediamuseum.org.uk/photography-a-z-frederick-scott-archer-wet-collodion-process/",
        note: "Archer’s camera had two black velvet sleeves through which the photographer could sensitise, develop and fix the glass plate inside the camera, which served as a portable darkroom.",
      },
    },
    {
      key: "forgotten-telegraph-messenger",
      question:
        "What sort of destination appears in Lewis Hine’s 1910 record of fourteen-year-old messenger Charles Gibbon?",
      answer: "Houses of prostitution.",
      source: {
        title: "Library of Congress — Charles Gibbon, Postal Telegraph Messenger",
        url: "https://www.loc.gov/item/2018674833/",
        note: "Hine’s May 1910 Wilmington caption gives Gibbon’s age as fourteen, describes his postal telegraph work, and explicitly records “Visits houses of prostitution.”",
      },
    },
    {
      key: "forgotten-breaker-boys",
      question:
        "What were the children at a Pennsylvania coal breaker manually picking out, as photographed around 1913?",
      answer: "Pieces of slate mixed in with the coal.",
      source: {
        title:
          "Library of Congress — Boys picking slate in a great coal breaker, anthracite mines, Pa.",
        url: "https://www.loc.gov/item/2007681337/",
        note: "The circa-1913 Underwood & Underwood stereograph is titled “Boys picking slate in a great coal breaker” and its catalogue summary identifies the task at a Pennsylvania anthracite mine.",
      },
    },
    {
      key: "forgotten-trapper-boy",
      question:
        "What did fifteen-year-old Vance do for seventy-five cents over a ten-hour shift in a West Virginia mine in 1908?",
      answer: "Open and shut a door whenever the mine cars came through.",
      source: {
        title: "Library of Congress — Vance, a Trapper Boy, 15 years old",
        url: "https://www.loc.gov/item/2018673797/",
        note: "Lewis Hine’s caption gives the boy’s age, ten-hour shift and $0.75 daily pay, and states that his work was opening and shutting the door while waiting for cars.",
      },
    },
    {
      key: "forgotten-hello-girls",
      question:
        "What essential service did the U.S. Army’s “Hello Girls” provide in France during the First World War?",
      answer:
        "They manually connected telephone calls, often translating between French and English.",
      source: {
        title:
          "Smithsonian Magazine — The Women on the Frontlines of WWI Came to Operate Telephones",
        url: "https://www.smithsonianmag.com/history/women-frontlines-wwi-came-operate-telephones-180962687/",
        note: "The article describes bilingual Signal Corps switchboard operators who connected military calls and translated between French and English.",
      },
    },
    {
      key: "forgotten-bottom-knocker",
      question:
        "What did a Staffordshire factory’s “bottom knocker” repeatedly flatten with a long-handled mallet?",
      answer:
        "Fireclay for the bases of protective containers used to hold pottery during kiln firing.",
      source: {
        title: "Potteries Museum & Art Gallery — Saggar Making",
        url: "https://potteries.staffspasttrack.org.uk/Details.aspx?ResourceID=15258",
        note: "The museum’s 1910 photograph record states that a saggar maker’s bottom knocker hammered clay flat inside an iron ring to make the base of a fireclay kiln container.",
      },
    },
    {
      key: "forgotten-oakum-picker",
      question:
        "Why did some labourers spend their working day pulling worn-out rope into separate fibres?",
      answer: "The fibres became oakum, packed into the seams of wooden ships to keep water out.",
      source: {
        title: "London Museum — Caulking-iron, shipwright’s caulking iron",
        url: "https://www.londonmuseum.org.uk/collections/v/object-281234/caulking-iron-shipwrights-caulking-iron/",
        note: "The museum describes oakum as fibrous material from old rope, forced between ship planks to make them watertight. Its Holloway prison illustration separately documents oakum-picking labour.",
      },
    },
    {
      key: "forgotten-gandy-caller",
      question:
        "Why did some railway maintenance gangs need a lead singer during their working day?",
      answer:
        "His calls synchronised the workers’ movements so they could shift heavy track together.",
      source: {
        title: "Encyclopedia of Alabama — Gandy Dancer Work Song Tradition",
        url: "https://encyclopediaofalabama.org/article/gandy-dancer-work-song-tradition/",
        note: "The history explains how a caller’s work songs coordinated track lining and rail carrying; timing the gang’s pull mattered more than any individual’s strength.",
      },
    },
    {
      key: "forgotten-powder-monkey",
      question:
        "What did the young crew member photographed beside a gun on USS Pawnee carry during a battle?",
      answer: "Cartridges from the ship’s magazine to its guns, as a “powder monkey”.",
      source: {
        title: "Library of Congress — A powder monkey on the Pawnee",
        url: "https://www.loc.gov/item/2016646733/",
        note: "The stereograph’s original caption explicitly describes powder monkeys’ duty as carrying cartridges from the magazine to the guns during a fight.",
      },
    },
    {
      key: "forgotten-loblolly-boy",
      question:
        "Why might an old naval surgeon’s assistant scatter sand around the place where he worked?",
      answer: "To keep the surgeon from slipping on a blood-soaked deck.",
      source: {
        title: "USS Midway Museum — The Odyssey of the Navy’s Enlisted Medical Titles",
        url: "https://www.midway.org/blog/the-odyssey-of-the-navys-enlisted-medical-titles",
        note: "The ship historian lists duties of “Loblolly Boys”, including pouring sand to maintain the surgeon’s traction on a blood-soaked deck during combat surgery.",
      },
    },
    {
      key: "forgotten-scribe-sand",
      question: "Why might a manuscript scribe push a feather into hot sand before beginning work?",
      answer: "To cure and harden it so it could be cut into a quill pen.",
      source: {
        title:
          "University of Illinois Rare Book and Manuscript Library — Making Quills Part 1: Curing",
        url: "https://www.library.illinois.edu/rbx/2020/02/12/making-quills-part-1-curing/",
        note: "The library describes quill preparation as part of a medieval scribe’s work and explains sand curing as a faster alternative to drying feathers for years.",
      },
    },
    {
      key: "forgotten-sandwich-advertiser",
      question:
        "What did the worker in William Nicholson’s 1898 “Sandwich Man” print wear to earn his living?",
      answer: "Advertising boards on his front and back, promoting an exhibition of a painting.",
      source: {
        title: "Cleveland Museum of Art — London Types: Sandwich Man",
        url: "https://www.clevelandart.org/art/2010.620",
        note: "The museum identifies the boards as advertisements for Mihály Munkácsy’s Ecce Homo, then exhibited at the Dowdeswell Galleries; the print depicts the man carrying the boards.",
      },
    },
    {
      key: "forgotten-climbing-boy",
      question:
        "Where did a nineteenth-century master employ a small apprentice known as a “climbing boy”?",
      answer: "Inside narrow chimneys, scraping out the soot.",
      source: {
        title: "London Museum — Chimney sweeps: a soot-stained past",
        url: "https://www.londonmuseum.org.uk/collections/london-stories/chimney-sweeps-soot-stained-past/",
        note: "The museum states that master sweeps employed children small enough to climb inside narrow chimneys, where they scraped away soot beyond the reach of brushes.",
      },
    },
    {
      key: "forgotten-hatting-carroter",
      question:
        "What was being treated in the nineteenth-century manufacturing process called “carroting”?",
      answer: "Animal fur, treated with mercury compounds to prepare it for making felt hats.",
      source: {
        title: "Smithsonian Magazine — After Millennia of Heavy Use, Mercury Gets the Boot",
        url: "https://www.smithsonianmag.com/smart-news/after-millennia-of-heavy-use-mercury-gets-the-boot-3154481/",
        note: "The article quotes the American Chemical Society’s description of carroting animal fur with mercury(II) nitrate during felt manufacture and describes the resulting occupational poisoning of hatters.",
      },
    },
    {
      key: "forgotten-link-boy",
      question: "What service could a Londoner buy from a “link-boy” outside a theatre after dark?",
      answer: "A torch-lit escort through the streets to their destination.",
      source: {
        title: "JSTOR Daily — Walking Streetlamps for Hire in Seventeenth-Century London",
        url: "https://daily.jstor.org/walking-streetlamps-for-hire-in-seventeenth-century-london/",
        note: "The article describes paid torch-bearers waiting near theatres, taverns and gambling halls and lighting customers’ way through dark streets.",
      },
    },
    {
      key: "forgotten-itinerant-grinder",
      question:
        "What could a customer have done for a penny by one of Whitehall’s itinerant grinders in 1804?",
      answer: "Have a penknife sharpened.",
      source: {
        title: "London Museum — Knives to Grind (Whitehall)",
        url: "https://www.londonmuseum.org.uk/collections/v/object-94740/knives-to-grind-whitehall/",
        note: "The museum quotes the 1804 Itinerant Traders of London description: knife grinders charged a penny to sharpen a penknife, with other prices for scissors and table knives.",
      },
    },
    {
      key: "forgotten-parish-bellman",
      question:
        "What information service did a London parish employ its bellman to provide before broadcasting existed?",
      answer: "Making public announcements aloud in the streets.",
      source: {
        title: "London Museum — A Copy of Verses for the Year 1835",
        url: "https://www.londonmuseum.org.uk/collections/v/object-101284/a-copy-of-verses-for-the-year-1835-humbly-presented-to-all-the-worthy-inhabitants-of-the-parish-of-st-pancras-middlesex/",
        note: "The catalogue identifies W.D. Stanley as a beadle and bellman, depicts him as town crier, and states that bellmen were parish officers responsible for public announcements in the streets.",
      },
    },
  ],
);
