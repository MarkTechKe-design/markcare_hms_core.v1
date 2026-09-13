import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, GitBranch, Layers, ShieldCheck, Cpu, Database, Server } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from "@/components/marketing/marketing-badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Platform Architecture — MarkCare HMS",
  description:
    "Explore the MarkCare healthcare operating system architecture. Built for multi-facility governance, branch isolation, and synchronized clinical-operational workflows.",
};

export default function PlatformPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative border-b border-border/80 bg-slate-900 text-white py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900/60 to-slate-950" />
          <MarketingContainer className="relative z-10">
            <div className="max-w-3xl">
              <MarketingBadge className="mb-4 text-blue-300 border-blue-800 bg-blue-950/50">
                System Architecture & Governance
              </MarketingBadge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
                Engineered for hospitals that operate as cohesive health systems.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                MarkCare connects facility governance, clinical encounters, pharmacy dispensing, diagnostic orders, and revenue settlement into one unified data model without sacrificing branch-level autonomy.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:brightness-110" asChild>
                  <Link href="/request-demo">
                    Schedule Technical Walkthrough
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" className="border-slate-700 bg-slate-900/50 text-slate-200 hover:bg-slate-800" asChild>
                  <Link href="/modules">Explore Modules</Link>
                </Button>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* Multi-Facility & Branch Architecture */}
        <section className="py-20 sm:py-24 border-b border-border">
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <MarketingBadge>Organizational Scoping</MarketingBadge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Centralized oversight with strict branch data isolation.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether running a single specialized hospital or a dispersed regional network, MarkCare structures healthcare operations around explicit facility, branch, and clinic scopes.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="text-base font-semibold text-foreground">Facility & Branch Topology</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Each branch manages localized point-of-care queues, physical inventory bins, and billing tariff structures while reporting to central management.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="text-base font-semibold text-foreground">Query Scoping & Authorization</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Every database transaction is validated against the authenticated user&apos;s assigned facility and branch scopes to prevent cross-facility data leakage.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="text-base font-semibold text-foreground">Unified Patient Identity</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Patients maintain consistent identifiers across visits, enabling continuous medical history while maintaining branch-specific visit encounters.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tenant Model Schema</span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="h-3.5 w-3.5" /> Scoped Enforcement
                    </span>
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-muted/60 border border-border/60">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-primary" /> Facility Level (Hospital Entity)
                      </div>
                      <p className="text-muted-foreground mt-1 text-[11px]">
                        Corporate configuration, legal entity registration, and master medical catalogs.
                      </p>
                    </div>
                    <div className="ml-4 p-3 rounded-lg bg-muted/40 border border-border/60">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <GitBranch className="h-4 w-4 text-primary" /> Branch Level (Physical Site)
                      </div>
                      <p className="text-muted-foreground mt-1 text-[11px]">
                        Local store stock, service points, cashier shifts, and clinic consult rooms.
                      </p>
                    </div>
                    <div className="ml-8 p-3 rounded-lg bg-background border border-border/80">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <Layers className="h-4 w-4 text-primary" /> Service Points (Clinics & Departments)
                      </div>
                      <p className="text-muted-foreground mt-1 text-[11px]">
                        Triage, Consultation, Laboratory Bench, Pharmacy Counter, and Cashier Desk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* Deployment Models */}
        <section className="py-20 sm:py-24 bg-muted/30 border-b border-border">
          <MarketingContainer>
            <div className="max-w-2xl mb-12">
              <MarketingBadge>Deployment Options</MarketingBadge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-3">
                Deployment models tailored to hospital IT posture.
              </h2>
              <p className="text-muted-foreground mt-4">
                MarkCare supports flexible hosting models depending on institutional compliance, connectivity availability, and operational preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-border bg-card p-8 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-5">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">MarkCare Cloud</h3>
                  <p className="text-sm font-medium text-primary mt-1">Managed Cloud Deployment</p>
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                    A fully managed deployment hosted on secure, isolated application infrastructure. Ideal for healthcare providers seeking zero infrastructure management overhead.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Automated rolling application updates
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Managed scheduled database backups
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Provisioned SSL and encrypted transport
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <Button className="w-full" asChild>
                    <Link href="/request-demo">Inquire About Cloud Hosting</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-8 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-5">
                    <Server className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">MarkCare Enterprise</h3>
                  <p className="text-sm font-medium text-primary mt-1">On-Premise / Private Infrastructure</p>
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                    Designed for hospital organizations requiring strict on-premise hardware hosting, private network boundaries, or specific internal data sovereignty configurations.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Deployed on hospital-owned server hardware
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Operates within hospital local network
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Full internal database data governance
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <Button className="w-full" asChild>
                    <Link href="/request-demo">Inquire About On-Premise</Link>
                  </Button>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card border-b border-border">
          <MarketingContainer className="text-center max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Ready to evaluate MarkCare for your healthcare facility?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Speak with our healthcare implementation team to review your hospital workflow requirements and schedule a live demonstration.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                <Link href="/request-demo">
                  Request a Demonstration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
