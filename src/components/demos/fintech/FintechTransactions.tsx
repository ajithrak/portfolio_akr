import React, { useState } from 'react';
import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';
import { FintechCard } from './ui';
import { TRANSACTIONS, formatCurrency } from './data';

const FILTERS = ['All', 'Income', 'Expense'] as const;

export const FintechTransactions: React.FC = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const filtered = TRANSACTIONS.filter((tx) => {
    if (filter === 'All') return true;
    if (filter === 'Income') return tx.direction === 'in';
    return tx.direction === 'out';
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-xl font-bold text-white">Transactions</h1>
        <div className="flex gap-1.5 bg-slate-900 border border-slate-800 rounded-lg p-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                filter === f ? 'bg-teal-500 text-slate-950' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <FintechCard className="p-0 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-slate-500 border-b border-slate-800">
              <th className="py-3 px-5 font-medium">Description</th>
              <th className="py-3 px-5 font-medium hidden sm:table-cell">Category</th>
              <th className="py-3 px-5 font-medium hidden sm:table-cell">Date</th>
              <th className="py-3 px-5 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {filtered.map((tx) => (
              <tr key={tx.id}>
                <td className="py-3.5 px-5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center ${
                        tx.direction === 'in' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {tx.direction === 'in' ? <FiArrowDownLeft size={12} /> : <FiArrowUpRight size={12} />}
                    </span>
                    <div className="min-w-0">
                      <p className="text-white font-medium truncate">{tx.name}</p>
                      <p className="text-xs text-slate-500 sm:hidden">
                        {tx.category} · {tx.date}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-5 text-slate-400 hidden sm:table-cell">{tx.category}</td>
                <td className="py-3.5 px-5 text-slate-400 hidden sm:table-cell">{tx.date}</td>
                <td
                  className={`py-3.5 px-5 text-right font-semibold ${
                    tx.direction === 'in' ? 'text-emerald-400' : 'text-slate-300'
                  }`}
                >
                  {tx.direction === 'in' ? '+' : '-'}
                  {formatCurrency(tx.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </FintechCard>
    </div>
  );
};
