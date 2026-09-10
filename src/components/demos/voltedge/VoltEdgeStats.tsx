import React from 'react';

export const VoltEdgeStats: React.FC = () => {
  const metrics = [
    { value: '15+', label: 'Years Experience' },
    { value: '2.5K+', label: 'Projects Completed' },
    { value: '1.8K+', label: 'Happy Clients' },
    { value: '24/7', label: 'Emergency Support' },
  ];

  return (
    <section className="bg-white border-b border-slate-100 py-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((m, i) => (
            <div key={i} className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#75b81a] tracking-tight block">
                {m.value}
              </span>
              <span className="text-xs font-medium text-slate-500">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
