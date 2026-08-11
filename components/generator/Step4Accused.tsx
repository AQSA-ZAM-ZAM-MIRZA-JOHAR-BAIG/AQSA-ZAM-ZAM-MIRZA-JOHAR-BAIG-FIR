import React from 'react';
import { FIRFormData, AccusedPerson } from '@/lib/types';
import { UserX, Plus, Trash2, ShieldAlert } from 'lucide-react';

interface Step4Props {
  formData: FIRFormData;
  onChange: (updated: Partial<FIRFormData>) => void;
}

export default function Step4Accused({ formData, onChange }: Step4Props) {
  const addAccused = () => {
    const newAccused: AccusedPerson = {
      id: Date.now().toString(),
      name: '',
      isUnknown: false,
      phone: '',
      address: '',
      description: '',
      socialHandle: '',
    };
    onChange({ accusedList: [...formData.accusedList, newAccused] });
  };

  const removeAccused = (id: string) => {
    onChange({ accusedList: formData.accusedList.filter((a) => a.id !== id) });
  };

  const updateAccused = (id: string, updatedFields: Partial<AccusedPerson>) => {
    onChange({
      accusedList: formData.accusedList.map((a) =>
        a.id === id ? { ...a, ...updatedFields } : a
      ),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <UserX className="w-5 h-5 text-amber-400" />
            Accused / Suspect Information
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Specify known individuals or state unidentified persons with physical identifiers / contact handles.
          </p>
        </div>
        <button
          type="button"
          onClick={addAccused}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold hover:bg-amber-500/20 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" /> Add Suspect
        </button>
      </div>

      {formData.accusedList.length === 0 ? (
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-dashed border-slate-800 text-center space-y-3">
          <ShieldAlert className="w-8 h-8 text-amber-400 mx-auto opacity-70" />
          <h4 className="text-sm font-bold text-slate-200">
            No Suspects Added Yet
          </h4>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            By default, the complaint will be registered against "Unknown / Unidentified Person(s)". Click below if you have names, phone numbers, or physical descriptions of suspects.
          </p>
          <button
            type="button"
            onClick={addAccused}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold border border-slate-700"
          >
            <Plus className="w-4 h-4" /> Add Known or Unknown Suspect Details
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {formData.accusedList.map((acc, index) => (
            <div
              key={acc.id}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 relative"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Suspect #{index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeAccused(acc.id)}
                  className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-semibold"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Remove
                </button>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-xs font-medium text-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acc.isUnknown}
                    onChange={(e) =>
                      updateAccused(acc.id, {
                        isUnknown: e.target.checked,
                        name: e.target.checked ? 'Unknown Suspect' : acc.name,
                      })
                    }
                    className="accent-amber-500 rounded"
                  />
                  Unidentified / Unknown Person (Relying on CCTV / Description)
                </label>
              </div>

              {!acc.isUnknown && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name / Alias
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vikram Sharma alias Vicky"
                      value={acc.name}
                      onChange={(e) => updateAccused(acc.id, { name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Contact Number (If known)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. +91 98XXXXXXXX"
                      value={acc.phone || ''}
                      onChange={(e) => updateAccused(acc.id, { phone: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Address / Workplace (If known)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Resident of Sector 14, Gurgaon"
                      value={acc.address || ''}
                      onChange={(e) => updateAccused(acc.id, { address: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Physical Description / Vehicle Details / Online Profile
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Height approx 5'10'', driving a black motorcycle (Reg No: DL-XX-XXXX), wearing a blue jacket."
                  value={acc.description || ''}
                  onChange={(e) => updateAccused(acc.id, { description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
