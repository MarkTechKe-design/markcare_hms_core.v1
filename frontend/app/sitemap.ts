import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const staticRoutes = [
    "",
    "/platform",
    "/solutions",
    "/modules",
    "/modules/clinical-emr",
    "/modules/pharmacy",
    "/modules/laboratory",
    "/modules/billing",
    "/modules/inpatient",
    "/about",
    "/facilities",
    "/pricing",
    "/contact",
    "/request-demo",
    "/blog",
    "/resources/faq",
    "/integrations",
    "/security",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/modules") ? 0.9 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
