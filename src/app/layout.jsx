import "@/index.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.entrainlabs.in";

export const metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "uXYmP6Be_6YsCRaT-XdYesu1mQ00vtNu1l67R-VaagE",
  },
  title: {
    default: "Entrain Labs - Best Digital Marketing Academy in Kerala",
    template: "%s | Entrain Labs",
  },
  description:
    "Transform your career with Kerala's premier practical digital marketing academy. Master Google Ads, Meta Ads, SEO, AI tools, and gain guaranteed agency experience.",
  keywords: [
    "Digital Marketing Academy Kerala",
    "Best Digital Marketing Course in Malappuram",
    "Performance Marketing Training",
    "SEO Training Kerala",
    "AI Digital Marketing Course",
    "Agency Internship Kerala",
    "Entrain Labs",
    "Entrain Academy",
  ],
  authors: [{ name: "Entrain Labs Team", url: siteUrl }],
  creator: "Entrain Labs",
  publisher: "Entrain Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Entrain Labs",
    title: "Entrain Labs - Best Digital Marketing Academy in Kerala",
    description:
      "Transform your career with Kerala's premier practical digital marketing academy. Master Google Ads, Meta Ads, SEO, AI tools, and gain guaranteed agency experience.",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "Entrain Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrain Labs - Best Digital Marketing Academy in Kerala",
    description:
      "Transform your career with Kerala's premier practical digital marketing academy. Master Google Ads, Meta Ads, SEO, AI tools, and gain guaranteed agency experience.",
    images: ["/Logo.png"],
    creator: "@entrainlabs",
  },
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#0A756A",
  width: "device-width",
  initialScale: 1,
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Entrain Labs",
  "alternateName": "Entrain Academy",
  "url": siteUrl,
  "logo": `${siteUrl}/Logo.png`,
  "image": `${siteUrl}/Logo.png`,
  "description":
    "Premier practical digital marketing academy in Kerala providing industry-mapped courses, AI tools, live agency internships, and career placement.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Vemboor, Manjeri",
    "addressLocality": "Malappuram",
    "addressRegion": "Kerala",
    "postalCode": "676121",
    "addressCountry": "IN",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7593841013",
    "contactType": "admissions",
    "email": "entrainlabs@gmail.com",
    "areaServed": "IN",
    "availableLanguage": ["English", "Malayalam"],
  },
  "sameAs": [
    "https://instagram.com/entrain_labs",
    "https://facebook.com",
    "https://linkedin.com",
    "https://youtube.com",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Preconnect for external Google Fonts & Fontshare CDN */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..900;1,9..40,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..900;1,9..40,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..900;1,9..40,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased selection:bg-[#0A756A]/20 selection:text-[#0A756A]">
        {children}
      </body>
    </html>
  );
}
