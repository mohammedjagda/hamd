import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const links = {
  Company: ['About', 'Why Choose Us', 'Quality', 'Gallery'],
  Products: ['Rice', 'Spices', 'Fresh Onion'],
  Markets: ['UAE', 'Saudi Arabia', 'Malaysia', 'Vietnam'],
};

export default function Footer() {
  return (
    <footer className="bg-field-900 text-white/70 pt-20 pb-8">
      <div className="container-wide grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="HAMD Trading & Exports" width={56} height={56} className="rounded-full drop-shadow-lg" />
            <div className="flex flex-col">
              <span className="font-display text-white text-lg">HAMD</span>
              <span className="text-xs tracking-widest uppercase text-turmeric-400">Trading &amp; Exports</span>
            </div>
          </div>
          <p className="text-sm mt-5 max-w-xs leading-relaxed">
            Connecting Indian farms to global markets — rice, spices and fresh onion, export-grade
            from origin to port.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-turmeric-500 hover:text-field-900 transition-all duration-300 hover:-translate-y-0.5">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-white font-semibold text-sm">{title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-turmeric-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-wide mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs">
        <span>© {new Date().getFullYear()} HAMD Trading &amp; Exports. All rights reserved.</span>
        <span>Mumbai, Maharashtra, India</span>
      </div>
    </footer>
  );
}
