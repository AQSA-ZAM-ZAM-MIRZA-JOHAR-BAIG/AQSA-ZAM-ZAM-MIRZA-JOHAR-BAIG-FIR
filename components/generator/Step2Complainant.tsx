import React from 'react';
import { FIRFormData } from '@/lib/types';
import { User, Phone, Mail, Home, CreditCard, ShieldAlert } from 'lucide-react';

interface Step2Props {
  formData: FIRFormData;
  onChange: (updated: Partial<FIRFormData>) => void;
}

export default function Step2Complainant({ formData, onChange }: Step2Props) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <User className="w-5 h-5 text-amber-400" />
          Complainant / Applicant Credentials
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Police complaints require full, verifiable personal details of the applicant filing the report.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
        {/* Name & Guardian */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Full Legal Name of Complainant *
            </label>
            <input
              type="text"
              placeholder="e.g. Ramesh Kumar Sharma"
              value={formData.complainantName}
              onChange={(e) => onChange({ complainantName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Father's / Spouse's Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Late Shri Suresh Sharma"
              value={formData.guardianName}
              onChange={(e) => onChange({ guardianName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Age & Gender */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Age (in Years) *
            </label>
            <input
              type="number"
              min="18"
              max="100"
              placeholder="e.g. 34"
              value={formData.complainantAge}
              onChange={(e) => onChange({ complainantAge: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Gender *
            </label>
            <select
              value={formData.complainantGender}
              onChange={(e) => onChange({ complainantGender: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Mobile Contact Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={formData.complainantPhone}
                onChange={(e) => onChange({ complainantPhone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="e.g. ramesh@example.com"
              value={formData.complainantEmail}
              onChange={(e) => onChange({ complainantEmail: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Complete Address */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Full Residential Address *
          </label>
          <textarea
            rows={2}
            placeholder="House/Flat No., Street, Area, City, Pin Code"
            value={formData.complainantAddress}
            onChange={(e) => onChange({ complainantAddress: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Identity Verification */}
        <div className="pt-3 border-t border-slate-800/80">
          <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <CreditCard className="w-4 h-4" /> Identity Proof Details
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Govt ID Proof Type
              </label>
              <select
                value={formData.idType}
                onChange={(e) => onChange({ idType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500"
              >
                <option value="Aadhaar Card">Aadhaar Card</option>
                <option value="Voter ID Card">Voter ID Card</option>
                <option value="PAN Card">PAN Card</option>
                <option value="Driving License">Driving License</option>
                <option value="Passport">Passport</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                ID Proof Number (Masked or Full)
              </label>
              <input
                type="text"
                placeholder="e.g. XXXX-XXXX-1234"
                value={formData.idNumber}
                onChange={(e) => onChange({ idNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
