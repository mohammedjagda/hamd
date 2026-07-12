'use client';

import Reveal from './Reveal';
import { testimonials } from '@/lib/data';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-28 bg-harvest-100">
      <div className="container-wide">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">Buyer Feedback</p>
          <h2 className="font-display text-4xl md:text-5xl text-field-700 leading-tight">
            What our international buyers say.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-card flex flex-col">
                <Quote className="text-turmeric-500/60" size={28} />
                <p className="mt-5 text-ink-700/85 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-6 border-t border-harvest-200">
                  <div className="font-semibold text-ink-900">{t.name}</div>
                  <div className="text-xs text-ink-700/60 mt-1">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
