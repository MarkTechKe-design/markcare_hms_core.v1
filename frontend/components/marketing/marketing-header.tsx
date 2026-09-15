"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { AppLogo } from "@/components/shared/app-logo";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

// Streamlined, prioritized desktop navigation (6 core items)
const PRIMARY_NAV_ITEMS: NavItem[] = [
  { name: "Platform", href: "/platform" },
  { name: "Solutions", href: "/solutions" },
  { name: "Modules", href: "/modules" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Secondary ecosystem routes accessible via mobile menu drawer and footer
const SECONDARY_NAV_ITEMS: NavItem[] = [
  { name: "Facilities Directory", href: "/facilities" },
  { name: "Integrations Ecosystem", href: "/integrations" },
  { name: "Security & Governance", href: "/security" },
  { name: "Frequently Asked Questions", href: "/resources/faq" },
];

export function MarketingHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const menuRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route transition
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 isolate transition-all duration-200 ${
        scrolled || mobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-background/80 backdrop-blur-xs border-b border-border/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Unified CMS-Ready Brand Identity */}
          <div className="flex items-center gap-3">
            <AppLogo variant="header" href="/" />
          </div>

          {/* Streamlined Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {PRIMARY_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            <ThemeToggle />
            <Link
              href="/login"
              className="px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/request-demo"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs transition-all active:scale-[0.98]"
            >
              Request Demo
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile & Tablet Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Link
              href="/request-demo"
              className="inline-flex items-center text-xs font-semibold px-2.5 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors sm:text-sm sm:px-3"
            >
              Demo
            </Link>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
              aria-controls="mobile-navigation"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="size-6 text-foreground" aria-hidden="true" />
              ) : (
                <Menu className="size-6 text-foreground" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          ref={menuRef}
          className="fixed inset-x-0 top-16 bottom-0 z-50 bg-background/98 backdrop-blur-xl border-b border-border p-6 overflow-y-auto lg:hidden flex flex-col justify-between"
          style={{ height: "calc(100dvh - 4rem)" }}
        >
          <div className="space-y-6">
            {/* Action Buttons inside Drawer */}
            <div className="grid grid-cols-2 gap-3 pb-6 border-b border-border/80">
              <Link
                href="/login"
                className="w-full text-center py-2.5 text-sm font-semibold text-foreground bg-muted hover:bg-muted/80 rounded-lg border border-border transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/request-demo"
                className="w-full text-center py-2.5 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg shadow-xs transition-colors"
              >
                Book Demo
              </Link>
            </div>

            {/* Primary Navigation Links */}
            <nav className="flex flex-col gap-1" aria-label="Mobile Primary Navigation">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground px-3 mb-1">
                Main Menu
              </span>
              {PRIMARY_NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-3.5 py-2.5 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10 font-bold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="size-4 text-muted-foreground" aria-hidden="true" />
                  </Link>
                );
              })}
            </nav>

            {/* Secondary Ecosystem Links */}
            <div className="pt-4 border-t border-border/60">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground px-3 mb-2 block">
                Platform & Trust
              </span>
              <div className="flex flex-col gap-1">
                {SECONDARY_NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="size-3.5 text-muted-foreground" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              MarkCare Enterprise HMS � Connected Care Platform
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
