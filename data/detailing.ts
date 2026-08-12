import type { images } from "@/data/images";

export interface DetailingService {
  id: string;
  index: string;
  name: string;
  priceFrom: number;
  /** Unit suffix for services priced by rate rather than flat fee, e.g. "/hr". */
  priceUnit?: string;
  description: string;
  image: keyof typeof images;
}

export const detailingServices: DetailingService[] = [
  {
    id: "mini-detail",
    index: "01",
    name: "Mini Detail",
    priceFrom: 275,
    description:
      "A quick refresh for vehicles that just need a light clean — exterior wash and a basic interior tidy-up.",
    image: "detailingMini",
  },
  {
    id: "interior-detail",
    index: "02",
    name: "Interior Detail",
    priceFrom: 385,
    description:
      "A thorough clean throughout the cabin — vacuuming, surface cleaning and trim care from front to back.",
    image: "detailingInterior",
  },
  {
    id: "full-detail",
    index: "03",
    name: "Full Detail",
    priceFrom: 595,
    description:
      "A complete interior and exterior detail — wash, decontamination and clean, inside and out.",
    image: "detailingFull",
  },
  {
    id: "paint-correction",
    index: "04",
    name: "Paint Correction",
    priceFrom: 154,
    priceUnit: "/hr",
    description:
      "Machine polishing to reduce swirl marks, light scratches and oxidation, restoring gloss and clarity to the paint. Charged hourly — time required depends on paint condition.",
    image: "detailingCorrection",
  },
];
