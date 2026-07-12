'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#global-markets', label: 'Global Markets' },
  { href: '#quality', label: 'Quality' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-harvest-50/90 backdrop-blur-md shadow-card py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-wide flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="HAMD Trading & Exports"
            width={scrolled ? 56 : 72}
            height={scrolled ? 56 : 72}
            className="rounded-full transition-all duration-500 drop-shadow-lg"
            priority
          />
          <div className="flex flex-col">
            <span className={`font-display text-xl tracking-wide transition-colors ${scrolled ? 'text-field-700' : 'text-white'}`}>
              HAMD
            </span>
            <span className={`text-xs tracking-widest uppercase transition-colors ${scrolled ? 'text-turmeric-600' : 'text-turmeric-400'}`}>
              Trading &amp; Exports
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled ? 'text-ink-700 hover:text-field-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-turmeric-500 text-field-900 text-sm font-semibold px-5 py-2.5 hover:bg-turmeric-400 transition-colors shadow-card"
        >
          Get Quote <ArrowUpRight size={16} />
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? 'text-field-700' : 'text-white'}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-harvest-50 border-t border-harvest-200 mt-4">
          <ul className="container-wide py-4 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-ink-700 font-medium">
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex w-fit items-center gap-1.5 rounded-full bg-turmeric-500 text-field-900 text-sm font-semibold px-5 py-2.5">
              Get Quote <ArrowUpRight size={16} />
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
