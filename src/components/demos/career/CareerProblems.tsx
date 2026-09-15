import React from 'react';
import { LuSend, LuCircleHelp, LuVideo, LuMapPin } from 'react-icons/lu';

export const CareerProblems: React.FC = () => {
  const problems = [
    {
      icon: LuSend,
      title: "You're tired of sending out resumes and hearing crickets",
      description:
        "You've applied to dozens of jobs, yet your inbox remains empty. No interviews. No feedback. You're beginning to wonder what you're doing wrong — or if anyone's even reading your resume.",
    },
    {
      icon: LuCircleHelp,
      title: 'You feel lost switching careers or re-entering the workforce',
      description:
        "Whether you're pivoting into a new field or returning after a break, everything feels overwhelming. You're unsure how to position yourself or where to even begin.",
    },
    {
      icon: LuVideo,
      title: 'You freeze during interviews and forget what to say',
      description:
        "You know you're capable — but interviews make you nervous. You stumble over words, forget key points, and walk away feeling frustrated.",
    },
    {
      icon: LuMapPin,
      title: "You know you deserve better — but don't know where to start",
      description:
        "You're stuck in a job that drains you, or you're unemployed and feeling unsure. You crave direction, strategy, and someone to help you take the next step confidently.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f7f7f6] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center space-y-2 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Can you relate these?</h2>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto">
            You're not alone. If any of these sound familiar, career coaching can help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-neutral-200/70 shadow-sm space-y-3 flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                  {prob.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {prob.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
