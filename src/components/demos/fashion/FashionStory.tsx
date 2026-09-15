import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export const FashionStory: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fafaf8] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop"
                alt="Couple walking outdoors wearing comfortable fashion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 leading-tight">
              Style that feels as good as it looks.
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
              We believe great style should be simple, sustainable, and made to move with you.
            </p>
            <div className="pt-2">
              <a
                href="#collections"
                className="inline-flex items-center gap-2 bg-[#2d332d] hover:bg-[#1f241f] text-white text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-full transition"
              >
                <span>Learn More</span>
                <LuArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
