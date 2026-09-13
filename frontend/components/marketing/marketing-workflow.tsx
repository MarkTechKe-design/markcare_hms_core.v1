import * as React from "react";
import { marketingContent } from "@/content/marketing-content";

export function MarketingWorkflow() {
  const { introduction, onboarding } = marketingContent;

  return (
    <section className="border-b border-border/80 bg-card/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20">
            {introduction.badge}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-4">
            {introduction.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {introduction.description}
          </p>
        </div>

        <div className="mt-12">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{onboarding.badge}</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mt-2">{onboarding.headline}</h3>
            <p className="text-sm text-muted-foreground mt-1">{onboarding.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onboarding.steps.map((item) => (
              <div key={item.step} className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs relative">
                <span className="text-xs font-mono font-bold text-primary block mb-2">
                  {item.step}
                </span>
                <h4 className="text-base font-bold text-foreground mb-1.5">{item.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
