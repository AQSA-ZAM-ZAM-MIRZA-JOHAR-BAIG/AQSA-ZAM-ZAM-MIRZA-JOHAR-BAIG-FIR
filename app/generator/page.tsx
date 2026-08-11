'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FIRFormData, IncidentCategory } from '@/lib/types';
import { INCIDENT_CATEGORIES } from '@/lib/categories';
import WizardProgress from '@/components/generator/WizardProgress';
import Step1Category from '@/components/generator/Step1Category';
import Step2Complainant from '@/components/generator/Step2Complainant';
import Step3Incident from '@/components/generator/Step3Incident';
import Step4Accused from '@/components/generator/Step4Accused';
import Step5Statement from '@/components/generator/Step5Statement';
import Step6ReviewExport from '@/components/generator/Step6ReviewExport';
import FounderBadge from '@/components/ui/FounderBadge';
import { ArrowLeft, ArrowRight, Save, RotateCcw, ShieldCheck } from 'lucide-react';

const INITIAL_FORM_DATA: FIRFormData = {
  category: 'cybercrime',
  policeStationName: '',
  district: '',
  state: '',
  language: 'English',

  complainantName: '',
  complainantAge: '30',
  complainantGender: 'Male',
  guardianName: '',
  complainantPhone: '',
  complainantEmail: '',
  complainantAddress: '',
  idType: 'Aadhaar Card',
  idNumber: '',

  incidentDate: new Date().toISOString().split('T')[0],
  incidentTime: '10:30 AM',
  incidentLocation: '',
  landmark: '',
  delayReason: '',

  accusedList: [],

  incidentNarrative: '',
  stolenItems: [],
  evidenceTypes: ['CCTV Footage Available', 'Bank Account Statement / Transaction Advice'],
  evidenceDescription: '',
  witnesses: [],
  reliefRequested: '',
};

function FIRWizardContent() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FIRFormData>(INITIAL_FORM_DATA);
  const [hasLoadedDraft, setHasLoadedDraft] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams.get('category') as IncidentCategory | null;
    const savedDraft = localStorage.getItem('fir_generator_draft');

    if (savedDraft && !hasLoadedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        setFormData((prev) => ({ ...prev, ...parsed }));
        setHasLoadedDraft(true);
      } catch {
        // Ignore
      }
    }

    if (categoryParam) {
      const foundCategory = INCIDENT_CATEGORIES.find((c) => c.id === categoryParam);
      if (foundCategory) {
        setFormData((prev) => ({
          ...prev,
          category: categoryParam,
          reliefRequested: foundCategory.defaultRelief,
          incidentNarrative: prev.incidentNarrative || foundCategory.sampleNarrative,
        }));
      }
    }
  }, [searchParams, hasLoadedDraft]);

  const updateFormData = (updated: Partial<FIRFormData>) => {
    setFormData((prev) => {
      const next = { ...prev, ...updated };
      try {
        localStorage.setItem('fir_generator_draft', JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const handleNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetForm = () => {
    if (window.confirm('Are you sure you want to clear all form fields and restart?')) {
      localStorage.removeItem('fir_generator_draft');
      setFormData(INITIAL_FORM_DATA);
      setCurrentStep(1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Wizard Header Banner */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" /> Guided Legal Form Wizard
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">
              FIR Generator Online & Police Complaint Format Wizard
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Create an accurate FIR draft template ready for police station submission under BNSS 2023. Founded by Aqsa Zam Zam Mirza Johar Baig.
            </p>
          </div>
          <FounderBadge variant="compact" className="self-start sm:self-center shrink-0" />
        </div>

        {/* Multi-step progress bar */}
        <WizardProgress
          currentStep={currentStep}
          totalSteps={6}
          onStepClick={(step) => setCurrentStep(step)}
        />

        {/* Current Step Component */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm min-h-[420px]">
          {currentStep === 1 && (
            <Step1Category formData={formData} onChange={updateFormData} />
          )}
          {currentStep === 2 && (
            <Step2Complainant formData={formData} onChange={updateFormData} />
          )}
          {currentStep === 3 && (
            <Step3Incident formData={formData} onChange={updateFormData} />
          )}
          {currentStep === 4 && (
            <Step4Accused formData={formData} onChange={updateFormData} />
          )}
          {currentStep === 5 && (
            <Step5Statement formData={formData} onChange={updateFormData} />
          )}
          {currentStep === 6 && (
            <Step6ReviewExport formData={formData} onReset={handleResetForm} />
          )}
        </div>

        {/* Footer Navigation Buttons */}
        {currentStep < 6 && (
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                currentStep === 1
                  ? 'opacity-40 cursor-not-allowed border-slate-800 text-slate-500'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200'
              }`}
            >
              <ArrowLeft className="w-4 h-4" /> Previous Step
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleResetForm}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors"
                title="Reset Form"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Clear
              </button>

              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
              >
                {currentStep === 5 ? 'Generate FIR Draft' : 'Next Step'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FIRGeneratorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-8">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm font-bold text-amber-400">Loading FIR Generator Online...</p>
        </div>
      </div>
    }>
      <FIRWizardContent />
    </Suspense>
  );
}
