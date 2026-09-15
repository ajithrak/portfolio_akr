import React from 'react';

export const StyleoPromoBanner: React.FC = () => {
  return (
    <section className="bg-[#1b1924] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          <div className="md:col-span-6 space-y-4 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-serif font-light leading-snug">
              Timeless Looks. <br />Endless Confidence.
            </h2>
            <p className="text-xs text-neutral-300 font-light">
              Discover pieces that define your style.
            </p>
            <div>
              <a
                href="#featured"
                className="inline-block bg-[#a895de] hover:bg-[#9984d4] text-slate-950 text-xs font-semibold px-6 py-2.5 rounded-full transition"
              >
                Explore Now
              </a>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-center md:justify-end">
            <div className="w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-800 shadow-xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=700&auto=format&fit=crop"
                alt="Portrait with chic lilac suit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
