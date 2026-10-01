const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://entrainlabs.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/courses",
          "/coursedetails",
          "/contact",
          "/blog",
        ],
        disallow: [
          "/api/*",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
