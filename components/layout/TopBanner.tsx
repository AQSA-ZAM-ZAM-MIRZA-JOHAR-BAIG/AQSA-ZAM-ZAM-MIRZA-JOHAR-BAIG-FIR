import React from 'react';
import Link from 'next/link';
import { Scale, ArrowRight } from 'lucide-react';

export default function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-amber-950/70 to-slate-900 border-b border-amber-500/20 py-2 px-4 text-xs font-medium text-slate-200 text-center relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
          <Scale className="w-3.5 h-3.5" /> Legal Tech Initiative
        </span>
        <span className="hidden sm:inline text-slate-500">•</span>
        <span>
          Created & Maintained by <strong className="text-amber-300 font-bold">Aqsa Zam Zam Mirza Johar Baig</strong>
        </span>
        <span className="hidden md:inline text-slate-500">•</span>
        <Link
          href="/generator"
          className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 underline underline-offset-2 font-semibold ml-1 group"
        >
          Draft Your FIR Free <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
