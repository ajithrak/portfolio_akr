import React from 'react';

export const CleaningProcess: React.FC = () => {
  const steps = [
    { num: '01', title: 'Provide the details', desc: 'Just provide us the details you want cleaned.' },
    { num: '02', title: 'Pick a suitable plan', desc: 'Select the cleaning frequency that suits you.' },
    { num: '03', title: 'Set schedule', desc: 'Choose convenient dates and times for our crew.' },
    { num: '04', title: 'Get things done', desc: 'Relax while our professional team cleans everything.' },
  ];

  return (
    <section id="process" className="py-20 bg-[#1565c0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-sky-200">HOW IT WORKS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Sparkling Clean in Just 4 Simple Steps</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-sky-400 text-white font-black text-sm flex items-center justify-center mx-auto shadow-sm">
                {s.num}
              </div>
              <h3 className="text-base font-bold text-white">{s.title}</h3>
              <p className="text-xs text-sky-100 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
