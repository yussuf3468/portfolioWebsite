/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#06060A",
          0: "#030305",
          1: "#0A0A0F",
          2: "#101016",
          3: "#16161E",
          4: "#1D1D26",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.06)",
          strong: "rgba(255,255,255,0.10)",
        },
        cream: "#F2F0EA",
        bone: "#E8E6DF",
        smoke: "#9A9AA5",
        ash: "#5C5C68",
        graphite: "#3A3A44",
        accent: {
          DEFAULT: "#D7FF3A",
          dim: "#A9CC2E",
          glow: "rgba(215,255,58,0.18)",
        },
        signal: {
          coral: "#FF7849",
          azure: "#7FBEFF",
        },
      },
      fontFamily: {
        display: [
          "Inter Display",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        mono: [
          "JetBrains Mono",
          "Geist Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      fontSize: {
        "display-xl": [
          "clamp(3.5rem, 10vw, 9rem)",
          { lineHeight: "0.92", letterSpacing: "-0.04em", fontWeight: "500" },
        ],
        "display-lg": [
          "clamp(2.75rem, 7vw, 6.5rem)",
          { lineHeight: "0.96", letterSpacing: "-0.035em", fontWeight: "500" },
        ],
        "display-md": [
          "clamp(2rem, 4.5vw, 4rem)",
          { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "500" },
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
        editorial: "1280px",
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
