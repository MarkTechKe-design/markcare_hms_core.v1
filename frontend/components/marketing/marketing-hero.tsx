import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { marketingContent } from "@/content/marketing-content";

export function MarketingHero() {
  const { hero } = marketingContent;

  return (
    <div className="relative overflow-hidden bg-[#041326] text-white py-20 sm:py-28 lg:py-32">
      {/* Background Photography with Controlled Multi-Stop Dark Contrast Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2400&q=80')",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0 bg-gradient-to-r from-[#041326] via-[#041326]/90 to-[#041326]/60"
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300 mb-6 select-none">
            {hero.tagline}
          </div>

          {/* Editorial Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12] mb-6 text-balance">
            {hero.headline}
          </h1>

          {/* Subtitle Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 text-balance">
            {hero.description}
          </p>

          {/* 4-Item Feature Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-sm text-slate-200">
            {hero.checklist.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-sky-400 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Alive Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="group bg-primary text-primary-foreground font-semibold px-6 shadow-lg shadow-primary/25 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="border-slate-700 bg-slate-900/40 text-slate-200 backdrop-blur-xs hover:bg-slate-800/80 hover:text-white active:scale-[0.98] transition-all"
            >
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
