"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Shield } from "lucide-react";
import { AppLogo } from "@/components/shared/app-logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Modules", href: "/modules" },
  { label: "Integrations", href: "/integrations" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
];

export function MarketingHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2" aria-label="MarkCare HMS Home">
            <AppLogo />
          </Link>
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Staff Login</Link>
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground shadow-xs hover:brightness-110 active:scale-[0.98] transition-all"
            asChild
          >
            <Link href="/request-demo">
              Request a Demo
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open Navigation Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[360px] p-6">
              <SheetHeader className="text-left mb-6">
                <SheetTitle>
                  <AppLogo />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
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
                <Button variant="outline" className="w-full justify-center" asChild>
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Staff Login
                  </Link>
                </Button>
                <Button className="w-full justify-center bg-primary text-primary-foreground" asChild>
                  <Link href="/request-demo" onClick={() => setIsOpen(false)}>
                    Request a Demo
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
