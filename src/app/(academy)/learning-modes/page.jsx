import LearningModes from "@/views/LearningModes";
import { siteUrl } from "@/lib/constants";

export const metadata = {
  title: "Learning Modes: Offline Classroom & Online Batches | Entrain Labs",
  description:
    "Choose your ideal digital marketing learning mode at Entrain Labs: In-person classroom training at Manjeri, Malappuram campus or live interactive online cohorts.",
  alternates: {
    canonical: `${siteUrl}/learning-modes`,
  },
  openGraph: {
    title: "Learning Modes: Offline Classroom & Online Batches | Entrain Labs",
    description:
      "Choose your ideal digital marketing learning mode at Entrain Labs: In-person classroom training at Manjeri, Malappuram campus or live interactive online cohorts.",
    url: `${siteUrl}/learning-modes`,
    type: "website",
    locale: "en_IN",
    siteName: "Entrain Labs",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "Entrain Labs Learning Modes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Modes: Offline Classroom & Online Batches | Entrain Labs",
    description:
      "Choose your ideal digital marketing learning mode at Entrain Labs: In-person classroom training at Manjeri, Malappuram campus or live interactive online cohorts.",
    images: ["/Logo.png"],
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
      name: "Learning Modes",
      item: `${siteUrl}/learning-modes`,
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
      <LearningModes />
    </>
  );
}

