import React from 'react';
import { FIRFormData, StolenItem, Witness } from '@/lib/types';
import { FileText, Plus, Trash2, Camera, Users, Sparkles } from 'lucide-react';

interface Step5Props {
  formData: FIRFormData;
  onChange: (updated: Partial<FIRFormData>) => void;
}

const EVIDENCE_OPTIONS = [
  'CCTV Footage Available',
  'WhatsApp / SMS Chat Screenshots',
  'Bank Account Statement / Transaction Advice',
  'Call Detail Logs',
  'Photographs of Scene / Injuries',
  'Purchase Receipt / Invoice',
  'Audio / Video Recordings',
  'Medical Legal Certificate (MLC)',
];

export default function Step5Statement({ formData, onChange }: Step5Props) {
  // Stolen Item Helpers
  const addStolenItem = () => {
    const newItem: StolenItem = {
      id: Date.now().toString(),
      itemName: '',
      estimatedValue: '',
      serialOrId: '',
    };
    onChange({ stolenItems: [...formData.stolenItems, newItem] });
  };

  const removeStolenItem = (id: string) => {
    onChange({ stolenItems: formData.stolenItems.filter((i) => i.id !== id) });
  };

  const updateStolenItem = (id: string, updated: Partial<StolenItem>) => {
    onChange({
      stolenItems: formData.stolenItems.map((i) => (i.id === id ? { ...i, ...updated } : i)),
    });
  };

  // Witness Helpers
  const addWitness = () => {
    const newW: Witness = {
      id: Date.now().toString(),
      name: '',
      phone: '',
    };
    onChange({ witnesses: [...formData.witnesses, newW] });
  };

  const removeWitness = (id: string) => {
    onChange({ witnesses: formData.witnesses.filter((w) => w.id !== id) });
  };

  const updateWitness = (id: string, updated: Partial<Witness>) => {
    onChange({
      witnesses: formData.witnesses.map((w) => (w.id === id ? { ...w, ...updated } : w)),
    });
  };

  // Evidence Toggle
  const toggleEvidence = (type: string) => {
    const current = formData.evidenceTypes || [];
    if (current.includes(type)) {
      onChange({ evidenceTypes: current.filter((t) => t !== type) });
    } else {
      onChange({ evidenceTypes: [...current, type] });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <FileText className="w-5 h-5 text-amber-400" />
          Incident Narrative, Evidence & Witnesses
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Provide a chronological narrative of events and list all corroborating evidence or eyewitnesses.
        </p>
      </div>

      {/* Main Incident Narrative */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider">
            Chronological Statement / Detailed Narration *
          </label>
          <span className="text-[11px] text-slate-400">
            Be precise: State what happened first, second, and third.
          </span>
        </div>
        <textarea
          rows={6}
          placeholder="State the facts chronologically..."
          value={formData.incidentNarrative}
          onChange={(e) => onChange({ incidentNarrative: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 leading-relaxed"
        />
      </div>

      {/* Stolen / Damaged Items Section */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Stolen / Damaged Property Details (If Any)
          </h4>
          <button
            type="button"
            onClick={addStolenItem}
            className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-amber-200"
          >
            <Plus className="w-3.5 h-3.5" /> Add Property / Item
          </button>
        </div>

        {formData.stolenItems.length === 0 ? (
          <p className="text-xs text-slate-500 italic">
            No specific stolen items listed. Click 'Add Property / Item' if cash, jewelry, phone, or vehicle was stolen.
          </p>
        ) : (
          <div className="space-y-3">
            {formData.stolenItems.map((item, idx) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 relative"
              >
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Item Description</label>
                  <input
                    type="text"
                    placeholder="e.g. Gold Necklace 22K (25 grams)"
                    value={item.itemName}
                    onChange={(e) => updateStolenItem(item.id, { itemName: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Est. Value (Rs.)</label>
                  <input
                    type="text"
                    placeholder="e.g. 1,50,000"
                    value={item.estimatedValue}
                    onChange={(e) => updateStolenItem(item.id, { estimatedValue: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-[11px] text-slate-400 mb-1">Serial / IMEI / Tag</label>
                    <input
                      type="text"
                      placeholder="e.g. IMEI 8642930482910"
                      value={item.serialOrId || ''}
                      onChange={(e) => updateStolenItem(item.id, { serialOrId: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeStolenItem(item.id)}
                    className="text-rose-400 hover:text-rose-300 p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 mt-5"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Attached Evidence Checklist */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <Camera className="w-4 h-4" /> Corroborating Evidence Available
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {EVIDENCE_OPTIONS.map((option) => {
            const isChecked = (formData.evidenceTypes || []).includes(option);
            return (
              <label
                key={option}
                onClick={() => toggleEvidence(option)}
                className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center gap-2.5 ${
                  isChecked
                    ? 'bg-amber-500/20 border-amber-500 text-amber-200'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="accent-amber-500 rounded"
                />
                <span>{option}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Witnesses */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <Users className="w-4 h-4" /> Witness Contacts (Optional)
          </h4>
          <button
            type="button"
            onClick={addWitness}
            className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-amber-200"
          >
            <Plus className="w-3.5 h-3.5" /> Add Witness
          </button>
        </div>

        {formData.witnesses.length === 0 ? (
          <p className="text-xs text-slate-500 italic">
            No specific witnesses added. Click 'Add Witness' if someone witnessed the incident.
          </p>
        ) : (
          <div className="space-y-3">
            {formData.witnesses.map((w) => (
              <div
                key={w.id}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 relative"
              >
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Witness Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Anil Mehta"
                    value={w.name}
                    onChange={(e) => updateWitness(w.id, { name: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-[11px] text-slate-400 mb-1">Contact Phone</label>
                    <input
                      type="text"
                      placeholder="e.g. +91 9811XXXXXX"
                      value={w.phone}
                      onChange={(e) => updateWitness(w.id, { phone: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeWitness(w.id)}
                    className="text-rose-400 hover:text-rose-300 p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 mt-5"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Specific Prayer / Relief */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
        <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider">
          Specific Prayer / Relief Sought
        </label>
        <textarea
          rows={2}
          placeholder="e.g. Register FIR, direct immediate search of premises, freeze stolen funds."
          value={formData.reliefRequested}
          onChange={(e) => onChange({ reliefRequested: e.target.value })}
          className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500"
        />
      </div>
    </div>
  );
}
