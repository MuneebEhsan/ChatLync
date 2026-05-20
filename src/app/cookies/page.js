import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Disc, Shield, Settings, Sliders, Info, Lock, RefreshCw, Mail, FileText } from "lucide-react";

export const metadata = {
  title: "Cookie Policy",
  description: "ChatSync Cookie Policy — learn how we use cookies, local storage, and tracking technologies to power your workspace.",
  alternates: { canonical: "https://www.chatsync.pk/cookies" },
};

export default function CookiePage() {
  const sections = [
    { id: "overview", label: "1. Policy Overview", icon: Info },
    { id: "what-are-cookies", label: "2. What Are Cookies?", icon: Disc },
    { id: "how-we-use", label: "3. How We Use Cookies", icon: Settings },
    { id: "categories", label: "4. Cookie Classifications", icon: Shield },
    { id: "managing", label: "5. Managing Your Preferences", icon: Sliders },
    { id: "security", label: "6. Security & Telemetry", icon: Lock },
    { id: "changes", label: "7. Policy Changes", icon: RefreshCw },
    { id: "contact", label: "8. Contact Us", icon: Mail },
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
              Tracking & Technologies
            </span>
            <h1 className="text-4xl md:text-5xl font-black !text-white tracking-tight mb-4">
              <span className="text-white">Cookie </span>
              <span className="bg-gradient-to-r from-indigo-400 to-amber-300 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
              Learn how we utilize cookies, web beacons, and local browser storage to keep ChatSync secure, performant, and reliable.
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
                      <Info className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Policy Overview</h2>
                  </div>
                  <p>
                    This Cookie Policy explains how ChatSync ("we", "us", or "our") uses cookies and similar browser tracking technologies when you visit our public website, navigate our landing pages, or access the active customer dashboard portal.
                  </p>
                  <p>
                    We believe in being entirely upfront and clear about how we handle system telemetries. We use cookies strictly to authenticate sessions, provide smooth workspace routing, and continuously analyze platform speeds.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="what-are-cookies" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Disc className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. What Are Cookies?</h2>
                  </div>
                  <p>
                    Cookies are small text strings containing key-value configurations sent by a web server and stored in your web browser or local drive. They serve multiple core tasks:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Session Cookies:</strong> Temporary files that are immediately discarded once you close your active browser application.</li>
                    <li><strong>Persistent Cookies:</strong> Standard records kept on your browser device for a preset duration, letting our system remember you across multiple browser sessions.</li>
                    <li><strong>First-Party Cookies:</strong> Unique identifiers placed and operated directly by ChatSync domain parameters.</li>
                    <li><strong>Third-Party Cookies:</strong> Cookies set by external partners (such as SafePay or analysis services) to securely verify payments or compile aggregate telemetry statistics.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                <section id="how-we-use" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Settings className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. How We Use Cookies</h2>
                  </div>
                  <p>
                    Cookies play an integral role in keeping our workspace functional. They enable:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Verifying active logged-in user tokens to prevent unauthorized page entry.</li>
                    <li>Handling multi-tenant isolation, ensuring your team data remains completely partitioned.</li>
                    <li>Analyzing landing page traffic to measure active signup rates.</li>
                    <li>Protecting web form operations against Cross-Site Request Forgery (CSRF) exploits.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                <section id="categories" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Cookie Classifications</h2>
                  </div>
                  <p>
                    We classify cookies into three distinct functional tiers:
                  </p>
                  <div className="space-y-4 mt-3">
                    <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-2xl">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">A. Essential & Functional Cookies (First-Party)</h4>
                      <p className="text-xs text-slate-600">
                        Absolutely necessary for the baseline operations of our platform. They preserve active administrator sessions, secure the API calls inside the dashboard, and manage dark/light modes. Disabling these will cause parts of the workspace to break entirely.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-2xl">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">B. Performance & Analytics Cookies (Third-Party)</h4>
                      <p className="text-xs text-slate-600">
                        Help us collect anonymous data regarding which landing pages are visited, active session length, and button click parameters. We use this diagnostic data solely to optimize load speeds and fix layout glitches.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-2xl">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">C. Secure Transaction Cookies (SafePay)</h4>
                      <p className="text-xs text-slate-600">
                        Placed by our secure PCI-compliant processor SafePay. These cookies protect payment transactions, detect fraudulent activities, and authenticate active invoice checkouts securely.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                <section id="managing" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Sliders className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Managing Your Preferences</h2>
                  </div>
                  <p>
                    You possess full sovereignty over how cookies are stored. You can manage your preferences through the following avenues:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Browser Settings:</strong> You can configure your browser (Chrome, Edge, Safari, Firefox) to discard or decline cookies. Please consult your browser's "Help" or "Privacy" configuration panels for specific guidelines.
                    </li>
                    <li>
                      <strong>Clearing Local Storage:</strong> You can manually wipe all browser cookies, tokens, and local cache databases at any time.
                    </li>
                    <li>
                      <strong>Analytics Opt-Out:</strong> Opt-out of anonymous traffic collection tools via standard browser add-ons or global privacy headers (like Do Not Track).
                    </li>
                  </ul>
                  <p className="text-amber-600 font-semibold bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs flex gap-2">
                    <span>⚠️</span>
                    <span>Please note that blocking essential cookies will immediately impair your ability to log in or operate the ChatSync admin dashboard portal successfully.</span>
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="security" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Lock className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Security & Telemetry Safety</h2>
                  </div>
                  <p>
                    No cookies placed directly by ChatSync are ever configured to scan your local drive or retrieve unrelated personal databases.
                  </p>
                  <p>
                    We guarantee that all session tracking identifiers are transmitted strictly over secure HTTPS connections using robust `HttpOnly` and `SameSite=Strict` attributes to completely eliminate the threat of Cross-Site Scripting (XSS) hijackings.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="changes" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <RefreshCw className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Policy Changes</h2>
                  </div>
                  <p>
                    We reserves the absolute right to revise this Cookie Policy periodically to reflect engineering optimizations, new web browser standards, or compliance directives.
                  </p>
                  <p>
                    We encourage you to visit this page periodically to remain informed about how we maintain platform integrity and efficiency.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="contact" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Contact Us</h2>
                  </div>
                  <p>
                    If you have any questions or concerns regarding our technical utilization of cookies, tracking telemetries, or data safety measures:
                  </p>
                  <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Privacy Desk</p>
                      <p className="text-slate-800 font-bold text-sm">ChatSync PK Privacy Administration</p>
                    </div>
                    <a
                      href="mailto:privacy@chatsync.pk"
                      className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition rounded-xl font-bold text-xs shrink-0 flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <Mail className="w-4 h-4" />
                      privacy@chatsync.pk
                    </a>
                  </div>
                </section>

              </div>

              {/* Bottom Support Section Card */}
              <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                <div className="space-y-2 text-center md:text-left relative z-10">
                  <h3 className="text-lg md:text-xl font-bold">Want to learn more about data safety?</h3>
                  <p className="text-slate-300 text-xs md:text-sm">Read our full Privacy Policy for details on data encryption, storage limits, and your rights.</p>
                </div>
                <a
                  href="/privacy"
                  className="px-6 py-3 bg-white text-indigo-900 hover:bg-slate-50 transition rounded-xl font-bold text-sm shrink-0 shadow-sm flex items-center gap-2 relative z-10"
                >
                  <FileText className="w-4.5 h-4.5" />
                  Read Privacy Policy
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
