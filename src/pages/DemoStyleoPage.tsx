import React from 'react';
import { DemoShowcase, type DemoPageDef } from '../components/demos/DemoShowcase';
import { StyleoLandingPage } from '../components/demos/styleo/StyleoLandingPage';

const PAGES: DemoPageDef[] = [
  { key: 'home', label: 'Home', render: () => <StyleoLandingPage /> },
];

const DemoStyleoPage: React.FC = () => (
  <DemoShowcase
    eyebrow="Live Demo"
    title="Styleo — Boutique Fashion Template"
    description="A ready-to-use boutique fashion landing page: hero, value props, featured collections, new arrivals, a promo banner, best sellers, and newsletter."
    backHref="/"
    backLabel="Back to portfolio"
    pages={PAGES}
    activeTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-fuchsia-500 text-white"
    idleTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    frameChromeClassName="bg-neutral-800"
  />
);

export default DemoStyleoPage;
