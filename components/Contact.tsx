'use client';

import { useState } from 'react';
import Reveal from './Reveal';
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
    <section id="contact" className="py-28 bg-white">
      <div className="container-wide grid lg:grid-cols-5 gap-14">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="font-display text-4xl text-field-700 leading-tight">
            Request a quote, or just ask a question.
          </h2>
          <p className="mt-5 text-ink-700/75 leading-relaxed">
            Our team responds to serious enquiries within one business day.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-field-600/10 flex items-center justify-center">
                <MapPin size={18} className="text-field-600" />
              </div>
              <p className="text-sm text-ink-700/80 pt-1.5">
                HAMD Trading &amp; Exports, Business Centre, Andheri East, Mumbai, Maharashtra, India
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-field-600/10 flex items-center justify-center">
                <Mail size={18} className="text-field-600" />
              </div>
              <a href="mailto:hamd@gmail.com" className="text-sm text-ink-700/80 hover:text-field-600 pt-1.5">
                hamd@gmail.com
              </a>
            </div>
            <div className="flex gap-3 items-start">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-field-600/10 flex items-center justify-center">
                <Globe size={18} className="text-field-600" />
              </div>
              <p className="text-sm text-ink-700/80 pt-1.5">
                www.hamdtradingexports.com
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {contacts.map((c) => (
              <div key={c.name} className="rounded-xl border border-harvest-200 px-4 py-3 hover:border-field-600/30 hover:shadow-sm transition-all duration-300">
                <div className="text-xs text-ink-700/60 font-medium">{c.name}</div>
                <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 text-sm font-medium text-ink-900 mt-1">
                  <Phone size={13} className="text-field-600" /> {c.phone}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 relative rounded-2xl overflow-hidden aspect-video border border-harvest-200">
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
            <div className="h-full rounded-3xl bg-harvest-100 flex flex-col items-center justify-center text-center p-12">
              <div className="w-14 h-14 rounded-full bg-field-600 text-white flex items-center justify-center mb-5">
                <Send size={22} />
              </div>
              <h3 className="font-display text-2xl text-field-700">Enquiry received</h3>
              <p className="text-sm text-ink-700/70 mt-2 max-w-sm">
                Thank you — a member of our export team will contact you within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-3xl bg-harvest-100 p-8 md:p-10 space-y-5"
            >
              <div className="mb-2">
                <h3 className="font-display text-2xl text-field-700">Send us your requirements</h3>
                <p className="text-sm text-ink-700/60 mt-1">Fill out the form below and we&apos;ll get back to you promptly.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Country" name="country" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="text-xs uppercase tracking-widest2 text-ink-700/60 font-medium">
                  Requirement
                </label>
                <textarea
                  name="requirement"
                  required
                  rows={4}
                  placeholder="Product, quantity and destination port"
                  className="mt-2 w-full rounded-xl border border-harvest-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-field-600/40 transition-shadow"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-field-600 text-white font-semibold px-7 py-3.5 hover:bg-field-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
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
      <label className="text-xs uppercase tracking-widest2 text-ink-700/60 font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-harvest-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-field-600/40 transition-shadow"
      />
    </div>
  );
}
