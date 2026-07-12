'use client';

import { certifications } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  // Duplicate the array to create a seamless infinite scrolling effect
  const duplicatedCerts = [...certifications, ...certifications, ...certifications];

  return (
    <div className="bg-field-900 border-y border-field-700 py-3 overflow-hidden flex items-center">
      <div className="flex w-max animate-drift">
        {duplicatedCerts.map((cert, index) => (
          <div key={`${cert.name}-${index}`} className="flex items-center gap-4 px-10">
            <div className="relative w-24 h-12 shrink-0 bg-white rounded-md flex items-center justify-center overflow-hidden px-1">
              <img src={cert.logo} alt="" className="object-contain w-full h-full" style={{ transform: `scale(${cert.scale || 1})` }} />
            </div>
            <span className="text-base font-semibold text-white/95 whitespace-nowrap tracking-wide">{cert.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
