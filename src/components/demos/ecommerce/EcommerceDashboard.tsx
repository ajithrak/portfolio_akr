import React from 'react';
import { RevenueStat, EcommerceCard, OrderTableRow } from './ui';
import { REVENUE_TREND, RECENT_ORDERS, formatCurrency } from './data';

export const EcommerceDashboard: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-xl font-bold text-slate-900">Good morning, Maria</h1>
      <p className="text-sm text-slate-500">Here's how Urban Cart is performing today.</p>
    </div>

    <div className="grid sm:grid-cols-3 gap-4">
      <RevenueStat label="Revenue (MTD)" value={formatCurrency(18420)} change="+12.6% vs last month" positive />
      <RevenueStat label="Orders Today" value="24" change="+4 vs yesterday" positive />
      <RevenueStat label="Avg. Order Value" value={formatCurrency(76.5)} change="-1.8% vs last month" />
    </div>

    <EcommerceCard>
      <h2 className="text-sm font-semibold text-slate-900 mb-6">Revenue trend</h2>
      <div className="flex items-end gap-3 h-32">
        {REVENUE_TREND.map((m) => (
          <div key={m.label} className="flex-1 bg-orange-400 rounded-t" style={{ height: `${m.value}%` }} />
        ))}
      </div>
      <div className="flex gap-3 mt-2">
        {REVENUE_TREND.map((m) => (
          <span key={m.label} className="flex-1 text-center text-[10px] text-slate-500">
            {m.label}
          </span>
        ))}
      </div>
    </EcommerceCard>

    <EcommerceCard className="p-0 overflow-hidden">
      <h2 className="text-sm font-semibold text-slate-900 px-5 pt-5 pb-3">Recent orders</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-slate-500 border-b border-slate-100">
            <th className="pb-3 px-5 font-medium">Order</th>
            <th className="pb-3 px-5 font-medium hidden sm:table-cell">Customer</th>
            <th className="pb-3 px-5 font-medium hidden sm:table-cell">Items</th>
            <th className="pb-3 px-5 font-medium hidden sm:table-cell">Date</th>
            <th className="pb-3 px-5 font-medium">Total</th>
            <th className="pb-3 px-5 font-medium text-right">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {RECENT_ORDERS.map((order) => (
            <OrderTableRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </EcommerceCard>
  </div>
);
