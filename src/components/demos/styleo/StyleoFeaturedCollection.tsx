import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export const StyleoFeaturedCollection: React.FC = () => {
  const collections = [
    {
      title: 'Modern Blazer',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=700&auto=format&fit=crop',
    },
    {
      title: 'New Arrivals',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=700&auto=format&fit=crop',
    },
    {
      title: 'Casual Essentials',
      image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=700&auto=format&fit=crop',
    },
  ];

  return (
    <section id="featured" className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 tracking-tight">
            Featured Collection
          </h2>
          <a
            href="#new-arrivals"
            className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-neutral-600 hover:text-neutral-900 font-semibold"
          >
            <span>View All Collection</span>
            <LuArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md group bg-neutral-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-between p-6">
                <h3 className="text-xl font-serif text-white font-medium drop-shadow-sm">
                  {item.title}
                </h3>
                <div>
                  <a
                    href="#new-arrivals"
                    className="inline-block bg-white/90 hover:bg-white text-slate-900 text-xs font-semibold px-4 py-2 rounded-full transition"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
