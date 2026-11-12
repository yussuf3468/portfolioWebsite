/** Theme-aware colour: channels live in CSS variables (see src/index.css) so
 *  the same utilities render Nidaam's light and dark palettes, and Tailwind's
 *  `/alpha` modifiers keep working. */
const themed = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces. `ink` is the page; 1 is a raised card; 2–4 step toward
        // the foreground; 0 steps away from it.
        ink: {
          DEFAULT: themed("ink"),
          0: themed("ink-0"),
          1: themed("ink-1"),
          2: themed("ink-2"),
          3: themed("ink-3"),
          4: themed("ink-4"),
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },
        // Foreground ramp: cream (primary text) → smoke → ash → graphite.
        cream: themed("cream"),
        smoke: themed("smoke"),
        ash: themed("ash"),
        graphite: themed("graphite"),
        // Brand-ink: Nidaam azure tuned per theme so it stays legible as
        // text, links and borders on both paper and ink.
        accent: themed("accent"),
        // Nidaam Solutions brand. Fixed across themes — azure fills always
        // carry `brand-ink` text, as in the on-blue logo lockup.
        brand: {
          DEFAULT: "#00AEFF",
          bright: "#4DC7FF",
          deep: "#0068A8",
          ink: "#111111",
        },
      },
      fontFamily: {
        // Matches nidaam.co.ke: Manrope headings, Outfit body, JetBrains Mono.
        display: [
          "Manrope",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        sans: [
          "Outfit",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      fontSize: {
        "display-xl": [
          "clamp(3.25rem, 9.5vw, 8.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.045em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(2.5rem, 6.5vw, 6rem)",
          { lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(2rem, 4.5vw, 4rem)",
          { lineHeight: "1.04", letterSpacing: "-0.035em", fontWeight: "700" },
        ],
        eyebrow: [
          "0.72rem",
          { lineHeight: "1", letterSpacing: "0.18em", fontWeight: "500" },
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.035em",
        tracked: "0.18em",
      },
      maxWidth: {
        prose: "62ch",
        editorial: "1680px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        soft: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 80s linear infinite",
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
