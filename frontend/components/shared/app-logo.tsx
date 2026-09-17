"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePublicSettings } from "@/hooks/use-public-settings";

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
  const { getSetting } = usePublicSettings();
  
  // Resolves dark-specific logo if available, or falls back to primary logo
  const defaultLogo = getSetting("BRAND_LOGO_URL") || null;
  const darkLogo = getSetting("BRAND_LOGO_DARK_URL") || defaultLogo;
  const effectiveLogoUrl = customLogoUrl || (light ? darkLogo : defaultLogo);

  const isFooter = variant === "footer";
  const isAuth = variant === "auth";

  // Hide the adjacent HTML text if a full brand logo image is uploaded
  const showText = !iconOnly && variant !== "compact" && !effectiveLogoUrl;

  const textMainClass = light ? "text-white drop-shadow-xs" : "text-foreground font-bold";
  const textSubClass = light ? "text-white/80 drop-shadow-xs" : "text-muted-foreground font-semibold";

  const logoContent = (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      {/* 1. Custom Brand Logo Image */}
      {effectiveLogoUrl ? (
        <div
          className={cn(
            "relative shrink-0 flex items-center transition-transform duration-200 group-hover:scale-[1.02]",
            isFooter
              ? "h-11 sm:h-12 w-48 sm:w-60"
              : isAuth
              ? "h-9 sm:h-10 w-44 sm:w-52"
              : "h-8 sm:h-9 md:h-10 w-40 sm:w-52"
          )}
        >
          <Image
            src={effectiveLogoUrl}
            alt="MarkCare HMS Enterprise"
            fill
            sizes="(max-width: 640px) 180px, 240px"
            className={cn(
              "object-contain object-left transition-all duration-200",
              // If on dark hero overlay or in dark mode, invert dark text to white while preserving blue accents
              (light || isFooter) && "brightness-100 contrast-100 [filter:invert(1)_hue-rotate(180deg)]",
              !light && !isFooter && "dark:[filter:invert(1)_hue-rotate(180deg)]"
            )}
            priority
          />
        </div>
      ) : (
        /* 2. Fallback: ShieldCheck Icon */
        <div
          className={cn(
            "flex items-center justify-center rounded-xl shadow-xs shrink-0 transition-transform duration-200 group-hover:scale-105",
            iconOnly ? "size-10" : isFooter ? "size-12" : "size-11",
            light
              ? "bg-white/15 text-white border border-white/25 backdrop-blur-xs"
              : "bg-primary text-primary-foreground"
          )}
          aria-hidden="true"
        >
          <ShieldCheck className="size-6" />
        </div>
      )}

      {/* 3. HTML Brand Typography (Only rendered if no logo image is set) */}
      {showText && (
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={cn(
                "tracking-tight transition-colors",
                isFooter ? "text-xl font-bold" : "text-base font-extrabold",
                textMainClass
              )}
            >
              MarkCare
            </span>
          </div>
          <span
            className={cn(
              "tracking-wider uppercase leading-tight mt-1",
              isFooter ? "text-xs font-semibold" : "text-[10.5px] font-bold",
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
