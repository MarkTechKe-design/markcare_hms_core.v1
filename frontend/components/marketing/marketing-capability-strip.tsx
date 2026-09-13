import * as React from "react";
import { Building2, Pill, FlaskConical, Receipt } from "lucide-react";
import { marketingContent } from "@/content/marketing-content";

const ICONS = [Building2, Pill, FlaskConical, Receipt];

export function MarketingCapabilityStrip() {
  const { capabilityStrip } = marketingContent;

  return (
    <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
      <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-6 shadow-xl shadow-black/5 backdrop-blur-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
          {capabilityStrip.map((item, idx) => {
            const Icon = ICONS[idx];
            return (
              <div key={item.label} className={`flex items-center gap-4 ${idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}>
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
