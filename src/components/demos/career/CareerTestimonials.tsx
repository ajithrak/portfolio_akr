import React from 'react';
import { LuChevronLeft, LuChevronRight, LuQuote } from 'react-icons/lu';

export const CareerTestimonials: React.FC = () => {
  const reviews = [
    {
      initial: 'R',
      quote:
        'I felt trapped in a toxic job for 4 years. Within just 4 weeks of coaching, I landed 3 interviews and secured a higher-paying remote role that fits my lifestyle.',
      author: 'Roberta D.',
      role: 'UX Designer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    {
      initial: 'J',
      quote:
        'Your resume advice completely changed my approach. I went from getting zero responses to landing multiple interviews — and for the first time, I could confidently explain my strengths and value.',
      author: 'James K.',
      role: 'Marketing Manager',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#f7f7f6] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Real Results from Real People
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm">
              Professionals just like you have found clarity, confidence, and career success through personalized coaching.
            </p>

            <div className="flex gap-2 pt-4">
              <button className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition">
                <LuChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 transition">
                <LuChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm relative space-y-4"
              >
                <div className="flex justify-between items-center text-neutral-400">
                  <span className="font-bold text-lg text-neutral-800">{rev.initial}</span>
                  <LuQuote className="w-5 h-5 text-neutral-300" />
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {rev.quote}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">{rev.author}</h4>
                    <p className="text-[11px] text-neutral-500">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
