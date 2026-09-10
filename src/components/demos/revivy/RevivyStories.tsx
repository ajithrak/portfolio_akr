import React from 'react';

export const RevivyStories: React.FC = () => {
  const stories = [
    {
      quote: 'Lavender skincare has truly transformed my skin and my self-care routine.',
      author: 'Anika S.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    },
    {
      quote: 'The natural ingredients and calming scent make it my everyday essential.',
      author: 'Meera K.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-[#faf8f7] border-b border-purple-100/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-purple-900 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Stories
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, i) => (
            <div key={i} className="bg-white p-6 rounded-sm border border-purple-50 shadow-sm space-y-4">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-slate-100">
                <img
                  src={story.image}
                  alt={story.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed font-light">
                "{story.quote}"
              </p>
              <p className="text-xs font-serif font-bold text-slate-800">
                — {story.author}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
