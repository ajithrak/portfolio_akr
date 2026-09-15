import React from 'react';
import { LuArrowRight, LuCircleCheckBig } from 'react-icons/lu';

export const VoltEdgeAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#75b81a]">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Delivering High-Quality Electrical Services With Integrity
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              From residential wiring to large-scale commercial projects, we provide end-to-end electrical solutions with unmatched workmanship and safety.
            </p>

            <ul className="space-y-2.5 text-xs font-semibold text-slate-800 pt-1">
              <li className="flex items-center gap-2">
                <LuCircleCheckBig className="w-4 h-4 text-[#75b81a]" /> Modern Equipment
              </li>
              <li className="flex items-center gap-2">
                <LuCircleCheckBig className="w-4 h-4 text-[#75b81a]" /> Trained Technicians
              </li>
              <li className="flex items-center gap-2">
                <LuCircleCheckBig className="w-4 h-4 text-[#75b81a]" /> On-Time, Every Time
              </li>
            </ul>

            <div className="pt-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#a3e635] hover:bg-[#8fd622] text-slate-950 text-xs font-bold px-6 py-3.5 rounded-lg transition"
              >
                <span>Learn More About Us</span>
                <LuArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/4] rounded-3xl overflow-hidden shadow-xl bg-slate-100 border-4 border-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                  alt="Industrial electrician inspecting breaker box"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#181818] border-4 border-white text-white flex flex-col items-center justify-center text-center shadow-xl p-2">
                <span className="text-base sm:text-lg font-black leading-none text-[#a3e635]">100%</span>
                <span className="text-[9px] uppercase font-bold tracking-wider text-slate-300 mt-1">Safety Focused</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
