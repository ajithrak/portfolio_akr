import React from 'react';
import { LuQuote } from 'react-icons/lu';

export const VoltEdgeTestimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-12">
        <div className="space-y-1">
          <span className="text-xs uppercase font-bold tracking-widest text-[#75b81a]">
            Testimonials
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 relative max-w-2xl mx-auto space-y-4">
          <div className="w-10 h-10 rounded-full bg-[#a3e635]/20 text-[#6ea31e] flex items-center justify-center mx-auto">
            <LuQuote className="w-5 h-5" />
          </div>
          <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
            "VoltEdge team was professional, on-time, and delivered top-notch work. Highly recommended!"
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
              alt="Rashid M."
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <h4 className="text-xs font-bold text-slate-900">Rashid M.</h4>
              <p className="text-[10px] text-slate-500">Business Owner</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 text-sm font-bold text-slate-400 grayscale opacity-70">
            <span>TechBuild</span>
            <span>Greenfield</span>
            <span>UrbanNest</span>
            <span>BrightWay</span>
          </div>
        </div>
      </div>
    </section>
  );
};
