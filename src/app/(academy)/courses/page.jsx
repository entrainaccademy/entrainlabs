import Courses from "@/views/Courses";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.entrainlabs.in";

export const metadata = {
  title: "Digital Marketing Courses & Certification Programs",
  description:
    "Explore our industry-leading digital marketing training programs in Kerala: Starter, Career Track, and Pro Master. Offline classroom and live online options available.",
  alternates: {
    canonical: `${siteUrl}/courses`,
  },
  openGraph: {
    title: "Digital Marketing Courses & Certification Programs | Entrain Labs",
    description:
      "Explore our industry-leading digital marketing training programs in Kerala: Starter, Career Track, and Pro Master. Offline classroom and live online options available.",
    url: `${siteUrl}/courses`,
    type: "website",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "Entrain Labs Courses",
      },
    ],
  },
};

const jsonLdCourses = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Entrain Labs Digital Marketing Programs",
  "itemListElement": [
    {
      "@type": "Course",
      "position": 1,
      "name": "Starter Program",
      "description": "Fundamental digital marketing training covering live classes, assignments, notes, and certification.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Entrain Labs",
      },
    },
    {
      "@type": "Course",
      "position": 2,
      "name": "Career Track Program",
      "description": "Comprehensive digital marketing training with virtual workplace, weekly reviews, AI tools, prompt engineering, real client projects, and career guidance.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Entrain Labs",
      },
    },
    {
      "@type": "Course",
      "position": 3,
      "name": "Pro Master Program",
      "description": "Advanced digital marketing mastery with 1-on-1 mentorship, lifetime support, enterprise client campaigns, and career placement assistance.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Entrain Labs",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourses) }}
      />
      <Courses />
    </>
  );
}
