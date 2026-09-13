"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Building2, Mail, Phone, User, Calendar, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  MarketingBadge,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { submitInquiry } from "@/lib/inquiry-client";

export default function RequestDemoPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    facilityType: "General Hospital (50-200 beds)",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{ success: boolean; referenceId?: string; message?: string } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.organization.trim()) errs.organization = "Hospital or clinic name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = "Valid work email is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await submitInquiry({
        name: formData.fullName,
        organization: formData.organization,
        email: formData.email,
        phone: formData.phone,
        type: "DEMO_REQUEST",
        facilityType: formData.facilityType,
        message: formData.message || "Schedule product demonstration for hospital leadership and clinical heads.",
      });

      setSubmissionResult({
        success: true,
        referenceId: response.referenceId,
        message: response.message,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unable to submit demonstration request. Please try again.";
      setSubmissionResult({ success: false, message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1 py-16 sm:py-24">
        <MarketingContainer className="max-w-3xl">
          <div className="text-center mb-10">
            <MarketingBadge className="mb-3">Demonstration Walkthrough</MarketingBadge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Request a MarkCare Demonstration
            </h1>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Evaluate MarkCare workflows directly with our healthcare technology team. We will review triage, EMR, pharmacy, and cashier desks tailored to your facility scope.
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-10 shadow-xs">
            {submissionResult?.success ? (
              <div className="text-center space-y-4 py-6">
                <div className="size-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="size-7" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Demonstration Request Logged</h2>
                <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  {submissionResult.message}
                </p>
                {submissionResult.referenceId && (
                  <div>
                    <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
                      Tracking Reference: {submissionResult.referenceId}
                    </span>
                  </div>
                )}
                <div className="pt-4 flex justify-center gap-3">
                  <Button asChild variant="outline">
                    <Link href="/modules">Explore System Modules</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/">Return to Homepage</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {submissionResult && !submissionResult.success && (
                  <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-3 text-xs text-destructive flex items-center gap-2">
                    <AlertCircle className="size-4 shrink-0" />
                    <span>{submissionResult.message}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-xs font-semibold text-foreground">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        disabled={isSubmitting}
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Dr. Samuel Ochieng"
                        className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                      />
                    </div>
                    {errors.fullName && <p className="text-xs text-destructive">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="organization" className="text-xs font-semibold text-foreground">
                      Hospital / Healthcare Facility *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        disabled={isSubmitting}
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Eldoret Regional Hospital"
                        className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                      />
                    </div>
                    {errors.organization && <p className="text-xs text-destructive">{errors.organization}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-foreground">
                      Official Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="s.ochieng@eldorethosp.org"
                        className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                      />
                    </div>
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-foreground">
                      Direct Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        disabled={isSubmitting}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 712 345 678"
                        className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="facilityType" className="text-xs font-semibold text-foreground">
                    Facility Scope & Size
                  </label>
                  <select
                    id="facilityType"
                    name="facilityType"
                    disabled={isSubmitting}
                    value={formData.facilityType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                  >
                    <option value="Standalone Outpatient Clinic">Standalone Outpatient Clinic</option>
                    <option value="Community Hospital (< 50 beds)">Community Hospital (&lt; 50 beds)</option>
                    <option value="General Hospital (50-200 beds)">General Hospital (50-200 beds)</option>
                    <option value="Referral Center / Multi-Branch Network (> 200 beds)">Referral Center / Multi-Branch Network (&gt; 200 beds)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-foreground">
                    Operational Requirements / Focus Areas
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe specific modules of interest (e.g., EMR clinical notes, pharmacy FEFO, cashier billing aggregation, multi-branch governance)..."
                    className="w-full rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                  />
                </div>

                <div className="pt-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground font-semibold shadow-xs hover:bg-primary/90 transition-colors"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        Submitting Demonstration Request...
                      </>
                    ) : (
                      "Submit Demonstration Request"
                    )}
                  </Button>
                  <p className="text-[11px] text-center text-muted-foreground mt-2">
                    Confidential. No patient health records are accepted through this form.
                  </p>
                </div>
              </form>
            )}
          </div>
        </MarketingContainer>
      </main>

      <MarketingFooter />
    </div>
  );
}
