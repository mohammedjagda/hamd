'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import StatCounter from './StatCounter';
import { countries } from '@/lib/data';
import { ArrowRight, PlaneTakeoff, Ship } from 'lucide-react';

// Approximate positions (percent of container) for a simplified world silhouette.
const markers = [
  { name: 'UAE', top: '46%', left: '61%' },
  { name: 'Saudi Arabia', top: '47%', left: '57%' },
  { name: 'Oman', top: '49%', left: '63%' },
  { name: 'Kuwait', top: '43%', left: '59%' },
  { name: 'Qatar', top: '46%', left: '60%' },
  { name: 'Sri Lanka', top: '58%', left: '68%' },
  { name: 'Malaysia', top: '60%', left: '76%' },
  { name: 'Singapore', top: '62%', left: '76%' },
  { name: 'Indonesia', top: '64%', left: '80%' },
  { name: 'Vietnam', top: '54%', left: '78%' },
];

export default function GlobalPresence() {
  return (
    <section id="global-markets" className="py-28 bg-field-900 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-field-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-turmeric-500/10 blur-3xl" />

      <div className="container-wide relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">Global Markets</p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
            Ten nations, one trusted source.
          </h2>
          <p className="mt-4 text-white/60 max-w-xl leading-relaxed">
            From the ports of Mumbai to the markets of the Gulf, Southeast Asia and beyond — we deliver
            export-grade produce with full documentation to every destination.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-5 gap-10 items-center">
          <Reveal delay={0.1} className="lg:col-span-3 relative">
            <div className="relative aspect-square md:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/images/aigenerated_indian_farm.png" 
                alt="Indian Farm Source" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-field-900/95 via-field-900/50 to-transparent" />
              
              <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-12 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-turmeric-400 font-bold tracking-widest2 uppercase text-xs">
                  <PlaneTakeoff size={16} /> Origin
                </div>
                <div className="flex items-center gap-5 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-xl">
                  <div className="w-16 h-11 relative rounded shadow-sm overflow-hidden border border-white/10">
                    <img src="https://flagcdn.com/w80/in.png" alt="India Flag" className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-white font-display text-3xl">India</h3>
                    <p className="text-white/75 text-sm mt-1">Direct from contracted farms</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center w-14 h-14 bg-turmeric-500 rounded-full border-[6px] border-field-900 z-10 text-field-900 hidden lg:flex shadow-xl">
               <ArrowRight size={24} strokeWidth={3} />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-2 pl-0 lg:pl-6">
            <div className="flex items-center gap-2 text-white/50 font-bold tracking-widest uppercase text-xs mb-6">
              <Ship size={16} /> To Destinations
            </div>
            <div className="grid grid-cols-2 gap-3">
              {countries.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 hover:bg-white/10 hover:border-turmeric-500/40 transition-all duration-300 group cursor-default"
                >
                  <Image
                    src={c.flag}
                    alt={`${c.name} flag`}
                    width={28}
                    height={20}
                    className="rounded-sm shadow-sm object-cover shrink-0"
                    unoptimized
                  />
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors font-medium">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 text-center sm:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-turmeric-500/20 bg-turmeric-500/5 text-turmeric-400 text-xs font-bold tracking-widest uppercase shadow-sm">
                + And Worldwide Without Limitations
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          <StatCounter value={10} suffix="+" label="Countries" light />
          <StatCounter value={500} suffix="+" label="Shipments" light />
          <StatCounter value={100} suffix="+" label="Customers" light />
          <StatCounter value={24} suffix="/7" label="Support" light />
        </div>
      </div>
    </section>
  );
}
