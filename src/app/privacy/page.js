import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Chatlync Privacy Policy — how we collect, use, and protect your data.",
  alternates: { canonical: "https://chatlync.io/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="py-16 md:py-24 bg-white">
          <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray prose-headings:text-[var(--color-heading)] prose-headings:font-extrabold prose-a:text-[var(--color-primary)]">
            <h1 className="text-3xl md:text-4xl !mb-2">Privacy Policy</h1>
            <p className="text-sm text-[var(--color-muted)] !mt-0">Last updated: March 31, 2026</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly: name, email, phone number, and business information when you create an account. We also collect usage data, device information, and cookies to improve our services.</p>

            <h2>2. How We Use Your Information</h2>
            <p>Your information is used to provide, maintain, and improve Chatlync services, process transactions, send important notifications, and provide customer support. We do not sell your personal data to third parties.</p>

            <h2>3. WhatsApp & Meta Data</h2>
            <p>Chatlync operates as a WhatsApp Business Solution Provider using the official Meta Cloud API. Message content is processed through Meta's infrastructure and is subject to Meta's data processing terms. We do not store message content beyond what is necessary for delivering our services.</p>

            <h2>4. Data Security</h2>
            <p>We implement industry-standard security measures including encryption in transit (TLS 1.3), encryption at rest (AES-256), regular security audits, and access controls to protect your data.</p>

            <h2>5. Data Retention</h2>
            <p>We retain your account data for the duration of your subscription. Message data is retained for 90 days to support analytics and support requests. You can request deletion of your data at any time.</p>

            <h2>6. Third-Party Services</h2>
            <p>We use trusted third-party services for payment processing (Stripe), hosting, and analytics. Each is bound by data processing agreements and GDPR-compliant practices.</p>

            <h2>7. Cookies</h2>
            <p>We use essential cookies for authentication and session management. Analytics cookies are used with your consent to help us understand platform usage patterns.</p>

            <h2>8. Your Rights</h2>
            <p>You have the right to access, correct, export, or delete your personal data. You can exercise these rights by contacting us at <a href="mailto:privacy@chatlync.io">privacy@chatlync.io</a>.</p>

            <h2>9. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of material changes via email or an in-app notification.</p>

            <h2>10. Contact Us</h2>
            <p>If you have questions about this privacy policy, contact us at <a href="mailto:privacy@chatlync.io">privacy@chatlync.io</a> or through our <a href="/contact">contact page</a>.</p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
