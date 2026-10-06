import OfflineBatches from "@/views/OfflineBatches";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.entrainlabs.in";

export const metadata = {
  title: "Offline Digital Marketing Course & Classroom Batches in Kerala",
  description:
    "Join Entrain Labs offline digital marketing classroom training batches in Kerala (Manjeri, Malappuram). 100% practical lab workstation, live ad spend campaigns, 1-on-1 mentor guidance, AI tools, and guaranteed agency placement support.",
  keywords: [
    "Offline Digital Marketing Course Kerala",
    "Digital Marketing Classroom Training Malappuram",
    "Offline Digital Marketing Batches Manjeri",
    "Practical Digital Marketing Lab Kerala",
    "Offline Digital Marketing Institute Kerala",
    "SEO Google Ads Offline Training",
    "Digital Marketing Course with Placement Kerala",
    "Best Digital Marketing Institute in Manjeri",
  ],
  alternates: {
    canonical: `${siteUrl}/offline-batches`,
  },
  openGraph: {
    title: "Offline Digital Marketing Classroom Batches in Kerala | Entrain Labs",
    description:
      "Join Entrain Labs offline digital marketing classroom training batches in Kerala (Manjeri, Malappuram). 100% practical lab workstation, live ad spend campaigns, 1-on-1 mentor guidance, AI tools, and guaranteed agency placement support.",
    url: `${siteUrl}/offline-batches`,
    type: "website",
    locale: "en_IN",
    siteName: "Entrain Labs",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "Entrain Labs Offline Digital Marketing Classroom Batches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Offline Digital Marketing Classroom Batches in Kerala | Entrain Labs",
    description:
      "Join Entrain Labs offline digital marketing classroom training batches in Kerala (Manjeri, Malappuram). 100% practical lab workstation, live ad spend campaigns, 1-on-1 mentor guidance, AI tools, and guaranteed agency placement support.",
    images: ["/Logo.png"],
  },
};

const jsonLdOfflineCourse = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": `${siteUrl}/offline-batches#course`,
      "name": "Offline Digital Marketing Classroom Master Program",
      "description":
        "In-person digital marketing classroom program with live agency workstations, real ad budget campaigns, 1-on-1 mentorship, and 100% placement support in Manjeri, Malappuram, Kerala.",
      "courseCode": "EL-DM-OFFLINE",
      "courseMode": "onsite",
      "educationalCredentialAwarded": "Certificate in Practical Digital Marketing & AI Automation",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Entrain Labs",
        "url": siteUrl,
        "logo": `${siteUrl}/Logo.png`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vemboor, Manjeri",
          "addressLocality": "Malappuram",
          "addressRegion": "Kerala",
          "postalCode": "676121",
          "addressCountry": "IN",
        },
      },
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "name": "Weekday Regular (Morning Batch)",
          "courseMode": "onsite",
          "courseWorkload": "PT3H",
          "location": {
            "@type": "Place",
            "name": "Entrain Labs Campus",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Vemboor, Manjeri",
              "addressLocality": "Malappuram",
              "addressRegion": "Kerala",
              "postalCode": "676121",
              "addressCountry": "IN",
            },
          },
        },
        {
          "@type": "CourseInstance",
          "name": "Weekday Focus (Afternoon Batch)",
          "courseMode": "onsite",
          "courseWorkload": "PT3H",
          "location": {
            "@type": "Place",
            "name": "Entrain Labs Campus",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Vemboor, Manjeri",
              "addressLocality": "Malappuram",
              "addressRegion": "Kerala",
              "postalCode": "676121",
              "addressCountry": "IN",
            },
          },
        },
        {
          "@type": "CourseInstance",
          "name": "Weekend Executive Masterclass",
          "courseMode": "onsite",
          "courseWorkload": "PT7H",
          "location": {
            "@type": "Place",
            "name": "Entrain Labs Campus",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Vemboor, Manjeri",
              "addressLocality": "Malappuram",
              "addressRegion": "Kerala",
              "postalCode": "676121",
              "addressCountry": "IN",
            },
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/offline-batches#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl,
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
          "name": "Offline Batches",
          "item": `${siteUrl}/offline-batches`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/offline-batches#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is the Entrain Labs offline training center located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our state-of-the-art campus is conveniently located at Vemboor, Manjeri, Malappuram, Kerala (PIN 676121). The center features high-speed air-conditioned labs, modern workstations, high-speed fiber internet, and a collaborative discussion lounge.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the batch size for the offline classroom sessions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To ensure deep personalized attention and hands-on guidance, each offline batch is strictly capped at 12 to 15 students only. Every student gets dedicated desk time and one-on-one reviews with mentors.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the timings and schedules available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer three flexible cohorts: Weekday Morning (10:00 AM – 1:00 PM), Weekday Afternoon (2:00 PM – 5:00 PM), and Weekend Executive (Saturday & Sunday 9:30 AM – 4:30 PM).",
          },
        },
        {
          "@type": "Question",
          "name": "Will I get to run campaigns with real ad budgets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Entrain Labs is committed to practical learning. Students run real Google and Meta ad campaigns with actual budget allocation, learning live optimization, keyword bidding, conversion tracking, and analytics firsthand.",
          },
        },
        {
          "@type": "Question",
          "name": "How does the placement support work for offline students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Offline students receive comprehensive 100% placement assistance, which includes live resume revamping, portfolio creation with real client case studies, mock interview sessions with agency founders, and direct interview placement drives.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOfflineCourse) }}
      />
      <OfflineBatches />
    </>
  );
}
