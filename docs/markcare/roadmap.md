# MarkCare HMS — Product Roadmap

```
PHASE 0: Baseline Verification (COMPLETED)
   │
PHASE 0A: Documentation Foundation (CURRENT)
   │
PHASE 1: Public Frontend Commercial Rebuild (NEXT)
   │
PHASE 2: Kenyan Production Integrations & Hardening
   │
PHASE 3: End-to-End Clinical Pilot Verification
   │
PHASE 4: Commercial Launch & SaaS Onboarding
   │
PHASE 5: MarkCare Intelligence Layer (PROPOSED)
   │
PHASE 6: Specialized Clinical Engines (PROPOSED)
   │
PHASE 7: Advanced Enterprise Differentiators (PROPOSED)
```

---

## Verified Sequence (Phases 0 - 4)

* **Phase 0 — Baseline Verification (COMPLETED):** Verified 58 test suites, 329 tests, 114 Prisma models, and established the read-only technical audit.
* **Phase 0A — Documentation Foundation (CURRENT):** Established the single source of truth in docs/markcare/.
* **Phase 1 — Public Frontend Commercial Rebuild (NEXT):**
  * Decouple the public website from authenticated workspaces.
  * Construct the 30-section commercial homepage (app/page.tsx) using components/marketing/*.
  * Update global branding, metadata, and logos in app/layout.tsx and public/.
  * Transform app/login/page.tsx into a professional hospital staff gateway.
* **Phase 2 — Kenyan Production Integrations & Hardening:**
  * Validate production Safaricom Daraja STK Push callbacks.
  * Connect live facility SHA portal credentials.
  * Configure KRA eTIMS signing keys.
* **Phase 3 — Core Clinical Pilot Verification:** Execute end-to-end patient flows (Registration -> Triage -> Consultation -> Lab -> Pharmacy -> Billing -> Discharge).
* **Phase 4 — Commercial SaaS & On-Premise Packaging:** Facility onboarding automation, standalone installer scripts, and subscription lifecycle management.

---

## Proposed Differentiators (Future Roadmap — Not Currently Implemented)

The following modules represent strategic roadmap enhancements for future releases:

1. **MarkCare Revenue Assurance Engine:** Automated detection of unbilled lab orders, missed nursing procedure charges, and tariff leakage prior to invoice closure.
2. **Patient Journey & Queue Intelligence:** Predictive wait-time forecasting across triage and consultation queues.
3. **Advanced Maternity Engine:** Digital WHO-compliant partograph with cervical dilatation curves, fetal heart rate alerts, and automated Apgar scoring.
4. **Advanced Theatre & Perioperative Suite:** Surgical safety checklists, anesthesia logs, and operating room scheduling visualizers.
5. **Hospital Document & Template Engine:** Custom clinical discharge summary builders with dynamic letterheads.
6. **Offline Sync Architecture:** Local SQLite/IndexedDB outbox synchronization for rural facilities facing intermittent internet connectivity.
