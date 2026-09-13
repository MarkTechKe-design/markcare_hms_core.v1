import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { MarketingHeader, MarketingFooter, MarketingContainer, MarketingBadge, MarketingCtaBanner } from "@/components/marketing";
import { blogPosts } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "Healthcare Technology & Operations Insights",
  description: "Educational articles, operational analyses, and practical perspectives on hospital management systems and digital healthcare delivery.",
};

export default function BlogListingPage() {
  const [featured, ...otherPosts] = blogPosts;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-gradient-to-b from-card to-background py-16 sm:py-20">
          <MarketingContainer className="text-center">
            <MarketingBadge className="mb-3">MarkCare Insights</MarketingBadge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-balance max-w-3xl mx-auto">
              Healthcare Technology & Operations Insights
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Educational articles, operational discussions, and practical perspectives on hospital administration and digital workflows.
            </p>
          </MarketingContainer>
        </section>

        {featured && (
          <section className="py-12 border-b border-border">
            <MarketingContainer>
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xs">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="rounded-full bg-primary/10 text-primary px-3 py-1 font-semibold">{featured.category}</span>
                  <span>•</span><span>{featured.publishedNotice}</span><span>•</span>
                  <span className="flex items-center gap-1"><Clock className="size-3.5" />{featured.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">{featured.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">{featured.authorRole}</span>
                  <Link href={`/blog/${featured.slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                    Read Article <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </div>
              </div>
            </MarketingContainer>
          </section>
        )}

        <section className="py-16">
          <MarketingContainer>
            <div className="mb-8"><h2 className="text-xl font-bold tracking-tight text-foreground">Recent Articles</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <article key={post.slug} className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between hover:border-primary/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span className="rounded-full bg-muted px-2.5 py-0.5 font-medium text-foreground">{post.category}</span>
                      <span className="flex items-center gap-1"><Clock className="size-3" />{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-foreground leading-snug hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{post.publishedNotice}</span>
                    <Link href={`/blog/${post.slug}`} className="font-semibold text-primary inline-flex items-center hover:underline">
                      Read <ArrowRight className="ml-1 size-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </MarketingContainer>
        </section>

        <MarketingCtaBanner
          headline="Interested in evaluating MarkCare HMS?"
          description="Speak with our implementation team to discuss clinical workflows, department connectivity, and system deployment."
          primaryCta={{ label: "Request a Demonstration", href: "/request-demo" }}
          secondaryCta={{ label: "Contact Us", href: "/contact" }}
        />
      </main>
      <MarketingFooter />
    </div>
  );
}
