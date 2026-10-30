'use client';

import { useState } from 'react';
import { SectionHeading, Row } from './ui/motion';
import { faqs } from '@/lib/data';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 md:py-40 bg-harvest-100">
      <div className="container-wide grid lg:grid-cols-12 gap-14 lg:gap-20">
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading index="08" eyebrow="FAQ" title="Common questions from buyers." />
        </div>

        <div className="lg:col-span-7 border-t-2 border-black">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <Row key={f.q} className="border-b border-black/20">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-5 md:gap-8 py-7 text-left group"
                >
                  <span className="font-mono text-xs text-turmeric-600 w-6">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1 font-display text-2xl md:text-3xl text-ink-900 normal-case group-hover:text-turmeric-600 transition-colors">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-turmeric-500 text-white rotate-45' : 'bg-black text-white'
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-7' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="pl-11 md:pl-14 text-ink-700 leading-relaxed max-w-xl">{f.a}</p>
                  </div>
                </div>
              </Row>
            );
          })}
        </div>
      </div>
    </section>
  );
}
