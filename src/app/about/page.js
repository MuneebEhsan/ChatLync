import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Target, Eye, Heart, Lightbulb, Users, Globe, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About",
  description: "Learn about Chatlync — our mission to help businesses grow through intelligent WhatsApp communication.",
  alternates: { canonical: "https://chatlync.io/about" },
};

const values = [
  { icon: Target, title: "Customer First", desc: "Every feature starts with a real business problem. We listen, iterate, and deliver.", gradient: "from-blue-500 to-indigo-600" },
  { icon: Lightbulb, title: "Innovation", desc: "We push boundaries with AI, automation, and communication technology.", gradient: "from-violet-500 to-purple-600" },
  { icon: Heart, title: "Simplicity", desc: "Powerful doesn't mean complicated. Our platform is designed for anyone.", gradient: "from-rose-500 to-pink-600" },
  { icon: Globe, title: "Accessibility", desc: "Enterprise-grade tools at prices every business can afford.", gradient: "from-emerald-500 to-teal-600" },
];

const milestones = [
  { year: "2024", title: "Idea Born", desc: "Identified the gap in affordable WhatsApp Business API tools for emerging markets." },
  { year: "2024", title: "MVP Launch", desc: "Launched with shared inbox, broadcasts, and basic automation capabilities." },
  { year: "2025", title: "AI Integration", desc: "Added RAG-powered AI chatbots, knowledge base, and smart auto-replies." },
  { year: "2025", title: "E-commerce Suite", desc: "Shopify & WooCommerce integration with cart recovery and order tracking." },
  { year: "2026", title: "Scale & Growth", desc: "Multi-number support, enterprise features, serving thousands of businesses." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-white to-[var(--color-accent)]/5"></div>
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[var(--color-accent)]/10 rounded-full blur-[100px]"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 animate-fade-in-down">
              <Sparkles className="w-3.5 h-3.5" /> Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[var(--color-heading)] mb-6 tracking-tight animate-fade-in-up">
              Making WhatsApp work<br className="hidden md:block" />
              <span className="gradient-text">for every business</span>
            </h1>
            <p className="text-lg text-[var(--color-body)] max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Chatlync was born from a simple observation: businesses in emerging markets deserved the same powerful
              WhatsApp Business tools as enterprise companies — without the enterprise price tag.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="reveal-left p-10 rounded-3xl bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-indigo-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[60px]"></div>
                <Eye className="w-10 h-10 mb-5 text-white/80 relative z-10" />
                <h2 className="text-2xl font-black mb-4 relative z-10">Our Mission</h2>
                <p className="text-white/75 leading-relaxed text-[15px] relative z-10">
                  To democratize WhatsApp Business communication by building the most powerful, affordable, and intuitive
                  platform that helps businesses of all sizes connect with their customers at scale.
                </p>
              </div>
              <div className="reveal-right p-10 rounded-3xl bg-[var(--color-surface)] border border-gray-100">
                <Target className="w-10 h-10 mb-5 text-[var(--color-primary)]" />
                <h2 className="text-2xl font-black text-[var(--color-heading)] mb-4">Our Vision</h2>
                <p className="text-[var(--color-body)] leading-relaxed text-[15px]">
                  A world where every business — from a local shop to a growing e-commerce store — can leverage the power of
                  WhatsApp to deliver exceptional customer experiences and drive meaningful growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-[var(--color-surface)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h2 className="text-3xl md:text-5xl font-black text-[var(--color-heading)]">What drives us</h2>
              <p className="text-[var(--color-body)] mt-3">Core values that shape everything we build.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="reveal text-center p-7 bg-white rounded-2xl border border-gray-100 card-hover" style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-extrabold text-[var(--color-heading)] mb-2 text-lg">{v.title}</h3>
                    <p className="text-sm text-[var(--color-body)] leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-heading)] text-center mb-16 reveal">Our Journey</h2>
            <div className="space-y-0 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary-light)]"></div>
              {milestones.map((m, i) => (
                <div key={i} className="reveal flex gap-6 items-start py-4" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[var(--color-primary)] flex items-center justify-center shrink-0 relative z-10 shadow-md shadow-[var(--color-primary)]/10">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]"></div>
                  </div>
                  <div className="pb-4">
                    <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider bg-[var(--color-primary)]/10 px-2 py-0.5 rounded">{m.year}</span>
                    <h3 className="text-lg font-extrabold text-[var(--color-heading)] mt-2">{m.title}</h3>
                    <p className="text-sm text-[var(--color-body)] mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-dark)] to-indigo-900 text-white relative overflow-hidden noise">
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { val: "1,000+", label: "Businesses Served" },
                { val: "50M+", label: "Messages Sent" },
                { val: "99.9%", label: "Platform Uptime" },
                { val: "4.8/5", label: "Customer Satisfaction" },
              ].map((s, i) => (
                <div key={s.label} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="text-3xl md:text-4xl font-black">{s.val}</div>
                  <div className="text-sm text-white/50 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
