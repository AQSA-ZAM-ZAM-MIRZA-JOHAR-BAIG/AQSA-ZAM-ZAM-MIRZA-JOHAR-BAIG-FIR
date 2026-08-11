'use client';

import React, { useState, useEffect } from 'react';
import { FIRFormData } from '@/lib/types';
import { generateFormalComplaintText } from '@/lib/templates';
import { Printer, Copy, Check, Save, RefreshCw, FileCheck, Shield, AlertTriangle, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Step6Props {
  formData: FIRFormData;
  onReset: () => void;
}

export default function Step6ReviewExport({ formData, onReset }: Step6Props) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [fontSize, setFontSize] = useState<'text-xs' | 'text-sm' | 'text-base'>('text-sm');

  const complaintText = generateFormalComplaintText(formData);

  useEffect(() => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // Ignore
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(complaintText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSaveDraft = () => {
    const timeStr = new Date().toLocaleString();
    const payload = { ...formData, draftSavedAt: timeStr };
    localStorage.setItem('fir_generator_draft', JSON.stringify(payload));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handlePrintOrPDF = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* EXPLICIT LEGAL DISCLAIMER BANNER (As requested: drafting aid, not legal advice) */}
      <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs flex items-start gap-3 shadow-lg print:hidden">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-extrabold uppercase tracking-wider text-amber-300">
            Official Legal Disclaimer & Usage Purpose
          </p>
          <p className="text-amber-100/90 leading-relaxed">
            This tool is an <strong>automated drafting aid</strong> created by founder <strong>Aqsa Zam Zam Mirza Johar Baig</strong> to assist citizens in structuring factual information for police complaints under BNSS 2023. It <strong>does not constitute formal legal advice, legal representation, or attorney-client relationship</strong>. Always verify details and submit finalized documents directly to your local Police Station or designated Cyber Cell portal.
          </p>
        </div>
      </div>

      {/* Top Banner & Export Actions Bar */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <FileCheck className="w-4 h-4" /> Ready for Police Submission
          </div>
          <h3 className="text-xl font-extrabold text-slate-100 mt-1">
            Formatted Police Complaint Draft Preview
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Formulated under Bharatiya Nagarik Suraksha Sanhita (BNSS 2023). Review, copy, or export as PDF.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 print:hidden">
          <button
            type="button"
            onClick={handlePrintOrPDF}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
          >
            <Download className="w-4 h-4" /> Download PDF / Print
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-bold transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" /> Copied to Clipboard!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" /> Copy Text
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleSaveDraft}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-semibold"
          >
            {saved ? <Check className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4 text-slate-400" />}
            {saved ? 'Saved!' : 'Save Draft'}
          </button>
        </div>
      </div>

      {/* Font Size & Display Adjuster */}
      <div className="flex items-center justify-between px-2 print:hidden text-xs text-slate-400">
        <span className="font-semibold text-slate-300">
          Document View Settings:
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[11px]">Font Size:</span>
          <button
            type="button"
            onClick={() => setFontSize('text-xs')}
            className={`px-2 py-0.5 rounded ${fontSize === 'text-xs' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}
          >
            Small
          </button>
          <button
            type="button"
            onClick={() => setFontSize('text-sm')}
            className={`px-2 py-0.5 rounded ${fontSize === 'text-sm' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}
          >
            Medium
          </button>
          <button
            type="button"
            onClick={() => setFontSize('text-base')}
            className={`px-2 py-0.5 rounded ${fontSize === 'text-base' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}
          >
            Large
          </button>
        </div>
      </div>

      {/* Main Document Paper Sheet Container */}
      <div className="rounded-2xl bg-white text-slate-900 p-8 sm:p-12 shadow-2xl border border-slate-300 font-mono leading-relaxed whitespace-pre-wrap selection:bg-amber-200 print:shadow-none print:border-none print:p-0 print:m-0 print:text-black print:bg-white font-serif">
        {/* Printable Header Branding */}
        <div className="hidden print:block text-center border-b-2 border-black pb-4 mb-6">
          <h1 className="text-xl font-bold uppercase tracking-wider">
            FORMAL POLICE COMPLAINT DRAFT
          </h1>
          <p className="text-xs italic mt-0.5">
            Generated via FIR Complaint Portal (Founded by Aqsa Zam Zam Mirza Johar Baig)
          </p>
        </div>

        {/* Complaint Text */}
        <div className={fontSize}>{complaintText}</div>

        {/* Official Stamp & Verification Placeholder for Print */}
        <div className="mt-12 pt-6 border-t border-slate-300 print:border-black grid grid-cols-2 gap-8 text-xs font-sans text-slate-600 print:text-black">
          <div>
            <p className="font-bold uppercase tracking-wider">POLICE STATION RECEIVING STAMP:</p>
            <div className="mt-3 w-40 h-24 border-2 border-dashed border-slate-400 rounded-lg flex items-center justify-center text-[10px] text-slate-400 italic">
              Station Seal & Diary No.
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold uppercase tracking-wider">RECEIVED BY OFFICER:</p>
            <p className="mt-8 text-slate-500">Name: ______________________</p>
            <p className="mt-2 text-slate-500">Rank & Badge No: ____________</p>
            <p className="mt-2 text-slate-500">Signature: __________________</p>
          </div>
        </div>
      </div>

      {/* Bottom Checklist & Reset Options */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 print:hidden">
        <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <Shield className="w-4 h-4" /> Recommended Next Steps Before Filing
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
          <li className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-amber-400 font-bold">1.</span>
            <span>Print 2 copies of this complaint draft. Submit 1 copy to the Police Station and get your receiving acknowledgment stamp on the 2nd copy.</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-amber-400 font-bold">2.</span>
            <span>Attach self-attested photocopies of your Govt ID Proof (Aadhaar/Voter ID) and supporting evidence (bank statement/CCTV stills).</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-amber-400 font-bold">3.</span>
            <span>Ensure you note down the <strong>Daily Diary / GD (General Diary) Entry Number</strong> if the officer requests time before registering the FIR.</span>
          </li>
          <li className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
            <span className="text-amber-400 font-bold">4.</span>
            <span>Under BNSS 173(2) / CrPC 154(2), you are legally entitled to receive a certified copy of the FIR <strong>completely free of cost</strong>.</span>
          </li>
        </ul>

        <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-rose-400 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Start New Blank Complaint
          </button>
          <span className="text-[11px] text-slate-500">
            Created by Aqsa Zam Zam Mirza Johar Baig
          </span>
        </div>
      </div>
    </div>
  );
}
