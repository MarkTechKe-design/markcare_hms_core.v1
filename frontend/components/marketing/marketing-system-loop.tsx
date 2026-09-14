"use client";

import * as React from "react";
import Link from "next/link";
import {
  Stethoscope,
  FlaskConical,
  Pill,
  Receipt,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Network,
  Activity,
  ChevronRight,
  Database,
  Printer,
  Sparkles,
} from "lucide-react";
import { MarketingContainer, MarketingBadge } from "@/components/marketing";

interface Pillar {
  id: string;
  title: string;
  tagline: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  overview: string;
  keyFeatures: string[];
  impactStat: string;
  impactLabel: string;
  connectedTo: string[];
}

const SYSTEM_PILLARS: Pillar[] = [
  {
    id: "clinical",
    title: "Clinical Consultation & EMR",
    category: "Outpatient & Inpatient Care",
    tagline: "Structured documentation engineered around patient safety.",
    icon: Stethoscope,
    overview:
      "Physicians record triage vitals, document structured SOAP encounter notes, and assign ICD-10 diagnostic codes. One-click electronic orders dispatch investigations and prescriptions immediately.",
    keyFeatures: [
      "Longitudinal patient history with timeline views",
      "Automated vital sign baselines and BMI calculation",
      "Dosage and patient allergy safety cross-checks",
      "Single-click electronic ordering without paper chits",
    ],
    impactStat: "-40%",
    impactLabel: "Clinical Documentation Overhead",
    connectedTo: ["Pharmacy FEFO", "Laboratory Diagnostics", "Cashier Billing"],
  },
  {
    id: "pharmacy",
    title: "Pharmacy & FEFO Stock Engine",
    category: "Medicines & Inventory",
    tagline: "Guaranteed First-Expired, First-Out batch dispensing.",
    icon: Pill,
    overview:
      "Prescription orders land in the dispensary queue the moment a clinician confirms them. The system automatically prioritizes the earliest-expiring stock batches, eliminating pharmaceutical waste.",
    keyFeatures: [
      "Automated FEFO batch sequencing and allocation",
      "Real-time stock deduction with min/max threshold alerts",
      "Central medical stores and multi-dispensary transfer tracking",
      "Full pharmaceutical batch audit logs from receipt to patient",
    ],
    impactStat: "0%",
    impactLabel: "Expired Medication Loss",
    connectedTo: ["Clinical Consultation", "Cashier Billing", "Central Stores"],
  },
  {
    id: "laboratory",
    title: "Laboratory & Diagnostics",
    category: "Investigations & Results",
    tagline: "Specimen tracking with auto-updating clinician charts.",
    icon: FlaskConical,
    overview:
      "When tests are requested, lab technicians receive accession orders instantly. Specimens are tagged with unique barcodes, processed through structured worksheets, and validated results post back to the EMR.",
    keyFeatures: [
      "Barcode specimen identification at phlebotomy",
      "Departmental investigation accession queues",
      "Pathologist validation and normal range flags",
      "Instant chart notifications for critical lab findings",
    ],
    impactStat: "100%",
    impactLabel: "Investigation Result Traceability",
    connectedTo: ["Clinical Consultation", "Cashier Billing", "Inpatient Wards"],
  },
  {
    id: "billing",
    title: "Billing & Folio Aggregation",
    category: "Revenue & Accounts",
    tagline: "Tamper-proof itemized accounting with zero unbilled items.",
    icon: Receipt,
    overview:
      "Every fee�consultation, lab investigation, medication, and bed-day�aggregates automatically into the patient's active encounter folio. Cashier desks have a unified invoice ready for settlement.",
    keyFeatures: [
      "Automated line-item capture across all departments",
      "Split settlement: M-Pesa, Cash, Cards, and Insurance co-pays",
      "Encrypted QR-verifiable invoices (/invoice-verify) for fraud defense",
      "Real-time cashier daily shift closing and audit summaries",
    ],
    impactStat: "0%",
    impactLabel: "Unbilled Service Revenue Leakage",
    connectedTo: ["Clinical Consultation", "Pharmacy", "Laboratory", "Inpatient Wards"],
  },
  {
    id: "inpatient",
    title: "Inpatient Wards & Admissions",
    category: "Ward Care & Census",
    tagline: "Live bed occupancy, admissions, and medication rounds.",
    icon: Users,
    overview:
      "Manage admissions, discharges, and ward transfers with interactive bed management. Nursing staff record scheduled Medication Administration Records (MAR) and daily observation notes with full accountability.",
    keyFeatures: [
      "Visual bed availability across ICU, pediatric, and general wards",
      "Digital MAR sheet with administration timestamps and staff attribution",
      "Ward transfer coordination and bed-day rate automation",
      "Doctor inpatient ward-round review workflows",
    ],
    impactStat: "Real-Time",
    impactLabel: "Facility Bed Occupancy Visibility",
    connectedTo: ["Clinical Consultation", "Pharmacy FEFO", "Cashier Billing"],
  },
  {
    id: "governance",
    title: "Enterprise Governance & Resilience",
    category: "Architecture & Security",
    tagline: "Multi-branch coordination with local LAN offline continuity.",
    icon: Building2,
    overview:
      "Hospital executives govern satellite clinics and multi-facility hospital branches under centralized policies, granular role-based permissions (RBAC), and hybrid local network resilience.",
    keyFeatures: [
      "Centralized oversight for multi-branch healthcare networks",
      "Strict role-based access control protecting clinical records",
      "Local LAN edge resilience ensuring continuity during internet outages",
      "Immutable system audit logs tracking record access and modifications",
    ],
    impactStat: "99.9%",
    impactLabel: "Clinical Workflow Uptime",
    connectedTo: ["All Hospital Departments"],
  },
];

const INTERCONNECT_RULES = [
  {
    origin: "Triage / Intake",
    destination: "Clinical Doctor Desk",
    workflow: "Acuity Scoring & Queue Sequencing",
    description: "Vitals taken at reception automatically rank and route patient into physician consultation roster.",
  },
  {
    origin: "Doctor Consultation",
    destination: "Dispensary & Lab Accession",
    workflow: "Simultaneous Paperless Order Branching",
    description: "One click concurrently dispatches e-prescriptions to pharmacy and investigation orders to laboratory.",
  },
  {
    origin: "Lab & Dispensary",
    destination: "Cashier Desk Folio",
    workflow: "Automated Line-Item Fee Registration",
    description: "Every dispensed medication batch and completed lab test automatically posts to encounter billing.",
  },
  {
    origin: "Hospital Administration",
    destination: "Centralized Audit Trail",
    workflow: "Role-Scoped Operational Transparency",
    description: "Encrypted verification and tamper-proof daily audit tracking ensure complete institutional control.",
  },
];

export function MarketingSystemLoop() {
  const [selectedPillarId, setSelectedPillarId] = React.useState<string>("clinical");
  const selectedPillar = SYSTEM_PILLARS.find((p) => p.id === selectedPillarId) || SYSTEM_PILLARS[0];
  const SelectedIcon = selectedPillar.icon;

  return (
    <section className="py-20 sm:py-28 border-b border-border/80 bg-gradient-to-b from-card/30 via-background to-background relative overflow-hidden">
      <MarketingContainer>
        {/* Master Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <MarketingBadge className="mb-4">Complete Hospital Operating Ecosystem</MarketingBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            One Unified Workspace for Your Entire Hospital
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
            Healthcare operations break down when departments operate in silos. MarkCare unites patient registration, clinical encounters, pharmacy dispensing, diagnostics, and financial settlement into a single synchronized system.
          </p>
        </div>

        {/* 6-Pillar Interactive Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10">
          {SYSTEM_PILLARS.map((p) => {
            const isSelected = p.id === selectedPillarId;
            const PillarIcon = p.icon;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPillarId(p.id)}
                className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary ${
                  isSelected
                    ? "bg-card border-primary/60 shadow-sm ring-1 ring-primary/25 scale-[1.02]"
                    : "bg-card/50 border-border/70 hover:border-border hover:bg-card/90 opacity-75 hover:opacity-100"
                }`}
              >
                <div
                  className={`size-9 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isSelected ? "bg-primary text-primary-foreground shadow-xs" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <PillarIcon className="size-4.5" />
                </div>
                <span className="text-xs font-bold text-foreground leading-snug truncate w-full">{p.title.split("&")[0].trim()}</span>
                <span className="text-[11px] text-muted-foreground truncate w-full">{p.category}</span>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Feature Showcase Card */}
        <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-xs mb-14 relative overflow-hidden mc-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                  {selectedPillar.category}
                </span>
                <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                  <Activity className="size-3.5 text-primary" /> Active Module
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  {selectedPillar.title}
                </h3>
                <p className="mt-1 text-sm sm:text-base font-medium text-primary">
                  {selectedPillar.tagline}
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedPillar.overview}
              </p>

              {/* 4 Core Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedPillar.keyFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-foreground leading-snug">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Departmental Handoff Footnote */}
              <div className="pt-3 border-t border-border/60 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-muted-foreground">Synchronized With:</span>
                {selectedPillar.connectedTo.map((dep) => (
                  <span
                    key={dep}
                    className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted text-foreground font-medium text-[11px]"
                  >
                    {dep}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Telemetry & Metric Card */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-muted/20 border border-border/60 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mc-icon-interactive">
                    <SelectedIcon className="size-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{selectedPillar.title}</div>
                    <div className="text-[11px] text-muted-foreground font-mono">markcare_hms_core.v1</div>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                  <ShieldCheck className="size-3.5" /> Synchronized
                </span>
              </div>

              <div className="py-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight font-mono">
                  {selectedPillar.impactStat}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                  {selectedPillar.impactLabel}
                </div>
              </div>

              <div className="rounded-xl border border-border/70 bg-card p-4 space-y-2">
                <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-primary" /> Why Hospital Leaders Choose This
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Eliminates paper chits and manual ledger books, ensuring every patient interaction is accountable, traceable, and instantly billed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Cross-Department Synchronization Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              How Departments Communicate Inside MarkCare
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Zero phone calls between desks. Zero paper slips carried by patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {INTERCONNECT_RULES.map((rule, idx) => (
              <div
                key={rule.workflow}
                className="rounded-2xl border border-border/80 bg-card p-5 shadow-2xs flex flex-col justify-between mc-card mc-card-interactive mc-reveal group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-muted-foreground mb-3">
                    <span className="text-primary font-bold">Flow 0{idx + 1}</span>
                    <Network className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-foreground mb-2">
                    <span className="truncate">{rule.origin}</span>
                    <ArrowRight className="size-3 text-primary shrink-0 mc-arrow-interactive" />
                    <span className="truncate text-primary">{rule.destination}</span>
                  </div>

                  <h4 className="text-sm font-bold text-foreground mb-1.5 leading-snug">
                    {rule.workflow}
                  </h4>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-semibold text-primary">
                  <span>Automated Hand-off</span>
                  <CheckCircle2 className="size-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
