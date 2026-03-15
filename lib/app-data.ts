export interface App {
  id: string
  name: string
  developer: string
  icon: string
  price: string
  rating: number
  reviews: number
  category: string
  description: string
  screenshots: string[]
  subtitle?: string
  inAppPurchases?: boolean
  size?: string
  age?: string
  featured?: boolean
  featuredImage?: string
  featuredTagline?: string
}

export interface Section {
  id: string
  title: string
  subtitle?: string
  apps: App[]
  layout: "horizontal" | "grid" | "list" | "featured"
}

const generateIcon = (seed: string, colors: string[]) => {
  const colorIndex = seed.charCodeAt(0) % colors.length
  return colors[colorIndex]
}

const appColors = [
  "#007AFF", "#34C759", "#FF9500", "#FF3B30", "#5856D6", 
  "#AF52DE", "#FF2D55", "#00C7BE", "#32ADE6", "#FFD60A"
]

export const appData: { sections: Section[] } = {
  sections: [
    {
      id: "best-new-apps",
      title: "Best New Apps and Updates",
      subtitle: "Our top picks this week",
      layout: "horizontal",
      apps: [
        {
          id: "pixelmator-pro",
          name: "Pixelmator Pro",
          developer: "Pixelmator Team",
          icon: generateIcon("pixelmator", appColors),
          price: "$49.99",
          rating: 4.8,
          reviews: 12500,
          category: "Graphics & Design",
          description: "Pixelmator Pro is an incredibly powerful, beautiful, and easy to use image editor designed exclusively for Mac.",
          screenshots: [],
          subtitle: "Professional image editing",
          size: "440 MB",
          age: "4+"
        },
        {
          id: "things-3",
          name: "Things 3",
          developer: "Cultured Code",
          icon: generateIcon("things", appColors),
          price: "$49.99",
          rating: 4.9,
          reviews: 8900,
          category: "Productivity",
          description: "Things is the award-winning personal task manager that helps you achieve your goals.",
          screenshots: [],
          subtitle: "Get things done",
          size: "22 MB",
          age: "4+"
        },
        {
          id: "fantastical",
          name: "Fantastical",
          developer: "Flexibits Inc.",
          icon: generateIcon("fantastical", appColors),
          price: "Free",
          rating: 4.7,
          reviews: 15600,
          category: "Productivity",
          description: "Fantastical is the award-winning calendar and tasks app with features like natural language parsing.",
          screenshots: [],
          subtitle: "Calendar & Tasks",
          inAppPurchases: true,
          size: "85 MB",
          age: "4+"
        },
        {
          id: "craft",
          name: "Craft - Docs and Notes Editor",
          developer: "Luki Labs Limited",
          icon: generateIcon("craft", appColors),
          price: "Free",
          rating: 4.8,
          reviews: 22000,
          category: "Productivity",
          description: "Craft is a tool for creating beautiful documents and notes.",
          screenshots: [],
          subtitle: "Create amazing docs",
          inAppPurchases: true,
          size: "120 MB",
          age: "4+"
        },
        {
          id: "bear",
          name: "Bear",
          developer: "Shiny Frog Ltd.",
          icon: generateIcon("bear", appColors),
          price: "Free",
          rating: 4.6,
          reviews: 18000,
          category: "Productivity",
          description: "Bear is a beautiful, flexible writing app for crafting notes and prose.",
          screenshots: [],
          subtitle: "Markdown Notes",
          inAppPurchases: true,
          size: "45 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "women-characters",
      title: "Women Characters Lead the Way",
      subtitle: "Celebrate powerful heroines in gaming",
      layout: "featured",
      apps: [
        {
          id: "horizon-forbidden-west",
          name: "Horizon Forbidden West",
          developer: "PlayStation Studios",
          icon: generateIcon("horizon", appColors),
          price: "$49.99",
          rating: 4.9,
          reviews: 45000,
          category: "Games",
          description: "Join Aloy as she braves the Forbidden West, a deadly frontier hiding new threats.",
          screenshots: [],
          featured: true,
          featuredImage: "horizon",
          featuredTagline: "Explore mysterious new lands",
          size: "80 GB",
          age: "12+"
        },
        {
          id: "tomb-raider",
          name: "Tomb Raider",
          developer: "Feral Interactive",
          icon: generateIcon("tomb", appColors),
          price: "$19.99",
          rating: 4.7,
          reviews: 32000,
          category: "Games",
          description: "Experience Lara Croft's origin story in this action-adventure game.",
          screenshots: [],
          size: "14 GB",
          age: "17+"
        },
        {
          id: "control",
          name: "Control Ultimate Edition",
          developer: "505 Games",
          icon: generateIcon("control", appColors),
          price: "$39.99",
          rating: 4.8,
          reviews: 28000,
          category: "Games",
          description: "After a secretive agency in New York is invaded by an otherworldly threat, become the new Director.",
          screenshots: [],
          size: "42 GB",
          age: "17+"
        }
      ]
    },
    {
      id: "top-free-apps",
      title: "Top Free Apps",
      layout: "list",
      apps: [
        {
          id: "whatsapp",
          name: "WhatsApp Messenger",
          developer: "WhatsApp Inc.",
          icon: generateIcon("whatsapp", appColors),
          price: "Free",
          rating: 4.6,
          reviews: 890000,
          category: "Social Networking",
          description: "Simple. Reliable. Private. With WhatsApp, you'll get fast, simple, secure messaging.",
          screenshots: [],
          size: "120 MB",
          age: "12+"
        },
        {
          id: "telegram",
          name: "Telegram",
          developer: "Telegram FZ-LLC",
          icon: generateIcon("telegram", appColors),
          price: "Free",
          rating: 4.5,
          reviews: 650000,
          category: "Social Networking",
          description: "Telegram is a messaging app with a focus on speed and security.",
          screenshots: [],
          size: "85 MB",
          age: "17+"
        },
        {
          id: "zoom",
          name: "Zoom",
          developer: "Zoom Video Communications",
          icon: generateIcon("zoom", appColors),
          price: "Free",
          rating: 4.4,
          reviews: 520000,
          category: "Business",
          description: "Connect with anyone, anywhere with Zoom's unified communications platform.",
          screenshots: [],
          inAppPurchases: true,
          size: "95 MB",
          age: "4+"
        },
        {
          id: "slack",
          name: "Slack",
          developer: "Slack Technologies",
          icon: generateIcon("slack", appColors),
          price: "Free",
          rating: 4.5,
          reviews: 380000,
          category: "Business",
          description: "Slack brings team communication and collaboration into one place.",
          screenshots: [],
          inAppPurchases: true,
          size: "110 MB",
          age: "4+"
        },
        {
          id: "notion",
          name: "Notion",
          developer: "Notion Labs",
          icon: generateIcon("notion", appColors),
          price: "Free",
          rating: 4.7,
          reviews: 290000,
          category: "Productivity",
          description: "Write, plan, and get organized in one place. Notion is the all-in-one workspace.",
          screenshots: [],
          inAppPurchases: true,
          size: "75 MB",
          age: "4+"
        },
        {
          id: "discord",
          name: "Discord",
          developer: "Discord Inc.",
          icon: generateIcon("discord", appColors),
          price: "Free",
          rating: 4.6,
          reviews: 420000,
          category: "Social Networking",
          description: "Discord is your place to talk. Create a home for your communities and friends.",
          screenshots: [],
          size: "130 MB",
          age: "17+"
        }
      ]
    },
    {
      id: "top-paid-apps",
      title: "Top Paid Apps",
      layout: "list",
      apps: [
        {
          id: "final-cut-pro",
          name: "Final Cut Pro",
          developer: "Apple",
          icon: generateIcon("finalcut", appColors),
          price: "$299.99",
          rating: 4.7,
          reviews: 18500,
          category: "Video",
          description: "Final Cut Pro revolutionizes post-production with 360° video editing and motion graphics.",
          screenshots: [],
          size: "3.1 GB",
          age: "4+"
        },
        {
          id: "logic-pro",
          name: "Logic Pro",
          developer: "Apple",
          icon: generateIcon("logic", appColors),
          price: "$199.99",
          rating: 4.8,
          reviews: 22000,
          category: "Music",
          description: "Logic Pro is a complete professional recording studio on the Mac.",
          screenshots: [],
          size: "1.6 GB",
          age: "4+"
        },
        {
          id: "affinity-designer-2",
          name: "Affinity Designer 2",
          developer: "Serif Labs",
          icon: generateIcon("affinity", appColors),
          price: "$69.99",
          rating: 4.8,
          reviews: 15000,
          category: "Graphics & Design",
          description: "Professional graphic design software with precision vector tools.",
          screenshots: [],
          size: "980 MB",
          age: "4+"
        },
        {
          id: "sketch",
          name: "Sketch",
          developer: "Sketch B.V.",
          icon: generateIcon("sketch", appColors),
          price: "$99.00",
          rating: 4.5,
          reviews: 8900,
          category: "Graphics & Design",
          description: "Sketch is the all-in-one platform for digital design.",
          screenshots: [],
          size: "75 MB",
          age: "4+"
        },
        {
          id: "davinci-resolve",
          name: "DaVinci Resolve",
          developer: "Blackmagic Design",
          icon: generateIcon("davinci", appColors),
          price: "$295.00",
          rating: 4.6,
          reviews: 12000,
          category: "Video",
          description: "Professional video editing, color correction, visual effects and audio post production.",
          screenshots: [],
          size: "2.8 GB",
          age: "4+"
        }
      ]
    },
    {
      id: "productivity-gems",
      title: "Discover These Productivity Gems",
      subtitle: "Work smarter, not harder",
      layout: "horizontal",
      apps: [
        {
          id: "raycast",
          name: "Raycast",
          developer: "Raycast Technologies",
          icon: generateIcon("raycast", appColors),
          price: "Free",
          rating: 4.9,
          reviews: 45000,
          category: "Productivity",
          description: "Raycast lets you control your tools with a few keystrokes.",
          screenshots: [],
          subtitle: "Supercharged productivity",
          inAppPurchases: true,
          size: "55 MB",
          age: "4+"
        },
        {
          id: "cleanmymac",
          name: "CleanMyMac X",
          developer: "MacPaw Inc.",
          icon: generateIcon("cleanmymac", appColors),
          price: "$34.99",
          rating: 4.7,
          reviews: 38000,
          category: "Utilities",
          description: "CleanMyMac X is all-in-one package to awesomize your Mac.",
          screenshots: [],
          subtitle: "Clean, optimize, secure",
          size: "85 MB",
          age: "4+"
        },
        {
          id: "1password",
          name: "1Password 8",
          developer: "AgileBits Inc.",
          icon: generateIcon("1password", appColors),
          price: "Free",
          rating: 4.6,
          reviews: 52000,
          category: "Utilities",
          description: "1Password remembers all your passwords and keeps them safe.",
          screenshots: [],
          subtitle: "Password Manager",
          inAppPurchases: true,
          size: "95 MB",
          age: "4+"
        },
        {
          id: "bartender",
          name: "Bartender 4",
          developer: "Surtees Studios",
          icon: generateIcon("bartender", appColors),
          price: "$16.00",
          rating: 4.8,
          reviews: 12000,
          category: "Utilities",
          description: "Take control of your menu bar and organize your menu bar apps.",
          screenshots: [],
          subtitle: "Menu bar organizer",
          size: "12 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "editors-choice-apps",
      title: "Editors' Choice: Top Apps for Every Task",
      subtitle: "Handpicked by our editors",
      layout: "grid",
      apps: [
        {
          id: "procreate-dreams",
          name: "Procreate Dreams",
          developer: "Savage Interactive",
          icon: generateIcon("procreate", appColors),
          price: "$19.99",
          rating: 4.9,
          reviews: 28000,
          category: "Graphics & Design",
          description: "Create hand-drawn animations with cinema-quality results.",
          screenshots: [],
          size: "450 MB",
          age: "4+"
        },
        {
          id: "cardhop",
          name: "Cardhop",
          developer: "Flexibits Inc.",
          icon: generateIcon("cardhop", appColors),
          price: "Free",
          rating: 4.6,
          reviews: 8500,
          category: "Productivity",
          description: "Cardhop is an intuitive contacts app featuring interactive profiles.",
          screenshots: [],
          inAppPurchases: true,
          size: "35 MB",
          age: "4+"
        },
        {
          id: "drafts",
          name: "Drafts",
          developer: "Agile Tortoise",
          icon: generateIcon("drafts", appColors),
          price: "Free",
          rating: 4.8,
          reviews: 19000,
          category: "Productivity",
          description: "Drafts is the quick-capture note taking app.",
          screenshots: [],
          inAppPurchases: true,
          size: "42 MB",
          age: "4+"
        },
        {
          id: "tot",
          name: "Tot",
          developer: "The Iconfactory",
          icon: generateIcon("tot", appColors),
          price: "$19.99",
          rating: 4.7,
          reviews: 6200,
          category: "Productivity",
          description: "Tot is a small companion app for collecting and editing text snippets.",
          screenshots: [],
          size: "8 MB",
          age: "4+"
        },
        {
          id: "mimestream",
          name: "Mimestream",
          developer: "Mimestream, LLC",
          icon: generateIcon("mimestream", appColors),
          price: "Free",
          rating: 4.8,
          reviews: 7800,
          category: "Productivity",
          description: "A native macOS email client for Gmail.",
          screenshots: [],
          inAppPurchases: true,
          size: "28 MB",
          age: "4+"
        },
        {
          id: "istat-menus",
          name: "iStat Menus",
          developer: "Bjango",
          icon: generateIcon("istat", appColors),
          price: "$11.99",
          rating: 4.7,
          reviews: 14000,
          category: "Utilities",
          description: "iStat Menus covers a huge range of stats in a clean and streamlined interface.",
          screenshots: [],
          size: "45 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "mac-games",
      title: "The Latest Must-Play Mac Games",
      subtitle: "Top gaming experiences",
      layout: "horizontal",
      apps: [
        {
          id: "resident-evil-village",
          name: "Resident Evil Village",
          developer: "CAPCOM",
          icon: generateIcon("resident", appColors),
          price: "$39.99",
          rating: 4.8,
          reviews: 52000,
          category: "Games",
          description: "Experience survival horror like never before in the eighth major installment.",
          screenshots: [],
          subtitle: "Survival Horror",
          size: "35 GB",
          age: "17+"
        },
        {
          id: "death-stranding",
          name: "Death Stranding",
          developer: "505 Games",
          icon: generateIcon("death", appColors),
          price: "$39.99",
          rating: 4.7,
          reviews: 38000,
          category: "Games",
          description: "From legendary game creator Hideo Kojima comes an all-new, genre-defying experience.",
          screenshots: [],
          subtitle: "A Hideo Kojima Game",
          size: "80 GB",
          age: "17+"
        },
        {
          id: "baldurs-gate-3",
          name: "Baldur's Gate 3",
          developer: "Larian Studios",
          icon: generateIcon("baldurs", appColors),
          price: "$59.99",
          rating: 4.9,
          reviews: 125000,
          category: "Games",
          description: "Gather your party and return to the Forgotten Realms.",
          screenshots: [],
          subtitle: "Award-winning RPG",
          size: "120 GB",
          age: "17+"
        },
        {
          id: "divinity-2",
          name: "Divinity: Original Sin 2",
          developer: "Larian Studios",
          icon: generateIcon("divinity", appColors),
          price: "$44.99",
          rating: 4.9,
          reviews: 68000,
          category: "Games",
          description: "The critically acclaimed RPG that defined a new standard for the genre.",
          screenshots: [],
          subtitle: "Definitive Edition",
          size: "60 GB",
          age: "17+"
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
          developer: "miHoYo Limited",
          icon: generateIcon("genshin", appColors),
          price: "Free",
          rating: 4.6,
          reviews: 320000,
          category: "Games",
          description: "Step into Teyvat, a vast world teeming with life and flowing with elemental energy.",
          screenshots: [],
          inAppPurchases: true,
          size: "45 GB",
          age: "12+"
        },
        {
          id: "league-of-legends",
          name: "League of Legends",
          developer: "Riot Games",
          icon: generateIcon("league", appColors),
          price: "Free",
          rating: 4.5,
          reviews: 280000,
          category: "Games",
          description: "Join the world's most popular competitive online game.",
          screenshots: [],
          inAppPurchases: true,
          size: "25 GB",
          age: "12+"
        },
        {
          id: "world-of-tanks",
          name: "World of Tanks Blitz",
          developer: "Wargaming Group",
          icon: generateIcon("tanks", appColors),
          price: "Free",
          rating: 4.4,
          reviews: 95000,
          category: "Games",
          description: "Immerse yourself in epic tank battles with players from around the world.",
          screenshots: [],
          inAppPurchases: true,
          size: "4.5 GB",
          age: "12+"
        },
        {
          id: "crossy-road",
          name: "Crossy Road",
          developer: "Hipster Whale",
          icon: generateIcon("crossy", appColors),
          price: "Free",
          rating: 4.7,
          reviews: 180000,
          category: "Games",
          description: "Why did the Chicken cross the road? Why did the Pigeon leave THAT there?",
          screenshots: [],
          inAppPurchases: true,
          size: "120 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "top-paid-games",
      title: "Top Paid Games",
      layout: "list",
      apps: [
        {
          id: "stardew-valley",
          name: "Stardew Valley",
          developer: "ConcernedApe",
          icon: generateIcon("stardew", appColors),
          price: "$14.99",
          rating: 4.9,
          reviews: 95000,
          category: "Games",
          description: "You've inherited your grandfather's old farm plot in Stardew Valley.",
          screenshots: [],
          size: "500 MB",
          age: "9+"
        },
        {
          id: "hollow-knight",
          name: "Hollow Knight",
          developer: "Team Cherry",
          icon: generateIcon("hollow", appColors),
          price: "$14.99",
          rating: 4.9,
          reviews: 78000,
          category: "Games",
          description: "Forge your own path in Hollow Knight! An epic action adventure.",
          screenshots: [],
          size: "9 GB",
          age: "9+"
        },
        {
          id: "hades",
          name: "Hades",
          developer: "Supergiant Games",
          icon: generateIcon("hades", appColors),
          price: "$24.99",
          rating: 4.9,
          reviews: 110000,
          category: "Games",
          description: "Defy the god of the dead as you hack and slash your way out of the Underworld.",
          screenshots: [],
          size: "15 GB",
          age: "12+"
        },
        {
          id: "celeste",
          name: "Celeste",
          developer: "Maddy Makes Games",
          icon: generateIcon("celeste", appColors),
          price: "$19.99",
          rating: 4.9,
          reviews: 52000,
          category: "Games",
          description: "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain.",
          screenshots: [],
          size: "1.2 GB",
          age: "9+"
        }
      ]
    },
    {
      id: "safari-extensions",
      title: "Essential Safari Extensions",
      subtitle: "Enhance your browsing experience",
      layout: "horizontal",
      apps: [
        {
          id: "1blocker",
          name: "1Blocker",
          developer: "1Blocker, Inc.",
          icon: generateIcon("1blocker", appColors),
          price: "Free",
          rating: 4.7,
          reviews: 28000,
          category: "Utilities",
          description: "Block ads, trackers, and other annoyances in Safari.",
          screenshots: [],
          subtitle: "Ad Blocker & Privacy",
          inAppPurchases: true,
          size: "18 MB",
          age: "4+"
        },
        {
          id: "grammarly",
          name: "Grammarly for Safari",
          developer: "Grammarly, Inc.",
          icon: generateIcon("grammarly", appColors),
          price: "Free",
          rating: 4.5,
          reviews: 42000,
          category: "Productivity",
          description: "Grammarly helps you write mistake-free in Safari and beyond.",
          screenshots: [],
          subtitle: "Writing Assistant",
          inAppPurchases: true,
          size: "25 MB",
          age: "4+"
        },
        {
          id: "dark-reader",
          name: "Dark Reader for Safari",
          developer: "Peirce Bowers",
          icon: generateIcon("darkreader", appColors),
          price: "$4.99",
          rating: 4.6,
          reviews: 18000,
          category: "Utilities",
          description: "Dark mode for every website. Take care of your eyes.",
          screenshots: [],
          subtitle: "Dark Mode Extension",
          size: "8 MB",
          age: "4+"
        },
        {
          id: "honey",
          name: "Honey",
          developer: "PayPal, Inc.",
          icon: generateIcon("honey", appColors),
          price: "Free",
          rating: 4.4,
          reviews: 35000,
          category: "Shopping",
          description: "Automatically find and apply coupon codes when you shop online.",
          screenshots: [],
          subtitle: "Save money shopping",
          size: "15 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "apple-arcade",
      title: "Popular Apple Arcade Games",
      subtitle: "Included with Apple Arcade subscription",
      layout: "grid",
      apps: [
        {
          id: "sneaky-sasquatch",
          name: "Sneaky Sasquatch",
          developer: "RAC7 Games",
          icon: generateIcon("sasquatch", appColors),
          price: "Arcade",
          rating: 4.9,
          reviews: 185000,
          category: "Games",
          description: "Live the life of a Sasquatch and do regular everyday things.",
          screenshots: [],
          size: "850 MB",
          age: "4+"
        },
        {
          id: "what-the-golf",
          name: "What The Golf?",
          developer: "Triband",
          icon: generateIcon("golf", appColors),
          price: "Arcade",
          rating: 4.8,
          reviews: 92000,
          category: "Games",
          description: "The golf game for people who hate golf.",
          screenshots: [],
          size: "1.2 GB",
          age: "9+"
        },
        {
          id: "grindstone",
          name: "Grindstone",
          developer: "Capybara Games",
          icon: generateIcon("grindstone", appColors),
          price: "Arcade",
          rating: 4.8,
          reviews: 78000,
          category: "Games",
          description: "Hack and slash through the hordes of Creeps in this addictive puzzle-battler.",
          screenshots: [],
          size: "650 MB",
          age: "9+"
        },
        {
          id: "sayonara",
          name: "Sayonara Wild Hearts",
          developer: "Simogo",
          icon: generateIcon("sayonara", appColors),
          price: "Arcade",
          rating: 4.7,
          reviews: 65000,
          category: "Games",
          description: "A dreamy rhythm adventure where a broken heart restores harmony to the universe.",
          screenshots: [],
          size: "2 GB",
          age: "9+"
        },
        {
          id: "fantasian",
          name: "Fantasian",
          developer: "Mistwalker",
          icon: generateIcon("fantasian", appColors),
          price: "Arcade",
          rating: 4.8,
          reviews: 55000,
          category: "Games",
          description: "An epic RPG from the creator of Final Fantasy.",
          screenshots: [],
          size: "8 GB",
          age: "9+"
        },
        {
          id: "alto-odyssey",
          name: "Alto's Odyssey: The Lost City",
          developer: "Snowman",
          icon: generateIcon("alto", appColors),
          price: "Arcade",
          rating: 4.9,
          reviews: 120000,
          category: "Games",
          description: "Discover the secrets of a magnificent lost city.",
          screenshots: [],
          size: "450 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "creativity",
      title: "Unleash Your Creativity",
      subtitle: "Tools for artists and creators",
      layout: "horizontal",
      apps: [
        {
          id: "adobe-photoshop",
          name: "Adobe Photoshop",
          developer: "Adobe Inc.",
          icon: generateIcon("photoshop", appColors),
          price: "Free",
          rating: 4.6,
          reviews: 125000,
          category: "Graphics & Design",
          description: "The industry standard in digital imaging and professional photo editing.",
          screenshots: [],
          subtitle: "Photo & Design",
          inAppPurchases: true,
          size: "2.8 GB",
          age: "12+"
        },
        {
          id: "figma",
          name: "Figma",
          developer: "Figma, Inc.",
          icon: generateIcon("figma", appColors),
          price: "Free",
          rating: 4.7,
          reviews: 85000,
          category: "Graphics & Design",
          description: "Figma helps teams create, test, and ship better designs.",
          screenshots: [],
          subtitle: "Collaborative Design",
          inAppPurchases: true,
          size: "150 MB",
          age: "4+"
        },
        {
          id: "blender",
          name: "Blender",
          developer: "Blender Foundation",
          icon: generateIcon("blender", appColors),
          price: "Free",
          rating: 4.5,
          reviews: 42000,
          category: "Graphics & Design",
          description: "Free and open source 3D creation suite.",
          screenshots: [],
          subtitle: "3D Creation Suite",
          size: "450 MB",
          age: "4+"
        }
      ]
    },
    {
      id: "microsoft-365",
      title: "Explore Microsoft 365",
      subtitle: "Productivity essentials",
      layout: "horizontal",
      apps: [
        {
          id: "microsoft-word",
          name: "Microsoft Word",
          developer: "Microsoft Corporation",
          icon: generateIcon("word", appColors),
          price: "Free",
          rating: 4.7,
          reviews: 380000,
          category: "Productivity",
          description: "The trusted Word app lets you create, edit, view, and share your files.",
          screenshots: [],
          subtitle: "Document editor",
          inAppPurchases: true,
          size: "1.8 GB",
          age: "4+"
        },
        {
          id: "microsoft-excel",
          name: "Microsoft Excel",
          developer: "Microsoft Corporation",
          icon: generateIcon("excel", appColors),
          price: "Free",
          rating: 4.6,
          reviews: 290000,
          category: "Productivity",
          description: "The powerful Excel spreadsheet app lets you create and edit files.",
          screenshots: [],
          subtitle: "Spreadsheets",
          inAppPurchases: true,
          size: "1.5 GB",
          age: "4+"
        },
        {
          id: "microsoft-powerpoint",
          name: "Microsoft PowerPoint",
          developer: "Microsoft Corporation",
          icon: generateIcon("powerpoint", appColors),
          price: "Free",
          rating: 4.6,
          reviews: 185000,
          category: "Productivity",
          description: "Create and deliver impactful presentations.",
          screenshots: [],
          subtitle: "Presentations",
          inAppPurchases: true,
          size: "1.4 GB",
          age: "4+"
        },
        {
          id: "microsoft-outlook",
          name: "Microsoft Outlook",
          developer: "Microsoft Corporation",
          icon: generateIcon("outlook", appColors),
          price: "Free",
          rating: 4.5,
          reviews: 220000,
          category: "Productivity",
          description: "Outlook lets you bring all your email accounts together.",
          screenshots: [],
          subtitle: "Email & Calendar",
          inAppPurchases: true,
          size: "680 MB",
          age: "4+"
        }
      ]
    }
  ]
}
