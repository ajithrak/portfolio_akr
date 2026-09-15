import React from 'react';
import { LuTrendingUp, LuSettings, LuTarget, LuArrowRight } from 'react-icons/lu';

export const GilmoreServices: React.FC = () => {
  const services = [
    {
      title: 'Business Planning',
      desc: 'We develop clear, actionable business plans that align with your goals and set a solid foundation for long-term success.',
      active: true,
      icon: LuTrendingUp,
    },
    {
      title: 'Process Development',
      desc: 'From workflow analysis to system optimization, we refine your internal processes to boost productivity and reduce friction.',
      active: false,
      icon: LuSettings,
    },
    {
      title: 'Strategy & Planning',
      desc: 'We craft data-driven strategies that guide decision-making, drive performance, and position your business for market leadership.',
      active: false,
      icon: LuTarget,
    },
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50 border-t border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700">OUR SERVICE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            What We Do to Drive Your Brand Forward
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-8 rounded-2xl transition-all shadow-sm flex flex-col justify-between ${
                  item.active
                    ? 'bg-[#3e3465] text-white shadow-xl'
                    : 'bg-white text-neutral-900 border border-neutral-200/80 hover:shadow-md'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      item.active ? 'bg-white/10 text-white' : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${item.active ? 'text-purple-100' : 'text-neutral-600'}`}>
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <a
                    href="#quote"
                    className={`inline-flex items-center text-xs font-bold gap-1 ${
                      item.active ? 'text-purple-200 hover:text-white' : 'text-purple-700 hover:text-purple-900'
                    }`}
                  >
                    Read More <LuArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
