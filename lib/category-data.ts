import type { App, Section } from "./app-data"

const appColors = [
  "#007AFF", "#34C759", "#FF9500", "#FF3B30", "#5856D6", 
  "#AF52DE", "#FF2D55", "#00C7BE", "#32ADE6", "#FFD60A"
]

const generateIcon = (seed: string) => {
  const colorIndex = seed.charCodeAt(0) % appColors.length
  return appColors[colorIndex]
}

// All categories for the main categories page
export interface CategoryItem {
  id: string
  name: string
  icon: string
  href: string
}

export const allCategories: CategoryItem[] = [
  { id: "business", name: "Business", icon: "Building2", href: "/categories/business" },
  { id: "developer-tools", name: "Developer Tools", icon: "Code2", href: "/categories/developer-tools" },
  { id: "education", name: "Education", icon: "GraduationCap", href: "/categories/education" },
  { id: "entertainment", name: "Entertainment", icon: "Tv", href: "/categories/entertainment" },
  { id: "finance", name: "Finance", icon: "DollarSign", href: "/categories/finance" },
  { id: "games", name: "Games", icon: "Gamepad2", href: "/categories/games" },
  { id: "graphics-design", name: "Graphics & Design", icon: "Palette", href: "/categories/graphics-design" },
  { id: "health-fitness", name: "Health & Fitness", icon: "Heart", href: "/categories/health-fitness" },
  { id: "lifestyle", name: "Lifestyle", icon: "Sparkles", href: "/categories/lifestyle" },
  { id: "medical", name: "Medical", icon: "Stethoscope", href: "/categories/medical" },
  { id: "music", name: "Music", icon: "Music", href: "/categories/music" },
  { id: "news", name: "News", icon: "Newspaper", href: "/categories/news" },
  { id: "photo-video", name: "Photo & Video", icon: "Camera", href: "/categories/photo-video" },
  { id: "productivity", name: "Productivity", icon: "FileSpreadsheet", href: "/categories/productivity" },
  { id: "reference", name: "Reference", icon: "BookOpen", href: "/categories/reference" },
  { id: "social-networking", name: "Social Networking", icon: "Users", href: "/categories/social-networking" },
  { id: "utilities", name: "Utilities", icon: "Wrench", href: "/categories/utilities" },
  { id: "weather", name: "Weather", icon: "Cloud", href: "/categories/weather" },
]

// Featured hero cards for categories main page
export interface CategoryHeroCard {
  id: string
  tag: string
  title: string
  subtitle: string
  gradient: string
  app: App
}

export const categoryHeroCards: CategoryHeroCard[] = [
  {
    id: "1",
    tag: "ESSENTIALS",
    title: "A-Plus Apps for Students",
    subtitle: "Make the most of class and study time.",
    gradient: "from-emerald-600 to-teal-700",
    app: {
      id: "goodnotes-6",
      name: "GoodNotes 6",
      developer: "Time Base Technology",
      icon: generateIcon("goodnotes"),
      price: "Free",
      rating: 4.8,
      reviews: 85000,
      category: "Productivity",
      description: "AI-powered digital paper for all your notes.",
      screenshots: [],
      inAppPurchases: true,
      size: "280 MB",
      age: "4+"
    }
  },
  {
    id: "2",
    tag: "APPS WE LOVE",
    title: "Stream Prime Video on Your Mac",
    subtitle: "Watch The Wheel of Time, The Boys, and more.",
    gradient: "from-sky-600 to-blue-700",
    app: {
      id: "prime-video",
      name: "Amazon Prime Video",
      developer: "AMZN Mobile LLC",
      icon: generateIcon("prime"),
      price: "Free",
      rating: 4.7,
      reviews: 520000,
      category: "Entertainment",
      description: "Originals, movies, TV, sports.",
      screenshots: [],
      inAppPurchases: true,
      size: "180 MB",
      age: "12+"
    }
  },
  {
    id: "3",
    tag: "TRY SOMETHING NEW",
    title: "Indispensable Affordable Apps",
    subtitle: "Simple but super-useful apps that won't break the bank.",
    gradient: "from-orange-500 to-amber-600",
    app: {
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
      size: "8 MB",
      age: "4+"
    }
  },
  {
    id: "4",
    tag: "GET STARTED",
    title: "Mac Essentials",
    subtitle: "Get amazing games and the best apps for every task.",
    gradient: "from-slate-700 to-zinc-800",
    app: {
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
      size: "22 MB",
      age: "4+"
    }
  },
  {
    id: "5",
    tag: "OUR FAVORITES",
    title: "Your Weather, Your Way",
    subtitle: "Get the forecast lightning-fast with these apps.",
    gradient: "from-cyan-600 to-sky-700",
    app: {
      id: "carrot-weather",
      name: "CARROT Weather",
      developer: "Grailr LLC",
      icon: generateIcon("carrot"),
      price: "Free",
      rating: 4.8,
      reviews: 42000,
      category: "Weather",
      description: "Crazy-powerful weather app with personality.",
      screenshots: [],
      inAppPurchases: true,
      size: "120 MB",
      age: "12+"
    }
  }
]

// Editors' Choice section for categories main page
export const editorsChoiceApps: App[] = [
  {
    id: "mela",
    name: "Mela – Recipe Manager",
    developer: "Mela Labs",
    icon: generateIcon("mela"),
    price: "$4.99",
    rating: 4.8,
    reviews: 8500,
    category: "Food & Drink",
    description: "Your personal cookbook.",
    screenshots: [],
    subtitle: "Your personal cookbook.",
    size: "45 MB",
    age: "4+"
  },
  {
    id: "macfamilytree",
    name: "MacFamilyTree 11",
    developer: "Synium Software",
    icon: generateIcon("family"),
    price: "$39.99",
    rating: 4.7,
    reviews: 3200,
    category: "Lifestyle",
    description: "Modern family history",
    screenshots: [],
    subtitle: "Modern family history",
    size: "180 MB",
    age: "4+"
  },
  {
    id: "lightroom",
    name: "Adobe Lightroom: Photo Editor",
    developer: "Adobe Inc.",
    icon: generateIcon("lightroom"),
    price: "Free",
    rating: 4.7,
    reviews: 42000,
    category: "Photo & Video",
    description: "Edit, manage and share photos",
    screenshots: [],
    subtitle: "Edit, manage and share photos",
    inAppPurchases: true,
    size: "450 MB",
    age: "4+"
  },
  {
    id: "undermyroof",
    name: "Under My Roof Home Inventory +",
    developer: "Pictura",
    icon: generateIcon("roof"),
    price: "$4.99",
    rating: 4.6,
    reviews: 1800,
    category: "Lifestyle",
    description: "Organize & Manage your House",
    screenshots: [],
    subtitle: "Organize & Manage your House",
    size: "65 MB",
    age: "4+"
  },
  {
    id: "things-3",
    name: "Things 3",
    developer: "Cultured Code",
    icon: generateIcon("things"),
    price: "$49.99",
    rating: 4.9,
    reviews: 8900,
    category: "Productivity",
    description: "Organize your life",
    screenshots: [],
    subtitle: "Organize your life",
    size: "22 MB",
    age: "4+"
  },
  {
    id: "ulysses",
    name: "Ulysses: Writing App",
    developer: "Ulysses GmbH",
    icon: generateIcon("ulysses"),
    price: "Free",
    rating: 4.7,
    reviews: 18000,
    category: "Productivity",
    description: "Write a novel, story, book",
    screenshots: [],
    subtitle: "Write a novel, story, book",
    inAppPurchases: true,
    size: "65 MB",
    age: "4+"
  },
  {
    id: "magnet",
    name: "Magnet",
    developer: "Crowd Cafe",
    icon: generateIcon("magnet"),
    price: "$7.99",
    rating: 4.8,
    reviews: 52000,
    category: "Productivity",
    description: "Organize Your Workspace",
    screenshots: [],
    subtitle: "Organize Your Workspace",
    size: "8 MB",
    age: "4+"
  },
  {
    id: "agenda",
    name: "Agenda - Notes meets Calendar",
    developer: "Momenta B.V.",
    icon: generateIcon("agenda"),
    price: "Free",
    rating: 4.7,
    reviews: 12000,
    category: "Productivity",
    description: "Organize your days",
    screenshots: [],
    subtitle: "Organize your days",
    inAppPurchases: true,
    size: "85 MB",
    age: "4+"
  },
  {
    id: "craft",
    name: "Craft: Notes, Documents, AI",
    developer: "Luki Labs Limited",
    icon: generateIcon("craft"),
    price: "Free",
    rating: 4.8,
    reviews: 22000,
    category: "Productivity",
    description: "Task, Schedule & Reminder",
    screenshots: [],
    subtitle: "Task, Schedule & Reminder",
    inAppPurchases: true,
    size: "120 MB",
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
    description: "Get focused, enjoy writing",
    screenshots: [],
    subtitle: "Get focused, enjoy writing",
    size: "35 MB",
    age: "4+"
  },
  {
    id: "fantastical",
    name: "Fantastical - Calendar",
    developer: "Flexibits Inc.",
    icon: generateIcon("fantastical"),
    price: "Free",
    rating: 4.7,
    reviews: 15600,
    category: "Productivity",
    description: "Reminders & Todo List",
    screenshots: [],
    subtitle: "Reminders & Todo List",
    inAppPurchases: true,
    size: "85 MB",
    age: "4+"
  },
  {
    id: "djay",
    name: "djay - DJ App & AI Mixer",
    developer: "algoriddim GmbH",
    icon: generateIcon("djay"),
    price: "Free",
    rating: 4.8,
    reviews: 28000,
    category: "Music",
    description: "Mix Music & Remix Songs",
    screenshots: [],
    subtitle: "Mix Music & Remix Songs",
    inAppPurchases: true,
    size: "380 MB",
    age: "4+"
  },
  {
    id: "flighty",
    name: "Flighty – Live Flight Tracker",
    developer: "Flighty",
    icon: generateIcon("flighty"),
    price: "Free",
    rating: 4.9,
    reviews: 32000,
    category: "Travel",
    description: "World's Fastest Delay Alerts",
    screenshots: [],
    subtitle: "World's Fastest Delay Alerts",
    inAppPurchases: true,
    size: "95 MB",
    age: "4+"
  }
]

// Mac Essentials for categories main page
export const macEssentialsApps: App[] = [
  {
    id: "omnioutliner",
    name: "OmniOutliner 6",
    developer: "The Omni Group",
    icon: generateIcon("omni"),
    price: "$59.99",
    rating: 4.6,
    reviews: 3200,
    category: "Productivity",
    description: "Your thoughts, in order.",
    screenshots: [],
    subtitle: "Your thoughts, in order.",
    size: "45 MB",
    age: "4+"
  },
  {
    id: "essayist",
    name: "Essayist: Academic Writing App",
    developer: "AgileLabs",
    icon: generateIcon("essayist"),
    price: "$9.99",
    rating: 4.5,
    reviews: 1500,
    category: "Education",
    description: "APA, MLA, Chicago & More",
    screenshots: [],
    subtitle: "APA, MLA, Chicago & More",
    size: "35 MB",
    age: "4+"
  },
  {
    id: "ublock",
    name: "uBlock Origin Lite",
    developer: "Raymond Hill",
    icon: generateIcon("ublock"),
    price: "Free",
    rating: 4.7,
    reviews: 8500,
    category: "Utilities",
    description: "An efficient content blocker",
    screenshots: [],
    subtitle: "An efficient content blocker",
    size: "2 MB",
    age: "4+"
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk 2077: Ultimate",
    developer: "CD PROJEKT RED",
    icon: generateIcon("cyberpunk"),
    price: "$59.99",
    rating: 4.7,
    reviews: 125000,
    category: "Games",
    description: "Action-Adventure RPG",
    screenshots: [],
    subtitle: "Action-Adventure RPG",
    size: "70 GB",
    age: "17+"
  },
  {
    id: "deadisland2",
    name: "Dead Island 2 Ultimate Edition",
    developer: "Deep Silver",
    icon: generateIcon("deadisland"),
    price: "$69.99",
    rating: 4.5,
    reviews: 28000,
    category: "Games",
    description: "Action",
    screenshots: [],
    subtitle: "Action",
    size: "50 GB",
    age: "17+"
  },
  {
    id: "robocop",
    name: "RoboCop: Rogue City",
    developer: "Nacon",
    icon: generateIcon("robocop"),
    price: "$49.99",
    rating: 4.4,
    reviews: 12000,
    category: "Games",
    description: "Protect the innocent",
    screenshots: [],
    subtitle: "Protect the innocent",
    size: "45 GB",
    age: "17+"
  },
  {
    id: "darkroom",
    name: "Darkroom: Photo & Video Editor",
    developer: "Bergen Co.",
    icon: generateIcon("darkroom"),
    price: "Free",
    rating: 4.8,
    reviews: 28000,
    category: "Photo & Video",
    description: "Pro Editing, AI & Preset Filters",
    screenshots: [],
    subtitle: "Pro Editing, AI & Preset Filters",
    inAppPurchases: true,
    size: "120 MB",
    age: "4+"
  },
  {
    id: "canva",
    name: "Canva: AI Video & Photo Editor",
    developer: "Canva",
    icon: generateIcon("canva"),
    price: "Free",
    rating: 4.8,
    reviews: 125000,
    category: "Graphics & Design",
    description: "Background Remover, Logo Maker",
    screenshots: [],
    subtitle: "Background Remover, Logo Maker",
    inAppPurchases: true,
    size: "240 MB",
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
    description: "The go-to app for writers",
    screenshots: [],
    subtitle: "The go-to app for writers",
    size: "180 MB",
    age: "4+"
  },
  {
    id: "storyist",
    name: "Storyist 4",
    developer: "Storyist Software",
    icon: generateIcon("storyist"),
    price: "$59.99",
    rating: 4.5,
    reviews: 2800,
    category: "Productivity",
    description: "Productivity",
    screenshots: [],
    subtitle: "Productivity",
    size: "85 MB",
    age: "4+"
  },
  {
    id: "pages",
    name: "Pages: Create Documents",
    developer: "Apple",
    icon: generateIcon("pages"),
    price: "Free",
    rating: 4.6,
    reviews: 185000,
    category: "Productivity",
    description: "Write, layout, and design",
    screenshots: [],
    subtitle: "Write, layout, and design",
    size: "520 MB",
    age: "4+"
  },
  {
    id: "grammarly",
    name: "Grammarly: AI Writing App",
    developer: "Grammarly, Inc.",
    icon: generateIcon("grammarly"),
    price: "Free",
    rating: 4.5,
    reviews: 85000,
    category: "Productivity",
    description: "AI-Powered Writing Assistant",
    screenshots: [],
    subtitle: "AI-Powered Writing Assistant",
    inAppPurchases: true,
    size: "65 MB",
    age: "4+"
  },
  {
    id: "1blocker",
    name: "1Blocker: Ad Blocker",
    developer: "1Blocker, Inc.",
    icon: generateIcon("1blocker"),
    price: "Free",
    rating: 4.7,
    reviews: 12000,
    category: "Utilities",
    description: "Better browsing in Safari",
    screenshots: [],
    subtitle: "Better browsing in Safari",
    inAppPurchases: true,
    size: "25 MB",
    age: "4+"
  }
]

// Top Free Apps for categories main page
export const topFreeAppsCategories: App[] = [
  {
    id: "whatsapp",
    name: "WhatsApp Messenger",
    developer: "WhatsApp Inc.",
    icon: generateIcon("whatsapp"),
    price: "Free",
    rating: 4.6,
    reviews: 890000,
    category: "Social Networking",
    description: "Simple. Reliable. Private.",
    screenshots: [],
    subtitle: "Simple. Reliable. Private.",
    size: "120 MB",
    age: "12+"
  },
  {
    id: "word",
    name: "Microsoft Word",
    developer: "Microsoft Corporation",
    icon: generateIcon("word"),
    price: "Free",
    rating: 4.7,
    reviews: 320000,
    category: "Productivity",
    description: "Create, Edit & Share Documents",
    screenshots: [],
    subtitle: "Create, Edit & Share Documents",
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
    description: "Spreadsheets and Data Analysis",
    screenshots: [],
    subtitle: "Spreadsheets and Data Analysis",
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
    description: "Create Impactful Presentations",
    screenshots: [],
    subtitle: "Create Impactful Presentations",
    inAppPurchases: true,
    size: "980 MB",
    age: "4+"
  },
  {
    id: "capcut",
    name: "CapCut: Photo & Video Editor",
    developer: "ByteDance Pte. Ltd",
    icon: generateIcon("capcut"),
    price: "Free",
    rating: 4.7,
    reviews: 420000,
    category: "Photo & Video",
    description: "Video maker with music",
    screenshots: [],
    subtitle: "Video maker with music",
    inAppPurchases: true,
    size: "380 MB",
    age: "12+"
  },
  {
    id: "prime-video",
    name: "Amazon Prime Video",
    developer: "AMZN Mobile LLC",
    icon: generateIcon("prime"),
    price: "Free",
    rating: 4.7,
    reviews: 520000,
    category: "Entertainment",
    description: "Originals, movies, TV, sports",
    screenshots: [],
    subtitle: "Originals, movies, TV, sports",
    inAppPurchases: true,
    size: "180 MB",
    age: "12+"
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
    description: "Email and calendar",
    screenshots: [],
    subtitle: "Email and calendar",
    inAppPurchases: true,
    size: "650 MB",
    age: "4+"
  }
]

// Top Paid Apps for categories main page
export const topPaidAppsCategories: App[] = [
  {
    id: "shadowrocket",
    name: "Shadowrocket",
    developer: "Shadow Launch Technology",
    icon: generateIcon("shadowrocket"),
    price: "$2.99",
    rating: 4.8,
    reviews: 125000,
    category: "Utilities",
    description: "Rule based proxy utility",
    screenshots: [],
    subtitle: "Rule based proxy utility",
    size: "18 MB",
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
    description: "Professional music production",
    screenshots: [],
    subtitle: "Professional music production",
    size: "1.6 GB",
    age: "4+"
  },
  {
    id: "hazeover",
    name: "HazeOver • Distraction Dimmer™",
    developer: "Point and Shoot",
    icon: generateIcon("hazeover"),
    price: "$4.99",
    rating: 4.7,
    reviews: 8500,
    category: "Productivity",
    description: "Focus and reduce visual noise",
    screenshots: [],
    subtitle: "Focus and reduce visual noise",
    size: "8 MB",
    age: "4+"
  },
  {
    id: "wipr2",
    name: "Wipr 2",
    developer: "Giorgio Calderolla",
    icon: generateIcon("wipr"),
    price: "$4.99",
    rating: 4.6,
    reviews: 6200,
    category: "Utilities",
    description: "Block ads, trackers, and more",
    screenshots: [],
    subtitle: "Block ads, trackers, and more",
    size: "12 MB",
    age: "4+"
  },
  {
    id: "daisydisk",
    name: "DaisyDisk",
    developer: "Software Ambience Corp.",
    icon: generateIcon("daisydisk"),
    price: "$9.99",
    rating: 4.8,
    reviews: 15000,
    category: "Utilities",
    description: "Recover disk space",
    screenshots: [],
    subtitle: "Recover disk space",
    size: "22 MB",
    age: "4+"
  },
  {
    id: "final-cut-pro",
    name: "Final Cut Pro",
    developer: "Apple",
    icon: generateIcon("finalcut"),
    price: "$299.99",
    rating: 4.7,
    reviews: 18500,
    category: "Photo & Video",
    description: "Professional post-production",
    screenshots: [],
    subtitle: "Professional post-production",
    size: "3.1 GB",
    age: "4+"
  },
  {
    id: "magnet",
    name: "Magnet",
    developer: "Crowd Cafe",
    icon: generateIcon("magnet"),
    price: "$7.99",
    rating: 4.8,
    reviews: 52000,
    category: "Productivity",
    description: "Organize Your Workspace",
    screenshots: [],
    subtitle: "Organize Your Workspace",
    size: "8 MB",
    age: "4+"
  }
]

// Productivity Page Data
export const productivityData: { 
  heroCards: { tag: string; title: string; subtitle: string; gradient: string; app: App }[];
  sections: Section[] 
} = {
  heroCards: [
    {
      tag: "OUR FAVORITES",
      title: "Fantastical - Calendar",
      subtitle: "The easy way to calendar.",
      gradient: "from-red-600 to-rose-700",
      app: {
        id: "fantastical",
        name: "Fantastical - Calendar",
        developer: "Flexibits Inc.",
        icon: generateIcon("fantastical"),
        price: "Free",
        rating: 4.7,
        reviews: 15600,
        category: "Productivity",
        description: "Fantastical is the award-winning calendar and tasks app.",
        screenshots: [],
        inAppPurchases: true,
        size: "85 MB",
        age: "4+"
      }
    },
    {
      tag: "EDITORS' CHOICE",
      title: "Things 3",
      subtitle: "See what's urgent, hide what's not.",
      gradient: "from-slate-700 to-zinc-800",
      app: {
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
        size: "22 MB",
        age: "4+"
      }
    }
  ],
  sections: [
    {
      id: "stay-on-task",
      title: "Stay on Task",
      layout: "horizontal",
      apps: [
        { id: "things-3", name: "Things 3", developer: "Cultured Code", icon: generateIcon("things"), price: "$49.99", rating: 4.9, reviews: 8900, category: "Productivity", description: "Organize your life", screenshots: [], subtitle: "Organize your life", size: "22 MB", age: "4+" },
        { id: "ms-todo", name: "Microsoft To Do", developer: "Microsoft Corporation", icon: generateIcon("todo"), price: "Free", rating: 4.7, reviews: 85000, category: "Productivity", description: "Capture Tasks & Set Reminders", screenshots: [], subtitle: "Capture Tasks & Set Reminders", size: "45 MB", age: "4+" },
        { id: "trello", name: "Trello", developer: "Atlassian", icon: generateIcon("trello"), price: "Free", rating: 4.5, reviews: 42000, category: "Productivity", description: "Organize anything, together", screenshots: [], subtitle: "Organize anything, together", inAppPurchases: true, size: "65 MB", age: "4+" },
        { id: "todoist", name: "Todoist: To-Do List & Calendar", developer: "Doist Inc.", icon: generateIcon("todoist"), price: "Free", rating: 4.8, reviews: 125000, category: "Productivity", description: "Planner & reminders", screenshots: [], subtitle: "Planner & reminders", inAppPurchases: true, size: "65 MB", age: "4+" },
        { id: "anydo", name: "Any.do - To do list & Calendar", developer: "Any.do", icon: generateIcon("anydo"), price: "Free", rating: 4.6, reviews: 32000, category: "Productivity", description: "Tasks, Reminders & Planner", screenshots: [], subtitle: "Tasks, Reminders & Planner", inAppPurchases: true, size: "55 MB", age: "4+" },
        { id: "omnifocus", name: "OmniFocus 4", developer: "The Omni Group", icon: generateIcon("omnifocus"), price: "Free", rating: 4.6, reviews: 12000, category: "Productivity", description: "Accomplish More Every Day", screenshots: [], subtitle: "Accomplish More Every Day", inAppPurchases: true, size: "45 MB", age: "4+" },
        { id: "fantastical", name: "Fantastical - Calendar", developer: "Flexibits Inc.", icon: generateIcon("fantastical"), price: "Free", rating: 4.7, reviews: 15600, category: "Productivity", description: "Reminders & Todo List", screenshots: [], subtitle: "Reminders & Todo List", inAppPurchases: true, size: "85 MB", age: "4+" },
      ]
    },
    {
      id: "take-better-notes",
      title: "Take Better Notes",
      layout: "horizontal",
      apps: [
        { id: "goodnotes", name: "Goodnotes: AI Notes, Docs, PDF", developer: "Time Base Technology", icon: generateIcon("goodnotes"), price: "Free", rating: 4.8, reviews: 85000, category: "Productivity", description: "Note taking & whiteboard app", screenshots: [], subtitle: "Note taking & whiteboard app", inAppPurchases: true, size: "280 MB", age: "4+" },
        { id: "onenote", name: "Microsoft OneNote", developer: "Microsoft Corporation", icon: generateIcon("onenote"), price: "Free", rating: 4.6, reviews: 125000, category: "Productivity", description: "Capture Notes, Ideas and Memos", screenshots: [], subtitle: "Capture Notes, Ideas and Memos", size: "420 MB", age: "4+" },
        { id: "evernote", name: "Evernote", developer: "Evernote", icon: generateIcon("evernote"), price: "Free", rating: 4.4, reviews: 185000, category: "Productivity", description: "Notes Organizer & Planner", screenshots: [], subtitle: "Notes Organizer & Planner", inAppPurchases: true, size: "180 MB", age: "4+" },
        { id: "mindnode", name: "MindNode: Mind Map & Outline", developer: "IdeasOnCanvas GmbH", icon: generateIcon("mindnode"), price: "Free", rating: 4.7, reviews: 8500, category: "Productivity", description: "Mind Mapping, Brainstorming", screenshots: [], subtitle: "Mind Mapping, Brainstorming", inAppPurchases: true, size: "65 MB", age: "4+" },
        { id: "bear", name: "Bear: Markdown Notes", developer: "Shiny Frog Ltd.", icon: generateIcon("bear"), price: "Free", rating: 4.6, reviews: 18000, category: "Productivity", description: "Write naturally", screenshots: [], subtitle: "Write naturally", inAppPurchases: true, size: "45 MB", age: "4+" },
        { id: "dayone", name: "Day One", developer: "Bloom Built Inc", icon: generateIcon("dayone"), price: "Free", rating: 4.8, reviews: 42000, category: "Productivity", description: "Your journal for life", screenshots: [], subtitle: "Your journal for life", inAppPurchases: true, size: "120 MB", age: "4+" },
        { id: "agenda", name: "Agenda - Notes meets Calendar", developer: "Momenta B.V.", icon: generateIcon("agenda"), price: "Free", rating: 4.7, reviews: 12000, category: "Productivity", description: "Organize your days", screenshots: [], subtitle: "Organize your days", inAppPurchases: true, size: "85 MB", age: "4+" },
      ]
    },
    {
      id: "write-better",
      title: "Write Better With These Apps",
      layout: "horizontal",
      apps: [
        { id: "word", name: "Microsoft Word", developer: "Microsoft Corporation", icon: generateIcon("word"), price: "Free", rating: 4.7, reviews: 320000, category: "Productivity", description: "Create, Edit & Share Documents", screenshots: [], subtitle: "Create, Edit & Share Documents", inAppPurchases: true, size: "1.2 GB", age: "4+" },
        { id: "grammarly", name: "Grammarly: AI Writing App", developer: "Grammarly, Inc.", icon: generateIcon("grammarly"), price: "Free", rating: 4.5, reviews: 85000, category: "Productivity", description: "AI-Powered Writing Assistant", screenshots: [], subtitle: "AI-Powered Writing Assistant", inAppPurchases: true, size: "65 MB", age: "4+" },
        { id: "craft", name: "Craft: Write docs, AI editing", developer: "Luki Labs Limited", icon: generateIcon("craft"), price: "Free", rating: 4.8, reviews: 22000, category: "Productivity", description: "Journal ideas, meeting notes", screenshots: [], subtitle: "Journal ideas, meeting notes", inAppPurchases: true, size: "120 MB", age: "4+" },
        { id: "bear", name: "Bear: Markdown Notes", developer: "Shiny Frog Ltd.", icon: generateIcon("bear"), price: "Free", rating: 4.6, reviews: 18000, category: "Productivity", description: "Write naturally", screenshots: [], subtitle: "Write naturally", inAppPurchases: true, size: "45 MB", age: "4+" },
        { id: "ulysses", name: "Ulysses: Writing App", developer: "Ulysses GmbH", icon: generateIcon("ulysses"), price: "Free", rating: 4.7, reviews: 18000, category: "Productivity", description: "Write a novel, story, book", screenshots: [], subtitle: "Write a novel, story, book", inAppPurchases: true, size: "65 MB", age: "4+" },
        { id: "scrivener", name: "Scrivener 3", developer: "Literature & Latte", icon: generateIcon("scrivener"), price: "$49.99", rating: 4.8, reviews: 22000, category: "Productivity", description: "The go-to app for writers", screenshots: [], subtitle: "The go-to app for writers", size: "180 MB", age: "4+" },
        { id: "ia-writer", name: "iA Writer", developer: "Information Architects", icon: generateIcon("ia"), price: "$49.99", rating: 4.6, reviews: 12500, category: "Productivity", description: "Get focused, enjoy writing", screenshots: [], subtitle: "Get focused, enjoy writing", size: "35 MB", age: "4+" },
      ]
    },
    {
      id: "top-free-productivity",
      title: "Top Free Apps",
      layout: "list",
      apps: [
        { id: "word", name: "Microsoft Word", developer: "Microsoft Corporation", icon: generateIcon("word"), price: "Free", rating: 4.7, reviews: 320000, category: "Productivity", description: "Create, Edit & Share Documents", screenshots: [], subtitle: "Create, Edit & Share Documents", inAppPurchases: true, size: "1.2 GB", age: "4+" },
        { id: "excel", name: "Microsoft Excel", developer: "Microsoft Corporation", icon: generateIcon("excel"), price: "Free", rating: 4.7, reviews: 280000, category: "Productivity", description: "Spreadsheets and Data Analysis", screenshots: [], subtitle: "Spreadsheets and Data Analysis", inAppPurchases: true, size: "1.1 GB", age: "4+" },
        { id: "powerpoint", name: "Microsoft PowerPoint", developer: "Microsoft Corporation", icon: generateIcon("powerpoint"), price: "Free", rating: 4.6, reviews: 185000, category: "Productivity", description: "Create Impactful Presentations", screenshots: [], subtitle: "Create Impactful Presentations", inAppPurchases: true, size: "980 MB", age: "4+" },
        { id: "outlook", name: "Microsoft Outlook", developer: "Microsoft Corporation", icon: generateIcon("outlook"), price: "Free", rating: 4.5, reviews: 220000, category: "Productivity", description: "Email and calendar", screenshots: [], subtitle: "Email and calendar", inAppPurchases: true, size: "650 MB", age: "4+" },
        { id: "hp-print", name: "HP: Print and Support", developer: "HP Inc.", icon: generateIcon("hp"), price: "Free", rating: 4.2, reviews: 45000, category: "Productivity", description: "The best of HP, in one place", screenshots: [], subtitle: "The best of HP, in one place", size: "85 MB", age: "4+" },
        { id: "join-zoom", name: "Join for Zoom Meetings", developer: "Florian Edelmann", icon: generateIcon("zoom"), price: "Free", rating: 4.5, reviews: 8500, category: "Productivity", description: "One click to join meet", screenshots: [], subtitle: "One click to join meet", size: "12 MB", age: "4+" },
        { id: "join-teams", name: "Join for Teams", developer: "Florian Edelmann", icon: generateIcon("teams"), price: "Free", rating: 4.4, reviews: 5200, category: "Productivity", description: "App for Teams Meetings", screenshots: [], subtitle: "App for Teams Meetings", size: "12 MB", age: "4+" },
      ]
    },
    {
      id: "top-paid-productivity",
      title: "Top Paid Apps",
      layout: "list",
      apps: [
        { id: "magnet", name: "Magnet", developer: "Crowd Cafe", icon: generateIcon("magnet"), price: "$7.99", rating: 4.8, reviews: 52000, category: "Productivity", description: "Organize Your Workspace", screenshots: [], subtitle: "Organize Your Workspace", size: "8 MB", age: "4+" },
        { id: "tampermonkey", name: "Tampermonkey", developer: "Jan Biniok", icon: generateIcon("tampermonkey"), price: "$1.99", rating: 4.6, reviews: 12000, category: "Productivity", description: "Userscript manager", screenshots: [], subtitle: "Userscript manager", size: "8 MB", age: "4+" },
        { id: "libreoffice", name: "LibreOffice", developer: "The Document Foundation", icon: generateIcon("libreoffice"), price: "$8.99", rating: 4.4, reviews: 8500, category: "Productivity", description: "Open Source Office Suite", screenshots: [], subtitle: "Open Source Office Suite", size: "850 MB", age: "4+" },
        { id: "things-3", name: "Things 3", developer: "Cultured Code", icon: generateIcon("things"), price: "$49.99", rating: 4.9, reviews: 8900, category: "Productivity", description: "Organize your life", screenshots: [], subtitle: "Organize your life", size: "22 MB", age: "4+" },
        { id: "dark-reader", name: "Dark Reader for Safari", developer: "Dark Reader Ltd", icon: generateIcon("darkreader"), price: "$4.99", rating: 4.5, reviews: 15000, category: "Productivity", description: "Dark mode for every website", screenshots: [], subtitle: "Dark mode for every website", size: "8 MB", age: "4+" },
        { id: "scrivener", name: "Scrivener 3", developer: "Literature & Latte", icon: generateIcon("scrivener"), price: "$49.99", rating: 4.8, reviews: 22000, category: "Productivity", description: "The go-to app for writers", screenshots: [], subtitle: "The go-to app for writers", size: "180 MB", age: "4+" },
        { id: "gcal", name: "GCal for Google Calendar", developer: "MD Minhazur Rahman", icon: generateIcon("gcal"), price: "$4.99", rating: 4.6, reviews: 5200, category: "Productivity", description: "The Best for Google Calendar", screenshots: [], subtitle: "The Best for Google Calendar", size: "25 MB", age: "4+" },
      ]
    }
  ]
}

// Utilities Page Data
export const utilitiesData: { 
  heroCards: { tag: string; title: string; subtitle: string; gradient: string; app: App }[];
  sections: Section[] 
} = {
  heroCards: [
    {
      tag: "OUR FAVORITES",
      title: "GrandPerspective",
      subtitle: "Slim down your drive.",
      gradient: "from-emerald-600 to-teal-700",
      app: {
        id: "grandperspective",
        name: "GrandPerspective",
        developer: "Erwin Bonsma",
        icon: generateIcon("grandperspective"),
        price: "$2.99",
        rating: 4.6,
        reviews: 3200,
        category: "Utilities",
        description: "Visualize your disk usage and free up space.",
        screenshots: [],
        size: "8 MB",
        age: "4+"
      }
    },
    {
      tag: "ESSENTIALS",
      title: "PCalc",
      subtitle: "The ultimate calculator.",
      gradient: "from-orange-500 to-amber-600",
      app: {
        id: "pcalc",
        name: "PCalc",
        developer: "TLA Systems Ltd.",
        icon: generateIcon("pcalc"),
        price: "$9.99",
        rating: 4.8,
        reviews: 8500,
        category: "Utilities",
        description: "The best calculator for Mac.",
        screenshots: [],
        size: "35 MB",
        age: "4+"
      }
    }
  ],
  sections: [
    {
      id: "top-free-utilities",
      title: "Top Free Apps",
      layout: "list",
      apps: [
        { id: "nordvpn", name: "NordVPN: VPN Fast & Secure", developer: "Nordvpn S.A.", icon: generateIcon("nordvpn"), price: "Free", rating: 4.7, reviews: 185000, category: "Utilities", description: "Safe & Quick VPN, Best Privacy", screenshots: [], subtitle: "Safe & Quick VPN, Best Privacy", inAppPurchases: true, size: "85 MB", age: "4+" },
        { id: "duckduckgo", name: "DuckDuckGo, Duck.ai, & VPN", developer: "DuckDuckGo, Inc.", icon: generateIcon("duckduckgo"), price: "Free", rating: 4.8, reviews: 125000, category: "Utilities", description: "Search, Browser, optional AI", screenshots: [], subtitle: "Search, Browser, optional AI", size: "120 MB", age: "4+" },
        { id: "unarchiver", name: "The Unarchiver", developer: "MacPaw Inc.", icon: generateIcon("unarchiver"), price: "Free", rating: 4.7, reviews: 285000, category: "Utilities", description: "Open any archive in seconds", screenshots: [], subtitle: "Open any archive in seconds", size: "15 MB", age: "4+" },
        { id: "color-widgets", name: "Color Widgets", developer: "MM Apps, Inc.", icon: generateIcon("colorwidgets"), price: "Free", rating: 4.6, reviews: 320000, category: "Utilities", description: "Custom Widgets, Themes & Icons", screenshots: [], subtitle: "Custom Widgets, Themes & Icons", inAppPurchases: true, size: "180 MB", age: "4+" },
        { id: "brother-print", name: "Brother iPrint&Scan", developer: "Brother Industries, LTD.", icon: generateIcon("brother"), price: "Free", rating: 4.3, reviews: 42000, category: "Utilities", description: "Utilities", screenshots: [], subtitle: "Utilities", size: "65 MB", age: "4+" },
        { id: "tailscale", name: "Tailscale", developer: "Tailscale Inc.", icon: generateIcon("tailscale"), price: "Free", rating: 4.8, reviews: 8500, category: "Utilities", description: "Secure Connectivity & Mesh VPN", screenshots: [], subtitle: "Secure Connectivity & Mesh VPN", size: "45 MB", age: "4+" },
        { id: "super-vpn", name: "VPN: Super Unlimited, Fast VPN", developer: "Super VPN", icon: generateIcon("supervpn"), price: "Free", rating: 4.5, reviews: 125000, category: "Utilities", description: "Secure VPN Buck & Master Proxy", screenshots: [], subtitle: "Secure VPN Buck & Master Proxy", inAppPurchases: true, size: "65 MB", age: "4+" },
      ]
    },
    {
      id: "top-paid-utilities",
      title: "Top Paid Apps",
      layout: "list",
      apps: [
        { id: "shadowrocket", name: "Shadowrocket", developer: "Shadow Launch Technology", icon: generateIcon("shadowrocket"), price: "$2.99", rating: 4.8, reviews: 125000, category: "Utilities", description: "Rule based proxy utility", screenshots: [], subtitle: "Rule based proxy utility", size: "18 MB", age: "4+" },
        { id: "daisydisk", name: "DaisyDisk", developer: "Software Ambience Corp.", icon: generateIcon("daisydisk"), price: "$9.99", rating: 4.8, reviews: 15000, category: "Utilities", description: "Recover disk space", screenshots: [], subtitle: "Recover disk space", size: "22 MB", age: "4+" },
        { id: "wipr2", name: "Wipr 2", developer: "Giorgio Calderolla", icon: generateIcon("wipr"), price: "$4.99", rating: 4.6, reviews: 6200, category: "Utilities", description: "Block ads, trackers, and more", screenshots: [], subtitle: "Block ads, trackers, and more", size: "12 MB", age: "4+" },
        { id: "noir", name: "Noir – Dark Mode for Safari", developer: "Jeffrey Kuber", icon: generateIcon("noir"), price: "$2.99", rating: 4.7, reviews: 8500, category: "Utilities", description: "Browse better at night", screenshots: [], subtitle: "Browse better at night", size: "8 MB", age: "4+" },
        { id: "klack", name: "Klack", developer: "Trident Vibes", icon: generateIcon("klack"), price: "$4.99", rating: 4.8, reviews: 5200, category: "Utilities", description: "Satisfying key sounds", screenshots: [], subtitle: "Satisfying key sounds", size: "25 MB", age: "4+" },
        { id: "keka", name: "Keka", developer: "aONe", icon: generateIcon("keka"), price: "$4.99", rating: 4.7, reviews: 12000, category: "Utilities", description: "The file archiver", screenshots: [], subtitle: "The file archiver", size: "35 MB", age: "4+" },
        { id: "rar-extractor", name: "RAR Extractor - Unarchiver Pro", developer: "Mindful Apps", icon: generateIcon("rar"), price: "$2.99", rating: 4.5, reviews: 8500, category: "Utilities", description: "the unarchiver & archiver", screenshots: [], subtitle: "the unarchiver & archiver", size: "18 MB", age: "4+" },
      ]
    }
  ]
}

// Photo & Video Page Data
export const photoVideoData: { 
  heroCards: { tag: string; title: string; subtitle: string; gradient: string; app: App }[];
  sections: Section[] 
} = {
  heroCards: [
    {
      tag: "OUR FAVORITES",
      title: "Photomator – Photo Editor",
      subtitle: "AI-powered photo editing for everyone.",
      gradient: "from-fuchsia-600 to-pink-700",
      app: {
        id: "photomator",
        name: "Photomator – Photo Editor",
        developer: "Pixelmator Team",
        icon: generateIcon("photomator"),
        price: "Free",
        rating: 4.7,
        reviews: 15000,
        category: "Photo & Video",
        description: "Your photo editing powerhouse.",
        screenshots: [],
        inAppPurchases: true,
        size: "280 MB",
        age: "4+"
      }
    },
    {
      tag: "FOR PROS AND ENTHUSIASTS",
      title: "Adobe Lightroom: Photo Editor",
      subtitle: "Edit, manage, and share images.",
      gradient: "from-sky-600 to-blue-700",
      app: {
        id: "lightroom",
        name: "Adobe Lightroom: Photo Editor",
        developer: "Adobe Inc.",
        icon: generateIcon("lightroom"),
        price: "Free",
        rating: 4.7,
        reviews: 42000,
        category: "Photo & Video",
        description: "Edit, manage and share photos.",
        screenshots: [],
        inAppPurchases: true,
        size: "450 MB",
        age: "4+"
      }
    }
  ],
  sections: [
    {
      id: "edit-photos",
      title: "Edit Photos and Images",
      layout: "horizontal",
      apps: [
        { id: "lightroom", name: "Adobe Lightroom: Photo Editor", developer: "Adobe Inc.", icon: generateIcon("lightroom"), price: "Free", rating: 4.7, reviews: 42000, category: "Photo & Video", description: "Edit, manage and share photos", screenshots: [], subtitle: "Edit, manage and share photos", inAppPurchases: true, size: "450 MB", age: "4+" },
        { id: "acorn", name: "Acorn 8", developer: "Flying Meat Inc.", icon: generateIcon("acorn"), price: "$39.99", rating: 4.7, reviews: 5200, category: "Photo & Video", description: "Image editing for humans", screenshots: [], subtitle: "Image editing for humans", size: "85 MB", age: "4+" },
        { id: "polarr", name: "Polarr Pro Photo Editor", developer: "Polarr, Inc.", icon: generateIcon("polarr"), price: "Free", rating: 4.5, reviews: 8500, category: "Photo & Video", description: "Simple, powerful editing tools", screenshots: [], subtitle: "Simple, powerful editing tools", inAppPurchases: true, size: "120 MB", age: "4+" },
        { id: "touchretouch", name: "TouchRetouch: Object Removal", developer: "ADVA Soft GmbH", icon: generateIcon("touchretouch"), price: "$4.99", rating: 4.6, reviews: 12000, category: "Photo & Video", description: "Quick repairs and cloning", screenshots: [], subtitle: "Quick repairs and cloning", size: "65 MB", age: "4+" },
        { id: "nitro-photo", name: "Nitro Photo", developer: "Nitro Software", icon: generateIcon("nitro"), price: "$14.99", rating: 4.5, reviews: 3200, category: "Photo & Video", description: "Pro Photo Editor & Manager", screenshots: [], subtitle: "Pro Photo Editor & Manager", size: "95 MB", age: "4+" },
        { id: "luminar", name: "Luminar Neo - AI Photo Editor", developer: "Skylum", icon: generateIcon("luminar"), price: "Free", rating: 4.4, reviews: 8500, category: "Photo & Video", description: "Edit and enhance your images", screenshots: [], subtitle: "Edit and enhance your images", inAppPurchases: true, size: "2.1 GB", age: "4+" },
        { id: "photomator", name: "Photomator – Photo Editor", developer: "Pixelmator Team", icon: generateIcon("photomator"), price: "Free", rating: 4.7, reviews: 15000, category: "Photo & Video", description: "Your photo editing powerhouse", screenshots: [], subtitle: "Your photo editing powerhouse", inAppPurchases: true, size: "280 MB", age: "4+" },
      ]
    },
    {
      id: "top-free-photo",
      title: "Top Free Apps",
      layout: "list",
      apps: [
        { id: "canva", name: "Canva: AI Video & Photo Editor", developer: "Canva", icon: generateIcon("canva"), price: "Free", rating: 4.8, reviews: 125000, category: "Photo & Video", description: "Background Remover, Logo Maker", screenshots: [], subtitle: "Background Remover, Logo Maker", inAppPurchases: true, size: "240 MB", age: "4+" },
        { id: "capcut", name: "CapCut: Photo & Video Editor", developer: "ByteDance Pte. Ltd", icon: generateIcon("capcut"), price: "Free", rating: 4.7, reviews: 420000, category: "Photo & Video", description: "Video maker with music", screenshots: [], subtitle: "Video maker with music", inAppPurchases: true, size: "380 MB", age: "12+" },
        { id: "apple-creator", name: "Apple Creator Studio", developer: "Apple", icon: generateIcon("applecreator"), price: "Free", rating: 4.5, reviews: 12000, category: "Photo & Video", description: "Photo & Video", screenshots: [], subtitle: "Photo & Video", size: "85 MB", age: "4+" },
        { id: "lightroom", name: "Adobe Lightroom: Photo Editor", developer: "Adobe Inc.", icon: generateIcon("lightroom"), price: "Free", rating: 4.7, reviews: 42000, category: "Photo & Video", description: "Edit, manage and share photos", screenshots: [], subtitle: "Edit, manage and share photos", inAppPurchases: true, size: "450 MB", age: "4+" },
        { id: "final-cut-create", name: "Final Cut Pro: Create Video", developer: "Apple", icon: generateIcon("finalcutcreate"), price: "Free", rating: 4.8, reviews: 8500, category: "Photo & Video", description: "Tell stories that move", screenshots: [], subtitle: "Tell stories that move", size: "3.1 GB", age: "4+" },
        { id: "davinci", name: "DaVinci Resolve", developer: "Blackmagic Design Inc", icon: generateIcon("davinci"), price: "Free", rating: 4.7, reviews: 22000, category: "Photo & Video", description: "Photo & Video", screenshots: [], subtitle: "Photo & Video", size: "2.8 GB", age: "4+" },
        { id: "photoshop-elements", name: "Adobe Photoshop Elements 2025", developer: "Adobe Inc.", icon: generateIcon("pselements"), price: "Free", rating: 4.5, reviews: 15000, category: "Photo & Video", description: "Organize, Edit, Create & Share", screenshots: [], subtitle: "Organize, Edit, Create & Share", inAppPurchases: true, size: "4.2 GB", age: "4+" },
      ]
    },
    {
      id: "top-paid-photo",
      title: "Top Paid Apps",
      layout: "list",
      apps: [
        { id: "final-cut-pro", name: "Final Cut Pro", developer: "Apple", icon: generateIcon("finalcut"), price: "$299.99", rating: 4.7, reviews: 18500, category: "Photo & Video", description: "Professional post-production", screenshots: [], subtitle: "Professional post-production", size: "3.1 GB", age: "4+" },
        { id: "upscayl", name: "Upscayl", developer: "Nayam Amarshe", icon: generateIcon("upscayl"), price: "$4.99", rating: 4.6, reviews: 5200, category: "Photo & Video", description: "AI Image Upscaler", screenshots: [], subtitle: "AI Image Upscaler", size: "450 MB", age: "4+" },
        { id: "stop-motion", name: "Stop Motion Studio Pro 2", developer: "Cateater, LLC", icon: generateIcon("stopmotion"), price: "$9.99", rating: 4.7, reviews: 8500, category: "Photo & Video", description: "Easy Animation & Movie Maker", screenshots: [], subtitle: "Easy Animation & Movie Maker", size: "180 MB", age: "4+" },
        { id: "compressor", name: "Compressor", developer: "Apple", icon: generateIcon("compressor"), price: "$49.99", rating: 4.5, reviews: 5200, category: "Photo & Video", description: "Powerful encoding. Delivered.", screenshots: [], subtitle: "Powerful encoding. Delivered.", size: "580 MB", age: "4+" },
        { id: "photosweeper", name: "PhotoSweeper", developer: "Gwinno Software", icon: generateIcon("photosweeper"), price: "$9.99", rating: 4.6, reviews: 3200, category: "Photo & Video", description: "Smart duplicate photos cleaner", screenshots: [], subtitle: "Smart duplicate photos cleaner", size: "25 MB", age: "4+" },
        { id: "motion", name: "Motion", developer: "Apple", icon: generateIcon("motion"), price: "$49.99", rating: 4.6, reviews: 8500, category: "Photo & Video", description: "Simply special effects.", screenshots: [], subtitle: "Simply special effects.", size: "2.2 GB", age: "4+" },
        { id: "davinci-studio", name: "DaVinci Resolve Studio", developer: "Blackmagic Design Inc", icon: generateIcon("davincistudio"), price: "$295.00", rating: 4.8, reviews: 5200, category: "Photo & Video", description: "Photo & Video", screenshots: [], subtitle: "Photo & Video", size: "2.8 GB", age: "4+" },
      ]
    }
  ]
}

// Games Page Data
export const gamesData: { 
  heroCards: { tag: string; title: string; subtitle: string; gradient: string; app: App }[];
  sections: Section[] 
} = {
  heroCards: [
    {
      tag: "MAJOR UPDATE",
      title: "Can You Save a Dying World?",
      subtitle: "Battle the darkness with furry friend Neva at your side.",
      gradient: "from-indigo-700 to-purple-800",
      app: {
        id: "neva",
        name: "Neva",
        developer: "Devolver Digital",
        icon: generateIcon("neva"),
        price: "$19.99",
        rating: 4.9,
        reviews: 12000,
        category: "Games",
        description: "Battle the darkness with furry friend Neva.",
        screenshots: [],
        size: "8 GB",
        age: "12+"
      }
    },
    {
      tag: "APPLE ARCADE",
      title: "Can You Build a Lasting Empire?",
      subtitle: "A new Civilization is here.",
      gradient: "from-amber-600 to-orange-700",
      app: {
        id: "civilization-vii",
        name: "Civilization VII",
        developer: "2K",
        icon: generateIcon("civilization"),
        price: "Arcade",
        rating: 4.8,
        reviews: 85000,
        category: "Games",
        description: "Build a lasting empire.",
        screenshots: [],
        size: "12 GB",
        age: "12+"
      }
    },
    {
      tag: "GAMES WE LOVE",
      title: "Draft Your Destiny in Blue Prince",
      subtitle: "Investigate a mysterious mansion by building it on the fly.",
      gradient: "from-blue-700 to-cyan-800",
      app: {
        id: "blue-prince",
        name: "Blue Prince",
        developer: "Raw Fury",
        icon: generateIcon("blueprince"),
        price: "$19.99",
        rating: 4.7,
        reviews: 8500,
        category: "Games",
        description: "Investigate a mysterious mansion.",
        screenshots: [],
        size: "4 GB",
        age: "9+"
      }
    }
  ],
  sections: [
    {
      id: "games-we-love",
      title: "Games We Love",
      layout: "horizontal",
      apps: [
        { id: "despelote", name: "despelote", developer: "Julián Palacios", icon: generateIcon("despelote"), price: "$14.99", rating: 4.7, reviews: 2800, category: "Games", description: "A slice of life soccer story", screenshots: [], subtitle: "A slice of life soccer story", size: "2 GB", age: "4+" },
        { id: "time-flies", name: "Time Flies - A Videogame", developer: "Playables", icon: generateIcon("timeflies"), price: "$6.99", rating: 4.6, reviews: 1500, category: "Games", description: "Experience Life as a Fly", screenshots: [], subtitle: "Experience Life as a Fly", size: "500 MB", age: "4+" },
        { id: "dead-island-2", name: "Dead Island 2 Ultimate Edition", developer: "Deep Silver", icon: generateIcon("deadisland"), price: "$69.99", rating: 4.5, reviews: 28000, category: "Games", description: "Action", screenshots: [], subtitle: "Action", size: "50 GB", age: "17+" },
        { id: "venba", name: "Venba", developer: "Visai Games", icon: generateIcon("venba"), price: "$14.99", rating: 4.8, reviews: 5200, category: "Games", description: "Family", screenshots: [], subtitle: "Family", size: "1.5 GB", age: "4+" },
        { id: "cyberpunk", name: "Cyberpunk 2077: Ultimate", developer: "CD PROJEKT RED", icon: generateIcon("cyberpunk"), price: "$59.99", rating: 4.7, reviews: 125000, category: "Games", description: "Action-Adventure RPG", screenshots: [], subtitle: "Action-Adventure RPG", size: "70 GB", age: "17+" },
        { id: "control", name: "Control Ultimate Edition", developer: "505 Games", icon: generateIcon("control"), price: "$39.99", rating: 4.8, reviews: 28000, category: "Games", description: "Edge-Of-Your-Seat Adventure", screenshots: [], subtitle: "Edge-Of-Your-Seat Adventure", size: "42 GB", age: "17+" },
        { id: "assassins-creed", name: "Assassin's Creed Shadows", developer: "Ubisoft", icon: generateIcon("assassins"), price: "$69.99", rating: 4.6, reviews: 45000, category: "Games", description: "Enter Feudal Japan", screenshots: [], subtitle: "Enter Feudal Japan", size: "85 GB", age: "17+" },
      ]
    },
    {
      id: "top-arcade-games",
      title: "Top Apple Arcade Games",
      layout: "horizontal",
      apps: [
        { id: "hello-kitty", name: "Hello Kitty Island Adventure", developer: "Sunblink", icon: generateIcon("hellokitty"), price: "Arcade", rating: 4.8, reviews: 42000, category: "Games", description: "Island adventures await!", screenshots: [], subtitle: "Island adventures await!", size: "1.5 GB", age: "4+" },
        { id: "sneaky-sasquatch", name: "Sneaky Sasquatch", developer: "RAC7 Games", icon: generateIcon("sasquatch"), price: "Arcade", rating: 4.8, reviews: 62000, category: "Games", description: "Stealthy shenanigans", screenshots: [], subtitle: "Stealthy shenanigans", size: "800 MB", age: "9+" },
        { id: "stitch", name: "stitch.", developer: "Lykke Studios", icon: generateIcon("stitch"), price: "Arcade", rating: 4.7, reviews: 18000, category: "Games", description: "Stitch it up to puzzle out", screenshots: [], subtitle: "Stitch it up to puzzle out", size: "250 MB", age: "4+" },
        { id: "fm-26", name: "Football Manager 26 Touch", developer: "SEGA", icon: generateIcon("fm26"), price: "Arcade", rating: 4.6, reviews: 15000, category: "Games", description: "Step into the dugout", screenshots: [], subtitle: "Step into the dugout", size: "2.5 GB", age: "4+" },
        { id: "mini-motorways", name: "Mini Motorways", developer: "Dinosaur Polo Club", icon: generateIcon("minimotorways"), price: "Arcade", rating: 4.8, reviews: 42000, category: "Games", description: "Draw roads that drive the city", screenshots: [], subtitle: "Draw roads that drive the city", size: "280 MB", age: "4+" },
        { id: "asphalt-8-plus", name: "Asphalt 8: Airborne+", developer: "Gameloft", icon: generateIcon("asphalt8plus"), price: "Arcade", rating: 4.5, reviews: 85000, category: "Games", description: "Racing cars and motorcycles", screenshots: [], subtitle: "Racing cars and motorcycles", size: "2.8 GB", age: "4+" },
        { id: "wylde-flowers", name: "Wylde Flowers", developer: "Studio Drydock", icon: generateIcon("wyldeflowers"), price: "Arcade", rating: 4.8, reviews: 32000, category: "Games", description: "Cozy, magical life-sim", screenshots: [], subtitle: "Cozy, magical life-sim", size: "1.8 GB", age: "12+" },
      ]
    },
    {
      id: "play-with-controller",
      title: "Play With a Controller",
      layout: "horizontal",
      apps: [
        { id: "captain-blood", name: "Captain Blood", developer: "Black Lab Games", icon: generateIcon("captainblood"), price: "$19.99", rating: 4.4, reviews: 2500, category: "Games", description: "Action", screenshots: [], subtitle: "Action", size: "8 GB", age: "17+" },
        { id: "robocop", name: "RoboCop: Rogue City", developer: "Nacon", icon: generateIcon("robocop"), price: "$49.99", rating: 4.4, reviews: 12000, category: "Games", description: "Protect the innocent", screenshots: [], subtitle: "Protect the innocent", size: "45 GB", age: "17+" },
        { id: "control", name: "Control Ultimate Edition", developer: "505 Games", icon: generateIcon("control"), price: "$39.99", rating: 4.8, reviews: 28000, category: "Games", description: "Edge-Of-Your-Seat Adventure", screenshots: [], subtitle: "Edge-Of-Your-Seat Adventure", size: "42 GB", age: "17+" },
        { id: "assassins-creed", name: "Assassin's Creed Shadows", developer: "Ubisoft", icon: generateIcon("assassins"), price: "$69.99", rating: 4.6, reviews: 45000, category: "Games", description: "Enter Feudal Japan", screenshots: [], subtitle: "Enter Feudal Japan", size: "85 GB", age: "17+" },
        { id: "dredge", name: "DREDGE", developer: "Team17", icon: generateIcon("dredge"), price: "$24.99", rating: 4.7, reviews: 15000, category: "Games", description: "A Sinister Fishing Adventure", screenshots: [], subtitle: "A Sinister Fishing Adventure", size: "2 GB", age: "12+" },
        { id: "palworld", name: "Palworld", developer: "Pocketpair", icon: generateIcon("palworld"), price: "$29.99", rating: 4.5, reviews: 85000, category: "Games", description: "Adventure", screenshots: [], subtitle: "Adventure", size: "25 GB", age: "12+" },
        { id: "death-stranding", name: "DEATH STRANDING DIRECTOR'S CUT", developer: "505 Games", icon: generateIcon("deathstranding"), price: "$39.99", rating: 4.7, reviews: 38000, category: "Games", description: "Action", screenshots: [], subtitle: "Action", size: "80 GB", age: "17+" },
      ]
    },
    {
      id: "games-for-everyone",
      title: "Games for Everyone",
      layout: "horizontal",
      apps: [
        { id: "donut-county", name: "Donut County", developer: "Annapurna Interactive", icon: generateIcon("donutcounty"), price: "$4.99", rating: 4.7, reviews: 12000, category: "Games", description: "Be a hole", screenshots: [], subtitle: "Be a hole", size: "250 MB", age: "4+" },
        { id: "altos-odyssey", name: "Alto's Odyssey", developer: "Snowman", icon: generateIcon("altosodyssey"), price: "$7.99", rating: 4.8, reviews: 45000, category: "Games", description: "Discover the endless desert", screenshots: [], subtitle: "Discover the endless desert", size: "350 MB", age: "4+" },
        { id: "letterpress", name: "Letterpress - Word Game", developer: "Loren Brichter", icon: generateIcon("letterpress"), price: "Free", rating: 4.5, reviews: 8500, category: "Games", description: "Cure the summertime blues!", screenshots: [], subtitle: "Cure the summertime blues!", inAppPurchases: true, size: "45 MB", age: "4+" },
        { id: "gris", name: "GRIS", developer: "Devolver Digital", icon: generateIcon("gris"), price: "$4.99", rating: 4.9, reviews: 18000, category: "Games", description: "Adventure", screenshots: [], subtitle: "Adventure", size: "1.5 GB", age: "4+" },
        { id: "altos-adventure", name: "Alto's Adventure", developer: "Snowman", icon: generateIcon("altosadventure"), price: "$7.99", rating: 4.8, reviews: 52000, category: "Games", description: "A serene snowboarding odyssey", screenshots: [], subtitle: "A serene snowboarding odyssey", size: "280 MB", age: "4+" },
        { id: "hidden-folks", name: "Hidden Folks", developer: "Adriaan de Jongh", icon: generateIcon("hiddenfolks"), price: "$4.99", rating: 4.7, reviews: 15000, category: "Games", description: "Cute. Funny. But where?!", screenshots: [], subtitle: "Cute. Funny. But where?!", size: "180 MB", age: "4+" },
        { id: "gorogoa", name: "Gorogoa", developer: "Annapurna Interactive", icon: generateIcon("gorogoa"), price: "$4.99", rating: 4.8, reviews: 8500, category: "Games", description: "Puzzle", screenshots: [], subtitle: "Puzzle", size: "650 MB", age: "4+" },
      ]
    },
    {
      id: "top-free-games",
      title: "Top Free Games",
      layout: "list",
      apps: [
        { id: "steam-link", name: "Steam Link", developer: "Valve Corporation", icon: generateIcon("steamlink"), price: "Free", rating: 4.5, reviews: 85000, category: "Games", description: "Stream Your Steam Library", screenshots: [], subtitle: "Stream Your Steam Library", size: "45 MB", age: "12+" },
        { id: "asphalt-8", name: "Asphalt 8: Airborne", developer: "Gameloft", icon: generateIcon("asphalt8"), price: "Free", rating: 4.5, reviews: 320000, category: "Games", description: "Speed & Drift: Extreme Racing", screenshots: [], subtitle: "Speed & Drift: Extreme Racing", inAppPurchases: true, size: "2.5 GB", age: "4+" },
        { id: "solitaire-epic", name: "Solitaire Epic", developer: "Kristanix Studios", icon: generateIcon("solitaire"), price: "Free", rating: 4.6, reviews: 125000, category: "Games", description: "Classic Solitaire Card Game", screenshots: [], subtitle: "Classic Solitaire Card Game", inAppPurchases: true, size: "180 MB", age: "4+" },
        { id: "re4", name: "Resident Evil 4", developer: "CAPCOM", icon: generateIcon("re4"), price: "Free", rating: 4.7, reviews: 42000, category: "Games", description: "Action", screenshots: [], subtitle: "Action", inAppPurchases: true, size: "35 GB", age: "17+" },
        { id: "asphalt-legends", name: "Asphalt Legends: Racing Game", developer: "Gameloft", icon: generateIcon("asphaltlegends"), price: "Free", rating: 4.4, reviews: 185000, category: "Games", description: "Car Simulator: Drive & Drift", screenshots: [], subtitle: "Car Simulator: Drive & Drift", inAppPurchases: true, size: "3.2 GB", age: "4+" },
        { id: "among-us", name: "Among Us!", developer: "Innersloth LLC", icon: generateIcon("amongus"), price: "Free", rating: 4.6, reviews: 520000, category: "Games", description: "Action", screenshots: [], subtitle: "Action", inAppPurchases: true, size: "450 MB", age: "9+" },
        { id: "block-blast", name: "Block Blast - Puzzle Game 2026", developer: "Hungry Studio", icon: generateIcon("blockblast"), price: "Free", rating: 4.7, reviews: 285000, category: "Games", description: "Block Puzzle Games", screenshots: [], subtitle: "Block Puzzle Games", inAppPurchases: true, size: "250 MB", age: "4+" },
      ]
    },
    {
      id: "top-paid-games",
      title: "Top Paid Games",
      layout: "list",
      apps: [
        { id: "geometry-dash", name: "Geometry Dash", developer: "RobTop Games AB", icon: generateIcon("geometrydash"), price: "$3.99", rating: 4.8, reviews: 185000, category: "Games", description: "Casual", screenshots: [], subtitle: "Casual", size: "280 MB", age: "4+" },
        { id: "sims-2", name: "The Sims™ 2: Super Collection", developer: "Aspyr Media", icon: generateIcon("sims2"), price: "$29.99", rating: 4.5, reviews: 8500, category: "Games", description: "Your faves in one place", screenshots: [], subtitle: "Your faves in one place", size: "8 GB", age: "12+" },
        { id: "jackbox-3", name: "The Jackbox Party Pack 3", developer: "Jackbox Games", icon: generateIcon("jackbox3"), price: "$24.99", rating: 4.7, reviews: 12000, category: "Games", description: "Trivia", screenshots: [], subtitle: "Trivia", size: "1.8 GB", age: "12+" },
        { id: "purple-place", name: "Purple Place - Classic Games", developer: "MontBlanc Games", icon: generateIcon("purpleplace"), price: "$2.99", rating: 4.6, reviews: 15000, category: "Games", description: "Guess, Bake, Dress up", screenshots: [], subtitle: "Guess, Bake, Dress up", size: "120 MB", age: "4+" },
        { id: "stardew-valley", name: "Stardew Valley", developer: "ConcernedApe", icon: generateIcon("stardewvalley"), price: "$14.99", rating: 4.9, reviews: 125000, category: "Games", description: "Farm Life Sim", screenshots: [], subtitle: "Farm Life Sim", size: "520 MB", age: "9+" },
        { id: "minecraft", name: "Minecraft", developer: "Mojang", icon: generateIcon("minecraft"), price: "$26.99", rating: 4.7, reviews: 520000, category: "Games", description: "Create, explore and survive!", screenshots: [], subtitle: "Create, explore and survive!", size: "850 MB", age: "9+" },
        { id: "baldurs-gate-3", name: "Baldur's Gate 3", developer: "Larian Studios", icon: generateIcon("baldursgate3"), price: "$59.99", rating: 4.9, reviews: 125000, category: "Games", description: "Award-winning RPG", screenshots: [], subtitle: "Award-winning RPG", size: "120 GB", age: "17+" },
      ]
    }
  ]
}

// Business Page Data
export const businessData: { 
  heroCards: { tag: string; title: string; subtitle: string; gradient: string; app: App }[];
  sections: Section[] 
} = {
  heroCards: [
    {
      tag: "ESSENTIALS",
      title: "Microsoft Excel",
      subtitle: "Master your spreadsheets.",
      gradient: "from-emerald-600 to-green-700",
      app: {
        id: "excel",
        name: "Microsoft Excel",
        developer: "Microsoft Corporation",
        icon: generateIcon("excel"),
        price: "Free",
        rating: 4.7,
        reviews: 280000,
        category: "Business",
        description: "Spreadsheets and Data Analysis",
        screenshots: [],
        inAppPurchases: true,
        size: "1.1 GB",
        age: "4+"
      }
    },
    {
      tag: "OFFICIAL APP",
      title: "Slack for Desktop",
      subtitle: "Chat...and so much more.",
      gradient: "from-purple-600 to-fuchsia-700",
      app: {
        id: "slack",
        name: "Slack for Desktop",
        developer: "Slack Technologies",
        icon: generateIcon("slack"),
        price: "Free",
        rating: 4.5,
        reviews: 380000,
        category: "Business",
        description: "Teamwork made easy",
        screenshots: [],
        inAppPurchases: true,
        size: "110 MB",
        age: "4+"
      }
    }
  ],
  sections: [
    {
      id: "top-free-business",
      title: "Top Free Apps",
      layout: "list",
      apps: [
        { id: "windows-app", name: "Windows App", developer: "Microsoft Corporation", icon: generateIcon("windowsapp"), price: "Free", rating: 4.4, reviews: 45000, category: "Business", description: "Previously Remote Desktop", screenshots: [], subtitle: "Previously Remote Desktop", size: "85 MB", age: "4+" },
        { id: "slack", name: "Slack for Desktop", developer: "Slack Technologies", icon: generateIcon("slack"), price: "Free", rating: 4.5, reviews: 380000, category: "Business", description: "Teamwork made easy", screenshots: [], subtitle: "Teamwork made easy", inAppPurchases: true, size: "110 MB", age: "4+" },
        { id: "pdfgear", name: "PDFgear: PDF Editor & Reader", developer: "PDF Gear AG", icon: generateIcon("pdfgear"), price: "Free", rating: 4.6, reviews: 25000, category: "Business", description: "PDF Converter for acrobat PDF", screenshots: [], subtitle: "PDF Converter for acrobat PDF", size: "120 MB", age: "4+" },
        { id: "open-link-pro", name: "Open Link Pro - Browser Picker", developer: "Ingmar Stein", icon: generateIcon("openlinkpro"), price: "Free", rating: 4.5, reviews: 3200, category: "Business", description: "Open Any Link in Any Browser", screenshots: [], subtitle: "Open Any Link in Any Browser", size: "8 MB", age: "4+" },
        { id: "okta-verify", name: "Okta Verify", developer: "Okta, Inc.", icon: generateIcon("okta"), price: "Free", rating: 4.3, reviews: 85000, category: "Business", description: "Business", screenshots: [], subtitle: "Business", size: "45 MB", age: "4+" },
        { id: "wps-office", name: "WPS Office - PDF, Docs, Sheets", developer: "Kingsoft", icon: generateIcon("wps"), price: "Free", rating: 4.5, reviews: 125000, category: "Business", description: "Office Suite with PDF Editor", screenshots: [], subtitle: "Office Suite with PDF Editor", inAppPurchases: true, size: "380 MB", age: "4+" },
        { id: "hp-smart", name: "HP Smart Printer App & Scanner", developer: "HP Inc.", icon: generateIcon("hpsmart"), price: "Free", rating: 4.2, reviews: 85000, category: "Business", description: "For HP, Brother, Canon, Epson", screenshots: [], subtitle: "For HP, Brother, Canon, Epson", size: "120 MB", age: "4+" },
      ]
    },
    {
      id: "top-paid-business",
      title: "Top Paid Apps",
      layout: "list",
      apps: [
        { id: "utm", name: "UTM Virtual Machines", developer: "Ish App", icon: generateIcon("utm"), price: "$9.99", rating: 4.6, reviews: 8500, category: "Business", description: "Run other operating systems", screenshots: [], subtitle: "Run other operating systems", size: "185 MB", age: "4+" },
        { id: "jump-desktop", name: "Jump Desktop (RDP, VNC, Fluid)", developer: "Phase Five Systems", icon: generateIcon("jumpdesktop"), price: "$14.99", rating: 4.7, reviews: 5200, category: "Business", description: "Fast and secure remote desktop", screenshots: [], subtitle: "Fast and secure remote desktop", size: "85 MB", age: "4+" },
        { id: "simplefax", name: "Simplefax", developer: "Rockfield Apps", icon: generateIcon("simplefax"), price: "$4.99", rating: 4.5, reviews: 2800, category: "Business", description: "Fax without subscriptions", screenshots: [], subtitle: "Fax without subscriptions", size: "25 MB", age: "4+" },
        { id: "apk-installer", name: "APK Installer Pro", developer: "Arman Developers", icon: generateIcon("apk"), price: "$2.99", rating: 4.3, reviews: 3500, category: "Business", description: "Install APK Files", screenshots: [], subtitle: "Install APK Files", size: "15 MB", age: "4+" },
        { id: "sync-folders", name: "Sync Folders Pro", developer: "Greg Heo", icon: generateIcon("syncfolders"), price: "$4.99", rating: 4.6, reviews: 4200, category: "Business", description: "Backup, two way synchronize", screenshots: [], subtitle: "Backup, two way synchronize", size: "18 MB", age: "4+" },
        { id: "dicom-viewer", name: "DICOM File Viewer", developer: "Horos Project", icon: generateIcon("dicom"), price: "$9.99", rating: 4.4, reviews: 1500, category: "Business", description: "View medical images", screenshots: [], subtitle: "View medical images", size: "65 MB", age: "4+" },
        { id: "wpd-reader", name: "WPD Reader : for WordPerfect", developer: "Shun Li", icon: generateIcon("wpd"), price: "$4.99", rating: 4.2, reviews: 850, category: "Business", description: "Viewer for WordPerfect files", screenshots: [], subtitle: "Viewer for WordPerfect files", size: "12 MB", age: "4+" },
      ]
    }
  ]
}

// Education Page Data
export const educationData: { 
  heroCards: { tag: string; title: string; subtitle: string; gradient: string; app: App }[];
  sections: Section[] 
} = {
  heroCards: [
    {
      tag: "OUR FAVORITES",
      title: "Complete Anatomy",
      subtitle: "Comprehensive human anatomy.",
      gradient: "from-red-600 to-rose-700",
      app: {
        id: "complete-anatomy",
        name: "Complete Anatomy",
        developer: "3D4Medical.com",
        icon: generateIcon("anatomy"),
        price: "Free",
        rating: 4.7,
        reviews: 25000,
        category: "Education",
        description: "The world's most advanced 3D anatomy platform.",
        screenshots: [],
        inAppPurchases: true,
        size: "2.5 GB",
        age: "12+"
      }
    },
    {
      tag: "LEARN SOMETHING NEW",
      title: "The Atomic Dashboard",
      subtitle: "Master the elements.",
      gradient: "from-cyan-600 to-teal-700",
      app: {
        id: "atomic-dashboard",
        name: "The Atomic Dashboard",
        developer: "Lost in Space Software",
        icon: generateIcon("atomic"),
        price: "$9.99",
        rating: 4.6,
        reviews: 2800,
        category: "Education",
        description: "Explore the periodic table and chemistry.",
        screenshots: [],
        size: "85 MB",
        age: "4+"
      }
    }
  ],
  sections: [
    {
      id: "a-plus-apps",
      title: "A-Plus Apps for Students",
      layout: "horizontal",
      apps: [
        { id: "canva", name: "Canva: AI Video & Photo Editor", developer: "Canva", icon: generateIcon("canva"), price: "Free", rating: 4.8, reviews: 125000, category: "Education", description: "Background Remover, Logo Maker", screenshots: [], subtitle: "Background Remover, Logo Maker", inAppPurchases: true, size: "240 MB", age: "4+" },
        { id: "lightroom", name: "Adobe Lightroom: Photo Editor", developer: "Adobe Inc.", icon: generateIcon("lightroom"), price: "Free", rating: 4.7, reviews: 42000, category: "Education", description: "Edit, manage and share photos", screenshots: [], subtitle: "Edit, manage and share photos", inAppPurchases: true, size: "450 MB", age: "4+" },
        { id: "acorn", name: "Acorn 8", developer: "Flying Meat Inc.", icon: generateIcon("acorn"), price: "$39.99", rating: 4.7, reviews: 5200, category: "Education", description: "Image editing for humans", screenshots: [], subtitle: "Image editing for humans", size: "85 MB", age: "4+" },
        { id: "darkroom", name: "Darkroom: Photo & Video Editor", developer: "Bergen Co.", icon: generateIcon("darkroom"), price: "Free", rating: 4.8, reviews: 28000, category: "Education", description: "Pro Editing, AI & Preset Filters", screenshots: [], subtitle: "Pro Editing, AI & Preset Filters", inAppPurchases: true, size: "120 MB", age: "4+" },
        { id: "photomator", name: "Photomator – Photo Editor", developer: "Pixelmator Team", icon: generateIcon("photomator"), price: "Free", rating: 4.7, reviews: 15000, category: "Education", description: "Your photo editing powerhouse", screenshots: [], subtitle: "Your photo editing powerhouse", inAppPurchases: true, size: "280 MB", age: "4+" },
        { id: "pixelmator-pro", name: "Pixelmator Pro", developer: "Pixelmator Team", icon: generateIcon("pixelmator"), price: "$49.99", rating: 4.8, reviews: 12500, category: "Education", description: "Pro image editing for everyone", screenshots: [], subtitle: "Pro image editing for everyone", size: "440 MB", age: "4+" },
        { id: "amadine", name: "Amadine - Vector Design & Art", developer: "BeLight Software", icon: generateIcon("amadine"), price: "$29.99", rating: 4.6, reviews: 3200, category: "Education", description: "Graphic Design Illustrator", screenshots: [], subtitle: "Graphic Design Illustrator", size: "180 MB", age: "4+" },
      ]
    },
    {
      id: "top-free-education",
      title: "Top Free Apps",
      layout: "list",
      apps: [
        { id: "bluebook", name: "Bluebook Exams", developer: "College Board", icon: generateIcon("bluebook"), price: "Free", rating: 4.3, reviews: 45000, category: "Education", description: "Easy to Show What You Know", screenshots: [], subtitle: "Easy to Show What You Know", size: "250 MB", age: "4+" },
        { id: "ai-chatbot", name: "AI Chatbot AI Ask AI Anything 5.2", developer: "Vulcan Labs", icon: generateIcon("aichatbot"), price: "Free", rating: 4.5, reviews: 85000, category: "Education", description: "Build on OpenAI ChatGPT GPT-5", screenshots: [], subtitle: "Build on OpenAI ChatGPT GPT-5", inAppPurchases: true, size: "65 MB", age: "12+" },
        { id: "ai-chatbot-2", name: "AI Chatbot - Ask AI Assistant!", developer: "AppNation", icon: generateIcon("aichatbot2"), price: "Free", rating: 4.4, reviews: 125000, category: "Education", description: "Built on OpenAI ChatGPT & GPT5", screenshots: [], subtitle: "Built on OpenAI ChatGPT & GPT5", inAppPurchases: true, size: "55 MB", age: "12+" },
        { id: "quizlet", name: "Quizlet : Flashcards & Quizzes", developer: "Quizlet Inc", icon: generateIcon("quizlet"), price: "Free", rating: 4.7, reviews: 520000, category: "Education", description: "Study Deck, Memorize, Exams", screenshots: [], subtitle: "Study Deck, Memorize, Exams", inAppPurchases: true, size: "180 MB", age: "4+" },
        { id: "easy-join", name: "Easy Join for Google Classroom", developer: "Luma Touch", icon: generateIcon("easyjoin"), price: "Free", rating: 4.5, reviews: 12000, category: "Education", description: "Class App for Google Classroom", screenshots: [], subtitle: "Class App for Google Classroom", size: "25 MB", age: "4+" },
        { id: "chat-brutus", name: "Chat Unlimited & Ask Brutus AI", developer: "Vulcan Labs", icon: generateIcon("brutus"), price: "Free", rating: 4.4, reviews: 32000, category: "Education", description: "Chat using GPT-5, Grok, Claude", screenshots: [], subtitle: "Chat using GPT-5, Grok, Claude", inAppPurchases: true, size: "45 MB", age: "12+" },
        { id: "anki-notes", name: "Anki Notes: Flashcards Maker", developer: "Pramod Kumar", icon: generateIcon("anki"), price: "Free", rating: 4.6, reviews: 8500, category: "Education", description: "Remember notes easily", screenshots: [], subtitle: "Remember notes easily", inAppPurchases: true, size: "35 MB", age: "4+" },
      ]
    },
    {
      id: "top-paid-education",
      title: "Top Paid Apps",
      layout: "list",
      apps: [
        { id: "faa-ap", name: "FAA A&P Airframe Test Prep", developer: "Sporty's", icon: generateIcon("faaap"), price: "$9.99", rating: 4.7, reviews: 2500, category: "Education", description: "Education", screenshots: [], subtitle: "Education", size: "85 MB", age: "4+" },
        { id: "flashcards-deluxe", name: "Flashcards Deluxe", developer: "OrangeDeck/LLC", icon: generateIcon("flashcardsdeluxe"), price: "$3.99", rating: 4.8, reviews: 5200, category: "Education", description: "Education", screenshots: [], subtitle: "Education", size: "45 MB", age: "4+" },
        { id: "hamstudy", name: "HamStudy.org", developer: "SignalStuff", icon: generateIcon("hamstudy"), price: "$3.99", rating: 4.7, reviews: 3200, category: "Education", description: "Ham Radio Exam Prep", screenshots: [], subtitle: "Ham Radio Exam Prep", size: "25 MB", age: "4+" },
        { id: "faa-cfi", name: "FAA CFI Flight Instructor Prep", developer: "Sporty's", icon: generateIcon("faacfi"), price: "$9.99", rating: 4.6, reviews: 1800, category: "Education", description: "Education", screenshots: [], subtitle: "Education", size: "95 MB", age: "4+" },
        { id: "stack-countries", name: "Stack the Countries", developer: "Freecloud Design", icon: generateIcon("stackcountries"), price: "$2.99", rating: 4.5, reviews: 12000, category: "Education", description: "Education", screenshots: [], subtitle: "Education", size: "180 MB", age: "4+" },
        { id: "icite", name: "iCite", developer: "iCite LLC", icon: generateIcon("icite"), price: "$2.99", rating: 4.4, reviews: 2500, category: "Education", description: "Internet citations made easy", screenshots: [], subtitle: "Internet citations made easy", size: "15 MB", age: "4+" },
        { id: "family-tree", name: "Family Tree Builder", developer: "MyHeritage Ltd.", icon: generateIcon("familytree"), price: "$9.99", rating: 4.5, reviews: 5200, category: "Education", description: "No Subscriptions, Pay Once", screenshots: [], subtitle: "No Subscriptions, Pay Once", size: "120 MB", age: "4+" },
      ]
    }
  ]
}

// Music Page Data
export const musicData: { 
  heroCards: { tag: string; title: string; subtitle: string; gradient: string; app: App }[];
  sections: Section[] 
} = {
  heroCards: [
    {
      tag: "MASTER YOUR CRAFT",
      title: "djay - DJ App & AI Mixer",
      subtitle: "Mix music—on your own or using AI.",
      gradient: "from-fuchsia-600 to-pink-700",
      app: {
        id: "djay",
        name: "djay - DJ App & AI Mixer",
        developer: "algoriddim GmbH",
        icon: generateIcon("djay"),
        price: "Free",
        rating: 4.8,
        reviews: 28000,
        category: "Music",
        description: "Mix Music & Remix Songs",
        screenshots: [],
        inAppPurchases: true,
        size: "380 MB",
        age: "4+"
      }
    },
    {
      tag: "FOR PROS AND ENTHUSIASTS",
      title: "Logic Pro",
      subtitle: "Professional music production.",
      gradient: "from-slate-700 to-zinc-800",
      app: {
        id: "logic-pro",
        name: "Logic Pro",
        developer: "Apple",
        icon: generateIcon("logic"),
        price: "$199.99",
        rating: 4.8,
        reviews: 22000,
        category: "Music",
        description: "Professional music production",
        screenshots: [],
        size: "1.6 GB",
        age: "4+"
      }
    }
  ],
  sections: [
    {
      id: "make-great-music",
      title: "Make Great Music",
      layout: "horizontal",
      apps: [
        { id: "logic-pro", name: "Logic Pro", developer: "Apple", icon: generateIcon("logic"), price: "$199.99", rating: 4.8, reviews: 22000, category: "Music", description: "Professional music production", screenshots: [], subtitle: "Professional music production", size: "1.6 GB", age: "4+" },
        { id: "capo", name: "Capo", developer: "SuperMegaUltraGroovy", icon: generateIcon("capo"), price: "$29.99", rating: 4.6, reviews: 3200, category: "Music", description: "Learn more songs in less time", screenshots: [], subtitle: "Learn more songs in less time", size: "45 MB", age: "4+" },
        { id: "djay", name: "djay - DJ App & AI Mixer", developer: "algoriddim GmbH", icon: generateIcon("djay"), price: "Free", rating: 4.8, reviews: 28000, category: "Music", description: "Mix Music & Remix Songs", screenshots: [], subtitle: "Mix Music & Remix Songs", inAppPurchases: true, size: "380 MB", age: "4+" },
        { id: "mainstage", name: "MainStage", developer: "Apple", icon: generateIcon("mainstage"), price: "$29.99", rating: 4.6, reviews: 6800, category: "Music", description: "Live rig for musicians", screenshots: [], subtitle: "Live rig for musicians", size: "1.1 GB", age: "4+" },
        { id: "ireal-pro", name: "iReal Pro", developer: "Technimo LLC", icon: generateIcon("irealpro"), price: "$19.99", rating: 4.8, reviews: 8500, category: "Music", description: "Music Book & Backing Tracks", screenshots: [], subtitle: "Music Book & Backing Tracks", size: "85 MB", age: "4+" },
        { id: "garageband", name: "GarageBand", developer: "Apple", icon: generateIcon("garageband"), price: "Free", rating: 4.5, reviews: 85000, category: "Music", description: "A recording studio on your Mac", screenshots: [], subtitle: "A recording studio on your Mac", size: "1.5 GB", age: "4+" },
        { id: "incredibox", name: "Incredibox", developer: "So Far So Good", icon: generateIcon("incredibox"), price: "$4.99", rating: 4.8, reviews: 15000, category: "Music", description: "Pump it up and chill!", screenshots: [], subtitle: "Pump it up and chill!", size: "180 MB", age: "4+" },
      ]
    },
    {
      id: "top-free-music",
      title: "Top Free Apps",
      layout: "list",
      apps: [
        { id: "djay", name: "djay - DJ App & AI Mixer", developer: "algoriddim GmbH", icon: generateIcon("djay"), price: "Free", rating: 4.8, reviews: 28000, category: "Music", description: "Mix Music & Remix Songs", screenshots: [], subtitle: "Mix Music & Remix Songs", inAppPurchases: true, size: "380 MB", age: "4+" },
        { id: "vinylpod", name: "VinylPod - Music Widget", developer: "Haruki Zaemon", icon: generateIcon("vinylpod"), price: "Free", rating: 4.6, reviews: 5200, category: "Music", description: "Vinyl Record Widget for Music", screenshots: [], subtitle: "Vinyl Record Widget for Music", size: "25 MB", age: "4+" },
        { id: "silicio", name: "Silicio Mini Player + Widgets", developer: "Alexandr Krutko", icon: generateIcon("silicio"), price: "Free", rating: 4.5, reviews: 3200, category: "Music", description: "for Spotify iTunes Apple Music", screenshots: [], subtitle: "for Spotify iTunes Apple Music", inAppPurchases: true, size: "35 MB", age: "4+" },
        { id: "audio-one", name: "Audio One: Easy Music Editing", developer: "Pixite LLC", icon: generateIcon("audioone"), price: "Free", rating: 4.4, reviews: 2500, category: "Music", description: "Sound Editor & Ringtone Maker", screenshots: [], subtitle: "Sound Editor & Ringtone Maker", inAppPurchases: true, size: "65 MB", age: "4+" },
        { id: "shazam", name: "Shazam: Identify Songs", developer: "Apple", icon: generateIcon("shazam"), price: "Free", rating: 4.8, reviews: 520000, category: "Music", description: "Discover music, video & lyrics", screenshots: [], subtitle: "Discover music, video & lyrics", size: "45 MB", age: "4+" },
        { id: "playlisty", name: "Playlisty for Spotify", developer: "Ricardo Sá", icon: generateIcon("playlisty"), price: "Free", rating: 4.5, reviews: 5200, category: "Music", description: "Playlist import & transfer", screenshots: [], subtitle: "Playlist import & transfer", inAppPurchases: true, size: "18 MB", age: "4+" },
        { id: "untitled", name: "[untitled] for Desktop", developer: "Matt Sephton", icon: generateIcon("untitled"), price: "Free", rating: 4.4, reviews: 1800, category: "Music", description: "Your work-in-progress music", screenshots: [], subtitle: "Your work-in-progress music", size: "12 MB", age: "4+" },
      ]
    },
    {
      id: "top-paid-music",
      title: "Top Paid Apps",
      layout: "list",
      apps: [
        { id: "logic-pro", name: "Logic Pro", developer: "Apple", icon: generateIcon("logic"), price: "$199.99", rating: 4.8, reviews: 22000, category: "Music", description: "Professional music production", screenshots: [], subtitle: "Professional music production", size: "1.6 GB", age: "4+" },
        { id: "mainstage", name: "MainStage", developer: "Apple", icon: generateIcon("mainstage"), price: "$29.99", rating: 4.6, reviews: 6800, category: "Music", description: "Live rig for musicians", screenshots: [], subtitle: "Live rig for musicians", size: "1.1 GB", age: "4+" },
        { id: "forscore", name: "forScore", developer: "forScore, LLC", icon: generateIcon("forscore"), price: "$19.99", rating: 4.8, reviews: 12000, category: "Music", description: "Turbocharge your sheet music", screenshots: [], subtitle: "Turbocharge your sheet music", size: "120 MB", age: "4+" },
        { id: "fl-studio", name: "FL Studio Mobile", developer: "Image-Line", icon: generateIcon("flstudio"), price: "$14.99", rating: 4.5, reviews: 25000, category: "Music", description: "Music", screenshots: [], subtitle: "Music", size: "350 MB", age: "4+" },
        { id: "minimoog", name: "Minimoog Model D Synthesizer", developer: "Moog Music Inc.", icon: generateIcon("minimoog"), price: "$14.99", rating: 4.7, reviews: 3200, category: "Music", description: "Classic Analog Synthesizer", screenshots: [], subtitle: "Classic Analog Synthesizer", size: "180 MB", age: "4+" },
        { id: "mp3tag", name: "Mp3tag", developer: "Florian Heidenreich", icon: generateIcon("mp3tag"), price: "$9.99", rating: 4.6, reviews: 5200, category: "Music", description: "The universal tag editor", screenshots: [], subtitle: "The universal tag editor", size: "25 MB", age: "4+" },
        { id: "ireal-pro", name: "iReal Pro", developer: "Technimo LLC", icon: generateIcon("irealpro"), price: "$19.99", rating: 4.8, reviews: 8500, category: "Music", description: "Music Book & Backing Tracks", screenshots: [], subtitle: "Music Book & Backing Tracks", size: "85 MB", age: "4+" },
      ]
    }
  ]
}

// Social Networking Page Data
export const socialNetworkingData: { 
  heroCards: { tag: string; title: string; subtitle: string; gradient: string; app: App }[];
  sections: Section[] 
} = {
  heroCards: [
    {
      tag: "GET CREATIVE",
      title: "MarsEdit 5 - Blog Editor",
      subtitle: "Write and publish your blog.",
      gradient: "from-orange-500 to-amber-600",
      app: {
        id: "marsedit",
        name: "MarsEdit 5 - Blog Editor",
        developer: "Red Sweater Software",
        icon: generateIcon("marsedit"),
        price: "$59.99",
        rating: 4.7,
        reviews: 3200,
        category: "Social Networking",
        description: "Publish to WordPress and more",
        screenshots: [],
        size: "45 MB",
        age: "4+"
      }
    },
    {
      tag: "OFFICIAL APP",
      title: "Telegram",
      subtitle: "Secure private messaging.",
      gradient: "from-sky-500 to-blue-600",
      app: {
        id: "telegram",
        name: "Telegram",
        developer: "Telegram FZ-LLC",
        icon: generateIcon("telegram"),
        price: "Free",
        rating: 4.5,
        reviews: 650000,
        category: "Social Networking",
        description: "Fast. Secure. Powerful.",
        screenshots: [],
        size: "85 MB",
        age: "17+"
      }
    }
  ],
  sections: [
    {
      id: "top-free-social",
      title: "Top Free Apps",
      layout: "list",
      apps: [
        { id: "whatsapp", name: "WhatsApp Messenger", developer: "WhatsApp Inc.", icon: generateIcon("whatsapp"), price: "Free", rating: 4.6, reviews: 890000, category: "Social Networking", description: "Simple. Reliable. Private.", screenshots: [], subtitle: "Simple. Reliable. Private.", size: "120 MB", age: "12+" },
        { id: "telegram", name: "Telegram", developer: "Telegram FZ-LLC", icon: generateIcon("telegram"), price: "Free", rating: 4.5, reviews: 650000, category: "Social Networking", description: "Fast. Secure. Powerful.", screenshots: [], subtitle: "Fast. Secure. Powerful.", size: "85 MB", age: "17+" },
        { id: "wechat", name: "WeChat", developer: "WeChat", icon: generateIcon("wechat"), price: "Free", rating: 4.3, reviews: 185000, category: "Social Networking", description: "Social Networking", screenshots: [], subtitle: "Social Networking", size: "250 MB", age: "4+" },
        { id: "google-meet", name: "App for Google Meet", developer: "Florian Edelmann", icon: generateIcon("googlemeet"), price: "Free", rating: 4.5, reviews: 8500, category: "Social Networking", description: "Join and Manage Team Meetings", screenshots: [], subtitle: "Join and Manage Team Meetings", size: "12 MB", age: "4+" },
        { id: "friendly", name: "Friendly Social Browser", developer: "Ovilex Software", icon: generateIcon("friendly"), price: "Free", rating: 4.4, reviews: 25000, category: "Social Networking", description: "for Facebook, Twitter & more", screenshots: [], subtitle: "for Facebook, Twitter & more", inAppPurchases: true, size: "85 MB", age: "12+" },
        { id: "line", name: "LINE", developer: "LINE Corporation", icon: generateIcon("line"), price: "Free", rating: 4.3, reviews: 320000, category: "Social Networking", description: "Social Networking", screenshots: [], subtitle: "Social Networking", size: "180 MB", age: "4+" },
        { id: "textnow", name: "TextNow", developer: "TextNow, Inc.", icon: generateIcon("textnow"), price: "Free", rating: 4.2, reviews: 185000, category: "Social Networking", description: "Social Networking", screenshots: [], subtitle: "Social Networking", inAppPurchases: true, size: "120 MB", age: "12+" },
      ]
    },
    {
      id: "top-paid-social",
      title: "Top Paid Apps",
      layout: "list",
      apps: [
        { id: "unite", name: "Unite - GroupMe app", developer: "Unite Apps Inc.", icon: generateIcon("unite"), price: "$4.99", rating: 4.5, reviews: 2500, category: "Social Networking", description: "GroupMe chats, events and more", screenshots: [], subtitle: "GroupMe chats, events and more", size: "35 MB", age: "12+" },
        { id: "socialfocus", name: "SocialFocus: Hide Distractions", developer: "Sinclair Design", icon: generateIcon("socialfocus"), price: "$2.99", rating: 4.6, reviews: 3200, category: "Social Networking", description: "Block feed,shorts,related,ads", screenshots: [], subtitle: "Block feed,shorts,related,ads", size: "8 MB", age: "4+" },
        { id: "chatmate", name: "ChatMate for Facebook", developer: "Bastian Roessler", icon: generateIcon("chatmate"), price: "$2.99", rating: 4.4, reviews: 5200, category: "Social Networking", description: "Facebook Messenger for Mac", screenshots: [], subtitle: "Facebook Messenger for Mac", size: "25 MB", age: "12+" },
        { id: "img-picker", name: "Img Picker Web Extension", developer: "Qilin Software", icon: generateIcon("imgpicker"), price: "$1.99", rating: 4.3, reviews: 1500, category: "Social Networking", description: "View and Save Web Images", screenshots: [], subtitle: "View and Save Web Images", size: "5 MB", age: "4+" },
        { id: "control-panel", name: "Control Panel for Twitter", developer: "Quentin Mathe", icon: generateIcon("controlpanel"), price: "$3.99", rating: 4.5, reviews: 2800, category: "Social Networking", description: "Take control of your timeline", screenshots: [], subtitle: "Take control of your timeline", size: "12 MB", age: "17+" },
        { id: "colloquy", name: "Colloquy - IRC Client", developer: "Colloquy Project", icon: generateIcon("colloquy"), price: "$2.99", rating: 4.2, reviews: 1800, category: "Social Networking", description: "Social Networking", screenshots: [], subtitle: "Social Networking", size: "18 MB", age: "12+" },
        { id: "screensaver-now", name: "Screensaver Now", developer: "Dennis Muensterer", icon: generateIcon("screensavernow"), price: "$0.99", rating: 4.4, reviews: 850, category: "Social Networking", description: "Screen Saver Global Hotkey", screenshots: [], subtitle: "Screen Saver Global Hotkey", size: "3 MB", age: "4+" },
      ]
    }
  ]
}
