import * as React from "react";
import Image from "next/image";

export interface MarketingScreenshotFrameProps {
  title?: string;
  children?: React.ReactNode;
  aspectRatio?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  caption?: string;
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
  className = "",
}: MarketingScreenshotFrameProps) {
  const resolvedSrc = resolveScreenshotSrc(title, src);
  const displayAlt = alt || title || "MarkCare Production Hospital Workspace";

  return (
    <figure className={`w-full group ${className}`}>
      <div className="relative rounded-2xl border border-border/80 bg-card shadow-sm dark:shadow-slate-950/40 overflow-hidden transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-md">
        {/* Display Area without fake browser chrome */}
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
