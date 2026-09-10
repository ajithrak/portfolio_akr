import React from 'react';

export const RevivyOfferBanner: React.FC = () => {
  return (
    <section className="bg-[#b3a4cb]/40 py-14 border-b border-purple-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="space-y-3 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-purple-900">
              Special Offer
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 leading-snug">
              Enjoy 20% Off <br />On All Lavender Collection
            </h3>
            <div>
              <a
                href="#products"
                className="inline-block bg-[#2b1e42] hover:bg-[#1f1432] text-white text-xs font-medium px-6 py-2.5 rounded-sm transition"
              >
                Shop Now
              </a>
            </div>
          </div>

          <div className="w-full max-w-xs aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1608248597359-467b7f14b301?q=80&w=600&auto=format&fit=crop"
              alt="Special Lavender bundle"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
