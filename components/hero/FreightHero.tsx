'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import HeroNav from './HeroNav';
import ServiceStrip from './ServiceStrip';
import { createFreightAnimation } from './freight-animation';
import styles from './FreightHero.module.css';

const POSTER = '/hero/freight-poster.jpg';

export default function FreightHero() {
  const trackRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const groundRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const track = trackRef.current;
    const scene = sceneRef.current;
    const video = videoRef.current;
    const ground = groundRef.current;
    const strip = stripRef.current;
    const letters = lettersRef.current;
    const readout = readoutRef.current;
    const intro = introRef.current;
    if (!track || !scene || !video || !ground || !strip || !letters || !readout || !intro) return;

    const recorder = new URLSearchParams(window.location.search).get('rec') === '1';
    return createFreightAnimation(
      { track, scene, video, ground, strip, letters, readout, intro },
      { recorder }
    );
  }, []);

  return (
    <>
      <section ref={trackRef} id="freight-hero" className={styles.track} aria-label="HAMD Trading & Exports">
        <HeroNav />

        <div ref={sceneRef} className={styles.scene}>
          <div ref={groundRef} className={styles.ground} aria-hidden="true" />

          <video
            ref={videoRef}
            className={styles.video}
            poster={POSTER}
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            aria-label="A freight handler lifts a shipping container onto a semi-truck"
          />

          <div ref={lettersRef} className={styles.letters} aria-hidden="true">
            GLOBAL TRADE
          </div>

          <div ref={readoutRef} className={styles.readout} aria-hidden="true">
            00 KM/H
          </div>

          <a href="#products" className={styles.pill}>
            EXPLORE OUR EXPORTS
            <ArrowUpRight size={16} aria-hidden />
          </a>

          <div ref={introRef} className={styles.intro}>
            <p className={styles.eyebrow}>Est. Mumbai, India — Serving 10+ Countries</p>
            <h1 className={styles.h1}>
              Connecting Indian Farms to <span>Global Markets</span>
            </h1>
            <p className={styles.lede}>
              A premium exporter of Rice, Spices and Fresh Onion — sourced at origin, inspected at
              every stage, and shipped to buyers worldwide.
            </p>
            <div className={styles.ctas}>
              <a href="#products" className={styles.ctaPrimary}>
                Explore Products <ArrowUpRight size={16} aria-hidden />
              </a>
              <a href="#contact" className={styles.ctaGhost}>
                Request a Quote
              </a>
            </div>
          </div>

          <ServiceStrip ref={stripRef} />
        </div>
      </section>
      <div id="freight-hero-end" aria-hidden="true" style={{ height: 1, marginTop: -1 }} />
    </>
  );
}
