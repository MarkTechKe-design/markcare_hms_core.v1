import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Pill,
  CreditCard,
  Cloud,
  Network,
} from "lucide-react";
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
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Platform Architecture & Hospital Operations",
  description:
    "Explore the architectural foundation of MarkCare HMS: verified multi-branch governance, longitudinal patient care pipeline, deployment models, and integration boundaries.",
};

const patientCarePipeline = [
  { step: "01", title: "Registration & Triage", desc: "Patient identification, vital sign recording, and priority queue assignment." },
  { step: "02", title: "Physician Encounter", desc: "Structured clinical notes, diagnosis recording, and electronic departmental order entry." },
  { step: "03", title: "Diagnostic Orders", desc: "Laboratory investigation requisitions with electronic result publication back to the EMR." },
  { step: "04", title: "FEFO Dispensing", desc: "First-Expiry-First-Out pharmacy fulfillment with automated stock batch depletion." },
  { step: "05", title: "Billing Aggregation", desc: "Encounter fee consolidation across departments for self-pay or insurance settlement." },
  { step: "06", title: "Ward Admission / Discharge", desc: "Inpatient bed census management, nursing round documentation, and clearance tracking." },
];

const deploymentArchitectures = [
  {
    title: "MarkCare Managed Cloud",
    tag: "Multi-Facility SaaS",
    icon: Cloud,
    desc: "Managed cloud infrastructure delivering system updates, database backups, and multi-branch access over encrypted transport.",
    points: ["Central server management", "Encrypted transport layer", "Centralized multi-clinic catalogs"],
  },
  {
    title: "Private On-Premises",
    tag: "Local Infrastructure",
    icon: Server,
    featured: true,
    desc: "Installation directly on the hospital's private physical server infrastructure, supporting local network operation independent of external broadband.",
    points: ["Local network data custody", "Internal hospital IT governance", "LAN continuity during broadband disruptions"],
  },
  {
    title: "Hybrid Facility Network",
    tag: "Distributed Topology",
    icon: Network,
    desc: "Architected for healthcare networks operating regional hub hospitals alongside remote satellite clinics under unified policies.",
    points: ["Centralized item & tariff catalogs", "Branch-scoped operational queues", "Consolidated group-level reporting"],
  },
];

const integrationBoundaries = [
  {
    name: "Mobile Money & Payment Gateways",
    scope: "M-Pesa / Daraja Cashier Settlement",
    status: "available" as const,
    notes: "Direct payment initiation and receipt reconciliation at the cashier desk. Requires active hospital paybill credentials.",
  },
  {
    name: "National Health Schemes",
    scope: "SHA Claims Frameworks",
    status: "available" as const,
    notes: "Patient eligibility verification and scheme tariff schedule mapping. Requires accredited health facility provider agreements.",
  },
  {
    name: "Electronic Tax Invoicing",
    scope: "eTIMS Integration Framework",
    status: "ready" as const,
    notes: "Cryptographic invoice verification data generation ready for tax authority transmission upon facility key registration.",
  },
  {
    name: "Insurance Clearinghouses",
    scope: "DHA / Electronic Claims",
    status: "available" as const,
    notes: "Standardized claim batch preparation and dispute tracking linked to inpatient and outpatient invoices.",
  },
];

export default function PlatformPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <MarketingBadge className="mb-4">Hospital Operating Platform</MarketingBadge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              A unified system foundation for modern healthcare operations.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              MarkCare connects clinical encounters, pharmacy dispensing, diagnostic orders, and financial billing into one cohesive operational core.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shadow-xs">
                <Link href="/request-demo">
                  Request Architecture Overview
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/modules">Explore Verified Modules</Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>

        {/* 2. Structural Three-Tier Architecture Composition */}
        <MarketingSection>
          <MarketingContainer>
            <MarketingSectionHeading
              badge="Architectural Composition"
              title="One connected operational platform"
              description="How MarkCare coordinates hospital operations across clinical, operational, and financial domains."
            />

            <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-xs space-y-8">
              <div className="text-center pb-6 border-b border-border/60">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase tracking-wider">
                  MarkCare Core Operating Engine
                </span>
                <p className="text-xs text-muted-foreground mt-2 max-w-xl mx-auto">
                  Central coordination enforcing role-based permissions, branch-scoped queues, and comprehensive audit trails.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-border/70 bg-card p-6 space-y-3 mc-card-interactive mc-reveal group">
                  <div className="size-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Stethoscope className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Clinical Care</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li>• Electronic Medical Records (EMR)</li>
                    <li>• Physician Consultation Notes</li>
                    <li>• Vital Sign Trajectories</li>
                    <li>• Inpatient Ward Bed Census</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/70 bg-card p-6 space-y-3 mc-card-interactive mc-reveal group">
                  <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Pill className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Ancillary Services</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li>• Pharmacy FEFO Stock Depletion</li>
                    <li>• Diagnostic Laboratory Queues</li>
                    <li>• Specimen Result Publication</li>
                    <li>• Dispensary Order Management</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/70 bg-card p-6 space-y-3 mc-card-interactive mc-reveal group">
                  <div className="size-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <CreditCard className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Financial Operations</h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li>• Departmental Fee Accumulation</li>
                    <li>• Cashier Settlement & Receipts</li>
                    <li>• Standardized Tariff Schedules</li>
                    <li>• Invoice Reconciliation</li>
                  </ul>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* 3. Patient Journey Workflow */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              badge="Care Pipeline"
              title="Following the patient care journey"
              description="Data moves synchronously across stations as clinical care is delivered, eliminating manual paper handoffs."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {patientCarePipeline.map((item) => (
                <div key={item.step} className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card-interactive mc-reveal group">
                  <div>
                    <span className="text-xs font-mono font-bold text-primary block mb-2">{item.step}</span>
                    <h4 className="text-base font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* 4. Multi-Branch Coordination */}
        <MarketingSection>
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <MarketingBadge>Multi-Branch Coordination</MarketingBadge>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Coordinate healthcare networks under unified policies
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Whether operating a single regional referral hospital or managing expanding satellite clinic branches, MarkCare maintains central policy governance while empowering local clinic teams.
                </p>

                <ul className="space-y-3 pt-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Centralized Item Catalogs:</strong> Standardize medication formularies and service fee schedules across all facilities.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Branch-Scoped Queues:</strong> Clinical staff only view patients and orders relevant to their assigned branch.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong>Consolidated Group Reporting:</strong> Facility leadership reviews bed census, daily revenue, and patient volume network-wide.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6">
                <MarketingScreenshotFrame
                  caption="Multi-Branch Facility Selection & Scoped Department Control"
                  aspectRatio="16/10"
                />
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* 5. Deployment Architectures */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              badge="Deployment Flexibility"
              title="Architectures built for healthcare infrastructure"
              description="Choose the hosting model that best aligns with your hospital's operational requirements and data governance policies."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {deploymentArchitectures.map((arch) => (
                <div
                  key={arch.title}
                  className={`rounded-2xl border bg-card p-6 sm:p-7 shadow-xs flex flex-col justify-between ${
                    arch.featured ? "border-primary/40 shadow-md shadow-primary/5" : "border-border/80"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <arch.icon className="size-5" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase">{arch.tag}</span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2">{arch.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-5">{arch.desc}</p>

                    <ul className="space-y-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                      {arch.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0" aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* 6. Qualified Ecosystem Integrations */}
        <MarketingSection>
          <MarketingContainer>
            <MarketingSectionHeading
              badge="Ecosystem Interoperability"
              title="Verified integration boundaries"
              description="Connecting hospital workflows to external financial gateways and regulatory clearinghouses with transparent prerequisites."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {integrationBoundaries.map((integ) => (
                <div key={integ.name} className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-foreground">{integ.name}</h3>
                    <MarketingBadge variant={integ.status === "ready" ? "ready" : "available"}>
                      {integ.status === "ready" ? "Configuration Required" : "Integration-Ready"}
                    </MarketingBadge>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">{integ.scope}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-1 border-t border-border/60">
                    {integ.notes}
                  </p>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* 7. Security & Governance Overview */}
        <MarketingSection variant="muted">
          <MarketingContainer className="max-w-4xl text-center space-y-6">
            <MarketingBadge>Security & Governance</MarketingBadge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Responsible healthcare data governance
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              MarkCare is structured with role-based staff access controls, multi-branch scoping, and audit logging covering clinical sign-offs, specimen validations, and financial adjustments.
            </p>
            <div>
              <Button asChild variant="outline" size="sm">
                <Link href="/security">
                  Review Complete Security Controls
                  <ArrowRight className="ml-1.5 size-3.5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* 8. CTA Banner */}
        <MarketingCtaBanner
          headline="Evaluate MarkCare for your healthcare organization"
          description="Speak with our implementation team to discuss clinical workflows, department connectivity, and system deployment options."
          primaryCta={{
            label: "Request a Demonstration",
            href: "/request-demo",
          }}
          secondaryCta={{
            label: "Contact Inquiries",
            href: "/contact",
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}
