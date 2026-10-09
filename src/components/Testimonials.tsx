import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  LuCheck,
} from 'react-icons/lu';
import {
  TESTIMONIALS_DATA,
  PLACEHOLDER_TESTIMONIALS,
  type TestimonialCategory,
  type TestimonialItem,
} from '../data/testimonialsData';

type FilterValue = 'all' | TestimonialCategory;

const CATEGORIES: { label: string; value: FilterValue; icon: IconType }[] = [
  { label: 'All Reviews', value: 'all', icon: LuSparkles },
  { label: 'Web Apps', value: 'web', icon: LuCodeXml },
  { label: 'Mobile Apps', value: 'mobile', icon: LuSmartphone },
  { label: 'Speed & Perf', value: 'performance', icon: LuGauge },
  { label: 'Architecture', value: 'architecture', icon: LuLayers },
];

const IS_PREVIEW = import.meta.env.DEV && TESTIMONIALS_DATA.length === 0;
const ITEMS: TestimonialItem[] = IS_PREVIEW ? PLACEHOLDER_TESTIMONIALS : TESTIMONIALS_DATA;

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

export const Testimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterValue>('all');

  const filteredTestimonials = useMemo(() => {
    return ITEMS.filter((item) => {
      return activeCategory === 'all' || item.category === activeCategory;
    });
  }, [activeCategory]);

  if (ITEMS.length === 0) return null;

  return (
    <section id="testimonials" className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {IS_PREVIEW && (
          <div className="mb-10 rounded-xl border border-amber-300 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 px-4 py-2.5 text-center text-xs font-medium text-amber-800 dark:text-amber-300 shadow-sm">
            Dev preview: Showing placeholder reviews. Real reviews from <code className="font-mono">testimonialsData.ts</code> will automatically replace them.
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-500/20 mb-3">
            <LuSparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Client Feedback & Results
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-zinc-400 leading-relaxed">
            Real outcomes from production web apps, mobile cross-platform launches, and enterprise architecture overhauls.
          </p>

          {/* Social Proof Pill */}
          <div className="flex items-center justify-center gap-4 mt-5 text-xs text-gray-500 dark:text-zinc-400">
            <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <span className="text-gray-900 dark:text-white">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <LuStar key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <LuCheck className="w-3.5 h-3.5" />
              <span>100% Contract Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Centered Filter Tabs (Searchbar Removed) */}
        {VISIBLE_CATEGORIES.length > 1 && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap items-center justify-center gap-1 p-1.5 bg-gray-100/80 dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 rounded-2xl shadow-inner max-w-full">
              {VISIBLE_CATEGORIES.map(({ label, value, icon: Icon }) => {
                const isActive = activeCategory === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setActiveCategory(value)}
                    className={`relative inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-white dark:bg-zinc-800 text-indigo-600 dark:text-white shadow-sm font-semibold'
                        : 'text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200 hover:bg-white/50 dark:hover:bg-zinc-800/40'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-zinc-500'}`} />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Testimonials 3-Column Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence>
            {filteredTestimonials.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 bg-white dark:bg-zinc-900/90 rounded-2xl border border-gray-200/90 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Stars + Structured Metric Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    {item.rating ? (
                      <div className="flex items-center gap-0.5 text-amber-400 pt-1" aria-label={`${item.rating} out of 5 stars`}>
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <LuStar key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                    ) : (
                      <span />
                    )}

                    {item.highlightMetric && (
                      <div className="shrink-0 text-right px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/70 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                        <span className="text-xs font-bold tracking-tight block whitespace-nowrap">
                          {item.highlightMetric}
                        </span>
                        {item.highlightLabel && (
                          <span className="text-[10px] font-medium opacity-80 block whitespace-nowrap">
                            {item.highlightLabel}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Quote Body with Subtle Watermark Quote Mark */}
                  <div className="relative mb-6">
                    <LuQuote className="w-5 h-5 text-indigo-200 dark:text-zinc-700 mb-2" />
                    <p className="text-gray-700 dark:text-zinc-300 text-sm leading-relaxed font-normal">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Bottom Section (Project Meta + Author) */}
                <div>
                  {/* Project Info */}
                  <div className="pt-4 border-t border-gray-100 dark:border-zinc-800/80 mb-5">
                    <span className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest block mb-1">
                      Deliverable
                    </span>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 truncate">
                      {item.project}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:text-zinc-300 bg-gray-100 dark:bg-zinc-800 rounded-md border border-gray-200/50 dark:border-zinc-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author & Verification Source */}
                  <footer className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-zinc-800/80">
                    <div
                      aria-hidden="true"
                      className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border border-indigo-200/60 dark:border-indigo-700/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-sm"
                    >
                      {getInitials(item.name)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-zinc-400 truncate">
                        {item.role}, <span className="font-medium text-gray-700 dark:text-zinc-300">{item.company}</span>
                      </p>
                    </div>

                    {item.sourceUrl ? (
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 shrink-0 px-2 py-1 rounded text-[11px] font-medium text-gray-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-300 bg-gray-50 dark:bg-zinc-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-gray-200/60 dark:border-zinc-700/60 transition-colors"
                      >
                        {item.sourceLabel ?? 'Review'}
                        <LuExternalLink className="w-3 h-3" />
                      </a>
                    ) : item.sourceLabel ? (
                      <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-medium text-gray-500 dark:text-zinc-400 bg-gray-100/70 dark:bg-zinc-800/80 border border-gray-200/50 dark:border-zinc-700/40">
                        {item.sourceLabel}
                      </span>
                    ) : null}
                  </footer>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Inquiry CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-50 via-white to-sky-50 dark:from-indigo-950/30 dark:via-zinc-900 dark:to-zinc-900 border border-indigo-100 dark:border-indigo-500/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Have a web or mobile product to ship?
            </h3>
            <p className="text-sm text-gray-600 dark:text-zinc-400 mt-1">
              Available for full frontend architecture, React Native mobile apps, and performance audits.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 shrink-0 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/20"
          >
            <span>Start a Project</span>
            <LuArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};