import React from 'react';
import { LuCircleCheckBig, LuPhone } from 'react-icons/lu';

export const GilmoreAbout: React.FC = () => {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <span className="absolute top-8 right-12 text-8xl font-black text-neutral-100 select-none pointer-events-none -z-0">
        About Us
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/4] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop"
                    alt="Agency meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-4 sm:left-10 bg-[#3e3465] text-white p-5 rounded-2xl shadow-xl flex items-center gap-3">
              <span className="text-3xl font-black">25+</span>
              <span className="text-xs uppercase font-medium leading-tight text-purple-200">
                Years of <br />Experience
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase font-bold tracking-widest text-purple-700">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Fueling Brands with Strategy, Creativity &amp; Results
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              At Gilmore Marketing, we help businesses rise above the noise with smart strategies, bold ideas, and campaigns that drive real impact. From startups to established brands, we craft tailored marketing solutions that connect, convert, and grow.
            </p>

            <ul className="space-y-2.5 pt-2 text-xs font-semibold text-neutral-800">
              <li className="flex items-center gap-2">
                <LuCircleCheckBig className="w-4 h-4 text-purple-600" /> 24/7 Call Services Available
              </li>
              <li className="flex items-center gap-2">
                <LuCircleCheckBig className="w-4 h-4 text-purple-600" /> Great Skilled Consultants
              </li>
              <li className="flex items-center gap-2">
                <LuCircleCheckBig className="w-4 h-4 text-purple-600" /> Expert Cross-Functional Team Members
              </li>
            </ul>

            <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                  <LuPhone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 uppercase font-medium">Call us anytime</p>
                  <p className="text-sm font-bold text-neutral-900">+123 456 789</p>
                </div>
              </div>
              <div className="font-serif italic text-2xl text-neutral-700 tracking-wide font-medium">
                Jonathan Doe
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
