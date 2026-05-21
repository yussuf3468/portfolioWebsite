import { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  index?: string;
  label?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
  divider?: boolean;
  full?: boolean;
}

export function Section({
  id,
  index,
  label,
  title,
  subtitle,
  meta,
  children,
  className,
  divider = true,
  full = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-24 md:py-32 lg:py-40",
        className
      )}
    >
      <Container>
        {divider && (
          <div className="mb-16 md:mb-20 lg:mb-24">
            <div className="hairline" />
            {(label || index || meta) && (
              <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
                <div className="flex items-baseline gap-6">
                  {index && (
                    <span className="font-mono text-eyebrow uppercase tracking-tracked text-accent">
                      §{index}
                    </span>
                  )}
                  {label && (
                    <span className="font-mono text-eyebrow uppercase tracking-tracked text-smoke">
                      {label}
                    </span>
                  )}
                </div>
                {meta && (
                  <span className="font-mono text-[11px] uppercase tracking-tracked text-ash">
                    {meta}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {(title || subtitle) && (
          <header
            className={cn(
              "mb-16 md:mb-20 lg:mb-24",
              full ? "" : "max-w-[1000px]"
            )}
          >
            {title && (
              <h2
                className="text-display-lg text-cream text-balance"
                data-reveal
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className="mt-8 max-w-prose text-base md:text-lg leading-relaxed text-smoke text-pretty"
                data-reveal
              >
                {subtitle}
              </p>
            )}
          </header>
        )}

        {children}
      </Container>
    </section>
  );
}
