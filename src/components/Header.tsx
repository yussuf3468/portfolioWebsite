import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/cn";
import { site } from "../data/site";
import { ThemeToggle } from "./ui/ThemeToggle";

const nav = [
  { id: "work", label: "Work", index: "01" },
  { id: "profile", label: "Profile", index: "02" },
  { id: "capabilities", label: "Capabilities", index: "03" },
  { id: "nidaam", label: "Nidaam", index: "04" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // Sections only exist on the home route — from a case study, route there
    // first and let ScrollToHash finish the job once they've mounted.
    if (pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const home = () => {
    navigate("/");
    setOpen(false);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500",
          scrolled
            ? "border-b border-line bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <div className="container-editorial flex h-16 items-center justify-between md:h-20">
          {/* Wordmark */}
          <button
            onClick={home}
            className="group flex items-baseline gap-3"
            aria-label="Home"
          >
            <span className="font-display text-[1.25rem] font-bold tracking-tightest text-cream">
              {site.initials}
              <span className="text-brand">.</span>
            </span>
            <span className="hidden font-mono text-[11px] uppercase tracking-tracked text-ash group-hover:text-cream md:inline">
              {site.role.split("·")[0].trim()}
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="group inline-flex items-baseline gap-2 text-cream/80 transition-colors hover:text-cream"
              >
                <span className="font-mono text-[10px] text-ash group-hover:text-accent">
                  {item.index}
                </span>
                <span className="font-sans text-[14px] tracking-tight">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={site.calendar}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-line-strong px-4 py-2 font-mono text-[11px] uppercase tracking-tracked text-cream transition-colors hover:border-accent hover:text-accent md:inline-flex"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              Book a call
            </a>
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative h-10 w-10 rounded-full border border-line-strong md:hidden"
            >
              <span
                className={cn(
                  "absolute left-1/2 top-1/2 block h-px w-4 -translate-x-1/2 bg-cream transition-transform duration-300",
                  open ? "rotate-45" : "-translate-y-1"
                )}
              />
              <span
                className={cn(
                  "absolute left-1/2 top-1/2 block h-px w-4 -translate-x-1/2 bg-cream transition-transform duration-300",
                  open ? "-rotate-45" : "translate-y-1"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "transition-[opacity,visibility] duration-500",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-ink/95 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <div className="container-editorial relative flex h-full flex-col pt-28 pb-12">
          <nav className="flex-1" aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <li
                  key={item.id}
                  className="overflow-hidden border-b border-line"
                  style={{
                    transform: open ? "translateY(0)" : "translateY(20px)",
                    opacity: open ? 1 : 0,
                    transition: `transform 600ms cubic-bezier(0.22,1,0.36,1) ${i * 60}ms, opacity 600ms ${i * 60}ms`,
                  }}
                >
                  <button
                    onClick={() => go(item.id)}
                    className="flex w-full items-baseline justify-between py-5 text-left"
                  >
                    <span className="font-display text-3xl tracking-tighter text-cream">
                      {item.label}
                    </span>
                    <span className="font-mono text-[11px] text-ash">
                      §{item.index}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-4">
            <a
              href={site.calendar}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="w-full rounded-full bg-brand py-4 text-center font-mono text-[12px] uppercase tracking-tracked text-brand-ink"
            >
              Book a 20-min call
            </a>
            <button
              onClick={() => go("contact")}
              className="w-full rounded-full border border-line-strong py-4 font-mono text-[12px] uppercase tracking-tracked text-cream"
            >
              Send a message
            </button>
            <p className="font-mono text-[10px] uppercase tracking-tracked text-ash">
              {site.email} · {site.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
