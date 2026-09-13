export interface MarketingContent {
  hero: {
    badge: string;
    headline: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    media: {
      backgroundImage?: string;
      backgroundVideo?: string;
      backgroundPoster?: string;
      productScreenshot?: string;
    };
  };
  ctaBanner: {
    headline: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  introduction: {
    badge: string;
    headline: string;
    description: string;
  };
  onboarding: {
    badge: string;
    headline: string;
    description: string;
    steps: {
      step: string;
      title: string;
      description: string;
    }[];
  };
  capabilityStrip: {
    label: string;
    description: string;
  }[];
  faqCategories: {
    category: string;
    items: {
      question: string;
      answer: string;
    }[];
  }[];
}

export const marketingContent: MarketingContent = {
  hero: {
    badge: "Hospital Operations Platform",
    headline: "Connected healthcare management, built around clinical workflows.",
    description:
      "MarkCare unites patient registration, doctor encounters, diagnostic laboratory orders, pharmacy FEFO dispensing, and cashier billing into one coordinated healthcare workspace.",
    primaryCta: {
      label: "Request a Demonstration",
      href: "/request-demo",
    },
    secondaryCta: {
      label: "Explore System Modules",
      href: "/modules",
    },
    media: {
      backgroundImage: undefined,
      backgroundVideo: undefined,
      backgroundPoster: undefined,
      productScreenshot: "/assets/marketing/clinical-emr-workspace.png",
    },
  },
  ctaBanner: {
    headline: "Evaluate MarkCare for your healthcare facility",
    description:
      "Schedule an operational walkthrough with our team to review clinical workflows, department connectivity, and system deployment models.",
    primaryCta: {
      label: "Request a Demonstration",
      href: "/request-demo",
    },
    secondaryCta: {
      label: "Contact Inquiries",
      href: "/contact",
    },
  },
  introduction: {
    badge: "Operational Coordination",
    headline: "Connecting departments across the patient care journey",
    description:
      "Designed to reduce duplicate record entry and administrative delays between triage, consultation rooms, diagnostic laboratories, dispensaries, and cashier desks.",
  },
  onboarding: {
    badge: "Deployment Methodology",
    headline: "Structured facility rollout",
    description: "How MarkCare is configured and deployed for hospital environments.",
    steps: [
      {
        step: "01",
        title: "Facility & Branch Configuration",
        description: "Configure hospital branches, departments, outpatient clinics, inpatient wards, and staff access roles.",
      },
      {
        step: "02",
        title: "Formularies & Tariffs",
        description: "Import standardized pharmaceutical formularies, laboratory investigation panels, and service fee schedules.",
      },
      {
        step: "03",
        title: "Staff Orientation & Go-Live",
        description: "Role-scoped workflow orientation across consultation, dispensary, nursing, and cashier stations.",
      },
    ],
  },
  capabilityStrip: [
    { label: "Core Clinical Modules", description: "EMR, pharmacy, laboratory, inpatient wards, and billing" },
    { label: "Connected Workflows", description: "Electronic queues and order routing across hospital stations" },
    { label: "Multi-Branch Coordination", description: "Standardized protocols and centralized item catalogs" },
    { label: "Role-Scoped Access", description: "Departmental access control boundaries and audit logs" },
  ],
  faqCategories: [
    {
      category: "System Architecture & Deployment",
      items: [
        {
          question: "How is MarkCare HMS deployed in a healthcare facility?",
          answer:
            "MarkCare HMS supports two deployment paths: a dedicated Managed Cloud environment for facilities with reliable broadband, and Private On-Premises installation on dedicated server hardware within the hospital facility.",
        },
        {
          question: "Can MarkCare operate across multiple hospital branches?",
          answer:
            "Yes. MarkCare supports multi-branch coordination. Healthcare networks can standardize price catalogs, medication formularies, and staff permissions centrally, while branch administrators manage daily local patient queues and admissions.",
        },
        {
          question: "How does the system operate in facilities with variable internet connectivity?",
          answer:
            "For healthcare facilities with variable external internet connectivity, MarkCare can be deployed on a local on-premises server. In this configuration, triage, doctor consultations, dispensing, and billing operate across the facility's Local Area Network (LAN) without depending on external broadband.",
        },
      ],
    },
    {
      category: "Clinical & Departmental Workflows",
      items: [
        {
          question: "How do doctor consultation notes connect to the hospital pharmacy?",
          answer:
            "When a physician prescribes medications during an active consultation encounter, the order routes directly to the dispensary queue. The pharmacy module supports First-Expiry-First-Out (FEFO) inventory management to assist dispensers with batch selection and stock tracking.",
        },
        {
          question: "How are diagnostic laboratory investigations processed?",
          answer:
            "Physicians enter laboratory requisitions directly into the patient's encounter. Laboratory technicians receive the investigation order in their departmental queue, record verified findings, and publish the results back into the patient's electronic medical record.",
        },
        {
          question: "Does MarkCare support inpatient admission and ward tracking?",
          answer:
            "Yes. The Inpatient (IPD) module provides ward bed census management, admission records, daily clinical round notes, and itemized billing aggregation for inpatient stays.",
        },
      ],
    },
    {
      category: "Billing, Tariffs & Financial Operations",
      items: [
        {
          question: "How does MarkCare support billing coordination across departments?",
          answer:
            "Billable clinical consultations, diagnostic investigations, and dispensed pharmaceutical items are recorded against the active patient encounter. Cashier desks review an aggregated, itemized invoice prior to issuing discharge clearances.",
        },
        {
          question: "Can MarkCare manage insurance schemes and cash payments simultaneously?",
          answer:
            "Yes. MarkCare supports configurable tariff schedules, enabling hospitals to apply differential pricing structures for self-pay patients, corporate schemes, and national health insurance frameworks.",
        },
      ],
    },
    {
      category: "Security, Privacy & Data Governance",
      items: [
        {
          question: "How is patient medical record confidentiality maintained?",
          answer:
            "MarkCare enforces strict role-based access control (RBAC). Clinical records, diagnostic panels, and financial invoices are accessible only to authenticated staff members with verified departmental permissions.",
        },
        {
          question: "Who retains ownership of hospital and patient data?",
          answer:
            "The healthcare facility retains complete ownership of its clinical records, patient registries, and operational data. On-premises deployments keep database storage strictly within the physical custody of the hospital.",
        },
      ],
    },
  ],
};
