import * as React from "react";
import { cn } from "@/lib/utils";

export interface MarketingBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "primary" | "subtle" | "outline" | "available" | "ready";
}

export function MarketingBadge({
  children,
  className,
  variant = "primary",
  ...props
}: MarketingBadgeProps) {
  const variantStyles: Record<NonNullable<MarketingBadgeProps["variant"]>, string> = {
    primary: "bg-primary/10 text-primary border-primary/20",
    available: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    ready: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    subtle: "bg-muted text-muted-foreground border-border",
    outline: "bg-transparent text-foreground border-border",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border transition-colors select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
