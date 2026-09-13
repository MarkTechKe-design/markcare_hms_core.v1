import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Lock, KeyRound, Building2, ScrollText, UserCheck, EyeOff } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from '@/components/marketing/marketing-badge';
import { MarketingCtaBanner } from '@/components/marketing/marketing-cta-banner';
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Security, Privacy & Data Governance — MarkCare HMS",
  description:
    "Learn about MarkCare HMS security architecture: JWT authentication, role-based access controls, query-scoped facility isolation, and comprehensive clinical audit trails.",
};

export default function SecurityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border/80 bg-slate-900 text-white py-20">
          <MarketingContainer>
            <div className="max-w-3xl">
              <MarketingBadge className="mb-4 text-blue-300 border-blue-800 bg-blue-950/50">
                Security & Data Protection Controls
              </MarketingBadge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
                Defending clinical records with strict architectural boundaries.
              </h1>
              <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                Hospital data requires absolute integrity. MarkCare is engineered with query-scoped multi-branch boundaries, role-based access validation, cryptographic tokens, and immutable audit logs.
              </p>
            </div>
          </MarketingContainer>
        </section>

        {/* Security Controls */}
        <section className="py-20 border-b border-border">
          <MarketingContainer>
            <div className="max-w-2xl mb-12">
              <MarketingBadge>Access Governance</MarketingBadge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mt-2">
                Engineered with applicable data protection principles in mind.
              </h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Rather than relying on generic security claims, MarkCare enforces explicit security boundaries throughout its application architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <KeyRound className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">JWT Session Lifecycle</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  JSON Web Tokens with cryptographic signature validation protect every API interaction. Session timeouts and secure token refresh cycles prevent unauthorized access from abandoned workstations.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Role-Based Access Control (RBAC)</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Granular permission sets strictly separate clinical duties. Triage nurses cannot alter pharmacy pricing; pharmacy staff cannot edit doctor consultation notes; cashiers cannot alter lab values.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Facility & Branch Scoping</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Data queries are scoped at the application authorization level by facilityId and branchId. Staff members are isolated to their authorized operating branches, preventing cross-site leakage.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <ScrollText className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Comprehensive Audit Trails</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Critical interactions — such as clinical note entries, stock adjustments, invoice cancellations, and user role modifications — record timestamps, user identifiers, and IP telemetry.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Platform Admin Separation</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Global system administration resides on isolated routes (/platform-admin) restricted exclusively to SUPER_ADMIN roles, ensuring hospital operators cannot alter platform-level configurations.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Encrypted Transport</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  All traffic across web clients and server endpoints is enforced over TLS/HTTPS with modern cipher suites. Sensitive credential storage uses salted, one-way cryptographic hashing.
                </p>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* Deployment Posture */}
        <section className="py-20 bg-muted/30 border-b border-border">
          <MarketingContainer>
            <div className="max-w-2xl mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Infrastructure Sovereignty</h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Choose the hosting environment that aligns with your institutional compliance and data governance policies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-base font-bold text-foreground">Managed Cloud Security</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Hosted on secure cloud environments with managed database backups, automated patch delivery, and hardened network security groups.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-base font-bold text-foreground">On-Premise Air-Gapped Deployment</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  MarkCare Enterprise can be deployed on hospital-owned server hardware inside your private local area network (LAN), ensuring data never traverses the public internet.
                </p>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* CTA */}
                <MarketingCtaBanner
          headline="Schedule a Security & Architecture Review"
          description="Speak directly with our technical architecture team regarding network topography, data sovereignty, and backup schedules."
          primaryCta={{
            label: "Schedule Technical Review",
            href: "/request-demo",
          }}
          secondaryCta={{
            label: "Review Deployment Options",
            href: "/pricing",
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}
