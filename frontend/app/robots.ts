import { getSiteUrl } from "@/lib/site-url";
﻿import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/platform",
          "/solutions",
          "/modules",
          "/modules/*",
          "/about",
          "/facilities",
          "/pricing",
          "/contact",
          "/request-demo",
          "/blog",
          "/blog/*",
          "/resources/faq",
          "/integrations",
          "/security",
        ],
        disallow: [
          "/api/*",
          "/dashboard",
          "/dashboard/*",
          "/platform-admin",
          "/platform-admin/*",
          "/login",
          "/patient-access",
          "/patient-access/*",
          "/print/*",
          "/settings",
          "/settings/*",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
