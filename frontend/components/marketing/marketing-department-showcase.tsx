"use client";

import * as React from "react";
import { 
  Stethoscope, 
  Pill, 
  FlaskConical, 
  BedDouble, 
  Receipt, 
  Activity,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  Clock,
  FileText,
  ShieldCheck,
  CreditCard
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MarketingContainer } from "./marketing-container";
import { MarketingSection } from "./marketing-section";
import { MarketingSectionHeading } from "./marketing-section-heading";
import { MarketingScreenshotFrame } from "./marketing-screenshot-frame";
import { MarketingBadge } from "./marketing-badge";

export function MarketingDepartmentShowcase() {
  return (
    <MarketingSection id="departments" spacing="default" background="muted">
      <MarketingContainer>
        <MarketingSectionHeading
          eyebrow="Departmental Capabilities"
          title="One Platform. Every Critical Workflow."
          description="Explore how MarkCare equips clinical teams, pharmacy dispensaries, diagnostic labs, and hospital administration with specialized, connected interfaces."
          className="mb-10"
        />

        <Tabs defaultValue="clinical" className="w-full">
          {/* Department Tab Selectors */}
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="bg-background/80 border border-border/80 p-1.5 shadow-xs rounded-xl flex-wrap justify-center h-auto gap-1">
              <TabsTrigger value="clinical" className="gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium">
                <Stethoscope className="size-4" />
                <span>Doctor EMR</span>
              </TabsTrigger>
              <TabsTrigger value="pharmacy" className="gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium">
                <Pill className="size-4" />
                <span>Pharmacy FEFO</span>
              </TabsTrigger>
              <TabsTrigger value="laboratory" className="gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium">
                <FlaskConical className="size-4" />
                <span>Laboratory</span>
              </TabsTrigger>
              <TabsTrigger value="inpatient" className="gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium">
                <BedDouble className="size-4" />
                <span>Inpatient & Wards</span>
              </TabsTrigger>
              <TabsTrigger value="billing" className="gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium">
                <Receipt className="size-4" />
                <span>Billing & Cashier</span>
              </TabsTrigger>
              <TabsTrigger value="emergency" className="gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium">
                <Activity className="size-4" />
                <span>Triage & Casualty</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* 1. Clinical / EMR Tab */}
          <TabsContent value="clinical" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="flex flex-col gap-5 lg:col-span-5">
                <MarketingBadge variant="available">Verified Core EMR</MarketingBadge>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  Complete Clinical History at the Point of Care
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Give medical officers immediate visibility into past patient encounters, vital trends, lab reports, and medication histories without paper charts.
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Structured clinical notes with ICD-10 diagnostic coding linkage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Direct electronic lab ordering and real-time result alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Stock-aware e-prescribing preventing out-of-stock medication orders</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <MarketingScreenshotFrame title="MarkCare Clinical EMR — Consultation Workspace">
                  <div className="p-4 sm:p-6 bg-card text-card-foreground">
                    <div className="flex items-center justify-between border-b border-border/70 pb-3 mb-4">
                      <div>
                        <div className="font-bold text-sm">Patient Record: PT-DEMO-101</div>
                        <div className="text-xs text-muted-foreground">Male, 38 yrs · OPD Visit #2026-0841</div>
                      </div>
                      <span className="text-[11px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded border border-emerald-500/20">
                        Encounter Active
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                      <div className="rounded-lg bg-muted/40 p-2 border border-border/60">
                        <span className="text-muted-foreground block text-[10px]">Blood Pressure</span>
                        <span className="font-bold">128 / 82 mmHg</span>
                      </div>
                      <div className="rounded-lg bg-muted/40 p-2 border border-border/60">
                        <span className="text-muted-foreground block text-[10px]">Heart Rate</span>
                        <span className="font-bold">74 bpm</span>
                      </div>
                      <div className="rounded-lg bg-muted/40 p-2 border border-border/60">
                        <span className="text-muted-foreground block text-[10px]">Temperature</span>
                        <span className="font-bold">36.8 °C</span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-border/60 bg-muted/20 p-3 text-xs flex flex-col gap-2">
                      <div className="font-semibold text-foreground flex items-center justify-between">
                        <span>Clinical Notes & Assessment</span>
                        <span className="text-[10px] text-muted-foreground">Dr. A. Omondi · Internal Med</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Patient reports 3-day history of fatigue and intermittent fever. Chest clear on auscultation. Ordered Complete Blood Count (CBC) and Malaria Rapid Diagnostic Test.
                      </p>
                      <div className="flex gap-2 pt-1">
                        <span className="text-[10px] bg-sky-500/10 text-sky-700 dark:text-sky-300 px-2 py-0.5 rounded font-medium">
                          Dx: R50.9 (Fever, unspecified)
                        </span>
                      </div>
                    </div>
                  </div>
                </MarketingScreenshotFrame>
              </div>
            </div>
          </TabsContent>

          {/* 2. Pharmacy FEFO Tab */}
          <TabsContent value="pharmacy" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="flex flex-col gap-5 lg:col-span-5">
                <MarketingBadge variant="available">Verified FEFO Engine</MarketingBadge>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  Enforce First-Expired, First-Out Dispensing
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Protect pharmacy margins and eliminate inventory shrinkage. MarkCare automatically selects the earliest expiring batch for every prescription item dispensed.
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Batch-level expiry tracking with automated near-expiry alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Atomic stock decrements preventing negative dispensary quantities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Direct billing ledger synchronization on prescription dispensing</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <MarketingScreenshotFrame title="MarkCare Pharmacy — Batch Inventory & FEFO Allocator">
                  <div className="p-4 sm:p-6 bg-card text-card-foreground">
                    <div className="flex items-center justify-between border-b border-border/70 pb-3 mb-4">
                      <div>
                        <div className="font-bold text-sm">Amoxicillin 500mg Capsules</div>
                        <div className="text-xs text-muted-foreground">Dispensary Stock: 1,420 units across 3 batches</div>
                      </div>
                      <span className="text-[11px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded border border-emerald-500/20">
                        In Stock · FEFO Active
                      </span>
                    </div>

                    <div className="rounded-lg border border-border/60 overflow-hidden text-xs">
                      <div className="bg-muted/60 px-3 py-2 font-semibold text-muted-foreground grid grid-cols-12 gap-2 border-b border-border/60">
                        <span className="col-span-4">Batch Number</span>
                        <span className="col-span-3">Expiry Date</span>
                        <span className="col-span-2 text-right">Stock</span>
                        <span className="col-span-3 text-right">Priority</span>
                      </div>
                      <div className="divide-y divide-border/50">
                        <div className="px-3 py-2.5 grid grid-cols-12 gap-2 items-center bg-emerald-500/5">
                          <span className="col-span-4 font-mono font-bold">BATCH-2026-A1</span>
                          <span className="col-span-3 text-muted-foreground">2026-11-30</span>
                          <span className="col-span-2 text-right font-medium">320</span>
                          <span className="col-span-3 text-right">
                            <span className="text-[10px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded font-bold">
                              FEFO #1 (Next)
                            </span>
                          </span>
                        </div>
                        <div className="px-3 py-2.5 grid grid-cols-12 gap-2 items-center">
                          <span className="col-span-4 font-mono font-medium">BATCH-2027-C4</span>
                          <span className="col-span-3 text-muted-foreground">2027-04-15</span>
                          <span className="col-span-2 text-right font-medium">500</span>
                          <span className="col-span-3 text-right text-[11px] text-muted-foreground">FEFO #2</span>
                        </div>
                        <div className="px-3 py-2.5 grid grid-cols-12 gap-2 items-center">
                          <span className="col-span-4 font-mono font-medium">BATCH-2027-F9</span>
                          <span className="col-span-3 text-muted-foreground">2027-09-30</span>
                          <span className="col-span-2 text-right font-medium">600</span>
                          <span className="col-span-3 text-right text-[11px] text-muted-foreground">FEFO #3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </MarketingScreenshotFrame>
              </div>
            </div>
          </TabsContent>

          {/* 3. Laboratory Tab */}
          <TabsContent value="laboratory" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="flex flex-col gap-5 lg:col-span-5">
                <MarketingBadge variant="available">Verified Diagnostic Flow</MarketingBadge>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  Order to Verification Laboratory Tracking
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Eliminate lost test requisitions. Clinicians order investigations electronically, technicians receive queue alerts, and results are verified before delivery.
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Specimen collection status tracking and barcoded requisition labels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Two-tier validation: technologist entry followed by supervisor sign-off</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Automated push alerts to attending physician on result approval</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <MarketingScreenshotFrame title="MarkCare Laboratory — Specimen & Result Queue">
                  <div className="p-4 sm:p-6 bg-card text-card-foreground">
                    <div className="flex items-center justify-between border-b border-border/70 pb-3 mb-4">
                      <div>
                        <div className="font-bold text-sm">Lab Order: LAB-2026-0419</div>
                        <div className="text-xs text-muted-foreground">Requested by Dr. A. Omondi · Patient: PT-DEMO-101</div>
                      </div>
                      <span className="text-[11px] bg-sky-500/10 text-sky-700 dark:text-sky-400 font-semibold px-2 py-0.5 rounded border border-sky-500/20">
                        Technologist Verified
                      </span>
                    </div>

                    <div className="rounded-lg border border-border/60 overflow-hidden text-xs">
                      <div className="bg-muted/60 px-3 py-2 font-semibold text-muted-foreground grid grid-cols-12 gap-2 border-b border-border/60">
                        <span className="col-span-5">Test Parameter</span>
                        <span className="col-span-3">Observed Value</span>
                        <span className="col-span-4">Reference Range</span>
                      </div>
                      <div className="divide-y divide-border/50">
                        <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
                          <span className="col-span-5 font-medium">Hemoglobin (Hb)</span>
                          <span className="col-span-3 font-bold text-emerald-600 dark:text-emerald-400">14.2 g/dL</span>
                          <span className="col-span-4 text-muted-foreground">13.0 – 17.0 g/dL</span>
                        </div>
                        <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
                          <span className="col-span-5 font-medium">White Blood Cells (WBC)</span>
                          <span className="col-span-3 font-bold text-amber-600 dark:text-amber-400">11.8 × 10⁹/L</span>
                          <span className="col-span-4 text-muted-foreground">4.0 – 11.0 × 10⁹/L</span>
                        </div>
                        <div className="px-3 py-2 grid grid-cols-12 gap-2 items-center">
                          <span className="col-span-5 font-medium">Platelet Count</span>
                          <span className="col-span-3 font-bold">245 × 10⁹/L</span>
                          <span className="col-span-4 text-muted-foreground">150 – 450 × 10⁹/L</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </MarketingScreenshotFrame>
              </div>
            </div>
          </TabsContent>

          {/* 4. Inpatient / Wards Tab */}
          <TabsContent value="inpatient" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="flex flex-col gap-5 lg:col-span-5">
                <MarketingBadge variant="available">Verified IPD & Bed Board</MarketingBadge>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  Live Ward Bed Allocation and Nursing Management
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Real-time bed census for nursing stations, admissions desks, and hospital administrators. Monitor admissions, bed transfers, and planned discharges.
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Visual bed board with Occupied, Available, Cleaning, and Maintenance states</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Automated daily bed-day charge calculation linked to patient invoice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Doctor and nurse progress note charting with discharge clearances</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <MarketingScreenshotFrame title="MarkCare Inpatient — Ward Bed Status Board">
                  <div className="p-4 sm:p-6 bg-card text-card-foreground">
                    <div className="flex items-center justify-between border-b border-border/70 pb-3 mb-4">
                      <div>
                        <div className="font-bold text-sm">St. Luke Medical Ward (Male IPD)</div>
                        <div className="text-xs text-muted-foreground">Capacity: 12 Beds · 10 Occupied, 1 Available, 1 Cleaning</div>
                      </div>
                      <span className="text-[11px] bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded">
                        Nurse Station 2
                      </span>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 text-xs">
                      <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold font-mono">Bed 01</span>
                          <span className="size-2 rounded-full bg-emerald-500" />
                        </div>
                        <span className="font-medium text-[11px]">PT-2026-0811</span>
                        <span className="text-[10px] text-muted-foreground">Adm: Day 3</span>
                      </div>

                      <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold font-mono">Bed 02</span>
                          <span className="size-2 rounded-full bg-emerald-500" />
                        </div>
                        <span className="font-medium text-[11px]">PT-2026-0814</span>
                        <span className="text-[10px] text-muted-foreground">Adm: Day 1</span>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-3 flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold font-mono">Bed 03</span>
                          <span className="size-2 rounded-full bg-slate-400" />
                        </div>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400 text-[11px]">Available</span>
                        <span className="text-[10px] text-muted-foreground">Ready for intake</span>
                      </div>

                      <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold font-mono">Bed 04</span>
                          <span className="size-2 rounded-full bg-amber-500" />
                        </div>
                        <span className="font-medium text-amber-700 dark:text-amber-400 text-[11px]">Housekeeping</span>
                        <span className="text-[10px] text-muted-foreground">Disinfection</span>
                      </div>
                    </div>
                  </div>
                </MarketingScreenshotFrame>
              </div>
            </div>
          </TabsContent>

          {/* 5. Billing & Cashier Tab */}
          <TabsContent value="billing" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="flex flex-col gap-5 lg:col-span-5">
                <MarketingBadge variant="ready">Integration-Ready Financials</MarketingBadge>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  Unified Patient Billing & M-Pesa Settlement
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Aggregate laboratory fees, prescription bills, procedures, and consultation charges automatically. Eliminate lost revenue with locked cashier receipts.
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Split-billing engine supporting Cash, Private Insurance, and SHA claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Safaricom Daraja M-Pesa STK Push supported when facility credentials are configured</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Shift-end cashier reconciliation and verifiable QR invoice printouts</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <MarketingScreenshotFrame title="MarkCare Billing — Patient Invoice & Cashier Desk">
                  <div className="p-4 sm:p-6 bg-card text-card-foreground">
                    <div className="flex items-center justify-between border-b border-border/70 pb-3 mb-4">
                      <div>
                        <div className="font-bold text-sm">Invoice #INV-2026-1049</div>
                        <div className="text-xs text-muted-foreground">Patient: PT-DEMO-101 · Cashier: Desk 01</div>
                      </div>
                      <span className="text-[11px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded border border-emerald-500/20">
                        Paid · KES Settled
                      </span>
                    </div>

                    <div className="rounded-lg border border-border/60 overflow-hidden text-xs mb-3">
                      <div className="divide-y divide-border/50">
                        <div className="px-3 py-2 flex justify-between">
                          <span>General OPD Consultation</span>
                          <span className="font-mono">KES 1,000.00</span>
                        </div>
                        <div className="px-3 py-2 flex justify-between">
                          <span>Complete Blood Count (CBC)</span>
                          <span className="font-mono">KES 850.00</span>
                        </div>
                        <div className="px-3 py-2 flex justify-between">
                          <span>Amoxicillin 500mg (21 Caps)</span>
                          <span className="font-mono">KES 420.00</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border/70 text-xs">
                      <div className="flex items-center gap-2">
                        <CreditCard className="size-4 text-primary" />
                        <span className="font-medium">M-Pesa STK Verified (Daraja Ready)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-muted-foreground text-[10px] block">Total Settled</span>
                        <span className="text-base font-bold font-mono">KES 2,270.00</span>
                      </div>
                    </div>
                  </div>
                </MarketingScreenshotFrame>
              </div>
            </div>
          </TabsContent>

          {/* 6. Emergency / Triage Tab */}
          <TabsContent value="emergency" className="focus-visible:outline-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="flex flex-col gap-5 lg:col-span-5">
                <MarketingBadge variant="available">Verified Triage Engine</MarketingBadge>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  Acuity Scoring & Emergency Clinic Queue
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Fast-track critical patients. Record vital signs in under 60 seconds and assign standardized triage acuity levels to prioritize care delivery.
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-foreground/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Color-coded emergency acuity priority (Resuscitation, Emergent, Urgent, Non-Urgent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Automated queue assignment to specialty consultation rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Historical vitals tracking across previous facility visits</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <MarketingScreenshotFrame title="MarkCare Triage — Emergency Intake & Acuity Queue">
                  <div className="p-4 sm:p-6 bg-card text-card-foreground">
                    <div className="flex items-center justify-between border-b border-border/70 pb-3 mb-4">
                      <div>
                        <div className="font-bold text-sm">Emergency & Casualty Triage</div>
                        <div className="text-xs text-muted-foreground">Intake Nurse Desk A · 5 Patients Awaiting Doctor</div>
                      </div>
                      <span className="text-[11px] bg-rose-500/10 text-rose-700 dark:text-rose-400 font-semibold px-2 py-0.5 rounded border border-rose-500/20">
                        High Priority Active
                      </span>
                    </div>

                    <div className="divide-y divide-border/60 text-xs">
                      <div className="py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="size-2.5 rounded-full bg-rose-500" />
                          <div>
                            <span className="font-bold">PT-2026-0902</span>
                            <span className="text-muted-foreground block text-[11px]">Trauma / Severe Bleeding</span>
                          </div>
                        </div>
                        <span className="bg-rose-500/15 text-rose-700 dark:text-rose-300 font-bold px-2 py-0.5 rounded text-[10px]">
                          P1 · Resuscitation
                        </span>
                      </div>

                      <div className="py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="size-2.5 rounded-full bg-amber-500" />
                          <div>
                            <span className="font-bold">PT-2026-0903</span>
                            <span className="text-muted-foreground block text-[11px]">Asthma Exacerbation</span>
                          </div>
                        </div>
                        <span className="bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold px-2 py-0.5 rounded text-[10px]">
                          P2 · Emergent
                        </span>
                      </div>

                      <div className="py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="size-2.5 rounded-full bg-emerald-500" />
                          <div>
                            <span className="font-bold">PT-2026-0904</span>
                            <span className="text-muted-foreground block text-[11px]">Mild Gastrointestinal</span>
                          </div>
                        </div>
                        <span className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold px-2 py-0.5 rounded text-[10px]">
                          P4 · Non-Urgent
                        </span>
                      </div>
                    </div>
                  </div>
                </MarketingScreenshotFrame>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </MarketingContainer>
    </MarketingSection>
  );
}
