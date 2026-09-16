import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Building2,
  ScrollText,
  UserCheck,
  Server,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Network,
  Sliders,
  ClipboardList,
  FileCheck,
  Eye,
  ShieldAlert,
} from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  MarketingSection,
  MarketingSectionHeading,
  MarketingCtaBanner,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Security Posture, Access Governance & Data Protection",
  description:
    "Explore MarkCare HMS security architecture: authentication controls, role-based access scoping, branch boundaries, application audit logging, and shared deployment responsibility.",
};

// Section 2: Shared Responsibility / Security Posture Division
const postureDivisions = [
  {
    title: "Application Controls",
    subtitle: "Engineered in Codebase",
    desc: "Authentication enforcement, password hashing policies, role-based access decorators, branch query scoping, and transactional application audit logs.",
    icon: ShieldCheck,
  },
  {
    title: "Configuration Controls",
    subtitle: "Facility Administrator Responsibility",
    desc: "User credential provisioning, department assignment, staff branch access grants, session timeout thresholds, and payment merchant key configuration.",
    icon: Sliders,
  },
  {
    title: "Infrastructure Responsibilities",
    subtitle: "Hospital IT / Hosting Operator",
    desc: "TLS/HTTPS certificate termination, network firewall rules, database server custody, automated backup schedules, and physical server security.",
    icon: Server,
  },
];

// Section 3: Identity & Authentication Controls
const authControls = [
  {
    title: "Cryptographic Password Hashing",
    desc: "User credentials are protected using salted bcrypt hashing algorithms with strict password complexity policies, preventing plain-text storage.",
    icon: KeyRound,
  },
  {
    title: "JWT Token Lifecycle",
    desc: "Signed JSON Web Tokens govern API communication with session expiration thresholds and sessionVersion invalidation upon credential changes.",
    icon: Lock,
  },
  {
    title: "Failed Login & Lockout Safeguards",
    desc: "Consecutive failed authentication attempts trigger progressive rate-limiting thresholds to defend against automated credential-guessing attacks.",
    icon: ShieldAlert,
  },
  {
    title: "Step-Up Verification for Sensitive Actions",
    desc: "Critical administrative and operational modifications utilize step-up authorization guards to confirm operator intent before state changes.",
    icon: UserCheck,
  },
];

// Section 4 & 5: Role & Multi-Branch Scoping
const accessBoundaries = [
  {
    title: "Departmental Role Separation",
    desc: "Granular role-based access controls strictly limit workstation capabilities. Triage nurses cannot modify pharmacy pricing, pharmacy staff cannot alter doctor consultation records, and cashiers cannot edit diagnostic lab values.",
  },
  {
    title: "Facility & Branch Tenancy Scoping",
    desc: "Operational queues and patient charting are structured hierarchically (Facility → Branch → Department). The UserBranchAccess model binds staff permissions to authorized operating locations.",
  },
  {
    title: "Platform Administration Isolation",
    desc: "System-wide multi-tenant configuration resides on segregated administrative routes (/platform-admin) restricted exclusively to SUPER_ADMIN identities, keeping hospital operators separated from core system settings.",
  },
  {
    title: "Defense Against Cross-Branch Exposure",
    desc: "Database queries in clinical and financial controllers are designed to incorporate active facilityId and branchId filters to prevent accidental cross-location record leakage.",
  },
];

// Section 6: Audit Logging & Traceability
const auditCapabilities = [
  {
    title: "Clinical Chart Modifications",
    desc: "Encounter note entries, ICD-10 diagnostic additions, and clinical status changes record actor identity, station metadata, and timestamps.",
  },
  {
    title: "Pharmaceutical Adjustments",
    desc: "Dispense fulfillments, batch write-offs, near-expiry updates, and inter-branch inventory transfers log accountable stock deltas.",
  },
  {
    title: "Financial Ledger Corrections",
    desc: "Invoice line adjustments, fee waivers, split-payment receipting, and cashier shift reconciliations maintain complete administrative visibility.",
  },
  {
    title: "Access & User Governance",
    desc: "User creation, role reassignments, branch permission updates, and login attempts log security telemetry for administrative review.",
  },
];

// Section 9: Deployment Shared Responsibility Matrix
const deploymentMatrix = [
  {
    layer: "Application Layer",
    markcare: "RBAC enforcement, password hashing, session expiration, branch query scoping, and application audit logging.",
    hospital: "Prompt user offboarding, secure staff password hygiene, and role assignment reviews.",
  },
  {
    layer: "Network & Transport",
    markcare: "Support for standard TLS/HTTPS reverse proxies and local workstation LAN routing.",
    hospital: "SSL/TLS certificate lifecycle, local switch security, and hospital Wi-Fi network isolation.",
  },
  {
    layer: "Database & Storage",
    markcare: "Relational foreign-key constraints, parameterized query execution, and transactional outbox tables.",
    hospital: "Database server hardening, operating system patching, and storage volume encryption.",
  },
  {
    layer: "Backup & Continuity",
    markcare: "Database export scripts and documentation on operational state restoration.",
    hospital: "Automated off-site backup schedules, disaster recovery testing, and backup retention policies.",
  },
];

// Section 11: IT Security Readiness Checklist
const securityChecklist = [
  {
    title: "Identity & Credential Strategy",
    desc: "Plan initial role mappings (Clinician, Nurse, Pharmacist, Lab Tech, Cashier) and administrative supervisor accounts.",
  },
  {
    title: "TLS / HTTPS Configuration",
    desc: "Ensure reverse proxy infrastructure (Nginx, Caddy, or cloud load balancer) is configured with current TLS cipher suites.",
  },
  {
    title: "LAN & Workstation Segmentation",
    desc: "Separate clinical consultation and cashier terminals from public guest Wi-Fi networks using internal VLAN boundaries.",
  },
  {
    title: "Database Backup Schedule",
    desc: "Establish automated nightly database dumps with off-site encrypted storage and periodic restore validation rehearsals.",
  },
  {
    title: "Payment Gateway Credentials",
    desc: "Secure storage and controlled access to Safaricom Daraja API Consumer Keys, Secrets, and Passkeys.",
  },
  {
    title: "Physical Terminal Custody",
    desc: "Ensure physical consultation room and dispensary terminals enforce automatic screen lockouts when unattended.",
  },
];

export default function SecurityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <section className="relative border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Security Posture &middot; Access Governance
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              Security designed around healthcare operations.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Hospital software demands rigorous operational boundaries. MarkCare combines application-level access controls,
              facility and branch context, cryptographic session validation, and application audit logging &mdash; structured
              around a transparent shared-responsibility model with hospital IT leadership.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
                <Link href="/request-demo">
                  Discuss Security &amp; Deployment
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:bg-accent/60 transition-all active:scale-[0.98]">
                <Link href="/platform">Inspect Platform Architecture</Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>

        {/* Section 2: Tripartite Security Posture */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Security Framework"
              title="A clear division of security responsibilities."
              description="Effective data protection requires coordination between software engineering, administrative policy, and physical infrastructure."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {postureDivisions.map((division) => {
                const Icon = division.icon;
                return (
                  <div
                    key={division.title}
                    className="rounded-2xl border border-border/80 bg-card p-6 sm:p-7 shadow-xs flex flex-col justify-between mc-card"
                  >
                    <div className="space-y-4">
                      <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="size-5.5" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-primary block mb-1">
                          {division.subtitle}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">
                          {division.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {division.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 3: Identity & Authentication Controls */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Access Control"
              title="Identity verification &amp; session governance."
              description="User access is defended through cryptographic credential hashing, session expiration policies, and progressive authentication safeguards."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {authControls.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-3 mc-card"
                  >
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 4 & 5: Role & Multi-Branch Scoping */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Operational Scoping
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
                  Role-based access bound to branch context.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hospital staff require access strictly aligned with their clinical duty and physical location. MarkCare
                  structures operational context hierarchically &mdash; Facility &rarr; Branch &rarr; Department &mdash;
                  so consultation records, medication stocks, and financial folios remain scoped to authorized personnel.
                </p>
                <div className="pt-2">
                  <Button asChild variant="outline" size="sm" className="font-semibold hover:bg-accent/60">
                    <Link href="/facilities">
                      Review Multi-Location Governance &rarr;
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                    <Network className="size-4 text-primary" aria-hidden="true" />
                    Access Boundaries in Practice
                  </h3>
                  <div className="space-y-3">
                    {accessBoundaries.map((boundary) => (
                      <div key={boundary.title} className="p-3.5 rounded-xl bg-muted/60 border border-border/60 text-xs">
                        <strong className="text-foreground block mb-1">{boundary.title}</strong>
                        <p className="text-muted-foreground leading-relaxed">{boundary.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 6: Application Auditability */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Traceability"
              title="Application audit trails &amp; administrative accountability."
              description="Security-relevant activity is captured in application audit records to ensure accountability across clinical shifts and departmental handoffs."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {auditCapabilities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-3 mc-card"
                >
                  <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <ScrollText className="size-4.5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 7 & 8: Data Protection, Secrets & Integration Security */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs flex flex-col justify-between mc-card">
                <div className="space-y-4">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Lock className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Data Handling &amp; Secrets Management
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Application secrets, JWT signing keys, and database credentials are managed exclusively via environment
                    variables, isolated from source repositories and client bundles. Sensitive merchant credentials are
                    stored on the server and excluded from public-facing API responses.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground pt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Zero hardcoded production secrets in client-side code</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Parameterized queries mitigating SQL injection risks</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs flex flex-col justify-between mc-card">
                <div className="space-y-4">
                  <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <FileCheck className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Integration Security Boundaries
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    External communications &mdash; including M-Pesa mobile money and eTIMS tax outbox pipelines &mdash;
                    utilize authenticated HTTPS transport and asynchronous webhook ingestion. Inbound callback payloads
                    are reconciled against internal invoices to ensure payment reference integrity.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground pt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Decoupled outbox pattern for reliable external messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Cryptographic invoice QR verification via public check routes</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Button asChild variant="outline" size="sm" className="font-semibold hover:bg-accent/60">
                    <Link href="/integrations">
                      Review Integration Connectors &rarr;
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 9: Deployment Shared Responsibility Matrix */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Responsibility Model"
              title="Shared deployment responsibility matrix."
              description="A defensible security posture clearly delineates what the MarkCare application delivers versus what hospital IT and hosting operators manage."
            />

            <div className="overflow-x-auto rounded-2xl border border-border/80 bg-card shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="border-b border-border bg-muted/40 text-muted-foreground">
                  <tr>
                    <th className="p-4 font-semibold w-1/4">Operational Layer</th>
                    <th className="p-4 font-semibold w-3/8">MarkCare Application Scope</th>
                    <th className="p-4 font-semibold w-3/8">Hospital / Operator Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-foreground">
                  {deploymentMatrix.map((row) => (
                    <tr key={row.layer} className="hover:bg-muted/20">
                      <td className="p-4 font-bold text-foreground">{row.layer}</td>
                      <td className="p-4 text-muted-foreground leading-relaxed">{row.markcare}</td>
                      <td className="p-4 text-muted-foreground leading-relaxed">{row.hospital}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 10: Security Transparency & Continuous Hardening */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-10 max-w-3xl mx-auto space-y-5 shadow-xs">
              <div className="flex items-center gap-3 pb-3 border-b border-border/60">
                <AlertCircle className="size-6 text-primary shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                    Security Transparency
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    Realistic, defense-in-depth engineering.
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                No healthcare software can honestly claim mathematical impossibility of breaches or absolute zero-risk operations.
                A dependable security posture depends on disciplined application-layer controls, proper reverse-proxy deployment,
                diligent network segmentation, routine database backups, and active administrative oversight. MarkCare is
                engineered around defense-in-depth principles and continuous operational hardening.
              </p>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 11: IT Security Readiness Checklist */}
        <MarketingSection variant="muted">
          <MarketingContainer>
            <MarketingSectionHeading
              eyebrow="Deployment Readiness"
              title="Hospital IT security evaluation checklist."
              description="To ensure a secure deployment, prospective healthcare organizations should review these infrastructure and governance parameters prior to go-live."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityChecklist.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs space-y-2 mc-card"
                >
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <ClipboardList className="size-4 shrink-0" aria-hidden="true" />
                    <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 12: Architectural Bridge */}
        <MarketingSection variant="default">
          <MarketingContainer>
            <div className="rounded-2xl border border-border/80 bg-card p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  System Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Explore the underlying technical and data architecture.
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl">
                  Inspect our six-stage transactional data flow, Local-Area Network (LAN) server resilience, and multi-location deployment models.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
                  <Link href="/platform">
                    Inspect System Architecture
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:bg-accent/60 transition-all">
                  <Link href="/facilities">Review Facility Governance</Link>
                </Button>
              </div>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* Section 13: Canonical CTA Banner */}
        <MarketingCtaBanner
          headline="Review your hospital's security environment"
          description="Speak directly with our technical architecture team to evaluate deployment topology, access scoping, and infrastructure security prerequisites."
          primaryCta={{
            label: "Schedule Technical Review",
            href: "/request-demo",
          }}
          secondaryCta={{
            label: "Review Platform Architecture",
            href: "/platform",
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}

