import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { StatusChip } from "./ui/StatusChip";
import { MagneticButton } from "./ui/MagneticLink";
import { Marquee } from "./ui/Marquee";
import { NidaamMark } from "./ui/NidaamLogo";
import { site } from "../data/site";
import { work } from "../data/work";

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

// The flagship product, surfaced as a chip on the portrait.
const flagship = work[0];

const go = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-x-clip pt-28 pb-10 md:pt-32"
    >
      <Container className="relative z-10 flex flex-1 flex-col justify-center">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
          {/* ── Copy ─────────────────────────────────────────── */}
          <div className="lg:col-span-7">
            <Reveal>
              <StatusChip />
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-8 font-display text-[clamp(2.5rem,4.6vw,4.25rem)] 2xl:text-[clamp(4.25rem,4.2vw,5rem)] font-bold leading-[1.02] tracking-[-0.04em] text-cream text-balance md:mt-10">
                Software &amp; systems<span className="text-brand">.</span>
                <br />
                <span className="display-italic">Quiet by design.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-smoke md:mt-8 md:text-lg md:leading-relaxed 2xl:max-w-2xl 2xl:text-xl 2xl:leading-relaxed">
                <span className="text-cream">{site.name}</span> — software
                engineer and co-founder of{" "}
                <a
                  href={site.company.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent link-underline"
                >
                  {site.company.name}
                </a>
                . I build full-stack systems for retail, hospitality and
                education across East Africa. Currently taking on a small
                number of engagements for 2026.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:mt-10">
                <MagneticButton
                  variant="primary"
                  onClick={() => go("contact")}
                  aria-label="Start a project"
                  className="w-full justify-center sm:w-auto"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </MagneticButton>
                <MagneticButton
                  variant="ghost"
                  onClick={() => go("work")}
                  aria-label="See selected work"
                  className="w-full justify-center sm:w-auto"
                >
                  Selected work
                  <ArrowDownRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-y-0.5" />
                </MagneticButton>
              </div>
            </Reveal>

            {/* Metrics — quiet inline row, not boxes */}
            <Reveal delay={320}>
              <dl className="mt-12 grid max-w-xl grid-cols-3 border-t border-line pt-6 md:mt-14 2xl:max-w-2xl">
                {site.metrics.map((m, i) => (
                  <div
                    key={m.label}
                    className={i > 0 ? "border-l border-line pl-4 md:pl-6" : "pr-4"}
                  >
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="font-display text-2xl font-bold tracking-tighter text-cream md:text-3xl">
                      {m.value}
                    </dd>
                    <dd
                      aria-hidden
                      className="mt-1.5 font-mono text-[10px] uppercase tracking-tracked text-ash"
                    >
                      {m.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* ── Portrait ─────────────────────────────────────── */}
          <Reveal delay={200} className="lg:col-span-5">
            <figure className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:mr-0 lg:max-w-[28rem] 2xl:max-w-[33rem]">
              {/* soft brand glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-brand/[0.14] blur-3xl"
              />
              {/* azure block offset behind the photo — the brand panel */}
              <div
                aria-hidden
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-brand md:translate-x-4 md:translate-y-4"
              />

              <div className="relative overflow-hidden rounded-[28px] border border-line-strong bg-white">
                <img
                  src="/profile.jpg"
                  alt={`${site.name}, software engineer`}
                  width={1028}
                  height={994}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>

              {/* Chip: flagship product */}
              <Link
                to={`/work/${flagship.slug}`}
                className="group absolute right-3 top-5 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-ink-1/90 px-3.5 py-2 shadow-lg shadow-black/10 backdrop-blur transition-colors hover:border-accent md:-right-5 md:top-8"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-tracked text-ash">
                  Shipping
                </span>
                <span className="text-sm font-medium text-cream group-hover:text-accent">
                  {flagship.title}
                </span>
              </Link>

              {/* Chip: co-founder of Nidaam */}
              <a
                href={site.company.url}
                target="_blank"
                rel="noreferrer"
                className="group absolute bottom-5 left-3 flex items-center gap-3 rounded-2xl border border-line-strong bg-ink-1/90 py-2.5 pl-2.5 pr-4 shadow-lg shadow-black/10 backdrop-blur transition-colors hover:border-accent md:-left-8 md:bottom-10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10">
                  <NidaamMark decorative className="h-5 w-5" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-mono text-[9px] uppercase tracking-tracked text-ash">
                    Co-founder
                  </span>
                  <span className="font-display text-sm font-semibold text-cream group-hover:text-accent">
                    {site.company.name}
                  </span>
                </span>
              </a>
            </figure>
          </Reveal>
        </div>
      </Container>

      {/* Tech marquee */}
      <Reveal delay={400}>
        <div className="mt-16 border-y border-line py-5 md:mt-20">
          <Marquee duration={48}>
            {stack.map((s) => (
              <span
                key={s}
                className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-tracked text-smoke"
              >
                <span className="h-1 w-1 rounded-full bg-brand/70" />
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
