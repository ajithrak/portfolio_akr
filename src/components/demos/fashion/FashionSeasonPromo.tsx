import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export const FashionSeasonPromo: React.FC = () => {
  return (
    <section id="collections" className="py-12 bg-[#fafaf8] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-[#787f7a] text-white p-8 sm:p-14 flex flex-col md:flex-row justify-between items-center gap-8 shadow-md">

          <div className="max-w-md space-y-4 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight leading-snug">
              New Collection <br />This Season
            </h2>
            <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
              Discover the latest styles crafted for comfort &amp; confidence.
            </p>
            <div className="pt-2">
              <a
                href="#shop"
                className="inline-flex items-center gap-1.5 bg-white text-neutral-900 hover:bg-neutral-100 text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-full transition shadow"
              >
                <span>DISCOVER NOW</span>
                <LuArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-neutral-600">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop"
              alt="Model posing with warm fall overcoat"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
