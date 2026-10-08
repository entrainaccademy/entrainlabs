import About from "@/views/About";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.entrainlabs.in";

export const metadata = {
  title: "About Us - Practical Digital Marketing Academy",
  description:
    "Learn about Entrain Labs mission, faculty, and industry-focused curriculum. We empower students, job seekers, and business owners with practical digital skills.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About Us - Practical Digital Marketing Academy | Entrain Labs",
    description:
      "Learn about Entrain Labs mission, faculty, and industry-focused curriculum. We empower students, job seekers, and business owners with practical digital skills.",
    url: `${siteUrl}/about`,
    type: "website",
    images: [
      {
        url: "/shaaanaaa.png",
        width: 800,
        height: 600,
        alt: "About Entrain Labs",
      },
    ],
  },
};

const jsonLdAbout = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Entrain Labs",
  "url": `${siteUrl}/about`,
  "mainEntity": {
    "@type": "EducationalOrganization",
    "name": "Entrain Labs",
    "description":
      "A practical Digital Marketing Academy dedicated to helping learners develop industry-ready skills with live campaigns, AI tools, and expert mentoring.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vemboor, Manjeri",
      "addressLocality": "Malappuram",
      "addressRegion": "Kerala",
      "postalCode": "676121",
      "addressCountry": "IN",
    },
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${siteUrl}/`,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": `${siteUrl}/about`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/shaaanaaa-mobile.webp"
        type="image/webp"
        media="(max-width: 768px)"
        // @ts-ignore
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/shaaanaaa.webp"
        type="image/webp"
        media="(min-width: 769px)"
        // @ts-ignore
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <About />
    </>
  );
}
