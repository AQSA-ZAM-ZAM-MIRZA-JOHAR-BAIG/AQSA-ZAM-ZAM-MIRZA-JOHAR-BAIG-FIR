import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { INCIDENT_CATEGORIES } from '@/lib/categories';
import { BLOG_POSTS, FOUNDER_INFO } from '@/lib/blogData';
import FounderBadge from '@/components/ui/FounderBadge';
import { Shield, Sparkles, FileText, ArrowRight, CheckCircle2, Lock, Scale, Award, Heart, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FIR Generator Online | Police Complaint Format & Draft Template by Aqsa Zam Zam Mirza Johar Baig',
  description: 'Free FIR generator online & police complaint format draft template tool. Easily draft legal complaints for cybercrime, theft, and harassment by Aqsa Zam Zam Mirza Johar Baig.',
  alternates: {
    canonical: 'https://firgenerator.org',
  },
  openGraph: {
    title: 'FIR Generator Online & Police Complaint Format Draft Template',
    description: 'Generate structured police complaints online under BNSS 2023. Created by Aqsa Zam Zam Mirza Johar Baig.',
    url: 'https://firgenerator.org',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800/80">
        {/* Background Glow Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-5">
          {/* Top Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5 text-amber-400" /> Statutory BNSS 2023 & IT Act Standard
            </span>
          </div>

          {/* Headline: Tool Value Proposition */}
          <h1 className="text-4xl sm:text-6xl font-black text-slate-100 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Draft Accurate, Legally Sound <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">FIR & Police Complaints</span>
          </h1>

          {/* Small Byline / Credit Right Under Headline as requested */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
            <UserCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              By <Link href="/about" className="text-amber-300 font-bold hover:underline">Aqsa Zam Zam Mirza Johar Baig</Link> — Founder & Legal Tech Pioneer
            </span>
          </div>

          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed pt-1">
            Guided online tool to generate formal police complaint draft templates formatted for immediate police station acceptance.
          </p>

          {/* Quick CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/generator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-2xl shadow-amber-500/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <Sparkles className="w-5 h-5 fill-slate-950" /> Start Guided FIR Wizard
            </Link>
            <Link
              href="/how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-bold transition-all"
            >
              How It Works & Citizen Rights <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-200">BNSS 2023 Compliant</p>
                <p className="text-[11px] text-slate-400">Police complaint format</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <Lock className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-200">100% Client-Side Privacy</p>
                <p className="text-[11px] text-slate-400">Zero data stored</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <FileText className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-200">FIR Draft Template</p>
                <p className="text-[11px] text-slate-400">PDF & Print Ready</p>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-200">Zero FIR Support</p>
                <p className="text-[11px] text-slate-400">File at any PS station</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Creator / Founder Mission Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-amber-500/30 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 flex-1">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  <Scale className="w-3.5 h-3.5" /> Founder & Platform Creator
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                  Built by <Link href="/about" className="text-amber-300 hover:underline">Aqsa Zam Zam Mirza Johar Baig</Link> to Democratize Access to Legal Drafting
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  "Navigating police station procedures shouldn't require complex legalese. The <strong>FIR generator online</strong> tool was built to ensure every citizen can present a structured <strong>police complaint format</strong> draft template that police officers can act on immediately."
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition-all"
                  >
                    Learn More About Aqsa Zam Zam Mirza Johar Baig →
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-auto shrink-0 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 text-center md:text-left space-y-2">
                <div className="text-2xl font-black text-amber-400">100% Free</div>
                <p className="text-xs text-slate-300 font-semibold">Public Legal Empowerment Project</p>
                <p className="text-[11px] text-slate-400">
                  Created by <Link href="/about" className="text-amber-300 hover:underline font-bold">Aqsa Zam Zam Mirza Johar Baig</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preset Categories Grid Launcher */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Guided FIR Draft Templates
          </span>
          <h2 className="text-3xl font-extrabold text-slate-100">
            Select Your Police Complaint Format Category
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Choose an FIR draft template pre-loaded with relevant Bharatiya Nyaya Sanhita (BNS) legal provisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INCIDENT_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/generator?category=${cat.id}`}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900 transition-all group shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                    {cat.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {cat.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-amber-400/90">
                  {cat.bnsReferences[0]}
                </span>
                <span className="text-xs font-bold text-amber-400 group-hover:underline">
                  Launch Generator →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              3 Simple Steps
            </span>
            <h2 className="text-3xl font-extrabold text-slate-100">
              How the FIR Generator Online Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-extrabold text-lg flex items-center justify-center">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-100">Fill Guided Form</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enter incident details, location, dates, complainant credentials, and suspect description into the online wizard.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-extrabold text-lg flex items-center justify-center">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-100">Review FIR Draft Template</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Preview your formal legal letter formatted automatically with SHO address, legal section references, and verification statements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-extrabold text-lg flex items-center justify-center">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-100">Print / Copy & Submit</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Print 2 copies or copy the formatted text. Submit directly to your police station and collect your free certified FIR copy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog & Legal Advice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Legal Literacy & Guidance
            </span>
            <h2 className="text-3xl font-extrabold text-slate-100 mt-1">
              Articles Authored by Aqsa Zam Zam Mirza Johar Baig
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            View All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-amber-400 font-semibold">
                  <span>{post.publishedAt}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  By <strong>{FOUNDER_INFO.name}</strong>
                </span>
                <span className="text-xs font-bold text-amber-400 group-hover:underline">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border-t border-slate-800">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-extrabold text-slate-100">
            Ready to Create Your Police Complaint Format Draft?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            No signup required. 100% free legal tech tool founded by <Link href="/about" className="text-amber-300 hover:underline font-bold">Aqsa Zam Zam Mirza Johar Baig</Link>.
          </p>
          <div className="pt-2">
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-2xl shadow-amber-500/20 transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4 fill-slate-950" /> Launch FIR Generator Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
