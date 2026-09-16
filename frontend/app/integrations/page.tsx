import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CreditCard,
  FileText,
  QrCode,
  Activity,
  Layers,
  Server,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  ChevronRight,
  ClipboardList,
  Sliders,
  Network,
  Cpu,
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
  title: "Ecosystem Integrations & Interoperability",
  description:
    "Explore MarkCare HMS integration maturity, payment gateways, national health scheme frameworks, eTIMS fiscal pipelines, and diagnostic interoperability standards.",
};

// Section 2: Integration Maturity Tiers
const maturityTiers = [
  {
    tier: "Tier 01",
    title: "Operational / Core",
    badge: "Implemented Core",
    badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    icon: CheckCircle2,
    desc: "Internal station-to-station data flows, departmental order queues, encounter-to-folio accounting, and centralized audit trails.",
  },
  {
    tier: "Tier 02",
    title: "Facility-Configured",
    badge: "Facility Credentialed",
    badgeClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    icon: Sliders,
    desc: "Implemented external service connectors requiring facility-specific merchant keys, provider contracts, and endpoint configuration during onboarding.",
  },
  {
    tier: "Tier 03",
    title: "Integration Framework",
    badge: "Structured Framework",
    badgeClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    icon: Layers,
    desc: "Engineered outbox pipelines, normalized data schemas, and API adapters ready to interface with physical control units or on-site middleware.",
  },
  {
    tier: "Tier 04",
    title: "Future Interoperability",
    badge: "Architectural Horizon",
    badgeClass: "bg-muted text-muted-foreground",
    icon: Clock,
    desc: "Specialized clinical and epidemiological standards in active research and scheduled engineering development.",
  },
];

// Section 3-6: Detailed Integration Specifications
const activeIntegrations = [
  {
    id: "payments",
    title: "Mobile Money & Payment Gateways",
    subtitle: "M-Pesa / Daraja API & PayHero Service Layer",
    maturity: "Facility-Configured",
    maturityClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    icon: CreditCard,
    overview:
      "Automated STK push prompts initiated directly from cashier workstations to patient mobile numbers. Asynchronous webhook receivers ingest transaction confirmations, verify payment reference authenticity, update billing folios, and issue electronic receipts.",
    capabilities: [
      "Customer-to-Business (C2B) STK Push initiation",
      "Asynchronous webhook callback processing and reference validation",
      "PayHero secondary gateway fallback support",
      "Synchronous invoice status settlement and payment reconciliation logging",
    ],
    configNote:
      "Configuration Requirement: Requires facility Safaricom Daraja Business Shortcode, Consumer Key/Secret, Passkey, or PayHero credentials configured via platform settings.",
  },
  {
    id: "claims",
    title: "National & Private Insurance Claims",
    subtitle: "Social Health Authority (SHA) & Private Payer Workflow",
    maturity: "Facility-Configured & Claims Workflow",
    maturityClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    icon: FileText,
    overview:
      "Internal claims management framework supporting patient insurance verification, copay splitting, pre-authorization tracking, and standardized diagnostic claim payload generation indexed directly to the patient clinical chart.",
    capabilities: [
      "Insurance policy verification and patient copay folio splitting",
      "Pre-authorization number and benefit allocation tracking",
      "Standardized claim submission data structures encoding ICD-10 diagnoses",
      "Status tracking across draft, submitted, queried, and reconciled states",
    ],
    configNote:
      "Configuration Requirement: Facility-specific SHA provider credentials and private payer contract tariffs configured during hospital onboarding.",
  },
  {
    id: "etims",
    title: "Fiscalization & Tax Invoicing",
    subtitle: "eTIMS Outbox Pipeline & QR Validation",
    maturity: "Integration Framework",
    maturityClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    icon: QrCode,
    overview:
      "Structured transactional outbox pipeline designed to prepare and transmit electronic tax invoice data. Calculates applicable VAT tax classifications and embeds cryptographically verifiable QR codes onto generated patient receipts for public authenticity verification via /invoice-verify.",
    capabilities: [
      "Transactional outbox event queuing for invoice events",
      "Itemized tax rate categorization across pharmaceuticals and medical services",
      "Cryptographic receipt QR code generation for external authenticity checks",
      "Idempotent transmission retry handling for external fiscal endpoints",
    ],
    configNote:
      "Configuration Requirement: Production fiscalization requires integration with hospital KRA eTIMS signing software or an authorized on-premises Virtual/Physical Sales Control Unit (VSCU/OSCU).",
  },
  {
    id: "laboratory",
    title: "Laboratory & Diagnostic Interoperability",
    subtitle: "HL7 & ASTM Diagnostic Data Frameworks",
    maturity: "Integration Framework",
    maturityClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    icon: Activity,
    overview:
      "Normalized data models and structured payload schemas designed to exchange laboratory test orders and result reports with diagnostic middleware. Decouples core electronic medical charting from physical device communication protocols.",
    capabilities: [
      "Normalized test requisition schemas for laboratory investigation orders",
      "Structured multi-parameter result ingestion data formats",
      "Departmental worklist queues organized by diagnostic bench",
      "Validation and pathologist sign-off workflows before clinical chart release",
    ],
    configNote:
      "Operational Boundary: MarkCare provides the structured data schema and worklist queues. Physical auto-analyzer communication requires on-site instrument middleware or socket bridge adapters.",
  },
];

// Section 7: Future Interoperability Horizons
const horizonIntegrations = [
  {
    title: "DICOM / PACS Diagnostic Imaging",
    subtitle: "Radiology Study Coordination",
    desc: "Planned architectural integration designed to bridge radiology requisition workflows with hospital PACS storage servers, embedding direct study access links within physician consultation charts.",
    status: "Architectural Horizon",
  },
  {
    title: "KHIS / DHIS2 Epidemiological Reporting",
    subtitle: "Public Health Surveillance",
    desc: "Scheduled monthly aggregate indicator extraction pipelines designed to compile ministry of health epidemiological surveillance and hospital workload reports (MOH 705A/B, MOH 711).",
    status: "Architectural Horizon",
  },
];

// Section 8: Technical Integration Architecture Steps
const architectureFlow = [
  {
    step: "01",
    title: "Application Event Trigger",
    desc: "A clinical consultation order, pharmacy dispense, or cashier payment triggers an internal transactional domain event.",
  },
  {
    step: "02",
    title: "Outbox Queue & Payload Normalization",
    desc: "The event is recorded to an immutable outbox table and formatted into a structured, validated JSON or XML data payload.",
  },
  {
    step: "03",
    title: "Credential Injection & Transport",
    desc: "The integration client injects facility-scoped credentials and dispatches the payload over secure HTTPS or local socket protocols.",
  },
  {
    step: "04",
    title: "Asynchronous Webhook & Reconciliation",
    desc: "External gateway callbacks are ingested, cryptographically verified, and reconciled against the originating patient folio or encounter.",
  },
  {
    step: "05",
    title: "Tamper-Evident Audit Logging",
    desc: "The complete transaction lifecycle is recorded with actor metadata, timestamps, and status deltas in the system audit log.",
  },
];

// Section 9: Integration Readiness Checklist
const readinessChecklist = [
  {
    title: "Merchant Payment Credentials",
    desc: "Active Safaricom Daraja Business Shortcode, Consumer Key/Secret, and Passkey or PayHero API credentials.",
  },
  {
    title: "Payer Provider Registration",
    desc: "Registered healthcare facility provider identification numbers for SHA and contracted private insurer schemes.",
  },
  {
    title: "Fiscal Signing Solution",
    desc: "Authorized KRA eTIMS signing solution or designated physical/virtual control unit (VSCU/OSCU) infrastructure.",
  },
  {
    title: "Network Connectivity & Firewall Rules",
    desc: "Configured inbound webhook URLs, static external IPs, and mutual TLS certificates where required by external clearinghouses.",
  },
  {
    title: "Diagnostic Analyzer Middleware",
    desc: "Third-party laboratory instrument middleware or serial-to-network bridge servers for direct hardware interfacing.",
  },
  {
    title: "Pre-Production Sandbox Testing",
    desc: "Access to external provider staging sandboxes to validate callback routing and ledger reconciliation before live deployment.",
  },
];

export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              External Connectivity &middot; Integration Frameworks
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              Healthcare systems that connect where it matters.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Hospital software cannot operate in isolation. MarkCare utilizes structured integration frameworks for
              regional payments, national claims, fiscal validation, and diagnostic data &mdash; maintaining clear
              architectural boundaries between verified core workflows, facility-credentialed connectors, and long-term horizons.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
                <Link href="/request-demo">
                  Discuss Integration Requirements
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:bg-accent/60 transition-all active:scale-[0.98]">
                <Link href="/platform">Review Platform Architecture</Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>

        {/* Section 2: Integration Maturity Model */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Architectural Rigor"
              title="Integration maturity and classification model."
              description="We maintain transparent technical boundaries, distinguishing operational core features from credential-dependent connectors, data frameworks, and future roadmap capabilities."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {maturityTiers.map((tier) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={tier.tier}
                    className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-muted-foreground">{tier.tier}</span>
                        <span className={"text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full " + tier.badgeClass}>
                          {tier.badge}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                          <Icon className="size-4 text-primary shrink-0" aria-hidden="true" />
                          <span>{tier.title}</span>
                        </h3>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                          {tier.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 3-6: Detailed Integration Specifications */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Connector Specifications"
              title="Operational frameworks &amp; connector architectures."
              description="Review technical specifications, data flows, and institutional configuration prerequisites across our primary integration domains."
            />

            <div className="space-y-8">
              {activeIntegrations.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs mc-card"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 border-b border-border/60">
                      <div className="flex items-start gap-4">
                        <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                          <Icon className="size-5.5" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5 mb-1">
                            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                              {item.subtitle}
                            </span>
                            <span className={"text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full " + item.maturityClass}>
                              {item.maturity}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 text-xs sm:text-sm">
                      <div className="lg:col-span-6 space-y-4">
                        <div>
                          <strong className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                            Technical Overview
                          </strong>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.overview}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-muted/60 border border-border/60 text-xs text-muted-foreground">
                          <strong className="text-foreground block mb-1">Prerequisite Notice:</strong>
                          <p className="leading-relaxed">{item.configNote}</p>
                        </div>
                      </div>

                      <div className="lg:col-span-6 space-y-2">
                        <strong className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-2">
                          Supported Protocol Mechanics
                        </strong>
                        <ul className="space-y-2.5 text-xs text-muted-foreground">
                          {item.capabilities.map((cap) => (
                            <li key={cap} className="flex items-start gap-2">
                              <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="leading-relaxed">{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 7: Future Interoperability Horizons */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Architectural Roadmap"
              title="Future healthcare interoperability horizons."
              description="These capabilities represent long-term engineering horizons currently in research and scheduled development. They are transparently designated as future milestones."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {horizonIntegrations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-3 mc-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      {item.subtitle}
                    </span>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 8: Technical Integration Architecture */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Integration Pipeline"
              title="Disciplined, auditable external data flow."
              description="External communications follow a transactional outbox architecture to ensure data integrity, idempotent processing, and complete auditability."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {architectureFlow.map((flow) => (
                <div
                  key={flow.step}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-primary">Stage {flow.step}</span>
                    <h3 className="text-sm font-bold text-foreground">
                      {flow.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {flow.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 9: Integration Readiness Checklist */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Hospital Onboarding"
              title="Facility integration readiness checklist."
              description="To ensure dependable deployment, prospective healthcare organizations should evaluate their third-party credentials and infrastructure prerequisites."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {readinessChecklist.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-2 mc-card"
                >
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <ClipboardList className="size-4 shrink-0" aria-hidden="true" />
                    <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 10: Canonical Directory Bridge */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <div className="rounded-2xl border border-border/80 bg-card p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Technical Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Explore how integrations fit into the broader system architecture.
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl">
                  Inspect our shared database models, role-based access scoping, LAN deployment topologies, and security boundaries.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
                  <Link href="/platform">
                    Inspect System Architecture
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:bg-accent/60 transition-all">
                  <Link href="/security">Review Security Boundaries</Link>
                </Button>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 11: Canonical CTA Banner */}
        <MarketingCtaBanner
          headline="Discuss your hospital's integration environment"
          description="Speak with our integration engineers to review your existing payment credentials, clearinghouse accounts, and diagnostic hardware requirements."
          primaryCta={{
            label: "Schedule Technical Review",
            href: "/request-demo",
          }}
          secondaryCta={{
            label: "Review Platform Architecture",
            href: "/platform",
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}

