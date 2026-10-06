import OnlinePlans from "@/views/OnlinePlans";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.entrainlabs.in";

export const metadata = {
  title: "Online Digital Marketing Training Plans & Pricing",
  description:
    "Choose from Starter, Career Track, or Pro Master online digital marketing training plans at Entrain Labs. Live classes, AI tools, real client projects, and career support - all delivered online.",
  alternates: {
    canonical: `${siteUrl}/online-plans`,
  },
  openGraph: {
    title: "Online Digital Marketing Training Plans & Pricing | Entrain Labs",
    description:
      "Choose from Starter, Career Track, or Pro Master online digital marketing training plans at Entrain Labs. Live classes, AI tools, real client projects, and career support - all delivered online.",
    url: `${siteUrl}/online-plans`,
    type: "website",
    locale: "en_IN",
    siteName: "Entrain Labs",
    images: [{ url: "/Logo.png", width: 800, height: 600, alt: "Entrain Labs Online Training Plans" }],
  },
};

export default function Page() {
  return <OnlinePlans />;
}