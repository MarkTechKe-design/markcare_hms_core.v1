import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Stethoscope, Pill, FlaskConical, Bed, Receipt, Users, Clock, ShieldCheck } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from "@/components/marketing/marketing-badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "System Modules Directory — MarkCare HMS",
  description:
    "Comprehensive directory of MarkCare HMS modules: Outpatient consultation, pharmacy FEFO inventory, laboratory diagnostics, inpatient bed management, and billing cashier desk.",
};

const moduleGroups = [
  {
    category: "Clinical Operations",
    description: "Core clinical encounters and patient movement workflows.",
    modules: [
      {
        name: "Doctor Consultation & Clinical EMR",
        status: "Available",
        description: "Electronic health record workspace with vitals logging, SOAP clinical notes, allergy tracking, and ICD-10 diagnostic coding.",
        href: "/modules/clinical-emr",
        icon: Stethoscope,
      },
      {
        name: "Patient Registration & Master Index",
        status: "Available",
        description: "Accurate demographic capture, unique hospital number issuance, and central patient record indexing across visits.",
        href: "/request-demo",
        icon: Users,
      },
      {
        name: "Triage & Vitals Assessment",
        status: "Available",
        description: "Standardized nursing triage capture including temperature, blood pressure, pulse, SpO2, and initial urgency prioritization.",
        href: "/request-demo",
        icon: Clock,
      },
      {
        name: "Doctor & Clinic Queues",
        status: "Available",
        description: "Real-time service point queues directing waiting patients to triage stations, consultation rooms, and specialized clinics.",
        href: "/request-demo",
        icon: Users,
      }
    ]
  },
  {
    category: "Diagnostics & Pharmacy",
    description: "Medication management and diagnostic laboratory operations.",
    modules: [
      {
        name: "Pharmacy & FEFO Batch Inventory",
        status: "Available",
        description: "First-Expiry, First-Out dispensing engine, bin tracking, stock adjustments, expiry alerts, and OTC point-of-sale receipting.",
        href: "/modules/pharmacy",
        icon: Pill,
      },
      {
        name: "Diagnostic Laboratory Workspace",
        status: "Available",
        description: "Electronic lab orders from doctors, specimen accessioning, reference range flags, and two-tier technologist verification.",
        href: "/modules/laboratory",
        icon: FlaskConical,
      }
    ]
  },
  {
    category: "Inpatient & Revenue Operations",
    description: "Bed capacity management, charge collation, and financial settlement.",
    modules: [
      {
        name: "Inpatient & Bed Management (IPD)",
        status: "Available",
        description: "Ward and bed allocation, admission logging, transfer workflows, inpatient medication administration, and discharge summaries.",
        href: "/modules/inpatient",
        icon: Bed,
      },
      {
        name: "Billing, Cashier & Settlements",
        status: "Available",
        description: "Automated patient ledger capturing consultation, lab, and pharmacy charges. Supports M-Pesa STK push and verifiable QR invoices.",
        href: "/modules/billing",
        icon: Receipt,
      },
      {
        name: "Facility & Branch Governance",
        status: "Available",
        description: "Multi-branch scoping, role-based access control, staff department assignments, and system audit trail monitoring.",
        href: "/platform",
        icon: ShieldCheck,
      }
    ]
  }
];

export default function ModulesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Header Section */}
        <section className="border-b border-border/80 bg-muted/20 py-20">
          <MarketingContainer>
            <div className="max-w-3xl">
              <MarketingBadge className="mb-3">Module Directory</MarketingBadge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Verified hospital operational modules.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Explore the verified capabilities that power MarkCare HMS. Each module operates either standalone or interconnected through the unified patient ledger.
              </p>
            </div>
          </MarketingContainer>
        </section>

        {/* Directory Listing */}
        <section className="py-20">
          <MarketingContainer className="space-y-16">
            {moduleGroups.map((group) => (
              <div key={group.category} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">{group.category}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{group.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.modules.map((mod) => {
                    const Icon = mod.icon;
                    return (
                      <div
                        key={mod.name}
                        className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-colors"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="flex items-center gap-3">
                              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                                <Icon className="h-5 w-5" />
                              </div>
                              <h3 className="text-base font-bold text-foreground">{mod.name}</h3>
                            </div>
                            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                              {mod.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                            {mod.description}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-border flex justify-end">
                          <Link
                            href={mod.href}
                            className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                          >
                            View Module Details
                            <ArrowRight className="ml-1 h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </MarketingContainer>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
