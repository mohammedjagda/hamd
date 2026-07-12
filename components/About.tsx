'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import { Sprout, Target, Eye, ShieldCheck, Wheat, Handshake, Ship, Globe } from 'lucide-react';

const values = [
  { icon: Sprout, title: 'Origin First', desc: 'We work directly with growers and mills, not intermediaries.' },
  { icon: Target, title: 'Mission', desc: 'Make export-grade Indian produce dependable for buyers, shipment after shipment.' },
  { icon: Eye, title: 'Vision', desc: 'Become the most trusted Indian name on the sourcing sheet of global importers.' },
  { icon: ShieldCheck, title: 'Integrity', desc: 'Every specification promised is a specification delivered.' },
];

const timeline = [
  { year: '2016', text: 'Began as a regional trading house for rice and onion within India.', icon: Wheat, highlight: false },
  { year: '2019', text: 'Built direct farmer and mill partnerships across three states.', icon: Handshake, highlight: false },
  { year: '2022', text: 'First container shipped to the GCC; export operations formalised.', icon: Ship, highlight: false },
  { year: 'Today', text: 'Serving 10+ countries across the Gulf, Southeast Asia and beyond.', icon: Globe, highlight: true },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-harvest-50">
      <div className="container-wide grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <p className="eyebrow mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-field-700 leading-tight">
            An export house built on what leaves the ground clean.
          </h2>
          <p className="mt-6 text-ink-700/80 leading-relaxed max-w-lg text-base">
            HAMD Trading &amp; Exports sources rice, spices and fresh onion directly from Indian
            farms and mills, then carries every lot through grading, moisture testing and
            export-grade packaging before it reaches a port. What buyers receive is what was
            promised on the specification sheet — nothing negotiated after the container is sealed.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 group">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-field-600/10 flex items-center justify-center text-field-600 group-hover:bg-field-600 group-hover:text-white transition-all duration-300">
                  <v.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-900">{v.title}</h3>
                  <p className="text-sm text-ink-700/70 mt-1">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="font-display text-2xl text-field-700 mb-8">Our Journey</h3>
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-[23px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-field-600/20 via-field-600/40 to-turmeric-500/60 rounded-full" />

              <div className="space-y-1">
                {timeline.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.year} className="relative flex gap-5 group">
                      {/* Year badge */}
                      <div className="relative z-10 flex flex-col items-center shrink-0">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
                            t.highlight
                              ? 'bg-gradient-to-br from-turmeric-400 to-turmeric-600 text-white ring-4 ring-turmeric-400/30'
                              : 'bg-field-600 text-white ring-4 ring-field-600/20 group-hover:ring-field-600/40'
                          }`}
                        >
                          <Icon size={20} />
                        </div>
                      </div>

                      {/* Content card */}
                      <div
                        className={`flex-1 rounded-2xl border p-5 mb-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-card ${
                          t.highlight
                            ? 'bg-gradient-to-r from-turmeric-500/10 to-turmeric-400/5 border-turmeric-500/30'
                            : 'bg-white border-harvest-200 group-hover:border-field-600/30'
                        }`}
                      >
                        <span
                          className={`inline-block text-xs font-bold tracking-widest uppercase mb-1.5 ${
                            t.highlight ? 'text-turmeric-600' : 'text-field-600'
                          }`}
                        >
                          {t.year}
                        </span>
                        <p className="text-sm text-ink-700/80 leading-relaxed">{t.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/5]">
            <Image
              src="/images/LushGreenRiceFields.jpg"
              alt="Rice harvesting and sorting in India"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-field-900/30 to-transparent" />
          </div>

        </Reveal>
      </div>
    </section>
  );
}
