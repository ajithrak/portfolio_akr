import React, { useState } from 'react';

type SettingsTab = 'notifications' | 'linked' | 'privacy' | 'appearance';

export const FintechSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('notifications');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [notifications, setNotifications] = useState({
    largeDeposits: true,
    wireTransfers: true,
    cardActivity: true,
    budgetAlerts: false,
    suspiciousAuth: true,
  });

  const [dataSharing, setDataSharing] = useState(false);
  const [cookieAnalytics, setCookieAnalytics] = useState(true);
  const [themeMode, setThemeMode] = useState<'dark' | 'light' | 'system'>('dark');

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 700);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight">System & Account Settings</h1>
        <p className="text-xs text-slate-400 mt-1">Configure compliance disclosures, linked institutions, and event webhooks</p>
      </div>

      <div className="flex border-b border-slate-800 space-x-6 overflow-x-auto text-xs font-medium">
        {(
          [
            { id: 'notifications', label: 'Notification Protocols' },
            { id: 'linked', label: 'Linked Financial Institutions' },
            { id: 'privacy', label: 'Data & Privacy' },
            { id: 'appearance', label: 'Display & Appearance' },
          ] as { id: SettingsTab; label: string }[]
        ).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 transition-colors border-b-2 whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-emerald-500 text-emerald-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'notifications' && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-5">
          <div>
            <h2 className="text-sm font-semibold text-white">Event Notification Controls</h2>
            <p className="text-xs text-slate-400">Choose which financial actions trigger instant cryptographic alerts</p>
          </div>

          <div className="space-y-4 divide-y divide-slate-800/60 pt-2">
            {(
              [
                { key: 'largeDeposits', label: 'Large Inflow / Deposit Alerts', desc: 'Notify immediately when an incoming transfer exceeds $10,000' },
                { key: 'wireTransfers', label: 'Outbound Wire Authorizations', desc: 'SMS and push verification for all outward automated clearing batches' },
                { key: 'cardActivity', label: 'Real-time Card Charges', desc: 'Instant push notices for physical or virtual corporate card swipes' },
                { key: 'budgetAlerts', label: 'Weekly Operating Budget Summaries', desc: 'Digest of burn rate and operational runway adjustments' },
                { key: 'suspiciousAuth', label: 'Suspicious / New Location Sign-in', desc: 'Urgent email and SMS if authentication originates from unrecognized IP' },
              ] as { key: keyof typeof notifications; label: string; desc: string }[]
            ).map((item) => (
              <div key={item.key} className="flex items-center justify-between pt-4">
                <div>
                  <p className="text-xs font-medium text-slate-200">{item.label}</p>
                  <p className="text-[11px] text-slate-400">{item.desc}</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications[item.key]}
                  onChange={(e) => setNotifications({ ...notifications, [item.key]: e.target.checked })}
                  className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-emerald-500 focus:ring-emerald-500/30 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'linked' && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-sm font-semibold text-white">Linked External Accounts</h2>
              <p className="text-xs text-slate-400">External balances integrated via Open Banking API</p>
            </div>
            <button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-slate-950 text-xs font-semibold rounded-lg transition">
              + Link New Institution
            </button>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { name: 'J.P. Morgan Chase Primary Clearing', acct: '••••4102', status: 'Connected', balance: '$210,400.00' },
              { name: 'Silicon Valley Bank Reserve', acct: '••••9920', status: 'Connected', balance: '$632,510.42' },
            ].map((bank, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono text-white">
                    🏦
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{bank.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{bank.acct} • {bank.balance}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">{bank.status}</span>
                  <button className="text-xs text-rose-400 hover:text-rose-300">Disconnect</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'privacy' && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-5">
          <div>
            <h2 className="text-sm font-semibold text-white">Data Sharing & Telemetry</h2>
            <p className="text-xs text-slate-400">Manage how financial transaction metadata is processed</p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-200">Credit Bureau Data Reporting</p>
                <p className="text-[11px] text-slate-400">Transmit commercial credit utilization data to build institutional credit line</p>
              </div>
              <input
                type="checkbox"
                checked={dataSharing}
                onChange={(e) => setDataSharing(e.target.checked)}
                className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-emerald-500 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-200">Aggregated Audit Analytics</p>
                <p className="text-[11px] text-slate-400">Allow platform to gather anonymized telemetry for fraud prevention benchmarks</p>
              </div>
              <input
                type="checkbox"
                checked={cookieAnalytics}
                onChange={(e) => setCookieAnalytics(e.target.checked)}
                className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-emerald-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'appearance' && (
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-4">
          <h2 className="text-sm font-semibold text-white">Visual Presentation</h2>
          <div className="grid grid-cols-3 gap-3">
            {(
              [
                { id: 'dark', label: 'Dark Charcoal (Default)' },
                { id: 'light', label: 'High-Contrast Light' },
                { id: 'system', label: 'Sync with OS' },
              ] as { id: 'dark' | 'light' | 'system'; label: string }[]
            ).map((mode) => (
              <button
                key={mode.id}
                onClick={() => setThemeMode(mode.id)}
                className={`p-3 rounded-lg border text-xs text-center font-medium transition ${
                  themeMode === mode.id
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                    : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-semibold rounded-lg text-xs transition disabled:opacity-50 flex items-center gap-2"
          >
            {isSaving && <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />}
            Save Configuration
          </button>
          <button className="px-4 py-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 font-medium rounded-lg text-xs transition">
            Discard
          </button>
        </div>
        {saveSuccess && (
          <span className="text-xs font-mono text-emerald-400">✓ Settings saved & applied</span>
        )}
      </div>

      <div className="mt-10 border border-rose-900/40 bg-rose-950/10 rounded-xl p-6">
        <h3 className="text-sm font-bold text-rose-400 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Danger Zone
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Terminating this organization account will revoke API credentials, cancel pending clearinghouse batches, and begin statutory 7-year regulatory record archiving.
        </p>
        <div className="mt-4 flex">
          <button className="px-3.5 py-1.5 border border-rose-800 bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 font-medium rounded-lg text-xs transition">
            Close Institutional Account
          </button>
        </div>
      </div>
    </div>
  );
};
