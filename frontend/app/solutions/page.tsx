import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Stethoscope, Pill, FlaskConical, Receipt, Building, Network } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from "@/components/marketing/marketing-badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Hospital Solutions — MarkCare HMS",
  description:
    "Explore how MarkCare addresses operational challenges for physicians, pharmacy teams, laboratory technologists, finance officers, and hospital directors.",
};

const solutions = [
  {
    role: "Clinical Teams",
    title: "Physicians, Medical Officers & Nursing Staff",
    icon: Stethoscope,
    problem: "Fragmented patient histories, lost paper triage slips, and disconnected diagnostic reports slow down patient consultations.",
    solution: "A unified electronic consultation desk displaying vital signs, previous visit summaries, allergy alerts, diagnostic orders, and ICD-10 diagnostic coding in one view.",
    workflows: ["Doctor Queue Prioritization", "SOAP Clinical Documentation", "Integrated Lab & Medication Ordering", "Inpatient Progress Notes"],
    link: "/modules/clinical-emr"
  },
  {
    role: "Pharmacy Staff",
    title: "Chief Pharmacists & Pharmacy Technicians",
    icon: Pill,
    problem: "Expired stock losses, unverified dispensing, and manual inventory reconciliations lead to stockouts and medication wastage.",
    solution: "System-enforced First-Expiry, First-Out (FEFO) dispensing that automatically directs pharmacists to the earliest-expiring batch while maintaining real-time bin balances.",
    workflows: ["FEFO Batch Allocation", "Prescription Dispense Verification", "Expiry Threshold Tracking", "OTC Direct Cash Sales"],
    link: "/modules/pharmacy"
  },
  {
    role: "Laboratory Technologists",
    title: "Diagnostic & Pathology Departments",
    icon: FlaskConical,
    problem: "Delayed turnaround times, lost specimen slips, and verbal test results compromise clinical accuracy and patient safety.",
    solution: "A structured order-to-result diagnostic pipeline with accession number barcoding, sample collection verification, and two-tier technologist result review.",
    workflows: ["Electronic Test Orders", "Specimen Accession Tracking", "Panic Value Alerts", "Verified Result Publishing"],
    link: "/modules/laboratory"
  },
  {
    role: "Finance & Cashier Teams",
    title: "Cashiers, Billing Clerks & Revenue Integrity",
    icon: Receipt,
    problem: "Unbilled procedures, manual cash receipts, and tedious insurance claim reconciliations cause major revenue leakage.",
    solution: "An automated patient ledger that captures doctor fees, laboratory tests, and dispensed medications in real time, supporting M-Pesa STK push and verifiable QR invoices.",
    workflows: ["Point-of-Sale Settlement", "M-Pesa STK Push Integration", "Itemized PDF & QR Invoices", "SHA & Insurance Split Billing"],
    link: "/modules/billing"
  },
  {
    role: "Hospital Executives",
    title: "Medical Directors & Chief Executives",
    icon: Building,
    problem: "Operating in the dark without daily patient census data, departmental revenues, or inventory consumption insights.",
    solution: "Centralized administrative oversight delivering operational transparency across outpatient attendance, bed occupancy, and department financial performance.",
    workflows: ["Daily Operational Audits", "Departmental Revenue Summaries", "Bed Occupancy Tracking", "Staff Access Governance"],
    link: "/request-demo"
  },
  {
    role: "Multi-Facility Operators",
    title: "Regional Chains & Healthcare Networks",
    icon: Network,
    problem: "Managing multiple hospital branches with separate disconnected systems results in inconsistent master catalogs and fragmented reporting.",
    solution: "Hierarchical facility and branch governance that maintains centralized master drug and diagnostic catalogs while isolating branch-level stock, staff, and cashiers.",
    workflows: ["Branch Scoped Access", "Master Drug Catalog Sync", "Cross-Branch User Governance", "Centralized System Telemetry"],
    link: "/platform"
  }
];

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Header Section */}
        <section className="border-b border-border/80 bg-muted/20 py-20">
          <MarketingContainer>
            <div className="max-w-3xl">
              <MarketingBadge className="mb-3">Role-Based Solutions</MarketingBadge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Tailored for every team operating within the hospital.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Hospital workflows require tight coordination across clinical, diagnostic, and financial roles. MarkCare provides purpose-built tools for each operational department.
              </p>
            </div>
          </MarketingContainer>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <MarketingContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.role}
                    className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.role}</span>
                          <h2 className="text-base font-bold text-foreground leading-snug">{item.title}</h2>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm text-muted-foreground mt-4">
                        <div>
                          <span className="font-semibold text-foreground text-xs uppercase tracking-wider block mb-1">Operational Challenge:</span>
                          <p className="leading-relaxed">{item.problem}</p>
                        </div>
                        <div className="pt-2">
                          <span className="font-semibold text-foreground text-xs uppercase tracking-wider block mb-1">MarkCare Solution:</span>
                          <p className="leading-relaxed">{item.solution}</p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border">
                        <span className="text-xs font-semibold text-foreground block mb-2">Key Workflows:</span>
                        <ul className="space-y-1.5 text-xs text-muted-foreground">
                          {item.workflows.map((wf) => (
                            <li key={wf} className="flex items-center gap-1.5">
                              <span className="h-1 w-1 rounded-full bg-primary" /> {wf}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border">
                      <Link
                        href={item.link}
                        className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                      >
                        Explore Relevant Capabilities
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </MarketingContainer>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
