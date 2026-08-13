import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ui/arrow-link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center bg-bg py-24">
      <Container className="max-w-2xl">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-4 text-balance text-[clamp(2.75rem,8vw,6rem)] font-bold uppercase leading-[0.95] tracking-tight text-ink">
          Page not
          <br />
          found.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
          The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved.
          Try one of the links below.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href="/" size="lg" showArrow>
            Back To Home
          </Button>
          <ArrowLink href="/quote">Get A Free Quote</ArrowLink>
        </div>

        <div className="hairline mt-16" />
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 pt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
          <li>
            <ArrowLink href="/packages" className="text-[11px] tracking-[0.16em]">
              Ceramic Coatings
            </ArrowLink>
          </li>
          <li>
            <ArrowLink href="/detailing" className="text-[11px] tracking-[0.16em]">
              Detailing
            </ArrowLink>
          </li>
          <li>
            <ArrowLink href="/faq" className="text-[11px] tracking-[0.16em]">
              FAQ
            </ArrowLink>
          </li>
        </ul>
      </Container>
    </section>
  );
}
