import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Stethoscope, Pill, CreditCard } from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  MarketingBadge,
  MarketingSection,
  MarketingSectionHeading,
  MarketingCard,
  MarketingScreenshotFrame,
  MarketingCtaBanner,
} from "@/components/marketing";
import { MarketingCapabilityStrip } from "@/components/marketing/marketing-capability-strip";
import { Button } from "@/components/ui/button";
import { marketingContent } from "@/content/marketing-content";

export const metadata: Metadata = {
  title: "Integrated Healthcare Operations Platform",
  description:
    "MarkCare HMS connects patient admissions, doctor encounters, diagnostic laboratory orders, pharmacy FEFO dispensing, and hospital billing in one unified workspace.",
};

export default function HomePage() {
  const { hero } = marketingContent;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative -mt-16 pt-32 sm:pt-40 pb-24 sm:pb-32 overflow-hidden min-h-[75vh] flex flex-col justify-center">
          {/* Background Media Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {hero.media.backgroundVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={hero.media.backgroundPoster}
                className="h-full w-full object-cover object-center transition-opacity duration-1000 motion-reduce:hidden"
              >
                <source src={hero.media.backgroundVideo} type="video/mp4" />
              </video>
            ) : null}

            {/* Poster fallback or ambient background */}
            <div
              className={`absolute inset-0 bg-cover bg-center ${
                hero.media.backgroundVideo ? "hidden motion-reduce:block" : "block"
              }`}
              style={{
                backgroundImage: hero.media.backgroundImage
                  ? `url(${hero.media.backgroundImage})`
                  : hero.media.backgroundPoster
                  ? `url(${hero.media.backgroundPoster})`
                  : undefined,
              }}
            />

            {/* Contrast Overlays protecting text legibility */}
            <div className="absolute inset-0 bg-slate-950/75 dark:bg-slate-950/85 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
          </div>

          <MarketingContainer className="relative z-10 text-center">
            <MarketingBadge className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-xs">
              {hero.badge}
            </MarketingBadge>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto leading-tight text-white drop-shadow-xs">
              {hero.headline}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto text-balance leading-relaxed drop-shadow-xs">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground font-semibold shadow-md hover:bg-primary/90"
              >
                <Link href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-xs"
              >
                <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>

        {/* 2. Floating Capability Strip */}
        <div className="-mt-12 sm:-mt-14 relative z-20 mb-16">
          <MarketingCapabilityStrip />
        </div>

        {/* 3. Product Visual Section */}
        <MarketingSection className="pt-0">
          <MarketingContainer>
            <MarketingSectionHeading
              badge="System Workspace"
              title="A unified operational window into your hospital"
              description="Designed to coordinate activity between triage desks, consultation rooms, diagnostic laboratories, the pharmacy counter, and the cashier desk."
            />
            <MarketingScreenshotFrame
              src={hero.media.productScreenshot}
              caption="MarkCare HMS · Multi-Department Operational Workspace"
            />
          </MarketingContainer>
        </MarketingSection>

        {/* 4. Connected Care Flow */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              badge="Connected Care Flow"
              title="Coordinating the complete patient encounter"
              description="Structuring records and order movement as care is delivered across hospital stations."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MarketingCard>
                <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Stethoscope className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">1. Clinical Consultation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Physicians document encounter notes, record vital signs, and issue diagnostic lab requisitions or prescription orders directly within the patient encounter file.
                </p>
              </MarketingCard>

              <MarketingCard>
                <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Pill className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">2. Pharmacy FEFO Dispensing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prescription orders appear in the dispensary queue. Dispensers fulfill orders supported by First-Expiry-First-Out stock batch selection.
                </p>
              </MarketingCard>

              <MarketingCard>
                <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <CreditCard className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">3. Invoicing & Settlement</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Consultation fees, diagnostic investigation costs, and dispensed medications aggregate to the patient encounter invoice for self-pay or insurance settlement.
                </p>
              </MarketingCard>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* 5. CTA Banner */}
        <MarketingCtaBanner
          headline="Experience MarkCare in your healthcare facility"
          description="Speak with our implementation team to review your hospital's operational workflow requirements or arrange a demonstration."
          primaryCta={{
            label: "Request a Demonstration",
            href: "/request-demo",
          }}
          secondaryCta={{
            label: "Explore Modules",
            href: "/modules",
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}
