'use client';

import { SectionHeading, Row } from './ui/motion';
import { whyChooseUs } from '@/lib/data';
import {
  BadgeCheck, TrendingDown, Clock, PackageCheck,
  Handshake, SearchCheck, Ship, Headset,
} from 'lucide-react';

const icons = [BadgeCheck, TrendingDown, Clock, PackageCheck, Handshake, SearchCheck, Ship, Headset];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-28 md:py-40 bg-field-900 text-white">
      <div className="container-wide grid lg:grid-cols-12 gap-14 lg:gap-20">
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            index="03"
            eyebrow="Why Choose Us"
            title="The reliability buyers plan their season around."
            dark
          />
        </div>

        <div className="lg:col-span-7 border-t border-white/20">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <Row key={item.title} className="group flex gap-6 md:gap-10 items-start border-b border-white/20 py-9 md:py-11">
                <span className="font-display text-5xl md:text-7xl leading-none text-turmeric-500 w-16 md:w-28 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-3xl md:text-4xl group-hover:text-turmeric-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/65 mt-3 leading-relaxed max-w-md">{item.desc}</p>
                </div>
                <Icon size={28} className="text-white/40 group-hover:text-turmeric-400 transition-colors shrink-0 mt-1" />
              </Row>
            );
          })}
        </div>
      </div>
    </section>
  );
}
