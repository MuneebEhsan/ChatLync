import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, MessageSquare, Clock, Send, Sparkles } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the Chatlync team for sales inquiries, technical support, partnerships, and more.",
  alternates: { canonical: "https://chatlync.io/contact" },
};

const contactInfo = [
  { icon: Mail, title: "Email Us", detail: "hello@chatlync.io", sub: "We'll respond within 24 hours", gradient: "from-blue-500 to-indigo-600" },
  { icon: MessageSquare, title: "WhatsApp", detail: "+92 315 4239421", sub: "Chat with us directly", gradient: "from-emerald-500 to-teal-600" },
  { icon: Clock, title: "Support Hours", detail: "Mon – Sat, 9AM – 9PM PKT", sub: "24/7 for Business plan", gradient: "from-violet-500 to-purple-600" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-white to-[var(--color-accent)]/5"></div>
          <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/10 rounded-full blur-[100px]"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 animate-fade-in-down">
              <Sparkles className="w-3.5 h-3.5" /> Contact
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[var(--color-heading)] mb-5 tracking-tight animate-fade-in-up">
              Let&apos;s talk
            </h1>
            <p className="text-lg text-[var(--color-body)] max-w-xl mx-auto animate-fade-in-up delay-200">
              Whether you have a question about features, pricing, or partnerships — our team is ready to help.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Info */}
              <div className="lg:col-span-2 space-y-5 reveal-left">
                <div className="mb-2">
                  <h2 className="text-2xl font-black text-[var(--color-heading)] mb-2">Get in touch</h2>
                  <p className="text-[var(--color-body)]">Choose the most convenient way to reach us.</p>
                </div>
                {contactInfo.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="flex gap-4 p-5 rounded-2xl bg-[var(--color-surface)] border border-gray-100 card-hover">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--color-heading)] text-sm">{c.title}</h3>
                        <p className="text-[var(--color-heading)] text-[15px] font-semibold">{c.detail}</p>
                        <p className="text-xs text-[var(--color-muted)] mt-0.5">{c.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Form */}
              <div className="lg:col-span-3 reveal-right">
                <form className="p-8 md:p-10 bg-[var(--color-surface)] rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-extrabold text-[var(--color-heading)] mb-6">Send us a message</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-heading)] mb-1.5">First Name</label>
                      <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-heading)] mb-1.5">Last Name</label>
                      <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-[var(--color-heading)] mb-1.5">Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-[var(--color-heading)] mb-1.5">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition text-[var(--color-body)]">
                      <option>Sales Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Feature Request</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-[var(--color-heading)] mb-1.5">Message</label>
                    <textarea rows={5} placeholder="Tell us how we can help..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold rounded-xl transition-all shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-xl text-[15px]">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
