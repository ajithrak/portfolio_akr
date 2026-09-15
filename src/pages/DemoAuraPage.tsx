import React from 'react';
import { DemoShowcase, type DemoPageDef } from '../components/demos/DemoShowcase';
import { AuraShell } from '../components/demos/aura/AuraShell';
import { AuraLogin } from '../components/demos/aura/AuraLogin';
import { AuraDashboard } from '../components/demos/aura/AuraDashboard';
import { AuraTransactions } from '../components/demos/aura/AuraTransactions';
import { AuraProfile } from '../components/demos/aura/AuraProfile';
import { AuraSettings } from '../components/demos/aura/AuraSettings';

const PAGES: DemoPageDef[] = [
  { key: 'login', label: 'Login', render: (navigate) => <AuraLogin onSuccess={() => navigate('dashboard')} /> },
  {
    key: 'dashboard',
    label: 'Dashboard',
    render: (navigate) => (
      <AuraShell active="dashboard" onNavigate={navigate}>
        <AuraDashboard />
      </AuraShell>
    ),
  },
  {
    key: 'transactions',
    label: 'Transactions',
    render: (navigate) => (
      <AuraShell active="transactions" onNavigate={navigate}>
        <AuraTransactions />
      </AuraShell>
    ),
  },
  {
    key: 'profile',
    label: 'Profile',
    render: (navigate) => (
      <AuraShell active="profile" onNavigate={navigate}>
        <AuraProfile />
      </AuraShell>
    ),
  },
  {
    key: 'settings',
    label: 'Settings',
    render: (navigate) => (
      <AuraShell active="settings" onNavigate={navigate}>
        <AuraSettings />
      </AuraShell>
    ),
  },
];

const DemoAuraPage: React.FC = () => (
  <DemoShowcase
    eyebrow="Live Demo"
    title="Aura Vault — Institutional Banking Template"
    description="A ready-to-use institutional banking template: 2FA-secured login, treasury dashboard, audit-ready transaction ledger, KYC-verified profile, and compliance settings."
    backHref="/"
    backLabel="Back to portfolio"
    pages={PAGES}
    activeTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-500 text-slate-950"
    idleTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    frameChromeClassName="bg-slate-800"
  />
);

export default DemoAuraPage;
