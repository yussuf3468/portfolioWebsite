export interface Milestone {
  year: string;
  title: string;
  detail: string;
  tag: "studio" | "engineering" | "product" | "education";
}

export const trajectory: Milestone[] = [
  {
    year: "2026",
    title: "Business systems, not websites",
    detail:
      "Nidaam Solutions sharpens its focus on the systems businesses run on. NidaamPOS launches as the flagship SaaS.",
    tag: "studio",
  },
  {
    year: "2025",
    title: "Shipping at scale, quietly",
    detail:
      "Al Kalam Bookshop ships as a packaged Android app. Nidaam hits 50+ production engagements across East Africa.",
    tag: "studio",
  },
  {
    year: "2024",
    title: "Nidaam grows beyond the founders",
    detail:
      "Built out the studio team and the operating playbook — design system, engagement model, internal tooling.",
    tag: "studio",
  },
  {
    year: "2023",
    title: "Co-founded Nidaam Solutions",
    detail:
      "Co-founded Nidaam Solutions with a remit to bring serious technology craft to the businesses around us.",
    tag: "studio",
  },
  {
    year: "2022",
    title: "Java systems, at depth",
    detail:
      "Specialised in Java backends — domain-driven services, JPA, and the database modelling work behind them.",
    tag: "engineering",
  },
  {
    year: "2021",
    title: "Full-stack fluency",
    detail:
      "React, Node, cloud platforms — converging on the modern web stack and shipping end-to-end product work.",
    tag: "engineering",
  },
  {
    year: "2020",
    title: "First enterprise commissions",
    detail:
      "Started taking on production work — Java services and database systems for early clients.",
    tag: "product",
  },
  {
    year: "2019",
    title: "First line of code",
    detail:
      "Java, SQL, and the open web. The beginning of a practice that has not slowed since.",
    tag: "education",
  },
];
