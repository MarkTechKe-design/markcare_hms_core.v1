import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { marketingContent } from "@/content/marketing-content";
import { MarketingBadge } from "./marketing-badge";

export function MarketingHero() {
  const { hero } = marketingContent;

  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <MarketingBadge className="mb-4">{hero.badge}</MarketingBadge>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto leading-tight text-foreground">
          {hero.headline}
        </h1>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
          {hero.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shadow-xs hover:bg-primary/90">
            <Link href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
