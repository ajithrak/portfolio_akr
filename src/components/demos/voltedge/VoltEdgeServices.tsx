import React from 'react';
import { LuArrowRight, LuHouse, LuBuilding2, LuFactory, LuWrench } from 'react-icons/lu';

export const VoltEdgeServices: React.FC = () => {
  const serviceCards = [
    {
      title: 'Residential Electrical',
      desc: 'Safe & efficient wiring solutions for your home.',
      icon: LuHouse,
    },
    {
      title: 'Commercial Electrical',
      desc: 'Powering businesses with reliable solutions.',
      icon: LuBuilding2,
    },
    {
      title: 'Industrial Electrical',
      desc: 'Heavy-duty electrical systems built to last.',
      icon: LuFactory,
    },
    {
      title: 'Maintenance & Repair',
      desc: 'Fast, reliable support whenever you need it.',
      icon: LuWrench,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#75b81a]">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Electrical Solutions For Every Need
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            We offer a full range of residential, commercial, and industrial electrical services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-[#181818] text-white p-7 rounded-2xl flex flex-col justify-between space-y-6 hover:translate-y-[-4px] transition duration-300 shadow-md border border-neutral-800"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#a3e635]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-[#a3e635] hover:text-slate-950 text-neutral-300 transition"
                    aria-label={service.title}
                  >
                    <LuArrowRight className="w-3.5 h-3.5" />
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
