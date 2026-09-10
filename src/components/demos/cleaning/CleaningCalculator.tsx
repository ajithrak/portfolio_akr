import React from 'react';

export const CleaningCalculator: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-600">COST CALCULATOR</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Join Hundreds of Happy Families with a Cleaning Plan That Fits
          </h2>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Choose a Service</label>
              <select className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500">
                <option>Residential Cleaning</option>
                <option>Office Sanitization</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Type of Clean</label>
              <select className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500">
                <option>Full Cleaning</option>
                <option>Deep Clean</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Total Floor Area</label>
              <input type="text" placeholder="1500 sq ft" className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">ZIP Code</label>
              <input type="text" placeholder="90210" className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <div className="sm:col-span-3 pt-2 text-center">
              <button type="submit" className="bg-[#1565c0] hover:bg-[#0d47a1] text-white text-xs font-bold px-8 py-3 rounded-lg shadow transition">
                Get Cost Estimate
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
