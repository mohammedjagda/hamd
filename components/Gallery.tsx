'use client';

import Image from 'next/image';
import Reveal from './Reveal';

const gallery = [
  { src: '/images/GoldenRicePaddyFileds.jpg', alt: 'Golden rice paddy field', tall: true },
  { src: '/images/AssortedWholeSpices.jpg', alt: 'Assorted whole spices' },
  { src: '/images/OnionHarvest.jpg', alt: 'Fresh red onion harvest' },
  { src: 'https://images.unsplash.com/photo-1605732562742-3023a888e56e?w=700&h=900&fit=crop', alt: 'Container yard at port', tall: true },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&h=500&fit=crop', alt: 'Warehouse storage' },
  { src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=700&h=500&fit=crop', alt: 'Shipping containers being loaded' },
  { src: '/images/LushGreenRiceFields.jpg', alt: 'Lush green rice fields', tall: true },
  { src: '/images/TurmericRoots.jpg', alt: 'Turmeric powder and roots' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-harvest-100">
      <div className="container-wide">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl text-field-700 leading-tight">
            From the field to the freight yard.
          </h2>
          <p className="mt-4 text-ink-700/60 max-w-lg">
            A glimpse into our sourcing, processing and shipping operations across India.
          </p>
        </Reveal>

        <div className="mt-12 columns-2 md:columns-4 gap-4 [column-fill:_balance]">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={Math.min(i * 0.05, 0.3)} className="mb-4 break-inside-avoid">
              <div className={`relative rounded-2xl overflow-hidden shadow-card group ${g.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                <Image src={g.src} alt={g.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-field-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-3 left-3 text-xs text-white/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {g.alt}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
