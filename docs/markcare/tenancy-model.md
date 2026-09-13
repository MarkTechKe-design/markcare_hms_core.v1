# MarkCare HMS — Multi-Tenancy & Isolation Model

## 1. Two-Tier Hierarchical Structure
MarkCare HMS uses a shared-database, discriminator-column tenancy architecture:
```
Organization (Enterprise Level)
   └── Facility (Tenant Boundary — Independent Hospital or Health System)
         └── Branch (Physical Site — Main Hospital, Annex, Satellite Clinic)
               ├── Staff (Assigned to Facility, scoped to Branches via UserBranchAccess)
               ├── Patients (Registered at Facility level, visit specific Branches)
               └── Operations (Wards, Pharmacy Stock, Billing scoped to Branch)
```

## 2. Scoping Rules
* **Facility Boundary:** Users logged into Facility A cannot read, query, or mutate records for Facility B under any circumstances. Prisma queries explicitly filter on where: { facilityId }.
* **Branch Boundary:** Medical staff without cross-branch permissions are restricted to their assigned branch (UserBranchAccess). Staff with canAccessAllBranchesInFacility: true (e.g., Hospital Directors or System Administrators) can navigate across all branches within their facility.
