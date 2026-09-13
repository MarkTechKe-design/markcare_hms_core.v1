import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, FlaskConical, CheckCircle2, Clock, AlertCircle, Receipt, Stethoscope } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from "@/components/marketing/marketing-badge";
import { MarketingScreenshotFrame } from "@/components/marketing/marketing-screenshot-frame";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Diagnostic Laboratory Workspace — MarkCare HMS",
  description:
    "Electronic test requests, specimen accession numbers, parameter reference ranges, panic alerts, and multi-tier result verification pipelines.",
};

export default function LaboratoryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Breadcrumb & Hero */}
        <section className="border-b border-border/80 bg-muted/20 py-16 sm:py-20">
          <MarketingContainer>
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-6">
              <Link href="/modules" className="hover:text-foreground transition-colors">Modules</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">Laboratory</span>
            </div>

            <div className="max-w-3xl">
              <MarketingBadge className="mb-4">Diagnostic Pipeline</MarketingBadge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Auditable specimen accessioning and verified diagnostic results.
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Streamline pathology and diagnostic workflows from physician electronic requisition to sample collection, laboratory entry, and validated clinical result release.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                  <Link href="/request-demo">
                    Schedule Laboratory Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/modules">Back to Directory</Link>
                </Button>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* Visual Frame */}
        <section className="py-16 sm:py-20 border-b border-border">
          <MarketingContainer>
            <div className="mb-8 max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Laboratory Bench & Result Verification</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Order accessioning, parameter entry, reference range comparison, and result validation.
              </p>
            </div>

            <MarketingScreenshotFrame
              title="MarkCare Laboratory Workbench & Diagnostic Orders"
            />
          </MarketingContainer>
        </section>

        {/* Diagnostic Pipeline Steps */}
        <section className="py-20 bg-muted/30 border-b border-border">
          <MarketingContainer>
            <div className="max-w-2xl mb-12">
              <MarketingBadge>Workflow Traceability</MarketingBadge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mt-2">
                Traceable from doctor order to patient record.
              </h2>
              <p className="text-sm text-muted-foreground mt-3">
                Laboratory tests require high integrity to protect clinical decision-making. MarkCare guarantees end-to-end accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-xl border border-border bg-card">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary font-bold text-xs mb-3">1</div>
                <h3 className="text-sm font-bold text-foreground">Electronic Request</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Doctor prescribes blood, urine, or tissue panels directly during consultation with clinical indication notes.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-border bg-card">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary font-bold text-xs mb-3">2</div>
                <h3 className="text-sm font-bold text-foreground">Specimen Accession</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Phlebotomy logs sample collection time and assigns accession numbers to avoid specimen confusion.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-border bg-card">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary font-bold text-xs mb-3">3</div>
                <h3 className="text-sm font-bold text-foreground">Bench Result Entry</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Technologists record quantitative findings against age- and sex-stratified normal reference intervals.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-border bg-card">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary font-bold text-xs mb-3">4</div>
                <h3 className="text-sm font-bold text-foreground">Verification & Release</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Senior technologist reviews and validates results, instantly updating the physician consult screen and patient folio.
                </p>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* Cross links */}
        <section className="py-16 border-b border-border">
          <MarketingContainer>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-base font-bold text-foreground">Explore Connected Departments</h3>
                <p className="text-xs text-muted-foreground mt-0.5">See how laboratory results link with consultations and billing.</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/modules/clinical-emr">Clinical EMR</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/modules/billing">Billing & Cashier</Link>
                </Button>
              </div>
            </div>
          </MarketingContainer>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

