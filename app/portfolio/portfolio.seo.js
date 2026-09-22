import projectsData from "@/data/projects.json";
import profile from "@/data/profile.json";
import socials from "@/data/socials.json";

// ---------------------------------------------------------
// تبدیل سال شمسی به میلادی (تقریبی)
// ---------------------------------------------------------
const jalaliToGregorian = (jalaliYear) => {
  const year = parseInt(jalaliYear, 10);
  return (year + 621).toString();
};

// اگر year مثل "1404-1405" باشد، سال شروع را برمی‌گرداند
const parseYear = (year) => {
  const firstYear = year.split("-")[0].trim();
  return jalaliToGregorian(firstYear);
};

// ---------------------------------------------------------
// 1. متادیتا
// ---------------------------------------------------------
export const metadata = {
  metadataBase: new URL("https://mkamran.ir"),

  title: `نمونه‌کارها | ${profile.fullName}`,
  description: `مجموعه پروژه‌های ${profile.fullName} شامل سامانه‌های مدیریتی، فروشگاه‌های اینترنتی و وب اپلیکیشن‌های فول‌استک با React.js، Next.js و Node.js.`,
  keywords: [
    "نمونه کار",
    "پروژه‌ها",
    "محمد کامران",
    "توسعه‌دهنده فول‌استک",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "سامانه مدیریتی",
    "فروشگاه اینترنتی",
    "وب اپلیکیشن",
    "پرتفولیو",
  ],
  authors: [{ name: profile.fullName, url: "https://mkamran.ir" }],
  creator: profile.fullName,
  publisher: profile.fullName,

  alternates: {
    canonical: "https://mkamran.ir/portfolio",
  },

  openGraph: {
    title: `نمونه‌کارها | ${profile.fullName}`,
    description: `مجموعه پروژه‌های ${profile.fullName} در حوزه فول‌استک، فرانت‌اند و سامانه‌های مدیریتی.`,
    url: "https://mkamran.ir/portfolio",
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
    title: `نمونه‌کارها | ${profile.fullName}`,
    description: `مجموعه پروژه‌های ${profile.fullName} در حوزه فول‌استک، فرانت‌اند و سامانه‌های مدیریتی.`,
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

// ساخت آیتم‌های ItemList برای هر پروژه
const projectItems = projectsData.map((project, index) => {
  const item = {
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      "@id": `${baseUrl}/portfolio/#${project.id}`,
      name: project.title,
      description: project.longDescription || project.description,
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      inLanguage: "fa-IR",
      image: `${baseUrl}${project.image}`,
      screenshot: project.gallery.map((g) => `${baseUrl}${g}`),
      author: { "@id": `${baseUrl}/#person` },
      programmingLanguage: project.tech,
      datePublished: parseYear(project.year),
    },
  };

  // اگر URL پروژه موجود بود، اضافه می‌کنیم
  if (project.url) {
    item.item.url = project.url;
  }

  // اگر مخزن کد موجود بود، اضافه می‌کنیم
  if (project.repo) {
    item.item.codeRepository = project.repo;
  }

  return item;
});

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
    },
    {
      "@type": "CollectionPage",
      "@id": `${baseUrl}/portfolio/#collectionpage`,
      url: `${baseUrl}/portfolio`,
      name: `نمونه‌کارها | ${profile.fullName}`,
      description: `مجموعه پروژه‌های ${profile.fullName} در حوزه فول‌استک، فرانت‌اند و سامانه‌های مدیریتی.`,
      inLanguage: "fa-IR",
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${baseUrl}/#person` },
      author: { "@id": `${baseUrl}/#person` },
      mainEntity: {
        "@type": "ItemList",
        "@id": `${baseUrl}/portfolio/#itemlist`,
        name: "لیست پروژه‌ها",
        numberOfItems: projectsData.length,
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        itemListElement: projectItems,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/portfolio/#breadcrumb`,
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
          name: "نمونه‌کارها",
          item: `${baseUrl}/portfolio`,
        },
      ],
    },
  ],
};
