import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope,
  Users,
  Pill,
  FlaskConical,
  CreditCard,
  Calendar,
  Building2,
  Layers,
  ArrowRight,
  ShieldCheck,
  Activity,
} from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  MarketingBadge,
  MarketingSection,
  MarketingScreenshotFrame,
  MarketingCtaBanner,
} from "@/components/marketing";

export const metadata: Metadata = {
  title: "MarkCare HMS System Modules",
  description:
    "Explore the verified module ecosystem of MarkCare HMS: Clinical EMR, Inpatient Wards, Pharmacy FEFO, Diagnostic Laboratory, and Billing.",
};

const moduleCategories = [
  {
    category: "Core Clinical Care",
    badge: "Verified Engine" as const,
    modules: [
      {
        icon: Stethoscope,
        title: "Clinical EMR & Encounter Notes",
        href: "/modules/clinical-emr",
        status: "available" as const,
        ctaLabel: "Explore Module Details",
        desc: "Structured clinical encounter notes, vital signs monitoring, diagnosis recording, and longitudinal patient medical histories.",
      },
      {
        icon: Users,
        title: "Inpatient Wards & Bed Census",
        href: "/modules/inpatient",
        status: "available" as const,
        ctaLabel: "Explore Module Details",
        desc: "Ward bed tracking, admission orders, nursing round notes, and inpatient medication administration tracking.",
      },
      {
        icon: Calendar,
        title: "Appointments & Triage Queue",
        href: "/request-demo",
        status: "available" as const,
        ctaLabel: "Request Queue Walkthrough",
        desc: "Vital signs capture, clinical urgency triage categorization, and synchronized department queue sequencing.",
      },
    ],
  },
  {
    category: "Ancillary & Diagnostic Services",
    badge: "Verified Engine" as const,
    modules: [
      {
        icon: Pill,
        title: "Pharmacy FEFO Dispensing",
        href: "/modules/pharmacy",
        status: "available" as const,
        ctaLabel: "Explore Module Details",
        desc: "Prescription fulfillment linked directly to doctor encounter notes, expiry-aware FEFO inventory deduction, and batch tracking.",
      },
      {
        icon: FlaskConical,
        title: "Diagnostic Laboratory",
        href: "/modules/laboratory",
        status: "available" as const,
        ctaLabel: "Explore Module Details",
        desc: "Specimen tracking, diagnostic investigation queues, and verified electronic result publication into the EMR.",
      },
      {
        icon: Activity,
        title: "Radiology & Imaging Requisitions",
        href: "/request-demo",
        status: "ready" as const,
        ctaLabel: "Review Roadmap Scope",
        desc: "Imaging examination requisition workflows and radiological report recording linked to the patient file.",
      },
    ],
  },
  {
    category: "Financial & Revenue Operations",
    badge: "Verified Engine" as const,
    modules: [
      {
        icon: CreditCard,
        title: "Billing & Cashier Desks",
        href: "/modules/billing",
        status: "available" as const,
        ctaLabel: "Explore Module Details",
        desc: "Encounter fee aggregation across triage, consultations, lab, and pharmacy with itemized receipt issuance.",
      },
      {
        icon: Layers,
        title: "Tariffs & Price Catalogs",
        href: "/request-demo",
        status: "available" as const,
        ctaLabel: "Consult on Tariff Setup",
        desc: "Standardized fee schedules for self-pay patients, corporate insurance schemes, and national health tiers.",
      },
    ],
  },
  {
    category: "Governance & Ecosystem Integrations",
    badge: "Architecture" as const,
    modules: [
      {
        icon: Building2,
        title: "Multi-Branch Governance",
        href: "/platform",
        status: "available" as const,
        ctaLabel: "Review Platform Topology",
        desc: "Centralized policy coordination across satellite clinics, dispensaries, and regional referral hospitals.",
      },
      {
        icon: ShieldCheck,
        title: "Role-Based Staff Permissions",
        href: "/security",
        status: "available" as const,
        ctaLabel: "Review Security Architecture",
        desc: "Department-scoped staff role assignments and comprehensive audit logs of all clinical and billing actions.",
      },
    ],
  },
];

export default function ModulesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <MarketingBadge className="mb-4">System Ecosystem</MarketingBadge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              Integrated modules for every hospital department.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Every module in MarkCare connects to a unified operational core, ensuring that clinical orders, inventory status, and billing balances synchronize without duplicate data entry.
            </p>
          </MarketingContainer>
        </section>

        {/* Featured Spotlight: Clinical EMR & FEFO Pharmacy */}
        <MarketingSection>
          <MarketingContainer>
            <div className="rounded-3xl border border-primary/30 bg-card p-6 sm:p-10 shadow-xs mb-16">
              <div className="max-w-3xl mb-8">
                <MarketingBadge className="mb-3">Core Integrated Flow</MarketingBadge>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  The Clinical-to-Dispense Integration
                </h2>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  The primary driver of hospital operational efficiency is the direct link between physician consultation notes and pharmacy fulfillment. MarkCare eliminates manual paper slips and reduces medication stock drift.
                </p>
              </div>

              <MarketingScreenshotFrame
                caption="Clinical EMR Consultation & Direct Pharmacy Queue Transmission"
                aspectRatio="16/10"
              />
            </div>

            {/* Categorized Module Grid */}
            <div className="space-y-16">
              {moduleCategories.map((group) => (
                <div key={group.category}>
                  <div className="border-b border-border pb-3 mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-bold tracking-tight text-foreground">{group.category}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.modules.map((m) => (
                      <div
                        key={m.title}
                        className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                              <m.icon className="size-5" aria-hidden="true" />
                            </div>
                            <MarketingBadge variant={m.status}>
                              {m.status === "available" ? "Verified" : "Foundation"}
                            </MarketingBadge>
                          </div>
                          <h4 className="text-base font-bold text-foreground mb-1.5">{m.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                        </div>

                        <div className="mt-5 pt-3 border-t border-border/60">
                          <Link
                            href={m.href}
                            className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                          >
                            {m.ctaLabel}
                            <ArrowRight className="ml-1 size-3.5" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* CTA Banner */}
        <MarketingCtaBanner
          headline="Evaluate the complete MarkCare module suite"
          description="Speak with our implementation team to discuss how each module aligns with your hospital's operational departments."
          primaryCta={{
            label: "Request a Demonstration",
            href: "/request-demo",
          }}
          secondaryCta={{
            label: "Explore Solutions",
            href: "/solutions",
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}
