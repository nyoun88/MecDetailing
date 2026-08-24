import { business } from "@/data/business";

export interface GoogleReview {
  id: string;
  rating: number;
  text: string;
  authorName: string;
  relativeTime: string;
}

export interface GooglePlaceData {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
}

// Shape of the fields we request from the Places API (New) — only the
// bits we actually read, not the full response.
interface PlacesApiReview {
  name?: string;
  rating?: number;
  text?: { text?: string };
  authorAttribution?: { displayName?: string };
  relativePublishTimeDescription?: string;
}

interface PlacesApiResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesApiReview[];
}

/**
 * Live Google Business Profile data (rating, review count, up to 5 most
 * relevant written reviews) via the Places API (New).
 *
 * Requires GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID env vars — see
 * .env.example for where to get both. Until they're configured, or if the
 * request fails for any reason, this returns null and every caller falls
 * back to the static business.googleReviews.rating with no written
 * reviews shown, so the site never breaks or shows stale/fabricated data.
 *
 * Cached for 24h via Next's fetch revalidation — review content doesn't
 * change often enough to justify hitting the API on every request. Next
 * also automatically dedupes identical fetches within a single render, so
 * it's safe to call this from several components on the same page.
 */
export async function getGooglePlaceData(): Promise<GooglePlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      console.error(`Google Places API error: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = (await res.json()) as PlacesApiResponse;

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .filter((r): r is PlacesApiReview & { text: { text: string } } =>
        Boolean(r.text?.text?.trim()),
      )
      .map((r, idx) => ({
        id: r.name ?? `google-review-${idx}`,
        rating: typeof r.rating === "number" ? r.rating : 5,
        text: r.text.text,
        authorName: r.authorAttribution?.displayName ?? "Google User",
        relativeTime: r.relativePublishTimeDescription ?? "",
      }));

    return {
      rating: typeof data.rating === "number" ? data.rating : business.googleReviews.rating,
      reviewCount: typeof data.userRatingCount === "number" ? data.userRatingCount : 0,
      reviews,
    };
  } catch (err) {
    console.error("Failed to fetch Google Places data:", err);
    return null;
  }
}
