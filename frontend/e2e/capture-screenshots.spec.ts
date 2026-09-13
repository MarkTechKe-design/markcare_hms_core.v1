import { test, type Page } from "@playwright/test";
import path from "path";

const demoUser = {
  id: 1,
  userId: 1,
  username: "broadway-admin",
  fullName: "Broadway Demonstration Administrator",
  isActive: true,
  role: { id: 1, code: "SUPER_ADMIN", name: "Super Administrator" },
  roleCode: "SUPER_ADMIN",
  homeFacilityId: 1,
  homeFacilityName: "Broadway Demonstration Hospital",
  homeBranchId: 1,
  homeBranchName: "Main Branch",
  canAccessAllBranchesInFacility: false,
  allowedBranchIds: [1],
  allowedBranches: [
    {
      id: 1,
      name: "Main Branch",
      code: "MAIN",
      facilityId: 1,
    },
  ],
  staffId: 1,
};

async function setupDemoSession(page: Page) {
  await page.addInitScript((userData) => {
    localStorage.setItem("markcare_token", "demo-token-broadway");
    localStorage.setItem("markcare_user", JSON.stringify(userData));
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("auth_token", "demo-token-broadway");
    localStorage.setItem("token", "demo-token-broadway");
  }, demoUser);
}

test.describe("Capture Genuine Application Screenshots", () => {
  test.use({
    viewport: { width: 1440, height: 900 },
  });

  test("Capture Patient Queue, Clinical EMR, Pharmacy FEFO, and Billing screens", async ({ page, baseURL }) => {
    const targetUrl = baseURL || "http://localhost:3000";
    await setupDemoSession(page);

    // 1. Capture Patient Queue
    try {
      await page.goto(`${targetUrl}/doctor-queue`, { waitUntil: "networkidle", timeout: 15000 });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: path.join(process.cwd(), "public/screenshots/patient-queue.webp"), quality: 90 });
    } catch {
      await page.goto(`${targetUrl}/queue`, { waitUntil: "domcontentloaded", timeout: 10000 });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(process.cwd(), "public/screenshots/patient-queue.webp") });
    }

    // 2. Capture Clinical EMR
    try {
      await page.goto(`${targetUrl}/consultation`, { waitUntil: "networkidle", timeout: 15000 });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: path.join(process.cwd(), "public/screenshots/clinical-emr.webp"), quality: 90 });
    } catch {
      await page.goto(`${targetUrl}/patients`, { waitUntil: "domcontentloaded", timeout: 10000 });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(process.cwd(), "public/screenshots/clinical-emr.webp") });
    }

    // 3. Capture Pharmacy Stock & FEFO
    try {
      await page.goto(`${targetUrl}/pharmacy/stock`, { waitUntil: "networkidle", timeout: 15000 });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: path.join(process.cwd(), "public/screenshots/pharmacy-fefo.webp"), quality: 90 });
    } catch {
      await page.goto(`${targetUrl}/pharmacy-stock`, { waitUntil: "domcontentloaded", timeout: 10000 });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(process.cwd(), "public/screenshots/pharmacy-fefo.webp") });
    }

    // 4. Capture Billing / Cashier
    try {
      await page.goto(`${targetUrl}/billing`, { waitUntil: "networkidle", timeout: 15000 });
      await page.waitForTimeout(1500);
      await page.screenshot({ path: path.join(process.cwd(), "public/screenshots/billing-cashier.webp"), quality: 90 });
    } catch {
      await page.goto(`${targetUrl}/invoices`, { waitUntil: "domcontentloaded", timeout: 10000 });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(process.cwd(), "public/screenshots/billing-cashier.webp") });
    }
  });
});
