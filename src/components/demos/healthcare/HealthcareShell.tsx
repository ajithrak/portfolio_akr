import React from 'react';
import { FiBell } from 'react-icons/fi';
import { HEALTHCARE_NAV } from './data';

interface HealthcareShellProps {
  active: string;
  onNavigate: (key: string) => void;
  children: React.ReactNode;
}

export const HealthcareShell: React.FC<HealthcareShellProps> = ({ active, onNavigate, children }) => (
  <div className="min-h-[720px] bg-slate-50 text-slate-800">
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center font-bold text-white text-sm">
            C
          </div>
          <span className="font-bold text-slate-900 hidden sm:inline">CareMe Health</span>
        </div>

        <nav className="flex items-center gap-1">
          {HEALTHCARE_NAV.map((item) => {
            const isActive = active === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'text-sky-700 bg-sky-50' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <FiBell size={18} className="text-slate-400" />
          <span className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-semibold">
            JD
          </span>
        </div>
      </div>
    </header>
    <main className="max-w-5xl mx-auto p-4 sm:p-6">{children}</main>
  </div>
);
