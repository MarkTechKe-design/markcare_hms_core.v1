"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Stethoscope,
  Pill,
  FlaskConical,
  CreditCard,
  Building2,
  ShieldCheck,
  Server,
  Users,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  MarketingBadge,
  MarketingCtaBanner,
} from "@/components/marketing";

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  badge?: string;
}

const FAQ_CATEGORIES = [
  { id: "all", label: "All Topics" },
  { id: "platform", label: "Platform & Governance", icon: Building2 },
  { id: "clinical", label: "Clinical & EMR", icon: Stethoscope },
  { id: "pharmacy", label: "Pharmacy & FEFO", icon: Pill },
  { id: "laboratory", label: "Diagnostics & Lab", icon: FlaskConical },
  { id: "billing", label: "Billing & Invoicing", icon: CreditCard },
  { id: "inpatient", label: "Inpatient & Wards", icon: Users },
  { id: "security", label: "Security & Compliance", icon: ShieldCheck },
  { id: "deployment", label: "Deployment & Offline", icon: Server },
];

const COMPREHENSIVE_FAQS: FaqItem[] = [
  // Platform & Governance
  {
    id: "plat-1",
    category: "platform",
    question: "What is MarkCare HMS and what scale of healthcare facility does it serve?",
    answer: "MarkCare HMS is a modern, full-stack Hospital Management System engineered to integrate clinical encounters, pharmacy dispensing, diagnostic laboratories, inpatient wards, and cashier billing into a unified digital workspace. It scales from regional referral hospitals and multi-branch clinic networks down to specialized private healthcare facilities.",
    badge: "Enterprise Architecture",
  },
  {
    id: "plat-2",
    category: "platform",
    question: "Does MarkCare HMS support multi-branch hospital networks under a single system?",
    answer: "Yes. MarkCare features native multi-facility scoping and tenancy boundaries. Hospital leadership can centrally govern multiple regional facilities, view aggregated clinical and financial metrics, and enforce standardized operational policies while keeping facility-level rosters, stocks, and encounters strictly partitioned.",
    badge: "Multi-Facility",
  },
  {
    id: "plat-3",
    category: "platform",
    question: "How does MarkCare prevent departmental communication silos?",
    answer: "Whenever a physician enters a prescription or diagnostic investigation during a consultation, orders are instantly routed to the active pharmacy dispensing queue and laboratory accession desk. Cashier desks receive real-time line-item aggregations, eliminating manual paper requisition chits and transcription delays.",
    badge: "Unified Workflows",
  },

  // Clinical & EMR
  {
    id: "clin-1",
    category: "clinical",
    question: "How does MarkCare manage digital clinical encounter documentation (EMR)?",
    answer: "MarkCare provides structured consultation workspaces featuring SOAP templates, vitals tracking with automatic BMI calculations, ICD-10 standardized diagnostic coding, and historical encounter timelines. Clinicians can review longitudinal patient records, active medication charts, and past lab investigations within one screen.",
    badge: "Electronic Medical Records",
  },
  {
    id: "clin-2",
    category: "clinical",
    question: "Can doctors prescribe medications and order lab investigations directly from the consultation screen?",
    answer: "Yes. Clinicians initiate electronic prescriptions and diagnostic order requests directly within the active encounter. The system validates medication dosages, alerts clinicians to patient allergies, and verifies in-stock pharmaceutical availability before dispatching orders to the dispensary.",
    badge: "Clinical Orders",
  },
  {
    id: "clin-3",
    category: "clinical",
    question: "How is patient triage managed during outpatient check-in?",
    answer: "During triage intake, nursing staff record systolic/diastolic blood pressure, pulse, respiratory rate, temperature, SpO2, and triage acuity scores. Patients are automatically queued to the appropriate clinical department or doctor's roster based on urgency and department queue rules.",
    badge: "Nursing Triage",
  },

  // Pharmacy & FEFO
  {
    id: "pharm-1",
    category: "pharmacy",
    question: "How does the First-Expired, First-Out (FEFO) dispensing engine work?",
    answer: "MarkCare enforces automated FEFO batch sequencing. When pharmacy technicians fulfill an electronic prescription, the system selects medication batches with the earliest expiration dates. This prevents pharmaceutical expiration losses and safeguards patient safety.",
    badge: "FEFO Stock Control",
  },
  {
    id: "pharm-2",
    category: "pharmacy",
    question: "How are stock reorder levels, batch quantities, and supplier purchase orders tracked?",
    answer: "Every dispensary and central medical store tracks minimum and maximum reorder thresholds. The system generates low-stock alerts, tracks supplier purchase orders, and records comprehensive batch audit trails from receiving inspection down to patient dispensing.",
    badge: "Inventory Management",
  },

  // Diagnostics & Laboratory
  {
    id: "lab-1",
    category: "laboratory",
    question: "What is the end-to-end workflow for diagnostic laboratory orders?",
    answer: "When a clinician orders an investigation, the laboratory module displays the request in the accession queue. Lab technicians log specimen collection with unique barcode identifiers, track incubation/processing stages, record qualitative or quantitative results, and submit them for pathologist review.",
    badge: "Laboratory Diagnostics",
  },
  {
    id: "lab-2",
    category: "laboratory",
    question: "Do lab results automatically update the doctor's consultation view?",
    answer: "Yes. Once authorized by a laboratory scientist or pathologist, results are instantly posted to the patient's EMR. Clinicians receive notification flags in the patient chart, reducing turnaround times for critical clinical decisions.",
    badge: "Result Automation",
  },

  // Inpatient & Wards
  {
    id: "inpat-1",
    category: "inpatient",
    question: "How does MarkCare track inpatient admissions, bed occupancy, and ward transfers?",
    answer: "The Inpatient (IPD) workspace provides an interactive ward-and-bed management dashboard. Staff can inspect real-time bed availability across ICU, pediatric, maternity, surgical, and general wards, execute bed transfers, and manage clinical admission orders with full audit trails.",
    badge: "Bed Management",
  },
  {
    id: "inpat-2",
    category: "inpatient",
    question: "How are daily ward rounds and Medication Administration Records (MAR) handled?",
    answer: "Nurses and attending doctors log scheduled medication rounds directly into the patient's digital MAR sheet. Administration times, dosages given, missed dosages, and clinical observations are recorded with staff timestamps to prevent duplication or missed therapies.",
    badge: "Ward Workflows",
  },

  // Billing & Invoicing
  {
    id: "bill-1",
    category: "billing",
    question: "How does MarkCare aggregate departmental billing charges?",
    answer: "Every consultation fee, medication dispensed, laboratory test conducted, and inpatient bed-day automatically registers as an itemized line item in the patient's active encounter folio. Cashier desks have a unified, tamper-proof summary that prevents unbilled services.",
    badge: "Folio Aggregation",
  },
  {
    id: "bill-2",
    category: "billing",
    question: "What payment methods are supported, and can invoices be split?",
    answer: "MarkCare supports split billing across cash, card, mobile money (including M-Pesa), and private/national health insurance providers. Invoices can be divided between insurer co-pays and direct patient cash balances with clear itemized breakdowns.",
    badge: "Payment Methods",
  },
  {
    id: "bill-3",
    category: "billing",
    question: "What is the public Invoice Verification feature (/invoice-verify)?",
    answer: "MarkCare invoices can be printed with an encrypted verification QR code. Patients, corporate employers, and insurance auditors can scan the code or enter the invoice reference number at /invoice-verify to authenticate the invoice status and prevent fraudulent billing.",
    badge: "Fraud Prevention",
  },

  // Security & Compliance
  {
    id: "sec-1",
    category: "security",
    question: "How does MarkCare protect confidential patient health information?",
    answer: "MarkCare implements enterprise Role-Based Access Control (RBAC). Staff members only see clinical or financial data relevant to their specific role. All data transmissions are encrypted via TLS 1.3, and database storage supports AES-256 encryption at rest with immutable audit logs tracking record views and edits.",
    badge: "Data Privacy & RBAC",
  },
  {
    id: "sec-2",
    category: "security",
    question: "Is MarkCare compliant with regional and international healthcare privacy laws?",
    answer: "Yes. MarkCare is engineered to adhere to the Kenya Data Protection Act (KDPA) and standard international health information guidelines (including HIPAA privacy standards and HL7/FHIR interoperability principles), ensuring institutional accountability.",
    badge: "Regulatory Compliance",
  },

  // Deployment & Resilience
  {
    id: "dep-1",
    category: "deployment",
    question: "Can MarkCare operate when the internet connection is disrupted?",
    answer: "Yes. For healthcare facilities in areas with variable connectivity, MarkCare supports hybrid on-premise deployments with edge caching and local network resilience. Critical triage, clinical charting, and dispensing continue uninterrupted on the hospital LAN, synchronizing automatically when connectivity restores.",
    badge: "Offline Continuity",
  },
  {
    id: "dep-2",
    category: "deployment",
    question: "What hardware and client environments are required to run MarkCare HMS?",
    answer: "MarkCare is 100% browser-based. It runs on standard desktop PCs, laptops, tablets, and mobile devices without custom client software installations. It integrates with thermal receipt printers, barcode label scanners, and standard diagnostic hardware across the network.",
    badge: "Hardware Compatibility",
  },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [openItem, setOpenItem] = React.useState<string | null>("plat-1");

  const filteredFaqs = React.useMemo(() => {
    return COMPREHENSIVE_FAQS.filter((faq) => {
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.badge?.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-16 sm:py-24">
          <MarketingContainer className="text-center">
            <MarketingBadge className="mb-4">System Knowledge & Architecture Hub</MarketingBadge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              Frequently Asked Questions About MarkCare HMS
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Find detailed, verified information regarding system workflows, electronic medical records, pharmacy FEFO tracking, lab diagnostics, billing, data security, and hospital deployment.
            </p>

            {/* Live Search Input */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword, module, workflow, or policy..."
                className="w-full pl-12 pr-4 py-3 text-sm sm:text-base rounded-2xl border border-border bg-card/80 text-foreground placeholder:text-muted-foreground shadow-xs focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                aria-label="Search FAQs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground hover:text-foreground px-2 py-1 rounded-md bg-muted"
                >
                  Clear
                </button>
              )}
            </div>
          </MarketingContainer>
        </section>

        {/* Category Navigation Pills */}
        <section className="border-b border-border/60 bg-muted/20 py-4 sticky top-16 md:top-18 z-20 backdrop-blur-md">
          <MarketingContainer>
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
              {FAQ_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`whitespace-nowrap px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all shrink-0 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "bg-background text-muted-foreground hover:text-foreground border border-border hover:bg-card"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </MarketingContainer>
        </section>

        {/* FAQs Accordion List */}
        <section className="py-12 sm:py-20">
          <MarketingContainer className="max-w-4xl">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-border">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? "Result" : "Verified Answers"}
              </span>
              {searchQuery && (
                <span className="text-xs text-muted-foreground">
                  Filtered by &ldquo;{searchQuery}&rdquo;
                </span>
              )}
            </div>

            {filteredFaqs.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border p-12 text-center space-y-4">
                <HelpCircle className="size-10 text-muted-foreground mx-auto" />
                <h3 className="text-base font-bold text-foreground">No questions matching your search</h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Try checking for typos, searching a different module name, or resetting your search filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="inline-flex items-center px-4 py-2 text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => {
                  const isOpen = openItem === faq.id;
                  const contentId = `faq-ans-${faq.id}`;
                  const triggerId = `faq-btn-${faq.id}`;

                  return (
                    <div
                      key={faq.id}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? "border-primary/40 bg-card shadow-sm"
                          : "border-border/80 bg-card/60 hover:border-border"
                      }`}
                    >
                      <button
                        id={triggerId}
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                        className="flex w-full items-center justify-between p-5 text-left gap-4 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary min-h-[56px]"
                      >
                        <div className="space-y-1 pr-2">
                          {faq.badge && (
                            <span className="inline-block text-[10px] font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-md">
                              {faq.badge}
                            </span>
                          )}
                          <h2 className="text-sm sm:text-base font-bold text-foreground leading-snug">
                            {faq.question}
                          </h2>
                        </div>
                        <ChevronDown
                          className={`size-4.5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-primary" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {isOpen && (
                        <div
                          id={contentId}
                          role="region"
                          aria-labelledby={triggerId}
                          className="px-5 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-3.5 bg-background/40"
                        >
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </MarketingContainer>
        </section>

        {/* Bottom CTA */}
        <MarketingCtaBanner
          headline="Have questions specific to your hospital deployment?"
          description="Speak directly with our healthcare workflow specialists and deployment architects."
          primaryCta={{
            label: "Request Platform Demonstration",
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
