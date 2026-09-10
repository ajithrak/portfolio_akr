import React from 'react';
import { DemoShowcase, type DemoPageDef } from '../components/demos/DemoShowcase';
import { RevivyLandingPage } from '../components/demos/revivy/RevivyLandingPage';

const PAGES: DemoPageDef[] = [
  { key: 'home', label: 'Home', render: () => <RevivyLandingPage /> },
];

const DemoRevivyPage: React.FC = () => (
  <DemoShowcase
    eyebrow="Live Demo"
    title="Revivy — Skincare Store Template"
    description="A ready-to-use botanical skincare landing page: hero with filterable tags, about, a gallery selection, a product collection, a special-offer banner, and customer stories."
    backHref="/"
    backLabel="Back to portfolio"
    pages={PAGES}
    activeTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-rose-400 text-white"
    idleTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    frameChromeClassName="bg-neutral-800"
  />
);

export default DemoRevivyPage;
