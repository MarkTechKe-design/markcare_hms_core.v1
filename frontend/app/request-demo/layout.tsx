import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Platform Demonstration",
  description:
    "Schedule a live demonstration of MarkCare HMS to evaluate clinical EMR, pharmacy FEFO dispensing, laboratory diagnostics, and hospital billing workflows.",
};

export default function RequestDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
