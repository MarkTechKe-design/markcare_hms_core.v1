import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, ChevronRight, CheckCircle2 } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from "@/components/marketing/marketing-badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — MarkCare HMS",
  description:
    "Clear answers regarding MarkCare HMS multi-branch architecture, deployment options, pharmacy FEFO, billing integrations, and onboarding workflows.",
};

const faqCategories = [
  {
    title: "Architecture & Multi-Facility Governance",
    items: [
      {
        q: "Can MarkCare HMS support multiple hospital branches simultaneously?",
        a: "Yes. MarkCare is architected around a multi-facility and multi-branch topology. You can centrally govern master drug and test catalogs while strictly isolating localized clinic queues, physical pharmacy store stock, and cashier shifts at each physical branch."
      },
      {
        q: "How does data isolation work between branches?",
        a: "Every database transaction is validated against the authenticated user's assigned facility and branch scopes. Staff assigned to Branch A cannot view or dispense inventory belonging to Branch B, preventing cross-facility operational leakage."
      },
      {
        q: "Can a hospital run MarkCare on its own internal local server?",
        a: "Yes. In addition to MarkCare Cloud (managed SaaS), we offer MarkCare Enterprise, which installs directly on hospital-owned server hardware inside your private local network (LAN) for complete infrastructure data sovereignty."
      }
    ]
  },
  {
    title: "Clinical & Departmental Modules",
    items: [
      {
        q: "What modules are included in MarkCare HMS?",
        a: "MarkCare includes Patient Registration & Queue Management, Triage & Vitals Assessment, Doctor Consultation & Clinical EMR (with ICD-10), Diagnostic Laboratory, Pharmacy with FEFO Batch Tracking, Inpatient (IPD) Ward & Bed Management, and Billing/Cashier Settlement."
      },
      {
        q: "How does the Pharmacy FEFO mechanism work?",
        a: "First-Expiry, First-Out (FEFO) dispensing guides pharmacy technicians to pick the earliest-expiring batch currently in stock when fulfilling prescriptions, significantly reducing stock expirations and medication write-offs."
      },
      {
        q: "Do doctor consultation orders automatically reach the laboratory and pharmacy?",
        a: "Yes. When a clinician signs off on diagnostic requests or prescriptions during an electronic consultation, the orders appear immediately on the respective laboratory workbench and pharmacy dispensing queue without manual paper re-entry."
      }
    ]
  },
  {
    title: "Billing & Integrations",
    items: [
      {
        q: "Does MarkCare support M-Pesa payments?",
        a: "Yes. MarkCare has an implemented Daraja API foundation that initiates instant M-Pesa STK push prompts to patient phones at cashier desks. Asynchronous callbacks verify payment receipts and clear the patient's billing ledger automatically."
      },
      {
        q: "How does MarkCare handle SHA (Social Health Authority) claims?",
        a: "MarkCare includes an internal claims workflow that supports split billing between patient out-of-pocket balances and primary payer coverage. Claims are indexed with clinical encounter notes and ICD-10 diagnostic codes."
      },
      {
        q: "How does eTIMS fiscalization work?",
        a: "MarkCare features an outbox schema designed for electronic tax invoice generation. Receipts include cryptographically verifiable QR codes that patients and auditors can validate at /invoice-verify."
      }
    ]
  },
  {
    title: "Onboarding & Implementation",
    items: [
      {
        q: "What does the onboarding process look like?",
        a: "Onboarding follows a three-stage sequence: 1) Configure: setting up hospital branches, bed topologies, catalogs, and tariffs; 2) Train: role-specific workflow training for clinicians, nurses, pharmacists, and cashiers; 3) Go Live: supervised launch with dedicated floor support."
      },
      {
        q: "How long does implementation take?",
        a: "Implementation timelines depend on facility size and data migration needs. Single clinic facilities can be configured and live in days, while multi-branch hospital networks typically require two to four weeks for catalog consolidation and full staff training."
      }
    ]
  }
];

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border/80 bg-muted/20 py-20">
          <MarketingContainer>
            <div className="max-w-3xl">
              <MarketingBadge className="mb-3">Knowledge Base</MarketingBadge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Clear answers regarding MarkCare HMS architecture, deployment models, integrations, clinical workflows, and hospital onboarding.
              </p>
            </div>
          </MarketingContainer>
        </section>

        {/* FAQ Accordions/Lists */}
        <section className="py-20">
          <MarketingContainer className="max-w-4xl space-y-16">
            {faqCategories.map((category) => (
              <div key={category.title} className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-foreground border-b border-border pb-3">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.q} className="rounded-xl border border-border bg-card p-6 shadow-xs">
                      <h3 className="text-base font-bold text-foreground">{item.q}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </MarketingContainer>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/20 border-t border-border">
          <MarketingContainer className="text-center max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground">Still have questions about your specific setup?</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Our clinical and technical specialists are available to discuss your hospital&apos;s exact requirements.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button asChild>
                <Link href="/request-demo">Speak with an Expert</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/platform">Review Platform Overview</Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
