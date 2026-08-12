# MEC Detailing Australia — Website

A production-quality marketing site and lead-generation funnel for MEC
Detailing Australia (Brisbane), built with Next.js (App Router),
TypeScript, Tailwind CSS v4 and Framer Motion.

**Design direction: "Precision Protection."** Dark, cinematic, editorial —
huge uppercase typography, asymmetric split-screens, a scroll-pinned
horizontal section, sticky image panels and near-black tokens
(`#050505` / `#0C0C0C` / `#121212`, `#F4F4F4` ink, `#858585` muted, a
single restrained `#C7C7C7` accent). Photography (currently placeholders)
is meant to carry the visual richness, not colour or iconography.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run lint    # eslint
npx tsc --noEmit  # type-check
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- **`RESEND_API_KEY`** — required for quote-form enquiries
  (`app/api/quote/route.ts`) to actually email
  `angelo@mecdetailingaust.com.au` instead of just logging to the
  server console. Get a free key at [resend.com](https://resend.com)
  (no credit card, 100 emails/day / 3,000/month free tier — plenty for
  a quote form). Without this set, the form still works for the
  customer but enquiries are only logged, not delivered.
- **`QUOTE_FROM_EMAIL`** — optional. Defaults to Resend's shared test
  address (`onboarding@resend.dev`), which works immediately with no
  setup. For a branded from-address like
  `enquiries@mecdetailingaust.com.au`, verify the `mecdetailingaust.com.au`
  domain in the Resend dashboard first (adds a few DNS records at
  GoDaddy, similar to the domain-linking steps for Vercel) — Resend
  won't send from an unverified domain.

In production (Vercel), add these under **Project → Settings →
Environment Variables** rather than committing `.env.local`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — full funnel from hero through to FAQ and final CTA |
| `/packages` | Ceramic package comparison, upgrades, Gtechniq explainer |
| `/why-mec` | Brand/credibility story |
| `/faq` | Full searchable FAQ, grouped by category |
| `/quote` | 5-step lead-capture funnel → `/api/quote` |
| `/privacy-policy`, `/terms` | Placeholder legal pages |

## Brand assets

The real MEC logo is in use (navbar, footer, favicon, app icons). Source
files live in two places:

- `brand-source/mec-logo-original.png` — the original artwork as supplied,
  untouched. Kept outside `/public` since it's a working source file, not
  something the site serves.
- `public/brand/` — derived assets: `logo-full-light.png` (the lockup,
  inverted for dark surfaces — what the navbar/footer actually render) and
  `logo-full-dark.png` (original dark-on-transparent, for any future light
  surface), plus the favicon/app-icon set generated from the logo's "MDA"
  monogram (the full car-silhouette lockup doesn't survive downscaling to
  16–32px, so the favicon uses the bolder monogram instead).

To swap in an updated logo: replace `brand-source/mec-logo-original.png`
and regenerate the derived files (transparency + inversion) the same way.

## Editing content

Nothing in `/components` should be edited to change copy, prices, or
stats — everything the business would want to change lives in
`/data/*.ts`:

- `business.ts` — name, location, contact details, social links
- `packages.ts` — package pricing, inclusions, upgrades, comparison table
- `stats.ts`, `benefits.ts`, `process.ts` — homepage credibility content
- `faqs.ts` — every FAQ, categorised
- `reviews.ts` — **empty by design.** No reviews were supplied, so none
  were invented. Add real reviews here and the homepage/FAQ sections
  pick them up automatically.
- `trust.ts` — logos in the "trusted by" bar
- `gallery.ts` — project gallery items
- `images.ts` — every image slot the site uses, with the exact filename
  it expects under `/public/images/`

## What's still a placeholder

This is a complete, working build — but several things were
intentionally left as clearly-marked placeholders rather than invented,
per the brief:

- **Photography** — every image on the site is a labelled placeholder
  (`components/ui/image-placeholder.tsx`) showing the filename it
  expects. Drop real photos into `/public/images/` using those exact
  names and swap the placeholder for `next/image` in each section.
- **Customer reviews** (`data/reviews.ts`) — empty until real reviews
  exist.
- **Legal copy** (`/privacy-policy`, `/terms`) — structural pages only;
  need real policy text.
- **Analytics** (`lib/analytics.ts`) — event tracking calls
  (`quote_started`, `quote_submitted`, `cta_clicked`, etc.) are wired
  throughout the site and log in development, but no provider is
  connected. Set `NEXT_PUBLIC_ANALYTICS_ENABLED=true` and fill in
  `dispatch()` once a provider (GA4, Meta Pixel, etc.) is chosen.
- **Social links** (`data/business.ts` → `social`) — placeholder `#` hrefs.

## Stack

Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 ·
Framer Motion · lucide-react
