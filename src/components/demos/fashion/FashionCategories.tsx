import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export const FashionCategories: React.FC = () => {
  const categories = [
    {
      title: 'Men',
      sub: 'Collection',
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Women',
      sub: 'Collection',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Accessories',
      sub: 'Collection',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Footwear',
      sub: 'Collection',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="shop" className="py-20 bg-[#2d352d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-end mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif tracking-tight">
            Shop By Category
          </h2>
          <a
            href="#collections"
            className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-neutral-300 hover:text-white font-medium"
          >
            <span>EXPLORE ALL</span>
            <LuArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((c, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-sm group cursor-pointer text-neutral-900 flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-bold tracking-tight">{c.title}</h3>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
