import React from 'react';
import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';

export const GilmoreContactMap: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-sm border border-neutral-300 relative min-h-[300px]">
            <iframe
              title="Gilmore Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153166!3d-37.81627977975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f7f1d8!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1614135678901!5m2!1sen!2sus"
              className="w-full h-full border-0 min-h-[320px]"
              allowFullScreen={false}
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-center space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-purple-700">GET IN TOUCH</span>
              <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight mt-1">Contact Us</h3>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <LuPhone className="w-4 h-4 text-purple-700 mt-0.5" />
                <div>
                  <p className="font-bold text-neutral-900">Call Us 24/7</p>
                  <p className="text-neutral-600">(+123) 456 789 0</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <LuMail className="w-4 h-4 text-purple-700 mt-0.5" />
                <div>
                  <p className="font-bold text-neutral-900">Work with us</p>
                  <p className="text-neutral-600">info@gilmore-m.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <LuMapPin className="w-4 h-4 text-purple-700 mt-0.5" />
                <div>
                  <p className="font-bold text-neutral-900">Our Location</p>
                  <p className="text-neutral-600">1901 Thomridge Cir. Shiloh, Hawaii 81063</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
