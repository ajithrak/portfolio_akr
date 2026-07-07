import React from 'react';
import { DemoShowcase, type DemoPageDef } from '../components/demos/DemoShowcase';
import { EdtechShell } from '../components/demos/edtech/EdtechShell';
import { EdtechLogin } from '../components/demos/edtech/EdtechLogin';
import { EdtechDashboard } from '../components/demos/edtech/EdtechDashboard';
import { EdtechCourses } from '../components/demos/edtech/EdtechCourses';
import { EdtechProfile } from '../components/demos/edtech/EdtechProfile';
import { EdtechSettings } from '../components/demos/edtech/EdtechSettings';

const PAGES: DemoPageDef[] = [
  { key: 'login', label: 'Login', render: () => <EdtechLogin /> },
  {
    key: 'dashboard',
    label: 'Dashboard',
    render: (navigate) => (
      <EdtechShell active="dashboard" onNavigate={navigate}>
        <EdtechDashboard />
      </EdtechShell>
    ),
  },
  {
    key: 'courses',
    label: 'Courses',
    render: (navigate) => (
      <EdtechShell active="courses" onNavigate={navigate}>
        <EdtechCourses />
      </EdtechShell>
    ),
  },
  {
    key: 'profile',
    label: 'Profile',
    render: (navigate) => (
      <EdtechShell active="profile" onNavigate={navigate}>
        <EdtechProfile />
      </EdtechShell>
    ),
  },
  {
    key: 'settings',
    label: 'Settings',
    render: (navigate) => (
      <EdtechShell active="settings" onNavigate={navigate}>
        <EdtechSettings />
      </EdtechShell>
    ),
  },
];

const DemoEdtechPage: React.FC = () => (
  <DemoShowcase
    eyebrow="Live Demo"
    title="Learnly — EdTech Template"
    description="A ready-to-use online learning template: student login, progress dashboard, course catalog, and settings — built for course platforms and cohort-based schools."
    backHref="/"
    backLabel="Back to portfolio"
    pages={PAGES}
    activeTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-violet-500 text-white"
    idleTabClassName="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    frameChromeClassName="bg-slate-800"
  />
);

export default DemoEdtechPage;
