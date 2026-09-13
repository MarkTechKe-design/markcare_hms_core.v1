import * as React from "react";
import { cn } from "@/lib/utils";
import { MarketingBadge } from "./marketing-badge";

export interface MarketingSectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export function MarketingSectionHeading({
  badge,
  eyebrow,
  title,
  description,
  align = "center",
  className,
  ...props
}: MarketingSectionHeadingProps) {
  const displayBadge = badge || eyebrow;

  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-3xl",
        className
      )}
      {...props}
    >
      {displayBadge && <MarketingBadge className="mb-4">{displayBadge}</MarketingBadge>}
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground text-balance leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
