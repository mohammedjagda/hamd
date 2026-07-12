'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { faqs } from '@/lib/data';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 bg-white">
      <div className="container-wide max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl text-field-700 leading-tight">
            Common questions from buyers.
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-harvest-200 border-t border-b border-harvest-200">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-medium text-ink-900">{f.q}</span>
                  <Plus size={18} className={`shrink-0 text-turmeric-600 transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm text-ink-700/75 leading-relaxed max-w-xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
