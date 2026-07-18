import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { site } from "../data/site";

const projectTypes = [
  { id: "consultation", label: "Discovery / Consultation" },
  { id: "fullstack", label: "Full-stack product" },
  { id: "java", label: "Java systems" },
  { id: "data", label: "Data / Analytics" },
  { id: "mentorship", label: "Mentorship" },
  { id: "other", label: "Something else" },
];

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    projectType: "consultation",
  });

  const update =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_hxy53bk",
        "template_61fhsgn",
        { ...form },
        "OOnn4jog3-e9lbKUw"
      );
      toast.success("Message sent. I'll reply within 24 hours.");
      setForm({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        projectType: "consultation",
      });
    } catch {
      toast.error("Send failed — please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      index="08"
      label="Get in touch"
      meta={`Replies within 24h · ${site.timezone}`}
      full
    >
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
        toastClassName="!bg-ink-2 !border !border-line-strong !font-mono !text-xs"
      />

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Heading + contact rail */}
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="font-display text-display-lg tracking-tightest text-cream">
              Let's build<br />
              <span className="display-italic">something quiet.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-smoke">
              I take on a small number of engagements each year. If you have a
              problem worth a careful look — a system to replace, a product
              to scope, an interface to rebuild — I'd like to hear about it.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-line">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center justify-between gap-4 bg-ink-1 px-6 py-5 transition-colors hover:bg-ink-2"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-tracked text-ash">
                    Email
                  </div>
                  <div className="mt-1 font-display text-lg tracking-tighter text-cream">
                    {site.email}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-ash transition-all duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="group flex items-center justify-between gap-4 bg-ink-1 px-6 py-5 transition-colors hover:bg-ink-2"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-tracked text-ash">
                    Phone
                  </div>
                  <div className="mt-1 font-display text-lg tracking-tighter text-cream">
                    {site.phone}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-ash transition-all duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
              <a
                href={site.calendar}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 bg-ink-1 px-6 py-5 transition-colors hover:bg-ink-2"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-tracked text-ash">
                    Calendar
                  </div>
                  <div className="mt-1 font-display text-lg tracking-tighter text-cream">
                    Book a 20-min call
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-ash transition-all duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-tracked text-smoke">
              <a
                href={site.social.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cream"
              >
                GitHub
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cream"
              >
                LinkedIn
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cream"
              >
                Twitter
              </a>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={200} className="lg:col-span-7">
          <form onSubmit={submit} className="space-y-px overflow-hidden rounded-2xl border border-line">
            <Field
              label="Your name"
              required
              value={form.name}
              onChange={update("name")}
              placeholder="First and last"
              autoComplete="name"
            />
            <Field
              label="Email"
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              placeholder="you@company.com"
              autoComplete="email"
            />
            <Field
              label="Company"
              value={form.company}
              onChange={update("company")}
              placeholder="Optional"
              autoComplete="organization"
            />

            <div className="grid gap-px md:grid-cols-2">
              <Field
                label="Subject"
                required
                value={form.subject}
                onChange={update("subject")}
                placeholder="A one-line summary"
              />
              <SelectField
                label="Type"
                value={form.projectType}
                onChange={update("projectType")}
                options={projectTypes}
              />
            </div>

            <FieldArea
              label="The work"
              required
              value={form.message}
              onChange={update("message")}
              placeholder="What are you trying to build, fix or replace?"
            />

            <div className="flex flex-col-reverse items-stretch gap-4 bg-ink-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[10px] uppercase tracking-tracked text-ash">
                I'll reply within 24 hours.
              </p>
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-[12px] uppercase tracking-tracked text-ink-0 transition-colors hover:bg-cream disabled:opacity-50 sm:py-3"
              >
                {sending ? "Sending…" : "Send message"}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

/* ——— Field primitives, scoped to this section ——— */

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block bg-ink-1 px-6 py-5 transition-colors focus-within:bg-ink-2">
      <span className="font-mono text-[10px] uppercase tracking-tracked text-ash">
        {label}
        {rest.required && <span className="text-accent"> *</span>}
      </span>
      <input
        {...rest}
        className="mt-2 block w-full border-0 bg-transparent p-0 font-display text-lg tracking-tighter text-cream placeholder:text-ash focus:outline-none focus:ring-0"
      />
    </label>
  );
}

function FieldArea({
  label,
  ...rest
}: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block bg-ink-1 px-6 py-5 transition-colors focus-within:bg-ink-2">
      <span className="font-mono text-[10px] uppercase tracking-tracked text-ash">
        {label}
        {rest.required && <span className="text-accent"> *</span>}
      </span>
      <textarea
        rows={6}
        {...rest}
        className="mt-2 block w-full resize-none border-0 bg-transparent p-0 font-sans text-base leading-relaxed text-cream placeholder:text-ash focus:outline-none focus:ring-0"
      />
    </label>
  );
}

function SelectField({
  label,
  options,
  ...rest
}: {
  label: string;
  options: { id: string; label: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block bg-ink-1 px-6 py-5 transition-colors focus-within:bg-ink-2">
      <span className="font-mono text-[10px] uppercase tracking-tracked text-ash">
        {label}
      </span>
      <select
        {...rest}
        className="mt-2 block w-full appearance-none border-0 bg-transparent p-0 font-display text-lg tracking-tighter text-cream focus:outline-none focus:ring-0"
      >
        {options.map((o) => (
          <option key={o.id} value={o.id} className="bg-ink-2 text-cream">
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
