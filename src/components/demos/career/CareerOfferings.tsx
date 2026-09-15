import React from 'react';
import { LuCompass, LuLinkedin, LuFileCheck, LuSearch } from 'react-icons/lu';

export const CareerOfferings: React.FC = () => {
  const benefits = [
    {
      icon: LuCompass,
      title: 'Career Clarity',
      desc: 'Discover the roles that align with your values, strengths, and long-term goals.',
      tag: '✦ Perfect for you if: you feel stuck, lost, or unsure what career to pursue.',
    },
    {
      icon: LuLinkedin,
      title: 'LinkedIn Makeover',
      desc: 'Craft a compelling personal brand that stands out to recruiters.',
      tag: "✦ Great if you've been applying but not getting profile views.",
    },
    {
      icon: LuFileCheck,
      title: 'Interview Preparation',
      desc: 'Get real-time practice and expert feedback to master any interview.',
      tag: '✦ Ideal if interviews make you freeze or ramble.',
    },
    {
      icon: LuSearch,
      title: 'Job Search Strategy',
      desc: 'Find the right jobs, apply effectively, and follow up like a pro.',
      tag: '✦ For those overwhelmed by job boards or applying blindly.',
    },
  ];

  return (
    <section id="services" className="bg-[#1e1e1e] text-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop"
                alt="Robert Coaching Session"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                What You'll Get From Career Coaching
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Gain the clarity, confidence, and tools you need to land the job you truly deserve.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-neutral-800/40 border border-neutral-700/60 space-y-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-neutral-700 flex items-center justify-center text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold">{item.title}</h3>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                    <p className="text-[11px] text-neutral-400 leading-tight pt-1">
                      {item.tag}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
