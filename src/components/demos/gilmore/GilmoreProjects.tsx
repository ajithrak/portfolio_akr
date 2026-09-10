import React from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export const GilmoreProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-purple-700">OUR WORK SPEAKS FOR ITSELF</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
              Explore Projects That Drive Real Results
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 text-neutral-700" aria-label="Previous">
              <LuChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-[#3e3465] text-white flex items-center justify-center hover:bg-[#322953]" aria-label="Next">
              <LuChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200/80 group">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
                alt="Luma Skincare"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-neutral-900">Social Media Launch for Luma Skincare</h3>
              <p className="text-xs text-neutral-600 mt-1">
                Boosted engagement and brand reach with a targeted campaign and vibrant visual identity.
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200/80 group">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                alt="NovaTech"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-neutral-900">Rebranding &amp; Web Strategy for NovaTech</h3>
              <p className="text-xs text-neutral-600 mt-1">
                Delivered a modern brand and sleek website that doubled lead conversions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-neutral-200 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">OUR TRUSTED CLIENTS</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 grayscale hover:grayscale-0 transition">
            <span className="font-bold text-lg text-neutral-800">Luma</span>
            <span className="font-bold text-lg text-neutral-800">NovaTech</span>
            <span className="font-bold text-lg text-neutral-800">Wayfare</span>
            <span className="font-bold text-lg text-neutral-800">Bridgeport</span>
            <span className="font-bold text-lg text-neutral-800">Crestline</span>
          </div>
        </div>

      </div>
    </section>
  );
};
