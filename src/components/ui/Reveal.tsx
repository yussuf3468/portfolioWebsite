import { ReactNode, useEffect, useRef } from "react";
import { cn } from "../../lib/cn";

interface RevealProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function Reveal({
  children,
  as: As = "div",
  delay = 0,
  className,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.setAttribute("data-reveal", "in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.setAttribute("data-reveal", "in");
            }, delay);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, threshold]);

  return (
    // @ts-expect-error generic element typing
    <As
      ref={ref}
      data-reveal=""
      className={cn(className)}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </As>
  );
}
