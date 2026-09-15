import React from 'react';
import { DemoShowcase, type DemoPageDef } from '../components/demos/DemoShowcase';
import { GilmoreLandingPage } from '../components/demos/gilmore/GilmoreLandingPage';

const PAGES: DemoPageDef[] = [
  { key: 'home', label: 'Home', render: () => <GilmoreLandingPage /> },
];

const DemoGilmorePage: React.FC = () => (
  <DemoShowcase
    eyebrow="Live Demo"
    title="Gilmore Marketing — Agency Template"
    description="A ready-to-use marketing agency landing page: hero, about, services, case studies, team, testimonials, a quote-request form, blog, and a contact map."
    backHref="/"
    backLabel="Back to portfolio"
    pages={PAGES}
    activeTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white"
    idleTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    frameChromeClassName="bg-neutral-800"
  />
);

export default DemoGilmorePage;
