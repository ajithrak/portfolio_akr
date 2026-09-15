import React from 'react';

export const RevivyBrandLogos: React.FC = () => {
  return (
    <section className="bg-[#ede7f6]/40 border-b border-purple-100/70 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-around gap-8 text-center text-slate-700">
          <div className="space-y-0.5">
            <span className="font-serif italic font-bold text-lg tracking-wider block">Botanika</span>
            <span className="text-[8px] uppercase tracking-[0.25em] text-slate-400 block">SKINCARE</span>
          </div>
          <div className="space-y-0.5">
            <span className="font-sans font-black text-sm tracking-[0.2em] block">PURELEAF</span>
            <span className="text-[8px] uppercase tracking-[0.25em] text-slate-400 block">NATURALS</span>
          </div>
          <div className="space-y-0.5">
            <span className="font-serif tracking-[0.25em] text-sm font-semibold block">VERDORA</span>
            <span className="text-[8px] uppercase tracking-[0.2em] text-slate-400 block">BOTANICAL</span>
          </div>
          <div className="space-y-0.5">
            <span className="font-mono text-sm tracking-wider block">glowith</span>
            <span className="text-[8px] uppercase tracking-[0.2em] text-slate-400 block">Skin Wellness</span>
          </div>
        </div>
      </div>
    </section>
  );
};
