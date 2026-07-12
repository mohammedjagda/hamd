'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import StatCounter from './StatCounter';
import RouteMotif from './RouteMotif';
import { stats } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/FarmToPortHero.png"
          alt="Lush green farm blending into a global shipping port at sunset"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/50" />
      </div>

      <div className="relative z-10 container-wide pt-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow text-turmeric-400 mb-6 tracking-widest drop-shadow-sm"
        >
          Est. Mumbai, India — Serving 10+ Countries
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-white text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-4xl drop-shadow-lg"
        >
          Connecting Indian Farms to <span className="bg-gradient-to-r from-turmeric-400 via-yellow-200 to-harvest-100 bg-clip-text text-transparent">Global Markets</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 text-white/80 text-lg md:text-xl max-w-xl leading-relaxed"
        >
          A premium exporter of Rice, Spices and Fresh Onion — sourced at origin, inspected at every
          stage, and shipped to buyers worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-turmeric-500 to-turmeric-400 text-field-900 font-bold px-8 py-3.5 hover:from-turmeric-400 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-turmeric-500/30 hover:shadow-turmeric-500/50 hover:-translate-y-0.5"
          >
            Explore Products <ArrowUpRight size={18} className="stroke-[2.5]" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white font-medium px-8 py-3.5 hover:bg-white/15 hover:border-white/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Request a Quote
          </a>
        </motion.div>

        <RouteMotif className="w-full max-w-2xl h-8 mt-10 text-turmeric-400/80" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl border-t border-white/20 pt-6 pb-8"
        >
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} light />
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
