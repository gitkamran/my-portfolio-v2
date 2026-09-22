import EducationComp from "@/components/education/Education";
import { jsonLd } from "./education.seo";

export { metadata } from "./education.seo";
export default function Education() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EducationComp />
    </>
  );
}
