import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { notes, type Note } from "../data/notes";
import { cn } from "../lib/cn";

const filters: { id: Note["category"] | "all"; label: string }[] = [
  { id: "all", label: "All notes" },
  { id: "case-study", label: "Case studies" },
  { id: "essay", label: "Essays" },
  { id: "tutorial", label: "Tutorials" },
  { id: "field-note", label: "Field notes" },
];

export default function Educational() {
  const [filter, setFilter] = useState<Note["category"] | "all">("all");
  const visible = filter === "all" ? notes : notes.filter((n) => n.category === filter);

  // Nothing published yet — better no section than an empty one.
  if (!notes.length) return null;

  return (
    <Section
      id="notes"
      index="05"
      label="Field Notes"
      meta="Writing · Tutorials · Case studies"
      full
    >
      <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <h2 className="font-display text-display-md tracking-tighter text-cream">
            Notes from the practice.
          </h2>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-5">
          <p className="max-w-prose text-base leading-relaxed text-smoke">
            Selected writing — case studies of shipped work, essays on building
            for bilingual users, and short tutorials drawn from production
            code.
          </p>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="mt-12 flex flex-wrap gap-2 border-b border-line pb-6">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-tracked transition-colors",
                filter === f.id
                  ? "border-accent bg-accent text-ink-0"
                  : "border-line-strong text-smoke hover:border-cream hover:text-cream"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <ul>
        {visible.map((n) => (
          <li key={n.index} className="border-b border-line">
            <a
              href={n.url}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-12 items-baseline gap-4 py-6 md:py-8"
              data-hover="true"
            >
              <span className="col-span-2 font-mono text-[11px] uppercase tracking-tracked text-ash md:col-span-1">
                {n.index}
              </span>

              <div className="col-span-10 md:col-span-8">
                <h3 className="font-display text-xl tracking-tighter text-cream transition-transform duration-500 ease-editorial group-hover:translate-x-1 md:text-2xl">
                  {n.title}
                </h3>
                <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-smoke">
                  {n.excerpt}
                </p>
              </div>

              <div className="col-span-12 mt-3 flex items-center justify-between md:col-span-3 md:mt-0 md:justify-end">
                <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-tracked text-ash">
                  <span className="capitalize">{n.category.replace("-", " ")}</span>
                  <span className="h-3 w-px bg-line-strong" />
                  <span>{n.readTime}</span>
                </div>
                <ArrowUpRight className="ml-4 h-4 w-4 text-cream transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* Mentorship CTA — minimal */}
      <Reveal delay={200}>
        <div className="mt-16 grid items-center gap-8 rounded-2xl border border-line-strong p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-tracked text-accent">
              Mentorship
            </div>
            <h3 className="mt-2 font-display text-2xl tracking-tighter text-cream md:text-3xl">
              One-on-one sessions for Java, SQL and React.
            </h3>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-smoke">
              Project reviews, interview preparation, pairing on the parts
              that resist understanding.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 self-end rounded-full bg-cream px-5 py-3 font-mono text-[12px] uppercase tracking-tracked text-ink-0 transition-colors hover:bg-accent md:self-center"
          >
            Book a session
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
