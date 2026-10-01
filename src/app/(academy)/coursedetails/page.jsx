import { CourseDetails } from "@/views/Courses";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://entrainlabs.com";

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

export default function Page() {
  return <CourseDetails />;
}
