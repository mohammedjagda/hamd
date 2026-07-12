'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import { certifications } from '@/lib/data';
import { ShieldCheck } from 'lucide-react';

export default function Quality() {
  return (
    <section id="quality" className="py-28 bg-white">
      <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="eyebrow mb-4">Quality &amp; Compliance</p>
          <h2 className="font-display text-4xl md:text-5xl text-field-700 leading-tight">
            Documentation buyers can clear customs with.
          </h2>
          <p className="mt-6 text-ink-700/80 leading-relaxed max-w-lg">
            Every shipment carries moisture testing records, sample-approved specifications and the
            certificates destination markets expect — prepared before the container is booked, not
            after a customs query.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <div key={c.name} className="flex items-center gap-4 rounded-xl border border-harvest-200 p-4 hover:border-field-600/40 hover:bg-field-600/5 transition-all duration-300 bg-white">
                <div className="relative w-28 h-16 sm:w-32 sm:h-20 shrink-0 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-harvest-100 shadow-sm">
                  <Image src={c.logo} alt={`${c.name} Logo`} fill className="object-contain" style={{ transform: `scale(${c.scale || 1})` }} unoptimized />
                </div>
                <span className="text-base text-ink-700 font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-card group">
              <Image src="/images/RawSteamRice.jpg" alt="Quality inspection of rice grains" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-card mt-8 group">
              <Image src="/images/Coriander.jfif" alt="Export spice packaging" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-card -mt-8 group">
              <Image src="/images/CardamomCloves.jfif" alt="Cardamom and spice quality check" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-card group">
              <Image src="/images/RedChilli.jpg" alt="Red chilli quality grading" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
