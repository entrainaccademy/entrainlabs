import Blog from "@/views/Blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.entrainlabs.in";

export const metadata = {
  title: "Digital Marketing Insights & Career Guides",
  description:
    "Explore actionable guides, digital marketing trends, portfolio tips, and campaign strategies published by the Entrain Labs team.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Digital Marketing Insights & Career Guides | Entrain Labs Blog",
    description:
      "Explore actionable guides, digital marketing trends, portfolio tips, and campaign strategies published by the Entrain Labs team.",
    url: `${siteUrl}/blog`,
    type: "website",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "Entrain Labs Blog",
      },
    ],
  },
};

const jsonLdBlog = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Entrain Labs Knowledge Hub",
  "url": `${siteUrl}/blog`,
  "description": "Digital marketing articles, career playbooks, and advertising case studies.",
  "publisher": {
    "@type": "EducationalOrganization",
    "name": "Entrain Labs",
    "logo": `${siteUrl}/Logo.png`,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />
      <Blog />
    </>
  );
}
