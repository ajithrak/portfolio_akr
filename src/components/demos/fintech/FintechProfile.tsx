import React, { useState } from 'react';

export const FintechProfile: React.FC = () => {
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@nexusbank.com',
    phone: '+1 (415) 890-2134',
    address: '450 Mission Heights, Suite 1200, San Francisco, CA 94105',
    dob: '1989-11-24',
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 text-xl font-bold font-mono">
              AM
            </div>
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full" title="Active & Verified" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white">{profile.fullName}</h1>
              <span className="bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                KYC Level 3 Verified
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Tier 3 Qualified Institutional Account • Member since Oct 2022</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg text-slate-200 transition">
            Export Identity Record
          </button>
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold rounded-lg text-slate-950 transition">
            Request Limit Increase
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
            <h2 className="text-sm font-bold text-white mb-4 uppercase tracking-wider font-mono">Personal & Tax Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Full Legal Name</label>
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Primary Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={profile.dob}
                  onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:border-emerald-500 outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs text-slate-400 mb-1">Residential Address for Tax Compliance</label>
                <input
                  type="text"
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 focus:border-emerald-500 outline-none"
                />
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg text-white transition">
                Save Contact Updates
              </button>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
            <h2 className="text-sm font-bold text-white mb-4 uppercase tracking-wider font-mono">Authenticated Devices</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="text-lg">💻</span>
                  <div>
                    <div className="text-xs font-semibold text-white">Apple MacBook Pro 16" (Current)</div>
                    <div className="text-[10px] text-slate-400">San Francisco, CA • IP 192.0.2.1 • TLS Session 87b4</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📱</span>
                  <div>
                    <div className="text-xs font-semibold text-white">iPhone 15 Pro Max</div>
                    <div className="text-[10px] text-slate-400">San Francisco, CA • Nexus Bank App v4.2</div>
                  </div>
                </div>
                <button className="text-[11px] text-rose-400 hover:text-rose-300">Revoke</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
            <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider font-mono">KYC Compliance</h3>
            <p className="text-xs text-slate-400 mb-4">Required by federal banking laws for aggregate transactions above $250k.</p>

            <div className="p-3.5 bg-slate-950 rounded-lg border border-slate-800 mb-4 space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Gov. Issued ID</span>
                <span className="text-emerald-400 font-mono">Verified</span>
              </div>
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Proof of Address</span>
                <span className="text-emerald-400 font-mono">Verified</span>
              </div>
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-300">Beneficial Ownership</span>
                <span className="text-emerald-400 font-mono">Verified</span>
              </div>
            </div>

            <div className="border-2 border-dashed border-slate-800 hover:border-slate-700 rounded-xl p-4 text-center cursor-pointer transition">
              <svg className="w-8 h-8 text-slate-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-xs text-slate-300 font-medium">Upload Updated Supporting Document</p>
              <p className="text-[10px] text-slate-500 mt-1">PDF, PNG, JPG up to 15MB</p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
            <h3 className="text-sm font-bold text-white mb-2">Wire Threshold Limits</h3>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between mb-1 text-slate-400">
                  <span>Daily ACH / Wire</span>
                  <span className="font-mono text-white">$1,000,000</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full">
                  <div className="w-1/4 h-full bg-emerald-500 rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-slate-400">
                  <span>Card Daily Limit</span>
                  <span className="font-mono text-white">$50,000</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full">
                  <div className="w-1/12 h-full bg-emerald-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
