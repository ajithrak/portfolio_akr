import React from 'react';
import { EdtechCard } from './ui';

const ACHIEVEMENTS = [
  { label: '2 courses completed', className: 'bg-emerald-50 text-emerald-700' },
  { label: '2 certificates earned', className: 'bg-violet-50 text-violet-700' },
  { label: '18-day longest streak', className: 'bg-amber-50 text-amber-700' },
  { label: 'Top 10% in cohort', className: 'bg-sky-50 text-sky-700' },
];

export const EdtechProfile: React.FC = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-4">
      <span className="w-16 h-16 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xl font-bold">
        SK
      </span>
      <div>
        <h1 className="text-xl font-bold text-slate-900">Sam Kim</h1>
        <p className="text-sm text-slate-500">Learning since Jan 2024</p>
      </div>
    </div>

    <EdtechCard>
      <h2 className="text-sm font-semibold text-slate-900 mb-4">Student details</h2>
      <dl className="grid sm:grid-cols-3 gap-4 text-sm">
        <div>
          <dt className="text-slate-500 text-xs mb-1">Email</dt>
          <dd className="text-slate-700">sam.kim@learnly.io</dd>
        </div>
        <div>
          <dt className="text-slate-500 text-xs mb-1">Cohort</dt>
          <dd className="text-slate-700">Product Design '24</dd>
        </div>
        <div>
          <dt className="text-slate-500 text-xs mb-1">Plan</dt>
          <dd className="text-violet-600 font-medium">Pro Learner</dd>
        </div>
      </dl>
    </EdtechCard>

    <EdtechCard>
      <h2 className="text-sm font-semibold text-slate-900 mb-4">Achievements</h2>
      <div className="flex flex-wrap gap-2">
        {ACHIEVEMENTS.map((a) => (
          <span key={a.label} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${a.className}`}>
            {a.label}
          </span>
        ))}
      </div>
    </EdtechCard>
  </div>
);
