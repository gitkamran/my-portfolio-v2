import ExperienceComp from "@/components/experience/ExperienceComp";
import { jsonLd } from "./experience.seo";

export { metadata } from "./experience.seo";

export default function Experience() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExperienceComp />
    </>
  );
}
