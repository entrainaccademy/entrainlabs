import { CourseDetails } from "@/views/Courses";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.entrainlabs.in";

export const metadata = {
  title: "Course Syllabus & Online Training Plans",
  description:
    "Detailed curriculum syllabus, schedule, pricing plans, and course module breakdown for Entrain Labs Digital Marketing Programs.",
  alternates: {
    canonical: `${siteUrl}/coursedetails`,
  },
  openGraph: {
    title: "Course Syllabus & Online Training Plans | Entrain Labs",
    description:
      "Detailed curriculum syllabus, schedule, pricing plans, and course module breakdown for Entrain Labs Digital Marketing Programs.",
    url: `${siteUrl}/coursedetails`,
    type: "website",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "Entrain Labs Course Syllabus",
      },
    ],
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
      "name": "Courses",
      "item": `${siteUrl}/courses`,
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Course Details",
      "item": `${siteUrl}/coursedetails`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <CourseDetails />
    </>
  );
}
