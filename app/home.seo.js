import profile from "@/data/profile.json";
import socials from "@/data/socials.json";
import experienceData from "@/data/experience.json";

// ---------------------------------------------------------
// 1. متادیتا
// ---------------------------------------------------------
export const metadata = {
  metadataBase: new URL("https://mkamran.ir"),

  title: `${profile.fullName} | ${profile.title}`,
  description: profile.summary,
  keywords: [
    "محمد کامران",
    "برنامه‌نویس وب",
    "توسعه‌دهنده فول‌استک",
    "React.js",
    "Next.js",
    "Node.js",
    "کرج",
    "رزومه",
    "نمونه کار",
  ],
  authors: [{ name: profile.fullName, url: "https://mkamran.ir" }],
  creator: profile.fullName,
  publisher: profile.fullName,

  alternates: {
    canonical: "https://mkamran.ir/",
  },

  openGraph: {
    title: `${profile.fullName} | ${profile.title}`,
    description: profile.summary,
    url: "https://mkamran.ir/",
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
    title: `${profile.fullName} | ${profile.title}`,
    description: profile.summary,
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
const allTech = experienceData.flatMap((exp) => exp.tech);
const uniqueTech = [...new Set(allTech)];
const internationalPhone = `+98${profile.phone.replace(/^0/, "")}`;
const socialUrls = socials.map((s) => s.url);

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mkamran.ir/#website",
      url: "https://mkamran.ir/",
      name: profile.fullName,
      description: profile.summary,
      inLanguage: "fa-IR",
      publisher: { "@id": "https://mkamran.ir/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://mkamran.ir/#person",
      name: profile.fullName,
      jobTitle: profile.title,
      description: profile.summary,
      url: "https://mkamran.ir/",
      image: `https://mkamran.ir${profile.avatar}`,
      email: profile.email,
      telephone: internationalPhone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "کرج",
        addressCountry: "IR",
      },
      knowsAbout: uniqueTech,
      sameAs: socialUrls,
      subjectOf: {
        "@type": "DigitalDocument",
        name: `رزومه ${profile.fullName}`,
        url: `https://mkamran.ir${profile.resumeUrl}`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://mkamran.ir/#profilepage",
      url: "https://mkamran.ir/",
      name: `درباره من | ${profile.fullName}`,
      description: profile.summary,
      inLanguage: "fa-IR",
      isPartOf: { "@id": "https://mkamran.ir/#website" },
      mainEntity: { "@id": "https://mkamran.ir/#person" },
      about: { "@id": "https://mkamran.ir/#person" },
    },
  ],
};
