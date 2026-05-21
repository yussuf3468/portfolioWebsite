export interface Note {
  index: string;
  title: string;
  category: "case-study" | "essay" | "tutorial" | "field-note";
  excerpt: string;
  readTime: string;
  date: string;
  url: string;
  language?: "en" | "so";
}

export const notes: Note[] = [
  {
    index: "01",
    title: "Designing a retail OS for a bookshop in Eastleigh",
    category: "case-study",
    excerpt:
      "Inventory, POS, finance and a customer storefront — a deep look at the architecture and product decisions behind Al Kalam.",
    readTime: "15 min",
    date: "2025-10-06",
    url: "https://book-store-nu-nine.vercel.app/",
  },
  {
    index: "02",
    title: "Bilingual UX for software in the Horn of Africa",
    category: "essay",
    excerpt:
      "What changes when your users read in Somali, English, and switch fluidly between them inside the same screen.",
    readTime: "8 min",
    date: "2025-09-22",
    url: "#",
    language: "en",
  },
  {
    index: "03",
    title: "Barashada teknolojiyada casriga ah",
    category: "essay",
    excerpt:
      "Sida loo barto xirfadaha casriga ah ee IT-ga iyo sida ay nolosha u bedeli karto.",
    readTime: "7 daqiiqo",
    date: "2025-09-15",
    url: "#",
    language: "so",
  },
  {
    index: "04",
    title: "SQL optimisation techniques that actually move the needle",
    category: "tutorial",
    excerpt:
      "Practical strategies for query performance — indexes, plan reading, denormalisation budgets — taken from production work.",
    readTime: "12 min",
    date: "2024-01-05",
    url: "https://www.datacamp.com/blog/sql-query-optimization",
  },
  {
    index: "05",
    title: "Advanced React patterns for enterprise applications",
    category: "tutorial",
    excerpt:
      "Compound components, render props, and the custom hooks I keep reaching for in production code.",
    readTime: "8 min",
    date: "2024-01-10",
    url: "https://kentcdodds.com/blog/application-state-management-with-react",
  },
  {
    index: "06",
    title: "The technical leader's notebook",
    category: "field-note",
    excerpt:
      "Notes from co-founding Lenzro — balancing engineering depth with the demands of running a studio.",
    readTime: "14 min",
    date: "2023-12-20",
    url: "https://hbr.org/2017/06/what-it-takes-to-lead-an-engineering-team",
  },
];
