import HomePage from "@/components/HomePage";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd, realEstateAgentJsonLd, seoConfig, siteUrl } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property for Sale in Johannesburg | Nqothaka Group Real Estate",
  description:
    "Find houses, apartments, and secure estate homes for sale in Johannesburg, Soweto, and surrounding Gauteng areas. Browse 2 and 3 bedroom homes, view prices, estimate bond repayments, and book a viewing with Nqothaka Group Real Estate.",
  alternates: {
    canonical: siteUrl("/"),
  },
  openGraph: {
    title: "Property for Sale in Johannesburg | Nqothaka Group Real Estate",
    description:
      "Find houses, apartments, and secure estate homes for sale in Johannesburg, Soweto, and surrounding Gauteng areas. Browse 2 and 3 bedroom homes, view prices, estimate bond repayments, and book a viewing with Nqothaka Group Real Estate.",
    url: siteUrl("/"),
    type: "website",
    images: [
      {
        url: seoConfig.socialImage,
        width: 1200,
        height: 630,
        alt: "Open-plan Johannesburg home interior from Nqothaka Group Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Property for Sale in Johannesburg | Nqothaka Group Real Estate",
    description:
      "Find houses, apartments, and secure estate homes for sale in Johannesburg, Soweto, and surrounding Gauteng areas with Nqothaka Group Real Estate.",
    images: [seoConfig.socialImage],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={realEstateAgentJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <HomePage />
    </>
  );
}
