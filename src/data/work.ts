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
    title: "LenzroPOS",
    year: "2026",
    role: "Founder · Product · Engineering",
    category: "product",
    blurb:
      "Lenzro's flagship SaaS — point-of-sale, inventory and an online storefront in one platform, built so any retail business can try the live demo and start selling the same day.",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    image:
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1600",
    liveUrl: "https://pos.lenzro.com",
    impact:
      "Productised years of bespoke retail builds into a single platform any business can onboard onto — no spreadsheets, no stitched-together tools.",
    highlights: [
      "Point-of-sale with real-time inventory sync",
      "Integrated e-commerce storefront",
      "Multi-business onboarding with a free live demo",
      "Sales, stock and financial reporting",
    ],
    featured: true,
  },
  {
    index: "02",
    title: "Lenzro CarHire",
    year: "2026",
    role: "Product · Engineering",
    category: "platform",
    blurb:
      "Fleet and rentals management for car-hire businesses — vehicles, clients, contracts, statements and site content run from one mobile-first workspace.",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    image:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600",
    liveUrl: "https://car-hire-two.vercel.app",
    impact:
      "Moves the rental desk off paper contracts and scattered records — bookings, billing statements and fleet status live in one place, reachable from a phone.",
    highlights: [
      "Fleet, client and contract management in one workspace",
      "Client statements for billing and reconciliation",
      "Built-in CMS for managing site content",
      "Mobile-first — run the fleet from your phone",
    ],
    featured: true,
  },
  {
    index: "03",
    title: "LenzFitness",
    year: "2026",
    role: "Product · Engineering",
    category: "product",
    blurb:
      "Fitness platform under the Lenzro umbrella — an outcome-first training experience built around one promise: become stronger. Clean interface, zero clutter between you and the work.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600",
    liveUrl: "https://fitness.lenzro.com",
    impact:
      "Lenzro's first consumer product — the same product discipline applied to retail systems, pointed at training and progression.",
    featured: true,
  },
  {
    index: "04",
    title: "Hassan POS & Inventory",
    year: "2025",
    role: "Product · Engineering",
    category: "product",
    blurb:
      "An end-to-end retail operating system — POS, inventory, returns, financial reporting and an e-commerce storefront — packaged as a native Android app via Capacitor.",
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Capacitor"],
    image:
      "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600",
    liveUrl: "https://hassan.lenzro.com/",
    repoUrl: "https://github.com/yussuf3468/HassanFinanceSystem",
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
    index: "05",
    title: "Personal Portfolio",
    year: "2025",
    role: "Design · Engineering",
    category: "interface",
    blurb:
      "My personal portfolio — a curated showcase of work, thinking and craft. Built for performance and expression with fluid motion and a considered visual system.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600",
    liveUrl: "https://yussuf.lenzro.com",
    featured: true,
  },
  {
    index: "06",
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
    index: "07",
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
    index: "08",
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
    index: "09",
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
    index: "10",
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

export const workYearRange = (() => {
  const years = work.map((w) => Number(w.year)).filter((y) => !Number.isNaN(y));
  return `${Math.min(...years)} – ${Math.max(...years)}`;
})();

export const workCategories: { id: WorkCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "platform", label: "Platform" },
  { id: "interface", label: "Interface" },
  { id: "systems", label: "Systems" },
  { id: "growth", label: "Growth" },
];
