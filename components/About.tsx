'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal';
import { ParallaxImage, SectionHeading } from './ui/motion';
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
  const journeyRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: journeyRef, offset: ['start 0.8', 'end 0.6'] });
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="about" className="py-28 md:py-40 bg-white">
      <div className="container-wide">
        <SectionHeading
          index="01"
          eyebrow="About Us"
          title="An export house built on what leaves the ground clean."
          className="max-w-5xl"
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-lg md:text-xl text-ink-700 leading-relaxed">
                HAMD Trading &amp; Exports sources rice, spices and fresh onion directly from Indian
                farms and mills, then carries every lot through grading, moisture testing and
                export-grade packaging before it reaches a port. What buyers receive is what was
                promised on the specification sheet — nothing negotiated after the container is
                sealed.
              </p>
            </Reveal>

            <div className="mt-14 grid sm:grid-cols-2 border-t border-black/15">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className={`group h-full border-b border-black/15 py-8 transition-colors hover:bg-black hover:text-white ${i % 2 === 0 ? 'sm:border-r sm:pr-8' : 'sm:pl-8'}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-turmeric-500">0{i + 1}</span>
                      <v.icon size={22} className="text-turmeric-500" />
                    </div>
                    <h3 className="font-display text-3xl mt-8">{v.title}</h3>
                    <p className="text-sm mt-3 opacity-70 leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <ParallaxImage
              src="/images/LushGreenRiceFields.jpg"
              alt="Rice harvesting and sorting in India"
              className="aspect-[4/5]"
              unoptimized={false}
            />
          </div>
        </div>

        <div ref={journeyRef} className="mt-28 md:mt-40">
          <div className="flex items-end justify-between gap-6">
            <h3 className="font-display text-4xl md:text-6xl text-ink-900">Our Journey</h3>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-[22px] h-px bg-black/15 hidden md:block" />
            <motion.div
              style={reduce ? undefined : { scaleX: line }}
              className="absolute left-0 right-0 top-[22px] h-[2px] bg-turmeric-500 origin-left hidden md:block"
            />
            <div className="grid md:grid-cols-4 gap-10 md:gap-6">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.1}>
                  <div className="relative">
                    <div
                      className={`relative z-10 w-11 h-11 rounded-full flex items-center justify-center ${
                        t.highlight ? 'bg-turmeric-500 text-white' : 'bg-black text-white'
                      }`}
                    >
                      <t.icon size={18} />
                    </div>
                    <div
                      className={`font-display text-6xl md:text-7xl mt-8 ${
                        t.highlight ? 'text-turmeric-500' : 'text-ink-900'
                      }`}
                    >
                      {t.year}
                    </div>
                    <p className="mt-3 text-sm text-ink-700 leading-relaxed max-w-[260px]">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
