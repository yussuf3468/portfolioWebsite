export type WorkCategory =
  | "product"
  | "platform"
  | "interface"
  | "systems"
  | "growth";

export interface Work {
  index: string;
  title: string;
  year: string;
  role: string;
  category: WorkCategory;
  blurb: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  impact?: string;
  highlights?: string[];
  featured?: boolean;
}

export const work: Work[] = [
  {
    index: "01",
    title: "Al Kalam Bookshop",
    year: "2025",
    role: "Product · Engineering",
    category: "product",
    blurb:
      "An end-to-end retail operating system — POS, inventory, returns, financial reporting and an e-commerce storefront — packaged as a native Android app via Capacitor.",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Capacitor"],
    image:
      "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600",
    liveUrl: "https://alqalam.lenzro.com/",
    repoUrl: "https://github.com/yussufmuse344-cpu/al-qalam-bookshop",
    impact:
      "Replaced spreadsheets and three separate tools with a single source of truth across POS, finance and customer-facing storefront.",
    highlights: [
      "POS with line-item and global discounting",
      "Inventory lifecycle with low-stock alerts",
      "Returns workflow with automated stock restoration",
      "PDF reporting for inventory and financials",
      "Role-based access for admin and staff",
    ],
    featured: true,
  },
  {
    index: "02",
    title: "Hassan Muse BookShop",
    year: "2024",
    role: "Architecture · Engineering",
    category: "platform",
    blurb:
      "Bilingual (English / Somali) inventory and sales platform with real-time analytics, role-based access and PWA offline mode for unreliable connectivity.",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "PWA"],
    image:
      "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600",
    liveUrl: "https://book-store-nu-nine.vercel.app/",
    repoUrl: "https://github.com/yussuf3468/bookStore",
    impact:
      "80% reduction in manual reporting work; real-time decisions and full staff accountability across two branches.",
    highlights: [
      "Real-time inventory with reorder alerts",
      "Profit/loss analytics, staff activity audit",
      "Row-level security and JWT auth",
      "Bilingual UI for Somali-speaking staff",
    ],
    featured: true,
  },
  {
    index: "03",
    title: "Odyssey Travel",
    year: "2023",
    role: "Full-stack",
    category: "product",
    blurb:
      "Travel booking platform with destination search, itinerary management and secure payments — a study in collapsing a multi-step funnel into a single fluid flow.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1600",
    liveUrl: "https://travel-blog-nu-amber.vercel.app",
    repoUrl: "https://github.com/YussufMuse/odyssey-travel",
  },
  {
    index: "04",
    title: "Lenzro",
    year: "2023",
    role: "Co-founder · Frontend",
    category: "interface",
    blurb:
      "Marketing site and visual system for Lenzro — the studio I co-founded. Quiet typography, restrained motion, the work in the foreground.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/lenzro1.jpg",
    liveUrl: "https://lenzro.com",
    featured: true,
  },
  {
    index: "05",
    title: "Afya Hospital Management",
    year: "2022",
    role: "Backend · Database",
    category: "systems",
    blurb:
      "Hospital operations system covering patient records, scheduling and staffing. Modelled the data layer and built the JavaFX-to-MySQL persistence pipeline.",
    stack: ["Java", "JavaFX", "MySQL"],
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1600",
    repoUrl: "https://github.com/LenzroStudio/AfyaHospital",
  },
  {
    index: "06",
    title: "Lenzro Growth Campaign",
    year: "2024",
    role: "Strategy · Creative",
    category: "growth",
    blurb:
      "End-to-end social growth campaign for a Lenzro client — creative direction, copy, scheduling and analytics reporting.",
    stack: ["Meta Ads", "Canva", "Analytics"],
    image:
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export const workCategories: { id: WorkCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "platform", label: "Platform" },
  { id: "interface", label: "Interface" },
  { id: "systems", label: "Systems" },
  { id: "growth", label: "Growth" },
];
