# MarkCare HMS — Integrations Baseline

## 1. Safaricom Daraja M-Pesa (Kenya)
* **Implementation:** src/billing/billing.service.ts (lines 2860–3774) and acility-mpesa-billing.service.ts.
* **Endpoints:** Supports production (https://api.safaricom.co.ke) and sandbox (https://sandbox.safaricom.co.ke).
* **Workflows:** STK Push (/mpesa/stkpush/v1/processrequest), status query polling (/mpesa/stkpushquery/v1/query), and PayHero redundancy (payhero-billing.service.ts).
* **Production Requirement:** Requires facility Paybill/Till number, Consumer Key, Consumer Secret, and Passkey.

## 2. Social Health Authority (SHA / SHIF)
* **Implementation:** src/sha-claims/ (ShaClaimsController, ShaClaimsService).
* **Workflows:** Manages claim lifecycles (Submitted, Pending, Approved, Rejected), claim line itemization, diagnostic linkage, and verifiable QR payload generation (/sha-claims//pdf).
* **Production Requirement:** Direct automated cloud transmission requires facility SHA API gateway onboarding and client credentials.

## 3. KRA eTIMS Fiscalization
* **Implementation:** src/billing/billing.service.ts, src/integration/etims/ (EtimsService).
* **Workflows:** Durable outbox pattern (ETIMS_OPERATIONS.FISCALIZE_INVOICE). Invoices are queued with unique idempotency keys (etims:fiscalize:invoice:). Background workers manage retries, exponential backoff, and signature verification.
* **Production Requirement:** Requires hospital KRA OSCU / VSCU device signing keys.

## 4. DHA / FHIR eClaims
* **Implementation:** src/integration/dha/ (DhaEclaimsService).
* **Workflows:** FHIR-compliant claim construction, standard vs. specialized preauthorizations, and callback reconciliation.
