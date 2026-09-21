import experienceData from "@/data/experience.json";
import profile from "@/data/profile.json";
import socials from "@/data/socials.json";

// ---------------------------------------------------------
// تبدیل سال شمسی به میلادی (تقریبی)
// ---------------------------------------------------------
const jalaliToGregorian = (jalaliYear) => {
  const year = parseInt(jalaliYear, 10);
  // اختلاف تقریبی ۶۲۱ سال است
  return (year + 621).toString();
};

// استخراج بازه سال از period مثل "1405 - 1402"
const parsePeriod = (period) => {
  const parts = period.split(" - ").map((s) => s.trim());
  const [start, end] = parts;
  return {
    startDate: jalaliToGregorian(start),
    endDate: jalaliToGregorian(end),
  };
};

// ---------------------------------------------------------
// 1. متادیتا
// ---------------------------------------------------------
export const metadata = {
  metadataBase: new URL("https://mkamran.ir"),

  title: `سوابق شغلی | ${profile.fullName}`,
  description: `مروری بر سوابق شغلی ${profile.fullName}؛ از توسعه فول‌استک با React.js، Next.js و Node.js تا طراحی گرافیک و وب‌سایت‌های شرکتی.`,
  keywords: [
    "سوابق شغلی",
    "رزومه",
    "محمد کامران",
    "توسعه‌دهنده فول‌استک",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Docker",
    "طراح وب",
    "گرافیست",
    "کرج",
    "تهران",
  ],
  authors: [{ name: profile.fullName, url: "https://mkamran.ir" }],
  creator: profile.fullName,
  publisher: profile.fullName,

  alternates: {
    canonical: "https://mkamran.ir/experience",
  },

  openGraph: {
    title: `سوابق شغلی | ${profile.fullName}`,
    description: `مروری بر سوابق شغلی ${profile.fullName} در توسعه وب و طراحی گرافیک.`,
    url: "https://mkamran.ir/experience",
    siteName: profile.fullName,
    locale: "fa_IR",
    type: "profile",
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
    title: `سوابق شغلی | ${profile.fullName}`,
    description: `مروری بر سوابق شغلی ${profile.fullName} در توسعه وب و طراحی گرافیک.`,
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

// ساخت آرایه EmployeeRole برای هر سابقه شغلی
const employeeRoles = experienceData.map((exp) => {
  const { startDate, endDate } = parsePeriod(exp.period);

  return {
    "@type": "EmployeeRole",
    roleName: exp.role,
    startDate,
    endDate,
    description: `${exp.description} ${exp.highlights.join(" ")}`,
    // مهارت‌های به‌کاررفته در این نقش
    // از طریق about به Person ارجاع می‌دهیم
    worksFor: {
      "@type": "Organization",
      name: exp.company,
      address: {
        "@type": "PostalAddress",
        addressLocality: exp.location,
        addressCountry: "IR",
      },
    },
  };
});

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
      sameAs: socialUrls,
      // سابقه شغلی به‌عنوان آرایه‌ای از EmployeeRole
      hasOccupation: {
        "@type": "Occupation",
        name: profile.title,
        occupationLocation: {
          "@type": "City",
          name: "کرج",
        },
        skills: [...new Set(experienceData.flatMap((exp) => exp.tech))].join(
          ", ",
        ),
      },
      worksFor: employeeRoles,
    },
    {
      "@type": "ProfilePage",
      "@id": "https://mkamran.ir/experience/#profilepage",
      url: "https://mkamran.ir/experience",
      name: `سوابق شغلی | ${profile.fullName}`,
      description: `مروری بر سوابق شغلی ${profile.fullName} در توسعه وب و طراحی گرافیک.`,
      inLanguage: "fa-IR",
      isPartOf: { "@id": "https://mkamran.ir/#website" },
      mainEntity: { "@id": "https://mkamran.ir/#person" },
      about: { "@id": "https://mkamran.ir/#person" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mkamran.ir/experience/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "خانه",
          item: "https://mkamran.ir/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "سوابق شغلی",
          item: "https://mkamran.ir/experience",
        },
      ],
    },
  ],
};
