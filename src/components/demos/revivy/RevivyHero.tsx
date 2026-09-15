import React from 'react';

export const RevivyHero: React.FC = () => {
  const filterPills = ['All Needs', 'Protect', 'Regenerates', 'Revitalizes', 'Feeds', 'Regulates', 'Purifies'];

  return (
    <section id="home" className="relative bg-[#faf8f7] py-12 lg:py-20 overflow-hidden border-b border-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tight font-normal leading-[1.05]">
              Lavender
            </h1>
            <p className="text-base sm:text-lg font-serif italic text-slate-700">
              Pure Calm. Natural Glow.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed font-light">
              Experience the soothing power of lavender infused skincare. Gentle, natural, and effective formulas for radiant, healthy skin.
            </p>

            <div className="pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-between gap-4 bg-[#2b1e42] hover:bg-[#1f1432] text-white text-xs font-medium px-6 py-3.5 rounded-sm transition shadow-sm"
              >
                <span>Shop Now</span>
                <span className="opacity-70 font-light border-l border-white/20 pl-4">$49.99</span>
              </a>
            </div>

            <div className="pt-6">
              <div className="flex flex-wrap gap-2">
                {filterPills.map((pill, i) => (
                  <button
                    key={i}
                    className={`text-[11px] px-3.5 py-1.5 rounded-sm border transition ${
                      i === 0
                        ? 'bg-[#2b1e42] text-white border-[#2b1e42]'
                        : 'bg-white text-slate-600 border-purple-100 hover:border-purple-300'
                    }`}
                  >
                    {pill}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/60 to-transparent rounded-full blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1608248597359-467b7f14b301?q=80&w=900&auto=format&fit=crop"
                alt="Lavender skincare bottles with fresh organic lavender stems"
                className="relative z-10 w-full h-full object-contain drop-shadow-xl"
              />
              <span className="absolute bottom-2 right-4 text-[10px] tracking-widest text-slate-400 font-mono">
                01
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
