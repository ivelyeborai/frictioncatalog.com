import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages = products.map((p) => ({
    url: `https://frictioncatalog.com/shop/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages = posts.map((p) => ({
    url: `https://frictioncatalog.com/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://frictioncatalog.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://frictioncatalog.com/shop",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://frictioncatalog.com/contract",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://frictioncatalog.com/contract/create",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://frictioncatalog.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...productPages,
    ...blogPages,
  ];
}
