import skillsData from "@/data/skills.json";
import profile from "@/data/profile.json";

// ---------------------------------------------------------
// 1. متادیتا
// ---------------------------------------------------------
export const metadata = {
  metadataBase: new URL("https://mkamran.ir"),

  title: `مهارت‌ها | ${profile.fullName}`,
  description: `مهارت‌های فنی ${profile.fullName} در فرانت‌اند، بک‌اند و ابزارهای توسعه وب شامل React، Next.js، Node.js، MongoDB و ...`,
  keywords: [
    "مهارت‌ها",
    "محمد کامران",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "Git",
    "Figma",
    "فرانت‌اند",
    "بک‌اند",
    "ابزارهای توسعه",
  ],
  authors: [{ name: profile.fullName, url: "https://mkamran.ir" }],
  creator: profile.fullName,
  publisher: profile.fullName,

  alternates: {
    canonical: "https://mkamran.ir/skills",
  },

  openGraph: {
    title: `مهارت‌ها | ${profile.fullName}`,
    description: `مهارت‌های فنی ${profile.fullName} در فرانت‌اند، بک‌اند و ابزارهای توسعه وب.`,
    url: "https://mkamran.ir/skills",
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
    title: `مهارت‌ها | ${profile.fullName}`,
    description: `مهارت‌های فنی ${profile.fullName} در فرانت‌اند، بک‌اند و ابزارهای توسعه وب.`,
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
// استخراج تمام مهارت‌ها به صورت یک آرایه تخت از نام‌ها
const allSkills = skillsData.flatMap((category) =>
  category.items.map((item) => item.name),
);

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
      telephone: `+98${profile.phone.replace(/^0/, "")}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "کرج",
        addressCountry: "IR",
      },
      knowsAbout: allSkills,
      // در صورت وجود، لینک شبکه‌های اجتماعی را اضافه کنید
      sameAs: [
        "https://github.com/gitkamran",
        "https://instagram.com/mkamran.ir",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://mkamran.ir/skills/#profilepage",
      url: "https://mkamran.ir/skills",
      name: `مهارت‌ها | ${profile.fullName}`,
      description: `مهارت‌های فنی ${profile.fullName} در فرانت‌اند، بک‌اند و ابزارهای توسعه وب.`,
      inLanguage: "fa-IR",
      isPartOf: { "@id": "https://mkamran.ir/#website" },
      mainEntity: { "@id": "https://mkamran.ir/#person" },
      about: { "@id": "https://mkamran.ir/#person" },
    },
  ],
};
