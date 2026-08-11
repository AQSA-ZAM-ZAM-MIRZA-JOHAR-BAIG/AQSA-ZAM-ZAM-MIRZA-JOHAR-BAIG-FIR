import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS, FOUNDER_INFO } from '@/lib/blogData';
import AuthorCard from '@/components/ui/AuthorCard';
import FounderBadge from '@/components/ui/FounderBadge';
import { BookOpen, Sparkles, Clock, ArrowRight, Tag } from 'lucide-react';

export const metadata = {
  title: 'Blog & Legal Guides — Authored by Aqsa Zam Zam Mirza Johar Baig',
  description: 'Legal literacy articles, FIR filing guides, cyber crime complaint advice, and citizen rights written by Aqsa Zam Zam Mirza Johar Baig.',
};

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.slice(1);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <FounderBadge variant="hero" />
          <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Legal Literacy & FIR Guidance Blog
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Practical legal guidance and complaint drafting strategies authored by founder <strong>Aqsa Zam Zam Mirza Johar Baig</strong>.
          </p>
        </div>

        {/* Featured Author Card */}
        <AuthorCard />

        {/* Featured Post Card */}
        {featuredPost && (
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Featured Article
            </span>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/30 hover:border-amber-500/60 transition-all group shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-amber-400 font-semibold">
                  <span className="bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30">
                    {featuredPost.tags[0]}
                  </span>
                  <span>{featuredPost.publishedAt}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                  <div className="text-xs text-slate-400">
                    By <strong className="text-slate-200">{FOUNDER_INFO.name}</strong>
                  </div>
                  <span className="text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-100">
            More Articles by Aqsa Zam Zam Mirza Johar Baig
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-amber-400 font-semibold">
                    <span>{post.publishedAt}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    {post.tags[0]}
                  </span>
                  <span className="text-xs font-bold text-amber-400 group-hover:underline">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
