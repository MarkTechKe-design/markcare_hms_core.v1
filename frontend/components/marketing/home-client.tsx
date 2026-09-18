"use client";

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  MarketingBadge,
  MarketingSection,
  MarketingSectionHeading,
  MarketingScreenshotFrame,
  MarketingCtaBanner,
} from "@/components/marketing";
import { MarketingSystemLoop } from "@/components/marketing/marketing-system-loop";
import { MarketingCapabilityStrip } from "@/components/marketing/marketing-capability-strip";
import { Button } from "@/components/ui/button";
import { marketingContent } from "@/content/marketing-content";
import { usePublicSettings } from "@/hooks/use-public-settings";



export function HomeClient() {
  const { hero } = marketingContent;
  const { getSetting } = usePublicSettings();
  const dynamicVideo =
    getSetting("HERO_BACKGROUND_VIDEO") ||
    getSetting("HERO_VIDEO_URL") ||
    hero.media.backgroundVideo ||
    "";
  const dynamicPreview = getSetting("HERO_PRODUCT_PREVIEW");

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative -mt-16 sm:-mt-20 pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden min-h-[75vh] flex flex-col justify-center">
          {/* Background Media Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {dynamicVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={hero.media.backgroundPoster}
                className="h-full w-full object-cover object-center transition-opacity duration-1000 motion-reduce:hidden"
              >
                <source src={dynamicVideo} type="video/mp4" />
              </video>
            ) : null}

            {/* Poster fallback or ambient background */}
            <div
              className={`absolute inset-0 bg-cover bg-center ${
                dynamicVideo ? "hidden motion-reduce:block" : "block"
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
            <div className="absolute inset-0 bg-slate-950/60 dark:bg-slate-950/75" />
            {/* Crisp bottom-edge blend into page body */}
            <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
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
              src={dynamicPreview || hero.media.productScreenshot}
              caption="MarkCare HMS · Multi-Department Operational Workspace"
            />
          </MarketingContainer>
        </MarketingSection>

        {/* 4. Connected Care Flow */}
        {/* 3. The 60-Second Operational Engine */}
      <MarketingSystemLoop />

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