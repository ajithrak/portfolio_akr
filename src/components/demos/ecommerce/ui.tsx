import React from 'react';
import { type Product, type Order, PRODUCT_STATUS_STYLES, ORDER_STATUS_STYLES, formatCurrency } from './data';

export const EcommerceCard: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className = '',
  children,
}) => <div className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm ${className}`}>{children}</div>;

export const RevenueStat: React.FC<{ label: string; value: string; change: string; positive?: boolean }> = ({
  label,
  value,
  change,
  positive,
}) => (
  <EcommerceCard>
    <p className="text-xs font-medium text-slate-500 mb-2">{label}</p>
    <p className="text-2xl font-bold text-slate-900 mb-1">{value}</p>
    <span className={`text-xs font-semibold ${positive ? 'text-emerald-600' : 'text-red-500'}`}>{change}</span>
  </EcommerceCard>
);

export const ProductStatusBadge: React.FC<{ status: Product['status'] }> = ({ status }) => (
  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${PRODUCT_STATUS_STYLES[status]}`}>{status}</span>
);

export const OrderStatusBadge: React.FC<{ status: Order['status'] }> = ({ status }) => (
  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${ORDER_STATUS_STYLES[status]}`}>{status}</span>
);

export const OrderRow: React.FC<{ order: Order }> = ({ order }) => (
  <div className="flex items-center justify-between gap-3">
    <div className="min-w-0">
      <p className="text-sm font-medium text-slate-800 truncate">
        {order.orderNumber} · {order.customer}
      </p>
      <p className="text-xs text-slate-500">
        {order.items} item{order.items > 1 ? 's' : ''} · {order.date}
      </p>
    </div>
    <div className="flex items-center gap-3 shrink-0">
      <span className="text-sm font-semibold text-slate-800">{formatCurrency(order.total)}</span>
      <OrderStatusBadge status={order.status} />
    </div>
  </div>
);

export const ProductRow: React.FC<{ product: Product }> = ({ product }) => (
  <div className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-3 min-w-0">
      <span className="w-9 h-9 shrink-0 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-semibold">
        {product.name
          .split(' ')
          .slice(0, 2)
          .map((w) => w[0])
          .join('')}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-800 truncate">{product.name}</p>
        <p className="text-xs text-slate-500">
          {product.category} · {product.stock} in stock
        </p>
      </div>
    </div>
    <div className="flex items-center gap-3 shrink-0">
      <span className="text-sm font-semibold text-slate-800">{formatCurrency(product.price)}</span>
      <ProductStatusBadge status={product.status} />
    </div>
  </div>
);

export const EcommerceToggle: React.FC<{ enabled: boolean; onToggle: () => void }> = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    aria-pressed={enabled}
    className={`relative w-10 h-[22px] rounded-full transition-colors ${enabled ? 'bg-orange-500' : 'bg-slate-300'}`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-[18px] h-[18px] rounded-full bg-white transition-transform ${
        enabled ? 'translate-x-[18px]' : 'translate-x-0'
      }`}
    />
  </button>
);
