export type GalleryCategory =
  | "All"
  | "Ceramic"
  | "Paint Correction"
  | "Detailing"
  | "Interior"
  | "Wheels";

export interface GalleryItem {
  id: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
  alt: string;
  span?: "tall" | "wide" | "default";
  /** True once the real file at `image` has actually been supplied. */
  ready?: boolean;
}

/**
 * Gallery is data-driven so real project photography can be dropped in by
 * replacing the `image` paths in /public/images/gallery/ — no component
 * changes required. Until real photos are supplied, these render as clearly
 * labelled placeholders (see ImagePlaceholder) rather than fake MEC work.
 */
export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Ceramic", image: "/images/gallery/ceramic-01.jpg", alt: "Ceramic-coated EV panel and wheel in the MEC studio", span: "tall", ready: true },
  { id: "g2", category: "Paint Correction", image: "/images/gallery/correction-01.jpg", alt: "Toyota Land Cruiser 79 Series GXL side profile after paint correction and detail", ready: true },
  { id: "g3", category: "Detailing", image: "/images/gallery/detailing-01.jpg", alt: "Chevrolet Silverado grille detail", ready: true },
  { id: "g4", category: "Wheels", image: "/images/gallery/wheels-01.jpg", alt: "Kia alloy wheel finished with ceramic coating", ready: true },
  { id: "g5", category: "Interior", image: "/images/gallery/interior-01.jpg", alt: "Tesla Model Y interior detail", span: "wide", ready: true },
  { id: "g6", category: "Ceramic", image: "/images/gallery/ceramic-02.jpg", alt: "Ford Ranger front fender and wheel ceramic coating detail", ready: true },
  { id: "g7", category: "Paint Correction", image: "/images/gallery/correction-02.jpg", alt: "Lotus Emira side profile after paint correction and detail", ready: true },
  { id: "g8", category: "Detailing", image: "/images/gallery/detailing-02.jpg", alt: "Nissan Patrol front fender and wheel detail", span: "tall", ready: true },
  { id: "g9", category: "Wheels", image: "/images/gallery/wheels-02.jpg", alt: "BMW wheel and fender ceramic coating detail", ready: true },
  { id: "g10", category: "Ceramic", image: "/images/gallery/ceramic-03.jpg", alt: "Gloss reflection on a freshly coated rear quarter panel", ready: true },
  { id: "g11", category: "Detailing", image: "/images/gallery/detailing-03.jpg", alt: "Lamborghini Huracan covered in snow foam during a wash", ready: true },
  { id: "g12", category: "Ceramic", image: "/images/gallery/ceramic-04.jpg", alt: "Tesla Model 3 rear quarter panel gloss reflection after ceramic coating", ready: true },
  { id: "g13", category: "Detailing", image: "/images/gallery/detailing-04.jpg", alt: "Classic Ford Falcon GT sedan detailed in the MEC workshop", span: "tall", ready: true },
  { id: "g14", category: "Ceramic", image: "/images/gallery/ceramic-05.jpg", alt: "Rolls-Royce Spirit of Ecstasy and grille after ceramic coating", span: "tall", ready: true },
  { id: "g15", category: "Detailing", image: "/images/gallery/detailing-05.jpg", alt: "Ford FPV Falcon front three-quarter after detailing", span: "wide", ready: true },
  { id: "g16", category: "Interior", image: "/images/gallery/interior-02.jpg", alt: "Rolls-Royce rear leather seat detail", span: "tall", ready: true },
  { id: "g17", category: "Ceramic", image: "/images/gallery/ceramic-06.jpg", alt: "BMW M3 front fender and headlight after ceramic coating, reflecting the MEC studio's hexagon light fixture", span: "tall", ready: true },
  { id: "g18", category: "Ceramic", image: "/images/gallery/ceramic-07.jpg", alt: "BMW M3 finished with ceramic coating in the MEC studio", ready: true },
  { id: "g19", category: "Wheels", image: "/images/gallery/wheels-03.jpg", alt: "BMW M3 wheel and Michelin Pilot Sport 4S tyre after ceramic coating", ready: true },
  { id: "g20", category: "Interior", image: "/images/gallery/interior-03.jpg", alt: "BMW M3 red and black M-Sport interior detail", span: "wide", ready: true },
  { id: "g21", category: "Detailing", image: "/images/gallery/detailing-06.jpg", alt: "BYD Shark 6 side profile outside the MEC studio", span: "wide", ready: true },
  { id: "g22", category: "Detailing", image: "/images/gallery/detailing-07.jpg", alt: "BYD Shark 6 rear three-quarter in the MEC workshop bay", span: "tall", ready: true },
  { id: "g23", category: "Detailing", image: "/images/gallery/detailing-08.jpg", alt: "BYD Shark 6 front three-quarter in the MEC studio at golden hour", ready: true },
];

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Ceramic",
  "Paint Correction",
  "Detailing",
  "Interior",
  "Wheels",
];
