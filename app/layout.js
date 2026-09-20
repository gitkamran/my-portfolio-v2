import NavBox from "@/components/nav-box/NavBox";
import NavMobileBox from "@/components/nav-box/NavMobileBox";
import "./globals.css";

export const metadata = {
  title: "Mohammad Kamran | Portfolio",
  description:
    "Personal Website And Portfolio Of Mohammad Kamran - وبسایت شخصی محمد کامران | برنامه نویس JavaScript, React js, Next js, Node js",
};

export const viewport = {
  themeColor: "#F5F5F5",
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
