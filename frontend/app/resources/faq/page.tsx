"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  MarketingBadge,
  MarketingCtaBanner,
} from "@/components/marketing";
import { marketingContent } from "@/content/marketing-content";

export default function FaqPage() {
  const { faqCategories } = marketingContent;
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleAccordion = (id: string) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border/80 bg-gradient-to-b from-card/60 via-background to-background py-20 sm:py-28">
          <MarketingContainer className="text-center">
            <MarketingBadge className="mb-4">Frequently Asked Questions</MarketingBadge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance max-w-4xl mx-auto">
              Answers about MarkCare HMS
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Find verified information regarding system architecture, department workflows, offline operation, and patient record confidentiality.
            </p>
          </MarketingContainer>
        </section>

        {/* Accessible Categorized Accordion Section */}
        <section className="py-16 sm:py-24">
          <MarketingContainer className="max-w-4xl space-y-12">
            {faqCategories.map((cat, catIdx) => (
              <div key={cat.category} className="space-y-4">
                <div className="border-b border-border pb-2">
                  <h2 className="text-lg font-bold tracking-tight text-foreground">{cat.category}</h2>
                </div>

                <div className="space-y-3">
                  {cat.items.map((item, itemIdx) => {
                    const id = `faq-${catIdx}-${itemIdx}`;
                    const contentId = `content-${catIdx}-${itemIdx}`;
                    const isOpen = openIndex === id;

                    return (
                      <div
                        key={item.question}
                        className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs transition-colors"
                      >
                        <button
                          id={id}
                          type="button"
                          onClick={() => toggleAccordion(id)}
                          aria-expanded={isOpen}
                          aria-controls={contentId}
                          className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[48px]"
                        >
                          <span>{item.question}</span>
                          <ChevronDown
                            className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-primary" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        {isOpen && (
                          <div
                            id={contentId}
                            role="region"
                            aria-labelledby={id}
                            className="px-5 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 pt-3"
                          >
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </MarketingContainer>
        </section>

        {/* CTA Banner */}
        <MarketingCtaBanner
          headline="Have questions specific to your hospital?"
          description="Speak directly with our clinical workflow specialists and technical deployment engineers."
          primaryCta={{
            label: "Contact Inquiries",
            href: "/contact",
          }}
          secondaryCta={{
            label: "Request a Demonstration",
            href: "/request-demo",
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}
