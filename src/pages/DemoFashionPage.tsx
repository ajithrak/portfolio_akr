import React from 'react';
import { DemoShowcase, type DemoPageDef } from '../components/demos/DemoShowcase';
import { FashionLandingPage } from '../components/demos/fashion/FashionLandingPage';

const PAGES: DemoPageDef[] = [
  { key: 'home', label: 'Home', render: () => <FashionLandingPage /> },
];

const DemoFashionPage: React.FC = () => (
  <DemoShowcase
    eyebrow="Live Demo"
    title="Impeccify — Fashion Store Template"
    description="A ready-to-use fashion e-commerce landing page: hero, value props, brand story, shop-by-category, seasonal promo, best sellers, newsletter, and FAQ."
    backHref="/"
    backLabel="Back to portfolio"
    pages={PAGES}
    activeTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-neutral-800 text-white"
    idleTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    frameChromeClassName="bg-neutral-800"
  />
);

export default DemoFashionPage;
