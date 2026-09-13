import * as React from "react";
import { 
  UserPlus, 
  Activity, 
  Stethoscope, 
  FlaskConical, 
  Pill, 
  ReceiptText, 
  CreditCard, 
  Home 
} from "lucide-react";
import { MarketingContainer } from "./marketing-container";
import { MarketingSection } from "./marketing-section";
import { MarketingSectionHeading } from "./marketing-section-heading";
import { MarketingCard, MarketingCardHeader, MarketingCardTitle, MarketingCardDescription } from "./marketing-card";

const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Registration & Triage",
    desc: "Patient digital intake, duplicate identification, and prioritized acuity scoring.",
    icon: UserPlus,
  },
  {
    step: "02",
    title: "Vital Signs Assessment",
    desc: "Rapid recording of BP, pulse, temperature, and triage nurse routing.",
    icon: Activity,
  },
  {
    step: "03",
    title: "Doctor Consultation",
    desc: "Structured medical history, ICD diagnoses, electronic orders, and clinical notes.",
    icon: Stethoscope,
  },
  {
    step: "04",
    title: "Laboratory Diagnostics",
    desc: "Order specimen collection, automated status updates, and technologist validation.",
    icon: FlaskConical,
  },
  {
    step: "05",
    title: "FEFO Pharmacy Dispense",
    desc: "Prescription fulfillment with batch-level expiry sorting and atomic stock deduction.",
    icon: Pill,
  },
  {
    step: "06",
    title: "Centralized Billing",
    desc: "Automated aggregation of consultations, diagnostic tests, bed days, and medications.",
    icon: ReceiptText,
  },
  {
    step: "07",
    title: "Payment & Clearance",
    desc: "Cashier settlement, M-Pesa STK push verification, or SHA claim logging.",
    icon: CreditCard,
  },
  {
    step: "08",
    title: "Discharge or Admission",
    desc: "Inpatient bed assignment or comprehensive outpatient discharge summary.",
    icon: Home,
  },
];

export function MarketingPatientJourney() {
  return (
    <MarketingSection id="patient-journey" spacing="default">
      <MarketingContainer>
        <MarketingSectionHeading
          eyebrow="Integrated Care Pipeline"
          title="One Patient. One Connected Journey."
          description="Every department operates from the same synchronized patient record. No lost orders, no unbilled procedures, and no clinical disconnects."
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEY_STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <MarketingCard key={item.step} className="flex flex-col justify-between">
                <div>
                  <MarketingCardHeader>
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                      <Icon className="size-4" />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-muted-foreground/80 uppercase">
                      STEP {item.step}
                    </span>
                  </MarketingCardHeader>
                  <MarketingCardTitle className="mb-2">{item.title}</MarketingCardTitle>
                  <MarketingCardDescription>{item.desc}</MarketingCardDescription>
                </div>
              </MarketingCard>
            );
          })}
        </div>
      </MarketingContainer>
    </MarketingSection>
  );
}
