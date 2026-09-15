import React from 'react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { VisitorStats } from './VisitorStats';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-zinc-400">
        <div className="flex flex-col gap-1 items-center sm:items-start">
          <p>&copy; {new Date().getFullYear()} Ajithkumar. All rights reserved.</p>
          <VisitorStats />
        </div>
        <div className="flex space-x-6">
          <a
            href={SOCIAL_LINKS.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};