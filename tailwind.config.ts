import { heroui } from '@heroui/theme';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        navbar: '0px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      fontSize: {
        '3xl': ['28px', { lineHeight: '150%' }],
        '34': ['34px', { lineHeight: '150%' }],
        '4xl': ['40px', { lineHeight: '150%' }],
        '7xl': ['64px', { lineHeight: '112.5%' }],
      },
      colors: {
        border: {
          DEFAULT: 'hsl(var(--border))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        surface: 'hsl(var(--surface))',
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsla(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          light: 'hsl(var(--success-light))',
          disabled: 'hsl(var(--success-disabled))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          light: 'hsl(var(--error-light))',
          disabled: 'hsl(var(--error-disabled))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          light: 'hsl(var(--warning-light))',
          disabled: 'hsl(var(--warning-disabled))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          light: 'hsl(var(--info-light))',
          disabled: 'hsl(var(--info-disabled))',
        },
        divider: 'hsl(var(--divider))',
        neutral: {
          '0': '#FFFFFF',
          '10': '#FCFCFC',
          '20': '#F4F4F4',
          '30': '#EFEFEF',
          '40': '#6F767E',
          '50': '#33383F',
          '60': '#272B30',
          '70': '#1A1D1F',
          '80': '#111315',
        },
        shades: {
          '0': '#9A9FA5',
          '10': '#6F767E',
          '20': '#6F767E66',
          '30': '#11131580',
        },
        main: {
          DEFAULT: '#2A85FF',
          green: '#83BF6E',
          red: '#FF6A55',
          purple: '#8E59FF',
        },
        secondary: {
          orange: '#FFBC99',
          purple: '#CABDFF',
          blue: '#B1E5FC',
          green: '#B5E4CA',
          yellow: '#FFD88D',
        },
        disabled: {
          grey: '#E6E6E6',
          green: '#D4F3CF',
          yellow: '#FFF0C6',
        },
      },
      backgroundImage: {
        gradientPrimary: 'linear-gradient(274deg, #D5FF80 0%, #19C1FF 50%, #6040BE 100%)',
        heroOverlay:
          'radial-gradient(ellipse 120% 80% at 70% 20%, rgba(251, 191, 36, 0.18) 0%, transparent 45%), radial-gradient(ellipse 90% 70% at 15% 85%, rgba(34, 211, 238, 0.12) 0%, transparent 50%), radial-gradient(25.39% 50.39% at 50% 50%, rgba(0, 9, 31, 0.72) 0%, rgba(15, 23, 42, 0.4) 100%)',
        partnerOverlay: 'linear-gradient(180deg, rgba(96, 64, 190, 0.00) 0%, #6040BE 100%)',
        smOverlay:
          'radial-gradient(141.42% 141.42% at 0% 0%, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%)',
        3: 'linear-gradient(180deg, rgba(96, 64, 190, 0.00) 0%, #6040BE 100%)',
        mask: 'linear-gradient(180deg, rgba(0, 9, 31, 0.00) 0%, #00091F 100%)',
        'tt-1':
          'linear-gradient(180deg, rgba(0, 240, 255, 0.00) 25%, rgba(0, 240, 255, 0.10) 100%), radial-gradient(141.42% 141.42% at 0% 0%, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%)',
        'tt-2':
          'linear-gradient(180deg, rgba(96, 64, 190, 0.00) 25%, rgba(96, 64, 190, 0.20) 100%), radial-gradient(141.42% 141.42% at 0% 0%, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%)',
        'tt-3':
          'linear-gradient(180deg, rgba(213, 255, 128, 0.00) 25%, rgba(213, 255, 128, 0.20) 100%), radial-gradient(141.42% 141.42% at 0% 0%, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%)',
        'tt-border-1': 'linear-gradient(180deg, rgba(0, 240, 255, 0.00) 0%, #00F0FF 100%)',
        'tt-border-2': 'linear-gradient(180deg, rgba(96, 64, 190, 0.00) 0%, #6040BE 100%)',
        'tt-border-3': 'linear-gradient(180deg, rgba(213, 255, 128, 0.00) 0%, #D5FF80 100%)',
        community:
          'radial-gradient(141.42% 141.42% at 0% 0%, rgba(250, 250, 250, 0.20) 0%, rgba(246, 246, 246, 0.00) 100%)',
        'community-border': 'linear-gradient(95deg, rgba(255, 255, 255, 0.50) 0.26%, rgba(255, 255, 255, 0.00) 100%)',
      },
      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
    },
  },
  plugins: [
    heroui(),
    require('tailwindcss-gradient-border'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.inset-center': {
          top: '50%',
          left: '50%',
          '@apply absolute -translate-x-1/2 -translate-y-1/2': {},
        },
        '.inset-y-center': {
          top: '50%',
          '@apply absolute -translate-y-1/2': {},
        },
        '.inset-x-center': {
          left: '50%',
          '@apply absolute -translate-x-1/2': {},
        },
        '.btn-primary': {
          background: '#91121C',
          color: '#fff',
        },
        '.btn-secondary': {
          background: '#D5FF80',
          color: '#000',
        },
        '.app-container': {
          maxWidth: '1440px',
          '@apply mx-auto px-6': {},
        },
      });
    }),
  ],
};
export default config;
