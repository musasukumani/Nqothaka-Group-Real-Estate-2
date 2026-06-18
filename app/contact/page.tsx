import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { realEstateAgentJsonLd, seoConfig, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Nqothaka Group Real Estate | Johannesburg Property Agents",
  description:
    "Contact Nqothaka Group Real Estate to enquire about houses, apartments, and residential properties for sale in Johannesburg, Soweto, and surrounding Gauteng areas.",
  alternates: {
    canonical: siteUrl("/contact"),
  },
  openGraph: {
    title: "Contact Nqothaka Group Real Estate | Johannesburg Property Agents",
    description:
      "Contact Nqothaka Group Real Estate for Johannesburg, Soweto, and Gauteng property enquiries.",
    url: siteUrl("/contact"),
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-12 text-black sm:px-8">
      <JsonLd data={realEstateAgentJsonLd()} />
      <section className="mx-auto max-w-[980px]">
        <Link href="/" className="text-sm font-medium hover:underline">
          Back to homepage
        </Link>
        <h1 className="mt-8 text-[44px] font-medium leading-none tracking-[-0.04em] sm:text-[64px]">
          Contact Nqothaka Group Real Estate
        </h1>
        <div className="mt-7 grid gap-3 text-base leading-8 text-neutral-700">
          <p>90 Rivonia Road, Sandton, Johannesburg, 2196, South Africa</p>
          <p>
            <a href={`tel:${seoConfig.phone}`} className="hover:underline">
              +27 83 632 9886
            </a>
          </p>
          <p>
            <a href={`mailto:${seoConfig.email}`} className="hover:underline">
              {seoConfig.email}
            </a>
          </p>
        </div>
        <Link
          href="/#contact-us"
          className="mt-8 inline-flex rounded-lg bg-black px-6 py-4 text-sm font-medium text-white"
        >
          Book a Private Viewing in Johannesburg
        </Link>
      </section>
    </main>
  );
}
