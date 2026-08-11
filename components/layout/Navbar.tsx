'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, FileText, Menu, X, Sparkles } from 'lucide-react';
import FounderBadge from '../ui/FounderBadge';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/generator', label: 'FIR Generator', highlight: true },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About Founder' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog & Advice' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Founder Credit */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-extrabold text-slate-100 tracking-tight">
                    FIR<span className="text-amber-400">Draft</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    BNS 2026
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-400">
                  Police Complaint Generator
                </p>
              </div>
            </Link>

            {/* Desktop Founder Badge near top logo */}
            <div className="hidden lg:block border-l border-slate-800 pl-4">
              <FounderBadge variant="compact" />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm'
                      : link.highlight
                      ? 'bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" /> Start FIR Draft
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="pb-3 border-b border-slate-800">
            <FounderBadge variant="compact" />
          </div>
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-2">
            <Link
              href="/generator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20"
            >
              <Sparkles className="w-4 h-4" /> Start Guided FIR Generator
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
