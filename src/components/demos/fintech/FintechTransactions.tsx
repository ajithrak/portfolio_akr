import React, { useState } from 'react';

export interface Transaction {
  id: string;
  date: string;
  merchant: string;
  category: string;
  account: string;
  amount: number;
  type: 'credit' | 'debit';
  status: 'Completed' | 'Pending' | 'Failed' | 'Refunded';
}

const mockTransactions: Transaction[] = [
  { id: 'TX-901', date: 'Sep 08, 2026', merchant: 'Supabase Inc.', category: 'Software', account: 'Operating Checking ••8921', amount: 89.00, type: 'debit', status: 'Completed' },
  { id: 'TX-902', date: 'Sep 07, 2026', merchant: 'Global Client Settlement', category: 'Invoicing', account: 'Primary Treasury ••1024', amount: 12450.00, type: 'credit', status: 'Completed' },
  { id: 'TX-903', date: 'Sep 06, 2026', merchant: 'Delta Air Lines', category: 'Travel', account: 'Corporate Card ••4421', amount: 642.80, type: 'debit', status: 'Pending' },
  { id: 'TX-904', date: 'Sep 04, 2026', merchant: 'Acme SaaS Tools', category: 'Subscription', account: 'Operating Checking ••8921', amount: 299.00, type: 'debit', status: 'Failed' },
  { id: 'TX-905', date: 'Sep 03, 2026', merchant: 'Office Equipment Co.', category: 'Supplies', account: 'Corporate Card ••4421', amount: 412.50, type: 'credit', status: 'Refunded' },
  { id: 'TX-906', date: 'Sep 01, 2026', merchant: 'Hetzner Cloud', category: 'Hosting', account: 'Operating Checking ••8921', amount: 142.30, type: 'debit', status: 'Completed' },
];

export const FintechTransactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const filteredData = mockTransactions.filter((tx) => {
    const matchesSearch = tx.merchant.toLowerCase().includes(searchTerm.toLowerCase()) || tx.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || tx.status === statusFilter;
    const matchesType = typeFilter === 'All' || tx.type === typeFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusBadge = (status: Transaction['status']) => {
    switch (status) {
      case 'Completed':
        return <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">Completed</span>;
      case 'Pending':
        return <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-800/60 text-amber-400">Pending</span>;
      case 'Failed':
        return <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-rose-950/60 border border-rose-800/60 text-rose-400">Failed</span>;
      case 'Refunded':
        return <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-sky-950/60 border border-sky-800/60 text-sky-400">Refunded</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Financial Ledger & Activity</h2>
          <p className="text-xs text-slate-400 mt-1">Direct bank verification statements & real-time transaction events</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-800 transition">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export CSV
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-200 hover:bg-slate-850 transition">
            Export PDF (Audit)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg">
          <span className="text-[10px] text-slate-400 uppercase font-mono">Gross Inflow (MTD)</span>
          <p className="text-base font-bold text-emerald-400 mt-0.5">+$12,862.50</p>
        </div>
        <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg">
          <span className="text-[10px] text-slate-400 uppercase font-mono">Gross Outflow (MTD)</span>
          <p className="text-base font-bold text-slate-200 mt-0.5">-$1,173.10</p>
        </div>
        <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg">
          <span className="text-[10px] text-slate-400 uppercase font-mono">Pending Authorization</span>
          <p className="text-base font-bold text-amber-400 mt-0.5">$642.80</p>
        </div>
        <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg">
          <span className="text-[10px] text-slate-400 uppercase font-mono">Audit Reconciled</span>
          <p className="text-base font-bold text-sky-400 mt-0.5">99.4%</p>
        </div>
      </div>

      <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="w-full md:w-80 relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search reference, merchant, ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 focus:outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
            <option value="Refunded">Refunded</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-2.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 focus:outline-none"
          >
            <option value="All">All Types</option>
            <option value="Credit">Credit (Inflow)</option>
            <option value="Debit">Debit (Outflow)</option>
          </select>
        </div>
      </div>

      <div className="hidden md:block overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/40">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 bg-slate-900/80 font-mono">
              <th className="py-3 px-4">TRANSACTION</th>
              <th className="py-3 px-4">CATEGORY</th>
              <th className="py-3 px-4">SOURCE ACCOUNT</th>
              <th className="py-3 px-4">DATE</th>
              <th className="py-3 px-4 text-right">AMOUNT</th>
              <th className="py-3 px-4 text-center">STATUS</th>
              <th className="py-3 px-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-4 font-medium text-slate-100 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${item.type === 'credit' ? 'bg-emerald-400' : 'bg-slate-500'}`} />
                  <div>
                    <div>{item.merchant}</div>
                    <span className="text-[10px] text-slate-400 font-mono">{item.id}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-slate-300">{item.category}</td>
                <td className="py-3.5 px-4 text-slate-400 font-mono text-[11px]">{item.account}</td>
                <td className="py-3.5 px-4 text-slate-400">{item.date}</td>
                <td className={`py-3.5 px-4 text-right font-mono font-semibold ${
                  item.type === 'credit' ? 'text-emerald-400' : 'text-slate-100'
                }`}>
                  {item.type === 'credit' ? '+' : '-'}${item.amount.toFixed(2)}
                </td>
                <td className="py-3.5 px-4 text-center">{getStatusBadge(item.status)}</td>
                <td className="py-3.5 px-4 text-right">
                  <button className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800">
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {filteredData.map((item) => (
          <div key={item.id} className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-semibold text-white text-sm">{item.merchant}</span>
                <p className="text-[10px] text-slate-400 font-mono">{item.id} • {item.date}</p>
              </div>
              <span className={`font-mono text-sm font-bold ${item.type === 'credit' ? 'text-emerald-400' : 'text-slate-100'}`}>
                {item.type === 'credit' ? '+' : '-'}${item.amount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-800/80">
              <span className="text-slate-400">{item.category}</span>
              <div>{getStatusBadge(item.status)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
