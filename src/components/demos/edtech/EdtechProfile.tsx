import React from 'react';
import { EdtechCard } from './ui';

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

    <div className="grid sm:grid-cols-2 gap-4">
      <EdtechCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Student details</h2>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-slate-500">Email</dt>
            <dd className="text-slate-700">sam.kim@learnly.io</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Cohort</dt>
            <dd className="text-slate-700">Product Design '24</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">Plan</dt>
            <dd className="text-violet-600 font-medium">Pro Learner</dd>
          </div>
        </dl>
      </EdtechCard>

      <EdtechCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Achievements</h2>
        <ul className="space-y-3 text-sm">
          <li className="flex justify-between">
            <span className="text-slate-700">Courses completed</span>
            <span className="font-medium text-slate-900">2</span>
          </li>
          <li className="flex justify-between">
            <span className="text-slate-700">Certificates earned</span>
            <span className="font-medium text-slate-900">2</span>
          </li>
          <li className="flex justify-between">
            <span className="text-slate-700">Longest streak</span>
            <span className="font-medium text-slate-900">18 days</span>
          </li>
        </ul>
      </EdtechCard>
    </div>
  </div>
);
