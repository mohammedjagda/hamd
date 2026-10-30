'use client';

import { useRef, type ReactNode } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';

/** Word-by-word text that fills in as the heading scrolls into view (scroll-scrubbed, reversible). */
function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em] will-change-[opacity]">
      {word}
    </motion.span>
  );
}

export function ScrollFill({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.35'] });
  const words = text.split(' ');
  return (
    <h2 ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {words.map((w, i) => {
          const start = (i / words.length) * 0.75;
          return reduce ? (
            <span key={i} className="inline-block mr-[0.28em]">
              {w}
            </span>
          ) : (
            <Word key={i} word={w} progress={scrollYProgress} range={[start, start + 0.25]} />
          );
        })}
      </span>
    </h2>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  dark = false,
  className = '',
}: {
  index: string;
  eyebrow: string;
  title: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-4 mb-7">
        <span className="font-mono text-xs tracking-widest text-turmeric-500">{index}</span>
        <span className={`h-px w-14 ${dark ? 'bg-white/30' : 'bg-black/25'}`} />
        <p className={`eyebrow ${dark ? '!text-turmeric-400' : ''}`}>{eyebrow}</p>
      </div>
      <ScrollFill
        text={title}
        className={`font-display text-5xl sm:text-6xl lg:text-[5.25rem] leading-[0.98] ${
          dark ? 'text-white' : 'text-ink-900'
        }`}
      />
    </div>
  );
}

/** Image with a clip-path reveal and scroll parallax. Parent controls size via className. */
export function ParallaxImage({
  src,
  alt,
  className = '',
  strength = 9,
  unoptimized = true,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  unoptimized?: boolean;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);
  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden bg-neutral-200 ${className}`}
      initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        style={reduce ? undefined : { y, top: `-${strength + 1}%`, bottom: `-${strength + 1}%` }}
        className="absolute inset-x-0 inset-y-0"
      >
        <Image src={src} alt={alt} fill unoptimized={unoptimized} priority={priority} className="object-cover" />
      </motion.div>
    </motion.div>
  );
}

/** Giant type band that slides sideways as the page scrolls. */
export function ScrollMarquee({
  items,
  dark = false,
  reverse = false,
}: {
  items: string[];
  dark?: boolean;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], reverse ? ['-35%', '0%'] : ['0%', '-35%']);
  const row = [...items, ...items, ...items];
  return (
    <div ref={ref} className="overflow-hidden select-none" aria-hidden="true">
      <motion.div style={reduce ? undefined : { x }} className="flex w-max items-center whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`font-display text-[15vw] md:text-[9vw] leading-none px-[2vw] ${
                i % 2 === 0
                  ? dark
                    ? 'text-white'
                    : 'text-ink-900'
                  : dark
                    ? 'text-transparent [-webkit-text-stroke:2px_#fff]'
                    : 'text-transparent [-webkit-text-stroke:2px_#111]'
              }`}
            >
              {t}
            </span>
            <span className="text-turmeric-500 text-[6vw] md:text-[3vw]">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Row({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.92', 'start 0.55'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [48, 0]);
  return (
    <motion.div ref={ref} style={reduce ? undefined : { opacity, x }} className={className}>
      {children}
    </motion.div>
  );
}
