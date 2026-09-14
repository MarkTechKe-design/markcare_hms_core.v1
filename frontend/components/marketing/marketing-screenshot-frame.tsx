import * as React from "react";
import Image from "next/image";
import { Lock } from "lucide-react";

export interface MarketingScreenshotFrameProps {
  title?: string;
  children?: React.ReactNode;
  aspectRatio?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  caption?: string;
  mockUrl?: string;
  className?: string;
}

function resolveScreenshotSrc(title?: string, explicitSrc?: string): string {
  if (explicitSrc) return explicitSrc;
  if (!title) return "/assets/marketing/clinical-emr-workspace.png";

  const lower = title.toLowerCase();
  if (lower.includes("pharmacy") || lower.includes("fefo") || lower.includes("inventory")) {
    return "/assets/marketing/pharmacy-fefo-workspace.png";
  }
  if (lower.includes("lab") || lower.includes("diagnostic") || lower.includes("specimen")) {
    return "/assets/marketing/laboratory-workspace.png";
  }
  if (lower.includes("inpatient") || lower.includes("ward") || lower.includes("bed") || lower.includes("ipd")) {
    return "/assets/marketing/inpatient-ipd-workspace.png";
  }
  if (lower.includes("billing") || lower.includes("cashier") || lower.includes("invoice") || lower.includes("folio")) {
    return "/assets/marketing/billing-cashier-workspace.png";
  }
  if (lower.includes("emr") || lower.includes("consultation") || lower.includes("clinical") || lower.includes("queue")) {
    return "/assets/marketing/clinical-emr-workspace.png";
  }

  return "/assets/marketing/clinical-emr-workspace.png";
}

export function MarketingScreenshotFrame({
  title,
  children,
  aspectRatio = "16/10",
  src,
  alt,
  priority = false,
  caption,
  mockUrl,
  className = "",
}: MarketingScreenshotFrameProps) {
  const resolvedSrc = resolveScreenshotSrc(title, src);
  const displayAlt = alt || title || "MarkCare Production Hospital Workspace";
  const displayUrl =
    mockUrl ||
    (title
      ? `markcare.internal/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`
      : "markcare.internal/clinical/workspace");

  return (
    <figure className={`w-full group ${className}`}>
      <div className="relative rounded-xl border border-border/90 bg-card shadow-md dark:shadow-slate-950/60 overflow-hidden transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg">
        {/* Enterprise Browser Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-muted/70 border-b border-border/80 select-none">
          {/* Subtle Window Controls */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <div className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div className="size-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          </div>

          {/* Clean Enterprise Address Bar */}
          <div className="flex items-center justify-center gap-1.5 px-3 py-1 text-[11px] font-mono text-muted-foreground bg-background/90 rounded-md border border-border/60 max-w-xs sm:max-w-md w-full mx-2 truncate shadow-2xs">
            <Lock className="size-3 text-emerald-600 dark:text-emerald-500 shrink-0" aria-hidden="true" />
            <span className="truncate">{title || displayUrl}</span>
          </div>

          <div className="w-8" aria-hidden="true" />
        </div>

        {/* Display Area with Subtle Scale Transition */}
        <div
          className="relative w-full bg-slate-950/5 dark:bg-slate-900/40 overflow-hidden"
          style={{ aspectRatio }}
        >
          {children ? (
            children
          ) : (
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={resolvedSrc}
                alt={displayAlt}
                fill
                priority={priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
                className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.01]"
              />
            </div>
          )}
        </div>
      </div>

      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
