import React from 'react';
import { LuPhone, LuArrowRight, LuHouse, LuBuilding2, LuHardHat } from 'react-icons/lu';

export const CleaningServicesStrip: React.FC = () => {
  const cards = [
    { title: 'Residential Cleaning', price: 'Starting from $50', icon: LuHouse, image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=500&auto=format&fit=crop' },
    { title: 'Commercial Cleaning', price: 'Starting from $100', icon: LuBuilding2, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=500&auto=format&fit=crop' },
    { title: 'Construction Cleaning', price: 'Starting from $150', icon: LuHardHat, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=500&auto=format&fit=crop' },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1976d2] rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-sky-200">WHAT WE OFFER</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-1">Professional Cleaning Services for Every Space</h2>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-2xl backdrop-blur">
              <LuPhone className="w-5 h-5 text-sky-300" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-sky-200 font-semibold">CALL US ANYTIME</p>
                <p className="text-base font-bold text-white leading-tight">127 551 0026</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{c.price}</p>
                  <div className="mt-4 flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center transition text-slate-600">
                      <LuArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
