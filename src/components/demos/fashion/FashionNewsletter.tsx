import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export const FashionNewsletter: React.FC = () => {
  return (
    <section className="bg-[#2d352d] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-xl sm:text-2xl font-serif">Stay in the loop</h2>
            <p className="text-xs text-neutral-300">
              Join our newsletter and get 10% off your first order.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto max-w-md border border-neutral-500 rounded-full overflow-hidden p-1 bg-[#242b24]"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 text-xs text-white placeholder-neutral-400 focus:outline-none w-full"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-white text-neutral-900 hover:bg-neutral-100 rounded-full w-8 h-8 flex items-center justify-center transition shrink-0"
            >
              <LuArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
