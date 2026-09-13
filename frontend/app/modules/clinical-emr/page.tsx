import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Stethoscope, Activity, FileText, FlaskConical, Pill, Receipt, CheckCircle2 } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from "@/components/marketing/marketing-badge";
import { MarketingScreenshotFrame } from "@/components/marketing/marketing-screenshot-frame";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Clinical EMR & Consultation Workspace — MarkCare HMS",
  description:
    "Structured electronic health records, nursing triage capture, doctor consultation queue, and integrated order entry for diagnostic and pharmaceutical workflows.",
};

export default function ClinicalEmrPage() {
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
              <span className="text-foreground">Clinical EMR</span>
            </div>

            <div className="max-w-3xl">
              <MarketingBadge className="mb-4">Clinical Core</MarketingBadge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Structured clinical encounters with complete patient continuity.
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Empower physicians and nursing teams with an electronic consultation workspace that unifies triage vitals, past encounter history, allergy profiles, and electronic order entry without disruption.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                  <Link href="/request-demo">
                    Request Clinical Demo
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

        {/* Workspace Visual Section */}
        <section className="py-16 sm:py-20 border-b border-border">
          <MarketingContainer>
            <div className="mb-8 max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">The Doctor Consultation Workspace</h2>
              <p className="text-sm text-muted-foreground mt-1">
                A single clinical surface showing current vitals, patient medical history, differential diagnosis, and order entry.
              </p>
            </div>

            <MarketingScreenshotFrame
              title="MarkCare Doctor Consultation Workspace (Electronic Health Record)"
            />
          </MarketingContainer>
        </section>

        {/* Clinical Sequence & Architecture */}
        <section className="py-20 bg-muted/30 border-b border-border">
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <MarketingBadge>Sequential Care Pipeline</MarketingBadge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  From reception check-in to clinical discharge.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  MarkCare replaces handwritten paper slips with an auditable clinical sequence that ensures clinicians never lose context when seeing patients in outpatient or specialty clinics.
                </p>

                <div className="pt-6 space-y-4">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Downstream Integration</span>
                    <p className="text-xs text-muted-foreground mt-1">
                      Medications ordered during consultation route directly to the Pharmacy FEFO queue, while diagnostic tests appear immediately on laboratory accession workbenches.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary text-xs">
                    01
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Reception & Queue Allocation</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Patient records are indexed by unique hospital identification numbers, resolving duplicate histories and placing the patient in their assigned clinic queue.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary text-xs">
                    02
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Triage & Baseline Vitals</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Nursing staff record temperature, blood pressure, heart rate, oxygen saturation, and BMI. Urgent vitals trigger visual flags on the physician worklist.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary text-xs">
                    03
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Consultation & SOAP Notes</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Physicians capture structured subjective complaints, objective physical examination notes, ICD-10 diagnostic selections, and longitudinal treatment plans.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary text-xs">
                    04
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Direct Order Entry & Disposition</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Prescriptions, laboratory tests, or inpatient admission orders are submitted in a single action, automatically updating the patient ledger without manual cashier re-entry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* Connected Workflows */}
        <section className="py-16 border-b border-border">
          <MarketingContainer>
            <div className="max-w-2xl mb-8">
              <h2 className="text-xl font-bold text-foreground">Connected Departmental Modules</h2>
              <p className="text-xs text-muted-foreground mt-1">Actions taken within the consultation desk instantly synchronize with downstream hospital services.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/modules/pharmacy" className="p-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                <Pill className="h-5 w-5 text-primary mb-2" />
                <h3 className="text-sm font-semibold text-foreground">Pharmacy Dispensing</h3>
                <p className="text-xs text-muted-foreground mt-1">Electronic prescriptions trigger FEFO batch allocation at dispensary counters.</p>
              </Link>
              <Link href="/modules/laboratory" className="p-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                <FlaskConical className="h-5 w-5 text-primary mb-2" />
                <h3 className="text-sm font-semibold text-foreground">Diagnostic Lab</h3>
                <p className="text-xs text-muted-foreground mt-1">Investigation orders appear instantly on accession benches for specimen collection.</p>
              </Link>
              <Link href="/modules/inpatient" className="p-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                <Activity className="h-5 w-5 text-primary mb-2" />
                <h3 className="text-sm font-semibold text-foreground">Inpatient Admission</h3>
                <p className="text-xs text-muted-foreground mt-1">Direct admission transfers patient encounters to ward bed allocation desks.</p>
              </Link>
              <Link href="/modules/billing" className="p-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                <Receipt className="h-5 w-5 text-primary mb-2" />
                <h3 className="text-sm font-semibold text-foreground">Revenue Settlement</h3>
                <p className="text-xs text-muted-foreground mt-1">Doctor consultation fees and ordered services post immediately to the patient folio.</p>
              </Link>
            </div>
          </MarketingContainer>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/20">
          <MarketingContainer className="text-center max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground">Equip your clinicians with a modern EMR.</h2>
            <p className="text-sm text-muted-foreground mt-2">See how MarkCare structures clinical consultations while preserving rapid patient turnaround.</p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild>
                <Link href="/request-demo">Request a Demo</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/solutions">View Clinical Solutions</Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}

