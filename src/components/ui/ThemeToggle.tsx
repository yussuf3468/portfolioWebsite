import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../../lib/cn";

type Theme = "light" | "dark";

const THEME_COLOR: Record<Theme, string> = {
  light: "#F4F2EE",
  dark: "#0B0A09",
};

const systemDark = () => window.matchMedia("(prefers-color-scheme: dark)");

/** The theme on screen: an explicit choice (data-theme, set before paint by
 *  the inline script in index.html) or else the OS preference. */
function activeTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return systemDark().matches ? "dark" : "light";
}

function syncThemeColor(theme: Theme) {
  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((m) => (m.content = THEME_COLOR[theme]));
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(activeTheme());
    if (document.documentElement.dataset.theme) syncThemeColor(activeTheme());
    const mq = systemDark();
    const onChange = () => setTheme(activeTheme());
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable — the choice still applies for this visit */
    }
    syncThemeColor(next);
    setTheme(next);
  };

  const label = `Switch to ${theme === "dark" ? "light" : "dark"} theme`;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-cream transition-colors hover:border-accent hover:text-accent",
        className
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" strokeWidth={1.75} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.75} />
      )}
    </button>
  );
}
