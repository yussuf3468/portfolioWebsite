import { ArrowUpRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { site } from "../data/site";

const principles = [
  {
    n: "01",
    title: "Code with restraint",
    body: "The hardest part of an interface is what you choose not to put in it.",
  },
  {
    n: "02",
    title: "Boring on purpose",
    body: "Predictable systems beat clever ones. They are easier to teach, debug and trust on the third year.",
  },
  {
    n: "03",
    title: "Build with the room in mind",
    body: "Software lives inside an organisation. I design for the person who has to keep it running on a Tuesday.",
  },
  {
    n: "04",
    title: "Teach as you ship",
    body: "Every project leaves behind a clearer team, not just a deployment.",
  },
];

export default function About() {
  return (
    <Section
      id="profile"
      index="02"
      label="Profile"
      meta="Engineering · Studio · Mentorship"
      full
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Portrait */}
        <Reveal className="lg:col-span-5">
          <figure className="relative">
            <div className="overflow-hidden rounded-2xl border border-line-strong">
              <img
                src="/myphoto1.webp"
                alt={site.name}
                className="aspect-[4/5] w-full object-cover grayscale transition-[filter] duration-700 ease-editorial hover:grayscale-0"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-tracked text-ash">
              <span>{site.name}</span>
              <span>{site.location}</span>
            </figcaption>

            {/* signature corner mark */}
            <div className="pointer-events-none absolute -top-3 -left-3 flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-ink-0 font-mono text-[10px] uppercase tracking-tracked text-accent">
              {site.initials}
            </div>
          </figure>
        </Reveal>

        {/* Body */}
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-display-md tracking-tighter text-cream">
              Engineer first.<br />
              <span className="display-italic">Co-founder by necessity.</span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-smoke md:text-lg md:leading-relaxed">
              <p>
                I'm Yussuf — a software engineer working across product, platform
                and data. My first line of code was Java in 2019; six years
                later I'm still drawn to systems with clear boundaries and
                schemas you can read out loud.
              </p>
              <p>
                In 2023 I co-founded{" "}
                <a
                  href={site.company.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream link-underline"
                >
                  {site.company.name}
                </a>
                , a software company building
                serious systems for businesses across East Africa. The work
                spans retail point-of-sale, hospitality, education and the
                marketing systems that hold them together.
              </p>
              <p>
                Outside the company I write field notes on building for bilingual
                users, mentor junior engineers on Java and SQL, and contribute
                back to the open-source pieces that make this practice possible.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12">
              <div className="hairline" />
              <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-2 md:divide-x md:divide-y-0">
                {principles.map((p) => (
                  <div key={p.n} className="py-6 first:pt-7 md:px-8 md:first:pl-0 md:last:pr-0">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-tracked text-accent">
                        {p.n}
                      </span>
                      <h3 className="font-display text-xl tracking-tighter text-cream">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-prose text-sm leading-relaxed text-smoke">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="hairline" />
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={site.calendar}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-tracked text-cream hover:text-accent"
              >
                Book a 20-min call
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-tracked text-smoke hover:text-cream"
              >
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
