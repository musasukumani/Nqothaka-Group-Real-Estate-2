"use client";

import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  ChevronDown,
  ChevronUp,
  Globe2,
  Menu,
  Play,
  Search,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const images = {
  logo: "/nqothaka-group-logo-transparent-cropped.png",
  hero:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90",
  serviceLarge:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
  serviceSmall:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=90",
  preview:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=85",
  homeOne:
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=90",
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

const stats = [
  ["100%", "Satisfaction Clients"],
  ["500+", "Property sells"],
  ["150+", "Countries & Cities"],
  ["2.00+", "Positive reviews"],
];

const properties = [
  {
    image: images.homeOne,
    price: "$3,56798.00",
    address: "123 Maple Street, New York",
  },
  {
    image: images.homeTwo,
    price: "$2,49098.99",
    address: "789 Forest Lane, Denver CO",
  },
  {
    image: images.homeThree,
    price: "$4,56745.00",
    address: "123 Serenity Drive, Austin, TX",
  },
];

const faqs = [
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
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition duration-300 hover:-translate-y-0.5 active:translate-y-px",
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
        "inline-flex h-9 items-center rounded-full bg-white px-5 text-xs font-medium text-black shadow-[0_10px_28px_rgb(0_0_0_/_0.08)]",
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
        scrolled && "border-b border-neutral-200/80 bg-white/92 shadow-sm backdrop-blur-xl",
      )}
    >
      <SectionContainer
        className={cn(
          "flex h-[88px] items-center justify-between transition-colors duration-300",
          scrolled ? "text-black" : "text-white",
        )}
      >
        <a
          href="#"
          className="inline-flex h-[75px] w-[180px] items-center justify-center drop-shadow-[0_3px_10px_rgb(255_255_255_/_0.72)]"
          aria-label="Nqothaka Group Real Estate"
        >
          <img
            src={images.logo}
            alt="Nqothaka Group Real Estate"
            className="h-[75px] max-w-none object-contain"
          />
        </a>

        <nav
          className={cn(
            "hidden items-center gap-2 rounded-full p-1 text-xs backdrop-blur-md transition duration-300 md:flex",
            scrolled ? "bg-neutral-100" : "bg-white/10",
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "#" : `#${link.toLowerCase().replaceAll(" ", "-")}`}
              className={cn(
                "rounded-full px-5 py-3 transition",
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
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={19} />
        </button>
      </SectionContainer>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 transition md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div
          className={cn(
            "ml-auto h-full w-[82%] max-w-sm bg-white p-6 text-black transition duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <img
              src={images.logo}
              alt="Nqothaka Group Real Estate"
              className="h-[85px] max-w-none object-contain"
            />
            <button
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200"
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
                className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm"
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
    <div className="animate-soft-scale relative z-20 mx-auto -mt-[82px] w-[calc(100%-40px)] max-w-[1288px] rounded-2xl bg-white p-5 shadow-[0_20px_54px_rgb(0_0_0_/_0.14)] sm:p-8">
      <h2 className="mb-5 text-2xl font-semibold tracking-[-0.015em] sm:text-[28px]">Find the best place</h2>
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">
        {fields.map(([label, placeholder]) => (
          <label key={label} className="block">
            <span className="mb-2 block text-xs font-semibold">{label}</span>
            <span className="flex h-12 items-center justify-between rounded-xl bg-[#f3f3f3] px-4 text-sm text-neutral-700">
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
            className="h-9 rounded-full border border-neutral-200 px-5 text-xs text-neutral-700 transition hover:border-neutral-400 hover:text-black"
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
        <img src={images.hero} alt="Modern property surrounded by trees" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/42 via-black/16 to-black/68" />
        <Header />

        <SectionContainer className="relative z-10 flex min-h-[660px] flex-col justify-end pb-[146px] pt-24 text-white">
          <div className="animate-rise mb-5 flex gap-2">
            {["House", "Apartment", "Residential"].map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
          <div className="grid items-end gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <h1 className="animate-rise max-w-[820px] text-balance text-[46px] font-light leading-[0.98] tracking-[-0.035em] sm:text-[70px] lg:text-[76px]">
              Build Your Future, One Property at a Time.
            </h1>
            <p className="animate-rise max-w-[470px] text-pretty pb-2 text-base font-medium leading-7 text-white">
              Own your world, one property at a time. Discover homes, apartments, and investment properties designed around your lifestyle and goals.
            </p>
          </div>
        </SectionContainer>
      </div>
      <SearchPanel />
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="about-us" className="bg-white pb-20 pt-2 sm:pb-24">
      <SectionContainer>
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_350px] lg:items-start">
          <h2 className="max-w-[640px] text-balance text-[42px] font-medium leading-[0.98] tracking-[-0.035em] sm:text-[56px]">
            Your primary home might begin to feel left out.
          </h2>
          <div className="flex items-center gap-4 justify-self-start lg:justify-self-end">
            <div className="relative h-[74px] w-[124px] overflow-hidden rounded-full">
              <img src={images.preview} alt="Preview of a landscaped property" className="h-full w-full object-cover" />
              <span className="absolute inset-0 m-auto flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                <Play size={14} fill="currentColor" />
              </span>
            </div>
            <p className="max-w-[260px] text-sm leading-snug text-neutral-700">
              Each listing offers unique features, exceptional quality, and prime locations
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.55fr_0.55fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-[22px] sm:min-h-[470px]">
            <img src={images.serviceLarge} alt="Luxury family home exterior" className="h-full min-h-[360px] w-full object-cover transition duration-700 hover:scale-105 sm:min-h-[470px]" />
            <div className="absolute bottom-6 right-6 rounded-full bg-white p-2 shadow-lg">
              <div className="flex gap-1">
                {[images.preview, images.homeTwo, images.homeThree].map((image) => (
                  <img key={image} src={image} alt="" className="h-11 w-11 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-neutral-100 px-8 py-12 text-center lg:min-h-[300px]">
            <h3 className="mx-auto mb-5 max-w-[240px] text-balance text-[28px] font-medium leading-[0.98] tracking-[-0.025em]">
              Big things can happen in small spaces.
            </h3>
            <p className="mx-auto mb-8 max-w-[230px] text-sm leading-relaxed text-neutral-700">
              With thoughtful design and smart organization, you can maximize every inch, making room for creativity.
            </p>
            <Button variant="outline" className="h-10 px-6 text-xs">
              Details
            </Button>
          </div>

          <div className="text-center">
            <div className="mb-6 overflow-hidden rounded-[20px]">
              <img src={images.serviceSmall} alt="Modern property with terrace" className="h-[235px] w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <p className="mb-5 text-lg text-neutral-800">Pricing Start at $256K</p>
            <Button variant="dark" className="h-11 px-7 text-xs">
              Explore Properties <ArrowRight size={14} />
            </Button>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.12fr_1.1fr] lg:items-center">
          <div />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-[520px] text-sm leading-relaxed text-neutral-700">
              Whether it's creating a cozy corner for relaxation or transforming a small area into a workspace
            </p>
            <div className="flex gap-3">
              <button aria-label="Previous property" className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 hover:border-black">
                <ArrowLeft size={16} />
              </button>
              <button aria-label="Next property" className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 hover:border-black">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <StatsRow />
      </SectionContainer>
    </section>
  );
}

function StatsRow() {
  return (
    <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
      {stats.map(([value, label], index) => (
        <div
          key={value}
          className={cn("lg:px-16", index > 0 && "lg:border-l lg:border-neutral-300")}
        >
          <p className="text-[50px] font-medium leading-none tracking-[-0.035em] sm:text-[58px]">{value}</p>
          <p className="mt-3 text-sm text-neutral-700">{label}</p>
        </div>
      ))}
    </div>
  );
}

function FeaturedHomesSection() {
  return (
    <section id="property-list" className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <div className="mb-9 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-balance text-[42px] font-medium leading-none tracking-[-0.035em] sm:text-[56px]">
              Explore our premier houses
            </h2>
            <p className="mt-6 max-w-[680px] text-sm leading-relaxed text-neutral-700">
              Each listing offers unique features, exceptional quality, and prime locations, ensuring an exclusive living experience.
            </p>
          </div>
          <Button variant="dark" className="shrink-0 text-xs">
            See All Properties <ArrowRight size={14} />
          </Button>
        </div>

        <div className="grid gap-9 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.address} {...property} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

function PropertyCard({ image, price, address }: { image: string; price: string; address: string }) {
  return (
    <article className="group">
      <div className="relative mb-5 h-[300px] overflow-hidden rounded-2xl sm:h-[360px] lg:h-[390px]">
        <img src={image} alt="The Pinnacle at Highland Park" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-5 top-5 rounded-full bg-white px-5 py-2 text-xs font-medium">For Sale</span>
      </div>
      <div className="mb-4 flex items-center gap-8 text-sm text-neutral-700">
        <span className="inline-flex items-center gap-2">
          <BedDouble size={17} strokeWidth={1.7} /> 5 Bedrooms
        </span>
        <span className="inline-flex items-center gap-2">
          <Bath size={16} strokeWidth={1.7} /> 2 Bathroom
        </span>
      </div>
      <h3 className="mb-4 text-[22px] font-medium tracking-[-0.025em]">The Pinnacle at Highland Park</h3>
      <p className="text-sm text-neutral-700">
        <strong className="text-black">{price}</strong>
        <span className="mx-2">.</span>
        {address}
      </p>
    </article>
  );
}

function ReviewsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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

        <div className="grid items-center gap-6 lg:grid-cols-[48px_390px_1fr_48px]">
          <button aria-label="Previous review" className="hidden h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:border-black hover:text-black lg:flex">
            <ArrowLeft size={17} />
          </button>
          <div className="overflow-hidden rounded-[20px]">
            <img src={images.client} alt="Smiling client" className="h-[410px] w-full object-cover object-top" />
          </div>
          <TestimonialCard />
          <button aria-label="Next review" className="hidden h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 hover:border-black hover:text-black lg:flex">
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
    <article className="rounded-2xl bg-neutral-100 px-8 py-8 sm:px-12 sm:py-10 lg:min-h-[365px]">
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
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_560px] lg:items-start">
          <h2 className="max-w-[520px] text-balance text-[42px] font-medium leading-[0.98] tracking-[-0.035em] sm:text-[56px]">
            Frequently asked questions
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700">
            Our experts guide you in making informed investment decisions based on market insights. We offer residential, commercial, and luxury properties tailored to different preferences and budgets.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
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
    <article className="overflow-hidden rounded-[14px] border border-neutral-200 bg-white transition">
      <button className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-[22px] font-medium tracking-[-0.02em]" onClick={onClick}>
        {faq.question}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <div className={cn("grid transition-all duration-500", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className="grid gap-6 px-5 pb-6 lg:grid-cols-[1fr_250px] lg:items-center">
            <p className="text-sm leading-relaxed text-neutral-700">{faq.answer}</p>
            {first && (
              <img src={images.faq} alt="Light filled living room interior" className="h-[120px] w-full rounded-[14px] object-cover lg:h-[136px]" />
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
        <div className="relative z-10 mx-auto flex min-h-[350px] max-w-[850px] flex-col items-center justify-center px-5 text-center text-white">
          <h2 className="text-balance text-[42px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[58px]">
            Ready to Make Your Dream Property a Reality?
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

function Footer() {
  const left = ["Home", "About", "Properties", "Services"];
  const right = ["Gallery", "FAQ", "Pricing", "Contact"];

  return (
    <footer className="bg-white">
      <SectionContainer className="grid gap-8 border-b border-neutral-200 py-12 lg:grid-cols-[1fr_270px]">
        <h2 className="max-w-[670px] text-balance text-[42px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[58px]">
          Discover Nature's Wonders with Expert Guidance
        </h2>
        <address className="not-italic text-base leading-relaxed">
          <p>90 Rivonia Road, Sandton, Johannesburg, 2196.</p>
          <p className="mt-4">(+1)839-849-8483</p>
          <a className="mt-4 block hover:underline" href="mailto:info@nqothakagroup.co.za">
            info@nqothakagroup.co.za
          </a>
        </address>
      </SectionContainer>
      <SectionContainer className="flex flex-col gap-6 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-7">
          {left.map((item) => (
            <a key={item} href="#" className="hover:underline">
              {item}
            </a>
          ))}
        </div>
        <a href="#" aria-label="Nqothaka Group Real Estate">
          <img
            src={images.logo}
            alt="Nqothaka Group Real Estate"
            className="h-[85px] max-w-none object-contain"
          />
        </a>
        <div className="flex flex-wrap gap-7">
          {right.map((item) => (
            <a key={item} href="#" className="hover:underline">
              {item}
            </a>
          ))}
        </div>
      </SectionContainer>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <HeroSection />
      <ServicesSection />
      <FeaturedHomesSection />
      <ReviewsSection />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}
