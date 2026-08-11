export interface PaintIssue {
  title: string;
  description: string;
}

export const paintIssues: PaintIssue[] = [
  { title: "Swirl Marks", description: "Fine circular marring from incorrect washing or drying technique." },
  { title: "Water Spots", description: "Mineral deposits etched into the clear coat from hard water." },
  { title: "Oxidation", description: "Dulling of the paint surface from prolonged UV exposure." },
  { title: "Light Scratches", description: "Surface-level scratches that catch and scatter light." },
  { title: "Paint Haze", description: "A cloudy, low-gloss appearance across the clear coat." },
];

export const beforeAfterExample = {
  before: "/images/correction-before.jpg",
  after: "/images/correction-after.jpg",
  beforeAlt: "Vehicle panel before paint correction, showing swirl marks and haze",
  afterAlt: "Same vehicle panel after paint correction, showing corrected gloss finish",
};
