import React, { useState } from 'react';
import { LuSearch, LuUser, LuShoppingBag, LuMenu, LuX } from 'react-icons/lu';

export const FashionNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1e231e]/95 backdrop-blur-md text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#new" className="font-serif text-xl tracking-wider text-neutral-100 font-medium">
          impeccify.com
        </a>

        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-widest uppercase text-neutral-300">
          <a href="#new" className="hover:text-white transition">New In</a>
          <a href="#shop" className="hover:text-white transition">Shop</a>
          <a href="#collections" className="hover:text-white transition">Collections</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
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
            <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold text-white">
              2
            </span>
          </button>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-300 hover:text-white p-1"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <LuX className="w-5 h-5" /> : <LuMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181d18] border-b border-neutral-800 px-6 py-4 space-y-3 text-xs uppercase tracking-widest font-medium">
          <a href="#new" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-white">New In</a>
          <a href="#shop" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-neutral-300">Shop</a>
          <a href="#collections" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-neutral-300">Collections</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-neutral-300">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-neutral-300">Contact</a>
        </div>
      )}
    </header>
  );
};
