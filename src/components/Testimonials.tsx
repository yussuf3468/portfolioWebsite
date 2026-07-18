import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { trust } from "../data/trust";

export default function Testimonials() {
  return (
    <Section
      id="trust"
      index="06"
      label="In their words"
      meta={`${trust.length} engagements · referenced`}
      full
    >
      <Reveal>
        <h2 className="font-display text-display-md tracking-tighter text-cream">
          People I've built for.<br />
          <span className="display-italic">In their words.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        {trust.map((t, i) => (
          <Reveal
            key={t.name}
            delay={(i % 2) * 80}
            as="figure"
            className="relative flex flex-col gap-6 bg-ink-1 p-8 md:p-10"
          >
            <span
              aria-hidden
              className="absolute right-6 top-6 font-display text-6xl leading-none text-accent/30"
            >
              "
            </span>
            <blockquote className="font-display text-xl leading-snug tracking-tighter text-cream md:text-2xl">
              {t.quote}
            </blockquote>
            <figcaption className="mt-auto flex flex-col gap-1 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-tracked sm:flex-row sm:items-baseline sm:justify-between">
              <span className="text-cream">{t.name}</span>
              <span className="text-ash">
                {t.role} · {t.company}
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
