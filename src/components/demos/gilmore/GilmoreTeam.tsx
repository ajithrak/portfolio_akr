import React from 'react';

export const GilmoreTeam: React.FC = () => {
  const members = [
    {
      name: 'Esther Howard',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop',
    },
    {
      name: 'Leslie Alexander',
      role: 'Deputy Manager',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop',
    },
    {
      name: 'Robert Fox',
      role: 'Finance Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop',
    },
    {
      name: 'Savannah Nguyen',
      role: 'Media Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50 border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-purple-700">MEET THE PEOPLE BEHIND THE WORK</span>
          <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
            A Team of Thinkers, Creators &amp; Doers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 border border-neutral-200/70 shadow-sm text-center">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-bold text-neutral-900">{m.name}</h3>
              <p className="text-xs text-neutral-500">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
