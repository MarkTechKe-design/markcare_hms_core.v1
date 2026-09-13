import * as React from "react";
import { cn } from "@/lib/utils";

export interface MarketingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  featured?: boolean;
  interactive?: boolean;
}

export function MarketingCard({
  children,
  className,
  featured = false,
  interactive = false,
  ...props
}: MarketingCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border bg-card p-6 sm:p-7 shadow-xs",
        featured ? "border-primary/40 bg-card shadow-md shadow-primary/5" : "border-border/80",
        interactive &&
          "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function MarketingCardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4 flex flex-col space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export function MarketingCardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-lg font-bold tracking-tight text-foreground", className)} {...props}>
      {children}
    </h3>
  );
}

export function MarketingCardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-xs sm:text-sm text-muted-foreground leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}
