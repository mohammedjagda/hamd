import type { Ref, ReactNode } from 'react';
import styles from './ServiceStrip.module.css';

const svgProps = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const RiceIcon = () => (
  <svg {...svgProps}>
    <path d="M24 44V14" />
    <path d="M24 14c-3-2-4-5-3-8 3 1 4 4 3 8Z" />
    <path d="M24 14c3-2 4-5 3-8-3 1-4 4-3 8Z" />
    <path d="M24 24c-4 0-8-3-8-8 5 0 8 3 8 8Z" />
    <path d="M24 24c4 0 8-3 8-8-5 0-8 3-8 8Z" />
    <path d="M24 34c-4 0-8-3-8-8 5 0 8 3 8 8Z" />
    <path d="M24 34c4 0 8-3 8-8-5 0-8 3-8 8Z" />
  </svg>
);

const SpiceIcon = () => (
  <svg {...svgProps}>
    <path d="M8 22h32c0 9-6 16-16 16S8 31 8 22Z" />
    <path d="M16 42h16" />
    <path d="M28 20 38 5" />
    <path d="M35 4l5 3" />
    <circle cx="17" cy="15" r="1.4" />
    <circle cx="23" cy="12" r="1.4" />
    <circle cx="14" cy="10" r="1.4" />
  </svg>
);

const OnionIcon = () => (
  <svg {...svgProps}>
    <path d="M24 6c1 4 1 7 0 10" />
    <path d="M24 16c-11 3-16 10-16 17 0 6 7 10 16 10s16-4 16-10c0-7-5-14-16-17Z" />
    <path d="M24 16c-6 4-8 11-8 27" />
    <path d="M24 16c6 4 8 11 8 27" />
    <path d="M22 44l-1 3M26 44l1 3" />
  </svg>
);

const InspectIcon = () => (
  <svg {...svgProps}>
    <path d="M28 5H11v38h22V10Z" />
    <path d="M28 5v5h5" />
    <path d="M16 17h8M16 23h12M16 29h6" />
    <circle cx="33" cy="34" r="6" />
    <path d="m38 39 5 5" />
    <path d="m30.5 34 2 2 3-3.5" />
  </svg>
);

const GlobeIcon = () => (
  <svg {...svgProps}>
    <circle cx="24" cy="24" r="18" />
    <path d="M6 24h36" />
    <path d="M24 6c-7 5-7 31 0 36M24 6c7 5 7 31 0 36" />
    <rect x="16" y="17" width="16" height="9" rx="1" fill="#101010" />
    <path d="M20 17v9M24 17v9M28 17v9" />
  </svg>
);

const cards: { title: [string, string]; body: string; icon: ReactNode }[] = [
  {
    title: ['RICE', 'EXPORTS'],
    body: 'Export-grade Indian rice, including 1121 Basmati, Sona Masoori, IR64, and custom raw or steam varieties. Packaging and specifications tailored to buyer requirements.',
    icon: <RiceIcon />,
  },
  {
    title: ['SPICES', 'EXPORTS'],
    body: 'Turmeric, red chilli, black pepper, cardamom, cloves, coriander, fenugreek, and custom blends sourced and prepared for international buyers.',
    icon: <SpiceIcon />,
  },
  {
    title: ['FRESH ONION', 'EXPORTS'],
    body: 'Fresh red and pink onion with size grading, suitable packaging, and export preparation designed around destination requirements.',
    icon: <OnionIcon />,
  },
  {
    title: ['QUALITY &', 'COMPLIANCE'],
    body: 'Product grading, moisture testing, sample approval, export packaging, and supporting documentation prepared for destination-market requirements.',
    icon: <InspectIcon />,
  },
  {
    title: ['GLOBAL', 'LOGISTICS'],
    body: 'Coordinated container loading, port handling, ocean freight, and export documentation connecting Indian suppliers with international buyers.',
    icon: <GlobeIcon />,
  },
];

export default function ServiceStrip({ ref }: { ref?: Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className={styles.strip} aria-label="HAMD export services">
      <div className={styles.lead}>
        <h2 className={styles.headline}>
          <span>EVERYTHING YOUR</span>
          <span>EXPORT NEEDS.</span>
          <span className={styles.accent}>FROM ORIGIN TO PORT.</span>
        </h2>
        <div className={styles.copy}>
          <p>
            From Indian farms and mills to international markets, we source, inspect, package, and
            ship export-grade agricultural products with consistency at every stage.
          </p>
          <p>
            One coordinated export process connects sourcing, quality control, documentation, and
            freight handling from origin to destination.
          </p>
        </div>
      </div>

      {cards.map((c, i) => (
        <article key={c.title.join(' ')} className={styles.card} data-card data-first={i === 0 || undefined}>
          <div className={styles.icon}>{c.icon}</div>
          <h3 className={styles.title}>
            <span>{c.title[0]}</span>
            <span>{c.title[1]}</span>
          </h3>
          <p className={styles.body}>{c.body}</p>
        </article>
      ))}
    </div>
  );
}
