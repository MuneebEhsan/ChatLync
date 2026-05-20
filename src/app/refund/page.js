import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DollarSign, Clock, HelpCircle, XCircle, Mail, FileText, RefreshCw, ShieldAlert, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Refund Policy",
  description: "ChatSync Refund Policy — details about our subscription refunds, cancellations, and billing protocols.",
  alternates: { canonical: "https://www.chatsync.pk/refund" },
};

export default function RefundPage() {
  const sections = [
    { id: "overview", label: "1. Policy Overview", icon: DollarSign },
    { id: "free-trial", label: "2. Free Trial & Testing", icon: BadgeCheck },
    { id: "eligibility", label: "3. Refund Eligibility", icon: ShieldAlert },
    { id: "non-refundable", label: "4. Non-Refundable Items", icon: XCircle },
    { id: "request-process", label: "5. How to Request", icon: Clock },
    { id: "cancellations", label: "6. Subscription Cancellations", icon: RefreshCw },
    { id: "contact", label: "7. Billing Support", icon: Mail },
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
              Billing & Subscriptions
            </span>
            <h1 className="text-4xl md:text-5xl font-black !text-white tracking-tight mb-4">
              <span className="text-white">Refund </span>
              <span className="bg-gradient-to-r from-indigo-400 to-amber-300 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
              Understand our cancellation terms, trial parameters, and how subscription refund requests are evaluated.
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
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Sections</h3>
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

            {/* Content Column */}
            <div className="lg:col-span-3 space-y-12">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-12 text-slate-600 leading-relaxed text-sm md:text-[15px]">
                
                <section id="overview" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Policy Overview</h2>
                  </div>
                  <p>
                    ChatSync provides a Software-as-a-Service (SaaS) WhatsApp Business API platform designed to streamline business communications. To maintain maximum trust and absolute transparency with our clients, we have structured a fair billing and refund framework.
                  </p>
                  <p>
                    By subscribing to any of our plans (Monthly or Annually), you agree to these Refund and Cancellation policies as part of our master Terms of Service.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="free-trial" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <BadgeCheck className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Free Trial & Testing</h2>
                  </div>
                  <p>
                    To help you evaluate our platform before committing financially, we offer:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>A fully featured <strong>7-day free trial</strong> requiring <strong>no credit card information</strong>.</li>
                    <li>Full access to standard team inbox components, campaign messaging, and our drag-and-drop chatbot builder.</li>
                    <li>Complimentary setup guidance from our technical team.</li>
                  </ul>
                  <p>
                    Because this free trial allows you to test the service extensively without any financial risk, refunds will not be granted based on features or functionalities that could have been tested during the trial period.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="eligibility" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Refund Eligibility</h2>
                  </div>
                  <p>
                    All subscriptions are billed in advance on a recurring monthly or annual basis. Refunds are evaluated and approved strictly under the following criteria:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Severe Platform Downtime:</strong> If a persistent technical breakdown on ChatSync’s side prevents you from utilizing the platform entirely for more than 48 consecutive hours, you may request a pro-rated refund for the affected period.
                    </li>
                    <li>
                      <strong>Annual Plan Grace Period:</strong> Subscriptions on Annual billing plans are eligible for a refund request within <strong>14 calendar days</strong> of initial payment. Any requested refund during this window will be pro-rated for the days utilized and subject to a 10% administrative processing fee.
                    </li>
                    <li>
                      <strong>Billing Discrepancies:</strong> If you are double-billed or charged an incorrect rate due to a technical invoicing error, we will credit back the erroneous amount in full within 5–7 business days of verification.
                    </li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                <section id="non-refundable" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Non-Refundable Items & Situations</h2>
                  </div>
                  <p>
                    The following costs are strictly non-refundable under any circumstance:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Monthly Subscriptions:</strong> Standard monthly subscription fees once a billing cycle has commenced.</li>
                    <li><strong>Meta Conversation Fees:</strong> All direct charges related to WhatsApp conversation-based credits passed through directly to Meta.</li>
                    <li><strong>Setup & Customization Services:</strong> Any technical one-time onboarding charges, design fees, custom integrations, or tailored chatbot engineering services.</li>
                    <li><strong>Meta Policy Violations:</strong> No refunds are issued if your WhatsApp Business Profile or phone number is blocked, suspended, or flagged by Meta Platforms, Inc. due to spamming, policy infractions, or negative user feedback.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                <section id="request-process" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Refund Request Process</h2>
                  </div>
                  <p>
                    To initiate a formal refund review:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Draft an email addressed directly to our billing desk at <a href="mailto:billing@chatsync.pk" className="text-indigo-600 font-semibold hover:underline">billing@chatsync.pk</a>.</li>
                    <li>Include your account administrator email, business name, registration details, and the transaction receipt.</li>
                    <li>Explain in detail the specific reason or technical platform failure prompting the refund request.</li>
                  </ol>
                  <p>
                    Our billing team will review all queries and communicate our assessment within <strong>3 to 5 business days</strong>. If approved, refunds are credited back to your original source of payment within 5 to 10 processing days, depending on bank guidelines.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="cancellations" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <RefreshCw className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Subscription Cancellations</h2>
                  </div>
                  <p>
                    You can cancel your subscription at any time. You can do so directly within your Account Settings or by lodging a ticket.
                  </p>
                  <p>
                    Following a successful cancellation, your workspace access remains active with full features until the end of your currently paid billing period (monthly or annual). We do not provide partial pro-rated credits for the remaining days of a cancelled subscription period.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="contact" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Billing Support</h2>
                  </div>
                  <p>
                    If you have questions regarding an invoice, require a change in billing details, or wish to upgrade or downgrade your tier, reach out to our team:
                  </p>
                  <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Billing Desk</p>
                      <p className="text-slate-800 font-bold text-sm">ChatSync Billing & Accounting</p>
                    </div>
                    <a
                      href="mailto:billing@chatsync.pk"
                      className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition rounded-xl font-bold text-xs shrink-0 flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <Mail className="w-4 h-4" />
                      billing@chatsync.pk
                    </a>
                  </div>
                </section>

              </div>

              {/* Bottom Support Section Card */}
              <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                <div className="space-y-2 text-center md:text-left relative z-10">
                  <h3 className="text-lg md:text-xl font-bold">Have general questions about pricing?</h3>
                  <p className="text-slate-300 text-xs md:text-sm">Check our pricing page or contact our team to select a fitting subscription plan.</p>
                </div>
                <a
                  href="/pricing"
                  className="px-6 py-3 bg-white text-indigo-900 hover:bg-slate-50 transition rounded-xl font-bold text-sm shrink-0 shadow-sm flex items-center gap-2 relative z-10"
                >
                  <FileText className="w-4.5 h-4.5" />
                  View Pricing Plans
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
