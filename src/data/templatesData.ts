export interface TemplateItem {
  slug: string;
  name: string;
  title: string;
  description: string;
  href: string;
  accentClassName: string;
  badgeClassName: string;
}

export const TEMPLATES_DATA: TemplateItem[] = [
  {
    slug: 'fintech',
    name: 'Nexus Bank',
    title: 'Fintech',
    description: 'Banking product template: login, account dashboard, transactions, and settings.',
    href: '/demo/fintech',
    accentClassName: 'bg-teal-500',
    badgeClassName: 'bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400',
  },
  {
    slug: 'aura',
    name: 'Aura Vault',
    title: 'WealthTech',
    description: 'Institutional banking template: 2FA login, treasury dashboard, transaction ledger, and compliance settings.',
    href: '/demo/aura',
    accentClassName: 'bg-emerald-500',
    badgeClassName: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
  },
  {
    slug: 'healthcare',
    name: 'VitalCare',
    title: 'Healthcare',
    description: 'Patient portal template: login, appointment booking, dashboard, and settings.',
    href: '/demo/healthcare',
    accentClassName: 'bg-sky-500',
    badgeClassName: 'bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400',
  },
  {
    slug: 'ecommerce',
    name: 'Urban Cart',
    title: 'E-commerce',
    description: 'Store admin template: login, revenue dashboard, product catalog, and settings.',
    href: '/demo/ecommerce',
    accentClassName: 'bg-orange-500',
    badgeClassName: 'bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400',
  },
  {
    slug: 'edtech',
    name: 'Learnly',
    title: 'EdTech',
    description: 'Online learning template: login, progress dashboard, course catalog, and settings.',
    href: '/demo/edtech',
    accentClassName: 'bg-violet-500',
    badgeClassName: 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400',
  },
];
