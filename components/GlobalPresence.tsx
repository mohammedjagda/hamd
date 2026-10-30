'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import StatCounter from './StatCounter';
import { ParallaxImage, ScrollMarquee, SectionHeading } from './ui/motion';
import { countries } from '@/lib/data';
import { ArrowRight, PlaneTakeoff, Ship } from 'lucide-react';

export default function GlobalPresence() {
  return (
    <section id="global-markets" className="pt-28 md:pt-40 bg-field-900 text-white overflow-hidden">
      <div className="container-wide">
        <SectionHeading
          index="06"
          eyebrow="Global Markets"
          title="Ten nations, one trusted source."
          dark
          className="max-w-4xl"
        />
        <Reveal>
          <p className="mt-8 text-white/65 max-w-xl leading-relaxed text-lg">
            From the ports of Mumbai to the markets of the Gulf, Southeast Asia and beyond — we deliver
            export-grade produce with full documentation to every destination.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <div className="lg:col-span-7 relative">
            <ParallaxImage
              src="/images/aigenerated_indian_farm.png"
              alt="Indian Farm Source"
              className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[520px]"
              strength={6}
              unoptimized={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute left-6 md:left-10 bottom-8 md:bottom-10 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-turmeric-400 font-bold tracking-widest2 uppercase text-xs">
                <PlaneTakeoff size={16} /> Origin
              </div>
              <div className="flex items-center gap-5 bg-black/60 backdrop-blur-md border border-white/20 p-5">
                <div className="w-16 h-11 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://flagcdn.com/w80/in.png" alt="India Flag" className="object-cover w-full h-full" />
                </div>
                <div>
                  <h3 className="font-display text-4xl leading-none">India</h3>
                  <p className="text-white/75 text-sm mt-1">Direct from contracted farms</p>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden lg:flex items-center justify-center w-14 h-14 bg-turmeric-500 rounded-full border-[6px] border-field-900 z-10 text-white">
              <ArrowRight size={24} strokeWidth={3} />
            </div>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex items-center gap-2 text-white/50 font-bold tracking-widest uppercase text-xs mb-6">
              <Ship size={16} /> To Destinations
            </div>
            <ul className="border-t border-white/20">
              {countries.map((c, i) => (
                <li
                  key={c.name}
                  className="group flex items-center gap-4 border-b border-white/20 py-3.5 pl-1 pr-3 hover:bg-turmeric-500 hover:pl-4 transition-all duration-300 cursor-default"
                >
                  <span className="font-mono text-xs text-white/40 group-hover:text-white/80 w-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Image src={c.flag} alt={`${c.name} flag`} width={28} height={20} className="object-cover shrink-0" unoptimized />
                  <span className="font-display text-2xl">{c.name}</span>
                </li>
              ))}
            </ul>
            <span className="mt-5 inline-flex items-center gap-2 px-4 py-2 border border-turmeric-400/50 text-turmeric-400 text-xs font-bold tracking-widest uppercase">
              + And Worldwide Without Limitations
            </span>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-10 border-t border-white/20 pt-12 pb-20">
          <StatCounter value={10} suffix="+" label="Countries" light />
          <StatCounter value={500} suffix="+" label="Shipments" light />
          <StatCounter value={100} suffix="+" label="Customers" light />
          <StatCounter value={24} suffix="/7" label="Support" light />
        </div>
      </div>

      <div className="border-t border-white/20 py-8">
        <ScrollMarquee dark reverse items={countries.map((c) => c.name.toUpperCase())} />
      </div>
    </section>
  );
}
