import React, { useState } from 'react';
import { LuMail, LuPhone, LuClock, LuMapPin, LuSparkles, LuMenu, LuX } from 'react-icons/lu';

export const CleaningHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="border-b border-slate-100 text-xs text-slate-500 py-2.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <LuMail className="w-3.5 h-3.5 text-sky-500" /> Mail to us: info@pureshine.com
            </span>
            <span className="flex items-center gap-1.5">
              <LuPhone className="w-3.5 h-3.5 text-sky-500" /> (+123) 4567890
            </span>
            <span className="flex items-center gap-1.5">
              <LuClock className="w-3.5 h-3.5 text-sky-500" /> 9am - 8pm
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <LuMapPin className="w-3.5 h-3.5 text-sky-500" /> 28/4 St, Melbourne, Australia
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
            <LuSparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-xl text-slate-900 tracking-tight leading-none block">PureShine</span>
            <span className="text-[10px] text-sky-600 font-semibold tracking-wider uppercase block">Cleaning</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <a href="#home" className="text-sky-600 hover:text-sky-700">Home</a>
          <a href="#about" className="hover:text-sky-600 transition">About Us</a>
          <a href="#services" className="hover:text-sky-600 transition">Services</a>
          <a href="#process" className="hover:text-sky-600 transition">How it Works</a>
          <a href="#testimonials" className="hover:text-sky-600 transition">Testimonials</a>
          <a href="#blog" className="hover:text-sky-600 transition">Blog</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#book"
            className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold px-6 py-3 rounded-full transition shadow-sm"
          >
            Book a Service
          </a>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-600" aria-label="Toggle Navigation">
            {mobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 px-6 py-4 space-y-3 text-sm font-medium bg-white">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-sky-600">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600">About Us</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600">Services</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600">How it Works</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600">Testimonials</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-600">Contact</a>
          <a href="#book" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-sky-500 text-white py-2.5 rounded-full mt-2 font-bold text-xs">
            Book a Service
          </a>
        </div>
      )}
    </header>
  );
};
