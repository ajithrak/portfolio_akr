import React from 'react';
import { DemoShowcase, type DemoPageDef } from '../components/demos/DemoShowcase';
import { CleaningLandingPage } from '../components/demos/cleaning/CleaningLandingPage';

const PAGES: DemoPageDef[] = [
  { key: 'home', label: 'Home', render: () => <CleaningLandingPage /> },
];

const DemoCleaningPage: React.FC = () => (
  <DemoShowcase
    eyebrow="Live Demo"
    title="PureShine Cleaning — Local Services Template"
    description="A ready-to-use local services landing page: hero, service pricing cards, about with an inline booking form, a 4-step process, a cost calculator, testimonials, and a blog."
    backHref="/"
    backLabel="Back to portfolio"
    pages={PAGES}
    activeTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white"
    idleTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    frameChromeClassName="bg-slate-800"
  />
);

export default DemoCleaningPage;
