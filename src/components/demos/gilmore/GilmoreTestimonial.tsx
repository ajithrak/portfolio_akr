import React from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export const GilmoreTestimonial: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-purple-700">OUR TESTIMONIAL</span>
            <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">What Our Client Say</h2>
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-neutral-100" aria-label="Previous">
              <LuChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-[#3e3465] text-white flex items-center justify-center hover:bg-[#322953]" aria-label="Next">
              <LuChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/4] rounded-3xl overflow-hidden shadow-md max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                alt="Client Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#3e3465] text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-6">
              <p className="text-sm sm:text-base leading-relaxed italic text-purple-100">
                "Working with Gilmore Marketing was a game-changer for our brand. Their strategy, creativity, and attention to detail helped us reach new audiences and grow faster than we imagined."
              </p>
              <div>
                <h4 className="font-bold text-sm text-white">Leslie Alexander</h4>
                <p className="text-xs text-purple-300">Brand Manager at MoveBridge</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
