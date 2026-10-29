import Home from "@/views/Home";
import { siteUrl } from "@/lib/constants";

export const metadata = {
  title: "Digital Marketing Course in Malappuram",
  description:
    "Join Entrain Labs for a digital marketing course in Manjeri, Malappuram. Learn through live projects, AI tools and an agency internship, with career support. Apply now.",
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: "Digital Marketing Course in Malappuram | Entrain Labs",
    description:
      "Join Entrain Labs for a digital marketing course in Manjeri, Malappuram. Learn through live projects, AI tools and an agency internship, with career support. Apply now.",
    url: `${siteUrl}`,
    type: "website",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "Entrain Labs Digital Marketing Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Course in Malappuram | Entrain Labs",
    description:
      "Join Entrain Labs for a digital marketing course in Manjeri, Malappuram. Learn through live projects, AI tools and an agency internship, with career support. Apply now.",
    images: ["/Logo.png"],
  },
};

const jsonLdHome = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      "name": "Entrain Labs",
      "url": siteUrl,
      "logo": `${siteUrl}/Logo.png`,
      "sameAs": [
        "https://instagram.com/entrain_labs",
        "https://facebook.com",
        "https://linkedin.com",
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vemboor, Manjeri",
        "addressLocality": "Malappuram",
        "addressRegion": "Kerala",
        "postalCode": "676121",
        "addressCountry": "IN",
      },
    },
    {
      "@type": "Course",
      "@id": `${siteUrl}/#course-master`,
      "name": "Digital Marketing Master Program",
      "description":
        "Master performance marketing, SEO, Google Ads, Meta Ads, and AI-powered automation coupled with a guaranteed agency internship.",
      "provider": {
        "@id": `${siteUrl}/#organization`,
      },
      "educationalCredentialAwarded": "Certification in Digital Marketing",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": ["online", "onsite"],
        "courseWorkload": "PT24W",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which course is best for beginners in digital marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Digital Marketing Master Program is designed specifically for beginners, taking you step-by-step from core fundamentals to advanced campaigns and agency internships.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you provide placement assistance and internship?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Entrain Labs provides a guaranteed agency internship with live client ad budgets, resume preparation, mock interviews, and direct placement support.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
      />
      <Home />
    </>
  );
}
