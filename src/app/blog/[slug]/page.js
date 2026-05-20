import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { Clock, Calendar, ChevronRight, ArrowLeft, ArrowRight, Bookmark, Heart, Send, Sparkles } from "lucide-react";

// Generate static params for static site generation (SSG)
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for maximum SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Post Not Found | ChatSync",
    };
  }
  return {
    title: post.metaTitle,
    description: post.metaDesc,
    alternates: { canonical: `https://www.chatsync.pk/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      url: `https://www.chatsync.pk/blog/${slug}`,
      siteName: "ChatSync",
      type: "article",
      publishedTime: new Date(post.publishedAt).toISOString(),
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current post)
  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-[72px] font-sans selection:bg-indigo-600 selection:text-white">
        
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-slate-100 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href="/blog" className="hover:text-indigo-600 transition">Blog</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-slate-400">{post.category}</span>
              <ChevronRight className="w-3 h-3 text-slate-400 hidden sm:inline" />
              <span className="text-slate-800 truncate max-w-[240px] hidden sm:inline">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Container */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Post Content */}
            <article className="lg:col-span-8 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              {/* Header Visual Banner */}
              <div className={`h-64 md:h-80 bg-gradient-to-br ${post.coverGradient} flex items-center justify-center p-8 relative overflow-hidden text-white`}>
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
                <div className="text-center space-y-3 relative z-10">
                  <span className="px-3.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <p className="text-xs text-white/70 font-semibold flex items-center justify-center gap-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.publishedAt}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </p>
                </div>
              </div>

              {/* Reading Space */}
              <div className="p-6 md:p-12">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-indigo-600 transition mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>

                <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
                  {post.title}
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200/50 rounded-2xl mb-8">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                    {post.author.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-slate-800">{post.author.name}</p>
                    <p className="text-xs text-slate-400">{post.author.role}</p>
                  </div>
                </div>

                {/* Rich Text Body */}
                <div 
                  className="text-slate-600 leading-relaxed text-sm md:text-[15px] space-y-6
                    [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight
                    [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-3
                    [&_p]:leading-relaxed [&_p]:mb-6
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2
                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2
                    [&_strong]:font-extrabold [&_strong]:text-slate-900
                    [&_a]:text-indigo-600 [&_a]:font-semibold [&_a]:hover:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Engagement Bar */}
                <div className="pt-8 mt-10 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 rounded-xl text-xs font-bold text-slate-500 transition cursor-pointer">
                      <Heart className="w-4 h-4" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 rounded-xl text-xs font-bold text-slate-500 transition cursor-pointer">
                      <Bookmark className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">Share</span>
                    <a 
                      href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://www.chatsync.pk/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-xl bg-green-50 hover:bg-green-100 flex items-center justify-center text-green-600 border border-green-200/50 transition"
                    >
                      <Send className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </article>

            {/* Right Column: Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Platform Promotion Widget */}
              <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
                <div className="space-y-4 relative z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo-300">
                    <Sparkles className="w-3 h-3" /> Growth Platform
                  </span>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-white leading-tight">
                    Scale your WhatsApp campaigns automatically
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Connect your WhatsApp number, automate abandoned cart follow-ups, and get a shared team inbox with ChatSync.
                  </p>
                  <div className="space-y-2 pt-2">
                    <a
                      href="https://app.chatsync.pk/signup"
                      className="block w-full text-center px-4 py-2.5 bg-white text-indigo-900 hover:bg-slate-50 font-bold rounded-xl text-xs shadow-sm transition active:scale-95 cursor-pointer"
                    >
                      Start 7-Day Free Trial
                    </a>
                    <Link
                      href="/pricing"
                      className="block w-full text-center px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold rounded-xl text-xs transition active:scale-95 cursor-pointer"
                    >
                      View Pricing
                    </Link>
                  </div>
                </div>
              </div>

              {/* Quick Checklist / Tip */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
                <h4 className="font-extrabold text-slate-800 text-sm mb-4">Why WhatsApp API?</h4>
                <div className="space-y-3.5">
                  {[
                    "98% average open rates compared to 20% in email",
                    "3x higher conversions for abandoned carts",
                    "No risk of number blockages through official signup",
                    "Support for rich buttons, quick replies & catalogs",
                  ].map((tip, idx) => (
                    <div key={idx} className="flex gap-2.5 text-xs text-slate-500">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </section>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="bg-slate-100/60 border-t border-slate-200/50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-black text-slate-900 mb-10 tracking-tight text-center">
                Keep Reading
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {relatedPosts.map((rPost) => (
                  <article
                    key={rPost.slug}
                    className="group bg-white border border-slate-150 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      {/* Visual Cover */}
                      <div className={`h-40 bg-gradient-to-br ${rPost.coverGradient} flex items-center justify-center p-6 relative overflow-hidden text-white`}>
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
                        <span className="px-3 py-1 bg-white/15 backdrop-blur-sm border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                          {rPost.category}
                        </span>
                      </div>
                      
                      {/* Body details */}
                      <div className="p-6 space-y-3">
                        <h3 className="text-base font-extrabold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors">
                          <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                          {rPost.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 mt-auto flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-bold">{rPost.publishedAt}</span>
                      <Link
                        href={`/blog/${rPost.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 group/btn"
                      >
                        Read
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
