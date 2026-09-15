"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AppLogoProps {
  className?: string;
  variant?: "header" | "footer" | "compact" | "auth";
  customLogoUrl?: string | null;
  href?: string | null;
  iconOnly?: boolean;
  light?: boolean;
}

export function AppLogo({
  className = "",
  variant = "header",
  customLogoUrl = null,
  href = null,
  iconOnly = false,
  light = false,
}: AppLogoProps) {
  const isFooter = variant === "footer";
  const showText = !iconOnly && variant !== "compact";

  const textMainClass = light ? "text-white" : "text-foreground";
  const textSubClass = light ? "text-white/70" : "text-muted-foreground";

  const logoContent = (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      {/* Brand Icon or CMS-Uploaded Image */}
      {customLogoUrl ? (
        <div
          className={cn(
            "relative overflow-hidden rounded-xl border border-border/80 bg-card flex items-center justify-center shrink-0",
            iconOnly ? "size-9" : isFooter ? "size-10" : "size-9"
          )}
        >
          <Image
            src={customLogoUrl}
            alt="MarkCare HMS"
            fill
            className="object-contain p-1"
            priority
          />
        </div>
      ) : (
        <div
          className={cn(
            "flex items-center justify-center rounded-xl shadow-xs shrink-0 transition-transform duration-200 group-hover:scale-105",
            iconOnly ? "size-9" : isFooter ? "size-10" : "size-9",
            light
              ? "bg-white/10 text-white border border-white/20"
              : "bg-primary text-primary-foreground"
          )}
          aria-hidden="true"
        >
          <ShieldCheck className="size-5" />
        </div>
      )}

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={cn(
                "font-bold tracking-tight transition-colors",
                isFooter ? "text-lg" : "text-base",
                textMainClass
              )}
            >
              MarkCare
            </span>
          </div>
          <span
            className={cn(
              "font-semibold tracking-wider uppercase leading-tight mt-0.5",
              isFooter ? "text-[11px]" : "text-[10px]",
              textSubClass
            )}
          >
            HMS Enterprise
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group inline-flex items-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1"
        aria-label="MarkCare HMS Homepage"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
