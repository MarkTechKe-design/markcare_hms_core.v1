import * as React from "react";

export interface MarketingSectionHeadingProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function MarketingSectionHeading({
  eyebrow,
  badge,
  title,
  description,
  align = "center",
  className = "",
}: MarketingSectionHeadingProps) {
  const isCentered = align === "center";
  const tag = badge || eyebrow;

  return (
    <div
      className={`space-y-3 mb-12 md:mb-16 ${
        isCentered ? "text-center mx-auto" : "text-left"
      } max-w-3xl ${className}`}
    >
      {tag && (
        <div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
            {tag}
          </span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
        {title}
      </h2>

      {description && (
        <p
          className={`text-base sm:text-lg text-muted-foreground leading-relaxed text-balance ${
            isCentered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
