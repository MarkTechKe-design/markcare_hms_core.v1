import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Pill, AlertTriangle, Layers, ShieldCheck, Receipt, Stethoscope } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from "@/components/marketing/marketing-badge";
import { MarketingScreenshotFrame } from "@/components/marketing/marketing-screenshot-frame";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pharmacy & FEFO Inventory Engine — MarkCare HMS",
  description:
    "First-Expiry, First-Out (FEFO) dispensing, batch tracking, stock movement reconciliations, expiry risk monitors, and point-of-sale OTC sales.",
};

export default function PharmacyPage() {
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
              <span className="text-foreground">Pharmacy</span>
            </div>

            <div className="max-w-3xl">
              <MarketingBadge className="mb-4">Inventory & Medication Control</MarketingBadge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                First-Expiry, First-Out dispensing and batch-level stock integrity.
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Control pharmaceutical losses and eliminate dispensing errors. MarkCare automates FEFO batch picking, monitors expiry thresholds, and keeps branch store balances synchronized with cashier ledgers.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                  <Link href="/request-demo">
                    Schedule Pharmacy Review
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
              <h2 className="text-2xl font-bold tracking-tight text-foreground">FEFO Batch Management & Dispensing</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Visualizing batch expiration timelines, store allocations, and verified prescription dispensing counters.
              </p>
            </div>

            <MarketingScreenshotFrame
              title="MarkCare Pharmacy Dispense Desk & Batch Inventory"
            />
          </MarketingContainer>
        </section>

        {/* Core Principles */}
        <section className="py-20 bg-muted/30 border-b border-border">
          <MarketingContainer>
            <div className="max-w-2xl mb-12">
              <MarketingBadge>Operational Principles</MarketingBadge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mt-2">
                Designed to stop medication wastage and inventory leakage.
              </h2>
              <p className="text-sm text-muted-foreground mt-3">
                Pharmacy inventories represent a major operational expense for hospitals. MarkCare applies strict controls to every movement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Strict FEFO Enforcement</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    When dispensing prescriptions, the system guides pharmacists to select the earliest-expiring batch in stock, reducing write-offs from expired shelf inventory.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border text-xs font-semibold text-muted-foreground">
                  Automated batch sorting by expiry date
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-lg bg-rose-500/10 text-rose-600 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Expiry Risk Monitoring</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Automated flags highlight medications reaching 30, 60, and 90-day expiry horizons, allowing inventory managers to redistribute stock before expiration.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border text-xs font-semibold text-muted-foreground">
                  Time-horizon expiry categorizations
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Real-Time Ledger Sync</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Dispensed items automatically decrement bin counts while posting exact medication tariffs to the patient bill or recording direct over-the-counter (OTC) cash sales.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border text-xs font-semibold text-muted-foreground">
                  No manual stock sheet reconciliations
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
                <h3 className="text-base font-bold text-foreground">Explore Related Clinical Modules</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Learn how pharmacy connects with patient consults and hospital revenue.</p>
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

