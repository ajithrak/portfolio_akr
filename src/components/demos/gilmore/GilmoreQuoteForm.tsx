import React from 'react';

export const GilmoreQuoteForm: React.FC = () => {
  return (
    <section id="quote" className="py-20 bg-neutral-50 border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-purple-700">MAKE AN APPOINTMENT</span>
              <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">Request a free quote</h2>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full text-xs px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full text-xs px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full text-xs px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full text-xs px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
              />
              <textarea
                rows={4}
                placeholder="Type Your Message"
                className="w-full text-xs px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
              />
              <button
                type="submit"
                className="bg-[#3e3465] hover:bg-[#322953] text-white text-xs font-bold px-8 py-3.5 rounded-full transition shadow"
              >
                Submit Message
              </button>
            </form>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop"
                alt="Strategy session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
