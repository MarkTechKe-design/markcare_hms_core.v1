import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Stethoscope, Pill, Receipt, Users, BedDouble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingScreenshotFrame } from "./marketing-screenshot-frame";

export function MarketingProductShowcase() {
  return (
    <div className="py-20 sm:py-28" id="showcase">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 mb-3">
            Take a Look Inside
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance mb-4">
            The actual software, not a preview of it
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-balance">
            No placeholder screens. This is what your doctors, clinical officers, pharmacists, and cashiers open every morning to manage patient care.
          </p>
        </div>

        {/* Feature Overview Grid (Image 3 Inspiration) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          {/* Main Large Visual Card */}
          <div className="lg:col-span-7 rounded-2xl border border-border/80 bg-card p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 mb-4">
                <Users className="size-5" />
              </div>
              <MarketingScreenshotFrame title="MarkCare HMS — Patient Master Index & Clinic Queue" className="mb-6">
                <div className="p-4 bg-card text-card-foreground text-xs">
                  <div className="flex items-center justify-between border-b border-border/70 pb-3 mb-3">
                    <span className="font-bold">Active Facility Ledger · Main Hospital</span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded font-semibold">Live Queue</span>
                  </div>
                  <div className="divide-y divide-border/50 font-mono">
                    <div className="py-2 flex justify-between">
                      <span>PT-2026-0041 · W. Otieno (M/42)</span>
                      <span className="text-emerald-600 font-bold">Consultation</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span>PT-2026-0042 · M. Wanjiku (F/29)</span>
                      <span className="text-sky-600 font-bold">Lab Queue</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span>PT-2026-0043 · J. Mutua (M/61)</span>
                      <span className="text-amber-600 font-bold">Pharmacy Dispense</span>
                    </div>
                  </div>
                </div>
              </MarketingScreenshotFrame>
              <h3 className="text-xl font-bold text-foreground mb-2">Patients & Centralized Electronic Records</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Track every visit, vital sign trend, diagnosis, and prescription under one immutable digital profile. Clinical data flows across departments without lost files.
              </p>
            </div>
          </div>

          {/* Right 4-Item Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-xs flex flex-col justify-between">
              <div>
                <Stethoscope className="size-5 text-primary mb-2" />
                <h4 className="text-base font-bold text-foreground mb-1">Doctor EMR & Encounter Notes</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Structured clinical notes, ICD diagnoses, and direct lab test ordering from the consultation desk.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-xs flex flex-col justify-between">
              <div>
                <Pill className="size-5 text-primary mb-2" />
                <h4 className="text-base font-bold text-foreground mb-1">Pharmacy FEFO Stock Allocation</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Automatic earliest-expiring batch sorting to eliminate dispensary shelf expiration losses.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-xs flex flex-col justify-between">
              <div>
                <Receipt className="size-5 text-primary mb-2" />
                <h4 className="text-base font-bold text-foreground mb-1">Itemized Cashier Invoicing</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Unified billing engine supporting Cash, Insurance, and Daraja M-Pesa STK push verification.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-xs flex flex-col justify-between">
              <div>
                <BedDouble className="size-5 text-primary mb-2" />
                <h4 className="text-base font-bold text-foreground mb-1">Inpatient Ward Bed Census</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Visual bed status boards showing Available, Occupied, Cleaning, and Daily Bed-Day charges.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Z-Pattern Deep Showcases (Image 4 & 5 Inspiration) */}
        <div className="flex flex-col gap-24">
          {/* Row 1: Clinical EMR Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Doctor Consultation & Notes</span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-2 mb-4">
                Complete clinical context at the point of care
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                Review past medical encounters, monitor chronic vitals trajectories, and prescribe medicines with live dispensary stock visibility.
              </p>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-foreground/90 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Integrated ICD-10 diagnostic coding linked directly to invoice tariffs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Real-time lab result alerts delivered directly to the attending physician</span>
                </li>
              </ul>
              <Button variant="outline" asChild size="sm" className="font-medium">
                <Link href="#request-demo">Schedule Clinical Demo</Link>
              </Button>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <MarketingScreenshotFrame title="MarkCare Clinical EMR — Encounter Assessment">
                <div className="p-5 bg-card text-card-foreground text-xs">
                  <div className="flex justify-between border-b border-border/70 pb-3 mb-3">
                    <div>
                      <div className="font-bold">Consultation #CON-2026-0411</div>
                      <div className="text-muted-foreground text-[11px]">Patient: PT-DEMO-101 (Male, 38 yrs)</div>
                    </div>
                    <span className="text-[10px] bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded">Physician Signed</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="p-2 rounded bg-muted/30 border border-border/60">
                      <span className="text-[10px] text-muted-foreground block">BP</span>
                      <span className="font-bold">128/82 mmHg</span>
                    </div>
                    <div className="p-2 rounded bg-muted/30 border border-border/60">
                      <span className="text-[10px] text-muted-foreground block">Pulse</span>
                      <span className="font-bold">74 bpm</span>
                    </div>
                    <div className="p-2 rounded bg-muted/30 border border-border/60">
                      <span className="text-[10px] text-muted-foreground block">Temp</span>
                      <span className="font-bold">36.8 °C</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    Assessment: 3-day intermittent fever with fatigue. Chest clear. Recommended Complete Blood Count and oral rehydration.
                  </p>
                </div>
              </MarketingScreenshotFrame>
            </div>
          </div>

          {/* Row 2: Pharmacy FEFO Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <MarketingScreenshotFrame title="MarkCare Pharmacy — Batch Inventory & FEFO Allocator">
                <div className="p-5 bg-card text-card-foreground text-xs">
                  <div className="flex justify-between border-b border-border/70 pb-3 mb-3">
                    <div>
                      <div className="font-bold">Amoxicillin 500mg Capsules</div>
                      <div className="text-muted-foreground text-[11px]">Main Dispensary Stock: 1,420 units across 3 batches</div>
                    </div>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-600 font-semibold px-2 py-0.5 rounded">FEFO Active</span>
                  </div>
                  <div className="border border-border/60 rounded overflow-hidden">
                    <div className="bg-muted/50 p-2 font-semibold grid grid-cols-12 text-[10px] text-muted-foreground">
                      <span className="col-span-5">BATCH NUMBER</span>
                      <span className="col-span-4">EXPIRY DATE</span>
                      <span className="col-span-3 text-right">FEFO RANK</span>
                    </div>
                    <div className="p-2 grid grid-cols-12 items-center bg-emerald-500/5 font-mono text-[11px] border-t border-border/50">
                      <span className="col-span-5 font-bold">BATCH-2026-A1</span>
                      <span className="col-span-4 text-muted-foreground">2026-11-30</span>
                      <span className="col-span-3 text-right text-emerald-600 font-bold">#1 (Next)</span>
                    </div>
                    <div className="p-2 grid grid-cols-12 items-center font-mono text-[11px] border-t border-border/50">
                      <span className="col-span-5">BATCH-2027-C4</span>
                      <span className="col-span-4 text-muted-foreground">2027-04-15</span>
                      <span className="col-span-3 text-right text-muted-foreground">#2</span>
                    </div>
                  </div>
                </div>
              </MarketingScreenshotFrame>
            </div>

            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Pharmacy Inventory & FEFO</span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-2 mb-4">
                Every tablet tracked down to batch and expiry
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                Enforce First-Expired, First-Out rules automatically. Dispensary staff fulfill prescriptions knowing the system allocates the nearest-expiry stock first.
              </p>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-foreground/90 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Prevents dispensing expired medicines with automated hard locks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Real-time stock deduction synchronized directly with cashier billing</span>
                </li>
              </ul>
              <Button variant="outline" asChild size="sm" className="font-medium">
                <Link href="#request-demo">Explore Pharmacy Controls</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
