import React from 'react';
import Link from 'next/link';
import FounderBadge from '@/components/ui/FounderBadge';
import { Shield, BookOpen, CheckCircle, Scale, AlertTriangle, ArrowRight, FileText, Lock } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <FounderBadge variant="hero" />
          <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            How It Works & Citizen Rights Guide
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Understanding First Information Report (FIR) procedures, citizen guarantees under <strong>BNSS 2023</strong>, and step-by-step submission steps.
          </p>
        </div>

        {/* 4-Step Process Flow */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 text-center">
            The FIR Generation & Submission Flow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center">
                  1
                </span>
                <h3 className="text-lg font-bold text-slate-100">Step 1: Formulate Your Incident Details</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Launch the guided wizard and select your category (e.g. Cyber Fraud, Theft, Physical Assault, Women Safety, Lost Documents). Enter dates, locations, complainant credentials, and suspect particulars.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center">
                  2
                </span>
                <h3 className="text-lg font-bold text-slate-100">Step 2: Generate & Format Document</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                The platform formats your statement with appropriate Station House Officer salutations, statutory sections (BNS/IT Act), evidence list, and formal verification declaration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center">
                  3
                </span>
                <h3 className="text-lg font-bold text-slate-100">Step 3: Print & Submit to Police Station</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Print 2 physical copies. Submit 1 copy along with self-attested ID proof and evidence photocopies to your local Police Station. Keep the 2nd copy for your receiving seal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center">
                  4
                </span>
                <h3 className="text-lg font-bold text-slate-100">Step 4: Receive Certified FIR Copy</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Upon recording the FIR, the Station House Officer is legally required under BNSS 173(2) to provide a certified copy of the FIR <strong>completely free of cost</strong> to the complainant.
              </p>
            </div>
          </div>
        </div>

        {/* Essential Citizen Legal Rights */}
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-amber-500/30 space-y-6">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-slate-100">
              Key Rights of Every Citizen Filing an FIR
            </h2>
          </div>

          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h3 className="text-sm font-bold text-amber-400 mb-1">
                1. Right to Zero FIR (Jurisdiction Independence)
              </h3>
              <p>
                If a cognizable offense occurred outside the police station's territorial boundary or while traveling, police officers cannot refuse registration. They must register a <strong>Zero FIR ('0' FIR)</strong> and transfer it to the proper station.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h3 className="text-sm font-bold text-amber-400 mb-1">
                2. Right to Free Certified FIR Copy
              </h3>
              <p>
                Under Section 173(2) of Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023, every complainant is entitled to receive an official certified copy of the registered FIR immediately and free of charge.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h3 className="text-sm font-bold text-amber-400 mb-1">
                3. Women Safety & Statement Recording Guarantees
              </h3>
              <p>
                In offenses against women (harassment, stalking, assault), complaints can be recorded by a woman police officer or recorded at the victim's residence.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h3 className="text-sm font-bold text-amber-400 mb-1">
                4. What to Do If Police Refuse to Register an FIR?
              </h3>
              <p>
                If an officer refuses to receive your complaint, send your signed complaint draft via <strong>Registered Post / Speed Post</strong> to the Superintendent of Police (SP) or Commissioner of Police under BNSS 173(4), or approach the Judicial Magistrate under BNSS 175(3).
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20"
          >
            Start Guided FIR Draft Generator <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
