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
}

export const images = {
  heroVehicle: {
    src: "/images/hero-vehicle.jpg",
    alt: "Premium detailed vehicle finished with ceramic coating",
  },
  valueProp: {
    src: "/images/paint-correction.jpg",
    alt: "Close-up of ceramic-coated paintwork reflecting studio light",
  },
  waterBeading: {
    src: "/images/water-beading.jpg",
    alt: "Water beading on a hydrophobic ceramic-coated panel",
  },
  ceramicApplication: {
    src: "/images/ceramic-application.jpg",
    alt: "Ceramic coating being professionally applied by hand",
  },
  interiorProtection: {
    src: "/images/interior-protection.jpg",
    alt: "Protected vehicle interior after detailing",
  },
  finalCta: {
    src: "/images/final-cta.jpg",
    alt: "Freshly ceramic-coated vehicle in studio lighting",
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
} satisfies Record<string, ImageSlot>;
