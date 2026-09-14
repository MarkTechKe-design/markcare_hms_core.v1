import React from "react";
import type { Metadata } from "next";
import { Stethoscope, Pill, FlaskConical, CreditCard, Building2, CheckCircle2 } from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  MarketingBadge,
  MarketingSection,
  MarketingScreenshotFrame,
  MarketingCtaBanner,
} from "@/components/marketing";

export const metadata: Metadata = {
  title: "Hospital Role Solutions & Workflows",
  description:
    "Explore how MarkCare HMS addresses operational challenges for hospital directors, clinical doctors, nurses, pharmacists, lab technicians, and cashiers.",
};

const solutions = [
  {
    role: "Hospital Directors & Administrators",
    icon: Building2,
    bottleneck: "Fragmented departmental reports make bed census, staffing allocation, and revenue reconciliation difficult to track in real time.",
    workflow: "MarkCare aggregates outpatient visits, inpatient ward bed occupancy, and cashier transactions into centralized administrative dashboards.",
    outcome: "Operational clarity across branches with unified clinical and financial governance.",
  },
  {
    role: "Medical Officers & Clinicians",
    icon: Stethoscope,
    bottleneck: "Searching for physical paper files and deciphering past consultation notes slows patient care and introduces clinical uncertainty.",
    workflow: "Physicians record structured clinical notes, review vital sign trajectories, and order lab tests directly from the consultation workspace.",
    outcome: "Focused patient encounters supported by instant visibility into verified diagnostic results and medical history.",
  },
  {
    role: "Pharmacists & Dispensary Teams",
    icon: Pill,
    bottleneck: "Deciphering handwritten prescription slips and manual stock tallying leads to inventory drift and medication expiration waste.",
    workflow: "Prescription orders flow digitally from clinical notes. Dispensary fulfillment utilizes First-Expiry-First-Out (FEFO) batch allocation.",
    outcome: "Accurate dispensing verification, reduced medication expiration losses, and real-time inventory tracking.",
  },
  {
    role: "Laboratory Technologists",
    icon: FlaskConical,
    bottleneck: "Misplaced paper requisition forms and frequent status phone calls interrupt testing workflows.",
    workflow: "Diagnostic requisitions populate directly into the laboratory queue. Technologists record findings, which return to the physician screen immediately.",
    outcome: "Traceable specimen handling, accelerated turnaround times, and verified electronic result release.",
  },
  {
    role: "Cashiers & Finance Desks",
    icon: CreditCard,
    bottleneck: "Uncoordinated charges from triage, consultation, wards, and laboratories result in unbilled services and discharge delays.",
    workflow: "Every billable event automatically links to the patient's encounter invoice, applying standardized tariffs for self-pay or insurance settlement.",
    outcome: "Itemized invoice transparency, fewer unbilled encounters, and faster patient checkout.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <MarketingBadge className="mb-4">Role-Based Solutions</MarketingBadge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              Workflows designed around how hospital staff work.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              MarkCare connects hospital directors, clinical physicians, dispensary teams, laboratory technologists, and cashiers into one synchronized operational flow.
            </p>
          </MarketingContainer>
        </section>

        {/* Alternating Problem -> Workflow -> Outcome Narrative */}
        <MarketingSection>
          <MarketingContainer className="space-y-16">
            {solutions.map((item) => (
              <div
                key={item.role}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-xs mc-card-interactive mc-reveal group"
              >
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mc-icon-interactive">
                      <item.icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Department Workflow
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {item.role}
                  </h2>

                  <div className="space-y-3 pt-2 text-sm">
                    <div className="rounded-xl border border-border/60 bg-background p-3.5">
                      <strong className="text-foreground block mb-0.5">The Operational Bottleneck:</strong>
                      <span className="text-muted-foreground">{item.bottleneck}</span>
                    </div>

                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-3.5">
                      <strong className="text-primary block mb-0.5">MarkCare Digital Workflow:</strong>
                      <span className="text-foreground">{item.workflow}</span>
                    </div>

                    <p className="text-xs text-muted-foreground pt-1 flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-primary shrink-0" aria-hidden="true" />
                      <span><strong>Verified Outcome:</strong> {item.outcome}</span>
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <MarketingScreenshotFrame
                    caption={`${item.role} · Departmental Workspace View`}
                    aspectRatio="16/10"
                  />
                </div>
              </div>
            ))}
          </MarketingContainer>
        </MarketingSection>

        {/* CTA Banner */}
        <MarketingCtaBanner
          headline="See how MarkCare supports your facility staff"
          description="Schedule a tailored walkthrough focused on your clinical, laboratory, pharmacy, or finance operations."
          primaryCta={{
            label: "Schedule a Demonstration",
            href: "/request-demo",
          }}
          secondaryCta={{
            label: "Contact Inquiries",
            href: "/contact",
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}
