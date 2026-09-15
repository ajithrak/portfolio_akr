import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export const FashionHero: React.FC = () => {
  return (
    <section id="new" className="relative bg-[#232a23] text-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light leading-[1.1] tracking-tight">
              Effortless <br />Style, Everyday <br />Confidence.
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base font-light max-w-md leading-relaxed">
              Timeless designs with modern comfort crafted for the way you live.
            </p>
            <div className="pt-2">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 bg-white text-neutral-900 hover:bg-neutral-100 text-xs font-semibold uppercase tracking-widest px-7 py-3.5 rounded-full transition shadow-md"
              >
                <span>Shop Now</span>
                <LuArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                alt="Two models posing in minimalist everyday fashion"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
