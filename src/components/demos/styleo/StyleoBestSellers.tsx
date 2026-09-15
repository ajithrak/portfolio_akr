import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export const StyleoBestSellers: React.FC = () => {
  const accessories = [
    { name: 'Sunglasses', price: '$39.00', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format&fit=crop' },
    { name: 'Watch', price: '$129.00', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=500&auto=format&fit=crop' },
    { name: 'T-Shirt', price: '$19.00', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=500&auto=format&fit=crop' },
  ];

  return (
    <section className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900">
            Best Sellers
          </h2>
          <a
            href="#new-arrivals"
            className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-neutral-500 hover:text-neutral-900 font-semibold"
          >
            <span>View All</span>
            <LuArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {accessories.map((item, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-3 border border-neutral-200/70">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
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
