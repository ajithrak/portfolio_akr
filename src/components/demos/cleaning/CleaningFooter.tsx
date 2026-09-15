import React from 'react';

export const CleaningFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0d47a1] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-white/10 gap-6">
          <div>
            <h3 className="text-xl font-bold">Subscribe now for exclusive offers and instant updates.</h3>
          </div>
          <div className="flex w-full md:w-auto max-w-md">
            <input type="email" placeholder="Enter your email address" className="bg-white/10 text-white placeholder-sky-200 text-xs px-4 py-3 rounded-l-lg focus:outline-none w-full border border-white/20" />
            <button className="bg-sky-400 hover:bg-sky-300 text-slate-900 font-bold text-xs px-5 rounded-r-lg transition">
              Go
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-xs">
          <div className="space-y-3">
            <span className="font-bold text-base">PureShine Cleaning</span>
            <p className="text-sky-200 leading-relaxed">
              We're dedicated to bringing spotless, hygienic, and affordable cleaning to your homes and offices.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-sm text-sky-200 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-1.5 text-sky-100">
              <li><a href="#about" className="hover:underline">About Company</a></li>
              <li><a href="#services" className="hover:underline">Our Services</a></li>
              <li><a href="#testimonials" className="hover:underline">Client Reviews</a></li>
              <li><a href="#contact" className="hover:underline">Get in Touch</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-sm text-sky-200 uppercase tracking-wider">Opening Hours</h4>
            <div className="space-y-1 text-sky-100">
              <p>Mon - Fri: 8:00am - 8:00pm</p>
              <p>Saturday: 9:00am - 6:00pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-sm text-sky-200 uppercase tracking-wider">Head Office</h4>
            <p className="text-sky-100 leading-relaxed">
              28/4 St, Melbourne, Australia<br />
              Phone: (+123) 4567890<br />
              Email: info@pureshine.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-[11px] text-sky-300">
          © 2026 PureShine Cleaning. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
