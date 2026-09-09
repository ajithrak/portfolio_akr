import React from 'react';

interface MetricCardProps {
  title: string;
  amount: string;
  change: string;
  isPositive: boolean;
  subtext: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, amount, change, isPositive, subtext }) => (
  <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 backdrop-blur-sm">
    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{title}</span>
    <div className="flex items-baseline gap-2 mt-2">
      <span className="text-2xl font-bold text-slate-50 tracking-tight">{amount}</span>
      <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 ${
        isPositive ? 'text-emerald-400 bg-emerald-950/40' : 'text-rose-400 bg-rose-950/40'
      }`}>
        {isPositive ? '↑' : '↓'} {change}
      </span>
    </div>
    <p className="text-xs text-slate-400 mt-2">{subtext}</p>
  </div>
);

export const FintechDashboard: React.FC = () => (
  <div className="space-y-6">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight">Portfolio & Cashflow</h1>
        <p className="text-xs text-slate-400 mt-0.5">Real-time status synced with Federal Reserve Automated Clearing House</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200 hover:bg-slate-800 transition">
          Download Statement
        </button>
        <button className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-slate-950 transition shadow-sm">
          + Initiate Wire
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Total Consolidated Balance"
        amount="$842,910.42"
        change="3.2%"
        isPositive={true}
        subtext="Across 3 liquidity pools"
      />
      <MetricCard
        title="Monthly Cash Inflow"
        amount="$64,120.00"
        change="11.4%"
        isPositive={true}
        subtext="+$7,200 vs last month"
      />
      <MetricCard
        title="Monthly Cash Outflow"
        amount="$28,490.15"
        change="2.1%"
        isPositive={false}
        subtext="Normal operational delta"
      />
      <MetricCard
        title="Yield & Treasury Return"
        amount="$3,412.89"
        change="0.4%"
        isPositive={true}
        subtext="4.85% blended APY"
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-xl p-5">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-sm font-semibold text-white">Consolidated Balance Trend</h3>
            <p className="text-xs text-slate-400">Trailing 30-day liquidity</p>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
            +14.2% QoQ
          </span>
        </div>
        <div className="h-44 w-full pt-4">
          <svg viewBox="0 0 500 150" className="w-full h-full stroke-emerald-400 fill-none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(16,185,129)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(16,185,129)" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0 120 C 70 110, 100 80, 160 85 C 220 90, 260 50, 320 60 C 380 70, 420 20, 500 15 L 500 150 L 0 150 Z"
              fill="url(#chartGrad)"
              stroke="none"
            />
            <path
              d="M0 120 C 70 110, 100 80, 160 85 C 220 90, 260 50, 320 60 C 380 70, 420 20, 500 15"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2 border-t border-slate-800 pt-2">
          <span>Aug 10</span>
          <span>Aug 17</span>
          <span>Aug 24</span>
          <span>Aug 31</span>
          <span>Today</span>
        </div>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">Outflow by Category</h3>
          <p className="text-xs text-slate-400">Highest allocation areas</p>
          <div className="space-y-3 mt-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">Payroll & Benefits</span>
                <span className="font-mono text-slate-300">54% ($15,384)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '54%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">Cloud Infrastructure</span>
                <span className="font-mono text-slate-300">22% ($6,267)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300">Vendor Services</span>
                <span className="font-mono text-slate-300">14% ($3,988)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '14%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[11px] text-slate-400 bg-slate-950/50 p-2.5 rounded border border-slate-800 mt-4">
          All categories within quarterly budget limits.
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-white mb-3">Live Transaction Stream</h3>
        <div className="space-y-3">
          {[
            { name: 'Stripe Settlement Payout', category: 'Operating Income', date: 'Today, 2:15 PM', amount: '+$14,280.00', isCredit: true },
            { name: 'Amazon Web Services', category: 'Infrastructure', date: 'Yesterday', amount: '-$2,149.20', isCredit: false },
            { name: 'Apex Capital Dividend', category: 'Securities', date: 'Sep 06, 2026', amount: '+$750.32', isCredit: true },
            { name: 'WeWork Office Lease', category: 'Facilities', date: 'Sep 05, 2026', amount: '-$3,800.00', isCredit: false },
          ].map((tx, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                  tx.isCredit ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-800/40' : 'bg-slate-800 text-slate-300'
                }`}>
                  {tx.isCredit ? '↓' : '↑'}
                </div>
                <div>
                  <div className="text-xs font-medium text-white">{tx.name}</div>
                  <div className="text-[10px] text-slate-400">{tx.category} • {tx.date}</div>
                </div>
              </div>
              <span className={`text-xs font-mono font-semibold ${tx.isCredit ? 'text-emerald-400' : 'text-slate-200'}`}>
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-white mb-3">Scheduled Debits</h3>
        <div className="space-y-2.5">
          {[
            { title: 'Corporate Tax Reserve', date: 'Due Sep 15', val: '$12,400.00' },
            { title: 'Google Workspace', date: 'Due Sep 18', val: '$320.00' },
            { title: 'Health Insurance Trust', date: 'Due Sep 22', val: '$4,150.00' },
          ].map((bill, i) => (
            <div key={i} className="p-2.5 rounded-lg border border-slate-800 bg-slate-950/30 flex justify-between items-center">
              <div>
                <div className="text-xs font-medium text-slate-200">{bill.title}</div>
                <div className="text-[10px] text-slate-400">{bill.date}</div>
              </div>
              <span className="text-xs font-mono text-slate-300 font-medium">{bill.val}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 py-2 border border-slate-800 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-slate-800/40 transition">
          Manage Automated Clearing
        </button>
      </div>
    </div>
  </div>
);
