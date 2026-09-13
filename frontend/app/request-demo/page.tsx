import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, CheckCircle2, Clock, Phone } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from "@/components/marketing/marketing-badge";
import { DemoRequestForm } from "@/components/marketing/demo-request-form";

export const metadata: Metadata = {
  title: "Request a Product Demonstration — MarkCare HMS",
  description:
    "Schedule a live, interactive walkthrough of MarkCare HMS tailored to your hospital's clinical and financial workflows.",
};

export default function RequestDemoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        <section className="border-b border-border/80 bg-muted/20 py-16 sm:py-20">
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Context */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <MarketingBadge className="mb-3">Live Walkthrough</MarketingBadge>
                  <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                    Evaluate MarkCare for your healthcare facility.
                  </h1>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Schedule a consultation and live demonstration with our healthcare implementation team. We will walk through your specific clinical, pharmacy, and billing requirements.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    What to Expect During the Demonstration:
                  </h2>
                  <div className="space-y-3 text-xs text-muted-foreground">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Review of outpatient triage, doctor consultation, and ICD-10 diagnostic coding.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Walkthrough of FEFO pharmacy dispensing and real-time inventory batch tracking.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Demonstration of cashier settlement desks with M-Pesa STK push and QR invoices.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Discussion of cloud vs. on-premise deployment models for your infrastructure.</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-foreground">Rapid Response Commitment</h3>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        Our implementation team reviews incoming requests and responds within 1 business day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Form */}
              <div className="lg:col-span-7">
                <DemoRequestForm />
              </div>
            </div>
          </MarketingContainer>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
