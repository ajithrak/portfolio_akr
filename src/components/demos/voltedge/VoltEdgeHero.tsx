import React from 'react';
import { LuArrowRight, LuShieldCheck, LuHeadphones, LuThumbsUp } from 'react-icons/lu';

export const VoltEdgeHero: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#141414] text-white pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 opacity-40 lg:opacity-30">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop"
          alt="Electrician at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 rounded bg-white/10 text-[10px] font-bold tracking-widest uppercase text-[#a3e635] border border-white/10">
              Certified &amp; Trusted Electrical Experts
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Powering Homes. <br />
              <span className="text-white">Empowering Businesses.</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 max-w-lg leading-relaxed font-normal">
              Safe, Reliable, Professional Electrical Solutions You Can Count On.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#a3e635] hover:bg-[#8fd622] text-slate-950 text-xs font-bold px-6 py-3.5 rounded-lg transition shadow-md"
              >
                <span>Get a Free Quote</span>
                <LuArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white text-xs font-bold px-6 py-3.5 rounded-lg transition"
              >
                <span>Our Services</span>
                <LuArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg">
              <div className="flex items-center gap-2">
                <LuShieldCheck className="w-5 h-5 text-[#a3e635] shrink-0" />
                <span className="text-[11px] font-medium text-neutral-300 leading-tight">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <LuHeadphones className="w-5 h-5 text-[#a3e635] shrink-0" />
                <span className="text-[11px] font-medium text-neutral-300 leading-tight">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <LuThumbsUp className="w-5 h-5 text-[#a3e635] shrink-0" />
                <span className="text-[11px] font-medium text-neutral-300 leading-tight">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white text-slate-900 rounded-2xl p-7 shadow-2xl border border-slate-100">
              <h3 className="text-lg font-bold tracking-tight mb-4 text-slate-900">
                Quick Contact
              </h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full text-xs px-3.5 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-lime-500 bg-slate-50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full text-xs px-3.5 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-lime-500 bg-slate-50"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full text-xs px-3.5 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-lime-500 bg-slate-50"
                  />
                </div>
                <div>
                  <select className="w-full text-xs px-3.5 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-lime-500 bg-slate-50 text-slate-600">
                    <option>Service Needed</option>
                    <option>Residential Electrical</option>
                    <option>Commercial Electrical</option>
                    <option>Industrial Electrical</option>
                    <option>Emergency Maintenance &amp; Repair</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-1.5 bg-[#a3e635] hover:bg-[#8fd622] text-slate-950 font-bold text-xs py-3.5 rounded-lg transition shadow"
                >
                  <span>Request Callback</span>
                  <LuArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
