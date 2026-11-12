import { ArrowUpRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { NidaamLogo, NidaamMark } from "./ui/NidaamLogo";
import { site } from "../data/site";

const { company } = site;

const pillars = [
  {
    n: "01",
    title: "Business systems",
    body: "Custom software, point-of-sale, inventory and school management — the systems an organisation actually runs on.",
  },
  {
    n: "02",
    title: "Web & mobile",
    body: "Websites, storefronts and mobile apps built on the same foundations as the systems behind them, not bolted on afterwards.",
  },
  {
    n: "03",
    title: "Managed & cloud",
    body: "Cloud, APIs, automation and AI integration — kept secure and running on a managed monthly plan.",
  },
];

const numbers = [
  { value: "50+", label: "Engagements" },
  { value: "12", label: "Sectors" },
  { value: "03", label: "Countries" },
  { value: "01", label: "Standard of care" },
];

export default function Nidaam() {
  return (
    <Section
      id="nidaam"
      index="04"
      label="Company"
      meta={`${company.name} · 2023 — present`}
      full
    >
      {/* Brand panel — the on-blue lockup: white mark, ink wordmark on azure */}
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[28px] bg-brand px-6 py-10 text-brand-ink sm:px-10 md:px-14 md:py-16">
          <NidaamMark
            decorative
            markColor="#FFFFFF"
            className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-[22rem] w-[22rem] opacity-20 md:-bottom-32 md:-right-12 md:h-[34rem] md:w-[34rem]"
          />

          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-8">
              <NidaamLogo markColor="#FFFFFF" className="h-11 w-auto md:h-14" />

              <h2 className="mt-10 font-display text-display-md tracking-tighter text-balance md:mt-14">
                We don't sell websites.
                <br />
                <span className="display-italic">We build business systems.</span>
              </h2>

              <p className="mt-6 max-w-prose text-base leading-relaxed text-brand-ink/80 md:text-lg md:leading-relaxed">
                I co-founded {company.name} in 2023. It is where the work
                scales beyond a single engineer — a Nairobi software company
                that designs, builds and manages secure systems so
                organisations can automate operations and scale with
                confidence.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
              <a
                href={company.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-ink px-6 py-3.5 font-mono text-[12px] uppercase tracking-tracked text-white transition-colors hover:bg-white hover:text-brand-ink focus-visible:outline-brand-ink"
              >
                Visit {company.domain}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <span className="font-mono text-[11px] uppercase tracking-tracked text-brand-ink/70">
                {company.location}
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Three pillars */}
      <Reveal delay={150}>
        <div className="mt-16 border-y border-line">
          <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {pillars.map((p) => (
              <article key={p.n} className="px-2 py-10 md:px-8">
                <div className="font-mono text-[11px] uppercase tracking-tracked text-accent">
                  §{p.n}
                </div>
                <h3 className="mt-3 font-display text-2xl tracking-tighter text-cream md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-smoke">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Numbers strip */}
      <Reveal delay={250}>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {numbers.map((n) => (
            <div key={n.label} className="bg-ink-1 px-5 py-7 md:px-7 md:py-9">
              <div className="font-display text-3xl font-bold tracking-tightest text-cream md:text-4xl">
                {n.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-tracked text-ash">
                {n.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Pull quote */}
      <Reveal delay={350}>
        <blockquote className="mt-20 max-w-[60rem]">
          <p className="font-display text-3xl leading-tight tracking-tighter text-cream md:text-5xl md:leading-tight">
            <span className="text-accent">"</span>
            We took the spreadsheets and the patchwork tools and built one
            system the team actually trusts.
            <span className="text-accent">"</span>
          </p>
          <footer className="mt-6 font-mono text-[11px] uppercase tracking-tracked text-smoke">
            — {company.short} engagement, retail · 2024
          </footer>
        </blockquote>
      </Reveal>
    </Section>
  );
}
