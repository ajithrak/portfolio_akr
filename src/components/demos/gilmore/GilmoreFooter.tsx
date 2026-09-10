import React from 'react';
import { LuSend } from 'react-icons/lu';

export const GilmoreFooter: React.FC = () => {
  return (
    <footer className="bg-[#322953] text-white pt-16 pb-8 border-t border-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-200">Opening Hours</h4>
            <div className="text-xs space-y-2 text-neutral-300">
              <div className="flex justify-between">
                <span>Week Days</span>
                <span>09:00 - 24:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>08:00 - 03:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-purple-300">Day Off</span>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block bg-[#483d78] hover:bg-[#574a8f] text-white text-xs px-5 py-2 rounded-full transition mt-2"
            >
              Contact Us
            </a>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-200">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
              <a href="#" className="hover:text-white transition">Forum Support</a>
              <a href="#about" className="hover:text-white transition">About Us</a>
              <a href="#" className="hover:text-white transition">Help &amp; FAQ</a>
              <a href="#" className="hover:text-white transition">My Account</a>
              <a href="#contact" className="hover:text-white transition">Contact Us</a>
              <a href="#" className="hover:text-white transition">Our Company</a>
              <a href="#services" className="hover:text-white transition">Pricing &amp; Plans</a>
              <a href="#services" className="hover:text-white transition">Service</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-200">Get Updates</h4>
            <p className="text-xs text-neutral-300">
              Subscribe for the latest news and insights — no spam, optimum content.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 text-white placeholder-neutral-400 text-xs px-4 py-2.5 rounded-l-lg focus:outline-none w-full border border-white/10"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-500 text-white px-4 rounded-r-lg flex items-center justify-center transition"
                aria-label="Subscribe"
              >
                <LuSend className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-[11px] text-neutral-400">
          Gilmore Marketing — Copyright 2026, All rights reserved
        </div>
      </div>
    </footer>
  );
};
