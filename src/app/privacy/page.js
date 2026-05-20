import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eye, Shield, Cpu, Lock, Calendar, Server, Disc, Award, RefreshCw, Mail, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "ChatSync Privacy Policy — how we collect, use, and protect your personal and business data.",
  alternates: { canonical: "https://www.chatsync.pk/privacy" },
};

export default function PrivacyPage() {
  const sections = [
    { id: "collect", label: "1. Information We Collect", icon: Eye },
    { id: "use", label: "2. How We Use Data", icon: Shield },
    { id: "meta", label: "3. WhatsApp & Meta Data", icon: Cpu },
    { id: "security", label: "4. Data Security", icon: Lock },
    { id: "retention", label: "5. Data Retention", icon: Calendar },
    { id: "third-party", label: "6. Third-Party Services", icon: Server },
    { id: "cookies", label: "7. Cookies", icon: Disc },
    { id: "rights", label: "8. Your Rights", icon: Award },
    { id: "changes", label: "9. Policy Changes", icon: RefreshCw },
    { id: "contact", label: "10. Contact Us", icon: Mail },
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
              <span className="text-white">Privacy </span>
              <span className="bg-gradient-to-r from-indigo-400 to-amber-300 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
              Learn how we collect, protect, process, and respect your personal and organization data.
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

            {/* Privacy Content Column */}
            <div className="lg:col-span-3 space-y-12">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-12 text-slate-600 leading-relaxed text-sm md:text-[15px]">
                
                <section id="collect" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Eye className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Information We Collect</h2>
                  </div>
                  <p>
                    We collect personal and professional information that you submit directly to us during the creation and management of your account. This includes your business name, corporate registry particulars, contact person name, email address, phone number, and billing parameters.
                  </p>
                  <p>
                    Furthermore, we automatically log browser parameters, system configurations, referral source details, active cookies, IP routing entries, and relative application diagnostic statistics to keep our systems secure and performant.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="use" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. How We Use Your Information</h2>
                  </div>
                  <p>
                    Your primary organization data is processed selectively to run, update, and improve ChatSync resources. Specific processing actions consist of:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Securing user sign-in authentications and preventing malicious activity.</li>
                    <li>Handling standard monthly/annually card billing sessions.</li>
                    <li>Notifying accounts regarding service notifications, webhook updates, and platform features.</li>
                    <li>Providing technical engineering support.</li>
                  </ul>
                  <p>
                    Under no circumstances does ChatSync ever sell, swap, or distribute user personal databases to third-party brokers for advertising purposes.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="meta" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. WhatsApp & Meta Platform Data Handling</h2>
                  </div>
                  <p>
                    ChatSync facilitates message communication by routing transmission queues directly through Meta’s Cloud API gateways. 
                  </p>
                  <p>
                    Any transaction information, messaging media, customer numbers, templates, and contact listings are securely transferred to Meta Platforms, Inc. and processed according to standard Meta Business Terms and Conditions. ChatSync caches local communication logs securely solely to render dashboard analytics and message feeds within your team workspace.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="security" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Lock className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Data Security & Storage Controls</h2>
                  </div>
                  <p>
                    We enforce multiple layers of technical, administrative, and physical security measures to guarantee data integrity:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Encryption of all database assets at rest utilizing Advanced Encryption Standard (AES-256).</li>
                    <li>Secure SSL/TLS 1.3 tunnels for all data in transit.</li>
                    <li>Strict token-based workspace access isolations to prevent multi-tenant cross-talk.</li>
                    <li>Continual vulnerability tests and strict system patching protocols.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                <section id="retention" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Data Retention Boundaries</h2>
                  </div>
                  <p>
                    Your central business account records are preserved as long as your subscription profile remains active. Customer message caches, media assets, and delivery reports are kept for a maximum sliding window of 90 days. This cycle ensures robust analytics while keeping our database lightweight. 
                  </p>
                  <p>
                    Upon standard user closure requests, all database records will be permanently purged or anonymized within 30 business days.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="third-party" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Server className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Third-Party Subprocessors</h2>
                  </div>
                  <p>
                    We delegate operational components to trusted, compliant subprocessors under strict processing bounds:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Hosting Infrastructures:</strong> Secure enterprise cloud servers.</li>
                    <li><strong>Payment Gateways:</strong> SafePay for PCI-DSS compliant payment handling.</li>
                    <li><strong>Telemetry & Diagnostics:</strong> Anonymous logging for speed diagnostics.</li>
                  </ul>
                </section>

                <hr className="border-slate-100" />

                <section id="cookies" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Disc className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Cookies & Local Storage</h2>
                  </div>
                  <p>
                    We utilize strictly necessary cookies and local storage tokens to preserve session authorizations, manage logged-in states, and protect page transitions.
                  </p>
                  <p>
                    Analytical cookie parameters might be placed upon cookie consent approval to trace landing page traffic volumes and click conversions.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="rights" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Your Data Rights</h2>
                  </div>
                  <p>
                    You maintain supreme ownership of your organization's data. You hold rights to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Inspect or export a complete duplicate of your processed personal data.</li>
                    <li>Correct mistakes or outdated attributes in your active workspace dashboard.</li>
                    <li>Demand total deletion and purging of all active user records.</li>
                  </ul>
                  <p>
                    You can exercise any of these privileges directly by initiating a help desk ticket or mailing us at <a href="mailto:privacy@chatsync.pk" className="text-indigo-600 font-semibold hover:underline">privacy@chatsync.pk</a>.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="changes" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <RefreshCw className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Changes to This Policy</h2>
                  </div>
                  <p>
                    We reserve right to revise this Privacy Policy to mirror engineering additions, compliance revisions, or new Meta policies.
                  </p>
                  <p>
                    If material shifts are made to our processing behavior, we will deliver an explicit notice via the active administrator email address or post highly visible popups inside the system dashboard.
                  </p>
                </section>

                <hr className="border-slate-100" />

                <section id="contact" className="scroll-mt-28 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. Contact Privacy Officer</h2>
                  </div>
                  <p>
                    If you have questions regarding data encryption protocols, GDPR/local data compliance details, or wish to invoke deletion requests, do not hesitate to contact our dedicated privacy desk:
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
                  <h3 className="text-lg md:text-xl font-bold">Need general legal assistance?</h3>
                  <p className="text-slate-300 text-xs md:text-sm">Read our Terms of Use to understand platform rules and structures.</p>
                </div>
                <a
                  href="/terms"
                  className="px-6 py-3 bg-white text-indigo-900 hover:bg-slate-50 transition rounded-xl font-bold text-sm shrink-0 shadow-sm flex items-center gap-2 relative z-10"
                >
                  <FileText className="w-4.5 h-4.5" />
                  Read Terms of Use
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
