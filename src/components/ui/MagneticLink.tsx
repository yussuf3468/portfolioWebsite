import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  useRef,
} from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "ghost" | "underline";

const variants: Record<Variant, string> = {
  primary:
    "group relative inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3 font-mono text-[12px] uppercase tracking-tracked text-brand-ink transition-colors hover:bg-brand-bright",
  ghost:
    "group relative inline-flex items-center gap-3 rounded-full border border-line-strong bg-transparent px-6 py-3 font-mono text-[12px] uppercase tracking-tracked text-cream transition-colors hover:border-cream hover:text-cream",
  underline:
    "group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-tracked text-cream",
};

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  magnetic?: boolean;
}

function useMagnetic(enable: boolean) {
  const ref = useRef<HTMLElement | null>(null);
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };
  const onMove = (e: React.MouseEvent) => {
    if (!enable || !ref.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate3d(${x * 0.25}px, ${y * 0.35}px, 0)`;
  };
  return { ref, onMove, reset };
}

export function MagneticButton({
  variant = "primary",
  children,
  className,
  magnetic = true,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { ref, onMove, reset } = useMagnetic(magnetic);
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn("magnetic", variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function MagneticLink({
  variant = "primary",
  children,
  className,
  magnetic = true,
  ...rest
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { ref, onMove, reset } = useMagnetic(magnetic);
  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn("magnetic", variants[variant], className)}
      {...rest}
    >
      {children}
    </a>
  );
}
