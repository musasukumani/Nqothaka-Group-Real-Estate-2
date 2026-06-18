export const seoConfig = {
  siteName: "Nqothaka Group Real Estate",
  // Update this when a custom domain is connected.
  siteUrl: "https://nqothakarealestate.vercel.app",
  defaultDescription:
    "Find houses, apartments, and secure estate homes for sale in Johannesburg, Soweto, and surrounding Gauteng areas with Nqothaka Group Real Estate.",
  businessAddress: {
    streetAddress: "90 Rivonia Road",
    addressLocality: "Sandton",
    addressRegion: "Gauteng",
    postalCode: "2196",
    addressCountry: "ZA",
  },
  email: "info@nqothakagroup.co.za",
  phone: "+27836329886",
  areaServed: [
    "Johannesburg",
    "Soweto",
    "Sandton",
    "Randburg",
    "North Riding",
    "Lion Pride",
    "Fourways",
    "Bryanston",
    "Midrand",
    "Johannesburg South",
    "Gauteng",
  ],
  brandAlternateNames: ["Ngothaka real estate", "Nqothaka Real Estate"],
  socialImage: "/new-hero.png",
};

export const siteUrl = (path = "/") => new URL(path, seoConfig.siteUrl).toString();

export const faqItems = [
  {
    question: "What types of properties do you sell?",
    answer:
      "We specialize in residential, commercial, and luxury properties, offering a wide range of options to suit every buyer's needs and preferences. We connect you with trusted lenders offering competitive mortgage options and financial advice. We arrange private showings for you to visit and evaluate properties before making a decision. Properties range across different price points, catering to various budgets and investment goals.",
  },
  {
    question: "How do I know if a property is a good investment?",
    answer:
      "We compare market trends, rental potential, location strength, property condition, and long-term growth indicators before presenting recommendations.",
  },
  {
    question: "Do I need to hire a real estate agent?",
    answer:
      "A dedicated agent helps you evaluate listings, negotiate terms, coordinate inspections, and move through closing with fewer surprises.",
  },
  {
    question: "What's the process for buying a property?",
    answer:
      "We start with your goals, arrange financing guidance, shortlist properties, schedule tours, support offers, and guide you through closing.",
  },
  {
    question: "Can I tour a property before purchasing?",
    answer:
      "Yes. We arrange private and virtual tours so you can evaluate the property, neighborhood, and fit before making a decision.",
  },
];

export const properties = [
  {
    slug: "blue-park-gardens",
    title: "Blue Park Gardens",
    bedrooms: 3,
    bathrooms: 1,
    propertyType: "House",
    area: "Blue Park Gardens",
    locality: "Johannesburg",
    price: 1200000,
    address: "123 Maple Street",
    image: "/premier-house-left.jpg",
    description:
      "3 bedroom House for sale in Blue Park Gardens, Johannesburg or Gauteng. View price, bathrooms, features, location notes, bond estimate, gallery, and book a private viewing.",
  },
  {
    slug: "lion-pride-oak-street",
    title: "3 Bedroom House in Lion Pride",
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "House",
    area: "Lion Pride",
    locality: "Randburg",
    price: 1557565,
    address: "19 Lion Pride Lifestyle Estate, 19 Oak Street",
    image:
      "https://images.pp.co.za/listing/11846252/C4rZtBlE0g25bIVmSq3s50/1600/1066/contain/jpegorpng",
    description:
      "3 bedroom House for sale in Lion Pride, Johannesburg or Gauteng. View price, bathrooms, features, location notes, bond estimate, gallery, and book a private viewing.",
  },
  {
    slug: "north-riding-elias-cassime",
    title: "3 Bedroom House in North Riding",
    bedrooms: 3,
    bathrooms: 2,
    propertyType: "House",
    area: "North Riding",
    locality: "Randburg",
    price: 1729000,
    address: "241 Elias Cassime Street",
    image:
      "https://images.pp.co.za/listing/11891677/q0jEKpxwPGh8ZkV36q92b7/1600/1066/contain/jpegorpng",
    description:
      "3 bedroom House for sale in North Riding, Johannesburg or Gauteng. View price, bathrooms, features, location notes, bond estimate, gallery, and book a private viewing.",
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function realEstateAgentJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: seoConfig.siteName,
    alternateName: seoConfig.brandAlternateNames,
    url: seoConfig.siteUrl,
    email: seoConfig.email,
    telephone: seoConfig.phone,
    address: {
      "@type": "PostalAddress",
      ...seoConfig.businessAddress,
    },
    areaServed: seoConfig.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function propertyJsonLd(slug: string) {
  const property = getProperty(slug);
  if (!property) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: property.title,
    description: property.description,
    url: siteUrl(`/properties/${property.slug}`),
    image: [siteUrl(property.image)],
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressLocality: property.locality,
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: property.slug === "blue-park-gardens" ? undefined : "71 m2",
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "ZAR",
      availability: "https://schema.org/InStock",
      url: siteUrl(`/properties/${property.slug}`),
    },
  };
}

export function breadcrumbJsonLd(slug: string) {
  const property = getProperty(slug);
  if (!property) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Property Listings Johannesburg",
        item: siteUrl("/#property-list"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: property.title,
        item: siteUrl(`/properties/${property.slug}`),
      },
    ],
  };
}
