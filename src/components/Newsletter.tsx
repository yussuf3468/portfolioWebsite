import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <section id="dispatch" className="relative py-24 md:py-32">
      <Container>
        <div className="grid items-end gap-10 border-t border-line pt-16 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-tracked text-accent">
              §09 · The Dispatch
            </div>
            <h2 className="mt-3 font-display text-display-md tracking-tighter text-cream">
              A short note,<br />
              <span className="display-italic">once a month.</span>
            </h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-smoke">
              Field notes from active engagements, one essay, one tutorial. No
              newsletter performance theatre — just the work and what it taught
              me. Roughly once a month.
            </p>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <form
              onSubmit={submit}
              className="group flex items-center gap-3 border-b border-line-strong pb-4 transition-colors focus-within:border-accent"
            >
              <input
                type="email"
                required
                placeholder="you@inbox.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                className="flex-1 border-0 bg-transparent p-0 font-display text-2xl tracking-tighter text-cream placeholder:text-ash focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                disabled={done}
                aria-label="Subscribe"
                className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand text-brand-ink transition-colors hover:bg-brand-bright disabled:opacity-60"
              >
                {done ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </button>
            </form>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-tracked text-ash">
              No spam · Unsubscribe in one click
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
