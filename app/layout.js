import NavBox from "@/components/nav-box/NavBox";
import NavMobileBox from "@/components/nav-box/NavMobileBox";
import "./globals.css";

export const viewport = {
  themeColor: "#e0e7ff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className="w-full overflow-hidden bg-indigo-50">
        <NavBox />
        <NavMobileBox />
        <main className="h-screen overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
