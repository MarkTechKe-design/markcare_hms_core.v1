import * as React from "react";
import { cn } from "@/lib/utils";

interface MarketingCardProps extends React.ComponentProps<"div"> {
  hover?: boolean;
}

export function MarketingCard({
  className,
  hover = true,
  ...props
}: MarketingCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border/70 bg-card/80 p-6 text-card-foreground shadow-sm backdrop-blur-xs",
        hover && "transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md",
        className
      )}
      {...props}
    />
  );
}

export function MarketingCardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("flex items-start justify-between gap-4 mb-4", className)} {...props} />;
}

export function MarketingCardTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return <h3 className={cn("text-base sm:text-lg font-semibold tracking-tight text-foreground", className)} {...props} />;
}

export function MarketingCardDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("text-sm text-muted-foreground leading-relaxed", className)} {...props} />;
}
