import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Layers,
  Activity,
  Users,
  FileCheck,
  Stethoscope,
  Pill,
  Database,
  Lock,
  Server,
  Globe,
  Network,
  Cpu,
  Workflow,
  Sparkles,
  Building2,
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
  title: "Engineering Philosophy & Product Horizon | MarkCare HMS",
  description:
    "Explore MarkCare's product philosophy, regional healthcare realities, core engineering principles, verified current capabilities, and transparent product roadmap.",
};

// Section 2: Proof Strip
const proofMetrics = [
  { value: "5 Core Engines", label: "Verified Departmental Workspaces" },
  { value: "Branch-Scoped", label: "Facility-Isolated Queues & Data" },
  { value: "FEFO-Driven", label: "Expiry-Guided Pharmacy Dispensing" },
  { value: "Audit-Logged", label: "Traceable State Transitions" },
];

// Section 5: Capability Status Matrix (Today | Expanding | Horizon)
const coreCapabilities = [
  "Clinical EMR & Encounter Notes",
  "Pharmacy Inventory & FEFO Dispense",
  "Diagnostic Laboratory Worklists",
  "Billing Folio & Cashier Desk",
  "Inpatient Wards & Bed Census",
  "Triage Acuity & Outpatient Queue",
];

const expandingCapabilities = [
  "Mobile Money Framework (M-Pesa / Daraja)",
  "National Health Scheme Staging (SHA)",
  "Fiscal Verification Data Structure (eTIMS)",
  "Multi-Branch Central Formulary Sync",
  "Consolidated Multi-Location Ledgers",
  "Station-Level Operational Metrics",
];

const horizonCapabilities = [
  "Laboratory Analyzer Interfacing (HL7 / ASTM)",
  "Diagnostic Imaging Coordination (DICOM / PACS)",
  "Dedicated Surgical Suite & Anesthesia Logs",
  "Inpatient Maternity & Partograph Tracking",
  "Automated Claims Adjudication Middleware",
  "External Health Information Exchanges (KHIS)",
];

// Section 7: Audience Perspective
const targetAudiences = [
  {
    role: "Medical Directors & Clinicians",
    focus: "Clinical Workflow Continuity",
    desc: "Requires uninterrupted clinical charting, rapid access to longitudinal patient histories, and dependable coordination with laboratory diagnostics and pharmacy dispensing without paperwork delays.",
    icon: Stethoscope,
  },
  {
    role: "Hospital Administrators & CEOs",
    focus: "Operational & Financial Oversight",
    desc: "Requires synchronized visibility across outpatient clinics, inpatient beds, pharmacy inventory valuation, and cashier folios to maintain institutional governance and reduce unbilled services.",
    icon: Building2,
  },
  {
    role: "CIOs & Healthcare IT Managers",
    focus: "Governance & Technical Reliability",
    desc: "Requires granular role-based access control, on-premise LAN deployment resilience during broadband disruptions, structured integration contracts, and tamper-evident audit trails.",
    icon: Server,
  },
  {
    role: "Multi-Location Healthcare Operators",
    focus: "Multi-Branch Governance",
    desc: "Requires central administration over master formularies and service price schedules while ensuring physical branches operate with autonomous patient queues and local inventory stocks.",
    icon: Network,
  },
];

// Section 8: Six Engineering Principles
const engineeringPrinciples = [
  {
    num: "01",
    title: "Clinical Continuity",
    desc: "Software should support continuity across connected care workflows, ensuring diagnostic requisitions, clinical notes, and pharmacy orders flow without manual re-entry.",
    icon: Activity,
  },
  {
    num: "02",
    title: "Practical Usability",
    desc: "Workflows must remain understandable, high-contrast, and fast for frontline clinical and administrative personnel operating under intense shift pressure.",
    icon: Users,
  },
  {
    num: "03",
    title: "Scoped Governance",
    desc: "Access and operational context must strictly follow facility, branch, and role responsibilities to safeguard confidential patient health records.",
    icon: Lock,
  },
  {
    num: "04",
    title: "Auditability",
    desc: "Significant clinical, dispensing, and financial actions must remain traceable through structured audit records capturing actor, timestamp, and state delta.",
    icon: FileCheck,
  },
  {
    num: "05",
    title: "Resilient by Design",
    desc: "Systems should remain practical and dependable during operational disruptions while preserving data integrity, access controls, and security boundaries.",
    icon: ShieldCheck,
  },
  {
    num: "06",
    title: "Modular Growth",
    desc: "The platform must expand sustainably across departmental workspaces without asserting that future roadmap capabilities already exist in production.",
    icon: Layers,
  },
];

// Section 10: Three-Stage Product Horizon
const horizonStages = [
  {
    stage: "Stage 01",
    badge: "Current Production",
    title: "Core Operational Foundation",
    desc: "Five verified departmental modules (Clinical EMR, Pharmacy FEFO, Diagnostic Lab, Billing Folio, Inpatient Census), branch queue isolation, and tamper-evident audit logging.",
    status: "Verified in Codebase",
  },
  {
    stage: "Stage 02",
    badge: "Expanding Gateways",
    title: "Ecosystem Integration Frameworks",
    desc: "Structured data contracts and verification gateways for mobile money payments (M-Pesa), national health scheme staging (SHA), eTIMS receipt structures, and central formulary synchronization.",
    status: "Active Architectural Evolution",
  },
  {
    stage: "Stage 03",
    badge: "Future Roadmap",
    title: "Specialized Clinical Horizons",
    desc: "Laboratory auto-analyzer middleware (HL7 / ASTM), diagnostic imaging coordination (DICOM / PACS), dedicated surgical suite tracking, and specialized inpatient maternity workflows.",
    status: "Planned Engineering Horizon",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Product Philosophy &middot; Engineering Origin
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              Healthcare management, built around the reality of care.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              MarkCare is designed around the connected nature of hospital work &mdash; where clinical documentation,
              diagnostics, pharmacy dispensing, billing, patient movement, and operational governance intersect.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
                <Link href="/modules">
                  Explore Operational Modules
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:bg-accent/60 transition-all active:scale-[0.98]">
                <Link href="/platform">Review Technical Architecture</Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>

        {/* Section 2: Operational Proof Strip */}
        <section className="border-b border-border/80 bg-muted/40 py-8">
          <MarketingContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {proofMetrics.map((item) => (
                <div key={item.value} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </section>

        {/* Section 3: Why MarkCare Exists (The Operational Challenge) */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  The Operational Challenge
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
                  Healthcare is connected. Your software should be too.
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  A hospital is an ecosystem of interdependent professionals. When a patient arrives, their triage status
                  informs physician consultation, doctor orders direct laboratory investigations and pharmacy dispensing,
                  and every service creates financial accountability that culminates at the cashier desk.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  When software systems operate in isolation, administrative burden shifts onto clinicians and patients.
                  MarkCare was engineered to reduce unnecessary paper handoffs, unbilled investigations, and operational
                  callbacks by linking every station to a synchronized patient record and transactional folio.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
                    From fragmented workflows to connected care.
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-foreground">
                    Hospital Operational Intersections
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="p-3 rounded-xl bg-muted/60 border border-border/60 flex items-start gap-3">
                      <Stethoscope className="size-4.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-foreground block">Clinical & Diagnostic Interdependence</strong>
                        Physicians depend on timely, validated laboratory results to determine immediate patient care pathways.
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/60 border border-border/60 flex items-start gap-3">
                      <Pill className="size-4.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-foreground block">Prescription to Dispensary Fulfillment</strong>
                        Dispensaries require structured electronic prescriptions with batch-level expiry guidance to prevent stock drift.
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/60 border border-border/60 flex items-start gap-3">
                      <Database className="size-4.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <strong className="text-foreground block">Encounter-to-Folio Financial Reconciliation</strong>
                        Every consultation, test, and medication must post synchronously to the billing folio to ensure revenue integrity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 4: Connected Hospital Workflow (Conceptual Narrative) */}
        <MarketingSection variant="muted">
          <MarketingContainer className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Operational Continuity
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
              One patient journey. Connected across the operation.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Rather than managing independent station registers, MarkCare treats healthcare delivery as a continuous
              operational lifecycle. Patient intake establishes a master identity, triage routes priority to clinical
              rosters, diagnostic findings attach directly to encounter notes, and verified orders feed the central
              cashier desk &mdash; keeping teams aligned throughout the care episode.
            </p>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 5: Capability Status Matrix (Today | Expanding | Horizon) */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Capability Status"
              title="What MarkCare is today &mdash; and where it is growing."
              description="We maintain transparent boundaries between production-ready core engines, active integration frameworks, and future engineering horizons."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1: Core Production */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border/60">
                    <span className="text-xs font-mono font-bold text-primary">Status: Today</span>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      Verified Core
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Core Production Engines</h3>
                    <p className="mt-1 text-xs text-muted-foreground">Production modules currently active and verified in the codebase.</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {coreCapabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0" aria-hidden="true" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 2: Expanding Frameworks */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border/60">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">Status: Evolution</span>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      Expanding
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Integration Frameworks</h3>
                    <p className="mt-1 text-xs text-muted-foreground">Architectural foundations and data structures in active deployment evolution.</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {expandingCapabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 3: Horizon Roadmap */}
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border/60">
                    <span className="text-xs font-mono font-bold text-muted-foreground">Status: Horizon</span>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      Future Horizon
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Specialized Horizons</h3>
                    <p className="mt-1 text-xs text-muted-foreground">Long-term engineering milestones requiring specialized middleware development.</p>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {horizonCapabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2">
                        <div className="size-1.5 rounded-full bg-muted-foreground shrink-0" aria-hidden="true" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 rounded-2xl border border-border/80 bg-card shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="text-sm font-bold text-foreground">Looking for functional screen layouts and workflow specs?</h4>
                <p className="text-xs text-muted-foreground">Inspect field-level documentation across all five core departmental modules.</p>
              </div>
              <Button asChild size="sm" className="bg-primary text-primary-foreground font-semibold shrink-0 shadow-xs">
                <Link href="/modules">
                  Explore Module Catalog
                  <ArrowRight className="ml-1.5 size-3.5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 6: Designed for Healthcare Realities (Regional Context) */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Operating Realities"
              title="Engineered for the realities of regional healthcare delivery."
              description="Healthcare software must withstand real-world operational constraints: fluctuating broadband, mixed reimbursement methods, and multi-facility coordination."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-3 mc-card">
                <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Server className="size-4.5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-foreground">LAN Continuity</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Local-Area Network deployment options engineered to maintain workstation triage, consult, and dispensary
                  workflows during public internet disruptions.
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-3 mc-card">
                <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Globe className="size-4.5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-foreground">Multi-Payer Settlements</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Support for regional payment complexities where patient folios balance out-of-pocket cash, mobile money,
                  and insurance split settlements.
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-3 mc-card">
                <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Network className="size-4.5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-foreground">Branch Boundary Scoping</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Centralized administrative control over global formularies combined with physical branch queue isolation
                  and local dispensary batch stock.
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-3 mc-card">
                <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <FileCheck className="size-4.5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-foreground">Traceable Governance</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Systematic audit records capturing user, branch, timestamp, and state delta to ensure operational
                  accountability across every shift.
                </p>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 7: Who MarkCare Is Built For */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Institutional Roles"
              title="Designed around the people who govern and deliver care."
              description="MarkCare addresses the distinct priorities of healthcare leadership, frontline medical staff, and technical administrators."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudiences.map((aud) => (
                <div
                  key={aud.role}
                  className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs flex flex-col justify-between mc-card mc-card-interactive group hover:border-primary/50 transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                        <aud.icon className="size-5" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        {aud.focus}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {aud.role}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {aud.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 8: Engineering & Product Principles */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Engineering Architecture"
              title="Six principles that guide MarkCare engineering."
              description="Our product roadmap and technical architecture are governed by foundational principles designed around clinical accountability."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {engineeringPrinciples.map((p) => (
                <div
                  key={p.num}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card mc-card-interactive group hover:border-primary/50 transition-all duration-200"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-primary">Principle {p.num}</span>
                      <p.icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                    </div>

                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 9: Mission & Vision */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Foundation & Goal"
              title="Our mission and vision for healthcare operations."
              description="Guided by our principles, we focus on responsible operational coordination today while engineering for the specialized clinical demands of tomorrow."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-border/80 bg-card p-8 shadow-xs space-y-4 mc-card">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">Our Mission</span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Practical, connected software built for the realities of healthcare.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To make healthcare operations more connected, practical, and accountable through software designed
                  around the realities of care &mdash; eliminating artificial friction so hospital teams can focus on patients.
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card p-8 shadow-xs space-y-4 mc-card">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">Our Vision</span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Adaptable digital operations across growing health systems.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To help healthcare organizations build connected, adaptable digital operations that support better
                  coordination across facilities, teams, and care workflows as institutional scale expands.
                </p>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 10: Product Horizon (Transparent Roadmap) */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Product Horizon"
              title="A transparent roadmap for growing health systems."
              description="We communicate our engineering evolution openly, distinguishing current production capabilities from future expansion horizons."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {horizonStages.map((stage) => (
                <div
                  key={stage.stage}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card mc-card-interactive group hover:border-primary/50 transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-primary">{stage.stage}</span>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {stage.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                      Status: {stage.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
              Stage 3 capabilities represent future development milestones and are engineered to integrate with our core
              architecture without requiring platform restructuring.
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 11: Modularity & Architecture Bridge */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="rounded-2xl border border-border/80 bg-card p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Architectural Foundation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Inspect the technical architecture behind MarkCare.
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl">
                  Review transactional boundaries, data flows, role-based access scoping, and LAN deployment topologies
                  engineered for hospital uptime.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
                  <Link href="/platform">
                    Review Platform Architecture
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:bg-accent/60 transition-all">
                  <Link href="/facilities">Explore Facility Governance</Link>
                </Button>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 12: Canonical CTA Banner */}
        <MarketingCtaBanner
          headline="Evaluate MarkCare for your healthcare organization"
          description="Speak with our team to review our engineering principles, explore our product roadmap, or schedule an operational demonstration."
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
