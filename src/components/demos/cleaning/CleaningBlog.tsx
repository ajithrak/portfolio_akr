import React from 'react';

export const CleaningBlog: React.FC = () => {
  const articles = [
    { title: 'Things to know choosing a cleaning service.', date: 'May 2, 2026', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop' },
    { title: 'Tips to keep your bedroom fresh and clean.', date: 'May 5, 2026', image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?q=80&w=600&auto=format&fit=crop' },
    { title: 'Step by step guide to clean your carpets.', date: 'May 10, 2026', image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <section id="blog" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-sky-600">BLOG</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">Smart Cleaning Tips for a Healthier, Happier Space</h2>
          </div>
          <a href="#" className="text-xs font-bold text-sky-600 hover:underline">View All Posts</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <span className="text-[10px] text-slate-400 font-semibold">{art.date}</span>
                <h3 className="text-sm font-bold text-slate-900 mt-1 leading-snug group-hover:text-sky-600 transition">{art.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
