import React from 'react';

export const CleaningHero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-sky-50/50 via-white to-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold tracking-widest text-sky-600 uppercase bg-sky-100/60 px-3 py-1 rounded-full">
              Professional Cleaning Services You Can Count On
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Reliable Cleaning Services You Can Trust.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
              PureShine delivers spotless results with every visit — whether it's your home, office, or commercial space. Quick, affordable, and handled with care.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#services"
                className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold px-7 py-3.5 rounded-full transition shadow-md"
              >
                Explore Our Services →
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
            <div className="w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=900&auto=format&fit=crop"
                alt="Cleaning Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
