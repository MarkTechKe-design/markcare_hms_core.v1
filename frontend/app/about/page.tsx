import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Users,
  Stethoscope,
  Pill,
  FlaskConical,
  CreditCard,
  Calendar,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Compass,
  Zap,
} from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  MarketingBadge,
  MarketingCtaBanner,
} from "@/components/marketing";
import { MarketingCapabilityStrip } from "@/components/marketing/marketing-capability-strip";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About MarkCare HMS",
  description:
    "Learn about MarkCare HMS: a healthcare technology platform engineered to connect hospital administration, patient records, and clinical workflows into one cohesive workspace.",
};

const verifiedMetrics = [
  {
    icon: Layers,
    stat: "10+",
    label: "Modules in one workspace",
  },
  {
    icon: Zap,
    stat: "0",
    label: "Disconnected software silos",
  },
  {
    icon: Building2,
    stat: "Multi-Branch",
    label: "Centralized facility governance",
  },
  {
    icon: ShieldCheck,
    stat: "Role-Based",
    label: "Access control by department",
  },
];

const verifiedModules = [
  {
    icon: Stethoscope,
    title: "Clinical EMR & Notes",
    desc: "Digital encounter documentation, vitals monitoring, and diagnosis records organized around patient care.",
  },
  {
    icon: Users,
    title: "Patient Administration",
    desc: "Unified registration, visit admissions, and demographic tracking across outpatient and inpatient encounters.",
  },
  {
    icon: Pill,
    title: "Pharmacy FEFO Dispensing",
    desc: "Prescription fulfillment linked directly to clinical orders with expiry-aware stock tracking.",
  },
  {
    icon: FlaskConical,
    title: "Diagnostic Laboratory",
    desc: "Integrated investigation orders, specimen status tracking, and structured result validation.",
  },
  {
    icon: CreditCard,
    title: "Billing & Cashier Desks",
    desc: "Itemized departmental fee aggregation, invoice management, and transparent payment settlement.",
  },
  {
    icon: Calendar,
    title: "Appointments & Queue",
    desc: "Coordinated schedule management and active department queue sequencing to regulate patient flow.",
  },
  {
    icon: Building2,
    title: "Multi-Branch Governance",
    desc: "Administrative coordination across hospitals, clinics, and satellite departments under unified policies.",
  },
  {
    icon: Layers,
    title: "Reports & Audits",
    desc: "Operational summaries for facility leadership covering daily census, department visits, and transactions.",
  },
];

const designPrinciples = [
  {
    title: "Connected Workflows Over Isolated Tools",
    desc: "Healthcare operations suffer when each department operates in a vacuum. MarkCare is designed so actions in triage or consultation notify the pharmacy, lab, and cashier automatically.",
  },
  {
    title: "Practical Usability for Healthcare Staff",
    desc: "Doctors, nurses, and administrative clerks manage demanding shifts. Software interfaces must be responsive, uncluttered, and quick to navigate during patient consultations.",
  },
  {
    title: "Responsible Data Governance",
    desc: "Patient records demand care. MarkCare is structured with role-scoped staff permissions and access accountability to ensure clinical data is available only where authorized.",
  },
  {
    title: "Modular Adaptability",
    desc: "From standalone community clinics to multi-department regional hospitals, facilities need software that matches their active services without unnecessary overhead.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative border-b border-border bg-gradient-to-b from-card to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <MarketingBadge className="mb-4">Company & Platform Overview</MarketingBadge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              Healthcare management, built around better care.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              MarkCare HMS is a healthcare technology platform engineered to bring hospital administration, clinical encounters, pharmacy dispensing, and financial workflows together into one connected system.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold">
                <Link href="/request-demo">
                  Request a Demonstration
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/modules">Explore Verified Modules</Link>
              </Button>
            </div>
          </MarketingContainer>
        </section>

        {/* Verified Capability & Metrics Strip */}
        <MarketingCapabilityStrip items={verifiedMetrics} />

        {/* Why MarkCare Exists & The Mission */}
        <section className="py-20 border-b border-border">
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <MarketingBadge className="mb-3">Our Mission</MarketingBadge>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Making healthcare operations more connected, organized, and reliable.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Every day, healthcare workers navigate complex responsibilities under intense time pressure. When operational software is slow, disconnected, or difficult to use, administrative overhead takes time away from direct patient interactions.
                </p>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  MarkCare is being developed to simplify healthcare administration, eliminate redundant manual data re-entry, and provide healthcare teams with the information they need to deliver attentive, coordinated care.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                  <Compass className="size-5 text-primary" />
                  The Operational Challenge We Address
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Fragmented Records:</strong> Clinical notes separated across paper files and physical archives.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Departmental Disconnect:</strong> Delays between consultation orders, pharmacy counters, and cashier desks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Administrative Burden:</strong> Excessive time spent checking manual logbooks instead of reviewing patient vitals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Inventory Uncertainty:</strong> Stock drift and unexpected pharmaceutical shortages in hospital dispensaries.</span>
                  </li>
                </ul>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* What MarkCare Brings Together (Verified Capabilities) */}
        <section className="py-20 bg-card/50 border-b border-border">
          <MarketingContainer>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <MarketingBadge className="mb-3">System Scope</MarketingBadge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Verified platform capabilities
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                MarkCare coordinates daily hospital operations through dedicated, interoperable modules built into a unified architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {verifiedModules.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <item.icon className="size-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </section>

        {/* How We Think About Healthcare Technology */}
        <section className="py-20 border-b border-border">
          <MarketingContainer>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <MarketingBadge className="mb-3">Our Approach</MarketingBadge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                How we think about healthcare technology
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Architectural choices in healthcare technology must prioritize stability, clarity, and the daily workflow realities of medical staff.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {designPrinciples.map((dp) => (
                <div key={dp.title} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                    <ShieldCheck className="size-5 text-primary" />
                    {dp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{dp.desc}</p>
                </div>
              ))}
            </div>
          </MarketingContainer>
        </section>

        {/* Vision for Modern Healthcare */}
        <section className="py-20 border-b border-border bg-gradient-to-b from-background to-card">
          <MarketingContainer className="max-w-3xl text-center">
            <MarketingBadge className="mb-3">Long-Term Ambition</MarketingBadge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Supporting modern healthcare delivery
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our long-term ambition is to provide healthcare facilities across Africa with reliable, modern, and accessible digital infrastructure. We believe that well-organized information enables healthcare professionals to make timely clinical decisions and deliver consistent, patient-centered care.
            </p>
          </MarketingContainer>
        </section>

        {/* Canonical Blue CTA Banner */}
        <MarketingCtaBanner
          headline="Evaluate MarkCare for your healthcare facility"
          description="Speak with our team to review your hospital's operational workflow requirements or arrange a walkthrough."
          primaryCta={{
            label: "Request a Demonstration",
            href: "/request-demo",
          }}
          secondaryCta={{
            label: "Contact Our Team",
            href: "/contact",
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}
