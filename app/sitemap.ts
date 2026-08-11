import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/packages", "/why-mec", "/faq"];

  return routes.map((route) => ({
    url: `${business.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
