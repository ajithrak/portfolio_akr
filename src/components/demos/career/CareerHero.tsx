import React from 'react';
import { LuArrowRight, LuStar } from 'react-icons/lu';

export const CareerHero: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#2e2d2b] text-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-neutral-700/60 text-xs text-neutral-300 font-medium tracking-wide">
              Career coaching
            </span>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Unlock the Career You Deserve
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed">
              Struggling to land your dream job or switch careers? I help professionals like you craft winning resumes, ace interviews, and build career confidence.
            </p>

            <div>
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-white text-neutral-950 hover:bg-neutral-100 font-semibold px-6 py-3.5 rounded-full text-sm transition shadow-lg"
              >
                <span>Read My Full Story</span>
                <LuArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-10 border-t border-neutral-700/60">
              <p className="text-[11px] uppercase tracking-widest text-neutral-400 mb-4 font-semibold">
                As featured in
              </p>
              <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-neutral-400 opacity-70">
                <span className="font-semibold tracking-tight text-base sm:text-lg">CareerPulse</span>
                <span className="font-bold tracking-tight text-base sm:text-lg">WorkWeekly</span>
                <span className="font-semibold tracking-tight text-base sm:text-lg">TalentBrief</span>
                <span className="font-bold tracking-tight text-base sm:text-lg">HireLine</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">

              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-800 shadow-2xl border border-neutral-700/40">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop"
                  alt="Robert Alison - Career Coach"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="absolute top-8 -right-4 sm:-right-6 bg-neutral-900/90 backdrop-blur-md border border-neutral-700 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">10K+ Careers Transformed</p>
                  <p className="text-[10px] text-neutral-400">&amp; Counting</p>
                </div>
              </div>

              <div className="absolute bottom-6 -left-4 sm:-left-6 bg-neutral-900/90 backdrop-blur-md border border-neutral-700 p-3.5 rounded-2xl shadow-xl max-w-[210px]">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  <LuStar className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="text-[11px] font-bold text-white">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] leading-snug text-neutral-300">
                  90% of learners report improved career readiness after coaching.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
