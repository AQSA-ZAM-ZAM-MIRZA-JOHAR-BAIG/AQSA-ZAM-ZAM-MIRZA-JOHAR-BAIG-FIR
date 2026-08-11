import React from 'react';
import { Check, Shield } from 'lucide-react';

interface WizardProgressProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}

const STEP_LABELS = [
  'Incident & Station',
  'Complainant Details',
  'Date & Location',
  'Accused / Suspects',
  'Narrative & Evidence',
  'Review & Export',
];

export default function WizardProgress({ currentStep, totalSteps, onStepClick }: WizardProgressProps) {
  const percentage = Math.round(((currentStep - 1) / (totalSteps - 1)) * 100);

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 mb-8 shadow-xl">
      {/* Top Header info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
            <Shield className="w-4 h-4" />
          </span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
            Step {currentStep} of {totalSteps}: <span className="text-amber-400 font-extrabold">{STEP_LABELS[currentStep - 1]}</span>
          </span>
        </div>
        <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
          {percentage}% Completed
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mb-6">
        <div
          className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Step Indicators */}
      <div className="grid grid-cols-6 gap-1 sm:gap-2">
        {STEP_LABELS.map((label, index) => {
          const stepNum = index + 1;
          const isCompleted = stepNum < currentStep;
          const isCurrent = stepNum === currentStep;

          return (
            <button
              key={stepNum}
              type="button"
              onClick={() => stepNum <= currentStep && onStepClick(stepNum)}
              disabled={stepNum > currentStep}
              className={`flex flex-col items-center group text-left transition-all ${
                stepNum > currentStep ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
              }`}
            >
              <div
                className={`w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm transition-all shadow-md ${
                  isCompleted
                    ? 'bg-emerald-500 text-slate-950 font-black ring-2 ring-emerald-500/30'
                    : isCurrent
                    ? 'bg-amber-500 text-slate-950 font-black ring-4 ring-amber-500/30 scale-105'
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : stepNum}
              </div>
              <span
                className={`hidden md:block text-[10px] lg:text-xs font-semibold mt-2 text-center transition-colors line-clamp-1 ${
                  isCurrent ? 'text-amber-400 font-bold' : isCompleted ? 'text-emerald-400' : 'text-slate-500'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
