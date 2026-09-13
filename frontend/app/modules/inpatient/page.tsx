import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Bed, Users, Activity, FileCheck, Receipt, Stethoscope } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from "@/components/marketing/marketing-badge";
import { MarketingScreenshotFrame } from "@/components/marketing/marketing-screenshot-frame";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Inpatient & Ward Bed Management — MarkCare HMS",
  description:
    "Ward occupancy tracking, bed allocations, inpatient admission notes, nursing handovers, and discharge billing summaries.",
};

export default function InpatientPage() {
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
              <span className="text-foreground">Inpatient Management</span>
            </div>

            <div className="max-w-3xl">
              <MarketingBadge className="mb-4">Ward Operations</MarketingBadge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Real-time bed occupancy and coordinated ward admissions.
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Manage hospital bed capacity with complete visibility. MarkCare structures patient admissions, ward transfers, inpatient daily rounds, and final discharge clearance.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                  <Link href="/request-demo">
                    Schedule Inpatient Walkthrough
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
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Ward Census & Bed Matrix</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Visualizing available, occupied, and maintenance bed statuses across male, female, and pediatric wards.
              </p>
            </div>

            <MarketingScreenshotFrame
              title="MarkCare Inpatient Ward & Bed Matrix Workspace"
            />
          </MarketingContainer>
        </section>

        {/* Inpatient Stages */}
        <section className="py-20 bg-muted/30 border-b border-border">
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <MarketingBadge>Care Coordination</MarketingBadge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  From emergency admission to cleared discharge.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Inpatient stays involve multiple clinical disciplines and ongoing care dependencies. MarkCare keeps everyone aligned on the same patient chart.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="text-base font-bold text-foreground">1. Admission & Bed Assignment</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Patient admitted from outpatient consultation or emergency. Assigned to designated ward, wing, and physical bed number with automated bed-tariff charging.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="text-base font-bold text-foreground">2. Ward Rounds & Clinical Progress</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Doctors record inpatient encounter notes, modify medication schedules, and order ongoing diagnostic panels directly into the admitted chart.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="text-base font-bold text-foreground">3. Discharge Summary & Billing Clearance</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Discharge note collates total bed days, nursing care, laboratory investigations, and pharmacy charges into a comprehensive final folio for cashier clearance.
                  </p>
                </div>
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
                <p className="text-xs text-muted-foreground mt-0.5">See how inpatient care synchronizes with consultations and billing.</p>
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

