import type { MetadataRoute } from "next";
import { properties, seoConfig, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: seoConfig.siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: siteUrl("/properties"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: siteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Add future Soweto property listing URLs here if they are not generated from property data.
    {
      url: siteUrl("/soweto"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...properties.map((property) => ({
      url: siteUrl(`/properties/${property.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];
}
