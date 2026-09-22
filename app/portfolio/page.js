import PortfolioComp from "@/components/portfolio/Portfolio";
import { jsonLd } from "./portfolio.seo";

export { metadata } from "./portfolio.seo";
export default function Portfolio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioComp />
    </>
  );
}
