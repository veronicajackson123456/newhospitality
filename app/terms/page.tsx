import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Terms & Conditions | HMCTS - Hospitality Software Solutions",
  description:
    "Read the Terms and Conditions governing your use of the HMCTS website and services.",
}

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "accounts", title: "Accounts & User Responsibilities" },
  { id: "access", title: "Website Access & Restrictions" },
  { id: "payments", title: "Payments & Billing" },
  { id: "cancellation", title: "Cancellation & Refund Policy" },
  { id: "intellectual-property", title: "Intellectual Property Rights" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "third-party", title: "Third-Party Links" },
  { id: "privacy", title: "Privacy & Data Protection" },
  { id: "dispute", title: "Dispute Resolution" },
  { id: "changes", title: "Changes to These Terms" },
]

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms &amp; Conditions"
      subtitle="Please read these terms carefully before using our website or services."
      lastUpdated="April 5, 2025"
      sections={sections}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          The website located at hospitalitysoftwaresolutions.com (the &ldquo;Site&rdquo;) is provided by HMCTS LLC
          &ndash; Hospitality Management Consultancy &amp; Technology Solutions (&ldquo;Company&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;, and &ldquo;we&rdquo;). Certain features of the Site may be subject to additional guidelines,
          terms, or rules, which will be posted on the Site in connection with such features. All such additional terms,
          guidelines, and rules are incorporated by reference into these Terms.
        </p>
        <p>
          These Terms of Use (the &ldquo;Terms&rdquo;) set forth the legally binding conditions that govern your use of
          the Site. By accessing or using the Site, you accept these Terms on behalf of yourself or the entity you
          represent and confirm that you have the legal capacity to agree to them. If you do not agree with all the
          provisions of these Terms, do not access or use the Site.
        </p>
      </section>

      <section id="accounts">
        <h2>Accounts &amp; User Responsibilities</h2>
        <h3>1.1 Account Creation</h3>
        <p>
          To access certain features, you may be required to create an account. You must provide truthful and accurate
          information when registering and are responsible for maintaining the security of your account and password.
          You agree to immediately notify us of any unauthorized use of your account.
        </p>
        <h3>1.2 Account Suspension &amp; Termination</h3>
        <p>
          We reserve the right to suspend or terminate accounts that violate these Terms, at our sole discretion and
          without prior notice. You may delete your account at any time by following the instructions on the Site or
          contacting us directly.
        </p>
        <h3>1.3 Responsibility for Activity</h3>
        <p>
          You are solely responsible for all activity that occurs under your account. HMCTS is not liable for any loss
          or damage arising from your failure to comply with these requirements.
        </p>
      </section>

      <section id="access">
        <h2>Website Access &amp; Restrictions</h2>
        <h3>2.1 Permitted Use</h3>
        <p>
          You may access and use the Site for lawful purposes only. You agree to comply with all applicable laws and
          regulations when using the Site.
        </p>
        <h3>2.2 Prohibited Activities</h3>
        <p>Users agree NOT to:</p>
        <ul>
          <li>Copy, sell, rent, lease, or exploit any part of the Site for commercial gain without our written consent.</li>
          <li>Modify, reverse-engineer, or attempt to gain unauthorized access to the Site or its systems.</li>
          <li>Use the Site for fraudulent, illegal, or harmful activities.</li>
          <li>Transmit any harmful, offensive, or disruptive content through the Site.</li>
          <li>Use automated systems, bots, or scrapers to extract data from the Site without permission.</li>
        </ul>
        <h3>2.3 Site Modifications</h3>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of the Site at any time, with or without
          notice. We will not be liable to you or any third party for any such modification, suspension, or discontinuation.
        </p>
      </section>

      <section id="payments">
        <h2>Payments &amp; Billing</h2>
        <p>
          All payments must be made in full according to the agreed terms before services are rendered. Late payments
          may result in additional fees or suspension of services. We reserve the right to update our pricing, and
          clients will be notified of any changes in advance.
        </p>
        <p>
          All fees are stated in US Dollars (USD) unless otherwise indicated. You are responsible for any applicable
          taxes, duties, or additional charges associated with your purchase.
        </p>
      </section>

      <section id="cancellation">
        <h2>Cancellation &amp; Refund Policy</h2>
        <h3>No Refunds or Recalls of Payment</h3>
        <p>
          (a) Receipt of payment for services after completion of the services shall be construed as acceptance of the
          services as satisfactory and without complaint by the Client. (b) Any complaints regarding the services must
          be raised with the Consultant prior to making payment. After payment, the Client agrees that no disputes or
          claims regarding the services will be accepted.
        </p>
        <p>
          (a) Once payment has been made, the Client agrees that it is non-refundable and cannot be recalled or
          disputed. (b) The Client agrees that this Agreement shall be used as evidence to financial institutions,
          granting permission to reject any chargebacks or payment reversal requests.
        </p>
        <h3>Service Cancellation</h3>
        <p>
          If you wish to cancel a service, you must notify us in writing at least 7 business days before the scheduled
          service date. Cancellations made after this period may not be eligible for any credit or rescheduling.
        </p>
      </section>

      <section id="intellectual-property">
        <h2>Intellectual Property Rights</h2>
        <p>
          All content, trademarks, logos, graphics, text, software, and other materials on the Site are the property
          of HMCTS or its licensors and are protected by applicable intellectual property laws.
        </p>
        <p>
          Unauthorized reproduction, distribution, modification, or any other use of any copyrighted materials is
          strictly prohibited. You may not use our trademarks or branding in any way without our prior written consent.
        </p>
      </section>

      <section id="liability">
        <h2>Limitation of Liability</h2>
        <p>
          We do not guarantee that the Site will be error-free, uninterrupted, or meet your specific needs. To the
          fullest extent permitted by applicable law, HMCTS is not liable for any indirect, incidental, consequential,
          special, or punitive damages resulting from the use of, or the inability to use, the Site or our services.
        </p>
        <p>
          Accessing the Site is at your own risk. The owners of the website will not be held responsible for any
          fraudulent, criminal, or financial claims relating to this website, including any misrepresentation or
          impersonation in any way.
        </p>
        <p>
          In no event shall our total liability to you for all damages exceed the amount paid by you, if any, for
          accessing or using our services during the twelve (12) months prior to the claim.
        </p>
      </section>

      <section id="third-party">
        <h2>Third-Party Links &amp; Advertisements</h2>
        <p>
          The Site may include links to third-party websites, services, and advertisements. These links are provided
          for your convenience only. We do not endorse, control, or take responsibility for any third-party content,
          privacy practices, or products. Your use of third-party sites is at your own risk and subject to their
          respective terms and conditions.
        </p>
      </section>

      <section id="privacy">
        <h2>Privacy &amp; Data Protection</h2>
        <p>
          Our <a href="/privacy">Privacy Policy</a> outlines how we collect, store, use, and protect your personal
          information. By using the Site, you agree to our data practices as described in the Privacy Policy. Our{" "}
          <a href="/cookies">Cookie Policy</a> further explains our use of cookies and tracking technologies.
        </p>
      </section>

      <section id="dispute">
        <h2>Dispute Resolution &amp; Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United
          States, without regard to its conflict of law provisions. Any disputes arising under or in connection with
          these Terms shall be resolved through binding arbitration. Users waive the right to participate in a
          class-action lawsuit.
        </p>
        <p>
          If any provision of these Terms is found to be unenforceable, that provision shall be modified to the minimum
          extent necessary, and the remainder of the Terms shall continue in full force and effect.
        </p>
      </section>

      <section id="changes">
        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. When we make material changes, we will update the &ldquo;Last
          updated&rdquo; date at the top of this page and, where appropriate, notify you by email. Your continued use
          of the Site after any changes constitutes your acceptance of the revised Terms.
        </p>
        <p>
          If you have any questions about these Terms, please <a href="/contact">contact us</a>.
        </p>
      </section>
    </LegalLayout>
  )
}
