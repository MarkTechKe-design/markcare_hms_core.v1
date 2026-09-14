"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export interface MarketingCardProps {
  title?: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  eyebrow?: string;
  badge?: string;
  href?: string;
  variant?: "default" | "interactive" | "featured" | "workflow";
  stepNumber?: number;
  className?: string;
  staggerIndex?: number;
  children?: React.ReactNode;
}

export function MarketingCard({
  title,
  description,
  icon: Icon,
  eyebrow,
  badge,
  href,
  variant = "interactive",
  stepNumber,
  className = "",
  staggerIndex,
  children,
}: MarketingCardProps) {
  const hasStructuredHeader = Boolean(title || description || Icon || eyebrow || badge || stepNumber !== undefined);
  const isInteractive = variant === "interactive" || Boolean(href);
  const isFeatured = variant === "featured";

  const surfaceClass = isInteractive
    ? "mc-card-interactive group bg-card border border-border/80"
    : isFeatured
    ? "mc-card-featured bg-card border-2 border-primary/40 shadow-sm dark:bg-slate-900/60"
    : "bg-card border border-border/80";

  const baseClasses = `relative h-full flex flex-col justify-between rounded-2xl p-6 shadow-xs mc-card mc-reveal ${surfaceClass} ${className}`;

  const inlineStyle: React.CSSProperties = {};
  if (staggerIndex !== undefined) {
    (inlineStyle as Record<string, unknown>)["--stagger-idx"] = staggerIndex;
  }

  const content = (
    <div style={inlineStyle} className={baseClasses}>
      {hasStructuredHeader ? (
        <>
          <div>
            <div className="flex items-center justify-between gap-3 mb-5">
              {stepNumber !== undefined ? (
                <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary text-sm font-bold border border-primary/10 mc-icon-interactive">
                  {String(stepNumber).padStart(2, "0")}
                </div>
              ) : Icon ? (
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/10 mc-icon-interactive">
                  <Icon className="size-5" />
                </div>
              ) : null}

              {badge && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                  {badge}
                </span>
              )}

              {isInteractive && href && (
                <div className="flex size-7 items-center justify-center rounded-md text-muted-foreground mc-arrow-interactive">
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </div>
              )}
            </div>

            {eyebrow && (
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                {eyebrow}
              </p>
            )}

            {title && (
              <h3 className="text-[17px] font-bold text-foreground leading-snug tracking-tight mb-2.5 mc-title-interactive">
                {title}
              </h3>
            )}

            {description && (
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {(href || children) && (
            <div className="mt-6 pt-5 border-t border-border/50 flex flex-col justify-end grow">
              {children}
              {href && !children && (
                <div className="flex items-center text-xs font-semibold text-muted-foreground mc-arrow-interactive">
                  Explore Capabilities <ArrowRight className="ml-1.5 size-3.5" aria-hidden="true" />
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="h-full flex flex-col justify-between">{children}</div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export function MarketingCardHeader({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`flex flex-col space-y-1.5 ${className}`}>{children}</div>;
}

export function MarketingCardTitle({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={`text-lg font-semibold leading-tight tracking-tight text-foreground ${className}`}>{children}</h3>;
}

export function MarketingCardDescription({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <p className={`text-sm text-muted-foreground leading-relaxed ${className}`}>{children}</p>;
}

export function MarketingCardContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`pt-2 ${className}`}>{children}</div>;
}
