"use client";

import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";

export type PublicSettingKey =
  | "BRAND_LOGO_URL"
  | "BRAND_LOGO_DARK_URL"
  | "BRAND_FAVICON_URL"
  | "CONTACT_PRIMARY_EMAIL"
  | "CONTACT_PRIMARY_PHONE"
  | "CONTACT_WHATSAPP_NUMBER"
  | "CONTACT_OFFICE_LOCATION"
  | "HERO_BACKGROUND_VIDEO"
  | "HERO_PRODUCT_PREVIEW"
  | "SCREENSHOT_CLINICAL"
  | "SCREENSHOT_PHARMACY"
  | "SCREENSHOT_LABORATORY"
  | "SCREENSHOT_INPATIENT"
  | "SCREENSHOT_BILLING";

export interface PublicSettingItem {
  id?: number;
  settingKey: string;
  settingValue: string;
  description?: string;
}

export const DEFAULT_PUBLIC_SETTINGS: Record<PublicSettingKey, string> = {
  BRAND_LOGO_URL: "",
  BRAND_LOGO_DARK_URL: "",
  BRAND_FAVICON_URL: "/favicon.ico",
  CONTACT_PRIMARY_EMAIL: "operations@markcare.ke",
  CONTACT_PRIMARY_PHONE: "+254 700 000 000",
  CONTACT_WHATSAPP_NUMBER: "+254 700 000 000",
  CONTACT_OFFICE_LOCATION: "Nairobi, Kenya",
  HERO_BACKGROUND_VIDEO: "",
  HERO_PRODUCT_PREVIEW: "",
  SCREENSHOT_CLINICAL: "",
  SCREENSHOT_PHARMACY: "",
  SCREENSHOT_LABORATORY: "",
  SCREENSHOT_INPATIENT: "",
  SCREENSHOT_BILLING: "",
};

export function usePublicSettings() {
  const { data = [], isLoading, error } = useQuery<PublicSettingItem[]>({
    queryKey: ["public-settings"],
    queryFn: async () => {
      try {
        const res = await apiFetch("/settings/public");
        return Array.isArray(res) ? res : [];
      } catch (err) {
        console.warn("Unable to fetch public settings, using system defaults:", err);
        return [];
      }
    },
    staleTime: 1000 * 60 * 5,
  });

  const settingsMap = React.useMemo(() => {
    const map: Record<string, string> = { ...DEFAULT_PUBLIC_SETTINGS };
    if (Array.isArray(data)) {
      data.forEach((item) => {
        if (item?.settingKey) {
          map[item.settingKey] = item.settingValue || "";
        }
      });
    }
    return map;
  }, [data]);

  // Supports strict autocompletion for PublicSettingKey while safely accepting string keys
  const getSetting = React.useCallback(
    (key: PublicSettingKey | (string & {})): string => {
      return settingsMap[key] ?? (DEFAULT_PUBLIC_SETTINGS as Record<string, string>)[key] ?? "";
    },
    [settingsMap]
  );

  return {
    settings: settingsMap,
    getSetting,
    isLoading,
    error,
  };
}
