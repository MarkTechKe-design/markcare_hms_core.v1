import * as React from "react";
import { cn } from "@/lib/utils";

interface MarketingScreenshotFrameProps extends React.ComponentProps<"div"> {
  title?: string;
}

export function MarketingScreenshotFrame({
  className,
  title = "MarkCare HMS — Core Workspace",
  children,
  ...props
}: MarketingScreenshotFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xl ring-1 ring-black/5 dark:ring-white/10",
        className
      )}
      {...props}
    >
      <div className="flex h-10 items-center justify-between border-b border-border/70 bg-muted/60 px-4">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <div className="size-2.5 rounded-full bg-rose-500/80" />
          <div className="size-2.5 rounded-full bg-amber-500/80" />
          <div className="size-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="truncate text-xs font-medium text-muted-foreground">
          {title}
        </div>
        <div className="w-10" aria-hidden="true" />
      </div>
      <div className="relative bg-muted/20">
        {children}
      </div>
    </div>
  );
}
