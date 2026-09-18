import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AppProvider } from "@/providers/app-provider";
import { CardMotionProvider } from "@/components/marketing/card-motion-provider";
import { DynamicFavicon } from "@/components/shared/dynamic-favicon";
import { themeInitScript } from "@/lib/theme";

const appUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "MarkCare Hospital Management System",
    template: "%s · MarkCare HMS",
  },
  description:
    "Integrated healthcare operations platform connecting patient care, clinical workflows, laboratory, pharmacy, inpatient care, and hospital billing in one workspace.",
  applicationName: "MarkCare HMS",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  keywords: [
    "MarkCare",
    "HMS",
    "Hospital Management System",
    "Kenya Healthcare",
    "EMR",
    "Electronic Medical Records",
    "Hospital Billing",
    "Pharmacy Inventory",
    "Laboratory Management",
  ],
  openGraph: {
    title: "MarkCare Hospital Management System",
    description:
      "Integrated healthcare operations platform connecting patient care, clinical workflows, laboratory, pharmacy, inpatient care, and hospital billing in one workspace.",
    siteName: "MarkCare HMS",
    type: "website",
    locale: "en_KE",
    url: appUrl,
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "MarkCare HMS Enterprise Healthcare Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MarkCare Hospital Management System",
    description:
      "Integrated healthcare operations platform connecting patient care, clinical workflows, laboratory, pharmacy, inpatient care, and hospital billing in one workspace.",
    images: ["/brand/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body suppressHydrationWarning className="app-canvas font-sans">
        <AppProvider>
          <DynamicFavicon />
          <CardMotionProvider />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
