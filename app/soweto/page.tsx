import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "House for Sale in Soweto | Nqothaka Group Real Estate",
  description:
    "Looking for a house for sale in Soweto? Browse affordable houses, family homes, and first-time buyer properties in Soweto and nearby Johannesburg areas with Nqothaka Group Real Estate.",
  alternates: {
    canonical: siteUrl("/soweto"),
  },
  openGraph: {
    title: "House for Sale in Soweto | Nqothaka Group Real Estate",
    description:
      "Browse affordable houses, family homes, and first-time buyer properties in Soweto and nearby Johannesburg areas.",
    url: siteUrl("/soweto"),
    type: "website",
  },
};

export default function SowetoPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-12 text-black sm:px-8">
      <section className="mx-auto max-w-[980px]">
        <Link href="/" className="text-sm font-medium hover:underline">
          Back to homepage
        </Link>
        <h1 className="mt-8 text-[44px] font-medium leading-none tracking-[-0.04em] sm:text-[64px]">
          House for Sale in Soweto
        </h1>
        <div className="mt-7 grid gap-5 text-base leading-8 text-neutral-700">
          <p>
            If you are searching for a house for sale in Soweto, Nqothaka Group Real Estate can
            help you compare available homes, prices, locations, and bond repayment estimates.
            Soweto is popular with first-time buyers, families, and investors looking for
            accessible residential property near Johannesburg.
          </p>
          <p>
            Speak to Nqothaka Group Real Estate about affordable houses for sale in Soweto,
            family homes, 2 bedroom and 3 bedroom options, and private viewings in nearby
            Johannesburg areas.
          </p>
        </div>
        <Link
          href="/#contact-us"
          className="mt-8 inline-flex rounded-lg bg-black px-6 py-4 text-sm font-medium text-white"
        >
          Enquire About Houses for Sale in Soweto
        </Link>
      </section>
    </main>
  );
}
