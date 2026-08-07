import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import {
  work,
  workCategories,
  workYearRange,
  type WorkCategory,
} from "../data/work";
import { cn } from "../lib/cn";

export default function Portfolio() {
  const [filter, setFilter] = useState<WorkCategory | "all">("all");
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? work : work.filter((w) => w.category === filter)),
    [filter]
  );

  const caseStudies = work.filter((w) => w.featured).slice(0, 3);

  return (
    <Section
      id="work"
      index="01"
      label="Selected Work"
      meta={`${work.length} engagements · ${workYearRange}`}
      full
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left rail — intro + filters */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <h2 className="font-display text-display-md tracking-tighter text-cream">
              The work,<br />
              <span className="display-italic">in plain view.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-smoke">
              A short list — production engagements I'm proud of. Open any one
              of them for the full case study: the architecture, the decisions
              and what changed for the business.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 hidden flex-wrap gap-2 lg:flex">
              {workCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFilter(c.id as WorkCategory | "all")}
                  aria-pressed={filter === c.id}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-tracked transition-colors",
                    filter === c.id
                      ? "border-accent bg-accent text-ink-0"
                      : "border-line-strong text-smoke hover:border-cream hover:text-cream"
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right column — work list */}
        <div className="lg:col-span-8">
          <div className="mb-6 flex flex-wrap gap-2 lg:hidden">
            {workCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id as WorkCategory | "all")}
                aria-pressed={filter === c.id}
                className={cn(
                  "rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-tracked transition-colors",
                  filter === c.id
                    ? "border-accent bg-accent text-ink-0"
                    : "border-line-strong text-smoke"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <ul className="border-t border-line">
            {filtered.map((w) => {
              const isActive = active === w.index;
              return (
                <li
                  key={w.index}
                  className={cn(
                    "group relative border-b border-line transition-colors",
                    isActive ? "bg-ink-1/30" : ""
                  )}
                  onMouseEnter={() => setActive(w.index)}
                  onMouseLeave={() => setActive(null)}
                >
                  <Link
                    to={`/work/${w.slug}`}
                    aria-label={`${w.title} — read the case study`}
                    onFocus={() => setActive(w.index)}
                    onBlur={() => setActive(null)}
                    className="grid grid-cols-12 items-center gap-4 py-7 md:py-9"
                    data-hover="true"
                  >
                    <span className="col-span-2 font-mono text-[11px] uppercase tracking-tracked text-ash md:col-span-1">
                      {w.index}
                    </span>

                    <div className="col-span-10 md:col-span-7">
                      <h3 className="font-display text-2xl tracking-tighter text-cream transition-transform duration-500 ease-editorial group-hover:translate-x-2 md:text-4xl">
                        {w.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-tracked text-ash">
                        <span>{w.role}</span>
                        <span className="h-3 w-px bg-line-strong" />
                        <span className="capitalize text-smoke">{w.category}</span>
                      </div>
                      <p className="mt-3 line-clamp-3 max-w-prose text-sm leading-relaxed text-smoke lg:hidden">
                        {w.blurb}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5 lg:hidden">
                        {w.stack.slice(0, 3).map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-tracked text-smoke"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-12 mt-3 flex items-center justify-between md:col-span-4 md:mt-0 md:justify-end">
                      <span className="font-mono text-[11px] uppercase tracking-tracked text-smoke">
                        {w.year}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-cream transition-transform duration-500 ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:ml-6" />
                    </div>

                    {/* Hover thumbnail — desktop only */}
                    <div
                      aria-hidden
                      className={cn(
                        "pointer-events-none absolute right-6 top-1/2 z-10 hidden h-44 w-64 -translate-y-1/2 overflow-hidden rounded-lg border border-line-strong shadow-2xl shadow-black/60 transition-all duration-500 ease-editorial lg:block",
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      )}
                    >
                      <img
                        src={w.image}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-0/80 via-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-tracked text-cream">
                        <span>{w.stack[0]}</span>
                        <span>{w.year}</span>
                      </div>
                    </div>
                  </Link>

                  {/* Stack reveal under the row, desktop */}
                  <div
                    className={cn(
                      "hidden overflow-hidden pl-[8.333%] transition-[grid-template-rows] duration-500 lg:grid",
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="min-h-0">
                      <div className="flex flex-wrap items-center gap-2 pb-6 pr-4">
                        {w.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-tracked text-smoke"
                          >
                            {s}
                          </span>
                        ))}
                        {w.repoUrl && (
                          <a
                            href={w.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-tracked text-cream hover:text-accent"
                          >
                            <Github className="h-3.5 w-3.5" />
                            Source
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Featured case-study highlights */}
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.index} delay={200}>
              <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:items-center lg:gap-12">
                <div
                  className={cn(
                    "lg:col-span-7",
                    i % 2 === 1 && "lg:order-2"
                  )}
                >
                  <Link
                    to={`/work/${cs.slug}`}
                    tabIndex={-1}
                    aria-hidden
                    className="block overflow-hidden rounded-2xl border border-line-strong"
                  >
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-editorial hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div
                  className={cn(
                    "lg:col-span-5",
                    i % 2 === 1 && "lg:order-1"
                  )}
                >
                  <div className="font-mono text-[11px] uppercase tracking-tracked text-ash">
                    Case study · {cs.year}
                  </div>
                  <h3 className="mt-3 font-display text-3xl tracking-tighter text-cream md:text-4xl">
                    {cs.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-smoke">
                    {cs.blurb}
                  </p>
                  {cs.impact && (
                    <div className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed text-cream/85">
                      {cs.impact}
                    </div>
                  )}
                  {cs.highlights && (
                    <ul className="mt-6 space-y-2">
                      {cs.highlights.slice(0, 4).map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 text-sm leading-relaxed text-smoke"
                        >
                          <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/work/${cs.slug}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-[12px] uppercase tracking-tracked text-ink-0"
                    >
                      Read the case study
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                    {cs.liveUrl && (
                      <a
                        href={cs.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-tracked text-cream hover:text-accent"
                      >
                        Visit live
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {cs.repoUrl && (
                      <a
                        href={cs.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-tracked text-smoke hover:text-cream"
                      >
                        <Github className="h-4 w-4" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
