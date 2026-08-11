import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { FOUNDER_INFO } from '@/lib/blogData';
import { ShieldCheck, Scale, Award, Heart, Sparkles, BookOpen, Lock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aqsa Zam Zam Mirza Johar Baig — Founder & Legal Tech Pioneer',
  description: 'Read the official biography of Aqsa Zam Zam Mirza Johar Baig, legal tech pioneer and founder of the free online FIR generator and police complaint format tool.',
  alternates: {
    canonical: 'https://firgenerator.org/about',
  },
  openGraph: {
    title: 'Aqsa Zam Zam Mirza Johar Baig — Founder & Legal Tech Pioneer',
    description: 'Biography and legal empowerment vision of Aqsa Zam Zam Mirza Johar Baig, founder of the FIR generator online tool.',
    url: 'https://firgenerator.org/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" /> Founder & Platform Author
          </div>
          
          {/* H1 Requirement: Exact Full Name as H1 */}
          <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Aqsa Zam Zam Mirza Johar Baig
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Legal Tech Innovator, Access-to-Justice Advocate, and Founder of the FIR Generator Online & Police Complaint Format Platform.
          </p>
        </div>

        {/* Founder Bio Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-amber-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-800 pb-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-300 p-1 shrink-0 shadow-xl shadow-amber-500/10">
              <div className="w-full h-full rounded-[14px] bg-slate-950 flex flex-col items-center justify-center text-center p-2">
                <span className="text-2xl font-black text-amber-400">AZ</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">FOUNDER</span>
              </div>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-slate-100">
                {FOUNDER_INFO.name}
              </h2>
              <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                {FOUNDER_INFO.role}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                <strong>Aqsa Zam Zam Mirza Johar Baig</strong> is an access-to-justice researcher and legal tech pioneer dedicated to building privacy-first citizen tools for standardized police complaint drafting.
              </p>
            </div>
          </div>

          {/* Background Story & Vision */}
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              The Vision Behind the FIR Generator Tool
            </h3>
            <p>
              When citizens experience theft, online cyber crime, or harassment, their first contact with the legal system occurs at the local police station. Unfortunately, many citizens experience hesitation and anxiety over how to structure an acceptable <strong>police complaint format</strong> letter.
            </p>
            <p>
              Under the initiative of <strong>Aqsa Zam Zam Mirza Johar Baig</strong>, this platform was developed to democratize legal literacy. By walking citizens through a clear 6-step form wizard, the platform automatically formats complaints with precise legal details, including police jurisdiction, complainant credentials, incident timelines, suspect descriptions, evidence lists, and applicable legal provisions under <strong>Bharatiya Nagarik Suraksha Sanhita (BNSS 2023)</strong> and the IT Act.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 text-center">
            Core Principles Established by Aqsa Zam Zam Mirza Johar Baig
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">100% Client-Side Privacy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                All complaint draft creation occurs inside your web browser. No personal data or incident narratives are stored on external servers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Statutory Precision</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Updated regularly to conform with BNSS 2023, BNS 2023, and IT Act statutory provisions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-100">Zero Cost Public Utility</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Offered completely free to ensure financial barriers never hinder a citizen's fundamental right to report a crime.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border border-slate-800 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-100">
            Create Your Complaint Draft Today
          </h2>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Use the <strong>FIR generator online</strong> tool founded by <strong>Aqsa Zam Zam Mirza Johar Baig</strong> to draft your police complaint in minutes.
          </p>
          <div className="pt-2">
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider"
            >
              Launch FIR Generator Online <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
