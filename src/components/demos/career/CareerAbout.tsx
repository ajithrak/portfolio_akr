import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export const CareerAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fbfbfb] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center text-xs font-semibold tracking-wide text-neutral-600">
              ✦ About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-snug">
              I'm Your Career Growth Partner for Clarity, Confidence, and Results
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              With over 12 years of experience helping professionals land roles at fast-growing tech and consumer companies, I specialize in career clarity, job search strategy, resume optimization, and interview mastery. Whether you're stuck in the wrong role or entering the job market fresh, I'll help you move forward with confidence.
            </p>
            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold px-6 py-3 rounded-full transition"
              >
                <span>More About Me</span>
                <LuArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-[4/4] rounded-3xl overflow-hidden bg-neutral-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop"
                alt="Robert Alison Smiling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
