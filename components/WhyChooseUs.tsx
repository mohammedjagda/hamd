'use client';

import Reveal from './Reveal';
import { whyChooseUs } from '@/lib/data';
import {
  BadgeCheck, TrendingDown, Clock, PackageCheck,
  Handshake, SearchCheck, Ship, Headset,
} from 'lucide-react';

const icons = [BadgeCheck, TrendingDown, Clock, PackageCheck, Handshake, SearchCheck, Ship, Headset];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-28 bg-field-900 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-field-600/30 blur-3xl" />
      <div className="container-wide relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">Why Choose Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
            The reliability buyers plan their season around.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={Math.min(i * 0.06, 0.4)}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-turmeric-500/15 flex items-center justify-center text-turmeric-400 mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
