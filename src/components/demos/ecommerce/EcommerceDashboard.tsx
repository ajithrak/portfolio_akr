import React from 'react';
import { RevenueStat, EcommerceCard, OrderRow } from './ui';
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

    <div className="grid lg:grid-cols-3 gap-4">
      <EcommerceCard className="lg:col-span-2">
        <h2 className="text-sm font-semibold text-slate-900 mb-6">Revenue trend</h2>
        <div className="flex items-end gap-3 h-40">
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

      <EcommerceCard>
        <h2 className="text-sm font-semibold text-slate-900 mb-4">Recent orders</h2>
        <ul className="space-y-4">
          {RECENT_ORDERS.map((order) => (
            <li key={order.id}>
              <OrderRow order={order} />
            </li>
          ))}
        </ul>
      </EcommerceCard>
    </div>
  </div>
);
