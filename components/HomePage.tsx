"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  ChevronDown,
  Globe2,
  Menu,
  Search,
  X,
} from "lucide-react";
import { faqItems, seoConfig } from "@/lib/seo";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";

const images = {
  logo: "/nqothaka-group-logo-transparent-cropped.png",
  hero: "/new-hero.png",
  serviceLarge:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
  serviceSmall:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=90",
  preview:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=85",
  homeOne:
    "/premier-house-left.jpg",
  homeTwo:
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=90",
  homeThree:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=90",
  client:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=90",
  faq:
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=600&q=90",
  cta:
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90",
  avatarOne:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
  avatarTwo:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  avatarThree:
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=120&q=80",
  avatarFour:
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80",
};

const navLinks = ["Home", "About Us", "Property List", "Contact Us"];

const properties = [
  {
    image: images.homeOne,
    title: "Blue Park Gardens",
    titlePrefix: "3 Bedroom House in",
    titlePrefixHref: "/properties/lion-pride-oak-street",
    price: "R 1 200 000",
    address: "123 Maple Street",
    bedrooms: "3 Bedrooms",
    bathrooms: "1 Bathroom",
    href: "/properties/blue-park-gardens",
  },
  {
    image:
      "https://images.pp.co.za/listing/11846252/C4rZtBlE0g25bIVmSq3s50/1600/1066/contain/jpegorpng",
    title: "3 Bedroom House in Lion Pride",
    price: "R 1 557 565",
    address: "19 Oak Street, Lion Pride",
    bedrooms: "3 Bedrooms",
    bathrooms: "2 Bathrooms",
    href: "/properties/lion-pride-oak-street",
  },
  {
    image:
      "https://images.pp.co.za/listing/11891677/q0jEKpxwPGh8ZkV36q92b7/1600/1066/contain/jpegorpng",
    title: "3 Bedroom House in North Riding",
    price: "R 1 729 000",
    address: "241 Elias Cassime Street",
    bedrooms: "3 Bedrooms",
    bathrooms: "2 Bathrooms",
    href: "/properties/north-riding-elias-cassime",
  },
];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1340px] px-5 sm:px-8 lg:px-9", className)}>
      {children}
    </div>
  );
}

function Button({
  children,
  variant = "dark",
  className,
}: {
  children: React.ReactNode;
  variant?: "dark" | "light" | "green" | "outline";
  className?: string;
}) {
  return (
    <button
      className={cn(
        "interactive-button inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-medium",
        variant === "dark" && "bg-black text-white hover:bg-neutral-800",
        variant === "light" && "bg-white text-black hover:bg-neutral-100",
        variant === "green" && "bg-[var(--accent)] text-black hover:bg-[var(--accent-dark)]",
        variant === "outline" && "border border-neutral-200 bg-white text-black hover:bg-neutral-50",
        className,
      )}
    >
      {children}
    </button>
  );
}

function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "interactive-pill inline-flex h-9 items-center rounded-lg bg-white px-5 text-xs font-medium text-black shadow-[0_10px_28px_rgb(0_0_0_/_0.08)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

function AvatarCluster({ small = false }: { small?: boolean }) {
  const avatars = [images.avatarOne, images.avatarTwo, images.avatarThree, images.avatarFour];

  return (
    <div className="flex items-center">
      {avatars.map((avatar, index) => (
        <img
          key={avatar}
          src={avatar}
          alt=""
          className={cn(
            "rounded-full border-2 border-white object-cover",
            index > 0 && "-ml-3",
            small ? "h-8 w-8" : "h-10 w-10",
          )}
        />
      ))}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition duration-300",
        scrolled && "border-b border-neutral-200/45 bg-white/65 shadow-[0_16px_44px_rgb(0_0_0_/_0.08)] backdrop-blur-xl",
      )}
    >
      <SectionContainer
        className={cn(
          "flex h-[88px] items-center justify-between transition-[height,color] duration-300 ease-[var(--ease-out)]",
          scrolled && "h-[74px]",
          scrolled ? "text-black" : "text-white",
        )}
      >
        <a
          href="#"
          className="inline-flex h-[75px] w-[132px] shrink-0 items-center justify-center drop-shadow-[0_3px_10px_rgb(255_255_255_/_0.72)] sm:w-[180px]"
          aria-label="Nqothaka Group Real Estate"
        >
          <img
            src={images.logo}
            alt="Nqothaka Group Real Estate"
            className="h-[64px] w-full object-contain sm:h-[75px]"
          />
        </a>

        <nav
          className={cn(
            "hidden items-center gap-2 rounded-lg p-1 text-xs backdrop-blur-md transition duration-300 md:flex",
            scrolled ? "bg-neutral-100" : "bg-white/10",
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "#" : `#${link.toLowerCase().replaceAll(" ", "-")}`}
              className={cn(
                "nav-link rounded-md px-5 py-3 transition",
                scrolled ? "hover:bg-white" : "hover:bg-white/15",
                link === "Home" && (scrolled ? "bg-black !text-white hover:bg-black" : "bg-white !text-black hover:bg-white"),
              )}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 text-xs md:flex">
          <span className="inline-flex items-center gap-2">
            <Globe2 size={16} strokeWidth={1.7} />
            Eng
          </span>
          <Button variant="green" className="h-11 px-7 text-xs shadow-none">
            Sign Up
          </Button>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          className="interactive-button flex h-11 w-11 items-center justify-center rounded-full bg-white text-black md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={19} />
        </button>
      </SectionContainer>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ease-[var(--ease-out)] md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div
          className={cn(
            "ml-auto h-full w-[82%] max-w-sm bg-white p-6 text-black shadow-[-24px_0_70px_rgb(0_0_0_/_0.18)] transition-transform duration-300 ease-[var(--ease-drawer)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <img
              src={images.logo}
              alt="Nqothaka Group Real Estate"
              className="h-[76px] max-w-full object-contain sm:h-[85px]"
            />
            <button
              aria-label="Close menu"
              className="interactive-button flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={link === "Home" ? "#" : `#${link.toLowerCase().replaceAll(" ", "-")}`}
                className="rounded-lg border border-neutral-200 px-4 py-3 text-sm transition-[background-color,transform,border-color] duration-200 ease-[var(--ease-out)] active:scale-[0.98]"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <Button variant="green" className="mt-4 w-full">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function SearchPanel() {
  const fields = [
    ["Looking for", "Enter type"],
    ["Price", "Price"],
    ["Locations", "Location"],
    ["Number of rooms", "2 Bed rooms"],
  ];

  return (
    <div data-reveal className="relative z-20 mx-auto -mt-[82px] w-[calc(100%-24px)] max-w-[1288px] rounded-xl bg-white p-5 shadow-[0_20px_54px_rgb(0_0_0_/_0.14)] sm:w-[calc(100%-40px)] sm:p-8">
      <h2 className="mb-5 text-2xl font-semibold tracking-[-0.015em] sm:text-[28px]">Find the best place</h2>
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">
        {fields.map(([label, placeholder]) => (
          <label key={label} className="block">
            <span className="mb-2 block text-xs font-semibold">{label}</span>
            <span className="select-shell flex h-12 items-center justify-between rounded-lg bg-[#d8d0c3] px-4 text-sm text-neutral-700">
              {placeholder}
              {label !== "Looking for" && <ChevronDown size={15} strokeWidth={1.7} />}
            </span>
          </label>
        ))}
        <Button variant="dark" className="h-12 px-7 text-xs lg:mb-0">
          <Search size={14} />
          Search Properties
        </Button>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
        <span className="font-medium">Filter:</span>
        {["City", "House", "Residential", "Apartment"].map((filter) => (
          <button
            key={filter}
            className="interactive-chip h-9 rounded-lg border border-neutral-200 px-5 text-xs text-neutral-700"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative pb-24 sm:pb-[118px]">
      <div className="relative min-h-[660px] overflow-hidden">
        <img src={images.hero} alt="Open-plan kitchen and living area in Johannesburg property for sale" className="hero-image absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/42 via-black/16 to-black/68" />
        <Header />

        <SectionContainer className="relative z-10 flex min-h-[660px] flex-col justify-end pb-[146px] pt-24 text-white">
          <div className="animate-rise mb-5 flex gap-2">
            {["House", "Apartment", "Residential"].map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
          <div className="grid min-w-0 items-end gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <h1 className="animate-rise w-full max-w-full text-[34px] font-light leading-[1.04] tracking-[-0.02em] [text-wrap:normal] sm:max-w-[820px] sm:text-balance sm:text-[70px] sm:leading-[0.98] sm:tracking-[-0.035em] lg:text-[76px]">
              Property for Sale in Johannesburg, <span className="block sm:inline">Gauteng</span>
            </h1>
            <p className="animate-rise animation-delay-2 w-full max-w-full pb-2 text-sm font-medium leading-6 text-white [text-wrap:normal] sm:max-w-[470px] sm:text-pretty sm:text-base sm:leading-7">
              Browse houses, apartments, and secure estate homes in Johannesburg, Soweto, Randburg, North Riding, Lion Pride, Sandton, Fourways, Bryanston, Midrand, and surrounding Gauteng areas.
            </p>
          </div>
        </SectionContainer>
      </div>
      <SearchPanel />
    </section>
  );
}

function FeaturedHomesSection() {
  return (
    <section id="property-list" className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <div data-reveal className="mb-9 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-balance text-[42px] font-medium leading-none tracking-[-0.035em] sm:text-[56px]">
              Explore our houses
            </h2>
            <p className="mt-6 max-w-[680px] text-sm leading-relaxed text-neutral-700">
              Each listing offers unique features, exceptional quality, and prime locations, ensuring an exclusive living experience.
            </p>
          </div>
          <Link
            href="/properties"
            className="interactive-button inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-black px-6 text-xs font-medium !text-white hover:bg-neutral-800"
          >
            See All Properties <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-9 lg:grid-cols-3">
          {properties.map((property, index) => (
            <PropertyCard key={property.address} index={index} {...property} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

function PropertyCard({
  image,
  title,
  titlePrefix,
  titlePrefixHref,
  price,
  address,
  bedrooms,
  bathrooms,
  href,
  index,
}: {
  image: string;
  title: string;
  titlePrefix?: string;
  titlePrefixHref?: string;
  price: string;
  address: string;
  bedrooms: string;
  bathrooms: string;
  href?: string;
  index: number;
}) {
  const titleContent = titlePrefix && titlePrefixHref ? (
    <>
      <Link href={titlePrefixHref} className="hover:underline">
        {titlePrefix}
      </Link>{" "}
      <Link href={href ?? "#"} className="hover:underline">
        {title}
      </Link>
    </>
  ) : (
    title
  );

  const cardContent = (
    <>
      <div className="relative mb-5 h-[300px] overflow-hidden rounded-xl sm:h-[360px] lg:h-[390px]">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-105" />
        <span className="absolute left-5 top-5 rounded-md bg-white px-5 py-2 text-xs font-medium">For Sale</span>
      </div>
      <div className="mb-4 flex items-center gap-8 text-sm text-neutral-700">
        <span className="inline-flex items-center gap-2">
          <BedDouble size={17} strokeWidth={1.7} /> {bedrooms}
        </span>
        <span className="inline-flex items-center gap-2">
          <Bath size={16} strokeWidth={1.7} /> {bathrooms}
        </span>
      </div>
      <h3 className="mb-4 text-[22px] font-medium tracking-[-0.025em]">{titleContent}</h3>
      <p className="text-sm text-neutral-700">
        <strong className="text-black">{price}</strong>
        <span className="mx-2">.</span>
        {address}
      </p>
    </>
  );

  if (href && !titlePrefixHref) {
    const isExternal = href.startsWith("http");
    const linkProps = isExternal
      ? { target: "_blank", rel: "noreferrer" }
      : {};

    return (
      <Link
        href={href}
        {...linkProps}
        data-reveal
        data-reveal-delay={String(index)}
        className="interactive-property group block focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
        aria-label={`View details for ${title}`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <article data-reveal data-reveal-delay={String(index)} className="interactive-property group">
      {cardContent}
      {href ? (
        <Link href={href} className="mt-4 inline-block text-sm font-medium underline">
          View {titlePrefix ? `${titlePrefix} ${title}` : title}
        </Link>
      ) : null}
    </article>
  );
}

function LocalSeoSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-xl bg-neutral-50 p-6 sm:p-8">
            <h2 className="text-[30px] font-medium leading-tight tracking-[-0.035em]">
              Find Houses and Property for Sale in Johannesburg
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-700">
              Nqothaka Group Real Estate helps buyers find houses, apartments, and residential
              properties for sale across Johannesburg and Gauteng. Whether you are a first-time
              buyer, a growing family, or an investor, you can explore listings by price,
              location, bedrooms, bathrooms, and lifestyle needs. Popular areas include Sandton,
              Soweto, Randburg, North Riding, Lion Pride, Fourways, Bryanston, Midrand, and
              Johannesburg South.
            </p>
            <Link href="/properties" className="mt-6 inline-block text-sm font-medium underline">
              View houses for sale in Johannesburg
            </Link>
          </article>

          <article className="rounded-xl bg-neutral-50 p-6 sm:p-8">
            <h2 className="text-[30px] font-medium leading-tight tracking-[-0.035em]">
              Looking for a House for Sale in Soweto?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-700">
              If you are searching for a house for sale in Soweto, Nqothaka Group Real Estate
              can help you compare available homes, prices, locations, and bond repayment
              estimates. Soweto is popular with first-time buyers, families, and investors
              looking for accessible residential property near Johannesburg.
            </p>
            <Link href="/soweto" className="mt-6 inline-block text-sm font-medium underline">
              Find a house for sale in Soweto
            </Link>
          </article>

          <article className="rounded-xl bg-neutral-50 p-6 sm:p-8">
            <h2 className="text-[30px] font-medium leading-tight tracking-[-0.035em]">
              Helpful for First-Time Buyers
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-700">
              Compare bond repayment estimates, plan for a deposit, understand transfer and bond
              registration costs, book private viewings, and compare location, security, schools,
              shopping centres, and transport routes before you choose a home.
            </p>
            <Link href="/#contact-us" className="mt-6 inline-block text-sm font-medium underline">
              Book a Private Viewing in Johannesburg
            </Link>
          </article>
        </div>
      </SectionContainer>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <div data-reveal className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-[520px] text-balance text-[42px] font-medium leading-[0.98] tracking-[-0.035em] sm:text-[56px]">
            What our clients say about us
          </h2>
          <div className="flex items-center gap-4">
            <AvatarCluster small />
            <p className="max-w-[175px] text-lg font-medium leading-tight">
              More than <strong>500+</strong> Client Reviews
            </p>
          </div>
        </div>

        <div data-reveal className="grid items-center gap-6 lg:grid-cols-[48px_390px_1fr_48px]">
          <button aria-label="Previous review" className="interactive-button hidden h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:border-black hover:text-black lg:flex">
            <ArrowLeft size={17} />
          </button>
          <div className="image-card overflow-hidden rounded-xl">
            <img src={images.client} alt="Smiling client" className="h-[410px] w-full object-cover object-top" />
          </div>
          <TestimonialCard />
          <button aria-label="Next review" className="interactive-button hidden h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:border-black hover:text-black lg:flex">
            <ArrowRight size={17} />
          </button>
        </div>

        <div className="mt-9 flex justify-center gap-2">
          <span className="h-2 w-5 rounded-full bg-[var(--accent)]" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
        </div>
      </SectionContainer>
    </section>
  );
}

function TestimonialCard() {
  return (
    <article className="interactive-card rounded-xl bg-neutral-100 px-8 py-8 sm:px-12 sm:py-10 lg:min-h-[365px]">
      <div className="mb-5 text-[70px] font-semibold leading-none text-[var(--accent-dark)]">"</div>
      <p className="mb-8 max-w-[610px] text-pretty text-[25px] leading-[1.34] tracking-[-0.02em] sm:text-[30px]">
        Working with this team was a pleasure. They understood our vision and helped us find a property that exceeded our expectations. We couldn't have done it without them!
      </p>
      <p className="font-semibold">Sajiburr Rahman</p>
      <p className="mt-1 text-sm font-medium">UI UX Designer</p>
    </article>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <div data-reveal className="mb-14 grid gap-8 lg:grid-cols-[1fr_560px] lg:items-start">
          <h2 className="max-w-[520px] text-balance text-[42px] font-medium leading-[0.98] tracking-[-0.035em] sm:text-[56px]">
            Frequently asked questions
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            Our experts guide you in making informed investment decisions based on market insights. We offer residential, commercial, and luxury properties tailored to different preferences and budgets.
          </p>
        </div>

        <div className="grid gap-4">
          {faqItems.map((faq, index) => (
            <FAQAccordionItem
              key={faq.question}
              faq={faq}
              open={open === index}
              onClick={() => setOpen(open === index ? -1 : index)}
              first={index === 0}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

function FAQAccordionItem({
  faq,
  open,
  onClick,
  first,
}: {
  faq: { question: string; answer: string };
  open: boolean;
  onClick: () => void;
  first: boolean;
}) {
  return (
    <article className={cn("overflow-hidden rounded-lg border bg-white transition-[border-color,box-shadow,transform] duration-300 ease-[var(--ease-out)]", open ? "border-neutral-300 shadow-[0_18px_50px_rgb(0_0_0_/_0.07)]" : "border-neutral-200")}>
      <button className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-[22px] font-medium tracking-[-0.02em] transition-colors hover:bg-neutral-50" onClick={onClick}>
        {faq.question}
        <ChevronDown className={cn("shrink-0 transition-transform duration-300 ease-[var(--ease-out)]", open && "rotate-180")} size={18} />
      </button>
      <div className={cn("grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out)]", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className={cn("grid gap-6 px-5 pb-6 transition-[opacity,transform] duration-300 ease-[var(--ease-out)] lg:grid-cols-[1fr_250px] lg:items-center", open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0")}>
            <p className="text-sm leading-relaxed text-neutral-700">{faq.answer}</p>
            {first && (
              <img src={images.faq} alt="Light filled living room interior" className="h-[120px] w-full rounded-lg object-cover lg:h-[136px]" />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ContactCTA() {
  return (
    <section id="contact-us" className="bg-white pt-16">
      <div className="relative min-h-[350px] overflow-hidden">
        <img src={images.cta} alt="Modern home balcony and exterior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/48" />
        <div data-reveal className="relative z-10 mx-auto flex min-h-[350px] max-w-[850px] flex-col items-center justify-center px-5 text-center text-white">
          <h2 className="text-balance text-[42px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[58px]">
            Book a Private Viewing in Johannesburg
          </h2>
          <p className="mt-5 text-sm">Explore a curated selection of properties that align with your vision and goals.</p>
          <Button variant="light" className="mt-8 text-xs">
            Get Started <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
}

function WhatsAppContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const surname = String(formData.get("surname") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const whatsapp = String(formData.get("whatsapp") ?? "").trim();

    const message = [
      "Hello Nqothaka Group, I would like you to contact me.",
      "",
      `Name: ${name}`,
      `Surname: ${surname}`,
      `Email: ${email}`,
      `WhatsApp number: ${whatsapp}`,
    ].join("\n");

    window.open(
      `https://wa.me/${seoConfig.phone.replace("+", "")}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-5 shadow-[0_22px_60px_rgb(0_0_0_/_0.07)] sm:p-6"
    >
      <div>
        <h3 className="text-[26px] font-medium tracking-[-0.035em]">Send your details</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">
          Fill in your details and WhatsApp will open with a ready-to-send message.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input
            required
            name="name"
            autoComplete="given-name"
            className="h-12 rounded-lg border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Surname
          <input
            required
            name="surname"
            autoComplete="family-name"
            className="h-12 rounded-lg border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="Your surname"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium">
        Email
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="h-12 rounded-lg border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-[var(--accent)]"
          placeholder="you@example.com"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium">
        WhatsApp number
        <input
          required
          type="tel"
          name="whatsapp"
          autoComplete="tel"
          className="h-12 rounded-lg border border-neutral-200 bg-white px-4 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-[var(--accent)]"
          placeholder="+27 83 000 0000"
        />
      </label>

      <button
        type="submit"
        className="interactive-button mt-2 inline-flex h-12 items-center justify-center rounded-lg bg-black px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}

function Footer() {
  const left = [
    ["Houses for Sale in Johannesburg", "/properties"],
    ["House for Sale in Soweto", "/soweto"],
    ["Property for Sale in Randburg", "/properties"],
  ];
  const right = [
    ["Houses for Sale in North Riding", "/properties/north-riding-elias-cassime"],
    ["Contact Johannesburg Estate Agents", "/contact"],
  ];

  return (
    <footer className="bg-white">
      <SectionContainer className="grid gap-8 border-b border-neutral-200 py-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div>
          <h2 className="max-w-[670px] text-balance text-[42px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[58px]">
            Contact Us
          </h2>
          <address className="mt-8 max-w-sm not-italic text-base leading-relaxed">
            <p>90 Rivonia Road, Sandton, Johannesburg, 2196.</p>
            <p className="mt-4">+27 83 632 9886</p>
            <a className="mt-4 block hover:underline" href="mailto:info@nqothakagroup.co.za">
              info@nqothakagroup.co.za
            </a>
          </address>
        </div>
        <WhatsAppContactForm />
      </SectionContainer>
      <SectionContainer className="flex flex-col gap-6 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-7">
          {left.map(([label, href]) => (
            <Link key={label} href={href} className="hover:underline">
              {label}
            </Link>
          ))}
        </div>
        <a href="#" aria-label="Nqothaka Group Real Estate">
          <img
            src={images.logo}
            alt="Nqothaka Group Real Estate"
            className="h-[85px] max-w-full object-contain"
          />
        </a>
        <div className="flex flex-wrap gap-7">
          {right.map(([label, href]) => (
            <Link key={label} href={href} className="hover:underline">
              {label}
            </Link>
          ))}
        </div>
      </SectionContainer>
    </footer>
  );
}

export default function HomePage() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.revealed = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <HeroSection />
      <FeaturedHomesSection />
      <LocalSeoSection />
      <ReviewsSection />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
