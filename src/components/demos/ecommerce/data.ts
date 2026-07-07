import { FiHome, FiBox, FiUser, FiSettings } from 'react-icons/fi';

export const ECOMMERCE_NAV = [
  { key: 'dashboard', label: 'Overview', icon: FiHome },
  { key: 'products', label: 'Products', icon: FiBox },
  { key: 'profile', label: 'Profile', icon: FiUser },
  { key: 'settings', label: 'Settings', icon: FiSettings },
];

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Canvas Weekender Bag', category: 'Bags', price: 89, stock: 142, status: 'In Stock' },
  { id: 'p2', name: 'Ceramic Pour-Over Set', category: 'Home', price: 42, stock: 8, status: 'Low Stock' },
  { id: 'p3', name: 'Merino Wool Scarf', category: 'Apparel', price: 58, stock: 0, status: 'Out of Stock' },
  { id: 'p4', name: 'Recycled Steel Water Bottle', category: 'Outdoor', price: 24, stock: 310, status: 'In Stock' },
  { id: 'p5', name: 'Linen Throw Pillow', category: 'Home', price: 34, stock: 6, status: 'Low Stock' },
  { id: 'p6', name: 'Leather Card Holder', category: 'Accessories', price: 29, stock: 96, status: 'In Stock' },
];

export const PRODUCT_STATUS_STYLES: Record<Product['status'], string> = {
  'In Stock': 'bg-emerald-50 text-emerald-700',
  'Low Stock': 'bg-amber-50 text-amber-700',
  'Out of Stock': 'bg-red-50 text-red-600',
};

export interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  items: number;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
  date: string;
}

export const RECENT_ORDERS: Order[] = [
  { id: 'o1', orderNumber: '#UC-3021', customer: 'Maria Chen', items: 2, total: 131, status: 'Processing', date: 'Jul 06' },
  { id: 'o2', orderNumber: '#UC-3020', customer: 'Devon Cole', items: 1, total: 24, status: 'Shipped', date: 'Jul 06' },
  { id: 'o3', orderNumber: '#UC-3019', customer: 'Priya Shah', items: 3, total: 155, status: 'Delivered', date: 'Jul 05' },
  { id: 'o4', orderNumber: '#UC-3018', customer: 'Liam Brooks', items: 1, total: 58, status: 'Delivered', date: 'Jul 04' },
];

export const ORDER_STATUS_STYLES: Record<Order['status'], string> = {
  Processing: 'bg-amber-50 text-amber-700',
  Shipped: 'bg-sky-50 text-sky-700',
  Delivered: 'bg-emerald-50 text-emerald-700',
};

export const REVENUE_TREND = [
  { label: 'Feb', value: 52 },
  { label: 'Mar', value: 68 },
  { label: 'Apr', value: 44 },
  { label: 'May', value: 76 },
  { label: 'Jun', value: 60 },
  { label: 'Jul', value: 88 },
];

export const formatCurrency = (value: number) =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
