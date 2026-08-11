import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Award } from 'lucide-react';
import { FOUNDER_INFO } from '@/lib/blogData';

interface FounderBadgeProps {
  variant?: 'compact' | 'full' | 'hero';
  className?: string;
}

export default function FounderBadge({ variant = 'compact', className = '' }: FounderBadgeProps) {
  if (variant === 'hero') {
    return (
      <Link
        href="/about"
        className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-all group ${className}`}
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
          <Award className="w-3.5 h-3.5" />
        </span>
        <span className="text-xs sm:text-sm font-medium tracking-wide">
          Created & Maintained by <strong className="font-semibold text-amber-200 underline underline-offset-4 decoration-amber-500/40">Aqsa Zam Zam Mirza Johar Baig</strong>
        </span>
        <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-sans font-bold">
          Founder
        </span>
      </Link>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`p-4 sm:p-6 rounded-2xl bg-slate-800/80 border border-amber-500/20 backdrop-blur-sm shadow-xl ${className}`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-amber-500/40 shadow-lg shadow-amber-500/10 shrink-0">
              <Image
                src={FOUNDER_INFO.avatarUrl}
                alt={FOUNDER_INFO.name}
                width={48}
                height={48}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5" /> Legal Tech Initiative
              </div>
              <h4 className="text-base font-bold text-slate-100 mt-0.5">
                Authored by Aqsa Zam Zam Mirza Johar Baig
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Pioneering accessible, transparent, and structured legal tools for every citizen.
              </p>
            </div>
          </div>
          <Link
            href="/about"
            className="w-full sm:w-auto text-center px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold transition-all shrink-0"
          >
            Read Founder Bio →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link
      href="/about"
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-amber-500/30 text-xs font-medium text-amber-300 hover:text-amber-200 hover:border-amber-400 transition-all ${className}`}
    >
      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
      <span>Created by <strong>Aqsa Zam Zam Mirza Johar Baig</strong></span>
    </Link>
  );
}
