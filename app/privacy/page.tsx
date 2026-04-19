import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "Privacy Policy | HMCTS - Hospitality Software Solutions",
  description:
    "Learn how HMCTS collects, uses, and protects your personal information.",
}

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "disclosure", title: "Disclosure of Your Information" },
  { id: "data-security", title: "Data Security" },
  { id: "retention", title: "Retention of Data" },
  { id: "your-rights", title: "Your Rights" },
  { id: "third-party-links", title: "Third-Party Links" },
  { id: "international-transfers", title: "International Data Transfers" },
  { id: "children", title: "Children's Privacy" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
]

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="We are committed to protecting your personal information and your right to privacy."
      lastUpdated="April 5, 2025"
      sections={sections}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          The website located at hospitalitysoftwaresolutions.com (the &ldquo;Site&rdquo;) is provided by HMCTS LLC
          &ndash; Hospitality Management Consultancy &amp; Technology Solutions (&ldquo;Company&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;, and &ldquo;we&rdquo;). This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our Site or use our services.
        </p>
        <p>
          Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site. By
          accessing or using the Site, you agree to the practices described in this Privacy Policy.
        </p>
      </section>

      <section id="information-we-collect">
        <h2>Information We Collect</h2>
        <h3>Personal Data</h3>
        <p>
          Personally identifiable information that you voluntarily provide when registering an account, subscribing to
          our newsletter, placing an order, or contacting us. This may include:
        </p>
        <ul>
          <li>Name, email address, and phone number</li>
          <li>Billing address and payment information</li>
          <li>Business name, size, sector, and other professional details</li>
          <li>Any other information you choose to provide</li>
        </ul>
        <h3>Usage Data</h3>
        <p>
          Information automatically collected when you visit the Site, including your IP address, browser type, device
          information, operating system, referring URLs, pages visited, and dates/times of visits.
        </p>
        <h3>Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar tracking tools to enhance your experience, analyze trends, and administer the Site.
          For full details, please read our <a href="/cookies">Cookie Policy</a>.
        </p>
      </section>

      <section id="how-we-use">
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain the Site and our services.</li>
          <li>Process transactions and send related information, including purchase confirmations and invoices.</li>
          <li>Improve your experience by personalizing content and analyzing usage trends.</li>
          <li>Communicate with you, including sending service-related notifications and, where permitted, promotional materials.</li>
          <li>Respond to your comments, questions, and requests and provide customer service.</li>
          <li>Monitor and analyze usage of the Site to improve functionality and performance.</li>
          <li>Enforce our <a href="/terms">Terms &amp; Conditions</a> and protect the security of the Site.</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
      </section>

      <section id="disclosure">
        <h2>Disclosure of Your Information</h2>
        <p>We may share your information in the following circumstances:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> With trusted third parties who perform services on our behalf, such as
            web hosting, data analytics, payment processing, email delivery, and customer service.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion
            of our assets, your information may be transferred as part of that transaction.
          </li>
          <li>
            <strong>Legal Requirements:</strong> To comply with applicable law, legal process, or enforceable governmental
            requests; to enforce our Terms; or to protect the rights, property, and safety of HMCTS, our users, or others.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent.
          </li>
        </ul>
        <p>
          We do not sell, trade, or rent your personal information to third parties for their own marketing purposes.
        </p>
      </section>

      <section id="data-security">
        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational security measures to protect your personal information
          from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, secure
          servers, and access controls.
        </p>
        <p>
          However, no method of transmission over the internet or electronic storage is 100% secure. While we strive
          to protect your information, we cannot guarantee its absolute security. You are responsible for maintaining
          the confidentiality of your account credentials.
        </p>
      </section>

      <section id="retention">
        <h2>Retention of Data</h2>
        <p>
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
          Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your
          information, we will securely delete or anonymize it.
        </p>
      </section>

      <section id="your-rights">
        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have the following rights regarding your personal information:
        </p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> Request the deletion of your personal data, subject to certain exceptions.</li>
          <li><strong>Restriction:</strong> Request that we restrict the processing of your data in certain circumstances.</li>
          <li><strong>Portability:</strong> Request the transfer of your data to another controller, where technically feasible.</li>
          <li><strong>Objection:</strong> Object to our processing of your personal data for certain purposes.</li>
          <li><strong>Withdraw Consent:</strong> Where processing is based on consent, withdraw that consent at any time.</li>
        </ul>
        <p>
          To exercise any of these rights, please <a href="/contact">contact us</a>. We will respond to your request
          within 30 days.
        </p>
      </section>

      <section id="third-party-links">
        <h2>Third-Party Links</h2>
        <p>
          The Site may contain links to third-party websites. This Privacy Policy does not apply to the privacy
          practices of those websites. We encourage you to review the privacy policies of any third-party sites you
          visit, as we have no control over and assume no responsibility for their content or practices.
        </p>
      </section>

      <section id="international-transfers">
        <h2>International Data Transfers</h2>
        <p>
          Your information may be transferred to, stored, and processed in a country other than the one in which you
          reside, including the United States. By using the Site, you consent to the transfer of your data to countries
          that may have different data protection laws than your country.
        </p>
        <p>
          Where we transfer personal data outside of your jurisdiction, we take steps to ensure that appropriate
          safeguards are in place to protect your information in accordance with applicable law.
        </p>
      </section>

      <section id="children">
        <h2>Children&apos;s Privacy</h2>
        <p>
          Our Site and services are not directed to individuals under the age of 18. We do not knowingly collect
          personal information from children. If you become aware that a child has provided us with personal
          information, please <a href="/contact">contact us</a> and we will take steps to delete such information.
        </p>
      </section>

      <section id="governing-law">
        <h2>Governing Law</h2>
        <p>
          This Privacy Policy and any disputes arising from it shall be governed by the laws of the State of Wyoming,
          United States, without regard to its conflict of law provisions.
        </p>
      </section>

      <section id="changes">
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make material changes, we will update the
          &ldquo;Last updated&rdquo; date at the top of this page. Your continued use of the Site after such changes
          constitutes your acceptance of the updated policy.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please
          contact us:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@hospitalitysoftwaresolutions.com">info@hospitalitysoftwaresolutions.com</a></li>
          <li><strong>Phone:</strong> +1 (555) 123-4567</li>
          <li><strong>Address:</strong> 30 N Gould Street, Sheridan, Wyoming 82801, USA</li>
        </ul>
      </section>
    </LegalLayout>
  )
}
