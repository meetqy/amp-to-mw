import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amptomw.com"; // 替换为实际域名

  const routes = [
    "",
    "/dc-amp-calculator",
    "/ac-single",
    "/ac-three-ll",
    "/ac-three-ln",
    "/kv-to-mw",
    "/mw-to-amps",
    "/dc-to-ac",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
