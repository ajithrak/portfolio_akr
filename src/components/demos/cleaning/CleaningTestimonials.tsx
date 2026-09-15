import React from 'react';
import { LuStar } from 'react-icons/lu';

export const CleaningTestimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Cameron Williamson',
      role: 'Office Manager at BrightEdge Solutions',
      quote: 'PureShine has been a lifesaver for our office! Their team is punctual, thorough, and always leaves the space spotless. Highly recommended!',
      stars: 5,
    },
    {
      name: 'Ralph Edwards',
      role: 'Homeowner',
      quote: "I've never seen my apartment so clean! The team was friendly, fast, and incredibly detailed. I'll definitely be booking again.",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-600">TESTIMONIALS</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Trusted by Thousands of Happy Clients &amp; Businesses</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-200 bg-slate-50 space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(r.stars)].map((_, s) => (
                  <LuStar key={s} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">"{r.quote}"</p>
              <div>
                <h4 className="font-bold text-xs text-slate-900">{r.name}</h4>
                <p className="text-[10px] text-slate-500">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
