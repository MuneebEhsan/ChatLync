import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, ShieldAlert, BadgeCheck, Scale, Globe, UserCheck, HelpCircle, Mail } from "lucide-react";

export const metadata = {
  title: "Terms of Use",
  description: "ChatSync Terms of Use — governing the access and usage of our WhatsApp Business platform.",
  alternates: { canonical: "https://www.chatsync.pk/terms" },
};

export default function TermsPage() {
  const sections = [
    { id: "acceptance", label: "1. Acceptance of Terms", icon: UserCheck },
    { id: "service", label: "2. Service Description", icon: Globe },
    { id: "meta-policy", label: "3. Meta API & Policies", icon: BadgeCheck },
    { id: "accounts", label: "4. User Accounts", icon: FileText },
    { id: "billing", label: "5. Billing & Subscription", icon: Scale },
    { id: "prohibited", label: "6. Prohibited Activities", icon: ShieldAlert },
    { id: "liability", label: "7. Liability Limits", icon: HelpCircle },
    { id: "governing-law", label: "8. Governing Law", icon: Scale },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-[72px] font-sans selection:bg-indigo-600 selection:text-white">
        {/* Modern Header Banner */}
        <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, #6366F1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/15 border border-indigo-500/35 text-indigo-300 mb-4 tracking-wider uppercase">
              Legal Documents
            </span>
            <h1 className="text-4xl md:text-5xl font-black !text-white tracking-tight mb-4">
              <span className="text-white">Terms of </span>
              <span className="bg-gradient-to-r from-indigo-400 to-amber-300 bg-clip-text text-transparent">Use</span>
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
              Please read these terms carefully before accessing or using the ChatSync platform.
            </p>
            <div className="mt-6 text-xs text-slate-500">
              Last updated: March 31, 2026
            </div>
          </div>
        </section>

        {/* Page Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-28 bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-slate-200/60 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Table of Contents</h3>
                <nav className="space-y-1.5">
                  {sections.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-semibold text-slate-600 hover:bg-indigo-50/50 hover:text-indigo-600 transition-all"
                      >
                        <Icon className="w-4.5 h-4.5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                        <span>{s.label}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Terms Content Column */}
            <div className="lg:col-span-3 space-y-12">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-12 text-slate-600 leading-relaxed text-sm md:text-[15px]">
                
                <section id="acceptance" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Acceptance of Terms</h2>
                  </div>
                  <p>
                    By registering for, accessing, or using the ChatSync SaaS platform (available at <a href="https://www.chatsync.pk" className="text-indigo-600 font-semibold hover:underline">chatsync.pk</a> and its subdomains), you enter into a legally binding contract with ChatSync. If you are registering on behalf of a corporate entity, you warrant that you possess full administrative authority to bind that entity to these Terms.
                  </p>
                  <p>
                    If you do not consent to all of the terms, policies, and guidelines detailed herein, you must immediately terminate use of the platform and cancel any active registrations.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="service" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Service Description & Regional Restraints</h2>
                  </div>
                  <p>
                    ChatSync provides a specialized multi-tenant customer relationship suite designed for managing customer support, marketing, campaigns, and automated chatbots through official integrations with Meta's Cloud API infrastructure.
                  </p>
                  <div className="p-4.5 bg-amber-50/70 border border-amber-200/50 rounded-2xl text-amber-900 text-sm space-y-2">
                    <p className="font-bold flex items-center gap-1.5">
                      ⚠️ Regional Restriction Notice (Pakistan Market)
                    </p>
                    <p className="leading-relaxed">
                      ChatSync is built exclusively to serve businesses operating in the <strong>Pakistan market</strong>. All customer registrations, database storage, message relays, and integration tools strictly require and enforce Pakistani country code credentials (E.164 phone formats beginning with <strong>+92</strong>). Attempting to use the platform for unauthorized international numbers may result in automatic account termination without refund.
                    </p>
                  </div>
                </section>

                <hr className="border-slate-100" />

                <section id="meta-policy" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <BadgeCheck className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Meta Business Platform Compliance</h2>
                  </div>
                  <p>
                    As a user of our integration services, you represent and warrant that you will strictly comply with all WhatsApp Business Terms of Service, Meta Developer Policies, and standard Meta Commerce Policies.
                  </p>
                  <p>
                    Any suspension, rate-limit restriction, or account ban initiated by Meta Platforms, Inc. against your WhatsApp Business Account (WABA) due to non-compliant campaigns, spam reporting, or unsolicited message templates is your sole responsibility. ChatSync does not provide refunds or claim liability for bans induced by user policy violations.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="accounts" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. User Accounts & Shared Access</h2>
                  </div>
                  <p>
                    To access ChatSync, you must maintain a secure login and manage workspace credentials. You are responsible for ensuring that all staff members who are invited to participate in your ChatSync team obey standard organizational practices. You agree to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Maintain highly secure, unique passwords for all staff login profiles.</li>
                    <li>Notify us immediately of any unauthorized access, API credential leaks, or data breaches within your system.</li>
                    <li>Provide truthful, up-to-date business registrations and contact information.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                <section id="billing" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Scale className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Billing, Subscriptions & Cancellations</h2>
                  </div>
                  <p>
                    Subscription rates are determined by our pricing matrices ( Starter, Growth, or Business plans) in Pakistani Rupees (PKR) or equivalent currencies. 
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Free Trial:</strong> Starter plans provide a 7-day free trial. During the trial period, certain features (such as staff invitation limits) may be bounded.</li>
                    <li><strong>Payment & Processing:</strong> Paid plans are processed securely via verified Stripe integrations. It is the user's responsibility to add active payment cards for standard recurring schedules.</li>
                    <li><strong>Cancellation:</strong> You can cancel your subscription at any time. Cancellations apply to the end of the current billing cycle. No pro-rated refunds are issued for partial usage.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                <section id="prohibited" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Prohibited Activities</h2>
                  </div>
                  <p>
                    You agree that you will not utilize the ChatSync platform to engage in any unlawful, deceptive, or abusive behaviors. Prohibited behaviors include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Transmitting unsolicited promotional messages (spam) to contacts who have not actively opted-in.</li>
                    <li>Delivering content related to restricted sectors under the Meta Commerce Policy (e.g. tobacco, weapons, drugs, gambling).</li>
                    <li>Bypassing or attempting to bypass region locks or E.164 Pakistan check protocols.</li>
                    <li>Attempting to compromise, reverse-engineer, or breach our server environments.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                <section id="liability" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Limitations of Liability</h2>
                  </div>
                  <p>
                    CHATSYNC IS PROVIDED "AS IS" AND "AS AVAILABLE". TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED.
                  </p>
                  <p>
                    ChatSync shall not be liable for any indirect, incidental, special, or consequential damages. This includes, without limitation, loss of business revenues, profit margins, operational disruptions, database failures, or Meta Cloud API outages.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="governing-law" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Scale className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Governing Law & Dispute Resolution</h2>
                  </div>
                  <p>
                    These Terms of Use, their formation, interpretation, and enforcement shall be governed solely by the laws of the <strong>Islamic Republic of Pakistan</strong>, without regard to conflict of laws principles. 
                  </p>
                  <p>
                    Any disputes, controversies, or legal actions originating from these Terms shall be resolved exclusively in courts of competent jurisdiction located in Pakistan.
                  </p>
                </section>

              </div>

              {/* Bottom Support Section Card */}
              <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                <div className="space-y-2 text-center md:text-left relative z-10">
                  <h3 className="text-lg md:text-xl font-bold">Have questions about our Terms?</h3>
                  <p className="text-slate-300 text-xs md:text-sm">Our legal team is happy to guide you on compliance policies.</p>
                </div>
                <a
                  href="mailto:hello@chatsync.pk"
                  className="px-6 py-3 bg-white text-indigo-900 hover:bg-slate-50 transition rounded-xl font-bold text-sm shrink-0 shadow-sm flex items-center gap-2 relative z-10"
                >
                  <Mail className="w-4.5 h-4.5" />
                  Contact Legal
                </a>
              </div>

            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
