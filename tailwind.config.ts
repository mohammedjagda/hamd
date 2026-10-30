import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Monochrome + cobalt palette shared with the freight hero.
        // Token names are kept from the earlier theme so existing components re-theme in place.
        harvest: {
          50: '#FFFFFF',   // page background
          100: '#F4F4F4',  // light grey section
          200: '#E5E5E5',
        },
        field: {
          400: '#5C5C5C',
          600: '#111111',  // primary ink / buttons
          700: '#111111',  // headings
          900: '#101010',  // near-black bands (matches hero ground)
        },
        turmeric: {
          400: '#7C9BFF',  // light cobalt, for use on dark backgrounds
          500: '#2F63FF',  // cobalt accent
          600: '#2F63FF',
        },
        ink: {
          700: '#333333',
          900: '#111111',
        },
      },
      fontFamily: {
        display: ['var(--font-anton)', 'Impact', 'sans-serif'],
        body: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(0, 0, 0, 0.18)',
        card: '0 12px 40px -12px rgba(0, 0, 0, 0.12)',
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
