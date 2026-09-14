import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, Layers, ShieldCheck, Database, CreditCard, QrCode, FileText } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from '@/components/marketing/marketing-badge';
import { MarketingCtaBanner } from '@/components/marketing/marketing-cta-banner';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Ecosystem Integrations & Interoperability — MarkCare HMS",
  description:
    "Explore MarkCare HMS external interoperability foundations: M-Pesa STK push, SHA claims workflows, eTIMS fiscal outbox schema, and planned healthcare data standards.",
};

export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border/80 bg-muted/20 py-20">
          <MarketingContainer>
            <div className="max-w-3xl">
              <MarketingBadge className="mb-3">Interoperability Foundation</MarketingBadge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Connected with regional payments, national claims, and fiscal protocols.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Hospital systems do not operate in isolation. MarkCare connects clinical point-of-care actions to mobile money rails, national insurance schemes, and verified fiscal validation schemas.
              </p>
            </div>
          </MarketingContainer>
        </section>

        {/* Implemented & Ready Integrations */}
        <section className="py-20 border-b border-border">
          <MarketingContainer>
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                <CheckCircle2 className="h-3.5 w-3.5" /> Implemented Capabilities
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Operational integrations with production-ready architecture.
              </h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                These capabilities are built directly into MarkCare HMS core services. Deployment requires standard institutional credentials and connectivity configuration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between mc-card-interactive mc-reveal group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Implemented Engine
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">M-Pesa / Daraja API Foundation</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Automated STK push prompts sent directly to patient mobile numbers at cashier desks. Asynchronous webhook callbacks process transaction receipts, confirm settlement, and mark invoices as paid without manual reference typing.
                  </p>
                  <div className="mt-4 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground border border-border/60">
                    <span className="font-semibold text-foreground">Configuration Requirement:</span> Requires hospital Safaricom Daraja Business Shortcode, Consumer Key/Secret, and Passkey setup.
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between mc-card-interactive mc-reveal group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Implemented Workflow
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">SHA & Insurance Claim Architecture</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Internal claims management workflow supporting split billing between payer schemes and patient copay. Pre-authorizations, benefit package allocations, and structured claim submission records are indexed directly on the patient chart.
                  </p>
                  <div className="mt-4 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground border border-border/60">
                    <span className="font-semibold text-foreground">Configuration Requirement:</span> Facility-specific SHA provider credentials and scheme mapping configured during hospital onboarding.
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between mc-card-interactive mc-reveal group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600">
                      <QrCode className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Outbox Ready
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">eTIMS Fiscalization Framework</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Structured outbox data pipeline for electronic tax invoice transmission. Generates cryptographically verifiable QR codes on generated patient receipts, facilitating public authenticity checks via /invoice-verify.
                  </p>
                  <div className="mt-4 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground border border-border/60">
                    <span className="font-semibold text-foreground">Configuration Requirement:</span> Production deployment requires integration with hospital KRA eTIMS signing solution or physical control unit.
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between mc-card-interactive mc-reveal group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Implemented Schema
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">DHA / Electronic Claims Schema</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Standardized electronic encounter submission schemas encoding ICD-10 diagnostic entries, doctor consultation codes, and itemized pharmacy NDC mappings for payer submission.
                  </p>
                  <div className="mt-4 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground border border-border/60">
                    <span className="font-semibold text-foreground">Configuration Requirement:</span> Requires clearinghouse payer connectivity and active provider identifier registration.
                  </div>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* Roadmap Architecture */}
        <section className="py-20 bg-muted/30 border-b border-border">
          <MarketingContainer>
            <div className="max-w-2xl mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                <AlertCircle className="h-3.5 w-3.5" /> Architectural Roadmap
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Planned healthcare ecosystem extensions.
              </h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                The following capabilities represent architectural foundations currently in active research and scheduled development. They are not represented as live production integrations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-base font-bold text-foreground">DICOM / PACS Diagnostic Imaging</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Integration architecture designed to bridge laboratory and radiology requisition workflows with hospital PACS storage servers, enabling viewing links within patient consultation charts.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-base font-bold text-foreground">KHIS / DHIS2 Epidemiological Reporting</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Automated monthly aggregate indicator extraction pipelines for ministry of health disease surveillance and workload reporting forms (MOH 705A/B, MOH 711).
                </p>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* Harmonized CTA Card */}
          <MarketingCtaBanner
            headline="Discuss your hospital's integration requirements."
            description="Our engineering team can evaluate your third-party payment rails, insurance providers, and existing diagnostic hardware."
            primaryCta={{
              label: "Schedule Technical Review",
              href: "/request-demo",
            }}
            secondaryCta={{
              label: "Review Platform Topology",
              href: "/platform",
            }}
          />
      </main>

      <MarketingFooter />
    </div>
  );
}


