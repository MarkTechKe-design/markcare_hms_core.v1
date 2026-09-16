import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import {
  MarketingHeader,
  MarketingFooter,
  MarketingContainer,
  
  MarketingCtaBanner,
} from "@/components/marketing";
import { blogPosts } from "@/content/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      <MarketingHeader />

      <main className="flex-1">
        <article className="py-12 sm:py-16">
          <MarketingContainer className="max-w-4xl">
            {/* Breadcrumb / Back Link */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="mr-1.5 size-3.5" />
                Back to MarkCare Insights
              </Link>
            </div>

            {/* Article Meta Header */}
            <header className="mb-10 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 text-primary px-3 py-1 font-semibold">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.publishedNotice}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground text-balance">
                {post.title}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                {post.excerpt}
              </p>

              <div className="pt-2 text-xs font-medium text-muted-foreground">
                Prepared by {post.authorRole}
              </div>
            </header>

            <hr className="my-8 border-border" />

            {/* Structured Article Body */}
            <div className="space-y-8 text-foreground/90 leading-relaxed text-base sm:text-lg">
              <p className="text-lg leading-relaxed text-foreground font-medium">
                {post.content.intro}
              </p>

              {post.content.sections.map((section, idx) => (
                <section key={idx} className="space-y-3 pt-4">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {section.heading}
                  </h2>
                  {section.body.map((p, pIdx) => (
                    <p key={pIdx} className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                      {p}
                    </p>
                  ))}
                </section>
              ))}

              <div className="rounded-2xl border border-border bg-card p-6 my-8 text-sm sm:text-base text-foreground leading-relaxed">
                <strong className="block mb-1 text-primary">Summary Perspective</strong>
                {post.content.conclusion}
              </div>
            </div>

            {/* Related Articles Rail */}
            {related.length > 0 && (
              <div className="mt-16 pt-10 border-t border-border">
                <h3 className="text-lg font-bold text-foreground mb-6">Related Insights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {related.map((rel) => (
                    <div
                      key={rel.slug}
                      className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                    >
                      <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                        <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </MarketingContainer>
        </article>

        {/* Canonical CTA */}
        <MarketingCtaBanner
          headline="Ready to explore MarkCare for your facility?"
          description="Speak with our team to evaluate how MarkCare connects clinical, administrative, and inventory workflows."
          primaryCta={{
            label: "Request a Demonstration",
            href: "/request-demo",
          }}
          secondaryCta={{
            label: "Explore Modules",
            href: "/modules",
          }}
        />
      </main>

      <MarketingFooter />
    </div>
  );
}
