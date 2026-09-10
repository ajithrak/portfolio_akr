import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';

export interface DemoPageDef {
  key: string;
  label: string;
  render: (navigate: (key: string) => void) => React.ReactNode;
}

interface DemoShowcaseProps {
  eyebrow: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
  pages: DemoPageDef[];
  activeTabClassName: string;
  idleTabClassName: string;
  frameChromeClassName: string;
}

export const DemoShowcase: React.FC<DemoShowcaseProps> = ({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
  pages,
  activeTabClassName,
  idleTabClassName,
  frameChromeClassName,
}) => {
  const [searchParams] = useSearchParams();
  const requestedKey = searchParams.get('page');
  const [activeKey, setActiveKey] = useState(
    requestedKey && pages.some((p) => p.key === requestedKey) ? requestedKey : pages[0].key
  );
  const activePage = pages.find((p) => p.key === activeKey) ?? pages[0];

  // Bare rendering of just the mock app screen, e.g. for capturing clean product screenshots.
  if (searchParams.get('embed') === '1') {
    return <>{activePage.render(setActiveKey)}</>;
  }

  return (
    <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link
          to={backHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
        >
          ← {backLabel}
        </Link>

        <span className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
          {eyebrow}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
          {title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-2xl">{description}</p>

        {pages.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {pages.map((page) => (
              <button
                key={page.key}
                onClick={() => setActiveKey(page.key)}
                className={page.key === activeKey ? activeTabClassName : idleTabClassName}
              >
                {page.label}
              </button>
            ))}
          </div>
        )}

        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-2xl">
          <div className={`h-9 flex items-center gap-1.5 px-4 ${frameChromeClassName}`}>
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="max-h-[720px] overflow-y-auto">{activePage.render(setActiveKey)}</div>
        </div>
      </motion.div>
    </section>
  );
};
