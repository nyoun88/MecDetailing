/**
 * Central image configuration. Nothing in /components should hardcode an
 * image path or alt text directly — reference an entry here instead, so
 * real photography can be dropped into /public/images (using these exact
 * filenames) without touching component code.
 *
 * Until real photography is supplied, `<ImagePlaceholder />` renders a
 * clearly-labelled placeholder instead of a broken image or an invented
 * photo — see components/ui/image-placeholder.tsx.
 */

export interface ImageSlot {
  /** Intended path once real photography is supplied. */
  src: string;
  alt: string;
  /** True once the real file at `src` has actually been supplied. */
  ready?: boolean;
}

export const images = {
  heroVehicle: {
    src: "/images/hero-vehicle.jpg",
    alt: "Premium detailed vehicle finished with ceramic coating",
    ready: true,
  },
  waterBeading: {
    src: "/images/water-beading.jpg",
    alt: "Water beading on a hydrophobic ceramic-coated panel",
    ready: true,
  },
  finalCta: {
    src: "/images/final-cta.jpg",
    alt: "Silver Isuzu SUV parked in a driveway",
    ready: true,
  },
  whyMecHero: {
    src: "/images/why-mec-hero.jpg",
    alt: "MEC Detailing specialist assessing a vehicle's paintwork",
  },
  packagesHero: {
    src: "/images/packages-hero.jpg",
    alt: "Vehicle prepared for ceramic coating application",
  },
  experience: {
    src: "/images/why-mec-experience.jpg",
    alt: "MEC Detailing specialist working on a vehicle panel",
  },
  accreditation: {
    src: "/images/why-mec-accreditation.jpg",
    alt: "Gtechniq accredited ceramic coating application",
  },
  industry: {
    src: "/images/why-mec-industry.jpg",
    alt: "Vehicles at an automotive dealership partner site",
  },
  preparation: {
    src: "/images/why-mec-preparation.jpg",
    alt: "Paint decontamination and preparation before coating",
  },
  products: {
    src: "/images/why-mec-products.jpg",
    alt: "Gtechniq ceramic coating products laid out for application",
  },
  aftercare: {
    src: "/images/why-mec-aftercare.jpg",
    alt: "Finished vehicle handover after ceramic coating",
  },
  essentialProtection: {
    src: "/images/package-essential.jpg",
    alt: "Vehicle finished with the Essential Protection ceramic package",
  },
  ultimateProtection: {
    src: "/images/package-ultimate.jpg",
    alt: "Vehicle finished with the Ultimate Protection ceramic package",
  },
  benefitGloss: {
    src: "/images/benefit-gloss.jpg",
    alt: "Deep gloss reflection on ceramic-coated paint",
    ready: true,
  },
  benefitHydrophobic: {
    src: "/images/benefit-hydrophobic.jpg",
    alt: "Water beading on a freshly washed ceramic-coated panel and wheel",
    ready: true,
  },
  benefitMaintenance: {
    src: "/images/benefit-maintenance.jpg",
    alt: "SUV covered in snow foam during a maintenance wash",
    ready: true,
  },
  benefitProtection: {
    src: "/images/benefit-protection.jpg",
    alt: "Vehicle parked outdoors, protected by ceramic coating",
  },
  quoteSidebar: {
    src: "/images/quote-sidebar.jpg",
    alt: "Vehicle prepared for ceramic coating application",
  },
} satisfies Record<string, ImageSlot>;
