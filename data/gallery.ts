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
}

/**
 * Gallery is data-driven so real project photography can be dropped in by
 * replacing the `image` paths in /public/images/gallery/ — no component
 * changes required. Until real photos are supplied, these render as clearly
 * labelled placeholders (see ImagePlaceholder) rather than fake MEC work.
 */
export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Ceramic", image: "/images/gallery/ceramic-01.jpg", alt: "Ceramic coating application", span: "tall" },
  { id: "g2", category: "Paint Correction", image: "/images/gallery/correction-01.jpg", alt: "Paint correction in progress" },
  { id: "g3", category: "Detailing", image: "/images/gallery/detailing-01.jpg", alt: "Full vehicle detailing" },
  { id: "g4", category: "Wheels", image: "/images/gallery/wheels-01.jpg", alt: "Wheel ceramic coating" },
  { id: "g5", category: "Interior", image: "/images/gallery/interior-01.jpg", alt: "Interior protection detailing", span: "wide" },
  { id: "g6", category: "Ceramic", image: "/images/gallery/ceramic-02.jpg", alt: "Ceramic coated panel gloss" },
  { id: "g7", category: "Paint Correction", image: "/images/gallery/correction-02.jpg", alt: "Swirl mark removal" },
  { id: "g8", category: "Detailing", image: "/images/gallery/detailing-02.jpg", alt: "Exterior detail finish", span: "tall" },
  { id: "g9", category: "Wheels", image: "/images/gallery/wheels-02.jpg", alt: "Detailed wheel finish" },
];

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Ceramic",
  "Paint Correction",
  "Detailing",
  "Interior",
  "Wheels",
];
