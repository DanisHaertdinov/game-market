import {GameInfo, UserInfo} from '../types';

export const USERS: UserInfo[] = [
    {
        id: 1,
        name: "Hill Merritt",
        age: 9,
        email: "hillmerritt@playce.com",
        friendIds: [2]
    },
    {
        id: 2,
        name: "Johnston Carr",
        age: 14,
        email: "johnstoncarr@playce.com",
        friendIds: [12, 25, 1, 7]
    },
    {
        id: 3,
        name: "Dolores Berger",
        age: 16,
        email: "doloresberger@playce.com",
    },
    {
        id: 4,
        name: "Lakisha Blackburn",
        age: 22,
        email: "lakishablackburn@playce.com",
    },
    {
        id: 5,
        name: "Diaz Gaines",
        email: "diazgaines@playce.com",
    },
    {
        id: 6,
        name: "Karin Fisher",
        email: "karinfisher@playce.com",
        friendIds: [9, 12, 30, 13, 1, 2, 9]
    },
    {
        id: 7,
        name: "Margarita Justice",
        age: 16,
        email: "margaritajustice@playce.com",
    },
    {
        id: 8,
        name: "Wiggins Olsen",
        age: 10,
        email: "wigginsolsen@playce.com",
        friendIds: [1, 28, 17, 21]
    },
    {
        id: 9,
        name: "Shields Charles",
        age: 9,
        email: "shieldscharles@playce.com",
    },
    {
        id: 10,
        name: "Betsy Lawson",
        age: 23,
        email: "betsylawson@playce.com",
        friendIds: [3, 6, 11, 19, 30]
    },
    {
        id: 11,
        name: "Moses Fuller",
        age: 18,
        email: "mosesfuller@playce.com",
    },
    {
        id: 12,
        name: "Alta Shaffer",
        email: "altashaffer@playce.com",
    },
    {
        id: 13,
        name: "Cherie Koch",
        age: 11,
        email: "cheriekoch@playce.com",
    },
    {
        id: 14,
        name: "Tamara Phelps",
        age: 35,
        email: "tamaraphelps@playce.com",
    },
    {
        id: 15,
        name: "Luna Clayton",
        email: "lunaclayton@playce.com",
    },
    {
        id: 16,
        name: "Cameron Montgomery",
        age: 16,
        email: "cameronmontgomery@playce.com",
    },
    {
        id: 17,
        name: "Blankenship Cabrera",
        age: 32,
        email: "blankenshipcabrera@playce.com",
    },
    {
        id: 18,
        name: "Krista Huffman",
        age: 22,
        email: "kristahuffman@playce.com",
        friendIds: [1, 7, 9, 10, 11, 13]
    },
    {
        id: 19,
        name: "Cleo Hancock",
        email: "cleohancock@playce.com",
        friendIds: [4]
    },
    {
        id: 20,
        name: "Snow Daniel",
        age: 31,
        email: "snowdaniel@playce.com",
        friendIds: [21]
    },
    {
        id: 21,
        name: "Foley Vaughan",
        age: 27,
        email: "foleyvaughan@playce.com",
        friendIds: [29]
    },
    {
        id: 22,
        name: "Deana Vasquez",
        age: 21,
        email: "deanavasquez@playce.com",
        friendIds: [6, 14]
    },
    {
        id: 23,
        name: "Boyle Mosley",
        age: 12,
        email: "boylemosley@playce.com",
        friendIds: [13]
    },
    {
        id: 24,
        name: "Ernestine Nolan",
        age: 21,
        email: "ernestinenolan@playce.com",
        friendIds: [22]
    },
    {
        id: 25,
        name: "Audrey Slater",
        age: 25,
        email: "audreyslater@playce.com",
    },
    {
        id: 26,
        name: "Courtney Humphrey",
        email: "courtneyhumphrey@playce.com",
    },
    {
        id: 27,
        name: "Robertson Cherry",
        age: 14,
        email: "robertsoncherry@playce.com",
    },
    {
        id: 28,
        name: "Roberts Albert",
        email: "robertsalbert@playce.com",
    },
    {
        id: 29,
        name: "Iva Reyes",
        age: 6,
        email: "ivareyes@playce.com",
        friendIds: [3, 7]
    },
    {
        id: 30,
        name: "Angelina Mcfarland",
        email: "angelinamcfarland@playce.com",
        friendIds: [16, 26]
    }
];

export const GAMES: GameInfo[] = [
    {
        id: 1,
        title: 'Super Maro Bros. 3',
        developer: 'Nintendo',
        released: '1990',
        price: 100,
        description: 'While The Legend of Zelda and Super Mario Bros. are unarguable pinnacles of video game creation, if we were stranded on an island with a power source, an NES and a single game, it would unquestionably be Super Mario Bros. 3. The most anticipated game on the NES, SMB3 had nothing short of a feature length film (The Wizard) plugging it before it hit store shelves. Despite the unparalleled hype, no one was disappointed. Mario receives some amazing gear in his third game, including the Raccoon Suit that allows him to soar high above the game\'s carefully crafted levels. Each world in SMB3 features a unique style, and Mario\'s quest takes him through desert, grasslands, above the clouds and below the sea – there\'s so much to explore that we still make discoveries every time we dust off the cartridge today. Super Mario Bros. 3 does everything an NES game possibly can, and pushes the NES to the very limits of its capabilities, and we can unequivocally call it the greatest NES game of all time.',
    },
    {
        id: 2,
        title: 'The Legend of Zelda',
        developer: 'Nintendo',
        released: '1987',
        price: 350,
        description: 'Few franchises in Nintendo\'s storied history are as famous as The Legend of Zelda. And back in 1987, the franchise started off with a bang with one of the most ambitious replica-gold-plated cartridges to ever grace the NES. What\'s funny about The Legend of Zelda\'s title was that the gamer played as a character named Link, who was in turn trying to save the famed princess named Zelda. But that didn\'t matter. Zelda was one of the biggest console games of the time, and that got gamers excited. Confusion aside, the game left players confounded with its intricate, wide-open design. Zelda was an action-adventure game with RPG elements, and in an age without the Internet, people were on their own about how to get through the game in one piece. Some people made maps. Others called Nintendo\'s own hotline for help or consulted a magazine. And some were fortunate enough to have friends who knew answers. But for the most part, early Zelda gamers had nothing but their own ingenuity to rely on. And rely on it they did, making The Legend of Zelda one of the NES\' most famous games, part of a franchise that thrives to this day.',
    },
    {
        id: 3,
        title: 'Super Mario Bros.',
        developer: 'Nintendo',
        released: '1985',
        price: 30,
        description: 'Not only is it one of the very best and most iconic videogames ever conceived, but having shipped with the majority of NES consoles, Super Mario Bros. quickly became synonymous with the NES itself. For many, the NES was the machine that played Mario. The quintessential platformer, it\'s hard to imagine a video game industry today without Super Mario Bros. The sights and sounds of the mustachioed plumber busting through the brick and pipe-filled Mushroom kingdom are probably more recognizable than the American flag to several generations of US gamers. Although the game itself takes a good amount of skill to master, Super Mario Bros has a mysterious quality that makes it appealing to even the most inexperienced players. The game has been enjoyed by more players over the years than any other game on the NES, and its greatness can be experienced by anyone who picks up a control pad today.',
    },
    {
        id: 4,
        title: 'Mega Man 2',
        developer: 'Capcom',
        released: '1989',
        description: 'The sequel to the original Mega Man was quick on the heels of the first, with barely a year in between the release of the two titles in the United States. And what gamers found in Mega Man 2 was something seen in few games since – a title that was virtually flawless. Opening up the initial level of Robot Masters from six, as seen in the first game, to eight as seen in each subsequent Classic Series title, Mega Man 2 was also the only Classic Mega Man game to have a difficulty setting. Mega Man 2 is often glossed over as being too easy even on the "Hard" difficulty setting, but that doesn\'t take away from everything the game offered. It\'s bright, colorful aesthetic, awesome enemy designs, amazing music and incredible replay value are all storied parts of the game\'s history. And that\'s saying nothing of its amazing action-platforming gameplay, which was oft-replicated and never exceeded. If you have to play one Mega Man game to familiarize yourself with the series, make it Mega Man 2.',
    },
    {
        id: 5,
        title: 'Castlevania III: Dracula\'s Curse',
        developer: 'Konami',
        released: '1990',
        price: 100,
        description: 'The unique Castlevania II was a popular game, but when it came time for Konami to begin working on Castlevania III: Dracula\'s Curse, the developers felt it was best for the series to return to its action-platforming roots; a decision that proved to be the right one the day the game was released in the fall of 1990. Extending the gameplay to many times the length and difficulty of the original, Castlevania III allowed gamers to take the role of Trevor Belmont, Simon Belmont\'s ancestor, as well as the roles of three other playable characters that Trevor may meet during his quest. May meet, because Castlevania III allowed gamers multiple paths as they progressed through the game. Grant, Sypha and Alucard all made their first appearances in Dracula\'s Curse, but you might not ever necessarily meet them all. The paths you choose to take during the game will bring you to stages and events you might otherwise miss entirely. In this way, Castlevania III was like the original game on a considerable amount of steroids, with plenty of replay value to boot.',
        restrictions: {
            minAge: 16,
        },
    },
    {
        id: 6,
        title: 'Metroid',
        developer: 'Nintendo',
        released: '1987',
        description: 'Another epically popular franchise to this day, Nintendo\'s Metroid came to the United States in 1987 and immediately floored gamers not only with its slick presentation, interesting protagonist and open world, but from the fact that it was non-linear in nature. Developed on the same engine as Kid Icarus, and released around the same time, Metroid toned down the action-platforming found in Icarus and focused on exploration. And explore you did. Metroid proved to be one of the biggest and most daunting games early in the NES\' lifecycle. Metroid was unique for so many reasons, among them the ability to explore at your own pace. All of the terrain was interconnected into one big map, an idea later expanded upon and matured by the SNES\'s Super Metroid. In fact, ideas in Metroid have been replicated time and time again, and its collection-based themes and upgrade-encouraged RPG motif can be found in a vast range of games since, from the PlayStation\'s Castlevania: Symphony of the Night to the more recent Xbox Live title, Shadow Complex.',
    },
    {
        id: 7,
        title: 'Mike Tyson\'s Punch-Out!!',
        developer: 'Nintendo',
        released: '1987',
        price: 150,
        description: 'Perhaps the one NES classic most on the minds of gamers in 2009 thanks to the recent release of its incredible Wii sequel/remake, Punch-Out!! is the original masterpiece boxing game that isn\'t really about boxing at all. The game simply used the convenient foundation of the sport to construct a deceptively deep, endlessly addictive gameplay design that\'s all about pattern recognition, fast reaction times and comically over-the-top cartoon personalities. Punch-Out!! put you in the rookie shoes of underweight title contender Little Mac and challenged you to duck, dodge, jab, hook and uppercut your way to success against one of the greatest rogues\' galleries of ridiculous opponents ever assembled for any videogame, ever. The cast was so memorable and the experience so well defined that many elements were kept completely intact for the recent Wii re-imagining of the game – there\'s no improving on the perfection of King Hippo, Great Tiger or Glass Joe. Punch-Out!! shipped in two forms on the NES, one featuring Mike Tyson as the final boss and the other with him removed. Tyson\'s name recognition was never needed, though. Punch-Out!! was a knock-out even without his celebrity status.',
        restrictions: {
            minAge: 12,
        },
    },
    {
        id: 8,
        title: 'Dragon Warrior',
        developer: 'Nintendo',
        released: '1989',
        description: 'Before Final Fantasy, there was Dragon Warrior. Known as Dragon Quest in Japan, Dragon Warrior was one of the NES\'s early smash hits that didn\'t come from Nintendo itself, even though it was released nearly three years after it saw the light of day on its native Japanese Famicom. RPGs were still an extremely niche genre at the time and Dragon Warrior was no guaranteed hit. However, word of mouth combined with a Nintendo Power promotion that sent copies of the game around the country allowed it to blow up. Dragon Warrior is an old-school grinding RPG that necessitated acute attention to leveling up, equipment management and smart planning. No sooner would an unprepared adventurer leave a town and cross a bridge into a new area than he would find himself smashed by an enemy much stronger than he. Because of that, there was no rushing around; Dragon Warrior was for patient gamers only. And woe is the gamer who forgot to hold down the Reset button when turning off his NES. The catastrophic data loss that resulted ruined many a gamers\' month.',
    },
    {
        id: 9,
        title: 'Bionic Commando',
        developer: 'Capcom',
        released: '1988',
        price: 100,
        description: 'It may strike some as strange that one of the NES\'s very greatest platformers dispenses with jumping – that essential component of Mario\'s repertoire – entirely. But Bionic Commando\'s Rad Spencer gets by just fine with the help of his bionic appendage. At first, Bionic Commando\'s emphasis on swinging seems counterintuitive and limiting, but at some point the smooth grappling action just clicks, you find yourself zipping around the stages in a blur of red and green pixels. Taking cues from open-ended adventure games like Metroid, you\'ll need to find certain weapons and equipment to progress in Bionic Commando, and that sometimes means returning to area you\'ve previously visited to take care of unfinished business. A thinly-veiled plot about the resurrection of Adolf Hitler and an epic soundtrack go a long way towards making Bionic Commando a totally unique experience on the NES.',
        restrictions: {
            minAge: 12,
        },
    },
    {
        id: 10,
        title: 'Duck Tales',
        developer: 'Capcom',
        released: '1989',
        price: 300,
        description: 'Out of all of the games built on Capcom\'s famous Mega Man architecture (that wasn\'t a Mega Man game, that is), Duck Tales is perhaps the best of the bunch. With Mega Man veterans like Keiji Inafune and Yoshihiro Sakaguchi getting the most out of the technology, Duck Tales proved to be an amazing game in its own right. Sure, it borrowed from Mega Man apart from the engine – selecting stage orders, for instance – but standing on its own, Duck Tales is one of the must-have games in any NES aficionado\'s library. The gameplay is of the classic action-platforming variety. Gamers take the role of Scrooge McDuck, who goes through various stages to collect wealth, defeating enemies with his pogo stick attack. When one stage is cleared, Scrooge can pick from any of the remaining stages to undertake his next quest. When the game culminates on the sixth and final stage, Scrooge is a force to be reckoned with. And if the gamer managed to finish with $10 million in funds and has two special hidden treasures, a unique ending can be unlocked, as well.',
    },
    {
        id: 11,
        title: 'Final Fantasy',
        developer: 'Nintendo & Square',
        released: '1990',
        description: 'One of the most successful RPGs on the NES, the first Final Fantasy improves on many aspects of Dragon Warrior, a game it very clearly attempts emulate. While not entirely innovative, Final Fantasy did make some interesting iterations on the RPG formula. Before even embarking on your quest you must choose your team of four characters. Each can be one of six diverse character classes, which dictates their role on the frontlines. A balanced team, for instance, may include two Fighters, a Black Mage to deal damage and a White Mage to heal. To make things interesting, at one point in your quest, your original classes undergo a change, making it advantageous to lug around a useless Thief just so you\'ll end up with a badass Ninja. Final Fantasy also offered new ways to navigate its sprawling overworld. While a clipper ship and canoe allow you to access new areas of the map, it\'s the airship that\'s worth holding out for. Cruising the skies unhampered by the copious random battles of surface travel is truly exhilarating.',
    },
    {
        id: 12,
        title: 'Contra',
        developer: 'Contra',
        released: '1988',
        price: 50,
        description: 'Perhaps the best example of the NES\'s capability at adapting and even improving on arcade games of its era, Contra offers the best shooting action on the NES and is also the console\'s definitive multiplayer experience. Contra deftly captures the spirit of the testosterone-fueled \'80s summer blockbusters, with obvious nods to the Alien and Rambo series. Alternating both horizontal and vertical scrolling levels with cool 3D-imitating third-person view stages, Contra was designed with short attention spans in mind. Although the game offers a fairly decent challenge, the experience of kicking serious alien ass can be had by less talented players, thanks to the legendary Konami Code, which, in its most famous implementation, gives you 30 lives to burn through as you please. And if you somehow run out of those, you can always steal one from your unsuspecting partner. Any discussion of Contra wouldn\'t be complete without a nod to its iconic 8-bit soundtrack. After a few minutes with Contra\'s militant anthems you\'ll want to put your controller down and headbang along.',
        restrictions: {
            minAge: 12,
        },
    },
    {
        id: 13,
        title: 'R.C. Pro-Am',
        developer: 'Nintendo',
        released: '1988',
        price: 100,
        description: 'An incredibly popular release in both sales and lasting fan opinion, RC Pro-Am was an innovative racing game developed by Rare. Released in 1988, it pioneered something very important for the racing genre. R.C. Pro-Am was one of the first games to ever give your car the ability to attack and damage your opponents\' vehicles with bombs, missiles and oil slicks to ensure that the competition wasn\'t going to make it to the finish line first – or even arrive there in one piece. Speed boosting strips placed directly on the track also made their first appearance in this design, which was so well received that it went on to inspire several sequels as well as influence the creation of Nintendo\'s own hybrid combat/racing series, Mario Kart. That\'s right – if you\'ve ever cursed the skies after falling prey to the infamous Blue Shell, you can trace the source of your rage all the way back to Rare\'s R.C. Pro-Am – without it, racing games might have just been all about steering and accelerating.',
    },
    {
        id: 14,
        title: 'Excite Bike',
        developer: 'Nintendo',
        released: '1985',
        description: 'If you\'ve played and enjoyed ExciteTruck or ExciteBots: Trick Racing on your Wii, this is the original you have to thank for them. Excitebike was one of the 18 launch titles for the NES here in America, and distanced itself from the pack by offering truly addictive motocross gameplay. You sped through a scrolling track, weaving up and down into and out of four parallel lanes filled with obstacles, traps and humongous hills. You\'d leap off the peaks in your path and go flying through the air, and have to adjust the angle of your descent in order to maintain your momentum and keep from crashing – and you\'d also have to keep an eye on your engine\'s temperature gauge all the while, as overheating would cause lengthy cool-down delays that would likely keep you from claiming first place. Excitebike was also the first game to offer a user-created content feature, through its track editor – for a game that hit on October 18, 1985, that was way ahead of its time.',
    },
    {
        id: 15,
        title: 'River City Ransom',
        developer: 'American Technos',
        released: '1989',
        description: 'River City Ransom\'s excellent amalgamation of action, adventure, beat-em-up and RPG game elements has won it many vocal supporters, yet it seems destined to remain in the shadow of big name brawlers like Double Dragon. River City offered a city to explore filled with rival gangs more than happy to smash things over your head if you happen into their territory. Between territories are neutral zones, filled with shops that carry life-giving junk food and high-priced moves that become absolutely necessary as you progress. It\'s these adventure game elements that make River City Ransom the thinking man\'s beat-em-up. Of course, you don\'t have to hit the mean streets of River City alone. With a friend you can tag-team your opponents. As a bonus, your stunned partner can double as a bludgeoning tool.',
    },
    {
        id: 16,
        title: 'Mega Man 3',
        developer: 'Capcom',
        released: '1990',
        price: 100,
        description: 'Man 3 took the mantle and ran with it. Continuing the tradition started in Mega Man 2 of having eight Robot Masters to start out with instead of six, gamers could choose one of eight starting stages, inherit defeated boss robots\' weapons, and move on to the next stage to exploit possible weaknesses with the player\'s ever-growing arsenal. Its action-platforming style was well-known by Mega Man 3\'s release, and with the addition of two important new characters, Rush and Protoman, and a new skill, sliding, Mega Man 3 is many fans\' favorite in the franchise. And even then, Mega Man 3\'s new additions weren\'t all it had to offer. It was a darker game, with less glitzy Robot Masters. It was also the longest Mega Man title in the classic series, reintroducing all of the Robot Masters from Mega Man 2 in addition to an extended trek through Dr. Wily\'s dangerous castle. Mega Man 3 is the epitome of what the NES offered, and though less-fondly remembered than Mega Man 2, is another must-own for the console.',
    },
    {
        id: 17,
        title: 'Ninja Gaiden',
        developer: 'Tecmo',
        released: '1989',
        price: 150,
        description: 'Tecmo\'s long dead and more recently revived series Ninja Gaiden got its start on the NES in 1989 with what\'s considered one of the best, most difficult action platformers ever. Main character Ryu Hayabusa wielded a katana with deadly precision, and he had a grouping of special weapons to use as well. In fact, Tecmo took a page from the book of another successful action-platformer of the day, Konami\'s Castlevania, and mimicked its special weapon system almost to a tee. What resulted was a crisp experience in NES gameplay that still stands up today. The current-day Ninja Gaidens have a reputation for being overly-difficult, but it was this NES original that initially set the trend. In addition to exceptionally hard feats of platforming, Ninja Gaiden\'s fast and furious action was made all the more difficult by its vast army of wily enemies. And talk about difficult – if you were unlucky enough to lose all of your lives in the game\'s final stages (which gamers did over and over and over again), you\'d have quite the trek in front of you to get back to where you were to try all over again.',
    },
    {
        id: 18,
        title: 'Super Mario Bros. 2',
        developer: 'Nintendo',
        released: '1988',
        price: 30,
        description: 'Yes, Super Mario Bros. 2 is a repurposing of a non-Mario Japanese Famicom game called Yume Kōjō: Doki Doki Panic, but why hold that against it? The North American sequel to everyone\'s favorite game does not disappoint. SMB2 added the ability to pick up and toss enemies and objects, a move that became part of Mario\'s permanent repertoire. Other elements of Super Mario Bros. 2 have been assimilated into the greater Mario universe as well – Shy Guys, Birdo, Bob-ombs, POW blocks – making the game seem less like the oddball of the series it\'s been pegged as. No longer bound by primitive side-scrolling constraints, the levels of SMB2 can be freely explored, with secret areas, warps and more to discover. And this time Mario doesn\'t steal the spotlight. Toad, the Princess, and Luigi all offer unique qualities that make them viable protagonists. If you can stomach the Princess in all her pinkness, her levitation ability will get you over the game\'s widest gaps. Alternately, you can put Toad\'s speed to use in plucking coins for the game of chance at each level\'s end. SMB2 offers greater diversity in graphics and gameplay than the original, making it a great bridge game between the other NES Mario titles.',
    },
    {
        id: 19,
        title: 'Castlevania',
        developer: 'Konami',
        released: '1987',
        price: 50,
        description: 'Dozens of Castlevania games have come and gone over the last two decades, but the series started for American gamers on the NES. The original Castlevania was a typical action-platformer on its facade, but once explored, the game proved to be much, much more. In an era of 8-bit graphics and MIDI music, Konami crafted a game that immersed you in the horror of Dracula\'s castle, while all you were looking at and hearing was an artful combination of the typical sights and sounds of the day. It wasn\'t only the aesthetics that made the original Castlevania a great game, one that spawned one of the most popular and well-known series in gaming history. It was the gameplay that was at the heart of Castlevania\'s epic rise from unknown brand to Konami flagship. Simon Belmont, the whip-wielding Vampire Hunter, controlled uniquely. But after getting used to Castelvania\'s inherent control quirks, what was found was a smooth action game rife with suiting atmosphere and difficult gameplay. Sure, Castlevania is only six stages long, but you\'ll require a lot of luck and skill getting through even half of it.',
    },
    {
        id: 20,
        title: 'Kid Icarus',
        developer: 'Nintendo',
        released: '1987',
        price: 30,
        description: 'Built side-by-side with Metroid on the same engine and released at identical times, Kid Icarus is often the brother that\'s overshadowed. After all, with the exception of Pit\'s inclusion in Super Smash Bros. Brawl, the last Kid Icarus game was released on Game Boy nearly two decades ago. Fusing action with platforming, and even some RPG elements, Kid Icarus is one of those key first party NES games that often finds itself ignored. In Kid Icarus, gamers take the role of Pit. Pit is a fledgling winged angel who is tasked with working his way out of the Underworld and to the Sky, where the evil Medusa has taken control. All the while, Pit must work his way through four unique worlds, each with multiple unique stages and an end fortress where Pit must navigate through a labyrinthine set of screens to reach the boss. Kid Icarus\' extreme difficulty has turned off many a gamer in the past twenty years, but there\'s a lot to love as soon as you turn on the game. Just be careful writing down those passwords! One uppercase letter mistaken for a lowercase one, and your experience is over.',
    },
    {
        id: 21,
        title: 'Zelda II: The Adventure of Link',
        developer: 'Nintendo',
        released: '1988',
        price: 555,
        description: 'Several classic NES series seem to follow identical paths. Super Mario Bros. was a smash hit, and its American sequel was a completely different type of game. Konami\'s Castlevania was followed up by Castlevania II: Simon\'s Quest, a game that strayed entirely from its origins. And then there was Zelda II: The Adventure of Link, the follow-up to the smash hit The Legend of Zelda. Released in 1988, Zelda II proved to be an entirely different experience from the first and that wasn\'t necessarily a bad thing. Instead of a game that relied on epic, blind exploration and top-down dungeon-crawling action, Zelda II introduced a completely new idea for the series, and one that hasn\'t been revisited since. Link mainly navigated around an RPG-like world map, with action occurring sporadically in side-scrolling sequences. These sequences were parlayed into the game\'s labyrinthine dungeons as well. Zelda II\'s entire system suggested it was trying to be more of an RPG, and in many ways, it was a huge success. Debate ensues to this day surrounding Zelda II\'s place in The Legend of Zelda franchise as a whole, but most everyone agrees that Zelda II is a stellar standalone title.',
    },
    {
        id: 22,
        title: 'Blaster Master',
        developer: 'Sunsoft',
        released: '1988',
        description: 'It\'s the touching tale of a young boy and his pet frog, Fred. Yes, Fred – who\'s just hopped into the backyard and touched a radioactive reactor that mutates him into an enormous amphibious monster. He then leaps down a nearby hole in the ground and disappears into a vast subterranean labyrinth without a trace. And, because our hero loves Fred so much that he doesn\'t care if he\'s a giant, disgusting mutant toad, he takes command of the equally-massive armored tank S.O.P.H.I.A. (which also just so happens to be placed at the bottom of that hole in his yard). As the boy treks into the underground maze, Blaster Master presents its deviously challenging mixture of side-scrolling platforming, shooting, and overhead dungeon exploration with action taking place in and outside of the cockpit. This one\'s a classic in both gameplay and theme. Don\'t worry, Fred! We\'re on our way.',
    },
    {
        id: 23,
        title: 'Bubble Bobble',
        developer: 'Taito',
        released: '1988',
        description: 'Taito\'s iconic dragon duo\'s first outing is also their best. The ever-flatulent Bub and Bob enter the Cave of Monsters in a blaze of bubble-blowing glory, trapping all manner of beasts in their sticky, spherical emissions. There are over a hundred single-screen levels to conquer in Bubble Bobble, clear all the enemies before you timer is up and you are safe to move on. While the first dozen or so screens will seem like a walk in the park, as you make your way deeper into the cave you\'ll encounter some puzzling situations. Using your own bubbles to bounce your way up to out of reach platforms takes some serious platforming skills. Bubble Bobble actually encourages you to bring a friend along on your journey – only with the cooperation of two talented players can you access the game\'s extra stages and alternate ending.',
    },
    {
        id: 24,
        title: 'Blades of Steel',
        developer: 'Konami',
        released: '1988',
        description: 'You have to go back and read that title again, a couple of times, and imagine it being spoken by a scratchy, synthesized 8-bit voice clip. Konami\'s classic NES hockey sim started out with exactly that, which was incredibly impressive for the time. Blades is notable for much more than being an early advancer of recorded voice-work in gaming, though, as its take on professional hockey was brutally realistic (in that it realistically presented the most brutal unofficial aspect of the game – fistfights). If you rammed into a player often enough in a round of Blades, he\'d lose it, throw down his gloves and start pummeling the snot out of you right on the spot. When that happened, the gameplay actually switched away from the hockey design and into a one-on-one versus fighter while the two mad men slugged it out. Plus, the guy who lost the fight was the one sent to the penalty box, whether he started the brawl or not. You can\'t beat that.',
        restrictions: {
            minAge: 16,
        },
    },
    {
        id: 25,
        title: 'Castlevania II: Simon\'s Quest',
        developer: 'Konami',
        released: '1988',
        description: 'When Simon\'s Quest dropped on the NES in 1988, many gamers were confused. The gameplay mechanics of the original Castlevania remained intact, but there was a whole lot more that had been added that transferred it from the realm of action-platformer to the realm of action-RPG. Gamers\' apprehension quickly dissipated, though, when what resulted was an amazing game full of an inordinate amount of depth. Simon\'s Quest took you away from the all-too-familiar atmosphere of Dracula\'s castle and instead set you loose in an Eastern European locale full of mysterious villages, haunted mansions and, ultimately, the remnants of the castle Simon Belmont destroyed in the original. Simon earned experience points for killing enemies and collecting money to buy new goods. An item-based menu allowed you to equip gems, whips and special weapons. When the old-style gameplay was combined with these myriad new additions, Castlevania II was so deep you could drown in it. And that doesn\'t even begin to mention the game\'s three unique endings, a rarity in its day.',
    },
    {
        id: 26,
        title: 'Metal Gear',
        developer: 'Ultra Games',
        released: '1988',
        description: 'More than any other past gaming console, the NES was the birthplace of long-lived mascot characters. From Link and Samus Aran to Mega Man and Bowser, Nintendo\'s 8-bit machine was the debut platform for countless classic heroes and villains that are still active in the industry today. Maybe most surprising of all, though, is that the NES was also the first place Americans ever met Solid Snake. The NES\'s original adventure with Konami\'s cigarette-smoking, tough-as-nails commando, and the stealth action now most associated with PlayStation platforms was just as intense in the \'80s as it is today. Snake parachuted into the jungle fortress of Outer Heaven with nothing but his courage and a pack of smokes, and skillfully avoided detection while sneaking through the enemy encampment to find and destroy the titular weapon of mass destruction – or, if sneaking didn\'t work, he beat the snot out of the soldiers in his way. Metal Gear created the stealth genre, paving the way for Metal Gear Solid to later revolutionize and refine it. It\'s an undeniable classic.',
        restrictions: {
            minAge: 12,
        },
    },
    {
        id: 27,
        title: 'Kirby\'s Adventure',
        developer: 'Nintendo',
        released: '1993',
        description: 'Nintendo\'s little pink powerpuff got his start on the Game Boy with Kirby\'s Dream Land, but it wasn\'t until this late-generation NES sequel arrived that he gained his trademark trait – absorbing enemies\' abilities as his own. Kirby\'s Adventure was an epic, beautifully colorful swansong for the NES that focused on that new power for its vacuum-suction hero, as Kirby sucked up his foes, swallowed them, and then found that he could wield their signature weapons and powers himself. From the blade-throwing Cutter to the hard-pounding Stone, the prickly-bodied Needle to the electrifying Spark nearly all of Kirby\'s classic transformations owe their origin to this late 1992 NES release. Because it came out on the NES after the SNES had already arrived, you may have missed out even if you were around and gaming on Nintendo systems 17 years ago, but Kirby\'s Adventure is one that can\'t be missed. Go back and grab it, either on cartridge or through the Wii\'s Virtual Console, and experience for yourself the defining console debut for one of the Big N\'s biggest mascots.',
    },
    {
        id: 28,
        title: 'Baseball Stars',
        developer: 'SNK',
        released: '1989',
        description: 'The inspirational forerunner to just about every worthwhile baseball title of the past twenty years, SNK\'s Baseball Stars is one of those rare games that still stands up today. Why is Baseball Stars so important? The answer is multifaceted – it\'s the ability to play a season and track statistics. And it\'s the insanely crisp gameplay. It\'s also the teams and roster customization including the ability to create players, mess with their stats, and pay them a salary. In other words, it\'s just about everything. Baseball Stars is unequivocally the best baseball game, and overall sports simulation, the NES ever saw. Before Baseball Stars was released in the summer of 1989, the NES wasn\'t looked at for its ability to simulate real sports. But after Baseball Stars hit the shelves (and subsequently flew off of them), expectations on what a sports game could do changed forever. One could get lost in the sea of statistics the game tracked for you, the endless roster customization, the hiring, firing and outright creation of players, and amazing gameplay.',
    },
    {
        id: 29,
        title: 'Adventure Island',
        developer: 'Hudson Soft',
        released: '1991',
        price: 100,
        description: 'Adventure Island II took the original Adventure Island\'s somewhat tedious straightforward platforming and fleshed it out, becoming the foundation for a solid series. Years before Yoshi first crammed a fat plumber on his back, Adventure Island II offered some of the coolest dinosaur wrangling in the business. The game\'s protagonist, Master Higgins, a yachting playboy with a knack for taming giant lizards, sets out on his adventure with little more than a ball cap and a grass skirt. Throughout the game\'s island world, which include tropical jungles, tepid swamps and cool caverns, our man Higgins happens upon various implements of stone-age destruction, like axes and, uh... skateboards. Some of the islands\' giant eggs pack ferocious – but adorable – dinos who will let you hitch a ride until they take damage. Treat them well and you\'ll be riding through the eight islands in style.',
    },
    {
        id: 30,
        title: 'Mega Man',
        developer: 'Capcom',
        released: '1987',
        price: 100,
        description: 'When Mega Man finally hit American shores in the late \'80s, Capcom couldn\'t have realized the gaming force it unleashed. Dozens and dozens of games have spawned from this very title, the first of six Mega Man games released on the NES, and for good reason. Mega Man is one of the best examples of great graphics, amazing music and near-perfect gameplay rolled into one cartridge. Mega Man\'s unique approach is what initially made it so interesting to gamers. During a time in gaming where linearity reigned supreme, it allowed gamers to choose from one of six stages to start, but at the end of each Mega Man would fight a Robot Master that would sacrifice his weapon upon defeat for use in another level. Gamers could then figure out which boss was weak to that weapon and attempt to use it against him. The permutations through Mega Man were many, giving the game great replay value. The original Mega Man is perhaps best-known, however, for its staggering difficulty level. It\'s not only the hardest in the franchise, but one of the hardest NES games period.',
    },
    {
        id: 31,
        title: 'Micro Machines',
        developer: 'Camerica',
        released: '1991',
        description: 'If you missed their heyday in the \'80s and \'90s, Micro Machines were essentially the same thing as those other toy car brands – they were just smaller; about half the size of the others, in fact – making them really, really tiny. The Micro Machines concept of incredibly little cars racing each other was adapted into this NES racing design, a game that featured overhead, birds-eye view action behind the miniature wheel and environments all designed to emphasize the diminutive scale of it all. Kind of like Pixar\'s Toy Story, this was a world seen from a toy\'s perspective – races took place on top of massive billiards tables or in backyard with gigantic, looming flowers and blades of grass. Interestingly, Micro Machines was also one of the rare, unlicensed-by-Nintendo releases for the NES – but the lack of the Seal of Quality or standard cartridge design didn\'t keep it from being a great game.',
    },
];
