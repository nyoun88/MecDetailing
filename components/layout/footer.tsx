import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { business } from "@/data/business";
import { footerNav, footerServices, legalNav } from "@/data/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg">
      <div className="hairline" />
      <Container className="py-16 md:py-24">
        <Logo className="h-12 w-auto md:h-16" />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          Premium Vehicle Protection
        </p>

        <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="text-sm text-ink-muted">{business.location.display}</p>
            <p className="text-sm text-ink-muted">{business.location.country}</p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={business.social.instagram} label="Instagram">
                IG
              </SocialLink>
              <SocialLink href={business.social.facebook} label="Facebook">
                FB
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Navigation" links={footerNav} />
          <FooterColumn title="Services" links={footerServices} />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Legal
            </p>
            <ul className="mt-4 space-y-3">
              {legalNav.map((link) => (
                <li key={link.href}>
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
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Since 2020 · Gtechniq Accredited</p>
        </div>
      </Container>
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
