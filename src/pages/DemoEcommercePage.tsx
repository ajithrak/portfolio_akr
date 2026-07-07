import React from 'react';
import { DemoShowcase, type DemoPageDef } from '../components/demos/DemoShowcase';
import { EcommerceShell } from '../components/demos/ecommerce/EcommerceShell';
import { EcommerceLogin } from '../components/demos/ecommerce/EcommerceLogin';
import { EcommerceDashboard } from '../components/demos/ecommerce/EcommerceDashboard';
import { EcommerceProducts } from '../components/demos/ecommerce/EcommerceProducts';
import { EcommerceProfile } from '../components/demos/ecommerce/EcommerceProfile';
import { EcommerceSettings } from '../components/demos/ecommerce/EcommerceSettings';

const PAGES: DemoPageDef[] = [
  { key: 'login', label: 'Login', render: () => <EcommerceLogin /> },
  {
    key: 'dashboard',
    label: 'Dashboard',
    render: (navigate) => (
      <EcommerceShell active="dashboard" onNavigate={navigate}>
        <EcommerceDashboard />
      </EcommerceShell>
    ),
  },
  {
    key: 'products',
    label: 'Products',
    render: (navigate) => (
      <EcommerceShell active="products" onNavigate={navigate}>
        <EcommerceProducts />
      </EcommerceShell>
    ),
  },
  {
    key: 'profile',
    label: 'Profile',
    render: (navigate) => (
      <EcommerceShell active="profile" onNavigate={navigate}>
        <EcommerceProfile />
      </EcommerceShell>
    ),
  },
  {
    key: 'settings',
    label: 'Settings',
    render: (navigate) => (
      <EcommerceShell active="settings" onNavigate={navigate}>
        <EcommerceSettings />
      </EcommerceShell>
    ),
  },
];

const DemoEcommercePage: React.FC = () => (
  <DemoShowcase
    eyebrow="Live Demo"
    title="Urban Cart — E-commerce Template"
    description="A ready-to-use online store admin template: store login, revenue dashboard, product catalog with stock tracking, and settings — built for retail and DTC brands."
    backHref="/"
    backLabel="Back to portfolio"
    pages={PAGES}
    activeTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-orange-500 text-white"
    idleTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    frameChromeClassName="bg-slate-800"
  />
);

export default DemoEcommercePage;
