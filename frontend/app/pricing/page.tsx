import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cloud, Server, HelpCircle, ShieldCheck } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from "@/components/marketing/marketing-badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Deployment Models & Commercial Pricing — MarkCare HMS",
  description:
    "Transparent deployment options for hospitals and clinic networks. Choose between fully managed MarkCare Cloud and hospital-hosted MarkCare Enterprise.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border/80 bg-muted/20 py-20">
          <MarketingContainer>
            <div className="max-w-3xl">
              <MarketingBadge className="mb-3">Deployment & Licensing</MarketingBadge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Flexible hospital deployment models with customized quotes.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Hospital sizes and operational complexities vary significantly. We provide customized commercial terms based on your active branches, bed capacity, and deployment preferences.
              </p>
            </div>
          </MarketingContainer>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 border-b border-border">
          <MarketingContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Cloud SaaS */}
              <div className="rounded-2xl border-2 border-primary bg-card p-8 shadow-xs flex flex-col justify-between relative">
                <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                  Recommended for Clinics & Networks
                </div>
                <div>
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">MarkCare Cloud</h2>
                  <p className="text-sm font-medium text-primary mt-1">Managed Cloud Infrastructure</p>
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                    A fully managed deployment hosted on dedicated, isolated cloud resources. We handle system maintenance, database backups, and software updates so your clinical teams can focus entirely on patient care.
                  </p>

                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">Deployment Features:</span>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Zero hospital server hardware required
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Automated daily database backups
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Rolling software updates and security patches
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Secure SSL/TLS endpoint encryption
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Multi-branch centralized administration
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-foreground">Custom Quote</span>
                    <span className="text-xs text-muted-foreground block mt-0.5">Based on active clinics and branches</span>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground" size="lg" asChild>
                    <Link href="/request-demo">Request Cloud Proposal</Link>
                  </Button>
                </div>
              </div>

              {/* Enterprise On-Premise */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex p-3 rounded-xl bg-muted text-foreground mb-4">
                    <Server className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">MarkCare Enterprise</h2>
                  <p className="text-sm font-medium text-muted-foreground mt-1">Hospital On-Premise Deployment</p>
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                    Designed for large hospitals, regional referral facilities, or institutions requiring complete control over server hardware, internal network perimeters, and internal data residency.
                  </p>

                  <div className="mt-6 pt-6 border-t border-border space-y-3">
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">Deployment Features:</span>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Deployed on hospital-owned server hardware
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Local area network (LAN) operational mode
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Complete institutional data sovereignty
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> On-site IT team training and handover
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Dedicated enterprise SLA and technical support
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-foreground">Custom Quote</span>
                    <span className="text-xs text-muted-foreground block mt-0.5">Based on facility scale and support SLA</span>
                  </div>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <Link href="/request-demo">Inquire About On-Premise</Link>
                  </Button>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* Implementation Workflow */}
        <section className="py-20 bg-muted/30 border-b border-border">
          <MarketingContainer>
            <div className="max-w-2xl mb-12">
              <MarketingBadge>Onboarding Process</MarketingBadge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mt-2">
                Structured deployment: Configure → Train → Go Live.
              </h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Hospital transitions require careful coordination. Our implementation methodology ensures clinical services continue uninterrupted.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <span className="text-xs font-bold text-primary">PHASE 1</span>
                <h3 className="text-base font-bold text-foreground mt-1">Configure & Catalog Setup</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  We configure your hospital branches, clinics, wards, master drug catalogs, diagnostic panels, and service billing tariffs.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <span className="text-xs font-bold text-primary">PHASE 2</span>
                <h3 className="text-base font-bold text-foreground mt-1">Departmental Training</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Clinicians, triage nurses, pharmacy technicians, lab technologists, and cashiers receive hands-on training with their specific desks.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <span className="text-xs font-bold text-primary">PHASE 3</span>
                <h3 className="text-base font-bold text-foreground mt-1">Supervised Go-Live</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Our team provides direct operational floor support on day one of queue migration, ensuring immediate resolution of any bottlenecks.
                </p>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* FAQ Teaser */}
        <section className="py-16 bg-card">
          <MarketingContainer className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-bold text-foreground">Have questions about licensing and terms?</h3>
              <p className="text-xs text-muted-foreground mt-1">Explore our detailed answers to common architectural and billing questions.</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/resources/faq">
                Read FAQ
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </MarketingContainer>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
