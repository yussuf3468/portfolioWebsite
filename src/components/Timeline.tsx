import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { trajectory } from "../data/trajectory";

export default function Timeline() {
  return (
    <Section
      id="trajectory"
      index="07"
      label="Trajectory"
      meta="2019 — present"
      full
    >
      <Reveal>
        <h2 className="font-display text-display-md tracking-tighter text-cream">
          Six years.<br />
          <span className="display-italic">In sequence.</span>
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-smoke">
          A short index of the years between the first line of code and the
          studio.
        </p>
      </Reveal>

      <ol className="mt-16 border-t border-line">
        {trajectory.map((m) => (
          <li
            key={m.year}
            className="group grid grid-cols-12 items-baseline gap-4 border-b border-line py-8 md:py-10"
          >
            <span className="col-span-3 font-display text-3xl tracking-tightest text-cream md:col-span-2 md:text-5xl">
              {m.year}
            </span>
            <div className="col-span-9 md:col-span-8">
              <h3 className="font-display text-xl tracking-tighter text-cream md:text-2xl">
                {m.title}
              </h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-smoke">
                {m.detail}
              </p>
            </div>
            <span className="col-span-12 mt-1 font-mono text-[10px] uppercase tracking-tracked text-ash md:col-span-2 md:mt-0 md:text-right">
              {m.tag}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
