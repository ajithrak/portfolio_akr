import React from 'react';

export const FashionFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1e231e] text-neutral-400 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          <div className="col-span-2 space-y-3">
            <span className="font-serif text-lg tracking-wider text-white">
              impeccify.com
            </span>
            <p className="text-xs text-neutral-400 max-w-xs leading-relaxed font-light">
              Timeless everyday style for your wardrobe. Made with conscience, crafted for life.
            </p>
            <div className="flex gap-4 pt-2 text-neutral-400">
              <a href="#" className="hover:text-white">IG</a>
              <a href="#" className="hover:text-white">FB</a>
              <a href="#" className="hover:text-white">PIN</a>
              <a href="#" className="hover:text-white">X</a>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">Shop</h4>
            <ul className="space-y-1 font-light">
              <li><a href="#shop" className="hover:text-white">Men</a></li>
              <li><a href="#shop" className="hover:text-white">Women</a></li>
              <li><a href="#shop" className="hover:text-white">Accessories</a></li>
              <li><a href="#shop" className="hover:text-white">Shoes</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">Help</h4>
            <ul className="space-y-1 font-light">
              <li><a href="#" className="hover:text-white">Customer Support</a></li>
              <li><a href="#" className="hover:text-white">Shipping &amp; Delivery</a></li>
              <li><a href="#" className="hover:text-white">Returns &amp; Exchanges</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider">Company</h4>
            <ul className="space-y-1 font-light">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between text-[11px] text-neutral-500 gap-4">
          <p>© 2026 Impeccify. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
