"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";

export default function ConsentPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleConsent = () => {
    if (!agreed) return;
    setSubmitted(true);
    setTimeout(() => {
      router.push("/login");
    }, 1200);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <MarketingHeader />

      <main className="flex-1 flex items-center justify-center bg-muted/30 p-4 sm:p-8">
        <div className="w-full max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10 text-card-foreground">
          <div className="flex items-center gap-3 border-b border-border/60 pb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                Patient Data Processing & Clinical Consent
              </h1>
              <p className="text-xs text-muted-foreground">
                MarkCare Hospital Management System — Operational Data Governance
              </p>
            </div>
          </div>

          <div className="my-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Welcome to MarkCare HMS. In accordance with healthcare data protection principles and applicable digital health regulations, healthcare facilities operating MarkCare HMS process personal and sensitive medical records to deliver clinical, diagnostic, and administrative services.
            </p>

            <div className="rounded-lg border border-border/60 bg-muted/20 p-4 space-y-2">
              <h3 className="font-semibold text-foreground text-xs uppercase tracking-wider">
                Key Processing Principles:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Strict facility and branch-level data scoping.</li>
                <li>Encrypted storage of sensitive clinical notes, laboratory results, and prescription history.</li>
                <li>Role-based access controls restricting diagnostic details to authorized medical professionals.</li>
                <li>Immutable audit logging of patient chart access and billing operations.</li>
              </ul>
            </div>

            <p className="text-xs text-muted-foreground/85">
              By proceeding to access or manage records within the System, you confirm that data processing occurs under lawful clinical grounds, facility administrative oversight, and patient consent frameworks.
            </p>
          </div>

          <div className="border-t border-border/60 pt-6 space-y-4">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-xs text-foreground leading-normal">
                I acknowledge the data protection terms, clinical governance standards, and facility data processing responsibilities within MarkCare HMS.
              </span>
            </label>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push("/")}
              >
                Return to Home
              </Button>

              <Button
                size="sm"
                disabled={!agreed || submitted}
                onClick={handleConsent}
                className="w-full sm:w-auto"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    Consent Recorded
                  </>
                ) : (
                  <>
                    Proceed to Portal
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
