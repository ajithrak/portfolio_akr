import React from 'react';

export const GilmoreBlog: React.FC = () => {
  const posts = [
    {
      title: "5 Marketing Trends You Can't Ignore in 2026",
      tag: 'Business Solution',
      author: 'Ava Bennett',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'How to Build a Brand That Actually Connects',
      tag: 'Business Solution',
      author: 'Ava Bennett',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Why Strategy Beats Guesswork Every Single Time',
      tag: 'Business Solution',
      author: 'Ava Bennett',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700">BLOG &amp; NEWS</span>
          <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">Recent blog post</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm group">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase font-bold text-purple-700 tracking-wider">
                  {post.tag} • by {post.author}
                </span>
                <h3 className="text-base font-bold text-neutral-900 leading-snug group-hover:text-purple-700 transition">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
