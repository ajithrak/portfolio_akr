import React from 'react';
import { LuShieldCheck, LuTruck, LuRotateCcw, LuLock } from 'react-icons/lu';

export const FashionValueStrip: React.FC = () => {
  const perks = [
    {
      icon: LuShieldCheck,
      title: 'Premium Quality Materials',
      subtitle: 'Finest natural fabrics',
    },
    {
      icon: LuTruck,
      title: 'Free Shipping',
      subtitle: 'On Orders Over $99',
    },
    {
      icon: LuRotateCcw,
      title: '14-Day Easy Returns',
      subtitle: 'Hassle-free exchange policy',
    },
    {
      icon: LuLock,
      title: 'Secure Payments',
      subtitle: '100% Protected transactions',
    },
  ];

  return (
    <section className="bg-white border-b border-neutral-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {perks.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 text-neutral-700">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-neutral-900 leading-tight">{item.title}</h3>
                  <p className="text-[11px] text-neutral-500 mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
