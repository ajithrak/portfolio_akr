import React from 'react';
import { LuTruck, LuRotateCcw, LuShieldCheck, LuHeadphones } from 'react-icons/lu';

export const StyleoPerksBar: React.FC = () => {
  const perks = [
    {
      icon: LuTruck,
      title: 'Free Shipping',
      desc: 'On orders over $150',
    },
    {
      icon: LuRotateCcw,
      title: 'Easy Returns',
      desc: '30-day return policy',
    },
    {
      icon: LuShieldCheck,
      title: 'Secure Payment',
      desc: '100% secure checkout',
    },
    {
      icon: LuHeadphones,
      title: '24/7 Support',
      desc: 'Dedicated support',
    },
  ];

  return (
    <section className="bg-[#a895de] text-slate-950 py-6 border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/40 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-xs font-bold leading-tight">{p.title}</h3>
                  <p className="text-[11px] text-slate-800 opacity-90 mt-0.5">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
