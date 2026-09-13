import * as React from "react";
import Image from "next/image";
import { Laptop } from "lucide-react";
import { cn } from "@/lib/utils";

interface MarketingScreenshotFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  caption?: string;
  aspectRatio?: "16/10" | "16/9" | "auto";
  priority?: boolean;
}

export function MarketingScreenshotFrame({
  src,
  alt = "MarkCare HMS Application Workspace",
  caption = "MarkCare HMS · Clinical Operations Workspace",
  aspectRatio = "16/10",
  priority = false,
  className,
  children,
  ...props
}: MarketingScreenshotFrameProps) {
  return (
    <div
      className={cn(
        "group relative mx-auto w-full max-w-6xl rounded-2xl sm:rounded-3xl border border-border/90 bg-card p-2 sm:p-3 shadow-xl shadow-black/5 dark:shadow-black/40 backdrop-blur-xs",
        className
      )}
      {...props}
    >
      {/* Chrome Window Header */}
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-4 py-2.5 rounded-t-xl sm:rounded-t-2xl">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </div>
        <div className="text-[11px] font-medium text-muted-foreground truncate max-w-xs sm:max-w-md">
          {caption}
        </div>
        <div className="size-3 text-muted-foreground/40" aria-hidden="true" />
      </div>

      {/* Frame Viewport */}
      <div
        className={cn(
          "relative overflow-hidden rounded-b-xl sm:rounded-b-2xl bg-background/50 flex items-center justify-center",
          aspectRatio === "16/10" && "aspect-16/10",
          aspectRatio === "16/9" && "aspect-video"
        )}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-top"
          />
        ) : children ? (
          children
        ) : (
          /* Neutral Presentation Placeholder */
          <div className="flex flex-col items-center justify-center p-12 text-center select-none">
            <div className="size-14 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-4 shadow-inner">
              <Laptop className="size-7" aria-hidden="true" />
            </div>
            <h4 className="text-base font-bold text-foreground">MarkCare System Interface</h4>
            <p className="mt-1 text-xs text-muted-foreground max-w-sm">
              Presentation frame reserved for authentic application captures.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
