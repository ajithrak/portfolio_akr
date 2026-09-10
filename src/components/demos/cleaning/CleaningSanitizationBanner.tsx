import React from 'react';
import { LuPhone } from 'react-icons/lu';

export const CleaningSanitizationBanner: React.FC = () => {
  return (
    <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1200&auto=format&fit=crop"
          alt="Sanitization"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6">
        <span className="text-xs uppercase font-bold tracking-widest text-sky-400">DEEP SANITIZATION</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Following Industry Health & Safety Standards
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          We maintain the highest hygiene standards, ensuring every process meets recognized health and sanitization guidelines for your protection.
        </p>
        <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
          <button className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold px-7 py-3.5 rounded-full transition shadow">
            Book Sanitization
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold text-white">
            <LuPhone className="w-4 h-4 text-sky-400" /> CALL US NOW: +234 567 890
          </div>
        </div>
      </div>
    </section>
  );
};
