import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope,
  Pill,
  CreditCard,
  Activity,
  Building2,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Server,
  Network,
  Users,
  Layers,
  ClipboardList,
} from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  MarketingSection,
  MarketingSectionHeading,
  MarketingCtaBanner,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Hospital Solutions by Role & Department",
  description:
    "Explore how MarkCare HMS addresses the operational challenges of medical directors, chief pharmacists, finance officers, laboratory managers, and hospital administrators.",
};

// 1. Stakeholder Perspectives Data
const stakeholderPerspectives = [
  {
    id: "clinical",
    title: "Medical Directors & Clinicians",
    badge: "Clinical Practice & Care Quality",
    icon: Stethoscope,
    problem:
      "Clinicians frequently confront fragmented patient information during busy consultation shifts: illegible handwritten notes, missing prior diagnoses, delays tracking diagnostic findings, and verbal callbacks to verify medication availability. Administrative friction pulls focus away from patient interaction.",
    needs:
      "Rapid access to cumulative patient history, structured encounter assessment, instant diagnostic order dispatch, and clear electronic prescription handoffs without leaving the active consultation screen.",
    solution:
      "Clinical continuity without losing operational context. Physicians record structured vital signs, document ICD-10 diagnoses, and electronically dispatch orders directly to laboratory and pharmacy worklists, keeping the care team synchronized.",
    ctaLabel: "Explore Clinical EMR Specifications",
    ctaHref: "/modules/clinical-emr",
  },
  {
    id: "pharmacy",
    title: "Chief Pharmacists & Pharmacy Teams",
    badge: "Pharmacy Inventory & Dispensing",
    icon: Pill,
    problem:
      "Dispensary teams struggle with stock drift, unexpected near-expiry write-offs, manual ledger updates, and prescription transcription errors. Managing medication stock across central stores and satellite branch dispensaries creates persistent inventory uncertainty.",
    needs:
      "Real-time visibility into batch balances, systematic First-Expired, First-Out (FEFO) dispensing guidance, low-stock threshold alerts, and automatic inventory decrements tied directly to verified doctor prescriptions.",
    solution:
      "Batch-level First-Expired, First-Out (FEFO) dispensing guidance with near-expiry alerts and real-time inventory tracking. Prescriptions queue directly at the dispensary counter, supporting accountable medication fulfillment and stock visibility.",
    ctaLabel: "Explore Pharmacy & FEFO Specifications",
    ctaHref: "/modules/pharmacy",
  },
  {
    id: "finance",
    title: "Finance Officers & Cashier Supervisors",
    badge: "Revenue Integrity & Folio Billing",
    icon: CreditCard,
    problem:
      "Hospitals lose visibility of unbilled diagnostic investigations and uncollected medication charges when services are delivered on manual chits before payment is posted. Cashiers struggle to reconcile delayed discharge folios and manage multi-payer splits across cash, mobile money, and insurance schemes.",
    needs:
      "Synchronous charge capture that consolidates billable services onto an itemized patient folio, flexible split-settlement workflows, cryptographic receipt verification, and transparent cashier shift reconciliation.",
    solution:
      "Automated encounter-to-folio aggregation designed to pull clinical consultations, laboratory orders, and dispensed medications into a centralized ledger for clear receipting, split settlement, and systematic reconciliation.",
    ctaLabel: "Explore Billing & Cashier Specifications",
    ctaHref: "/modules/billing",
  },
  {
    id: "laboratory",
    title: "Laboratory Managers & Diagnostic Teams",
    badge: "Diagnostic Requisitions & Worklists",
    icon: Activity,
    problem:
      "Diagnostic benches face specimen misidentification, paper requisition backlogs, missing clinical indications, and constant phone callbacks inquiring about pending test results. Technologists spend time chasing administrative details rather than processing critical investigations.",
    needs:
      "Specimen accessioning with unique tracking identifiers, organized departmental worklists, standardized multi-parameter result entry, and direct validation sign-off published to the patient chart.",
    solution:
      "Structured diagnostic requisition worklists and validated result entry. Specimen accession logs track orders from collection through analysis, publishing validated findings directly to the ordering clinician's encounter record.",
    ctaLabel: "Explore Laboratory Specifications",
    ctaHref: "/modules/laboratory",
  },
  {
    id: "administration",
    title: "Hospital Administrators, CEOs & Group Directors",
    badge: "Operations & Institutional Governance",
    icon: Building2,
    problem:
      "Healthcare executives require operational oversight across clinics, wards, and branch locations without micromanaging daily shifts. Fragmented paper registers create blind spots in occupancy, revenue, stock drift, and staff accountability across facilities.",
    needs:
      "Location-aware queue monitoring, central control over master formularies and service tariffs, strict role-based access scoping, and immutable audit trails across every facility.",
    solution:
      "Central administrative governance paired with location-aware branch scoping. Executives maintain unified policies and tariff schedules while providing physical branches with isolated operational queues, local inventory, and accountable audit logging.",
    ctaLabel: "Review Multi-Location Governance & Hierarchy",
    ctaHref: "/facilities",
    secondaryCtaLabel: "Inspect System Architecture",
    secondaryCtaHref: "/platform",
  },
];

// 2. Coordination Tenets Data
const coordinationTenets = [
  {
    title: "Unified Patient Identity",
    desc: "Intake details, demographics, and active encounter records remain consistent across consultation rooms, diagnostic benches, dispensaries, and cashier counters.",
    icon: Users,
  },
  {
    title: "Synchronous Order Routing",
    desc: "Clinical requisitions immediately populate the receiving department's active queue without requiring physical paper transit or verbal callbacks.",
    icon: Network,
  },
  {
    title: "Consolidated Folio Accounting",
    desc: "Every billable clinical or ancillary event logs directly to the encounter folio, supporting systematic reconciliation and reducing unbilled hospital services.",
    icon: FileCheck,
  },
];

// 3. Canonical Module Hand-Off Directory Data
const canonicalModuleLinks = [
  {
    title: "Clinical Consultation & EMR",
    scope: "Physicians & Medical Staff",
    desc: "Structured encounter notes, vitals monitoring, diagnosis recording, and cumulative medical history.",
    href: "/modules/clinical-emr",
    icon: Stethoscope,
  },
  {
    title: "Pharmacy Inventory & FEFO",
    scope: "Dispensary & Store Teams",
    desc: "Batch-level stock tracking, expiry date alerts, FEFO dispensing, and multi-location transfers.",
    href: "/modules/pharmacy",
    icon: Pill,
  },
  {
    title: "Diagnostic Laboratory",
    scope: "Technologists & Pathologists",
    desc: "Specimen accessioning, diagnostic worklists, parameter-level result entry, and validation sign-off.",
    href: "/modules/laboratory",
    icon: Activity,
  },
  {
    title: "Billing & Cashier Folios",
    scope: "Finance Officers & Cashiers",
    desc: "Encounter-to-folio fee aggregation, split payments, tariff schedules, and receipt generation.",
    href: "/modules/billing",
    icon: CreditCard,
  },
  {
    title: "Inpatient Wards & Bed Census",
    scope: "Nursing Staff & Ward In-Charge",
    desc: "Interactive ward bed occupancy, admission orders, nursing notes, and daily bed charge logging.",
    href: "/modules/inpatient",
    icon: Layers,
  },
];

// 4. Executive Outcomes Data
const leadershipOutcomes = [
  {
    title: "Clearer Operational Accountability",
    desc: "Every clinical edit, prescription dispensed, and invoice settlement is captured with user, branch, and timestamp metadata to ensure full auditability across all shifts.",
    icon: ShieldCheck,
  },
  {
    title: "Fewer Avoidable Handoffs",
    desc: "Direct electronic order routing helps reduce misplaced paper requisitions, illegible prescriptions, and operational callbacks between clinical stations.",
    icon: ClipboardList,
  },
  {
    title: "Encounter-to-Folio Visibility",
    desc: "Automated folio aggregation supports systematic reconciliation and helps reduce unbilled clinical, laboratory, and pharmaceutical services.",
    icon: FileCheck,
  },
  {
    title: "Consistent Branch Operations",
    desc: "Centralized formulary and tariff governance ensures multi-location hospital networks maintain standardized clinical protocols and price schedules.",
    icon: Server,
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Stakeholder Perspectives &middot; Operational Solutions
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              Healthcare operations, viewed from every critical role.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Different hospital teams experience distinct operational pressures, but those pressures intersect
              around the same patient, encounter, diagnostic, medication, billing, and accountability workflows.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
                <Link href="/modules">
                  Explore MarkCare Modules
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:bg-accent/60 transition-all active:scale-[0.98]">
                <Link href="/platform">See the Platform Architecture</Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>

        {/* Section 2: Stakeholder Introduction */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                Operational Reality
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
                A hospital does not experience software as a list of modules.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-balance">
                A clinician experiences documentation and care continuity. A pharmacist balances inventory stock, expiry
                risks, and dispensing pace. Finance teams confront incomplete charges and delayed folios. Laboratory teams
                manage specimen backlogs and result delivery. Administrators need coordination, accountability, and
                visibility. MarkCare is engineered around where these responsibilities meet.
              </p>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 3: Persona / Stakeholder Sections */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Departmental Lenses"
              title="Operational realities, structured by department."
              description="Explore the specific challenges each hospital team encounters and how MarkCare supports their daily responsibilities."
            />

            <div className="space-y-8">
              {stakeholderPerspectives.map((persona) => {
                const Icon = persona.icon;
                return (
                  <article
                    key={persona.id}
                    className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs mc-card"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 border-b border-border/60">
                      <div className="flex items-start gap-4">
                        <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                          <Icon className="size-5.5" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                            {persona.badge}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                            {persona.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 shrink-0 pt-2 lg:pt-0">
                        <Button asChild size="sm" className="bg-primary text-primary-foreground font-semibold shadow-xs">
                          <Link href={persona.ctaHref}>
                            {persona.ctaLabel}
                            <ArrowRight className="ml-1.5 size-3.5" aria-hidden="true" />
                          </Link>
                        </Button>
                        {persona.secondaryCtaHref && (
                          <Button asChild variant="outline" size="sm" className="hover:bg-accent/60">
                            <Link href={persona.secondaryCtaHref}>
                              {persona.secondaryCtaLabel}
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs sm:text-sm">
                      <div className="space-y-2">
                        <strong className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                          The Operational Problem
                        </strong>
                        <p className="text-muted-foreground leading-relaxed">
                          {persona.problem}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <strong className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                          What The Department Needs
                        </strong>
                        <p className="text-muted-foreground leading-relaxed">
                          {persona.needs}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <strong className="text-xs font-mono font-bold uppercase tracking-wider text-primary block">
                          The MarkCare Response
                        </strong>
                        <p className="text-foreground font-medium leading-relaxed">
                          {persona.solution}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 4: Cross-Functional Problem / Solution Bridge */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                Cross-Departmental Coordination
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
                A single patient encounter crosses departmental boundaries.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-balance">
                Hospital operations cannot succeed as isolated departmental functions. A single outpatient visit or
                inpatient admission relies on dependable communication between triage, clinical consultation, diagnostic
                investigation, pharmacy dispensing, and financial settlement. When software connects these handoffs,
                teams spend less time tracking information and more time focusing on care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coordinationTenets.map((tenet) => {
                const Icon = tenet.icon;
                return (
                  <div
                    key={tenet.title}
                    className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-3 mc-card"
                  >
                    <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="size-4.5" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {tenet.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {tenet.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 5: "From Role to Capability" Hand-Off Directory */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Operational Directory"
              title="See the operational capabilities behind each perspective."
              description="Explore the verified canonical modules engineered to support the daily workflows of each hospital department."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {canonicalModuleLinks.map((mod) => {
                const Icon = mod.icon;
                return (
                  <Link
                    key={mod.href}
                    href={mod.href}
                    className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card mc-card-interactive group hover:border-primary/50 transition-all duration-200"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Icon className="size-4.5" aria-hidden="true" />
                        </div>
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                          {mod.scope}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                        <span>{mod.title}</span>
                        <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                      </h3>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 6: Why This Matters to Leadership */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Executive Impact"
              title="Measurable operational coordination for health system leadership."
              description="MarkCare is designed to support administrative clarity, reduce operational friction, and maintain accountable governance across hospital facilities."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipOutcomes.map((outcome) => {
                const Icon = outcome.icon;
                return (
                  <div
                    key={outcome.title}
                    className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-3 mc-card"
                  >
                    <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="size-4.5" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {outcome.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {outcome.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 7: Canonical CTA Banner */}
        <MarketingCtaBanner
          headline="Evaluate MarkCare for your healthcare organization"
          description="Speak with our implementation team to discuss how MarkCare aligns with your clinical workflows, pharmacy inventory, or financial reconciliation requirements."
          primaryCta={{
            label: "Request a Demonstration",
            href: "/request-demo",
          }}
          secondaryCta={{
            label: "Explore Operational Modules",
            href: "/modules",
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}

