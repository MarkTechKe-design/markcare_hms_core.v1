import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Server, Cloud, Network, CheckCircle2, ShieldCheck } from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  MarketingBadge,
  MarketingSection,
  MarketingCtaBanner,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "MarkCare HMS Deployment Models & Procurement",
  description:
    "Review MarkCare deployment architectures: Managed Cloud and Private On-Premises configurations tailored for clinics and hospitals.",
};

const deploymentModels = [
  {
    name: "MarkCare Managed Cloud",
    icon: Cloud,
    tagline: "Low maintenance for medical clinics and standalone healthcare facilities.",
    characteristics: [
      "Dedicated cloud database instance",
      "System and formulary updates managed centrally",
      "Standard role-based access governance",
      "Secure web access across facility workstations",
      "Off-site encrypted backups",
    ],
  },
  {
    name: "Private On-Premises",
    icon: Server,
    featured: true,
    tagline: "Dedicated deployment within the hospital's private server infrastructure.",
    characteristics: [
      "Direct installation on hospital server hardware",
      "Local network data custody & residency",
      "LAN continuity during external broadband outages",
      "Hospital IT administrative control",
      "Hardware-level security integration",
    ],
  },
  {
    name: "Multi-Branch Network",
    icon: Network,
    tagline: "Coordinated deployment across hub hospitals and satellite clinic branches.",
    characteristics: [
      "Standardized multi-clinic tariffs and formularies",
      "Branch-scoped patient encounter queues",
      "Consolidated group-wide leadership reporting",
      "Centralized staff permissions management",
      "Configurable facility topologies",
    ],
  },
];

const comparisonMatrix = [
  {
    feature: "Primary Infrastructure",
    cloud: "Dedicated Cloud Instance",
    onPrem: "Hospital Local Server Hardware",
    network: "Central Hub + Distributed Workstations",
  },
  {
    feature: "Broadband Dependency",
    cloud: "Requires Continuous Broadband",
    onPrem: "Local Area Network (LAN) Continuity",
    network: "LAN at Branch + Periodic Sync",
  },
  {
    feature: "Data Custody",
    cloud: "Encrypted Cloud Storage",
    onPrem: "100% On-Premises Facility Custody",
    onPremFull: true,
    network: "Facility Group Sovereignty",
  },
  {
    feature: "Catalog Administration",
    cloud: "Managed Web Console",
    onPrem: "Internal System Administrator",
    network: "Centralized Headquarters Console",
  },
  {
    feature: "Multi-Branch Support",
    cloud: "Supported",
    onPrem: "Branch-Specific",
    network: "Native Multi-Facility Architecture",
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <MarketingBadge className="mb-4">Deployment Architectures & Procurement</MarketingBadge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              Deployment models structured around your facility.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Hospital software procurement requires flexible infrastructure. MarkCare supports cloud-hosted and dedicated on-premises deployments based on your facility&apos;s physical network, bed capacity, and data governance policies.
            </p>
          </MarketingContainer>
        </section>

        {/* Deployment Architectures */}
        <MarketingSection>
          <MarketingContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {deploymentModels.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border bg-card p-6 sm:p-7 shadow-xs flex flex-col justify-between mc-card mc-card-interactive mc-reveal group ${
                    plan.featured ? "border-primary/40 shadow-md shadow-primary/5" : "border-border/80"
                  }`}
                >
                  <div>
                    <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 mc-icon-interactive">
                      <plan.icon className="size-5" aria-hidden="true" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-6">{plan.tagline}</p>

                    <div className="border-t border-border/60 pt-4 space-y-2.5">
                      {plan.characteristics.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/60">
                    <Button asChild className="w-full bg-primary text-primary-foreground font-semibold shadow-xs">
                      <Link href="/request-demo">Request Architecture Assessment</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Comparison Table */}
            <div className="mt-20">
              <div className="mb-6 text-center max-w-2xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Technical Deployment Comparison</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Evaluate infrastructure, network continuity, and data custody parameters.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-border/80 bg-card">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="border-b border-border bg-muted/40 text-muted-foreground">
                    <tr>
                      <th className="p-4 font-semibold">Technical Parameter</th>
                      <th className="p-4 font-semibold">Managed Cloud</th>
                      <th className="p-4 font-semibold">Private On-Premises</th>
                      <th className="p-4 font-semibold">Multi-Branch Network</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60 text-foreground">
                    {comparisonMatrix.map((row) => (
                      <tr key={row.feature} className="hover:bg-muted/20">
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-muted-foreground">{row.cloud}</td>
                        <td className="p-4 text-muted-foreground">{row.onPrem}</td>
                        <td className="p-4 text-muted-foreground">{row.network}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Procurement Transparency Notice */}
            <div className="mt-16 rounded-2xl border border-border/80 bg-card p-6 sm:p-8 max-w-3xl mx-auto">
              <div className="flex items-center gap-2.5 mb-3">
                <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
                <h4 className="text-base font-bold text-foreground">Hospital Procurement & Licensing</h4>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                MarkCare commercial agreements are structured transparently based on facility scope: active inpatient bed capacity, outpatient volume tiers, and deployment architecture. We do not assess per-patient transaction fees. Speak with our team to obtain an official facility quotation tailored to your operational requirements.
              </p>
            </div>
          </MarketingContainer>
        </MarketingSection>

        {/* CTA Banner */}
        <MarketingCtaBanner
          headline="Discuss licensing and deployment for your hospital"
          description="Speak directly with our implementation architects to evaluate server specifications, network topology, and rollout timelines."
          primaryCta={{
            label: "Request a Demonstration",
            href: "/request-demo",
          }}
          secondaryCta={{
            label: "Contact Inquiries",
            href: "/contact",
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}
