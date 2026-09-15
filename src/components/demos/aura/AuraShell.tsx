import React, { useState } from 'react';
import { AURA_NAV } from './data';

interface AuraShellProps {
  active: string;
  onNavigate: (key: string) => void;
  children: React.ReactNode;
}

export const AuraShell: React.FC<AuraShellProps> = ({ active, onNavigate, children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-[720px] bg-slate-950 text-slate-100 flex flex-col md:flex-row antialiased">
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-30 backdrop-blur-md">
        <div className="flex items-center gap-2 font-bold text-white tracking-tight">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-mono text-sm">
            ▲
          </div>
          <span>Aura Vault</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800"
          aria-label="Toggle Navigation"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden border-b border-slate-800 bg-slate-900 p-3 space-y-1 text-xs font-medium">
          {AURA_NAV.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  onNavigate(item.key);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 text-left px-3 py-2.5 rounded-lg transition-colors ${
                  isActive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-slate-400 hover:bg-slate-800/60'
                }`}
              >
                <Icon size={16} />
                {item.label}
              </button>
            );
          })}
        </nav>
      )}

      <aside className="hidden md:flex w-64 shrink-0 bg-slate-900 border-r border-slate-800 flex-col justify-between">
        <div>
          <div className="flex items-center gap-2.5 px-6 py-6 border-b border-slate-800/80">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold">
              ▲
            </div>
            <div>
              <div className="font-semibold text-white tracking-tight text-sm">Aura Institutional</div>
              <div className="text-[10px] text-emerald-400 font-mono tracking-wide">ENTERPRISE TIER</div>
            </div>
          </div>

          <nav className="p-4 space-y-1.5 text-xs font-medium">
            {AURA_NAV.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs text-white">
            SC
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">Sophia Chen</p>
            <p className="text-[10px] text-slate-400 truncate">s.chen@auravault.io</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">{children}</main>
    </div>
  );
};
