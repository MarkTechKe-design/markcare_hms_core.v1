import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  ShieldCheck,
  ArrowRight,
  Database,
  Network,
  Lock,
  Activity,
  GitBranch,
  Server,
  CheckCircle2,
  Workflow,
  Key,
  FileCheck,
  RefreshCw,
  Cpu,
  Globe,
  Building2,
  Sliders,
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
  title: "System Architecture & Technical Governance",
  description:
    "Explore the technical architecture behind MarkCare HMS: shared application data layer, role-based access controls, branch data scoping, audit logging, and LAN deployment options.",
};

// Section 2: Core Architectural Pillars
const architecturalPillars = [
  {
    title: "Shared Application Layer",
    desc: "A unified application boundary connecting clinical, ancillary, and administrative workflows on a shared relational schema, eliminating duplicate entry and unlinked records.",
    icon: Layers,
    badge: "Core Architecture",
  },
  {
    title: "Transactional Data Consistency",
    desc: "Encounter records, diagnostic orders, medication dispensations, and cashier folios update within atomic database transactions to maintain complete ledger integrity.",
    icon: Database,
    badge: "Data Integrity",
  },
  {
    title: "Organizational Tenancy & Scoping",
    desc: "Strict scoping rules isolate patient queues, inventory stores, and financial folios by facility and branch location, preventing cross-location data contamination.",
    icon: Building2,
    badge: "Boundary Control",
  },
  {
    title: "Event-Driven Station Routing",
    desc: "Clinical charting triggers downstream operational events: lab requisitions route to accession worklists, prescriptions alert dispensaries, and services log to billing.",
    icon: Workflow,
    badge: "Event Pipeline",
  },
  {
    title: "Tamper-Evident Audit Logging",
    desc: "System-level logging preserves an auditable footprint of every clinical note, order modification, prescription fulfillment, and payment transaction across all stations.",
    icon: FileCheck,
    badge: "Auditability",
  },
  {
    title: "Protected Integration Boundaries",
    desc: "Controlled integration endpoints and structured schema contracts govern external communication with national health schemes, payment gateways, and tax frameworks.",
    icon: Network,
    badge: "Ecosystem Gateways",
  },
];

// Section 3: Operational Event Pipeline
const dataFlowSequence = [
  {
    step: "01",
    phase: "Capture",
    title: "Structured Intake & Encounter Entry",
    desc: "Triage and clinical consultation stations capture standardized vitals, physical findings, and ICD-10 diagnostic codes into structured database records.",
    icon: Activity,
  },
  {
    step: "02",
    phase: "Process",
    title: "Business Rule & Tariff Evaluation",
    desc: "The platform applies facility tariff schedules, verifies active insurance eligibility schemas, and checks dispensary stock availability in real time.",
    icon: Sliders,
  },
  {
    step: "03",
    phase: "Record",
    title: "Atomic State & Ledger Updates",
    desc: "Clinical assessments commit to the cumulative patient history while service items post synchronously to the encounter invoice folio.",
    icon: Database,
  },
  {
    step: "04",
    phase: "Route",
    title: "Role-Scoped Worklist Dispatch",
    desc: "Orders route instantaneously to station-specific queues: diagnostic lab accession desks, pharmacy dispensary worklists, and nursing round monitors.",
    icon: RefreshCw,
  },
  {
    step: "05",
    phase: "Reconcile",
    title: "Encounter-to-Folio Aggregation",
    desc: "Dispensed medications and validated laboratory tests consolidate automatically onto the cashier ledger for transparent split-settlement handling.",
    icon: Cpu,
  },
  {
    step: "06",
    phase: "Audit",
    title: "Immutable Event Stamp Preservation",
    desc: "Every record modification, dispensing action, and payment receipt logs with timestamp, actor entity, branch identifier, and state snapshot.",
    icon: ShieldCheck,
  },
];

// Section 5: Role-Based Access Scoping
const rbacStations = [
  {
    role: "Medical Officers & Clinicians",
    scope: "Clinical Consultation Station",
    responsibilities: [
      "Author encounter assessments and clinical notes",
      "Order diagnostic lab tests and author electronic prescriptions",
      "Review cumulative patient history and validated lab findings",
      "Strictly restricted from financial tariff edits and cashier settlement",
    ],
    icon: Key,
  },
  {
    role: "Pharmacy Technicians",
    scope: "Dispensary & Inventory Station",
    responsibilities: [
      "Access incoming electronic prescription queue",
      "Execute batch-level dispensing with expiry guidance",
      "Record stock transfers, adjustments, and reorder levels",
      "Restricted from clinical note alteration and invoice voiding",
    ],
    icon: Layers,
  },
  {
    role: "Laboratory Technologists",
    scope: "Diagnostic Workstation",
    responsibilities: [
      "Manage specimen accessioning and barcode tracking",
      "Input multi-parameter numeric and qualitative test results",
      "Authorize clinical validation and sign-off for EMR publishing",
      "Restricted from patient demographic alteration and billing folios",
    ],
    icon: Activity,
  },
  {
    role: "Cashiers & Finance Officers",
    scope: "Cashier & Billing Desk",
    responsibilities: [
      "Aggregate unbilled encounter items into final patient folios",
      "Process cash, mobile money, and split-payment transactions",
      "Issue cryptographic receipts and close finalized billing folios",
      "Restricted from clinical assessment editing and lab test validation",
    ],
    icon: Lock,
  },
  {
    role: "Nursing & Ward Staff",
    scope: "Inpatient Ward & Triage Desk",
    responsibilities: [
      "Capture triage acuity rankings and vital sign observations",
      "Maintain inpatient ward occupancy and bed census allocations",
      "Record nursing round notes and shift medication administration",
      "Restricted from formulary pricing and cashier settlement actions",
    ],
    icon: ShieldCheck,
  },
  {
    role: "System Administrators",
    scope: "Platform Governance Console",
    responsibilities: [
      "Provision user accounts and assign branch-scoped credentials",
      "Maintain facility tariff master schedules and formulary lists",
      "Inspect system-wide operational audit logs and security events",
      "Restricted from patient medical chart impersonation without logging",
    ],
    icon: Server,
  },
];

// Section 8: External Integration Frameworks
const integrationFrameworks = [
  {
    title: "Mobile Money Framework (M-Pesa / Daraja)",
    category: "Payment Infrastructure",
    desc: "Cashier-initiated STK push triggers and C2B transaction validation structures, designed to connect with facility-specific paybill credentials during implementation.",
    icon: Globe,
    status: "Active Framework",
  },
  {
    title: "National Health Scheme Framework (SHA)",
    category: "Payer Claims Staging",
    desc: "Standardized patient scheme eligibility card layouts and structured claim batch formatting, built to support national insurance submission workflows upon onboarding.",
    icon: ShieldCheck,
    status: "Integration Gateway",
  },
  {
    title: "Fiscal Verification Framework (eTIMS)",
    category: "Revenue Compliance",
    desc: "Cryptographic receipt data hashing structures and public QR code verification routes, designed to facilitate tax verification and compliant invoicing workflows.",
    icon: FileCheck,
    status: "Verification Gateway",
  },
  {
    title: "Diagnostic Data Interfacing (HL7 / ASTM)",
    category: "Laboratory Middleware",
    desc: "Standardized payload data models for laboratory test requisitions and diagnostic result exchange, ready to integrate with on-site instrument middleware.",
    icon: Network,
    status: "Expanding Protocol",
  },
];

export default function PlatformPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Technical Architecture &middot; System Foundations
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              The system architecture behind connected hospital operations.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              MarkCare unifies clinical encounters, administrative workflows, ancillary logistics, and financial
              settlements through a shared application layer. Engineered to enforce strict facility, branch, role,
              and audit boundaries across every departmental station.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
                <Link href="/modules">
                  Explore Operational Modules
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:bg-accent/60 transition-all active:scale-[0.98]">
                <Link href="/integrations">Inspect Integration Frameworks</Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>

        {/* Section 2: Architecture Overview */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="System Overview"
              title="Shared application layer, scoped operational boundaries."
              description="Rather than running isolated point solutions, MarkCare coordinates hospital stations through a cohesive relational data architecture designed for operational traceability."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {architecturalPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card mc-card-interactive group hover:border-primary/50 transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                        <pillar.icon className="size-5" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                        {pillar.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 3: Connected Operational Data Flow */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Data Pipeline"
              title="How operational events move through the platform."
              description="A deterministic six-phase lifecycle coordinates patient intake, clinical consultation, ancillary orders, and financial reconciliation into an auditable ledger."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataFlowSequence.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card mc-card-interactive group hover:border-primary/50 transition-all duration-200"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-primary">Stage {item.step}</span>
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.phase}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 4: Facility & Branch Scoping */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Operational Tenancy &middot; Branch Context
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
                  Organizational boundaries and multi-branch context.
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Healthcare groups require central governance over formularies and price tariffs, yet physical branches
                  must execute autonomously. MarkCare provides location-aware scoping to ensure operational queues,
                  dispensary stocks, and cashier folios remain strictly isolated by facility.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Facility Identity:</strong> Master administrative boundaries for institutional governance.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Branch Context:</strong> Location-specific isolation for patient queues, stock rooms, and cash desks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>User-Location Scoping:</strong> Personnel access restricted strictly to authorized physical branches.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Branch-Aware Workflows:</strong> Eliminates cross-branch queue mixing and inventory contamination.</span>
                  </li>
                </ul>
                <div className="pt-3">
                  <Button asChild variant="outline" size="sm" className="font-semibold hover:bg-accent/60 transition-all">
                    <Link href="/facilities">
                      Explore Multi-Location Governance & Hierarchy &rarr;
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs space-y-6">
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                    <GitBranch className="size-4 text-primary" aria-hidden="true" />
                    Branch Scoping Architecture
                  </h3>
                  <div className="space-y-4 text-xs font-mono">
                    <div className="p-3.5 rounded-xl bg-muted/60 border border-border/60 space-y-1.5">
                      <div className="text-primary font-bold">[Enterprise Group Node]</div>
                      <div className="text-muted-foreground">Standardized Formularies &middot; Global Service Tariffs &middot; Group Reporting</div>
                    </div>
                    <div className="pl-4 sm:pl-6 border-l-2 border-primary/30 space-y-3">
                      <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60 space-y-1">
                        <div className="text-foreground font-bold">Branch Boundary: Main Hospital</div>
                        <div className="text-muted-foreground">Local Bed Census &middot; Inpatient Ward Queues &middot; Main Pharmacy FEFO</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60 space-y-1">
                        <div className="text-foreground font-bold">Branch Boundary: Satellite Polyclinic</div>
                        <div className="text-muted-foreground">Outpatient Queue &middot; Satellite Dispensary &middot; Dedicated Cashier Folio</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 5: Access Control & Governance (RBAC) */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Access Control & Security"
              title="Access follows responsibility across every station."
              description="Access should follow responsibility. MarkCare combines role-aware controls, organizational context, and audit records to support accountable hospital operations."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rbacStations.map((station) => (
                <div
                  key={station.role}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card mc-card-interactive group hover:border-primary/50 transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                        <station.icon className="size-4.5" aria-hidden="true" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                        {station.scope}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {station.role}
                      </h3>
                    </div>

                    <ul className="space-y-2 pt-3 border-t border-border/60 text-xs text-muted-foreground">
                      {station.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline" size="sm" className="font-semibold hover:bg-accent/60 transition-all">
                <Link href="/security">
                  Review Data Custody & Cryptographic Security Architecture &rarr;
                </Link>
              </Button>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 6: Auditability & Traceability */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Operational Traceability
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
                  Immutable operational logs for every critical event.
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Accountability in healthcare requires that record state transitions remain fully auditable. MarkCare
                  records operational events with user, timestamp, branch, and station metadata to support clinical and
                  financial governance.
                </p>
                <div className="p-4 rounded-xl bg-card border border-border/80 shadow-2xs space-y-2 text-xs text-muted-foreground">
                  <div className="font-bold text-foreground flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                    Governance Objective
                  </div>
                  <p>
                    Ensures every prescription dispensed, diagnostic test validated, and cashier payment recorded is
                    traceable to a verified actor and physical location.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-4 font-mono text-xs">
                  <div className="text-xs uppercase font-bold tracking-wider text-muted-foreground pb-2 border-b border-border/60">
                    Audit Log Schema &middot; Captured Event Metadata
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-lg bg-muted/60 border border-border/60 space-y-1">
                      <span className="text-primary font-bold">Action Type</span>
                      <p className="text-muted-foreground text-[11px]">EncounterCreated, RxDispensed, LabVerified, InvoiceSettled</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/60 border border-border/60 space-y-1">
                      <span className="text-primary font-bold">Actor Entity</span>
                      <p className="text-muted-foreground text-[11px]">Authenticated user ID, assigned role, and session credential</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/60 border border-border/60 space-y-1">
                      <span className="text-primary font-bold">High-Precision Timestamp</span>
                      <p className="text-muted-foreground text-[11px]">UTC ISO-8601 operational event occurrence time</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/60 border border-border/60 space-y-1">
                      <span className="text-primary font-bold">Location & Station</span>
                      <p className="text-muted-foreground text-[11px]">Physical facility ID, branch code, and department workspace</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/60 border border-border/60 space-y-1 sm:col-span-2">
                      <span className="text-primary font-bold">State Transition Snapshot</span>
                      <p className="text-muted-foreground text-[11px]">Serialized before and after payload snapshot preserving transaction delta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 7: Deployment Topology & LAN Operational Resilience */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Deployment & Topology"
              title="Architectural deployment options engineered for operational continuity."
              description="Healthcare facilities cannot halt clinical services when broadband connections fluctuate. MarkCare provides versatile hosting models engineered around local operational continuity."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card mc-card-interactive group hover:border-primary/50 transition-all duration-200">
                <div className="space-y-3">
                  <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Globe className="size-4.5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    Cloud-Hosted Deployment
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Managed cloud infrastructure suited for multi-branch healthcare networks with reliable broadband,
                    providing automated backups and centralized administrative accessibility.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card mc-card-interactive group hover:border-primary/50 transition-all duration-200">
                <div className="space-y-3">
                  <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Server className="size-4.5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    Local-Area Network (LAN) Deployment
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Local-Area Network (LAN) deployment options designed to keep facility operations available during
                    public-internet disruptions, maintaining local triage, consult, and dispensary workflows.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card mc-card-interactive group hover:border-primary/50 transition-all duration-200">
                <div className="space-y-3">
                  <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Network className="size-4.5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    Hybrid Reporting Synchronization
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Scheduled operational data rollups linking satellite branch nodes with headquarters servers for
                    consolidated financial reporting while preserving branch autonomy.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline" size="sm" className="font-semibold hover:bg-accent/60 transition-all">
                <Link href="/facilities">
                  Review Sizing Tiers & Single-Site vs. Multi-Branch Deployments &rarr;
                </Link>
              </Button>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 8: Integration Architecture */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Integration Architecture"
              title="Standardized integration frameworks for national and regional ecosystems."
              description="MarkCare provides structured integration contracts and protocol gateways designed to connect with hospital-specific paybill, insurance, and regulatory credentials during onboarding."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrationFrameworks.map((framework) => (
                <div
                  key={framework.title}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card mc-card-interactive group hover:border-primary/50 transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                        <framework.icon className="size-4.5" aria-hidden="true" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                        {framework.status}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-primary block mb-1">{framework.category}</span>
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {framework.title}
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {framework.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline" size="sm" className="font-semibold hover:bg-accent/60 transition-all">
                <Link href="/integrations">
                  Inspect Complete Technical API Schemas & Integration Contracts &rarr;
                </Link>
              </Button>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 9: Operational Detail Bridge Callout */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <div className="rounded-2xl border border-border/80 bg-card p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Operational Depth
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Need detailed operational workflows and module mechanics?
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl">
                  Explore our comprehensive catalog detailing input fields, batch tracking rules, laboratory accessioning,
                  and cashier settlement across all five canonical departmental modules.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shrink-0 shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
                <Link href="/modules">
                  Explore Operational Modules
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 10: Canonical CTA Banner */}
        <MarketingCtaBanner
          headline="Evaluate the MarkCare system architecture"
          description="Speak with our technical and implementation team to review data flow, deployment topologies, or security controls for your facility."
          primaryCta={{
            label: "Request a Technical Walkthrough",
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

