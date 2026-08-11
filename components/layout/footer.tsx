import Link from "next/link";
import { Container } from "@/components/ui/container";
import { business } from "@/data/business";
import { footerNav, footerServices, legalNav } from "@/data/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:py-24">
        <div>
          <p className="text-lg font-bold uppercase tracking-[0.18em] text-ink">
            MEC <span className="text-ink-muted">Detailing</span>
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Premium Vehicle Protection
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
            Gtechniq-accredited ceramic coating, paint correction and vehicle
            protection, based in {business.location.display}.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <SocialLink href={business.social.instagram} label="Instagram">
              IG
            </SocialLink>
            <SocialLink href={business.social.facebook} label="Facebook">
              FB
            </SocialLink>
            <SocialLink href={business.social.tiktok} label="TikTok">
              TT
            </SocialLink>
          </div>
        </div>

        <FooterColumn title="Navigation" links={footerNav} />
        <FooterColumn title="Services" links={footerServices} />

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Location
          </p>
          <p className="mt-4 text-sm text-ink">{business.location.display}</p>
          <p className="mt-1 text-sm text-ink">{business.location.country}</p>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-4 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <nav className="flex gap-6">
            {legalNav.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-ink">
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-ink transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-full border border-border text-[10px] font-bold tracking-wide text-ink-muted transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </Link>
  );
}
