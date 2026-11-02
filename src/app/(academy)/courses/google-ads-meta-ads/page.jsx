import CourseDetailView from "@/components/premium/course-detail-view";
import { coursePagesData } from "@/lib/courses-detail-data";
import { siteUrl } from "@/lib/constants";

const course = coursePagesData["google-ads-meta-ads"];

export const metadata = {
  title: course.seoTitle,
  description: course.seoDescription,
  alternates: {
    canonical: course.canonical,
  },
  openGraph: {
    title: `${course.title} | Entrain Labs Academy`,
    description: course.seoDescription,
    url: course.canonical,
    type: "website",
    locale: "en_IN",
    siteName: "Entrain Labs",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: `${course.title} at Entrain Labs Academy`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${course.title} | Entrain Labs Academy`,
    description: course.seoDescription,
    images: ["/Logo.png"],
  },
};

const jsonLdCourse = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": `${course.canonical}#course`,
      name: course.title,
      description: course.seoDescription,
      provider: {
        "@type": "EducationalOrganization",
        name: "Entrain Labs",
        url: siteUrl,
        logo: `${siteUrl}/Logo.png`,
      },
      educationalCredentialAwarded: "Certificate in Paid Search & Social Advertising",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${course.canonical}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Courses",
          item: `${siteUrl}/courses`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: course.title,
          item: course.canonical,
        },
      ],
    },
  ],
};

export default function GoogleAdsMetaAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }}
      />
      <CourseDetailView course={course} />
    </>
  );
}

