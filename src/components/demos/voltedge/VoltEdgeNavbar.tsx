import React, { useState } from 'react';
import { LuZap, LuMenu, LuX } from 'react-icons/lu';

export const VoltEdgeNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#a3e635] text-slate-900 flex items-center justify-center font-bold">
            <LuZap className="w-5 h-5 fill-slate-900" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 font-sans">
            VoltEdge
          </span>
        </a>

        <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium text-slate-600">
          <a href="#home" className="text-slate-900 hover:text-lime-600 transition">Home</a>
          <a href="#services" className="hover:text-lime-600 transition">Services</a>
          <a href="#about" className="hover:text-lime-600 transition">About Us</a>
          <a href="#contact" className="hover:text-lime-600 transition">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="text-right">
            <p className="text-[10px] text-slate-400 font-medium uppercase">Call Anytime</p>
            <p className="text-xs font-bold text-slate-800">+680 1234 567890</p>
          </div>
          <a
            href="#contact"
            className="bg-[#a3e635] hover:bg-[#8fd622] text-slate-950 text-xs font-bold px-5 py-2.5 rounded-lg transition shadow-sm"
          >
            Get a Quote
          </a>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-700 hover:text-slate-900"
            aria-label="Toggle Menu"
          >
            {isOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 text-sm font-medium">
          <a href="#home" onClick={() => setIsOpen(false)} className="block py-1 text-slate-900">Home</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block py-1 text-slate-600">Services</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-1 text-slate-600">About Us</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-1 text-slate-600">Contact</a>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#a3e635] text-slate-950 font-bold text-xs py-2.5 rounded-lg"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
