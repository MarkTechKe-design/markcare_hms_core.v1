# MarkCare HMS — Backend Architecture

## 1. Core Stack & Infrastructure
* **Application Framework:** NestJS (Node.js runtime, TypeScript)
* **Database Engine:** MySQL 8.x (Dialect-compatible with local XAMPP and managed cloud instances)
* **Object-Relational Mapping:** Prisma ORM (prisma / @prisma/client)
* **Security & Auth:** Passport.js (passport-jwt), bcrypt password hashing (10 rounds)
* **Asynchronous Jobs & Outbox:** In-memory queue with persistent Prisma-backed data outbox (src/data-outbox/) for external API resilience (eTIMS, DHA, Webhooks)

## 2. Structural Layering
```
[ Client: Next.js 16 / Mobile / External Webhooks ]
                     │  (HTTP / Bearer JWT)
                     ▼
         [ NestJS API Gateway / Port 3000 ]
  ┌─────────────────────────────────────────────────┐
  │  Guards: JwtAuthGuard, RolesGuard, BranchGuard  │
  ├─────────────────────────────────────────────────┤
  │  Controllers (59 Controllers)                   │
  ├─────────────────────────────────────────────────┤
  │  Domain Services (115 Services)                 │
  ├─────────────────────────────────────────────────┤
  │  Prisma ORM Client (114 Relational Models)      │
  └─────────────────────────────────────────────────┘
                     │  (Parameterized SQL Queries)
                     ▼
         [ MySQL Database: markcare_hms ]
```

## 3. High-Resilience Outbox Pattern
External integrations (such as KRA eTIMS and DHA eClaims) utilize an asynchronous outbox worker (src/data-outbox/). Billing events create transactional records locally; the outbox worker processes submissions in the background with exponential backoff and dead-letter queueing. Network interruptions or downtime on KRA or SHA servers never block bedside clinical care or invoice generation.
