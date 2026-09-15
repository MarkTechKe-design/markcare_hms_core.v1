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
  const colorStyles: Record<string, string> = {
    neutral: "text-primary",
    clinical: "text-teal-600 dark:text-teal-400",
    operational: "text-blue-600 dark:text-blue-400",
    security: "text-emerald-600 dark:text-emerald-400",
    available: "text-emerald-600 dark:text-emerald-400",
    ready: "text-cyan-600 dark:text-cyan-400",
    verified: "text-primary",
  };

  const selectedColor = colorStyles[variant] || "text-primary";

  return (
    <span
      className={`inline-block text-sm font-semibold uppercase tracking-wider ${selectedColor} ${className}`}
    >
      {children}
    </span>
  );
}
