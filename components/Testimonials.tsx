'use client';

import { SectionHeading } from './ui/motion';
import { testimonials } from '@/lib/data';
import { Quote } from 'lucide-react';

const tones = [
  'bg-white text-ink-900 border-2 border-black',
  'bg-black text-white',
  'bg-turmeric-500 text-white',
];

export default function Testimonials() {
  return (
    <section className="py-28 md:py-40 bg-white">
      <div className="container-wide grid lg:grid-cols-12 gap-14 lg:gap-20">
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading index="07" eyebrow="Buyer Feedback" title="What our international buyers say." />
        </div>

        {/* Cards pin and stack over each other while scrolling */}
        <div className="lg:col-span-7 space-y-8 pb-10">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              style={{ top: `${112 + i * 28}px` }}
              className={`sticky p-8 md:p-12 min-h-[320px] flex flex-col shadow-[0_-18px_40px_-24px_rgba(0,0,0,0.35)] ${tones[i % tones.length]}`}
            >
              <Quote size={40} className={i === 0 ? 'text-turmeric-500' : 'opacity-60'} />
              <blockquote className="font-display text-3xl md:text-4xl leading-tight mt-6 flex-1 normal-case">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-current/25">
                <div className="font-bold">{t.name}</div>
                <div className="text-sm opacity-70 mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
