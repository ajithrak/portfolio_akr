import React from 'react';
import { LuInstagram, LuFacebook, LuTwitter } from 'react-icons/lu';

export const StyleoFooter: React.FC = () => {
  return (
    <footer className="bg-[#14121a] text-neutral-400 py-16 text-xs border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          <div className="col-span-2 space-y-3">
            <span className="font-serif text-lg tracking-[0.2em] uppercase text-white font-bold">
              STYLEO
            </span>
            <p className="text-xs text-neutral-400 max-w-xs leading-relaxed font-light">
              Timeless style curated for modern silhouettes and everyday life.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">Shop</h4>
            <ul className="space-y-1 font-light">
              <li><a href="#featured" className="hover:text-white">Catalog</a></li>
              <li><a href="#new-arrivals" className="hover:text-white">New Arrival</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">Company</h4>
            <ul className="space-y-1 font-light">
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">Help</h4>
            <ul className="space-y-1 font-light">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
            <div className="flex gap-3 pt-3 text-neutral-300">
              <a href="#" className="hover:text-white" aria-label="Instagram"><LuInstagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white" aria-label="Facebook"><LuFacebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white" aria-label="Twitter"><LuTwitter className="w-4 h-4" /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between text-[11px] text-neutral-500 gap-4">
          <p>© 2026 Styleo. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
