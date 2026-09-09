import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { CaseStudyData } from '../data/pageData';
import { TechBadge } from './ProjectBadges';

interface CaseStudyLayoutProps {
  data: CaseStudyData;
  /** Full Tailwind class string for the accent badge, e.g. "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400" */
  badgeClassName: string;
  /** Route to a ready-to-use demo template for this domain, e.g. "/demo/fintech" */
  demoHref?: string;
  /** External link to a live/published version of the project, e.g. a Play Store listing */
  externalHref?: string;
  externalLabel?: string;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ data, badgeClassName, demoHref, externalHref, externalLabel }) => {
  return (
    <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
        >
          ← Back to portfolio
        </Link>

        <span
          className={`inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4 ${badgeClassName}`}
        >
          {data.label}
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
          {data.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-zinc-400 mb-6 leading-relaxed">
          {data.summary}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {demoHref && (
            <Link
              to={demoHref}
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
            >
              View ready-to-use demo template →
            </Link>
          )}
          {externalHref && (
            <a
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 hover:border-indigo-500 dark:hover:border-indigo-500 text-gray-900 dark:text-white transition-colors"
            >
              {externalLabel ?? 'View live'} ↗
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500 dark:text-zinc-400 mb-10 border-b border-gray-100 dark:border-zinc-800 pb-6">
          <span><strong className="text-gray-700 dark:text-zinc-300">{data.role}</strong></span>
          {data.company && <span>{data.company}</span>}
          {data.period && <span>{data.period}</span>}
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Overview</h2>
            <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">{data.overview}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Responsibilities</h2>
            <ul className="space-y-2 text-gray-600 dark:text-zinc-400 list-disc list-inside">
              {data.responsibilities.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Highlights</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {data.highlights.map((h, idx) => (
                <div key={idx} className="p-5 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{h.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">{h.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech, idx) => (
                <TechBadge key={idx} tech={tech} className="px-2.5 py-1" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
