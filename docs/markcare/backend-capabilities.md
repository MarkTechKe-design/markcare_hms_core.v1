# MarkCare HMS — Master Capability Matrix

The following table is the source of truth for the system's capabilities. Public marketing and commercial representations must adhere to these classifications.

| Feature / Domain | Status | Evidence / Backend Location | Prisma Models | Automated Test Coverage | Frontend Exposure | Commercial Positioning |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Authentication & RBAC** | [x] FULLY IMPLEMENTED | src/auth/ | User, Role, UserBranchAccess | uth-cookie.spec.ts, permissions.guard.spec.ts | /login | Verified Core |
| **Patient Registration & Search** | [x] FULLY IMPLEMENTED | src/patient/ | Patient | patient-duplicate.spec.ts | /patients, /patients/new | Verified Core |
| **Triage & Acuity Scoring** | [x] FULLY IMPLEMENTED | src/triage/ | Triage | Integrated E2E / Unit | /triage | Verified Core |
| **Doctor Consultation / EMR** | [x] FULLY IMPLEMENTED | src/consultation/ | Consultation, Encounter | consultation.service.spec.ts | /consultation/[id] | Verified Core |
| **Pharmacy FEFO & Stock Control** | [x] FULLY IMPLEMENTED | src/pharmacy-inventory/, src/pharmacy-stock/ | Medicine, MedicineBatch, BranchMedicineStock | pharmacy-dispensing-integrity.spec.ts | /pharmacy, /pharmacy/stock | Verified Core |
| **IPD & Bed Allocation** | [x] FULLY IMPLEMENTED | src/ipd/, src/ipd-clinical/ | Ward, Bed, Admission | ipd-clinical.service.spec.ts | /ipd, /ipd/[id] | Verified Core |
| **Billing & Invoicing** | [x] FULLY IMPLEMENTED | src/billing/ | Invoice, Payment, ServiceTariff | payment-integrity.spec.ts | /billing, /invoices | Verified Core |
| **Daraja M-Pesa STK Push** | [x] FULLY IMPLEMENTED | src/billing/billing.service.ts | Payment | acility-mpesa-billing.service.ts | /billing | Verified Core (Requires Live Keys) |
| **SHA Claims Internal Engine** | [x] FULLY IMPLEMENTED | src/sha-claims/ | ShaClaim, ShaClaimLine | sync-jobs.service.spec.ts | /sha-claims | Verified Core (Requires API Onboarding) |
| **KRA eTIMS Outbox Fiscalization** | [x] FULLY IMPLEMENTED | src/billing/billing.service.ts, src/integration/etims/ | OutboxRecord | etims.service.spec.ts | Background Service | Verified Core (Requires OSCU Keys) |
| **DHA / FHIR eClaims Adapter** | [x] FULLY IMPLEMENTED | src/integration/dha/ | DhaTransaction | dha.service.spec.ts | /dha-eclaims | Verified Core |
| **Laboratory Diagnostics** | [x] FULLY IMPLEMENTED | src/lab/ | LabOrder, LabResult | external-lab-payment-integrity.spec.ts | /lab, /doctor-lab-review | Verified Core |
| **Emergency & Casualty** | [x] FULLY IMPLEMENTED | src/triage/, src/operational-module/ | Triage, OperationalRecord | Integrated suite | /emergency, /ambulance | Verified Core |
| **Procurement & Central Store** | [x] FULLY IMPLEMENTED | src/central-store/, src/procurement/ | PurchaseOrder, Supplier | Integrated suite | /central-store, /procurement | Verified Core |
| **Multi-Facility Platform SaaS** | [x] FULLY IMPLEMENTED | src/facility/, src/branch/, src/facility-subscription/ | Facility, Branch, FacilitySubscription | Integrated suite | /(platform)/* | Verified Core |
| **Patient Portal** | [x] FULLY IMPLEMENTED | src/patient-portal/ | Patient, User | patient-portal.service.spec.ts | /patient-access/* | Verified Core |
| **Clinical AI Assistant** | [x] FULLY IMPLEMENTED | src/ai-assistant/ | AiAuditLog | Integrated suite | /ai-assistant | Verified Core |
| **Audit Logging Ledger** | [x] FULLY IMPLEMENTED | src/audit-log/ | AuditLog | Integrated suite | /integration/audit-trail | Verified Core |
| **Maternity Care Tracking** | [~] PARTIALLY IMPLEMENTED | src/operational-module/ | OperationalRecord | Shared suite | /maternity | Market as Maternity Care Management |
| **Theatre & Surgical Scheduling** | [~] PARTIALLY IMPLEMENTED | src/operational-module/ | OperationalRecord | Shared suite | /theatre | Market as Surgical Care Scheduling |
| **Blood Bank Operations** | [~] PARTIALLY IMPLEMENTED | src/operational-module/ | OperationalRecord | Shared suite | /blood-bank | Market as Blood Inventory Control |
| **Mortuary Management** | [~] PARTIALLY IMPLEMENTED | src/operational-module/ | OperationalRecord | Shared suite | /mortuary | Market as Mortuary Records |
| **Ambulance Fleet Dispatch** | [~] PARTIALLY IMPLEMENTED | src/operational-module/ | OperationalRecord | Shared suite | /ambulance | Market as Fleet Dispatch Logs |
| **Radiology / DICOM / PACS** | [ ] FOUNDATION / PLANNED | src/operational-module/ | OperationalRecord | Shared suite | /radiology | Market as 'PACS / DICOM Ready' |
| **Telemedicine WebRTC Video** | [ ] FOUNDATION / PLANNED | src/communication/ | Appointment | Shared suite | /telemedicine | Market as Telehealth Consultation Scheduling |
| **General Ledger / Accounting** | [-] MISSING (BY DESIGN) | None | None | None | None | Position as HMS & Billing with ERP Export |
