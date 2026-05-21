export interface Capability {
  index: string;
  title: string;
  summary: string;
  detail: string;
  tools: string[];
}

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Product engineering",
    summary: "End-to-end product work, from sketch to scale.",
    detail:
      "I take a product from a half-formed idea through architecture, design partnership, build and post-launch. Comfortable making interface, infrastructure and data decisions in the same week.",
    tools: ["TypeScript", "React", "Next.js", "Node", "Postgres", "Supabase"],
  },
  {
    index: "02",
    title: "Java systems",
    summary: "Stable, well-modelled backends for serious work.",
    detail:
      "Domain-driven Java services, clean module boundaries, JPA models you can read out loud. I lean toward boring, predictable systems that survive on-call rotations.",
    tools: ["Java", "Spring Boot", "JPA", "REST", "JUnit"],
  },
  {
    index: "03",
    title: "Data architecture",
    summary: "Schemas, queries and pipelines that get out of the way.",
    detail:
      "Postgres-first. I normalise where it earns its keep, denormalise where read paths demand it, and write SQL that explains itself. Comfortable with row-level security, analytics rollups and migrations.",
    tools: ["PostgreSQL", "MySQL", "SQL", "Indexes", "RLS"],
  },
  {
    index: "04",
    title: "Interface craft",
    summary: "Restrained, accessible, motion with intent.",
    detail:
      "I design at the system level — tokens, primitives, rhythm — then let the surface follow. Motion is reserved for moments that earn it. WCAG-conscious by default.",
    tools: ["Design tokens", "Tailwind", "Framer Motion", "A11y"],
  },
  {
    index: "05",
    title: "Cloud & delivery",
    summary: "Deploy quietly. Roll back faster.",
    detail:
      "Containerised, observable, automatic. I prefer small, frequent releases on platforms that disappear into the background — Vercel, Supabase, managed Postgres.",
    tools: ["Vercel", "Docker", "CI/CD", "Observability"],
  },
  {
    index: "06",
    title: "Mentorship",
    summary: "Teaching is part of the practice.",
    detail:
      "One-on-one mentoring for Java, SQL and React. Project reviews, interview preparation, pairing on the parts that resist understanding.",
    tools: ["1:1 mentoring", "Code review", "Interview prep"],
  },
];
