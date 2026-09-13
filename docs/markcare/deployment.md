# MarkCare HMS — Deployment Specifications

## Model A: Centralized Cloud SaaS
* **Use Case:** Multi-facility commercial healthcare SaaS for hospital networks and standalone clinics.
* **Infrastructure:**
  * **Backend API:** Containerized Node.js runtime (Docker / AWS ECS / Render / DigitalOcean App Platform).
  * **Database:** Managed MySQL 8.0+ with automated daily snapshots and point-in-time recovery.
  * **Frontend:** Vercel Edge Network or AWS CloudFront pointing to Next.js standalone server.
  * **Caching & Queue:** Redis for background worker queuing.

## Model B: Hospital On-Premise (Local Server)
* **Use Case:** Standalone hospitals, rural facilities, or institutions requiring complete on-site data sovereignty.
* **Server Requirements:**
  * **OS:** Windows Server 2022+ or Ubuntu Server 22.04 LTS.
  * **Hardware:** 8-core CPU, 16 GB RAM, 256 GB NVMe SSD (RAID 1 recommended).
  * **Local Stack:** Node.js v20+, MySQL 8.x (running locally via service or XAMPP).
  * **Intranet Access:** Local Static IP (e.g., 192.168.1.100) routed through facility LAN/Wi-Fi to ward and clinic terminals.
