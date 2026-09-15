import React from 'react';
import { DemoShowcase, type DemoPageDef } from '../components/demos/DemoShowcase';
import { CareerLandingPage } from '../components/demos/career/CareerLandingPage';

const PAGES: DemoPageDef[] = [
  { key: 'home', label: 'Home', render: () => <CareerLandingPage /> },
];

const DemoCareerPage: React.FC = () => (
  <DemoShowcase
    eyebrow="Live Demo"
    title="Robert Alison — Career Coaching Template"
    description="A ready-to-use personal-brand landing page: hero, about, pain-point messaging, service offerings, testimonials, and a full-bleed contact footer — built for solo coaches and consultants."
    backHref="/"
    backLabel="Back to portfolio"
    pages={PAGES}
    activeTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-amber-500 text-neutral-950"
    idleTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    frameChromeClassName="bg-neutral-800"
  />
);

export default DemoCareerPage;
