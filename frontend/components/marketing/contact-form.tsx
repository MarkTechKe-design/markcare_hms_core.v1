"use client";

import React, { useState } from "react";
import { Building2, Mail, Phone, User, Globe, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitInquiry } from "@/lib/inquiry-client";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    country: "Kenya",
    inquiryType: "GENERAL_CONTACT" as "DEMO_REQUEST" | "GENERAL_CONTACT" | "TECHNICAL_OVERVIEW",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{ success: boolean; referenceId?: string; message?: string } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.organization.trim()) errs.organization = "Healthcare facility name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = "Valid work email is required";
    if (!formData.phone.trim()) errs.phone = "Contact phone number is required";
    if (!formData.message.trim() || formData.message.length < 10) errs.message = "Please include a brief message (min 10 characters)";
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
        type: formData.inquiryType,
        facilityType: formData.country,
        message: formData.message,
      });

      setSubmissionResult({
        success: true,
        referenceId: response.referenceId,
        message: response.message,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unable to transmit inquiry. Please verify your connection.";
      setSubmissionResult({ success: false, message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
      <div>
        <h3 className="text-xl font-bold text-foreground">Inquiry Details</h3>
        <p className="text-xs text-muted-foreground mt-1">
          Provide your healthcare facility details. We do not accept patient health records or clinical consultation requests through this form.
        </p>
      </div>

      {submissionResult?.success ? (
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center space-y-3">
          <div className="size-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="size-6" />
          </div>
          <h4 className="text-base font-bold text-foreground">Inquiry Submitted Successfully</h4>
          <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
            {submissionResult.message}
          </p>
          {submissionResult.referenceId && (
            <div className="pt-2">
              <span className="text-[11px] font-mono font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Reference ID: {submissionResult.referenceId}
              </span>
            </div>
          )}
          <div className="pt-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setSubmissionResult(null);
                setFormData({
                  fullName: "",
                  organization: "",
                  email: "",
                  phone: "",
                  country: "Kenya",
                  inquiryType: "GENERAL_CONTACT",
                  message: "",
                });
              }}
            >
              Submit Another Inquiry
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
                  placeholder="Dr. Jane Doe"
                  className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                />
              </div>
              {errors.fullName && <p className="text-xs text-destructive">{errors.fullName}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="organization" className="text-xs font-semibold text-foreground">
                Healthcare Facility / Organization *
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
                  placeholder="Nairobi General Hospital"
                  className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                />
              </div>
              {errors.organization && <p className="text-xs text-destructive">{errors.organization}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-foreground">
                Work Email Address *
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
                  placeholder="j.doe@facility.org"
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
                  placeholder="+254 700 000 000"
                  className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                />
              </div>
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="country" className="text-xs font-semibold text-foreground">
                Country / Location
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  id="country"
                  name="country"
                  type="text"
                  disabled={isSubmitting}
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Kenya"
                  className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="inquiryType" className="text-xs font-semibold text-foreground">
                Inquiry Purpose
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                <select
                  id="inquiryType"
                  name="inquiryType"
                  disabled={isSubmitting}
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                >
                  <option value="GENERAL_CONTACT">General Operational Inquiry</option>
                  <option value="DEMO_REQUEST">Schedule Product Demonstration</option>
                  <option value="TECHNICAL_OVERVIEW">Technical Architecture Walkthrough</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-foreground">
              Inquiry Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              disabled={isSubmitting}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your facility type (e.g. general hospital, multi-clinic network, specialized practice) and operational requirements..."
              className="w-full rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
            />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground font-semibold shadow-xs hover:bg-primary/90 transition-colors"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Transmitting Inquiry...
                </>
              ) : (
                "Send Inquiry"
              )}
            </Button>
            <p className="text-[11px] text-center text-muted-foreground mt-2">
              No patient health records or clinical data are accepted through this form.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
