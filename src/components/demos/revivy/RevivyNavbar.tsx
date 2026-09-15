import React, { useState } from 'react';
import { LuSearch, LuUser, LuShoppingBag, LuMenu, LuX } from 'react-icons/lu';

export const RevivyNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f7]/95 backdrop-blur-md border-b border-purple-100/60 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="font-serif text-2xl font-bold tracking-tight text-slate-900">
          Revivy
        </a>

        <nav className="hidden md:flex items-center space-x-9 text-xs uppercase tracking-wider text-slate-600 font-medium">
          <a href="#home" className="text-purple-900 font-bold">Home</a>
          <a href="#products" className="hover:text-purple-900 transition">Products</a>
          <a href="#about" className="hover:text-purple-900 transition">About</a>
          <a href="#gallery" className="hover:text-purple-900 transition">Gallery</a>
        </nav>

        <div className="flex items-center space-x-5 text-slate-700">
          <button className="hover:text-purple-900 transition" aria-label="Search">
            <LuSearch className="w-4 h-4" />
          </button>
          <button className="hover:text-purple-900 transition" aria-label="User account">
            <LuUser className="w-4 h-4" />
          </button>
          <button className="hover:text-purple-900 transition relative" aria-label="Cart">
            <LuShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1.5 bg-[#43315a] text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-semibold">
              2
            </span>
          </button>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-800 p-1"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f7] border-b border-purple-100 px-6 py-4 space-y-3 text-xs uppercase tracking-widest font-medium">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-purple-900 font-bold">Home</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-600">Products</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-600">About</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-slate-600">Gallery</a>
        </div>
      )}
    </header>
  );
};
