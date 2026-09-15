import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export const StyleoHero: React.FC = () => {
  return (
    <section className="relative bg-[#1a1824] text-white overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal leading-[1.1] tracking-tight">
              Elevate <br />Every Moment
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base font-light max-w-sm leading-relaxed">
              Modern style. Timeless confidence. Made for you.
            </p>
            <div className="pt-2">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 bg-[#a895de] hover:bg-[#9984d4] text-slate-950 text-xs font-semibold px-6 py-3.5 rounded-full transition shadow-md"
              >
                <span>Shop Collection</span>
                <LuArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 relative flex justify-center">
            <div className="relative w-full max-w-xl aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                alt="Models wearing modern tailored blazers and suits"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white/30 flex items-center justify-center text-[9px] uppercase tracking-widest text-white/90 backdrop-blur-sm">
                New Collection
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
