import React from 'react';

export const CareerFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#f0f0ef] text-neutral-900 pt-20 pb-12 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <div className="space-y-2">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-600">
            Let's Work Together
          </p>
          <a
            href="mailto:hello@robertalison.coach"
            className="block text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 hover:opacity-80 transition break-all"
          >
            hello@robertalison.coach
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-neutral-300/70 text-xs text-neutral-600">
          <div className="flex flex-wrap gap-6 font-medium">
            <a href="#about" className="hover:text-neutral-950">About</a>
            <a href="#services" className="hover:text-neutral-950">Services</a>
            <a href="#testimonials" className="hover:text-neutral-950">Testimonials</a>
            <a href="#contact" className="hover:text-neutral-950">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-800 transition">in</a>
            <a href="#" className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-800 transition">ig</a>
            <a href="#" className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-800 transition">fb</a>
            <a href="#" className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center hover:border-neutral-800 transition">x</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between text-[11px] text-neutral-500 gap-4">
          <div className="flex gap-4">
            <span>© 2026 copyright</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
            <span>All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
