'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import { ParallaxImage, SectionHeading } from './ui/motion';
import { certifications } from '@/lib/data';

export default function Quality() {
  return (
    <section id="quality" className="py-28 md:py-40 bg-harvest-100">
      <div className="container-wide grid lg:grid-cols-12 gap-14 lg:gap-20">
        <div className="lg:col-span-6 lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            index="05"
            eyebrow="Quality & Compliance"
            title="Documentation buyers can clear customs with."
          />
          <Reveal>
            <p className="mt-8 text-lg text-ink-700 leading-relaxed max-w-xl">
              Every shipment carries moisture testing records, sample-approved specifications and the
              certificates destination markets expect — prepared before the container is booked, not
              after a customs query.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="group flex items-center gap-4 bg-white border-2 border-transparent hover:border-turmeric-500 p-3 transition-colors duration-300"
                >
                  <div className="relative w-24 h-14 shrink-0 bg-white overflow-hidden">
                    <Image src={c.logo} alt={`${c.name} Logo`} fill className="object-contain" style={{ transform: `scale(${c.scale || 1})` }} unoptimized />
                  </div>
                  <span className="text-sm text-ink-900 font-semibold leading-snug">{c.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6">
          <ParallaxImage src="/images/RicePackaging.jpg" alt="Premium rice export packaging" className="aspect-[3/4]" />
          <ParallaxImage src="/images/ExportSpicePackaging.jpg" alt="Export spice packaging standards" className="aspect-[3/4] mt-16" />
          <ParallaxImage src="/images/OnionPackaging.jpg" alt="Fresh onion sorting and packaging" className="aspect-[3/4]" />
          <ParallaxImage src="/images/Warehousing.jpg" alt="Modern warehousing facility" className="aspect-[3/4] mt-16" />
        </div>
      </div>
    </section>
  );
}
