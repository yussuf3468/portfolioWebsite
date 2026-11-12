import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { work, workBySlug } from "../data/work";
import { trust } from "../data/trust";
import { site } from "../data/site";
import { useSeo } from "../lib/useSeo";

export default function WorkDetail() {
  const { slug = "" } = useParams();
  const project = workBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  useSeo({
    title: project
      ? `${project.title} — ${project.role} · ${site.name}`
      : `Project not found · ${site.name}`,
    description: project ? project.blurb : "This project does not exist.",
    path: project ? `/work/${project.slug}` : "/work",
    image: project?.image.startsWith("/") ? project.image : undefined,
  });

  // A former slug (see Work.legacySlugs) → redirect to the current one.
  if (project && project.slug !== slug) {
    return <Navigate to={`/work/${project.slug}`} replace />;
  }

  if (!project) {
    return (
      <Container className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
        <h1 className="font-display text-display-md tracking-tighter text-cream">
          Not found
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-smoke">
          That project doesn't exist — it may have been renamed.
        </p>
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-mono text-[12px] uppercase tracking-tracked text-brand-ink"
        >
          See all work
        </Link>
      </Container>
    );
  }

  const position = work.findIndex((w) => w.slug === project.slug);
  const next = work[(position + 1) % work.length];
  const testimony = project.client
    ? trust.find((t) => t.company === project.client)
    : undefined;

  return (
    <article className="pb-24 pt-32 md:pt-40">
      <Container>
        <Link
          to="/#work"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-tracked text-ash transition-colors hover:text-cream"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-500 ease-editorial group-hover:-translate-x-1" />
          All work
        </Link>

        <Reveal>
          <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-tracked">
            <span className="text-accent">§{project.index}</span>
            <span className="capitalize text-smoke">{project.category}</span>
            <span className="text-ash">{project.year}</span>
          </div>
          <h1 className="mt-5 max-w-[18ch] font-display text-display-md tracking-tighter text-cream">
            {project.title}
          </h1>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-tracked text-smoke">
            {project.role}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-line-strong">
            <img
              src={project.image}
              alt={`${project.title} — project screenshot`}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-prose text-lg leading-relaxed text-cream/90">
                {project.blurb}
              </p>
            </Reveal>

            {project.impact && (
              <Reveal delay={100}>
                <div className="mt-10">
                  <h2 className="font-mono text-[11px] uppercase tracking-tracked text-ash">
                    The outcome
                  </h2>
                  <p className="mt-4 border-l-2 border-accent pl-5 text-base leading-relaxed text-cream/85">
                    {project.impact}
                  </p>
                </div>
              </Reveal>
            )}

            {testimony && (
              <Reveal delay={130}>
                <figure className="mt-12 rounded-2xl border border-line bg-ink-1 p-7 md:p-9">
                  <blockquote className="font-display text-xl leading-snug tracking-tight text-cream md:text-2xl">
                    “{testimony.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-tracked">
                    <span className="text-cream">{testimony.name}</span>
                    <span className="h-3 w-px bg-line-strong" />
                    <span className="text-smoke">{testimony.role}</span>
                    <span className="h-3 w-px bg-line-strong" />
                    <span className="text-ash">{testimony.company}</span>
                  </figcaption>
                </figure>
              </Reveal>
            )}

            {project.highlights && (
              <Reveal delay={160}>
                <div className="mt-12">
                  <h2 className="font-mono text-[11px] uppercase tracking-tracked text-ash">
                    What it does
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-base leading-relaxed text-smoke"
                      >
                        <span className="mt-2.5 inline-block h-1 w-1 flex-none rounded-full bg-brand" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>

          {/* Facts rail */}
          <Reveal delay={200} className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-ink-1 p-7 lg:sticky lg:top-32">
              <h2 className="font-mono text-[11px] uppercase tracking-tracked text-ash">
                Built with
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line-strong px-3 py-1 font-mono text-[10px] uppercase tracking-tracked text-smoke"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-full bg-brand px-5 py-3 font-mono text-[12px] uppercase tracking-tracked text-brand-ink"
                  >
                    Visit live site
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 rounded-full border border-line-strong px-5 py-3 font-mono text-[12px] uppercase tracking-tracked text-cream transition-colors hover:border-cream"
                  >
                    View source
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="text-sm leading-relaxed text-smoke">
                  Building something like this? I take on a small number of
                  engagements each year.
                </p>
                <a
                  href={site.calendar}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-4 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-tracked text-cream hover:text-accent"
                >
                  Book a 20-min call
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Next project */}
        <Reveal delay={120}>
          <Link
            to={`/work/${next.slug}`}
            className="group mt-24 flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-8"
          >
            <div>
              <span className="font-mono text-[11px] uppercase tracking-tracked text-ash">
                Next project
              </span>
              <div className="mt-2 font-display text-3xl tracking-tighter text-cream transition-transform duration-500 ease-editorial group-hover:translate-x-2 md:text-4xl">
                {next.title}
              </div>
            </div>
            <ArrowUpRight className="h-6 w-6 text-cream transition-transform duration-500 ease-editorial group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        </Reveal>
      </Container>
    </article>
  );
}
