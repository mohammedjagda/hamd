import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Signature palette — derived from an export house's working materials:
        // sun-dried turmeric, jute sacking, ledger ink, and monsoon-field green.
        harvest: {
          50: '#FBF7EE',   // pale husk — page background
          100: '#F4EDDC',  // raw jute
          200: '#E8DCC0',
        },
        field: {
          400: '#3E6B52',
          600: '#1F4536',  // deep monsoon green — primary
          700: '#163227',
          900: '#0D1F19',  // near-black ledger green — dark mode base
        },
        turmeric: {
          400: '#E4B15C',
          500: '#CC9A47',  // gold accent — sparingly
          600: '#A87C33',
        },
        ink: {
          700: '#2B2822',
          900: '#1A1814',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(13, 31, 25, 0.25)',
        card: '0 12px 40px -12px rgba(13, 31, 25, 0.18)',
      },
      backgroundImage: {
        'route-line': 'linear-gradient(90deg, transparent, currentColor, transparent)',
      },
      animation: {
        'reveal-up': 'revealUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'drift': 'drift 22s linear infinite',
        'pulse-slow': 'pulseSlow 2.8s ease-in-out infinite',
      },
      keyframes: {
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.25)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
