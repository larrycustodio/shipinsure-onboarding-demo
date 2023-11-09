import Image from "next/image";
import Heading from "@/components/heading";

export default function StoreProfile() {
  return (
    <section>
      <Heading
        heading="Tell us a bit about your store"
        subheading="We’d love to hear more about your Shopify experience. On average, how many orders do you typically receive each month?"
      />
    </section>
  );
}
