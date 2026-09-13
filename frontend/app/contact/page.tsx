import React from "react";
import type { Metadata } from "next";
import { Mail, Phone, MapPin, HelpCircle } from "lucide-react";
import { MarketingHeader, MarketingFooter, MarketingContainer, MarketingBadge } from "@/components/marketing";
import { ContactForm } from "@/components/marketing/contact-form";

export const metadata: Metadata = {
  title: "Contact MarkCare HMS",
  description: "Contact MarkCare HMS for healthcare facility inquiries, platform demonstrations, technical architecture reviews, and deployment discussions.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-gradient-to-b from-card to-background py-16 sm:py-20">
          <MarketingContainer className="text-center">
            <MarketingBadge className="mb-3">Get in Touch</MarketingBadge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-balance max-w-3xl mx-auto">
              Let&apos;s talk about your healthcare facility.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Connect with our team to discuss hospital workflows, request a product walkthrough, or review architectural deployment requirements.
            </p>
          </MarketingContainer>
        </section>

        <section className="py-16">
          <MarketingContainer>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">Communication Channels</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    We welcome inquiries from healthcare administrators, hospital IT directors, clinical leads, and healthcare facility managers.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Mail className="size-5" /></div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">General & Demo Inquiries</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Product overviews and demonstration scheduling</p>
                      <a href="mailto:contact@markcare.ke" className="text-sm font-semibold text-primary hover:underline mt-1 block">contact@markcare.ke</a>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Phone className="size-5" /></div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Direct Telephony</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Administrative & commercial communications</p>
                      <a href="tel:+254700000000" className="text-sm font-semibold text-primary hover:underline mt-1 block">+254 (0) 700 000 000</a>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><MapPin className="size-5" /></div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Regional Operations</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">East Africa & Regional Healthcare Deployments</p>
                      <span className="text-sm text-foreground mt-1 block">Nairobi, Kenya</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card/60 p-6 space-y-3">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5"><HelpCircle className="size-4 text-primary" />Important Notice</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    MarkCare HMS provides operational hospital software infrastructure. We do not provide medical advice, diagnosis, emergency triage, or patient prescription renewals through our website. Patients should contact their healthcare provider directly.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </MarketingContainer>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
