# MarkCare HMS — Security & Data Protection Baseline

## 1. Authentication & Session Control
* **JWT Access Control:** Passport JWT strategy extracts userId, acilityId, ranchId, and ole.
* **Password Policy:** Enforces bcrypt password hashing (10 salt rounds). Accounts support failed login lockouts and single active session checks (dd_user_login_lockout and dd_single_active_session migrations).
* **Cross-Site Cookie Security:** Tokens utilize HttpOnly, SameSite=Lax, and Secure attributes in production environments (src/auth/auth-cookie.spec.ts).

## 2. Role-Based Access Control (RBAC)
* Access permissions are enforced at the NestJS controller boundary via @UseGuards(JwtAuthGuard, PermissionsGuard).
* Frontend route hiding is purely visual; all backend mutations verify server-side permission flags (canAccessAllBranchesInFacility, clinical review permissions, cashier clearance).

## 3. Data Protection (Kenya Data Protection Act, 2019 Alignment)
* **Tenant Isolation:** All patient and clinical records are partitioned by acilityId foreign keys.
* **Audit Trail:** Immutable append-only audit logging (AuditLog model) captures user identity, client IP addresses, entity mutations, and timestamps (src/audit-log/).
* **Clinical Integrity:** Pharmacological dispensing decrements and inpatient bed assignments are executed within transactional boundaries ($transaction), preventing concurrent overwrites and negative stock balances.
