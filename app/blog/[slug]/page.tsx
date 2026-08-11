import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, FOUNDER_INFO } from '@/lib/blogData';
import AuthorCard from '@/components/ui/AuthorCard';
import FounderBadge from '@/components/ui/FounderBadge';
import { ArrowLeft, Clock, Calendar, Sparkles, Tag, ShieldCheck } from 'lucide-react';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | By Aqsa Zam Zam Mirza Johar Baig`,
    description: post.excerpt,
    authors: [{ name: 'Aqsa Zam Zam Mirza Johar Baig', url: 'https://firgenerator.org/about' }],
    alternates: {
      canonical: `https://firgenerator.org/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} — Written by Aqsa Zam Zam Mirza Johar Baig`,
      description: post.excerpt,
      url: `https://firgenerator.org/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Aqsa Zam Zam Mirza Johar Baig'],
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Aqsa Zam Zam Mirza Johar Baig',
      url: 'https://firgenerator.org/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FIR Generator Online',
      url: 'https://firgenerator.org',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://firgenerator.org/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Back Link */}
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>
          <FounderBadge variant="compact" />
        </div>

        {/* Article Header */}
        <div className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-amber-400 font-semibold">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/20"
              >
                #{tag}
              </span>
            ))}
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Calendar className="w-3.5 h-3.5" /> {post.publishedAt}
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 italic border-l-2 border-amber-500 pl-4 py-1">
            "{post.excerpt}"
          </p>

          {/* Exact Required Byline format */}
          <div className="pt-2 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center font-black text-slate-950 text-sm">
              AZ
            </div>
            <div>
              <p className="text-xs font-bold text-slate-200">
                Written by <Link href="/about" className="text-amber-400 hover:underline">Aqsa Zam Zam Mirza Johar Baig</Link>
              </p>
              <p className="text-[11px] text-slate-400">{FOUNDER_INFO.role}</p>
            </div>
          </div>
        </div>

        {/* Main Article Content */}
        <div className="prose prose-invert prose-amber max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl sm:text-2xl font-bold text-slate-100 pt-4">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('> ')) {
              return (
                <blockquote key={idx} className="p-4 rounded-xl bg-amber-950/20 border-l-4 border-amber-500 text-amber-200 text-xs sm:text-sm italic my-4">
                  {paragraph.replace('> ', '')}
                </blockquote>
              );
            }
            if (paragraph.startsWith('---')) {
              return <hr key={idx} className="border-slate-800 my-6" />;
            }
            return (
              <p key={idx} className="text-slate-300">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Author Attribution Card */}
        <AuthorCard />

        {/* Generator CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-950/50 via-slate-900 to-amber-950/50 border border-amber-500/30 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Ready to Apply This Guide?
          </div>
          <h3 className="text-2xl font-extrabold text-slate-100">
            Generate Your Police Complaint Format Draft Now
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Use the <strong>FIR generator online</strong> tool created by <Link href="/about" className="text-amber-300 hover:underline font-bold">Aqsa Zam Zam Mirza Johar Baig</Link>.
          </p>
          <div className="pt-2">
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20"
            >
              Launch FIR Generator Online →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
