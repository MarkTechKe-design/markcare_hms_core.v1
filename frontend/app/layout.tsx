import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/providers/app-provider";
import { CardMotionProvider } from "@/components/marketing/card-motion-provider";
import { themeInitScript } from "@/lib/theme";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "MarkCare Hospital Management System",
    template: "%s · MarkCare HMS",
  },
  description:
    "Integrated healthcare operations platform connecting patient care, clinical workflows, laboratory, pharmacy, inpatient care, and hospital billing in one workspace.",
  applicationName: "MarkCare HMS",
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
  },
  twitter: {
    card: "summary",
    title: "MarkCare Hospital Management System",
    description:
      "Integrated healthcare operations platform connecting patient care, clinical workflows, laboratory, pharmacy, inpatient care, and hospital billing in one workspace.",
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
        <script id="theme-init" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning className="app-canvas font-sans">
        <AppProvider><CardMotionProvider />{children}</AppProvider>
      </body>
    </html>
  );
}
