import profile from "@/data/profile.json";
import socials from "@/data/socials.json";

// ---------------------------------------------------------
// 1. متادیتا
// ---------------------------------------------------------
export const metadata = {
  metadataBase: new URL("https://mkamran.ir"),

  title: `تماس با من | ${profile.fullName}`,
  description: `راه‌های ارتباطی با ${profile.fullName}؛ ارسال ایمیل، تماس تلفنی و فرم تماس مستقیم.`,
  keywords: [
    "تماس با من",
    "ارتباط",
    "محمد کامران",
    "برنامه‌نویس وب",
    "توسعه‌دهنده فول‌استک",
    "ایمیل",
    "شماره تماس",
    "فرم تماس",
    "کرج",
  ],
  authors: [{ name: profile.fullName, url: "https://mkamran.ir" }],
  creator: profile.fullName,
  publisher: profile.fullName,

  alternates: {
    canonical: "https://mkamran.ir/contact",
  },

  openGraph: {
    title: `تماس با من | ${profile.fullName}`,
    description: `راه‌های ارتباطی با ${profile.fullName}؛ ارسال ایمیل، تماس تلفنی و فرم تماس مستقیم.`,
    url: "https://mkamran.ir/contact",
    siteName: profile.fullName,
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: profile.avatar,
        width: 1200,
        height: 630,
        alt: profile.fullName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `تماس با من | ${profile.fullName}`,
    description: `راه‌های ارتباطی با ${profile.fullName}؛ ارسال ایمیل، تماس تلفنی و فرم تماس مستقیم.`,
    images: [profile.avatar],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ---------------------------------------------------------
// 2. داده‌های ساختاریافته (JSON-LD)
// ---------------------------------------------------------
const socialUrls = socials.map((s) => s.url);
const internationalPhone = `+98${profile.phone.replace(/^0/, "")}`;
const baseUrl = "https://mkamran.ir";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: profile.fullName,
      description: profile.summary,
      inLanguage: "fa-IR",
      publisher: { "@id": `${baseUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: profile.fullName,
      jobTitle: profile.title,
      description: profile.summary,
      url: `${baseUrl}/`,
      image: `${baseUrl}${profile.avatar}`,
      email: profile.email,
      telephone: internationalPhone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "کرج",
        addressCountry: "IR",
      },
      sameAs: socialUrls,
      // نقاط تماس مستقیم
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: profile.email,
          telephone: internationalPhone,
          availableLanguage: ["Persian", "English"],
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": `${baseUrl}/contact/#contactpage`,
      url: `${baseUrl}/contact`,
      name: `تماس با من | ${profile.fullName}`,
      description: `راه‌های ارتباطی با ${profile.fullName}؛ ارسال ایمیل، تماس تلفنی و فرم تماس مستقیم.`,
      inLanguage: "fa-IR",
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${baseUrl}/#person` },
      mainEntity: { "@id": `${baseUrl}/#person` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/contact/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "خانه",
          item: `${baseUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "تماس با من",
          item: `${baseUrl}/contact`,
        },
      ],
    },
  ],
};
