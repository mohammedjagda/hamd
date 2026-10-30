'use client';

import StatCounter from './StatCounter';
import { stats } from '@/lib/data';

export default function HeroStats() {
  return (
    <section aria-label="HAMD at a glance" className="bg-[#101010] border-t border-white/10 py-10">
      <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} light />
        ))}
      </div>
    </section>
  );
}
