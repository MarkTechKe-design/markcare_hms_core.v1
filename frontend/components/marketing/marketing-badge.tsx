import * as React from "react";
import { cn } from "@/lib/utils";

export type MarketingBadgeVariant =
  | "available"
  | "ready"
  | "roadmap"
  | "cloud"
  | "enterprise"
  | "neutral";

interface MarketingBadgeProps extends React.ComponentProps<"span"> {
  variant?: MarketingBadgeVariant;
}

export function MarketingBadge({
  className,
  variant = "neutral",
  children,
  ...props
}: MarketingBadgeProps) {
  const variantStyles: Record<MarketingBadgeVariant, string> = {
    available: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    ready: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
    roadmap: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    cloud: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    enterprise: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20",
    neutral: "bg-muted text-muted-foreground border-border/60",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 text-xs font-medium tracking-tight select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {variant === "available" && <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />}
      {variant === "ready" && <span className="size-1.5 rounded-full bg-sky-500" aria-hidden="true" />}
      {variant === "roadmap" && <span className="size-1.5 rounded-full bg-amber-500" aria-hidden="true" />}
      {children}
    </span>
  );
}
