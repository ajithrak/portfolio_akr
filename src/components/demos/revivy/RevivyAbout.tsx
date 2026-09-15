import React from 'react';

export const RevivyAbout: React.FC = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#faf8f7] overflow-hidden border-b border-purple-100/60">
      <div className="absolute top-0 left-0 -translate-x-12 opacity-40 pointer-events-none w-64 h-96">
        <img
          src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=400&auto=format&fit=crop"
          alt="Lavender branch botanical"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center lg:text-left lg:ml-auto lg:mr-24 space-y-6">
        <span className="text-xs uppercase font-medium tracking-[0.2em] text-purple-900 block">
          About Us
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-normal leading-tight">
          Nature Inspired <br />Skincare
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
          We blend the finest botanical ingredients with advanced skincare science to create products that are pure, safe, and powerful.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
          Our commitment is to deliver natural solutions that bring out your skin's true radiance.
        </p>

        <div className="pt-2">
          <a
            href="#products"
            className="inline-block bg-[#2b1e42] hover:bg-[#1f1432] text-white text-xs font-medium px-6 py-3 rounded-sm transition"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};
