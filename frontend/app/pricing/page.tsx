import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Network,
  Server,
  Cloud,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Layers,
  Activity,
  Pill,
  CreditCard,
  Stethoscope,
  FileText,
  Sliders,
  ShieldCheck,
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
  title: "Commercial Packaging & Deployment Pricing | MarkCare HMS",
  description:
    "Explore MarkCare HMS commercial packaging, deployment scoping, and pricing assessment factors for single clinics, referral hospitals, and multi-branch networks.",
};

// Section 2: Commercial Scope Factors
const commercialFactors = [
  {
    title: "Physical Facility Scale",
    desc: "Active inpatient bed matrices, emergency capacity, and concurrent outpatient consultation rooms determine operational workload.",
    icon: Building2,
  },
  {
    title: "Multi-Location Topology",
    desc: "Single-facility community clinics vs. distributed hospital groups coordinating satellite branches and shared administration.",
    icon: Network,
  },
  {
    title: "Deployment Infrastructure",
    desc: "Managed cloud hosting for continuous web access vs. on-premises Local-Area Network (LAN) servers engineered for local network continuity.",
    icon: Server,
  },
  {
    title: "Implementation & Support Scope",
    desc: "Tailored historical data migration, workstation staff onboarding, and dedicated technical maintenance service levels.",
    icon: Sliders,
  },
];

// Section 3: Deployment-Aware Packaging
const deploymentPackages = [
  {
    title: "Single-Facility Deployment",
    scope: "Community Clinics & Standalone Medical Centres",
    desc: "Engineered for standalone healthcare providers requiring coordinated clinical, pharmacy, diagnostic, and cashier workflows from a centralized facility console.",
    icon: Cloud,
    featured: false,
    highlights: [
      "Centralized single-site facility administration",
      "Managed cloud or compact local workstation deployment",
      "Station-scoped roles (Doctor, Pharmacy, Lab, Cashier)",
      "Standard implementation and staff workflow onboarding",
    ],
  },
  {
    title: "Multi-Location Network Deployment",
    scope: "Hospital Groups & Multi-Branch Networks",
    desc: "Designed for healthcare organizations coordinating multiple physical branches, satellite dispensaries, and centralized executive reporting.",
    icon: Network,
    featured: true,
    highlights: [
      "Branch-scoped operational queues and staff permissions",
      "Standardized multi-branch formularies and price tariffs",
      "Inter-branch pharmaceutical stock transfer tracking",
      "Consolidated group-wide financial and census reporting",
    ],
  },
  {
    title: "Specialized Institutional Deployment",
    scope: "Referral Hospitals & Acute Inpatient Centres",
    desc: "Structured for high-throughput secondary and tertiary hospitals requiring dedicated server infrastructure, high concurrency, and comprehensive auditability.",
    icon: Server,
    featured: false,
    highlights: [
      "Dedicated on-premises Local-Area Network (LAN) server topology",
      "Multi-ward bed census and concurrent cashier folios",
      "Tamper-evident audit logging for all clinical transactions",
      "Readiness for regional payer and regulatory integration frameworks",
    ],
  },
];

// Section 4: What Influences a Commercial Assessment
const assessmentCriteria = [
  {
    title: "Facility & Branch Count",
    desc: "The number of distinct physical locations requiring independent operational queues and local inventory custody.",
  },
  {
    title: "Active Departmental Modules",
    desc: "The specific clinical, diagnostic, pharmaceutical, and financial modules configured for active daily staff use.",
  },
  {
    title: "Technical Hosting Preference",
    desc: "Whether your organization requires cloud-managed hosting or on-premises LAN server deployment for local resilience.",
  },
  {
    title: "Inpatient Bed & Station Capacity",
    desc: "The volume of physical inpatient ward beds, consultation desks, and active cashier terminals across your operation.",
  },
  {
    title: "Integration Framework Staging",
    desc: "Requirements for connecting facility-specific mobile money paybills, national health scheme staging, or eTIMS data structures.",
  },
  {
    title: "Onboarding & Technical Support",
    desc: "The depth of staff workflow training, data migration assistance, and ongoing technical maintenance service agreements.",
  },
];

// Section 5: Module Hand-Off Directory
const canonicalModuleLinks = [
  {
    title: "Clinical Consultation & EMR",
    desc: "Longitudinal encounter charting and diagnosis entry.",
    href: "/modules/clinical-emr",
    icon: Stethoscope,
  },
  {
    title: "Pharmacy Inventory & FEFO",
    desc: "Batch-level stock tracking and expiry-aware dispensing.",
    href: "/modules/pharmacy",
    icon: Pill,
  },
  {
    title: "Diagnostic Laboratory",
    desc: "Specimen accessioning, worklists, and validated reporting.",
    href: "/modules/laboratory",
    icon: Activity,
  },
  {
    title: "Billing & Cashier Folios",
    desc: "Encounter fee aggregation and split payment handling.",
    href: "/modules/billing",
    icon: CreditCard,
  },
  {
    title: "Inpatient Wards & Bed Census",
    desc: "Ward occupancy matrices, bed transfers, and daily folios.",
    href: "/modules/inpatient",
    icon: Layers,
  },
];

// Section 8: Commercial FAQ
const pricingFaqs = [
  {
    q: "Do you publish fixed public prices?",
    a: "No. MarkCare commercial agreements are structured around verified operational scope: facility size, branch count, active departmental modules, and chosen deployment topology. Publishing one-size-fits-all rates would misrepresent the real requirements of diverse healthcare facilities.",
  },
  {
    q: "Can MarkCare accommodate both small clinics and large hospitals?",
    a: "Yes. The platform scales from single outpatient centres to regional referral hospitals and multi-branch networks, configuring only the operational workspaces your facility actively utilizes.",
  },
  {
    q: "How does deployment infrastructure affect commercial terms?",
    a: "On-premises Local-Area Network (LAN) deployments involve local server setup and facility network configuration, while Managed Cloud deployments utilize hosted infrastructure. Both options are structured with clear upfront and recurring maintenance terms.",
  },
  {
    q: "How do we receive an official commercial proposal?",
    a: "Submit a facility assessment request through our evaluation form. Our team will review your bed capacity, workstation count, branch requirements, and schedule a scoping discussion.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Commercial Evaluation &middot; Deployment Packaging
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              Pricing that reflects the way your healthcare organization operates.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Hospital software procurement requires a realistic understanding of facility scope. Rather than publishing
              arbitrary flat rates that misrepresent operational needs, MarkCare structures commercial configurations
              around physical facility scale, branch topology, active workflows, and technical deployment models.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
                <Link href="/request-demo">
                  Request Commercial Assessment
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:bg-accent/60 transition-all active:scale-[0.98]">
                <Link href="/facilities">Explore Facility Topologies</Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>

        {/* Section 2: Commercial Approach */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Commercial Approach"
              title="Commercial configuration shaped by operational scope."
              description="Healthcare organizations vary significantly in patient volume, physical location count, and technical infrastructure. MarkCare commercial configurations are determined by deployment requirements rather than per-patient transaction fees."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {commercialFactors.map((factor) => {
                const Icon = factor.icon;
                return (
                  <div
                    key={factor.title}
                    className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-3 mc-card"
                  >
                    <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="size-4.5" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {factor.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {factor.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 3: Deployment-Aware Packaging */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Deployment Scopes"
              title="Deployment-aware commercial configurations."
              description="Three primary operational contexts guide commercial evaluation, designed to match the governance and infrastructure realities of your facility."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {deploymentPackages.map((pkg) => {
                const Icon = pkg.icon;
                const cardBorder = pkg.featured ? "border-primary/50 shadow-md shadow-primary/5" : "border-border/80";
                return (
                  <div
                    key={pkg.title}
                    className={"rounded-2xl border bg-card p-6 sm:p-7 shadow-xs flex flex-col justify-between mc-card mc-card-interactive group " + cardBorder}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Icon className="size-5" aria-hidden="true" />
                        </div>
                        {pkg.featured && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                            Multi-Location
                          </span>
                        )}
                      </div>

                      <div>
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                          {pkg.scope}
                        </span>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {pkg.title}
                        </h3>
                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                          {pkg.desc}
                        </p>
                      </div>

                      <ul className="pt-4 border-t border-border/60 space-y-2.5 text-xs text-muted-foreground">
                        {pkg.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-4 border-t border-border/60">
                      <Button asChild className="w-full bg-primary text-primary-foreground font-semibold shadow-xs">
                        <Link href="/request-demo">Request Scope Assessment</Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 4: What Influences a Commercial Assessment */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Assessment Criteria"
              title="What influences a commercial assessment."
              description="When evaluating MarkCare for your healthcare organization, our team reviews specific operational parameters to deliver a transparent, accurate commercial proposal."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {assessmentCriteria.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-2 mc-card"
                >
                  <h3 className="text-base font-bold text-foreground">
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

        {/* Section 5: Verified Capability Bridge */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Operational Directory"
              title="Explore what the platform covers."
              description="Commercial packaging corresponds to the verified operational modules deployed at your workstations. Review detailed specifications across our core departmental engines."
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
                        <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                      </div>

                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {mod.title}
                      </h3>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}

              <Link
                href="/modules"
                className="rounded-2xl border border-primary/40 bg-primary/5 p-6 shadow-xs flex flex-col justify-between group hover:bg-primary/10 transition-all duration-200 sm:col-span-2 lg:col-span-1"
              >
                <div className="space-y-3">
                  <div className="size-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FileText className="size-4.5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>View Complete Module Catalog</span>
                    <ArrowRight className="size-4 text-primary group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Review comprehensive technical specifications and workflows across all MarkCare hospital modules.
                  </p>
                </div>
              </Link>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 6: Deployment & Architecture Bridge */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs flex flex-col justify-between mc-card">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                    Deployment Scaling
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    Facility Scale &amp; Topology Options
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Review how MarkCare adapts to community health centres, regional referral institutions, and
                    multi-branch healthcare networks with branch-scoped queue isolation.
                  </p>
                </div>
                <div className="pt-6">
                  <Button asChild variant="outline" size="sm" className="font-semibold hover:bg-accent/60">
                    <Link href="/facilities">
                      Explore Facility Governance &rarr;
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs flex flex-col justify-between mc-card">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                    Technical Infrastructure
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    System Architecture &amp; Data Flow
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Inspect the underlying data architecture, role-based access scoping, tamper-evident audit logs,
                    and on-premises Local-Area Network resilience.
                  </p>
                </div>
                <div className="pt-6">
                  <Button asChild variant="outline" size="sm" className="font-semibold hover:bg-accent/60">
                    <Link href="/platform">
                      Review Platform Architecture &rarr;
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 7: Pricing Transparency Notice */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-10 max-w-3xl mx-auto space-y-5 shadow-xs">
              <div className="flex items-center gap-3 pb-3 border-b border-border/60">
                <ShieldCheck className="size-6 text-primary shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                    Commercial Policy
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    Transparent, scope-based commercial evaluation.
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Every healthcare facility operates with a unique operational footprint. MarkCare commercial agreements
                are structured transparently around active bed capacity, workstation terminals, branch topology, and
                support service requirements. We do not assess per-patient transaction fees or arbitrary usage penalties.
              </p>

              <div className="pt-2">
                <Button asChild className="bg-primary text-primary-foreground font-semibold shadow-xs">
                  <Link href="/request-demo">
                    Request a Deployment &amp; Pricing Assessment
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 8: FAQ */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Commercial FAQ"
              title="Frequently asked commercial questions."
              description="Common inquiries regarding our procurement process, deployment options, and institutional evaluation."
            />

            <div className="max-w-3xl mx-auto space-y-4">
              {pricingFaqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-2 mc-card"
                >
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                    <HelpCircle className="size-4.5 text-primary shrink-0" aria-hidden="true" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6.5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 9: Canonical CTA Banner */}
        <MarketingCtaBanner
          headline="Discuss commercial configuration for your facility"
          description="Speak directly with our implementation architects to evaluate deployment models, station licensing, and rollout planning tailored to your operational requirements."
          primaryCta={{
            label: "Request Commercial Proposal",
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
