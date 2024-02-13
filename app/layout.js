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
      <body>{children}</body>
    </html>
  );
}
