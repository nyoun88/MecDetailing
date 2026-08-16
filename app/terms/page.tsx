import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PolicySection } from "@/components/ui/policy-section";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="bg-bg pb-28 pt-36 md:pt-44">
      <Container className="max-w-2xl">
        <h1 className="text-[clamp(1.9rem,4vw,3rem)] font-bold tracking-tight text-ink">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-ink-muted">Last updated: 16 August 2026</p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-ink-muted">
          <p>
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern the
            provision of ceramic coating, new car protection, paint
            correction and vehicle detailing services by {business.name}{" "}
            (&ldquo;MEC Detailing&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;
            or &ldquo;our&rdquo;) to any person who requests a quote, makes
            a booking or otherwise engages our services (&ldquo;you&rdquo;,
            &ldquo;your&rdquo; or the &ldquo;customer&rdquo;).
          </p>
          <p>
            By requesting a quote, confirming a booking or leaving your
            vehicle in our care, you agree to be bound by these Terms.
          </p>

          <PolicySection title="1. Quotes and Pricing">
            <p>
              Quotes provided through our website, by phone or in person are
              estimates based on the information you provide about your
              vehicle and its condition.
            </p>
            <p>
              Final pricing is confirmed after a physical assessment of your
              vehicle and may vary from an initial estimate depending on
              paint condition, vehicle size, existing damage or
              contamination, and the level of preparation required.
            </p>
            <p>
              We will let you know before proceeding if the confirmed price
              differs materially from the original estimate.
            </p>
          </PolicySection>

          <PolicySection title="2. Bookings and Scheduling">
            <p>
              A booking is confirmed once we have agreed a date, time and
              scope of work with you. We recommend booking in advance, as
              availability is limited.
            </p>
            <p>
              Service timeframes given at the time of booking are estimates.
              Paint correction and multi-stage ceramic coating work in
              particular can take longer than anticipated once a vehicle is
              assessed in person, and we will keep you informed of any
              change to the expected completion time.
            </p>
          </PolicySection>

          <PolicySection title="3. Cancellations and Rescheduling">
            <p>
              We ask for as much notice as possible if you need to cancel or
              reschedule a booking, so the time can be offered to another
              customer.
            </p>
            <p>
              Late cancellations, rescheduling with insufficient notice, or
              failure to make the vehicle available at the agreed time may
              incur a cancellation fee or forfeiture of any deposit paid,
              at our discretion.
            </p>
          </PolicySection>

          <PolicySection title="4. Vehicle Condition and Assessment">
            <p>
              Before work begins, we assess your vehicle&rsquo;s paint and
              exterior condition and will point out any pre-existing damage
              we identify, including scratches, dents, chips, previous
              repair or repaint work, and areas of heavy contamination or
              oxidation.
            </p>
            <p>
              Ceramic coating is applied over your existing paintwork.
              It does not repair, hide or reverse pre-existing damage, and
              some conditions (such as deep scratches or failing clear coat)
              may remain visible, or may limit the level of correction
              achievable, after coating.
            </p>
            <p>
              Where paint correction is included or requested, results
              depend on the condition of the paint and the amount of usable
              clear coat remaining. We will not carry out correction work
              likely to compromise your paint&rsquo;s clear coat without
              discussing this with you first.
            </p>
          </PolicySection>

          <PolicySection title="5. Customer Responsibilities">
            <p>Before your appointment, please ensure:</p>
            <ul>
              <li>The vehicle is free of personal belongings and valuables</li>
              <li>Any items you want kept in the vehicle (toll tags, parking permits, etc.) are noted or removed</li>
              <li>You disclose any known mechanical, electrical or bodywork issues relevant to the service</li>
              <li>You disclose any prior paint protection film, wrap, aftermarket coating or repair work</li>
              <li>Access, keys and (where applicable) parking are available for the agreed appointment time</li>
            </ul>
            <p>
              We are not responsible for items left in the vehicle or for
              pre-existing mechanical or electrical faults unrelated to the
              service performed.
            </p>
          </PolicySection>

          <PolicySection title="6. Ceramic Coating Warranty">
            <p>
              Where a Gtechniq ceramic coating package includes a
              manufacturer-backed warranty, the specific term (5 years, up
              to 9 years, or otherwise) is confirmed at the time of
              installation based on the product applied — see our Ceramic
              Coating and New Car Protection pages for a general overview
              of what each package includes. This applies equally to
              ceramic coating installed as a standalone service and to the
              ceramic coating installed as part of a New Car Protection
              package.
            </p>
            <p>
              Warranty coverage is conditional on the maintenance
              guidance provided at handover being followed, including
              recommended wash methods and products. Coverage does not
              extend to damage caused by accidents, improper washing or
              chemicals, environmental fallout beyond what the coating is
              designed to resist, or work carried out by a third party
              after installation.
            </p>
            <p>
              Full written warranty terms are provided at the time of
              installation.
            </p>
          </PolicySection>

          <PolicySection title="7. Payment">
            <p>
              Payment is due on completion of the service unless otherwise
              agreed in writing. We accept the payment methods advised to
              you at the time of booking.
            </p>
            <p>
              A deposit may be requested to confirm a booking for larger
              jobs, ceramic coating packages or paint correction work. Any
              deposit is deducted from the final invoice.
            </p>
            <p>
              Vehicles may be held until payment is received in full.
            </p>
          </PolicySection>

          <PolicySection title="8. Photography and Marketing">
            <p>
              We may photograph or film vehicles before, during and after
              work for quality control, portfolio and marketing purposes,
              including our website and social media.
            </p>
            <p>
              Registration plates and other identifying details are blurred
              or excluded from any image used publicly. If you would prefer
              your vehicle not be photographed or featured, let us know
              before your appointment and we will respect that request.
            </p>
          </PolicySection>

          <PolicySection title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, our liability for any
              loss or damage arising from our services is limited to having
              the relevant service re-performed or the cost of that service
              refunded.
            </p>
            <p>
              Nothing in these Terms excludes, restricts or modifies any
              consumer guarantee, right or remedy you have under the
              Australian Consumer Law that cannot lawfully be excluded.
            </p>
            <p>
              We are not liable for pre-existing damage, mechanical or
              electrical faults, or issues arising from work, products or
              coatings applied by a third party before or after our
              service.
            </p>
          </PolicySection>

          <PolicySection title="10. Force Majeure">
            <p>
              We are not liable for delay or failure to perform a service
              where this is caused by circumstances reasonably beyond our
              control, including extreme weather, equipment failure beyond
              reasonable maintenance, illness, or supply issues affecting
              the availability of Gtechniq products.
            </p>
            <p>
              Where possible, we will contact you as soon as practicable to
              reschedule.
            </p>
          </PolicySection>

          <PolicySection title="11. Governing Law">
            <p>
              These Terms are governed by the laws of Queensland, Australia.
              Any dispute arising from these Terms or our services is
              subject to the non-exclusive jurisdiction of the courts of
              Queensland.
            </p>
          </PolicySection>

          <PolicySection title="12. Changes to These Terms">
            <p>
              We may update these Terms from time to time to reflect
              changes to our services, pricing structure or legal
              obligations. The updated version will be published on this
              page with a revised &ldquo;Last updated&rdquo; date. Continuing
              to use our services after changes are published constitutes
              acceptance of the updated Terms.
            </p>
          </PolicySection>

          <PolicySection title="13. Contact Us">
            <p>
              If you have a question about these Terms, please contact:
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
