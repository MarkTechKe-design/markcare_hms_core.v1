"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { MarketingBadge } from "@/components/marketing/marketing-badge";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  version: string;
  toc: TocItem[];
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  lastUpdated,
  version,
  toc,
  children,
}: LegalPageProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));

      let currentActiveId = "";
      for (const item of toc) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140) {
            currentActiveId = item.id;
          }
        }
      }
      setActiveId(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary/20">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 z-50 h-1 w-full bg-muted print:hidden">
        <div
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <MarketingHeader />

      <main className="flex-1">
        {/* Harmonized Page Intro Banner */}
        <section className="border-b border-border/80 bg-slate-900 text-white py-14 sm:py-16">
          <MarketingContainer>
            <div className="max-w-3xl space-y-3">
              <MarketingBadge className="text-blue-300 border-blue-800 bg-blue-950/50">
                Governance & Compliance
              </MarketingBadge>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                {title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs text-slate-400">
                <span>Last Updated: {lastUpdated}</span>
                <span>•</span>
                <span>Version {version}</span>
                <span>•</span>
                <span>Operational Standard</span>
              </div>
            </div>
          </MarketingContainer>
        </section>

        {/* Legal Content & Sticky TOC Navigation */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <article className="lg:col-span-8 xl:col-span-9">
              <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-bold prose-headings:text-foreground prose-p:text-sm prose-p:leading-relaxed prose-li:text-sm prose-a:text-primary print:prose-p:text-black">
                {children}
              </div>
            </article>

            <aside className="hidden lg:col-span-4 lg:block xl:col-span-3 print:hidden">
              <div className="sticky top-28 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  On this page
                </h3>
                <ScrollArea className="h-[calc(100vh-14rem)] pr-2">
                  <nav className="flex flex-col space-y-2">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={cn(
                          "block rounded-md px-2 py-1 text-xs transition-colors",
                          activeId === item.id
                            ? "bg-primary/10 font-medium text-primary"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground",
                          item.level === 2 ? "pl-2" : "pl-4",
                        )}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </ScrollArea>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
