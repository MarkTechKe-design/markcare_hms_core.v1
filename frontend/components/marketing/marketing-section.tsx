import * as React from "react";
import { cn } from "@/lib/utils";

export interface MarketingSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "muted" | "subtle";
  background?: string;
  spacing?: string;
}

export function MarketingSection({
  children,
  className,
  variant = "default",
  background,
  spacing,
  ...props
}: MarketingSectionProps) {
  const variantStyles = {
    default: "bg-background",
    muted: "bg-card/40 border-y border-border/60",
    subtle: "bg-gradient-to-b from-card/30 via-background to-background",
  };

  const bgClass = background === "muted" ? variantStyles.muted : (variantStyles[variant] || variantStyles.default);

  return (
    <section
      className={cn(
        spacing === "default" ? "py-16 sm:py-24 lg:py-28" : "py-16 sm:py-20 lg:py-24",
        "relative overflow-hidden",
        bgClass,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
