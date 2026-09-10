import React, { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';

export const CareerNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#2b2b2b]/95 backdrop-blur-md border-b border-neutral-700/60 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <div className="w-6 h-6 rounded bg-neutral-300 flex items-center justify-center text-neutral-900 text-xs font-black">
            R
          </div>
          <span>Robert Alison</span>
        </a>

        <nav className="hidden md:flex items-center space-x-7 text-sm text-neutral-300 font-medium">
          <a href="#home" className="text-white hover:text-neutral-100 transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a
            href="#cta"
            className="inline-flex items-center justify-center bg-neutral-100 hover:bg-white text-neutral-900 font-medium text-sm px-5 py-2.5 rounded-full shadow-sm transition"
          >
            Book a Free Call
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-300 hover:text-white p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#242424] border-b border-neutral-700 px-6 py-4 space-y-3 text-sm">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-white">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-neutral-300">About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-neutral-300">Services</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-neutral-300">Testimonials</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-neutral-300">Contact</a>
          <a
            href="#cta"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center mt-3 bg-white text-neutral-900 font-medium py-2 rounded-full"
          >
            Book a Free Call
          </a>
        </div>
      )}
    </header>
  );
};
