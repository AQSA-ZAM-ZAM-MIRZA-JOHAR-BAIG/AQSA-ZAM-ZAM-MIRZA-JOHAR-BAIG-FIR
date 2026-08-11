import React from 'react';
import { FIRFormData } from '@/lib/types';
import { Calendar, Clock, MapPin, AlertCircle, Info } from 'lucide-react';

interface Step3Props {
  formData: FIRFormData;
  onChange: (updated: Partial<FIRFormData>) => void;
}

export default function Step3Incident({ formData, onChange }: Step3Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-amber-400" />
          Incident Timeline & Location
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Specify exact temporal and spatial details to establish territorial jurisdiction and crime scene facts.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> Date of Occurrence *
            </label>
            <input
              type="date"
              value={formData.incidentDate}
              onChange={(e) => onChange({ incidentDate: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> Time of Incident (Approximate) *
            </label>
            <input
              type="text"
              placeholder="e.g. Around 04:30 PM / Late Night 11:00 PM"
              value={formData.incidentTime}
              onChange={(e) => onChange({ incidentTime: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Location Details */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-amber-400" /> Exact Place / Site of Incident *
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Near Metro Gate 3, Ring Road, Market Square / Inside Flat No 402, Block B"
            value={formData.incidentLocation}
            onChange={(e) => onChange({ incidentLocation: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Nearest Landmark (Optional)
          </label>
          <input
            type="text"
            placeholder="e.g. Opposite State Bank ATM / Next to Central Hospital"
            value={formData.landmark}
            onChange={(e) => onChange({ landmark: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Delay Explanation Box */}
        <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Was there any delay in submitting this complaint?</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            If you are filing this report hours or days after the incident, police officers require a brief factual explanation (e.g. medical treatment, extreme mental shock, searching for lost items, or attempts to resolve at bank/service center).
          </p>
          <textarea
            rows={2}
            placeholder="e.g. Delay occurred due to immediate medical treatment required by complainant / searching for missing documents."
            value={formData.delayReason}
            onChange={(e) => onChange({ delayReason: e.target.value })}
            className="w-full px-3.5 py-2 rounded-xl bg-slate-950/90 border border-amber-500/20 text-slate-100 text-xs focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>
    </div>
  );
}
