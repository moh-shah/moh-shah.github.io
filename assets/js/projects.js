/**
 * ============================================================
 *  PROJECTS DATA
 * ============================================================
 * This is the ONLY file you edit to add, remove, or update a
 * project. Both the homepage grid and the project detail page
 * (project.html) read from this array — there is no separate
 * HTML file per project anymore.
 *
 * TO ADD A NEW PROJECT:
 *   1. Copy one of the objects below.
 *   2. Change the `slug` to something unique, URL-safe (no
 *      spaces) — this is what shows up as
 *      project.html?slug=your-slug
 *   3. Fill in the rest of the fields.
 *   4. Save. That's it — it will appear on the homepage grid
 *      and get its own detail page automatically.
 *
 * TO REMOVE A PROJECT: delete its object from the array.
 *
 * FIELD REFERENCE:
 *   slug        (string)  required, unique, url-safe id
 *   title       (string)  required
 *   blurb       (string)  required, ~1 sentence, shows on the card
 *   status      (string)  one of: "LIVE", "SHIPPED", "IN DEV", "PROTOTYPE"
 *   year        (string)  e.g. "2025" or "2024–2025"
 *   role        (string)  your role, e.g. "Solo developer"
 *   tech        (array)   short strings, e.g. ["Unity", "C#", "Photon"]
 *   cover       (string)  path to a cover image, e.g. "assets/img/battle-arena/cover.jpg"
 *                         leave as "" to use an auto-generated placeholder panel
 *   summary     (array)   1+ paragraphs (strings) describing the project
 *   highlights  (array)   short bullet points — what you built / solved
 *   gallery     (array)   optional extra image paths
 *   links       (object)  { live: "", source: "", video: "" } — leave "" to hide a button
 * ============================================================
 */

const PROJECTS = [
  {
    slug: "zimo-games",
    title: "Zimo Games Studio",
    blurb: "Independent mobile game studio, co-founded in October 2024 — hybrid-casual and mid-core original IPs.",
    status: "LIVE",
    year: "2024–present",
    role: "Studio Director & Co-Founder",
    tech: ["Team Management", "Startup", "Unity", "C#", "Android", "iOS"],
    cover: "assets/img/zimo_1.jpg",
    summary: [
      "Co-founded Zimo Games to develop hybrid-casual and mid-core mobile games. The studio builds original IPs while collaborating with international publishers, currently including Neptune and Supercent, on prototyping, iterating, and validating new concepts.",
      "Responsibilities span both technical and business domains — from gameplay architecture and code review to publisher communication, investor meetings, hiring, and studio operations. Management occupies roughly 30% of my time; the rest stays in day-to-day development and technical decision-making.",
    ],
    highlights: [
      "Runs publisher relations, investor communications, hiring, and overall studio operations",
      "Technical leadership across gameplay architecture, programming, and production pipelines",
    ],
    gallery: [],
    links: { live: "https://www.linkedin.com/company/zimo-games/", source: "", video: "" },
  },
  {
    slug: "upside-down",
    title: "Upside Down",
    blurb: "Story-driven hybrid-casual action-adventure — the foundation game of Zimo Games, in soft launch with <strong>Supercent</strong>.",
    status: "LIVE",
    year: "2024–Present",
    role: "Technical Lead",
    tech: ["Team Management", "Unity", "Android", "iOS"],
    cover: "assets/img/upside_1.jpg",
    summary: [
      "A hybrid-casual action-adventure mobile game that became the foundation of <strong>Zimo Games</strong>. Development began in August 2024 as a side project; after an initial prototype tested with Homa Games, the team moved forward with Supercent as publisher. After five iterations driven by KPI analysis and publisher feedback, the game entered soft launch in July 2026.",
      "Core team: 1 Game Designer/Co-Founder and myself as Technical Lead and Programmer, with 2 Technical Artists, 1 UI Artist, and 1 Cinematic Artist contributing.",
    ],
    highlights: [
      "Managed the team, led technical decisions, communicated directly with the PM at Supercent, and contributed creative assets through soft launch",
      "Owned virtually every technical aspect: gameplay programming, combat system, enemy AI, tutorial system, third-party SDK integrations, architecture, and mobile performance optimization",
      "Built and maintained the build pipelines and handled ongoing debugging/maintenance",
      "The game passed multiple publisher evaluations across five production iterations",
    ],
    gallery: ["assets/img/upside_2.jpg"],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.lilyxgame.zimo.upsidedown&hl=en",
      source: "",
      video: "",
      stores: [
        { label: "App Store", url: "https://apps.apple.com/us/app/upside-down-strange-world/id6751249961" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.lilyxgame.zimo.upsidedown&hl=en" },
      ],
    },
  },
  {
    slug: "versus",
    title: "Versus",
    blurb: "Turn-based strategy idle RPG — sequel to a hit local title, rebuilt as an online multiplayer card-battler with 100+ heroes.",
    status: "LIVE",
    year: "-",
    role: "Technical Lead",
    tech: ["Unity", "C#", "Nakama", "Zenject", "Addressable Assets", "Unity Localization", "TDD", "Spine", "Android", "iOS"],
    cover: "assets/img/rooster-wars2.png",
    summary: [
      "The original Rooster Wars was a major hit in Iran's local mobile market (Cafe Bazaar). About 7 years later, Medrick Games built Rooster Wars 2 — later renamed \"Versus\" domestically and \"Mighty Wars\" globally for marketing reasons.",
      "As tech lead from the prototype phase, I designed the overall architecture around Zenject for dependency injection and Nakama for backend services (groups, chat, storage objects, leaderboards), extended with thousands of lines of custom TypeScript server modules.",
      "Players draft a deck of hero cards plus a warlord and battle on a grid; deployed characters auto-attack in turn order until one warlord dies. Opponents are AI-controlled (a greedy algorithm, after considering minimax) playing against another user's profile via matchmaking. The game currently has 100+ unique heroes built on an event-driven skill system — skills are event listeners reacting to gameplay events like a hero being deployed, attacking, or healed.",
    ],
    highlights: [
      "Designed the event-driven gameplay/skill architecture (~40 unique base skills) from scratch",
      "Built live-ops systems: season pass, conditional special offers, segmentation, dynamic discounts, A/B testing infrastructure, cohort management, and DDA (dynamic difficulty adjustment)",
      "Integrated analytics SDKs (Adjust, Flurry, Firebase, Crashlytics)",
      "Localized the game into 6+ languages using Unity's localization system",
      "Wrote a public write-up on taking the offline game online (<a href=https://medium.com/@mo-shah/versus-how-we-took-our-offline-game-online-e07353f1cfc0>link</a>)",
    ],
    gallery: ["assets/img/rooster-squad.png", "assets/img/rooster-gameField.png", "assets/img/rooster-mainmenu.png","assets/img/versus-battle-2.gif","assets/img/versus-battle.gif"],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.relicbit.mightywars&hl=en&gl=US",
      source: "",
      video: "",
      stores: [
        { label: "App Store", url: "https://apps.apple.com/us/app/versus-game/id6472093154" },
        { label: "Cafe Bazaar", url: "https://cafebazaar.ir/app/com.Medrick.RoosterWars2?l=en" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.relicbit.mightywars&hl=en&gl=US" },

      ],
    },
  },
  {
    slug: "liveops-infrastructure",
    title: "LiveOps Infrastructure",
    blurb: "In-house Unity package suite giving every Medrick Studio game shared, faster live-ops tooling.",
    status: "SHIPPED",
    year: "-",
    role: "Client-side architecture (LiveOps team)",
    tech: ["Software Architecture", "TDD", "C#", "Unity", "Addressable Assets", "Unity Package Manager", "LiveOps", "REST"],
    cover: "assets/img/liveops.png",
    summary: [
      "Medrick Studio's games were each building their own one-off live-ops systems, so the studio invested in a shared infrastructure instead. I was part of the LiveOps team, responsible for overall architecture and client-side implementation — working with the backend team to define APIs and communication flow before designing the client-side code architecture.",
      "The team followed TDD from day one (tests-first, AAA convention, using Moq to mock interfaces) and shipped 5 Unity packages distributed through an in-house Nexus repo. Addressable Assets made it possible to inject new art into a running app during a live-ops event, and the design was flexible enough for each project to plug in its own implementation of the provided interfaces.",
    ],
    highlights: [
      "Co-designed the client/server communication flow and API contracts with the backend team",
      "Delivered the system as 5 distributable Unity packages via an in-house Nexus repository",
      "Used Addressable Assets to support live asset injection during events without a client update",
    ],
    gallery: [],
    links: { live: "", source: "", video: "" },
  },
  {
    slug: "match-room",
    title: "Match Room",
    blurb: "Full-stack corporate competition platform — Unity mobile client, ASP.NET Core backend, MySQL.",
    status: "SHIPPED",
    year: "-",
    role: "Full-stack developer",
    tech: ["Unity", "C#", "MySQL", ".NET Core", "Android"],
    cover: "assets/img/matchroom_1.jpg",
    summary: [
      "A digital competition platform for corporate organizations: managers create knowledge competitions through a web dashboard by defining question sets, employees compete through the mobile app, and rankings are calculated and displayed automatically on leaderboards.",
    ],
    highlights: [
      "Built the complete Unity Android app: authentication, competition flow, leaderboards, and gameplay",
      "Built the ASP.NET Core backend: game logic, database schema, MySQL management, authentication, and SMS verification support",
      "Collaborated on the backend APIs powering a separately-built web admin dashboard",
    ],
    gallery: [],
    links: { live: "", source: "", video: "" },
  },
  {
    slug: "mint-heroes",
    title: "Mint Heroes",
    blurb: "Hero-based tower-defense prototype with a merge-based ammo production line, built for Voodoo's prototype pipeline.",
    status: "PROTOTYPE",
    year: "-",
    role: "Technical Lead",
    tech: ["Unity", "C#", "Git", "Android", "iOS"],
    cover: "assets/img/mint_1.jpg",
    summary: [
      "An outsourced project for Ared Game Studio targeting Voodoo's prototype-testing pipeline, built in roughly three months. Combines modern hero-based tower defense with a merge-based production line where players manufacture ammunition types to power their heroes.",
    ],
    highlights: [
      "Implemented the entire project solo as Technical Lead: combat, enemy AI, production-line mechanics, and game architecture",
      "Designed a modular projectile/bullet-ability system that combines abilities while staying scalable and easy to extend",
      "Built the collision system and handled performance optimization",
    ],
    gallery: ["assets/img/mint_2.jpg"],
    links: { live: "https://play.google.com/store/apps/details?id=com.aredstudio.mintheroes&hl=en", source: "", video: "" },
  },
   {
    slug: "court-piece",
    title: "Court Piece",
    blurb: "The classic Court Piece card game, online — maintained and extended at ~20k daily active users.",
    status: "LIVE",
    year: "-",
    role: "Senior Developer",
    tech: ["Unity", "C#", "Nakama", "REST", "Git", "Android", "iOS"],
    cover: "assets/img/hokm-plus.png",
    summary: [
      "Court Piece and Shelem are two online card games sharing the same codebase. I joined as senior developer after the first version shipped, when Court Piece had about 20k daily active users — maintaining the game, shipping new modes and live-ops features, and refactoring parts of the codebase for readability and extensibility.",
    ],
    highlights: [
      "Added conditional special offers to the shop",
      "Built a seasonal live-ops event themed around Squid Game, tied to a marketing campaign",
      "Developed \"Myket League\", a competitive live-ops mode for a campaign with Myket (one of the game's distribution markets)",
      "Localized the game for international markets using Unity's I2 Localization",
      "Added a deeplink-based purchasing flow alongside standard market SDK IAP",
      "Designed and built a client/server caching system to optimize the game's network usage",
      "Integrated Firebase and prepared market Android release builds",
    ],
    gallery: ["assets/img/hokm-plus-core.png"],
    links: { live: "https://cafebazaar.ir/app/com.xalopex.hokm?l=en", source: "", video: "" },
  },
  {
    slug: "emmas-mansion",
    title: "Emma's Mansion",
    blurb: "Casual match-3 game with a decoration meta, extended with Nakama-powered social features.",
    status: "LIVE",
    year: "-",
    role: "Programmer — social & live-ops systems",
    tech: ["Nakama", "Socket", "C#", "Unity", "Addressable Assets", "LiveOps", "iOS", "Android"],
    cover: "assets/img/golshifteh.png",
    summary: [
      "A casual match-3 game with a decoration meta. I joined after release to add social features using Nakama's networking layer, and later built the game's first iOS version.",
    ],
    highlights: [
      "Built group, friend, and chat systems (both group and direct)",
      "Added resource exchange between group members and a referral-code system",
      "Built a live-op letting group members play a level on a group-mate's behalf when requested",
      "Built a group-vs-group competition mode with leaderboards as a live-op",
      "Re-implemented an older live-op on top of the team's LiveOps Infrastructure package, adding calendar-driven asset streaming so art (popup backgrounds, map units) updates automatically for events",
      "Shipped the game's first iOS build",
    ],
    gallery: [],
    links: { live: "https://play.google.com/store/apps/details?id=com.jollificationgames.garden&hl=en&gl=US", source: "", video: "" },
  },
  {
    slug: "heshmat-babashah",
    title: "Heshmat / Babashah",
    blurb: "Two solitaire games sharing one codebase — Babashah's saga map, later simplified and re-skinned into Heshmat.",
    status: "LIVE",
    year: "-",
    role: "Developer — maintenance, features & release management",
    tech: ["C#", "Unity", "LiveOps", "Android"],
    cover: "assets/img/heshmat.png",
    summary: [
      "Babashah is a solitaire game with a saga map and a cast of characters and mini-stories. Heshmat shares the same core game with different art, with its meta simplified by removing the characters and stories.",
      "I joined after Babashah's original developer left, taking over maintenance and new features; Heshmat was largely built before I joined, with finalization and release builds as my responsibility. Both follow an MVP architecture with a custom Service Locator for dependency handling.",
    ],
    highlights: [
      "Added 3 purchasable boosters to Babashah, each affecting gameplay differently, later ported to Heshmat since the codebase is shared",
      "Built a board-game-style live-ops mode for Babashah",
      "Shipped Heshmat's competitive live-ops mode with mission-based scoring and leaderboard rank-ups",
      "Implemented DDA (Dynamic Difficulty Adjustment) for Heshmat",
    ],
    gallery: ["assets/img/babashah-loveops.png", "assets/img/boosters.png"],
    links: { live: "", source: "", video: "" },
  },
  {
    slug: "battle-arena",
    title: "Battle Arena (Avardgaah)",
    blurb: "Original online PvP game inspired by Archero's core mechanics, rebuilt around fast, hardcore competitive combat.",
    status: "PROTOTYPE",
    year: "-",
    role: "Programmer — client/server systems",
    tech: ["ASP.NET Core", "WebSocket", "C#", "MongoDB", "Windows Server", "UDP Game Server", "Client-Server Architecture"],
    cover: "assets/img/battleArena.png",
    summary: [
      "At Part Games, the team's shared dream was a MOBA for PC — Battle Arena was the first step toward it. As a fast-paced PvP game, it needed more than REST or plain sockets for in-game communication, so the team built a UDP-based, server-authoritative architecture: a user-management server (ASP.NET Core, MongoDB) handling accounts and matchmaking over WebSocket, and a separate C# console-app game server driving real-time UDP combat — written from scratch rather than on Photon or Mirror.",
      "To avoid long matchmaking queues, the team's tech lead combined reinforcement learning with a genetic algorithm to train an AI opponent that turned out to be genuinely challenging to play against. The project was canceled after its beta release due to the studio's situation, which led to the team's shut-down.",
    ],
    highlights: [
      "Built the server-authoritative UDP game server as a custom C# console app (no third-party netcode framework)",
      "Implemented the user-management server (ASP.NET Core + MongoDB) and its WebSocket-based matchmaking notifications",
    ],
    gallery: [],
    links: { live: "", source: "", video: "https://www.youtube.com/watch?v=JFNc7w4QvtQ" },
  },
  {
    slug: "arabic-unlocked-middle-server",
    title: "Arabic Unlocked — Middle Server",
    blurb: "Back-end services layer (\"middle-server\") for the Arabic Unlocked language-learning app.",
    status: "SHIPPED",
    year: "-",
    role: "Backend developer",
    tech: ["C#", ".NET Core", "MongoDB", "Microsoft PlayFab", "Active Campaign", "Google Play Billing API", "Apple StoreKit"],
    cover: "assets/img/arabic-unlocked.jpg",
    summary: [
      "Developed back-end features — internally called the \"middle-server\" — for Arabic Unlocked, an Arabic language-learning app, working with .NET Core, MongoDB, and Microsoft PlayFab, alongside integrations with Active Campaign and Google's and Apple's subscription APIs.",
    ],
    highlights: [],
    gallery: [],
    links: { live: "https://play.google.com/store/apps/details?id=com.utglobal.arabicunlocked", source: "", video: "" },
  },
  {
    slug: "khaleh-ghezi-server",
    title: "Khaleh Ghezi — Server Extension",
    blurb: "Extended the backend of an educational/entertainment app for children, in collaboration with Hurrah Games.",
    status: "SHIPPED",
    year: "-",
    role: "Backend developer",
    tech: [".NET", "SQL Server"],
    cover: "assets/img/ghezi.jpg",
    summary: [
      "In collaboration with Hurrah Games, extended the server application of Khaleh Ghezi — an educational and entertainment app for children — adding new APIs and features to their existing, live server based on the team's requirements.",
    ],
    highlights: [],
    gallery: [],
    links: { live: "", source: "", video: "" },
  },
  {
    slug: "wc2022-prediction-app",
    title: "World Cup 2022 Prediction App",
    blurb: "Client-side FIFA World Cup prediction app, built under contract with MCI.",
    status: "SHIPPED",
    year: "2022",
    role: "Client developer",
    tech: ["Unity", "WebGL"],
    cover: "assets/img/world-cup.jpg",
    summary: [
      "A prediction app for the FIFA World Cup, developed under contract with MCI (Mobile Communication Company of Iran). Built the client-side app using Unity and its WebGL export target.",
    ],
    highlights: [],
    gallery: [],
    links: { live: "", source: "", video: "" },
  },
  {
    slug: "game-in-server",
    title: "Game-In Server",
    blurb: "Socket-based server for a real-time simulation/management game, built for a Sharif University gaming event.",
    status: "SHIPPED",
    year: "-",
    role: "Backend/server developer",
    tech: ["C#", "WebSocket"],
    cover: "assets/img/gamein.jpg",
    summary: [
      "A socket-based server application for a real-time simulation/management game, developed for a student event held by the Industrial Engineering Department of Sharif University of Technology in Tehran. Built using C#'s web socket features.",
    ],
    highlights: [],
    gallery: [],
    links: { live: "https://www.sharif.edu/en/web/ie/w/holding-the-5th-gaming-event-by-industrial-engineering-department-of-sharif-university-of-technology", source: "", video: "" },
  },
  {
    slug: "shaah-keyvan",
    title: "Shaah Keyvan",
    blurb: "Player management server for a clicker mobile game.",
    status: "SHIPPED",
    year: "-",
    role: "Backend developer",
    tech: ["C#", "MongoDB"],
    cover: "assets/img/king-keyvaan.jpg",
    summary: [
      "Responsible for the design and implementation of a player management server application for a clicker mobile game.",
    ],
    highlights: [],
    gallery: [],
    links: { live: "", source: "", video: "" },
  },
  {
    slug: "sick-mind",
    title: "Sick Mind",
    blurb: "Mobile puzzle game — level design, puzzle design, and in-game economy.",
    status: "SHIPPED",
    year: "-",
    role: "Game Designer",
    tech: ["Level Design", "Puzzle Design", "Game Economy"],
    cover: "assets/img/sick-mind.jpg",
    summary: [
      "My one and only experience as a game designer to date: designed levels, puzzles, and the in-game economy for this mobile puzzle game at TeeToTum Studio.",
    ],
    highlights: [],
    gallery: [],
    links: { live: "", source: "", video: "" },
  },
];

// Newest / most relevant first. Reorder freely — this order drives
// both the homepage grid and the hero status console.
