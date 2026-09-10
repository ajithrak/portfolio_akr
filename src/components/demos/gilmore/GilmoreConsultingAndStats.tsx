import React from 'react';
import { LuAward, LuChartBar, LuUsers, LuSmile, LuBriefcase, LuClock } from 'react-icons/lu';

export const GilmoreConsultingAndStats: React.FC = () => {
  const stats = [
    { value: '199+', label: 'SUCCESSFUL PROJECTS', icon: LuAward },
    { value: '300+', label: 'MEDIA ACTIVITIES', icon: LuChartBar },
    { value: '100+', label: 'SKILLED EXPERTS', icon: LuUsers },
    { value: '120+', label: 'HAPPY CLIENTS', icon: LuSmile },
  ];

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-purple-700">
                JUST A CONSULTANCY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Expertly Managing Business on a Global Scale
              </h2>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <LuBriefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">Best Business Consulting</h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Expert guidance tailored to your goals. We help you make smarter decisions, streamline growth, and stay ahead in a competitive market.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <LuClock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900">24/7 Customer Support</h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Day or night, we're here for you. Our dedicated support team ensures you get help whenever you need it fast, friendly, and reliable.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="#contact"
                  className="inline-block bg-[#3e3465] hover:bg-[#322953] text-white text-xs font-semibold px-6 py-3 rounded-full transition"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                    alt="Consultant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                    alt="Managing Director"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="bg-[#3e3465] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <Icon className="w-6 h-6 text-purple-300 mb-2" />
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">{stat.value}</span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-purple-200 mt-1">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
