# MarkCare HMS — API Inventory Baseline

This document catalogs the primary API controller routes across the 59 NestJS controllers.

| Domain | Controller File | Base Path | Primary Methods | Security & Scoping |
| :--- | :--- | :--- | :--- | :--- |
| **Auth** | uth.controller.ts | /auth | POST /login, POST /refresh, POST /logout | Public Gateway / Bearer Verification |
| **Patients** | patient.controller.ts | /patients | GET /, POST /, GET /:id, PATCH /:id | JWT Guard, Facility Scoped |
| **Triage** | 	riage.controller.ts | /triage | GET /, POST /, PATCH /:id | JWT Guard, Facility & Branch Scoped |
| **Consultation** | consultation.controller.ts| /consultations | GET /, POST /, GET /:id, PATCH /:id | JWT Guard, Doctor Role, Branch Scoped |
| **Pharmacy** | pharmacy.controller.ts | /pharmacy | GET /stock, POST /dispense, POST /otc | JWT Guard, Pharmacist Role, Branch Scoped |
| **Laboratory** | lab.controller.ts | /lab | GET /orders, POST /results, PATCH /verify| JWT Guard, Lab Tech Role, Branch Scoped |
| **IPD / Wards** | ipd.controller.ts | /ipd | GET /wards, POST /admissions, PATCH /beds| JWT Guard, Nurse/Admin, Branch Scoped |
| **Billing** | illing.controller.ts | /billing | GET /invoices, POST /pay, POST /mpesa/stk| JWT Guard, Cashier/Admin, Branch Scoped |
| **SHA Claims** | sha-claims.controller.ts | /sha-claims | GET /, POST /, GET /:id/pdf | JWT Guard, Billing/Admin, Facility Scoped |
| **eTIMS** | etims.controller.ts | /integration/etims| Outbox Worker Trigger, Status Polling | JWT Guard, Outbox Process, Facility Scoped |
| **Platform** | acility.controller.ts | /platform/facilities| Full CRUD for Organizations & Facilities | Superadmin / Platform Admin Guard |
