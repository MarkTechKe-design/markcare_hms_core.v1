"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type AppLogoProps = {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
};

export function AppLogo({
  className,
  iconOnly = false,
  light = false,
}: AppLogoProps) {
  const textMainClass = light ? "text-white" : "text-foreground";
  const textSubClass = light ? "text-white/70" : "text-muted-foreground";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-2xl select-none font-bold",
          iconOnly ? "h-12 w-12 text-base" : "h-14 w-14 text-lg",
          light ? "bg-white/10 text-white border border-white/20" : "bg-primary text-primary-foreground",
        )}
        aria-hidden="true"
      >
        MC
      </div>

      {!iconOnly && (
        <div className="min-w-0">
          <p className={cn("truncate text-lg font-bold tracking-tight leading-tight", textMainClass)}>
            MarkCare
          </p>
          <p className={cn("truncate text-xs uppercase tracking-[0.2em] font-semibold", textSubClass)}>
            HMS
          </p>
        </div>
      )}
    </div>
  );
}
