import React from 'react';
import { LuArrowRight, LuHeart } from 'react-icons/lu';

export const FashionBestSellers: React.FC = () => {
  const products = [
    {
      name: 'Sunglasses',
      price: '$49.00',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format&fit=crop',
    },
    {
      name: 'Linen Shirt',
      price: '$69.00',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500&auto=format&fit=crop',
    },
    {
      name: 'Minimal Watch',
      price: '$129.00',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=500&auto=format&fit=crop',
    },
    {
      name: 'Sneakers',
      price: '$89.00',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=500&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900">
            Best Sellers
          </h2>
          <a
            href="#shop"
            className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-neutral-600 hover:text-neutral-900 font-semibold"
          >
            <span>VIEW ALL</span>
            <LuArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p, i) => (
            <div key={i} className="group flex flex-col">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 mb-3 border border-neutral-200/80">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <button
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-neutral-700 hover:text-red-500 transition shadow-sm"
                  aria-label="Wishlist"
                >
                  <LuHeart className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-neutral-900">{p.name}</h3>
              <p className="text-xs font-semibold text-neutral-700 mt-0.5">{p.price}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
