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
  {
    slug: 'career',
    name: 'Robert Alison',
    title: 'Career Coaching',
    description: 'Personal-brand landing page template: hero, about, pain points, service offerings, and testimonials.',
    href: '/demo/career',
    accentClassName: 'bg-amber-500',
    badgeClassName: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400',
  },
  {
    slug: 'gilmore',
    name: 'Gilmore Marketing',
    title: 'Marketing Agency',
    description: 'Agency landing page template: services, case studies, team, testimonials, and a quote-request form.',
    href: '/demo/gilmore',
    accentClassName: 'bg-purple-600',
    badgeClassName: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400',
  },
  {
    slug: 'cleaning',
    name: 'PureShine',
    title: 'Local Services',
    description: 'Local services landing page template: service pricing, a booking form, cost calculator, and testimonials.',
    href: '/demo/cleaning',
    accentClassName: 'bg-blue-600',
    badgeClassName: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
  },
  {
    slug: 'fashion',
    name: 'Impeccify',
    title: 'Fashion Retail',
    description: 'Fashion e-commerce landing page template: shop-by-category, best sellers, promotions, and FAQ.',
    href: '/demo/fashion',
    accentClassName: 'bg-stone-600',
    badgeClassName: 'bg-stone-50 dark:bg-stone-950/40 text-stone-600 dark:text-stone-400',
  },
  {
    slug: 'voltedge',
    name: 'VoltEdge',
    title: 'Trades & Services',
    description: 'Electrical/trades services landing page template: quick-contact hero form, services grid, and an emergency-call banner.',
    href: '/demo/voltedge',
    accentClassName: 'bg-lime-500',
    badgeClassName: 'bg-lime-50 dark:bg-lime-950/40 text-lime-600 dark:text-lime-400',
  },
  {
    slug: 'styleo',
    name: 'Styleo',
    title: 'Boutique Fashion',
    description: 'Boutique fashion landing page template: featured collections, new arrivals, promotions, and best sellers.',
    href: '/demo/styleo',
    accentClassName: 'bg-fuchsia-500',
    badgeClassName: 'bg-fuchsia-50 dark:bg-fuchsia-950/40 text-fuchsia-600 dark:text-fuchsia-400',
  },
];
