import SkillsComp from "@/components/skills/Skills";
import { jsonLd } from "./skills.seo";
export { metadata } from "./skills.seo";

export default function Skills() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SkillsComp />
    </>
  );
}
