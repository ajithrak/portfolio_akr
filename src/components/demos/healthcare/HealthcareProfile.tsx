import React, { useState } from 'react';
import { HealthcareCard } from './ui';

const TABS = ['Overview', 'Medical', 'Insurance'] as const;

export const HealthcareProfile: React.FC = () => {
  const [tab, setTab] = useState<(typeof TABS)[number]>('Overview');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="w-16 h-16 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xl font-bold">
          JD
        </span>
        <div>
          <h1 className="text-xl font-bold text-slate-900">Jordan Davis</h1>
          <p className="text-sm text-slate-500">Patient since Sep 2022</p>
        </div>
      </div>

      <HealthcareCard>
        <div className="flex gap-1.5 border-b border-slate-100 mb-5 -mt-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 pb-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                tab === t ? 'border-sky-500 text-sky-700' : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 'Overview' && (
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-500">Email</dt>
              <dd className="text-slate-700">jordan.davis@careme.health</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Date of birth</dt>
              <dd className="text-slate-700">March 14, 1994</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Emergency contact</dt>
              <dd className="text-slate-700">Sam Davis · +1 (555) 044-7712</dd>
            </div>
          </dl>
        )}

        {tab === 'Medical' && (
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-500">Blood type</dt>
              <dd className="text-slate-700">O+</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Allergies</dt>
              <dd className="text-slate-700">Penicillin</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Current prescription</dt>
              <dd className="text-slate-700">Sertraline 50mg</dd>
            </div>
          </dl>
        )}

        {tab === 'Insurance' && (
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-500">Provider</dt>
              <dd className="text-slate-700">BlueShield PPO</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Member ID</dt>
              <dd className="text-slate-700">BS-2291-JD</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Group number</dt>
              <dd className="text-slate-700">GRP-88214</dd>
            </div>
          </dl>
        )}
      </HealthcareCard>
    </div>
  );
};
