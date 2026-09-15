import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export const VoltEdgeEmergencyBanner: React.FC = () => {
  return (
    <section className="bg-[#181818] text-white py-12 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Need Emergency Electrical Help?
          </h2>
          <p className="text-xs text-neutral-400">
            We're available 24/7 to handle your urgent electrical issues.
          </p>
        </div>
        <a
          href="tel:+6801234567890"
          className="bg-white hover:bg-neutral-100 text-slate-900 text-xs font-extrabold uppercase tracking-wider px-7 py-3 rounded-lg inline-flex items-center gap-2 transition shrink-0"
        >
          <span>Call Now</span>
          <LuArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
