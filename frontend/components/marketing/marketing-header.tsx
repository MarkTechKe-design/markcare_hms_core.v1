"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { AppLogo } from "@/components/shared/app-logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Modules", href: "/modules" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
];

export function MarketingHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const isTransparentHero = isHome && !isScrolled;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isTransparentHero
          ? "border-b border-white/10 bg-slate-950/60 backdrop-blur-md text-white"
          : "border-b border-border/80 bg-background/95 backdrop-blur-md text-foreground supports-[backdrop-filter]:bg-background/80"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
            aria-label="MarkCare HMS Home"
          >
            <AppLogo iconOnly className="h-9 w-9" />
            <span
              className={`text-base font-bold tracking-tight sm:text-lg ${
                isTransparentHero ? "text-white" : "text-foreground"
              }`}
            >
              MarkCare{" "}
              <span
                className={`font-medium text-sm ${
                  isTransparentHero ? "text-slate-300" : "text-muted-foreground"
                }`}
              >
                HMS
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1.5 py-1 ${
                    isActive
                      ? "text-primary font-semibold"
                      : isTransparentHero
                      ? "text-slate-200 hover:text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/login"
            className={`text-sm font-medium transition-colors px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              isTransparentHero
                ? "text-slate-200 hover:text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Staff Login
          </Link>
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground font-semibold shadow-xs hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Link href="/request-demo">
              Request Demo
              <ArrowRight className="ml-1.5 size-3.5" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary ${
              isTransparentHero
                ? "text-white hover:bg-white/10"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="border-b border-border bg-background px-4 pt-3 pb-6 md:hidden text-foreground"
        >
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-1.5"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <hr className="my-2 border-border" />
            <Link
              href="/login"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-1.5"
              onClick={() => setIsOpen(false)}
            >
              Staff Portal Login
            </Link>
            <Button asChild className="w-full bg-primary text-primary-foreground font-semibold mt-2">
              <Link href="/request-demo" onClick={() => setIsOpen(false)}>
                Request a Demonstration
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
