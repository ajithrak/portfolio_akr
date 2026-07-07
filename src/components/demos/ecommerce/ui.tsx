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

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
    <div className={`h-28 flex items-center justify-center text-2xl font-bold text-slate-700/70 ${product.swatchClassName}`}>
      {product.name
        .split(' ')
        .slice(0, 2)
        .map((w) => w[0])
        .join('')}
    </div>
    <div className="p-4">
      <p className="text-sm font-semibold text-slate-800 truncate">{product.name}</p>
      <p className="text-xs text-slate-500 mb-3">
        {product.category} · {product.stock} in stock
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-slate-900">{formatCurrency(product.price)}</span>
        <ProductStatusBadge status={product.status} />
      </div>
    </div>
  </div>
);

export const OrderTableRow: React.FC<{ order: Order }> = ({ order }) => (
  <tr>
    <td className="py-3.5 px-5 font-medium text-slate-800">{order.orderNumber}</td>
    <td className="py-3.5 px-5 text-slate-600 hidden sm:table-cell">{order.customer}</td>
    <td className="py-3.5 px-5 text-slate-600 hidden sm:table-cell">
      {order.items} item{order.items > 1 ? 's' : ''}
    </td>
    <td className="py-3.5 px-5 text-slate-600 hidden sm:table-cell">{order.date}</td>
    <td className="py-3.5 px-5 font-semibold text-slate-800">{formatCurrency(order.total)}</td>
    <td className="py-3.5 px-5 text-right">
      <OrderStatusBadge status={order.status} />
    </td>
  </tr>
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
