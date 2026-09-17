"use client";

import * as React from "react";
import { usePublicSettings } from "@/hooks/use-public-settings";

export function DynamicFavicon() {
  const { getSetting } = usePublicSettings();
  const faviconUrl = getSetting("BRAND_FAVICON_URL") || getSetting("BRAND_LOGO_URL") || "/favicon.ico";

  React.useEffect(() => {
    if (!faviconUrl) return;

    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "shortcut icon";
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, [faviconUrl]);

  return null;
}
