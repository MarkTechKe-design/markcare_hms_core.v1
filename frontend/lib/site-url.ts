export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (envUrl && !envUrl.includes("localhost")) {
    return envUrl.replace(/\/+$/, "");
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) {
    return `https://${vercelProduction.replace(/\/+$/, "")}`;
  }

  const vercelBranch = process.env.VERCEL_URL;
  if (vercelBranch) {
    return `https://${vercelBranch.replace(/\/+$/, "")}`;
  }

  return "https://markcare-hms-core-v1.vercel.app";
}
