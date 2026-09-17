"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, HelpCircle, MessageSquare } from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  MarketingBadge,
} from "@/components/marketing";
import { ContactForm } from "@/components/marketing/contact-form";
import { usePublicSettings } from "@/hooks/use-public-settings";

export default function ContactPage() {
  const { getSetting } = usePublicSettings();

  const email = getSetting("CONTACT_PRIMARY_EMAIL");
  const phone = getSetting("CONTACT_PRIMARY_PHONE");
  const location = getSetting("CONTACT_OFFICE_LOCATION");
  const rawWhatsApp = getSetting("CONTACT_WHATSAPP_NUMBER").replace(/[^0-9]/g, "");

  const whatsappUrl = `https://wa.me/${rawWhatsApp}?text=${encodeURIComponent(
    "Hello MarkCare Systems team, I would like to inquire about deploying MarkCare HMS for our facility."
  )}`;

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
                    We welcome inquiries from healthcare administrators, hospital IT directors, clinical leads, and facility managers.
                  </p>
                </div>
                <div className="space-y-4">
                  {/* General Inquiries */}
                  <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4 shadow-xs">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">General & Demo Inquiries</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Product overviews and demonstration scheduling</p>
                      <a href={`mailto:${email}`} className="text-sm font-semibold text-primary hover:underline mt-1 block">
                        {email}
                      </a>
                    </div>
                  </div>

                  {/* Direct Telephony */}
                  <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4 shadow-xs">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Direct Telephony</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Administrative & commercial communications</p>
                      <a href={`tel:${phone.replace(/\s+/g, "")}`} className="text-sm font-semibold text-primary hover:underline mt-1 block">
                        {phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Support Desk */}
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 flex items-start gap-4 shadow-xs">
                    <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageSquare className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-emerald-950 dark:text-emerald-300">Instant Lead Concierge</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Direct messaging with a systems consultant</p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-emerald-600 hover:underline mt-1 block"
                      >
                        Start WhatsApp Chat
                      </a>
                    </div>
                  </div>

                  {/* Physical Operations */}
                  <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4 shadow-xs">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Regional Operations</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">East Africa & Regional Healthcare Deployments</p>
                      <span className="text-sm text-foreground mt-1 block font-medium">
                        {location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* FAQ Prompt */}
                <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <HelpCircle className="size-5" />
                    <h3 className="text-sm font-bold text-foreground">Have Questions Before Inquiring?</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Review our comprehensive FAQ covering system modules, offline LAN continuity, pricing models, and deployment timelines.
                  </p>
                  <Link
                    href="/resources/faq"
                    className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
                  >
                    View Knowledge Base & FAQ &rarr;
                  </Link>
                </div>
              </div>

              {/* Inquiry Form */}
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
