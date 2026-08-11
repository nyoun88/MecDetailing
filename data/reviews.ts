export interface Review {
  id: string;
  rating: number;
  text: string;
  customerName: string;
  vehicle: string;
}

/**
 * Placeholder structure only — MEC has not supplied real customer reviews.
 * Do not populate this with invented testimonials. Replace the array below
 * with real reviews (and remove the `isPlaceholder` flag usage) when
 * supplied.
 */
export const reviews: Review[] = [];

export const reviewsPlaceholder = true;
