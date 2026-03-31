import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import {
  MessageSquare, Megaphone, Bot, ShoppingCart, Users, BarChart3, Shield, Zap,
  ArrowRight, CheckCircle, Star, Globe, ChevronRight, Sparkles, Play,
  Send, Phone, Clock, TrendingUp, Lock, Layers
} from "lucide-react";

const features = [
  { icon: MessageSquare, title: "Shared Team Inbox", desc: "Manage all WhatsApp conversations in one collaborative inbox with real-time assignment, tags, and notes.", gradient: "from-blue-500 to-indigo-600" },
  { icon: Megaphone, title: "Bulk Broadcasts", desc: "Reach thousands with targeted campaigns using rich media, templates, and smart audience segments.", gradient: "from-violet-500 to-purple-600" },
  { icon: Bot, title: "AI Chatbot Builder", desc: "Build powerful no-code chatbot flows with drag-and-drop. AI-powered auto-replies trained on your docs.", gradient: "from-emerald-500 to-teal-600" },
  { icon: ShoppingCart, title: "E-commerce Suite", desc: "Abandoned cart recovery, COD verification, order updates — fully automated through WhatsApp.", gradient: "from-orange-500 to-amber-600" },
  { icon: Users, title: "Team Management", desc: "Add staff with role-based access. Track performance, assign chats, and collaborate seamlessly.", gradient: "from-pink-500 to-rose-600" },
  { icon: BarChart3, title: "Live Analytics", desc: "Track delivery, read rates, response times, and campaign ROI with beautiful real-time dashboards.", gradient: "from-cyan-500 to-blue-600" },
];

const stats = [
  { value: "10K+", label: "Messages Daily", icon: Send },
  { value: "99.9%", label: "Uptime", icon: Shield },
  { value: "4.8★", label: "Rating", icon: Star },
  { value: "<2min", label: "Response Time", icon: Clock },
];

const steps = [
  { num: "01", title: "Connect Your Number", desc: "Sign up and link your WhatsApp Business number through Meta's secure embedded signup — takes under 5 minutes.", icon: Phone },
  { num: "02", title: "Configure & Customize", desc: "Import contacts, design message templates, build chatbot flows, and set up your team with role-based access.", icon: Layers },
  { num: "03", title: "Launch & Scale", desc: "Start sending broadcasts, automate conversations, recover abandoned carts, and watch your revenue grow.", icon: TrendingUp },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />

      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-[72px] overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary-light)]/10 blur-[100px] animate-float-slow"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[var(--color-accent)]/15 to-orange-200/10 blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-indigo-50 to-amber-50/50 blur-[120px]"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #4F46E5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 animate-fade-in-down shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-semibold text-[var(--color-heading)]">Official WhatsApp Business API Partner</span>
              <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
            </div>

            {/* Headline */}
            <h1 className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-black tracking-tight text-[var(--color-heading)] mb-6 animate-fade-in-up leading-[1.05]">
              Your WhatsApp.
              <br />
              <span className="gradient-text">Supercharged.</span>
            </h1>

            {/* Sub */}
            <p className="text-lg md:text-xl text-[var(--color-body)] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
              One platform to manage your team inbox, send bulk broadcasts, automate with AI chatbots, and drive e-commerce sales — all through the WhatsApp Business API.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <a
                href="https://app.chatlync.io/signup"
                className="group relative px-8 py-4 bg-[var(--color-primary)] text-white text-[16px] font-bold rounded-2xl transition-all shadow-xl shadow-[var(--color-primary)]/25 hover:shadow-2xl hover:shadow-[var(--color-primary)]/30 hover:scale-[1.02] flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start 7-Day Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="#demo"
                className="group px-8 py-4 glass hover:bg-white text-[var(--color-heading)] text-[16px] font-bold rounded-2xl transition-all border border-gray-200/50 hover:border-gray-300 shadow-sm flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-[var(--color-primary)]" />
                Watch Demo
              </a>
            </div>

            <p className="text-sm text-[var(--color-muted)] mt-6 animate-fade-in delay-600 flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-500" /> No credit card</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-500" /> Cancel anytime</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-500" /> 5 min setup</span>
            </p>
          </div>

          {/* Floating UI Preview */}
          <div className="relative mt-16 md:mt-24 animate-fade-in-up delay-600">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-accent)]/10 to-[var(--color-primary)]/20 rounded-3xl blur-2xl animate-pulse-glow"></div>
              <div className="relative glass rounded-2xl border border-white/40 shadow-2xl overflow-hidden">
                {/* Mock browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50/80 border-b border-gray-200/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-lg px-3 py-1.5 text-xs text-gray-400 border border-gray-200 max-w-xs mx-auto text-center">app.chatlync.io/dashboard</div>
                  </div>
                </div>
                {/* Mock dashboard */}
                <div className="p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white min-h-[300px]">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                      { label: "Total Chats", val: "1,247", color: "bg-blue-500" },
                      { label: "Open", val: "38", color: "bg-green-500" },
                      { label: "Broadcasts", val: "12", color: "bg-purple-500" },
                      { label: "Bot Sessions", val: "892", color: "bg-amber-500" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                        <div className={`w-8 h-1.5 ${s.color} rounded-full mb-3 opacity-60`}></div>
                        <div className="text-2xl font-bold text-[var(--color-heading)]">{s.val}</div>
                        <div className="text-xs text-[var(--color-muted)] mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 bg-white rounded-xl p-4 border border-gray-100 shadow-sm h-32">
                      <div className="text-xs font-semibold text-[var(--color-heading)] mb-3">Recent Conversations</div>
                      <div className="space-y-2">
                        {["Ahmed — Order #4521 inquiry", "Sara — Product return request", "Ali — Delivery status check"].map((c) => (
                          <div key={c} className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/10 shrink-0"></div>
                            <div className="text-xs text-[var(--color-body)] truncate">{c}</div>
                            <div className="w-2 h-2 rounded-full bg-green-400 ml-auto shrink-0"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm h-32">
                      <div className="text-xs font-semibold text-[var(--color-heading)] mb-3">Quick Actions</div>
                      <div className="space-y-2">
                        <div className="px-3 py-1.5 bg-[var(--color-primary)]/10 rounded-lg text-xs text-[var(--color-primary)] font-semibold">New Broadcast</div>
                        <div className="px-3 py-1.5 bg-emerald-50 rounded-lg text-xs text-emerald-600 font-semibold">Send Template</div>
                        <div className="px-3 py-1.5 bg-amber-50 rounded-lg text-xs text-amber-600 font-semibold">View Analytics</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section className="py-14 bg-[var(--color-heading)] relative overflow-hidden noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="reveal text-center">
                  <Icon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                  <div className="text-3xl md:text-4xl font-black text-white">{s.value}</div>
                  <div className="text-sm text-gray-400 mt-1 font-medium">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section className="py-24 md:py-32 bg-white relative" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <Zap className="w-3.5 h-3.5" /> Platform Features
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[var(--color-heading)] mb-5 tracking-tight">
              Everything you need to<br />
              <span className="gradient-text">grow on WhatsApp</span>
            </h2>
            <p className="text-lg text-[var(--color-body)] max-w-2xl mx-auto leading-relaxed">
              A complete suite of tools to manage, automate, and scale your WhatsApp Business communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className={`reveal group relative p-7 rounded-2xl border border-gray-100 bg-white card-hover overflow-hidden`} style={{ transitionDelay: `${i * 80}ms` }}>
                  {/* Hover gradient bg */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}></div>
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 shadow-lg shadow-${f.gradient.split('-')[1]}-500/20 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-extrabold text-[var(--color-heading)] mb-2">{f.title}</h3>
                    <p className="text-sm text-[var(--color-body)] leading-relaxed">{f.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-24 md:py-32 bg-[var(--color-surface)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 reveal">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Simple Setup
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--color-heading)] mb-4">
              Get started in 3 easy steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-[60px] left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/40 to-[var(--color-primary)]/20"></div>

            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.num} className="reveal text-center relative" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="relative inline-flex mb-6">
                    <div className="w-[80px] h-[80px] rounded-3xl bg-white border-2 border-[var(--color-primary)]/20 flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/10 relative z-10">
                      <Icon className="w-8 h-8 text-[var(--color-primary)]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-[var(--color-primary)] text-white text-xs font-black flex items-center justify-center shadow-md z-20">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-[var(--color-heading)] mb-3">{s.title}</h3>
                  <p className="text-[var(--color-body)] leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ SOCIAL PROOF ═══════ */}
      <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-[var(--color-muted)] uppercase tracking-[0.2em] mb-8 reveal">
            Trusted by businesses across industries
          </p>
          <div className="flex flex-wrap justify-center gap-3 reveal delay-200">
            {["E-commerce Brands", "Healthcare Clinics", "Real Estate", "Education Institutes", "Restaurants & Cafes", "Travel Agencies", "Fitness Studios", "SaaS Companies"].map((t, i) => (
              <span key={t} className="px-5 py-2.5 bg-[var(--color-surface)] rounded-full text-sm font-semibold text-[var(--color-body)] border border-gray-100 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5 transition-all cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIAL ═══════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-indigo-900"></div>
        <div className="absolute inset-0 noise"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-6 h-6 fill-[var(--color-accent)] text-[var(--color-accent)]" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed mb-10 text-white/95">
            &ldquo;Chatlync transformed how we handle customer support. Our response time dropped from hours to minutes,
            and sales through WhatsApp increased by <span className="text-[var(--color-accent)] font-extrabold">340%</span>.
            The AI chatbot alone handles 60% of inquiries automatically.&rdquo;
          </blockquote>
          <div>
            <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-3 text-lg font-bold text-white border-2 border-white/20">
              AH
            </div>
            <p className="font-bold text-white text-lg">Ahmed Hassan</p>
            <p className="text-white/50 text-sm">CEO, StyleHub E-commerce</p>
          </div>
        </div>
      </section>

      {/* ═══════ PRICING CTA ═══════ */}
      <section className="py-24 md:py-32 bg-[var(--color-surface)] relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[var(--color-primary)]/5 to-transparent rounded-full blur-[80px]"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--color-heading)] mb-5 tracking-tight">
            Ready to supercharge your WhatsApp?
          </h2>
          <p className="text-lg text-[var(--color-body)] mb-10 max-w-xl mx-auto">
            Join thousands of businesses already using Chatlync to grow revenue and delight customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.chatlync.io/signup"
              className="group px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-[16px] font-bold rounded-2xl transition-all shadow-xl shadow-[var(--color-primary)]/20 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-[var(--color-heading)] text-[16px] font-bold rounded-2xl transition border border-gray-200 flex items-center justify-center gap-2 shadow-sm"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
