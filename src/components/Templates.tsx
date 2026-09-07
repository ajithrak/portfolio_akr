import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TEMPLATES_DATA } from '../data/templatesData';

export const Templates: React.FC = () => {
  return (
    <section id="templates" className="py-20 bg-gray-50/80 dark:bg-zinc-900/30 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 border-b pb-2 border-gray-200 dark:border-zinc-800">
            Ready-to-Use Templates
          </h2>
          <p className="text-gray-600 dark:text-zinc-400 mb-12 max-w-2xl">
            Live, clickable product templates across trending domains — a starting point clients can preview and I can
            adapt into a real build.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEMPLATES_DATA.map((template) => (
              <Link
                key={template.slug}
                to={template.href}
                className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className={`h-1.5 w-full ${template.accentClassName}`} />
                <div className="flex flex-col h-full p-6">
                  <span
                    className={`inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4 w-fit ${template.badgeClassName}`}
                  >
                    {template.title}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{template.name}</h3>
                  <p className="text-gray-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed flex-1">
                    {template.description}
                  </p>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:underline">
                    View live demo →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
