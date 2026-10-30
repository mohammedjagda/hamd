/**
 * Scroll-driven freight hero controller.
 * All scroll maths lives here; React only provides the elements.
 * The truck, container and lifting machinery move solely through the scrubbed video.
 */

export const HANDLING_SCREENS = 2.4; // A
const VIDEO_W = 1920;
const VIDEO_H = 1080;
const FRAME = 1 / 48;
const SEEK_EPS = 1 / 60;
const EASE = 0.2;
const REVEAL_AT = 0.94;
/** Final-frame ground band edge as a fraction of the video height (measured from the clip). */
const GROUND_END = 484 / 1080;
const REC_DURATION = 11;

export interface HeroElements {
  track: HTMLElement;
  scene: HTMLElement;
  video: HTMLVideoElement;
  ground: HTMLElement;
  strip: HTMLElement;
  letters: HTMLElement;
  readout: HTMLElement;
  intro: HTMLElement;
}

declare global {
  interface Window {
    __recTime?: (video: HTMLVideoElement, t: number) => number;
  }
}

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));

interface Metrics {
  vw: number;
  vh: number;
  stripW: number;
  lettersW: number;
  B: number;
  cardLefts: number[];
}

export function createFreightAnimation(
  els: HeroElements,
  options: { recorder: boolean }
): () => void {
  const { track, scene, video, ground, strip, letters, readout, intro } = els;
  const cards = Array.from(strip.querySelectorAll<HTMLElement>('[data-card]'));

  const portraitQuery = window.matchMedia('(max-width: 767px), (max-aspect-ratio: 1/1)');
  const smallScreenQuery = window.matchMedia('(max-width: 900px)');

  let m: Metrics = { vw: 1, vh: 1, stripW: 0, lettersW: 0, B: 1, cardLefts: [] };
  let needsMeasure = true;
  let rafId = 0;
  let destroyed = false;

  // video state
  let smooth = 0;
  let smoothInit = false;
  let duration = 0;
  let currentSrc = '';

  // scroll / readout state
  let lastY = 0;
  let lastT = 0;
  let speed = 0;
  let shownSpeed = '';
  let revealed = false;
  let introState = -1;
  const cardP: number[] = [];

  // recorder state
  let recActive = false;
  let recAnim: Animation | null = null;
  let recProbe: HTMLElement | null = null;

  const schedule = () => {
    if (!rafId && !destroyed) rafId = requestAnimationFrame(frame);
  };
  const requestMeasure = () => {
    needsMeasure = true;
    schedule();
  };

  /* ---------- source selection ---------- */
  const pickSource = () => {
    const url = smallScreenQuery.matches ? '/hero/freight-720.mp4' : '/hero/freight-1080.mp4';
    if (url === currentSrc) return;
    const resumeAt = video.currentTime;
    currentSrc = url;
    duration = 0;
    video.src = url;
    video.load();
    if (resumeAt > 0) {
      video.addEventListener(
        'loadedmetadata',
        () => {
          video.currentTime = Math.min(resumeAt, Math.max(0, video.duration - FRAME));
        },
        { once: true }
      );
    }
  };

  const onMeta = () => {
    duration = Number.isFinite(video.duration) ? video.duration : 0;
    schedule();
  };
  const onError = () => {
    duration = 0; // poster stays visible as the fallback
  };

  /* ---------- measuring (batched reads, then writes) ---------- */
  const measure = () => {
    needsMeasure = false;
    const vw = document.documentElement.clientWidth;
    const vh = scene.offsetHeight;
    const portrait = portraitQuery.matches;
    const u = portrait ? Math.min(vw / 430, 1.4) : Math.min(vw / 1440, vh / 960);

    scene.style.setProperty('--u', `${u}px`);

    let w: number, h: number, left: number, top: number;
    if (portrait) {
      w = 1.55 * vw;
      h = (w * VIDEO_H) / VIDEO_W;
      left = vw / 2 - 0.4 * w;
      top = 0.36 * vh - GROUND_END * h;
    } else {
      const s = Math.max(vw / VIDEO_W, vh / VIDEO_H);
      w = VIDEO_W * s;
      h = VIDEO_H * s;
      left = (vw - w) / 2;
      top = (vh - h) / 2;
    }
    const groundY = top + GROUND_END * h;
    const stripTop = groundY + (portrait ? 44 : 56) * u;

    video.style.left = `${left}px`;
    video.style.top = `${top}px`;
    video.style.width = `${w}px`;
    video.style.height = `${h}px`;
    ground.style.top = `${Math.max(0, top + h - 1)}px`;
    scene.style.setProperty('--gy', `${groundY}px`);
    strip.style.top = `${stripTop}px`;

    // layout reads after writes of --u / --gy
    const stripW = strip.offsetWidth;
    const lettersW = letters.offsetWidth;
    const cardLefts = cards.map((c) => c.offsetLeft);
    const B = ((stripW + 0.45 * vw) / vw) * 1.1;
    track.style.height = `${(1 + HANDLING_SCREENS + B) * vh}px`;

    m = { vw, vh, stripW, lettersW, B, cardLefts };
  };

  /* ---------- scroll-derived scene state ---------- */
  const applyScene = (y: number) => {
    const { vw, vh, stripW, lettersW, B, cardLefts } = m;
    const q = clamp(y / (HANDLING_SCREENS * vh));
    const r = clamp((y - HANDLING_SCREENS * vh) / (B * vh));

    const stripX = vw - r * (stripW + 0.45 * vw);
    strip.style.transform = `translate3d(${stripX}px,0,0)`;
    letters.style.transform = `translate3d(${vw - r * (lettersW + vw)}px,var(--ly,-100%),0)`;

    for (let i = 0; i < cards.length; i++) {
      const p = clamp((vw * 0.92 - (stripX + cardLefts[i])) / (vw * 0.4));
      if (Math.abs(p - (cardP[i] ?? -1)) > 0.002) {
        cardP[i] = p;
        cards[i].style.setProperty('--p', p.toFixed(3));
      }
    }

    const on = q >= REVEAL_AT;
    if (on !== revealed) {
      revealed = on;
      scene.toggleAttribute('data-settled', on);
    }

    const iv = clamp(1 - q / 0.22);
    if (Math.abs(iv - introState) > 0.004) {
      introState = iv;
      intro.style.opacity = iv.toFixed(3);
      intro.style.transform = `translate3d(0,${(1 - iv) * -24}px,0)`;
      intro.style.visibility = iv < 0.02 ? 'hidden' : 'visible';
    }
    return q;
  };

  const showSpeed = (value: number) => {
    const text = `${String(Math.min(99, Math.round(value))).padStart(2, '0')} KM/H`;
    if (text !== shownSpeed) {
      shownSpeed = text;
      readout.textContent = text;
    }
  };

  /* ---------- the single rAF loop ---------- */
  function frame(now: number) {
    rafId = 0;
    if (destroyed || recActive) return;
    if (needsMeasure) measure();

    const y = window.scrollY;
    const q = applyScene(y);

    const dt = now - lastT;
    if (lastT && dt > 0) {
      const raw = (Math.abs(y - lastY) / dt) * 32;
      speed += (raw - speed) * 0.2;
      if (speed < 0.05) speed = 0;
    }
    lastY = y;
    lastT = now;
    showSpeed(speed);

    let settled = true;
    if (duration > 0 && video.readyState >= 1) {
      const target = q * (duration - FRAME);
      if (!smoothInit) {
        smooth = target;
        smoothInit = true;
      } else {
        smooth += (target - smooth) * EASE;
        if (Math.abs(target - smooth) < 1e-3) smooth = target;
      }
      if (!video.seeking && Math.abs(smooth - video.currentTime) > SEEK_EPS) {
        video.currentTime = smooth;
      }
      settled = smooth === target && !video.seeking;
    }

    if (!settled || speed > 0 || needsMeasure) {
      schedule();
    } else {
      lastT = 0; // avoid a huge dt on the next wake-up
    }
  }

  /* ---------- recorder mode ---------- */
  const installRecorder = () => {
    recProbe = document.createElement('div');
    recProbe.setAttribute('aria-hidden', 'true');
    recProbe.style.cssText = 'position:absolute;width:0;height:0;opacity:0;pointer-events:none';
    scene.appendChild(recProbe);
    recAnim = recProbe.animate(
      [
        { opacity: 0.04, offset: 0 },
        { opacity: 0.04, offset: 1 / REC_DURATION, easing: 'cubic-bezier(0.4, 0.05, 0.55, 0.95)' },
        { opacity: 0.96, offset: 10 / REC_DURATION },
        { opacity: 0.96, offset: 1 },
      ],
      { duration: REC_DURATION * 1000, fill: 'both' }
    );
    recAnim.pause();

    const progressAt = (t: number) => {
      recAnim!.currentTime = clamp(t, 0, REC_DURATION) * 1000;
      return parseFloat(getComputedStyle(recProbe!).opacity);
    };

    window.__recTime = (v, t) => {
      recActive = true;
      if (needsMeasure) measure();
      const range = (HANDLING_SCREENS + m.B) * m.vh;
      const y = progressAt(t) * range;
      const yPrev = progressAt(t - 1 / 30) * range;
      const q = applyScene(y);
      const dur = Number.isFinite(v.duration) && v.duration > 0 ? v.duration : duration;
      const clip = dur > 0 ? q * (dur - FRAME) : 0;
      if (dur > 0 && v.readyState >= 1) v.currentTime = clip;
      showSpeed((Math.abs(y - yPrev) / (1000 / 30)) * 32);
      return clip;
    };
  };

  /* ---------- wiring ---------- */
  const onScroll = () => schedule();
  const onResize = () => requestMeasure();
  const onSourceChange = () => {
    pickSource();
    requestMeasure();
  };

  const ro = new ResizeObserver(requestMeasure);
  ro.observe(scene);
  ro.observe(strip);
  ro.observe(letters);

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  window.visualViewport?.addEventListener('resize', onResize);
  portraitQuery.addEventListener('change', onResize);
  smallScreenQuery.addEventListener('change', onSourceChange);
  video.addEventListener('loadedmetadata', onMeta);
  video.addEventListener('loadeddata', schedule);
  video.addEventListener('seeked', schedule);
  video.addEventListener('error', onError);
  document.fonts?.ready.then(requestMeasure);

  video.muted = true;
  video.pause();
  pickSource();
  if (video.readyState >= 1) onMeta();
  if (options.recorder) installRecorder();
  requestMeasure();

  return () => {
    destroyed = true;
    cancelAnimationFrame(rafId);
    ro.disconnect();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    window.visualViewport?.removeEventListener('resize', onResize);
    portraitQuery.removeEventListener('change', onResize);
    smallScreenQuery.removeEventListener('change', onSourceChange);
    video.removeEventListener('loadedmetadata', onMeta);
    video.removeEventListener('loadeddata', schedule);
    video.removeEventListener('seeked', schedule);
    video.removeEventListener('error', onError);
    if (window.__recTime) delete window.__recTime;
    recAnim?.cancel();
    recProbe?.remove();
    video.removeAttribute('src');
    video.load();
  };
}
