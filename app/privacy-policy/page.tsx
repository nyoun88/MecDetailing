import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-bg pb-28 pt-36 md:pt-44">
      <Container className="max-w-2xl">
        <h1 className="text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink-muted">Last updated: 12 August 2026</p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-ink-muted">
          <p>
            {business.name} (&ldquo;MEC Detailing&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo; or &ldquo;our&rdquo;) respects your privacy and
            is committed to protecting your personal information.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store and
            disclose personal information when you visit our website,
            contact us, request a quote, make a booking or use our services.
          </p>

          <PolicySection title="1. Personal Information We Collect">
            <p>Depending on how you interact with us, we may collect:</p>
            <ul>
              <li>Your name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Vehicle make, model and registration details</li>
              <li>Information about your vehicle and the services you are interested in</li>
              <li>Details provided when requesting a quote or booking a service</li>
              <li>Information contained in messages or enquiries you send to us</li>
              <li>Payment and transaction information where necessary to process a payment</li>
              <li>Website usage information, including IP address, browser type and device information</li>
              <li>Information collected through cookies, analytics and advertising technologies</li>
            </ul>
            <p>
              We generally only collect information that is reasonably
              necessary for us to provide our services and operate our
              business.
            </p>
          </PolicySection>

          <PolicySection title="2. How We Collect Personal Information">
            <p>We may collect personal information directly from you when you:</p>
            <ul>
              <li>Submit an enquiry through our website</li>
              <li>Request a quote</li>
              <li>Make or request a booking</li>
              <li>Contact us by phone, email, SMS or social media</li>
              <li>Purchase or enquire about our services</li>
              <li>Communicate with us regarding your vehicle or an existing service</li>
            </ul>
            <p>
              We may also automatically collect certain technical
              information when you use our website through cookies,
              analytics tools and similar technologies.
            </p>
          </PolicySection>

          <PolicySection title="3. How We Use Your Information">
            <p>We may use your personal information to:</p>
            <ul>
              <li>Respond to enquiries and quote requests</li>
              <li>Schedule and manage bookings</li>
              <li>Provide detailing, ceramic coating and other services</li>
              <li>Contact you regarding your booking or enquiry</li>
              <li>Provide customer service and support</li>
              <li>Process payments and maintain business records</li>
              <li>Send service reminders and relevant communications</li>
              <li>Improve our website, services and customer experience</li>
              <li>Conduct marketing and advertising, where permitted by law</li>
              <li>Protect our business against fraud, misuse or security threats</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
            <p>
              We will not use your personal information for purposes that
              are unrelated to our business without a lawful basis or, where
              required, your consent.
            </p>
          </PolicySection>

          <PolicySection title="4. Marketing Communications">
            <p>
              Where permitted by law, we may contact you with information
              about our services, promotions, maintenance programs or other
              relevant offers.
            </p>
            <p>
              You can opt out of marketing communications at any time by
              contacting us or using the unsubscribe option included in an
              electronic marketing message.
            </p>
            <p>
              We will continue to send necessary service-related
              communications where appropriate, such as booking
              confirmations or important information relating to a service
              you have requested.
            </p>
          </PolicySection>

          <PolicySection title="5. Cookies and Analytics">
            <p>
              Our website may use cookies and similar technologies to
              improve functionality, understand website traffic and measure
              the effectiveness of our advertising.
            </p>
            <p>
              We may use third-party services such as website analytics,
              advertising and conversion-tracking providers. These services
              may collect information about how visitors interact with our
              website.
            </p>
            <p>
              You can adjust your browser settings to refuse or restrict
              cookies. Some website functionality may be affected as a
              result.
            </p>
          </PolicySection>

          <PolicySection title="6. Disclosure of Personal Information">
            <p>
              We may disclose personal information where reasonably
              necessary to operate our business and provide our services.
            </p>
            <p>This may include disclosure to:</p>
            <ul>
              <li>Service providers assisting us with website hosting and development</li>
              <li>Booking and customer management platforms</li>
              <li>Payment processors</li>
              <li>Email, SMS and communication providers</li>
              <li>Marketing and advertising providers</li>
              <li>Analytics providers</li>
              <li>Professional advisers where reasonably necessary</li>
              <li>Government agencies, regulators or law enforcement where required or authorised by law</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </PolicySection>

          <PolicySection title="7. Overseas Disclosure">
            <p>
              Some of the third-party service providers we use may store or
              process information outside Australia.
            </p>
            <p>
              Depending on the services and technology we use, personal
              information may be processed in countries including the
              United States and other countries where our service providers
              operate.
            </p>
            <p>
              Where required by applicable privacy law, we take reasonable
              steps when engaging third-party providers to ensure personal
              information is handled appropriately.
            </p>
          </PolicySection>

          <PolicySection title="8. Security of Personal Information">
            <p>
              We take reasonable steps to protect personal information from
              misuse, interference, loss, unauthorised access, modification
              or disclosure.
            </p>
            <p>
              Security measures may include appropriate access controls,
              secure systems, passwords, authentication and reputable
              third-party service providers.
            </p>
            <p>
              However, no internet transmission or electronic storage
              system can be guaranteed to be completely secure.
            </p>
          </PolicySection>

          <PolicySection title="9. How Long We Keep Your Information">
            <p>
              We retain personal information only for as long as reasonably
              necessary for the purposes for which it was collected,
              including providing services, maintaining business and
              transaction records, resolving disputes and meeting legal or
              regulatory requirements.
            </p>
            <p>
              When information is no longer required, we will take
              reasonable steps to securely delete, destroy or de-identify
              it where appropriate.
            </p>
          </PolicySection>

          <PolicySection title="10. Accessing and Correcting Your Information">
            <p>
              You may contact us to request access to personal information
              we hold about you.
            </p>
            <p>
              You may also ask us to correct personal information if you
              believe it is inaccurate, incomplete or out of date.
            </p>
            <p>
              We may need to verify your identity before processing an
              access or correction request.
            </p>
            <p>To make a request, contact us using the details below.</p>
          </PolicySection>

          <PolicySection title="11. Privacy Complaints">
            <p>
              If you believe we have mishandled your personal information
              or breached applicable privacy requirements, you can contact
              us and make a complaint.
            </p>
            <p>
              We will review your complaint and take reasonable steps to
              investigate and respond to it.
            </p>
            <p>
              Please contact us first so that we have an opportunity to
              address your concern.
            </p>
            <p>
              If you are not satisfied with our response, you may be able
              to contact the Office of the Australian Information
              Commissioner (OAIC) for further assistance.
            </p>
          </PolicySection>

          <PolicySection title="12. Third-Party Websites">
            <p>
              Our website may contain links to third-party websites,
              including social media platforms and other websites.
            </p>
            <p>
              We are not responsible for the privacy practices, content or
              security of third-party websites. We recommend reviewing the
              privacy policy of any third-party website you visit.
            </p>
          </PolicySection>

          <PolicySection title="13. Children’s Privacy">
            <p>
              Our website and services are not specifically directed
              towards children.
            </p>
            <p>
              We do not knowingly collect personal information from
              children where such collection is not permitted by law.
            </p>
          </PolicySection>

          <PolicySection title="14. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time to
              reflect changes to our business, website, technology or legal
              obligations.
            </p>
            <p>
              The updated version will be published on this page with a
              revised &ldquo;Last updated&rdquo; date.
            </p>
          </PolicySection>

          <PolicySection title="15. Contact Us">
            <p>
              If you have a question about this Privacy Policy, want to
              access or correct your personal information, or wish to make
              a privacy complaint, please contact:
            </p>
            <p className="text-ink">
              {business.name}
              <br />
              {business.address.display}
              <br />
              {business.address.country}
              <br />
              <a href={business.contact.phoneHref} className="hover:text-accent">
                {business.contact.phone}
              </a>
              <br />
              <a href={business.contact.emailHref} className="hover:text-accent">
                {business.contact.email}
              </a>
            </p>
          </PolicySection>
        </div>
      </Container>
    </section>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-base font-bold uppercase tracking-[0.06em] text-ink">
        {title}
      </h2>
      <div className="mt-3 space-y-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
