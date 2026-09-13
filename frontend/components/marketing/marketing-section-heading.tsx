import * as React from "react";
import { cn } from "@/lib/utils";

interface MarketingSectionHeadingProps extends React.ComponentProps<"div"> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function MarketingSectionHeading({
  className,
  eyebrow,
  title,
  description,
  align = "center",
  ...props
}: MarketingSectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "mx-auto max-w-3xl text-center items-center" : "max-w-2xl text-left items-start",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-balance leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
