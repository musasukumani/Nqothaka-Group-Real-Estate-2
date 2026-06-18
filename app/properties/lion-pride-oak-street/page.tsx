import {
  ArrowLeft,
  Bath,
  BedDouble,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Home,
  Images,
  KeyRound,
  MapPin,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, propertyJsonLd, siteUrl } from "@/lib/seo";
import BondCalculator from "../BondCalculator";
import PhotoGallery from "../blue-park-gardens/PhotoGallery";

const property = {
  title: "3 Bedroom House in Lion Pride",
  price: "R 1 557 565",
  address: "19 Lion Pride Lifestyle Estate, 19 Oak Street",
  bedrooms: "3 Bedrooms",
  bathrooms: "2 Bathrooms",
  status: "For Sale",
  type: "House",
  floorSize: "71 m² floor size",
  rates: "R 1 000",
  levies: "R 1 000",
  availability: "Contact for availability",
  description: [
    "A stylish estate with upmarket freestanding houses ideally located in North Riding, offering a complete lifestyle close to excellent schools, shopping centres, hospitals, and clinics.",
    "Baltimore is positioned as more than an ordinary estate. It offers 24-hour security, lifestyle convenience, and access to key Johannesburg areas including Sandton CBD, Fourways, Bryanston, Midrand, and the North West Province.",
    "The listing includes a 250 m² land size, 71 m² floor size, three bedrooms, two bathrooms, and one en-suite.",
  ],
  highlights: [
    "3 bedrooms",
    "2 bathrooms",
    "1 en-suite",
    "Pet friendly",
    "Built-in cupboards",
    "Kitchen and family TV room",
    "Patio and garden",
    "Access gate, alarm, security post, and electric fencing",
    "Estate gym access",
  ],
  nearby: [
    "Located in Lion Pride, Randburg",
    "Close to North Riding amenities",
    "Easy access to Sandton CBD, Fourways, Bryanston, and Midrand",
    "Listing number T5492198",
  ],
};

const gallery = [
  {
    src: "https://images.pp.co.za/listing/11846252/C4rZtBlE0g25bIVmSq3s50/1600/1066/contain/jpegorpng",
    alt: "Exterior of 3 bedroom house for sale in Lion Pride",
  },
  {
    src: "https://images.pp.co.za/listing/11846252/hNMDe8kWppHoRNxzQqHuN5/1024/682/contain/jpegorpng",
    alt: "Living space in Lion Pride secure estate home",
  },
  {
    src: "https://images.pp.co.za/listing/11846252/mEoXS0gI9LWbFeoeSLfN27/1024/682/contain/jpegorpng",
    alt: "Interior of 3 bedroom house in Lion Pride",
  },
  {
    src: "https://images.pp.co.za/listing/11846252/2SJZknyzP9hKDGnl6kcVJ5/600/450/contain/jpegorpng",
    alt: "Exterior view of Lion Pride family home",
  },
  {
    src: "https://images.pp.co.za/listing/11846252/Ec96FgAa8orMZymGnt5c12/600/450/contain/jpegorpng",
    alt: "Bedroom in Lion Pride 3 bedroom house",
  },
  {
    src: "https://images.pp.co.za/listing/11846252/O5sixPft7LoZaLIspD7xq0/600/450/contain/jpegorpng",
    alt: "Bathroom in Lion Pride 3 bedroom house",
  },
  {
    src: "https://images.pp.co.za/listing/11846252/ONHG5dAD6D7eXeY81bUAq1/600/450/contain/jpegorpng",
    alt: "Kitchen and living area in Lion Pride house",
  },
  {
    src: "https://images.pp.co.za/listing/11846252/oq7NljKRSJynAFDKm2Dwc7/600/450/contain/jpegorpng",
    alt: "Additional interior view of Lion Pride house",
  },
  {
    src: "https://images.pp.co.za/listing/11846252/zHcYdAWndTOkkQJTwLVeM7/600/450/contain/jpegorpng",
    alt: "Secure estate setting in Lion Pride Randburg",
  },
];

export const metadata: Metadata = {
  title: "3 Bedroom House for Sale in Lion Pride | Nqothaka Group",
  description:
    "3 bedroom House for sale in Lion Pride, Johannesburg or Gauteng. View price, bathrooms, features, location notes, bond estimate, gallery, and book a private viewing.",
  alternates: {
    canonical: siteUrl("/properties/lion-pride-oak-street"),
  },
  openGraph: {
    title: "3 Bedroom House for Sale in Lion Pride | Nqothaka Group",
    description:
      "View this 3 bedroom House for sale in Lion Pride with estate features, price, gallery, and bond estimate.",
    url: siteUrl("/properties/lion-pride-oak-street"),
    type: "website",
    images: [{ url: gallery[0].src, alt: gallery[0].alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Bedroom House for Sale in Lion Pride | Nqothaka Group",
    description:
      "View price, gallery, features, and bond estimate for this 3 bedroom House in Lion Pride.",
    images: [gallery[0].src],
  },
};

export default function LionPrideOakStreetPage() {
  const residenceSchema = propertyJsonLd("lion-pride-oak-street");
  const breadcrumbSchema = breadcrumbJsonLd("lion-pride-oak-street");

  return (
    <main className="min-h-screen bg-[#f8f6f1] text-black">
      {residenceSchema ? <JsonLd data={residenceSchema} /> : null}
      {breadcrumbSchema ? <JsonLd data={breadcrumbSchema} /> : null}
      <section className="mx-auto flex w-full max-w-[1180px] flex-col gap-8 px-5 pb-20 pt-6 sm:px-8 lg:px-10">
        <Link
          href="/#property-list"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition hover:-translate-y-0.5 hover:border-black/30 hover:shadow-sm"
        >
          <ArrowLeft size={16} />
          Back to properties
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-xl bg-white shadow-[0_28px_80px_rgb(0_0_0_/_0.10)]">
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                className="h-[420px] w-full object-cover sm:h-[560px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              {gallery.slice(1, 6).map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-xl bg-white shadow-[0_14px_34px_rgb(0_0_0_/_0.07)]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-32 w-full object-cover transition duration-500 hover:scale-105 sm:h-28"
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-xl bg-white p-6 shadow-[0_24px_70px_rgb(0_0_0_/_0.08)] sm:p-8 lg:sticky lg:top-6">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-black px-4 py-2 text-xs font-medium text-white">
                {property.status}
              </span>
              <span className="rounded-md bg-[#eee8dd] px-4 py-2 text-xs font-medium text-neutral-700">
                {property.type}
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-[#eee8dd] px-4 py-2 text-xs font-medium text-neutral-700">
                <Images size={14} />
                {gallery.length} Photos
              </span>
            </div>

            <h1 className="text-balance text-[44px] font-medium leading-none tracking-[-0.04em] sm:text-[58px]">
              {property.title}
            </h1>
            <p className="mt-5 flex items-center gap-2 text-sm text-neutral-600">
              <MapPin size={17} />
              {property.address}
            </p>

            <p className="mt-8 text-[34px] font-medium tracking-[-0.03em]">
              {property.price}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <DetailPill icon={<BedDouble size={18} />} label={property.bedrooms} />
              <DetailPill icon={<Bath size={18} />} label={property.bathrooms} />
              <DetailPill icon={<Home size={18} />} label={property.type} />
              <DetailPill icon={<Ruler size={18} />} label={property.floorSize} />
            </div>

            <div className="mt-8 grid gap-3 border-t border-neutral-200 pt-7 text-sm text-neutral-700">
              <InfoRow icon={<CircleDollarSign size={18} />} label="Rates" value={property.rates} />
              <InfoRow icon={<ShieldCheck size={18} />} label="Levies" value={property.levies} />
              <InfoRow icon={<KeyRound size={18} />} label="Availability" value={property.availability} />
              <InfoRow icon={<CalendarDays size={18} />} label="Viewing" value="By appointment" />
            </div>

            <a
              href="tel:+27836329886"
              className="mt-9 inline-flex w-full items-center justify-center rounded-lg bg-black px-6 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Book a private viewing in Johannesburg
            </a>
          </aside>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <section className="rounded-xl bg-white p-6 shadow-[0_22px_60px_rgb(0_0_0_/_0.07)] sm:p-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Property details
            </p>
            <h2 className="text-[34px] font-medium leading-tight tracking-[-0.035em] sm:text-[42px]">
              A 3-bedroom freestanding estate home in Lion Pride
            </h2>
            <div className="mt-7 space-y-4 text-sm leading-relaxed text-neutral-700">
              {property.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-black p-6 text-white shadow-[0_22px_60px_rgb(0_0_0_/_0.12)] sm:p-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
              At a glance
            </p>
            <div className="grid gap-5">
              <FeatureMetric label="Bedrooms" value="3" />
              <FeatureMetric label="Bathrooms" value="2" />
              <FeatureMetric label="Price" value={property.price} />
            </div>
          </section>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-xl bg-white p-6 shadow-[0_22px_60px_rgb(0_0_0_/_0.07)] sm:p-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Features
            </p>
            <h2 className="text-[30px] font-medium tracking-[-0.035em]">
              Included with the property
            </h2>
            <div className="mt-7 grid gap-3">
              {property.highlights.map((item) => (
                <ChecklistItem key={item}>{item}</ChecklistItem>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-white p-6 shadow-[0_22px_60px_rgb(0_0_0_/_0.07)] sm:p-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Area and viewing
            </p>
            <h2 className="text-[30px] font-medium tracking-[-0.035em]">
              Location notes
            </h2>
            <div className="mt-7 grid gap-3">
              {property.nearby.map((item) => (
                <ChecklistItem key={item}>{item}</ChecklistItem>
              ))}
            </div>
          </section>
        </div>

        <BondCalculator price={1557565} />

        <PhotoGallery images={gallery} title={property.title} />
      </section>
    </main>
  );
}

function DetailPill({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#eee8dd] px-4 py-4 text-sm font-medium text-neutral-800">
      {icon}
      {label}
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-[#eee8dd] px-4 py-4">
      <span className="flex items-center gap-3 text-neutral-600">
        {icon}
        {label}
      </span>
      <strong className="text-right text-sm font-medium text-black">{value}</strong>
    </div>
  );
}

function FeatureMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-end justify-between border-b border-white/15 pb-4">
      <span className="text-sm text-white/65">{label}</span>
      <strong className="text-2xl font-medium tracking-[-0.03em]">{value}</strong>
    </div>
  );
}

function ChecklistItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-[#eee8dd] px-4 py-4 text-sm leading-relaxed text-neutral-700">
      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-black" />
      <span>{children}</span>
    </div>
  );
}
