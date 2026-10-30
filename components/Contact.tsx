'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { SectionHeading } from './ui/motion';
import { Phone, Mail, MapPin, Send, Globe } from 'lucide-react';

const contacts = [
  { name: 'Habban', phone: '+91 98921 96464' },
  { name: 'Ammar', phone: '+91 88790 10166' },
  { name: 'Mohammed', phone: '+91 77000 72367' },
  { name: 'Daniyal', phone: '+91 82910 78171' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-28 md:py-40 bg-white">
      <div className="container-wide grid lg:grid-cols-5 gap-14">
        <Reveal className="lg:col-span-2">
          <SectionHeading index="10" eyebrow="Contact" title="Request a quote, or just ask a question." className="[&_h2]:!text-5xl lg:[&_h2]:!text-6xl" />
          <p className="mt-6 text-ink-700 leading-relaxed">
            Our team responds to serious enquiries within one business day.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-9 h-9 bg-black flex items-center justify-center">
                <MapPin size={18} className="text-white" />
              </div>
              <p className="text-sm text-ink-700 pt-1.5">
                HAMD Trading &amp; Exports, Business Centre, Andheri East, Mumbai, Maharashtra, India
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-9 h-9 bg-black flex items-center justify-center">
                <Mail size={18} className="text-white" />
              </div>
              <a href="mailto:hamd@gmail.com" className="text-sm text-ink-700 hover:text-turmeric-500 pt-1.5">
                hamd@gmail.com
              </a>
            </div>
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-9 h-9 bg-black flex items-center justify-center">
                <Globe size={18} className="text-white" />
              </div>
              <p className="text-sm text-ink-700 pt-1.5">
                www.hamdtradingexports.com
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {contacts.map((c) => (
              <div key={c.name} className="border-2 border-black/10 px-4 py-3 hover:border-turmeric-500 transition-all duration-300">
                <div className="text-xs text-ink-700/60 font-medium">{c.name}</div>
                <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 text-sm font-medium text-ink-900 mt-1">
                  <Phone size={13} className="text-white" /> {c.phone}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 relative overflow-hidden aspect-video border-2 border-black grayscale hover:grayscale-0 transition-[filter] duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9932!2d72.8567!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c6a8b8f99f%3A0x6e43edd42c3d5a60!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HAMD Trading & Exports Location"
              className="absolute inset-0"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-3">
          {submitted ? (
            <div className="h-full bg-black text-white flex flex-col items-center justify-center text-center p-12">
              <div className="w-14 h-14 rounded-full bg-turmeric-500 text-white flex items-center justify-center mb-5">
                <Send size={22} />
              </div>
              <h3 className="font-display text-4xl text-white">Enquiry received</h3>
              <p className="text-sm text-white/70 mt-2 max-w-sm">
                Thank you — a member of our export team will contact you within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="bg-black text-white p-8 md:p-12 space-y-5"
            >
              <div className="mb-2">
                <h3 className="font-display text-4xl text-white">Send us your requirements</h3>
                <p className="text-sm text-white/60 mt-2">Fill out the form below and we&apos;ll get back to you promptly.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Country" name="country" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="text-xs uppercase tracking-widest2 text-white/60 font-medium">
                  Requirement
                </label>
                <textarea
                  name="requirement"
                  required
                  rows={4}
                  placeholder="Product, quantity and destination port"
                  className="mt-2 w-full border-b-2 border-white/25 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-turmeric-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-turmeric-500 text-white font-semibold px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
              >
                Submit Enquiry <Send size={16} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest2 text-white/60 font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b-2 border-white/25 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-turmeric-500 transition-colors"
      />
    </div>
  );
}
