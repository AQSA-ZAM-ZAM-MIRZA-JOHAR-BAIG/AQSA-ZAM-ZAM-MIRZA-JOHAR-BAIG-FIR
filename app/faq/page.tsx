'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import FounderBadge from '@/components/ui/FounderBadge';
import { HelpCircle, ChevronDown, ShieldCheck, Scale, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'Who created the FIR / Police Complaint Draft Generator?',
    answer: 'This platform was founded and authored by Aqsa Zam Zam Mirza Johar Baig, a legal tech researcher dedicated to improving access to legal tools. The initiative provides everyday citizens with standardized, legally sound police complaint drafts under the Bharatiya Nagarik Suraksha Sanhita (BNSS 2023).',
  },
  {
    question: 'What is the difference between a Police Complaint and an FIR?',
    answer: 'A Police Complaint is a written statement submitted by a citizen detailing an incident to the Station House Officer (SHO). An FIR (First Information Report) is the formal document registered by the police officer under Section 173 BNSS (formerly Section 154 CrPC) upon determining that a cognizable offense has occurred.',
  },
  {
    question: 'What is a Zero FIR and can I file one anywhere?',
    answer: 'A Zero FIR allows a citizen to file a complaint at any police station regardless of territorial jurisdiction. The station records the information, assigns it serial number "0", provides an immediate copy, and transfers it to the proper jurisdictional station.',
  },
  {
    question: 'Is my personal data safe when using this generator?',
    answer: 'Yes! The entire complaint generation process runs 100% client-side inside your browser. No personal details, ID numbers, or incident reports are transmitted to or stored on any server. You can also save your draft locally in your browser storage.',
  },
  {
    question: 'What should I do if a police officer refuses to accept my complaint?',
    answer: 'If an officer refuses to record your complaint, you have statutory remedies under BNSS 173(4): Send your signed complaint via Registered Post / Speed Post to the Superintendent of Police (SP) or Commissioner of Police, or approach the Judicial Magistrate under BNSS 175(3).',
  },
  {
    question: 'How do I download my generated FIR draft as a PDF?',
    answer: 'On the final step (Step 6: Review & Export), click the "Print / Save as PDF" button. Your browser print dialog will open with print styling optimized for clean PDF saving.',
  },
  {
    question: 'Are there any costs or fees associated with this tool?',
    answer: 'No. The FIR / Complaint Generator is a completely free, public legal empowerment tool created by Aqsa Zam Zam Mirza Johar Baig.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <FounderBadge variant="hero" />
          <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Essential information regarding legal procedures, data privacy, and the platform founded by <strong>Aqsa Zam Zam Mirza Johar Baig</strong>.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-slate-100 hover:text-amber-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 leading-relaxed font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-amber-500/30 text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-100">
            Have Your Incident Details Ready?
          </h3>
          <p className="text-xs text-slate-300">
            Launch our guided 6-step wizard to build your complaint draft.
          </p>
          <div className="pt-2">
            <Link
              href="/generator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider"
            >
              Start FIR Generator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
