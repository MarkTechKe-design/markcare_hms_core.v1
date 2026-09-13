"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Building2, Mail, Phone, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DemoRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    hospitalName: "",
    facilityType: "Multi-Branch Hospital",
    deploymentPreference: "MarkCare Cloud",
    modulesOfInterest: [] as string[],
    message: "",
  });

  const handleModuleToggle = (moduleName: string) => {
    setFormData((prev) => ({
      ...prev,
      modulesOfInterest: prev.modulesOfInterest.includes(moduleName)
        ? prev.modulesOfInterest.filter((m) => m !== moduleName)
        : [...prev.modulesOfInterest, moduleName],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Safe client-side submission handler; avoids inventing backend endpoints
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-xs">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Demonstration Request Acknowledged</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Thank you, <span className="font-semibold text-foreground">{formData.fullName}</span>. Our healthcare deployment specialists will review the operational requirements for{" "}
          <span className="font-semibold text-foreground">{formData.hospitalName}</span> and contact you at{" "}
          <span className="font-semibold text-foreground">{formData.workEmail}</span> to coordinate your walkthrough.
        </p>
        <div className="mt-6 pt-6 border-t border-border">
          <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card p-8 shadow-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-xs font-semibold text-foreground">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              id="fullName"
              required
              type="text"
              placeholder="Dr. Jane Doe"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="workEmail" className="text-xs font-semibold text-foreground">
            Work Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              id="workEmail"
              required
              type="email"
              placeholder="j.doe@hospital.co.ke"
              value={formData.workEmail}
              onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
              className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-semibold text-foreground">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              id="phone"
              required
              type="tel"
              placeholder="+254 700 000 000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="hospitalName" className="text-xs font-semibold text-foreground">
            Hospital / Organization Name *
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              id="hospitalName"
              required
              type="text"
              placeholder="Metropolitan Hospital"
              value={formData.hospitalName}
              onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
              className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="facilityType" className="text-xs font-semibold text-foreground">
            Facility Topology
          </label>
          <select
            id="facilityType"
            value={formData.facilityType}
            onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Single Clinic / Specialty Center">Single Clinic / Specialty Center</option>
            <option value="Outpatient Medical Center">Outpatient Medical Center</option>
            <option value="Inpatient Hospital (Up to 100 Beds)">Inpatient Hospital (Up to 100 Beds)</option>
            <option value="Multi-Branch Hospital Network">Multi-Branch Hospital Network</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="deploymentPreference" className="text-xs font-semibold text-foreground">
            Deployment Model Preference
          </label>
          <select
            id="deploymentPreference"
            value={formData.deploymentPreference}
            onChange={(e) => setFormData({ ...formData, deploymentPreference: e.target.value })}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="MarkCare Cloud">MarkCare Cloud (Managed SaaS)</option>
            <option value="MarkCare Enterprise">MarkCare Enterprise (On-Premise Server)</option>
            <option value="Consultation Required">Need Guidance on Deployment</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <span className="text-xs font-semibold text-foreground block">
          Core Workflows of Interest
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
          {[
            "Clinical EMR & Notes",
            "Pharmacy FEFO Stock",
            "Diagnostic Laboratory",
            "Inpatient & Bed Census",
            "Billing & M-Pesa STK",
            "Multi-Branch Control",
          ].map((mod) => {
            const isChecked = formData.modulesOfInterest.includes(mod);
            return (
              <button
                type="button"
                key={mod}
                onClick={() => handleModuleToggle(mod)}
                className={`flex items-center justify-between rounded-md border px-3 py-2 text-xs font-medium transition-colors ${
                  isChecked
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{mod}</span>
                {isChecked && <CheckCircle2 className="h-3.5 w-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-semibold text-foreground">
          Operational Requirements or Questions (Optional)
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Describe your current system, bed count, branch structure, or planned go-live timeline..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">
        Submit Demonstration Request
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
