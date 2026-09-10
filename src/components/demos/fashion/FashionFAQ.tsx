import React, { useState } from 'react';
import { LuPlus, LuMinus } from 'react-icons/lu';

export const FashionFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is your return policy?',
      a: 'We offer a 14-day hassle-free return window for unworn items with original tags intact.',
    },
    {
      q: 'How long does shipping take?',
      a: 'Standard shipping takes 3-5 business days. Express shipping delivers within 1-2 business days.',
    },
    {
      q: 'Do you offer international shipping?',
      a: 'Yes, we ship to over 60 countries worldwide with calculated duties and tracking provided.',
    },
    {
      q: 'How can I track my order?',
      a: 'Once shipped, you will receive a tracking link via email to monitor delivery status in real-time.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-neutral-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center text-left text-xs sm:text-sm font-medium text-neutral-800 hover:text-neutral-950 transition"
                >
                  <span>{faq.q}</span>
                  <span className="text-neutral-400 ml-4">
                    {isOpen ? <LuMinus className="w-3.5 h-3.5" /> : <LuPlus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed font-light">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
