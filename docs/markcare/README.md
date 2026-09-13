# MarkCare Hospital Management System — Architecture & Capability Documentation

Welcome to the central technical and commercial specification for **MarkCare HMS**. This documentation suite establishes the verified product baseline derived from the Phase 0 backend verification audit (329/329 passing automated test suites, 114 Prisma models, 59 controllers, 115 services, and 31 database migrations).

---

## Documentation Navigation

* **[backend-architecture.md](./backend-architecture.md)**: Verified NestJS + MySQL + Prisma topology, modular design, background outbox workers, and multi-tenant scoping mechanics.
* **[backend-capabilities.md](./backend-capabilities.md)**: The authoritative Master Capability Matrix mapping all hospital features, backend service locations, Prisma models, test coverage, and commercial classification.
* **[api-baseline.md](./api-baseline.md)**: Inventory of 59 NestJS controllers, HTTP routes, RBAC guards, and tenant boundaries.
* **[security-baseline.md](./security-baseline.md)**: Authentication (Passport JWT), password hashing, RBAC, branch isolation, and technical alignment with the Kenya Data Protection Act (2019).
* **[tenancy-model.md](./tenancy-model.md)**: Two-tier isolation architecture (`Facility` tenant and `Branch` physical site) and query-scoping standards.
* **[integrations.md](./integrations.md)**: Kenyan integration baseline: Safaricom Daraja M-Pesa STK Push, Social Health Authority (SHA) claims, KRA eTIMS fiscalization outbox, and DHA/FHIR eClaims.
* **[deployment.md](./deployment.md)**: Deployment guidelines for centralized Cloud SaaS and local hospital On-Premise intranet infrastructure.
* **[commercial-readiness.md](./commercial-readiness.md)**: Audit of SaaS and On-Premise operational readiness, dependencies, licensing, and operational gaps.
* **[roadmap.md](./roadmap.md)**: Product release roadmap spanning Phase 0 through Phase 7, separating verified capabilities from proposed future intelligence engines.

---

## Capability Classification System

Every capability documented in this repository is strictly tagged using this standard:

* 🟢 **FULLY IMPLEMENTED**: Backend logic exists, persists data correctly, enforces facility/branch authorization, and is verified by automated test suites.
* 🟡 **PARTIALLY IMPLEMENTED**: Functional, but relies on generalized operational records or requires clinical domain deepening.
* 🔵 **FOUNDATION / PLANNED**: Data schemas, routes, or mock adapters exist, but external or end-to-end processing is incomplete.
* 🔴 **MISSING**: Not present in source code or database models.
* ⚠️ **REQUIRES KENYAN / PRODUCTION ADAPTATION**: Code is functional but requires production credentials, external onboarding, or regulatory registration.

> **CRITICAL RULE**: Do not alter these classifications or market unverified capabilities on the public website without explicit test-backed verification.
