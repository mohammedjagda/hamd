'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import { SectionHeading, ScrollMarquee } from './ui/motion';
import { products } from '@/lib/data';
import { ArrowUpRight, X } from 'lucide-react';

const categories = ['All', 'Fresh Onion', 'Spices', 'Rice'] as const;

export default function Products() {
  const [active, setActive] = useState<(typeof categories)[number]>('All');
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="pt-28 md:pt-40 bg-harvest-100 overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <SectionHeading
            index="02"
            eyebrow="Our Products"
            title="Three categories. Export grade, every time."
            className="max-w-4xl"
          />
          <div className="flex flex-wrap gap-2 shrink-0" role="group" aria-label="Filter products">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-colors ${
                  active === c
                    ? 'bg-turmeric-500 text-white border-turmeric-500'
                    : 'border-black text-ink-900 hover:bg-black hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filtered.map((p, i) => (
            <Reveal key={p.name} delay={Math.min((i % 3) * 0.08, 0.3)} className={i % 3 === 1 ? 'lg:mt-16' : i % 3 === 2 ? 'lg:mt-32' : ''}>
              <button
                type="button"
                className="group block w-full text-left"
                onClick={() => setSelectedProduct(p)}
                aria-label={`View details: ${p.name}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-300">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-turmeric-500/0 group-hover:bg-turmeric-500/25 transition-colors duration-500" />
                  <span className="absolute top-4 left-4 font-mono text-xs bg-white text-black px-2.5 py-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4 border-b-2 border-black pb-4">
                  <h3 className="font-display text-3xl leading-none">{p.name}</h3>
                  <span className="shrink-0 text-[11px] font-bold uppercase tracking-widest2 text-turmeric-600 pt-1.5">
                    {p.category}
                  </span>
                </div>
                <p className="text-sm text-ink-700 mt-3">{p.spec}</p>
                <p className="text-xs text-ink-700/60 mt-1">{p.packaging}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-28 md:mt-40 border-t-2 border-black bg-white py-8">
        <ScrollMarquee items={['RICE', 'SPICES', 'FRESH ONION']} />
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label={selectedProduct.name}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              className="relative w-full max-w-4xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black text-white hover:bg-turmeric-500 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
                <Image src={selectedProduct.image} alt={selectedProduct.name} fill unoptimized className="object-cover" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-xs font-bold tracking-widest uppercase text-turmeric-600 mb-3 block">
                  {selectedProduct.category}
                </span>
                <h3 className="font-display text-4xl md:text-5xl text-ink-900 mb-8 leading-none">{selectedProduct.name}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-ink-900 uppercase tracking-widest2 mb-2 border-b-2 border-black pb-2">Specifications</h4>
                    <p className="text-ink-700">{selectedProduct.spec}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ink-900 uppercase tracking-widest2 mb-2 border-b-2 border-black pb-2">Packaging Standard</h4>
                    <p className="text-ink-700">{selectedProduct.packaging}</p>
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="https://wa.me/917700072367"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-turmeric-500 text-white font-semibold px-6 py-4 hover:bg-black transition-colors"
                  >
                    Request Quote via WhatsApp <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
