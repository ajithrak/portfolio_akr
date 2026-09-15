import React from 'react';

export const GilmoreCTABanner: React.FC = () => {
  return (
    <section className="relative bg-[#3e3465] text-white py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl space-y-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Elevate Your Brand? Let's build bold strategies and create results together.
          </h2>
        </div>
        <a
          href="#contact"
          className="bg-white text-neutral-900 hover:bg-neutral-100 font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full whitespace-nowrap transition shadow-md"
        >
          Lets Work Together
        </a>
      </div>
    </section>
  );
};
