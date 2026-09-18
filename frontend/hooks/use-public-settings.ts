import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api/client";

export interface PublicSettingsMap {
  FACILITY_NAME: string;
  FACILITY_TYPE: string;
  FACILITY_COUNTY: string;
  FACILITY_TOWN: string;
  FACILITY_PHONE: string;
  FACILITY_EMAIL: string;
  BRAND_LOGO_URL: string;
  BRAND_LOGO_DARK_URL: string;
  BRAND_FAVICON_URL: string;
  HERO_HEADLINE: string;
  HERO_DESCRIPTION: string;
  HERO_BACKGROUND_VIDEO: string;
  HERO_VIDEO_URL: string;
  HERO_POSTER_URL: string;
  HERO_BADGE: string;
  HERO_PRODUCT_PREVIEW: string;
  SCREENSHOT_CLINICAL: string;
  SCREENSHOT_PHARMACY: string;
  SCREENSHOT_LABORATORY: string;
  SCREENSHOT_INPATIENT: string;
  SCREENSHOT_BILLING: string;
  [key: string]: string;
}

// Enterprise repository defaults (Zero external hash dependencies in source code)
const DEFAULT_SETTINGS: PublicSettingsMap = {
  FACILITY_NAME: "MarkCare Metropolitan Hospital",
  FACILITY_TYPE: "Level 5 Tertiary Referral Hospital",
  FACILITY_COUNTY: "Nairobi",
  FACILITY_TOWN: "Westlands",
  FACILITY_PHONE: "+254 718 178 521",
  FACILITY_EMAIL: "oduor.markochieng@gmail.com",
  BRAND_LOGO_URL: "/brand/logo.png",
  BRAND_LOGO_DARK_URL: "/brand/logo.png",
  BRAND_FAVICON_URL: "/favicon.ico",
  HERO_HEADLINE: "Connected healthcare management, built around clinical workflows.",
  HERO_DESCRIPTION: "MarkCare unites patient registration, doctor encounters, diagnostic laboratory orders, pharmacy FEFO dispensing, and cashier billing into one coordinated healthcare workspace.",
  HERO_BACKGROUND_VIDEO: "",
  HERO_VIDEO_URL: "",
  HERO_POSTER_URL: "/brand/hero-bg.webp",
  HERO_BADGE: "Hospital Operations Platform",
  HERO_PRODUCT_PREVIEW: "/assets/marketing/clinical-emr-workspace.png",
  SCREENSHOT_CLINICAL: "/assets/marketing/clinical-emr-workspace.png",
  SCREENSHOT_PHARMACY: "/assets/marketing/pharmacy-fefo-workspace.png",
  SCREENSHOT_LABORATORY: "/assets/marketing/laboratory-workspace.png",
  SCREENSHOT_INPATIENT: "/assets/marketing/inpatient-ipd-workspace.png",
  SCREENSHOT_BILLING: "/assets/marketing/billing-cashier-workspace.png",
};

export function usePublicSettings() {
  const [settings, setSettings] = useState<PublicSettingsMap>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadSettings() {
      try {
        const res = await apiFetch<any>("/settings/public");
        if (!isMounted || !res) return;

        const mapped: Partial<PublicSettingsMap> = {};

        // Resilient parser: Handles both Array of entities and direct Key-Value dictionaries
        if (Array.isArray(res)) {
          for (const item of res) {
            if (item && item.settingKey && item.settingValue !== null && item.settingValue !== undefined) {
              mapped[item.settingKey] = String(item.settingValue);
            }
          }
        } else if (typeof res === "object") {
          for (const [k, v] of Object.entries(res)) {
            if (v !== null && v !== undefined) {
              mapped[k] = String(v);
            }
          }
        }

        // Bridge legacy and standard video keys
        if (mapped.HERO_BACKGROUND_VIDEO && !mapped.HERO_VIDEO_URL) {
          mapped.HERO_VIDEO_URL = mapped.HERO_BACKGROUND_VIDEO;
        } else if (mapped.HERO_VIDEO_URL && !mapped.HERO_BACKGROUND_VIDEO) {
          mapped.HERO_BACKGROUND_VIDEO = mapped.HERO_VIDEO_URL;
        }

        setSettings((prev) => ({
          ...prev,
          ...mapped,
        }));
      } catch (err) {
        // Graceful fallback: Retain local defaults without interrupting the UI
        console.warn("[PublicSettings] Backend unreachable, using bundled fallback assets.", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadSettings();

    return () => {
      isMounted = false;
    };
  }, []);

  const getSetting = (key: keyof PublicSettingsMap | string, fallback = "") => {
    return settings[key] || fallback;
  };

  return { settings, getSetting, loading };
}
