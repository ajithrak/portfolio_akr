import React, { useState } from 'react';
import { EcommerceCard, ProductRow } from './ui';
import { PRODUCTS, type Product } from './data';

const FILTERS = ['All', 'In Stock', 'Low Stock', 'Out of Stock'] as const;

export const EcommerceProducts: React.FC = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const filtered = PRODUCTS.filter((p) => filter === 'All' || p.status === (filter as Product['status']));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-xl font-bold text-slate-900">Products</h1>
        <div className="flex gap-1.5 bg-white border border-slate-200 rounded-lg p-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                filter === f ? 'bg-orange-500 text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <EcommerceCard>
        <ul className="divide-y divide-slate-100">
          {filtered.map((product) => (
            <li key={product.id} className="py-3.5 first:pt-0 last:pb-0">
              <ProductRow product={product} />
            </li>
          ))}
        </ul>
      </EcommerceCard>
    </div>
  );
};
