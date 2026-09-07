import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface ToastState {
  show: boolean;
  type: 'success' | 'error';
  message: string;
}

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastState>({ show: false, type: 'success', message: '' });

  // Custom Toast helper to handle notification auto-dismissal
  const triggerToast = (type: 'success' | 'error', message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Also open the visitor's default mail app with the same message pre-filled,
    // as a visible backup in case the EmailJS dispatch below fails or is blocked.
    const formData = new FormData(formRef.current);
    const name = formData.get('user_name')?.toString() ?? '';
    const email = formData.get('user_email')?.toString() ?? '';
    const message = formData.get('message')?.toString() ?? '';
    const subject = `Portfolio inquiry from ${name || 'website visitor'}`;
    const body = `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:ajithrak22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setLoading(true);

    // Active EmailJS credentials
    const SERVICE_ID = 'service_myqre92';
    const TEMPLATE_ID = 'template_s188s8l';
    const PUBLIC_KEY = 'k4fRrwGq2tKDX2ZC5';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
      publicKey: PUBLIC_KEY,
    })
    .then(() => {
      triggerToast('success', 'Message sent successfully! I will get back to you shortly.');
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error('EmailJS Dispatch Failure:', error);
      triggerToast('error', 'Failed to dispatch email. Please reach out directly via LinkedIn.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/80 dark:bg-zinc-900/30 scroll-mt-16 relative">
      
      {/* Framer Motion Toast Notifications */}
      <div className="fixed bottom-5 right-5 z-50 pointer-events-none flex flex-col gap-2">
        <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              className={`pointer-events-auto px-5 py-3.5 rounded-xl shadow-xl flex items-center gap-3 font-medium text-sm border backdrop-blur-md max-w-md ${
                toast.type === 'success'
                  ? 'bg-emerald-50/95 border-emerald-200 text-emerald-800 dark:bg-emerald-950/90 dark:border-emerald-800 dark:text-emerald-200'
                  : 'bg-rose-50/95 border-rose-200 text-rose-800 dark:bg-rose-950/90 dark:border-rose-800 dark:text-rose-200'
              }`}
            >
              {toast.type === 'success' ? (
                <svg className="w-5 h-5 flex-shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 flex-shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <span>{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-12"
      >
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
            I'm currently accepting selective freelance consulting workflows or core pipeline contracts. Drop me an inquiry if you want to collaborate!
          </p>
          <div className="pt-4 space-y-2 text-sm text-gray-600 dark:text-zinc-400">
            <p>📍 Location: Remote / Global Hybrid</p>
            <p>✉ Email: ajithrak22@gmail.com</p>
            <p>📱 Phone: +91 63824 93969</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 hover:border-indigo-500 dark:hover:border-indigo-500 text-gray-900 dark:text-white font-medium rounded-lg shadow-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
            <a
              href={`https://wa.me/916382493969?text=${encodeURIComponent("Hi Ajithkumar, I saw your portfolio and wanted to connect.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-lg shadow-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.86.505 3.607 1.383 5.106L2 22l5.03-1.352A9.955 9.955 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.15a8.13 8.13 0 01-4.144-1.135l-.297-.176-3.087.83.826-3.019-.194-.31A8.128 8.128 0 013.85 12c0-4.5 3.65-8.15 8.15-8.15S20.15 7.5 20.15 12s-3.65 8.15-8.149 8.15z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-zinc-300 mb-1">Name</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-zinc-300 mb-1">Email</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-zinc-300 mb-1">Message</label>
              <textarea 
                name="message" 
                rows={4} 
                required 
                disabled={loading}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none disabled:opacity-50" 
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 disabled:bg-indigo-600/60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Dispatching Message...</span>
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};