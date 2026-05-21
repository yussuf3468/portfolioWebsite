import { ArrowUpRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const pillars = [
  {
    n: "01",
    title: "Strategy",
    body: "Positioning, product narrative and the messaging the rest of the work hangs on.",
  },
  {
    n: "02",
    title: "Software",
    body: "Custom-built systems — POS, inventory, internal tools, customer-facing storefronts.",
  },
  {
    n: "03",
    title: "Studio",
    body: "Visual identity, web presence, motion and the small craft that compounds over time.",
  },
];

const numbers = [
  { value: "50+", label: "Engagements" },
  { value: "12", label: "Sectors" },
  { value: "03", label: "Countries" },
  { value: "01", label: "Standard of care" },
];

export default function Lenzro() {
  return (
    <Section id="lenzro" index="04" label="Studio" meta="Lenzro · 2023 — present" full>
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <h2 className="font-display text-display-lg tracking-tightest text-cream">
            Lenzro.
          </h2>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-smoke md:text-lg md:leading-relaxed">
            A small studio I co-founded in 2023 to bring serious software
            craft to the businesses around us. Lenzro is where the work scales
            beyond a single engineer — strategy, design, software, all under
            one practice.
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <a
              href="https://lenzro.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-line-strong px-5 py-3 font-mono text-[12px] uppercase tracking-tracked text-cream transition-colors hover:border-accent hover:text-accent"
            >
              Visit Lenzro
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Three pillars */}
      <Reveal delay={250}>
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
      <Reveal delay={350}>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {numbers.map((n) => (
            <div key={n.label} className="bg-ink-1 px-5 py-7 md:px-7 md:py-9">
              <div className="font-display text-3xl tracking-tightest text-cream md:text-4xl">
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
      <Reveal delay={450}>
        <blockquote className="mt-20 max-w-[60rem]">
          <p className="font-display text-3xl leading-tight tracking-tighter text-cream md:text-5xl md:leading-tight">
            <span className="text-accent">"</span>
            We took the spreadsheets and the patchwork tools and built one
            system the team actually trusts.
            <span className="text-accent">"</span>
          </p>
          <footer className="mt-6 font-mono text-[11px] uppercase tracking-tracked text-smoke">
            — Lenzro engagement, retail · 2024
          </footer>
        </blockquote>
      </Reveal>
    </Section>
  );
}
