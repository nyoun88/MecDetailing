import { images } from "@/data/images";

export interface WhyMecSection {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  image: (typeof images)[keyof typeof images];
}

export const whyMecSections: WhyMecSection[] = [
  {
    id: "experience",
    eyebrow: "Experience",
    title: "Years of hands-on detailing work.",
    body: [
      "MEC Detailing has spent years working exclusively on vehicle paint protection — from daily drivers to vehicles supplied through automotive dealership partners.",
      "That experience shapes how we assess paint, plan preparation and apply coatings consistently, vehicle after vehicle.",
    ],
    image: images.experience,
  },
  {
    id: "accreditation",
    eyebrow: "Professional Accreditation",
    title: "Gtechniq accredited installation.",
    body: [
      "We hold professional Gtechniq accreditation, meaning our application process follows the standards required to install Gtechniq's ceramic coating systems and back them with a manufacturer warranty.",
    ],
    image: images.accreditation,
  },
  {
    id: "industry-relationships",
    eyebrow: "Industry Relationships",
    title: "Trusted by automotive businesses.",
    body: [
      "We've worked with automotive businesses and dealerships including BYD, Eagers Automotive, Urban Garage and Norris Motor Group, alongside our direct relationship with Gtechniq.",
      "That work means operating to a consistent standard, at volume, under commercial expectations.",
    ],
    image: images.industry,
  },
  {
    id: "preparation-standards",
    eyebrow: "Preparation Standards",
    title: "The coating is only as good as the prep.",
    body: [
      "Before any ceramic system goes on, paint is decontaminated and assessed. Where correction is needed, it happens before coating — not after.",
      "This is the step that determines how the finished result looks and performs.",
    ],
    image: images.preparation,
  },
  {
    id: "premium-products",
    eyebrow: "Premium Products",
    title: "Professional Gtechniq systems.",
    body: [
      "We install Gtechniq's professional ceramic coating range across paint, wheels, glass and interior — a coherent system rather than a mix of unrelated products.",
    ],
    image: images.products,
  },
  {
    id: "aftercare",
    eyebrow: "Aftercare",
    title: "Guidance that continues after handover.",
    body: [
      "Every vehicle leaves with a handover walkthrough and aftercare guidance, so you know how to maintain your coating and get the most from its warranty term.",
    ],
    image: images.aftercare,
  },
];
