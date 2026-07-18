import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 1200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-ink-1/80 text-cream backdrop-blur transition-all duration-500 ease-editorial hover:border-accent hover:text-accent ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
