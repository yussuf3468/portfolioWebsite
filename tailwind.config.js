/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      colors: {
        "neon-cyan": "#00F0FF",
        "neon-purple": "#B026FF",
        "neon-pink": "#FF006E",
        "neon-green": "#00FF87",
        dark: {
          900: "#0A0A0F",
          800: "#13131A",
          700: "#1A1A24",
          600: "#252530",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        glow: "glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        scan: "scan 8s linear infinite",
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 240, 255, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(176, 38, 255, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 30px rgba(0, 240, 255, 0.5)",
        "neon-purple": "0 0 30px rgba(176, 38, 255, 0.5)",
        "neon-pink": "0 0 30px rgba(255, 0, 110, 0.5)",
        "glow-strong": "0 0 60px rgba(0, 240, 255, 0.3)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "50px 50px",
      },
    },
  },
  plugins: [],
};
