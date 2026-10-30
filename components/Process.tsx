'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { SectionHeading } from './ui/motion';
import { processSteps } from '@/lib/data';
import { Sprout, Factory, SearchCheck, PackageCheck, Container, Ship, UserCheck } from 'lucide-react';

const icons = [Sprout, Factory, SearchCheck, PackageCheck, Container, Ship, UserCheck];

function StepCard({ i, label, desc }: { i: number; label: string; desc: string }) {
  const Icon = icons[i];
  return (
    <div className="shrink-0 w-[78vw] sm:w-[48vw] lg:w-[30vw] border-l-2 border-black pl-8 pr-6 py-2 flex flex-col">
      <span className="font-display text-[7rem] md:text-[9rem] leading-none text-transparent [-webkit-text-stroke:2px_#111]">
        {String(i + 1).padStart(2, '0')}
      </span>
      <div className="mt-6 flex items-center gap-4">
        <span className="w-12 h-12 rounded-full bg-turmeric-500 text-white flex items-center justify-center">
          <Icon size={20} />
        </span>
        <h3 className="font-display text-3xl md:text-4xl text-ink-900">{label}</h3>
      </div>
      <p className="mt-4 text-ink-700 max-w-[280px] leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Process() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const [vh, setVh] = useState(800);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const measure = () => {
      setDist(Math.max(0, strip.scrollWidth - document.documentElement.clientWidth));
      setVh(window.innerHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(strip);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reduce) {
    return (
      <section className="py-28 bg-white">
        <div className="container-wide">
          <SectionHeading index="04" eyebrow="Our Process" title="Seven steps. One unbroken chain of custody." />
          <div className="mt-14 flex flex-wrap gap-y-12">
            {processSteps.map((s, i) => (
              <StepCard key={s.label} i={i} label={s.label} desc={s.desc} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={trackRef} className="relative bg-white" style={{ height: dist + vh }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center gap-12">
        <div className="container-wide w-full">
          <SectionHeading index="04" eyebrow="Our Process" title="Seven steps. One unbroken chain of custody." className="max-w-4xl" />
        </div>

        <motion.div ref={stripRef} style={{ x }} className="flex w-max gap-6 pl-[max(1.5rem,calc((100vw-1400px)/2+4rem))] pr-24 will-change-transform">
          {processSteps.map((s, i) => (
            <StepCard key={s.label} i={i} label={s.label} desc={s.desc} />
          ))}
        </motion.div>

        <div className="container-wide w-full">
          <div className="h-[3px] bg-black/10">
            <motion.div style={{ scaleX: bar }} className="h-full bg-turmeric-500 origin-left" />
          </div>
        </div>
      </div>
    </section>
  );
}
