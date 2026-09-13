import * as React from "react";
import { cn } from "@/lib/utils";

interface MarketingSectionProps extends React.ComponentProps<"section"> {
  background?: "canvas" | "muted" | "card" | "contrast";
  spacing?: "default" | "tight" | "loose";
}

export function MarketingSection({
  className,
  background = "canvas",
  spacing = "default",
  ...props
}: MarketingSectionProps) {
  const bgClass =
    background === "muted"
      ? "bg-muted/40 border-y border-border/40"
      : background === "card"
        ? "bg-card border-y border-border/60"
        : background === "contrast"
          ? "bg-[#062444] text-white border-y border-[#0f3b68]"
          : "bg-transparent";

  const spacingClass =
    spacing === "tight"
      ? "py-12 md:py-16"
      : spacing === "loose"
        ? "py-24 md:py-32"
        : "py-16 md:py-24";

  return (
    <section
      className={cn("relative overflow-hidden", bgClass, spacingClass, className)}
      {...props}
    />
  );
}
