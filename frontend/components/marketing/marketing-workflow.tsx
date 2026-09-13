import * as React from "react";
import { marketingContent } from "@/content/marketing-content";

export function MarketingWorkflow() {
  const { introduction, onboarding } = marketingContent;

  return (
    <div className="bg-muted/30 border-y border-border/80 py-20 sm:py-28" id="continuum">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Continuum Intro */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 mb-3">
            {introduction.tag}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance mb-4">
            {introduction.headline}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance">
            {introduction.description}
          </p>
        </div>

        {/* 3-Step Onboarding (Image 6 Inspiration) */}
        <div className="mt-12" id="onboarding">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{onboarding.tag}</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">{onboarding.headline}</h3>
            <p className="text-sm text-muted-foreground mt-2">{onboarding.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {onboarding.steps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs relative">
                <div className="flex size-10 items-center justify-center rounded-full border-2 border-primary text-primary font-bold text-sm mb-4">
                  {item.step}
                </div>
                <h4 className="text-base font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
