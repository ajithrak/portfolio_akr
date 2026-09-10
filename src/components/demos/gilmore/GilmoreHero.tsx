import React from 'react';
import { LuArrowRight, LuChevronLeft, LuChevronRight, LuStar } from 'react-icons/lu';

export const GilmoreHero: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#251f3d] text-white overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
          alt="Creative Office"
          className="w-full h-full object-cover mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211b36] via-[#2a2245]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Powering Growth Through Bold, Creative Marketing
            </h1>

            <p className="text-neutral-300 text-sm sm:text-base max-w-xl leading-relaxed">
              From strategy to execution, we craft bold campaigns that captivate, convert, and drive real growth. Let's take your brand to the next level.
            </p>

            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-[#514389] hover:bg-[#433673] text-white font-semibold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition shadow-lg"
              >
                <span>Get Started</span>
                <LuArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#251f3d] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#251f3d] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#251f3d] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  <span className="text-xs font-bold text-white mr-1">15k+</span>
                  {[...Array(5)].map((_, i) => (
                    <LuStar key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] text-neutral-300">Happy Customers Worldwide</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-end">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop"
                alt="Creative Strategist"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-neutral-900 flex items-center justify-center backdrop-blur transition" aria-label="Previous">
                <LuChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-neutral-900 flex items-center justify-center backdrop-blur transition" aria-label="Next">
                <LuChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
