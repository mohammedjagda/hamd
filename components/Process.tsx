'use client';

import Reveal from './Reveal';
import { processSteps } from '@/lib/data';
import { Sprout, Factory, SearchCheck, PackageCheck, Container, Ship, UserCheck } from 'lucide-react';

const icons = [Sprout, Factory, SearchCheck, PackageCheck, Container, Ship, UserCheck];

export default function Process() {
  return (
    <section className="py-28 bg-harvest-100">
      <div className="container-wide">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">Our Process</p>
          <h2 className="font-display text-4xl md:text-5xl text-field-700 leading-tight">
            Seven steps. One unbroken chain of custody.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-harvest-200" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
            {processSteps.map((step, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={step.label} delay={i * 0.08}>
                  <div className="text-left flex lg:flex-col items-center lg:items-start gap-5 lg:gap-3">
                    <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-field-600 text-white flex items-center justify-center shadow-card">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-ink-900">{step.label}</h3>
                      <p className="text-sm lg:text-xs text-ink-700/60 mt-1 max-w-[200px] lg:max-w-[140px]">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
