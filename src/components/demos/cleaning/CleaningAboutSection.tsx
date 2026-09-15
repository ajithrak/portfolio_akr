import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export const CleaningAboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-sky-600">ABOUT COMPANY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Leading the Way in Cleaning Excellence Since 1995
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              For nearly three decades, PureShine Cleaning has been delivering trusted, high-quality cleaning services for homes and businesses alike. Our commitment to detail, professionalism, and customer satisfaction has made us one of the most recognized names in the industry.
            </p>
            <div>
              <a href="#services" className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700">
                Book a service now <LuArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-10 border-t border-slate-100">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">TRUSTED BY THOUSANDS OF ORGANIZATIONS</p>
              <div className="flex flex-wrap gap-8 opacity-60 grayscale font-bold text-sm text-slate-700">
                <span>REVIEWHUB</span>
                <span>TOP RATED PRO</span>
                <span>SERVICELINK</span>
                <span>CLEAN PRO</span>
              </div>
            </div>
          </div>

          <div id="book" className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 text-center">Book a Service</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input type="text" placeholder="Your Name" className="w-full text-xs px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <input type="tel" placeholder="Phone Number" className="w-full text-xs px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <select className="w-full text-xs px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-600">
                <option>Choose a Service</option>
                <option>Residential Cleaning</option>
                <option>Commercial Cleaning</option>
                <option>Construction Cleanup</option>
              </select>
              <select className="w-full text-xs px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-600">
                <option>Preferred Time: Morning</option>
                <option>Preferred Time: Afternoon</option>
                <option>Preferred Time: Evening</option>
              </select>
              <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs py-3 rounded-lg transition shadow">
                Submit Details
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
