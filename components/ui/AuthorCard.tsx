import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Sparkles, ArrowRight } from 'lucide-react';
import { FOUNDER_INFO } from '@/lib/blogData';

export default function AuthorCard() {
  return (
    <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-amber-500/30 shadow-2xl relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Profile Photo */}
        <div className="relative shrink-0">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-amber-300 p-0.5 shadow-xl shadow-amber-500/30">
            <div className="w-full h-full rounded-[14px] overflow-hidden">
              <Image
                src={FOUNDER_INFO.avatarUrl}
                alt={`${FOUNDER_INFO.name} — Founder`}
                width={96}
                height={96}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>
          <span className="absolute -bottom-2 -right-2 p-1.5 bg-amber-500 text-slate-950 rounded-full shadow-lg">
            <Shield className="w-3.5 h-3.5" />
          </span>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Platform Founder & Legal Author
          </div>
          <h3 className="text-xl font-bold text-slate-100 mt-1">
            <Link href="/about" className="hover:text-amber-300 transition-colors">
              {FOUNDER_INFO.name}
            </Link>
          </h3>
          <p className="text-xs text-amber-300/80 font-medium mt-0.5">
            {FOUNDER_INFO.role}
          </p>
          <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
            {FOUNDER_INFO.bio}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors group"
            >
              Read Full Founder Biography & Mission
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
