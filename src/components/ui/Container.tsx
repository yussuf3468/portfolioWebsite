import { ReactNode } from "react";
import { cn } from "../../lib/cn";

export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <As className={cn("container-editorial", className)}>{children}</As>
  );
}
