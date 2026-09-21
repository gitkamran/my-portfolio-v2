import educationData from "@/data/education.json";
import profile from "@/data/profile.json";
import socials from "@/data/socials.json";

// ---------------------------------------------------------
// 1. متادیتا
// ---------------------------------------------------------
export const metadata = {
  metadataBase: new URL("https://mkamran.ir"),

  title: `سوابق آموزشی | ${profile.fullName}`,
  description: `دوره‌های آموزشی گذرانده‌شده ${profile.fullName} در مجتمع فنی تهران؛ شامل Web Design Pack، React.js و Photoshop/Illustrator با نمرات عالی.`,
  keywords: [
    "سوابق آموزشی",
    "دوره‌های آموزشی",
    "مجتمع فنی تهران",
    "محمد کامران",
    "Web Design",
    "React.js",
    "Photoshop",
    "Illustrator",
    "HTML",
    "CSS",
    "JavaScript",
    "آموزش وب",
  ],
  authors: [{ name: profile.fullName, url: "https://mkamran.ir" }],
  creator: profile.fullName,
  publisher: profile.fullName,

  alternates: {
    canonical: "https://mkamran.ir/education",
  },

  openGraph: {
    title: `سوابق آموزشی | ${profile.fullName}`,
    description: `دوره‌های آموزشی گذرانده‌شده ${profile.fullName} در مجتمع فنی تهران.`,
    url: "https://mkamran.ir/education",
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
    title: `سوابق آموزشی | ${profile.fullName}`,
    description: `دوره‌های آموزشی گذرانده‌شده ${profile.fullName} در مجتمع فنی تهران.`,
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

// ساخت آرایه credentials برای هر دوره
const educationalCredentials = educationData.map((course) => ({
  "@type": "EducationalOccupationalCredential",
  name: course.title,
  description: `${course.desc} - دوره ${course.courseDur} ساعته با نمره ${course.score}`,
  credentialCategory: "certificate",
  competencyRequired: course.desc,
  image: `${baseUrl}${course.src}`,
  educationalLevel: "دوره تخصصی",
  // موسسه صادرکننده
  recognizedBy: {
    "@type": "EducationalOrganization",
    name: "مجتمع فنی تهران",
    address: {
      "@type": "PostalAddress",
      addressLocality: "تهران",
      addressCountry: "IR",
    },
  },
  // اطلاعات اضافی
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "مدت دوره",
      value: `${course.courseDur} ساعت`,
    },
    {
      "@type": "PropertyValue",
      name: "نمره",
      value: course.score,
    },
  ],
}));

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
      // مدارک آموزشی کسب‌شده
      hasCredential: educationalCredentials,
    },
    {
      "@type": "CollectionPage",
      "@id": `${baseUrl}/education/#collectionpage`,
      url: `${baseUrl}/education`,
      name: `سوابق آموزشی | ${profile.fullName}`,
      description: `دوره‌های آموزشی گذرانده‌شده ${profile.fullName} در مجتمع فنی تهران.`,
      inLanguage: "fa-IR",
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${baseUrl}/#person` },
      author: { "@id": `${baseUrl}/#person` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/education/#breadcrumb`,
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
          name: "سوابق آموزشی",
          item: `${baseUrl}/education`,
        },
      ],
    },
  ],
};
