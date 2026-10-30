'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '@/lib/nav';
import styles from './FreightHero.module.css';

export default function HeroNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <nav className={styles.navInner} aria-label="Primary">
        <a href="#" className={styles.brand}>
          <Image
            src="/images/logo.png"
            alt=""
            width={56}
            height={56}
            priority
            className={styles.logo}
          />
          <span className={styles.brandText}>
            <span className={styles.brandName}>HAMD</span>
            <span className={styles.brandSub}>Trading &amp; Exports</span>
          </span>
          <span className="sr-only">HAMD Trading &amp; Exports home</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.quote}>
          Get Quote <ArrowUpRight size={16} aria-hidden />
        </a>

        <button
          type="button"
          className={styles.menuBtn}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="hero-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <ul id="hero-menu" className={styles.menu}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
