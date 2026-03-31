import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  MessageSquare, Megaphone, Bot, ShoppingCart, Users, Tags, Brain, Smartphone,
  Webhook, BarChart3, Shield, Globe, CheckCircle, Zap, Sparkles, Lock, ArrowRight
} from "lucide-react";

export const metadata = {
  title: "Features",
  description: "Explore Chatlync's powerful WhatsApp Business API features: shared team inbox, bulk broadcasts, AI chatbots, e-commerce automations, and more.",
  alternates: { canonical: "https://chatlync.io/features" },
};

const features = [
  {
    icon: MessageSquare, title: "Shared Team Inbox", tag: "Core", gradient: "from-blue-500 to-indigo-600",
    desc: "Centralize every WhatsApp conversation into one collaborative inbox. Assign chats to agents, add notes, use quick replies, and resolve tickets faster than ever.",
    highlights: ["Real-time chat with typing indicators", "Smart chat assignment & routing", "Internal notes & quick replies", "Contact profiles with full history"],
  },
  {
    icon: Megaphone, title: "Broadcast Campaigns", tag: "Marketing", gradient: "from-violet-500 to-purple-600",
    desc: "Send targeted WhatsApp campaigns to thousands with rich media, buttons, and smart audience segmentation. Track delivery and read rates in real-time.",
    highlights: ["Template-based messaging", "CSV import & audience segmentation", "Scheduled campaigns", "Delivery & read rate analytics"],
  },
  {
    icon: Bot, title: "No-Code Bot Builder", tag: "Automation", gradient: "from-emerald-500 to-teal-600",
    desc: "Design visual chatbot flows with a drag-and-drop builder. Auto-qualify leads, answer FAQs, collect feedback, and route complex queries to human agents.",
    highlights: ["Visual drag-and-drop flow editor", "Conditional branching & variables", "Media & button support", "Seamless human handoff"],
  },
  {
    icon: Brain, title: "AI Knowledge Base", tag: "AI", gradient: "from-rose-500 to-pink-600",
    desc: "Train an AI assistant on your business documents, PDFs, and FAQs. The RAG-powered chatbot answers questions accurately and learns continuously.",
    highlights: ["Document & PDF ingestion", "RAG-powered accurate answers", "Auto-learning from conversations", "Customizable AI personality"],
  },
  {
    icon: ShoppingCart, title: "E-commerce Suite", tag: "Commerce", gradient: "from-orange-500 to-amber-600",
    desc: "Integrate with Shopify and WooCommerce to automate abandoned cart recovery, COD verification, order confirmations, and fulfillment updates.",
    highlights: ["Shopify & WooCommerce integration", "Automated abandoned cart recovery", "COD verification flows", "Order tracking notifications"],
  },
  {
    icon: Users, title: "Staff & Role Management", tag: "Team", gradient: "from-cyan-500 to-blue-600",
    desc: "Add unlimited team members with granular role-based access control. Agents see only their assigned conversations; admins get full access.",
    highlights: ["Granular role-based access", "Agent performance tracking", "Smart chat assignment", "Session & device management"],
  },
  {
    icon: Tags, title: "Contact Tags & CRM", tag: "CRM", gradient: "from-lime-500 to-green-600",
    desc: "Organize contacts with custom color-coded tags, attributes, and segments. Build targeted audiences for personalized broadcast campaigns.",
    highlights: ["Custom tags & attributes", "Smart contact segmentation", "Bulk import/export", "Tag-based automation triggers"],
  },
  {
    icon: Smartphone, title: "Multi-Number Support", tag: "Enterprise", gradient: "from-gray-600 to-gray-800",
    desc: "Connect and manage multiple WhatsApp Business numbers from one dashboard. Route conversations across departments and locations.",
    highlights: ["Multiple WABA connections", "Department-based routing", "Unified conversation view", "Number-level analytics"],
  },
];

const security = [
  { icon: Shield, title: "End-to-End Encryption", desc: "All data encrypted in transit and at rest" },
  { icon: Globe, title: "GDPR Compliant", desc: "Full compliance with data protection regulations" },
  { icon: Zap, title: "99.9% Uptime SLA", desc: "Enterprise-grade reliability guaranteed" },
  { icon: Lock, title: "SOC 2 Ready", desc: "Meeting enterprise security standards" },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-white to-[var(--color-accent)]/5"></div>
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-[100px]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 animate-fade-in-down">
              <Sparkles className="w-3.5 h-3.5" /> Platform Features
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[var(--color-heading)] mb-5 tracking-tight animate-fade-in-up">
              Built for businesses that<br className="hidden md:block" />
              <span className="gradient-text">take WhatsApp seriously</span>
            </h1>
            <p className="text-lg text-[var(--color-body)] max-w-2xl mx-auto animate-fade-in-up delay-200">
              Every tool you need to convert conversations into revenue — from first message to final delivery.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isReversed = i % 2 !== 0;
              return (
                <div key={f.title} className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20`}>
                  {/* Info */}
                  <div className={`flex-1 ${isReversed ? 'reveal-right' : 'reveal-left'}`}>
                    <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 bg-gradient-to-r ${f.gradient} text-white`}>
                      <Icon className="w-3.5 h-3.5" /> {f.tag}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black text-[var(--color-heading)] mb-4 tracking-tight">{f.title}</h2>
                    <p className="text-[var(--color-body)] leading-relaxed mb-6 text-[15px]">{f.desc}</p>
                    <ul className="space-y-3">
                      {f.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm text-[var(--color-body)]">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Visual */}
                  <div className={`flex-1 w-full ${isReversed ? 'reveal-left' : 'reveal-right'}`}>
                    <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${f.gradient} p-[2px] shadow-2xl shadow-${f.gradient.split('-')[1]}-500/20`}>
                      <div className="w-full h-full rounded-[22px] bg-white/95 flex items-center justify-center relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-[0.04]`}></div>
                        <Icon className="w-24 h-24 text-gray-200 relative z-10" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Security */}
        <section className="py-20 bg-[var(--color-heading)] relative overflow-hidden noise">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 reveal">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Enterprise-Grade Security</h2>
              <p className="text-gray-400">Your data is protected with industry-leading security measures.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {security.map((s, i) => {
                const SIcon = s.icon;
                return (
                  <div key={s.title} className="reveal text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition" style={{ transitionDelay: `${i * 100}ms` }}>
                    <SIcon className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                    <p className="text-sm font-bold text-white mb-1">{s.title}</p>
                    <p className="text-xs text-gray-500">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-heading)] mb-5">Ready to get started?</h2>
            <p className="text-[var(--color-body)] mb-8">Try all features free for 7 days. No credit card required.</p>
            <a href="https://app.chatlync.io/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold rounded-2xl transition-all shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-xl text-[16px]">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
