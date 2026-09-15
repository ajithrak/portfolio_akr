import React from 'react';
import { LuInstagram, LuFacebook, LuTwitter } from 'react-icons/lu';

export const RevivyFooter: React.FC = () => {
  return (
    <footer className="bg-[#ede7f6]/60 text-slate-700 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          <div className="col-span-2 space-y-3">
            <span className="font-serif text-xl tracking-tight text-slate-900 font-bold block">
              Revivy
            </span>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed font-light">
              Pure botanical skincare inspired by nature and formulated for radiant, calm skin.
            </p>
            <div className="flex gap-3 text-slate-500 pt-2">
              <a href="#" className="hover:text-purple-900" aria-label="Instagram"><LuInstagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-purple-900" aria-label="Facebook"><LuFacebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-purple-900" aria-label="Twitter"><LuTwitter className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 uppercase text-[11px] tracking-wider">Shop</h4>
            <ul className="space-y-1 text-slate-500 font-light">
              <li><a href="#products" className="hover:text-purple-900">Cleanser</a></li>
              <li><a href="#products" className="hover:text-purple-900">Face Cream</a></li>
              <li><a href="#products" className="hover:text-purple-900">Body Oil</a></li>
              <li><a href="#products" className="hover:text-purple-900">Gift Sets</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 uppercase text-[11px] tracking-wider">Help</h4>
            <ul className="space-y-1 text-slate-500 font-light">
              <li><a href="#" className="hover:text-purple-900">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-900">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-900">Shipping</a></li>
              <li><a href="#" className="hover:text-purple-900">Returns</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 uppercase text-[11px] tracking-wider">About</h4>
            <ul className="space-y-1 text-slate-500 font-light">
              <li><a href="#about" className="hover:text-purple-900">Our Story</a></li>
              <li><a href="#about" className="hover:text-purple-900">Ingredients</a></li>
              <li><a href="#about" className="hover:text-purple-900">Sustainability</a></li>
              <li><a href="#about" className="hover:text-purple-900">Press</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-purple-200/60 pt-6 text-center text-[11px] text-slate-400">
          © 2026 Revivy Skincare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
