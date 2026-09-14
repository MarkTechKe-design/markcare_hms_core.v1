"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

interface NavItem {
  name: string;
  href: string;
}

const NAVIGATION_ITEMS: NavItem[] = [
  { name: "Platform", href: "/platform" },
  { name: "Solutions", href: "/solutions" },
  { name: "Modules", href: "/modules" },
  { name: "Integrations", href: "/integrations" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/resources/faq" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function MarketingHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const menuRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const isHome = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const headerBackgroundClass = isHome
    ? isScrolled
      ? "bg-background/90 backdrop-blur-md border-b border-border/80 shadow-xs"
      : "bg-transparent border-b border-transparent"
    : "bg-background/95 backdrop-blur-md border-b border-border/80 shadow-xs";

  return (
    <header className={`sticky top-0 inset-x-0 z-50 transition-all duration-200 ${headerBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 gap-2">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <div className="relative hidden sm:block h-8 w-32 lg:w-36">
              <Image
                src="/brand/logo.png"
                alt="MarkCare Hospital Management System"
                fill
                priority
                sizes="(max-width: 1024px) 128px, 144px"
                className="object-contain object-left dark:brightness-110"
              />
            </div>
            <div className="relative block sm:hidden size-8">
              <Image
                src="/brand/logo-icon.png"
                alt="MarkCare HMS"
                fill
                priority
                sizes="32px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Complete 9-Item Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Marketing Navigation">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] font-medium rounded-md transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  } focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <Link
              href="/login"
              className="px-3 py-1.5 text-xs xl:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
            >
              Sign In
            </Link>
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs xl:text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg shadow-xs transition-all active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1.5 sm:hidden">
            <ThemeToggle />
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary"
              aria-controls="mobile-navigation"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {mobileMenuOpen ? (
                <X className="size-6" aria-hidden="true" />
              ) : (
                <Menu className="size-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          ref={menuRef}
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border p-6 overflow-y-auto lg:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Menu">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between p-3 text-base font-medium rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                <span>{item.name}</span>
                <ChevronRight className="size-4 text-muted-foreground" aria-hidden="true" />
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3">
            <Link
              href="/login"
              className="w-full text-center py-2.5 text-sm font-medium text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Staff Portal Sign In
            </Link>
            <Link
              href="/request-demo"
              className="w-full text-center py-2.5 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg shadow-xs transition-colors"
            >
              Schedule an Enterprise Walkthrough
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
