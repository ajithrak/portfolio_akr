import React from 'react';
import { DemoShowcase, type DemoPageDef } from '../components/demos/DemoShowcase';
import { VoltEdgeLandingPage } from '../components/demos/voltedge/VoltEdgeLandingPage';

const PAGES: DemoPageDef[] = [
  { key: 'home', label: 'Home', render: () => <VoltEdgeLandingPage /> },
];

const DemoVoltEdgePage: React.FC = () => (
  <DemoShowcase
    eyebrow="Live Demo"
    title="VoltEdge — Electrical Services Template"
    description="A ready-to-use trades/services landing page: hero with a quick-contact form, stats, about, a services grid, an emergency-call banner, and testimonials."
    backHref="/"
    backLabel="Back to portfolio"
    pages={PAGES}
    activeTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-lime-500 text-slate-950"
    idleTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    frameChromeClassName="bg-neutral-800"
  />
);

export default DemoVoltEdgePage;
