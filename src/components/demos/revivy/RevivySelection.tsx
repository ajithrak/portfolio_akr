import React from 'react';

export const RevivySelection: React.FC = () => {
  const selections = [
    {
      title: 'Botanical Care',
      image: 'https://images.unsplash.com/photo-1608248597359-467b7f14b301?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Daily Essentials',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Natural Protection',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white border-b border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-purple-900 font-semibold mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Selection
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {selections.map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center cursor-pointer">
              <div className="w-full aspect-[4/5] rounded-sm overflow-hidden bg-[#faf8f7] border border-purple-50 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="font-serif text-sm tracking-wide text-slate-800 group-hover:text-purple-900 transition">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
