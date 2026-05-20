import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import ScrollReveal from "@/components/ScrollReveal";
import { posts } from "@/data/posts";
import { BookOpen, Sparkles, Mail } from "lucide-react";

export const metadata = {
  title: "Blog & WhatsApp Marketing Insights",
  description: "Read the latest tips, automation strategies, and WhatsApp Business API campaign guides on the ChatSync Blog.",
  alternates: { canonical: "https://www.chatsync.pk/blog" },
  openGraph: {
    title: "ChatSync Blog — WhatsApp Marketing Insights",
    description: "Read the latest tips, automation strategies, and WhatsApp Business API campaign guides on the ChatSync Blog.",
    url: "https://www.chatsync.pk/blog",
    siteName: "ChatSync",
    type: "website",
  }
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main className="min-h-screen bg-slate-50 pt-[72px] font-sans selection:bg-indigo-600 selection:text-white">
        
        {/* Modern Header Banner */}
        <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, #6366F1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/15 border border-indigo-500/35 text-indigo-300 mb-4 tracking-wider uppercase">
              <Sparkles className="w-3 h-3" /> Growth & Marketing Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-black !text-white tracking-tight mb-4">
              <span className="text-white">The ChatSync </span>
              <span className="bg-gradient-to-r from-indigo-400 to-amber-300 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
              Detailed tactics, integration tutorials, and conversational commerce frameworks to scale your customer outreach.
            </p>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <BlogList posts={posts} />
        </section>

        {/* Newsletter Signup Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="space-y-3 max-w-xl text-center lg:text-left relative z-10">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-bold uppercase tracking-widest text-indigo-300">
                Weekly Newsletter
              </span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
                Get WhatsApp growth tactics directly in your inbox.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Join 5,000+ scaling operators. No spam, only actionable insights on automated campaigns, chatbots, and templates.
              </p>
            </div>

            <div className="w-full lg:w-auto shrink-0 relative z-10">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto lg:mx-0">
                <div className="relative w-full sm:w-64">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/10 hover:bg-white/[0.15] focus:bg-white border border-white/10 focus:border-white rounded-xl text-xs font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:text-slate-900 transition-all"
                  />
                </div>
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 bg-white text-indigo-900 hover:bg-slate-50 font-bold rounded-xl text-xs shrink-0 shadow-md transition-all active:scale-95 cursor-pointer text-center"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
