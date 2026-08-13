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
            <p className="text-sm text-ink-muted">{business.address.display}</p>
            <p className="text-sm text-ink-muted">{business.location.country}</p>
            <div className="mt-4 space-y-1">
              <a
                href={business.contact.phoneHref}
                className="block text-sm text-ink transition-colors hover:text-accent"
              >
                {business.contact.phone}
              </a>
              <a
                href={business.contact.emailHref}
                className="block text-sm text-ink transition-colors hover:text-accent"
              >
                {business.contact.email}
              </a>
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
