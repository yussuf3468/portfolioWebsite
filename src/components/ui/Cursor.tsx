import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const supportsFine =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!supportsFine || reduce) return;
    setEnabled(true);
    document.body.dataset.cursor = "on";

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringX - 18}px, ${ringY - 18}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest(
        "a, button, [role='button'], [data-hover='true'], input, textarea, select"
      );
      setHovering(!!isInteractive);
    };

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", checkHover, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", checkHover);
      cancelAnimationFrame(raf);
      delete document.body.dataset.cursor;
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] h-9 w-9 rounded-full border transition-[width,height,border-color,background-color] duration-300 ease-soft"
        style={{
          willChange: "transform",
          transform: "translate3d(-100px,-100px,0)",
          width: hovering ? "56px" : "36px",
          height: hovering ? "56px" : "36px",
          borderColor: hovering
            ? "rgb(var(--brand))"
            : "rgb(var(--cream) / 0.3)",
          backgroundColor: hovering ? "rgb(var(--brand) / 0.08)" : "transparent",
        }}
      />
    </>
  );
}
