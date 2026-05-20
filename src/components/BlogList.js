"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, MessageSquare, ShoppingCart, Megaphone, HelpCircle, Sparkles } from "lucide-react";

export default function BlogList({ posts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Guides", "Automation", "E-commerce", "Marketing"];

  // Category to Icon mapper
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Guides":
        return HelpCircle;
      case "Automation":
        return Sparkles;
      case "E-commerce":
        return ShoppingCart;
      case "Marketing":
        return Megaphone;
      default:
        return MessageSquare;
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts[0];

  return (
    <div className="space-y-16">
      {/* Featured Post Card (Only shown when no search or filter is applied for clean UX) */}
      {searchQuery === "" && activeCategory === "All" && featuredPost && (
        <div className="relative group rounded-3xl bg-white border border-slate-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Cover */}
            <div className={`lg:col-span-7 min-h-[280px] bg-gradient-to-br ${featuredPost.coverGradient} flex items-center justify-center p-8 relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 text-white text-center space-y-4 max-w-md">
                {(() => {
                  const Icon = getCategoryIcon(featuredPost.category);
                  return <Icon className="w-16 h-16 mx-auto opacity-90 animate-pulse-glow" />;
                })()}
                <span className="inline-block bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white/90">
                  Featured Article
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-bold">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">{featuredPost.category}</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              {/* Author & Footer */}
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between gap-4 mt-8 lg:mt-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                    {featuredPost.author.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{featuredPost.author.name}</p>
                    <p className="text-xs text-slate-400">{featuredPost.publishedAt}</p>
                  </div>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 group/btn"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 bg-white border border-slate-200/50 rounded-2xl shadow-sm">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-semibold placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-slate-800"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const CategoryIcon = getCategoryIcon(post.category);
            return (
              <article
                key={post.slug}
                className="reveal group bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Decorative Gradient Cover */}
                  <div className={`h-48 bg-gradient-to-br ${post.coverGradient} flex items-center justify-center p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
                    <CategoryIcon className="w-12 h-12 text-white/90 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs font-bold">
                      <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 rounded-full">{post.category}</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-[10px] font-bold border border-slate-200">
                      {post.author.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-700">{post.author.name}</p>
                      <p className="text-[10px] text-slate-400">{post.publishedAt}</p>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 group/btn"
                  >
                    Read
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl shadow-sm">
          <p className="text-slate-400 font-bold text-sm">No articles found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="mt-4 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl transition cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
