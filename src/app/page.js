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
  { icon: MessageSquare, title: "Shared Team Inbox", desc: "Manage all WhatsApp conversations in one collaborative inbox with real-time assignment, tags, and notes.", gradient: "from-blue-500 to-indigo-600", slug: "shared-team-inbox" },
  { icon: Megaphone, title: "Bulk Broadcasts", desc: "Reach thousands with targeted campaigns using rich media, templates, and smart audience segments.", gradient: "from-violet-500 to-purple-600", slug: "broadcast-campaigns" },
  { icon: Bot, title: "AI Chatbot Builder", desc: "Build powerful no-code chatbot flows with drag-and-drop. AI-powered auto-replies trained on your docs.", gradient: "from-emerald-500 to-teal-600", slug: "no-code-bot-builder" },
  { icon: ShoppingCart, title: "E-commerce Suite", desc: "Abandoned cart recovery, COD verification, order updates — fully automated through WhatsApp.", gradient: "from-orange-500 to-amber-600", slug: "e-commerce-suite" },
  { icon: Users, title: "Team Management", desc: "Add staff with role-based access. Track performance, assign chats, and collaborate seamlessly.", gradient: "from-pink-500 to-rose-600", slug: "staff-role-management" },
  { icon: BarChart3, title: "Live Analytics", desc: "Track delivery, read rates, response times, and campaign ROI with beautiful real-time dashboards.", gradient: "from-cyan-500 to-blue-600", slug: "contact-tags-crm" },
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
            <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8 animate-fade-in-down shadow-sm border border-gray-200/50">
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="#0668E1" className="h-4.5 w-auto shrink-0" style={{ height: '18px' }}>
                  <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
                </svg>
                <span className="text-sm font-bold text-gray-900 tracking-tight">Meta</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" fill="#25D366" className="w-4 h-4 shrink-0">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                <span className="text-sm font-semibold text-[var(--color-heading)]">Official Business API Partner</span>
              </div>
              <div className="flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                <CheckCircle className="w-3 h-3" />
                Verified
              </div>
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
                href="https://app.chatsync.pk/signup"
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
                    <div className="bg-white rounded-lg px-3 py-1.5 text-xs text-gray-400 border border-gray-200 max-w-xs mx-auto text-center">app.chatsync.pk/dashboard</div>
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
                    <div className="col-span-2 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <div className="text-xs font-semibold text-[var(--color-heading)] mb-3">Recent Conversations</div>
                      <div className="space-y-2">
                        {["Ahmed — Order #4521 inquiry", "Sara — Product return request", "Ali — COD confirmation pending"].map((c) => (
                          <div key={c} className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/10 shrink-0"></div>
                            <div className="text-xs text-[var(--color-body)] truncate">{c}</div>
                            <div className="w-2 h-2 rounded-full bg-green-400 ml-auto shrink-0"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
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
                <Link
                  key={f.title}
                  href={`/features#${f.slug}`}
                  className="reveal block group relative p-7 rounded-2xl border border-gray-100 bg-white card-hover overflow-hidden cursor-pointer"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
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
                </Link>
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
      <section className="py-20 bg-gradient-to-b from-white via-[var(--color-surface)] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #4F46E5 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 reveal">
            <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <Globe className="w-3.5 h-3.5" /> Trusted Across Pakistan
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-heading)] tracking-tight">
              Powering Pakistani businesses across industries
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal delay-200">
            {[
              { name: "E-commerce", count: "400+", icon: ShoppingCart, gradient: "from-orange-500 to-amber-500" },
              { name: "Healthcare", count: "150+", icon: Shield, gradient: "from-emerald-500 to-teal-500" },
              { name: "Real Estate", count: "200+", icon: Globe, gradient: "from-blue-500 to-indigo-500" },
              { name: "Education", count: "120+", icon: Users, gradient: "from-violet-500 to-purple-500" },
              { name: "Restaurants", count: "180+", icon: Star, gradient: "from-rose-500 to-pink-500" },
              { name: "Travel & Tourism", count: "90+", icon: Send, gradient: "from-cyan-500 to-blue-500" },
              { name: "Clothing & Fashion", count: "210+", icon: Zap, gradient: "from-lime-500 to-green-500" },
              { name: "Auto Parts", count: "75+", icon: Layers, gradient: "from-gray-600 to-gray-800" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="group relative p-5 rounded-2xl bg-white border border-gray-100 card-hover overflow-hidden text-center" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}></div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm font-bold text-[var(--color-heading)] mb-0.5">{item.name}</p>
                  <p className="text-xs text-[var(--color-primary)] font-bold">{item.count} businesses</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIAL ═══════ */}
      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-heading)] via-slate-900 to-indigo-950"></div>
        <div className="absolute inset-0 noise"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary)]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-white/10">
              <Star className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Customer Stories
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4" style={{ color: 'white' }}>
              Loved by businesses <span className="text-[var(--color-accent)]">everywhere</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">See why growing businesses choose ChatSync to power their WhatsApp communication.</p>
          </div>

          {/* Featured Review */}
          <div className="reveal mb-10">
            <div className="relative max-w-3xl mx-auto p-8 md:p-12 rounded-3xl bg-white/[0.06] border border-white/10 backdrop-blur-sm">
              <div className="absolute top-6 right-8 text-[80px] leading-none font-serif text-white/[0.06] select-none">&rdquo;</div>
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed text-white/90 mb-8">
                &ldquo;ChatSync transformed how we handle customer support. Our response time dropped from hours to minutes,
                and sales through WhatsApp increased by <span className="text-[var(--color-accent)] font-extrabold">340%</span>.
                The AI chatbot alone handles 60% of inquiries automatically.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center text-white font-bold text-sm border-2 border-white/20 shadow-lg">AH</div>
                <div>
                  <p className="font-bold text-white">Ahmed Hassan</p>
                  <p className="text-sm text-gray-400">CEO, StyleHub — Lahore</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5" />
                  340% Sales Increase
                </div>
              </div>
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Sara Malik",
                role: "Marketing Head, FreshCart — Karachi",
                initials: "SM",
                gradient: "from-rose-500 to-pink-600",
                text: "The broadcast feature is incredible. We went from manually messaging customers to reaching 5,000+ at once with personalized campaigns. Open rates are consistently above 85%.",
                metric: "85% Open Rate",
              },
              {
                name: "Usman Ali",
                role: "Founder, AutoParts.pk — Lahore",
                initials: "UA",
                gradient: "from-emerald-500 to-teal-600",
                text: "Abandoned cart recovery alone paid for the subscription 10x over. We're recovering 35% of abandoned carts automatically through WhatsApp — no manual follow-ups needed.",
                metric: "35% Cart Recovery",
              },
              {
                name: "Fatima Zaidi",
                role: "Operations, HealthPlus Clinic — Islamabad",
                initials: "FZ",
                gradient: "from-violet-500 to-purple-600",
                text: "Managing appointment reminders and patient follow-ups was a nightmare. Now the chatbot handles it all. We've reduced no-shows by 60% and our staff can focus on care.",
                metric: "60% Less No-Shows",
              },
            ].map((review, i) => (
              <div key={review.name} className="reveal p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                    {review.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white">{review.name}</p>
                    <p className="text-xs text-gray-500 truncate">{review.role}</p>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3" />
                  {review.metric}
                </div>
              </div>
            ))}
          </div>

          {/* Credibility Badge */}
          <div className="mt-12 text-center reveal">
            <div className="inline-flex items-center gap-4 bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-4">
              <div className="flex -space-x-2">
                {["AH", "SM", "UA", "FZ"].map((init, i) => (
                  <div key={init} className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center text-white text-[10px] font-bold border-2 border-slate-900">{init}</div>
                ))}
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-[10px] font-bold border-2 border-slate-900">+</div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.8/5</span>
                </div>
                <p className="text-xs text-gray-500">Based on 200+ Pakistani business reviews</p>
              </div>
            </div>
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
            Join hundreds of Pakistani businesses already using ChatSync to grow revenue and delight customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.chatsync.pk/signup"
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
