import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export const CareerCTA: React.FC = () => {
  return (
    <section id="cta" className="py-16 bg-[#f7f7f6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#6b665c] to-[#45423c] text-white px-6 py-16 sm:px-16 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-200 max-w-xl mx-auto leading-relaxed">
            Join hundreds of professionals who've transformed their careers through expert coaching. Whether you're switching fields or leveling up, your breakthrough starts here.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full transition shadow-lg"
            >
              <span>Book Your Free Strategy Call</span>
              <LuArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
