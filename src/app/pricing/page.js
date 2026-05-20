"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { CheckCircle, X, ArrowRight, Zap, Crown, Building2, Sparkles, Shield, ChevronDown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for small businesses getting started with WhatsApp automation.",
    monthly: 4000,
    yearly: 40000,
    icon: Zap,
    gradient: "from-blue-500 to-indigo-600",
    features: [
      { text: "1 WhatsApp Business number", ok: true },
      { text: "Shared Team Inbox", ok: true },
      { text: "Campaign Messaging & Notifications", ok: true },
      { text: "No-Code Bot Builder", ok: true },
      { text: "Message Templates", ok: true },
      { text: "Up to 3 Staff Members", ok: true },
      { text: "Contact Tags & Segmentation", ok: true },
      { text: "E-commerce Automations", ok: false },
      { text: "AI Knowledge Base", ok: false },
      { text: "Multi-Number Support", ok: false },
    ],
    cta: "Start Free Trial",
    hasTrial: true,
  },
  {
    name: "Growth",
    desc: "For established stores scaling their WhatsApp operations and sales.",
    monthly: 8500,
    yearly: 85000,
    icon: Crown,
    gradient: "from-violet-500 to-purple-600",
    popular: true,
    features: [
      { text: "Everything in Starter", ok: true, bold: true },
      { text: "Up to 10 Staff Members", ok: true },
      { text: "Shopify & WooCommerce Integration", ok: true },
      { text: "Abandoned Cart Recovery", ok: true },
      { text: "COD Verification Flows", ok: true },
      { text: "Full API Access & Webhooks", ok: true },
      { text: "Advanced Contact Attributes", ok: true },
      { text: "Multi-Number Support (2 nos.)", ok: true },
      { text: "Priority Email Support", ok: true },
      { text: "AI Knowledge Base", ok: false },
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Business",
    desc: "Advanced AI routing & maximum platform limits for high-volume teams.",
    monthly: 18000,
    yearly: 180000,
    icon: Building2,
    gradient: "from-gray-700 to-gray-900",
    features: [
      { text: "Everything in Growth", ok: true, bold: true },
      { text: "Unlimited Staff Members", ok: true },
      { text: "RAG AI Chatbot (Knowledge Base)", ok: true },
      { text: "Multi-Number Support (5 nos.)", ok: true },
      { text: "Dedicated Success Manager", ok: true },
      { text: "Priority 24/7 Support", ok: true },
      { text: "Custom API Rate Limits", ok: true },
      { text: "Advanced Analytics Dashboard", ok: true },
      { text: "SLA Guarantee", ok: true },
      { text: "White-Label Options", ok: true },
    ],
    cta: "Contact Sales",
  },
];

const faqs = [
  { q: "What happens after the 7-day free trial?", a: "Your account will automatically switch to your selected plan. If you don't add a payment method, your account will be paused — no surprise charges." },
  { q: "Can I change plans later?", a: "Absolutely! Upgrade or downgrade anytime from your dashboard. Changes take effect immediately with prorated billing." },
  { q: "Are WhatsApp conversation charges included?", a: "No. Meta charges per-conversation fees separately (marketing, utility, service). The ChatSync subscription covers platform access only." },
  { q: "What payment methods do you accept?", a: "We support JazzCash, Easypaisa, local bank transfers (SadaBiz), and major debit/credit cards. Small businesses can pay directly from their mobile wallets — just enter your number, receive a prompt, and approve." },
  { q: "Can I use any Pakistani WhatsApp number?", a: "Yes! Any Pakistani mobile number starting with +92 (e.g., 0300, 0301, 0321, 0333 series) can be connected. The number must be a verified WhatsApp Business number through Meta's embedded signup." },
  { q: "Do you offer custom enterprise plans?", a: "Yes! Contact our sales team for custom pricing, dedicated infrastructure, SLA guarantees, and white-label options tailored for large Pakistani enterprises." },
  { q: "Is there a setup fee?", a: "Never. Zero setup fees, zero hidden charges. Sign up, connect your number, and start sending in minutes." },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-white to-[var(--color-accent)]/5"></div>
          <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[100px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 animate-fade-in-down">
              <Sparkles className="w-3.5 h-3.5" /> Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[var(--color-heading)] mb-5 tracking-tight animate-fade-in-up">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-[var(--color-body)] max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              Start free for 7 days. No credit card required. Upgrade when you&apos;re ready to scale.
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 bg-[var(--color-surface)] rounded-2xl p-1.5 border border-gray-200 animate-fade-in-up delay-300">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  !isYearly
                    ? "bg-white text-[var(--color-heading)] shadow-md"
                    : "text-[var(--color-muted)] hover:text-[var(--color-body)]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  isYearly
                    ? "bg-white text-[var(--color-heading)] shadow-md"
                    : "text-[var(--color-muted)] hover:text-[var(--color-body)]"
                }`}
              >
                Yearly
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Save ~17%</span>
              </button>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="pb-20 md:pb-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {plans.map((plan, idx) => {
                const Icon = plan.icon;
                const price = isYearly ? plan.yearly : plan.monthly;
                const period = isYearly ? "/year" : "/month";
                return (
                  <div
                    key={plan.name}
                    className={`reveal relative rounded-3xl border-2 p-8 flex flex-col card-hover ${
                      plan.popular
                        ? "border-[var(--color-primary)] shadow-2xl shadow-[var(--color-primary)]/10 md:scale-[1.03]"
                        : "border-gray-100"
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-[var(--color-primary)]/30">
                        ⭐ Most Popular
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-[var(--color-heading)]">{plan.name}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--color-body)] leading-relaxed">{plan.desc}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-[var(--color-heading)]">Rs {price.toLocaleString()}</span>
                        <span className="text-sm text-[var(--color-muted)] font-medium">{period}</span>
                      </div>
                      {!isYearly && (
                        <p className="text-xs text-[var(--color-muted)] mt-1.5">
                          or Rs {plan.yearly.toLocaleString()}/year <span className="text-green-600 font-semibold">(save ~17%)</span>
                        </p>
                      )}
                      {isYearly && (
                        <p className="text-xs text-green-600 font-semibold mt-1.5">
                          That's Rs {Math.round(plan.yearly / 12).toLocaleString()}/month — you save Rs {(plan.monthly * 12 - plan.yearly).toLocaleString()}!
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li key={f.text} className="flex items-start gap-2.5 text-[13px]">
                          {f.ok ? (
                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
                          )}
                          <span className={f.ok ? (f.bold ? "font-bold text-[var(--color-heading)]" : "text-[var(--color-body)]") : "text-gray-400 line-through"}>
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="https://app.chatsync.pk/signup"
                      className={`w-full py-3.5 rounded-xl text-center font-bold text-[15px] transition-all flex items-center justify-center gap-2 ${
                        plan.popular
                          ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-xl"
                          : "bg-[var(--color-surface)] hover:bg-gray-100 text-[var(--color-heading)] border border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    {plan.hasTrial && (
                      <p className="text-xs text-center text-green-600 font-semibold mt-3 flex items-center justify-center gap-1">
                        <Shield className="w-3 h-3" /> 7-day free trial included
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Guarantee */}
            <div className="mt-12 text-center reveal">
              <div className="inline-flex items-center gap-3 glass rounded-2xl px-6 py-4 border border-gray-200/50">
                <Shield className="w-5 h-5 text-green-500" />
                <p className="text-sm text-[var(--color-body)]">
                  <span className="font-bold text-[var(--color-heading)]">Money-back guarantee.</span> Not happy? Get a full refund within 14 days, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-[var(--color-surface)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-heading)] text-center mb-14 reveal">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={f.q} className="reveal group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm" style={{ transitionDelay: `${i * 80}ms` }}>
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-[var(--color-heading)] font-semibold text-[15px] hover:bg-gray-50/50 transition select-none">
                    {f.q}
                    <ChevronDown className="w-4 h-4 text-[var(--color-muted)] group-open:rotate-180 transition-transform duration-300 shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-5 text-sm text-[var(--color-body)] leading-relaxed border-t border-gray-50 pt-4">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
