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
    alt: "Lamborghini Huracan Spyder finished with ceramic coating",
    ready: true,
  },
  packagesHero: {
    src: "/images/packages-hero.jpg",
    alt: "Toyota HiLux fitted with a bull bar, parked in a driveway",
    ready: true,
  },
  experience: {
    src: "/images/why-mec-experience.jpg",
    alt: "Hyundai Tucson covered in snow foam during a wash",
    ready: true,
  },
  accreditation: {
    src: "/images/why-mec-accreditation.jpg",
    alt: "Toyota RAV4 in the MEC studio, Gtechniq product range on the wall",
    ready: true,
  },
  industry: {
    src: "/images/why-mec-industry.jpg",
    alt: "BYD Shark, one of the dealership brands MEC Detailing works with",
    ready: true,
  },
  preparation: {
    src: "/images/why-mec-preparation.jpg",
    alt: "Technician inspecting paint finish under an LED swirl-finder light",
    ready: true,
  },
  products: {
    src: "/images/why-mec-products.jpg",
    alt: "Gtechniq Crystal Serum Ultra being applied to a vehicle",
    ready: true,
  },
  essentialProtection: {
    src: "/images/package-essential.jpg",
    alt: "Purple Holden Torana SS with the engine bay open",
    ready: true,
  },
  ultimateProtection: {
    src: "/images/package-ultimate.jpg",
    alt: "Grey 4x4 ute fitted with a canopy, roof rack and off-road wheels",
    ready: true,
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
    alt: "Range Rover Sport finished in gloss black, parked in a driveway",
    ready: true,
  },
  quoteSidebar: {
    src: "/images/quote-sidebar.jpg",
    alt: "Close-up gloss reflection on freshly coated paint",
    ready: true,
  },
  detailingHero: {
    src: "/images/benefit-maintenance.jpg",
    alt: "SUV covered in snow foam during a wash",
    ready: true,
  },
  detailingFull: {
    src: "/images/gallery/detailing-03.jpg",
    alt: "Lamborghini Huracan covered in snow foam during a wash",
    ready: true,
  },
  detailingInterior: {
    src: "/images/gallery/interior-01.jpg",
    alt: "Tesla Model Y interior detail",
    ready: true,
  },
  detailingCorrection: {
    src: "/images/gallery/ceramic-03.jpg",
    alt: "Gloss reflection on a freshly polished rear quarter panel",
    ready: true,
  },
  detailingMini: {
    src: "/images/why-mec-experience.jpg",
    alt: "Hyundai Tucson covered in snow foam during a wash",
    ready: true,
  },
} satisfies Record<string, ImageSlot>;
