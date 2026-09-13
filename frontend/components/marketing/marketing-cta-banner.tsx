import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { marketingContent } from "@/content/marketing-content";

export interface MarketingCtaBannerProps {
  headline?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function MarketingCtaBanner({
  headline,
  description,
  primaryCta,
  secondaryCta,
  className = "",
}: MarketingCtaBannerProps = {}) {
  const defaultCta = marketingContent.ctaBanner;

  const currentHeadline = headline ?? defaultCta.headline;
  const currentDescription = description ?? defaultCta.description;
  const currentPrimary = primaryCta ?? defaultCta.primaryCta;
  const currentSecondary = secondaryCta ?? defaultCta.secondaryCta;

  return (
    <div className={`py-16 sm:py-24 ${className}`} id="request-demo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0284c7] px-6 py-16 sm:px-12 sm:py-20 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl mb-4 text-balance">
              {currentHeadline}
            </h2>
            <p className="text-base sm:text-lg text-sky-100 leading-relaxed mb-8 text-balance">
              {currentDescription}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-white text-sky-900 font-bold px-7 shadow-lg hover:bg-slate-100 active:scale-[0.98] transition-all"
              >
                <Link href={currentPrimary.href}>
                  {currentPrimary.label}
                  <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>

              {currentSecondary && (
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="border-white/40 bg-sky-800/40 text-white backdrop-blur-xs hover:bg-sky-800/80 active:scale-[0.98] transition-all"
                >
                  <Link href={currentSecondary.href}>{currentSecondary.label}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
