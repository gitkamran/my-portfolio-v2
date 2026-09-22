import ContactComp from "@/components/conatct/Contact";
import { jsonLd } from "./contact.seo";

export { metadata } from "./contact.seo";
export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactComp />
    </>
  );
}
