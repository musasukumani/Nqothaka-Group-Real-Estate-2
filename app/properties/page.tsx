import type { Metadata } from "next";
import Link from "next/link";
import { properties, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Houses and Property for Sale in Johannesburg | Nqothaka Group",
  description:
    "Browse property listings in Johannesburg, Soweto, Randburg, North Riding, Lion Pride, and nearby Gauteng areas. Find family homes, apartments, secure estate homes, and investment properties.",
  alternates: {
    canonical: siteUrl("/properties"),
  },
  openGraph: {
    title: "Houses and Property for Sale in Johannesburg | Nqothaka Group",
    description:
      "Browse property listings in Johannesburg, Soweto, Randburg, North Riding, Lion Pride, and nearby Gauteng areas.",
    url: siteUrl("/properties"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Houses and Property for Sale in Johannesburg | Nqothaka Group",
    description:
      "Browse Johannesburg and Gauteng property listings from Nqothaka Group Real Estate.",
  },
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-12 text-black sm:px-8">
      <section className="mx-auto grid max-w-[1180px] gap-8">
        <Link href="/" className="w-fit text-sm font-medium hover:underline">
          Back to homepage
        </Link>
        <div>
          <h1 className="max-w-3xl text-[44px] font-medium leading-none tracking-[-0.04em] sm:text-[64px]">
            Houses and Property for Sale in Johannesburg
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-700">
            Browse property listings in Johannesburg, Soweto, Randburg, North Riding, Lion Pride,
            and surrounding Gauteng areas. Compare prices, bedrooms, bathrooms, features, and bond
            repayment estimates before booking a viewing.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {properties.map((property) => (
            <Link
              key={property.slug}
              href={`/properties/${property.slug}`}
              className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:border-neutral-400"
            >
              <img
                src={property.image}
                alt={`${property.bedrooms} bedroom ${property.propertyType.toLowerCase()} for sale in ${property.area}`}
                className="mb-5 h-56 w-full rounded-lg object-cover"
              />
              <h2 className="text-2xl font-medium tracking-[-0.03em]">{property.title}</h2>
              <p className="mt-3 text-sm text-neutral-700">
                R {property.price.toLocaleString("en-ZA")} · {property.area}
              </p>
              <span className="mt-5 inline-block text-sm font-medium underline">
                View {property.bedrooms} Bedroom {property.propertyType} in {property.area}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
