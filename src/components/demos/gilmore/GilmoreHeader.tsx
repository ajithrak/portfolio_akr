import React, { useState } from 'react';
import { LuMail, LuClock, LuFacebook, LuTwitter, LuInstagram, LuLinkedin, LuSearch, LuMenu, LuX } from 'react-icons/lu';

export const GilmoreHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-[#483d78] text-white/85 text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <LuMail className="w-3.5 h-3.5 text-purple-300" />
              support@gilmore-m.com
            </span>
            <span className="flex items-center gap-1.5">
              <LuClock className="w-3.5 h-3.5 text-purple-300" />
              Working: 8:00am - 5:00pm
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a href="#about" className="hover:text-white transition">Company news</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <div className="flex items-center space-x-3 pl-3 border-l border-white/20">
              <a href="#" className="hover:text-white"><LuFacebook className="w-3 h-3" /></a>
              <a href="#" className="hover:text-white"><LuTwitter className="w-3 h-3" /></a>
              <a href="#" className="hover:text-white"><LuInstagram className="w-3 h-3" /></a>
              <a href="#" className="hover:text-white"><LuLinkedin className="w-3 h-3" /></a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-black tracking-tight text-neutral-900 font-sans">
              gilmore <span className="block text-[9px] uppercase tracking-[0.3em] font-semibold text-purple-700 -mt-1">MARKETING</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-neutral-700">
            <a href="#home" className="text-purple-700 hover:text-purple-800">Home</a>
            <a href="#about" className="hover:text-purple-700 transition">About</a>
            <a href="#services" className="hover:text-purple-700 transition">Service</a>
            <a href="#projects" className="hover:text-purple-700 transition">Project</a>
            <a href="#blog" className="hover:text-purple-700 transition">Blog</a>
            <a href="#contact" className="hover:text-purple-700 transition">Contact Us</a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-neutral-600 hover:text-purple-700" aria-label="Search">
              <LuSearch className="w-4 h-4" />
            </button>
            <a
              href="#quote"
              className="bg-[#3e3465] hover:bg-[#322953] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition shadow-sm"
            >
              Get Quote
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <a
              href="#quote"
              className="bg-[#3e3465] text-white text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              Get Quote
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-700 p-2"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 px-6 py-4 space-y-3 text-sm font-medium">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-purple-700">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-700">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-700">Service</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-700">Project</a>
            <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-700">Blog</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-700">Contact Us</a>
          </div>
        )}
      </nav>
    </header>
  );
};
