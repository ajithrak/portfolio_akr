import React from 'react';
import { LuChevronLeft, LuChevronRight, LuHeart } from 'react-icons/lu';

export const StyleoNewArrivals: React.FC = () => {
  const products = [
    {
      name: 'Oversized Blazer',
      price: '$89.00',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&auto=format&fit=crop',
    },
    {
      name: 'Linen Shirt',
      price: '$49.00',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop',
    },
    {
      name: 'Minimal Sneakers',
      price: '$99.00',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=500&auto=format&fit=crop',
    },
    {
      name: 'Leather Bag',
      price: '$69.00',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500&auto=format&fit=crop',
    },
  ];

  return (
    <section id="new-arrivals" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900">
            New Arrivals
          </h2>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 text-neutral-700" aria-label="Previous">
              <LuChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 text-neutral-700" aria-label="Next">
              <LuChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {products.map((item, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 mb-3 border border-neutral-200/70">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <button
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-neutral-700 hover:text-red-500 transition shadow-sm"
                  aria-label="Wishlist"
                >
                  <LuHeart className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-neutral-900">{item.name}</h3>
              <p className="text-xs font-semibold text-neutral-700 mt-0.5">{item.price}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
