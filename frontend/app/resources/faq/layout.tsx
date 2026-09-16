import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Comprehensive answers regarding MarkCare HMS operational modules, Local-Area Network (LAN) deployment, multi-branch governance, and commercial evaluation.",
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
