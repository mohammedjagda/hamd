'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { SectionHeading } from './ui/motion';

const gallery = [
  { src: '/images/GoldenRicePaddyFileds.jpg', alt: 'Golden rice paddy field' },
  { src: '/images/AssortedWholeSpices.jpg', alt: 'Assorted whole spices' },
  { src: '/images/OnionHarvest.jpg', alt: 'Fresh red onion harvest' },
  { src: 'https://images.unsplash.com/photo-1605732562742-3023a888e56e?w=700&h=900&fit=crop', alt: 'Container yard at port' },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&h=500&fit=crop', alt: 'Warehouse storage' },
  { src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=700&h=500&fit=crop', alt: 'Shipping containers being loaded' },
  { src: '/images/LushGreenRiceFields.jpg', alt: 'Lush green rice fields' },
  { src: '/images/TurmericRoots.jpg', alt: 'Turmeric powder and roots' },
];

function Rail({ items, from, to, progress }: { items: typeof gallery; from: string; to: string; progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const reduce = useReducedMotion();
  const x = useTransform(progress, [0, 1], [from, to]);
  return (
    <motion.div style={reduce ? undefined : { x }} className="flex w-max gap-4 md:gap-6 will-change-transform">
      {items.map((g) => (
        <figure key={g.src} className="group relative w-[70vw] sm:w-[40vw] lg:w-[27vw] aspect-[4/3] overflow-hidden bg-neutral-800">
          <Image src={g.src} alt={g.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-sm font-medium text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            {g.alt}
          </figcaption>
        </figure>
      ))}
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section id="gallery" ref={ref} className="py-28 md:py-40 bg-field-900 text-white overflow-hidden">
      <div className="container-wide">
        <SectionHeading index="09" eyebrow="Gallery" title="From the field to the freight yard." dark className="max-w-4xl" />
        <p className="mt-8 text-white/65 max-w-lg text-lg">
          A glimpse into our sourcing, processing and shipping operations across India.
        </p>
      </div>

      <div className="mt-16 space-y-4 md:space-y-6">
        <Rail items={gallery.slice(0, 4)} from="4%" to="-32%" progress={scrollYProgress} />
        <Rail items={gallery.slice(4)} from="-32%" to="4%" progress={scrollYProgress} />
      </div>
    </section>
  );
}
