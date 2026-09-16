import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  GitBranch,
  Layers,
  ShieldCheck,
  ArrowRight,
  Server,
  Globe,
  Network,
  Lock,
  Stethoscope,
  Pill,
  CreditCard,
  Activity,
  Hospital,
  ChevronRight,
  FileText,
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
  title: "Facility Scale, Deployment & Multi-Branch Governance",
  description:
    "Explore how MarkCare HMS scales across physical healthcare facilities: single community clinics, referral hospitals, and distributed multi-branch healthcare networks.",
};

// Section 2: Facility Scale & Capacity Tiers
const facilityScaleTiers = [
  {
    title: "Community & Outpatient Clinics",
    scale: "Single-Facility Ambulatory Care",
    desc: "Compact operational footprint prioritizing rapid patient registration, high outpatient turnover, and streamlined station coordination.",
    icon: Building2,
    attributes: [
      { label: "Operational Scale", val: "Focused outpatient consultations and walk-in care" },
      { label: "Complexity", val: "Single-site triage, doctor rooms, and local dispensary" },
      { label: "Governance", val: "Centralized administrator managing shared clinic configuration" },
      { label: "Deployment", val: "Cloud-hosted or compact local workstation network" },
    ],
  },
  {
    title: "Mid-Sized Hospitals & Medical Centres",
    scale: "Multi-Departmental Acute Care",
    desc: "Expanding operational volume requiring structured coordination across multiple outpatient specialty clinics, inpatient beds, and diagnostic benches.",
    icon: Hospital,
    attributes: [
      { label: "Operational Scale", val: "Active inpatient capacity with multi-specialty outpatient clinics" },
      { label: "Complexity", val: "Concurrent shift rosters across clinical, nursing, and cashier stations" },
      { label: "Governance", val: "Departmental oversight with station-level access enforcement" },
      { label: "Deployment", val: "Local-Area Network (LAN) server with cloud backup synchronization" },
    ],
  },
  {
    title: "Regional & Referral Hospitals",
    scale: "High-Volume Secondary & Tertiary Care",
    desc: "High operational volume requiring rigorous bed census tracking, departmental worklists, multiple cash desks, and strict shift accountability.",
    icon: Layers,
    attributes: [
      { label: "Operational Scale", val: "Extensive multi-ward bed matrices and high daily patient volume" },
      { label: "Complexity", val: "Specialized clinical teams, multiple cashier desks, and round-the-clock intake" },
      { label: "Governance", val: "Multi-tier supervisory oversight with comprehensive audit trail logging" },
      { label: "Deployment", val: "Dedicated on-premises LAN server infrastructure engineered for continuous operation" },
    ],
  },
  {
    title: "Distributed Multi-Branch Networks",
    scale: "Healthcare Groups & Multi-Facility Operators",
    desc: "Unified group governance coordinating independent branch hospitals, satellite clinics, and centralized administration across multiple locations.",
    icon: Network,
    attributes: [
      { label: "Operational Scale", val: "Multiple physical facility branches serving distinct geographical communities" },
      { label: "Complexity", val: "Inter-branch medication transfers, autonomous queues, and distinct operating hours" },
      { label: "Governance", val: "Centralized formulary and tariff control with branch-scoped staff access" },
      { label: "Deployment", val: "Hybrid topology: branch-level LAN autonomy with centralized executive rollups" },
    ],
  },
];

// Section 3: Deployment Topologies
const deploymentTopologies = [
  {
    title: "Local-Area Network (LAN) Deployment",
    subtitle: "On-Premises Operational Continuity",
    desc: "LAN deployment options can help keep core workstation workflows available within a facility during public-internet disruptions, depending on the facility's infrastructure and deployment configuration. Workstations communicate directly over the local network server.",
    icon: Server,
  },
  {
    title: "Managed Cloud-Hosted Deployment",
    subtitle: "Multi-Location Centralized Access",
    desc: "Hosted on secure cloud infrastructure suited for healthcare organizations with dependable broadband connectivity, enabling executive access from any authorized location with automated maintenance and off-site backups.",
    icon: Globe,
  },
  {
    title: "Hybrid Branch-to-Central Architecture",
    subtitle: "Branch Autonomy with Group Governance",
    desc: "Combines autonomous local branch networks for frontline clinical and cashier workstations with scheduled synchronization to headquarters, supporting centralized financial rollups and formulary updates.",
    icon: GitBranch,
  },
];

// Section 4 & 5: Governance Tenets
const singleFacilityTenets = [
  {
    title: "Station-Level Access Boundaries",
    desc: "Staff permissions are bound strictly to assigned operational duties, keeping consultation records, dispensary stock, and cashier folios controlled.",
  },
  {
    title: "Departmental Traceability",
    desc: "Every record modification, prescription fulfillment, and payment entry preserves actor, station, and timestamp metadata for internal governance.",
  },
  {
    title: "Centralized Facility Configuration",
    desc: "Facility administrators maintain unified price tariffs, ward configurations, and service catalogs from a single management console.",
  },
];

const multiBranchTenets = [
  {
    title: "Branch Queue Isolation",
    desc: "Active patient worklists in triage, consultation, and dispensary remain isolated to the local branch, preventing cross-location queue confusion.",
  },
  {
    title: "Central Formulary & Master Tariffs",
    desc: "Healthcare group leadership establishes standardized medication formularies and service fees centrally while branches execute daily transactions locally.",
  },
  {
    title: "Inter-Branch Inventory Accountability",
    desc: "Track pharmaceutical transfers between main stores and satellite branch dispensaries with auditable dispatch and receipt logs.",
  },
  {
    title: "Consolidated Executive Visibility",
    desc: "Leadership reviews group-wide census, revenue rollups, and departmental performance across all operating locations without disrupting branch autonomy.",
  },
];

// Section 6: Infrastructure Realities
const infrastructurePoints = [
  {
    title: "Variable Broadband Reliability",
    desc: "Designed around real-world connectivity constraints, supporting local-network configurations so clinical shifts do not freeze during internet downtime.",
  },
  {
    title: "Gradual Digital Transition",
    desc: "Accommodates facilities transitioning from paper-based ledgers to digital operations with high-contrast, intuitive workstation layouts.",
  },
  {
    title: "Infrastructure-Aware Footprint",
    desc: "Runs efficiently on standard hospital workstation hardware and local server environments without requiring specialized proprietary terminal appliances.",
  },
  {
    title: "Scalable Administrative Growth",
    desc: "Allows an organization to begin with a single outpatient clinic and expand into multi-ward inpatient hospitals and branch networks over time.",
  },
];

// Section 7: Module Hand-Off Links
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

export default function FacilitiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Facility Scale &middot; Deployment Topologies
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              Designed to scale with the way healthcare organizations operate.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Facility size, bed capacity, branch structure, and physical infrastructure differ across healthcare
              organizations. MarkCare accommodates single community clinics, regional referral hospitals, and
              distributed multi-branch networks with adaptable deployment and governance models.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
                <Link href="/modules">
                  Explore Deployment &amp; Modules
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:bg-accent/60 transition-all active:scale-[0.98]">
                <Link href="/platform">See the Platform Architecture</Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>

        {/* Section 2: Facility Scale & Capacity Tiers */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Operational Scale &amp; Tiers"
              title="Tailored for healthcare delivery at every operational scale."
              description="Whether operating an outpatient community centre or coordinating a regional hospital network, MarkCare provides structured governance suited to your physical operating complexity."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilityScaleTiers.map((tier) => {
                const Icon = tier.icon;
                return (
                  <article
                    key={tier.title}
                    className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 flex flex-col justify-between shadow-xs mc-card"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          <Icon className="size-5.5" aria-hidden="true" />
                        </div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                          {tier.scale}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {tier.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {tier.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border/60 space-y-2.5">
                        {tier.attributes.map((attr) => (
                          <div key={attr.label} className="text-xs flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                            <span className="font-semibold text-foreground shrink-0 w-32">{attr.label}:</span>
                            <span className="text-muted-foreground">{attr.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 3: Deployment Topologies */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Topology Choices"
              title="Deployment shaped around your facility."
              description="Healthcare facilities operate under differing infrastructure conditions. MarkCare supports flexible hosting configurations designed around uninterrupted daily operations."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deploymentTopologies.map((topo) => {
                const Icon = topo.icon;
                return (
                  <div
                    key={topo.title}
                    className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between mc-card"
                  >
                    <div className="space-y-4">
                      <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-primary block mb-1">
                          {topo.subtitle}
                        </span>
                        <h3 className="text-base font-bold text-foreground">
                          {topo.title}
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {topo.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline" size="sm" className="font-semibold hover:bg-accent/60">
                <Link href="/platform">
                  Inspect Technical System Architecture &amp; Data Flow &rarr;
                </Link>
              </Button>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 4: Single Facility Governance */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Single-Facility Operations
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
                  Accountable governance within a single facility.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Even within an individual hospital or clinic, operational accountability depends on clear station boundaries.
                  MarkCare establishes role-aware access controls and localized data flows that ensure clinical, laboratory,
                  pharmacy, and cashier staff maintain coordinated records without stepping outside their responsibilities.
                </p>
                <div className="pt-2">
                  <Button asChild variant="outline" size="sm" className="font-semibold hover:bg-accent/60">
                    <Link href="/platform">
                      Review Role-Based Access Scoping &rarr;
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                    <Lock className="size-4 text-primary" aria-hidden="true" />
                    Internal Facility Controls
                  </h3>
                  <div className="space-y-3">
                    {singleFacilityTenets.map((tenet) => (
                      <div key={tenet.title} className="p-3.5 rounded-xl bg-muted/60 border border-border/60 text-xs">
                        <strong className="text-foreground block mb-1">{tenet.title}</strong>
                        <p className="text-muted-foreground leading-relaxed">{tenet.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 5: Multi-Branch / Multi-Location Governance */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                    <Network className="size-4 text-primary" aria-hidden="true" />
                    Multi-Branch Scoping Model
                  </h3>
                  <div className="space-y-3">
                    {multiBranchTenets.map((tenet) => (
                      <div key={tenet.title} className="p-3.5 rounded-xl bg-muted/60 border border-border/60 text-xs">
                        <strong className="text-foreground block mb-1">{tenet.title}</strong>
                        <p className="text-muted-foreground leading-relaxed">{tenet.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Distributed Healthcare Networks
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
                  Multi-branch governance across distributed locations.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Healthcare groups require centralized policy and financial oversight, but physical branches must manage
                  their own day-to-day operations. MarkCare structures organizational context hierarchically &mdash;
                  connecting Facility &rarr; Branch &rarr; Department &mdash; so staff remain focused on local patient
                  movement while leadership maintains central visibility.
                </p>
                <div className="pt-2">
                  <Button asChild variant="outline" size="sm" className="font-semibold hover:bg-accent/60">
                    <Link href="/platform">
                      Inspect Branch Tenancy &amp; Data Boundaries &rarr;
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 6: Infrastructure & Regional Realities */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Operating Context"
              title="Engineered for real-world infrastructure constraints."
              description="MarkCare is built with practical operational realities in mind: varying network connectivity, mixed physical hardware, and progressive digital system adoption."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {infrastructurePoints.map((pt) => (
                <div
                  key={pt.title}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-3 mc-card"
                >
                  <h3 className="text-base font-bold text-foreground">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 7: From Facility Scale to Operational Capabilities Hand-Off */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Operational Bridge"
              title="Scale the environment. Choose the operational tools."
              description="Facility topology governs your physical deployment boundaries. Explore the canonical departmental modules engineered to operate across your workstations."
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

        {/* Section 8: Pricing Hand-Off */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="rounded-2xl border border-border/80 bg-card p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Commercial Sizing &amp; Licensing
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Ready to compare deployment options?
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl">
                  Review commercial packaging, deployment tier inclusions, user seat allocations, and support options
                  tailored to your facility scale.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shrink-0 shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
                <Link href="/pricing">
                  Compare Deployment Pricing
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 9: Canonical CTA Banner */}
        <MarketingCtaBanner
          headline="Evaluate MarkCare for your healthcare organization"
          description="Speak with our implementation team to discuss how MarkCare aligns with your facility scale, physical branch architecture, or deployment environment."
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

