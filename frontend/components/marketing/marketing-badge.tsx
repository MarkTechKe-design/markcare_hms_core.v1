import * as React from "react";

export type MarketingBadgeVariant =
  | "neutral"
  | "clinical"
  | "operational"
  | "security"
  | "available"
  | "ready"
  | "verified"
  | (string & {});

export interface MarketingBadgeProps {
  children: React.ReactNode;
  variant?: MarketingBadgeVariant;
  className?: string;
}

export function MarketingBadge({
  children,
  variant = "neutral",
  className = "",
}: MarketingBadgeProps) {
  const variantStyles: Record<string, string> = {
    neutral: "bg-muted text-muted-foreground border-border",
    clinical: "bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20",
    operational: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
    security: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
    available: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
    ready: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20",
    verified: "bg-primary/10 text-primary border-primary/20",
  };

  const selectedStyle = variantStyles[variant] || variantStyles.neutral;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${selectedStyle} ${className}`}
    >
      {children}
    </span>
  );
}
