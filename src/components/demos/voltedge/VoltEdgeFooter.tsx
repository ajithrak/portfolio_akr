import React from 'react';
import { LuZap } from 'react-icons/lu';

export const VoltEdgeFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#141414] text-neutral-400 pt-16 pb-8 text-xs border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#a3e635] text-slate-900 flex items-center justify-center font-bold">
                <LuZap className="w-3.5 h-3.5 fill-slate-900" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">VoltEdge</span>
            </div>
            <p className="text-[11px] leading-relaxed text-neutral-400">
              Powering a safer tomorrow with expert electrical solutions today.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-1.5 font-light text-[11px]">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-1.5 font-light text-[11px]">
              <li><a href="#services" className="hover:text-white transition">Residential</a></li>
              <li><a href="#services" className="hover:text-white transition">Commercial</a></li>
              <li><a href="#services" className="hover:text-white transition">Industrial</a></li>
              <li><a href="#services" className="hover:text-white transition">Maintenance</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">Stay Connected</h4>
            <p className="text-[11px] text-neutral-400">Call Us: <span className="text-white">+680 1234 567890</span></p>
            <p className="text-[11px] text-neutral-400">Email Us: <span className="text-white">info@voltedge.com</span></p>
          </div>

        </div>

        <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-500 gap-4">
          <p>© 2026 VoltEdge. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
