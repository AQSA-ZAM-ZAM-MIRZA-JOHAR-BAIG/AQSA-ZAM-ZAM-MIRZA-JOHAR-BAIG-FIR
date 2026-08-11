import React from 'react';
import { FIRFormData, IncidentCategory } from '@/lib/types';
import { INCIDENT_CATEGORIES } from '@/lib/categories';
import { ShieldCheck, MapPin, Building, Globe } from 'lucide-react';

interface Step1Props {
  formData: FIRFormData;
  onChange: (updated: Partial<FIRFormData>) => void;
}

export default function Step1Category({ formData, onChange }: Step1Props) {
  const handleCategorySelect = (catId: IncidentCategory) => {
    const selected = INCIDENT_CATEGORIES.find((c) => c.id === catId);
    onChange({
      category: catId,
      reliefRequested: selected?.defaultRelief || formData.reliefRequested,
      incidentNarrative: formData.incidentNarrative || selected?.sampleNarrative || '',
    });
  };

  return (
    <div className="space-y-6">
      {/* Category Header */}
      <div>
        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
          Select Incident Category & Police Station
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Choose the category that best describes your grievance to load recommended legal citations (BNS 2023 / IT Act).
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {INCIDENT_CATEGORIES.map((cat) => {
          const isSelected = formData.category === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategorySelect(cat.id)}
              className={`p-4 rounded-xl border text-left transition-all relative ${
                isSelected
                  ? 'bg-amber-500/15 border-amber-500 text-slate-100 ring-2 ring-amber-500/30 shadow-lg'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-100">{cat.title}</span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                )}
              </div>
              <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                {cat.shortDesc}
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {cat.bnsReferences.slice(0, 2).map((ref, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-semibold bg-slate-800 text-amber-300 px-2 py-0.5 rounded border border-slate-700"
                  >
                    {ref.split(' ')[0]} {ref.split(' ')[1]}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Police Station & Location Input Fields */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <Building className="w-4 h-4" /> Police Station & Jurisdiction Info
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Police Station Name *
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. Cyber Crime Police Station / Sadar PS"
                value={formData.policeStationName}
                onChange={(e) => onChange({ policeStationName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              District / City *
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. New Delhi / South District"
                value={formData.district}
                onChange={(e) => onChange({ district: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              State / Union Territory *
            </label>
            <input
              type="text"
              placeholder="e.g. Delhi / Maharashtra"
              value={formData.state}
              onChange={(e) => onChange({ state: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Formal Complaint Format Language
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-xs font-medium text-slate-200 cursor-pointer">
              <input
                type="radio"
                name="language"
                value="English"
                checked={formData.language === 'English'}
                onChange={() => onChange({ language: 'English' })}
                className="accent-amber-500"
              />
              Standard Legal English (Recommended for official records)
            </label>
            <label className="flex items-center gap-2 text-xs font-medium text-slate-200 cursor-pointer">
              <input
                type="radio"
                name="language"
                value="Hindi-Transliterated"
                checked={formData.language === 'Hindi-Transliterated'}
                onChange={() => onChange({ language: 'Hindi-Transliterated' })}
                className="accent-amber-500"
              />
              Hindi / Transliterated Terms
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
