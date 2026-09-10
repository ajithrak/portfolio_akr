import React, { useState } from 'react';
import { LuSearch, LuUser, LuShoppingBag, LuChevronDown, LuMenu, LuX } from 'react-icons/lu';

export const StyleoNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#161616] text-white">
      <div className="bg-[#a895de] text-slate-900 text-xs py-2 px-4 text-center font-medium tracking-tight">
        <a href="#new-arrivals" className="inline-flex items-center gap-1 hover:underline">
          Free Shipping on Orders Over $150 →
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="font-serif text-xl tracking-[0.2em] uppercase font-bold text-white">
          STYLEO
        </a>

        <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-wider uppercase text-neutral-300 font-medium">
          <a href="#featured" className="flex items-center gap-1 hover:text-white transition">
            <span>Catalog</span>
            <LuChevronDown className="w-3.5 h-3.5 opacity-70" />
          </a>
          <a href="#new-arrivals" className="hover:text-white transition">New Arrival</a>
        </nav>

        <div className="flex items-center space-x-5 text-neutral-300">
          <button className="hover:text-white transition" aria-label="Search">
            <LuSearch className="w-4 h-4" />
          </button>
          <button className="hover:text-white transition" aria-label="Account">
            <LuUser className="w-4 h-4" />
          </button>
          <button className="hover:text-white transition relative" aria-label="Cart">
            <LuShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1.5 -right-1.5 bg-[#a895de] text-slate-950 text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              1
            </span>
          </button>
          <a
            href="#"
            className="hidden sm:inline-block bg-[#a895de] hover:bg-[#9984d4] text-slate-950 text-xs font-semibold px-4 py-2 rounded-md transition"
          >
            Sign In
          </a>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-300 hover:text-white p-1"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1f1f1f] border-b border-neutral-800 px-6 py-4 space-y-3 text-xs tracking-wider uppercase font-medium">
          <a href="#featured" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-white">Catalog</a>
          <a href="#new-arrivals" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-neutral-300">New Arrival</a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block bg-[#a895de] text-slate-950 font-semibold px-4 py-2 rounded-md mt-2"
          >
            Sign In
          </a>
        </div>
      )}
    </header>
  );
};
