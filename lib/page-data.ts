import type { App, Section } from "./app-data"

const appColors = [
  "#007AFF", "#34C759", "#FF9500", "#FF3B30", "#5856D6", 
  "#AF52DE", "#FF2D55", "#00C7BE", "#32ADE6", "#FFD60A"
]

const generateIcon = (seed: string) => {
  const colorIndex = seed.charCodeAt(0) % appColors.length
  return appColors[colorIndex]
}

// Arcade Page Data
export const arcadeCategories = [
  "Action", "Adventure", "Casual", "Family", "Puzzle", "Racing", "Simulation", "Sports", "Strategy", "Word"
]

export const arcadeData: { sections: Section[] } = {
  sections: [
    {
      id: "top-arcade-games",
      title: "Top Arcade Games",
      layout: "horizontal",
      apps: [
        {
          id: "sonic-racing",
          name: "Sonic Racing",
          developer: "SEGA",
          icon: generateIcon("sonic"),
          price: "Arcade",
          rating: 4.6,
          reviews: 28000,
          category: "Racing",
          description: "Race as Sonic and friends in this thrilling multiplayer racing game.",
          screenshots: [],
          subtitle: "Team Racing Action",
          size: "1.2 GB",
          age: "4+"
        },
        {
          id: "alto-odyssey",
          name: "Alto's Odyssey: The Lost City",
          developer: "Snowman",
          icon: generateIcon("alto"),
          price: "Arcade",
          rating: 4.9,
          reviews: 45000,
          category: "Adventure",
          description: "Embark on an endless sandboarding journey through the beautiful desert.",
          screenshots: [],
          subtitle: "Sandboarding Adventure",
          size: "350 MB",
          age: "4+"
        },
        {
          id: "sneaky-sasquatch",
          name: "Sneaky Sasquatch",
          developer: "RAC7 Games",
          icon: generateIcon("sneaky"),
          price: "Arcade",
          rating: 4.8,
          reviews: 62000,
          category: "Adventure",
          description: "Live the life of a Sasquatch! Sneak around, dress up, and go on adventures.",
          screenshots: [],
          subtitle: "Be the Sasquatch",
          size: "800 MB",
          age: "9+"
        },
        {
          id: "crossy-road-castle",
          name: "Crossy Road Castle",
          developer: "Hipster Whale",
          icon: generateIcon("crossy"),
          price: "Arcade",
          rating: 4.7,
          reviews: 38000,
          category: "Action",
          description: "Team up with friends and climb an endless castle of procedurally-generated tower.",
          screenshots: [],
          subtitle: "Endless Tower Climb",
          size: "450 MB",
          age: "4+"
        },
        {
          id: "grindstone",
          name: "Grindstone",
          developer: "Capybara Games",
          icon: generateIcon("grindstone"),
          price: "Arcade",
          rating: 4.8,
          reviews: 52000,
          category: "Puzzle",
          description: "Carve through the Creeps on Grindstone Mountain in this tactical puzzle battler.",
          screenshots: [],
          subtitle: "Puzzle Battle Action",
          size: "650 MB",
          age: "12+"
        }
      ]
    },
    {
      id: "recently-updated",
      title: "Recently Updated",
      subtitle: "With new features, events and more",
      layout: "horizontal",
      apps: [
        {
          id: "what-the-golf",
          name: "What the Golf?",
          developer: "Triband",
          icon: generateIcon("golf"),
          price: "Arcade",
          rating: 4.7,
          reviews: 35000,
          category: "Sports",
          description: "The golf game for people who hate golf.",
          screenshots: [],
          subtitle: "The Anti-Golf Game",
          size: "520 MB",
          age: "4+"
        },
        {
          id: "mini-motorways",
          name: "Mini Motorways",
          developer: "Dinosaur Polo Club",
          icon: generateIcon("mini"),
          price: "Arcade",
          rating: 4.8,
          reviews: 42000,
          category: "Strategy",
          description: "Build the roads that drive a busy city.",
          screenshots: [],
          subtitle: "City Road Building",
          size: "280 MB",
          age: "4+"
        },
        {
          id: "lego-brawls",
          name: "LEGO Brawls",
          developer: "LEGO",
          icon: generateIcon("lego"),
          price: "Arcade",
          rating: 4.5,
          reviews: 18000,
          category: "Action",
          description: "Build your minifigure and battle in this multiplayer brawler.",
          screenshots: [],
          subtitle: "Multiplayer Brawling",
          size: "1.1 GB",
          age: "9+"
        },
        {
          id: "oceanhorn-2",
          name: "Oceanhorn 2",
          developer: "Cornfox & Brothers",
          icon: generateIcon("ocean"),
          price: "Arcade",
          rating: 4.6,
          reviews: 28000,
          category: "Adventure",
          description: "Knights of the Lost Realm - An epic action-adventure RPG.",
          screenshots: [],
          subtitle: "Action RPG",
          size: "3.2 GB",
          age: "9+"
        }
      ]
    },
    {
      id: "new-games",
      title: "New Games",
      subtitle: "Play the latest and greatest",
      layout: "horizontal",
      apps: [
        {
          id: "temple-run-legends",
          name: "Temple Run: Legends",
          developer: "Imangi Studios",
          icon: generateIcon("temple"),
          price: "Arcade",
          rating: 4.5,
          reviews: 22000,
          category: "Action",
          description: "The legendary endless running game reimagined for Apple Arcade.",
          screenshots: [],
          subtitle: "Legendary Runner",
          size: "580 MB",
          age: "9+"
        },
        {
          id: "stitch",
          name: "Disney Stitch",
          developer: "Disney",
          icon: generateIcon("stitch"),
          price: "Arcade",
          rating: 4.7,
          reviews: 15000,
          category: "Casual",
          description: "Join Stitch on an intergalactic adventure!",
          screenshots: [],
          subtitle: "Intergalactic Fun",
          size: "750 MB",
          age: "4+"
        },
        {
          id: "subway-surfers-tag",
          name: "Subway Surfers Tag",
          developer: "Sybo Games",
          icon: generateIcon("subway"),
          price: "Arcade",
          rating: 4.6,
          reviews: 32000,
          category: "Action",
          description: "A new take on the legendary endless runner.",
          screenshots: [],
          subtitle: "Tag & Run",
          size: "420 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "chill-puzzlers",
      title: "Chill Puzzlers",
      subtitle: "Don't stress, just have fun",
      layout: "horizontal",
      apps: [
        {
          id: "sp!ng",
          name: "SP!NG",
          developer: "SMG Studio",
          icon: generateIcon("sp!ng"),
          price: "Arcade",
          rating: 4.5,
          reviews: 12000,
          category: "Puzzle",
          description: "A meditative puzzle game about finding flow.",
          screenshots: [],
          subtitle: "Find Your Flow",
          size: "180 MB",
          age: "4+"
        },
        {
          id: "good-sudoku",
          name: "Good Sudoku",
          developer: "Zach Gage",
          icon: generateIcon("sudoku"),
          price: "Arcade",
          rating: 4.8,
          reviews: 25000,
          category: "Puzzle",
          description: "The puzzle game that teaches you to be a Sudoku genius.",
          screenshots: [],
          subtitle: "Smart Sudoku",
          size: "95 MB",
          age: "4+"
        },
        {
          id: "patterned",
          name: "Patterned",
          developer: "BorderLeap",
          icon: generateIcon("patterned"),
          price: "Arcade",
          rating: 4.6,
          reviews: 8500,
          category: "Puzzle",
          description: "A relaxing jigsaw puzzle game with beautiful patterns.",
          screenshots: [],
          subtitle: "Beautiful Patterns",
          size: "220 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "cozy-vibes",
      title: "Cozy Vibes Only",
      subtitle: "Cute adventures and more",
      layout: "horizontal",
      apps: [
        {
          id: "cozy-grove",
          name: "Cozy Grove",
          developer: "Spry Fox",
          icon: generateIcon("cozy"),
          price: "Arcade",
          rating: 4.7,
          reviews: 28000,
          category: "Simulation",
          description: "A life-sim game about camping on a haunted island.",
          screenshots: [],
          subtitle: "Haunted Island Camping",
          size: "680 MB",
          age: "9+"
        },
        {
          id: "hello-kitty",
          name: "Hello Kitty Island Adventure",
          developer: "Sunblink",
          icon: generateIcon("kitty"),
          price: "Arcade",
          rating: 4.8,
          reviews: 42000,
          category: "Simulation",
          description: "Restore a tropical island paradise with Hello Kitty and friends.",
          screenshots: [],
          subtitle: "Island Paradise",
          size: "1.5 GB",
          age: "4+"
        },
        {
          id: "stardew-valley-plus",
          name: "Stardew Valley+",
          developer: "ConcernedApe",
          icon: generateIcon("stardew"),
          price: "Arcade",
          rating: 4.9,
          reviews: 85000,
          category: "Simulation",
          description: "Turn your overgrown field into a lively farm!",
          screenshots: [],
          subtitle: "Farm Life Sim",
          size: "520 MB",
          age: "9+"
        }
      ]
    },
    {
      id: "wonderfully-weird",
      title: "Wonderfully Weird Games",
      subtitle: "Perfect picks for silly fun",
      layout: "horizontal",
      apps: [
        {
          id: "tangle-tower",
          name: "Tangle Tower",
          developer: "SFB Games",
          icon: generateIcon("tangle"),
          price: "Arcade",
          rating: 4.8,
          reviews: 18000,
          category: "Adventure",
          description: "A murder mystery adventure with curious characters.",
          screenshots: [],
          subtitle: "Murder Mystery",
          size: "420 MB",
          age: "12+"
        },
        {
          id: "assemble-with-care",
          name: "Assemble with Care",
          developer: "ustwo games",
          icon: generateIcon("assemble"),
          price: "Arcade",
          rating: 4.7,
          reviews: 22000,
          category: "Puzzle",
          description: "A heartfelt story about fixing things and people.",
          screenshots: [],
          subtitle: "Fix Things, Fix People",
          size: "380 MB",
          age: "4+"
        },
        {
          id: "agent-intercept",
          name: "Agent Intercept",
          developer: "PikPok",
          icon: generateIcon("agent"),
          price: "Arcade",
          rating: 4.5,
          reviews: 15000,
          category: "Racing",
          description: "A transforming vehicle arcade racing game.",
          screenshots: [],
          subtitle: "Spy Racing Action",
          size: "550 MB",
          age: "9+"
        }
      ]
    },
    {
      id: "great-with-controllers",
      title: "Great With Controllers",
      subtitle: "Expand your options for play",
      layout: "horizontal",
      apps: [
        {
          id: "fantasian",
          name: "Fantasian",
          developer: "Mistwalker",
          icon: generateIcon("fantasian"),
          price: "Arcade",
          rating: 4.9,
          reviews: 55000,
          category: "Adventure",
          description: "An all-new RPG from the creator of Final Fantasy.",
          screenshots: [],
          subtitle: "Epic RPG Adventure",
          size: "4.5 GB",
          age: "9+"
        },
        {
          id: "nba-2k24-arcade",
          name: "NBA 2K24 Arcade Edition",
          developer: "2K",
          icon: generateIcon("nba"),
          price: "Arcade",
          rating: 4.5,
          reviews: 28000,
          category: "Sports",
          description: "Experience NBA basketball on Apple Arcade.",
          screenshots: [],
          subtitle: "NBA Action",
          size: "2.8 GB",
          age: "4+"
        },
        {
          id: "warped-kart-racers",
          name: "Warped Kart Racers",
          developer: "Electric Square",
          icon: generateIcon("warped"),
          price: "Arcade",
          rating: 4.4,
          reviews: 12000,
          category: "Racing",
          description: "Race with your favorite animated TV characters.",
          screenshots: [],
          subtitle: "Cartoon Racing",
          size: "1.2 GB",
          age: "9+"
        }
      ]
    }
  ]
}

// Create Page Data
export const createData: { sections: Section[] } = {
  sections: [
    {
      id: "best-new-creative",
      title: "Best New Creative Apps and Updates",
      layout: "horizontal",
      apps: [
        {
          id: "procreate",
          name: "Procreate",
          developer: "Savage Interactive",
          icon: generateIcon("procreate"),
          price: "$12.99",
          rating: 4.9,
          reviews: 185000,
          category: "Graphics & Design",
          description: "Procreate is the most powerful sketching, painting and illustration app.",
          screenshots: [],
          subtitle: "Sketching & Painting",
          size: "680 MB",
          age: "4+"
        },
        {
          id: "affinity-photo-2",
          name: "Affinity Photo 2",
          developer: "Serif Labs",
          icon: generateIcon("affinity-photo"),
          price: "$69.99",
          rating: 4.8,
          reviews: 18000,
          category: "Photography",
          description: "Professional photo editing software without the subscription.",
          screenshots: [],
          subtitle: "Photo Editing Pro",
          size: "1.2 GB",
          age: "4+"
        },
        {
          id: "da-vinci-resolve",
          name: "DaVinci Resolve",
          developer: "Blackmagic Design",
          icon: generateIcon("davinci"),
          price: "Free",
          rating: 4.7,
          reviews: 22000,
          category: "Video",
          description: "Professional video editing, color correction, and audio post production.",
          screenshots: [],
          subtitle: "Video Production",
          size: "2.8 GB",
          age: "4+"
        },
        {
          id: "pixelmator-pro",
          name: "Pixelmator Pro",
          developer: "Pixelmator Team",
          icon: generateIcon("pixelmator"),
          price: "$49.99",
          rating: 4.8,
          reviews: 12500,
          category: "Graphics & Design",
          description: "Incredibly powerful image editor designed for Mac.",
          screenshots: [],
          subtitle: "Image Editing",
          size: "440 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "essential-creative",
      title: "Essential Creative Apps",
      layout: "grid",
      apps: [
        {
          id: "final-cut-pro",
          name: "Final Cut Pro",
          developer: "Apple",
          icon: generateIcon("finalcut"),
          price: "$299.99",
          rating: 4.7,
          reviews: 18500,
          category: "Video",
          description: "Final Cut Pro revolutionizes post-production.",
          screenshots: [],
          size: "3.1 GB",
          age: "4+"
        },
        {
          id: "logic-pro",
          name: "Logic Pro",
          developer: "Apple",
          icon: generateIcon("logic"),
          price: "$199.99",
          rating: 4.8,
          reviews: 22000,
          category: "Music",
          description: "Complete professional recording studio.",
          screenshots: [],
          size: "1.6 GB",
          age: "4+"
        },
        {
          id: "motion",
          name: "Motion",
          developer: "Apple",
          icon: generateIcon("motion"),
          price: "$49.99",
          rating: 4.6,
          reviews: 8500,
          category: "Video",
          description: "Create stunning motion graphics.",
          screenshots: [],
          size: "2.2 GB",
          age: "4+"
        },
        {
          id: "compressor",
          name: "Compressor",
          developer: "Apple",
          icon: generateIcon("compressor"),
          price: "$49.99",
          rating: 4.5,
          reviews: 5200,
          category: "Video",
          description: "Video encoding and compression.",
          screenshots: [],
          size: "580 MB",
          age: "4+"
        },
        {
          id: "mainstage",
          name: "MainStage",
          developer: "Apple",
          icon: generateIcon("mainstage"),
          price: "$29.99",
          rating: 4.6,
          reviews: 6800,
          category: "Music",
          description: "Live performance tool for musicians.",
          screenshots: [],
          size: "1.1 GB",
          age: "4+"
        },
        {
          id: "sketch",
          name: "Sketch",
          developer: "Sketch B.V.",
          icon: generateIcon("sketch"),
          price: "$99/year",
          rating: 4.5,
          reviews: 8900,
          category: "Graphics & Design",
          description: "All-in-one platform for digital design.",
          screenshots: [],
          size: "75 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "edit-photos",
      title: "Edit Photos and Images",
      layout: "horizontal",
      apps: [
        {
          id: "lightroom",
          name: "Adobe Lightroom",
          developer: "Adobe Inc.",
          icon: generateIcon("lightroom"),
          price: "Free",
          rating: 4.7,
          reviews: 42000,
          category: "Photography",
          description: "Photo editor and camera app for all skill levels.",
          screenshots: [],
          subtitle: "Photo Editor",
          inAppPurchases: true,
          size: "450 MB",
          age: "4+"
        },
        {
          id: "darkroom",
          name: "Darkroom: Photo & Video Editor",
          developer: "Bergen Co.",
          icon: generateIcon("darkroom"),
          price: "Free",
          rating: 4.8,
          reviews: 28000,
          category: "Photography",
          description: "Premium photo and video editing.",
          screenshots: [],
          subtitle: "Premium Editor",
          inAppPurchases: true,
          size: "120 MB",
          age: "4+"
        },
        {
          id: "photomator",
          name: "Photomator",
          developer: "Pixelmator Team",
          icon: generateIcon("photomator"),
          price: "Free",
          rating: 4.7,
          reviews: 15000,
          category: "Photography",
          description: "ML-powered photo editor for Mac.",
          screenshots: [],
          subtitle: "ML Photo Editing",
          inAppPurchases: true,
          size: "280 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "writing-apps",
      title: "Find the Perfect Writing App",
      layout: "horizontal",
      apps: [
        {
          id: "ulysses",
          name: "Ulysses",
          developer: "Ulysses GmbH",
          icon: generateIcon("ulysses"),
          price: "Free",
          rating: 4.7,
          reviews: 18000,
          category: "Productivity",
          description: "The ultimate writing app for Mac, iPad, and iPhone.",
          screenshots: [],
          subtitle: "Writing App",
          inAppPurchases: true,
          size: "65 MB",
          age: "4+"
        },
        {
          id: "ia-writer",
          name: "iA Writer",
          developer: "Information Architects",
          icon: generateIcon("ia"),
          price: "$49.99",
          rating: 4.6,
          reviews: 12500,
          category: "Productivity",
          description: "Focused writing app with markdown support.",
          screenshots: [],
          subtitle: "Focus Writing",
          size: "35 MB",
          age: "4+"
        },
        {
          id: "scrivener",
          name: "Scrivener 3",
          developer: "Literature & Latte",
          icon: generateIcon("scrivener"),
          price: "$49.99",
          rating: 4.8,
          reviews: 22000,
          category: "Productivity",
          description: "The go-to app for writers of all kinds.",
          screenshots: [],
          subtitle: "For Writers",
          size: "180 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "design-masterpiece",
      title: "Create a Design Masterpiece",
      layout: "horizontal",
      apps: [
        {
          id: "figma",
          name: "Figma",
          developer: "Figma, Inc.",
          icon: generateIcon("figma"),
          price: "Free",
          rating: 4.6,
          reviews: 35000,
          category: "Graphics & Design",
          description: "Collaborative interface design tool.",
          screenshots: [],
          subtitle: "Design Together",
          inAppPurchases: true,
          size: "180 MB",
          age: "4+"
        },
        {
          id: "canva",
          name: "Canva",
          developer: "Canva",
          icon: generateIcon("canva"),
          price: "Free",
          rating: 4.8,
          reviews: 125000,
          category: "Graphics & Design",
          description: "Design anything, publish anywhere.",
          screenshots: [],
          subtitle: "Easy Design",
          inAppPurchases: true,
          size: "240 MB",
          age: "4+"
        },
        {
          id: "affinity-designer-2",
          name: "Affinity Designer 2",
          developer: "Serif Labs",
          icon: generateIcon("affinity-d"),
          price: "$69.99",
          rating: 4.8,
          reviews: 15000,
          category: "Graphics & Design",
          description: "Professional graphic design software.",
          screenshots: [],
          subtitle: "Vector Design",
          size: "980 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "make-music",
      title: "Make Great Music",
      layout: "horizontal",
      apps: [
        {
          id: "garageband",
          name: "GarageBand",
          developer: "Apple",
          icon: generateIcon("garageband"),
          price: "Free",
          rating: 4.5,
          reviews: 85000,
          category: "Music",
          description: "Create music like a pro - free on Mac.",
          screenshots: [],
          subtitle: "Music Creation",
          size: "1.5 GB",
          age: "4+"
        },
        {
          id: "ableton-live",
          name: "Ableton Live 12 Lite",
          developer: "Ableton",
          icon: generateIcon("ableton"),
          price: "Free",
          rating: 4.6,
          reviews: 12000,
          category: "Music",
          description: "Music production software for creating.",
          screenshots: [],
          subtitle: "Music Production",
          size: "2.1 GB",
          age: "4+"
        },
        {
          id: "djay-pro",
          name: "djay Pro",
          developer: "algoriddim",
          icon: generateIcon("djay"),
          price: "Free",
          rating: 4.8,
          reviews: 28000,
          category: "Music",
          description: "Professional DJ and mixing app.",
          screenshots: [],
          subtitle: "DJ & Mixing",
          inAppPurchases: true,
          size: "380 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "editors-choice",
      title: "Editors' Choice",
      layout: "grid",
      apps: [
        {
          id: "procreate-dreams",
          name: "Procreate Dreams",
          developer: "Savage Interactive",
          icon: generateIcon("procreate-d"),
          price: "$19.99",
          rating: 4.9,
          reviews: 28000,
          category: "Graphics & Design",
          description: "Create hand-drawn animations.",
          screenshots: [],
          size: "450 MB",
          age: "4+"
        },
        {
          id: "linearity-curve",
          name: "Linearity Curve",
          developer: "Linearity GmbH",
          icon: generateIcon("linearity"),
          price: "Free",
          rating: 4.7,
          reviews: 8500,
          category: "Graphics & Design",
          description: "Vector graphic design app.",
          screenshots: [],
          inAppPurchases: true,
          size: "220 MB",
          age: "4+"
        },
        {
          id: "luma-fusion",
          name: "LumaFusion",
          developer: "LumaTouch",
          icon: generateIcon("luma"),
          price: "$29.99",
          rating: 4.8,
          reviews: 15000,
          category: "Video",
          description: "Professional video editing.",
          screenshots: [],
          size: "650 MB",
          age: "4+"
        },
        {
          id: "ferrite",
          name: "Ferrite Recording Studio",
          developer: "Wooji Juice",
          icon: generateIcon("ferrite"),
          price: "Free",
          rating: 4.7,
          reviews: 6200,
          category: "Music",
          description: "Professional audio recording.",
          screenshots: [],
          inAppPurchases: true,
          size: "85 MB",
          age: "4+"
        }
      ]
    }
  ]
}

// Work Page Data
export const workData: { sections: Section[] } = {
  sections: [
    {
      id: "best-new-productivity",
      title: "Best New Productivity Apps and Updates",
      layout: "horizontal",
      apps: [
        {
          id: "things-3",
          name: "Things 3",
          developer: "Cultured Code",
          icon: generateIcon("things"),
          price: "$49.99",
          rating: 4.9,
          reviews: 8900,
          category: "Productivity",
          description: "Award-winning personal task manager.",
          screenshots: [],
          subtitle: "Get Things Done",
          size: "22 MB",
          age: "4+"
        },
        {
          id: "fantastical",
          name: "Fantastical",
          developer: "Flexibits Inc.",
          icon: generateIcon("fantastical"),
          price: "Free",
          rating: 4.7,
          reviews: 15600,
          category: "Productivity",
          description: "Award-winning calendar and tasks app.",
          screenshots: [],
          subtitle: "Calendar & Tasks",
          inAppPurchases: true,
          size: "85 MB",
          age: "4+"
        },
        {
          id: "craft",
          name: "Craft - Docs and Notes",
          developer: "Luki Labs",
          icon: generateIcon("craft"),
          price: "Free",
          rating: 4.8,
          reviews: 22000,
          category: "Productivity",
          description: "Create beautiful documents and notes.",
          screenshots: [],
          subtitle: "Beautiful Docs",
          inAppPurchases: true,
          size: "120 MB",
          age: "4+"
        },
        {
          id: "notion",
          name: "Notion",
          developer: "Notion Labs",
          icon: generateIcon("notion"),
          price: "Free",
          rating: 4.7,
          reviews: 290000,
          category: "Productivity",
          description: "All-in-one workspace for notes and tasks.",
          screenshots: [],
          subtitle: "All-in-One Workspace",
          inAppPurchases: true,
          size: "75 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "stay-on-task",
      title: "Stay on Task",
      layout: "horizontal",
      apps: [
        {
          id: "todoist",
          name: "Todoist: To-Do List & Planner",
          developer: "Doist Inc.",
          icon: generateIcon("todoist"),
          price: "Free",
          rating: 4.8,
          reviews: 125000,
          category: "Productivity",
          description: "Organize work and life with Todoist.",
          screenshots: [],
          subtitle: "Task Manager",
          inAppPurchases: true,
          size: "65 MB",
          age: "4+"
        },
        {
          id: "ticktick",
          name: "TickTick: To Do List & Tasks",
          developer: "Appest Limited",
          icon: generateIcon("ticktick"),
          price: "Free",
          rating: 4.7,
          reviews: 85000,
          category: "Productivity",
          description: "Get things done with this powerful task manager.",
          screenshots: [],
          subtitle: "Tasks & Habits",
          inAppPurchases: true,
          size: "55 MB",
          age: "4+"
        },
        {
          id: "omnifocus",
          name: "OmniFocus 3",
          developer: "The Omni Group",
          icon: generateIcon("omnifocus"),
          price: "Free",
          rating: 4.6,
          reviews: 12000,
          category: "Productivity",
          description: "Accomplish more every day with OmniFocus.",
          screenshots: [],
          subtitle: "GTD Task Manager",
          inAppPurchases: true,
          size: "45 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "microsoft-365",
      title: "Explore Microsoft 365",
      layout: "horizontal",
      apps: [
        {
          id: "word",
          name: "Microsoft Word",
          developer: "Microsoft Corporation",
          icon: generateIcon("word"),
          price: "Free",
          rating: 4.7,
          reviews: 320000,
          category: "Productivity",
          description: "Create, edit & share documents.",
          screenshots: [],
          subtitle: "Documents",
          inAppPurchases: true,
          size: "1.2 GB",
          age: "4+"
        },
        {
          id: "excel",
          name: "Microsoft Excel",
          developer: "Microsoft Corporation",
          icon: generateIcon("excel"),
          price: "Free",
          rating: 4.7,
          reviews: 280000,
          category: "Productivity",
          description: "Spreadsheets and data analysis.",
          screenshots: [],
          subtitle: "Spreadsheets",
          inAppPurchases: true,
          size: "1.1 GB",
          age: "4+"
        },
        {
          id: "powerpoint",
          name: "Microsoft PowerPoint",
          developer: "Microsoft Corporation",
          icon: generateIcon("powerpoint"),
          price: "Free",
          rating: 4.6,
          reviews: 185000,
          category: "Productivity",
          description: "Create impactful presentations.",
          screenshots: [],
          subtitle: "Presentations",
          inAppPurchases: true,
          size: "980 MB",
          age: "4+"
        },
        {
          id: "outlook",
          name: "Microsoft Outlook",
          developer: "Microsoft Corporation",
          icon: generateIcon("outlook"),
          price: "Free",
          rating: 4.5,
          reviews: 220000,
          category: "Productivity",
          description: "Email and calendar in one place.",
          screenshots: [],
          subtitle: "Email & Calendar",
          inAppPurchases: true,
          size: "650 MB",
          age: "4+"
        },
        {
          id: "teams",
          name: "Microsoft Teams",
          developer: "Microsoft Corporation",
          icon: generateIcon("teams"),
          price: "Free",
          rating: 4.4,
          reviews: 165000,
          category: "Business",
          description: "Meet, chat, call, and collaborate.",
          screenshots: [],
          subtitle: "Collaboration",
          inAppPurchases: true,
          size: "420 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "take-better-notes",
      title: "Take Better Notes",
      layout: "horizontal",
      apps: [
        {
          id: "bear",
          name: "Bear",
          developer: "Shiny Frog Ltd.",
          icon: generateIcon("bear"),
          price: "Free",
          rating: 4.6,
          reviews: 18000,
          category: "Productivity",
          description: "Beautiful writing app for notes.",
          screenshots: [],
          subtitle: "Markdown Notes",
          inAppPurchases: true,
          size: "45 MB",
          age: "4+"
        },
        {
          id: "obsidian",
          name: "Obsidian",
          developer: "Dynalist Inc.",
          icon: generateIcon("obsidian"),
          price: "Free",
          rating: 4.8,
          reviews: 32000,
          category: "Productivity",
          description: "A knowledge base on your local folder.",
          screenshots: [],
          subtitle: "Knowledge Base",
          inAppPurchases: true,
          size: "180 MB",
          age: "4+"
        },
        {
          id: "apple-notes",
          name: "Notes",
          developer: "Apple",
          icon: generateIcon("notes"),
          price: "Free",
          rating: 4.5,
          reviews: 450000,
          category: "Productivity",
          description: "Capture your thoughts and ideas.",
          screenshots: [],
          subtitle: "Built-in Notes",
          size: "Included",
          age: "4+"
        },
        {
          id: "goodnotes",
          name: "GoodNotes 6",
          developer: "Time Base Technology",
          icon: generateIcon("goodnotes"),
          price: "Free",
          rating: 4.8,
          reviews: 85000,
          category: "Productivity",
          description: "AI-powered digital paper.",
          screenshots: [],
          subtitle: "Digital Notes",
          inAppPurchases: true,
          size: "280 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "build-faster-workflow",
      title: "Build a Faster Workflow",
      layout: "horizontal",
      apps: [
        {
          id: "raycast",
          name: "Raycast",
          developer: "Raycast Technologies",
          icon: generateIcon("raycast"),
          price: "Free",
          rating: 4.9,
          reviews: 45000,
          category: "Productivity",
          description: "Control your tools with keystrokes.",
          screenshots: [],
          subtitle: "Launcher",
          inAppPurchases: true,
          size: "55 MB",
          age: "4+"
        },
        {
          id: "alfred",
          name: "Alfred",
          developer: "Running with Crayons",
          icon: generateIcon("alfred"),
          price: "Free",
          rating: 4.8,
          reviews: 28000,
          category: "Productivity",
          description: "Productivity app for macOS.",
          screenshots: [],
          subtitle: "Productivity",
          inAppPurchases: true,
          size: "12 MB",
          age: "4+"
        },
        {
          id: "keyboard-maestro",
          name: "Keyboard Maestro",
          developer: "Stairways Software",
          icon: generateIcon("keyboard"),
          price: "$36.00",
          rating: 4.7,
          reviews: 5500,
          category: "Productivity",
          description: "Automate anything on your Mac.",
          screenshots: [],
          subtitle: "Automation",
          size: "35 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "get-organized",
      title: "Get Organized",
      layout: "horizontal",
      apps: [
        {
          id: "magnet",
          name: "Magnet",
          developer: "Crowd Cafe",
          icon: generateIcon("magnet"),
          price: "$7.99",
          rating: 4.8,
          reviews: 52000,
          category: "Productivity",
          description: "Organize your workspace easily.",
          screenshots: [],
          subtitle: "Window Manager",
          size: "8 MB",
          age: "4+"
        },
        {
          id: "cleanmymac-x",
          name: "CleanMyMac X",
          developer: "MacPaw Inc.",
          icon: generateIcon("cleanmymac"),
          price: "$34.99",
          rating: 4.7,
          reviews: 38000,
          category: "Utilities",
          description: "All-in-one Mac cleaner and optimizer.",
          screenshots: [],
          subtitle: "Mac Cleaner",
          size: "85 MB",
          age: "4+"
        },
        {
          id: "dropzone",
          name: "Dropzone 4",
          developer: "Aptonic",
          icon: generateIcon("dropzone"),
          price: "$35.00",
          rating: 4.6,
          reviews: 4200,
          category: "Productivity",
          description: "Make your Mac an even more powerful tool.",
          screenshots: [],
          subtitle: "Drag & Drop",
          size: "22 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "work-editors-choice",
      title: "Editors' Choice",
      layout: "grid",
      apps: [
        {
          id: "agenda",
          name: "Agenda",
          developer: "Momenta B.V.",
          icon: generateIcon("agenda"),
          price: "Free",
          rating: 4.7,
          reviews: 12000,
          category: "Productivity",
          description: "Date-focused note taking.",
          screenshots: [],
          inAppPurchases: true,
          size: "65 MB",
          age: "4+"
        },
        {
          id: "drafts",
          name: "Drafts",
          developer: "Agile Tortoise",
          icon: generateIcon("drafts"),
          price: "Free",
          rating: 4.8,
          reviews: 19000,
          category: "Productivity",
          description: "Quick-capture note taking.",
          screenshots: [],
          inAppPurchases: true,
          size: "42 MB",
          age: "4+"
        },
        {
          id: "cardhop",
          name: "Cardhop",
          developer: "Flexibits Inc.",
          icon: generateIcon("cardhop"),
          price: "Free",
          rating: 4.6,
          reviews: 8500,
          category: "Productivity",
          description: "Intuitive contacts app.",
          screenshots: [],
          inAppPurchases: true,
          size: "35 MB",
          age: "4+"
        }
      ]
    }
  ]
}

// Play Page Data
export const playData: { sections: Section[] } = {
  sections: [
    {
      id: "best-new-games",
      title: "Best New Games and Updates",
      layout: "horizontal",
      apps: [
        {
          id: "assassins-creed-mirage",
          name: "Assassin's Creed Mirage",
          developer: "Ubisoft",
          icon: generateIcon("ac-mirage"),
          price: "$49.99",
          rating: 4.6,
          reviews: 18000,
          category: "Games",
          description: "Return to the roots of the series in 9th-century Baghdad.",
          screenshots: [],
          subtitle: "Stealth Action",
          size: "40 GB",
          age: "17+"
        },
        {
          id: "resident-evil-4",
          name: "Resident Evil 4",
          developer: "CAPCOM",
          icon: generateIcon("re4"),
          price: "$59.99",
          rating: 4.8,
          reviews: 28000,
          category: "Games",
          description: "Survival horror classic remade from the ground up.",
          screenshots: [],
          subtitle: "Survival Horror",
          size: "65 GB",
          age: "17+"
        },
        {
          id: "death-stranding-dc",
          name: "Death Stranding: Director's Cut",
          developer: "505 Games",
          icon: generateIcon("death-stranding"),
          price: "$39.99",
          rating: 4.7,
          reviews: 42000,
          category: "Games",
          description: "The definitive Death Stranding experience.",
          screenshots: [],
          subtitle: "Director's Cut",
          size: "80 GB",
          age: "17+"
        }
      ]
    },
    {
      id: "women-lead",
      title: "Women Characters Lead the Way",
      subtitle: "Celebrate powerful heroines",
      layout: "featured",
      apps: [
        {
          id: "horizon-fw",
          name: "Horizon Forbidden West",
          developer: "PlayStation",
          icon: generateIcon("horizon"),
          price: "$49.99",
          rating: 4.9,
          reviews: 45000,
          category: "Games",
          description: "Join Aloy as she braves the Forbidden West.",
          screenshots: [],
          featured: true,
          featuredImage: "horizon",
          featuredTagline: "Explore mysterious new lands",
          size: "80 GB",
          age: "12+"
        },
        {
          id: "tomb-raider",
          name: "Tomb Raider (2013)",
          developer: "Feral Interactive",
          icon: generateIcon("tombraider"),
          price: "$19.99",
          rating: 4.7,
          reviews: 32000,
          category: "Games",
          description: "Experience Lara Croft's origin story.",
          screenshots: [],
          size: "14 GB",
          age: "17+"
        },
        {
          id: "control",
          name: "Control Ultimate Edition",
          developer: "505 Games",
          icon: generateIcon("control"),
          price: "$39.99",
          rating: 4.8,
          reviews: 28000,
          category: "Games",
          description: "Become the new Director of the Federal Bureau of Control.",
          screenshots: [],
          size: "42 GB",
          age: "17+"
        }
      ]
    },
    {
      id: "must-play-mac",
      title: "The Latest Must-Play Mac Games",
      layout: "horizontal",
      apps: [
        {
          id: "baldurs-gate-3",
          name: "Baldur's Gate 3",
          developer: "Larian Studios",
          icon: generateIcon("bg3"),
          price: "$59.99",
          rating: 4.9,
          reviews: 125000,
          category: "Games",
          description: "Gather your party for an epic RPG adventure.",
          screenshots: [],
          subtitle: "Award-winning RPG",
          size: "120 GB",
          age: "17+"
        },
        {
          id: "cyberpunk-2077",
          name: "Cyberpunk 2077: Ultimate",
          developer: "CD Projekt RED",
          icon: generateIcon("cyberpunk"),
          price: "$59.99",
          rating: 4.7,
          reviews: 85000,
          category: "Games",
          description: "An open-world action-adventure in Night City.",
          screenshots: [],
          subtitle: "Open World RPG",
          size: "70 GB",
          age: "17+"
        },
        {
          id: "no-mans-sky",
          name: "No Man's Sky",
          developer: "Hello Games",
          icon: generateIcon("nms"),
          price: "$59.99",
          rating: 4.6,
          reviews: 52000,
          category: "Games",
          description: "Explore an infinite universe.",
          screenshots: [],
          subtitle: "Space Exploration",
          size: "15 GB",
          age: "9+"
        }
      ]
    },
    {
      id: "games-we-love",
      title: "Games We Love",
      layout: "grid",
      apps: [
        {
          id: "hades",
          name: "Hades",
          developer: "Supergiant Games",
          icon: generateIcon("hades"),
          price: "$24.99",
          rating: 4.9,
          reviews: 68000,
          category: "Games",
          description: "Defy the god of the dead in this roguelike.",
          screenshots: [],
          size: "15 GB",
          age: "12+"
        },
        {
          id: "stardew-valley",
          name: "Stardew Valley",
          developer: "ConcernedApe",
          icon: generateIcon("stardew-v"),
          price: "$14.99",
          rating: 4.9,
          reviews: 95000,
          category: "Games",
          description: "Turn your overgrown field into a lively farm!",
          screenshots: [],
          size: "500 MB",
          age: "9+"
        },
        {
          id: "celeste",
          name: "Celeste",
          developer: "Maddy Makes Games",
          icon: generateIcon("celeste"),
          price: "$19.99",
          rating: 4.9,
          reviews: 42000,
          category: "Games",
          description: "Help Madeline climb Celeste Mountain.",
          screenshots: [],
          size: "1.2 GB",
          age: "9+"
        },
        {
          id: "hollow-knight",
          name: "Hollow Knight",
          developer: "Team Cherry",
          icon: generateIcon("hollow"),
          price: "$14.99",
          rating: 4.9,
          reviews: 78000,
          category: "Games",
          description: "Forge your own path in Hallownest.",
          screenshots: [],
          size: "9 GB",
          age: "9+"
        },
        {
          id: "disco-elysium",
          name: "Disco Elysium: Final Cut",
          developer: "ZA/UM",
          icon: generateIcon("disco"),
          price: "$39.99",
          rating: 4.8,
          reviews: 35000,
          category: "Games",
          description: "A groundbreaking open-world RPG.",
          screenshots: [],
          size: "30 GB",
          age: "17+"
        },
        {
          id: "return-to-monkey",
          name: "Return to Monkey Island",
          developer: "Terrible Toybox",
          icon: generateIcon("monkey"),
          price: "$24.99",
          rating: 4.7,
          reviews: 12000,
          category: "Games",
          description: "Guybrush Threepwood returns!",
          screenshots: [],
          size: "8 GB",
          age: "9+"
        }
      ]
    },
    {
      id: "arcade-popular",
      title: "Popular Apple Arcade Games",
      layout: "horizontal",
      apps: [
        {
          id: "sneaky-sasquatch-play",
          name: "Sneaky Sasquatch",
          developer: "RAC7 Games",
          icon: generateIcon("sasquatch"),
          price: "Arcade",
          rating: 4.8,
          reviews: 62000,
          category: "Games",
          description: "Live the life of a Sasquatch!",
          screenshots: [],
          subtitle: "Be the Sasquatch",
          size: "800 MB",
          age: "9+"
        },
        {
          id: "hello-kitty-play",
          name: "Hello Kitty Island Adventure",
          developer: "Sunblink",
          icon: generateIcon("hellokitty"),
          price: "Arcade",
          rating: 4.8,
          reviews: 42000,
          category: "Games",
          description: "Restore a tropical island with Hello Kitty.",
          screenshots: [],
          subtitle: "Island Paradise",
          size: "1.5 GB",
          age: "4+"
        },
        {
          id: "grindstone-play",
          name: "Grindstone",
          developer: "Capybara Games",
          icon: generateIcon("grindstone-p"),
          price: "Arcade",
          rating: 4.8,
          reviews: 52000,
          category: "Games",
          description: "Carve through Creeps in this puzzle battler.",
          screenshots: [],
          subtitle: "Puzzle Battle",
          size: "650 MB",
          age: "12+"
        }
      ]
    },
    {
      id: "top-free-games",
      title: "Top Free Games",
      layout: "list",
      apps: [
        {
          id: "genshin-impact",
          name: "Genshin Impact",
          developer: "miHoYo",
          icon: generateIcon("genshin"),
          price: "Free",
          rating: 4.6,
          reviews: 320000,
          category: "Games",
          description: "Step into Teyvat, a vast world of adventure.",
          screenshots: [],
          inAppPurchases: true,
          size: "45 GB",
          age: "12+"
        },
        {
          id: "league",
          name: "League of Legends",
          developer: "Riot Games",
          icon: generateIcon("lol"),
          price: "Free",
          rating: 4.5,
          reviews: 280000,
          category: "Games",
          description: "The world's most popular MOBA.",
          screenshots: [],
          inAppPurchases: true,
          size: "25 GB",
          age: "12+"
        },
        {
          id: "roblox",
          name: "Roblox",
          developer: "Roblox Corporation",
          icon: generateIcon("roblox"),
          price: "Free",
          rating: 4.4,
          reviews: 450000,
          category: "Games",
          description: "Millions of experiences to explore.",
          screenshots: [],
          inAppPurchases: true,
          size: "250 MB",
          age: "9+"
        },
        {
          id: "fortnite",
          name: "Fortnite",
          developer: "Epic Games",
          icon: generateIcon("fortnite"),
          price: "Free",
          rating: 4.5,
          reviews: 380000,
          category: "Games",
          description: "Battle royale and creative modes.",
          screenshots: [],
          inAppPurchases: true,
          size: "35 GB",
          age: "12+"
        }
      ]
    },
    {
      id: "top-paid-games",
      title: "Top Paid Games",
      layout: "list",
      apps: [
        {
          id: "bg3-paid",
          name: "Baldur's Gate 3",
          developer: "Larian Studios",
          icon: generateIcon("bg3-paid"),
          price: "$59.99",
          rating: 4.9,
          reviews: 125000,
          category: "Games",
          description: "Gather your party for an epic adventure.",
          screenshots: [],
          size: "120 GB",
          age: "17+"
        },
        {
          id: "hades-paid",
          name: "Hades",
          developer: "Supergiant Games",
          icon: generateIcon("hades-paid"),
          price: "$24.99",
          rating: 4.9,
          reviews: 68000,
          category: "Games",
          description: "Defy the god of the dead.",
          screenshots: [],
          size: "15 GB",
          age: "12+"
        },
        {
          id: "stardew-paid",
          name: "Stardew Valley",
          developer: "ConcernedApe",
          icon: generateIcon("stardew-paid"),
          price: "$14.99",
          rating: 4.9,
          reviews: 95000,
          category: "Games",
          description: "Turn your field into a lively farm!",
          screenshots: [],
          size: "500 MB",
          age: "9+"
        }
      ]
    },
    {
      id: "play-relax",
      title: "Play to Relax",
      layout: "horizontal",
      apps: [
        {
          id: "unpacking",
          name: "Unpacking",
          developer: "Humble Games",
          icon: generateIcon("unpacking"),
          price: "$19.99",
          rating: 4.8,
          reviews: 28000,
          category: "Games",
          description: "A zen game about unpacking a life.",
          screenshots: [],
          subtitle: "Cozy Puzzle",
          size: "2 GB",
          age: "4+"
        },
        {
          id: "a-short-hike",
          name: "A Short Hike",
          developer: "adamgryu",
          icon: generateIcon("hike"),
          price: "$7.99",
          rating: 4.9,
          reviews: 18000,
          category: "Games",
          description: "Hike, climb, and soar to the summit.",
          screenshots: [],
          subtitle: "Relaxing Adventure",
          size: "300 MB",
          age: "4+"
        },
        {
          id: "spiritfarer",
          name: "Spiritfarer",
          developer: "Thunder Lotus",
          icon: generateIcon("spiritfarer"),
          price: "$29.99",
          rating: 4.8,
          reviews: 22000,
          category: "Games",
          description: "A cozy management game about dying.",
          screenshots: [],
          subtitle: "Cozy Management",
          size: "8 GB",
          age: "9+"
        }
      ]
    }
  ]
}

// Develop Page Data
export const developData: { sections: Section[] } = {
  sections: [
    {
      id: "essential-developer",
      title: "Essential Apps for Developers",
      layout: "horizontal",
      apps: [
        {
          id: "xcode",
          name: "Xcode",
          developer: "Apple",
          icon: generateIcon("xcode"),
          price: "Free",
          rating: 4.5,
          reviews: 85000,
          category: "Developer Tools",
          description: "Apple's integrated development environment.",
          screenshots: [],
          subtitle: "Build Apps",
          size: "12 GB",
          age: "4+"
        },
        {
          id: "bbedit",
          name: "BBEdit",
          developer: "Bare Bones Software",
          icon: generateIcon("bbedit"),
          price: "Free",
          rating: 4.7,
          reviews: 12000,
          category: "Developer Tools",
          description: "Legendary text and code editor.",
          screenshots: [],
          subtitle: "Code Editor",
          inAppPurchases: true,
          size: "25 MB",
          age: "4+"
        },
        {
          id: "testflight",
          name: "TestFlight",
          developer: "Apple",
          icon: generateIcon("testflight"),
          price: "Free",
          rating: 4.6,
          reviews: 28000,
          category: "Developer Tools",
          description: "Beta testing made simple.",
          screenshots: [],
          subtitle: "Beta Testing",
          size: "35 MB",
          age: "4+"
        },
        {
          id: "apple-developer",
          name: "Apple Developer",
          developer: "Apple",
          icon: generateIcon("apple-dev"),
          price: "Free",
          rating: 4.5,
          reviews: 15000,
          category: "Developer Tools",
          description: "Stay connected with the Apple developer community.",
          screenshots: [],
          subtitle: "Developer Resources",
          size: "45 MB",
          age: "4+"
        },
        {
          id: "prompt-3",
          name: "Prompt 3",
          developer: "Panic, Inc.",
          icon: generateIcon("prompt"),
          price: "$24.99",
          rating: 4.8,
          reviews: 8500,
          category: "Developer Tools",
          description: "The SSH app with speed & style.",
          screenshots: [],
          subtitle: "SSH Client",
          size: "28 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "wrangle-code",
      title: "Wrangle Your Code",
      layout: "horizontal",
      apps: [
        {
          id: "vs-code",
          name: "Visual Studio Code",
          developer: "Microsoft",
          icon: generateIcon("vscode"),
          price: "Free",
          rating: 4.8,
          reviews: 125000,
          category: "Developer Tools",
          description: "Code editing. Redefined.",
          screenshots: [],
          subtitle: "Code Editor",
          size: "350 MB",
          age: "4+"
        },
        {
          id: "sublime-text",
          name: "Sublime Text",
          developer: "Sublime HQ",
          icon: generateIcon("sublime"),
          price: "$99.00",
          rating: 4.7,
          reviews: 18000,
          category: "Developer Tools",
          description: "A sophisticated text editor.",
          screenshots: [],
          subtitle: "Text Editor",
          size: "45 MB",
          age: "4+"
        },
        {
          id: "nova",
          name: "Nova",
          developer: "Panic, Inc.",
          icon: generateIcon("nova"),
          price: "$99.00",
          rating: 4.6,
          reviews: 5200,
          category: "Developer Tools",
          description: "The future of code editing on Mac.",
          screenshots: [],
          subtitle: "Mac Native Editor",
          size: "85 MB",
          age: "4+"
        },
        {
          id: "coderunner",
          name: "CodeRunner 4",
          developer: "Nikolai Krill",
          icon: generateIcon("coderunner"),
          price: "$19.99",
          rating: 4.5,
          reviews: 3800,
          category: "Developer Tools",
          description: "Programming editor & IDE.",
          screenshots: [],
          subtitle: "Multi-language IDE",
          size: "42 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "prototype-ideas",
      title: "Prototype Your Ideas",
      layout: "horizontal",
      apps: [
        {
          id: "sketch-dev",
          name: "Sketch",
          developer: "Sketch B.V.",
          icon: generateIcon("sketch-dev"),
          price: "$99/year",
          rating: 4.5,
          reviews: 8900,
          category: "Graphics & Design",
          description: "UI and graphic design app.",
          screenshots: [],
          subtitle: "Design Tool",
          size: "75 MB",
          age: "4+"
        },
        {
          id: "figma-dev",
          name: "Figma",
          developer: "Figma, Inc.",
          icon: generateIcon("figma-dev"),
          price: "Free",
          rating: 4.6,
          reviews: 35000,
          category: "Graphics & Design",
          description: "Collaborative design tool.",
          screenshots: [],
          subtitle: "Design Together",
          inAppPurchases: true,
          size: "180 MB",
          age: "4+"
        },
        {
          id: "detailspro",
          name: "DetailsPro",
          developer: "Sarun W.",
          icon: generateIcon("detailspro"),
          price: "Free",
          rating: 4.5,
          reviews: 2800,
          category: "Developer Tools",
          description: "Design tool for SwiftUI.",
          screenshots: [],
          subtitle: "SwiftUI Design",
          inAppPurchases: true,
          size: "35 MB",
          age: "4+"
        },
        {
          id: "xscope",
          name: "xScope 4",
          developer: "The Iconfactory",
          icon: generateIcon("xscope"),
          price: "$49.99",
          rating: 4.6,
          reviews: 4200,
          category: "Developer Tools",
          description: "Measure, inspect, and test.",
          screenshots: [],
          subtitle: "Pixel Perfect",
          size: "18 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "top-free-dev",
      title: "Top Free Apps",
      layout: "list",
      apps: [
        {
          id: "xcode-list",
          name: "Xcode",
          developer: "Apple",
          icon: generateIcon("xcode-l"),
          price: "Free",
          rating: 4.5,
          reviews: 85000,
          category: "Developer Tools",
          description: "Apple's IDE for building apps.",
          screenshots: [],
          size: "12 GB",
          age: "4+"
        },
        {
          id: "apple-dev-list",
          name: "Apple Developer",
          developer: "Apple",
          icon: generateIcon("apple-dev-l"),
          price: "Free",
          rating: 4.5,
          reviews: 15000,
          category: "Developer Tools",
          description: "Connect with Apple developer community.",
          screenshots: [],
          size: "45 MB",
          age: "4+"
        },
        {
          id: "testflight-list",
          name: "TestFlight",
          developer: "Apple",
          icon: generateIcon("testflight-l"),
          price: "Free",
          rating: 4.6,
          reviews: 28000,
          category: "Developer Tools",
          description: "Beta testing made simple.",
          screenshots: [],
          size: "35 MB",
          age: "4+"
        },
        {
          id: "termius",
          name: "Termius",
          developer: "Termius Corporation",
          icon: generateIcon("termius"),
          price: "Free",
          rating: 4.6,
          reviews: 12000,
          category: "Developer Tools",
          description: "SSH client & terminal.",
          screenshots: [],
          inAppPurchases: true,
          size: "85 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "top-paid-dev",
      title: "Top Paid Apps",
      layout: "list",
      apps: [
        {
          id: "tower",
          name: "Tower",
          developer: "fournova",
          icon: generateIcon("tower"),
          price: "$69.00",
          rating: 4.7,
          reviews: 6500,
          category: "Developer Tools",
          description: "Powerful Git client for Mac.",
          screenshots: [],
          size: "120 MB",
          age: "4+"
        },
        {
          id: "paw",
          name: "RapidAPI",
          developer: "RapidAPI",
          icon: generateIcon("paw"),
          price: "$49.99",
          rating: 4.6,
          reviews: 4800,
          category: "Developer Tools",
          description: "API client and testing tool.",
          screenshots: [],
          size: "95 MB",
          age: "4+"
        },
        {
          id: "kaleidoscope",
          name: "Kaleidoscope 3",
          developer: "Leitmotif GmbH",
          icon: generateIcon("kaleidoscope"),
          price: "$149.99",
          rating: 4.7,
          reviews: 2200,
          category: "Developer Tools",
          description: "Powerful diff and merge tool.",
          screenshots: [],
          size: "65 MB",
          age: "4+"
        }
      ]
    }
  ]
}

// Categories Page Data
export const categoriesPageData: { sections: Section[] } = {
  sections: [
    {
      id: "editors-choice-categories",
      title: "Editors' Choice: Top Apps for Every Task",
      layout: "horizontal",
      apps: [
        {
          id: "mela",
          name: "Mela - Recipe Manager",
          developer: "Mela Labs",
          icon: generateIcon("mela"),
          price: "$9.99",
          rating: 4.8,
          reviews: 12000,
          category: "Food & Drink",
          description: "Your personal cookbook.",
          screenshots: [],
          subtitle: "Recipe Manager",
          size: "45 MB",
          age: "4+"
        },
        {
          id: "things-cat",
          name: "Things 3",
          developer: "Cultured Code",
          icon: generateIcon("things-c"),
          price: "$49.99",
          rating: 4.9,
          reviews: 8900,
          category: "Productivity",
          description: "Organize your life.",
          screenshots: [],
          subtitle: "Task Manager",
          size: "22 MB",
          age: "4+"
        },
        {
          id: "magnet-cat",
          name: "Magnet",
          developer: "Crowd Cafe",
          icon: generateIcon("magnet-c"),
          price: "$7.99",
          rating: 4.8,
          reviews: 52000,
          category: "Productivity",
          description: "Organize your workspace.",
          screenshots: [],
          subtitle: "Window Manager",
          size: "8 MB",
          age: "4+"
        },
        {
          id: "fantastical-cat",
          name: "Fantastical",
          developer: "Flexibits",
          icon: generateIcon("fantastical-c"),
          price: "Free",
          rating: 4.7,
          reviews: 15600,
          category: "Productivity",
          description: "Reminders & Todo List.",
          screenshots: [],
          subtitle: "Calendar & Tasks",
          inAppPurchases: true,
          size: "85 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "mac-essentials",
      title: "New to Mac? Try These Mac Essentials",
      layout: "horizontal",
      apps: [
        {
          id: "pages",
          name: "Pages",
          developer: "Apple",
          icon: generateIcon("pages"),
          price: "Free",
          rating: 4.5,
          reviews: 85000,
          category: "Productivity",
          description: "Create documents beautifully.",
          screenshots: [],
          subtitle: "Documents",
          size: "480 MB",
          age: "4+"
        },
        {
          id: "numbers",
          name: "Numbers",
          developer: "Apple",
          icon: generateIcon("numbers"),
          price: "Free",
          rating: 4.4,
          reviews: 65000,
          category: "Productivity",
          description: "Create stunning spreadsheets.",
          screenshots: [],
          subtitle: "Spreadsheets",
          size: "420 MB",
          age: "4+"
        },
        {
          id: "keynote",
          name: "Keynote",
          developer: "Apple",
          icon: generateIcon("keynote"),
          price: "Free",
          rating: 4.5,
          reviews: 72000,
          category: "Productivity",
          description: "Build stunning presentations.",
          screenshots: [],
          subtitle: "Presentations",
          size: "550 MB",
          age: "4+"
        },
        {
          id: "grammarly",
          name: "Grammarly",
          developer: "Grammarly Inc.",
          icon: generateIcon("grammarly"),
          price: "Free",
          rating: 4.6,
          reviews: 125000,
          category: "Productivity",
          description: "AI-powered writing assistant.",
          screenshots: [],
          subtitle: "Writing Help",
          inAppPurchases: true,
          size: "85 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "top-free-cat",
      title: "Top Free Apps",
      layout: "list",
      apps: [
        {
          id: "whatsapp-cat",
          name: "WhatsApp Messenger",
          developer: "WhatsApp Inc.",
          icon: generateIcon("whatsapp-c"),
          price: "Free",
          rating: 4.6,
          reviews: 890000,
          category: "Social Networking",
          description: "Simple. Reliable. Private.",
          screenshots: [],
          size: "120 MB",
          age: "12+"
        },
        {
          id: "word-cat",
          name: "Microsoft Word",
          developer: "Microsoft",
          icon: generateIcon("word-c"),
          price: "Free",
          rating: 4.7,
          reviews: 320000,
          category: "Productivity",
          description: "Create, Edit & Share Documents.",
          screenshots: [],
          inAppPurchases: true,
          size: "1.2 GB",
          age: "4+"
        },
        {
          id: "excel-cat",
          name: "Microsoft Excel",
          developer: "Microsoft",
          icon: generateIcon("excel-c"),
          price: "Free",
          rating: 4.7,
          reviews: 280000,
          category: "Productivity",
          description: "Spreadsheets and Data Analysis.",
          screenshots: [],
          inAppPurchases: true,
          size: "1.1 GB",
          age: "4+"
        },
        {
          id: "capcut",
          name: "CapCut",
          developer: "Bytedance",
          icon: generateIcon("capcut"),
          price: "Free",
          rating: 4.7,
          reviews: 185000,
          category: "Photo & Video",
          description: "Video maker with music.",
          screenshots: [],
          inAppPurchases: true,
          size: "280 MB",
          age: "12+"
        }
      ]
    },
    {
      id: "top-paid-cat",
      title: "Top Paid Apps",
      layout: "list",
      apps: [
        {
          id: "logic-cat",
          name: "Logic Pro",
          developer: "Apple",
          icon: generateIcon("logic-c"),
          price: "$199.99",
          rating: 4.8,
          reviews: 22000,
          category: "Music",
          description: "Professional music production.",
          screenshots: [],
          size: "1.6 GB",
          age: "4+"
        },
        {
          id: "fcp-cat",
          name: "Final Cut Pro",
          developer: "Apple",
          icon: generateIcon("fcp-c"),
          price: "$299.99",
          rating: 4.7,
          reviews: 18500,
          category: "Video",
          description: "Professional post-production.",
          screenshots: [],
          size: "3.1 GB",
          age: "4+"
        },
        {
          id: "daisydisk",
          name: "DaisyDisk",
          developer: "Software Ambience",
          icon: generateIcon("daisydisk"),
          price: "$9.99",
          rating: 4.8,
          reviews: 28000,
          category: "Utilities",
          description: "Recover disk space.",
          screenshots: [],
          size: "12 MB",
          age: "4+"
        }
      ]
    }
  ]
}

// Category type for category pages
export interface Category {
  id: string
  name: string
  icon: string
}

export const allCategories: Category[] = [
  { id: "business", name: "Business", icon: "Building2" },
  { id: "developer-tools", name: "Developer Tools", icon: "Code2" },
  { id: "education", name: "Education", icon: "GraduationCap" },
  { id: "entertainment", name: "Entertainment", icon: "Film" },
  { id: "finance", name: "Finance", icon: "DollarSign" },
  { id: "games", name: "Games", icon: "Gamepad2" },
  { id: "graphics-design", name: "Graphics & Design", icon: "Palette" },
  { id: "health-fitness", name: "Health & Fitness", icon: "Heart" },
  { id: "lifestyle", name: "Lifestyle", icon: "Coffee" },
  { id: "medical", name: "Medical", icon: "Stethoscope" },
  { id: "music", name: "Music", icon: "Music" },
  { id: "news", name: "News", icon: "Newspaper" },
  { id: "photo-video", name: "Photo & Video", icon: "Camera" },
  { id: "productivity", name: "Productivity", icon: "FileSpreadsheet" },
  { id: "reference", name: "Reference", icon: "BookOpen" },
  { id: "social-networking", name: "Social Networking", icon: "Users" },
  { id: "sports", name: "Sports", icon: "Trophy" },
  { id: "travel", name: "Travel", icon: "Plane" },
  { id: "utilities", name: "Utilities", icon: "Wrench" },
  { id: "weather", name: "Weather", icon: "Cloud" },
]

// Individual category page data generators
export const getCategoryData = (categoryId: string): { title: string; sections: Section[] } => {
  switch (categoryId) {
    case "productivity":
      return {
        title: "Productivity",
        sections: [
          {
            id: "prod-featured",
            title: "Featured Productivity Apps",
            layout: "horizontal",
            apps: [
              {
                id: "things-prod",
                name: "Things 3",
                developer: "Cultured Code",
                icon: generateIcon("things-p"),
                price: "$49.99",
                rating: 4.9,
                reviews: 8900,
                category: "Productivity",
                description: "Award-winning personal task manager.",
                screenshots: [],
                subtitle: "Get Things Done",
                size: "22 MB",
                age: "4+"
              },
              {
                id: "fantastical-prod",
                name: "Fantastical",
                developer: "Flexibits Inc.",
                icon: generateIcon("fantastical-p"),
                price: "Free",
                rating: 4.7,
                reviews: 15600,
                category: "Productivity",
                description: "Award-winning calendar and tasks app.",
                screenshots: [],
                subtitle: "Calendar & Tasks",
                inAppPurchases: true,
                size: "85 MB",
                age: "4+"
              },
              {
                id: "craft-prod",
                name: "Craft - Docs and Notes",
                developer: "Luki Labs",
                icon: generateIcon("craft-p"),
                price: "Free",
                rating: 4.8,
                reviews: 22000,
                category: "Productivity",
                description: "Create beautiful documents and notes.",
                screenshots: [],
                subtitle: "Beautiful Docs",
                inAppPurchases: true,
                size: "120 MB",
                age: "4+"
              }
            ]
          },
          {
            id: "prod-top-free",
            title: "Top Free",
            layout: "list",
            apps: [
              {
                id: "notion-prod",
                name: "Notion",
                developer: "Notion Labs",
                icon: generateIcon("notion-p"),
                price: "Free",
                rating: 4.7,
                reviews: 290000,
                category: "Productivity",
                description: "All-in-one workspace.",
                screenshots: [],
                inAppPurchases: true,
                size: "75 MB",
                age: "4+"
              },
              {
                id: "todoist-prod",
                name: "Todoist",
                developer: "Doist Inc.",
                icon: generateIcon("todoist-p"),
                price: "Free",
                rating: 4.8,
                reviews: 125000,
                category: "Productivity",
                description: "To-Do List & Planner.",
                screenshots: [],
                inAppPurchases: true,
                size: "65 MB",
                age: "4+"
              }
            ]
          },
          {
            id: "prod-top-paid",
            title: "Top Paid",
            layout: "list",
            apps: [
              {
                id: "things-prod-paid",
                name: "Things 3",
                developer: "Cultured Code",
                icon: generateIcon("things-pp"),
                price: "$49.99",
                rating: 4.9,
                reviews: 8900,
                category: "Productivity",
                description: "Personal task manager.",
                screenshots: [],
                size: "22 MB",
                age: "4+"
              },
              {
                id: "magnet-prod",
                name: "Magnet",
                developer: "Crowd Cafe",
                icon: generateIcon("magnet-p"),
                price: "$7.99",
                rating: 4.8,
                reviews: 52000,
                category: "Productivity",
                description: "Window manager.",
                screenshots: [],
                size: "8 MB",
                age: "4+"
              }
            ]
          }
        ]
      }
    case "utilities":
      return {
        title: "Utilities",
        sections: [
          {
            id: "util-featured",
            title: "Essential Utilities",
            layout: "horizontal",
            apps: [
              {
                id: "cleanmymac-util",
                name: "CleanMyMac X",
                developer: "MacPaw Inc.",
                icon: generateIcon("cleanmymac-u"),
                price: "$34.99",
                rating: 4.7,
                reviews: 38000,
                category: "Utilities",
                description: "All-in-one Mac cleaner.",
                screenshots: [],
                subtitle: "Clean & Optimize",
                size: "85 MB",
                age: "4+"
              },
              {
                id: "1password-util",
                name: "1Password 8",
                developer: "AgileBits Inc.",
                icon: generateIcon("1pass-u"),
                price: "Free",
                rating: 4.6,
                reviews: 52000,
                category: "Utilities",
                description: "Password manager.",
                screenshots: [],
                subtitle: "Secure Passwords",
                inAppPurchases: true,
                size: "95 MB",
                age: "4+"
              },
              {
                id: "bartender-util",
                name: "Bartender 4",
                developer: "Surtees Studios",
                icon: generateIcon("bartender-u"),
                price: "$16.00",
                rating: 4.8,
                reviews: 12000,
                category: "Utilities",
                description: "Menu bar organizer.",
                screenshots: [],
                subtitle: "Organize Menu Bar",
                size: "12 MB",
                age: "4+"
              }
            ]
          },
          {
            id: "util-top-free",
            title: "Top Free",
            layout: "list",
            apps: [
              {
                id: "amphetamine",
                name: "Amphetamine",
                developer: "William Gustafson",
                icon: generateIcon("amphetamine"),
                price: "Free",
                rating: 4.8,
                reviews: 28000,
                category: "Utilities",
                description: "Keep your Mac awake.",
                screenshots: [],
                size: "8 MB",
                age: "4+"
              },
              {
                id: "appcleaner",
                name: "AppCleaner",
                developer: "FreeMacSoft",
                icon: generateIcon("appcleaner"),
                price: "Free",
                rating: 4.7,
                reviews: 42000,
                category: "Utilities",
                description: "Thoroughly uninstall apps.",
                screenshots: [],
                size: "5 MB",
                age: "4+"
              }
            ]
          }
        ]
      }
    case "photo-video":
      return {
        title: "Photo & Video",
        sections: [
          {
            id: "pv-featured",
            title: "Featured Photo & Video Apps",
            layout: "horizontal",
            apps: [
              {
                id: "fcp-pv",
                name: "Final Cut Pro",
                developer: "Apple",
                icon: generateIcon("fcp-pv"),
                price: "$299.99",
                rating: 4.7,
                reviews: 18500,
                category: "Video",
                description: "Professional video editing.",
                screenshots: [],
                subtitle: "Post-Production",
                size: "3.1 GB",
                age: "4+"
              },
              {
                id: "lightroom-pv",
                name: "Adobe Lightroom",
                developer: "Adobe Inc.",
                icon: generateIcon("lightroom-pv"),
                price: "Free",
                rating: 4.7,
                reviews: 42000,
                category: "Photography",
                description: "Photo editor for all levels.",
                screenshots: [],
                subtitle: "Photo Editor",
                inAppPurchases: true,
                size: "450 MB",
                age: "4+"
              },
              {
                id: "davinci-pv",
                name: "DaVinci Resolve",
                developer: "Blackmagic Design",
                icon: generateIcon("davinci-pv"),
                price: "Free",
                rating: 4.7,
                reviews: 22000,
                category: "Video",
                description: "Professional editing suite.",
                screenshots: [],
                subtitle: "Video Production",
                size: "2.8 GB",
                age: "4+"
              }
            ]
          },
          {
            id: "pv-top-free",
            title: "Top Free",
            layout: "list",
            apps: [
              {
                id: "capcut-pv",
                name: "CapCut",
                developer: "Bytedance",
                icon: generateIcon("capcut-pv"),
                price: "Free",
                rating: 4.7,
                reviews: 185000,
                category: "Photo & Video",
                description: "Video editor with music.",
                screenshots: [],
                inAppPurchases: true,
                size: "280 MB",
                age: "12+"
              },
              {
                id: "imovie",
                name: "iMovie",
                developer: "Apple",
                icon: generateIcon("imovie"),
                price: "Free",
                rating: 4.5,
                reviews: 125000,
                category: "Photo & Video",
                description: "Turn videos into movies.",
                screenshots: [],
                size: "2.4 GB",
                age: "4+"
              }
            ]
          }
        ]
      }
    case "games":
      return {
        title: "Games",
        sections: [
          {
            id: "games-featured",
            title: "Featured Games",
            layout: "horizontal",
            apps: [
              {
                id: "bg3-games",
                name: "Baldur's Gate 3",
                developer: "Larian Studios",
                icon: generateIcon("bg3-g"),
                price: "$59.99",
                rating: 4.9,
                reviews: 125000,
                category: "Games",
                description: "Award-winning RPG adventure.",
                screenshots: [],
                subtitle: "Epic RPG",
                size: "120 GB",
                age: "17+"
              },
              {
                id: "re4-games",
                name: "Resident Evil 4",
                developer: "CAPCOM",
                icon: generateIcon("re4-g"),
                price: "$59.99",
                rating: 4.8,
                reviews: 28000,
                category: "Games",
                description: "Survival horror classic.",
                screenshots: [],
                subtitle: "Horror",
                size: "65 GB",
                age: "17+"
              },
              {
                id: "hades-games",
                name: "Hades",
                developer: "Supergiant Games",
                icon: generateIcon("hades-g"),
                price: "$24.99",
                rating: 4.9,
                reviews: 68000,
                category: "Games",
                description: "Roguelike dungeon crawler.",
                screenshots: [],
                subtitle: "Action Roguelike",
                size: "15 GB",
                age: "12+"
              }
            ]
          },
          {
            id: "games-top-free",
            title: "Top Free Games",
            layout: "list",
            apps: [
              {
                id: "genshin-games",
                name: "Genshin Impact",
                developer: "miHoYo",
                icon: generateIcon("genshin-g"),
                price: "Free",
                rating: 4.6,
                reviews: 320000,
                category: "Games",
                description: "Open-world adventure.",
                screenshots: [],
                inAppPurchases: true,
                size: "45 GB",
                age: "12+"
              },
              {
                id: "lol-games",
                name: "League of Legends",
                developer: "Riot Games",
                icon: generateIcon("lol-g"),
                price: "Free",
                rating: 4.5,
                reviews: 280000,
                category: "Games",
                description: "Popular MOBA.",
                screenshots: [],
                inAppPurchases: true,
                size: "25 GB",
                age: "12+"
              }
            ]
          }
        ]
      }
    case "business":
      return {
        title: "Business",
        sections: [
          {
            id: "bus-featured",
            title: "Essential Business Apps",
            layout: "horizontal",
            apps: [
              {
                id: "slack-bus",
                name: "Slack",
                developer: "Slack Technologies",
                icon: generateIcon("slack-b"),
                price: "Free",
                rating: 4.5,
                reviews: 380000,
                category: "Business",
                description: "Team communication.",
                screenshots: [],
                subtitle: "Collaboration",
                inAppPurchases: true,
                size: "110 MB",
                age: "4+"
              },
              {
                id: "zoom-bus",
                name: "Zoom",
                developer: "Zoom Video",
                icon: generateIcon("zoom-b"),
                price: "Free",
                rating: 4.4,
                reviews: 520000,
                category: "Business",
                description: "Video conferencing.",
                screenshots: [],
                subtitle: "Meetings",
                inAppPurchases: true,
                size: "95 MB",
                age: "4+"
              },
              {
                id: "teams-bus",
                name: "Microsoft Teams",
                developer: "Microsoft",
                icon: generateIcon("teams-b"),
                price: "Free",
                rating: 4.4,
                reviews: 165000,
                category: "Business",
                description: "Meet, chat, collaborate.",
                screenshots: [],
                subtitle: "Teamwork",
                inAppPurchases: true,
                size: "420 MB",
                age: "4+"
              }
            ]
          }
        ]
      }
    case "education":
      return {
        title: "Education",
        sections: [
          {
            id: "edu-featured",
            title: "Featured Education Apps",
            layout: "horizontal",
            apps: [
              {
                id: "duolingo",
                name: "Duolingo",
                developer: "Duolingo Inc.",
                icon: generateIcon("duolingo"),
                price: "Free",
                rating: 4.7,
                reviews: 450000,
                category: "Education",
                description: "Learn languages for free.",
                screenshots: [],
                subtitle: "Language Learning",
                inAppPurchases: true,
                size: "180 MB",
                age: "4+"
              },
              {
                id: "quizlet",
                name: "Quizlet",
                developer: "Quizlet Inc.",
                icon: generateIcon("quizlet"),
                price: "Free",
                rating: 4.6,
                reviews: 285000,
                category: "Education",
                description: "Study with flashcards.",
                screenshots: [],
                subtitle: "Flashcards",
                inAppPurchases: true,
                size: "120 MB",
                age: "4+"
              },
              {
                id: "khan-academy",
                name: "Khan Academy",
                developer: "Khan Academy",
                icon: generateIcon("khan"),
                price: "Free",
                rating: 4.8,
                reviews: 185000,
                category: "Education",
                description: "Free world-class education.",
                screenshots: [],
                subtitle: "Learn Anything",
                size: "95 MB",
                age: "4+"
              }
            ]
          }
        ]
      }
    case "music":
      return {
        title: "Music",
        sections: [
          {
            id: "music-featured",
            title: "Featured Music Apps",
            layout: "horizontal",
            apps: [
              {
                id: "logic-music",
                name: "Logic Pro",
                developer: "Apple",
                icon: generateIcon("logic-m"),
                price: "$199.99",
                rating: 4.8,
                reviews: 22000,
                category: "Music",
                description: "Professional music production.",
                screenshots: [],
                subtitle: "Music Production",
                size: "1.6 GB",
                age: "4+"
              },
              {
                id: "garageband-music",
                name: "GarageBand",
                developer: "Apple",
                icon: generateIcon("garageband-m"),
                price: "Free",
                rating: 4.5,
                reviews: 85000,
                category: "Music",
                description: "Create music like a pro.",
                screenshots: [],
                subtitle: "Music Creation",
                size: "1.5 GB",
                age: "4+"
              },
              {
                id: "spotify",
                name: "Spotify",
                developer: "Spotify AB",
                icon: generateIcon("spotify"),
                price: "Free",
                rating: 4.5,
                reviews: 520000,
                category: "Music",
                description: "Music and podcasts.",
                screenshots: [],
                subtitle: "Streaming",
                inAppPurchases: true,
                size: "150 MB",
                age: "12+"
              }
            ]
          }
        ]
      }
    case "social-networking":
      return {
        title: "Social Networking",
        sections: [
          {
            id: "social-featured",
            title: "Popular Social Apps",
            layout: "horizontal",
            apps: [
              {
                id: "whatsapp-social",
                name: "WhatsApp",
                developer: "WhatsApp Inc.",
                icon: generateIcon("whatsapp-s"),
                price: "Free",
                rating: 4.6,
                reviews: 890000,
                category: "Social Networking",
                description: "Simple. Reliable. Private.",
                screenshots: [],
                subtitle: "Messaging",
                size: "120 MB",
                age: "12+"
              },
              {
                id: "telegram-social",
                name: "Telegram",
                developer: "Telegram FZ-LLC",
                icon: generateIcon("telegram-s"),
                price: "Free",
                rating: 4.5,
                reviews: 650000,
                category: "Social Networking",
                description: "Fast and secure messaging.",
                screenshots: [],
                subtitle: "Messaging",
                size: "85 MB",
                age: "17+"
              },
              {
                id: "discord-social",
                name: "Discord",
                developer: "Discord Inc.",
                icon: generateIcon("discord-s"),
                price: "Free",
                rating: 4.6,
                reviews: 420000,
                category: "Social Networking",
                description: "Your place to talk.",
                screenshots: [],
                subtitle: "Communities",
                size: "130 MB",
                age: "17+"
              }
            ]
          }
        ]
      }
    default:
      return {
        title: categoryId.charAt(0).toUpperCase() + categoryId.slice(1).replace(/-/g, ' '),
        sections: []
      }
  }
}
