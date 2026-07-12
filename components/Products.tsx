'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import { products } from '@/lib/data';
import { ArrowUpRight, X } from 'lucide-react';

const categories = ['All', 'Fresh Onion', 'Spices', 'Rice'] as const;

export default function Products() {
  const [active, setActive] = useState<(typeof categories)[number]>('All');
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
  
  const filtered = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="py-28 bg-white">
      <div className="container-wide">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">Our Products</p>
          <h2 className="font-display text-4xl md:text-5xl text-field-700 leading-tight">
            Three categories. Export grade, every time.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${
                active === c
                  ? 'bg-field-600 text-white border-field-600'
                  : 'border-harvest-200 text-ink-700 hover:border-field-600'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <Reveal key={p.name} delay={Math.min(i * 0.05, 0.3)}>
              <div 
                className="group relative rounded-2xl overflow-hidden shadow-card bg-harvest-50 cursor-pointer"
                onClick={() => setSelectedProduct(p)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-field-900/85 via-field-900/10 to-transparent" />
                  <span className="absolute top-4 left-4 text-[11px] uppercase tracking-widest2 text-turmeric-400 font-medium">
                    {p.category}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-display text-xl">{p.name}</h3>
                  <p className="text-sm text-white/75 mt-2">{p.spec}</p>
                  <p className="text-xs text-white/55 mt-1">{p.packaging}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-turmeric-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-field-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-field-900 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-xs font-bold tracking-widest uppercase text-turmeric-600 mb-2 block">
                  {selectedProduct.category}
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-field-900 mb-6">{selectedProduct.name}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-ink-900 uppercase tracking-wide mb-2 border-b border-harvest-200 pb-2">Specifications</h4>
                    <p className="text-ink-700/80">{selectedProduct.spec}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink-900 uppercase tracking-wide mb-2 border-b border-harvest-200 pb-2">Packaging Standard</h4>
                    <p className="text-ink-700/80">{selectedProduct.packaging}</p>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-harvest-200">
                  <a
                    href="https://wa.me/917700072367"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-field-600 text-white font-medium px-6 py-4 hover:bg-field-700 transition-colors shadow-lg shadow-field-600/20"
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
