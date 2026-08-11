import React from 'react';
import Link from 'next/link';
import { Shield, Heart, Scale, Lock, ArrowUpRight } from 'lucide-react';
import { FOUNDER_INFO } from '@/lib/blogData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      {/* Upper Founder Feature Section */}
      <div className="border-b border-slate-900 bg-slate-900/40 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black text-xl shrink-0 shadow-lg shadow-amber-500/10">
              AZ
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <Scale className="w-3.5 h-3.5" /> Founder & Platform Author
              </div>
              <h3 className="text-lg font-extrabold text-slate-100 mt-0.5">
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  Aqsa Zam Zam Mirza Johar Baig
                </Link>
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Dedicated to empowering citizens with the <strong>FIR generator online</strong> tool, standardized <strong>police complaint format</strong> drafts, and clear guidance under Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023.
              </p>
            </div>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all shrink-0"
          >
            Read Biography of Aqsa Zam Zam Mirza Johar Baig <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Platform Summary */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2 text-slate-100 font-extrabold text-base">
            <Shield className="w-5 h-5 text-amber-400" />
            <span>FIR<span className="text-amber-400">Generator</span> Online</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Free, privacy-first FIR generator online and police complaint format draft template tool.
          </p>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-800/40 p-2.5 rounded-xl">
            <Lock className="w-4 h-4 shrink-0" />
            <span>100% Client-Side Privacy. Zero data stored.</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
            Platform Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-amber-400 transition-colors">Home Page</Link></li>
            <li><Link href="/generator" className="hover:text-amber-400 transition-colors text-amber-400 font-semibold">FIR Generator Online</Link></li>
            <li><Link href="/how-it-works" className="hover:text-amber-400 transition-colors">Police Complaint Format Guide</Link></li>
            {/* Explicit anchor text link requirement */}
            <li>
              <Link href="/about" className="hover:text-amber-400 transition-colors">
                Aqsa Zam Zam Mirza Johar Baig
              </Link>
            </li>
            <li><Link href="/faq" className="hover:text-amber-400 transition-colors">Frequently Asked Questions</Link></li>
            <li><Link href="/blog" className="hover:text-amber-400 transition-colors">Legal Guides & Advice</Link></li>
          </ul>
        </div>

        {/* Col 3: Popular Presets */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
            Complaint Presets
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/generator?category=cybercrime" className="hover:text-amber-400 transition-colors">Cyber Fraud & Online Scam</Link></li>
            <li><Link href="/generator?category=theft" className="hover:text-amber-400 transition-colors">Theft & Housebreak Format</Link></li>
            <li><Link href="/generator?category=vehicle_theft" className="hover:text-amber-400 transition-colors">Vehicle Theft Report</Link></li>
            <li><Link href="/generator?category=harassment" className="hover:text-amber-400 transition-colors">Women Safety & Harassment</Link></li>
            <li><Link href="/generator?category=lost_document" className="hover:text-amber-400 transition-colors">Lost Phone / Document Report</Link></li>
            <li><Link href="/generator?category=financial_fraud" className="hover:text-amber-400 transition-colors">Cheating & Financial Fraud</Link></li>
          </ul>
        </div>

        {/* Col 4: Legal Disclaimer */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Legal Disclaimer
          </h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            This site is an educational legal-tech tool created by <Link href="/about" className="text-amber-300 hover:underline font-bold">Aqsa Zam Zam Mirza Johar Baig</Link> to assist citizens in structuring police complaint format draft templates. This tool does not constitute formal legal representation. Always submit finalized documents directly to your local police station.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} FIR Generator Online & Police Complaint Format Tool. Created & Authored by <Link href="/about" className="text-slate-300 hover:underline font-bold">Aqsa Zam Zam Mirza Johar Baig</Link>.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built for citizen legal empowerment</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
