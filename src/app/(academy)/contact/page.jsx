import Contact from "@/views/Contact";
import { contactFaqs } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.entrainlabs.in";

export const metadata = {
  title: "Contact Us & Book Free Career Consultation",
  description:
    "Get in touch with Entrain Labs Admissions & Career Experts. Visit our Kerala center in Vemboor, Manjeri or schedule a free consultation via WhatsApp/phone.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us & Book Free Career Consultation | Entrain Labs",
    description:
      "Get in touch with Entrain Labs Admissions & Career Experts. Visit our Kerala center in Vemboor, Manjeri or schedule a free consultation via WhatsApp/phone.",
    url: `${siteUrl}/contact`,
    type: "website",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "Contact Entrain Labs",
      },
    ],
  },
};

const jsonLdContact = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Entrain Labs",
  "url": `${siteUrl}/contact`,
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Entrain Labs Digital Marketing Academy",
    "image": `${siteUrl}/Logo.png`,
    "telephone": "+917593841013",
    "email": "entrainlabs@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vemboor, Manjeri",
      "addressLocality": "Malappuram",
      "addressRegion": "Kerala",
      "postalCode": "676121",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.113333,
      "longitude": 76.104443,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00",
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
      "name": "Contact",
      "item": `${siteUrl}/contact`,
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/contact#faq`,
  "url": `${siteUrl}/contact`,
  "mainEntity": contactFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <Contact />
    </>
  );
}

