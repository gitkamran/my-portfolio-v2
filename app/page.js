import MainPage from "@/components/main-page/MainPage";
import { jsonLd } from "./home.seo";
export { metadata } from "./home.seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainPage />
    </>
  );
}
