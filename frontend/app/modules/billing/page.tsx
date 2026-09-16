import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Receipt, CreditCard, QrCode, ShieldCheck, FileCheck, Building2 } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from "@/components/marketing/marketing-badge";
import { MarketingScreenshotFrame } from "@/components/marketing/marketing-screenshot-frame";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Billing, Cashier & Revenue Settlements",
  description:
    "Real-time patient ledger, itemized bill generation, M-Pesa STK push integration, SHA insurance split claims, and verifiable QR invoice receipts.",
};

export default function BillingPage() {
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
              <span className="text-foreground">Billing & Cashier</span>
            </div>

            <div className="max-w-3xl">
              <MarketingBadge className="mb-4">Revenue Integrity</MarketingBadge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Automated patient ledgers and seamless payment reconciliation.
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Prevent revenue leakage with a unified billing desk that automatically aggregates doctor consultation charges, laboratory investigations, and pharmacy items into verifiable itemized invoices.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                  <Link href="/request-demo">
                    Schedule Billing Walkthrough
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
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Patient Billing Ledger & Payment Desk</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Real-time charge aggregation, payment method allocation, and instant receipt generation.
              </p>
            </div>

            <MarketingScreenshotFrame
              title="MarkCare Cashier Folio & Settlement Desk"
            />
          </MarketingContainer>
        </section>

        {/* Settlement Channels */}
        <section className="py-20 bg-muted/30 border-b border-border">
          <MarketingContainer>
            <div className="max-w-2xl mb-12">
              <MarketingBadge>Supported Settlements</MarketingBadge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mt-2">
                Designed for operational cash and digital health settlements.
              </h2>
              <p className="text-sm text-muted-foreground mt-3">
                MarkCare handles multiple settlement mechanisms without forcing staff into slow manual reconciliations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">M-Pesa STK Push Integration</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Integrated Daraja API foundation triggers instant payment prompts directly to the patient&apos;s phone at the cashier desk, automatically marking invoices as paid.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border text-xs font-semibold text-muted-foreground">
                  Automated callback verification
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                    <QrCode className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">QR-Verifiable Invoices</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Every generated invoice includes a cryptographic verification QR code that patients or insurers can scan at /invoice-verify to validate authenticity.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border text-xs font-semibold text-muted-foreground">
                  Public verification portal supported
                </div>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
                    <FileCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">SHA & Insurance Split Billing</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    Split invoices between primary payer schemes and patient copay balances, ensuring clear claim documentation and reducing patient wait times.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border text-xs font-semibold text-muted-foreground">
                  Internal claims tracking foundation
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
                <p className="text-xs text-muted-foreground mt-0.5">Understand how clinical orders generate billing entries.</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/modules/clinical-emr">Clinical EMR</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/modules/pharmacy">Pharmacy FEFO</Link>
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


