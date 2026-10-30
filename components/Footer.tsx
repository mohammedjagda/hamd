'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const links: Record<string, { label: string; href: string }[]> = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Quality', href: '#quality' },
    { label: 'Gallery', href: '#gallery' },
  ],
  Products: [
    { label: 'Rice', href: '#products' },
    { label: 'Spices', href: '#products' },
    { label: 'Fresh Onion', href: '#products' },
  ],
  Markets: [
    { label: 'UAE', href: '#global-markets' },
    { label: 'Saudi Arabia', href: '#global-markets' },
    { label: 'Malaysia', href: '#global-markets' },
    { label: 'Vietnam', href: '#global-markets' },
  ],
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], ['35%', '0%']);

  return (
    <footer ref={ref} className="bg-[#101010] text-white/70 pt-24 overflow-hidden">
      <div className="container-wide">
        <a
          href="#contact"
          className="group flex items-center justify-between gap-6 border-b border-white/20 pb-10"
        >
          <span className="font-display text-5xl md:text-8xl text-white group-hover:text-turmeric-400 transition-colors leading-none">
            Request a quote
          </span>
          <span className="w-16 h-16 md:w-24 md:h-24 shrink-0 rounded-full bg-turmeric-500 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
            <ArrowUpRight size={40} />
          </span>
        </a>

        <div className="grid md:grid-cols-4 gap-12 pt-14">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="HAMD Trading & Exports" width={56} height={56} className="rounded-full" />
              <div className="flex flex-col">
                <span className="font-display text-white text-2xl leading-none">HAMD</span>
                <span className="text-xs tracking-widest uppercase text-turmeric-400 mt-1">Trading &amp; Exports</span>
              </div>
            </div>
            <p className="text-sm mt-5 max-w-xs leading-relaxed">
              Connecting Indian farms to global markets — rice, spices and fresh onion, export-grade
              from origin to port.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center hover:bg-turmeric-500 hover:border-turmeric-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-display text-2xl">{title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-turmeric-400 transition-colors">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-4 text-xs">
          <span>© {new Date().getFullYear()} HAMD Trading &amp; Exports. All rights reserved.</span>
          <span>Mumbai, Maharashtra, India</span>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        style={reduce ? undefined : { y }}
        className="font-display text-[26vw] leading-[0.8] text-center text-white/[0.07] select-none -mb-[3vw] mt-6"
      >
        HAMD
      </motion.div>
    </footer>
  );
}
