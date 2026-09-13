# MarkCare HMS — Commercial Readiness Assessment

| Evaluation Dimension | Readiness Status | Evidence / Notes | Required Action for Launch |
| :--- | :--- | :--- | :--- |
| **Core EMR & Triage** | READY | 329 passing tests; consultation and vitals queues verified. | None. Ready for clinical pilot. |
| **Pharmacy FEFO** | READY | Verified batch expiry sorting and atomic stock decrements. | None. Ready for dispensing. |
| **Billing & Invoicing** | READY | Tariff engine, split billing, cashier reconciliation active. | None. Ready for live billing. |
| **M-Pesa Payments** | READY (NEEDS KEYS) | STK Push engine and polling query implemented and tested. | Obtain facility Safaricom Daraja live credentials. |
| **SHA Claims** | READY (NEEDS KEYS) | Internal claim lifecycles, lines, and QR PDF exports ready. | Complete facility onboarding on SHA portal. |
| **KRA eTIMS** | READY (NEEDS KEYS) | Resilient background outbox queue pattern operational. | Inject hospital KRA OSCU device keys. |
| **Public Frontend** | NEEDS REBUILD | Root page contains developer contacts and portfolio links. | Build 30-section MarkCare commercial website. |
| **Maternity & Theatre** | PARTIALLY READY | Handled via operational records; specialized partograph planned. | Market as Maternity and Surgical Care Management. |
| **Accounting / GL** | EXCLUDE FROM MARKETING | System is an HMS, not a full financial general ledger. | Market as HMS & Billing with third-party ERP export. |
