export function cn(
  ...classes: (string | undefined | false | null | Record<string, boolean>)[]
): string {
  return classes
    .flatMap((c) => {
      if (!c) return [];
      if (typeof c === "string") return [c];
      return Object.entries(c)
        .filter(([, on]) => on)
        .map(([k]) => k);
    })
    .join(" ");
}
