import { useEffect, useState } from "react";
import { cn } from "../../lib/cn";

export function StatusChip({
  label = "Available for work",
  timezone = "Africa/Nairobi",
  className,
}: {
  label?: string;
  timezone?: string;
  className?: string;
}) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: timezone,
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, [timezone]);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-line-strong bg-ink-1/60 px-3.5 py-1.5 backdrop-blur",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-tracked text-cream">
        {label}
      </span>
      <span className="h-3 w-px bg-line-strong" />
      <span className="font-mono text-[11px] uppercase tracking-tracked text-smoke">
        Nairobi · {time}
      </span>
    </div>
  );
}
