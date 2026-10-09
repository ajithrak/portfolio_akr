import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  LuStar,
  LuQuote,
  LuExternalLink,
  LuCodeXml,
  LuSmartphone,
  LuGauge,
  LuLayers,
  LuSparkles,
  LuArrowUpRight,
} from 'react-icons/lu';
import {
  TESTIMONIALS_DATA,
  PLACEHOLDER_TESTIMONIALS,
  type TestimonialCategory,
  type TestimonialItem,
} from '../data/testimonialsData';

type FilterValue = 'all' | TestimonialCategory;

const CATEGORIES: { label: string; value: FilterValue; icon: IconType }[] = [
  { label: 'All', value: 'all', icon: LuSparkles },
  { label: 'Web Applications', value: 'web', icon: LuCodeXml },
  { label: 'Mobile Apps', value: 'mobile', icon: LuSmartphone },
  { label: 'Speed & Performance', value: 'performance', icon: LuGauge },
  { label: 'Architecture & Scale', value: 'architecture', icon: LuLayers },
];

// Placeholders render only in `npm run dev`, and only while there is no real data.
// PREVIEW BRANCH ONLY: show placeholders in this build so the layout can be reviewed on a Vercel preview URL. Do not merge.
const IS_PREVIEW = TESTIMONIALS_DATA.length === 0;
const ITEMS: TestimonialItem[] = IS_PREVIEW ? PLACEHOLDER_TESTIMONIALS : TESTIMONIALS_DATA;

// Only show filter tabs for categories that actually have testimonials.
const VISIBLE_CATEGORIES = CATEGORIES.filter(
  (c) => c.value === 'all' || ITEMS.some((item) => item.category === c.value)
);

const getInitials = (name: string) =>
  name
    .replace(/[^a-zA-Z\s]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('') || '•';

const TAB_ACTIVE =
  'inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors bg-indigo-600 text-white shadow-sm';
const TAB_IDLE =
  'inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800';

export const Testimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterValue>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTestimonials = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        q === '' ||
        item.quote.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.company.toLowerCase().includes(q) ||
        item.techStack.some((tech) => tech.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // No real testimonials in production → the section is hidden entirely.
  if (ITEMS.length === 0) return null;

  const showFilters = ITEMS.length > 3;

  return (
    <section id="testimonials" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {IS_PREVIEW && (
          <div className="mb-8 rounded-lg border border-amber-300 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-500/10 px-4 py-2 text-center text-xs font-medium text-amber-800 dark:text-amber-300">
            Dev preview: placeholder cards. Add real feedback to src/data/testimonialsData.ts. This banner and the placeholders don't appear in production.
          </div>
        )}

        {/* Header */}
        <div className="mb-10 border-b pb-2 border-gray-100 dark:border-zinc-800">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Client Feedback
          </h2>
          <p className="mt-2 mb-2 text-sm sm:text-base text-gray-600 dark:text-zinc-400">
            What people I've built web platforms and mobile apps with say about working together.
          </p>
        </div>

        {/* Filters & search */}
        {showFilters && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl w-full md:w-auto">
              {VISIBLE_CATEGORIES.map(({ label, value, icon: Icon }) => {
                const isActive = activeCategory === value;
                return (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(value)}
                    className={isActive ? TAB_ACTIVE : TAB_IDLE}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </button>
                );
              })}
            </div>

            <input
              type="search"
              aria-label="Search testimonials"
              placeholder="Search by tech, company, or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-2 text-sm bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl placeholder:text-gray-400 dark:placeholder:text-zinc-500 text-gray-900 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        )}

        {/* Grid */}
        {filteredTestimonials.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 dark:bg-zinc-900/40 rounded-xl border border-gray-200 dark:border-zinc-800">
            <p className="text-gray-500 dark:text-zinc-400 text-sm">No testimonials match your current filter.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col p-6 bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:shadow-md transition-all"
              >
                {(item.rating || item.highlightMetric) && (
                  <div className="flex items-center justify-between gap-2 mb-4 min-h-[24px]">
                    {item.rating ? (
                      <div className="flex items-center gap-0.5 text-amber-500" aria-label={`${item.rating} out of 5 stars`}>
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <LuStar key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    ) : (
                      <span />
                    )}
                    {item.highlightMetric && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                        <span>{item.highlightMetric}</span>
                        {item.highlightLabel && (
                          <span className="font-normal opacity-75">| {item.highlightLabel}</span>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <blockquote className="relative mb-6">
                  <LuQuote className="absolute -top-1 -left-1 w-7 h-7 text-gray-100 dark:text-zinc-800 pointer-events-none" />
                  <p className="relative text-gray-700 dark:text-zinc-300 text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </blockquote>

                <div className="mb-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <div className="text-[11px] font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1.5">
                    Project
                  </div>
                  <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 line-clamp-1">{item.project}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:text-zinc-400 bg-gray-100 dark:bg-zinc-800 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <footer className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-zinc-800 mt-auto">
                  <div
                    aria-hidden="true"
                    className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 text-sm font-semibold"
                  >
                    {getInitials(item.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{item.name}</p>
                    <p className="text-xs text-gray-500 dark:text-zinc-400 truncate">
                      {item.role}, <span className="font-medium text-gray-700 dark:text-zinc-300">{item.company}</span>
                    </p>
                  </div>
                  {item.sourceUrl ? (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 shrink-0 text-[11px] font-medium text-gray-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {item.sourceLabel ?? 'Source'}
                      <LuExternalLink className="w-3 h-3" />
                    </a>
                  ) : item.sourceLabel ? (
                    <span className="shrink-0 text-[11px] font-medium text-gray-400 dark:text-zinc-500">{item.sourceLabel}</span>
                  ) : null}
                </footer>
              </article>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Have an upcoming web or mobile project?</h3>
            <p className="text-sm text-gray-600 dark:text-zinc-400 mt-1">
              Available for frontend architecture, MVP builds, and performance audits.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors"
          >
            Book a Discovery Call
            <LuArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
