import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  LuMail,
  LuCopy,
  LuCheck,
  LuLinkedin,
  LuMapPin,
  LuClock,
  LuDownload,
  LuSend,
  LuLoaderCircle,
  LuCircleCheck,
  LuCircleAlert,
  LuArrowUpRight,
} from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';
import { recordContactSubmission } from '../lib/counters';
import { SOCIAL_LINKS } from '../data/portfolioData';

const EMAIL = 'ajithrak22@gmail.com';
const WHATSAPP_URL = `https://wa.me/916382493969?text=${encodeURIComponent(
  'Hi Ajithkumar, I saw your portfolio and wanted to connect.'
)}`;

// EmailJS credentials (public by design)
const SERVICE_ID = 'service_myqre92';
const TEMPLATE_ID = 'template_s188s8l';
const PUBLIC_KEY = 'k4fRrwGq2tKDX2ZC5';

const PROJECT_TYPES = ['Web app', 'Mobile app', 'Landing page', 'Performance audit', 'Something else'] as const;
const MESSAGE_MAX = 1000;

type Status = 'idle' | 'sending' | 'sent' | 'error';

const INPUT =
  'w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-950/40 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50 transition-shadow';
const LABEL = 'block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1.5';
const CHIP_ON =
  'px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-colors bg-indigo-600 border-indigo-600 text-white';
const CHIP_OFF =
  'px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-colors border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-zinc-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [projectType, setProjectType] = useState<string>('');
  const [messageLength, setMessageLength] = useState(0);
  const [copied, setCopied] = useState(false);

  const sending = status === 'sending';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Open the visitor's mail app with the same message pre-filled, as a visible
    // backup in case the EmailJS dispatch below fails or is blocked.
    const formData = new FormData(formRef.current);
    const name = formData.get('user_name')?.toString() ?? '';
    const email = formData.get('user_email')?.toString() ?? '';
    const message = formData.get('message')?.toString() ?? '';
    const subject = `Portfolio inquiry from ${name || 'website visitor'}${projectType ? ` (${projectType})` : ''}`;
    const body = `${message}\n\n---\nFrom: ${name}\nEmail: ${email}${projectType ? `\nProject type: ${projectType}` : ''}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    recordContactSubmission();

    setStatus('sending');
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus('sent');
        formRef.current?.reset();
        setProjectType('');
        setMessageLength(0);
      })
      .catch((error) => {
        console.error('EmailJS Dispatch Failure:', error);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/80 dark:bg-zinc-900/30 scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-10 lg:gap-12"
      >
        {/* Left: pitch + direct channels */}
        <div className="md:col-span-2 flex flex-col">
          <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Let's build something together
          </h2>
          <p className="mt-3 text-gray-600 dark:text-zinc-400 leading-relaxed">
            Have a product to ship, a frontend to scale, or an app that needs to be faster? Tell me a bit about it and
            I'll reply with next steps.
          </p>

          <ul className="mt-8 space-y-3">
            <li>
              <button
                type="button"
                onClick={copyEmail}
                className="group w-full flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-colors text-left"
              >
                <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <LuMail className="w-5 h-5" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-xs text-gray-500 dark:text-zinc-500">Email</span>
                  <span className="block text-sm font-medium text-gray-900 dark:text-white truncate">{EMAIL}</span>
                </span>
                <span className="text-xs font-medium text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 inline-flex items-center gap-1 shrink-0">
                  {copied ? (
                    <>
                      <LuCheck className="w-4 h-4 text-emerald-500" /> Copied
                    </>
                  ) : (
                    <>
                      <LuCopy className="w-4 h-4" /> Copy
                    </>
                  )}
                </span>
              </button>
            </li>
            <li className="grid grid-cols-2 gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-emerald-300 dark:hover:border-emerald-500/40 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366] shrink-0" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">WhatsApp</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-sky-300 dark:hover:border-sky-500/40 transition-colors"
              >
                <LuLinkedin className="w-5 h-5 text-[#0A66C2] dark:text-sky-400 shrink-0" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</span>
              </a>
            </li>
          </ul>

          <div className="hidden md:flex mt-8 p-5 justify-center">
            <img src="/images/contact-illustration.png" alt="" width={427} height={350} loading="lazy" className="w-full max-w-xs h-auto" />
          </div>

          <dl className="mt-6 space-y-2 text-sm text-gray-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <LuMapPin className="w-4 h-4 text-gray-400 dark:text-zinc-500" />
              <dt className="sr-only">Location</dt>
              <dd>Remote · working with teams worldwide</dd>
            </div>
            <div className="flex items-center gap-2">
              <LuClock className="w-4 h-4 text-gray-400 dark:text-zinc-500" />
              <dt className="sr-only">Time zone</dt>
              <dd>IST (UTC+5:30) · usually replies within a day</dd>
            </div>
          </dl>

          <a
            href="/resume.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
          >
            <LuDownload className="w-4 h-4" />
            Download resume (PDF)
          </a>
        </div>

        {/* Right: form */}
        <div className="md:col-span-3">
          <div className="relative bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-sm">
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center py-12"
                  role="status"
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-500/10">
                    <LuCircleCheck className="w-7 h-7 text-emerald-500" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Message sent</h3>
                  <p className="mt-2 max-w-sm text-sm text-gray-600 dark:text-zinc-400">
                    Thanks for reaching out. I'll get back to you at the email you provided, usually within a day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className={LABEL}>Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="user_name"
                        required
                        autoComplete="name"
                        placeholder="Jane Doe"
                        disabled={sending}
                        className={INPUT}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={LABEL}>Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="user_email"
                        required
                        autoComplete="email"
                        placeholder="jane@company.com"
                        disabled={sending}
                        className={INPUT}
                      />
                    </div>
                  </div>

                  <fieldset>
                    <legend className={LABEL}>
                      What do you need? <span className="font-normal text-gray-400 dark:text-zinc-500">(optional)</span>
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => {
                        const active = projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            aria-pressed={active}
                            disabled={sending}
                            onClick={() => setProjectType(active ? '' : type)}
                            className={active ? CHIP_ON : CHIP_OFF}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                    <input type="hidden" name="project_type" value={projectType} />
                  </fieldset>

                  <div>
                    <div className="flex items-baseline justify-between">
                      <label htmlFor="contact-message" className={LABEL}>Project details</label>
                      <span className="text-xs text-gray-400 dark:text-zinc-500 tabular-nums">
                        {messageLength}/{MESSAGE_MAX}
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      maxLength={MESSAGE_MAX}
                      placeholder="A few lines on what you're building, your timeline, and where you need help."
                      disabled={sending}
                      onChange={(e) => setMessageLength(e.target.value.length)}
                      className={`${INPUT} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-sm text-rose-700 dark:text-rose-300"
                    >
                      <LuCircleAlert className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>
                        The message couldn't be sent. Please try again, or email me directly at{' '}
                        <a href={`mailto:${EMAIL}`} className="font-medium underline">{EMAIL}</a>.
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-sm transition-colors disabled:bg-indigo-600/60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
                  >
                    {sending ? (
                      <>
                        <LuLoaderCircle className="w-4 h-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send message <LuSend className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-400 dark:text-zinc-500">
                    Prefer a quick chat?{' '}
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 font-medium text-gray-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      Message me on WhatsApp <LuArrowUpRight className="w-3 h-3" />
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
