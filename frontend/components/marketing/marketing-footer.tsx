import React from "react";
import Link from "next/link";
import { AppLogo } from "@/components/shared/app-logo";
import { MarketingContainer } from "@/components/marketing/marketing-container";
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <MarketingContainer className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <AppLogo variant="footer" href="/" />
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              MarkCare Hospital Management System unifies clinical encounters, pharmacy FEFO dispensing, laboratory
              diagnostics, and financial settlements on a single synchronized patient ledger.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button size="sm" asChild className="bg-primary text-primary-foreground font-semibold shadow-xs">
                <Link href="/request-demo">
                  Request a Demonstration
                  <ArrowRight className="ml-1.5 size-3.5" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href="/contact">Contact Team</Link>
              </Button>
            </div>
          </div>

          {/* Col 2: Operational Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Operational Modules</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="/modules/clinical-emr" className="hover:text-foreground transition-colors">Clinical EMR & Notes</Link></li>
              <li><Link href="/modules/pharmacy" className="hover:text-foreground transition-colors">Pharmacy FEFO Dispense</Link></li>
              <li><Link href="/modules/laboratory" className="hover:text-foreground transition-colors">Diagnostic Laboratory</Link></li>
              <li><Link href="/modules/inpatient" className="hover:text-foreground transition-colors">Inpatient & Bed Census</Link></li>
              <li><Link href="/modules/billing" className="hover:text-foreground transition-colors">Billing & Cashier Desk</Link></li>
              <li><Link href="/modules" className="font-medium text-primary hover:underline transition-colors">View All Modules &rarr;</Link></li>
            </ul>
          </div>

          {/* Col 3: Architecture & Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Platform & Trust</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="/platform" className="hover:text-foreground transition-colors">Platform Architecture</Link></li>
              <li><Link href="/solutions" className="hover:text-foreground transition-colors">Role-Based Solutions</Link></li>
              <li><Link href="/integrations" className="hover:text-foreground transition-colors">Integrations Ecosystem</Link></li>
              <li><Link href="/security" className="hover:text-foreground transition-colors">Security & Controls</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Deployment Models & Pricing</Link></li>
              <li><Link href="/resources/faq" className="hover:text-foreground transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Col 4: Governance & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Governance & Company</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About MarkCare</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact & Inquiries</Link></li>
              <li><Link href="/facilities" className="hover:text-foreground transition-colors">Facility Directory</Link></li>
              <li><Link href="/invoice-verify" className="hover:text-foreground transition-colors">Verify Invoice Authenticity</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/consent" className="hover:text-foreground transition-colors">Patient Data Consent</Link></li>
              <li><Link href="/login" className="hover:text-foreground transition-colors">Staff Portal Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2026 MarkCare HMS. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Shield className="size-3.5 text-primary" aria-hidden="true" />
            <span>Facility-Scoped Access Controls Enforced</span>
          </div>
        </div>
      </MarketingContainer>
    </footer>
  );
}
