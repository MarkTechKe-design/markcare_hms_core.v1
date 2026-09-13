import * as React from "react";
import { Building2, Pill, FlaskConical, Receipt, LucideIcon } from "lucide-react";
import { marketingContent } from "@/content/marketing-content";

export interface CapabilityMetric {
  icon: LucideIcon;
  stat: string;
  label: string;
}

interface MarketingCapabilityStripProps {
  items?: CapabilityMetric[];
  className?: string;
}

const DEFAULT_ICONS = [Building2, Pill, FlaskConical, Receipt];

export function MarketingCapabilityStrip({ items, className = "" }: MarketingCapabilityStripProps) {
  const { capabilityStrip } = marketingContent;

  return (
    <div className={`relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 ${className}`}>
      <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xl shadow-black/5 backdrop-blur-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
          {items
            ? items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-4 ${idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
                  >
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground leading-tight">
                        {item.stat}
                      </div>
                      <div className="text-xs text-muted-foreground leading-snug mt-0.5">
                        {item.label}
                      </div>
                    </div>
                  </div>
                );
              })
            : capabilityStrip.map((item, idx) => {
                const Icon = DEFAULT_ICONS[idx];
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-4 ${idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-foreground truncate">{item.label}</div>
                      <div className="text-xs text-muted-foreground leading-snug">{item.description}</div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
