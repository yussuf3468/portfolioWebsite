import { useState } from "react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { capabilities } from "../data/capabilities";
import { cn } from "../lib/cn";

export default function Services() {
  const [active, setActive] = useState(capabilities[0].index);
  const current =
    capabilities.find((c) => c.index === active) ?? capabilities[0];

  return (
    <Section
      id="capabilities"
      index="03"
      label="Capabilities"
      meta="What I take on"
      full
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Heading column */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <h2 className="font-display text-display-md tracking-tighter text-cream">
              Six disciplines.<br />
              <span className="display-italic">One operating model.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-smoke">
              I work across product, platform and data. The framing changes;
              the practice — small teams, clear schemas, restrained motion,
              honest deadlines — stays the same.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-10 hidden rounded-xl border border-line-strong p-6 lg:block">
              <div className="font-mono text-[11px] uppercase tracking-tracked text-ash">
                Detail
              </div>
              <h3 className="mt-3 font-display text-2xl tracking-tighter text-cream">
                {current.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke">
                {current.detail}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {current.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-tracked text-cream/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* List column */}
        <div className="lg:col-span-7">
          <ul className="border-t border-line">
            {capabilities.map((c) => {
              const isActive = active === c.index;
              return (
                <li
                  key={c.index}
                  className="border-b border-line"
                  onMouseEnter={() => setActive(c.index)}
                  onFocus={() => setActive(c.index)}
                >
                  <button
                    onClick={() => setActive(c.index)}
                    className="group flex w-full items-baseline gap-6 py-7 text-left"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-tracked text-ash">
                      {c.index}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3
                          className={cn(
                            "font-display text-2xl tracking-tighter transition-all duration-500 ease-editorial md:text-3xl",
                            isActive
                              ? "translate-x-2 text-cream"
                              : "text-cream/70 group-hover:text-cream"
                          )}
                        >
                          {c.title}
                        </h3>
                        <span
                          className={cn(
                            "hidden font-mono text-[11px] uppercase tracking-tracked transition-colors md:inline",
                            isActive ? "text-accent" : "text-ash"
                          )}
                        >
                          {isActive ? "Active" : "View"}
                        </span>
                      </div>
                      <p
                        className={cn(
                          "mt-1 max-w-prose text-sm transition-colors",
                          isActive ? "text-smoke" : "text-ash"
                        )}
                      >
                        {c.summary}
                      </p>

                      {/* Mobile: inline detail */}
                      <div
                        className={cn(
                          "grid overflow-hidden transition-[grid-template-rows] duration-500 lg:hidden",
                          isActive ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
                        )}
                      >
                        <div className="min-h-0">
                          <p className="pb-2 text-sm leading-relaxed text-smoke">
                            {c.detail}
                          </p>
                          <div className="flex flex-wrap gap-1.5 pb-2">
                            {c.tools.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-tracked text-cream/80"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
