'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function StatCounter({
  value,
  suffix = '',
  label,
  light = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-left">
      <div className={`font-display text-5xl md:text-7xl leading-none ${light ? 'text-white' : 'text-field-700'}`}>
        {count}
        <span className="text-turmeric-400">{suffix}</span>
      </div>
      <div className={`mt-1 text-xs uppercase tracking-widest2 ${light ? 'text-white/70' : 'text-ink-700/60'}`}>
        {label}
      </div>
    </div>
  );
}
