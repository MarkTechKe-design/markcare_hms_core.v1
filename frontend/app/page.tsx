import type { Metadata } from "next";
import { HomeClient } from "@/components/marketing/home-client";

export const metadata: Metadata = {
  title: "Integrated Healthcare Operations Platform · MarkCare HMS",
  description:
    "MarkCare HMS connects patient admissions, doctor encounters, diagnostic laboratory orders, pharmacy FEFO dispensing, and hospital billing in one unified workspace.",
};

export default function HomePage() {
  return <HomeClient />;
}
