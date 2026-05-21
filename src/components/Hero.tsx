import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { StatusChip } from "./ui/StatusChip";
import { MagneticButton } from "./ui/MagneticLink";
import { Marquee } from "./ui/Marquee";
import { site } from "../data/site";

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "Spring Boot",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Docker",
  "AWS",
  "Tailwind",
  "Framer Motion",
];

const go = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-between pt-28 pb-10 md:pt-32"
    >
      {/* Ambient corner glow — single, restrained */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/[0.06] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-[-8%] h-[420px] w-[420px] rounded-full bg-signal-azure/[0.04] blur-3xl"
      />

      <Container className="relative z-10 flex flex-1 flex-col justify-center">
        {/* Metadata strip */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-y-4 md:mb-16">
          <Reveal>
            <StatusChip />
          </Reveal>
          <Reveal delay={120}>
            <div className="hidden items-center gap-4 font-mono text-[11px] uppercase tracking-tracked text-ash md:flex">
              <span>Portfolio</span>
              <span className="h-3 w-px bg-line-strong" />
              <span>v04</span>
              <span className="h-3 w-px bg-line-strong" />
              <span>2026 ed.</span>
            </div>
          </Reveal>
        </div>

        {/* Display */}
        <Reveal>
          <h1 className="font-display text-display-xl tracking-tightest text-cream">
            Software &amp; systems<span className="text-accent">.</span>
            <br className="hidden md:block" />
            <span className="display-italic text-cream/95">Quiet by design.</span>
          </h1>
        </Reveal>

        {/* Subhead */}
        <div className="mt-12 grid items-end gap-12 lg:mt-16 lg:grid-cols-12">
          <Reveal delay={150} className="lg:col-span-7">
            <p className="max-w-prose text-base leading-relaxed text-cream/80 md:text-lg md:leading-relaxed">
              <span className="text-cream">{site.name}</span> — software
              engineer and co-founder of{" "}
              <a
                href="https://lenzro.com"
                target="_blank"
                rel="noreferrer"
                className="text-accent link-underline"
              >
                Lenzro
              </a>
              . I build full-stack systems for retail, hospitality and
              education across East Africa. Currently taking on a small number
              of engagements for 2026.
            </p>
          </Reveal>

          <Reveal delay={250} className="lg:col-span-5 lg:justify-self-end">
            <div className="flex flex-col items-start gap-3 sm:flex-row lg:items-center">
              <MagneticButton
                variant="primary"
                onClick={() => go("contact")}
                aria-label="Start a project"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                onClick={() => go("work")}
                aria-label="See selected work"
              >
                Selected work
                <ArrowDownRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-y-0.5" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        {/* Metrics row */}
        <Reveal delay={350}>
          <div className="mt-20 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:mt-24">
            {site.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-ink-1 px-5 py-6 md:px-8 md:py-8"
              >
                <div className="font-display text-3xl tracking-tightest text-cream md:text-5xl">
                  {m.value}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-tracked text-ash md:text-[11px]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      {/* Tech marquee */}
      <Reveal delay={450}>
        <div className="mt-16 border-y border-line py-5">
          <Marquee duration={48}>
            {stack.map((s) => (
              <span
                key={s}
                className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-tracked text-smoke"
              >
                <span className="h-1 w-1 rounded-full bg-accent/60" />
                {s}
              </span>
            ))}
          </Marquee>
        </div>
      </Reveal>

      {/* Scroll indicator */}
      <div className="container-editorial mt-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-tracked text-ash">
        <span>Scroll · §01 Work</span>
        <span className="hidden md:inline">
          {site.location} · {new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
}
