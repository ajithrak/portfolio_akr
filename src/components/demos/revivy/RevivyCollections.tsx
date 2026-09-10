import React from 'react';

export const RevivyCollections: React.FC = () => {
  const items = [
    {
      name: 'Calm Cleanser',
      price: '$20',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Lavender Cream',
      price: '$35',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Hydra Mist',
      price: '$28',
      image: 'https://images.unsplash.com/photo-1608248597359-467b7f14b301?q=80&w=400&auto=format&fit=crop',
    },
  ];

  return (
    <section id="products" className="py-20 bg-[#faf8f7] border-b border-purple-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-purple-900 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Collections
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-sm border border-purple-50 text-center space-y-3 shadow-sm">
              <div className="aspect-square overflow-hidden bg-slate-50 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif text-xs tracking-wide text-slate-800">{item.name}</h4>
              <p className="text-xs text-slate-500 font-light">{item.price}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
