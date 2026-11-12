import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./ui/Container";
import { site } from "../data/site";
import { NidaamLogo } from "./ui/NidaamLogo";

const sitemap = [
  { id: "work", label: "Selected work" },
  { id: "profile", label: "Profile" },
  { id: "capabilities", label: "Capabilities" },
  { id: "nidaam", label: "Nidaam" },
  { id: "trust", label: "Testimonials" },
  { id: "trajectory", label: "Trajectory" },
  { id: "contact", label: "Contact" },
];

const elsewhere = [
  { href: site.social.github, label: "GitHub" },
  { href: site.social.linkedin, label: "LinkedIn" },
  { href: site.social.twitter, label: "Twitter" },
  { href: site.company.url, label: site.company.name },
];

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [time, setTime] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: site.timezone,
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative mt-24 border-t border-line pt-24 pb-10">
      <Container>
        {/* Oversized wordmark */}
        <div className="relative">
          <h2 className="font-display text-[clamp(4rem,18vw,18rem)] leading-[0.85] tracking-tightest text-cream/95">
            {site.name.split(" ")[0]}
            <span className="text-brand">.</span>
          </h2>
          <p className="mt-4 max-w-prose font-display text-2xl font-medium tracking-tighter text-cream md:text-3xl">
            {site.tagline}
          </p>
          <a
            href={site.company.url}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-4 text-cream"
          >
            <span className="font-mono text-[10px] uppercase tracking-tracked text-ash transition-colors group-hover:text-accent">
              Co-founder
            </span>
            <span className="h-3 w-px bg-line-strong" />
            <NidaamLogo className="h-7 w-auto md:h-8" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-y-12 md:grid-cols-12">
          {/* Sitemap */}
          <div className="col-span-2 md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-tracked text-ash">
              Sitemap
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {sitemap.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(s.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-sans text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div className="col-span-1 md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-tracked text-ash">
              Elsewhere
            </div>
            <ul className="mt-4 space-y-2">
              {elsewhere.map((e) => (
                <li key={e.label}>
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 font-sans text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {e.label}
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-tracked text-ash">
              Contact
            </div>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="block font-sans text-sm text-cream"
                >
                  {site.email}
                </a>
              </li>
              <li className="font-sans text-sm text-cream/80">{site.phone}</li>
              <li className="font-mono text-[11px] uppercase tracking-tracked text-smoke">
                {site.location} · {time}
              </li>
            </ul>
          </div>
        </div>

        {/* Baseline */}
        <div className="mt-20 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-tracked text-ash md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.name} · Composed in Nairobi
          </span>
          <span>Portfolio v04 — 2026 edition</span>
        </div>
      </Container>
    </footer>
  );
}
